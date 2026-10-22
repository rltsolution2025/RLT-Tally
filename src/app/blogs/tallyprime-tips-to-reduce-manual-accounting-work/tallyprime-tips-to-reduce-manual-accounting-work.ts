import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tallyprime-tips-to-reduce-manual-accounting-work',
  standalone: true,
  imports: [],
  templateUrl: './tallyprime-tips-to-reduce-manual-accounting-work.html',
  styleUrl: './tallyprime-tips-to-reduce-manual-accounting-work.css',
})
export class TallyprimeTipsToReduceManualAccountingWork implements OnInit {
  private readonly pageTitle =
    'TallyPrime Tips to Reduce Manual Accounting Work';

  private readonly pageDescription =
    'Discover 12 practical TallyPrime tips to reduce manual accounting work, automate GST calculations, speed up voucher entry, manage inventory, and improve accounting accuracy.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/tallyprime-tips-to-reduce-manual-accounting-work/';

  private readonly faqs = [
    {
      question: 'How can I reduce manual accounting work in TallyPrime?',
      answer:
        'You can reduce manual accounting work by using voucher shortcuts, configuring ledgers correctly, using GST calculations, reconciling bank statements with supported features, maintaining inventory within TallyPrime, and generating reports directly from recorded transactions.',
    },
    {
      question: 'Does TallyPrime automatically calculate GST?',
      answer:
        'TallyPrime can calculate applicable GST when the company, ledger, stock item or service, and transaction settings are configured correctly. Verify the tax rate, classification, and final calculation before saving a transaction.',
    },
    {
      question: 'Can TallyPrime reduce manual data entry?',
      answer:
        "Yes. Features such as predefined ledgers, structured vouchers, supported data imports, and configured accounting workflows can reduce repetitive data entry. The extent of automation depends on the business's processes and configuration.",
    },
    {
      question: 'Can I import accounting data into TallyPrime?',
      answer:
        'TallyPrime supports import workflows for supported data types and formats. The source data must follow the applicable requirements, and imported records should be checked for duplicate entries, incorrect mappings, and other errors.',
    },
    {
      question: 'How does TallyPrime help with bank reconciliation?',
      answer:
        'Its bank reconciliation capabilities help users compare bank ledger entries with bank statement information. Supported matching and reconciliation features can reduce repetitive checking, while unmatched transactions still need review.',
    },
    {
      question: 'Which TallyPrime reports help accountants save time?',
      answer:
        'Useful reports include the Day Book, Trial Balance, Profit and Loss Account, Balance Sheet, Stock Summary, and outstanding receivables and payables reports. These help accountants review recorded information without manually preparing every summary.',
    },
    {
      question: 'Is TallyPrime suitable for small businesses?',
      answer:
        "TallyPrime can help small businesses manage accounting, GST-related records, inventory, and financial reporting. The most suitable configuration depends on the business's requirements and transaction volume.",
    },
    {
      question: 'Do accounting students need to learn TallyPrime shortcuts?',
      answer:
        'Yes. Learning commonly used shortcuts can improve speed and reduce unnecessary navigation during routine accounting tasks. Students should also understand the underlying accounting concepts and verify their entries.',
    },
    {
      question: 'Does accounting automation eliminate the need for accountants?',
      answer:
        'No. Software can reduce repetitive work, but accountants are still needed to verify transactions, apply accounting principles, investigate discrepancies, review tax treatment, and interpret financial information.',
    },
  ];

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.setPageMetadata();
    this.setStructuredData();
  }

  /** Smooth-scroll to a section from the article table of contents. */
  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);
    if (!target) {
      console.warn(`[TallyPrime accounting guide] Section not found: ${sectionId}`);
      return;
    }

    const view = this.document.defaultView;
    if (view) {
      view.history.replaceState(null, '', `#${sectionId}`);
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  private setPageMetadata(): void {
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({
      name: 'description',
      content: this.pageDescription,
    });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    this.metaService.updateTag({
      name: 'keywords',
      content: [
        'TallyPrime tips to reduce manual accounting work',
        'TallyPrime accounting shortcuts',
        'reduce manual data entry in accounting',
        'TallyPrime GST calculations',
        'TallyPrime bank reconciliation',
        'TallyPrime inventory management',
        'TallyPrime financial reports',
        'TallyPrime accounting workflow',
      ].join(', '),
    });

    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({
      property: 'og:description',
      content: this.pageDescription,
    });
    this.metaService.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.metaService.updateTag({
      name: 'twitter:description',
      content: this.pageDescription,
    });

    let canonical = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = this.canonicalUrl;
  }

  private setStructuredData(): void {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: this.pageTitle,
          description: this.pageDescription,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': this.canonicalUrl,
          },
          url: this.canonicalUrl,
          inLanguage: 'en-IN',
          articleSection: 'Tally & Finance',
          keywords: [
            'TallyPrime accounting shortcuts',
            'GST calculations in TallyPrime',
            'TallyPrime bank reconciliation',
            'TallyPrime inventory management',
            'TallyPrime reports',
          ],
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
              name: this.pageTitle,
              item: this.canonicalUrl,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: this.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const scriptId = 'tallyprime-tips-manual-accounting-structured-data';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }
}
