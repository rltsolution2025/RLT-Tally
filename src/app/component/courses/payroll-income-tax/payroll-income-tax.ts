import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { EnrollComponent } from '../../enroll/enroll.component';

@Component({
  selector: 'app-payroll-income-tax',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    EnrollComponent
  ],
  templateUrl: './payroll-income-tax.html',
  styleUrl: './payroll-income-tax.css',
})
export class PayrollIncomeTax implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  // =====================================================
  // SEO DETAILS
  // =====================================================

  private readonly pageTitle =
    'Payroll & Income Tax Course with TallyPrime | RLT Edzaro';

  private readonly pageDescription =
    'Learn Payroll and Income Tax with TallyPrime at RLT Edzaro. Master employee records, salary processing, payroll calculations, deductions, payslips, income tax and payroll reports through practical training.';

  private readonly pageKeywords =
    'Payroll Course, Payroll Training, Payroll and Income Tax Course, Payroll Course with TallyPrime, Income Tax Course, Payroll Management Course, Salary Processing Course, TallyPrime Payroll Course, Payroll Training in Trichy, Income Tax Training in Trichy, Payroll Course in Trichy, TallyPrime Training in Trichy, Accounting Course in Trichy';

  // Replace with your actual production URL
  private readonly canonicalUrl =
    'https://www.rltedzaro.com/payroll-and-income-tax';


  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private metaService: Meta
  ) {

    this.enrollForm = this.fb.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ],

      message: ['']

    });

  }


  // =====================================================
  // INITIALIZATION
  // =====================================================

  ngOnInit(): void {

    this.setSeoMeta();

    this.setCanonicalUrl();

    this.addStructuredData();

  }


  // =====================================================
  // FORM SUBMISSION
  // =====================================================

  submitForm(): void {

    this.submitted = true;

    if (this.enrollForm.invalid) {

      this.enrollForm.markAllAsTouched();

      return;

    }

    console.log(this.enrollForm.value);

    alert('Enrollment successful!');

    this.enrollForm.reset();

    this.submitted = false;

  }


  // =====================================================
  // SEO META TAGS
  // =====================================================

  private setSeoMeta(): void {

    // -----------------------------------------------------
    // TITLE
    // -----------------------------------------------------

    this.titleService.setTitle(
      this.pageTitle
    );


    // -----------------------------------------------------
    // BASIC SEO
    // -----------------------------------------------------

    this.metaService.updateTag({
      name: 'description',
      content: this.pageDescription
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: this.pageKeywords
    });

    this.metaService.updateTag({
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    });

    this.metaService.updateTag({
      name: 'googlebot',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro'
    });

    this.metaService.updateTag({
      name: 'language',
      content: 'English'
    });

    this.metaService.updateTag({
      name: 'content-language',
      content: 'en-IN'
    });

    this.metaService.updateTag({
      name: 'referrer',
      content: 'strict-origin-when-cross-origin'
    });


    // -----------------------------------------------------
    // GEO / LOCAL SEO
    // -----------------------------------------------------

    this.metaService.updateTag({
      name: 'geo.region',
      content: 'IN-TN'
    });

    this.metaService.updateTag({
      name: 'geo.placename',
      content: 'Trichy'
    });


    // -----------------------------------------------------
    // OPEN GRAPH
    // -----------------------------------------------------

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: this.pageTitle
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: this.pageDescription
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: this.canonicalUrl
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro'
    });

    this.metaService.updateTag({
      property: 'og:locale',
      content: 'en_IN'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content:
        'https://www.rltedzaro.com/assets/Home-page/Payroll-Income-Tax.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'Payroll and Income Tax Course with TallyPrime'
    });


    // -----------------------------------------------------
    // TWITTER / X
    // -----------------------------------------------------

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: this.pageTitle
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: this.pageDescription
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content:
        'https://www.rltedzaro.com/assets/Home-page/Payroll-Income-Tax.jpeg'
    });

  }


  // =====================================================
  // CANONICAL URL
  // =====================================================

  private setCanonicalUrl(): void {

    const existingCanonical =
      document.querySelector(
        'link[rel="canonical"]'
      );

    if (existingCanonical) {

      existingCanonical.setAttribute(
        'href',
        this.canonicalUrl
      );

      return;

    }


    const canonical =
      document.createElement('link');

    canonical.id =
      'payroll-income-tax-canonical';

    canonical.rel =
      'canonical';

    canonical.href =
      this.canonicalUrl;

    document.head.appendChild(
      canonical
    );

  }


  // =====================================================
  // SCHEMA.ORG JSON-LD
  // =====================================================

  private addStructuredData(): void {

    this.removeStructuredData();


    const schema = {

      '@context': 'https://schema.org',

      '@graph': [

        // =================================================
        // COURSE
        // =================================================

        {
          '@type': 'Course',

          '@id':
            `${this.canonicalUrl}#course`,

          name:
            'Payroll & Income Tax Course with TallyPrime',

          description:
            'Practical payroll and income tax training using TallyPrime covering employee records, salary processing, payroll calculations, deductions, payslips, income tax and payroll reports.',

          url:
            this.canonicalUrl,

          inLanguage:
            'en-IN',

          provider: {

            '@type':
              'EducationalOrganization',

            name:
              'RLT Edzaro',

            url:
              'https://www.rltedzaro.com'

          },

          educationalLevel:
            'Beginner to Professional',

          teaches: [

            'Payroll Management',

            'Employee Management',

            'Employee Records',

            'Salary Processing',

            'Salary Structure',

            'Attendance Management',

            'Payroll Calculations',

            'Salary Deductions',

            'Payslip Generation',

            'Income Tax',

            'Payroll Reports',

            'TallyPrime Payroll'

          ]

        },


        // =================================================
        // EDUCATIONAL ORGANIZATION
        // =================================================

        {
          '@type':
            'EducationalOrganization',

          '@id':
            'https://www.rltedzaro.com/#organization',

          name:
            'RLT Edzaro',

          url:
            'https://www.rltedzaro.com',

          logo: {

            '@type':
              'ImageObject',

            url:
              'https://www.rltedzaro.com/assets/logo.png'

          }

        },


        // =================================================
        // WEB PAGE
        // =================================================

        {
          '@type':
            'WebPage',

          '@id':
            `${this.canonicalUrl}#webpage`,

          url:
            this.canonicalUrl,

          name:
            this.pageTitle,

          description:
            this.pageDescription,

          inLanguage:
            'en-IN',

          isPartOf: {

            '@type':
              'WebSite',

            '@id':
              'https://www.rltedzaro.com/#website',

            name:
              'RLT Edzaro',

            url:
              'https://www.rltedzaro.com'

          },

          about: {

            '@id':
              `${this.canonicalUrl}#course`

          }

        },


        // =================================================
        // BREADCRUMB
        // =================================================

        {
          '@type':
            'BreadcrumbList',

          '@id':
            `${this.canonicalUrl}#breadcrumb`,

          itemListElement: [

            {

              '@type':
                'ListItem',

              position:
                1,

              name:
                'Home',

              item:
                'https://www.rltedzaro.com/'

            },

            {

              '@type':
                'ListItem',

              position:
                2,

              name:
                'Payroll & Income Tax',

              item:
                this.canonicalUrl

            }

          ]

        },


        // =================================================
        // FAQ / AEO
        // =================================================

        {
          '@type':
            'FAQPage',

          '@id':
            `${this.canonicalUrl}#faq`,

          mainEntity: [

            {

              '@type':
                'Question',

              name:
                'What is a Payroll and Income Tax course?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'A Payroll and Income Tax course teaches practical skills for managing employee records, salary processing, payroll calculations, deductions, payslips and income tax-related processes.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What will I learn in Payroll using TallyPrime?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can study employee creation, employee groups, salary structures, attendance, payroll processing, deductions, payslips and payroll reports using TallyPrime.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Is Payroll training suitable for beginners?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. The course can help beginners build foundational knowledge of payroll processing and salary management before moving into practical TallyPrime operations.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Does the course cover income tax?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. The program includes income tax-related payroll processes and accounting concepts relevant to salary and employee management.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What skills can I develop after Payroll training?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can develop practical skills in employee management, salary processing, payroll calculations, deductions, payslips, income tax processes and payroll reporting.'

              }

            }

          ]

        }

      ]

    };


    const script =
      document.createElement('script');

    script.id =
      'payroll-income-tax-schema';

    script.type =
      'application/ld+json';

    script.text =
      JSON.stringify(schema);

    document.head.appendChild(
      script
    );

  }


  // =====================================================
  // REMOVE STRUCTURED DATA
  // =====================================================

  private removeStructuredData(): void {

    const schema =
      document.getElementById(
        'payroll-income-tax-schema'
      );

    if (schema) {

      schema.remove();

    }

  }


  // =====================================================
  // CLEANUP
  // =====================================================

  ngOnDestroy(): void {

    this.removeStructuredData();


    const canonical =
      document.getElementById(
        'payroll-income-tax-canonical'
      );

    if (canonical) {

      canonical.remove();

    }

  }

}