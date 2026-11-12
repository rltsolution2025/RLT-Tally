import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-delete-a-company-in-tallyprime',
  standalone: true,
  imports: [],
  styleUrl: './how-to-delete-a-company-in-tallyprime.css',
  templateUrl: './how-to-delete-a-company-in-tallyprime.html',
})
export class HowToDeleteACompanyInTallyprime implements OnInit {
  private readonly pageTitle = 'How to Delete a Company in TallyPrime: Step-by-Step Guide';
  private readonly pageDescription = 'Learn how to delete a company in TallyPrime using Alt + D, back up company data, understand permanent deletion, and avoid common mistakes.';
  private readonly pageUrl = 'https://rltedzaro.com/how-to-delete-a-company-in-tallyprime/';

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
      content: 'how to delete a company in TallyPrime, TallyPrime delete company shortcut, Alt+D delete company, back up TallyPrime company data, shut company vs delete company',
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

  /** Scroll to an article section and update the URL fragment without a full page reload. */
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
    const scriptId = 'delete-company-tallyprime-structured-data';
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
          keywords: 'TallyPrime, delete company, company backup, Alt+D, company management',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
            { '@type': 'ListItem', position: 2, name: 'How to Delete a Company in TallyPrime', item: this.pageUrl },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the shortcut key to delete a company in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'The shortcut key is Alt + D. Open Alt + K → Alter, select the company, and press Alt + D on the Company Alteration screen.' },
            },
            {
              '@type': 'Question',
              name: 'Can I recover a deleted company in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'Recovery generally depends on whether a valid backup or another recoverable copy exists. Keep a backup before deletion because the normal delete action is permanent.' },
            },
            {
              '@type': 'Question',
              name: 'Does deleting a company remove all its accounting entries?',
              acceptedAnswer: { '@type': 'Answer', text: 'Deleting a company removes its associated company data from the selected data location, including transactions and records maintained within that company.' },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between shutting and deleting a company?',
              acceptedAnswer: { '@type': 'Answer', text: 'Shutting a company closes it for the current session but retains the data. Deleting a company removes its data from the selected data location and should be treated as permanent.' },
            },
            {
              '@type': 'Question',
              name: 'Should I take a backup before deleting a company?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes. A backup is strongly recommended because it provides a recovery option if you later need the company accounting records.' },
            },
            {
              '@type': 'Question',
              name: 'Can I delete a company and create it again with the same name?',
              acceptedAnswer: { '@type': 'Answer', text: 'You may be able to create another company with the same name, depending on the existing data and configuration. Creating a new company does not restore the deleted company transactions, ledgers, or historical records.' },
            },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  }
}
