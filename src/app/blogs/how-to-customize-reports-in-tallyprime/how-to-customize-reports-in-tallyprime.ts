import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-customize-reports-in-tallyprime',
  standalone: true,
  imports: [],
  styleUrl: './how-to-customize-reports-in-tallyprime.css',
  templateUrl: './how-to-customize-reports-in-tallyprime.html',
})
export class HowToCustomizeReportsInTallyprime implements OnInit {
  private readonly pageTitle = 'How to Customize Reports in TallyPrime: Complete Guide';
  private readonly pageDescription = 'Learn how to customize reports in TallyPrime, filter data, change report views, configure columns, export reports, and analyse business accounts efficiently.';
  private readonly pageUrl = 'https://rltedzaro.com/how-to-customize-reports-in-tallyprime/';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'keywords', content: 'How to customize reports in TallyPrime, TallyPrime report customization, TallyPrime report filters, TallyPrime accounting reports, export reports from TallyPrime' });
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

  /** Smoothly scrolls to a section selected from the article table of contents. */
  scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    const target = this.document.getElementById(sectionId);
    if (!target) {
      console.warn(`Report article section not found: ${sectionId}`);
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
    const scriptId = 'tallyprime-report-customization-structured-data';
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
          keywords: 'TallyPrime report customization, accounting reports, report filters, export reports',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
            { '@type': 'ListItem', position: 2, name: 'How to Customize Reports in TallyPrime', item: this.pageUrl },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How do I customize reports in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'Open the required report, select the reporting period, use available filters and configuration options, and drill down into transaction details where needed. You can then export the report using a supported format.' } },
            { '@type': 'Question', name: 'Can I change the date range of a report in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In supported reports, use the reporting-period option to select the required dates. Alt + F2 is commonly used to change the period.' } },
            { '@type': 'Question', name: 'Can I filter reports by ledger in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'The available ledger-selection and filtering options depend on the report. You can often open the relevant ledger report directly or drill down from a summary report to inspect transactions.' } },
            { '@type': 'Question', name: 'Can I export customized TallyPrime reports to Excel?', acceptedAnswer: { '@type': 'Answer', text: 'TallyPrime supports exporting reports in available formats, which may include Excel and PDF depending on the report and version. Verify the export options on your screen.' } },
            { '@type': 'Question', name: 'Which reports can I customize in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'Common reports include the Trial Balance, Profit and Loss Account, Balance Sheet, Day Book, Cash Book, Bank Book, and outstanding receivables and payables reports. Available customization options vary by report.' } },
            { '@type': 'Question', name: 'Does customizing a report change the original accounting entries?', acceptedAnswer: { '@type': 'Answer', text: 'Changing a report’s period, filters, or display configuration does not normally change the underlying accounting entries. Editing or altering a voucher is a separate action and should be performed only when necessary.' } },
            { '@type': 'Question', name: 'Why is my TallyPrime report showing incorrect figures?', acceptedAnswer: { '@type': 'Answer', text: 'Incorrect figures may result from wrong accounting entries, missing transactions, incorrect ledger classification, or an unexpected reporting period. Review the report settings and drill down into underlying vouchers to identify the cause.' } },
            { '@type': 'Question', name: 'Can beginners learn report customization in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Beginners can practise changing reporting periods, opening accounting reports, examining ledger balances, reviewing vouchers, and exporting reports using a properly configured practice company.' } },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  }
}
