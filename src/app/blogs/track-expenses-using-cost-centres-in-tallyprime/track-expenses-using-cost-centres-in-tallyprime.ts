import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-track-expenses-using-cost-centres-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './track-expenses-using-cost-centres-in-tallyprime.html',
  styleUrl: './track-expenses-using-cost-centres-in-tallyprime.css',
})
export class TrackExpensesUsingCostCentresInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Track Expenses Using Cost Centres in TallyPrime';
  private readonly description =
    'Learn how to track expenses using Cost Centres in TallyPrime. Understand department-wise and project-wise cost allocation, Cost Centre examples, and the difference between Cost Centres and Cost Categories.';
  private readonly canonicalUrl =
    'https://rltedzaro.com/track-expenses-using-cost-centres-in-tallyprime/';

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
  }

  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Section not found: ${sectionId}`);
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

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({
      name: 'description',
      content: this.description,
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'how to track expenses using Cost Centres in TallyPrime, Cost Centre in TallyPrime, TallyPrime expense tracking, how to create Cost Centres in TallyPrime, department-wise expense tracking, project-wise cost tracking',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

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
    let canonical = this.document.querySelector<HTMLLinkElement>(
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
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.description,
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
      articleSection: 'TallyPrime Accounting',
      keywords: [
        'Cost Centres in TallyPrime',
        'TallyPrime expense tracking',
        'department-wise expense tracking',
        'project-wise cost tracking',
      ],
    };

    this.upsertJsonLd('cost-centres-article-schema', articleSchema);
  }

  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}
