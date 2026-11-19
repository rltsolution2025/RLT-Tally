import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-stock-items-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './create-stock-items-in-tallyprime.html',
  styleUrl: './create-stock-items-in-tallyprime.css'
})
export class CreateStockItemsInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Create Stock Items in TallyPrime: Step-by-Step Guide';
  private readonly description =
    'Learn how to create stock items in TallyPrime step by step. Understand stock groups, units of measurement, opening stock, examples, and common mistakes.';
  private readonly canonicalUrl =
    'https://rltedzaro.com/create-stock-items-in-tallyprime/';
  private readonly primaryKeywords =
    'how to create stock items in TallyPrime, create stock item in TallyPrime, TallyPrime stock item creation, inventory items in TallyPrime, stock groups in TallyPrime, units of measurement in TallyPrime, opening stock in TallyPrime, TallyPrime inventory management tutorial';

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
      console.warn(`Section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(
      null,
      '',
      sectionId === 'top' ? this.canonicalUrl : `#${sectionId}`
    );

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ name: 'keywords', content: this.primaryKeywords });
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
    let canonical = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
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
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },
      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },
      inLanguage: 'en-IN',
      articleSection: 'TallyPrime Inventory Management',
      keywords: this.primaryKeywords
    };

    this.upsertJsonLd('stock-item-article-schema', schema);
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
          name: 'How to Create Stock Items in TallyPrime',
          item: this.canonicalUrl
        }
      ]
    };

    this.upsertJsonLd('stock-item-breadcrumb-schema', schema);
  }

  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How do I create a stock item in TallyPrime?',
        answer: 'Open TallyPrime, press Alt+G, select Create Master, choose Stock Item, enter the item name, stock group, unit, and other required details, then press Ctrl+A to save.'
      },
      {
        question: 'What is a stock item in TallyPrime?',
        answer: 'A stock item is a product or material that a business purchases, sells, manufactures, or tracks as inventory. Examples include laptops, notebooks, furniture, and raw materials.'
      },
      {
        question: 'Is creating a stock group compulsory before creating a stock item?',
        answer: 'No. You can assign a stock item to the default Primary group or create a suitable stock group when required.'
      },
      {
        question: 'What is the difference between a stock item and a stock group?',
        answer: 'A stock item represents an individual product or material, while a stock group classifies similar items. For example, Wireless Mouse is a stock item, and Computer Accessories is a stock group.'
      },
      {
        question: 'How do I enter opening stock in TallyPrime?',
        answer: 'When creating or altering the stock item, enter the opening quantity, rate, and value as applicable. The figures should match your actual inventory records at the beginning of the books.'
      },
      {
        question: 'Can I create a stock item while recording a purchase or sales voucher?',
        answer: 'Yes. TallyPrime allows you to create a stock item during transaction entry when the required master is not already available. In a relevant selection field, use Alt+C where supported.'
      },
      {
        question: 'Can I create multiple stock items in TallyPrime?',
        answer: 'Yes. TallyPrime provides multi-stock-item creation options in supported workflows. You can also use supported data-import methods for larger item lists.'
      },
      {
        question: 'How can I view the stock quantity after creating an item?',
        answer: 'Use the Stock Summary or another relevant inventory report. The quantity shown depends on the opening stock and inventory transactions recorded for that item.'
      },
      {
        question: "Can I change a stock item's details after creating it?",
        answer: 'Yes. You can open the relevant Stock Item alteration screen and modify editable details. Take care when changing units or other fields after transactions have already been recorded, as the change may affect how existing records are interpreted.'
      },
      {
        question: 'Who should learn stock item creation in TallyPrime?',
        answer: 'Commerce students, aspiring accountants, inventory executives, business owners, and people working in retail, trading, and manufacturing can benefit from learning how to create and manage stock items in TallyPrime.'
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

    this.upsertJsonLd('stock-item-faq-schema', schema);
  }

  private upsertJsonLd(id: string, data: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }

    script.text = JSON.stringify(data);
  }
}
