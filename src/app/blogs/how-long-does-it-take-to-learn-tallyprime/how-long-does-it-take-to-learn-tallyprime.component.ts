import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-long-does-it-take-to-learn-tallyprime',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './how-long-does-it-take-to-learn-tallyprime.component.html',
  styleUrl: './how-long-does-it-take-to-learn-tallyprime.component.css',
})
export class HowLongDoesItTakeToLearnTallyprimeComponent implements OnInit {

  // =========================================================
  // SEO DETAILS
  // =========================================================

  private readonly pageTitle =
    'How Long Does It Take to Learn TallyPrime? Timeline & Guide | RLT Edzaro';

  private readonly metaDescription =
    'Find out how long it takes to learn TallyPrime, from basic accounting and voucher entry to GST, inventory, payroll and practical accounting skills.';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/blog/how-long-does-it-take-to-learn-tallyprime';

  private readonly pageUrl =
    'https://www.rltedzaro.com/blog/how-long-does-it-take-to-learn-tallyprime';

  private readonly imageUrl =
    'https://www.rltedzaro.com/assets/blogs/how-long-does-it-take-to-learn-tallyprime.png';


  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
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

    this.titleService.setTitle(
      this.pageTitle
    );


    this.metaService.updateTag({
      name: 'description',
      content: this.metaDescription
    });


