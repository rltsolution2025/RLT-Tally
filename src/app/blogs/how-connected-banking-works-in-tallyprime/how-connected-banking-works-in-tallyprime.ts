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
  selector: 'app-how-connected-banking-works-in-tallyprime',
  styleUrl: './how-connected-banking-works-in-tallyprime.css',
  templateUrl: './how-connected-banking-works-in-tallyprime.html',
})
export class HowConnectedBankingWorksInTallyprime
  implements OnInit, OnDestroy {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How Connected Banking Works in TallyPrime';

  private readonly description =
    'Learn how Connected Banking works in TallyPrime, how to connect bank accounts, check live balances, fetch bank statements, and simplify banking and accounting.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/how-connected-banking-works-in-tallyprime/';

  private readonly schemaScriptIds = [
    'connected-banking-article-schema',
    'connected-banking-breadcrumb-schema',
    'connected-banking-faq-schema',
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
        'How Connected Banking Works in TallyPrime, TallyPrime Connected Banking, Connected Banking features, how to connect bank account in TallyPrime, TallyPrime bank statement, TallyPrime bank balance, bank reconciliation in TallyPrime',
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
      'connected-banking-article-schema',
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
        articleSection: 'TallyPrime Banking',
        inLanguage: 'en-IN',
      }
    );
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd(
      'connected-banking-breadcrumb-schema',
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
        question: 'What is Connected Banking in TallyPrime?',
        answer:
          'Connected Banking is a feature that allows users to access supported bank accounts and banking services from within TallyPrime. It can provide bank balances, statements, reconciliation support, and online payment functionality where available.',
      },
      {
        question: 'Which TallyPrime version supports Connected Banking?',
        answer:
          'Connected Banking was introduced in TallyPrime Release 6.0. Check the current official requirements for your particular bank and feature before enabling it.',
      },
      {
        question:
          'Can I check my bank balance in TallyPrime without opening my bank website?',
        answer:
          'Yes. Once Connected Banking is enabled and your bank account is connected, you can retrieve the available bank balance through the Get Balance option, subject to the bank\'s supported services and a successful connection.',
      },
      {
        question: 'Can I download bank statements directly into TallyPrime?',
        answer:
          'You can request bank statements through Connected Banking for supported bank accounts and selected periods. The statement can then be used in the relevant accounting and reconciliation workflow.',
      },
      {
        question:
          'Does Connected Banking automatically reconcile every bank transaction?',
        answer:
          'No. Connected Banking makes bank information available within TallyPrime and helps streamline reconciliation. Accountants must still review unmatched transactions, investigate differences, and ensure the books are accurate.',
      },
      {
        question: 'Can I make payments directly from TallyPrime?',
        answer:
          'Yes, for supported bank connections and payment features. Availability depends on the bank, account type, activation settings, and required authentication. Verify the current supported payment options before using the feature.',
      },
      {
        question: 'Is a Tally.NET ID required for Connected Banking?',
        answer:
          'Yes. A Tally.NET ID associated with the licence is required, along with the applicable login and mobile verification process.',
      },
      {
        question: 'Is Connected Banking useful for small businesses?',
        answer:
          'Yes. Small businesses can use it to check bank balances, access statements, and simplify the reconciliation process. The practical benefits depend on their bank\'s support and how frequently they process transactions.',
      },
      {
        question:
          'What is the difference between Connected Banking and bank reconciliation?',
        answer:
          'Connected Banking provides access to supported banking information and services. Bank reconciliation is the process of comparing bank transactions with the entries recorded in the company\'s books. Connected Banking can make that process easier, but reconciliation still requires appropriate review.',
      },
    ];

    this.upsertJsonLd(
      'connected-banking-faq-schema',
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
