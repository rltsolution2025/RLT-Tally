
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface RelatedLink {
  label: string;
  path: string;
}

interface LearningModule {
  title: string;
  intro: string;
  points: string[];
  closing?: string;
  relatedLink?: RelatedLink;
}

interface PracticalSkill {
  name: string;
  description: string;
}

interface Audience {
  title: string;
  description: string;
  relatedLink?: RelatedLink;
}

interface FAQ {
  question: string;
  answer: string;
  relatedLink?: RelatedLink;
}

@Component({
  selector: 'app-tally-with-gst-training',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tally-with-gst-training.html',
  styleUrl: './tally-with-gst-training.css',
})
export class TallyWithGstTraining {
  // SEO information
  readonly pageTitle =
    'Tally with GST Training: What Will You Learn?';

  readonly pageDescription =
    'Learn what you will study in Tally with GST training, including accounting, GST, invoicing, inventory, reports and practical TallyPrime skills.';

  readonly canonicalUrl =
    'https://rltedzaro.com/tally-with-gst-training-what-will-you-learn/';

  // Tally with GST syllabus
  readonly syllabus: string[] = [
    'Accounting fundamentals',
    'TallyPrime basics',
    'Company creation',
    'Ledger and group creation',
    'Voucher entries',
    'Sales and purchase transactions',
    'GST configuration',
    'CGST, SGST and IGST',
    'GST invoicing',
    'Input Tax Credit',
    'GST reports',
    'Inventory management',
    'Bank reconciliation',
    'Financial statements',
    'Practical accounting exercises',
  ];

