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
     COURSE LIST
     ========================================================= */

  courses: string[] = [
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
         COURSE
         ------------------------------------------------------- */

      course: [
        '',
        [
          Validators.required
        ]
      ],


      /* -------------------------------------------------------
         COLLEGE / INSTITUTION
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
     FORM CONTROLS SHORTCUT
     ========================================================= */

  get f(): {
    [key: string]: AbstractControl
  } {

    return this.registerForm.controls;

  }


  /* =========================================================
     CHECK FIELD ERROR
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
     CHECK FIELD VALID
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
     PHONE INPUT
     ---------------------------------------------------------
     Allows only numeric characters
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
     SUBMIT FORM
     ========================================================= */

  onSubmit(): void {

    /* -------------------------------------------------------
       CLEAR PREVIOUS MESSAGES
       ------------------------------------------------------- */

    this.formError = '';

    this.formSuccess = '';

    this.submitted = true;


    /* -------------------------------------------------------
       CHECK FORM VALIDATION
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
       GET FORM DATA
       ------------------------------------------------------- */

    const formData = {
      name: this.registerForm.get('name')?.value?.trim(),
      phone: this.registerForm.get('phone')?.value?.trim(),
      email: this.registerForm.get('email')?.value?.trim(),
      course: this.registerForm.get('course')?.value,
      college: this.registerForm.get('college')?.value?.trim(),
      qualification:
        this.registerForm.get('qualification')?.value?.trim(),
      state: this.registerForm.get('state')?.value?.trim(),
      district: this.registerForm.get('district')?.value?.trim(),
      message: this.registerForm.get('message')?.value?.trim()
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


        /* ---------------------------------------------------
           STOP LOADING
           --------------------------------------------------- */

        this.isSubmitting = false;


        /* ---------------------------------------------------
           SUCCESS MESSAGE
           --------------------------------------------------- */

        this.formSuccess =
          'Registration submitted successfully! Our team will contact you soon.';


        /* ---------------------------------------------------
           RESET FORM
           --------------------------------------------------- */

        this.registerForm.reset();


        /* ---------------------------------------------------
           RESET SUBMITTED STATE
           --------------------------------------------------- */

        this.submitted = false;


        /* ---------------------------------------------------
           CLEAR SUCCESS MESSAGE
           --------------------------------------------------- */

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


        /* ---------------------------------------------------
           STOP LOADING
           --------------------------------------------------- */

        this.isSubmitting = false;


        /* ---------------------------------------------------
           ERROR MESSAGE
           --------------------------------------------------- */

        this.formError =
          'Unable to submit your registration right now. Please try again.';

      }

    });

  }

}