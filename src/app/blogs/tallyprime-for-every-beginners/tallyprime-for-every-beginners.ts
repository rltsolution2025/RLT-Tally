import { DOCUMENT, CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

interface AccountingEntry {
  id: number;
  title: string;
  transaction: string;
  debit: string;
  credit: string;
  voucher: string;
  explanation: string;
}

interface PracticeStep {
  number: number;
  title: string;
  description: string;
}

interface CommonMistake {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-tallyprime-for-every-beginners',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tallyprime-for-every-beginners.html',
  styleUrls: ['./tallyprime-for-every-beginners.css'],
})
export class TallyprimeForEveryBeginners implements OnInit, OnDestroy {
  readonly pageTitle = 'TallyPrime Accounting Entries Every Beginner Should Practice | RLT Edzaro';
  readonly pageDescription = 'Learn 25 practical TallyPrime accounting entries for beginners, including purchases, sales, receipts, payments, GST, expenses and journal adjustments.';
  readonly canonicalUrl = 'https://www.rltedzaro.com/25-tallyprime-accounting-entries-beginners-should-practice';
  readonly blogImage = 'https://www.rltedzaro.com/blogs-image/25-TallyPrime-Accounting-Entries.png';
  readonly publishedDate = '2026-10-12';
  readonly modifiedDate = '2026-10-12';

