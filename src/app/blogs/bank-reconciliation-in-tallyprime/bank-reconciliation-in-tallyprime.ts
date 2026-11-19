import {
  Component,
  OnInit,
  OnDestroy,
  inject
} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bank-reconciliation-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './bank-reconciliation-in-tallyprime.css',
  templateUrl: './bank-reconciliation-in-tallyprime.html',
})
export class BankReconciliationInTallyprime implements OnInit, OnDestroy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Perform Bank Reconciliation in TallyPrime: Step-by-Step Guide';

  private readonly description =
    'Learn how to perform bank reconciliation in TallyPrime with statement-based and manual methods, practical examples, common errors, and solutions for beginners.';

  private readonly keywords =
    'bank reconciliation in TallyPrime, TallyPrime bank reconciliation steps, how to reconcile bank statements in TallyPrime, bank reconciliation statement in TallyPrime, manual bank reconciliation in TallyPrime, automatic bank reconciliation in TallyPrime';

  private readonly canonicalUrl =
    'https://rltedzaro.com/bank-reconciliation-in-tallyprime/';

  private readonly schemaScriptIds = [
    'bank-reconciliation-article-schema',
    'bank-reconciliation-breadcrumb-schema'
  ];

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
  }

  ngOnDestroy(): void {
    this.schemaScriptIds.forEach((id) => {
      this.document.getElementById(id)?.remove();
    });
  }

  /**
   * Smooth-scrolls to a section selected from the table of contents.
   * The sectionId must match an id in the component HTML.
   */
  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Bank reconciliation article section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(
      null,
      '',
      `#${sectionId}`
    );

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  /**
   * Returns the reader to the top of the article.
   */
  scrollToTop(event: MouseEvent): void {
    event.preventDefault();

    this.document.defaultView?.history.replaceState(
      null,
      '',
      '#top'
    );

    this.document.getElementById('top')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
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

    // Open Graph metadata
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
      property: 'og:site_name',
      content: 'RLT Edzaro'
    });

    // Twitter metadata
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
    this.upsertJsonLd(
      'bank-reconciliation-article-schema',
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: this.pageTitle,
        description: this.description,
        url: this.canonicalUrl,
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
          name: 'RLT Edzaro',
          url: 'https://rltedzaro.com/'
        },
        articleSection: 'TallyPrime Accounting',
        inLanguage: 'en-IN'
      }
    );
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd(
      'bank-reconciliation-breadcrumb-schema',
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://rltedzaro.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blogs',
            item: 'https://rltedzaro.com/blogs'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'How to Perform Bank Reconciliation in TallyPrime',
            item: this.canonicalUrl
          }
        ]
      }
    );
  }

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
