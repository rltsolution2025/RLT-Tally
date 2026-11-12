import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-how-to-delete-unused-ledger-in-tallyprime',
  styleUrl: './how-to-delete-unused-ledger-in-tallyprime.css',
  templateUrl: './how-to-delete-unused-ledger-in-tallyprime.html',
})
export class HowToDeleteUnusedLedgerInTallyprime implements OnInit {
  private readonly pageTitle = 'How to Delete Unused Ledger in TallyPrime: Step-by-Step Guide';
  private readonly pageDescription = 'Learn how to delete unused ledgers in TallyPrime, remove multiple unused ledgers, use Alt+D, and fix common ledger deletion errors.';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-delete-unused-ledger-in-tallyprime/';

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.pageDescription });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.pageDescription });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.setCanonicalUrl();
    this.addStructuredData();
  }

  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    const target = this.document.getElementById(sectionId);
    if (!target) {
      console.warn(`Article section not found: ${sectionId}`);
      return;
    }
    this.updateHash(sectionId);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(event: MouseEvent): void {
    event.preventDefault();
    this.updateHash('top');
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private updateHash(sectionId: string): void {
    const view = this.document.defaultView;
    if (!view) return;
    const url = `${view.location.pathname}${view.location.search}#${sectionId}`;
    view.history.replaceState(null, '', url);
  }

  private setCanonicalUrl(): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = this.canonicalUrl;
  }

  private addStructuredData(): void {
    const existing = this.document.querySelector<HTMLScriptElement>('script[data-ledger-delete-schema="true"]');
    if (existing) existing.remove();

    const faqQuestions = [
      ['What is the shortcut key to delete a ledger in TallyPrime?', 'Press Alt + D in the Ledger Alteration screen to initiate deletion of an eligible ledger.'],
      ['How do I find unused ledgers in TallyPrime?', 'Open Chart of Accounts, select Ledgers, press Ctrl + J, choose Show Unused, and press Enter.'],
      ['Can I delete multiple unused ledgers at once?', 'Display unused ledgers in Chart of Accounts, select eligible masters using the Spacebar, press Alt + D, and confirm the deletion.'],
      ['Why is TallyPrime not allowing me to delete a ledger?', 'The ledger may be used in vouchers, contain a relevant balance, be referenced by another master or configuration, or be a predefined ledger.'],
      ['Can I delete a ledger that has transactions?', 'A ledger used in recorded vouchers generally cannot be deleted directly. Review its transactions and use an appropriate accounting correction.'],
      ['Can I delete a ledger with an opening balance?', 'Check the opening balance and business purpose first because it may represent a genuine accounting amount.'],
      ['Is deleting a ledger the same as altering it?', 'No. Deleting removes an eligible master from active use, while altering changes its name or other supported details.'],
      ['Can I delete unused stock items using a similar method?', 'TallyPrime provides ways to identify and manage unused inventory masters, with options depending on the type of master.'],
    ];

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: this.pageTitle,
          description: this.pageDescription,
          mainEntityOfPage: this.canonicalUrl,
          url: this.canonicalUrl,
          publisher: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqQuestions.map(([question, answer]) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ],
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset['ledgerDeleteSchema'] = 'true';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