  readonly accountingEntries: AccountingEntry[] = [
    { id: 1, title: 'Capital Introduced in Cash', transaction: 'The owner starts the business with ₹1,00,000 in cash.', debit: 'Cash A/c ₹1,00,000', credit: 'Capital A/c ₹1,00,000', voucher: 'Receipt / Journal (depending on setup)', explanation: 'Cash increases, and the owner’s capital also increases.' },
    { id: 2, title: 'Cash Deposited into Bank', transaction: 'Deposited ₹30,000 cash into the business bank account.', debit: 'Bank A/c ₹30,000', credit: 'Cash A/c ₹30,000', voucher: 'Contra', explanation: 'The bank balance increases while cash on hand decreases.' },
    { id: 3, title: 'Cash Withdrawn from Bank', transaction: 'Withdrew ₹10,000 from the bank for business cash requirements.', debit: 'Cash A/c ₹10,000', credit: 'Bank A/c ₹10,000', voucher: 'Contra', explanation: 'Cash on hand increases, and the bank balance decreases.' },
    { id: 4, title: 'Rent Paid in Cash', transaction: 'Paid office rent of ₹15,000 in cash.', debit: 'Rent A/c ₹15,000', credit: 'Cash A/c ₹15,000', voucher: 'Payment', explanation: 'Rent is recorded as an expense, and cash decreases.' },
    { id: 5, title: 'Electricity Bill Paid', transaction: 'Paid an electricity bill of ₹5,000.', debit: 'Electricity Expense A/c ₹5,000', credit: 'Cash / Bank A/c ₹5,000', voucher: 'Payment', explanation: 'The electricity expense is recorded when the bill is paid.' },
    { id: 6, title: 'Furniture Purchased for Cash', transaction: 'Purchased office furniture for ₹25,000 in cash.', debit: 'Furniture A/c ₹25,000', credit: 'Cash A/c ₹25,000', voucher: 'Payment', explanation: 'Furniture is recorded as an asset rather than a routine expense.' },
    { id: 7, title: 'Computer Purchased through Bank', transaction: 'Purchased a computer for ₹40,000 and paid through bank.', debit: 'Computer A/c ₹40,000', credit: 'Bank A/c ₹40,000', voucher: 'Payment', explanation: 'The computer asset increases, and the bank balance decreases.' },
    { id: 8, title: 'Goods Purchased for Cash', transaction: 'Purchased goods for resale worth ₹20,000 in cash.', debit: 'Purchase A/c ₹20,000', credit: 'Cash A/c ₹20,000', voucher: 'Purchase', explanation: 'The purchase is recorded, and cash decreases.' },
    { id: 9, title: 'Goods Purchased on Credit', transaction: 'Purchased goods worth ₹35,000 from ABC Traders on credit.', debit: 'Purchase A/c ₹35,000', credit: 'ABC Traders A/c ₹35,000', voucher: 'Purchase', explanation: 'Purchases increase, and the amount payable to the supplier increases.' },
    { id: 10, title: 'Goods Sold for Cash', transaction: 'Sold goods for ₹18,000 and received cash immediately.', debit: 'Cash A/c ₹18,000', credit: 'Sales A/c ₹18,000', voucher: 'Sales', explanation: 'Cash and sales revenue increase.' },
    { id: 11, title: 'Goods Sold on Credit', transaction: 'Sold goods worth ₹30,000 to XYZ Enterprises on credit.', debit: 'XYZ Enterprises A/c ₹30,000', credit: 'Sales A/c ₹30,000', voucher: 'Sales', explanation: 'The customer balance receivable and sales revenue increase.' },
    { id: 12, title: 'Money Received from Customer', transaction: 'Received ₹20,000 from XYZ Enterprises against its outstanding balance.', debit: 'Cash A/c ₹20,000', credit: 'XYZ Enterprises A/c ₹20,000', voucher: 'Receipt', explanation: 'Cash increases, and the customer’s outstanding balance decreases.' },
    { id: 13, title: 'Supplier Paid through Bank', transaction: 'Paid ABC Traders ₹15,000 through the bank.', debit: 'ABC Traders A/c ₹15,000', credit: 'Bank A/c ₹15,000', voucher: 'Payment', explanation: 'The supplier payable decreases, and the bank balance decreases.' },
    { id: 14, title: 'Salary Paid', transaction: 'Paid employee salaries totalling ₹35,000.', debit: 'Salary A/c ₹35,000', credit: 'Bank / Cash A/c ₹35,000', voucher: 'Payment', explanation: 'Salary expense is recorded, and the available funds decrease.' },
    { id: 15, title: 'Stationery Purchased', transaction: 'Purchased office stationery worth ₹3,000 in cash.', debit: 'Stationery A/c ₹3,000', credit: 'Cash A/c ₹3,000', voucher: 'Payment', explanation: 'Stationery is recorded as an office expense.' },
    { id: 16, title: 'Telephone and Internet Expense', transaction: 'Paid telephone and internet charges of ₹2,500.', debit: 'Telephone / Internet Expense A/c ₹2,500', credit: 'Cash / Bank A/c ₹2,500', voucher: 'Payment', explanation: 'Communication expenses are recorded, and funds decrease.' },
    { id: 17, title: 'Discount Allowed to Customer', transaction: 'A customer owes ₹10,000 but pays ₹9,500 after a ₹500 discount.', debit: 'Cash / Bank A/c ₹9,500; Discount Allowed A/c ₹500', credit: 'Customer A/c ₹10,000', voucher: 'Receipt', explanation: 'The customer balance is cleared, and the discount allowed is recorded.' },
    { id: 18, title: 'Discount Received from Supplier', transaction: 'Paid a supplier ₹9,500 against ₹10,000 due and received a ₹500 discount.', debit: 'Supplier A/c ₹10,000', credit: 'Cash / Bank A/c ₹9,500; Discount Received A/c ₹500', voucher: 'Payment', explanation: 'The supplier balance is cleared, and the discount received is recorded.' },
    { id: 19, title: 'Purchase with GST', transaction: 'Purchased goods for ₹10,000 plus illustrative 18% GST of ₹1,800.', debit: 'Purchase A/c ₹10,000; Input CGST A/c ₹900; Input SGST A/c ₹900', credit: 'Supplier A/c ₹11,800', voucher: 'Purchase', explanation: 'This example uses CGST and SGST for an eligible intra-state purchase.' },
    { id: 20, title: 'Local Sale with GST', transaction: 'Sold goods for ₹20,000 plus illustrative 18% GST of ₹3,600.', debit: 'Customer A/c ₹23,600', credit: 'Sales A/c ₹20,000; Output CGST A/c ₹1,800; Output SGST A/c ₹1,800', voucher: 'Sales', explanation: 'The customer is charged the sale value plus applicable GST.' },
    { id: 21, title: 'Interstate Sale with IGST', transaction: 'Sold goods for ₹25,000 plus illustrative 18% IGST of ₹4,500.', debit: 'Customer A/c ₹29,500', credit: 'Sales A/c ₹25,000; Output IGST A/c ₹4,500', voucher: 'Sales', explanation: 'This example uses IGST for an eligible interstate sale.' },
    { id: 22, title: 'Outstanding Salary', transaction: 'Salary of ₹8,000 is due but has not yet been paid.', debit: 'Salary A/c ₹8,000', credit: 'Outstanding Salary A/c ₹8,000', voucher: 'Journal', explanation: 'The expense is recognised even though payment is pending.' },
    { id: 23, title: 'Depreciation on Computer', transaction: 'Recorded ₹4,000 depreciation on a computer.', debit: 'Depreciation A/c ₹4,000', credit: 'Accumulated Depreciation A/c ₹4,000', voucher: 'Journal', explanation: 'Depreciation records the reduction in the asset’s depreciable value.' },
    { id: 24, title: 'Prepaid Insurance Adjustment', transaction: 'Of ₹12,000 insurance paid, ₹3,000 relates to a future period.', debit: 'Prepaid Insurance A/c ₹3,000', credit: 'Insurance Expense A/c ₹3,000', voucher: 'Journal', explanation: 'The future-period portion is treated as a prepaid asset.' },
    { id: 25, title: 'Bad Debt Written Off', transaction: 'Wrote off a customer balance of ₹5,000 as bad debt.', debit: 'Bad Debts A/c ₹5,000', credit: 'Customer A/c ₹5,000', voucher: 'Journal', explanation: 'The irrecoverable customer balance is written off.' },
  ];

