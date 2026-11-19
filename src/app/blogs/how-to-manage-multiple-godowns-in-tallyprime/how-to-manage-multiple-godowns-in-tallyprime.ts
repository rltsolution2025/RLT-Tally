import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-manage-multiple-godowns-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-manage-multiple-godowns-in-tallyprime.html',
  styleUrl: './how-to-manage-multiple-godowns-in-tallyprime.css'
})
export class HowToManageMultipleGodownsInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to Manage Multiple Godowns in TallyPrime: Step-by-Step Guide';
  private readonly description = 'Learn how to enable godown management in TallyPrime, create multiple godowns, allocate stock, record transfers, and review location-wise inventory.';
  private readonly keywords = 'multiple godowns in TallyPrime, how to create godowns in TallyPrime, TallyPrime godown management, stock transfer between godowns, godown-wise stock, inventory management in TallyPrime';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-manage-multiple-godowns-in-tallyprime/';

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
      console.warn(`Article section not found: ${sectionId}`);
      return;
    }

    this.updateHash(sectionId);
    this.scrollElementIntoView(target);
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    this.updateHash('top');
    const top = this.document.getElementById('top');

    if (top) {
      this.scrollElementIntoView(top);
      return;
    }

    this.document.defaultView?.scrollTo({ top: 0, behavior: this.prefersReducedMotion() ? 'auto' : 'smooth' });
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
    const head = this.document.head;
    if (!head) return;

    let canonical = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      head.appendChild(canonical);
    }
    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    this.upsertJsonLd('godown-article-schema', {
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
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      }
    });
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd('godown-breadcrumb-schema', {
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
          name: 'How to Manage Multiple Godowns in TallyPrime',
          item: this.canonicalUrl
        }
      ]
    });
  }

  private upsertJsonLd(id: string, data: Record<string, unknown>): void {
    const head = this.document.head;
    if (!head) return;

    let script = head.querySelector<HTMLScriptElement>(`script#${id}`);
    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      head.appendChild(script);
    }

    script.text = JSON.stringify(data);
  }

  private updateHash(sectionId: string): void {
    const view = this.document.defaultView;
    if (!view) return;

    const hash = sectionId === 'top' ? '' : `#${sectionId}`;
    view.history.replaceState(null, '', `${view.location.pathname}${view.location.search}${hash}`);
  }

  private scrollElementIntoView(element: HTMLElement): void {
    element.scrollIntoView({
      behavior: this.prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  private prefersReducedMotion(): boolean {
    return this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;
  }
}
