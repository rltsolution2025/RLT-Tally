import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-ashok-nagar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tally-ashok-nagar.component.html',
  styleUrl: './tally-ashok-nagar.component.css',
})
export class TallyAshokNagarComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    // ============================
    // ✅ SEO - TITLE
    // ============================
    this.title.setTitle(
      'Tally Course in Ashok Nagar, Chennai | Tally Class | Authorized Tally Training | Placement Assistance',
    );

    // ============================
    // ✅ SEO - META TAGS
    // ============================
    this.meta.updateTag({
      name: 'description',
      content:
        'Looking for Tally training in Ashok Nagar, Chennai? Learn TallyPrime, GST, payroll, taxation, and accounting with practical sessions, certification, and placement assistance.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Authorized Tally training institute in Ashok Nagar, Tally course Ashok Nagar Chennai, GST training Ashok Nagar, accounting course Chennai, TallyPrime training Chennai, best tally institute Ashok Nagar',
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
      content: 'Tally Course in Ashok Nagar, Chennai | Authorized Tally Training',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in Ashok Nagar. Authorized Tally Partner. Job-oriented course with real-time exposure.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://rltedzaro.com/tally-training-institute-in-ashok-nagar',
    });

    // ============================
    // ✅ CANONICAL TAG
    // ============================
    this.setCanonicalURL('https://rltedzaro.com/tally-training-institute-in-ashok-nagar');

    // ============================
    // ✅ AEO - FAQ SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I learn Tally in Ashok Nagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can learn Tally at RLT Edzaro Tally Academy in Ashok Nagar with practical training in TallyPrime and GST.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the course include GST training?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the course includes GST filing, taxation, and compliance training with real-time examples.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is placement support available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide career guidance, resume support, and job assistance in accounting roles.',
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
        addressLocality: 'Ashok Nagar',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
      areaServed: 'Ashok Nagar, Chennai',
      description:
        'Tally training institute in Ashok Nagar offering GST, accounting, and practical finance training.',
      educationalCredentialAwarded: 'Tally Certification',
    });

    // ============================
    // ✅ COURSE SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Tally Training Course in Ashok Nagar',
      description: 'Learn TallyPrime, GST, and accounting with practical training.',
      provider: {
        '@type': 'Organization',
        name: 'RLT Edzaro Tally Academy',
      },
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
