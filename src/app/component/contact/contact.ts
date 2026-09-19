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
     PROGRAM CATEGORIES & COURSES
     ========================================================= */

  courseGroups = [

    /* =======================================================
       CATEGORY 01
       ======================================================= */

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

        'Inventory Management'

      ]
    },


    /* =======================================================
       CATEGORY 02
       ======================================================= */

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

        'Generative AI (GenAI)'

      ]
    },


    /* =======================================================
       CATEGORY 03
       ======================================================= */

   /* {
      category: 'Emerging Technology Programs',

      courses: [

        'Robotics',

        'IoT',

        'Drone Technology',

        'Generative AI (GenAI)'

      ]
    } */

  ];


  /* =========================================================
     AVAILABLE COURSES
     ========================================================= */

  availableCourses: string[] = [];


  /* =========================================================
     CONSTRUCTOR
     ========================================================= */

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {


    /* =======================================================
       CREATE FORM
       ======================================================= */

    this.contactForm = this.fb.group({


      /* -------------------------------------------------------
         NAME
         ------------------------------------------------------- */

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


      /* -------------------------------------------------------
         EMAIL
         ------------------------------------------------------- */

      email: [

        '',

        [

          Validators.required,

          Validators.email,

          Validators.maxLength(100)

        ]

      ],


      /* -------------------------------------------------------
         MOBILE
         ------------------------------------------------------- */

      mobile: [

        '',

        [

          Validators.required,

          Validators.pattern(
            '^[0-9]{10}$'
          )

        ]

      ],


      /* -------------------------------------------------------
         CATEGORY
         ------------------------------------------------------- */

      category: [

        '',

        [

          Validators.required

        ]

      ],


      /* -------------------------------------------------------
         COURSE
         ------------------------------------------------------- */

      course: [

        '',

        [

          Validators.required

        ]

      ],


      /* -------------------------------------------------------
         MESSAGE
         ------------------------------------------------------- */

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


  get categoryControl() {

    return this.contactForm.get('category')!;

  }


  get courseControl() {

    return this.contactForm.get('course')!;

  }


  get messageControl() {

    return this.contactForm.get('message')!;

  }


  /* =========================================================
     CATEGORY CHANGE
     ========================================================= */

  onCategoryChange(): void {


    /* -------------------------------------------------------
       GET SELECTED CATEGORY
       ------------------------------------------------------- */

    const selectedCategory =
      this.categoryControl.value;


    /* -------------------------------------------------------
       FIND CATEGORY
       ------------------------------------------------------- */

    const selectedGroup =
      this.courseGroups.find(
        group =>
          group.category === selectedCategory
      );


    /* -------------------------------------------------------
       LOAD COURSES
       ------------------------------------------------------- */

    this.availableCourses =
      selectedGroup?.courses ?? [];


    /* -------------------------------------------------------
       RESET COURSE
       ------------------------------------------------------- */

    this.courseControl.reset('');


    /* -------------------------------------------------------
       RESET COURSE TOUCH STATE
       ------------------------------------------------------- */

    this.courseControl.markAsUntouched();

    this.courseControl.markAsPristine();

  }


  /* =========================================================
     SUBMIT FORM
     ========================================================= */

  onSubmit(): void {


    /* -------------------------------------------------------
       RESET ALERTS
       ------------------------------------------------------- */

    this.formError = '';

    this.formSuccess = '';

    this.submitted = true;


    /* -------------------------------------------------------
       VALIDATE FORM
       ------------------------------------------------------- */

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();


      this.formError =
        'Please correct the highlighted fields before submitting.';


      return;

    }


    /* -------------------------------------------------------
       PREVENT DUPLICATE SUBMISSION
       ------------------------------------------------------- */

    if (this.isSubmitting) {

      return;

    }


    /* -------------------------------------------------------
       START WAITING
       ------------------------------------------------------- */

    this.isSubmitting = true;


    /* -------------------------------------------------------
       PREPARE FORM DATA
       ------------------------------------------------------- */

    const formData = {

      name:
        this.nameControl.value?.trim(),

      email:
        this.emailControl.value?.trim(),

      mobile:
        this.mobileControl.value?.trim(),

      category:
        this.categoryControl.value,

      course:
        this.courseControl.value,

      message:
        this.messageControl.value?.trim()

    };


    /* -------------------------------------------------------
       API REQUEST
       ------------------------------------------------------- */

    this.api.contact(formData).subscribe({


      /* =====================================================
         SUCCESS
         ===================================================== */

      next: () => {


        /* ---------------------------------------------------
           STOP LOADING
           --------------------------------------------------- */

        this.isSubmitting = false;


        /* ---------------------------------------------------
           SUCCESS MESSAGE
           --------------------------------------------------- */

        this.formSuccess =
          'Your message has been sent successfully. Our team will contact you soon.';


        /* ---------------------------------------------------
           RESET FORM
           --------------------------------------------------- */

        this.contactForm.reset();


        /* ---------------------------------------------------
           RESET COURSE LIST
           --------------------------------------------------- */

        this.availableCourses = [];


        /* ---------------------------------------------------
           RESET SUBMITTED STATE
           --------------------------------------------------- */

        this.submitted = false;

      },


      /* =====================================================
         ERROR
         ===================================================== */

      error: (err) => {


        /* ---------------------------------------------------
           CONSOLE ERROR
           --------------------------------------------------- */

        console.error(
          'Contact form submission error:',
          err
        );


        /* ---------------------------------------------------
           STOP LOADING
           --------------------------------------------------- */

        this.isSubmitting = false;


        /* ---------------------------------------------------
           ERROR MESSAGE
           --------------------------------------------------- */

        this.formError =
          'Unable to submit your message right now. Please try again.';

      }

    });

  }

}