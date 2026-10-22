import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

interface ShortcutItem {
  number: number;
  key: string;
  function: string;
}

interface ShortcutCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  items: ShortcutItem[];
  tip?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-tallyprime-shortcut-keys',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './tallyprime-shortcut-keys.html',
  styleUrl: './tallyprime-shortcut-keys.css',
})
export class TallyprimeShortcutKeys implements OnInit {
  readonly pageTitle = '50 TallyPrime Shortcut Keys Every Accountant Should Know';

  readonly pageDescription =
    'Discover 50 useful TallyPrime shortcut keys for accounting, voucher entry, reports, inventory, and navigation. Improve your accounting workflow with this quick reference guide.';

  readonly pageSlug = '/tallyprime-shortcut-keys/';

  readonly shortcutCategories: ShortcutCategory[] = [
    {
      id: 'general-navigation-shortcuts',
      number: '01',
      title: 'General Navigation Shortcut Keys',
      description:
        'These shortcuts help you move between screens and access common functions.',
      tip:
        'If you regularly switch between reports, learn the Go To function. It can help you access supported reports and features without repeatedly navigating through menus.',
      items: [
        { number: 1, key: 'Esc', function: 'Go back to the previous screen or close the current menu.' },
        { number: 2, key: 'Ctrl+A', function: 'Accept or save a screen in supported contexts.' },
        { number: 3, key: 'Alt+F2', function: 'Change the reporting period in relevant screens.' },
        { number: 4, key: 'F2', function: 'Change the date in relevant screens.' },
        { number: 5, key: 'Alt+G', function: 'Open Go To for accessing reports and features.' },
        { number: 6, key: 'Ctrl+F', function: 'Access supported search or find functions, depending on context.' },
        { number: 7, key: 'Alt+K', function: 'Open the Company menu in supported contexts.' },
        { number: 8, key: 'Alt+Y', function: 'Open the Data menu in supported contexts.' },
        { number: 9, key: 'Alt+Z', function: 'Open the Exchange menu in supported contexts.' },
        { number: 10, key: 'Alt+O', function: 'Open the Import menu in supported contexts.' },
      ],
    },
    {
      id: 'voucher-entry-shortcuts',
      number: '02',
      title: 'Voucher Entry Shortcut Keys',
      description:
        'Voucher shortcuts help accountants record everyday business transactions.',
      tip:
        'For example, when paying office rent through a bank account, use the Payment Voucher workflow, then select the appropriate ledger accounts and enter the amount.',
      items: [
        { number: 11, key: 'F4', function: 'Select Contra Voucher.' },
        { number: 12, key: 'F5', function: 'Select Payment Voucher.' },
        { number: 13, key: 'F6', function: 'Select Receipt Voucher.' },
        { number: 14, key: 'F7', function: 'Select Journal Voucher.' },
        { number: 15, key: 'F8', function: 'Select Sales Voucher.' },
        { number: 16, key: 'F9', function: 'Select Purchase Voucher.' },
        { number: 17, key: 'Alt+F5', function: 'Select Debit Note in supported contexts.' },
        { number: 18, key: 'Alt+F6', function: 'Select Credit Note in supported contexts.' },
        { number: 19, key: 'Ctrl+F8', function: 'Select Credit Note in supported voucher contexts.' },
        { number: 20, key: 'Ctrl+F9', function: 'Select Debit Note in supported voucher contexts.' },
      ],
    },
    {
      id: 'date-reporting-shortcuts',
      number: '03',
      title: 'Date and Reporting Shortcut Keys',
      description:
        'These shortcuts are useful when preparing financial reports or reviewing transactions for a particular period.',
      tip:
        'To review sales for a particular month, open the relevant sales report, change the reporting period, and review transactions for the selected dates.',
      items: [
        { number: 21, key: 'F2', function: 'Change the date in supported screens.' },
        { number: 22, key: 'Alt+F2', function: 'Change the period in supported reports.' },
        { number: 23, key: 'Alt+G', function: 'Access reports through Go To.' },
        { number: 24, key: 'Esc', function: 'Return to the previous screen.' },
        { number: 25, key: 'Enter', function: 'Open or drill down into a selected item where supported.' },
        { number: 26, key: 'Spacebar', function: 'Select or toggle an item in supported screens.' },
        { number: 27, key: 'Tab', function: 'Move to the next field where supported.' },
        { number: 28, key: 'Shift+Tab', function: 'Move to the previous field where supported.' },
        { number: 29, key: 'Arrow keys', function: 'Move between available fields or report items.' },
        { number: 30, key: 'Page Up / Page Down', function: 'Move through records or report pages where supported.' },
      ],
    },
    {
      id: 'company-data-shortcuts',
      number: '04',
      title: 'Company and Data Management Shortcut Keys',
      description:
        "These functions are useful when managing company data and navigating the software's data-related menus.",
      tip:
        'Some menu shortcuts are tied to specific menu options and may change across releases. Always check the menu labels in your version of TallyPrime.',
      items: [
        { number: 31, key: 'Alt+K', function: 'Access the Company menu.' },
        { number: 32, key: 'Alt+Y', function: 'Access the Data menu.' },
        { number: 33, key: 'Alt+O', function: 'Access the Import menu.' },
        { number: 34, key: 'Alt+Z', function: 'Access the Exchange menu.' },
        { number: 35, key: 'Alt+M', function: 'Access the Share menu in supported contexts.' },
        { number: 36, key: 'Ctrl+A', function: 'Accept a screen or confirm an action where supported.' },
        { number: 37, key: 'Esc', function: 'Cancel or leave a screen where supported.' },
        { number: 38, key: 'Enter', function: 'Confirm a selection or open an item where supported.' },
        { number: 39, key: 'Alt+G', function: 'Access Go To.' },
        { number: 40, key: 'F1', function: 'Open Help or access context-dependent help/company functions.' },
      ],
    },
    {
      id: 'daily-keyboard-controls',
      number: '05',
      title: 'Useful Keyboard Controls for Daily Accounting',
      description:
        'These keyboard controls can make data entry and navigation more comfortable.',
      tip:
        'The same key can be useful in several workflows. Its exact action depends on which screen or field is active.',
      items: [
        { number: 41, key: 'Ctrl+A', function: 'Accept or save supported screens.' },
        { number: 42, key: 'Esc', function: 'Return to the previous screen.' },
        { number: 43, key: 'Enter', function: 'Select or open a highlighted item where supported.' },
        { number: 44, key: 'Tab', function: 'Move forward between fields.' },
        { number: 45, key: 'Shift+Tab', function: 'Move backward between fields.' },
        { number: 46, key: 'Arrow Up', function: 'Move to the previous available item or field.' },
        { number: 47, key: 'Arrow Down', function: 'Move to the next available item or field.' },
        { number: 48, key: 'Home', function: 'Move to the beginning of a field or list where supported.' },
        { number: 49, key: 'End', function: 'Move to the end of a field or list where supported.' },
        { number: 50, key: 'Spacebar', function: 'Select or toggle an option where supported.' },
      ],
    },
  ];