  readonly entries = this.accountingEntries.map((entry) => {
    let category: string;
    if (entry.id === 1) category = 'Capital Entry';
    else if (entry.id <= 3) category = 'Cash and Bank';
    else if (entry.id <= 5) category = 'Expenses';
    else if (entry.id <= 7) category = 'Fixed Assets';
    else if (entry.id <= 9) category = 'Purchase Entries';
    else if (entry.id <= 11) category = 'Sales Entries';
    else if (entry.id <= 18) category = 'Receipts and Payments';
    else if (entry.id <= 21) category = 'GST Entries';
    else category = 'Journal Adjustments';

    const debitLines = entry.debit.split(';').map((line) => line.trim()).filter(Boolean).map((line) => `Dr ${line}`);
    const creditLines = entry.credit.split(';').map((line) => line.trim()).filter(Boolean).map((line) => `To ${line}`);
    return { ...entry, number: entry.id, category, entryLines: [...debitLines, ...creditLines] };
  });

  readonly practiceSteps: PracticeStep[] = [
    { number: 1, title: 'Create a Sample Company', description: 'Create a sample company named ABC Enterprises to practise accounting transactions.' },
    { number: 2, title: 'Create the Required Ledgers', description: 'Create cash, bank, capital, purchase, sales, customer, supplier, expense and GST ledgers.' },
    { number: 3, title: 'Enter Transactions', description: 'Record transactions using the appropriate voucher types in TallyPrime.' },
    { number: 4, title: 'Check the Day Book', description: 'Review transactions and check for incorrect ledger selections or amounts.' },
    { number: 5, title: 'Verify Financial Reports', description: 'Check the Trial Balance, Profit and Loss Account and Balance Sheet.' },
    { number: 6, title: 'Review Outstanding Balances', description: 'Verify receivables, payables and applicable GST reports.' },
    { number: 7, title: 'Correct and Practise Again', description: 'Correct mistakes and verify that reports reflect the transactions accurately.' },
  ];

  readonly reports: string[] = [
    'Day Book', 'Trial Balance', 'Profit and Loss Account', 'Balance Sheet',
    'Ledger Reports', 'Receivables and Payables', 'GST Reports',
  ];

  readonly commonMistakes: CommonMistake[] = [
    { title: 'Choosing the Wrong Voucher', description: 'Select the appropriate voucher for receipts, payments, purchases, sales, contra transactions or journal adjustments.' },
    { title: 'Selecting the Wrong Ledger', description: 'Verify the ledger account before saving each transaction.' },
    { title: 'Confusing Debtors and Creditors', description: 'Understand the difference between money receivable from customers and money payable to suppliers.' },
    { title: 'Entering Incorrect GST Details', description: 'Check the applicable GST treatment, tax rate, place of supply and ledger configuration.' },
    { title: 'Practising Only Theory', description: 'Enter sample transactions in TallyPrime and verify their impact on financial reports.' },
  ];

