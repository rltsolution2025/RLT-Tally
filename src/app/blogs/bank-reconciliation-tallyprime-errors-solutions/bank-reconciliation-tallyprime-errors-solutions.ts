import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-bank-reconciliation-tallyprime-errors-solutions',
  styleUrl: './bank-reconciliation-tallyprime-errors-solutions.css',
  templateUrl: './bank-reconciliation-tallyprime-errors-solutions.html',
})
export class BankReconciliationTallyprimeErrorsSolutions
  implements OnInit, OnDestroy {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'Bank Reconciliation in TallyPrime: Common Errors and Solutions';

  private readonly description =
    'Learn how to perform bank reconciliation in TallyPrime, identify common bank reconciliation errors, fix mismatched transactions, and maintain accurate accounting records.';

  private readonly keywords =
    'Bank reconciliation in TallyPrime, bank reconciliation errors and solutions, TallyPrime bank reconciliation problems, how to reconcile bank statements in TallyPrime, bank reconciliation statement in TallyPrime, common accounting reconciliation errors';

  private readonly canonicalUrl =
    'https://rltedzaro.com/bank-reconciliation-tallyprime-errors-solutions/';

  private readonly schemaScriptIds = [
    'bank-reconciliation-errors-article-schema',
    'bank-reconciliation-errors-breadcrumb-schema',
    'bank-reconciliation-errors-faq-schema',
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
      content: this.keywords,
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
      'bank-reconciliation-errors-article-schema',
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: this.pageTitle,
        description: this.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': this.canonicalUrl,
        },
        url: this.canonicalUrl,
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
      'bank-reconciliation-errors-breadcrumb-schema',
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
            name: 'Bank Reconciliation in TallyPrime: Common Errors and Solutions',
            item: this.canonicalUrl,
          },
        ],
      }
    );
  }

  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How do I perform bank reconciliation in TallyPrime?',
        answer:
          'Open the relevant company, access the Bank Reconciliation report for the bank ledger, compare the recorded transactions with the bank statement, enter or verify bank dates, and investigate unmatched items. Review the final reconciliation report before closing the period.',
      },
      {
        question: 'Why is my bank balance different in TallyPrime?',
        answer:
          'The difference may be caused by outstanding cheques, deposits in transit, missing bank charges, unrecorded interest, incorrect amounts, duplicate entries, or an opening balance error. Compare both records and identify the underlying cause before making adjustments.',
      },
      {
        question: 'How do I record bank charges in TallyPrime?',
        answer:
          'Record the bank charges using an appropriate payment or accounting voucher. Typically, bank charges are debited to an expense ledger and the bank ledger is credited. Then reconcile the entry against the bank statement.',
      },
      {
        question: 'What is an unreconciled transaction?',
        answer:
          'An unreconciled transaction is an entry that has not yet been matched or confirmed against the corresponding bank statement transaction. It may represent a legitimate timing difference, a missing entry, or an accounting error.',
      },
      {
        question: 'Can TallyPrime automatically reconcile bank transactions?',
        answer:
          'Depending on the TallyPrime release, supported bank, and configuration, bank statement import and automated matching features may be available. Transactions that cannot be matched confidently may still require manual review.',
      },
      {
        question: 'How often should a business perform bank reconciliation?',
        answer:
          'The frequency depends on transaction volume, business requirements, and internal controls. Many businesses reconcile monthly, while businesses with frequent transactions may benefit from weekly or daily checks.',
      },
      {
        question: 'Should I delete a transaction if it does not match the bank statement?',
        answer:
          'No. First determine why the transaction does not match. It may be a valid outstanding cheque, an uncleared deposit, or a timing difference. Correct or reverse an entry only after confirming that it is genuinely wrong or duplicated.',
      },
      {
        question: 'Is bank reconciliation important for accounting students?',
        answer:
          'Yes. Bank reconciliation is a practical accounting skill that helps students understand cash and bank ledgers, payment and receipt vouchers, transaction matching, and error correction. These skills are useful for entry-level accounting and accounts executive roles.',
      },
    ];

    this.upsertJsonLd(
      'bank-reconciliation-errors-faq-schema',
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