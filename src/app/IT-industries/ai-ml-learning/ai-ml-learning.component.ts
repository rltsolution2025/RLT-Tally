import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { EnrollComponent } from '../../component/enroll/enroll.component';

interface Testimonial {
  initials: string;
  name: string;
  course: string;
  review: string;
  date: string;
}

@Component({
  selector: 'app-ai-ml-learning',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './ai-ml-learning.component.html',
  styleUrl: './ai-ml-learning.component.css',
})
export class AIMLLearningComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) { }

  /* =========================================================
     SEO
     ========================================================= */

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/artificial-intelligence-machine-learning-course';

  private readonly pageTitle =
    'AI & Machine Learning Course in Chennai | RLT Edzaro';

  private readonly pageDescription =
    'Join the Artificial Intelligence & Machine Learning Course in Chennai at RLT Edzaro. Learn Python, Data Science, Machine Learning, Deep Learning, Generative AI, LLMs, NLP, Computer Vision and MLOps through practical training and projects.';

  private readonly pageKeywords =
    'Artificial Intelligence Course in Chennai, Machine Learning Course in Chennai, AI ML Course in Chennai, AI Training in Chennai, Machine Learning Training in Chennai, Artificial Intelligence Training, Generative AI Course, Data Science Course, Deep Learning Course, NLP Course, Computer Vision Course, MLOps Course, Python AI Course, LLM Course, AI Engineer Course, Machine Learning Engineer Course, Software and IT Training in Chennai, RLT Edzaro';

  ngOnInit(): void {
    this.setSeo();
  }

  private setSeo(): void {
    /* ---------- Title ---------- */

    this.titleService.setTitle(this.pageTitle);

    /* ---------- Meta Description ---------- */

    this.setMetaTag(
      'name',
      'description',
      this.pageDescription
    );

    /* ---------- Keywords ---------- */

    this.setMetaTag(
      'name',
      'keywords',
      this.pageKeywords
    );

    /* ---------- Robots ---------- */

    this.setMetaTag(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    /* ---------- Googlebot ---------- */

    this.setMetaTag(
      'name',
      'googlebot',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    /* ---------- Author ---------- */

    this.setMetaTag(
      'name',
      'author',
      'RLT Edzaro'
    );

    /* ---------- Language ---------- */

    this.setMetaTag(
      'http-equiv',
      'content-language',
      'en-IN'
    );

    /* =========================================================
       OPEN GRAPH
       ========================================================= */

    this.setMetaTag(
      'property',
      'og:type',
      'website'
    );

    this.setMetaTag(
      'property',
      'og:title',
      this.pageTitle
    );

    this.setMetaTag(
      'property',
      'og:description',
      this.pageDescription
    );

    this.setMetaTag(
      'property',
      'og:url',
      this.canonicalUrl
    );

    this.setMetaTag(
      'property',
      'og:site_name',
      'RLT Edzaro'
    );

    this.setMetaTag(
      'property',
      'og:locale',
      'en_IN'
    );

    this.setMetaTag(
      'property',
      'og:image',
      'https://www.rltedzaro.com/assets/IT%20Course/AI%20Course.jpeg'
    );

    this.setMetaTag(
      'property',
      'og:image:alt',
      'Artificial Intelligence and Machine Learning Course in Chennai'
    );

    /* =========================================================
       TWITTER / X
       ========================================================= */

    this.setMetaTag(
      'name',
      'twitter:card',
      'summary_large_image'
    );

    this.setMetaTag(
      'name',
      'twitter:title',
      this.pageTitle
    );

    this.setMetaTag(
      'name',
      'twitter:description',
      this.pageDescription
    );

    this.setMetaTag(
      'name',
      'twitter:image',
      'https://www.rltedzaro.com/assets/IT%20Course/AI%20Course.jpeg'
    );

    /* =========================================================
       GEO / LOCAL SEO
       ========================================================= */

    this.setMetaTag(
      'name',
      'geo.region',
      'IN-TN'
    );

    this.setMetaTag(
      'name',
      'geo.placename',
      'Chennai'
    );

    /* =========================================================
       CANONICAL
       ========================================================= */

    this.createCanonical();

    /* =========================================================
       STRUCTURED DATA
       ========================================================= */

    this.addSchema();
  }

  private setMetaTag(
    selectorType: 'name' | 'property' | 'http-equiv',
    selectorValue: string,
    content: string
  ): void {
    this.metaService.updateTag(
      {
        [selectorType]: selectorValue,
        content,
      },
      `${selectorType}="${selectorValue}"`
    );
  }

  private createCanonical(): void {
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');

      canonical.setAttribute('rel', 'canonical');

      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      'href',
      this.canonicalUrl
    );

    canonical.setAttribute(
      'data-rlt-page-canonical',
      'true'
    );
  }

  private addSchema(): void {
    this.removeSchema();

    const schema = {
      '@context': 'https://schema.org',

      '@graph': [
        {
          '@type': 'Course',

          '@id': `${this.canonicalUrl}#course`,

          name: 'Artificial Intelligence & Machine Learning Course',

          description:
            'Industry-focused Artificial Intelligence and Machine Learning training covering Python, Data Science, Machine Learning, Deep Learning, Generative AI, Large Language Models, Computer Vision, NLP, MLOps and AI Engineering.',

          url: this.canonicalUrl,

          image:
            'https://www.rltedzaro.com/assets/IT%20Course/AI%20Course.jpeg',

          provider: {
            '@type': 'EducationalOrganization',

            name: 'RLT Edzaro',

            url: 'https://www.rltedzaro.com/',

            address: {
              '@type': 'PostalAddress',

              addressLocality: 'Chennai',

              addressRegion: 'Tamil Nadu',

              addressCountry: 'IN',
            },
          },

          educationalLevel:
            'Beginner to Advanced',

          teaches: [
            'Python Programming',
            'Data Science',
            'Machine Learning',
            'Predictive Analytics',
            'Deep Learning',
            'Computer Vision',
            'Natural Language Processing',
            'Generative AI',
            'Large Language Models',
            'Prompt Engineering',
            'Retrieval-Augmented Generation',
            'AI Agents',
            'MLOps',
            'AI Engineering',
          ],

          inLanguage: 'en-IN',

          areaServed: {
            '@type': 'City',
            name: 'Chennai',
          },
        },

        {
          '@type': 'EducationalOrganization',

          '@id':
            'https://www.rltedzaro.com/#organization',

          name: 'RLT Edzaro',

          alternateName:
            'RLT Academy of Excellence',

          url: 'https://www.rltedzaro.com/',

          description:
            'RLT Edzaro provides Software, IT, Tally and Accounting training with practical and industry-focused learning.',

          areaServed: {
            '@type': 'City',
            name: 'Chennai',
          },
        },

        {
          '@type': 'WebPage',

          '@id': `${this.canonicalUrl}#webpage`,

          url: this.canonicalUrl,

          name: this.pageTitle,

          description: this.pageDescription,

          isPartOf: {
            '@id':
              'https://www.rltedzaro.com/#website',
          },

          about: {
            '@id': `${this.canonicalUrl}#course`,
          },

          inLanguage: 'en-IN',
        },

        {
          '@type': 'WebSite',

          '@id':
            'https://www.rltedzaro.com/#website',

          url: 'https://www.rltedzaro.com/',

          name: 'RLT Edzaro',

          publisher: {
            '@id':
              'https://www.rltedzaro.com/#organization',
          },

          inLanguage: 'en-IN',
        },

        {
          '@type': 'BreadcrumbList',

          '@id': `${this.canonicalUrl}#breadcrumb`,

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

              name: 'Software & IT Training',

              item: 'https://www.rltedzaro.com/',
            },

            {
              '@type': 'ListItem',

              position: 3,

              name: 'Artificial Intelligence & Machine Learning Course',

              item: this.canonicalUrl,
            },
          ],
        },

        {
          '@type': 'FAQPage',

          '@id': `${this.canonicalUrl}#faq`,

          mainEntity: [
            {
              '@type': 'Question',

              name:
                'What does the Artificial Intelligence and Machine Learning Course cover?',

              acceptedAnswer: {
                '@type': 'Answer',

                text:
                  'The course covers Python programming, Data Science, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Generative AI, Large Language Models and MLOps.',
              },
            },

            {
              '@type': 'Question',

              name:
                'Does the AI and Machine Learning course include Python?',

              acceptedAnswer: {
                '@type': 'Answer',

                text:
                  'Yes. Python programming is covered as a foundational part of the Artificial Intelligence and Machine Learning program.',
              },
            },

            {
              '@type': 'Question',

              name:
                'Does the course include Generative AI and LLMs?',

              acceptedAnswer: {
                '@type': 'Answer',

                text:
                  'Yes. The curriculum includes Generative AI, Large Language Models, Prompt Engineering, Retrieval-Augmented Generation and AI application development.',
              },
            },

            {
              '@type': 'Question',

              name:
                'Does the course include practical projects?',

              acceptedAnswer: {
                '@type': 'Answer',

                text:
                  'Yes. The program includes coding exercises, practical assignments, real-world case studies and project-based learning.',
              },
            },

            {
              '@type': 'Question',

              name:
                'Is MLOps included in the Artificial Intelligence course?',

              acceptedAnswer: {
                '@type': 'Answer',

                text:
                  'Yes. The curriculum includes MLOps, model deployment, API development, Docker, Kubernetes, CI/CD, model monitoring and production management.',
              },
            },

            {
              '@type': 'Question',

              name:
                'Where is the Artificial Intelligence and Machine Learning Course offered?',

              acceptedAnswer: {
                '@type': 'Answer',

                text:
                  'RLT Edzaro offers the Artificial Intelligence and Machine Learning Course in Chennai.',
              },
            },
          ],
        },
      ],
    };

    const script =
      document.createElement('script');

    script.type =
      'application/ld+json';

    script.setAttribute(
      'data-rlt-ai-ml-schema',
      'true'
    );

    script.textContent =
      JSON.stringify(schema);

    document.head.appendChild(script);
  }

  private removeSchema(): void {
    const schemas = document.querySelectorAll(
      'script[data-rlt-ai-ml-schema="true"]'
    );

    schemas.forEach((schema) =>
      schema.remove()
    );
  }

  ngOnDestroy(): void {
    this.removeSchema();

    const canonical =
      document.querySelector(
        'link[data-rlt-page-canonical="true"]'
      );

    if (canonical) {
      canonical.remove();
    }
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  goThankYou(): void {
    this.router.navigate(['/thank-you']);
  }

  /* =========================================================
     CAREER COUNTERS
     ========================================================= */

  @ViewChild('careerStats')
  careerStats!: ElementRef;

  counters = [
    {
      target: 25,
      value: 0,
    },
    {
      target: 5000,
      value: 0,
    },
    {
      target: 2500,
      value: 0,
    },
    {
      target: 24,
      value: 0,
    },
  ];

  ngAfterViewInit(): void {
    if (!this.careerStats?.nativeElement) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startCounter();

              observer.disconnect();
            }
          });
        }
      );

    observer.observe(
      this.careerStats.nativeElement
    );
  }

  startCounter(): void {
    this.counters.forEach((counter) => {
      const speed = 25;

      const update = (): void => {
        if (counter.value < counter.target) {
          counter.value += Math.ceil(
            counter.target / speed
          );

          if (
            counter.value >
            counter.target
          ) {
            counter.value =
              counter.target;
          }

          requestAnimationFrame(update);
        }
      };

      update();
    });
  }

  /* =========================================================
     ENROLLMENT / SYLLABUS MODAL
     ========================================================= */

  modalTitle =
    'Enroll for the course';

  openEnrollModal(): void {
    this.modalTitle =
      'Enroll for the course';
  }

  openSyllabusModal(): void {
    this.modalTitle =
      'Download Course Syllabus';
  }

  /* =========================================================
     REVIEWS
     ========================================================= */

  overallRating = 4.9;

  totalReviews = 250;

  testimonials: Testimonial[] = [
    {
      initials: 'RK',
      name: 'Rakesh Kumar',
      course: 'AI & ML Student',
      review:
        'Excellent training with real-time projects. The trainers explained every AI concept clearly and provided outstanding placement support.',
      date: '2 weeks ago',
    },

    {
      initials: 'AP',
      name: 'Arun Prakash',
      course: 'Python & AI Student',
      review:
        'One of the best AI courses. Practical sessions, coding exercises, and live projects helped me gain confidence.',
      date: '1 month ago',
    },

    {
      initials: 'SK',
      name: 'Sanjay Kumar',
      course: 'Machine Learning Student',
      review:
        'Highly recommended for beginners. Every topic was taught with practical examples and hands-on coding.',
      date: '3 weeks ago',
    },

    {
      initials: 'VP',
      name: 'Vignesh Prabu',
      course: 'AI Engineer Student',
      review:
        'The certification and placement guidance helped me prepare confidently for interviews.',
      date: '5 days ago',
    },

    {
      initials: 'MJ',
      name: 'Meena Joseph',
      course: 'Generative AI Student',
      review:
        'Excellent explanation of ChatGPT, Prompt Engineering, AI Agents and LLMs. Worth every session.',
      date: '2 months ago',
    },

    {
      initials: 'KR',
      name: 'Karthik Raj',
      course: 'Data Science Student',
      review:
        'Very supportive trainers, structured curriculum and excellent learning environment.',
      date: '1 week ago',
    },
  ];
}