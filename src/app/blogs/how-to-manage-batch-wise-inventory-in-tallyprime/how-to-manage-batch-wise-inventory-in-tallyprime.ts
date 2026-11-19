/* =========================================================
   RLT EDZARO | TALLYPRIME BLOG
   Angular component: Batch-Wise Inventory
========================================================= */

import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-manage-batch-wise-inventory-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-manage-batch-wise-inventory-in-tallyprime.html',
  styleUrl: './how-to-manage-batch-wise-inventory-in-tallyprime.css'
})
export class HowToManageBatchWiseInventoryInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Manage Batch-Wise Inventory in TallyPrime: Step-by-Step Guide';

  private readonly description =
    'Learn how to manage batch-wise inventory in TallyPrime, enable batch tracking, record purchases and sales, track expiry dates, and review batch-wise stock reports.';

  private readonly keywords =
    'How to manage batch-wise inventory in TallyPrime, batch-wise inventory in TallyPrime, TallyPrime batch management, batch number tracking in TallyPrime, expiry date tracking in TallyPrime, TallyPrime inventory management';

  private readonly canonicalUrl =
    'https://rltedzaro.com/how-to-manage-batch-wise-inventory-in-tallyprime/';

  private readonly faqItems = [
    {
      question: 'What is batch-wise inventory in TallyPrime?',
      answer: 'Batch-wise inventory in TallyPrime is a method of tracking stock by individual batch or lot numbers. It helps businesses identify stock quantities associated with specific batches and maintain relevant batch information.'
    },
    {
      question: 'How do I enable batch-wise details in TallyPrime?',
      answer: 'Open the company inventory configuration, enable the applicable batch-wise details feature, and save the settings. Configure the relevant stock items and verify that batch information can be entered in the appropriate vouchers.'
    },
    {
      question: 'Can TallyPrime track expiry dates?',
      answer: 'TallyPrime supports expiry-date tracking for appropriately configured batch-wise inventory. The availability and presentation of expiry-related information depend on the version and configuration.'
    },
    {
      question: 'Can I maintain multiple batches for the same stock item?',
      answer: 'Yes. A stock item can have multiple batches when batch-wise tracking is configured. Each batch can maintain its own quantity and relevant batch information.'
    },
    {
      question: 'How do I check batch-wise stock in TallyPrime?',
      answer: 'Use the relevant stock summary, detailed stock report, or batch-related report available in your TallyPrime version. Review the product, batch, quantity, and other supported details.'
    },
    {
      question: 'Is batch-wise inventory useful for pharmaceutical businesses?',
      answer: 'Yes. Batch tracking can help pharmaceutical businesses maintain batch identification, stock quantities, and expiry information. Businesses must also follow the applicable product-handling, storage, traceability, and regulatory requirements.'
    },
    {
      question: 'What is the difference between batch-wise inventory and regular inventory?',
      answer: 'Regular inventory tracking focuses on overall stock quantities for a product. Batch-wise inventory separates stock into individual batches, making it easier to track batch-specific quantities and expiry information.'
    },
    {
      question: 'Can batch-wise inventory reduce stock wastage?',
      answer: 'Batch tracking can help businesses identify stock approaching expiry and improve stock rotation. Actual wastage reduction depends on purchasing, sales, storage, and inventory management practices.'
    }
  ] as const;

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
    this.addFaqSchema();
  }

  /** Smoothly scrolls to an article section from the table of contents. */
  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);
    if (!target) {
      console.warn(`Article section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({
      behavior: this.prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  /** Returns the reader to the beginning of the article. */
  scrollToTop(): void {
    this.document.defaultView?.history.replaceState(null, '', this.canonicalUrl);
    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: this.prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ name: 'keywords', content: this.keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.description });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: 'RLT Edzaro' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.description });
  }

  private setCanonicalUrl(): void {
    let canonicalLink = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.description,
      inLanguage: 'en-IN',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.canonicalUrl
      },
      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      }
    };

    this.upsertJsonLd('batch-inventory-article-schema', articleSchema);
  }

  private addBreadcrumbSchema(): void {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://rltedzaro.com/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blogs',
          item: 'https://rltedzaro.com/blogs'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'How to Manage Batch-Wise Inventory in TallyPrime',
          item: this.canonicalUrl
        }
      ]
    };

    this.upsertJsonLd('batch-inventory-breadcrumb-schema', breadcrumbSchema);
  }

  private addFaqSchema(): void {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    this.upsertJsonLd('batch-inventory-faq-schema', faqSchema);
  }

  /** Adds or updates a JSON-LD script without creating duplicates. */
  private upsertJsonLd(id: string, data: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }

  private prefersReducedMotion(): boolean {
    return this.document.defaultView?.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches ?? false;
  }
}
