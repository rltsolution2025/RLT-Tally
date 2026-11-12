
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  // =========================================================
  // DISPLAY MODE
  // false = normal contact page
  // true  = popup containing only the contact form
  // =========================================================

  @Input() modalMode = false;

  // =========================================================
  // FORM
  // =========================================================

  contactForm: FormGroup;

  // =========================================================
  // FORM STATE
  // =========================================================

  submitted = false;
  isSubmitting = false;
  formError = '';
  formSuccess = '';

  // =========================================================
  // PROGRAM CATEGORIES AND COURSES
  // =========================================================

  courseGroups = [
    {
      category: 'Tally & Accounting Programs',
      courses: [
        'Tally Essentials Comprehensive',
        'GST using Tally Prime - ERP',
        'Tally Professional',
        'GST Simulation',
        'Office Automation',
        'Payroll & Income Tax',
        'Master Accountant Using Tally',
        'TDL Essential',
        'Inventory Management',
      ],
    },
    {
      category: 'IT & Emerging Technology Programs',
      courses: [
        'Python Full Stack Development',
        'Java Full Stack Development',
        '.NET Full Stack Development',
        'Cloud Computing & Database Management',
        'Data Science with AI',
        'AI with Machine Learning',
        'Digital Marketing & Business Development',
        'UI/UX Design & Development',
        'Power BI',
        'Networking & CCNA',
        'Robotics',
        'IoT',
        'Drone Technology',
        'Generative AI (GenAI)',
      ],
    },
  ];

  // =========================================================
  // AVAILABLE COURSES
  // =========================================================

  availableCourses: string[] = [];

  // =========================================================
  // CONSTRUCTOR AND FORM INITIALIZATION
  // =========================================================

  constructor(
    private readonly fb: FormBuilder,
    private readonly api: ApiService,
  ) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z][a-zA-Z .-]*$'),
        ],
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(100),
        ],
      ],

      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
        ],
      ],

      category: [
        '',
        [
          Validators.required,
        ],
      ],

      course: [
        '',
        [
          Validators.required,
        ],
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  // =========================================================
  // FORM CONTROL GETTERS
  // =========================================================

  get nameControl() {
    return this.contactForm.get('name')!;
  }

  get emailControl() {
    return this.contactForm.get('email')!;
  }

  get mobileControl() {
    return this.contactForm.get('mobile')!;
  }

  get categoryControl() {
    return this.contactForm.get('category')!;
  }

  get courseControl() {
    return this.contactForm.get('course')!;
  }

  get messageControl() {
    return this.contactForm.get('message')!;
  }

  // =========================================================
  // CATEGORY CHANGE
  // =========================================================

  onCategoryChange(): void {
    const selectedCategory = this.categoryControl.value;

    const selectedGroup = this.courseGroups.find(
      (group) => group.category === selectedCategory,
    );

    this.availableCourses = selectedGroup?.courses ?? [];

    // Reset the selected course when category changes.
    this.courseControl.reset('');

    this.courseControl.markAsUntouched();
    this.courseControl.markAsPristine();
  }

  // =========================================================
  // SUBMIT CONTACT FORM
  // =========================================================

  onSubmit(): void {
    // Prevent multiple submissions.
    if (this.isSubmitting) {
      return;
    }

    // Clear previous messages.
    this.formError = '';
    this.formSuccess = '';
    this.submitted = true;

    // Validate the form.
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();

      this.formError =
        'Please correct the highlighted fields before submitting.';

      return;
    }

    // Prepare form data.
    const formData = {
      name: this.nameControl.value?.trim(),
      email: this.emailControl.value?.trim(),
      mobile: this.mobileControl.value?.trim(),
      category: this.categoryControl.value,
      course: this.courseControl.value,
      message: this.messageControl.value?.trim(),
    };

    this.isSubmitting = true;

    // Submit through the existing API service.
    this.api.contact(formData).subscribe({
      next: () => {
        this.isSubmitting = false;

        this.formSuccess =
          'Your message has been sent successfully. Our team will contact you soon.';

        this.contactForm.reset();
        this.availableCourses = [];
        this.submitted = false;
      },

      error: (err) => {
        console.error(
          'Contact form submission error:',
          err,
        );

        this.isSubmitting = false;

        this.formError =
          'Unable to submit your message right now. Please try again.';
      },
    });
  }
}
