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
  selector: 'app-match-bank-transactions-with-tallyprime-entries',
  styleUrl: './match-bank-transactions-with-tallyprime-entries.css',
  templateUrl: './match-bank-transactions-with-tallyprime-entries.html',
})
export class MatchBankTransactionsWithTallyprimeEntries
  implements OnInit, OnDestroy {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Match Bank Transactions With TallyPrime Entries';

  private readonly description =
    'Learn how to match bank transactions with TallyPrime entries, perform bank reconciliation, identify mismatches, and maintain accurate accounting records with practical examples.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/match-bank-transactions-with-tallyprime-entries/';

  private readonly schemaScriptIds = [
    'match-bank-transactions-article-schema',
    'match-bank-transactions-breadcrumb-schema',
    'match-bank-transactions-faq-schema',
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
        'How to match bank transactions with TallyPrime entries, bank reconciliation in TallyPrime, match bank statement with TallyPrime, TallyPrime bank reconciliation process, bank statement reconciliation, bank transactions in TallyPrime',
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
      'match-bank-transactions-article-schema',
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
      'match-bank-transactions-breadcrumb-schema',
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
        question: 'How do I match bank transactions in TallyPrime?',
        answer:
          'Open the relevant company, access the bank ledger and bank reconciliation report, compare the accounting entries with the bank statement, and mark matching transactions using the available reconciliation workflow. Investigate unmatched items and record missing transactions where necessary.',
      },
      {
        question:
          'What is the difference between bank reconciliation and bank transaction matching?',
        answer:
          'Bank transaction matching identifies which bank statement transactions correspond to entries in the accounting books. Bank reconciliation is the broader process of matching those transactions, recording missing items, identifying timing differences, and explaining differences between balances.',
      },
      {
        question: 'Can I import a bank statement into TallyPrime?',
        answer:
          'Supported TallyPrime versions and banking configurations may allow bank statement import. Availability and compatibility depend on the statement format, bank, and software version. Check the available import options in your installation.',
      },
      {
        question:
          'Why does my TallyPrime bank balance differ from my bank statement?',
        answer:
          'Differences may arise from uncleared cheques, deposits in transit, unrecorded bank charges, interest credits, missing vouchers, duplicate entries, or incorrect transaction details.',
      },
      {
        question: 'How do I record bank charges in TallyPrime?',
        answer:
          'Create or use an appropriate Bank Charges expense ledger and record the bank deduction through the suitable accounting voucher. For example, debit Bank Charges and credit the relevant Bank ledger. Then reconcile the transaction with the bank statement.',
      },
      {
        question:
          'What should I do if a bank transaction is missing in TallyPrime?',
        answer:
          'Verify the transaction against the bank statement and supporting documents. If it is a genuine transaction that has not been recorded, create the appropriate voucher and then reconcile it.',
      },
      {
        question: 'How often should a business reconcile its bank account?',
        answer:
          'Many businesses reconcile monthly. Businesses with frequent transactions or stricter internal controls may reconcile weekly or daily. The appropriate frequency depends on transaction volume, risk, and reporting requirements.',
      },
      {
        question: 'Is bank reconciliation important for accounting jobs?',
        answer:
          'Yes. Bank reconciliation is a practical accounting skill used to verify transactions, identify errors, maintain accurate balances, and support financial reporting. Accounting students should practise it alongside payment vouchers, receipt vouchers, ledger management, and GST accounting.',
      },
    ];

    this.upsertJsonLd(
      'match-bank-transactions-faq-schema',
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
