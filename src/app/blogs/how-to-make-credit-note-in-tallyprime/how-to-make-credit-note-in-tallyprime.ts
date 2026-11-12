import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-make-credit-note-in-tallyprime',
  standalone: true,
  imports: [],
  styleUrl: './how-to-make-credit-note-in-tallyprime.css',
  templateUrl: './how-to-make-credit-note-in-tallyprime.html',
})
export class HowToMakeCreditNoteInTallyprime implements OnInit {
  private readonly pageTitle = 'How to Make Credit Note in TallyPrime – Step-by-Step Guide';
  private readonly pageDescription = 'Learn how to make a credit note in TallyPrime with step-by-step instructions, GST calculations, sales return examples, voucher settings, and FAQs.';
  private readonly pageUrl = 'https://rltedzaro.com/how-to-make-credit-note-in-tallyprime/';

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
      content: 'credit note entry in TallyPrime, how to create credit note in TallyPrime, TallyPrime sales return entry, GST credit note in TallyPrime, credit note voucher',
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

  /** Smoothly scroll to the selected section and update the URL fragment. */
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
    const scriptId = 'credit-note-tallyprime-structured-data';
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
          headline: 'How to Make a Credit Note in TallyPrime: Step-by-Step Guide',
          description: this.pageDescription,
          mainEntityOfPage: this.pageUrl,
          author: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          publisher: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          inLanguage: 'en-IN',
          keywords: 'TallyPrime, credit note, sales return, GST accounting, credit note voucher',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
            { '@type': 'ListItem', position: 2, name: 'How to Make a Credit Note in TallyPrime', item: this.pageUrl },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do I make a credit note in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'Open Vouchers, select F10: Other Vouchers, choose Credit Note, enter the customer and transaction details, provide original invoice information where required, verify the adjustment and GST details, and save the voucher.' },
            },
            {
              '@type': 'Question',
              name: 'What is the shortcut key for a credit note in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'In commonly used voucher-entry workflows, Alt + F6 opens the Credit Note voucher. You can also access it through F10: Other Vouchers or Go To, depending on your version and screen.' },
            },
            {
              '@type': 'Question',
              name: 'Why is the Credit Note option not visible in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'The voucher may not yet be activated. Open Vouchers, press F10: Other Vouchers, and select Credit Note. If prompted, activate it. If it remains unavailable, review voucher-type settings.' },
            },
            {
              '@type': 'Question',
              name: 'Can I create a GST credit note for a sales return?',
              acceptedAnswer: { '@type': 'Answer', text: 'TallyPrime supports credit note entries for sales returns. Enter the relevant item, quantity, original invoice details, and GST information, then verify the tax treatment before saving.' },
            },
            {
              '@type': 'Question',
              name: 'Can I issue a credit note without returning goods?',
              acceptedAnswer: { '@type': 'Answer', text: 'A credit note may be used for qualifying adjustments other than physical returns, such as eligible price reductions or discounts. Accounting and GST implications depend on the reason and applicable rules.' },
            },
            {
              '@type': 'Question',
              name: 'How do I check credit notes in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'Review the relevant voucher register, customer ledger, and GST reports. Select the appropriate reporting period and confirm that the transaction is classified correctly.' },
            },
            {
              '@type': 'Question',
              name: "Does a credit note reduce the customer's outstanding balance?",
              acceptedAnswer: { '@type': 'Answer', text: 'A credit note generally reduces the amount owed by the customer when it relates to a qualifying sales adjustment. The exact effect depends on the transaction and how it is recorded and allocated.' },
            },
            {
              '@type': 'Question',
              name: 'Is a credit note mandatory for every sales return?',
              acceptedAnswer: { '@type': 'Answer', text: 'The documentation required depends on the transaction, the applicable accounting process, and GST requirements. Follow the invoicing and documentation rules relevant to the particular return or adjustment.' },
            },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  }
}
