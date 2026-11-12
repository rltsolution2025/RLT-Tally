import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-create-proforma-invoice-in-tallyprime',
  standalone: true,
  imports: [],
  styleUrl: './how-to-create-proforma-invoice-in-tallyprime.css',
  templateUrl: './how-to-create-proforma-invoice-in-tallyprime.html',
})
export class HowToCreateProformaInvoiceInTallyprime implements OnInit {
  private readonly pageTitle = 'How to Create a Proforma Invoice in TallyPrime';
  private readonly pageDescription = 'Learn how to create, save, print, and share a proforma invoice in TallyPrime using an optional Sales voucher. Follow this step-by-step guide.';
  private readonly pageUrl = 'https://rltedzaro.com/how-to-create-proforma-invoice-in-tallyprime/';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'proforma invoice in TallyPrime, TallyPrime proforma invoice format, print proforma invoice in TallyPrime, optional sales voucher in TallyPrime, proforma invoice vs sales invoice, TallyPrime invoice creation',
    });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.pageDescription });
    this.meta.updateTag({ property: 'og:url', content: this.pageUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.pageDescription });

    this.setCanonicalUrl();
    this.setStructuredData();
  }

  /** Smoothly scroll to the chosen article section and update the URL fragment. */
  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Article section not found: ${sectionId}`);
      return;
    }

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  private setCanonicalUrl(): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.pageUrl);
  }

  private setStructuredData(): void {
    const scriptId = 'proforma-invoice-tallyprime-structured-data';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'How to Create a Proforma Invoice in TallyPrime: Step-by-Step Guide',
          description: this.pageDescription,
          mainEntityOfPage: this.pageUrl,
          author: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          publisher: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          inLanguage: 'en-IN',
          keywords: 'TallyPrime, proforma invoice, optional Sales voucher, invoice printing, accounting',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
            { '@type': 'ListItem', position: 2, name: 'How to Create a Proforma Invoice in TallyPrime', item: this.pageUrl },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do I create a proforma invoice in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'Open a Sales voucher using Alt + G → Create Voucher → F8 (Sales). Press Ctrl + L to mark it as Optional, enter the proposed transaction details, save using Ctrl + A, and print it using Ctrl + P (Current).' },
            },
            {
              '@type': 'Question',
              name: 'Which shortcut keys are used to create a proforma invoice?',
              acceptedAnswer: { '@type': 'Answer', text: 'F8 opens the Sales voucher, Ctrl + L marks it Optional, Ctrl + A saves the voucher, and Ctrl + P opens the print options for the current voucher.' },
            },
            {
              '@type': 'Question',
              name: 'Does a proforma invoice affect the books of accounts?',
              acceptedAnswer: { '@type': 'Answer', text: 'An optional Sales voucher does not affect the books of accounts like a regular Sales voucher. Make sure the Optional status is selected correctly before saving.' },
            },
            {
              '@type': 'Question',
              name: 'Can I print a proforma invoice directly from TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open the saved optional Sales voucher, press Ctrl + P (Current), preview the document if needed, and print it.' },
            },
            {
              '@type': 'Question',
              name: 'Can I edit a proforma invoice after saving it?',
              acceptedAnswer: { '@type': 'Answer', text: 'You can generally reopen the saved optional voucher and make changes, subject to your access rights and configuration. Review the updated document before sharing it again.' },
            },
            {
              '@type': 'Question',
              name: 'Is a proforma invoice the same as a quotation?',
              acceptedAnswer: { '@type': 'Answer', text: 'No. In TallyPrime, an optional Sales voucher can be printed as a proforma invoice, while an optional Sales Order can be printed as a quotation. Choose the document that fits the purpose of the transaction.' },
            },
            {
              '@type': 'Question',
              name: 'Can a proforma invoice be used as a GST invoice?',
              acceptedAnswer: { '@type': 'Answer', text: 'A proforma invoice is not a substitute for a GST tax invoice where one is legally required. Follow applicable invoicing and tax requirements when the actual transaction takes place.' },
            },
            {
              '@type': 'Question',
              name: 'Can I create a proforma invoice for services?',
              acceptedAnswer: { '@type': 'Answer', text: 'You can use an optional Sales voucher to prepare a preliminary document for a proposed service transaction. Enter the relevant service details and estimated amount using the appropriate voucher mode and configuration.' },
            },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  }
}
