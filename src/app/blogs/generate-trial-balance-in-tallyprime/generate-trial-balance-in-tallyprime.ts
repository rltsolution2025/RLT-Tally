import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-generate-trial-balance-in-tallyprime',
  standalone: true,
  imports: [],
  styleUrl: './generate-trial-balance-in-tallyprime.css',
  templateUrl: './generate-trial-balance-in-tallyprime.html',
})
export class GenerateTrialBalanceInTallyprime implements OnInit {
  private readonly pageTitle = 'How to Generate a Trial Balance in TallyPrime';
  private readonly pageDescription = 'Learn how to generate a Trial Balance in TallyPrime with step-by-step instructions, ledger-wise reports, opening balances, examples, and troubleshooting tips.';
  private readonly pageUrl = 'https://rltedzaro.com/generate-trial-balance-in-tallyprime/';
  private readonly keywords = 'Trial Balance in TallyPrime, how to view Trial Balance in TallyPrime, TallyPrime Trial Balance report, TallyPrime accounting reports, ledger-wise Trial Balance, debit and credit balances, opening balances, Trial Balance difference';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'keywords', content: this.keywords });
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

  /** Scroll to a section and update the URL fragment for direct linking. */
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
    const scriptId = 'trial-balance-tallyprime-structured-data';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    const faqs = [
      {
        name: 'How do I generate a Trial Balance in TallyPrime?',
        text: 'Open your company, press Alt + G, search for Trial Balance, and press Enter. Select the required reporting period and review the debit and credit balances.',
      },
      {
        name: 'Which shortcut key opens the Trial Balance in TallyPrime?',
        text: 'Alt + G opens the Go To feature. Search for Trial Balance and open the report from the available options.',
      },
      {
        name: 'Can I view the Trial Balance ledger-wise in TallyPrime?',
        text: 'Yes. Open the Trial Balance and press F5 to switch to the ledger-wise view, where supported by the current screen and version.',
      },
      {
        name: 'How do I display opening balances in the Trial Balance?',
        text: 'Open the Trial Balance, press F12 (Configure), and set Show Opening Balance to Yes, where the option is available.',
      },
      {
        name: 'Why are the debit and credit totals different in my Trial Balance?',
        text: 'Possible causes include incorrect opening balances, missing or incorrectly posted entries, incomplete accounting data, or other inconsistencies. Investigate the underlying records before correcting them.',
      },
      {
        name: 'Does the Trial Balance show closing stock in TallyPrime?',
        text: 'The standard Trial Balance does not ordinarily display closing stock as a separate balance. Review the Stock Summary and relevant financial reports for inventory information.',
      },
      {
        name: 'Can I generate a Trial Balance for a specific month?',
        text: 'Yes. Use the period-selection option in the report to select the dates you want to review.',
      },
      {
        name: 'Can I export the Trial Balance from TallyPrime?',
        text: 'TallyPrime provides report export options subject to the report and version. Use the available export option to select a supported format, such as Excel or PDF where available.',
      },
      {
        name: 'Is a Trial Balance enough to confirm that all accounting entries are correct?',
        text: 'No. Equal debit and credit totals confirm arithmetic agreement, but do not prove that every transaction is complete, correctly classified, or recorded in the correct account.',
      },
      {
        name: 'Who should learn how to generate a Trial Balance?',
        text: 'Commerce students, aspiring accountants, business owners, accounts assistants, and professionals working with accounting software can benefit from learning to generate and interpret a Trial Balance.',
      },
    ];

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: 'How to Generate a Trial Balance in TallyPrime: Step-by-Step Guide',
          description: this.pageDescription,
          mainEntityOfPage: this.pageUrl,
          author: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          publisher: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          inLanguage: 'en-IN',
          keywords: this.keywords,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
            { '@type': 'ListItem', position: 2, name: 'How to Generate a Trial Balance in TallyPrime', item: this.pageUrl },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.name,
            acceptedAnswer: { '@type': 'Answer', text: faq.text },
          })),
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  }
}
