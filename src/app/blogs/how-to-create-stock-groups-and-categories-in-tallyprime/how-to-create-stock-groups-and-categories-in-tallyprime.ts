import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-create-stock-groups-and-categories-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-create-stock-groups-and-categories-in-tallyprime.html',
  styleUrl: './how-to-create-stock-groups-and-categories-in-tallyprime.css'
})
export class HowToCreateStockGroupsAndCategoriesInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Create Stock Groups and Categories in TallyPrime: Step-by-Step Guide';

  private readonly description =
    'Learn how to create stock groups and stock categories in TallyPrime with step-by-step instructions, practical examples, inventory management tips, and common mistakes to avoid.';

  private readonly keywords =
    'how to create stock groups and categories in TallyPrime, create stock group in TallyPrime, stock category in TallyPrime, stock groups vs stock categories, TallyPrime inventory management, how to create stock items in TallyPrime';

  private readonly canonicalUrl =
    'https://rltedzaro.com/how-to-create-stock-groups-and-categories-in-tallyprime/';

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addBreadcrumbSchema();
    this.addFaqSchema();
  }

  /**
   * Smoothly scrolls to a section from the table of contents.
   * The sectionId must match an id used in the HTML template.
   */
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(
      null,
      '',
      `#${sectionId}`
    );

    target.scrollIntoView({
      behavior: this.prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  /**
   * Returns the reader to the top of the article.
   */
  scrollToTop(event: Event): void {
    event.preventDefault();

    this.document.defaultView?.history.replaceState(
      null,
      '',
      this.canonicalUrl
    );

    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: this.prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }

  private prefersReducedMotion(): boolean {
    return this.document.defaultView
      ?.matchMedia('(prefers-reduced-motion: reduce)')
      .matches ?? false;
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({
      name: 'description',
      content: this.description
    });

    this.meta.updateTag({
      name: 'keywords',
      content: this.keywords
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'article'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: this.pageTitle
    });

    this.meta.updateTag({
      property: 'og:description',
      content: this.description
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.canonicalUrl
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro'
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: this.pageTitle
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: this.description
    });
  }

  private setCanonicalUrl(): void {
    const head = this.document.head;

    if (!head) {
      return;
    }

    let canonical = head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    const articleSchema = {
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
      keywords: this.keywords
    };

    this.upsertJsonLd('stock-groups-article-schema', articleSchema);
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
          name: 'How to Create Stock Groups and Categories in TallyPrime',
          item: this.canonicalUrl
        }
      ]
    };

    this.upsertJsonLd('stock-groups-breadcrumb-schema', breadcrumbSchema);
  }

  private addFaqSchema(): void {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a stock group in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A stock group is used to organise similar stock items according to their product type or other common characteristics. For example, a business can create Computers and Accessories stock groups.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is a stock category in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A stock category is used to classify stock items according to a shared characteristic that may cross different stock groups. For example, Premium Products could include items from both the Computers and Accessories groups.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a stock group and a stock category?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A stock group provides the main organisation of inventory, while a stock category provides an additional classification. A product can belong to a stock group and also have a stock category.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I create multiple stock groups in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can create multiple stock groups and, where appropriate, organise them into a parent-child hierarchy.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is it compulsory to create stock categories in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Stock categories are useful when a business needs an additional way to classify and analyse inventory. A business may use stock groups alone if they meet its requirements.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can a stock item belong to different stock groups?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A stock item is assigned to a stock group in its master. Stock categories provide an additional classification rather than replacing the stock item's primary group."
          }
        },
        {
          '@type': 'Question',
          name: 'Why are stock groups important for inventory management?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stock groups help organise products, simplify stock analysis, and make inventory reports easier to review.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I correct a stock group assigned to the wrong item?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open the relevant stock item master in alteration mode, select the correct stock group, and save the changes. Review the related reports to confirm that the classification is correct.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can beginners learn stock group and category management in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Beginners can practise creating groups, categories, stock items, and inventory transactions in a test company to understand how TallyPrime manages inventory.'
          }
        }
      ]
    };

    this.upsertJsonLd('stock-groups-faq-schema', faqSchema);
  }

  /**
   * Adds or updates a JSON-LD script without duplicating it
   * when the component is revisited.
   */
  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    const head = this.document.head;

    if (!head) {
      return;
    }

    let script = head.querySelector<HTMLScriptElement>(
      `script#${id}`
    );

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
}
