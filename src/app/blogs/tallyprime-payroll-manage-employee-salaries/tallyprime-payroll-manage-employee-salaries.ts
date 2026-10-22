import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tallyprime-payroll-manage-employee-salaries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tallyprime-payroll-manage-employee-salaries.html',
  styleUrl: './tallyprime-payroll-manage-employee-salaries.css',
})
export class TallyprimePayrollManageEmployeeSalaries
  implements OnInit, OnDestroy {

  // ========================================================
  // SEO CONFIGURATION
  // ========================================================

  readonly pageTitle =
    'TallyPrime Payroll: How to Manage Employee Salaries';

  readonly metaDescription =
    'Learn how to manage employee salaries in TallyPrime, configure payroll, create employee records, set pay heads, record attendance, calculate net salary, generate payslips, and review payroll reports.';

  // Make sure this URL matches the actual Angular route deployed on your site.
  readonly canonicalUrl =
    'https://rltedzaro.com/tallyprime-payroll-manage-employee-salaries/';

  // Keep this image URL in sync with the actual public image location.
  readonly heroImage =
    'https://rltedzaro.com/blogs-image/TallyPrime-Payroll-How-to-Manage-Employee-Salaries.png';

  readonly publishedDate = '2026-10-12';
  readonly modifiedDate = '2026-10-12';
  readonly primaryKeyword =
    'TallyPrime Payroll: How to Manage Employee Salaries';

  private readonly siteUrl = 'https://rltedzaro.com';
  private readonly schemaScriptId =
    'tallyprime-payroll-manage-employee-salaries-schema';

  // ========================================================
  // BREADCRUMB DATA
  // ========================================================

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

  // ========================================================
  // RELATED ARTICLES
  // Plain text links can use each article's title and URL.
  // Keep routes aligned with app.routes.ts.
  // ========================================================

  readonly relatedArticles = [
    {
      title: 'TallyPrime Practical Test Questions for Accountant Jobs',
      description:
        'Practise TallyPrime questions covering company creation, voucher entries, GST, inventory, bank reconciliation, and accounting reports.',
      url: '/tallyprime-practical-test-questions-accountant-jobs/',
    },
    {
      title: 'TallyPrime Voucher Types Explained With Examples',
      description:
        'Learn about common TallyPrime voucher types and how they are used to record accounting transactions.',
      url: '/tallyprime-voucher-types-explained-with-examples/',
    },
    {
      title: 'Tally Training Institute in Chennai',
      description:
        'Explore practical Tally training covering accounting, GST, inventory, payroll, and financial reporting.',
      url: '/tally-training-institute-in-chennai',
    },
  ];

  // ========================================================
  // FAQ DATA FOR VISIBLE HTML AND FAQ SCHEMA
  // The questions and answers should match the visible FAQ text.
  // ========================================================

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
        'Yes. Learning payroll can help freshers understand employee salary structures, attendance-based calculations, deductions, payslips, and payroll accounting. These skills can be relevant to accounting and payroll-related roles.',
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
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  // ========================================================
  // LIFECYCLE
  // ========================================================

  ngOnInit(): void {
    this.setSeoMetadata();
    this.setCanonicalUrl();
    this.setStructuredData();
  }

  ngOnDestroy(): void {
    // Remove this component's JSON-LD when navigating away from the page.
    this.document.getElementById(this.schemaScriptId)?.remove();
  }

  // ========================================================
  // SEO META TAGS
  // Includes standard SEO, sharing metadata, and local context.
  // ========================================================

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

        // Geographic context for the Chennai-focused page.
        {
          name: 'geo.region',
          content: 'IN-TN',
        },
        {
          name: 'geo.placename',
          content: 'Chennai, Tamil Nadu, India',
        },

        // Open Graph metadata.
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
        {
          property: 'article:published_time',
          content: `${this.publishedDate}T00:00:00+05:30`,
        },
        {
          property: 'article:modified_time',
          content: `${this.modifiedDate}T00:00:00+05:30`,
        },
        {
          property: 'article:section',
          content: 'Tally & Finance',
        },

        // Twitter / X metadata.
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
        {
          name: 'twitter:image:alt',
          content:
            'Guide to managing employee salaries with TallyPrime Payroll',
        },
      ];

    for (const tag of metaTags) {
      if (tag.property) {
        this.metaService.updateTag(
          {
            property: tag.property,
            content: tag.content,
          },
          `property="${tag.property}"`,
        );
      } else if (tag.name) {
        this.metaService.updateTag(
          {
            name: tag.name,
            content: tag.content,
          },
          `name="${tag.name}"`,
        );
      }
    }
  }

  // ========================================================
  // CANONICAL URL
  // ========================================================

  private setCanonicalUrl(): void {
    let canonicalElement =
      this.document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );

    if (!canonicalElement) {
      canonicalElement = this.document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalElement);
    }

    canonicalElement.setAttribute('href', this.canonicalUrl);
  }

  // ========================================================
  // SCHEMA.ORG STRUCTURED DATA / JSON-LD
  // Organization, WebSite, WebPage, BlogPosting,
  // BreadcrumbList, and FAQPage.
  // ========================================================

  private setStructuredData(): void {
    const organizationId = `${this.siteUrl}/#organization`;
    const websiteId = `${this.siteUrl}/#website`;
    const webpageId = `${this.canonicalUrl}#webpage`;
    const articleId = `${this.canonicalUrl}#article`;
    const breadcrumbId = `${this.canonicalUrl}#breadcrumb`;
    const faqId = `${this.canonicalUrl}#faq`;

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': organizationId,
          name: 'RLT Edzaro',
          url: `${this.siteUrl}/`,
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: `${this.siteUrl}/`,
          name: 'RLT Edzaro',
          publisher: {
            '@id': organizationId,
          },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'WebPage',
          '@id': webpageId,
          url: this.canonicalUrl,
          name: this.pageTitle,
          description: this.metaDescription,
          isPartOf: {
            '@id': websiteId,
          },
          publisher: {
            '@id': organizationId,
          },
          mainEntity: {
            '@id': articleId,
          },
          breadcrumb: {
            '@id': breadcrumbId,
          },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': breadcrumbId,
          itemListElement: this.breadcrumbs.map((breadcrumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: breadcrumb.name,
            item: breadcrumb.url,
          })),
        },
        {
          '@type': 'BlogPosting',
          '@id': articleId,
          mainEntityOfPage: {
            '@id': webpageId,
          },
          headline: this.pageTitle,
          description: this.metaDescription,
          image: [this.heroImage],
          author: {
            '@type': 'Organization',
            '@id': organizationId,
            name: 'RLT Edzaro',
            url: `${this.siteUrl}/`,
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
        {
          '@type': 'FAQPage',
          '@id': faqId,
          url: `${this.canonicalUrl}#faqs`,
          name: 'Frequently Asked Questions about TallyPrime Payroll',
          isPartOf: {
            '@id': webpageId,
          },
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

    let schemaScript = this.document.getElementById(
      this.schemaScriptId,
    ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = this.document.createElement('script');
      schemaScript.id = this.schemaScriptId;
      schemaScript.type = 'application/ld+json';
      this.document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(structuredData);
  }

  // ========================================================
  // TABLE OF CONTENTS NAVIGATION
  // Compatible with both:
  // (click)="scrollToSection($event, 'section-id')"
  // and older (click)="scrollToSection('section-id')" bindings.
  // ========================================================

  scrollToSection(sectionId: string): void;
  scrollToSection(event: Event, sectionId: string): void;
  scrollToSection(
    eventOrSectionId: Event | string,
    requestedSectionId?: string,
  ): void {
    const event =
      typeof eventOrSectionId === 'string' ? null : eventOrSectionId;

    const sectionId =
      typeof eventOrSectionId === 'string'
        ? eventOrSectionId
        : requestedSectionId;

    event?.preventDefault();

    if (!sectionId) {
      return;
    }

    const windowRef = this.document.defaultView;

    if (!windowRef) {
      return;
    }

    let target = this.document.getElementById(sectionId);

    // The introductory copy in some template versions is not wrapped in
    // an element with id="introduction". Use the quick-answer block as a
    // safe fallback until an explicit introduction section is added.
    if (!target && sectionId === 'introduction') {
      target = this.document.querySelector('.answer-summary');
    }

    if (!target) {
      console.warn(`Table of contents target not found: #${sectionId}`);
      return;
    }

    const headerOffset = 105;
    const targetTop =
      target.getBoundingClientRect().top + windowRef.scrollY - headerOffset;

    windowRef.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });

    // Update the fragment without triggering a full page navigation.
    windowRef.history.replaceState(
      null,
      '',
      `${windowRef.location.pathname}${windowRef.location.search}#${sectionId}`,
    );
  }

  // ========================================================
  // SCROLL TO TOP
  // ========================================================

  scrollToTop(): void {
    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
