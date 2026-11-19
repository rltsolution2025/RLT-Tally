import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Blog {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  url: string;
  featured?: boolean;
}

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  // =========================================================
  // SEARCH
  // =========================================================

  searchTerm: string = '';

  selectedCategory: string = 'All';

  // =========================================================
  // PAGINATION
  // =========================================================

  currentPage: number = 1;

  itemsPerPage: number = 6;

  // =========================================================
  // BLOG DATA
  // =========================================================

  blogs: Blog[] = [
    {
      title: 'TallyPrime vs Excel: Which Is Better for Accounting?',

      description:
        'TallyPrime vs Excel for accounting: compare features, accounting workflows, reporting, inventory, GST, flexibility and when to use each tool.',

      image: 'blogs-image/tallyprime vs Excel.png',

      category: 'Tally & Finance',

      date: 'August 20, 2026',

      readTime: '6 min read',

      url: '/tallyprime-vs-excel-for-accounting',

      featured: true,
    },

    {
      title: 'Tally Accountant Salary in India: Fresher to Experienced',

      description:
        'Learn about Tally accountant salaries in India, factors affecting pay, entry-level roles, required skills and career growth opportunities for accounting professionals.',

      image: 'blogs-image/Tally Accountant Salary in India.png',

      category: 'Tally & Finance',

      date: 'August 20, 2026',

      readTime: '6 min read',

      url: '/tally-accountant-salary-in-india',
    },

    {
      title: 'What Jobs Can You Get After Learning Tally?',

      description:
        'Explore jobs after learning TallyPrime, including accountant, accounts assistant, billing executive, GST and payroll roles, plus the skills employers may look for.',

      image: 'blogs-image/Jobs After Learning Tally.png',

      category: 'Tally & Finance',

      date: 'August 20, 2026',

      readTime: '6 min read',

      url: '/jobs-after-learning-tally',
    },

    {
      title: 'Tally Course After 12th: Career Options',

      description:
        'Learn how TallyPrime after 12th can build practical accounting skills and explore career options such as accounts assistant, billing executive, junior accountant, accounts executive, payroll assistant and GST assistant.',

      image: 'blogs-image/tally after 12.png',

      category: 'Tally & Finance',

      date: 'August 22, 2026',

      readTime: '7 min read',

      url: '/tally-course-after-12th',
    },

    {
      title: 'Tally Course: Fees, Duration, Syllabus & Career Opportunities',

      description:
        'Explore Tally course fees, duration, syllabus, eligibility, practical training and career opportunities. Learn what to check before joining a Tally course.',

      image: 'blogs-image/Tally Course.png',

      category: 'Tally & Finance',

      date: 'August 22, 2026',

      readTime: '7 min read',

      url: '/tally-course-fees-duration-syllabus-career',
    },

    {
      title: 'Can You Learn Tally Without Knowing Accounting?',

      description:
        'Learn whether you can start TallyPrime without accounting knowledge, what accounting basics beginners should learn, whether a commerce degree is required and how to build practical Tally skills.',

      image: 'blogs-image/Can You Learn Tally Without Knowing.png',

      category: 'Tally & Finance',

      date: 'August 22, 2026',

      readTime: '6 min read',

      url: '/learn-tally-without-accounting-knowledge',
    },

    {
      title: 'How Long Does It Take to Learn TallyPrime?',

      description:
        'Find out how long it takes to learn TallyPrime, from accounting fundamentals and voucher entry to GST, inventory, payroll, reporting and practical accounting skills.',

      image: 'blogs-image/How Long Does It Take to Learn TallyPrime.png',

      category: 'Tally & Finance',

      date: 'August 24, 2026',

      readTime: '7 min read',

      url: '/how-long-does-it-take-to-learn-tallyprime',
    },

    {
      title: 'Is TallyPrime Easy to Learn for Beginners? Complete Guide',

      description:
        'Is TallyPrime easy for beginners? Learn the basics, required accounting knowledge, learning stages, common challenges and tips for learning TallyPrime.',

      image: 'blogs-image/Is TallyPrime Easy to Learn for Beginners.png',

      category: 'Tally & Finance',

      date: 'August 24, 2026',

      readTime: '7 min read',

      url: '/is-tallyprime-easy-to-learn-for-beginners',
    },
    {
      title: 'TallyPrime Accounting Entries Every Beginner Should Practice',
      description:
        'Practise TallyPrime accounting entries with examples of purchases, sales, receipts, payments, GST, expenses, journal entries and voucher types for beginners.',
      image: 'blogs-image/TallyPrime-Accounting-Entries.png',
      category: 'Tally & Finance',
      date: 'October 12, 2026',
      readTime: '12 min read',
      url: '/tallyprime-accounting-entries-beginners-should-practice',
    },
    {
      title: 'Tally with GST Training: What Will You Learn?',
      description:
        'Learn what Tally with GST training covers, including accounting fundamentals, TallyPrime, ledger creation, voucher entries, GST invoicing, inventory management, banking and financial reports.',
      image: 'blogs-image/Tally-with-GST-Training.png',
      category: 'Tally & Finance',
      date: 'October 12, 2026',
      readTime: '12 min read',
      url: '/tally-with-gst-training-what-will-you-learn/',
    },
    {
      title: 'TallyPrime Voucher Types Explained With Examples',
      description:
        'Learn the major TallyPrime voucher types with practical accounting examples, including Contra, Payment, Receipt, Journal, Sales, Purchase, Debit Note, Credit Note, order vouchers, inventory vouchers, payroll and special-purpose vouchers. Understand common shortcut keys and how to choose the right voucher for everyday business transactions.',
      image: 'blogs-image/TallyPrime-Voucher-Types.png',
      category: 'Tally & Finance',
      date: 'October 12, 2026',
      readTime: '12 min read',
      url: '/tallyprime-voucher-types-explained-with-examples/',
    },
    {
      title: 'TallyPrime Practical Test Questions for Accountant Jobs: 25 Questions With Answers',
      description:
        'Prepare for accountant job interviews with 25 TallyPrime practical test questions and answers. Practise company creation, ledger management, accounting voucher entries, GST transactions, inventory management, bank reconciliation, Trial Balance, Profit and Loss Account, and Balance Sheet reports.',
      image: 'blogs-image/TallyPrime-Practical-Test-Questions-Answers.png',
      category: 'Tally & Finance',
      date: 'October 12, 2026',
      readTime: '15 min read',
      url: '/tallyprime-practical-test-questions-accountant-jobs/',
    },
    {
      title: 'TallyPrime Payroll: How to Manage Employee Salaries',
      description:
        'Learn how to manage employee salaries in TallyPrime with this step-by-step guide. Understand payroll setup, employee records, salary components, pay heads, attendance management, salary calculations, PF and ESI deductions, payslip generation, and payroll reports.',
      image: 'blogs-image/TallyPrime-Payroll-How-to-Manage-Employee-Salaries.png',
      category: 'Tally & Finance',
      date: 'October 12, 2026',
      readTime: '15 min read',
      url: '/tallyprime-payroll-manage-employee-salaries/',
    },
    {
      title: 'How to Create a Company in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to create a company in TallyPrime step by step. Understand company details, business address, country and state selection, financial year, books beginning date, GST setup, and what to do after company creation.',
      image: 'blogs-image/How-to-Create-Company-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 21, 2026', // Update to the actual publication date if different
      readTime: '10 min read',
      url: '/how-to-create-company-in-tallyprime/',
    },
    {
      title: 'How to Create Ledgers in TallyPrime With Real Examples',
      description:
        'Learn how to create ledgers in TallyPrime step by step with real accounting examples. Understand ledger groups, customer ledgers, supplier ledgers, expenses, sales, purchases, and GST.',
      image:
        'blogs-image/How-to-Create-Ledgers-in-TallyPrime-With-Real-Examples.png',
      category: 'Tally & Finance',
      date: 'October 21, 2026',
      readTime: '15 min read',
      url: '/how-to-create-ledgers-in-tallyprime/',
    },
    {
      title: '50 TallyPrime Shortcut Keys Every Accountant Should Know',
      description:
        'Discover 50 useful TallyPrime shortcut keys for accounting, voucher entry, report navigation, company management, and daily data entry. Learn commonly used function keys, keyboard combinations, practical examples, and tips to improve your accounting workflow.',
      image: 'blogs-image/TallyPrime-Shortcut-Keys.png',
      category: 'Tally & Finance',
      date: 'October 21, 2026',
      readTime: '10 min read',
      url: '/tallyprime-shortcut-keys/',
    },
    {
      title: 'TallyPrime Keyboard Shortcuts for Sales and Purchase Entries',
      description:
        'Learn TallyPrime keyboard shortcuts for sales and purchase entries, GST invoices, customer and supplier ledgers, and practical billing workflows. Discover how to use F8 for Sales, F9 for Purchase, F2 for date changes, and Alt + C to create masters in supported fields.',
      image: 'blogs-image/TallyPrime-Sales-Purchase-Shortcut-Keys.png',
      category: 'Tally & Finance',
      date: 'October 21, 2026',
      readTime: '8 min read',
      url: '/tallyprime-sales-purchase-shortcut-keys/',
    },
    {
      title: 'How to Use Go To and Search Features in TallyPrime',
      description:
        'Learn how to use Go To and search features in TallyPrime to find financial reports, vouchers, ledgers, sales registers, and accounting information faster. Discover how to use Alt + G, navigate reports, apply date filters, and improve your daily accounting workflow.',
      image: 'blogs-image/How-to-Use-Go-To-and-Search-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 21, 2026',
      readTime: '8 min read',
      url: '/how-to-use-go-to-search-in-tallyprime/',
    },
    {
      title: 'How to Create Masters Quickly in TallyPrime',
      description:
        'Learn how to create ledgers, stock items, groups, stock groups, units, customers, and suppliers in TallyPrime. Follow step-by-step instructions for creating masters, using Alt + C for supported on-the-fly creation, configuring GST details, avoiding duplicate records, and maintaining accurate accounting data.',
      image: 'blogs-image/How-to-Create-Masters-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 21, 2026',
      readTime: '12 min read',
      url: '/how-to-create-masters-in-tallyprime/',
    },
    {
      title: 'TallyPrime Tips to Reduce Manual Accounting Work: 12 Practical Ways to Save Time',
      description:
        'Discover 12 practical TallyPrime tips to reduce manual accounting work, speed up voucher entry, configure GST calculations, reconcile bank statements, manage inventory, generate financial reports, import data, and improve accounting accuracy.',
      image: 'blogs-image/TallyPrime-Tips-to-Reduce-Manual-Accounting-Work.png',
      category: 'Tally & Finance',
      date: 'October 22, 2026',
      readTime: '12 min read',
      url: '/tallyprime-tips-to-reduce-manual-accounting-work/',
    },
    {
      title: 'How to Customize Reports in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to customize reports in TallyPrime by changing reporting periods, applying available filters, adjusting report views, reviewing ledger balances, drilling down into vouchers, and exporting reports for business analysis.',
      image: 'blogs-image/How-to-Customize-Reports-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 22, 2026',
      readTime: '10 min read',
      url: '/how-to-customize-reports-in-tallyprime/',
    },
    {
      title: 'How to Use Filters in TallyPrime Reports: Step-by-Step Guide',
      description:
        'Learn how to use filters in TallyPrime reports to find transactions, analyse accounting data, filter sales and purchase reports, review ledger balances, investigate vouchers, and improve reporting accuracy with practical examples.',
      image: 'blogs-image/How-to-Use-Filters-in-TallyPrime-Reports.png',
      category: 'Tally & Finance',
      date: 'October 22, 2026',
      readTime: '12 min read',
      url: '/how-to-use-filters-in-tallyprime-reports/',
    },
    {
      title: 'How to Export TallyPrime Reports to Excel and PDF: Step-by-Step Guide',
      description:
        'Learn how to export TallyPrime reports to Excel and PDF with step-by-step instructions. Discover how to export Balance Sheets, Profit and Loss Accounts, Trial Balances, Ledger Reports, Stock Summaries, and GST reports, with practical examples and troubleshooting tips.',
      image: 'blogs-image/How-to-Export-TallyPrime-Reports-to-Excel-and-PDF.png',
      category: 'Tally & Finance',
      date: 'October 22, 2026',
      readTime: '12 min read',
      url: '/how-to-export-tallyprime-reports-to-excel-and-pdf/',
    },
    {
      title: 'How to Create a Proforma Invoice in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to create, save, print, and share a proforma invoice in TallyPrime using optional sales vouchers. Follow step-by-step instructions to enter customer details, add products or services, include payment and delivery terms, and understand the difference between a proforma invoice and a regular sales invoice.',
      image: 'blogs-image/How-to-Create-Proforma-Invoice-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 23, 2026',
      readTime: '8 min read',
      url: '/how-to-create-proforma-invoice-in-tallyprime/',
    },
    {
      title: 'How to Delete a Company in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to delete a company in TallyPrime using Alt + D. Follow step-by-step instructions to back up company data, navigate the Company Alteration screen, understand the difference between deleting and shutting a company, and avoid common data-loss mistakes.',
      image: 'blogs-image/How-to-Delete-a-Company-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 23, 2026',
      readTime: '9 min read',
      url: '/how-to-delete-a-company-in-tallyprime/',
    },
    {
      title: 'How to Delete Unused Ledger in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to delete unused ledgers in TallyPrime, remove multiple unused ledgers, use Alt + D, find unused masters through Chart of Accounts, and resolve common ledger deletion errors. Follow step-by-step instructions to maintain an organised Chart of Accounts while protecting important accounting records.',
      image: 'blogs-image/How-to-Delete-Unused-Ledger-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 23, 2026',
      readTime: '9 min read',
      url: '/how-to-delete-unused-ledger-in-tallyprime/',
    },
    {
      title: 'How to Make a Credit Note in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to make a credit note in TallyPrime with step-by-step instructions. Understand credit note voucher activation, sales returns, customer ledger selection, original invoice details, GST calculations, accounting entries, and how to verify credit notes in accounting reports.',
      image: 'blogs-image/How-to-Make-Credit-Note-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 23, 2026',
      readTime: '10 min read',
      url: '/how-to-make-credit-note-in-tallyprime/',
    },
    {
      title: 'How to Generate a Trial Balance in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to generate a Trial Balance in TallyPrime with step-by-step instructions. Understand ledger-wise reports, reporting periods, opening balances, debit and credit totals, and how to troubleshoot Trial Balance differences.',
      image: 'blogs-image/How-to-Generate-Trial-Balance-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'October 23, 2026',
      readTime: '10 min read',
      url: '/generate-trial-balance-in-tallyprime/',
    },

    {
      title: 'How to Read a Profit and Loss Statement in TallyPrime: Complete Guide',
      description:
        'Learn how to view and read a Profit and Loss Statement in TallyPrime. Understand sales revenue, direct and indirect expenses, gross profit, net profit, profit margins, and practical accounting examples. Discover how to compare financial reports and analyse business performance.',
      image: 'blogs-image/How-to-Read-Profit-and-Loss-Statement-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/how-to-read-profit-and-loss-statement-in-tallyprime/',
    },
    {
      title: 'How to View Balance Sheet in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to view a Balance Sheet in TallyPrime with step-by-step instructions. Understand assets, liabilities, capital, reporting dates, ledger balances, detailed reports, and how to export or print the Balance Sheet for financial analysis.',
      image: 'blogs-image/How-to-View-Balance-Sheet-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/how-to-view-balance-sheet-in-tallyprime/',
    },
    {
      title: 'How to Check Cash Flow in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to check cash flow in TallyPrime with step-by-step instructions. Understand cash inflows and outflows, analyse receipts and payments, calculate net cash movement, verify cash and bank balances, and use practical examples to understand business liquidity.',
      image: 'blogs-image/How-to-Check-Cash-Flow-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/how-to-check-cash-flow-in-tallyprime/',
    },

    {
      title: 'How to Track Receivables and Payables in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to track accounts receivable and payable in TallyPrime. Understand bill-wise tracking, customer outstanding balances, supplier payments, due dates, ageing reports, partial payments, and how to manage receivables and payables with practical examples.',
      image: 'blogs-image/How-to-Track-Receivables-and-Payables-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/track-receivables-and-payables-in-tallyprime/',
    },
    {
      title: 'How to Find Outstanding Payments in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to find outstanding payments in TallyPrime and track customer receivables and supplier payables. Understand outstanding bills, invoice-wise balances, due dates, ageing reports, partial payments, bill-wise allocation, and practical methods to manage pending payments.',
      image: 'blogs-image/How-to-Find-Outstanding-Payments-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/how-to-find-outstanding-payments-in-tallyprime/',
    },
    {
      title: 'How to Check Day Book in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to check the Day Book in TallyPrime with step-by-step instructions. Understand daily transactions, view sales and purchase vouchers, filter entries by date, verify ledger details, identify accounting mistakes, and review practical examples.',
      image: 'blogs-image/How-to-Check-Day-Book-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '10 min read',
      url: '/how-to-check-day-book-in-tallyprime/',
    },
    {
      title: 'How to View Ledger Reports in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to view ledger reports in TallyPrime with step-by-step instructions. Understand debit and credit transactions, select ledgers, change reporting periods, review opening and closing balances, examine individual vouchers, and troubleshoot common ledger report errors.',
      image: 'blogs-image/How-to-View-Ledger-Reports-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/how-to-view-ledger-reports-in-tallyprime/',
    },
    {
      title: 'How to Track Expenses Using Cost Centres in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to track expenses using Cost Centres in TallyPrime. Understand how to enable Cost Centres, create cost centres and cost categories, allocate expenses to departments and projects, and generate reports for better expense analysis and financial management.',
      image: 'blogs-image/How-to-Track-Expenses-Using-Cost-Centres-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '10 min read',
      url: '/track-expenses-using-cost-centres-in-tallyprime/',
    },

    {
      title: 'How to Use Ratio Analysis in TallyPrime for Business Reporting: Complete Guide',
      description:
        'Learn how to use ratio analysis in TallyPrime to evaluate business performance. Understand liquidity ratios, profitability ratios, solvency ratios, and efficiency ratios, including current ratio, quick ratio, gross profit ratio, net profit ratio, debt-to-equity ratio, inventory turnover, and practical financial analysis examples.',
      image: 'blogs-image/How-to-Use-Ratio-Analysis-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '14 min read',
      url: '/ratio-analysis-in-tallyprime-business-reporting/',
    },
    {
      title: 'How to Create Stock Items in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to create stock items in TallyPrime with step-by-step instructions. Understand stock groups, units of measurement, opening stock quantities, stock valuation, inventory configuration, and how to manage stock items with practical examples.',
      image: 'blogs-image/How-to-Create-Stock-Items-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/create-stock-items-in-tallyprime/',
    },
    {
      title: 'How to Create Stock Groups and Categories in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to create stock groups and stock categories in TallyPrime. Understand their differences, organise inventory, create parent and child groups, assign categories to stock items, configure units of measurement, and improve inventory reporting with practical examples.',
      image: 'blogs-image/How-to-Create-Stock-Groups-and-Categories-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/how-to-create-stock-groups-and-categories-in-tallyprime/',
    },
    {
      title: 'How to Manage Multiple Godowns in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to manage multiple godowns in TallyPrime with step-by-step instructions. Understand how to enable godown management, create warehouses and storage locations, allocate stock, record stock transfers, manage opening stock, and generate godown-wise inventory reports.',
      image: 'blogs-image/How-to-Manage-Multiple-Godowns-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '10 min read',
      url: '/how-to-manage-multiple-godowns-in-tallyprime/',
    },
    //
    {
      title: 'How to Track Stock Movement in TallyPrime: A Step-by-Step Guide',
      description:
        'Learn how to track stock movement in TallyPrime with step-by-step instructions. Understand stock receipts, sales, stock transfers, inventory adjustments, godown-wise stock tracking, Stock Summary reports, and practical inventory management examples.',
      image: 'blogs-image/How-to-Track-Stock-Movement-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 16, 2026',
      readTime: '12 min read',
      url: '/how-to-track-stock-movement-in-tallyprime/',
    },
    {
      title: 'How to Check Stock Summary in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to check Stock Summary in TallyPrime, view opening and closing stock, monitor inventory quantities and values, understand stock reports, and troubleshoot common inventory errors.',
      image: 'blogs-image/How-to-Check-Stock-Summary-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '9 min read',
      url: '/how-to-check-stock-summary-in-tallyprime/',
    },
    {
      title: 'How to Manage Batch-Wise Inventory in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to manage batch-wise inventory in TallyPrime, enable batch tracking, record stock purchases and sales, track expiry dates, and maintain accurate inventory records.',
      image: 'blogs-image/How-to-Manage-Batch-Wise-Inventory-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '11 min read',
      url: '/how-to-manage-batch-wise-inventory-in-tallyprime/',
    },
    {
      title: 'How to Set Reorder Levels in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to set reorder levels in TallyPrime, configure stock items, track minimum inventory levels, calculate reorder points, and review inventory reports with practical examples.',
      image: 'blogs-image/How-to-Set-Reorder-Levels-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '10 min read',
      url: '/how-to-set-reorder-levels-in-tallyprime/',
    },
    {
      title: 'How to Track Stock Ageing in TallyPrime: A Complete Guide',
      description:
        'Learn how to track stock ageing in TallyPrime, analyse slow-moving inventory, understand stock ageing reports, calculate inventory age, and improve stock management with practical examples.',
      image: 'blogs-image/How-to-Track-Stock-Ageing-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '10 min read',
      url: '/how-to-track-stock-ageing-in-tallyprime/',
    },
    {
      title: 'How to Record Stock Transfers Between Godowns in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to record stock transfers between godowns in TallyPrime using Stock Journal vouchers, create godowns, transfer inventory between warehouses, and verify godown-wise stock reports.',
      image: 'blogs-image/Stock-Transfer-Between-Godowns-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '10 min read',
      url: '/stock-transfer-between-godowns-in-tallyprime/',
    },
    {
      title: 'How to Calculate Stock Valuation in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to calculate stock valuation in TallyPrime using FIFO, weighted average, and other stock valuation methods. Understand inventory costing, configure stock items, and calculate closing stock values with practical examples.',
      image: 'blogs-image/How-to-Calculate-Stock-Valuation-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '12 min read',
      url: '/how-to-calculate-stock-valuation-in-tallyprime/',
    },
    {
      title: 'How to Perform Bank Reconciliation in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to perform bank reconciliation in TallyPrime using manual and statement-based methods. Follow step-by-step instructions to import bank statements, match transactions, identify differences, and reconcile bank balances with practical examples.',
      image: 'blogs-image/How-to-Perform-Bank-Reconciliation-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '12 min read',
      url: '/bank-reconciliation-in-tallyprime/',
    },
    {
      title: 'How to Import Bank Statements into TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to import bank statements into TallyPrime, configure bank ledgers, import supported statement files, match transactions, perform bank reconciliation, and fix common import errors.',
      image: 'blogs-image/How-to-Import-Bank-Statements-into-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '11 min read',
      url: '/how-to-import-bank-statements-in-tallyprime/',
    },
    {
      title: 'Bank Reconciliation in TallyPrime: Common Errors and Solutions',
      description:
        'Learn how to perform bank reconciliation in TallyPrime, identify common reconciliation errors, fix unmatched transactions, correct bank charges and duplicate entries, and maintain accurate accounting records.',
      image: 'blogs-image/Bank-Reconciliation-in-TallyPrime-Common-Errors-and-Solutions.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '11 min read',
      url: '/bank-reconciliation-tallyprime-errors-solutions/',
    },
    {
      title: 'How to Record Bank Transactions in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to record bank transactions in TallyPrime, including customer receipts, supplier payments, cash deposits, bank transfers, cheque entries, bank charges, interest income, and bank reconciliation with practical examples.',
      image: 'blogs-image/How-to-Record-Bank-Transactions-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '12 min read',
      url: '/how-to-record-bank-transactions-in-tallyprime/',
    },
    {
      title: 'How to Check Bank Book in TallyPrime: Step-by-Step Guide',
      description:
        'Learn how to check the Bank Book in TallyPrime, view bank transactions, filter dates, verify opening and closing balances, inspect individual vouchers, and reconcile bank statements with practical examples.',
      image: 'blogs-image/How-to-Check-Bank-Book-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '9 min read',
      url: '/how-to-check-bank-book-in-tallyprime/',
    },
    {
      title: 'How to Match Bank Transactions With TallyPrime Entries: Step-by-Step Guide',
      description:
        'Learn how to match bank transactions with TallyPrime entries, perform bank reconciliation, identify unmatched transactions, record missing bank charges, and resolve discrepancies with practical examples.',
      image: 'blogs-image/How-to-Match-Bank-Transactions-With-TallyPrime-Entries.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '10 min read',
      url: '/match-bank-transactions-with-tallyprime-entries/',
    },
    {
      title: 'TallyPrime Banking Features Every Accountant Should Know',
      description:
        'Discover essential TallyPrime banking features, including bank reconciliation, bank statement import, cheque management, payment and receipt vouchers, fund transfers, outstanding tracking, and accounting reports.',
      image: 'blogs-image/TallyPrime-Banking-Features-for-Accountants.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '12 min read',
      url: '/tallyprime-banking-features-for-accountants/',
    },
    {
      title: 'How to Track Receivables and Payments Through Banking Reports in TallyPrime',
      description:
        'Learn how to track customer receivables, monitor overdue invoices, manage supplier payments, review banking reports, and reconcile bank transactions in TallyPrime with practical examples.',
      image: 'blogs-image/Track-Receivables-and-Payments-Through-Banking-Reports-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '11 min read',
      url: '/track-receivables-and-payments-through-banking-reports/',
    },
    {
      title: 'How Connected Banking Works in TallyPrime: Complete Guide',
      description:
        'Learn how Connected Banking works in TallyPrime, enable banking services, connect bank accounts, check live balances, retrieve bank statements, reconcile transactions, and understand online payment features.',
      image: 'blogs-image/How-Connected-Banking-Works-in-TallyPrime.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '11 min read',
      url: '/how-connected-banking-works-in-tallyprime/',
    },
    {
      title: 'TallyPrime Bank Reconciliation: Step-by-Step Practical Example',
      description:
        'Learn bank reconciliation in TallyPrime with a practical example. Understand bank statement matching, unreconciled transactions, bank reconciliation statements (BRS), outstanding deposits, bank charges, and common errors.',
      image: 'blogs-image/TallyPrime-Bank-Reconciliation-Practical-Example.png',
      category: 'Tally & Finance',
      date: 'November 18, 2026',
      readTime: '10 min read',
      url: '/tallyprime-bank-reconciliation-practical-example/',
    },
  ];

  // =========================================================
  // FEATURED BLOG
  // =========================================================

  get featuredBlog(): Blog | undefined {
    return this.blogs.find((blog) => blog.featured === true);
  }

  // =========================================================
  // FILTERED BLOGS
  // =========================================================

  get filteredBlogs(): Blog[] {
    const search = this.searchTerm.toLowerCase().trim();

    return this.blogs.filter((blog) => {
      // Category filter

      const matchesCategory =
        this.selectedCategory === 'All' || blog.category === this.selectedCategory;

      // Search filter

      const matchesSearch =
        !search ||
        blog.title.toLowerCase().includes(search) ||
        blog.description.toLowerCase().includes(search) ||
        blog.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }

  // =========================================================
  // TOTAL PAGES
  // =========================================================

  get totalPages(): number {
    return Math.ceil(this.filteredBlogs.length / this.itemsPerPage);
  }

  // =========================================================
  // PAGE NUMBERS
  // =========================================================

  get pageNumbers(): number[] {
    return Array.from(
      {
        length: this.totalPages,
      },
      (_, index) => index + 1,
    );
  }

  // =========================================================
  // PAGINATED BLOGS
  // =========================================================

  get paginatedBlogs(): Blog[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;

    const endIndex = startIndex + this.itemsPerPage;

    return this.filteredBlogs.slice(startIndex, endIndex);
  }

  // =========================================================
  // CURRENT START ITEM
  // =========================================================

  get currentStartItem(): number {
    if (this.filteredBlogs.length === 0) {
      return 0;
    }

    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  // =========================================================
  // CURRENT END ITEM
  // =========================================================

  get currentEndItem(): number {
    return Math.min(
      this.currentPage * this.itemsPerPage,

      this.filteredBlogs.length,
    );
  }

  // =========================================================
  // CATEGORY FILTER
  // =========================================================

  filterCategory(category: string): void {
    this.selectedCategory = category;

    // Always return to page 1

    this.currentPage = 1;
  }

  // =========================================================
  // SEARCH
  // =========================================================

  searchBlogs(): void {
    // Return to first page
    // whenever a new search is performed

    this.currentPage = 1;
  }

  // =========================================================
  // GO TO PAGE
  // =========================================================

  goToPage(page: number): void {
    // Prevent invalid page numbers

    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;

    this.scrollToLatestArticles();
  }

  // =========================================================
  // PREVIOUS PAGE
  // =========================================================

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;

      this.scrollToLatestArticles();
    }
  }

  // =========================================================
  // NEXT PAGE
  // =========================================================

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;

      this.scrollToLatestArticles();
    }
  }

  // =========================================================
  // SCROLL TO LATEST ARTICLES
  // =========================================================

  private scrollToLatestArticles(): void {
    setTimeout(
      () => {
        const element = document.getElementById('latest-articles');

        if (!element) {
          return;
        }

        const headerOffset = 100;

        const elementPosition = element.getBoundingClientRect().top;

        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,

          behavior: 'smooth',
        });
      },

      50,
    );
  }

  // =========================================================
  // CLEAR SEARCH & FILTERS
  // =========================================================

  clearFilters(): void {
    this.searchTerm = '';

    this.selectedCategory = 'All';

    this.currentPage = 1;
  }
}
