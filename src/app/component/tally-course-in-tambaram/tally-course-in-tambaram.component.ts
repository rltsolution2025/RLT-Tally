import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { EnrollComponent } from '../enroll/enroll.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-course-in-tambaram',
  standalone: true,
  imports: [CommonModule, EnrollComponent, RouterLink],
  templateUrl: './tally-course-in-tambaram.component.html',
  styleUrl: './tally-course-in-tambaram.component.css',
})
export class TallyCourseInTambaramComponent implements OnInit, AfterViewInit {
  private readonly pageUrl =
    'https://rltedzaro.com/tally-course-in-tambaram';

  private readonly pageTitle =
    'Tally Course in Tambaram | TallyPrime, GST & Accounting Training – RLT Edzaro';

  private readonly description =
    'Tally Course in Tambaram with practical TallyPrime, GST, Accounting, Payroll, Inventory and Financial Reporting training, flexible batches, certification and placement assistance at RLT Edzaro.';

  private readonly ogImage =
    'https://rltedzaro.com/assets/images/tally-course-tambaram-hero.png';

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit(): void {
    this.setBasicSeo();
    this.setOpenGraph();
    this.setTwitterCard();
    this.setCanonical();
    this.setRobots();
  }

  ngAfterViewInit(): void {
    this.addStructuredData();
  }

  private setBasicSeo(): void {
    this.titleService.setTitle(this.pageTitle);

    this.metaService.updateTag({
      name: 'description',
      content: this.description,
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Tally Course in Tambaram, Tally Training Institute in Tambaram, Tally Classes in Tambaram, Tally Class in Tambaram, TallyPrime Training in Tambaram, GST Training in Tambaram, Accounting Course in Tambaram, Tally Course Near Tambaram',
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });

    this.metaService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
  }

