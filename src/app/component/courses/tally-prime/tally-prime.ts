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
  selector: 'app-tally-prime',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    EnrollComponent
  ],
  templateUrl: './tally-prime.html',
  styleUrl: './tally-prime.css',
})
export class TallyPrime implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  // =====================================================
  // SEO DETAILS
  // =====================================================

  private readonly pageTitle =
    'TallyPrime Course | Practical Accounting Training | RLT Edzaro';

  private readonly pageDescription =
    'Learn TallyPrime with practical accounting training at RLT Edzaro. Master company creation, ledgers, vouchers, sales, purchases, inventory, GST, banking and financial reports.';

  private readonly pageKeywords =
    'TallyPrime Course, TallyPrime Training, TallyPrime Course in Trichy, Tally Course, Tally Accounting Course, Tally Training in Trichy, Accounting Course in Trichy, TallyPrime Certification, TallyPrime Accounting Training, Tally Course for Beginners, GST with TallyPrime, Inventory Management with TallyPrime';

  // Replace with your actual production URL
  private readonly canonicalUrl =
    'https://www.rltedzaro.com/tally-prime';


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
    // PAGE TITLE
    // -----------------------------------------------------

    this.titleService.setTitle(
      this.pageTitle
    );


    // -----------------------------------------------------
    // DESCRIPTION
    // -----------------------------------------------------

    this.metaService.updateTag({
      name: 'description',
      content: this.pageDescription
    });


    // -----------------------------------------------------
    // KEYWORDS
    // -----------------------------------------------------

    this.metaService.updateTag({
      name: 'keywords',
      content: this.pageKeywords
    });


    // -----------------------------------------------------
    // ROBOTS
    // -----------------------------------------------------

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


    // -----------------------------------------------------
    // AUTHOR / LANGUAGE
    // -----------------------------------------------------

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
        'https://www.rltedzaro.com/assets/Home-page/Tally-Prime.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'TallyPrime Course and Accounting Training'
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
        'https://www.rltedzaro.com/assets/Home-page/Tally-Prime.jpeg'
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
      'tally-prime-canonical';

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
            'TallyPrime Course',

          description:
            'Practical TallyPrime accounting training covering company creation, ledgers, vouchers, accounting transactions, banking, inventory, GST and financial reporting.',

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

            'TallyPrime',

            'Computerized Accounting',

            'Company Creation',

            'Company Configuration',

            'Chart of Accounts',

            'Ledger Management',

            'Voucher Entries',

            'Sales Transactions',

            'Purchase Transactions',

            'Receipt and Payment Transactions',

            'Banking',

            'Inventory Management',

            'GST Accounting',

            'Financial Reporting',

            'Business Accounting'

          ]

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
                'TallyPrime',

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
                'What is a TallyPrime course?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'A TallyPrime course teaches practical computerized accounting using TallyPrime, including company creation, ledgers, vouchers, sales, purchases, banking, inventory, GST and financial reporting.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Is TallyPrime suitable for beginners?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. TallyPrime can be learned progressively by starting with basic accounting concepts, company creation and simple transactions before moving to advanced features.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What can I learn using TallyPrime?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can study accounting transactions, ledgers, vouchers, banking, inventory management, GST accounting and financial reporting using TallyPrime.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Does TallyPrime training include GST?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. GST accounting, GST transactions and related reporting can be included in TallyPrime training.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Who can learn TallyPrime?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Students, commerce learners, graduates, freshers, job seekers, accounting professionals, business users and beginners interested in computerized accounting can learn TallyPrime.'

              }

            }

          ]

        }

      ]

    };


    const script =
      document.createElement('script');

    script.id =
      'tally-prime-schema';

    script.type =
      'application/ld+json';

    script.text =
      JSON.stringify(schema);

    document.head.appendChild(
      script
    );

  }


  // =====================================================
  // REMOVE SCHEMA
  // =====================================================

  private removeStructuredData(): void {

    const schema =
      document.getElementById(
        'tally-prime-schema'
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
        'tally-prime-canonical'
      );

    if (canonical) {

      canonical.remove();

    }

  }

}