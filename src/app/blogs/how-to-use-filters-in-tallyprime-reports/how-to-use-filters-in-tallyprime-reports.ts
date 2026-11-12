import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-use-filters-in-tallyprime-reports',
  standalone: true,
  imports: [],
  styleUrl: './how-to-use-filters-in-tallyprime-reports.css',
  templateUrl: './how-to-use-filters-in-tallyprime-reports.html',
})
export class HowToUseFiltersInTallyprimeReports implements OnInit {
  private readonly pageTitle = 'How to Use Filters in TallyPrime Reports';
  private readonly pageDescription = 'Learn how to use filters in TallyPrime reports to find transactions, analyse accounting data, filter sales and purchase reports, and improve reporting accuracy.';
  private readonly pageUrl = 'https://rltedzaro.com/how-to-use-filters-in-tallyprime-reports/';

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'keywords', content: 'How to use filters in TallyPrime reports, TallyPrime report filters, filter sales report in TallyPrime, TallyPrime ledger report, TallyPrime accounting reports' });
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

  /** Scrolls to a selected article section and updates the URL fragment. */
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
    const scriptId = 'tallyprime-report-filters-structured-data';
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
          headline: 'How to Use Filters in TallyPrime Reports: Step-by-Step Guide',
          description: this.pageDescription,
          mainEntityOfPage: this.pageUrl,
          author: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          publisher: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          inLanguage: 'en-IN',
          keywords: 'TallyPrime report filters, sales register, purchase register, ledger reports, accounting reporting',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
            { '@type': 'ListItem', position: 2, name: 'How to Use Filters in TallyPrime Reports', item: this.pageUrl },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How do I use filters in TallyPrime reports?', acceptedAnswer: { '@type': 'Answer', text: 'Open the relevant report, select the required reporting period, and use the filtering or selection options available on that screen. Review the results and open individual transactions when more detail is required.' } },
            { '@type': 'Question', name: 'Can I filter sales reports in TallyPrime by date?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can generally change the reporting period in the Sales Register or another relevant report to view transactions for a selected date range.' } },
            { '@type': 'Question', name: 'Can I filter transactions by ledger in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'You can review transactions associated with a particular ledger through the appropriate ledger report. The exact filtering options depend on the report and TallyPrime version.' } },
            { '@type': 'Question', name: 'What is the shortcut to change the reporting period in TallyPrime?', acceptedAnswer: { '@type': 'Answer', text: 'Alt + F2 is commonly used to change the reporting period in TallyPrime reports. The available shortcut may depend on the current screen and software version.' } },
            { '@type': 'Question', name: 'Can I filter transactions by voucher type?', acceptedAnswer: { '@type': 'Answer', text: 'Some reports provide voucher-type selection or filtering options. You can also use a report dedicated to the transaction category, such as the Sales Register or Purchase Register.' } },
            { '@type': 'Question', name: 'Do all TallyPrime reports support filters?', acceptedAnswer: { '@type': 'Answer', text: 'No. The available filtering, search, configuration, and selection options vary by report. Some reports provide dedicated filtering controls, while others rely on period selection or drill-down navigation.' } },
            { '@type': 'Question', name: 'Can I use filters to find errors in accounting entries?', acceptedAnswer: { '@type': 'Answer', text: 'Filters can help narrow down transactions for investigation, but filtering alone does not confirm an entry is incorrect. Open the voucher and verify supporting documents before making adjustments.' } },
            { '@type': 'Question', name: 'Why are filters useful for accounting students?', acceptedAnswer: { '@type': 'Answer', text: 'Filters help accounting students practise report analysis, transaction verification, and reconciliation with sales, purchases, ledgers, outstanding balances, and other accounting reports.' } },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  }
}