  // What learners will study
  readonly learningModules: LearningModule[] = [
    {
      title: 'Basic Accounting Concepts',
      intro:
        'Before using accounting software, understanding the fundamentals of accounting is important. Tally training generally introduces concepts such as:',
      points: [
        'Debit and credit',
        'Assets and liabilities',
        'Income and expenses',
        'Capital',
        'Purchases and sales',
        'Receivables and payables',
        'Journal entries',
      ],
      closing:
        'These concepts help you understand why a transaction is entered in a particular way, rather than simply memorising software procedures.',
      relatedLink: {
        label: 'Can You Learn Tally Without Knowing Accounting?',
        path: '/can-you-learn-tally-without-knowing-accounting/',
      },
    },
    {
      title: 'TallyPrime Fundamentals',
      intro:
        'Once you understand the basics, you can start working with TallyPrime. You may learn how to:',
      points: [
        'Create a company',
        'Configure company settings',
        'Create accounting masters',
        'Navigate TallyPrime',
        'Configure features',
        'Manage users',
        'Take backups',
        'Restore company data',
      ],
      closing:
        'Learning the fundamentals first makes it easier to progress to GST, inventory and advanced accounting.',
      relatedLink: {
        label: 'Is TallyPrime Easy to Learn for Beginners?',
        path: '/is-tallyprime-easy-to-learn-for-beginners/',
      },
    },
    {
      title: 'Ledger and Group Creation',
      intro:
        'Ledgers are an important part of accounting in TallyPrime. During training, you can learn to create ledgers for:',
      points: [
        'Customers',
        'Suppliers',
        'Sales',
        'Purchases',
        'Expenses',
        'Income',
        'Cash',
        'Bank accounts',
        'GST accounts',
      ],
      closing:
        'You also learn how these ledgers are classified under appropriate groups. Proper ledger classification helps maintain organised accounting records.',
    },
    {
      title: 'Sales and Purchase Entries',
      intro:
        'A major part of Tally GST training involves recording everyday business transactions. You may practise:',
      points: [
        'Cash purchases',
        'Credit purchases',
        'Cash sales',
        'Credit sales',
        'Purchase returns',
        'Sales returns',
        'Discounts',
        'Debit notes',
        'Credit notes',
      ],
      closing:
        'Practical transaction entry helps you understand how day-to-day business activities are recorded in accounting software.',
    },
    {
      title: 'GST Configuration in TallyPrime',
      intro:
        'GST is one of the key components of a Tally course with GST. You can learn how GST information is configured in TallyPrime, including:',
      points: [
        'GST registration details',
        'GSTIN',
        'State details',
        'Tax rates',
        'HSN/SAC',
        'GST ledgers',
        'GST invoice settings',
      ],
      closing:
        'The objective is to understand how GST information is connected to accounting transactions.',
    },
    {
      title: 'GST Sales and Purchase Transactions',
      intro:
        'After GST configuration, you can practise GST-related transactions. Depending on the course syllabus, this may include:',
      points: [
        'CGST',
        'SGST',
        'IGST',
        'Local sales',
        'Interstate sales',
        'Local purchases',
        'Interstate purchases',
        'Taxable transactions',
        'GST-inclusive transactions',
        'GST-exclusive transactions',
      ],
      closing:
        'This practical exposure can be useful for accounting or billing positions where GST transactions are part of daily work.',
    },
    {
      title: 'GST Invoice Creation',
      intro:
        'Creating invoices is an important practical skill for many businesses. TallyPrime training may teach you how to create invoices containing:',
      points: [
        'Customer details',
        'GSTIN',
        'Invoice number',
        'Product or service details',
        'HSN/SAC',
        'Quantity',
        'Taxable value',
        'GST rate',
        'CGST',
        'SGST',
        'IGST',
        'Total invoice value',
      ],
      closing:
        'Practical training allows you to understand the complete invoicing process instead of learning it only through theory.',
    },
    {
      title: 'Input Tax Credit and GST Reports',
      intro:
        'A Tally GST course may also introduce you to Input Tax Credit (ITC) and GST-related reports. Training may cover:',
      points: [
        'Input tax',
        'Output tax',
        'GST summaries',
        'Purchase-related GST information',
        'Sales-related GST information',
        'Taxable transactions',
        'GST reports',
      ],
      closing:
        'The focus is on understanding how transactions entered into TallyPrime affect the resulting reports.',
    },
    {
      title: 'Inventory Management',
      intro:
        'Many businesses need accounting and inventory management together. TallyPrime training may also cover:',
      points: [
        'Stock groups',
        'Stock categories',
        'Stock items',
        'Units of measurement',
        'Godowns',
        'Purchase orders',
        'Sales orders',
        'Stock movements',
        'Inventory reports',
      ],
      closing:
        'These skills can be particularly useful for people interested in accounting roles in trading, retail, manufacturing and distribution businesses.',
    },
    {
      title: 'Banking and Financial Reports',
      intro:
        'TallyPrime can also be used to maintain and review banking and financial information. You may learn:',
      points: [
        'Bank entries',
        'Cheque transactions',
        'Deposits',
        'Withdrawals',
        'Bank reconciliation',
        'Trial Balance',
        'Profit & Loss Account',
        'Balance Sheet',
        'Day Book',
        'Cash Book',
        'Bank Book',
        'Receivables',
        'Payables',
      ],
      closing:
        'Learning to understand reports is important because an accountant needs more than transaction-entry skills.',
    },
  ];

  // Practical skills table
  readonly practicalSkills: PracticalSkill[] = [
    {
      name: 'Accounting',
      description: 'Basic accounting principles',
    },
    {
      name: 'TallyPrime',
      description: 'Software operation and configuration',
    },
    {
      name: 'Ledger Management',
      description: 'Creating and organising ledgers',
    },
    {
      name: 'Voucher Entry',
      description: 'Recording business transactions',
    },
    {
      name: 'GST',
      description: 'Recording GST transactions',
    },
    {
      name: 'Invoicing',
      description: 'Creating GST-based invoices',
    },
    {
      name: 'Inventory',
      description: 'Managing stock transactions',
    },
    {
      name: 'Banking',
      description: 'Recording and reconciling bank transactions',
    },
    {
      name: 'Reports',
      description: 'Generating accounting and GST reports',
    },
    {
      name: 'Financial Statements',
      description: 'Understanding business financial information',
    },
  ];

