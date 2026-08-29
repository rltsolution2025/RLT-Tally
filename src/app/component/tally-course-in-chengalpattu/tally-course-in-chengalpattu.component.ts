import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
} from '@angular/core';

import { CommonModule, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { EnrollComponent } from '../enroll/enroll.component';

@Component({
  selector: 'app-tally-course-in-chengalpattu',
  standalone: true,
  imports: [CommonModule,RouterLink, EnrollComponent],
  templateUrl: './tally-course-in-chengalpattu.component.html',
  styleUrl: './tally-course-in-chengalpattu.component.css',
})
export class TallyCourseInChengalpattuComponent
  implements OnInit, AfterViewInit {

  /* =========================================================
     PAGE SEO DETAILS
  ========================================================== */

  private readonly pageUrl =
    'https://rltedzaro.com/tally-course-in-chengalpattu';

  private readonly pageTitle =
    'Tally Course in Chengalpattu | TallyPrime & Accounting Training – RLT Edzaro';

  private readonly metaDescription =
    'Looking for a Tally Course in Chengalpattu? RLT Edzaro offers practical TallyPrime, Accounting, GST, Payroll, Inventory, Taxation and Financial Reporting training for students, freshers, job seekers, working professionals and business owners.';

  private readonly metaKeywords =
    'Tally Course in Chengalpattu, Tally Training in Chengalpattu, Tally Classes in Chengalpattu, TallyPrime Course in Chengalpattu, Tally Institute in Chengalpattu, Accounting Course in Chengalpattu, GST Course in Chengalpattu, Tally course near Chengalpattu';

  private readonly ogImage =
    'https://rltedzaro.com/assets/images/tally-course-chengalpattu-hero.jpg';

  /* =========================================================
     CONSTRUCTOR
  ========================================================== */

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,

    @Inject(DOCUMENT)
    private readonly document: Document,
  ) {}

  /* =========================================================
     ANGULAR LIFECYCLE
  ========================================================== */

  ngOnInit(): void {
    this.setBasicSEO();
    this.setOpenGraph();
    this.setTwitterCard();
    this.setCanonicalUrl();
  }

  ngAfterViewInit(): void {
    this.addStructuredData();
  }

  /* =========================================================
     BASIC SEO
  ========================================================== */

  private setBasicSEO(): void {
    this.titleService.setTitle(this.pageTitle);

    this.metaService.updateTag({
      name: 'description',
      content: this.metaDescription,
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: this.metaKeywords,
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });

    this.metaService.updateTag({
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });

    this.metaService.updateTag({
      name: 'googlebot',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });

    this.metaService.updateTag({
      name: 'language',
      content: 'en-IN',
    });

    this.metaService.updateTag({
      name: 'geo.region',
      content: 'IN-TN',
    });

    this.metaService.updateTag({
      name: 'geo.placename',
      content: 'Chengalpattu',
    });

    this.metaService.updateTag({
      name: 'referrer',
      content: 'strict-origin-when-cross-origin',
    });
  }

  /* =========================================================
     OPEN GRAPH SEO
  ========================================================== */

  private setOpenGraph(): void {
    this.updateMetaProperty(
      'og:type',
      'website'
    );

    this.updateMetaProperty(
      'og:title',
      this.pageTitle
    );

    this.updateMetaProperty(
      'og:description',
      this.metaDescription
    );

    this.updateMetaProperty(
      'og:url',
      this.pageUrl
    );

    this.updateMetaProperty(
      'og:site_name',
      'RLT Edzaro'
    );

    this.updateMetaProperty(
      'og:locale',
      'en_IN'
    );

    this.updateMetaProperty(
      'og:image',
      this.ogImage
    );

    this.updateMetaProperty(
      'og:image:alt',
      'Tally Course in Chengalpattu - TallyPrime and Accounting Training'
    );
  }

  /* =========================================================
     TWITTER CARD
  ========================================================== */

  private setTwitterCard(): void {
    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: this.pageTitle,
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: this.metaDescription,
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: this.ogImage,
    });
  }

  /* =========================================================
     CANONICAL URL
  ========================================================== */

  private setCanonicalUrl(): void {
    let canonical =
      this.document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical =
        this.document.createElement('link');

      canonical.setAttribute(
        'rel',
        'canonical'
      );

      this.document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      'href',
      this.pageUrl
    );
  }

  /* =========================================================
     STRUCTURED DATA
  ========================================================== */

  private addStructuredData(): void {
    this.removeExistingSchemas();

    this.addSchema(
      this.getOrganizationSchema()
    );

    this.addSchema(
      this.getLocalBusinessSchema()
    );

    this.addSchema(
      this.getCourseSchema()
    );

    this.addSchema(
      this.getBreadcrumbSchema()
    );

    this.addSchema(
      this.getFAQSchema()
    );

    this.addSchema(
      this.getWebPageSchema()
    );
  }

  /* =========================================================
     ORGANIZATION SCHEMA
  ========================================================== */

  private getOrganizationSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',

      '@id':
        'https://rltedzaro.com/#organization',

      name:
        'RLT Edzaro',

      url:
        'https://rltedzaro.com/',

      logo:
        'https://rltedzaro.com/assets/images/logo.png',

      telephone:
        '+91 96006 81581',

      email:
        'contact@rltedzaro.com',
    };
  }

  /* =========================================================
     LOCAL BUSINESS SCHEMA
  ========================================================== */

  private getLocalBusinessSchema(): object {
    return {
      '@context': 'https://schema.org',

      '@type': 'LocalBusiness',

      '@id':
        'https://rltedzaro.com/#chengalpattu-location',

      name:
        'RLT Edzaro - Tally Training Institute in Chengalpattu',

      url:
        this.pageUrl,

      image:
        this.ogImage,

      telephone:
        '+91 96006 81581',

      email:
        'contact@rltedzaro.com',

      address: {
        '@type': 'PostalAddress',

        addressLocality:
          'Chengalpattu',

        addressRegion:
          'Tamil Nadu',

        addressCountry:
          'IN',
      },

      areaServed: [
        {
          '@type': 'City',
          name: 'Chengalpattu',
        },
        {
          '@type': 'City',
          name: 'Chennai',
        },
      ],

      parentOrganization: {
        '@id':
          'https://rltedzaro.com/#organization',
      },
    };
  }

  /* =========================================================
     COURSE SCHEMA
  ========================================================== */

  private getCourseSchema(): object {
    return {
      '@context': 'https://schema.org',

      '@type': 'Course',

      '@id':
        `${this.pageUrl}#course`,

      name:
        'Tally Course in Chengalpattu',

      description:
        'Practical TallyPrime, Accounting, GST, Payroll, Inventory, Taxation and Financial Reporting training in Chengalpattu.',

      url:
        this.pageUrl,

      inLanguage:
        'en-IN',

      provider: {
        '@type':
          'Organization',

        name:
          'RLT Edzaro',

        url:
          'https://rltedzaro.com/',
      },

      educationalLevel:
        'Beginner to Advanced',

      courseMode: [
        'onsite',
        'online',
      ],

      audience: {
        '@type':
          'Audience',

        audienceType:
          'Students, graduates, freshers, job seekers, working professionals, accounting professionals and business owners',
      },

      teaches: [
        'Accounting Fundamentals',
        'TallyPrime',
        'GST',
        'Payroll',
        'Inventory Management',
        'Taxation',
        'Financial Reporting',
        'Business Transactions',
      ],
    };
  }

  /* =========================================================
     BREADCRUMB SCHEMA
  ========================================================== */

  private getBreadcrumbSchema(): object {
    return {
      '@context':
        'https://schema.org',

      '@type':
        'BreadcrumbList',

      '@id':
        `${this.pageUrl}#breadcrumb`,

      itemListElement: [
        {
          '@type':
            'ListItem',

          position: 1,

          name:
            'Home',

          item:
            'https://rltedzaro.com/',
        },

        {
          '@type':
            'ListItem',

          position: 2,

          name:
            'Tally Courses',

          item:
            'https://rltedzaro.com/tally-courses',
        },

        {
          '@type':
            'ListItem',

          position: 3,

          name:
            'Tally Course in Chengalpattu',

          item:
            this.pageUrl,
        },
      ],
    };
  }

  /* =========================================================
     FAQ SCHEMA - AEO
  ========================================================== */

  private getFAQSchema(): object {
    const faqs = [
      {
        question:
          'Can beginners learn TallyPrime?',

        answer:
          'Yes. Beginners can start with basic accounting concepts and gradually learn TallyPrime through practical exercises.',
      },

      {
        question:
          'Do I need accounting knowledge to learn Tally?',

        answer:
          'Basic accounting knowledge is helpful, but beginners can start with the fundamentals and learn progressively.',
      },

      {
        question:
          'Can I learn GST using TallyPrime?',

        answer:
          'Yes. The training includes GST concepts and practical GST transactions using TallyPrime.',
      },

      {
        question:
          'Who can join Tally training?',

        answer:
          'Students, graduates, freshers, job seekers, working professionals, business owners and accounting professionals can learn TallyPrime.',
      },

      {
        question:
          'Is Tally useful for accounting jobs?',

        answer:
          'TallyPrime combined with accounting and GST knowledge can help learners prepare for accounting, billing, finance, payroll and GST-related roles.',
      },

      {
        question:
          'Is the Tally course suitable for freshers?',

        answer:
          'Yes. Freshers can start with accounting fundamentals and progressively learn TallyPrime and practical business transactions.',
      },

      {
        question:
          'Can commerce students learn Tally?',

        answer:
          'Yes. Commerce students and B.Com graduates can use Tally training to strengthen their practical accounting software skills.',
      },

      {
        question:
          'Does the course include GST?',

        answer:
          'Yes. GST concepts, GST configuration, sales and purchase transactions, GST invoices, input tax credit and GST reports are included in the training.',
      },

      {
        question:
          'Does Tally training include inventory management?',

        answer:
          'Yes. Inventory training covers stock items, stock groups, units, godowns, purchase and sales inventory and inventory reports.',
      },

      {
        question:
          'Does the course include payroll?',

        answer:
          'Yes. The payroll component covers employee records, attendance, salary processing, payroll transactions and salary reports.',
      },
    ];

    return {
      '@context':
        'https://schema.org',

      '@type':
        'FAQPage',

      mainEntity:
        faqs.map((faq) => ({
          '@type':
            'Question',

          name:
            faq.question,

          acceptedAnswer: {
            '@type':
              'Answer',

            text:
              faq.answer,
          },
        })),
    };
  }

  /* =========================================================
     WEB PAGE SCHEMA
  ========================================================== */

  private getWebPageSchema(): object {
    return {
      '@context':
        'https://schema.org',

      '@type':
        'WebPage',

      '@id':
        `${this.pageUrl}#webpage`,

      url:
        this.pageUrl,

      name:
        this.pageTitle,

      description:
        this.metaDescription,

      inLanguage:
        'en-IN',

      isPartOf: {
        '@type':
          'WebSite',

        '@id':
          'https://rltedzaro.com/#website',

        url:
          'https://rltedzaro.com/',

        name:
          'RLT Edzaro',
      },

      about: {
        '@id':
          `${this.pageUrl}#course`,
      },

      breadcrumb: {
        '@id':
          `${this.pageUrl}#breadcrumb`,
      },
    };
  }

  /* =========================================================
     META PROPERTY HELPER
  ========================================================== */

  private updateMetaProperty(
    property: string,
    content: string
  ): void {
    let meta =
      this.document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement | null;

    if (!meta) {
      meta =
        this.document.createElement('meta');

      meta.setAttribute(
        'property',
        property
      );

      this.document.head.appendChild(
        meta
      );
    }

    meta.setAttribute(
      'content',
      content
    );
  }

  /* =========================================================
     ADD JSON-LD SCHEMA
  ========================================================== */

  private addSchema(schema: object): void {
    const script =
      this.document.createElement('script');

    script.type =
      'application/ld+json';

    script.setAttribute(
      'data-rlt-schema',
      'true'
    );

    script.textContent =
      JSON.stringify(schema);

    this.document.head.appendChild(
      script
    );
  }

  /* =========================================================
     REMOVE OLD SCHEMAS
  ========================================================== */

  private removeExistingSchemas(): void {
    this.document
      .querySelectorAll(
        'script[data-rlt-schema="true"]'
      )
      .forEach(
        (script) => script.remove()
      );
  }
}