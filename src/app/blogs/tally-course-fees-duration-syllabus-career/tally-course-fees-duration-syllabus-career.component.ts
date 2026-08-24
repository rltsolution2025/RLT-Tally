import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-course-fees-duration-syllabus-career',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tally-course-fees-duration-syllabus-career.component.html',
  styleUrl: './tally-course-fees-duration-syllabus-career.component.css',
})
export class TallyCourseFeesDurationSyllabusCareerComponent implements OnInit {
  // =========================================================
  // SEO DETAILS
  // =========================================================

  private readonly pageTitle =
    'Tally Course: Fees, Duration, Syllabus & Career Opportunities | RLT Edzaro';

  private readonly metaDescription =
    'Explore Tally course fees, duration, syllabus, eligibility, practical training and career opportunities. Learn what to check before joining a Tally course.';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/tally-course-fees-duration-syllabus-career';

  private readonly pageUrl = 'https://www.rltedzaro.com/tally-course-fees-duration-syllabus-career';

  private readonly imageUrl = 'https://www.rltedzaro.com/assets/blog/tally-course-guide.jpg';

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

    this.addArticleSchema();

    this.addBreadcrumbSchema();

    this.addFaqSchema();
  }

  // =========================================================
  // SEO META
  // =========================================================

  private setSeoMeta(): void {
    // Page Title

    this.titleService.setTitle(this.pageTitle);

    // Meta Description

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
        'Tally course, Tally course fees, Tally course duration, Tally course syllabus, TallyPrime course, Tally training Chennai, Tally career opportunities, Tally certification, Tally course after 12th',
    });

    // Canonical

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
      content: 'Tally course fees, duration, syllabus and career opportunities',
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    // Article Section

    this.metaService.updateTag({
      property: 'article:section',
      content: 'Tally & Finance',
    });

    // Published Date

    this.metaService.updateTag({
      property: 'article:published_time',
      content: '2026-08-22',
    });

    // Modified Date

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

    this.metaService.updateTag({
      name: 'twitter:image:alt',
      content: 'Tally course fees, duration, syllabus and career opportunities',
    });
  }

  // =========================================================
  // CANONICAL
  // =========================================================

  private updateCanonical(url: string): void {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link');

      link.setAttribute('rel', 'canonical');

      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  // =========================================================
  // ARTICLE SCHEMA
  // =========================================================

  private addArticleSchema(): void {
    const existing = document.getElementById('tally-course-article-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'tally-course-article-schema';

    script.type = 'application/ld+json';

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',

      '@type': 'Article',

      headline: 'Tally Course: Fees, Duration, Syllabus & Career Opportunities',

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
        'Tally course',
        'Tally course fees',
        'Tally course duration',
        'Tally course syllabus',
        'TallyPrime course',
        'Tally training Chennai',
        'Tally career opportunities',
        'Tally certification',
        'Tally course after 12th',
      ],
    });

    document.head.appendChild(script);
  }

  // =========================================================
  // BREADCRUMB SCHEMA
  // =========================================================

  private addBreadcrumbSchema(): void {
    const existing = document.getElementById('tally-course-breadcrumb-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'tally-course-breadcrumb-schema';

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

          name: 'Tally Course: Fees, Duration, Syllabus & Career Opportunities',

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
    const existing = document.getElementById('tally-course-faq-schema');

    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');

    script.id = 'tally-course-faq-schema';

    script.type = 'application/ld+json';

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',

      '@type': 'FAQPage',

      mainEntity: [
        {
          '@type': 'Question',

          name: 'What is the fee for a Tally course?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Fees vary by institute, duration and syllabus. Always check the current fee directly with the training provider.',
          },
        },

        {
          '@type': 'Question',

          name: 'How long is a Tally course?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Duration varies from short-term introductory courses to comprehensive programs.',
          },
        },

        {
          '@type': 'Question',

          name: 'Is Tally useful after 12th?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Yes. It can be a useful practical skill for students interested in accounts and office-related careers.',
          },
        },

        {
          '@type': 'Question',

          name: 'Does Tally include GST?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Many comprehensive Tally courses include GST-related training, but students should verify the syllabus before enrolling.',
          },
        },

        {
          '@type': 'Question',

          name: 'Is Tally good for a career?',

          acceptedAnswer: {
            '@type': 'Answer',

            text: 'Tally can be useful as a professional skill, particularly when combined with accounting, Excel and practical experience.',
          },
        },
      ],
    });

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
