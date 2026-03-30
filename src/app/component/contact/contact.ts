import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactForm: FormGroup;

  courses = [
    'Tally Essentials Comprehensive',
    'Tally Prime - ERP',
    'Tally Professional',
    'GST Simulation',
    'Office Automation',
    'Payroll & Income Tax',
    'Master Accountant Using Tally'
  ];

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      course: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.api.contact(this.contactForm.value).subscribe({
      next: () => {
        alert('✅ Contact form submitted successfully!');
        this.contactForm.reset();
      },
      error: (err) => {
        console.error('Contact form submission error:', err);
        alert('❌ Submission failed. Please try again.');
      }
    });
  }
}
