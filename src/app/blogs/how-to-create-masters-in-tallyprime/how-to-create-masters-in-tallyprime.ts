import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-create-masters-in-tallyprime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-create-masters-in-tallyprime.html',
  styleUrl: './how-to-create-masters-in-tallyprime.css',
})
export class HowToCreateMastersInTallyprime implements OnInit {
  private readonly pageTitle = 'How to Create Masters Quickly in TallyPrime';
  private readonly pageDescription = 'Learn how to create ledgers, stock items, groups, units, customers, and suppliers quickly in TallyPrime using step-by-step instructions.';
  private readonly pageUrl = 'https://rltedzaro.com/how-to-create-masters-in-tallyprime/';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
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
    const scriptId = 'tallyprime-masters-structured-data';
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
          headline: this.pageTitle,
          description: this.pageDescription,
          mainEntityOfPage: this.pageUrl,
          author: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          publisher: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
            { '@type': 'ListItem', position: 2, name: this.pageTitle, item: this.pageUrl },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What are masters in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'Masters are records such as ledgers, groups, stock items, stock groups, and units that define the accounts and inventory information used in transactions.' } },
            { '@type': 'Question', name: 'What is the shortcut key to create a ledger in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'Alt + C can open master creation from a supported field or selection. You can also create ledgers through the dedicated ledger-creation screen.' } },
            { '@type': 'Question', name: 'Can I create a ledger while entering a sales voucher?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Where the customer selection field supports master creation, you can use Alt + C to create the ledger and then continue with the voucher.' } },
            { '@type': 'Question', name: 'What is the difference between a ledger and a stock item?', acceptedAnswer: { '@type': 'Answer', text: 'A ledger records financial transactions and account balances. A stock item represents a product tracked in inventory, including relevant quantities and item details.' } },
            { '@type': 'Question', name: 'Why is ledger grouping important?', acceptedAnswer: { '@type': 'Answer', text: 'Ledger grouping determines how accounts are classified and presented in financial reports. Selecting the appropriate group helps maintain accurate accounting records.' } },
            { '@type': 'Question', name: 'Can I alter a master after creating it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can open the relevant master alteration screen and update supported details. Review the impact of changes before modifying masters used in existing transactions.' } },
            { '@type': 'Question', name: 'Should I create every master before entering transactions?', acceptedAnswer: { '@type': 'Answer', text: 'Creating frequently used masters in advance can make transaction entry more efficient. Supported on-the-fly creation options can also be useful when a new master is needed during voucher entry.' } },
          ],
        },
      ],
    };
    script.textContent = JSON.stringify(structuredData);
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
      `#${sectionId}`
    );

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
