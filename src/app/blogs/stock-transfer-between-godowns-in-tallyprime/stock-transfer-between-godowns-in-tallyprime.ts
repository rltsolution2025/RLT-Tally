import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stock-transfer-between-godowns-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './stock-transfer-between-godowns-in-tallyprime.css',
  templateUrl: './stock-transfer-between-godowns-in-tallyprime.html',
})
export class StockTransferBetweenGodownsInTallyprime implements OnInit, OnDestroy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Record Stock Transfers Between Godowns in TallyPrime: Step-by-Step Guide';

  private readonly description =
    'Learn how to record stock transfers between godowns in TallyPrime using stock journals, create godowns, track inventory movements, and verify stock reports.';

  private readonly keywords =
    'stock transfer in TallyPrime, TallyPrime Stock Journal, godown-wise stock in TallyPrime, how to create godowns in TallyPrime, inventory transfer entry';

  private readonly canonicalUrl =
    'https://rltedzaro.com/stock-transfer-between-godowns-in-tallyprime/';

  private readonly schemaScriptIds = [
    'stock-transfer-between-godowns-article-schema',
    'stock-transfer-between-godowns-breadcrumb-schema',
    'stock-transfer-between-godowns-faq-schema',
  ];

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
    this.addFaqSchema();
  }

  ngOnDestroy(): void {
    // Remove this page's structured-data scripts when navigating away.
    for (const id of this.schemaScriptIds) {
      this.document.getElementById(id)?.remove();
    }
  }

  /** Smoothly scrolls to a section linked from the article table of contents. */
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

  /** Returns the reader to the top of the article. */
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
    this.upsertJsonLd('stock-transfer-between-godowns-article-schema', {
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
      articleSection: 'TallyPrime Inventory Management',
      inLanguage: 'en-IN',
    });
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd('stock-transfer-between-godowns-breadcrumb-schema', {
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
          name: 'How to Record Stock Transfers Between Godowns in TallyPrime',
          item: this.canonicalUrl,
        },
      ],
    });
  }

  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How do I transfer stock from one godown to another in TallyPrime?',
        answer:
          'Enable multiple godowns, create the source and destination godowns, and open a Stock Journal voucher. Enter the stock item, transfer-out quantity, source godown, transfer-in quantity, and destination godown. Save the voucher and verify the inventory reports.',
      },
      {
        question: 'Which voucher is used for stock transfer in TallyPrime?',
        answer:
          'A Stock Journal voucher is commonly used to record stock transfers between godowns within the same company.',
      },
      {
        question: 'Can I transfer multiple stock items in one voucher?',
        answer:
          'Yes, a Stock Journal can support multiple stock item movements, depending on the voucher configuration. Enter and verify the source and destination quantities for each item.',
      },
      {
        question: 'Does stock transfer between godowns affect total stock?',
        answer:
          "A normal internal stock transfer changes the stock quantity at individual locations but does not change the company's total inventory quantity.",
      },
      {
        question: 'Does stock transfer between godowns affect profit and loss?',
        answer:
          'A normal internal transfer at the same inventory valuation does not, by itself, represent sales revenue or a purchase expense. Separate costs, losses, valuation changes, or other adjustments may have accounting implications.',
      },
      {
        question: 'How can I check godown-wise stock in TallyPrime?',
        answer:
          'Review the Stock Summary and the relevant godown-wise inventory views or drill-down reports available in your TallyPrime version.',
      },
      {
        question: 'Can I transfer stock between different branches using a Stock Journal?',
        answer:
          'It depends on how the branches are structured. Locations within the same company and GST registration may be handled differently from branches maintained as separate GST registrations or legal entities. Review the applicable accounting and GST requirements before recording the transaction.',
      },
      {
        question: 'What should I do if stock is not appearing in the destination godown?',
        answer:
          'Open the Stock Journal voucher and check the destination godown, stock item, quantity, and voucher status. Then review the relevant inventory report filters and confirm that the voucher was saved correctly.',
      },
      {
        question: 'Is stock transfer the same as a sales entry?',
        answer:
          'No. A normal internal stock transfer records inventory movement between locations. A sales entry records a sale to a customer. Transfers involving separate registrations or entities may require a different transaction and tax treatment.',
      },
    ];

    this.upsertJsonLd('stock-transfer-between-godowns-faq-schema', {
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