    this.metaService.updateTag({
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    });


    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro'
    });


    this.metaService.updateTag({
      name: 'keywords',
      content:
        'how long does it take to learn TallyPrime, learn TallyPrime, Tally course duration, Tally learning timeline, learn Tally in 15 days, learn Tally in 30 days, Tally training Chennai, TallyPrime course Chennai'
    });


    // =======================================================
    // OPEN GRAPH
    // =======================================================

    this.metaService.updateTag({
      property: 'og:type',
      content: 'article'
    });


    this.metaService.updateTag({
      property: 'og:title',
      content: this.pageTitle
    });


    this.metaService.updateTag({
      property: 'og:description',
      content: this.metaDescription
    });


    this.metaService.updateTag({
      property: 'og:url',
      content: this.pageUrl
    });


    this.metaService.updateTag({
      property: 'og:image',
      content: this.imageUrl
    });


    this.metaService.updateTag({
      property: 'og:image:alt',
      content:
        'How long does it take to learn TallyPrime - learning timeline and roadmap'
    });


    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro'
    });


    // =======================================================
    // ARTICLE META
    // =======================================================

    this.metaService.updateTag({
      property: 'article:section',
      content: 'Tally & Finance'
    });


    this.metaService.updateTag({
      property: 'article:published_time',
      content: '2026-08-24'
    });


    this.metaService.updateTag({
      property: 'article:modified_time',
      content: '2026-08-24'
    });


    // =======================================================
    // TWITTER / X
    // =======================================================

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });


    this.metaService.updateTag({
      name: 'twitter:title',
      content: this.pageTitle
    });


    this.metaService.updateTag({
      name: 'twitter:description',
      content: this.metaDescription
    });


    this.metaService.updateTag({
      name: 'twitter:image',
      content: this.imageUrl
    });


    // =======================================================
    // CANONICAL
    // =======================================================

    this.updateCanonical(
      this.canonicalUrl
    );

  }


  // =========================================================
  // CANONICAL
  // =========================================================

  private updateCanonical(url: string): void {

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;


    if (!canonical) {

      canonical =
        document.createElement('link');

      canonical.setAttribute(
        'rel',
        'canonical'
      );

      document.head.appendChild(
        canonical
      );

    }


    canonical.setAttribute(
      'href',
      url
    );

  }


  // =========================================================
  // ARTICLE SCHEMA
  // =========================================================

  private addArticleSchema(): void {

    const existing =
      document.getElementById(
        'how-long-tally-article-schema'
      );


    if (existing) {
      existing.remove();
    }


    const script =
      document.createElement('script');


    script.id =
      'how-long-tally-article-schema';


    script.type =
      'application/ld+json';


    const articleSchema = {

      '@context':
        'https://schema.org',

      '@type':
        'Article',

      headline:
        'How Long Does It Take to Learn TallyPrime?',

      description:
        this.metaDescription,

      image: [
        this.imageUrl
      ],

      datePublished:
        '2026-08-24',

      dateModified:
        '2026-08-24',

      author: {

        '@type':
          'Organization',

        name:
          'RLT Edzaro',

        url:
          'https://www.rltedzaro.com'

      },

      publisher: {

        '@type':
          'Organization',

        name:
          'RLT Edzaro',

        logo: {

          '@type':
            'ImageObject',

          url:
            'https://www.rltedzaro.com/assets/images/logo.png'

        }

      },

      mainEntityOfPage: {

        '@type':
          'WebPage',

        '@id':
          this.pageUrl

      },

      articleSection:
        'Tally & Finance',

      keywords: [
        'How long does it take to learn TallyPrime',
        'learn TallyPrime',
        'Tally course duration',
        'Tally learning timeline',
        'learn Tally in 15 days',
        'learn Tally in 30 days',
        'Tally training Chennai',
        'TallyPrime course Chennai'
      ]

    };


    script.textContent =
      JSON.stringify(articleSchema);


    document.head.appendChild(
      script
    );

  }


  // =========================================================
  // BREADCRUMB SCHEMA
  // =========================================================

  private addBreadcrumbSchema(): void {

    const existing =
      document.getElementById(
        'how-long-tally-breadcrumb-schema'
      );


    if (existing) {
      existing.remove();
    }


    const script =
      document.createElement('script');


    script.id =
      'how-long-tally-breadcrumb-schema';


    script.type =
      'application/ld+json';


    const breadcrumbSchema = {

      '@context':
        'https://schema.org',

      '@type':
        'BreadcrumbList',

      itemListElement: [

        {

          '@type':
            'ListItem',

          position:
            1,

          name:
            'Home',

          item:
            'https://www.rltedzaro.com/'

        },

        {

          '@type':
            'ListItem',

          position:
            2,

          name:
            'Blog',

          item:
            'https://www.rltedzaro.com/blogs'

        },

        {

          '@type':
            'ListItem',

          position:
            3,

          name:
            'How Long Does It Take to Learn TallyPrime?',

          item:
            this.pageUrl

        }

      ]

    };


    script.textContent =
      JSON.stringify(
        breadcrumbSchema
      );


    document.head.appendChild(
      script
    );

  }


  // =========================================================
  // FAQ SCHEMA
  // =========================================================

  private addFaqSchema(): void {

    const existing =
      document.getElementById(
        'how-long-tally-faq-schema'
      );


    if (existing) {
      existing.remove();
    }


    const script =
      document.createElement('script');


    script.id =
      'how-long-tally-faq-schema';


    script.type =
      'application/ld+json';


    const faqSchema = {

      '@context':
        'https://schema.org',

      '@type':
        'FAQPage',

      mainEntity: [

        {

          '@type':
            'Question',

          name:
            'Can I learn Tally in 15 days?',

          acceptedAnswer: {

            '@type':
              'Answer',

            text:
              'You may learn basic TallyPrime concepts within 15 days, especially if you already know accounting. However, practical proficiency requires continued practice.'

          }

        },

        {

          '@type':
            'Question',

          name:
            'Can I learn Tally in 30 days?',

          acceptedAnswer: {

            '@type':
              'Answer',

            text:
              'A month can provide a useful TallyPrime foundation for many beginners, depending on the learning schedule, syllabus and amount of practice.'

          }

        },

        {

          '@type':
            'Question',

          name:
            'How long does advanced Tally training take?',

          acceptedAnswer: {

            '@type':
              'Answer',

            text:
              'Advanced training generally requires more time because it can cover GST, inventory, payroll, reporting and practical business scenarios.'

          }

        },

        {

          '@type':
            'Question',

          name:
            'Is Tally enough to get a job?',

          acceptedAnswer: {

            '@type':
              'Answer',

            text:
              'TallyPrime can be a useful professional skill, but employers may also look for accounting knowledge, education, communication skills and practical experience.'

          }

        }

      ]

    };


    script.textContent =
      JSON.stringify(
        faqSchema
      );


    document.head.appendChild(
      script
    );

  }


  // =========================================================
  // SIDEBAR SCROLL
  // =========================================================

  scrollToSection(
    sectionId: string
  ): void {

    const element =
      document.getElementById(
        sectionId
      );


    if (!element) {
      return;
    }


    const headerOffset =
      100;


    const elementPosition =
      element.getBoundingClientRect().top;


    const offsetPosition =
      elementPosition +
      window.pageYOffset -
      headerOffset;


    window.scrollTo({

      top:
        offsetPosition,

      behavior:
        'smooth'

    });

  }


  // =========================================================
  // BACK TO BLOG
  // =========================================================

  goToBlogs(): void {

    this.router.navigate([
      '/blogs'
    ]);

  }

}