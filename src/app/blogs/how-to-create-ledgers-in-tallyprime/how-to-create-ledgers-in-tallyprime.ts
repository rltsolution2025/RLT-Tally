import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-to-create-ledgers-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-create-ledgers-in-tallyprime.html',
  styleUrl: './how-to-create-ledgers-in-tallyprime.css',
})
export class HowToCreateLedgersInTallyprime implements OnInit {
  private readonly pageTitle =
    'How to Create Ledgers in TallyPrime With Real Examples';

  private readonly pageDescription =
    'Learn how to create ledgers in TallyPrime step by step with real accounting examples. Understand ledger groups, customer ledgers, supplier ledgers, expenses, sales, purchases, and GST.';

  private readonly pageSlug = '/how-to-create-ledgers-in-tallyprime/';

  private readonly faqs = [
    {
      question: 'How do I create a ledger in TallyPrime?',
      answer:
        'Open TallyPrime, select the company, press Alt+G, search for Create Master and select Ledger. Enter the ledger name, choose the appropriate group, fill in required details and press Ctrl+A to save in the standard creation screen.',
    },
    {
      question: 'What is the shortcut key to create a ledger in TallyPrime?',
      answer:
        'You can use Alt+G to access Create Master and then select Ledger. While entering a voucher, Alt+C can also create a new master in supported contexts.',
    },
    {
      question: 'What is the difference between a ledger and a group in TallyPrime?',
      answer:
        'A ledger is an individual account used to record transactions, while a group classifies that ledger according to its accounting purpose. For example, Office Rent is a ledger and Indirect Expenses is its group.',
    },
    {
      question: 'Under which group should I create a customer ledger?',
      answer:
        'A customer ledger is generally created under Sundry Debtors when the business sells goods or services to that customer on credit.',
    },
    {
      question: 'Under which group should I create a supplier ledger?',
      answer:
        'A supplier ledger is generally created under Sundry Creditors when the business purchases goods or services from the supplier on credit.',
    },
    {
      question: 'Under which group should I create a salary ledger?',
      answer:
        "A Salary Expense ledger is generally created under Indirect Expenses for routine employee salary costs, subject to the business's accounting structure.",
    },
    {
      question: 'Can I create multiple ledgers in TallyPrime?',
      answer:
        'Yes. TallyPrime supports creating ledgers individually and through multi-ledger creation options where available. This is useful when setting up several customer, supplier, expense or other accounts.',
    },
    {
      question: 'Do I need to create a separate ledger for every customer?',
      answer:
        "Separate customer ledgers are generally useful for tracking individual balances, credit sales, receipts and outstanding invoices. The exact structure depends on the business's accounting requirements.",
    },
    {
      question: 'Can I change a ledger group after creating a ledger?',
      answer:
        "A ledger's group can generally be altered. Check the accounting implications before changing classifications, especially for ledgers with existing transactions.",
    },
    {
      question: 'Is ledger creation important for learning TallyPrime?',
      answer:
        'Yes. Ledger creation is a fundamental skill because vouchers, accounting reports and transaction tracking depend on correctly configured accounts.',
    },
  ];

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Table of contents target not found: #${sectionId}`);
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  ngOnInit(): void {
    this.setPageMetadata();
    this.setStructuredData();
  }

  goToBlogs(): void {
    void this.router.navigate(['/blogs']);
  }

  private setPageMetadata(): void {
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.pageDescription });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    this.metaService.updateTag({
      name: 'keywords', content: [
        'how to create ledgers in TallyPrime',
        'create ledger in TallyPrime',
        'TallyPrime ledger creation',
        'how to create a ledger in Tally',
        'ledger creation in TallyPrime with examples',
        'TallyPrime ledger groups',
        'customer ledger in TallyPrime',
        'supplier ledger in TallyPrime',
        'TallyPrime accounting for beginners',
      ].join(', ')
    });

    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.pageDescription });
    this.metaService.updateTag({ property: 'og:url', content: this.getCanonicalUrl() });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: this.pageDescription });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = this.getCanonicalUrl();
  }

  private getCanonicalUrl(): string {
    const origin = this.document.location?.origin;
    return origin && origin !== 'null'
      ? `${origin}${this.pageSlug}`
      : this.pageSlug;
  }

  private setStructuredData(): void {
    const canonicalUrl = this.getCanonicalUrl();
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: this.pageTitle,
          description: this.pageDescription,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          url: canonicalUrl,
          inLanguage: 'en-IN',
          articleSection: 'Tally & Finance',
          keywords: [
            'How to create ledgers in TallyPrime',
            'TallyPrime ledger groups',
            'customer ledger',
            'supplier ledger',
            'GST ledger',
          ],
          publisher: {
            '@type': 'Organization',
            name: 'RLT Edzaro',
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: this.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const scriptId = 'ledger-tallyprime-structured-data';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }
}
