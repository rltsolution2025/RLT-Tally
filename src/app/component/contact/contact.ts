import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactForm: FormGroup;

  courses = [
    'Tally Essentials',
    'Tally Prime - ERP',
    'Tally Professional',
    'GST Simulation',
    'Office Automation',
    'Payroll & Income Tax',
    'Master Accountant'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      course: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Message Sent Successfully');
      this.contactForm.reset();
    }

  }
}