  readonly priorityShortcuts = [
    { key: 'F2', title: 'Change the date', description: 'Change the date in supported screens.' },
    { key: 'Alt+F2', title: 'Change the reporting period', description: 'Adjust the period in relevant reports.' },
    { key: 'F4', title: 'Contra Voucher', description: 'Record supported cash and bank fund transfers.' },
    { key: 'F5', title: 'Payment Voucher', description: 'Record money paid by the business.' },
    { key: 'F6', title: 'Receipt Voucher', description: 'Record money received by the business.' },
    { key: 'F7', title: 'Journal Voucher', description: 'Record suitable accounting adjustments.' },
    { key: 'F8', title: 'Sales Voucher', description: 'Record sales of goods or services.' },
    { key: 'F9', title: 'Purchase Voucher', description: 'Record business purchases.' },
    { key: 'Alt+G', title: 'Go To', description: 'Access supported reports and features.' },
    { key: 'Esc', title: 'Return to previous screen', description: 'Go back or leave the current menu where supported.' },
  ];

  readonly learningSteps = [
    {
      title: 'Start with daily voucher entries',
      description:
        'Practise Payment, Receipt, Contra, Journal, Sales and Purchase vouchers using sample business transactions.',
    },
    {
      title: 'Practise report navigation',
      description:
        'Open commonly used reports, change dates and periods, and drill down into ledger balances.',
    },
    {
      title: 'Learn shortcuts in context',
      description:
        'Instead of memorizing keys separately, use each shortcut while completing an actual accounting task.',
    },
    {
      title: 'Keep a reference sheet',
      description:
        'Maintain a list of verified shortcuts near your workstation. Update it if you change TallyPrime releases or use customized voucher types.',
    },
    {
      title: 'Practise with sample data',
      description:
        'Create a sample company and record purchases, sales, rent, salary, customer receipts and supplier payments. Review the resulting ledgers and reports.',
    },
  ];

