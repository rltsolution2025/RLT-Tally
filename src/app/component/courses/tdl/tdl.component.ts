import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { RouterLink } from '@angular/router';
import { EnrollComponent } from '../../enroll/enroll.component';

@Component({
  selector: 'app-tdl',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, EnrollComponent],
  templateUrl: './tdl.component.html',
  styleUrl: './tdl.component.css'
})
export class TDLComponent {
  enrollForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: [''],
      course: ['Tally Professional']
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.enrollForm.invalid) return;

    this.api.enroll(this.enrollForm.value).subscribe({
      next: () => {
        alert('✅ Enrollment Successful');
        this.enrollForm.reset({ course: 'Tally Professional' });
        this.submitted = false;
      },
      error: () => alert('❌ Error submitting form')
    });
  }

}
