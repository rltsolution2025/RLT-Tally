import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [RouterLink],
  selector: 'app-how-to-check-cash-flow-in-tallyprime',
  styleUrl: './how-to-check-cash-flow-in-tallyprime.css',
  templateUrl: './how-to-check-cash-flow-in-tallyprime.html',
})
export class HowToCheckCashFlowInTallyprime implements OnInit {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle =
    'How to Check Cash Flow in TallyPrime: Complete Guide';

  private readonly description =
    'Learn how to check the cash flow report in TallyPrime, understand cash inflows and outflows, analyse business transactions, and track cash movement with practical examples.';

  private readonly canonicalUrl =
    'https://rltedzaro.com/how-to-check-cash-flow-in-tallyprime/';

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addFaqSchema();
  }

  // ========================================================
  // SEO META TAGS
  // ========================================================

  private setPageMetadata(): void {

    this.title.setTitle(`${this.pageTitle} | RLT Edzaro`);

    this.meta.updateTag({
      name: 'description',
      content: this.description
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: [
        'how to check cash flow in TallyPrime',
        'cash flow report in TallyPrime',
        'TallyPrime cash flow statement',
        'how to view cash flow in Tally',
        'cash and bank report in TallyPrime',
        'cash flow management'
      ].join(', ')
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
      property: 'og:type',
      content: 'article'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.canonicalUrl
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
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

  // ========================================================
  // CANONICAL URL
  // ========================================================

  private setCanonicalUrl(): void {

    let canonical =
      this.document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical = this.document.createElement('link');

      canonical.setAttribute('rel', 'canonical');

      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  // ========================================================
  // TABLE OF CONTENTS - SMOOTH SCROLL
  // ========================================================

  scrollToSection(
    event: MouseEvent,
    sectionId: string
  ): void {

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
      behavior: 'smooth',
      block: 'start'
    });
  }

  // ========================================================
  // ARTICLE STRUCTURED DATA
  // ========================================================

  private addArticleSchema(): void {

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',

      headline: this.pageTitle,

      description: this.description,

      url: this.canonicalUrl,

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

      articleSection: 'TallyPrime Accounting Guides',

      keywords: [
        'How to check cash flow in TallyPrime',
        'Cash flow report in TallyPrime',
        'TallyPrime cash flow statement',
        'Cash and bank report in TallyPrime',
        'Cash flow management'
      ],

      about: {
        '@type': 'Thing',
        name: 'Cash Flow Management in TallyPrime'
      }
    };

    this.upsertJsonLd(
      'cash-flow-article-schema',
      schema
    );
  }

  // ========================================================
  // FAQ STRUCTURED DATA
  // ========================================================

  private addFaqSchema(): void {

    const questions = [

      {
        question: 'How do I check cash flow in TallyPrime?',
        answer:
          'Open the required company, navigate to the Cash Flow report through the available financial reports menu or report search, select the required period, and review the displayed information. You can use the Cash/Bank Book and relevant ledgers to investigate individual transactions.'
      },

      {
        question: 'What is the shortcut key for the Cash Flow report in TallyPrime?',
        answer:
          'The shortcut can vary depending on the TallyPrime release, screen, and configuration. Use the report search feature or consult the shortcut information available in your installed version to locate Cash Flow.'
      },

      {
        question: 'Can I check monthly cash flow in TallyPrime?',
        answer:
          'Yes. Select the required monthly date range in the relevant report to analyse cash movement for that period.'
      },

      {
        question: 'What is the difference between the Cash Flow report and the Cash Book?',
        answer:
          'The Cash Flow report focuses on cash movement during a period, while the Cash Book records transactions posted to the cash ledger and helps track cash receipts, payments, and balances. Their exact presentation and scope differ.'
      },

      {
        question: 'Why is cash flow important for a business?',
        answer:
          'Cash flow helps a business understand whether it can meet its day-to-day payment obligations, manage operating expenses, and plan future spending.'
      },

      {
        question: 'Can a profitable business have negative cash flow?',
        answer:
          'Yes. A business may report profit while cash is tied up in unpaid customer invoices, inventory, or other working capital. Loan repayments and capital purchases can also affect cash without reducing profit in the same way.'
      },

      {
        question: 'Is the Cash Flow report the same as the Profit and Loss report?',
        answer:
          'No. The Cash Flow report focuses on cash movement, while the Profit and Loss report measures revenues and expenses over a period under accounting rules.'
      },

      {
        question: 'Can beginners learn cash flow management using TallyPrime?',
        answer:
          'Yes. Beginners can practise viewing financial reports, recording receipts and payments, reconciling balances, and understanding cash movement using a properly configured practice company.'
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

    this.upsertJsonLd(
      'cash-flow-faq-schema',
      schema
    );
  }

  // ========================================================
  // INSERT OR UPDATE JSON-LD
  // ========================================================

  private upsertJsonLd(
    id: string,
    data: Record<string, unknown>
  ): void {

    let script = this.document.getElementById(
      id
    ) as HTMLScriptElement | null;

    if (!script) {

      script = this.document.createElement('script');

      script.type = 'application/ld+json';

      script.id = id;

      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }

}