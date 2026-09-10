import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  /* =========================================================
     FORM
     ========================================================= */

  contactForm: FormGroup;


  /* =========================================================
     FORM STATE
     ========================================================= */

  submitted = false;

  isSubmitting = false;

  formError = '';

  formSuccess = '';


  /* =========================================================
     COURSE LIST
     ========================================================= */

  courses = [
    'Tally Essentials Comprehensive',
    'Tally Prime - ERP',
    'Tally Professional',
    'GST Simulation',
    'Office Automation',
    'Payroll & Income Tax',
    'Master Accountant Using Tally'
  ];


  /* =========================================================
     CONSTRUCTOR
     ========================================================= */

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {

    this.contactForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(
            '^[a-zA-Z][a-zA-Z .-]*$'
          )
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(100)
        ]
      ],

      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[0-9]{10}$'
          )
        ]
      ],

      course: [
        '',
        [
          Validators.required
        ]
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500)
        ]
      ]

    });

  }


  /* =========================================================
     FORM CONTROL GETTERS
     ========================================================= */

  get nameControl() {
    return this.contactForm.get('name')!;
  }


  get emailControl() {
    return this.contactForm.get('email')!;
  }


  get mobileControl() {
    return this.contactForm.get('mobile')!;
  }


  get courseControl() {
    return this.contactForm.get('course')!;
  }


  get messageControl() {
    return this.contactForm.get('message')!;
  }


  /* =========================================================
     SUBMIT
     ========================================================= */

  onSubmit(): void {

    /* -------------------------------------------------------
       RESET ALERTS
       ------------------------------------------------------- */

    this.formError = '';

    this.formSuccess = '';

    this.submitted = true;


    /* -------------------------------------------------------
       VALIDATE
       ------------------------------------------------------- */

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      this.formError =
        'Please correct the highlighted fields before submitting.';

      return;
    }


    /* -------------------------------------------------------
       PREVENT DUPLICATE SUBMISSIONS
       ------------------------------------------------------- */

    if (this.isSubmitting) {
      return;
    }


    /* -------------------------------------------------------
       START WAITING POPUP
       ------------------------------------------------------- */

    this.isSubmitting = true;


    /* -------------------------------------------------------
       API REQUEST
       ------------------------------------------------------- */

    this.api.contact(
      this.contactForm.value
    ).subscribe({

      /* =====================================================
         SUCCESS
         ===================================================== */

      next: () => {

        this.isSubmitting = false;

        this.formSuccess =
          'Your message has been sent successfully. Our team will contact you soon.';


        /* ---------------------------------------------------
           RESET FORM
           --------------------------------------------------- */

        this.contactForm.reset();

        this.submitted = false;

      },


      /* =====================================================
         ERROR
         ===================================================== */

      error: (err) => {

        console.error(
          'Contact form submission error:',
          err
        );

        this.isSubmitting = false;

        this.formError =
          'Unable to submit your message right now. Please try again.';

      }

    });

  }

}