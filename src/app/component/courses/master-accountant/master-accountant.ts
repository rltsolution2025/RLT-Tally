import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { EnrollComponent } from '../../enroll/enroll.component';

@Component({
  selector: 'app-master-accountant',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    EnrollComponent
  ],
  templateUrl: './master-accountant.html',
  styleUrl: './master-accountant.css',
})
export class MasterAccountant implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  // ==========================================
  // SEO DETAILS
  // ==========================================

  private readonly pageTitle =
    'Master Accountant Course with TallyPrime | RLT Edzaro';

  private readonly pageDescription =
    'Join the Master Accountant Course at RLT Edzaro and learn TallyPrime, advanced accounting, GST, payroll, inventory, taxation and financial reporting through practical training.';

  private readonly pageKeywords =
    'Master Accountant Course, Master Accountant Course with TallyPrime, Master Accountant Training, TallyPrime Course, Advanced Tally Course, Tally Professional Course, Accounting Course, Accounting Training, GST Course, Payroll Course, Inventory Management Course, Taxation Course, Tally Course in Trichy, Accounting Course in Trichy, TallyPrime Training in Trichy';

  /*
   * IMPORTANT:
   * Replace this with your actual live website URL.
   */
  private readonly canonicalUrl =
    'https://www.rltedzaro.com/master-accountant';


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


  // ==========================================
  // INITIALIZATION
  // ==========================================

  ngOnInit(): void {

    this.setSeoMeta();

    this.setCanonicalUrl();

    this.addStructuredData();

  }


  // ==========================================
  // FORM SUBMISSION
  // ==========================================

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


  // ==========================================
  // SEO META TAGS
  // ==========================================

  private setSeoMeta(): void {

    // ========================================
    // TITLE
    // ========================================

    this.titleService.setTitle(
      this.pageTitle
    );


    // ========================================
    // BASIC SEO
    // ========================================

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


    // ========================================
    // LOCAL / GEO SEO
    // ========================================

    this.metaService.updateTag({
      name: 'geo.region',
      content: 'IN-TN'
    });

    this.metaService.updateTag({
      name: 'geo.placename',
      content: 'Trichy'
    });


    // ========================================
    // OPEN GRAPH
    // ========================================

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
        'https://www.rltedzaro.com/assets/Home-page/Master-Accountant.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'Master Accountant Course with TallyPrime'
    });


    // ========================================
    // TWITTER / X
    // ========================================

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
        'https://www.rltedzaro.com/assets/Home-page/Master-Accountant.jpeg'
    });

  }


  // ==========================================
  // CANONICAL URL
  // ==========================================

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
      'master-accountant-canonical';

    canonical.rel =
      'canonical';

    canonical.href =
      this.canonicalUrl;

    document.head.appendChild(
      canonical
    );

  }


  // ==========================================
  // SCHEMA.ORG
  // ==========================================

  private addStructuredData(): void {

    this.removeStructuredData();


    const schema = {

      '@context': 'https://schema.org',

      '@graph': [

        // ====================================
        // COURSE SCHEMA
        // ====================================

        {
          '@type': 'Course',

          '@id':
            `${this.canonicalUrl}#course`,

          name:
            'Master Accountant Course with TallyPrime',

          description:
            'Advanced accounting training using TallyPrime covering accounting, GST, payroll, inventory management, taxation and financial reporting.',

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
            'Professional',

          teaches: [

            'Advanced Accounting',

            'TallyPrime',

            'GST Accounting',

            'Payroll Management',

            'Inventory Management',

            'Taxation',

            'Financial Reporting',

            'Business Accounting',

            'Accounting Transactions',

            'Practical TallyPrime Operations'

          ]

        },


        // ====================================
        // EDUCATIONAL ORGANIZATION
        // ====================================

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


        // ====================================
        // WEB PAGE
        // ====================================

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


        // ====================================
        // BREADCRUMB
        // ====================================

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
                'Master Accountant',

              item:
                this.canonicalUrl

            }

          ]

        },


        // ====================================
        // FAQ / AEO
        // ====================================

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
                'What is the Master Accountant Course?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'The Master Accountant Course is an advanced accounting program that teaches TallyPrime, accounting, GST, payroll, inventory management, taxation and financial reporting.'

              }

            },

            {
              '@type':
                'Question',

              name:
                'What will I learn in the Master Accountant Course?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners develop practical skills in TallyPrime, advanced accounting, GST, payroll, inventory management, taxation, financial reporting and business accounting transactions.'

              }

            },

            {
              '@type':
                'Question',

              name:
                'Is the Master Accountant Course suitable for beginners?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'The program can be suitable for learners who want to develop accounting and TallyPrime skills, depending on the course entry requirements.'

              }

            },

            {
              '@type':
                'Question',

              name:
                'Does the Master Accountant Course include GST and payroll?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. GST, payroll, inventory management, taxation and financial reporting are included in the Master Accountant learning path.'

              }

            },

            {
              '@type':
                'Question',

              name:
                'What career roles can TallyPrime skills support?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Practical TallyPrime and accounting skills can support preparation for roles such as Junior Accountant, Accounts Assistant, Tally Accountant, Accounts Executive, Billing Executive and other accounting support positions.'

              }

            }

          ]

        }

      ]

    };


    const script =
      document.createElement('script');

    script.id =
      'master-accountant-schema';

    script.type =
      'application/ld+json';

    script.text =
      JSON.stringify(schema);

    document.head.appendChild(
      script
    );

  }


  // ==========================================
  // REMOVE SCHEMA
  // ==========================================

  private removeStructuredData(): void {

    const schema =
      document.getElementById(
        'master-accountant-schema'
      );

    if (schema) {

      schema.remove();

    }

  }


  // ==========================================
  // CLEANUP
  // ==========================================

  ngOnDestroy(): void {

    this.removeStructuredData();

    const canonical =
      document.getElementById(
        'master-accountant-canonical'
      );

    if (canonical) {

      canonical.remove();

    }

  }

}