import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-export-tallyprime-reports-to-excel-and-pdf',
  standalone: true,
  imports: [],
  styleUrl: './how-to-export-tallyprime-reports-to-excel-and-pdf.css',
  templateUrl: './how-to-export-tallyprime-reports-to-excel-and-pdf.html',
})
export class HowToExportTallyprimeReportsToExcelAndPdf implements OnInit {
  private readonly pageTitle = 'How to Export TallyPrime Reports to Excel and PDF';
  private readonly pageDescription = 'Learn how to export TallyPrime reports to Excel and PDF with step-by-step instructions, supported formats, practical examples, and troubleshooting tips.';
  private readonly pageUrl = 'https://rltedzaro.com/how-to-export-tallyprime-reports-to-excel-and-pdf/';

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
      content: 'Export TallyPrime reports to Excel, export TallyPrime reports to PDF, TallyPrime Excel export, TallyPrime PDF export, TallyPrime report export shortcut',
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

  /** Scroll to the selected section and update the URL fragment. */
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
    const scriptId = 'tallyprime-export-reports-structured-data';
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
          headline: 'How to Export TallyPrime Reports to Excel and PDF: Step-by-Step Guide',
          description: this.pageDescription,
          mainEntityOfPage: this.pageUrl,
          author: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          publisher: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://rltedzaro.com/' },
          inLanguage: 'en-IN',
          keywords: 'TallyPrime export, Excel, PDF, accounting reports, Balance Sheet, Profit and Loss Account',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rltedzaro.com/' },
            { '@type': 'ListItem', position: 2, name: 'How to Export TallyPrime Reports to Excel and PDF', item: this.pageUrl },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do I export TallyPrime reports to Excel?',
              acceptedAnswer: { '@type': 'Answer', text: 'Open the required report, select the reporting period, access Export—commonly using Alt + E—and choose an available Excel-compatible format. Select the destination, complete the export, and verify the resulting file.' },
            },
            {
              '@type': 'Question',
              name: 'How do I export TallyPrime reports to PDF?',
              acceptedAnswer: { '@type': 'Answer', text: 'Open the report, choose the required period, access the export workflow, select PDF, specify the file name and destination, and confirm the export. Open the resulting PDF to verify the report layout and figures.' },
            },
            {
              '@type': 'Question',
              name: 'What is the shortcut key for exporting reports in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'Alt + E is commonly used to access the Export workflow in TallyPrime. Available options and screen behaviour may vary by version and context.' },
            },
            {
              '@type': 'Question',
              name: 'Can I export a Balance Sheet from TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can generally export the Balance Sheet using the available export options. Select the correct reporting period and choose a supported format, such as an Excel-compatible spreadsheet or PDF.' },
            },
            {
              '@type': 'Question',
              name: 'Can I export the Profit and Loss Account to Excel?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open the Profit and Loss Account, select the required period, and use the available export workflow to generate an Excel-compatible file.' },
            },
            {
              '@type': 'Question',
              name: 'Can I export TallyPrime reports to Google Sheets?',
              acceptedAnswer: { '@type': 'Answer', text: 'You can generally export a report in a spreadsheet-compatible format, then upload or import the file into Google Sheets if the format is supported. Review the imported data and formatting for accuracy.' },
            },
            {
              '@type': 'Question',
              name: 'Why should I export TallyPrime reports to Excel?',
              acceptedAnswer: { '@type': 'Answer', text: 'Excel is useful for filtering, sorting, calculating, comparing, and analysing accounting data. It can help accountants prepare management summaries and perform additional calculations.' },
            },
            {
              '@type': 'Question',
              name: 'Why should I export TallyPrime reports to PDF?',
              acceptedAnswer: { '@type': 'Answer', text: 'PDF is useful for sharing and printing reports in a consistent document layout. It is suitable for many management reviews, internal documentation needs, and authorised reporting workflows.' },
            },
            {
              '@type': 'Question',
              name: 'Can beginners learn report exporting in TallyPrime?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes. Beginners can practise exporting the Balance Sheet, Profit and Loss Account, Trial Balance, Ledger Report, and Stock Summary to understand practical accounting workflows.' },
            },
            {
              '@type': 'Question',
              name: 'Does exporting a TallyPrime report change the original accounting data?',
              acceptedAnswer: { '@type': 'Answer', text: 'Exporting a report normally creates an external copy of the displayed information. It does not itself alter the underlying accounting transactions in TallyPrime.' },
            },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  }
}
