import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs-after-learning-tally',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './jobs-after-learning-tally.component.html',
  styleUrl: './jobs-after-learning-tally.component.css',
})
export class JobsAfterLearningTallyComponent implements OnInit {
  // =========================================================
  // SEO
  // =========================================================

  private readonly pageTitle =
    'What Jobs Can You Get After Learning Tally? Career Guide | RLT Edzaro';

  private readonly metaDescription =
    'Explore jobs after learning TallyPrime, including accountant, accounts assistant, billing executive, GST and payroll roles, plus required skills.';

  private readonly canonicalUrl = 'https://www.rltedzaro.com/blog/jobs-after-learning-tally';

  private readonly pageUrl = 'https://www.rltedzaro.com/blog/jobs-after-learning-tally';

  private readonly imageUrl =
    'https://www.rltedzaro.com/assets/blogs/jobs-after-learning-tally.png';

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
        'jobs after learning Tally, Tally jobs, TallyPrime jobs, Tally accountant jobs, accounts assistant jobs, billing executive jobs, GST jobs, payroll jobs, Tally jobs in Chennai',
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
      content: 'Jobs and career opportunities after learning TallyPrime',
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
      content: '2026-08-20',
    });

    this.metaService.updateTag({
      property: 'article:modified_time',
      content: '2026-08-20',
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

    // =======================================================
    // CANONICAL
    // =======================================================

    this.updateCanonical(this.canonicalUrl);
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
  // ARTICLE SCHEMA
  // =========================================================

  private addArticleSchema(): void {
    const existing = document.getElementById('jobs-after-tally-article-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'jobs-after-tally-article-schema';

    script.type = 'application/ld+json';

    const articleSchema = {
      '@context': 'https://schema.org',

      '@type': 'Article',

      headline: 'What Jobs Can You Get After Learning Tally?',

      description: this.metaDescription,

      image: [this.imageUrl],

      datePublished: '2026-08-20',

      dateModified: '2026-08-20',

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
        'jobs after learning Tally',
        'TallyPrime jobs',
        'Tally accountant jobs',
        'accounts assistant',
        'junior accountant',
        'billing executive',
        'GST executive',
        'payroll assistant',
        'Tally jobs in Chennai',
      ],
    };

    script.textContent = JSON.stringify(articleSchema);

    document.head.appendChild(script);
  }

  // =========================================================
  // BREADCRUMB SCHEMA
  // =========================================================

  private addBreadcrumbSchema(): void {
    const existing = document.getElementById('jobs-after-tally-breadcrumb-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'jobs-after-tally-breadcrumb-schema';

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

          name: 'What Jobs Can You Get After Learning Tally?',

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
    const existing = document.getElementById('jobs-after-tally-faq-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'jobs-after-tally-faq-schema';

    script.type = 'application/ld+json';

    const faqSchema = {
      '@context': 'https://schema.org',

      '@type': 'FAQPage',

      mainEntity: [
        {
          '@type': 'Question',

          name: 'What jobs can I get after learning Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Possible roles include accounts assistant, junior accountant, billing executive, accounts executive, payroll assistant and GST-related support roles.',
          },
        },

        {
          '@type': 'Question',

          name: 'Is Tally good for freshers?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Tally can be useful as an entry-level professional skill.',
          },
        },

        {
          '@type': 'Question',

          name: 'Can I get an accountant job after Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Some employers may consider Tally-skilled candidates for entry-level accounting positions, depending on qualification and job requirements.',
          },
        },

        {
          '@type': 'Question',

          name: 'Is Excel necessary with Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Excel is highly useful for many accounting and office roles.',
          },
        },
      ],
    };

    script.textContent = JSON.stringify(faqSchema);

    document.head.appendChild(script);
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