  private setOpenGraph(): void {
    this.updateProperty('og:type', 'website');
    this.updateProperty('og:title', this.pageTitle);
    this.updateProperty('og:description', this.description);
    this.updateProperty('og:url', this.pageUrl);
    this.updateProperty('og:site_name', 'RLT Edzaro');
    this.updateProperty('og:locale', 'en_IN');
    this.updateProperty('og:image', this.ogImage);
    this.updateProperty(
      'og:image:alt',
      'Tally Course in Tambaram - TallyPrime GST Accounting Training',
    );
  }

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
      content: this.description,
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: this.ogImage,
    });
  }

  private setCanonical(): void {
    let link = this.document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }

    link.href = this.pageUrl;
  }

  private setRobots(): void {
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
      name: 'referrer',
      content: 'strict-origin-when-cross-origin',
    });
  }

  private addStructuredData(): void {
    this.removeExistingSchemas();

    this.addSchema(this.organizationSchema());
    this.addSchema(this.localBusinessSchema());
    this.addSchema(this.courseSchema());
    this.addSchema(this.breadcrumbSchema());
    this.addSchema(this.webPageSchema());
    this.addSchema(this.faqSchema());
  }

  private organizationSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://rltedzaro.com/#organization',
      name: 'RLT Edzaro',
      url: 'https://rltedzaro.com/',
      logo: 'https://rltedzaro.com/assets/images/logo.png',
      telephone: '+91 96006 81581',
      email: 'contact@rltedzaro.com',
    };
  }

  private localBusinessSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://rltedzaro.com/#tambaram-location',
      name: 'RLT Edzaro - Tally Training Institute in Tambaram',
      url: this.pageUrl,
      image: this.ogImage,
      telephone: '+91 96006 81581',
      email: 'contact@rltedzaro.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'RLT Edzaro, Tambaram',
        addressLocality: 'Tambaram',
        addressRegion: 'Tamil Nadu',
        postalCode: '600045',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: 'Tambaram' },
        { '@type': 'City', name: 'Chennai' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '08:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '09:00',
          closes: '13:00',
        },
      ],
      parentOrganization: {
        '@id': 'https://rltedzaro.com/#organization',
      },
    };
  }

  private courseSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `${this.pageUrl}#course`,
      name: 'Tally Course in Tambaram',
      description:
        'Practical TallyPrime, GST, Accounting, Payroll, Inventory and Financial Reporting training in Tambaram, Chennai.',
      url: this.pageUrl,
      inLanguage: 'en-IN',
      provider: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/',
      },
      audience: {
        '@type': 'Audience',
        audienceType:
          'Students, freshers, job seekers, working professionals, business owners and accounting professionals',
      },
      educationalLevel: 'Beginner to Advanced',
      courseMode: ['onsite', 'online'],
      teaches: [
        'Accounting Fundamentals',
        'TallyPrime',
        'GST',
        'Payroll',
        'Income Tax Concepts',
        'Inventory Management',
        'Financial Reporting',
        'MIS Reporting',
      ],
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        location: {
          '@type': 'Place',
          name: 'RLT Edzaro, Tambaram',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tambaram',
            addressRegion: 'Tamil Nadu',
            postalCode: '600045',
            addressCountry: 'IN',
          },
        },
      },
    };
  }

  private breadcrumbSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${this.pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://rltedzaro.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tally Courses',
          item: 'https://rltedzaro.com/tally-courses',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tally Course in Tambaram',
          item: this.pageUrl,
        },
      ],
    };
  }

  private webPageSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${this.pageUrl}#webpage`,
      url: this.pageUrl,
      name: this.pageTitle,
      description: this.description,
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://rltedzaro.com/#website',
        url: 'https://rltedzaro.com/',
        name: 'RLT Edzaro',
      },
      about: {
        '@id': `${this.pageUrl}#course`,
      },
      breadcrumb: {
        '@id': `${this.pageUrl}#breadcrumb`,
      },
    };
  }

  private faqSchema(): object {
    const faqItems = [
      {
        question: 'Can beginners learn TallyPrime?',
        answer:
          'Yes. Beginners can start with basic accounting concepts and gradually learn TallyPrime through practical exercises.',
      },
      {
        question: 'Do I need accounting knowledge to learn Tally?',
        answer:
          'Basic accounting knowledge is helpful, but beginners can start with accounting fundamentals and progress step-by-step.',
      },
      {
        question: 'Do I need a Commerce background to join the Tally course?',
        answer:
          'No prior accounting degree is required. The training begins with foundational bookkeeping principles.',
      },
      {
        question: 'Can I learn GST using TallyPrime?',
        answer:
          'Yes. The training includes GST concepts and practical GST transactions using TallyPrime, including GST configuration, invoicing and reports.',
      },
      {
        question: 'Who can join Tally training in Tambaram?',
        answer:
          'Students, graduates, freshers, job seekers, working professionals, business owners and accounting professionals can learn TallyPrime and accounting.',
      },
      {
        question: 'Is Tally useful for accounting jobs?',
        answer:
          'TallyPrime combined with accounting and GST knowledge can help learners prepare for accounting, billing, finance, payroll and GST-related roles.',
      },
      {
        question: 'Are weekend Tally classes available?',
        answer:
          'Yes. Flexible learning options and weekend batches are available for learners such as working professionals and college students.',
      },
      {
        question: 'Is online Tally training available?',
        answer:
          'Yes. RLT Edzaro provides online learning options along with classroom training.',
      },
      {
        question: 'Will I receive a certificate after completing the course?',
        answer:
          'Yes. Learners receive a Course Completion Certificate from RLT Edzaro after completing the required practical training and assessments.',
      },
      {
        question: 'Does RLT Edzaro provide placement assistance?',
        answer:
          'Yes. Placement assistance includes resume building, mock accounting interviews and placement referrals.',
      },
    ];

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  private updateProperty(property: string, content: string): void {
    let meta = this.document.querySelector(
      `meta[property="${property}"]`,
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = this.document.createElement('meta');
      meta.setAttribute('property', property);
      this.document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
  }

  private addSchema(schema: object): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-rlt-schema', 'true');
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  private removeExistingSchemas(): void {
    this.document
      .querySelectorAll('script[data-rlt-schema="true"]')
      .forEach((script) => script.remove());
  }
}