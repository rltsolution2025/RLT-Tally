import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-to-create-company-in-tallyprime',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: './how-to-create-company-in-tallyprime.css',
  templateUrl: './how-to-create-company-in-tallyprime.html',
})
export class HowToCreateCompanyInTallyprime implements OnInit {

  // =========================================================
  // SEO CONFIGURATION
  // =========================================================

  private readonly pageTitle =
    'How to Create a Company in TallyPrime: Step-by-Step Guide';

  private readonly metaDescription =
    'Learn how to create a company in TallyPrime step by step. Understand company details, financial year, books beginning date, GST setup, and what to do after company creation.';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/how-to-create-company-in-tallyprime/';

  private readonly pageKeywords = [
    'how to create a company in TallyPrime',
    'create company in TallyPrime',
    'TallyPrime company creation',
    'how to create company in Tally',
    'TallyPrime company setup',
    'TallyPrime company creation steps',
    'company creation in TallyPrime',
    'TallyPrime company configuration',
    'how to setup company in TallyPrime',
    'Books Beginning From in TallyPrime',
    'financial year in TallyPrime',
    'GST setup in TallyPrime',
    'TallyPrime training',
    'RLT Edzaro'
  ];

  private readonly organizationName = 'RLT Edzaro';

  // =========================================================
  // FAQ DATA
  // Keep these answers consistent with visible HTML FAQs.
  // Used for FAQPage structured data.
  // =========================================================

