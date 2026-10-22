import { DOCUMENT, NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

interface ArticleFaq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-how-to-use-go-to-search-in-tallyprime',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './how-to-use-go-to-search-in-tallyprime.html',
  styleUrl: './how-to-use-go-to-search-in-tallyprime.css',
})
export class HowToUseGoToSearchInTallyprime implements OnInit {
  readonly pageTitle = 'How to Use Go To and Search in TallyPrime';
  readonly pageDescription =
    'Learn how to use Go To and search features in TallyPrime to find reports, vouchers, ledgers, and accounting information faster.';
  readonly pageSlug = '/how-to-use-go-to-search-in-tallyprime/';

  readonly faqs: ArticleFaq[] = [
    {
      question: 'What is the shortcut key for Go To in TallyPrime?',
      answer: 'Alt + G is the commonly used shortcut to open Go To.',
    },
    {
      question: 'What is Go To used for in TallyPrime?',
      answer: 'Go To helps users navigate to supported reports, vouchers, and features without repeatedly browsing through menus.',
    },
    {
      question: 'Can I find the Trial Balance using Go To?',
      answer: 'You can generally use Go To to access supported destinations such as the Trial Balance. Availability and navigation details depend on your TallyPrime release.',
    },
    {
      question: 'Can I search for ledgers in TallyPrime?',
      answer: 'You can search for ledgers using the relevant selection and navigation options available in your screen and version. The exact workflow depends on the context.',
    },
    {
      question: 'Is Go To useful for beginners?',
      answer: 'Yes. It can help beginners access reports and features more quickly, although learning the menu structure remains useful for understanding the software.',
    },
    {
      question: 'Why should I check the reporting period?',
      answer: 'Reports can display different figures depending on the period selected. Checking the date range helps prevent incorrect comparisons and conclusions.',
    },
  ];

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.setPageMetadata();
    this.setStructuredData();
  }

  goToBlogs(): void {
    void this.router.navigate(['/blogs']);
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);
    if (!target) {
      console.warn(`Table of contents target not found: #${sectionId}`);
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private getCanonicalUrl(): string {
    const origin = this.document.location?.origin;
    return origin && origin !== 'null' ? `${origin}${this.pageSlug}` : this.pageSlug;
  }

  private setPageMetadata(): void {
    const canonicalUrl = this.getCanonicalUrl();
    this.titleService.setTitle(this.pageTitle);

    this.metaService.updateTag({ name: 'description', content: this.pageDescription });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    this.metaService.updateTag({
      name: 'keywords',
      content: [
        'how to use Go To in TallyPrime',
        'TallyPrime search features',
        'TallyPrime navigation',
        'find reports in TallyPrime',
        'TallyPrime Go To shortcut',
        'Alt G TallyPrime',
      ].join(', '),
    });

    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.pageDescription });
    this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: this.pageDescription });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }

  private setStructuredData(): void {
    const canonicalUrl = this.getCanonicalUrl();
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: this.pageTitle,
          description: this.pageDescription,
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
          url: canonicalUrl,
          inLanguage: 'en-IN',
          articleSection: 'Tally & Finance',
          keywords: [
            'Go To in TallyPrime',
            'TallyPrime search',
            'Trial Balance',
            'Balance Sheet',
            'Sales Register',
          ],
          publisher: { '@type': 'Organization', name: 'RLT Edzaro' },
        },
        {
          '@type': 'FAQPage',
          mainEntity: this.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    };

    const scriptId = 'tallyprime-go-to-search-structured-data';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }
}
