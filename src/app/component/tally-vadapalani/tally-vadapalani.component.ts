import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-vadapalani',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tally-vadapalani.component.html',
  styleUrl: './tally-vadapalani.component.css',
})
export class TallyVadapalaniComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    // ============================
    // ✅ SEO - TITLE (No "Best")
    // ============================
    this.title.setTitle(
      'Tally Training Institute in Vadapalani, Chennai | Authorized Tally Partner | GST & Accounting Course',
    );

    // ============================
    // ✅ META TAGS
    // ============================
    this.meta.updateTag({
      name: 'description',
      content:
        'Join RLT Edzaro Tally Academy in Vadapalani, Chennai. Learn TallyPrime, GST, taxation, and accounting with practical training and career support.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tally training institute in Vadapalani, Tally course Vadapalani Chennai, GST training Vadapalani, accounting course Chennai, TallyPrime training Chennai, tally classes Vadapalani',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    // ============================
    // ✅ OPEN GRAPH (SOCIAL SEO)
    // ============================
    this.meta.updateTag({
      property: 'og:title',
      content: 'Tally Training Institute in Vadapalani, Chennai',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in Vadapalani. Job-oriented course with real-time exposure.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://rltedzaro.com/tally-training-institute-in-vadapalani',
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
      content: 'Tally Training Institute in Vadapalani, Chennai',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Learn TallyPrime, GST & accounting with practical training in Vadapalani.',
    });

    // ============================
    // ✅ CANONICAL TAG
    // ============================
    this.setCanonicalURL('https://rltedzaro.com/tally-training-institute-in-vadapalani');

    // ============================
    // ✅ AEO - FAQ SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I learn Tally in Vadapalani?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can learn Tally at RLT Edzaro Tally Academy in Vadapalani with practical training in TallyPrime, GST, and accounting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Tally course include GST training?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, the course includes GST filing, taxation, and compliance training with real-time examples.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is placement support available after training?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, students receive career guidance, resume support, and job assistance in accounting roles.',
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
      url: 'https://rltedzaro.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vadapalani',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
      areaServed: 'Vadapalani, Chennai',
      description:
        'Tally training institute in Vadapalani offering GST, accounting, and practical finance training.',
      educationalCredentialAwarded: 'Tally Certification',
    });

    // ============================
    // ✅ COURSE SCHEMA
    // ============================
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Tally Training Course in Vadapalani',
      description:
        'Learn TallyPrime, GST, accounting, and financial management with practical training in Vadapalani.',
      provider: {
        '@type': 'Organization',
        name: 'RLT Edzaro Tally Academy',
        sameAs: 'https://rltedzaro.com',
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
          name: 'Tally Training Vadapalani',
          item: 'https://rltedzaro.com/tally-training-institute-in-vadapalani',
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