  readonly skills: string[] = [
    'Company creation and configuration', 'Ledger creation', 'Voucher entry',
    'Sales and purchase transactions', 'GST accounting basics', 'Cash and bank transactions',
    'Inventory basics', 'Payroll basics', 'Reports and adjustments', 'Practical accounting scenarios',
  ];

  readonly faqs: FaqItem[] = [
    { question: 'What are the basic accounting entries in TallyPrime?', answer: 'Beginners can start with capital introduced, cash and bank transfers, purchases, sales, receipts, payments and routine expense entries.' },
    { question: 'Which voucher is used for cash payments?', answer: 'The Payment voucher is generally used to record cash or bank payments.' },
    { question: 'Which voucher is used to receive money from a customer?', answer: 'The Receipt voucher is generally used to record money received from customers.' },
    { question: 'Which voucher is used for cash-to-bank transfers?', answer: 'The Contra voucher is generally used for cash and bank transfers within the same business.' },
    { question: 'Which voucher is used for purchases?', answer: 'The Purchase voucher is generally used to record business purchases. The exact workflow depends on the transaction and company configuration.' },
    { question: 'Which voucher is used for sales?', answer: 'The Sales voucher is generally used to record sales transactions.' },
    { question: 'Can beginners learn TallyPrime without accounting knowledge?', answer: 'Yes. Beginners can learn step by step, although understanding basic debit and credit concepts will make practice easier.' },
    { question: 'How can I practise TallyPrime accounting entries?', answer: 'Create a sample company, enter practice transactions, and verify the results in the Day Book, Trial Balance and other reports.' },
  ];

  private readonly schemaIds: string[] = [];
  private readonly isBrowser: boolean;

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly router: Router,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.setSeoMetadata();
    this.setCanonicalUrl();
    this.addStructuredData();
  }

  ngOnDestroy(): void {
    this.schemaIds.forEach((id) => this.document.getElementById(id)?.remove());
  }

  private setSeoMetadata(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'keywords', content: 'TallyPrime accounting entries, TallyPrime journal entries, Tally accounting entries for beginners, accounting entries in TallyPrime, TallyPrime voucher entries, GST accounting examples' });

    const tags: Array<{ property: string; content: string }> = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: this.pageTitle },
      { property: 'og:description', content: this.pageDescription },
      { property: 'og:url', content: this.canonicalUrl },
      { property: 'og:image', content: this.blogImage },
      { property: 'article:published_time', content: `${this.publishedDate}T00:00:00+05:30` },
      { property: 'article:modified_time', content: `${this.modifiedDate}T00:00:00+05:30` },
    ];
    tags.forEach((tag) => this.meta.updateTag(tag));
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: this.blogImage });
  }

  private setCanonicalUrl(): void {
    let link = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', this.canonicalUrl);
  }

  private addStructuredData(): void {
    const schemas: object[] = [
      {
        '@context': 'https://schema.org', '@type': 'Article', headline: this.pageTitle,
        description: this.pageDescription, image: [this.blogImage], datePublished: this.publishedDate,
        dateModified: this.modifiedDate,
        author: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://www.rltedzaro.com/' },
        publisher: { '@type': 'Organization', name: 'RLT Edzaro', url: 'https://www.rltedzaro.com/' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': this.canonicalUrl },
      },
      {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rltedzaro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://www.rltedzaro.com/blogs' },
          { '@type': 'ListItem', position: 3, name: 'TallyPrime Accounting Entries Every Beginner Should Practice', item: this.canonicalUrl },
        ],
      },
      {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: this.faqs.map((faq) => ({
          '@type': 'Question', name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ];

    schemas.forEach((schema, index) => {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `tallyprime-beginners-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      this.document.head.appendChild(script);
      this.schemaIds.push(script.id);
    });
  }

  scrollToSection(sectionId: string): void {
    if (!this.isBrowser) return;
    this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  goToBlogs(): void {
    this.router.navigate(['/blogs']);
  }
}
