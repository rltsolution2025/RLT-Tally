import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-check-stock-summary-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-check-stock-summary-in-tallyprime.html',
  styleUrl: './how-to-check-stock-summary-in-tallyprime.css'
})
export class HowToCheckStockSummaryInTallyprime implements OnInit {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to Check Stock Summary in TallyPrime: Step-by-Step Guide';
  private readonly pageDescription = 'Learn how to check Stock Summary in TallyPrime, view stock quantities and values, understand inventory reports, and manage inventory efficiently with practical examples.';
  private readonly pageUrl = 'https://rltedzaro.com/how-to-check-stock-summary-in-tallyprime/';
  private readonly pageKeywords = 'How to Check Stock Summary in TallyPrime, Stock Summary in TallyPrime, TallyPrime inventory report, check stock quantity in TallyPrime, stock value in TallyPrime, TallyPrime stock valuation';

  private readonly faqs = [
    {
      question: 'How do I open Stock Summary in TallyPrime?',
      answer: 'Open your company in TallyPrime and select Stock Summary from the Gateway of Tally. You can also use the Go To or search feature to locate the report, depending on your version.'
    },
    {
      question: 'What is the shortcut to view Stock Summary in TallyPrime?',
      answer: 'The exact navigation depends on your TallyPrime release and screen configuration. You can use the built-in Go To or search feature to find Stock Summary instead of relying on a fixed shortcut.'
    },
    {
      question: 'Can I check the closing stock in TallyPrime?',
      answer: 'Yes. Open Stock Summary and select the relevant reporting period. Review the closing balance columns to see the recorded stock quantity and value at the end of the period.'
    },
    {
      question: 'How do I check stock value in TallyPrime?',
      answer: 'Open Stock Summary, review the closing stock value, and drill down into the relevant stock group or item if you need more detail. The displayed value depends on the stock valuation method and recorded transactions.'
    },
    {
      question: 'Why is Stock Summary important for accountants?',
      answer: 'Stock Summary helps accountants review inventory quantities and values, verify stock movements, investigate discrepancies, and support accurate accounting records.'
    },
    {
      question: 'Can I export Stock Summary from TallyPrime?',
      answer: 'TallyPrime provides report export and printing options. The available formats depend on the software version and configuration.'
    },
    {
      question: 'Does Stock Summary update automatically in TallyPrime?',
      answer: 'Stock Summary reflects the inventory transactions recorded in the company. When relevant transactions are entered or corrected, the report generally reflects the updated inventory balances.'
    },
    {
      question: 'What is the difference between Stock Summary and Stock Item reports?',
      answer: 'Stock Summary provides an overall view of inventory groups, quantities, and values. Stock item and related inventory reports help users examine individual products and their recorded movements in greater detail.'
    }
  ];

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
    this.addFaqSchema();
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Stock Summary article section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    this.document.defaultView?.history.replaceState(null, '', '#top');
    this.document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setPageMetadata(): void {
    this.titleService.setTitle(this.pageTitle);

    this.metaService.updateTag({ name: 'description', content: this.pageDescription });
    this.metaService.updateTag({ name: 'keywords', content: this.pageKeywords });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.pageDescription });
    this.metaService.updateTag({ property: 'og:url', content: this.pageUrl });
    this.metaService.updateTag({ property: 'og:site_name', content: 'RLT Edzaro' });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: this.pageDescription });
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

  private addArticleSchema(): void {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.pageDescription,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.pageUrl
      },
      author: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },
      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },
      inLanguage: 'en-IN',
      keywords: this.pageKeywords
    };

    this.upsertJsonLd('stock-summary-article-schema', articleSchema);
  }

  private addBreadcrumbSchema(): void {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://rltedzaro.com/blogs' },
        { '@type': 'ListItem', position: 3, name: 'How to Check Stock Summary in TallyPrime', item: this.pageUrl }
      ]
    };

    this.upsertJsonLd('stock-summary-breadcrumb-schema', breadcrumbSchema);
  }

  private addFaqSchema(): void {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    this.upsertJsonLd('stock-summary-faq-schema', faqSchema);
  }

  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}