  readonly commonMistakes = [
    {
      title: 'Using a shortcut without checking the active screen',
      description:
        'The same key or combination can behave differently depending on the active field, menu, report or voucher.',
      icon: 'fa-solid fa-display',
    },
    {
      title: 'Assuming every shortcut works identically in every release',
      description:
        'Some menu functions and shortcut behaviors can vary. Check the keyboard hints and menus in your installed version.',
      icon: 'fa-solid fa-code-branch',
    },
    {
      title: 'Selecting the wrong voucher type',
      description:
        'Understand the business transaction before choosing a voucher. A bank payment for rent is generally a Payment Voucher, not Contra.',
      icon: 'fa-solid fa-file-circle-question',
    },
    {
      title: 'Accepting a voucher without verification',
      description:
        'Check the ledger accounts, amount, transaction date and applicable tax details before accepting a voucher.',
      icon: 'fa-solid fa-list-check',
    },
    {
      title: 'Memorizing keys without understanding accounting',
      description:
        'Shortcuts speed up navigation, but you still need to understand the accounting treatment behind every transaction.',
      icon: 'fa-solid fa-book-open',
    },
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'What are the most commonly used TallyPrime shortcut keys?',
      answer:
        'Commonly used shortcuts include F2 for changing the date, Alt+F2 for changing the period, F4 for Contra Voucher, F5 for Payment Voucher, F6 for Receipt Voucher, F7 for Journal Voucher, F8 for Sales Voucher, F9 for Purchase Voucher and Alt+G for Go To.',
    },
    {
      question: 'What is the shortcut key for Sales Voucher in TallyPrime?',
      answer:
        'F8 is the standard shortcut for Sales Voucher in the usual voucher-entry workflow. The active screen and configured voucher types may affect the available options.',
    },
    {
      question: 'What is the shortcut key for Purchase Voucher in TallyPrime?',
      answer: 'F9 is the standard shortcut for Purchase Voucher in the usual voucher-entry workflow.',
    },
    {
      question: 'What is the shortcut key to change the date in TallyPrime?',
      answer: 'F2 is commonly used to change the date in supported TallyPrime screens.',
    },
    {
      question: 'What is the shortcut key to change the period in TallyPrime?',
      answer: 'Alt+F2 is commonly used to change the reporting period in supported screens.',
    },
    {
      question: 'What does Alt+G do in TallyPrime?',
      answer: 'Alt+G opens the Go To function, which helps users access supported reports and features.',
    },
    {
      question: 'Can I use TallyPrime without a mouse?',
      answer:
        'You can perform many TallyPrime tasks using the keyboard. However, available keyboard interactions depend on the screen, configuration and function you need to use.',
    },
    {
      question: 'Are Tally ERP 9 and TallyPrime shortcut keys the same?',
      answer:
        'Some shortcuts are similar, but not every shortcut or menu interaction is identical. Check the documentation for your installed product and version.',
    },
  ];

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

  ngOnInit(): void {
    this.setPageMetadata();
    this.setStructuredData();
  }

  goToBlogs(): void {
    void this.router.navigate(['/blogs']);
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`Table of contents target not found: #${sectionId}`);
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  private setPageMetadata(): void {
    this.titleService.setTitle(this.pageTitle);

    this.metaService.updateTag({
      name: 'description',
      content: this.pageDescription,
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: [
        'TallyPrime shortcut keys',
        'Tally shortcut keys list',
        'TallyPrime keyboard shortcuts',
        'Tally ERP shortcut keys',
        'TallyPrime voucher shortcut keys',
        'Tally shortcut keys for accountants',
        'TallyPrime shortcut keys PDF',
        'TallyPrime function keys',
      ].join(', '),
    });

    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.pageDescription });
    this.metaService.updateTag({ property: 'og:url', content: this.getCanonicalUrl() });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: this.pageDescription });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = this.getCanonicalUrl();
  }

  private getCanonicalUrl(): string {
    const origin = this.document.location?.origin;

    return origin && origin !== 'null'
      ? `${origin}${this.pageSlug}`
      : this.pageSlug;
  }

  private setStructuredData(): void {
    const canonicalUrl = this.getCanonicalUrl();

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: this.pageTitle,
          description: this.pageDescription,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          url: canonicalUrl,
          inLanguage: 'en-IN',
          articleSection: 'Tally & Finance',
          keywords: [
            'TallyPrime shortcut keys',
            'TallyPrime keyboard shortcuts',
            'Tally voucher shortcut keys',
            'TallyPrime function keys',
          ],
          publisher: {
            '@type': 'Organization',
            name: 'RLT Edzaro',
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: this.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const scriptId = 'tallyprime-shortcut-keys-structured-data';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }
}
