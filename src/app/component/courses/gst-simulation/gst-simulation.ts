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
  selector: 'app-gst-simulation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    EnrollComponent
  ],
  templateUrl: './gst-simulation.html',
  styleUrl: './gst-simulation.css',
})
export class GSTSimulation implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  // ==========================================
  // SEO INFORMATION
  // ==========================================

  private readonly pageTitle =
    'GST Simulation Program using TallyPrime | RLT Edzaro';

  private readonly pageDescription =
    'Learn GST accounting with TallyPrime through practical GST simulation training. Master GST configuration, invoicing, tax transactions, return filing, reconciliation and GST reporting.';

  private readonly pageKeywords =
    'GST Simulation Course, GST Simulation Program, GST using TallyPrime, GST Course, GST Training, TallyPrime GST Training, GST Accounting Course, GST Return Filing Course, GST Practical Training, GST Course in Trichy, GST Training in Trichy, TallyPrime Course';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/gst-simulation';


  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private metaService: Meta
  ) {

    this.enrollForm = this.fb.group({
      name: ['', Validators.required],

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

    this.addCanonicalUrl();

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

    // ------------------------------------------
    // PAGE TITLE
    // ------------------------------------------

    this.titleService.setTitle(
      this.pageTitle
    );


    // ------------------------------------------
    // BASIC SEO
    // ------------------------------------------

    this.metaService.updateTag({
      name: 'description',
      content: this.pageDescription
    });

    /*
     * Meta keywords are included because you
     * requested them. Major search engines do
     * not normally use this tag as a primary
     * ranking signal.
     */

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


    // ------------------------------------------
    // OPEN GRAPH
    // ------------------------------------------

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
        'https://www.rltedzaro.com/assets/Home-page/GST-Simulation.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'GST Simulation Program using TallyPrime'
    });


    // ------------------------------------------
    // TWITTER / X
    // ------------------------------------------

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
        'https://www.rltedzaro.com/assets/Home-page/GST-Simulation.jpeg'
    });

  }


  // ==========================================
  // CANONICAL URL
  // ==========================================

  private addCanonicalUrl(): void {

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

    canonical.setAttribute(
      'rel',
      'canonical'
    );

    canonical.setAttribute(
      'href',
      this.canonicalUrl
    );

    canonical.id =
      'gst-simulation-canonical';

    document.head.appendChild(canonical);

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
        // COURSE
        // ====================================

        {
          '@type': 'Course',

          '@id':
            `${this.canonicalUrl}#course`,

          name:
            'GST Simulation Program using TallyPrime',

          description:
            'Practical GST simulation training using TallyPrime covering GST concepts, configuration, tax transactions, invoicing, return filing, reconciliation and GST reporting.',

          url:
            this.canonicalUrl,

          inLanguage:
            'en-IN',

          provider: {
            '@type': 'Organization',

            name:
              'RLT Edzaro',

            url:
              'https://www.rltedzaro.com'
          },

          educationalLevel:
            'Beginner to Professional',

          teaches: [

            'GST Accounting',

            'GST using TallyPrime',

            'GST Configuration',

            'GST Transactions',

            'GST Invoicing',

            'GST Return Filing',

            'GST Reconciliation',

            'GST Reporting',

            'Tax Compliance',

            'Practical GST Simulation'

          ]
        },


        // ====================================
        // WEB PAGE
        // ====================================

        {
          '@type': 'WebPage',

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
            '@type': 'WebSite',

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
        // ORGANIZATION
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

              position: 1,

              name:
                'Home',

              item:
                'https://www.rltedzaro.com/'
            },

            {
              '@type':
                'ListItem',

              position: 2,

              name:
                'GST Simulation',

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
                'What is the GST Simulation Program using TallyPrime?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'The GST Simulation Program using TallyPrime provides practical training in GST concepts, configuration, transactions, invoicing, return filing, reconciliation and GST reporting through real-world business scenarios.'
              }
            },

            {
              '@type':
                'Question',

              name:
                'What will I learn in the GST Simulation Program?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Learners study GST setup in TallyPrime, GST transactions, tax configuration, GST invoices, input and output tax, return filing, reconciliation and GST reports.'
              }
            },

            {
              '@type':
                'Question',

              name:
                'Is the GST course practical?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The program uses simulation-based training and practical business scenarios to help learners understand real GST accounting workflows.'
              }
            },

            {
              '@type':
                'Question',

              name:
                'Who can learn GST using TallyPrime?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'The program is suitable for learners interested in GST accounting, taxation, finance, compliance and TallyPrime-based business accounting.'
              }
            }

          ]

        }

      ]

    };


    const script =
      document.createElement('script');

    script.id =
      'gst-simulation-schema';

    script.type =
      'application/ld+json';

    script.text =
      JSON.stringify(schema);

    document.head.appendChild(
      script
    );

  }


  // ==========================================
  // REMOVE STRUCTURED DATA
  // ==========================================

  private removeStructuredData(): void {

    const script =
      document.getElementById(
        'gst-simulation-schema'
      );

    if (script) {
      script.remove();
    }

  }


  // ==========================================
  // CLEANUP
  // ==========================================

  ngOnDestroy(): void {

    this.removeStructuredData();

    const canonical =
      document.getElementById(
        'gst-simulation-canonical'
      );

    if (canonical) {
      canonical.remove();
    }

  }

}