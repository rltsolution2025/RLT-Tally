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
