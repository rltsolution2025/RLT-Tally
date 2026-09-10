import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { ApiService } from '../../../services/api.service';
import { EnrollComponent } from '../../enroll/enroll.component';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    EnrollComponent
  ],
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.css'
})
export class InventoryManagementComponent implements OnInit, OnDestroy {

  enrollForm: FormGroup;
  submitted = false;

  private readonly pageTitle =
    'Inventory Management Course with TallyPrime | RLT Edzaro';

  private readonly pageDescription =
    'Learn Inventory Management with TallyPrime at RLT Edzaro. Master stock management, inventory valuation, batches, price levels, purchase and sales orders, warehouse operations and inventory reports through practical training.';

  private readonly pageKeywords =
    'Inventory Management Course, Inventory Management with TallyPrime, TallyPrime Inventory Management, Inventory Management Training, Inventory Management Course in Trichy, Tally Inventory Course, Stock Management Course, Warehouse Management Course, TallyPrime Training, Inventory Training';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/complete-guide-to-inventory-management';

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],
      message: [''],
      course: ['Inventory Management']
    });
  }

  ngOnInit(): void {
    this.setSeoMeta();
    this.addStructuredData();
  }

  ngOnDestroy(): void {
    this.removeStructuredData();
  }

  /**
   * Submit Enrollment Form
   */
  submitForm(): void {
    this.submitted = true;

    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }

    this.api.enroll(this.enrollForm.value).subscribe({
      next: () => {
        alert('✅ Enrollment Successful');

        this.enrollForm.reset({
          course: 'Inventory Management'
        });

        this.submitted = false;
      },

      error: () => {
        alert('❌ Error submitting form');
      }
    });
  }


  /**
   * SEO Meta Tags
   */
  private setSeoMeta(): void {

    /* =========================================
       PAGE TITLE
       ========================================= */

    this.titleService.setTitle(this.pageTitle);


    /* =========================================
       BASIC SEO
       ========================================= */

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


    /* =========================================
       GEO / LOCAL SEO
       ========================================= */

    this.metaService.updateTag({
      name: 'geo.region',
      content: 'IN-TN'
    });

    this.metaService.updateTag({
      name: 'geo.placename',
      content: 'Trichy'
    });

    this.metaService.updateTag({
      name: 'geo.position',
      content: '10.7905;78.7047'
    });

    this.metaService.updateTag({
      name: 'ICBM',
      content: '10.7905, 78.7047'
    });


    /* =========================================
       CANONICAL
       ========================================= */

    this.metaService.updateTag({
      name: 'canonical',
      content: this.canonicalUrl
    });


    /* =========================================
       OPEN GRAPH
       ========================================= */

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
        'https://www.rltedzaro.com/assets/Home-page/Inventory-Management.jpeg'
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content: 'Inventory Management with TallyPrime'
    });


    /* =========================================
       TWITTER / X
       ========================================= */

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
        'https://www.rltedzaro.com/assets/Home-page/Inventory-Management.jpeg'
    });


    /* =========================================
       REFERRER
       ========================================= */

    this.metaService.updateTag({
      name: 'referrer',
      content: 'strict-origin-when-cross-origin'
    });
  }


  /**
   * Schema.org / JSON-LD
   */
  private addStructuredData(): void {

    const existingSchema = document.getElementById(
      'inventory-management-schema'
    );

    if (existingSchema) {
      existingSchema.remove();
    }


    const schema = {

      '@context': 'https://schema.org',

      '@graph': [

        /* =========================================
           COURSE
           ========================================= */

        {
          '@type': 'Course',

          '@id':
            `${this.canonicalUrl}#course`,

          name:
            'Complete Guide to Inventory Management',

          description:
            'Learn Inventory Management with TallyPrime through practical training covering inventory valuation, stock groups, stock categories, units, godowns, stock items, batch management, price levels, purchase and sales orders, warehouse operations and inventory reports.',

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
            'Inventory Management',
            'TallyPrime Inventory Management',
            'Stock Management',
            'Inventory Valuation',
            'Batch Management',
            'Price Level Management',
            'Purchase Order Management',
            'Sales Order Management',
            'Warehouse Management',
            'Inventory Reporting'
          ]
        },


        /* =========================================
           ORGANIZATION
           ========================================= */

        {
          '@type': 'EducationalOrganization',

          '@id':
            'https://www.rltedzaro.com/#organization',

          name:
            'RLT Edzaro',

          url:
            'https://www.rltedzaro.com',

          logo: {
            '@type': 'ImageObject',

            url:
              'https://www.rltedzaro.com/assets/logo.png'
          }
        },


        /* =========================================
           WEB PAGE
           ========================================= */

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
          },

          inLanguage:
            'en-IN'
        },


        /* =========================================
           BREADCRUMB
           ========================================= */

        {
          '@type': 'BreadcrumbList',

          '@id':
            `${this.canonicalUrl}#breadcrumb`,

          itemListElement: [

            {
              '@type': 'ListItem',

              position: 1,

              name:
                'Home',

              item:
                'https://www.rltedzaro.com/'
            },

            {
              '@type': 'ListItem',

              position: 2,

              name:
                'Inventory Management',

              item:
                this.canonicalUrl
            }

          ]
        }

      ]
    };


    const script =
      document.createElement('script');

    script.id =
      'inventory-management-schema';

    script.type =
      'application/ld+json';

    script.text =
      JSON.stringify(schema);

    document.head.appendChild(script);
  }


  /**
   * Remove JSON-LD when leaving page
   */
  private removeStructuredData(): void {

    const schema =
      document.getElementById(
        'inventory-management-schema'
      );

    if (schema) {
      schema.remove();
    }
  }

}