import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-accountant-salary-in-india',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tally-accountant-salary-in-india.component.html',
  styleUrl: './tally-accountant-salary-in-india.component.css',
})
export class TallyAccountantSalaryInIndiaComponent implements OnInit {
  // =========================================================
  // SEO INFORMATION
  // =========================================================

  private readonly pageTitle =
    'Tally Accountant Salary in India: Fresher to Experienced | RLT Edzaro';

  private readonly metaDescription =
    'Learn about Tally accountant salaries in India, factors affecting pay, entry-level roles, skills required and how accounting professionals can grow.';

  private readonly canonicalUrl = 'https://www.rltedzaro.com/blog/tally-accountant-salary-in-india';

  private readonly pageUrl = 'https://www.rltedzaro.com/blog/tally-accountant-salary-in-india';

  private readonly imageUrl = 'https://www.rltedzaro.com/assets/blog/tally-accountant-salary.jpg';

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
  }

  // =========================================================
  // SEO META TAGS
  // =========================================================

  private setSeoMeta(): void {
    /*
     * TITLE
     */

    this.titleService.setTitle(this.pageTitle);

    /*
     * META DESCRIPTION
     */

    this.metaService.updateTag({
      name: 'description',
      content: this.metaDescription,
    });

    /*
     * ROBOTS
     */

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });

    /*
     * AUTHOR
     */

    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });

    /*
     * OPEN GRAPH
     */

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
      content: 'Tally Accountant Salary in India - Fresher to Experienced',
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    /*
     * ARTICLE INFORMATION
     */

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

    /*
     * TWITTER / X
     */

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

    /*
     * CANONICAL
     */

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
  // ARTICLE STRUCTURED DATA
  // =========================================================

  private addArticleSchema(): void {
    /*
     * Remove old schema if component
     * is loaded again.
     */

    const existing = document.getElementById('tally-accountant-article-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'tally-accountant-article-schema';

    script.type = 'application/ld+json';

    const articleSchema = {
      '@context': 'https://schema.org',

      '@type': 'Article',

      headline: 'Tally Accountant Salary in India: Fresher to Experienced',

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
        'Tally accountant salary in India',
        'Tally accountant salary',
        'Tally fresher salary',
        'Tally accountant jobs',
        'TallyPrime skills',
        'Tally training Chennai',
        'accounting career Chennai',
      ],
    };

    script.textContent = JSON.stringify(articleSchema);

    document.head.appendChild(script);
  }

  // =========================================================
  // BREADCRUMB STRUCTURED DATA
  // =========================================================

  private addBreadcrumbSchema(): void {
    /*
     * Remove previous schema
     */

    const existing = document.getElementById('tally-accountant-breadcrumb-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'tally-accountant-breadcrumb-schema';

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

          name: 'Tally Accountant Salary in India',

          item: this.pageUrl,
        },
      ],
    };

    script.textContent = JSON.stringify(breadcrumbSchema);

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
