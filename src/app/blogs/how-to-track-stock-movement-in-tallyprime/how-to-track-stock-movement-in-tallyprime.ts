import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-track-stock-movement-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-track-stock-movement-in-tallyprime.html',
  styleUrl: './how-to-track-stock-movement-in-tallyprime.css'
})
export class HowToTrackStockMovementInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to Track Stock Movement in TallyPrime: A Step-by-Step Guide';
  private readonly description = 'Learn how to track stock movement in TallyPrime, monitor stock in and out, record inventory vouchers, check stock reports, and manage inventory efficiently.';
  private readonly keywords = 'How to track stock movement in TallyPrime, TallyPrime stock movement, inventory movement in TallyPrime, stock in and stock out, stock transfer in TallyPrime, stock summary';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-track-stock-movement-in-tallyprime/';

  private readonly faqs = [
    {
      question: 'How do I track stock movement in TallyPrime?',
      answer: 'Create stock items, configure inventory settings, record purchases and sales, enter stock transfers and adjustments, and review reports such as Stock Summary and stock item reports.'
    },
    {
      question: 'Which report is used to check stock movement in TallyPrime?',
      answer: 'Stock Summary helps you review overall inventory balances. For detailed item-level movements, use the relevant stock item or inventory transaction reports available in your TallyPrime version.'
    },
    {
      question: 'How do I track stock in multiple godowns in TallyPrime?',
      answer: 'Enable and configure godown management, create the required locations, and select the correct godown when recording stock receipts, issues, and transfers. Review the relevant godown reports to compare balances.'
    },
    {
      question: 'How is closing stock calculated?',
      answer: 'Closing stock is generally calculated as opening stock plus stock received minus stock issued, adjusted for other relevant inventory movements.'
    },
    {
      question: 'How do I record stock transfers in TallyPrime?',
      answer: 'Use the appropriate stock journal or inventory transfer workflow, select the stock item, enter the transfer quantity, and specify the source and destination godowns.'
    },
    {
      question: 'Can TallyPrime help identify stock discrepancies?',
      answer: 'TallyPrime maintains recorded inventory transactions and balances. By comparing inventory reports with physical stock counts, businesses can investigate missing entries, incorrect quantities, and other discrepancies.'
    },
    {
      question: 'Is stock movement tracking useful for accounting students?',
      answer: 'Yes. Learning stock movement helps accounting students understand inventory vouchers, purchases, sales, stock transfers, inventory valuation, and practical stock reconciliation.'
    },
    {
      question: 'What is the difference between stock movement and Stock Summary?',
      answer: 'Stock movement refers to the changes in inventory over a period. Stock Summary provides an overview of stock balances and related quantities or values. Detailed movement analysis may require opening the relevant stock item or transaction reports.'
    }
  ];

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
    this.addFaqSchema();
  }

  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Article section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(event: MouseEvent): void {
    event.preventDefault();
    this.document.defaultView?.history.replaceState(null, '', this.canonicalUrl);
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
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

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.description });
  }

  private setCanonicalUrl(): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    this.upsertJsonLd('stock-movement-article-schema', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.description,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.canonicalUrl
      },
      url: this.canonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },
      articleSection: 'TallyPrime Inventory Management',
      inLanguage: 'en-IN'
    });
  }

  private addBreadcrumbSchema(): void {
    this.upsertJsonLd('stock-movement-breadcrumb-schema', {
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
          name: 'How to Track Stock Movement in TallyPrime',
          item: this.canonicalUrl
        }
      ]
    });
  }

  private addFaqSchema(): void {
    this.upsertJsonLd('stock-movement-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  private upsertJsonLd(id: string, data: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }
}
