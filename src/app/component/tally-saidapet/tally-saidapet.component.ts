import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-saidapet',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tally-saidapet.component.html',
  styleUrl: './tally-saidapet.component.css'
})
export class TallySaidapetComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {

    // ============================
    // ✅ SEO - TITLE
    // ============================
    this.title.setTitle(
      'Tally Training Institute in Saidapet, Chennai | GST & Accounting Course'
    );

    // ============================
    // ✅ META TAGS
    // ============================
    this.meta.updateTag({
      name: 'description',
      content:
        'Join the best Tally training institute in Saidapet, Chennai. Learn TallyPrime, GST, taxation, and accounting with practical training and placement support.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tally training institute in Saidapet, Tally course Saidapet Chennai, GST training Saidapet, accounting course Chennai, TallyPrime training Chennai, best tally institute Saidapet'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    // ============================
    // ✅ SOCIAL SEO (OPEN GRAPH)
    // ============================
    this.meta.updateTag({
      property: 'og:title',
      content: 'Tally Training Institute in Saidapet, Chennai'
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in Saidapet. Job-oriented course with real-time exposure.'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });


    // ============================
    // ✅ TWITTER SEO
    // ============================
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Tally Training Institute in Saidapet, Chennai'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Learn TallyPrime, GST & accounting with practical training in Saidapet.'
    });

    // ============================
    // ✅ CANONICAL TAG
    // ============================
    this.setCanonicalURL('https://rltedzaro.com/tally-training-institute-in-saidapet');

    // ============================
    // ✅ AEO - FAQ SCHEMA
    // ============================
    this.addJsonLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I learn Tally in Saidapet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can learn Tally at RLT Edzaro Tally Academy in Saidapet with practical training in TallyPrime and GST."
          }
        },
        {
          "@type": "Question",
          "name": "Does the course include GST training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the course includes GST filing, taxation, and compliance training with real-time examples."
          }
        },
        {
          "@type": "Question",
          "name": "Is placement support available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide career guidance, resume support, and job assistance in accounting roles."
          }
        }
      ]
    });

    // ============================
    // ✅ GEO - LOCAL BUSINESS SCHEMA
    // ============================
    this.addJsonLd({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "RLT Edzaro Tally Academy",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Saidapet",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      },
      "areaServed": "Saidapet, Chennai",
      "description":
        "Tally training institute in Saidapet offering GST, accounting, and practical finance training.",
      "educationalCredentialAwarded": "Tally Certification"
    });

    // ============================
    // ✅ COURSE SCHEMA
    // ============================
    this.addJsonLd({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Tally Training Course in Saidapet",
      "description": "Learn TallyPrime, GST, and accounting with practical training.",
      "provider": {
        "@type": "Organization",
        "name": "RLT Edzaro Tally Academy"
      }
    });

    // ============================
    // ✅ BREADCRUMB SCHEMA
    // ============================
    this.addJsonLd({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rltedzaro.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tally Training Saidapet",
          "item": "https://rltedzaro.com/tally-training-institute-in-saidapet"
        }
      ]
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