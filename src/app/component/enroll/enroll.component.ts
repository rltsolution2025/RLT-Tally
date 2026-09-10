import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css',
})
export class EnrollComponent implements OnInit {

  @Input() courseName: string = '';

  @Input() isModal: boolean = false;

  enrollForm: FormGroup;

  submitted = false;

  isSubmitting = false;

  formError = '';

  formSuccess = '';

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {

    this.enrollForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(
            '^[a-zA-Z][a-zA-Z .-]*$'
          ),
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

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
        ],
      ],

      message: [
        '',
        [
          Validators.maxLength(500),
        ],
      ],

      course: [
        '',
      ],

    });
  }


  /* =========================================================
     INIT
     ========================================================= */

  ngOnInit(): void {

    this.enrollForm.patchValue({
      course: this.courseName,
    });

  }


  /* =========================================================
     FORM CONTROLS
     ========================================================= */

  get nameControl() {
    return this.enrollForm.get('name')!;
  }

  get emailControl() {
    return this.enrollForm.get('email')!;
  }

  get phoneControl() {
    return this.enrollForm.get('phone')!;
  }

  get messageControl() {
    return this.enrollForm.get('message')!;
  }


  /* =========================================================
     SUBMIT FORM
     ========================================================= */

  submitForm(): void {

    this.submitted = true;

    this.formError = '';

    this.formSuccess = '';


    /* -------------------------------------------------------
       VALIDATION
       ------------------------------------------------------- */

    if (this.enrollForm.invalid) {

      this.enrollForm.markAllAsTouched();

      this.formError =
        'Please correct the highlighted fields before submitting.';

      return;
    }


    /* -------------------------------------------------------
       PREVENT MULTIPLE SUBMISSIONS
       ------------------------------------------------------- */

    if (this.isSubmitting) {
      return;
    }


    /* -------------------------------------------------------
       START LOADING
       ------------------------------------------------------- */

    this.isSubmitting = true;


    /* -------------------------------------------------------
       UPDATE COURSE NAME
       ------------------------------------------------------- */

    this.enrollForm.patchValue({
      course: this.courseName,
    });


    /* -------------------------------------------------------
       API SUBMISSION
       ------------------------------------------------------- */

    this.api.enroll(this.enrollForm.value).subscribe({

      /* =====================================================
         SUCCESS
         ===================================================== */

      next: () => {

        this.isSubmitting = false;

        this.formSuccess =
          'Enrollment submitted successfully! Our team will contact you soon.';


        /* ---------------------------------------------------
           RESET FORM
           --------------------------------------------------- */

        this.enrollForm.reset({

          name: '',

          email: '',

          phone: '',

          message: '',

          course: this.courseName,

        });


        this.submitted = false;

      },


      /* =====================================================
         ERROR
         ===================================================== */

      error: (error) => {

        console.error(
          'Enrollment error:',
          error
        );

        this.isSubmitting = false;

        this.formError =
          'Unable to submit your enrollment right now. Please try again.';

      },

    });

  }

}