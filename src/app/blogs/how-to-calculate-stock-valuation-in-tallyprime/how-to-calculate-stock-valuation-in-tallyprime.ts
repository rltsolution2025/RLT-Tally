import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-to-calculate-stock-valuation-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './how-to-calculate-stock-valuation-in-tallyprime.css',
  templateUrl: './how-to-calculate-stock-valuation-in-tallyprime.html',
})
export class HowToCalculateStockValuationInTallyprime implements OnInit, OnDestroy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Calculate Stock Valuation in TallyPrime: Step-by-Step Guide';

  private readonly description =
    'Learn how to calculate stock valuation in TallyPrime using FIFO, weighted average, and other stock valuation methods with practical examples and step-by-step instructions.';

  private readonly keywords =
    'stock valuation in TallyPrime, TallyPrime inventory valuation, FIFO in TallyPrime, average cost method, closing stock valuation, stock valuation report in TallyPrime';

  private readonly canonicalUrl =
    'https://rltedzaro.com/how-to-calculate-stock-valuation-in-tallyprime/';

  private readonly schemaScriptIds = [
    'stock-valuation-article-schema',
    'stock-valuation-breadcrumb-schema',
    'stock-valuation-faq-schema',
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

  /** Smooth-scroll to an article section from the table of contents. */
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

  /** Return to the top of the article. */
  scrollToTop(event: MouseEvent): void {
    event.preventDefault();
    this.document.defaultView?.history.replaceState(null, '', '#top');
    this.document.getElementById('top')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ name: 'keywords', content: this.keywords });
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
    let canonical = this.document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    this.upsertJsonLd('stock-valuation-article-schema', {
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
      articleSection: 'TallyPrime Inventory Management',
      inLanguage: 'en-IN',
      keywords: this.keywords,
    });
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd('stock-valuation-breadcrumb-schema', {
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
          name: 'How to Calculate Stock Valuation in TallyPrime',
          item: this.canonicalUrl,
        },
      ],
    });
  }

  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How do I calculate stock valuation in TallyPrime?',
        answer:
          'Configure the stock item and its appropriate valuation method, record opening stock and inventory transactions, and review the relevant inventory reports. The closing stock value depends on the quantities, costs, and selected valuation method.',
      },
      {
        question: 'Which stock valuation methods are available in TallyPrime?',
        answer:
          'TallyPrime supports multiple inventory valuation methods. Availability depends on the version and configuration. Check the valuation options in your installation and select a method suitable for the applicable accounting requirements.',
      },
      {
        question: 'What is FIFO in TallyPrime?',
        answer:
          'FIFO stands for First In, First Out. It generally assigns the oldest inventory costs to goods sold first, leaving more recent purchase costs in closing inventory.',
      },
      {
        question: 'What is the weighted-average stock valuation method?',
        answer:
          "Weighted-average valuation calculates an average cost using the relevant quantities and costs. Closing stock is then valued using that average cost, subject to the selected method's calculation rules.",
      },
      {
        question: 'How can I check closing stock value in TallyPrime?',
        answer:
          'Open the relevant inventory reports, such as Stock Summary, and select the required reporting date. Review the closing quantities and values, then drill down into stock item details if necessary.',
      },
      {
        question: 'Why is stock valuation important in accounting?',
        answer:
          'Stock valuation helps determine closing inventory and the cost of goods sold. These values affect the calculation of profit and the presentation of inventory in financial statements.',
      },
      {
        question: 'Does stock valuation affect profit?',
        answer:
          'Yes. Under the applicable inventory accounting rules, the valuation of closing stock affects the cost of goods sold and reported profit. Accurate valuation is therefore important for reliable financial statements.',
      },
      {
        question: 'Can I change the stock valuation method in TallyPrime?',
        answer:
          'The available configuration options depend on the software version and stock item setup. Before changing the method in a live company, assess the effect on inventory values, accounting records, and financial reporting.',
      },
    ];

    this.upsertJsonLd('stock-valuation-faq-schema', {
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

  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    let script = this.document.head.querySelector<HTMLScriptElement>(`script#${id}`);

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}
