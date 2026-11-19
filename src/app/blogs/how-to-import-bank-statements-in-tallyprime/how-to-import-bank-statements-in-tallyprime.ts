import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-how-to-import-bank-statements-in-tallyprime',
  styleUrl: './how-to-import-bank-statements-in-tallyprime.css',
  templateUrl: './how-to-import-bank-statements-in-tallyprime.html',
})
export class HowToImportBankStatementsInTallyprime implements OnInit, OnDestroy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Import Bank Statements into TallyPrime: Step-by-Step Guide';

  private readonly description =
    'Learn how to import bank statements into TallyPrime, configure bank ledgers, import supported statement files, reconcile transactions, and fix common errors.';

  private readonly keywords =
    'How to import bank statements into TallyPrime, TallyPrime bank statement import, bank reconciliation in TallyPrime, import bank transactions into TallyPrime, TallyPrime bank reconciliation process, bank statement Excel import';

  // Canonical URL follows the suggested article URL slug.
  private readonly canonicalUrl =
    'https://rltedzaro.com/how-to-import-bank-statements-into-tallyprime/';

  private readonly schemaScriptIds = [
    'bank-statement-import-article-schema',
    'bank-statement-import-breadcrumb-schema',
    'bank-statement-import-faq-schema',
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

  /** Smooth-scroll to a table-of-contents section. */
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

  /** Return the reader to the top of the article. */
  scrollToTop(event: Event): void {
    event.preventDefault();

    this.document.defaultView?.history.replaceState(null, '', '#top');

    this.document.getElementById('top')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  /** Set title, description, keywords, Open Graph, and Twitter metadata. */
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

  /** Create or update the canonical link element. */
  private setCanonicalUrl(): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  /** Article structured data. */
  private addArticleSchema(): void {
    this.upsertJsonLd('bank-statement-import-article-schema', {
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
    });
  }

  /** Breadcrumb structured data. */
  private addBreadcrumbSchema(): void {
    this.upsertJsonLd('bank-statement-import-breadcrumb-schema', {
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
          name: 'How to Import Bank Statements into TallyPrime',
          item: this.canonicalUrl,
        },
      ],
    });
  }

  /** FAQ structured data. Keep these answers aligned with the visible FAQ HTML. */
  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How do I import bank statements into TallyPrime?',
        answer:
          'Open the relevant company, verify the bank ledger, download a statement in a supported format, and use the bank statement import workflow available in your TallyPrime version. Review the imported transactions and reconcile them with the accounting records.',
      },
      {
        question: 'Can I import an Excel bank statement into TallyPrime?',
        answer:
          'This depends on your TallyPrime release and the import method. Some workflows support particular spreadsheet formats or templates, while others require a supported bank-specific format or import utility. Check the current documentation before modifying the file.',
      },
      {
        question: 'Can I import a PDF bank statement into TallyPrime?',
        answer:
          'Direct PDF import is not available in every bank statement workflow. You may need to obtain a supported statement format from the bank or convert the data into the required structure using an appropriate method.',
      },
      {
        question: 'Does importing a bank statement automatically create accounting vouchers?',
        answer:
          'Not necessarily. Depending on the workflow, imported data may be used for reconciliation, voucher creation, or both. Review the available options and confirm whether transactions have been posted to the books before creating additional vouchers.',
      },
      {
        question: 'Why is bank reconciliation important after importing a statement?',
        answer:
          'Reconciliation helps verify that the bank transactions agree with the accounting records. It identifies missing entries, duplicate records, timing differences, and other discrepancies that may need investigation.',
      },
      {
        question: 'How often should a business reconcile its bank account?',
        answer:
          'Many businesses reconcile their bank accounts monthly. Businesses with frequent transactions or tighter reporting requirements may benefit from more frequent reconciliation.',
      },
      {
        question: 'Can beginners learn bank reconciliation in TallyPrime?',
        answer:
          'Yes. Beginners can practise bank ledger setup, statement review, transaction matching, recording missing entries, and reconciliation using a sample company and statement.',
      },
    ];

    this.upsertJsonLd('bank-statement-import-faq-schema', {
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
    });
  }

  /** Insert JSON-LD into the document head, or update it if it already exists. */
  private upsertJsonLd(
    id: string,
    schema: Record<string, unknown>
  ): void {
    let script = this.document.head.querySelector<HTMLScriptElement>(
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