  readonly faqs = [
    {
      question: 'How do I create a company in TallyPrime?',
      answer:
        'Open TallyPrime, select Create Company, enter the business details, set the financial year and books beginning date, configure GST if applicable, review the information and save the company.'
    },
    {
      question: 'What is the first step in creating a company in TallyPrime?',
      answer:
        'Open TallyPrime and select Create Company. If another company is open, use the company-related options to start creating a new company.'
    },
    {
      question: 'Can I create a company without GST in TallyPrime?',
      answer:
        'Yes. GST configuration depends on the business registration status and applicable requirements. Configure GST when it applies to the business.'
    },
    {
      question: 'What date should I enter as the financial year in TallyPrime?',
      answer:
        'For businesses following the Indian financial year, the financial year generally begins on 1 April. Use the date that matches the company accounting period.'
    },
    {
      question: 'What is Books Beginning From in TallyPrime?',
      answer:
        'Books Beginning From is the date from which you want to start maintaining the company accounting books in TallyPrime.'
    },
    {
      question: 'Can the financial year and books beginning date be different?',
      answer:
        'Yes. They can differ depending on when the business wants to begin maintaining its books in TallyPrime and its accounting requirements.'
    },
    {
      question: 'Can I create multiple companies in TallyPrime?',
      answer:
        'Yes. TallyPrime can maintain data for multiple companies, with separate accounting data and configuration for each company.'
    },
    {
      question: 'Can I change company details after creating a company?',
      answer:
        'Various company details and settings can be altered after creation. Change important accounting and statutory settings carefully because they may affect transactions and reports.'
    },
    {
      question: 'What should I do after creating a company in TallyPrime?',
      answer:
        'Create the necessary groups, ledgers and stock items, configure GST if applicable, and then begin recording business transactions.'
    },
    {
      question: 'Is TallyPrime company creation difficult for beginners?',
      answer:
        'The basic process is straightforward. Understanding the purpose of each setting and practising with business examples helps beginners use TallyPrime more effectively.'
    }
  ];

  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly router: Router,
    @Inject(DOCUMENT)
    private readonly document: Document
  ) { }

  // =========================================================
  // INITIALIZATION
  // =========================================================

  ngOnInit(): void {
    this.setSeoMetadata();
    this.setCanonicalUrl();
    this.setStructuredData();
  }

  // =========================================================
  // SEO TITLE AND META TAGS
  // =========================================================

  private setSeoMetadata(): void {
    this.titleService.setTitle(this.pageTitle);

    const metaTags: Array<{
      name?: string;
      property?: string;
      content: string;
    }> = [
        {
          name: 'description',
          content: this.metaDescription
        },
        {
          name: 'keywords',
          content: this.pageKeywords.join(', ')
        },
        {
          name: 'author',
          content: this.organizationName
        },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'content-language',
          content: 'en-IN'
        },

        // Open Graph metadata
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:site_name',
          content: this.organizationName
        },
        {
          property: 'og:title',
          content: this.pageTitle
        },
        {
          property: 'og:description',
          content: this.metaDescription
        },
        {
          property: 'og:url',
          content: this.canonicalUrl
        },
        {
          property: 'og:locale',
          content: 'en_IN'
        },
        {
          property: 'article:section',
          content: 'Tally & Finance'
        },

        // X / Twitter metadata
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: this.pageTitle
        },
        {
          name: 'twitter:description',
          content: this.metaDescription
        }
      ];

    for (const tag of metaTags) {
      if (tag.property) {
        this.metaService.updateTag({
          property: tag.property,
          content: tag.content
        });
      } else if (tag.name) {
        this.metaService.updateTag({
          name: tag.name,
          content: tag.content
        });
      }
    }
  }

  // =========================================================
  // CANONICAL URL
  // =========================================================

  private setCanonicalUrl(): void {
    const head = this.document.head;

    let canonicalLink =
      head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', this.canonicalUrl);
  }

  // =========================================================
  // STRUCTURED DATA
  // Organization
  // WebPage
  // BlogPosting
  // BreadcrumbList
  // FAQPage
  // =========================================================

  private setStructuredData(): void {
    const organizationId =
      'https://www.rltedzaro.com/#organization';

    const websiteId =
      'https://www.rltedzaro.com/#website';

    const articleId =
      `${this.canonicalUrl}#article`;

    const structuredData = {
      '@context': 'https://schema.org',

      '@graph': [

        // -----------------------------------------------
        // ORGANIZATION
        // -----------------------------------------------

        {
          '@type': 'Organization',
          '@id': organizationId,
          name: this.organizationName,
          url: 'https://www.rltedzaro.com/'
        },

        // -----------------------------------------------
        // WEBSITE
        // -----------------------------------------------

        {
          '@type': 'WebSite',
          '@id': websiteId,
          name: this.organizationName,
          url: 'https://www.rltedzaro.com/',
          publisher: {
            '@id': organizationId
          },
          inLanguage: 'en-IN'
        },

        // -----------------------------------------------
        // WEBPAGE
        // -----------------------------------------------

        {
          '@type': 'WebPage',
          '@id': this.canonicalUrl,
          url: this.canonicalUrl,
          name: this.pageTitle,
          description: this.metaDescription,
          isPartOf: {
            '@id': websiteId
          },
          inLanguage: 'en-IN',
          breadcrumb: {
            '@id': `${this.canonicalUrl}#breadcrumb`
          },
          mainEntity: {
            '@id': `${this.canonicalUrl}#faq`
          }
        },

        // -----------------------------------------------
        // ARTICLE
        // -----------------------------------------------

        {
          '@type': 'BlogPosting',
          '@id': articleId,

          mainEntityOfPage: {
            '@id': this.canonicalUrl
          },

          headline: this.pageTitle,
          description: this.metaDescription,

          author: {
            '@type': 'Organization',
            name: this.organizationName,
            url: 'https://www.rltedzaro.com/'
          },

          publisher: {
            '@id': organizationId
          },

          articleSection: 'Tally & Finance',
          keywords: this.pageKeywords,
          inLanguage: 'en-IN'
        },

        // -----------------------------------------------
        // BREADCRUMB LIST
        // -----------------------------------------------

        {
          '@type': 'BreadcrumbList',
          '@id': `${this.canonicalUrl}#breadcrumb`,

          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.rltedzaro.com/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blogs',
              item: 'https://www.rltedzaro.com/blogs/'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: this.pageTitle,
              item: this.canonicalUrl
            }
          ]
        },

        // -----------------------------------------------
        // FAQ PAGE
        // Answers match the article FAQ content.
        // -----------------------------------------------

        {
          '@type': 'FAQPage',
          '@id': `${this.canonicalUrl}#faq`,

          mainEntity: this.faqs.map((faq) => ({
            '@type': 'Question',

            name: faq.question,

            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        }
      ]
    };

    const schemaId =
      'how-to-create-company-in-tallyprime-schema';

    let schemaScript =
      this.document.getElementById(
        schemaId
      ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = this.document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';

      this.document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(structuredData);
  }

  // =========================================================
  // SIDEBAR NAVIGATION
  // Used by (click)="scrollToSection('section-id')"
  // =========================================================

  scrollToSection(sectionId: string): void {
    const element = this.document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const view = this.document.defaultView;

    if (!view) {
      return;
    }

    // Adjust this if your fixed site header has a different height.
    const headerOffset = 100;

    const elementPosition =
      element.getBoundingClientRect().top + view.scrollY;

    const targetPosition =
      Math.max(0, elementPosition - headerOffset);

    view.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  // =========================================================
  // BACK TO BLOG
  // Used by (click)="goToBlogs()"
  // =========================================================

  goToBlogs(): void {
    void this.router.navigate(['/blogs']);
  }

  // =========================================================
  // OPTIONAL: SCROLL TO TOP
  // Can be used by a back-to-top button.
  // =========================================================

  scrollToTop(): void {
    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}