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
  selector: 'app-tallyprime-bank-reconciliation-practical-example',
  styleUrl: './tallyprime-bank-reconciliation-practical-example.css',
  templateUrl: './tallyprime-bank-reconciliation-practical-example.html',
})
export class TallyprimeBankReconciliationPracticalExample
  implements OnInit, OnDestroy {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'TallyPrime Bank Reconciliation: Step-by-Step Guide';

  private readonly description =
    'Learn bank reconciliation in TallyPrime with a practical example. Understand bank statement matching, unreconciled transactions, BRS, and common errors.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/tallyprime-bank-reconciliation-practical-example/';

  private readonly schemaScriptIds = [
    'bank-reconciliation-practical-article-schema',
    'bank-reconciliation-practical-breadcrumb-schema',
    'bank-reconciliation-practical-faq-schema',
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
        'TallyPrime Bank Reconciliation, bank reconciliation in TallyPrime, TallyPrime BRS, bank reconciliation statement example, how to reconcile bank statements in TallyPrime, practical bank reconciliation example',
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
      'bank-reconciliation-practical-article-schema',
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
        articleSection: 'TallyPrime Banking and Reconciliation',
        inLanguage: 'en-IN',
      }
    );
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd(
      'bank-reconciliation-practical-breadcrumb-schema',
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
        question: 'What is bank reconciliation in TallyPrime?',
        answer:
          "Bank reconciliation in TallyPrime is the process of comparing transactions recorded in a company's bank ledger with the transactions shown in the bank statement and identifying the reasons for any differences.",
      },
      {
        question: 'How do I open Bank Reconciliation in TallyPrime?',
        answer:
          'Open the relevant company, navigate to the bank ledger or available banking reports, and select the Bank Reconciliation option. The exact navigation may vary depending on the TallyPrime release.',
      },
      {
        question: 'What is a bank date in TallyPrime?',
        answer:
          "A bank date is the date on which a transaction is reflected or cleared by the bank, as shown in the bank statement. It may differ from the date on which the transaction was recorded in the company's books.",
      },
      {
        question:
          'Why does my TallyPrime bank balance differ from my bank statement?',
        answer:
          'Differences may arise from outstanding cheques, deposits awaiting credit, bank charges, interest, missing entries, duplicate transactions, or incorrect amounts and dates.',
      },
      {
        question: 'How do I record bank charges in TallyPrime?',
        answer:
          'Create or select the appropriate bank charges expense ledger and record a payment or accounting voucher that debits bank charges and credits the bank account. Then reconcile the entry against the bank statement.',
      },
      {
        question: 'Do I need to reconcile my bank account every month?',
        answer:
          'Monthly reconciliation is a common practice because it helps businesses identify discrepancies and prepare accurate financial reports. Businesses with frequent transactions may benefit from more frequent reconciliation.',
      },
      {
        question:
          'What is the difference between bank reconciliation and a bank reconciliation statement?',
        answer:
          'Bank reconciliation is the process of comparing bank records with accounting records. A bank reconciliation statement (BRS) summarises the differences between the two balances and explains the adjustments or timing differences that cause them.',
      },
      {
        question: 'Can beginners learn bank reconciliation using TallyPrime?',
        answer:
          'Yes. Beginners can practise matching bank transactions, entering bank dates, recording bank charges, identifying outstanding cheques, and preparing reconciliation statements using a sample company.',
      },
    ];

    this.upsertJsonLd(
      'bank-reconciliation-practical-faq-schema',
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
