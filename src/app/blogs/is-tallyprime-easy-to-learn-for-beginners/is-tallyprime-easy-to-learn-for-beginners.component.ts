import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-is-tallyprime-easy-to-learn-for-beginners',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './is-tallyprime-easy-to-learn-for-beginners.component.html',
  styleUrl: './is-tallyprime-easy-to-learn-for-beginners.component.css',
})
export class IsTallyprimeEasyToLearnForBeginnersComponent implements OnInit {
  // =========================================================
  // SEO
  // =========================================================

  private readonly pageTitle =
    'Is TallyPrime Easy to Learn for Beginners? Complete Guide | RLT Edzaro';

  private readonly metaDescription =
    'Is TallyPrime easy for beginners? Learn the basics, required accounting knowledge, learning stages, common challenges and tips for learning TallyPrime.';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/is-tallyprime-easy-to-learn-for-beginners';

  private readonly pageUrl =
    'https://www.rltedzaro.com/is-tallyprime-easy-to-learn-for-beginners';

  private readonly imageUrl =
    'https://www.rltedzaro.com/assets/blogs/is-tallyprime-easy-to-learn-for-beginners.png';

  // =========================================================
  // ACCOUNTING TERMS
  // =========================================================

  accountingTerms = [
    {
      title: 'Debit & Credit',
      icon: 'fa-solid fa-arrow-right-arrow-left',
      text: 'Basic concepts used when recording accounting transactions.',
    },
    {
      title: 'Ledger',
      icon: 'fa-solid fa-book',
      text: 'An important accounting record used for transactions.',
    },
    {
      title: 'Journal',
      icon: 'fa-solid fa-file-lines',
      text: 'An accounting record used for recording transactions.',
    },
    {
      title: 'Voucher',
      icon: 'fa-solid fa-receipt',
      text: 'Used to record different types of business transactions.',
    },
    {
      title: 'Assets & Liabilities',
      icon: 'fa-solid fa-building-columns',
      text: 'Fundamental concepts for understanding a business’s accounts.',
    },
    {
      title: 'Income & Expenses',
      icon: 'fa-solid fa-money-bill-trend-up',
      text: 'Important concepts for understanding business transactions.',
    },
    {
      title: 'Accounts Payable',
      icon: 'fa-solid fa-arrow-down',
      text: 'A term beginners may need to understand before working with accounting transactions.',
    },
    {
      title: 'Accounts Receivable',
      icon: 'fa-solid fa-arrow-up',
      text: 'Another important accounting concept for beginners.',
    },
  ];

  // =========================================================
  // BEGINNER LEARNING PATH
  // =========================================================

  beginnerPath = [
    'Basic accounting concepts',
    'TallyPrime interface',
    'Company creation',
    'Ledger creation',
    'Voucher types',
    'Sales and purchase transactions',
    'Reports',
    'GST',
    'Inventory',
    'Payroll',
  ];

  // =========================================================
  // COMMON BEGINNER MISTAKES
  // =========================================================

  beginnerMistakes = [
    {
      title: 'Memorizing Instead of Understanding',
      icon: 'fa-solid fa-brain',
      text: 'Don’t simply memorize which voucher to select. Understand why that voucher is used.',
    },
    {
      title: 'Ignoring Accounting Basics',
      icon: 'fa-solid fa-book',
      text: 'Trying to learn advanced GST or payroll features without understanding basic accounting can make the learning process harder.',
    },
    {
      title: 'Practicing Only in Class',
      icon: 'fa-solid fa-chalkboard-user',
      text: 'Practice outside class is important for building familiarity with accounting software.',
    },
    {
      title: 'Learning Too Many Features at Once',
      icon: 'fa-solid fa-layer-group',
      text: 'Start with fundamentals before moving to advanced topics.',
    },
  ];

  // =========================================================
  // WHO SHOULD LEARN TALLYPRIME
  // =========================================================

