import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-nungambakkam',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tally-nungambakkam.component.html',
  styleUrl: './tally-nungambakkam.component.css',
})
export class TallyNungambakkamComponent implements OnInit {
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
      'Tally Training Institute in Nungambakkam, Chennai | Authorized Tally Partner | GST & Accounting Course',
    );

    // ============================
    // ✅ META TAGS
    // ============================
    this.meta.updateTag({
      name: 'description',
      content:
        'Join the best Tally training institute in Nungambakkam, Chennai. Learn TallyPrime, GST, taxation, and accounting with practical training and placement support. We are an authorized tally partner',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tally training institute in Nungambakkam, Tally course Nungambakkam Chennai, GST training Nungambakkam, accounting course Chennai, TallyPrime training Chennai, best tally institute Nungambakkam',
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
      content: 'Tally Training Institute in Nungambakkam, Chennai',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in Nungambakkam. Job-oriented course with real-time exposure.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
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
      content: 'Tally Training Institute in Nungambakkam, Chennai',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Learn TallyPrime, GST & accounting with practical training in Nungambakkam.',
    });

    // ============================
    // ✅ CANONICAL TAG
    // ============================
    this.setCanonicalURL('https://rltedzaro.com/tally-training-institute-in-nungambakkam');

    // ============================
    // ✅ AEO - FAQ SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I learn Tally in Nungambakkam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can learn Tally at RLT Edzaro Tally Academy in Nungambakkam with practical training in TallyPrime and GST.',
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
          name: 'Is placement support provided?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide job assistance, resume support, and interview preparation.',
          },
        },
      ],
    });

    // ============================
    // ✅ GEO - LOCAL BUSINESS
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'RLT Edzaro Tally Academy',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nungambakkam',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
      areaServed: 'Nungambakkam, Chennai',
      description:
        'Tally training institute in Nungambakkam offering GST, accounting, and practical finance training.',
      educationalCredentialAwarded: 'Tally Certification',
    });

    // ============================
    // ✅ COURSE SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Tally Training Course in Nungambakkam',
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
          name: 'Tally Training Nungambakkam',
          item: 'https://rltedzaro.com/tally-training-institute-in-nungambakkam',
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
