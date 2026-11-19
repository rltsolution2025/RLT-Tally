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
  selector: 'app-how-to-record-bank-transactions-in-tallyprime',
  styleUrl: './how-to-record-bank-transactions-in-tallyprime.css',
  templateUrl: './how-to-record-bank-transactions-in-tallyprime.html',
})
export class HowToRecordBankTransactionsInTallyprime
  implements OnInit, OnDestroy {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Record Bank Transactions in TallyPrime';

  private readonly description =
    'Learn how to record bank transactions in TallyPrime, including bank receipts, payments, transfers, cheque entries, and bank reconciliation with practical examples.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/how-to-record-bank-transactions-in-tallyprime/';

  private readonly schemaScriptIds = [
    'bank-transactions-article-schema',
    'bank-transactions-breadcrumb-schema',
    'bank-transactions-faq-schema',
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

  // Scroll to a particular article section
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

  // Scroll back to the top of the article
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

  // SEO metadata
  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({
      name: 'description',
      content: this.description,
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'How to record bank transactions in TallyPrime, bank entries in TallyPrime, TallyPrime bank payment entry, TallyPrime receipt voucher, Contra entry in TallyPrime, bank reconciliation in TallyPrime',
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

  // Canonical URL
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

  // Article structured data
  private addArticleSchema(): void {
    this.upsertJsonLd(
      'bank-transactions-article-schema',
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
        articleSection: 'TallyPrime Accounting',
        inLanguage: 'en-IN',
      }
    );
  }

  // Breadcrumb structured data
  private addBreadcrumbSchema(): void {
    this.upsertJsonLd(
      'bank-transactions-breadcrumb-schema',
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

  // FAQ structured data
  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How do I record bank transactions in TallyPrime?',
        answer:
          'Create or verify the bank ledger, select the appropriate Receipt, Payment, Contra, or other relevant voucher, enter the transaction details, and save the entry. Review the bank ledger and relevant reports afterwards.',
      },
      {
        question: 'Which voucher is used for bank receipts in TallyPrime?',
        answer:
          'A Receipt voucher is commonly used to record money received into the bank, such as a customer payment or bank interest. Select the appropriate ledger based on the nature of the receipt.',
      },
      {
        question: 'Which voucher is used for bank payments?',
        answer:
          'A Payment voucher is commonly used for money paid from the bank, such as rent, supplier settlements, or bank charges.',
      },
      {
        question: 'What is a Contra voucher in TallyPrime?',
        answer:
          "A Contra voucher is generally used to record transfers between cash and bank accounts or between eligible bank accounts. Examples include cash deposits, cash withdrawals, and transfers between the company's own bank accounts.",
      },
      {
        question: 'How do I record bank charges in TallyPrime?',
        answer:
          'Create or select the Bank Charges expense ledger, open a Payment voucher, select the bank account and Bank Charges ledger, enter the amount, and save the voucher. Verify any separately charged GST where applicable.',
      },
      {
        question: 'How do I reconcile bank transactions in TallyPrime?',
        answer:
          'Open the relevant bank reconciliation feature, compare the book entries with the bank statement, mark or enter the relevant reconciliation details, and investigate unmatched transactions. Record missing entries only after verifying them.',
      },
      {
        question:
          'Can I record NEFT, RTGS, IMPS, and UPI transactions in TallyPrime?',
        answer:
          'Yes. These transactions can generally be recorded using the appropriate accounting voucher and bank ledger. Include the relevant transaction reference and reconcile the entry with the bank statement.',
      },
      {
        question:
          'Why does my bank balance differ from the bank statement?',
        answer:
          'Differences may arise from unrecorded bank charges, interest, outstanding cheques, deposits in transit, timing differences, or incorrect entries. Review the bank statement and reconciliation report to identify the actual cause.',
      },
      {
        question: 'Can beginners learn bank accounting in TallyPrime?',
        answer:
          'Yes. Beginners can practise bank receipts, payments, cash transfers, bank charges, interest entries, and reconciliation using a test company. Understanding the accounting logic behind each entry is as important as learning the software steps.',
      },
    ];

    this.upsertJsonLd(
      'bank-transactions-faq-schema',
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

  // Insert or update JSON-LD structured data
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