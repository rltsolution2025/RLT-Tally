import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-course-after-twelfth',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tally-course-after-twelfth.component.html',
  styleUrl: './tally-course-after-twelfth.component.css',
})
export class TallyCourseAfterTwelfthComponent implements OnInit {
  // =========================================================
  // SEO
  // =========================================================

  private readonly pageTitle =
    'Tally Course After 12th: Career Options, Jobs & Skills | RLT Edzaro';

  private readonly metaDescription =
    'Planning to learn Tally after 12th? Explore Tally course options, accounting skills, job roles, career pathways and tips for choosing training.';

  private readonly canonicalUrl = 'https://www.rltedzaro.com/blog/tally-course-after-12th';

  private readonly pageUrl = 'https://www.rltedzaro.com/blog/tally-course-after-12th';

  private readonly imageUrl = 'https://www.rltedzaro.com/assets/blogs/tally-course-after-12th.png';

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
    this.titleService.setTitle(this.pageTitle);

    this.metaService.updateTag({
      name: 'description',
      content: this.metaDescription,
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Tally course after 12th, Tally after 12th, TallyPrime course after 12th, Tally course for students, Tally course Chennai, Tally jobs after 12th, accounting course after 12th, Tally for commerce students, Tally for science students, Tally for arts students',
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
      content: 'Tally course after 12th career options and accounting skills',
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    // =======================================================
    // ARTICLE
    // =======================================================

    this.metaService.updateTag({
      property: 'article:section',
      content: 'Tally & Finance',
    });

    this.metaService.updateTag({
      property: 'article:published_time',
      content: '2026-08-22',
    });

    this.metaService.updateTag({
      property: 'article:modified_time',
      content: '2026-08-22',
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
    const existing = document.getElementById('tally-course-after-12th-article-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'tally-course-after-12th-article-schema';

    script.type = 'application/ld+json';

    const articleSchema = {
      '@context': 'https://schema.org',

      '@type': 'Article',

      headline: 'Tally Course After 12th: Career Options, Jobs & Skills',

      description: this.metaDescription,

      image: [this.imageUrl],

      datePublished: '2026-08-22',

      dateModified: '2026-08-22',

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
        'Tally course after 12th',

        'Tally after 12th',

        'TallyPrime course',

        'Tally course for students',

        'Tally jobs after 12th',

        'accounting course after 12th',

        'Tally course Chennai',

        'Tally for commerce students',

        'Tally for science students',

        'Tally for arts students',
      ],
    };

    script.textContent = JSON.stringify(articleSchema);

    document.head.appendChild(script);
  }

  // =========================================================
  // BREADCRUMB SCHEMA
  // =========================================================

  private addBreadcrumbSchema(): void {
    const existing = document.getElementById('tally-course-after-12th-breadcrumb-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'tally-course-after-12th-breadcrumb-schema';

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

          name: 'Tally Course After 12th',

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
    const existing = document.getElementById('tally-course-after-12th-faq-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'tally-course-after-12th-faq-schema';

    script.type = 'application/ld+json';

    const faqSchema = {
      '@context': 'https://schema.org',

      '@type': 'FAQPage',

      mainEntity: [
        {
          '@type': 'Question',

          name: 'Can I learn Tally after 12th?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. Students can begin learning TallyPrime after Class 12.',
          },
        },

        {
          '@type': 'Question',

          name: 'Is Tally suitable for commerce students?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. Commerce students can particularly benefit from connecting their accounting knowledge with practical software skills.',
          },
        },

        {
          '@type': 'Question',

          name: 'Can science students learn Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. Students from science and other streams can also learn Tally. They may need additional time to understand accounting fundamentals.',
          },
        },

        {
          '@type': 'Question',

          name: 'Can I get a job after learning Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Tally can support entry-level opportunities, but employment depends on your overall qualifications and skills.',
          },
        },

        {
          '@type': 'Question',

          name: 'Should I learn Excel with Tally?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. Both Tally and Excel can be useful in accounting and office roles.',
          },
        },
      ],
    };

    script.textContent = JSON.stringify(faqSchema);

    document.head.appendChild(script);
  }

  // =========================================================
  // SMOOTH SCROLL
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
