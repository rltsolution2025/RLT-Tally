import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [RouterLink],
  selector: 'app-track-receivables-and-payables-in-tallyprime',
  styleUrl: './track-receivables-and-payables-in-tallyprime.css',
  templateUrl: './track-receivables-and-payables-in-tallyprime.html',
})
export class TrackReceivablesAndPayablesInTallyprime implements OnInit {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Track Receivables and Payables in TallyPrime: Step-by-Step Guide';

  private readonly description =
    'Learn how to track accounts receivable and payable in TallyPrime, view outstanding bills, check due dates, manage customer payments, and monitor supplier balances.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/track-receivables-and-payables-in-tallyprime/';

  // ========================================================
  // COMPONENT INITIALIZATION
  // ========================================================

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addFaqSchema();
  }

  // ========================================================
  // SEO META TAGS
  // ========================================================

  private setPageMetadata(): void {

    this.title.setTitle(`${this.pageTitle} | RLT Edzaro`);

    this.meta.updateTag({
      name: 'description',
      content: this.description
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: [
        'How to track receivables and payables in TallyPrime',
        'TallyPrime outstanding reports',
        'accounts receivable in TallyPrime',
        'accounts payable in TallyPrime',
        'TallyPrime bill-wise details',
        'outstanding bills report in TallyPrime',
        'TallyPrime ageing analysis'
      ].join(', ')
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.pageTitle
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.description
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'article'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.canonicalUrl
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: this.pageTitle
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: this.description
    });
  }

  // ========================================================
  // CANONICAL URL
  // ========================================================

  private setCanonicalUrl(): void {

    let canonical =
      this.document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonical) {

      canonical = this.document.createElement('link');

      canonical.setAttribute('rel', 'canonical');

      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  // ========================================================
  // TABLE OF CONTENTS - SMOOTH SCROLL
  // ========================================================

  scrollToSection(
    event: MouseEvent,
    sectionId: string
  ): void {

    event.preventDefault();

    const target = this.document.getElementById(sectionId);

    if (!target) {

      console.warn(`Section not found: ${sectionId}`);

      return;
    }

    this.document.defaultView?.history.replaceState(
      null,
      '',
      `#${sectionId}`
    );

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // ========================================================
  // ARTICLE STRUCTURED DATA
  // ========================================================

  private addArticleSchema(): void {

    const schema = {

      '@context': 'https://schema.org',

      '@type': 'Article',

      headline: this.pageTitle,

      description: this.description,

      url: this.canonicalUrl,

      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.canonicalUrl
      },

      author: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },

      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },

      inLanguage: 'en-IN',

      articleSection: 'TallyPrime Accounting Guides',

      keywords: [
        'How to track receivables and payables in TallyPrime',
        'TallyPrime outstanding reports',
        'Accounts receivable',
        'Accounts payable',
        'Bill-wise tracking in TallyPrime',
        'TallyPrime ageing analysis'
      ],

      about: {
        '@type': 'Thing',
        name: 'Receivables and Payables Management in TallyPrime'
      },

      mainEntity: [
        {
          '@type': 'Thing',
          name: 'Accounts Receivable'
        },
        {
          '@type': 'Thing',
          name: 'Accounts Payable'
        },
        {
          '@type': 'Thing',
          name: 'Bill-wise Tracking'
        }
      ]
    };

    this.upsertJsonLd(
      'receivables-payables-article-schema',
      schema
    );
  }

  // ========================================================
  // FAQ STRUCTURED DATA
  // ========================================================

  private addFaqSchema(): void {

    const questions = [

      {
        question: 'How do I check receivables in TallyPrime?',
        answer:
          'Open the relevant receivables or outstanding bills report and review the customer-wise outstanding balances. Select a customer to inspect invoice-level details where available.'
      },

      {
        question: 'How do I check payables in TallyPrime?',
        answer:
          'Open the relevant payables or outstanding bills report and review the supplier-wise balances. Examine individual supplier bills to check amounts paid and still due.'
      },

      {
        question: 'What is bill-wise tracking in TallyPrime?',
        answer:
          'Bill-wise tracking connects accounting transactions, such as credit sales and purchases, to individual bills. It helps businesses monitor partial payments, outstanding balances, and due dates.'
      },

      {
        question: 'What is the difference between receivables and payables?',
        answer:
          'Receivables represent money customers owe the business and are generally classified as assets. Payables represent money the business owes suppliers and are generally classified as liabilities.'
      },

      {
        question: 'Can TallyPrime track overdue customer payments?',
        answer:
          'Yes. With accurate bill-wise details and due-date information, the relevant outstanding and ageing reports can help identify overdue customer payments.'
      },

      {
        question: 'Can TallyPrime track partial payments?',
        answer:
          'Yes. When payments and receipts are correctly allocated against outstanding bills, the remaining balance can be tracked for partially settled invoices.'
      },

      {
        question: 'How often should businesses review receivables and payables?',
        answer:
          'The review frequency depends on the business transaction volume and cash flow requirements. Many businesses review important outstanding balances daily or weekly and conduct a more detailed reconciliation periodically.'
      },

      {
        question: 'Why are receivables and payables important for accountants?',
        answer:
          'They help accountants monitor collections, plan supplier payments, maintain accurate ledger balances, identify overdue invoices, and support working capital management.'
      }

    ];

    const schema = {

      '@context': 'https://schema.org',

      '@type': 'FAQPage',

      mainEntity: questions.map((item) => ({

        '@type': 'Question',

        name: item.question,

        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }

      }))

    };

    this.upsertJsonLd(
      'receivables-payables-faq-schema',
      schema
    );
  }

  // ========================================================
  // INSERT OR UPDATE JSON-LD
  // ========================================================

  private upsertJsonLd(
    id: string,
    data: Record<string, unknown>
  ): void {

    let script = this.document.getElementById(
      id
    ) as HTMLScriptElement | null;

    if (!script) {

      script = this.document.createElement('script');

      script.type = 'application/ld+json';

      script.id = id;

      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }

}