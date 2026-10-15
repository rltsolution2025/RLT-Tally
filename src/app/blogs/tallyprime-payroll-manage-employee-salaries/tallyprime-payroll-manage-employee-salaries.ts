import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tallyprime-payroll-manage-employee-salaries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: './tallyprime-payroll-manage-employee-salaries.css',
  templateUrl: './tallyprime-payroll-manage-employee-salaries.html',
})
export class TallyprimePayrollManageEmployeeSalaries implements OnInit {

  // ==========================================
  // SEO CONFIGURATION
  // ==========================================

  readonly pageTitle =
    'TallyPrime Payroll: How to Manage Employee Salaries';

  readonly metaDescription =
    'Learn how to manage employee salaries in TallyPrime, configure payroll, create employee records, set pay heads, record attendance, calculate net salary, generate payslips, and review payroll reports.';

  readonly canonicalUrl =
    'https://rltedzaro.com/tallyprime-payroll-manage-employee-salaries/';

  readonly heroImage =
    'https://rltedzaro.com/blogs-image/TallyPrime-Payroll-How-to-Manage-Employee-Salaries.png';

  readonly publishedDate = '2026-10-12';
  readonly modifiedDate = '2026-10-12';

  readonly primaryKeyword =
    'TallyPrime Payroll: How to Manage Employee Salaries';

  // ==========================================
  // BREADCRUMBS
  // ==========================================

  readonly breadcrumbs = [
    {
      name: 'Home',
      url: 'https://rltedzaro.com/',
    },
    {
      name: 'Blogs',
      url: 'https://rltedzaro.com/blogs/',
    },
    {
      name: this.pageTitle,
      url: this.canonicalUrl,
    },
  ];

  // ==========================================
  // RELATED ARTICLES
  // ==========================================

  readonly relatedArticles = [
    {
      title: 'TallyPrime Practical Test Questions for Accountant Jobs',
      description:
        'Practise TallyPrime questions covering company creation, voucher entries, GST, inventory, bank reconciliation, and accounting reports.',
      url: '/tallyprime-practical-test-questions-accountant-jobs/',
      image: 'blogs-image/TallyPrime-Practical-Test-Questions.png',
      alt:
        'TallyPrime practical test questions for accountant jobs',
    },
    {
      title: 'TallyPrime Voucher Types Explained With Examples',
      description:
        'Learn about common TallyPrime voucher types and how they are used to record accounting transactions.',
      url: '/tallyprime-voucher-types-explained-with-examples/',
      image: 'blogs-image/TallyPrime-Voucher-Types.png',
      alt:
        'TallyPrime voucher types explained with examples',
    },
    {
      title: 'Tally Training Institute in Chennai',
      description:
        'Explore practical Tally training covering accounting, GST, inventory, payroll, and financial reporting.',
      url: '/tally-training-institute-in-chennai',
      image: 'blogs-image/Tally-Training-Institute-Chennai.png',
      alt:
        'Tally training institute in Chennai at RLT Edzaro',
    },
  ];

  // ==========================================
  // FAQ DATA — AEO
  // Keep these questions and answers consistent
  // with the visible FAQ section in your HTML.
  // ==========================================

