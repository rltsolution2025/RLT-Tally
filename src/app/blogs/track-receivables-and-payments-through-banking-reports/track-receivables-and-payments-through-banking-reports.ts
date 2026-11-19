import {
  Component,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-track-receivables-and-payments-through-banking-reports',
  styleUrl: './track-receivables-and-payments-through-banking-reports.css',
  templateUrl: './track-receivables-and-payments-through-banking-reports.html',
})
export class TrackReceivablesAndPaymentsThroughBankingReports
  implements OnInit, OnDestroy {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Track Receivables and Payments in TallyPrime';

  private readonly description =
    'Learn how to track receivables, monitor customer payments, review banking reports, and reconcile bank transactions in TallyPrime with practical examples.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/track-receivables-and-payments-through-banking-reports/';

  private readonly schemaScriptIds = [
    'track-receivables-article-schema',
    'track-receivables-breadcrumb-schema',
    'track-receivables-faq-schema',
  ];

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
    this.addFaqSchema();
  }

  ngOnDestroy(): void {
    this.schemaScriptIds.forEach((id) => {
      this.document.getElementById(id)?.remove();
    });
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Article section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(
      null,
      '',
      `#${sectionId}`
    );

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrollToTop(event: Event): void {
    event.preventDefault();

    this.document.defaultView?.history.replaceState(
      null,
      '',
      '#top'
    );

    this.document.getElementById('top')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({
      name: 'description',
      content: this.description,
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'How to track receivables and payments through banking reports, track receivables in TallyPrime, TallyPrime banking reports, TallyPrime Bank Book, bank reconciliation in TallyPrime, customer outstanding report, supplier payment tracking',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    // Open Graph metadata
    this.meta.updateTag({
      property: 'og:type',
      content: 'article',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.pageTitle,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.canonicalUrl,
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    // Twitter metadata
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: this.pageTitle,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: this.description,
    });
  }

  private setCanonicalUrl(): void {
    let canonical =
      this.document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    this.upsertJsonLd(
      'track-receivables-article-schema',
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: this.pageTitle,
        description: this.description,
        url: this.canonicalUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': this.canonicalUrl,
        },
        author: {
          '@type': 'Organization',
          name: 'RLT Edzaro',
        },
        publisher: {
          '@type': 'Organization',
          name: 'RLT Edzaro',
          url: 'https://rltedzaro.com/',
        },
        articleSection: 'TallyPrime Accounting and Banking Reports',
        inLanguage: 'en-IN',
      }
    );
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd(
      'track-receivables-breadcrumb-schema',
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
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
            name: 'Blogs',
            item: 'https://rltedzaro.com/blogs',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: this.pageTitle,
            item: this.canonicalUrl,
          },
        ],
      }
    );
  }

  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How can I check customer outstanding payments in TallyPrime?',
        answer:
          "Open the relevant outstanding statements or receivables report and review the customer balances and bill references. The available details depend on the company's accounting configuration.",
      },
      {
        question: 'Which TallyPrime report is used to track bank transactions?',
        answer:
          'The Bank Book is commonly used to review transactions recorded against a bank ledger. The Bank Reconciliation report helps compare recorded transactions with the bank statement.',
      },
      {
        question: 'What is the difference between receivables and bank balance?',
        answer:
          'Receivables represent amounts customers owe the business. The bank balance represents the amount recorded in the bank account ledger, subject to reconciliation with the actual bank statement.',
      },
      {
        question: 'How do I record a customer payment in TallyPrime?',
        answer:
          'Use a Receipt voucher, select the appropriate customer and bank or cash ledger, enter the amount, and allocate the receipt against the correct outstanding bill where applicable.',
      },
      {
        question: 'How do I check overdue customer invoices in TallyPrime?',
        answer:
          'Review the receivables or outstanding bills report and use the available due-date or ageing options. Ensure the credit period and bill references are configured correctly.',
      },
      {
        question: 'Why is bank reconciliation important?',
        answer:
          'Bank reconciliation helps identify timing differences, missing transactions, bank charges, duplicate entries, and other discrepancies between the accounting records and bank statement.',
      },
      {
        question: 'Can TallyPrime help track supplier payments?',
        answer:
          'Yes. Payables or outstanding bills reports help monitor supplier balances, while Payment vouchers and the Bank Book help track recorded payments.',
      },
      {
        question: 'How often should a business reconcile its bank account?',
        answer:
          "The frequency depends on the volume of transactions and the business's internal controls. Many businesses reconcile bank accounts monthly, while businesses with frequent transactions may benefit from more frequent reviews.",
      },
    ];

    this.upsertJsonLd(
      'track-receivables-faq-schema',
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    );
  }

  private upsertJsonLd(
    id: string,
    schema: Record<string, unknown>
  ): void {
    let script =
      this.document.head.querySelector<HTMLScriptElement>(
        `script#${id}`
      );

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}
