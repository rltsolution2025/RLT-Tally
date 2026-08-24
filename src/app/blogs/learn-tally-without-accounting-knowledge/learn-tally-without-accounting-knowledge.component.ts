import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-learn-tally-without-accounting-knowledge',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './learn-tally-without-accounting-knowledge.component.html',
  styleUrl: './learn-tally-without-accounting-knowledge.component.css',
})
export class LearnTallyWithoutAccountingKnowledgeComponent implements OnInit {
  // =========================================================
  // SEO DETAILS
  // =========================================================

  private readonly pageTitle = 'Can You Learn Tally Without Knowing Accounting? | RLT Edzaro';

  private readonly metaDescription =
    'Can you learn Tally without accounting knowledge? Learn the accounting basics beginners need, whether a commerce degree is required and how to start TallyPrime training.';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/blog/learn-tally-without-accounting-knowledge';

  private readonly pageUrl =
    'https://www.rltedzaro.com/blog/learn-tally-without-accounting-knowledge';

  private readonly imageUrl = 'https://www.rltedzaro.com/assets/blog/student-learning-tally.png';

  private readonly publishedDate = '2026-08-22';

  private readonly modifiedDate = '2026-08-22';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
  ) {}

  // =========================================================
  // INITIALIZATION
  // =========================================================

  ngOnInit(): void {
    this.setSeoMeta();

    this.addWebPageSchema();

    this.addArticleSchema();

    this.addBreadcrumbSchema();

    this.addFaqSchema();

    this.addLocalBusinessSchema();
  }

  // =========================================================
  // SEO META
  // =========================================================

  private setSeoMeta(): void {
    // -------------------------------------------------------
    // TITLE
    // -------------------------------------------------------

    this.titleService.setTitle(this.pageTitle);

    // -------------------------------------------------------
    // DESCRIPTION
    // -------------------------------------------------------

    this.metaService.updateTag({
      name: 'description',
      content: this.metaDescription,
    });

    // -------------------------------------------------------
    // ROBOTS
    // -------------------------------------------------------

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });

    // -------------------------------------------------------
    // AUTHOR
    // -------------------------------------------------------

    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });

    // -------------------------------------------------------
    // KEYWORDS
    // -------------------------------------------------------

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'learn Tally without accounting knowledge, can I learn Tally without accounting, TallyPrime for beginners, Tally without B.Com, Tally for non commerce students, Tally course after 12th, Tally training Chennai, learn TallyPrime Chennai, accounting basics for Tally',
    });

    // -------------------------------------------------------
    // CANONICAL
    // -------------------------------------------------------

    this.updateCanonical(this.canonicalUrl);

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
      content: 'Student learning TallyPrime and accounting fundamentals',
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    this.metaService.updateTag({
      property: 'og:locale',
      content: 'en_IN',
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
      content: this.publishedDate,
    });

    this.metaService.updateTag({
      property: 'article:modified_time',
      content: this.modifiedDate,
    });

    this.metaService.updateTag({
      property: 'article:author',
      content: 'RLT Edzaro',
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

    this.metaService.updateTag({
      name: 'twitter:image:alt',
      content: 'Can you learn Tally without accounting knowledge?',
    });
  }

  // =========================================================
  // CANONICAL
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
  // WEBPAGE SCHEMA
  // =========================================================

  private addWebPageSchema(): void {
    this.removeSchema('tally-beginner-webpage-schema');

    const script = document.createElement('script');

    script.id = 'tally-beginner-webpage-schema';

    script.type = 'application/ld+json';

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',

      '@type': 'WebPage',

      '@id': `${this.pageUrl}#webpage`,

      url: this.pageUrl,

      name: this.pageTitle,

      description: this.metaDescription,

      inLanguage: 'en-IN',

      isPartOf: {
        '@type': 'WebSite',

        name: 'RLT Edzaro',

        url: 'https://www.rltedzaro.com/',
      },

      about: {
        '@type': 'Thing',

        name: 'Learning TallyPrime without accounting knowledge',
      },
    });

    document.head.appendChild(script);
  }

  // =========================================================
  // ARTICLE SCHEMA
  // =========================================================

  private addArticleSchema(): void {
    this.removeSchema('tally-beginner-article-schema');

    const script = document.createElement('script');

    script.id = 'tally-beginner-article-schema';

    script.type = 'application/ld+json';

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',

      '@type': 'Article',

      '@id': `${this.pageUrl}#article`,

      headline: 'Can You Learn Tally Without Knowing Accounting?',

      description: this.metaDescription,

      image: [this.imageUrl],

      url: this.pageUrl,

      datePublished: this.publishedDate,

      dateModified: this.modifiedDate,

      inLanguage: 'en-IN',

      articleSection: 'Tally & Finance',

      keywords: [
        'learn Tally without accounting knowledge',

        'TallyPrime for beginners',

        'Tally without B.Com',

        'Tally for non commerce students',

        'Tally course after 12th',

        'accounting basics for Tally',

        'Tally training Chennai',
      ],

      author: {
        '@type': 'Organization',

        name: 'RLT Edzaro',

        url: 'https://www.rltedzaro.com/',
      },

      publisher: {
        '@type': 'Organization',

        name: 'RLT Edzaro',

        url: 'https://www.rltedzaro.com/',

        logo: {
          '@type': 'ImageObject',

          url: 'https://www.rltedzaro.com/assets/images/logo.png',
        },
      },

      mainEntityOfPage: {
        '@type': 'WebPage',

        '@id': this.pageUrl,
      },
    });

    document.head.appendChild(script);
  }

  // =========================================================
  // BREADCRUMB SCHEMA
  // =========================================================

  private addBreadcrumbSchema(): void {
    this.removeSchema('tally-beginner-breadcrumb-schema');

    const script = document.createElement('script');

    script.id = 'tally-beginner-breadcrumb-schema';

    script.type = 'application/ld+json';

    script.textContent = JSON.stringify({
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

          name: 'Can You Learn Tally Without Knowing Accounting?',

          item: this.pageUrl,
        },
      ],
    });

    document.head.appendChild(script);
  }

  // =========================================================
  // FAQ SCHEMA
  // =========================================================

  private addFaqSchema(): void {
    this.removeSchema('tally-beginner-faq-schema');

    const script = document.createElement('script');

    script.id = 'tally-beginner-faq-schema';

    script.type = 'application/ld+json';

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',

      '@type': 'FAQPage',

      mainEntity: [
        {
          '@type': 'Question',

          name: 'Can I learn Tally without B.Com?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. A B.Com degree is not mandatory for learning TallyPrime.',
          },
        },

        {
          '@type': 'Question',

          name: 'Can 12th students learn Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. Students who have completed Class 12 can consider Tally training as a practical skill.',
          },
        },

        {
          '@type': 'Question',

          name: 'Can engineering students learn Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. Engineering students can learn TallyPrime, although they may need additional time to understand accounting fundamentals.',
          },
        },

        {
          '@type': 'Question',

          name: 'Is accounting knowledge necessary for Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Basic accounting knowledge is highly useful, particularly for professional accounting work.',
          },
        },

        {
          '@type': 'Question',

          name: 'Can Tally alone make me an accountant?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'No. Accounting is a broader profession involving knowledge, qualifications, practical experience and professional responsibilities.',
          },
        },
      ],
    });

    document.head.appendChild(script);
  }

  // =========================================================
  // LOCAL BUSINESS / LOCAL SEO SCHEMA
  // =========================================================

  private addLocalBusinessSchema(): void {
    this.removeSchema('rlt-edzaro-local-schema');

    const script = document.createElement('script');

    script.id = 'rlt-edzaro-local-schema';

    script.type = 'application/ld+json';

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',

      '@type': 'EducationalOrganization',

      '@id': 'https://www.rltedzaro.com/#organization',

      name: 'RLT Edzaro',

      url: 'https://www.rltedzaro.com/',

      logo: 'https://www.rltedzaro.com/assets/images/logo.png',

      description:
        'RLT Edzaro provides practical training programs including TallyPrime and accounting skills for learners and job seekers in Chennai.',

      areaServed: {
        '@type': 'City',

        name: 'Chennai',
      },

      address: {
        '@type': 'PostalAddress',

        addressLocality: 'Chennai',

        addressRegion: 'Tamil Nadu',

        addressCountry: 'IN',
      },

      knowsAbout: ['TallyPrime', 'Accounting', 'GST', 'Excel', 'Payroll', 'Financial Reporting'],
    });

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
