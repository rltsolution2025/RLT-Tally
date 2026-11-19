import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-set-reorder-levels-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-set-reorder-levels-in-tallyprime.html',
  styleUrl: './how-to-set-reorder-levels-in-tallyprime.css'
})
export class HowToSetReorderLevelsInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to Set Reorder Levels in TallyPrime: Step-by-Step Guide';
  private readonly description = 'Learn how to set reorder levels in TallyPrime, configure stock items, track minimum inventory levels, and generate reorder reports with practical examples.';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-set-reorder-levels-in-tallyprime/';
  private readonly keywords = [
    'How to Set Reorder Levels in TallyPrime',
    'Reorder level in TallyPrime',
    'TallyPrime inventory management',
    'TallyPrime reorder status report',
    'stock reorder level',
    'how to manage inventory in TallyPrime'
  ];

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
    this.addFaqSchema();
  }

  /** Smooth-scroll to a table-of-contents section. */
  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /** Return to the article hero. */
  scrollToTop(event: MouseEvent): void {
    event.preventDefault();
    this.document.defaultView?.history.replaceState(null, '', this.canonicalUrl);
    this.document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ name: 'keywords', content: this.keywords.join(', ') });
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
    const head = this.document.head;
    let canonical = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.description,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.canonicalUrl
      },
      author: {
        '@type': 'Organization',
        name: 'RLT Edzaro'
      },
      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },
      keywords: this.keywords.join(', ')
    };

    this.upsertJsonLd('reorder-levels-article-schema', schema);
  }

  private addBreadcrumbSchema(): void {
    const schema = {
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
          name: 'How to Set Reorder Levels in TallyPrime',
          item: this.canonicalUrl
        }
      ]
    };

    this.upsertJsonLd('reorder-levels-breadcrumb-schema', schema);
  }

  private addFaqSchema(): void {
    const questions = [
      {
        question: 'What is a reorder level in TallyPrime?',
        answer: 'A reorder level is a predefined inventory threshold used to identify when a stock item may need replenishment. It helps businesses plan purchases before inventory becomes insufficient.'
      },
      {
        question: 'How do I set reorder levels in TallyPrime?',
        answer: 'Open the relevant stock-item configuration and locate the reorder-level settings supported by your version. Enter the appropriate threshold, save the configuration, and review the available reorder status report.'
      },
      {
        question: 'Can TallyPrime help identify stock items that need reordering?',
        answer: 'TallyPrime provides inventory reporting features that can help businesses review stock positions and replenishment requirements. The exact information available depends on the version, configuration, and accuracy of recorded transactions.'
      },
      {
        question: 'What is the difference between reorder level and reorder quantity?',
        answer: 'Reorder level determines when a business should consider placing an order. Reorder quantity is the amount purchased to replenish stock. The two values serve different inventory-management purposes.'
      },
      {
        question: 'How do I calculate a reorder point?',
        answer: 'A common formula is: Reorder point = Average daily demand × Supplier lead time + Safety stock. For example, if daily demand is 5 units, supplier lead time is 4 days, and safety stock is 10 units, the reorder point is 30 units.'
      },
      {
        question: 'Does setting a reorder level automatically place a purchase order?',
        answer: 'Do not assume that configuring a reorder threshold automatically places an order. Review the available TallyPrime features and your company\'s purchasing workflow, then confirm and record the required purchase transaction.'
      },
      {
        question: 'Can I set different reorder levels for different stock items?',
        answer: 'Businesses should use appropriate thresholds for different products based on demand, replenishment time, and stocking requirements. Configure the available stock-item settings according to your TallyPrime version.'
      },
      {
        question: 'Why is inventory management important for accounting students?',
        answer: 'Inventory management helps accounting students understand stock valuation, purchase transactions, sales records, inventory reports, and working capital. These skills are useful in accounting, inventory control, and operations-related roles.'
      }
    ];

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    };

    this.upsertJsonLd('reorder-levels-faq-schema', schema);
  }

  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    const head = this.document.head;
    let script = head.querySelector<HTMLScriptElement>(`script#${id}`);

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      head.appendChild(script);
    }

    script.text = JSON.stringify(schema);
  }
}
