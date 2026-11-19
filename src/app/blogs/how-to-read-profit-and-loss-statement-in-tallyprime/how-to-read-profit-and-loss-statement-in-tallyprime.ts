import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-read-profit-and-loss-statement-in-tallyprime',
  standalone: true,
  imports: [],
  styleUrl: './how-to-read-profit-and-loss-statement-in-tallyprime.css',
  templateUrl: './how-to-read-profit-and-loss-statement-in-tallyprime.html',
})
export class HowToReadProfitAndLossStatementInTallyprime implements OnInit {
  private readonly pageTitle = 'How to Read a Profit and Loss Statement in TallyPrime';
  private readonly pageDescription =
    'Learn how to view and read a Profit and Loss Statement in TallyPrime. Understand sales, expenses, gross profit, net profit, and practical accounting examples.';
  private readonly pageUrl =
    'https://rltedzaro.com/how-to-read-profit-and-loss-statement-in-tallyprime/';
  private readonly keywords =
    'TallyPrime Profit and Loss report, how to check profit in TallyPrime, P&L statement in TallyPrime, gross profit and net profit in TallyPrime, TallyPrime financial reports';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'keywords', content: this.keywords });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.pageDescription });
    this.meta.updateTag({ property: 'og:url', content: this.pageUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.pageDescription });

    this.setCanonicalUrl();
    this.setStructuredData();
  }

  /** Scroll to an article section and update the URL fragment. */
  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);
    if (!target) {
      console.warn(`Article section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  private setCanonicalUrl(): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.pageUrl);
  }

  private setStructuredData(): void {
    const scriptId = 'profit-loss-tallyprime-structured-data';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    const faqs = [
      {
        name: 'How do I open a Profit and Loss Statement in TallyPrime?',
        text: 'Open the relevant company, navigate to the Profit & Loss A/c report, and select the required reporting period. You can also use the Go To search function in commonly used TallyPrime versions.',
      },
      {
        name: 'What does the Profit and Loss Statement show in TallyPrime?',
        text: 'It summarises the income and expenses recorded for a selected period and shows the resulting profit or loss. The report may also display gross profit and other breakdowns depending on the company accounting configuration.',
      },
      {
        name: 'How do I calculate net profit in TallyPrime?',
        text: 'A simplified calculation is to subtract total expenses from total income. The result is net profit when income exceeds expenses and net loss when expenses exceed income.',
      },
      {
        name: 'Can I view monthly Profit and Loss reports in TallyPrime?',
        text: 'Yes. Select the relevant reporting period to review the figures for a particular month, quarter, or financial year, subject to the options available in your TallyPrime version.',
      },
      {
        name: 'What is the difference between gross profit and net profit?',
        text: 'Gross profit generally measures sales revenue less the cost of goods sold. Net profit reflects the remaining profit after accounting for relevant operating expenses and other applicable income and expenses.',
      },
      {
        name: 'Why is my Profit and Loss Statement showing a loss?',
        text: 'A loss may occur when expenses exceed income. It can also be affected by incorrect ledger classification, missing or duplicate entries, or transactions recorded in the wrong period. Review the underlying ledgers and vouchers before drawing conclusions.',
      },
      {
        name: 'Does a Profit and Loss Statement show cash in the bank?',
        text: 'No. A Profit and Loss Statement measures income and expenses over a period. The bank balance is shown through bank-related accounts and must be assessed separately.',
      },
      {
        name: 'Can beginners learn to analyse a P&L report using TallyPrime?',
        text: 'Yes. Beginners can practise opening the report, identifying income and expenses, calculating profit margins, and comparing periods using a sample company with realistic accounting transactions.',
      },
    ];

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'How to Read a Profit and Loss Statement in TallyPrime: Complete Guide',
          description: this.pageDescription,
          mainEntityOfPage: this.pageUrl,
          author: {
            '@type': 'Organization',
            name: 'RLT Edzaro',
            url: 'https://rltedzaro.com/',
          },
          publisher: {
            '@type': 'Organization',
            name: 'RLT Edzaro',
            url: 'https://rltedzaro.com/',
          },
          inLanguage: 'en-IN',
          keywords: this.keywords,
        },
        {
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
              name: 'How to Read a Profit and Loss Statement in TallyPrime',
              item: this.pageUrl,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.name,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.text,
            },
          })),
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  }
}
