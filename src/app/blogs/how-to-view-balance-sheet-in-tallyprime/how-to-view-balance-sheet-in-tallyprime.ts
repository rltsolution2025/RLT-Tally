import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [RouterLink],
  selector: 'app-how-to-view-balance-sheet-in-tallyprime',
  styleUrl: './how-to-view-balance-sheet-in-tallyprime.css',
  templateUrl: './how-to-view-balance-sheet-in-tallyprime.html',
})
export class HowToViewBalanceSheetInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to View Balance Sheet in TallyPrime: Complete Guide';
  private readonly description = 'Learn how to view a balance sheet in TallyPrime, understand assets and liabilities, change reporting periods, configure reports, and export your balance sheet.';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-view-balance-sheet-in-tallyprime/';

  ngOnInit(): void {
    this.title.setTitle(`${this.pageTitle} | RLT Edzaro`);
    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'how to view balance sheet in TallyPrime, TallyPrime balance sheet report, balance sheet in TallyPrime step by step, how to check balance sheet in Tally, TallyPrime financial reports, export balance sheet from TallyPrime'
    });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.description });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });

    this.setCanonicalUrl();
    this.addArticleSchema();
    this.addFaqSchema();
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
      block: 'start'
    });
  }

  private setCanonicalUrl(): void {
    let canonical = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.description,
      mainEntityOfPage: this.canonicalUrl,
      url: this.canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },
      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/'
      },
      inLanguage: 'en-IN',
      articleSection: 'TallyPrime Accounting Guides',
      keywords: [
        'how to view balance sheet in TallyPrime',
        'TallyPrime balance sheet report',
        'TallyPrime financial reports',
        'export balance sheet from TallyPrime'
      ]
    };

    this.upsertJsonLd('balance-sheet-article-schema', schema);
  }

  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How do I view the balance sheet in TallyPrime?',
        answer: 'Open the relevant company, navigate to the Gateway of Tally, and select Balance Sheet. Review the report and choose the required reporting date.'
      },
      {
        question: 'What is the shortcut key to open the balance sheet in TallyPrime?',
        answer: 'The most direct method is to select Balance Sheet from the Gateway of Tally. Available navigation shortcuts can vary by TallyPrime version and configuration, so check the on-screen shortcut guidance in your installation.'
      },
      {
        question: 'Can I view a balance sheet for a previous financial year?',
        answer: 'Yes. Use the report date or period controls to select the required historical reporting date, provided the relevant accounting data is available.'
      },
      {
        question: 'How can I view the detailed ledger balances in a balance sheet?',
        answer: 'Select the relevant group or ledger in the report and open the detailed view. This allows you to investigate the transactions and balances contributing to the reported figure.'
      },
      {
        question: 'Can I export the balance sheet from TallyPrime to Excel?',
        answer: 'TallyPrime supports report-export workflows, and Excel may be available as an output format depending on your version and configuration. Review the export options displayed in your installation.'
      },
      {
        question: 'Why is the balance sheet important in accounting?',
        answer: 'A balance sheet shows the financial position of a business at a particular date. It helps users understand assets, liabilities, and equity and supports financial review and decision-making.'
      },
      {
        question: 'What is the difference between a balance sheet and a profit and loss statement?',
        answer: 'A balance sheet shows the financial position at a specific date. A profit and loss statement summarises income and expenses over a reporting period to determine the profit or loss.'
      },
      {
        question: 'Can beginners learn balance sheet preparation using TallyPrime?',
        answer: 'Yes. Beginners can practise entering transactions, creating ledgers, viewing the balance sheet, and drilling down into account balances using a properly configured practice company.'
      }
    ];

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    };

    this.upsertJsonLd('balance-sheet-faq-schema', schema);
  }

  private upsertJsonLd(
    id: string,
    data: Record<string, unknown>
  ): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }
}