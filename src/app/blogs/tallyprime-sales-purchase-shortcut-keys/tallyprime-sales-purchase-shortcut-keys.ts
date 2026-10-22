import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

interface ShortcutItem {
  key: string;
  function: string;
  use: string;
}

interface WorkflowStep {
  title: string;
  description: string;
  shortcut?: string;
}

interface ArticleFaq {
  question: string;
  answer: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'app-tallyprime-sales-purchase-shortcut-keys',
  styleUrl: './tallyprime-sales-purchase-shortcut-keys.css',
  templateUrl: './tallyprime-sales-purchase-shortcut-keys.html',
})
export class TallyprimeSalesPurchaseShortcutKeys implements OnInit {
  readonly pageTitle = 'TallyPrime Shortcuts for Sales and Purchase Entries';

  readonly pageDescription =
    'Learn TallyPrime keyboard shortcuts for sales and purchase entries, GST invoices, customer and supplier ledgers, and practical billing workflows.';

  readonly pageSlug = '/tallyprime-sales-purchase-shortcut-keys/';

  readonly entryDetails: string[] = [
    'Customer and supplier ledgers',
    'Sales and purchase ledgers',
    'Stock items and quantities',
    'GST rates and tax amounts',
    'Invoice numbers and dates',
    'Credit terms and outstanding balances',
  ];

  readonly shortcuts: ShortcutItem[] = [
    {
      key: 'F8',
      function: 'Select Sales Voucher',
      use: 'Start a sales invoice in the usual voucher-entry workflow.',
    },
    {
      key: 'F9',
      function: 'Select Purchase Voucher',
      use: 'Start a purchase entry in the usual voucher-entry workflow.',
    },
    {
      key: 'F2',
      function: 'Change the date',
      use: 'Enter the required invoice date in supported screens.',
    },
    {
      key: 'Alt + C',
      function: 'Create a new master in supported contexts',
      use: 'Create a customer, supplier or other master from a supported field or selection.',
    },
    {
      key: 'Alt + G',
      function: 'Open Go To',
      use: 'Access supported reports and features without navigating through multiple menus.',
    },
  ];

  readonly salesSteps: WorkflowStep[] = [
    {
      title: 'Open the Sales Voucher',
      shortcut: 'F8',
      description:
        'Open the required company and select the Sales voucher using F8 in the voucher-entry workflow.',
    },
    {
      title: 'Enter the Invoice Date',
      shortcut: 'F2',
      description:
        'Use F2 where supported to enter the correct invoice date. Make sure the date matches the supporting sales document.',
    },
    {
      title: 'Select the Customer',
      shortcut: 'Alt + C',
      description:
        'Choose the customer ledger. If it does not exist, Alt+C may allow you to create it from a supported selection field. Enter the applicable name, address, registration details and other required information.',
    },
    {
      title: 'Enter the Sales Details',
      description:
        'Select the relevant sales ledger or stock item. For an item-based invoice, enter the quantity, rate and required details. For a service transaction, select the appropriate service or accounting ledger and enter the amount.',
    },
    {
      title: 'Verify GST',
      description:
        'If the sale is taxable, check the applicable GST classification, tax rate and tax calculation. The actual rate and treatment depend on the goods or services and applicable GST rules.',
    },
    {
      title: 'Save and Verify',
      description:
        'Accept or save the voucher using the supported action. Review the invoice total and relevant GST details before printing or sharing the invoice.',
    },
  ];

  readonly purchaseSteps: WorkflowStep[] = [
    {
      title: 'Open the Purchase Voucher',
      shortcut: 'F9',
      description:
        'Use F9 to select the Purchase voucher in the voucher-entry workflow.',
    },
    {
      title: 'Enter the Supplier Invoice Date',
      shortcut: 'F2',
      description:
        'Use F2 where supported to enter the date shown on the supplier invoice.',
    },
    {
      title: 'Select the Supplier Ledger',
      shortcut: 'Alt + C',
      description:
        'Choose the correct supplier ledger. If it is not listed, Alt+C may create the supplier master from a supported field. Enter the required details, including GST registration information where applicable.',
    },
    {
      title: 'Enter the Purchase Details',
      description:
        'Select the appropriate purchase ledger or stock items. For goods, enter the item, quantity and rate. For services, select the appropriate expense or service ledger and enter the amount.',
    },
    {
      title: 'Check GST Details',
      description:
        'Verify the tax classification and applicable GST rate. Confirm input tax credit eligibility and the required treatment for the transaction.',
    },
    {
      title: 'Save and Review the Entry',
      description:
        'Save the voucher after checking the supplier, invoice details, taxable value, GST and total amount. Compare the entry against the supplier invoice to reduce accounting errors.',
    },
  ];

