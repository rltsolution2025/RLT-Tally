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
  selector: 'app-tallyprime-banking-features-for-accountants',
  styleUrl: './tallyprime-banking-features-for-accountants.css',
  templateUrl: './tallyprime-banking-features-for-accountants.html',
})
export class TallyprimeBankingFeaturesForAccountants
  implements OnInit, OnDestroy {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'TallyPrime Banking Features Every Accountant Should Know';

  private readonly description =
    'Discover essential TallyPrime banking features, including bank reconciliation, cheque management, payment tracking, bank statements, and accounting reports.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/tallyprime-banking-features-for-accountants/';

  private readonly schemaScriptIds = [
    'tallyprime-banking-features-article-schema',
    'tallyprime-banking-features-breadcrumb-schema',
    'tallyprime-banking-features-faq-schema',
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
        'TallyPrime banking features, TallyPrime bank reconciliation, bank statement import in TallyPrime, TallyPrime payment voucher, TallyPrime receipt voucher, TallyPrime contra entry, banking features for accountants',
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
      'tallyprime-banking-features-article-schema',
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
        articleSection: 'TallyPrime Banking and Accounting',
        inLanguage: 'en-IN',
      }
    );
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd(
      'tallyprime-banking-features-breadcrumb-schema',
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
        question: 'What are the main banking features in TallyPrime?',
        answer:
          'Important banking-related capabilities include bank reconciliation, supported bank statement import, cheque-related workflows, payment and receipt vouchers, contra vouchers, bank ledger reports, and outstanding reports.',
      },
      {
        question: 'How do I perform bank reconciliation in TallyPrime?',
        answer:
          'Open the relevant bank ledger and access the Bank Reconciliation report or feature. Compare the book transactions with the bank statement, enter or import the required statement details using the supported workflow, and investigate unmatched transactions.',
      },
      {
        question: 'Can TallyPrime import bank statements?',
        answer:
          'TallyPrime supports bank statement import for supported banks and formats, subject to the relevant version and configuration. Verify the supported statement format before importing.',
      },
      {
        question:
          'What is the difference between a payment voucher and a receipt voucher?',
        answer:
          'A payment voucher records money paid out, while a receipt voucher records money received. Both help maintain accurate records of business cash and bank transactions.',
      },
      {
        question: 'What is a Contra voucher in TallyPrime?',
        answer:
          'A Contra voucher is generally used for eligible transactions involving transfers between cash and bank accounts or between bank accounts. It helps record internal fund movements without treating them as sales income or business expenses.',
      },
      {
        question: 'Why is bank reconciliation important for accountants?',
        answer:
          'Bank reconciliation helps accountants identify missing transactions, timing differences, incorrect entries, and unexpected bank statement items. It supports accurate accounting and better financial control.',
      },
      {
        question: 'Can beginners learn banking in TallyPrime?',
        answer:
          'Yes. Beginners can practise payment vouchers, receipt vouchers, contra entries, bank ledger maintenance, and reconciliation using a properly configured practice company.',
      },
      {
        question: 'Does TallyPrime replace internet banking?',
        answer:
          "No. TallyPrime is accounting software that helps record and manage financial transactions. It does not replace the bank's own services, account controls, or banking authorisation process.",
      },
    ];

    this.upsertJsonLd(
      'tallyprime-banking-features-faq-schema',
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