  targetLearners = [
    {
      title: '12th-Standard Students',
      icon: 'fa-solid fa-school',
      text: 'Students can begin building accounting software skills.',
    },
    {
      title: 'Commerce Students',
      icon: 'fa-solid fa-graduation-cap',
      text: 'TallyPrime can complement accounting education.',
    },
    {
      title: 'B.Com Graduates',
      icon: 'fa-solid fa-user-graduate',
      text: 'Graduates can add practical accounting software skills.',
    },
    {
      title: 'Accounting Students',
      icon: 'fa-solid fa-book',
      text: 'TallyPrime provides practical software exposure.',
    },
    {
      title: 'Job Seekers',
      icon: 'fa-solid fa-user-tie',
      text: 'Tally skills can support entry-level accounting roles.',
    },
    {
      title: 'Small-Business Employees',
      icon: 'fa-solid fa-store',
      text: 'Useful for employees involved in accounting activities.',
    },
    {
      title: 'Billing Executives',
      icon: 'fa-solid fa-receipt',
      text: 'Can build practical transaction and billing knowledge.',
    },
    {
      title: 'Accounts Assistants',
      icon: 'fa-solid fa-file-invoice',
      text: 'Can strengthen day-to-day accounting software skills.',
    },
    {
      title: 'Entrepreneurs',
      icon: 'fa-solid fa-briefcase',
      text: 'Can develop familiarity with business accounting processes.',
    },
  ];

  // =========================================================
  // LEARNING STEPS
  // =========================================================

  learningSteps = [
    {
      title: 'Learn Basic Accounting',
      text: 'Understand debit, credit, assets, liabilities, income and expenses.',
    },
    {
      title: 'Learn the Interface',
      text: 'Become familiar with the menus and navigation.',
    },
    {
      title: 'Create a Practice Company',
      text: 'Use sample business information.',
    },
    {
      title: 'Enter Daily Transactions',
      text: 'Practice sales, purchases, receipts, payments and expenses.',
    },
    {
      title: 'Learn GST and Inventory',
      text: 'Once the fundamentals are comfortable, move into specialized areas.',
    },
    {
      title: 'Work With Reports',
      text: 'Learn how to interpret the information generated by the software.',
    },
  ];

  // =========================================================
  // FAQ
  // =========================================================

  faqs = [
    {
      question: 'Is TallyPrime difficult for beginners?',
      answer:
        'It can seem difficult initially, particularly if accounting terminology is new. Regular practice can make it easier.',
    },
    {
      question: 'Can I learn Tally in one month?',
      answer:
        'A month may be enough to learn basic operations for some learners, but comprehensive practical proficiency generally requires additional practice.',
    },
    {
      question: 'Is Tally useful for freshers?',
      answer:
        'Yes. Tally skills can support entry-level accounting, billing and finance-related positions.',
    },
    {
      question: 'Can arts students learn Tally?',
      answer:
        'Yes. Students from different educational backgrounds can learn accounting software, although accounting fundamentals may need additional attention.',
    },
    {
      question: 'Should I learn Excel along with Tally?',
      answer:
        'Learning both can be useful because accounting jobs may involve accounting software as well as spreadsheet work.',
    },
  ];

  // =========================================================
  // TABLE OF CONTENTS
  // =========================================================

