import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-track-stock-ageing-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-track-stock-ageing-in-tallyprime.html',
  styleUrl: './how-to-track-stock-ageing-in-tallyprime.css'
})
export class HowToTrackStockAgeingInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to Track Stock Ageing in TallyPrime: A Complete Guide';
  private readonly description = 'Learn how to track stock ageing in TallyPrime, analyse slow-moving inventory, understand stock ageing reports, and improve inventory management with practical examples.';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-track-stock-ageing-in-tallyprime/';
  private readonly pageKeywords = 'How to track stock ageing in TallyPrime, stock ageing report in TallyPrime, TallyPrime inventory management, slow-moving stock report, stock ageing analysis, inventory ageing report';

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);
    if (!target) {
      console.warn(`Section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ name: 'keywords', content: this.pageKeywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'RLT Edzaro' });

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
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.description,
      inLanguage: 'en-IN',
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
      articleSection: 'TallyPrime Inventory Management',
      keywords: this.pageKeywords
    };

    this.upsertJsonLd('stock-ageing-article-schema', articleSchema);
  }

  private addBreadcrumbSchema(): void {
    const breadcrumbSchema = {
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
          name: 'How to Track Stock Ageing in TallyPrime',
          item: this.canonicalUrl
        }
      ]
    };

    this.upsertJsonLd('stock-ageing-breadcrumb-schema', breadcrumbSchema);
  }

  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    let script = this.document.head.querySelector<HTMLScriptElement>(`script[data-schema-id="${id}"]`);

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-id', id);
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}
