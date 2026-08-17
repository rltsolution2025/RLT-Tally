import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-mambalam',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tally-mambalam.component.html',
  styleUrl: './tally-mambalam.component.css',
})
export class TallyMambalamComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    // ============================
    // ✅ TITLE
    // ============================
    this.titleService.setTitle(
      'Tally Training Institute in Mambalam, Chennai | Authorized Tally Partner | GST & Accounting Course',
    );

    // ============================
    // ✅ META TAGS
    // ============================
    this.metaService.updateTag({
      name: 'description',
      content:
        'Join the best Tally training institute in Mambalam, Chennai. Learn TallyPrime, GST, taxation, and accounting with practical training and career support.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Authorized Tally training institute in Mambalam, Tally course Mambalam Chennai, GST training Mambalam, accounting course Chennai, TallyPrime training Chennai, best tally institute Mambalam',
    });

    // ============================
    // ✅ OPEN GRAPH (OG)
    // ============================
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Tally Training Institute in Mambalam, Chennai',
    });

    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in Mambalam. Job-oriented course with real-time exposure.',
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });
    // ============================
    // ✅ AEO - FAQ SCHEMA
    // ============================
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I learn Tally in Mambalam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can learn Tally at RLT Edzaro Tally Academy in Mambalam with practical training in TallyPrime, GST, and accounting.',
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
          name: 'Is placement assistance provided after training?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, students receive career guidance, resume support, and job assistance in accounting roles.',
          },
        },
      ],
    };

    this.addJsonLd(faqSchema);

    // ============================
    // ✅ GEO - LOCAL BUSINESS SCHEMA
    // ============================
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'RLT Edzaro Tally Academy',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mambalam',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
      areaServed: 'Mambalam, Chennai',
      description:
        'Tally training institute in Mambalam offering GST, accounting, and practical finance training.',
      educationalCredentialAwarded: 'Tally Certification',
    };

    this.addJsonLd(localBusinessSchema);
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