  tocItems = [
    {
      number: '01',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      number: '02',
      id: 'beginner-difficulty',
      label: 'Beginner Difficulty',
    },
    {
      number: '03',
      id: 'complete-beginner',
      label: 'Complete Beginner',
    },
    {
      number: '04',
      id: 'learning-time',
      label: 'Learning Time',
    },
    {
      number: '05',
      id: 'easier-to-learn',
      label: 'What Makes It Easier',
    },
    {
      number: '06',
      id: 'common-mistakes',
      label: 'Common Mistakes',
    },
    {
      number: '07',
      id: 'tally-vs-excel',
      label: 'Tally vs Excel',
    },
    {
      number: '08',
      id: 'who-should-learn',
      label: 'Who Should Learn',
    },
    {
      number: '09',
      id: 'learn-faster',
      label: 'How to Learn Faster',
    },
    {
      number: '10',
      id: 'final-thoughts',
      label: 'Final Thoughts',
    },
    {
      number: '11',
      id: 'faq',
      label: 'FAQs',
    },
  ];

  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
  ) {}

  // =========================================================
  // INIT
  // =========================================================

  ngOnInit(): void {
    this.setSeoMeta();

    this.addArticleSchema();

    this.addBreadcrumbSchema();

    this.addFaqSchema();
  }

  // =========================================================
  // SEO META
  // =========================================================

  private setSeoMeta(): void {
    // Title
    this.titleService.setTitle(this.pageTitle);

    // Description
    this.metaService.updateTag({
      name: 'description',
      content: this.metaDescription,
    });

    // Robots
    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });

    // Author
    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });

    // Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'TallyPrime easy to learn, learn TallyPrime for beginners, TallyPrime beginners, Tally course for beginners, Tally training Chennai, learn Tally, Tally accounting basics, TallyPrime course',
    });

    // =======================================================
    // OPEN GRAPH
    // =======================================================

    this.metaService.updateTag({
      property: 'og:type',
      content: 'article',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: this.pageTitle,
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: this.metaDescription,
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: this.pageUrl,
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: this.imageUrl,
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content: 'Is TallyPrime easy to learn for beginners?',
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    // =======================================================
    // ARTICLE META
    // =======================================================

    this.metaService.updateTag({
      property: 'article:section',
      content: 'Tally & Finance',
    });

    this.metaService.updateTag({
      property: 'article:published_time',
      content: '2026-08-25',
    });

    this.metaService.updateTag({
      property: 'article:modified_time',
      content: '2026-08-25',
    });

    // =======================================================
    // TWITTER / X
    // =======================================================

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: this.pageTitle,
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: this.metaDescription,
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: this.imageUrl,
    });

    // Canonical
    this.updateCanonical(this.canonicalUrl);
  }

  // =========================================================
  // CANONICAL URL
  // =========================================================

  private updateCanonical(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');

      canonical.setAttribute('rel', 'canonical');

      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }

  // =========================================================
  // ARTICLE SCHEMA
  // =========================================================

  private addArticleSchema(): void {
    this.removeSchema('is-tallyprime-easy-article-schema');

    const script = document.createElement('script');

    script.id = 'is-tallyprime-easy-article-schema';

    script.type = 'application/ld+json';

    const articleSchema = {
      '@context': 'https://schema.org',

      '@type': 'Article',

      headline: 'Is TallyPrime Easy to Learn for Beginners?',

      description: this.metaDescription,

      image: [this.imageUrl],

      datePublished: '2026-08-25',

      dateModified: '2026-08-25',

      author: {
        '@type': 'Organization',

        name: 'RLT Edzaro',

        url: 'https://www.rltedzaro.com',
      },

      publisher: {
        '@type': 'Organization',

        name: 'RLT Edzaro',

        logo: {
          '@type': 'ImageObject',

          url: 'https://www.rltedzaro.com/assets/images/logo.png',
        },
      },

      mainEntityOfPage: {
        '@type': 'WebPage',

        '@id': this.pageUrl,
      },

      articleSection: 'Tally & Finance',

      keywords: [
        'TallyPrime easy to learn',

        'TallyPrime for beginners',

        'learn TallyPrime',

        'Tally accounting basics',

        'Tally course for beginners',

        'Tally training Chennai',
      ],
    };

    script.textContent = JSON.stringify(articleSchema);

    document.head.appendChild(script);
  }

  // =========================================================
  // BREADCRUMB SCHEMA
  // =========================================================

  private addBreadcrumbSchema(): void {
    this.removeSchema('is-tallyprime-easy-breadcrumb-schema');

    const script = document.createElement('script');

    script.id = 'is-tallyprime-easy-breadcrumb-schema';

    script.type = 'application/ld+json';

    const breadcrumbSchema = {
      '@context': 'https://schema.org',

      '@type': 'BreadcrumbList',

      itemListElement: [
        {
          '@type': 'ListItem',

          position: 1,

          name: 'Home',

          item: 'https://www.rltedzaro.com/',
        },

        {
          '@type': 'ListItem',

          position: 2,

          name: 'Blog',

          item: 'https://www.rltedzaro.com/blogs',
        },

        {
          '@type': 'ListItem',

          position: 3,

          name: 'Is TallyPrime Easy to Learn for Beginners?',

          item: this.pageUrl,
        },
      ],
    };

    script.textContent = JSON.stringify(breadcrumbSchema);

    document.head.appendChild(script);
  }

  // =========================================================
  // FAQ SCHEMA
  // =========================================================

  private addFaqSchema(): void {
    this.removeSchema('is-tallyprime-easy-faq-schema');

    const script = document.createElement('script');

    script.id = 'is-tallyprime-easy-faq-schema';

    script.type = 'application/ld+json';

    const faqSchema = {
      '@context': 'https://schema.org',

      '@type': 'FAQPage',

      mainEntity: this.faqs.map((faq) => ({
        '@type': 'Question',

        name: faq.question,

        acceptedAnswer: {
          '@type': 'Answer',

          text: faq.answer,
        },
      })),
    };

    script.textContent = JSON.stringify(faqSchema);

    document.head.appendChild(script);
  }

  // =========================================================
  // REMOVE EXISTING SCHEMA
  // =========================================================

  private removeSchema(id: string): void {
    const existing = document.getElementById(id);

    if (existing) {
      existing.remove();
    }
  }

  // =========================================================
  // SIDEBAR SCROLL
  // =========================================================

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

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
  }

  // =========================================================
  // BACK TO BLOG
  // =========================================================

  goToBlogs(): void {
    this.router.navigate(['/blogs']);
  }
}
