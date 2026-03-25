import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-master-accountant',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './master-accountant.html',
  styleUrl: './master-accountant.css',
})
export class MasterAccountant {
  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['']
    });
  }

  submitForm() {
    if (this.enrollForm.valid) {
      console.log(this.enrollForm.value);
      alert('Enrollment successful!');
      this.enrollForm.reset();
    }
    else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
