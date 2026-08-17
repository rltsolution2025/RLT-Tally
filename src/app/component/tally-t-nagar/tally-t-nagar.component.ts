import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-t-nagar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tally-t-nagar.component.html',
  styleUrl: './tally-t-nagar.component.css',
})
export class TallyTNagarComponent implements OnInit {
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
    this.title.setTitle(
      'Best Tally Training Institute in T Nagar, Chennai | Authorized Tally Partner | GST & Accounting Course',
    );

    // ============================
    // ✅ META TAGS
    // ============================
    this.meta.updateTag({
      name: 'description',
      content:
        'Join the best Tally training institute in T Nagar, Chennai. We are an Authorized tally partner. Learn TallyPrime, GST, taxation, and accounting with practical training and placement support.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tally training institute in T Nagar, Tally course T Nagar Chennai, GST training T Nagar, accounting course Chennai, TallyPrime training Chennai, best tally institute T Nagar',
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
      content: 'Tally Training Institute in T Nagar, Chennai',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in T Nagar. Job-oriented course with real-time exposure.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://rltedzaro.com/tally-t-nagar',
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
      content: 'Tally Training Institute in T Nagar, Chennai',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in T Nagar. We are an authorized tally partner',
    });

    // ============================
    // ✅ CANONICAL TAG
    // ============================
    this.setCanonicalURL('https://rltedzaro.com/tally-training-institute-in-t-nagar');

    // ============================
    // ✅ AEO - FAQ SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I learn Tally in T Nagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can learn Tally at RLT Edzaro Tally Academy in T Nagar with practical training in TallyPrime, GST, and accounting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is GST training included in the course?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the course includes GST filing, taxation, and compliance with real-time practical examples.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide placement assistance after the course?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide career guidance, resume support, and job assistance in accounting roles in T Nagar and Chennai.',
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
        addressLocality: 'T Nagar',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
      areaServed: 'T Nagar, Chennai',
      description:
        'Tally training institute in T Nagar offering GST, accounting, and practical finance training.',
      educationalCredentialAwarded: 'Tally Certification',
    });

    // ============================
    // ✅ COURSE SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Tally Training Course in T Nagar',
      description:
        'Learn TallyPrime, GST, accounting, and financial management with practical training in T Nagar.',
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
          name: 'Tally Training T Nagar',
          item: 'https://rltedzaro.com/tally-training-institute-in-t-nagar',
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
