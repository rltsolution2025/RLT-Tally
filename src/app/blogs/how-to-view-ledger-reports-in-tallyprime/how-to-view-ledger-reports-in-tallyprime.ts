import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-view-ledger-reports-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-view-ledger-reports-in-tallyprime.html',
  styleUrl: './how-to-view-ledger-reports-in-tallyprime.css'
})
export class HowToViewLedgerReportsInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to View Ledger Reports in TallyPrime';
  private readonly description = 'Learn how to view ledger reports in TallyPrime, check debit and credit transactions, filter dates, review closing balances, and troubleshoot ledger report errors.';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-view-ledger-reports-in-tallyprime/';

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addFaqSchema();
  }

  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({
      name: 'keywords',
      content: 'TallyPrime ledger report, how to check ledger balance in TallyPrime, view ledger entries in TallyPrime, TallyPrime account ledger, ledger report shortcut key'
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.description });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: 'RLT Edzaro' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.description });
  }

  private setCanonicalUrl(): void {
    let canonicalElement = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonicalElement) {
      canonicalElement = this.document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalElement);
    }

    canonicalElement.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.description,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.canonicalUrl
      },
      author: {
        '@type': 'Organization',
        name: 'RLT Edzaro'
      },
      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      }
    };

    this.upsertJsonLd('ledger-report-article-schema', articleSchema);
  }

  private addFaqSchema(): void {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I view a ledger report in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open the relevant company, navigate to the Ledger or Ledger Vouchers report, select the required ledger, and set the reporting period. You can then review the transactions and balances.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the shortcut key to change the date range in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alt+F2 is commonly used to change the reporting period in TallyPrime. The shortcut may depend on the current screen and release.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I view a ledger report for a specific month?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Use the reporting period option to select the starting and ending dates for the required month.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I check a customer outstanding balance in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open the customer\'s ledger report, select the relevant period, and review invoices, receipts, and other adjustments. You can also use the appropriate outstanding reports to examine unpaid invoices.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I view a bank ledger in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open the Ledger report, select the relevant bank account, and set the reporting period. Review deposits, withdrawals, transfers, and other recorded transactions.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I export ledger reports from TallyPrime to Excel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TallyPrime provides report export options, with the available formats depending on the report and software version. Open the ledger report and review the available export formats.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a ledger and a ledger report?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A ledger is an account used to record transactions relating to a particular category, person, or account. A ledger report displays the recorded transactions and balances for that account.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why is my ledger closing balance showing incorrectly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An incorrect closing balance may result from an inaccurate opening balance, missing transactions, incorrect ledger allocations, or duplicate entries. Review the ledger transactions and supporting vouchers to identify the cause.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is learning ledger reports important for accounting jobs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ledger reports are used in everyday accounting tasks such as checking transactions, verifying balances, tracking receivables and payables, and supporting reconciliation. Practising these reports in TallyPrime helps learners develop practical accounting skills.'
          }
        }
      ]
    };

    this.upsertJsonLd('ledger-report-faq-schema', faqSchema);
  }

  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }

    script.text = JSON.stringify(schema);
  }
}