  // Who should learn Tally with GST?
  readonly audiences: Audience[] = [
    {
      title: 'Students',
      description:
        'Students who want to develop practical accounting and software skills can consider Tally GST training.',
      relatedLink: {
        label: 'Tally Course After 12th: Career Options',
        path: '/tally-course-after-12th-career-options/',
      },
    },
    {
      title: 'Freshers',
      description:
        'Graduates and freshers can add TallyPrime and GST skills to their existing qualifications.',
    },
    {
      title: 'Job Seekers',
      description:
        'Those interested in accounting, billing or finance-related entry-level roles can develop practical Tally skills.',
      relatedLink: {
        label: 'What Jobs Can You Get After Learning Tally?',
        path: '/what-jobs-can-you-get-after-learning-tally/',
      },
    },
    {
      title: 'Working Professionals',
      description:
        'People already working in accounts, billing or administration can learn TallyPrime to strengthen their existing skills.',
    },
  ];

  // Course duration learning paths
  readonly basicLearningPath =
    'Accounting Basics → TallyPrime → Voucher Entry → GST → Reports';

  readonly advancedLearningPath =
    'Inventory → Banking → Payroll → Advanced Accounting → Practical Projects';

  // Career-related factors
  readonly jobFactors: string[] = [
    'Educational qualification',
    'Accounting knowledge',
    'TallyPrime skills',
    'GST knowledge',
    'Practical experience',
    'Communication skills',
    'Employer requirements',
  ];

  // Practical accounting workflow
  readonly practicalProcess: string[] = [
    'Create a company',
    'Create ledgers',
    'Enter the transaction',
    'Apply GST',
    'Generate the invoice',
    'Check the report',
  ];

  // RLT Edzaro training audience
  readonly trainingAudience: string[] = [
    'Students',
    'Freshers',
    'Job seekers',
    'Working professionals',
    'Business owners',
    'People looking to develop accounting skills',
  ];

  // Frequently asked questions
  readonly faqs: FAQ[] = [
    {
      question: 'Is Tally with GST good for beginners?',
      answer:
        'Yes. Beginners can start with accounting fundamentals and gradually learn TallyPrime, GST and practical transactions.',
    },
    {
      question: 'What is included in a Tally GST course?',
      answer:
        'A typical course may include accounting basics, TallyPrime, ledger creation, voucher entries, GST transactions, invoicing, inventory, banking and financial reports.',
    },
    {
      question: 'Can I learn Tally without an accounting background?',
      answer:
        'Yes. Beginners can start with basic accounting concepts before progressing to TallyPrime and GST.',
      relatedLink: {
        label: 'Can You Learn Tally Without Knowing Accounting?',
        path: '/can-you-learn-tally-without-knowing-accounting/',
      },
    },
    {
      question: 'Is GST included in TallyPrime training?',
      answer:
        'Many TallyPrime training programs include GST as part of their syllabus. The exact topics depend on the course.',
    },
    {
      question: 'How long does it take to learn TallyPrime?',
      answer:
        'It depends on your starting knowledge, course syllabus and practice time.',
      relatedLink: {
        label: 'How Long Does It Take to Learn TallyPrime?',
        path: '/how-long-does-it-take-to-learn-tallyprime/',
      },
    },
    {
      question: 'What jobs can I apply for after learning Tally?',
      answer:
        'Tally skills can be relevant to accounting, billing and finance-related positions. Your opportunities depend on your qualifications, experience and employer requirements.',
    },
    {
      question: 'Is TallyPrime easy to learn?',
      answer:
        'Beginners can learn TallyPrime through a structured approach that starts with accounting fundamentals and progresses to practical transactions.',
      relatedLink: {
        label: 'Is TallyPrime Easy to Learn for Beginners?',
        path: '/is-tallyprime-easy-to-learn-for-beginners/',
      },
    },
  ];

  // Smoothly scroll to the top of the page
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }


  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const targetElement = document.getElementById(sectionId);

    if (!targetElement) {
      console.warn(`Section not found: ${sectionId}`);
      return;
    }

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Update the URL hash without reloading the page.
    window.history.replaceState(
      null,
      '',
      `#${sectionId}`
    );
  }

}
