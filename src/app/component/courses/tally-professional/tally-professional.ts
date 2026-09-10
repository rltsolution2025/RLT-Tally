import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { EnrollComponent } from '../../enroll/enroll.component';

@Component({
  selector: 'app-tally-professional',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    EnrollComponent
  ],
  templateUrl: './tally-professional.html',
  styleUrl: './tally-professional.css',
})
export class TallyProfessional implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  // =====================================================
  // SEO DETAILS
  // =====================================================

  private readonly pageTitle =
    'Tally Professional Course | Advanced TallyPrime Training | RLT Edzaro';

  private readonly pageDescription =
    'Join the Tally Professional Course at RLT Edzaro. Learn advanced TallyPrime accounting, GST, payroll, inventory, taxation and financial reporting through practical training.';

  private readonly pageKeywords =
    'Tally Professional Course, Tally Professional Training, Advanced Tally Course, TallyPrime Course, TallyPrime Training, Tally Accounting Course, Tally Professional Course in Trichy, Tally Training in Trichy, Advanced Accounting Course in Trichy, GST with TallyPrime, Payroll with TallyPrime, Inventory Management with TallyPrime, Tally Taxation Course, Financial Reporting Course';

  // Replace with your actual production URL
  private readonly canonicalUrl =
    'https://www.rltedzaro.com/tally-professional';


  constructor(
    private fb: FormBuilder,
    private api: ApiService,
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

      message: [''],

      course: [
        'Tally Professional'
      ]

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

    this.api.enroll(
      this.enrollForm.value
    ).subscribe({

      next: () => {

        alert('✅ Enrollment Successful');

        this.enrollForm.reset({
          course: 'Tally Professional'
        });

        this.submitted = false;

      },

      error: () => {

        alert('❌ Error submitting form');

      }

    });

  }


  // =====================================================
  // SEO META TAGS
  // =====================================================

  private setSeoMeta(): void {

    // ===================================================
    // PAGE TITLE
    // ===================================================

    this.titleService.setTitle(
      this.pageTitle
    );


    // ===================================================
    // DESCRIPTION
    // ===================================================

    this.metaService.updateTag({
      name: 'description',
      content: this.pageDescription
    });


    // ===================================================
    // KEYWORDS
    // ===================================================

    this.metaService.updateTag({
      name: 'keywords',
      content: this.pageKeywords
    });


    // ===================================================
    // ROBOTS
    // ===================================================

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


    // ===================================================
    // AUTHOR / LANGUAGE
    // ===================================================

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


    // ===================================================
    // GEO / LOCAL SEO
    // ===================================================

    this.metaService.updateTag({
      name: 'geo.region',
      content: 'IN-TN'
    });

    this.metaService.updateTag({
      name: 'geo.placename',
      content: 'Trichy'
    });


    // ===================================================
    // OPEN GRAPH
    // ===================================================

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
        'https://www.rltedzaro.com/assets/Home-page/Tally-Professional.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'Tally Professional Course with TallyPrime'
    });


    // ===================================================
    // TWITTER / X
    // ===================================================

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
        'https://www.rltedzaro.com/assets/Home-page/Tally-Professional.jpeg'
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
      'tally-professional-canonical';

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
            'Tally Professional Course',

          description:
            'Advanced TallyPrime accounting training covering GST, payroll, inventory management, taxation, financial reporting and practical business accounting.',

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

            'Advanced TallyPrime',

            'Advanced Accounting',

            'GST Accounting',

            'Payroll Management',

            'Inventory Management',

            'Taxation',

            'Financial Reporting',

            'Business Accounting',

            'Sales and Purchase Transactions',

            'Receivables and Payables',

            'Banking',

            'Practical Accounting'

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
                'Tally Professional',

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
                'What is a Tally Professional course?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'A Tally Professional course develops advanced computerized accounting skills using TallyPrime, including GST, payroll, inventory management, taxation and financial reporting.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What will I learn in Tally Professional?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can develop skills in advanced accounting, TallyPrime, GST, payroll, inventory, taxation, financial reporting, business transactions and accounting reports.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Does Tally Professional include GST?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. GST accounting and related business transactions can be included as part of TallyPrime professional training.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Does the course cover payroll and inventory?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. Payroll processing and inventory management are included as part of the advanced TallyPrime learning path.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Who can join a Tally Professional course?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'The program is suitable for learners, graduates, freshers, accounting professionals and working professionals who want to develop advanced TallyPrime and accounting skills.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What career skills can I develop with Tally Professional?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'The course can help develop practical skills in computerized accounting, GST, payroll, inventory, taxation, financial reporting and business accounting operations.'

              }

            }

          ]

        }

      ]

    };


    const script =
      document.createElement('script');

    script.id =
      'tally-professional-schema';

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
        'tally-professional-schema'
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
        'tally-professional-canonical'
      );

    if (canonical) {

      canonical.remove();

    }

  }

}