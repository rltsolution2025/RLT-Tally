import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tally-chennai',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tally-chennai.component.html',
  styleUrl: './tally-chennai.component.css',
})
export class TallyChennaiComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    // =====================================================
    // ✅ BASIC SEO
    // =====================================================

    this.title.setTitle(
      'Tally Training Institute in Chennai | Authorized Tally Partner | GST & Accounting Course',
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Join RLT Edzaro Tally Academy in Chennai for practical TallyPrime, GST, taxation, and accounting training with real-time business exposure.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tally training institute in Chennai, Tally course Chennai, GST training Chennai, TallyPrime training Chennai, accounting course Chennai, practical tally training Chennai',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.meta.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });

    this.meta.updateTag({
      name: 'language',
      content: 'English',
    });

    this.meta.updateTag({
      name: 'revisit-after',
      content: '7 days',
    });

    // =====================================================
    // ✅ OPEN GRAPH SEO
    // =====================================================

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Tally Training Institute in Chennai | Authorized Tally Partner | GST & Tally Prime, Master Accountant Using Tally',
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Learn TallyPrime, GST & accounting with practical training in Chennai.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://rltedzaro.com/tally-training-institute-in-chennai',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://rltedzaro.com/SEO-IMAGES/Mentorship/Training.jpeg',
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    this.meta.updateTag({
      property: 'og:locale',
      content: 'en_IN',
    });

    // =====================================================
    // ✅ TWITTER SEO
    // =====================================================

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Tally Training Institute in Chennai | Authorized Tally Partner | GST Simulation, Master Accountant using Tally',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Learn TallyPrime, GST & accounting with practical training in Chennai.',
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://rltedzaro.com/SEO-IMAGES/Mentorship/Training.jpeg',
    });

    // =====================================================
    // ✅ GEO TAGS (LOCAL SEO)
    // =====================================================

    this.meta.updateTag({
      name: 'geo.region',
      content: 'IN-TN',
    });

    this.meta.updateTag({
      name: 'geo.placename',
      content: 'Chennai',
    });

    this.meta.updateTag({
      name: 'geo.position',
      content: '13.0827;80.2707',
    });

    this.meta.updateTag({
      name: 'ICBM',
      content: '13.0827, 80.2707',
    });

    // =====================================================
    // ✅ MOBILE SEO
    // =====================================================

    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });

    this.meta.updateTag({
      name: 'theme-color',
      content: '#4f46e5',
    });

    // =====================================================
    // ✅ CANONICAL URL
    // =====================================================

    this.setCanonicalURL('https://rltedzaro.com/tally-training-institute-in-chennai');

    // =====================================================
    // ✅ AEO - FAQ SCHEMA
    // =====================================================

    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',

      mainEntity: [
        {
          '@type': 'Question',

          name: 'Where can I learn Tally in Chennai?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'RLT Edzaro Tally Academy provides practical TallyPrime, GST, and accounting training in Chennai.',
          },
        },

        {
          '@type': 'Question',

          name: 'Does the course include GST training?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. Students learn GST filing, invoice management, taxation compliance, and practical accounting workflows.',
          },
        },

        {
          '@type': 'Question',

          name: 'Is placement support available after the course?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. We provide career guidance, resume support, and accounting job assistance.',
          },
        },
      ],
    });

    // =====================================================
    // ✅ GEO + LOCAL BUSINESS SCHEMA
    // =====================================================

    this.addJsonLd({
      '@context': 'https://schema.org',

      '@type': 'EducationalOrganization',

      name: 'RLT Edzaro Tally Academy',

      url: 'https://rltedzaro.com',

      logo: 'https://rltedzaro.com/assets/logo.png',

      description:
        'Tally training institute in Chennai providing practical TallyPrime, GST, accounting, and taxation training.',

      address: {
        '@type': 'PostalAddress',

        addressLocality: 'Chennai',

        addressRegion: 'Tamil Nadu',

        addressCountry: 'India',
      },

      areaServed: 'Chennai',

      sameAs: [
        'https://www.facebook.com/',
        'https://www.instagram.com/',
        'https://www.linkedin.com/',
      ],
    });

    // =====================================================
    // ✅ COURSE SCHEMA
    // =====================================================

    this.addJsonLd({
      '@context': 'https://schema.org',

      '@type': 'Course',

      name: 'Tally Training Course in Chennai',

      description:
        'Learn TallyPrime, GST, accounting, taxation, and financial management with practical training.',

      provider: {
        '@type': 'Organization',

        name: 'RLT Edzaro Tally Academy',

        sameAs: 'https://rltedzaro.com',
      },
    });

    // =====================================================
    // ✅ BREADCRUMB SCHEMA
    // =====================================================

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

          name: 'Tally Training Institute in Chennai',

          item: 'https://rltedzaro.com/tally-training-institute-in-chennai',
        },
      ],
    });

    // =====================================================
    // ✅ WEBSITE SCHEMA
    // =====================================================

    this.addJsonLd({
      '@context': 'https://schema.org',

      '@type': 'WebSite',

      name: 'RLT Edzaro',

      url: 'https://rltedzaro.com',
    });
  }

  // =====================================================
  // ✅ CANONICAL FUNCTION
  // =====================================================

  private setCanonicalURL(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.renderer.createElement('link');

      this.renderer.setAttribute(link, 'rel', 'canonical');

      this.renderer.appendChild(this.document.head, link);
    }

    this.renderer.setAttribute(link, 'href', url);
  }

  // =====================================================
  // ✅ JSON-LD SCHEMA INJECTOR
  // =====================================================

  private addJsonLd(data: any): void {
    const script = this.renderer.createElement('script');

    script.type = 'application/ld+json';

    script.text = JSON.stringify(data);

    this.renderer.appendChild(this.document.head, script);
  }
}
