import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-find-outstanding-payments-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-find-outstanding-payments-in-tallyprime.html',
  styleUrl: './how-to-find-outstanding-payments-in-tallyprime.css'
})
export class HowToFindOutstandingPaymentsInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to Find Outstanding Payments in TallyPrime';
  private readonly description = 'Learn how to find outstanding payments in TallyPrime, check pending customer invoices, view supplier dues, use ageing reports, and manage receivables and payables.';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-find-outstanding-payments-in-tallyprime/';
  private readonly primaryKeyword = 'How to find outstanding payments in TallyPrime';

  ngOnInit(): void {
    this.setPageMetadata();
    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addFaqSchema();
  }

  /** Scrolls to the selected article section and updates the URL fragment. */
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);
    if (!target) {
      console.warn(`Section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({
      name: 'keywords',
      content: [
        this.primaryKeyword,
        'TallyPrime outstanding report',
        'customer outstanding report in TallyPrime',
        'supplier outstanding payments',
        'TallyPrime receivables and payables',
        'overdue bills in TallyPrime'
      ].join(', ')
    });
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
    if (!head) return;

    let canonicalLink = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      head.appendChild(canonicalLink);
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
      },
      articleSection: 'TallyPrime and Practical Accounting'
    };

    this.upsertJsonLd('outstanding-payments-article-schema', articleSchema);
  }

  private addFaqSchema(): void {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I check outstanding payments in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open the relevant company, navigate to the Outstandings reports, and select Receivables or Payables. Review the customer or supplier balances and drill down into individual bills to investigate pending amounts.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between outstanding receivables and payables?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Receivables are amounts customers owe your business. Payables are amounts your business owes suppliers or vendors.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I see customer-wise outstanding payments in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The receivables report can help you review customer balances and, where configured, drill down into individual outstanding bills.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I check overdue bills in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the relevant outstanding and ageing-report options to analyse pending bills. Ensure that bill-wise tracking and due-date details are maintained correctly.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why is an invoice still showing as outstanding after receiving payment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The receipt may not have been recorded, or it may not have been allocated to the correct bill. Review the receipt voucher and its bill-wise allocation.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can TallyPrime show outstanding supplier payments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The payables report helps businesses review supplier balances and pending bills so they can plan payments and monitor due dates.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why is bill-wise tracking important in TallyPrime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bill-wise tracking connects outstanding balances to individual invoices. It helps accountants identify partial payments, pending invoices, and due dates more accurately.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is learning outstanding reports important for accounting jobs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Understanding receivables, payables, bill-wise allocations, and ageing reports is useful for accounting, accounts executive, billing, and finance support roles.'
          }
        }
      ]
    };

    this.upsertJsonLd('outstanding-payments-faq-schema', faqSchema);
  }

  private upsertJsonLd(id: string, schema: Record<string, unknown>): void {
    const head = this.document.head;
    if (!head) return;

    const existingScript = this.document.getElementById(id);
    existingScript?.remove();

    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema).replace(/</g, '\\u003c');
    head.appendChild(script);
  }
}