  readonly faqs = [
    {
      question: 'What is payroll in TallyPrime?',
      answer:
        'Payroll in TallyPrime is a set of features used to maintain employee records, configure salary components, record attendance, process salaries, and generate payroll-related reports.',
    },
    {
      question: 'How do I enable payroll in TallyPrime?',
      answer:
        'Open the company configuration or F11 Features screen, locate the payroll option, and enable Maintain Payroll or the corresponding setting available in your version.',
    },
    {
      question: 'Can TallyPrime calculate employee salaries automatically?',
      answer:
        'TallyPrime can calculate salaries using configured salary structures, pay heads, attendance information, and applicable calculation methods. Accurate results depend on correct configuration and employee data.',
    },
    {
      question: 'Can I manage employee attendance in TallyPrime?',
      answer:
        'Yes. TallyPrime supports attendance-related workflows that can be used with payroll when the relevant features and attendance types are configured.',
    },
    {
      question: 'Can I generate payslips in TallyPrime?',
      answer:
        'Yes. Payroll reporting options can be used to generate employee payslips for a selected period, subject to the version and payroll configuration.',
    },
    {
      question: 'Can TallyPrime handle PF and ESI deductions?',
      answer:
        'TallyPrime payroll can support statutory payroll configurations, including applicable PF and ESI calculations. Availability and requirements depend on the version, setup, employee eligibility, and applicable regulations.',
    },
    {
      question: 'What is the difference between gross salary and net salary?',
      answer:
        'Gross salary is the total salary earnings before deductions. Net salary is the amount payable after deducting applicable amounts from gross earnings.',
    },
    {
      question: 'Is TallyPrime Payroll useful for freshers?',
      answer:
        'Yes. Learning payroll can help freshers understand employee salary structures, attendance-based calculations, deductions, payslips, and payroll accounting.',
    },
    {
      question: 'Can I manage monthly salary payments in TallyPrime?',
      answer:
        'Yes. Payroll can be processed for the relevant period, and salary payments can be recorded using the appropriate accounting vouchers and ledgers.',
    },
    {
      question: 'Where can I learn TallyPrime Payroll in Chennai?',
      answer:
        'You can explore Tally training options at RLT Edzaro in Chennai by visiting https://rltedzaro.com/tally-training-institute-in-chennai.',
    },
  ];

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT)
    private readonly document: Document
  ) { }

  // ==========================================
  // INITIALIZATION
  // ==========================================

  ngOnInit(): void {
    this.setSeoMetadata();
    this.setCanonicalUrl();
    this.setStructuredData();
  }

  // ==========================================
  // SEO META TAGS
  // ==========================================

  private setSeoMetadata(): void {
    this.titleService.setTitle(this.pageTitle);

    const metaTags: Array<{
      name?: string;
      property?: string;
      content: string;
    }> = [
        {
          name: 'description',
          content: this.metaDescription,
        },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        {
          name: 'author',
          content: 'RLT Edzaro',
        },
        {
          name: 'keywords',
          content:
            'TallyPrime Payroll, manage employee salaries in TallyPrime, payroll management, Tally payroll, salary calculation, payslip generation, Tally training Chennai',
        },
        {
          name: 'content-language',
          content: 'en-IN',
        },

        // GEO metadata
        {
          name: 'geo.region',
          content: 'IN-TN',
        },
        {
          name: 'geo.placename',
          content: 'Chennai, Tamil Nadu, India',
        },

        // Open Graph metadata
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:site_name',
          content: 'RLT Edzaro',
        },
        {
          property: 'og:title',
          content: this.pageTitle,
        },
        {
          property: 'og:description',
          content: this.metaDescription,
        },
        {
          property: 'og:url',
          content: this.canonicalUrl,
        },
        {
          property: 'og:image',
          content: this.heroImage,
        },
        {
          property: 'og:image:alt',
          content:
            'Guide to managing employee salaries with TallyPrime Payroll',
        },
        {
          property: 'og:locale',
          content: 'en_IN',
        },

        // Twitter metadata
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: this.pageTitle,
        },
        {
          name: 'twitter:description',
          content: this.metaDescription,
        },
        {
          name: 'twitter:image',
          content: this.heroImage,
        },
      ];

    for (const tag of metaTags) {
      if (tag.property) {
        this.metaService.updateTag({
          property: tag.property,
          content: tag.content,
        });
      } else if (tag.name) {
        this.metaService.updateTag({
          name: tag.name,
          content: tag.content,
        });
      }
    }
  }

  // ==========================================
  // CANONICAL URL
  // ==========================================

  private setCanonicalUrl(): void {
    let canonicalElement =
      this.document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonicalElement) {
      canonicalElement = this.document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalElement);
    }

    canonicalElement.setAttribute('href', this.canonicalUrl);
  }

  // ==========================================
  // SCHEMA.ORG — STRUCTURED DATA
  // Organization
  // WebSite
  // BlogPosting
  // BreadcrumbList
  // FAQPage
  // ==========================================

  private setStructuredData(): void {
    const organizationId =
      'https://rltedzaro.com/#organization';

    const websiteId =
      'https://rltedzaro.com/#website';

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        // Organization schema
        {
          '@type': 'Organization',
          '@id': organizationId,
          name: 'RLT Edzaro',
          url: 'https://rltedzaro.com/',
        },

        // Website schema
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: 'https://rltedzaro.com/',
          name: 'RLT Edzaro',
          publisher: {
            '@id': organizationId,
          },
          inLanguage: 'en-IN',
        },

        // Blog article schema
        {
          '@type': 'BlogPosting',
          '@id': `${this.canonicalUrl}#article`,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': this.canonicalUrl,
          },
          headline: this.pageTitle,
          description: this.metaDescription,
          image: [this.heroImage],
          author: {
            '@type': 'Organization',
            name: 'RLT Edzaro',
            url: 'https://rltedzaro.com/',
          },
          publisher: {
            '@id': organizationId,
          },
          datePublished: this.publishedDate,
          dateModified: this.modifiedDate,
          articleSection: 'Tally & Finance',
          keywords: [
            'TallyPrime Payroll',
            'Employee salary management',
            'Payroll management',
            'Salary calculations',
            'Payslip generation',
            'Tally training Chennai',
          ],
          inLanguage: 'en-IN',
        },

        // Breadcrumb schema
        {
          '@type': 'BreadcrumbList',
          '@id': `${this.canonicalUrl}#breadcrumb`,
          itemListElement: this.breadcrumbs.map(
            (breadcrumb, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: breadcrumb.name,
              item: breadcrumb.url,
            })
          ),
        },

        // FAQ schema
        {
          '@type': 'FAQPage',
          '@id': `${this.canonicalUrl}#faq`,
          mainEntity: this.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const scriptId =
      'tallyprime-payroll-manage-employee-salaries-schema';

    let schemaScript =
      this.document.getElementById(
        scriptId
      ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = this.document.createElement('script');
      schemaScript.id = scriptId;
      schemaScript.type = 'application/ld+json';

      this.document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(structuredData);
  }

  // ==========================================
  // TABLE OF CONTENTS NAVIGATION
  // Used by the HTML sidebar
  // ==========================================

  scrollToSection(sectionId: string): void {
    const sectionElement =
      this.document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // ==========================================
  // SCROLL TO TOP
  // ==========================================

  scrollToTop(): void {
    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}