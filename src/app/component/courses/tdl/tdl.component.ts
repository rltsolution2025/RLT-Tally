import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../../../services/api.service';
import { RouterLink } from '@angular/router';
import { EnrollComponent } from '../../enroll/enroll.component';

@Component({
  selector: 'app-tdl',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    EnrollComponent
  ],
  templateUrl: './tdl.component.html',
  styleUrl: './tdl.component.css'
})
export class TDLComponent implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  // =====================================================
  // SEO DETAILS
  // =====================================================

  private readonly pageTitle =
    'TDL Essential Course | Tally Definition Language Training | RLT Edzaro';

  private readonly pageDescription =
    'Learn Tally Definition Language (TDL) with practical training at RLT Edzaro. Master TDL components, variables, actions, objects, collections, UDFs, reports and printing for Tally customisation.';

  private readonly pageKeywords =
    'TDL Course, TDL Essential Course, Tally Definition Language Course, Tally Definition Language Training, TDL Training, TDL Course in Trichy, Tally TDL Course, Tally Customisation Course, TallyPrime TDL Training, Tally Development Course, TDL Programming, Tally Customisation Training, TDL UDF Course, TDL Reports Training';

  // Replace with your actual production URL
  private readonly canonicalUrl =
    'https://www.rltedzaro.com/tdl';


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
        'TDL Essential'
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
          course: 'TDL Essential'
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
    // TITLE
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
        'https://www.rltedzaro.com/assets/Home-page/TDL-Essential.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'TDL Essential Tally Definition Language Course'
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
        'https://www.rltedzaro.com/assets/Home-page/TDL-Essential.jpeg'
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
      'tdl-canonical';

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
            'TDL Essential',

          description:
            'A specialisation course in Tally Definition Language (TDL) covering TDL components, dimensions, formatting, variables, buttons, keys, actions, objects, collections, User-Defined Fields, reports and printing.',

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
            'Specialisation',

          teaches: [

            'Tally Definition Language',

            'TDL Components',

            'Dimensions and Formatting',

            'TDL Variables',

            'Buttons and Keys',

            'TDL Actions',

            'Objects',

            'Collections',

            'User-Defined Fields',

            'TDL Reports',

            'TDL Printing',

            'Tally Customisation'

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
                'TDL Essential',

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
                'What is TDL?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'TDL stands for Tally Definition Language. It is used to customise and extend Tally functionalities.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What is TDL Essential?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'TDL Essential is a specialisation course that introduces Tally Definition Language and its use in Tally customisation.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'What will I learn in TDL Essential?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners can study TDL components, dimensions, formatting, variables, buttons, keys, actions, objects, collections, User-Defined Fields, reports and printing.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Can TDL be used to customise Tally?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Yes. TDL is used for customising and extending Tally functionalities according to specific business requirements.'

              }

            },

            {

              '@type':
                'Question',

              name:
                'Who can learn TDL?',

              acceptedAnswer: {

                '@type':
                  'Answer',

                text:
                  'Learners interested in Tally customisation and Tally-based development can study TDL Essential and build foundational TDL skills.'

              }

            }

          ]

        }

      ]

    };


    const script =
      document.createElement('script');

    script.id =
      'tdl-schema';

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
        'tdl-schema'
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
        'tdl-canonical'
      );

    if (canonical) {

      canonical.remove();

    }

  }

}