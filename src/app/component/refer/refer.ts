import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-refer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './refer.html',
  styleUrls: ['./refer.css'],
})
export class Refer implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      college: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      qualification: [''],
      message: ['']
    });

  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  showError(field: string): boolean {
    return (this.f[field].touched || this.submitted) && this.f[field].invalid;
  }

  getClass(field: string) {
    return {
      'is-invalid': this.showError(field),
      'is-valid': (this.f[field].touched || this.submitted) && this.f[field].valid
    };
  }

  onSubmit(): void {

    this.submitted = true;

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.api.register(this.registerForm.value).subscribe({
      next: () => {
        alert('✅ Registration Successful!');
        this.registerForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        console.error('Registration error:', err);
        alert('❌ Registration failed. Please try again.');
      }
    });
  }
} 