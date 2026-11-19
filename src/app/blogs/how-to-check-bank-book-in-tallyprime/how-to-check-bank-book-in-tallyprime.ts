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
  selector: 'app-how-to-check-bank-book-in-tallyprime',
  styleUrl: './how-to-check-bank-book-in-tallyprime.css',
  templateUrl: './how-to-check-bank-book-in-tallyprime.html',
})
export class HowToCheckBankBookInTallyprime
  implements OnInit, OnDestroy {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Check Bank Book in TallyPrime: Step-by-Step Guide';

  private readonly description =
    'Learn how to check the Bank Book in TallyPrime, view bank transactions, filter dates, verify balances, and reconcile bank statements with practical examples.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/how-to-check-bank-book-in-tallyprime/';

  private readonly schemaScriptIds = [
    'bank-book-article-schema',
    'bank-book-breadcrumb-schema',
    'bank-book-faq-schema',
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

  // Scroll to a selected article section
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
        'How to check Bank Book in TallyPrime, Bank Book in TallyPrime, TallyPrime Bank Book report, how to view bank transactions in TallyPrime, check bank balance in TallyPrime, bank reconciliation in TallyPrime',
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
      'bank-book-article-schema',
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
      'bank-book-breadcrumb-schema',
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
        question: 'How do I open the Bank Book in TallyPrime?',
        answer:
          'Open your company, navigate to the relevant account books or cash/bank reports, and select the required bank ledger. The exact menu path may vary depending on your TallyPrime release.',
      },
      {
        question: 'Can I check the Bank Book for a specific month?',
        answer:
          'Yes. Open the Bank Book and set the report period to the first and last dates of the required month.',
      },
      {
        question: 'How do I check the closing balance in TallyPrime?',
        answer:
          'Open the relevant Bank Book and review the closing balance for the selected period. Verify that the opening balance and recorded receipts and payments are correct.',
      },
      {
        question:
          'Why is my Bank Book balance different from my bank statement?',
        answer:
          'The difference may result from outstanding cheques, deposits in transit, unrecorded bank charges, interest entries, or accounting errors. Bank reconciliation helps identify the cause.',
      },
      {
        question:
          'Can I view individual bank transactions in TallyPrime?',
        answer:
          'Yes. Select the relevant transaction in the Bank Book and open its voucher to review the associated accounting details.',
      },
      {
        question:
          'What is the difference between a Bank Book and a Cash Book?',
        answer:
          'A Bank Book records transactions related to bank accounts, while a Cash Book records transactions related to cash. Both help businesses monitor receipts, payments, and balances.',
      },
      {
        question:
          'Is learning the Bank Book important for accounting jobs?',
        answer:
          'Yes. Understanding the Bank Book helps accounting professionals review receipts and payments, verify balances, investigate discrepancies, and perform bank reconciliation.',
      },
    ];

    this.upsertJsonLd(
      'bank-book-faq-schema',
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