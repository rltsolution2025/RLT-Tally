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
  selector: 'app-office-automation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    EnrollComponent
  ],
  templateUrl: './office-automation.html',
  styleUrl: './office-automation.css',
})
export class OfficeAutomation implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  // ==========================================
  // SEO DETAILS
  // ==========================================

  private readonly pageTitle =
    'Office Automation Course | MS Word, Excel & PowerPoint | RLT Edzaro';

  private readonly pageDescription =
    'Join the Office Automation Course at RLT Edzaro. Learn computer fundamentals, Windows 11, MS Word, Excel, PowerPoint, internet applications and workplace productivity skills through practical training.';

  private readonly pageKeywords =
    'Office Automation Course, Office Automation Training, Computer Course, Computer Skills Training, MS Office Course, MS Word Course, MS Excel Course, MS PowerPoint Course, Office Automation Course in Trichy, Computer Course in Trichy, MS Office Training in Trichy, Excel Training in Trichy, Word Training in Trichy, PowerPoint Training in Trichy, Computer Skills Course';

  /*
   * Replace this with your actual production URL.
   */
  private readonly canonicalUrl =
    'https://www.rltedzaro.com/office-automation';


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
  // PAGE INITIALIZATION
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
    // PAGE TITLE
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
    // GEO / LOCAL SEO
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
        'https://www.rltedzaro.com/assets/Home-page/Office-Automation.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'Office Automation and Computer Skills Program'
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
        'https://www.rltedzaro.com/assets/Home-page/Office-Automation.jpeg'
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
      'office-automation-canonical';

    canonical.rel =
      'canonical';

    canonical.href =
      this.canonicalUrl;

    document.head.appendChild(
      canonical
    );

  }


  // ==========================================
  // SCHEMA.ORG JSON-LD
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
            'Office Automation & Computer Skills Program',

          description:
            'A practical office automation course covering computer fundamentals, Windows 11, MS Word, MS Excel, MS PowerPoint, internet applications and workplace productivity skills.',

          url:
            this.canonicalUrl,

          inLanguage:
            'en-IN',

          provider: {

            '@type':
              'Organization',

            name:
              'RLT Edzaro',

            url:
              'https://www.rltedzaro.com'

          },

          educationalLevel:
            'Beginner',

          teaches: [

            'Computer Fundamentals',

            'Windows 11',

            'File and Folder Management',

            'MS Word',

            'MS Excel',

            'MS PowerPoint',

            'Internet Applications',

            'Office Productivity',

            'Document Creation',

            'Data Management',

            'Data Analysis',

            'Presentation Design',

            'Workplace Computer Skills'

          ]

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
                'Office Automation',

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
                'What is an Office Automation course?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'An Office Automation course develops practical computer and office productivity skills using tools such as Windows 11, MS Word, MS Excel and MS PowerPoint.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What will I learn in Office Automation?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can study computer fundamentals, Windows 11, file management, MS Word, MS Excel, MS PowerPoint, internet applications and workplace productivity tools.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Is Office Automation suitable for beginners?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. The program is designed as an entry-level learning path for learners who want to build practical computer and office application skills.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What software is covered in the Office Automation program?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'The program covers Windows 11 along with Microsoft Word, Microsoft Excel, Microsoft PowerPoint and essential internet and productivity applications.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What career skills can I develop from Office Automation training?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can develop computer operation, document creation, spreadsheet, presentation, data management and general workplace productivity skills.'

              }

            }

          ]

        }

      ]

    };


    const script =
      document.createElement('script');

    script.id =
      'office-automation-schema';

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

    const schema =
      document.getElementById(
        'office-automation-schema'
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
        'office-automation-canonical'
      );

    if (canonical) {

      canonical.remove();

    }

  }

}