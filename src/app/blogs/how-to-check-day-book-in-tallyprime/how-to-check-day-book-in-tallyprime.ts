import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-check-day-book-in-tallyprime',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-to-check-day-book-in-tallyprime.html',
  styleUrl: './how-to-check-day-book-in-tallyprime.css',
})
export class HowToCheckDayBookInTallyprime implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly pageTitle = 'How to Check Day Book in TallyPrime: Complete Guide';
  private readonly description = 'Learn how to check the Day Book in TallyPrime, view daily transactions, filter vouchers by date, verify entries, and identify accounting mistakes with practical examples.';
  private readonly canonicalUrl = 'https://rltedzaro.com/how-to-check-day-book-in-tallyprime/';
  private readonly primaryKeyword = 'How to Check Day Book in TallyPrime';

  ngOnInit(): void {
    this.setPageMetadata();
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

    this.document.defaultView?.history.replaceState(null, '', `#${sectionId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setPageMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Day Book in TallyPrime, TallyPrime Day Book report, how to view Day Book in Tally, TallyPrime daily transactions, Day Book shortcut in TallyPrime',
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'RLT Edzaro' });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.description });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: 'RLT Edzaro' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.description });
  }

  private setCanonicalUrl(): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', this.canonicalUrl);
  }

  private addArticleSchema(): void {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.pageTitle,
      description: this.description,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.canonicalUrl,
      },
      author: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
      },
      publisher: {
        '@type': 'Organization',
        name: 'RLT Edzaro',
        url: 'https://rltedzaro.com/',
      },
      keywords: [
        this.primaryKeyword,
        'TallyPrime Day Book report',
        'TallyPrime daily transactions',
        'Day Book shortcut in TallyPrime',
      ],
      inLanguage: 'en-IN',
    };

    this.upsertJsonLd('day-book-article-schema', articleSchema);
  }

  private addFaqSchema(): void {
    const questions = [
      {
        question: 'How do I open the Day Book in TallyPrime?',
        answer: 'Open the relevant company, locate the Day Book through the available report navigation or Go To search, and select the report to view the recorded vouchers.',
      },
      {
        question: 'What is the shortcut to open the Day Book in TallyPrime?',
        answer: 'The exact shortcut or navigation may vary by TallyPrime version and configuration. The Go To or report search feature is a practical way to locate the Day Book when you do not know the navigation path.',
      },
      {
        question: 'Can I check the Day Book for one day only?',
        answer: "Yes. Use the report's date or period selection to set the start and end dates to the same day.",
      },
      {
        question: 'What transactions appear in the Day Book?',
        answer: 'Depending on the report configuration, the Day Book can display sales, purchases, receipts, payments, journal entries, and other recorded vouchers.',
      },
      {
        question: 'What is the difference between a Day Book and a ledger?',
        answer: 'The Day Book provides a broader view of vouchers recorded during a period. A ledger report focuses on the transactions and balances associated with a particular account.',
      },
      {
        question: 'Can I edit a voucher from the Day Book?',
        answer: "In supported workflows, you can open a voucher from the report and make changes if you have the required access and permissions. Follow your organisation's accounting controls before modifying saved transactions.",
      },
      {
        question: 'Can I print the Day Book in TallyPrime?',
        answer: "Yes. Depending on the version and available options, you can use the report's print or export features to produce a copy of the Day Book.",
      },
      {
        question: 'Why is the Day Book important for accounting students?',
        answer: 'It helps students understand how sales, purchase, payment, receipt, and journal vouchers appear in an accounting system. It also provides practical experience in transaction verification and bookkeeping.',
      },
    ];

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    this.upsertJsonLd('day-book-faq-schema', faqSchema);
  }

  private upsertJsonLd(id: string, data: Record<string, unknown>): void {
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
