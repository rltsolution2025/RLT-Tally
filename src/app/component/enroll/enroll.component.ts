import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {
  @Input() courseName: string = '';
  enrollForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: [''],
      course: ['']
    });
  }

  ngOnInit() {
    this.enrollForm.patchValue({
      course: this.courseName
    });
  }

  submitForm() {

    if (this.enrollForm.invalid) return;

    this.api.enroll(this.enrollForm.value).subscribe({
      next: () => {
        alert('✅ Enrollment Successful');

        this.enrollForm.reset({
          course: this.courseName
        });
      }
    });
  }

}