  readonly efficiencyTips = [
    {
      title: 'Create Masters in Advance',
      description:
        'Prepare frequently used customer, supplier, stock item and ledger masters before entering large batches of transactions.',
    },
    {
      title: 'Use Consistent Naming',
      description:
        'Clear ledger and stock item names make it easier to select the correct entry.',
    },
    {
      title: 'Verify Tax Classification',
      description:
        'Check the GST settings for each transaction rather than relying on the tax calculation alone.',
    },
    {
      title: 'Check Invoice Dates and Numbers',
      description:
        'Correct dates and invoice references are important for reconciliation and reporting.',
    },
    {
      title: 'Review Vouchers Before Saving',
      description:
        'Shortcuts save time, but they do not replace verification of the customer, supplier, amounts and tax details.',
    },
    {
      title: 'Practise With Sample Transactions',
      description:
        'Use a practice company to record multiple sales and purchases until the workflow becomes familiar.',
    },
  ];

  readonly commonErrors: string[] = [
    'Selecting the wrong customer or supplier.',
    'Entering the wrong invoice date.',
    'Using an incorrect sales or purchase ledger.',
    'Selecting an incorrect stock item or quantity.',
    'Applying the wrong GST classification.',
    'Recording a duplicate invoice.',
    'Saving a voucher without checking the total.',
  ];

  readonly faqs: ArticleFaq[] = [
    {
      question: 'What is the shortcut key for a sales entry in TallyPrime?',
      answer:
        'F8 is commonly used to select the Sales voucher. The active screen and configured voucher types may affect the available options.',
    },
    {
      question: 'What is the shortcut key for a purchase entry in TallyPrime?',
      answer:
        'F9 is commonly used to select the Purchase voucher in the usual voucher-entry workflow.',
    },
    {
      question: 'Can I create a customer ledger while entering a sales invoice?',
      answer:
        'Yes. Alt+C can create a master from a supported field or selection, allowing you to create the customer ledger without navigating away unnecessarily.',
    },
    {
      question: 'Can I enter GST details in sales and purchase vouchers?',
      answer:
        'Yes. TallyPrime supports GST-related voucher entry when the company, ledgers, items and tax classifications are configured appropriately.',
    },
    {
      question: 'Why is GST not calculating in my voucher?',
      answer:
        'Possible causes include incorrect GST configuration, missing tax classifications, incorrect ledger settings or incomplete transaction details. Review the configuration and verify the applicable tax treatment.',
    },
    {
      question: 'Should I use the same voucher for every sale and purchase?',
      answer:
        'No. Choose the appropriate voucher type and accounting workflow based on the transaction. Special cases may require other voucher types or additional adjustments.',
    },
  ];

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.setPageMetadata();
    this.setStructuredData();
  }

  goToBlogs(): void {
    void this.router.navigate(['/blogs']);
  }

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

  private setPageMetadata(): void {
    this.titleService.setTitle(this.pageTitle);

    this.metaService.updateTag({
      name: 'description',
      content: this.pageDescription,
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: [
        'TallyPrime keyboard shortcuts for sales and purchase entries',
        'TallyPrime sales voucher shortcut',
        'TallyPrime purchase voucher shortcut',
        'TallyPrime GST invoice shortcuts',
        'customer and supplier ledger entries in TallyPrime',
        'TallyPrime billing workflow',
      ].join(', '),
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'article',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: this.pageTitle,
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: this.pageDescription,
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: this.getCanonicalUrl(),
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: this.pageTitle,
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: this.pageDescription,
    });

    let canonical = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

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

    const structuredData = {
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
            'TallyPrime sales and purchase shortcut keys',
            'TallyPrime sales voucher',
            'TallyPrime purchase voucher',
            'GST invoices',
            'billing workflow',
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

    const scriptId = 'tallyprime-sales-purchase-shortcut-structured-data';
    let script = this.document.getElementById(
      scriptId,
    ) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }
}
