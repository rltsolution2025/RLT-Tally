import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-kk-nagar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tally-kk-nagar.component.html',
  styleUrl: './tally-kk-nagar.component.css',
})
export class TallyKkNagarComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    // ============================
    // ✅ SEO - TITLE
    // ============================
    this.title.setTitle('Tally Training Institute in KK Nagar, Chennai | GST & Accounting Course');

    // ============================
    // ✅ META TAGS
    // ============================
    this.meta.updateTag({
      name: 'description',
      content:
        'Join the best Tally training institute in KK Nagar, Chennai. Learn TallyPrime, GST, taxation, and accounting with practical training and career support.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tally training institute in KK Nagar, Tally course KK Nagar Chennai, GST training KK Nagar, accounting course Chennai, TallyPrime training Chennai, best tally institute KK Nagar',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    // ============================
    // ✅ SOCIAL SEO (OPEN GRAPH)
    // ============================
    this.meta.updateTag({
      property: 'og:title',
      content: 'Tally Training Institute in KK Nagar, Chennai',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in KK Nagar. Job-oriented course with real-time exposure.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://rltedzaro.com/tally-training-institute-in-kk-nagar',
    });

    // ============================
    // ✅ TWITTER SEO
    // ============================
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Tally Training Institute in KK Nagar, Chennai',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Learn TallyPrime, GST & accounting with practical training in KK Nagar.',
    });

    // ============================
    // ✅ CANONICAL TAG
    // ============================
    this.setCanonicalURL('https://rltedzaro.com/tally-training-institute-in-kk-nagar');

    // ============================
    // ✅ AEO - FAQ SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I learn Tally in KK Nagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can learn Tally at RLT Edzaro Tally Academy in KK Nagar with practical training in TallyPrime and GST.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the course include GST training?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the course includes GST filing, taxation, and compliance with real-time practical examples.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is placement support available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide job assistance, resume support, and interview preparation for accounting roles.',
          },
        },
      ],
    });

    // ============================
    // ✅ GEO - LOCAL BUSINESS SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'RLT Edzaro Tally Academy',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'KK Nagar',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
      areaServed: 'KK Nagar, Chennai',
      description:
        'Tally training institute in KK Nagar offering GST, accounting, and practical finance training.',
      educationalCredentialAwarded: 'Tally Certification',
    });

    // ============================
    // ✅ COURSE SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Tally Training Course in KK Nagar',
      description: 'Learn TallyPrime, GST, and accounting with practical training.',
      provider: {
        '@type': 'Organization',
        name: 'RLT Edzaro Tally Academy',
      },
    });

    // ============================
    // ✅ BREADCRUMB SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://rltedzaro.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tally Training KK Nagar',
          item: 'https://rltedzaro.com/tally-training-institute-in-kk-nagar',
        },
      ],
    });
  }

  // ============================
  // ✅ CANONICAL FUNCTION
  // ============================
  private setCanonicalURL(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(this.document.head, link);
    }

    this.renderer.setAttribute(link, 'href', url);
  }

  // ============================
  // ✅ JSON-LD INJECTOR
  // ============================
  private addJsonLd(data: any): void {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.renderer.appendChild(this.document.head, script);
  }
}
