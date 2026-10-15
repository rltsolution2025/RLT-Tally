
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tallyprime-practical-test-questions-accountant-jobs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl:
    './tallyprime-practical-test-questions-accountant-jobs.html',
  styleUrl:
    './tallyprime-practical-test-questions-accountant-jobs.css',
})
export class TallyprimePracticalTestQuestionsAccountantJobs
  implements OnInit, OnDestroy {

  // ==========================================
  // WEBSITE CONFIGURATION
  // ==========================================

  private readonly siteUrl = 'https://rltedzaro.com';

  private readonly pagePath =
    '/blogs/tallyprime-practical-test-questions-accountant-jobs';

  private readonly logoUrl =
    'https://rltedzaro.com/assets/images/rlt-edzaro-logo.png';

  private readonly articleImageUrl =
    'https://rltedzaro.com/blogs-image/tallyprime-practical-test-questions-accountant-jobs.png';

  private readonly schemaScriptId =
    'tallyprime-practical-test-jsonld';

  // ==========================================
  // SEO CONTENT
  // ==========================================

  readonly pageTitle =
    'TallyPrime Practical Test Questions for Accountant Jobs: 25 Questions With Answers';

  readonly metaDescription =
    'Prepare for accountant jobs with 25 TallyPrime practical test questions and answers covering voucher entries, GST, inventory, bank reconciliation, and accounting reports.';

  readonly canonicalUrl = `${this.siteUrl}${this.pagePath}`;

  readonly keywords = [
    'TallyPrime practical test questions for accountant jobs',
    'TallyPrime practical questions and answers',
    'Tally practical test for accountants',
    'TallyPrime interview questions',
    'accountant practical test questions',
    'GST accounting in TallyPrime',
    'TallyPrime voucher entries',
    'bank reconciliation in TallyPrime',
  ];

  // Update these dates to match your actual article history.
  readonly datePublished = '2026-10-12';
  readonly dateModified = '2026-10-12';

  // ==========================================
  // TABLE OF CONTENTS
  // ==========================================

  readonly tocItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'what-is-practical-test', label: 'What Is a Practical Test?' },
    { id: 'company-ledgers', label: 'Company & Ledger Management' },
    { id: 'accounting-vouchers', label: 'Accounting Voucher Questions' },
    { id: 'gst-inventory', label: 'GST & Inventory Questions' },
    { id: 'reports-reconciliation', label: 'Reports & Reconciliation' },
    { id: 'sample-practical-test', label: 'Sample Practical Test' },
    { id: 'preparation-tips', label: 'Preparation Tips' },
    { id: 'common-mistakes', label: 'Common Mistakes' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
    { id: 'training-cta', label: 'Learn at RLT Edzaro' },
  ];

  // ==========================================
  // FAQ CONTENT
  // IMPORTANT:
  // These questions and answers must also appear
  // visibly in the HTML page.
  // Replace them with your actual page FAQs.
  // ==========================================

  readonly faqItems = [
    {
      question:
        'What is a TallyPrime practical test for accountant jobs?',
      answer:
        'A TallyPrime practical test evaluates your ability to create company records, manage ledgers, record accounting vouchers, handle GST transactions, maintain inventory, and generate accounting reports.',
    },
    {
      question:
        'What topics should I prepare for a TallyPrime practical test?',
      answer:
        'Prepare company creation, ledger groups, payment and receipt vouchers, sales and purchase entries, GST, inventory, bank reconciliation, and financial reports.',
    },
    {
      question:
        'Can beginners practise TallyPrime accounting questions?',
      answer:
        'Yes. Beginners can practise company setup, ledger creation, basic voucher entries, and reports before moving on to GST, inventory, and reconciliation tasks.',
    },
    {
      question:
        'How can I prepare for an accountant practical test?',
      answer:
        'Practise real-world accounting transactions in TallyPrime, including ledger creation, sales and purchase entries, payment and receipt vouchers, GST calculations, inventory management, and financial report generation.',
    },
  ];

  constructor(
    private readonly router: Router,
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  // ==========================================
  // COMPONENT INITIALIZATION
  // ==========================================

  ngOnInit(): void {
    this.setSeoMetadata();
    this.addStructuredData();
  }

  ngOnDestroy(): void {
    // Remove the page-specific JSON-LD when this
    // component is destroyed during navigation.
    this.document
      .getElementById(this.schemaScriptId)
      ?.remove();
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
        content: this.keywords.join(', '),
      },

      // Open Graph metadata
      {
        property: 'og:type',
        content: 'article',
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
        property: 'og:site_name',
        content: 'RLT Edzaro',
      },
      {
        property: 'og:locale',
        content: 'en_IN',
      },
      {
        property: 'og:image',
        content: this.articleImageUrl,
      },
      {
        property: 'og:image:alt',
        content:
          'TallyPrime practical test questions for accountant jobs',
      },
      {
        property: 'article:published_time',
        content: `${this.datePublished}T00:00:00+05:30`,
      },
      {
        property: 'article:modified_time',
        content: `${this.dateModified}T00:00:00+05:30`,
      },
      {
        property: 'article:section',
        content: 'TallyPrime and Accounting',
      },

      // Twitter / X metadata
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
        content: this.articleImageUrl,
      },
      {
        name: 'twitter:image:alt',
        content:
          'TallyPrime practical test questions for accountant jobs',
      },
    ];

    for (const tag of metaTags) {
      if (tag.name) {
        this.metaService.updateTag(
          {
            name: tag.name,
            content: tag.content,
          },
          `name="${tag.name}"`
        );
      } else if (tag.property) {
        this.metaService.updateTag(
          {
            property: tag.property,
            content: tag.content,
          },
          `property="${tag.property}"`
        );
      }
    }

    this.setCanonicalUrl();
  }

  // ==========================================
  // CANONICAL URL
  // ==========================================

  private setCanonicalUrl(): void {
    let canonical = this.document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = this.canonicalUrl;
  }

  // ==========================================
  // SCHEMA.ORG / JSON-LD
  // SEO + AEO + GEO STRUCTURED DATA
  // ==========================================

  private addStructuredData(): void {
    const organizationId = `${this.siteUrl}/#organization`;
    const websiteId = `${this.siteUrl}/#website`;
    const webpageId = `${this.canonicalUrl}#webpage`;
    const articleId = `${this.canonicalUrl}#article`;
    const breadcrumbId = `${this.canonicalUrl}#breadcrumb`;
    const faqId = `${this.canonicalUrl}#faq`;

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        // --------------------------------------
        // ORGANIZATION
        // --------------------------------------
        {
          '@type': 'Organization',
          '@id': organizationId,
          name: 'RLT Edzaro',
          url: this.siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: this.logoUrl,
          },
        },

        // --------------------------------------
        // WEBSITE
        // --------------------------------------
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: this.siteUrl,
          name: 'RLT Edzaro',
          publisher: {
            '@id': organizationId,
          },
          inLanguage: 'en-IN',
        },

        // --------------------------------------
        // WEBPAGE
        // --------------------------------------
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

        // --------------------------------------
        // BREADCRUMB LIST
        // --------------------------------------
        {
          '@type': 'BreadcrumbList',
          '@id': breadcrumbId,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: this.siteUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blogs',
              item: `${this.siteUrl}/blogs`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: this.pageTitle,
              item: this.canonicalUrl,
            },
          ],
        },

        // --------------------------------------
        // ARTICLE
        // --------------------------------------
        {
          '@type': 'Article',
          '@id': articleId,
          headline: this.pageTitle,
          description: this.metaDescription,
          image: [
            this.articleImageUrl,
          ],
          url: this.canonicalUrl,
          mainEntityOfPage: {
            '@id': webpageId,
          },
          author: {
            '@type': 'Organization',
            '@id': organizationId,
            name: 'RLT Edzaro',
          },
          publisher: {
            '@id': organizationId,
          },
          datePublished: this.datePublished,
          dateModified: this.dateModified,
          articleSection: 'TallyPrime and Accounting',
          keywords: this.keywords.join(', '),
          inLanguage: 'en-IN',
        },

        // --------------------------------------
        // FAQ PAGE
        // Must match visible HTML FAQs
        // --------------------------------------
        {
          '@type': 'FAQPage',
          '@id': faqId,
          url: `${this.canonicalUrl}#faqs`,
          name: 'Frequently Asked Questions',
          isPartOf: {
            '@id': webpageId,
          },
          mainEntity: this.faqItems.map((faq) => ({
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

    let script = this.document.getElementById(
      this.schemaScriptId
    ) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = this.schemaScriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }

  // ==========================================
  // TABLE OF CONTENTS SMOOTH SCROLLING
  // ==========================================

  scrollToSection(
    event: Event,
    sectionId: string
  ): void {
    event.preventDefault();

    const target =
      this.document.getElementById(sectionId);

    if (!target) {
      return;
    }

    const headerOffset = 100;

    const top =
      target.getBoundingClientRect().top +
      (this.document.defaultView?.scrollY ?? 0) -
      headerOffset;

    this.document.defaultView?.scrollTo({
      top,
      behavior: 'smooth',
    });
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

  // ==========================================
  // NAVIGATE TO BLOGS
  // ==========================================

  goToBlogs(): void {
    this.router.navigate(['/blogs']);
  }
}
