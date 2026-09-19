import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-refer',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './refer.html',
  styleUrls: ['./refer.css']
})


export class Refer implements OnInit {

  /* =========================================================
     FORM
     ========================================================= */

  registerForm!: FormGroup;


  /* =========================================================
     FORM STATE
     ========================================================= */

  submitted = false;

  isSubmitting = false;

  formError = '';

  formSuccess = '';


  /* =========================================================
     CATEGORY / COURSE DATA
     ========================================================= */

  courseGroups = [

    {
      category: 'Software & IT Programs',

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


    {
      category: 'Tally & Accounting Programs',

      courses: [
        'Tally Essentials Comprehensive',
        'Tally Professional',
        'GST using TallyPrime',
        'GST Simulation',
        'Office Automation',
        'Payroll & Income Tax',
        'Master Accountant Using Tally',
        'Inventory Management',
        'TDL Essential'
      ]
    },


    /*{
      category: 'Emerging Technology Programs',

      courses: [
        'Robotics',
        'IoT',
        'Drone Technology',
        'Generative AI (GenAI)'
      ]
    }*/

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
  ) { }


  /* =========================================================
     INITIALIZE FORM
     ========================================================= */

  ngOnInit(): void {

    this.registerForm = this.fb.group({

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
         PHONE
         ------------------------------------------------------- */

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[6-9][0-9]{9}$'
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
         COLLEGE
         ------------------------------------------------------- */

      college: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ]
      ],


      /* -------------------------------------------------------
         QUALIFICATION
         ------------------------------------------------------- */

      qualification: [
        '',
        [
          Validators.maxLength(100)
        ]
      ],


      /* -------------------------------------------------------
         STATE
         ------------------------------------------------------- */

      state: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],


      /* -------------------------------------------------------
         DISTRICT
         ------------------------------------------------------- */

      district: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
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
     FORM CONTROLS
     ========================================================= */

  get f(): {
    [key: string]: AbstractControl
  } {

    return this.registerForm.controls;

  }


  /* =========================================================
     FIELD ERROR
     ========================================================= */

  showError(field: string): boolean {

    const control = this.f[field];

    if (!control) {
      return false;
    }

    return (
      (control.touched || this.submitted) &&
      control.invalid
    );

  }


  /* =========================================================
     FIELD VALID
     ========================================================= */

  isValid(field: string): boolean {

    const control = this.f[field];

    if (!control) {
      return false;
    }

    return (
      (control.touched || this.submitted) &&
      control.valid
    );

  }


  /* =========================================================
     CATEGORY CHANGE
     ========================================================= */

  onCategoryChange(): void {

    const selectedCategory =
      this.registerForm.get('category')?.value;


    /* Find selected category */
    const selectedGroup =
      this.courseGroups.find(
        group => group.category === selectedCategory
      );


    /* Load corresponding courses */
    this.availableCourses =
      selectedGroup?.courses ?? [];


    /* Reset course whenever category changes */
    this.registerForm
      .get('course')
      ?.reset('');


    /* Mark course as untouched */
    this.registerForm
      .get('course')
      ?.markAsUntouched();

  }


  /* =========================================================
     PHONE INPUT
     ========================================================= */

  allowOnlyNumbers(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (!input) {
      return;
    }


    const cleanedValue =
      input.value.replace(/[^0-9]/g, '');


    input.value = cleanedValue;


    this.f['phone'].setValue(
      cleanedValue,
      {
        emitEvent: false
      }
    );

  }


  /* =========================================================
     SUBMIT
     ========================================================= */

  onSubmit(): void {

    this.formError = '';

    this.formSuccess = '';

    this.submitted = true;


    /* -------------------------------------------------------
       VALIDATION
       ------------------------------------------------------- */

    if (this.registerForm.invalid) {

      this.registerForm.markAllAsTouched();

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
       START LOADING
       ------------------------------------------------------- */

    this.isSubmitting = true;


    /* -------------------------------------------------------
       FORM DATA
       ------------------------------------------------------- */

    const formData = {

      name:
        this.registerForm
          .get('name')
          ?.value
          ?.trim(),

      phone:
        this.registerForm
          .get('phone')
          ?.value
          ?.trim(),

      email:
        this.registerForm
          .get('email')
          ?.value
          ?.trim(),

      course:
        this.registerForm
          .get('course')
          ?.value,

      college:
        this.registerForm
          .get('college')
          ?.value
          ?.trim(),

      qualification:
        this.registerForm
          .get('qualification')
          ?.value
          ?.trim(),

      state:
        this.registerForm
          .get('state')
          ?.value
          ?.trim(),

      district:
        this.registerForm
          .get('district')
          ?.value
          ?.trim(),

      message:
        this.registerForm
          .get('message')
          ?.value
          ?.trim()

    };


    /* -------------------------------------------------------
       API REQUEST
       ------------------------------------------------------- */

    this.api.register(formData).subscribe({

      /* =====================================================
         SUCCESS
         ===================================================== */

      next: (response) => {

        console.log(
          'Registration successful:',
          response
        );


        this.isSubmitting = false;


        this.formSuccess =
          'Registration submitted successfully! Our team will contact you soon.';


        /* Reset form */
        this.registerForm.reset();


        /* Reset course list */
        this.availableCourses = [];


        this.submitted = false;


        /* Hide success message */
        setTimeout(() => {

          this.formSuccess = '';

        }, 4000);

      },


      /* =====================================================
         ERROR
         ===================================================== */

      error: (error) => {

        console.error(
          'Registration error:',
          error
        );


        this.isSubmitting = false;


        this.formError =
          'Unable to submit your registration right now. Please try again.';

      }

    });

  }

}