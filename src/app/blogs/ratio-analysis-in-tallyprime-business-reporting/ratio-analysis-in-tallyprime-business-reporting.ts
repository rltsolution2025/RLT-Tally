// =========================================================
// RLT EDZARO | TALLYPRIME BLOG
// Component: Ratio Analysis in TallyPrime for Business Reporting
// Angular component file: ratio-analysis-in-tallyprime-business-reporting.ts
// =========================================================

import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ratio-analysis-in-tallyprime-business-reporting',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ratio-analysis-in-tallyprime-business-reporting.html',
  styleUrl: './ratio-analysis-in-tallyprime-business-reporting.css'
})
export class RatioAnalysisInTallyprimeBusinessReporting implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Use Ratio Analysis in TallyPrime for Business Reporting';

  private readonly description =
    'Learn how to use ratio analysis in TallyPrime to evaluate profitability, liquidity, solvency, and business performance with practical examples.';

  private readonly keywords =
    'How to use ratio analysis in TallyPrime, Ratio Analysis in TallyPrime, financial ratios in TallyPrime, TallyPrime business reporting, financial statement analysis, accounting ratios for business';

  private readonly canonicalUrl =
    'https://rltedzaro.com/ratio-analysis-in-tallyprime-business-reporting/';

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
      console.warn(`Article section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({
      name: 'description',
      content: this.description
    });

    this.meta.updateTag({
      name: 'keywords',
      content: this.keywords
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'article'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.pageTitle
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.description
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.canonicalUrl
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: this.pageTitle
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: this.description
    });
  }

  private setCanonicalUrl(): void {
    const head = this.document.head;

    if (!head) {
      return;
    }

    let canonical = head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
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
        name: 'RLT Edzaro'
      },
      articleSection: 'TallyPrime & Accounting',
      keywords: this.keywords
    };

    this.upsertJsonLd('ratio-analysis-article-schema', articleSchema);
  }

  private addFaqSchema(): void {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is ratio analysis in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ratio analysis in TallyPrime involves evaluating financial indicators using accounting information from reports such as the Balance Sheet and Profit & Loss Account. It helps users understand liquidity, profitability, solvency, and operational efficiency.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I open the Ratio Analysis report in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open the relevant company, navigate to the financial reporting area, and look for Ratio Analysis among the available reports. The exact menu path may vary by TallyPrime release.'
          }
        },
        {
          '@type': 'Question',
          name: 'Which financial ratios are useful for business reporting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Commonly used ratios include the current ratio, quick ratio, gross profit ratio, net profit ratio, debt-to-equity ratio, interest coverage ratio, inventory turnover ratio, and debtors turnover ratio.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can TallyPrime calculate financial ratios automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depending on the TallyPrime version and report configuration, financial ratios may be displayed automatically in the relevant report. Some specialised ratios may require additional calculations using figures from accounting reports.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why is ratio analysis important for accountants?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ratio analysis helps accountants interpret financial statements, identify trends, investigate changes in performance, and provide useful information for management decisions.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between liquidity and profitability ratios?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Liquidity ratios assess the ability to meet short-term obligations. Profitability ratios measure how effectively a business generates profit from sales, assets, or capital.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can ratio analysis help small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Small businesses can use ratio analysis to monitor cash flow, profitability, inventory, receivables, and borrowing levels. Regular reviews can help identify potential issues before they become more serious.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is ratio analysis enough to determine whether a business is financially healthy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Ratio analysis is one part of financial evaluation. It should be combined with cash flow analysis, financial statements, business conditions, industry comparisons, and other relevant information.'
          }
        }
      ]
    };

    this.upsertJsonLd('ratio-analysis-faq-schema', faqSchema);
  }

  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    const head = this.document.head;

    if (!head) {
      return;
    }

    let script = head.querySelector<HTMLScriptElement>(`script#${id}`);

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}
