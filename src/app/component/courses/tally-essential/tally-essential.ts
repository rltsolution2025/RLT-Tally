import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { EnrollComponent } from '../../enroll/enroll.component';

@Component({
  selector: 'app-tally-essential',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    EnrollComponent
  ],
  templateUrl: './tally-essential.html',
  styleUrl: './tally-essential.css',
})
export class TallyEssential implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  // =====================================================
  // SEO DETAILS
  // =====================================================

  private readonly pageTitle =
    'Tally Essential Course | TallyPrime Accounting Training | RLT Edzaro';

  private readonly pageDescription =
    'Join the Tally Essential Comprehensive Course at RLT Edzaro. Learn TallyPrime, accounting fundamentals, GST, inventory, banking, financial reporting, taxation and business accounting through practical training.';

  private readonly pageKeywords =
    'Tally Essential Course, Tally Essential Comprehensive, TallyPrime Course, Tally Accounting Course, Tally Training, Tally Course, Computerized Accounting Course, Tally Course for Beginners, TallyPrime Training, Accounting Course, GST Course, Inventory Management Course, Tally Course in Trichy, Tally Training in Trichy, TallyPrime Course in Trichy, Accounting Course in Trichy';

  // Replace this with your actual live website URL
  private readonly canonicalUrl =
    'https://www.rltedzaro.com/tally-essential';


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
        'Tally Essential Comprehensive'
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
          course: 'Tally Essential Comprehensive'
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
    // AUTHOR
    // ===================================================

    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro'
    });


    // ===================================================
    // LANGUAGE
    // ===================================================

    this.metaService.updateTag({
      name: 'language',
      content: 'English'
    });

    this.metaService.updateTag({
      name: 'content-language',
      content: 'en-IN'
    });


    // ===================================================
    // REFERRER
    // ===================================================

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
        'https://www.rltedzaro.com/assets/Home-page/Tally-Essential.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'Tally Essential Comprehensive Course'
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
        'https://www.rltedzaro.com/assets/Home-page/Tally-Essential.jpeg'
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
      'tally-essential-canonical';

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
        // COURSE SCHEMA
        // =================================================

        {
          '@type': 'Course',

          '@id':
            `${this.canonicalUrl}#course`,

          name:
            'Tally Essential Comprehensive Program',

          description:
            'A practical computerized accounting course using TallyPrime covering accounting fundamentals, company creation, ledger management, accounting transactions, banking, financial reporting, inventory, GST, taxation and business data management.',

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

            'Accounting Fundamentals',

            'TallyPrime',

            'Company Creation',

            'Company Configuration',

            'Ledger Management',

            'Chart of Accounts',

            'Accounting Transactions',

            'Banking',

            'Financial Statements',

            'MIS Reports',

            'Data Security',

            'Company Data Management',

            'Inventory Management',

            'Accounts Payable',

            'Accounts Receivable',

            'Purchase Order Management',

            'Sales Order Management',

            'GST',

            'TDS',

            'Business Data Management',

            'GST Simulation'

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
                'Tally Essential',

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
                'What is the Tally Essential Comprehensive Course?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Tally Essential Comprehensive is a computerized accounting program using TallyPrime that covers accounting fundamentals, transactions, banking, financial reporting, inventory, GST and taxation.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Is Tally Essential suitable for beginners?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. The program starts with accounting fundamentals and introduces TallyPrime progressively, making it suitable for learners building their accounting and computerized accounting skills.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What will I learn in Tally Essential?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can study accounting fundamentals, TallyPrime, company creation, ledgers, vouchers, banking, financial statements, inventory, receivables and payables, GST, taxation and business data management.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Does Tally Essential include GST?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. GST transactions, input tax credit, GST payment, return generation and GST simulation are included in the learning path.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'How many levels are included in the Tally Essential Comprehensive Program?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'The program is structured into Level 1, Level 2 and Level 3, covering accounting and reporting, accounts payable and receivable, inventory, GST and taxation-related topics.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What career skills can I develop with TallyPrime?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can develop practical skills in computerized accounting, accounting transactions, inventory, GST, financial reporting, banking and business data management.'

              }

            }

          ]

        }

      ]

    };


    const script =
      document.createElement('script');

    script.id =
      'tally-essential-schema';

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
        'tally-essential-schema'
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
        'tally-essential-canonical'
      );

    if (canonical) {

      canonical.remove();

    }

  }

}