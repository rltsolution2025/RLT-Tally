import { CommonModule, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
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
  selector: 'app-datascience',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './datascience.component.html',
  styleUrl: './datascience.component.css',
})
export class DatascienceComponent
  implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  /* =========================================================
     SEO CONFIGURATION
     ========================================================= */

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/data-science-with-ai-course';

  private readonly pageTitle =
    'Data Science with AI Course in Chennai | RLT Edzaro';

  private readonly pageDescription =
    'Join the Data Science with AI Course in Chennai at RLT Edzaro. Learn Python, SQL, Statistics, Data Analysis, Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI and LLMs through practical training and projects.';

  private readonly pageKeywords =
    'Data Science Course in Chennai, Data Science with AI Course in Chennai, Data Science Training in Chennai, Artificial Intelligence Course in Chennai, AI Course in Chennai, Machine Learning Course in Chennai, Data Analytics Course in Chennai, Python Data Science Course, Deep Learning Course, Generative AI Course in Chennai, NLP Course, Computer Vision Course, Power BI Course, SQL Course in Chennai, Data Scientist Course, AI Engineer Course, Machine Learning Engineer Course, Software and IT Training in Chennai, RLT Edzaro';

  private readonly ogImage =
    'https://www.rltedzaro.com/assets/IT%20Course/Data%20Science%20Course.jpeg';

  private schemaElement?: HTMLScriptElement;

  /* =========================================================
     INITIALIZATION
     ========================================================= */

  ngOnInit(): void {
    this.setSeo();
  }

  /* =========================================================
     SEO
     ========================================================= */

  private setSeo(): void {
    /* ---------- PAGE TITLE ---------- */

    this.titleService.setTitle(
      this.pageTitle
    );

    /* ---------- PRIMARY META ---------- */

    this.updateMeta(
      'description',
      this.pageDescription
    );

    this.updateMeta(
      'keywords',
      this.pageKeywords
    );

    this.updateMeta(
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    this.updateMeta(
      'googlebot',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    this.updateMeta(
      'author',
      'RLT Edzaro'
    );

    this.updateMeta(
      'language',
      'English'
    );

    /* ---------- LOCAL SEO ---------- */

    this.updateMeta(
      'geo.region',
      'IN-TN'
    );

    this.updateMeta(
      'geo.placename',
      'Chennai'
    );

    this.metaService.updateTag(
      {
        'http-equiv': 'content-language',
        content: 'en-IN',
      },
      'http-equiv="content-language"'
    );

    /* =========================================================
       OPEN GRAPH
       ========================================================= */

    this.updateProperty(
      'og:type',
      'website'
    );

    this.updateProperty(
      'og:title',
      this.pageTitle
    );

    this.updateProperty(
      'og:description',
      this.pageDescription
    );

    this.updateProperty(
      'og:url',
      this.canonicalUrl
    );

    this.updateProperty(
      'og:site_name',
      'RLT Edzaro'
    );

    this.updateProperty(
      'og:locale',
      'en_IN'
    );

    this.updateProperty(
      'og:image',
      this.ogImage
    );

    this.updateProperty(
      'og:image:alt',
      'Data Science with AI Course in Chennai'
    );

    /* =========================================================
       TWITTER / X
       ========================================================= */

    this.updateMeta(
      'twitter:card',
      'summary_large_image'
    );

    this.updateMeta(
      'twitter:title',
      this.pageTitle
    );

    this.updateMeta(
      'twitter:description',
      this.pageDescription
    );

    this.updateMeta(
      'twitter:image',
      this.ogImage
    );

    /* =========================================================
       CANONICAL
       ========================================================= */

    this.setCanonical();

    /* =========================================================
       STRUCTURED DATA
       ========================================================= */

    this.addStructuredData();
  }

  private updateMeta(
    name: string,
    content: string
  ): void {
    this.metaService.updateTag(
      {
        name,
        content,
      },
      `name="${name}"`
    );
  }

  private updateProperty(
    property: string,
    content: string
  ): void {
    this.metaService.updateTag(
      {
        property,
        content,
      },
      `property="${property}"`
    );
  }

  /* =========================================================
     CANONICAL URL
     ========================================================= */

  private setCanonical(): void {
    let canonical =
      this.document.querySelector(
        'link[rel="canonical"][data-rlt-datascience="true"]'
      ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical =
        this.renderer.createElement(
          'link'
        );

      this.renderer.setAttribute(
        canonical,
        'rel',
        'canonical'
      );

      this.renderer.setAttribute(
        canonical,
        'data-rlt-datascience',
        'true'
      );

      this.renderer.appendChild(
        this.document.head,
        canonical
      );
    }

    this.renderer.setAttribute(
      canonical,
      'href',
      this.canonicalUrl
    );
  }

  /* =========================================================
     STRUCTURED DATA
     ========================================================= */

  private addStructuredData(): void {
    this.removeStructuredData();

    const schema = {
      '@context': 'https://schema.org',

      '@graph': [
        {
          '@type': 'Course',

          '@id': `${this.canonicalUrl}#course`,

          name:
            'Data Science with AI Course',

          description:
            'Industry-focused Data Science and Artificial Intelligence training covering Python, SQL, Statistics, Data Analysis, Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, Large Language Models, Power BI and AI applications.',

          url: this.canonicalUrl,

          image: this.ogImage,

          inLanguage: 'en-IN',

          educationalLevel:
            'Beginner to Advanced',

          provider: {
            '@type':
              'EducationalOrganization',

            name: 'RLT Edzaro',

            url:
              'https://www.rltedzaro.com/',

            areaServed: {
              '@type': 'City',
              name: 'Chennai',
            },

            address: {
              '@type':
                'PostalAddress',

              addressLocality:
                'Chennai',

              addressRegion:
                'Tamil Nadu',

              addressCountry: 'IN',
            },
          },

          teaches: [
            'Python Programming',
            'Python for Data Science',
            'SQL',
            'Statistics',
            'Probability',
            'Data Analysis',
            'Data Cleaning',
            'Exploratory Data Analysis',
            'Data Visualization',
            'Power BI',
            'Machine Learning',
            'Regression',
            'Classification',
            'Clustering',
            'Feature Engineering',
            'Model Evaluation',
            'Hyperparameter Tuning',
            'Scikit-learn',
            'Deep Learning',
            'Artificial Neural Networks',
            'TensorFlow',
            'Keras',
            'Computer Vision',
            'OpenCV',
            'Object Detection',
            'YOLO',
            'Face Recognition',
            'OCR',
            'Natural Language Processing',
            'NLP',
            'Transformers',
            'BERT',
            'Hugging Face',
            'Generative AI',
            'Large Language Models',
            'LLMs',
            'Prompt Engineering',
            'OpenAI API',
            'LangChain',
            'Retrieval-Augmented Generation',
            'RAG',
            'AI Applications',
          ],

          about: [
            {
              '@type': 'Thing',
              name:
                'Software & IT Training',
            },

            {
              '@type': 'Thing',
              name:
                'Data Science',
            },

            {
              '@type': 'Thing',
              name:
                'Artificial Intelligence',
            },

            {
              '@type': 'Thing',
              name:
                'Machine Learning',
            },

            {
              '@type': 'Thing',
              name:
                'Generative AI',
            },
          ],

          areaServed: {
            '@type': 'City',
            name: 'Chennai',
          },
        },

        /* =====================================================
           EDUCATIONAL ORGANIZATION
           ===================================================== */

        {
          '@type':
            'EducationalOrganization',

          '@id':
            'https://www.rltedzaro.com/#organization',

          name: 'RLT Edzaro',

          alternateName:
            'RLT Academy of Excellence',

          url:
            'https://www.rltedzaro.com/',

          description:
            'RLT Edzaro provides Software, IT, Tally and Accounting training with practical and industry-focused learning.',

          areaServed: {
            '@type': 'City',
            name: 'Chennai',
          },
        },

        /* =====================================================
           WEBSITE
           ===================================================== */

        {
          '@type': 'WebSite',

          '@id':
            'https://www.rltedzaro.com/#website',

          url:
            'https://www.rltedzaro.com/',

          name: 'RLT Edzaro',

          publisher: {
            '@id':
              'https://www.rltedzaro.com/#organization',
          },

          inLanguage: 'en-IN',
        },

        /* =====================================================
           WEB PAGE
           ===================================================== */

        {
          '@type': 'WebPage',

          '@id':
            `${this.canonicalUrl}#webpage`,

          url: this.canonicalUrl,

          name: this.pageTitle,

          description:
            this.pageDescription,

          isPartOf: {
            '@id':
              'https://www.rltedzaro.com/#website',
          },

          about: {
            '@id':
              `${this.canonicalUrl}#course`,
          },

          inLanguage: 'en-IN',
        },

        /* =====================================================
           BREADCRUMB
           ===================================================== */

        {
          '@type':
            'BreadcrumbList',

          '@id':
            `${this.canonicalUrl}#breadcrumb`,

          itemListElement: [
            {
              '@type':
                'ListItem',

              position: 1,

              name: 'Home',

              item:
                'https://www.rltedzaro.com/',
            },

            {
              '@type':
                'ListItem',

              position: 2,

              name:
                'Software & IT Training',

              item:
                'https://www.rltedzaro.com/',
            },

            {
              '@type':
                'ListItem',

              position: 3,

              name:
                'Data Science with AI Course',

              item:
                this.canonicalUrl,
            },
          ],
        },

        /* =====================================================
           FAQ STRUCTURED DATA
           ===================================================== */

        {
          '@type':
            'FAQPage',

          '@id':
            `${this.canonicalUrl}#faq`,

          mainEntity: [
            {
              '@type':
                'Question',

              name:
                'What does the Data Science with AI Course cover?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'The course covers Python, SQL, Statistics, Data Analysis, Data Visualization, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Generative AI, Large Language Models and related AI applications.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Does the Data Science course include Python?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. Python programming is a core part of the program and includes programming fundamentals, object-oriented programming, file handling, NumPy and practical Python projects.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Does the course include Machine Learning?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The curriculum includes regression, classification, clustering, feature engineering, model evaluation, hyperparameter tuning and Scikit-learn implementation.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Does the course include Generative AI and LLMs?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The program includes Generative AI, Large Language Models, Prompt Engineering, OpenAI API integration, LangChain and Retrieval-Augmented Generation.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Does the course include Data Visualization and Power BI?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The program covers data visualization and includes Power BI as part of the Data Science and analytics learning path.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Does the Data Science with AI Course include practical projects?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The program includes hands-on projects, real-world datasets, case studies, coding exercises, visualization dashboards and end-to-end projects.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Where is the Data Science with AI Course offered?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'RLT Edzaro offers the Data Science with AI Course in Chennai.',
              },
            },
          ],
        },
      ],
    };

    this.schemaElement =
      this.renderer.createElement(
        'script'
      );

    this.renderer.setAttribute(
      this.schemaElement,
      'type',
      'application/ld+json'
    );

    this.renderer.setAttribute(
      this.schemaElement,
      'data-rlt-datascience',
      'true'
    );

    this.renderer.setProperty(
      this.schemaElement,
      'textContent',
      JSON.stringify(schema)
    );

    this.renderer.appendChild(
      this.document.head,
      this.schemaElement
    );
  }

  private removeStructuredData(): void {
    const existing =
      this.document.querySelectorAll(
        'script[data-rlt-datascience="true"]'
      );

    existing.forEach((element) =>
      element.remove()
    );

    this.schemaElement =
      undefined;
  }

  /* =========================================================
     DESTROY
     ========================================================= */

  ngOnDestroy(): void {
    this.removeStructuredData();

    const canonical =
      this.document.querySelector(
        'link[rel="canonical"][data-rlt-datascience="true"]'
      );

    if (canonical) {
      canonical.remove();
    }
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  goThankYou(): void {
    this.router.navigate([
      '/thank-you',
    ]);
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
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                this.startCounter();

                observer.disconnect();
              }
            }
          );
        }
      );

    observer.observe(
      this.careerStats.nativeElement
    );
  }

  startCounter(): void {
    this.counters.forEach(
      (counter) => {
        const speed = 25;

        const update = (): void => {
          if (
            counter.value <
            counter.target
          ) {
            counter.value += Math.ceil(
              counter.target /
              speed
            );

            if (
              counter.value >
              counter.target
            ) {
              counter.value =
                counter.target;
            }

            requestAnimationFrame(
              update
            );
          }
        };

        update();
      }
    );
  }

  /* =========================================================
     ENROLLMENT / SYLLABUS
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
      initials: 'AR',
      name: 'Arun Raj',
      course:
        'Data Science with AI Student',
      review:
        'Excellent Data Science with AI training. The Python, Machine Learning, and Deep Learning sessions were practical and easy to understand. The live projects gave me real industry experience.',
      date: '2 weeks ago',
    },

    {
      initials: 'NK',
      name: 'Nithin Kumar',
      course:
        'Machine Learning Student',
      review:
        'One of the best Data Science institutes. The trainers explained Statistics, Python, SQL, and Machine Learning with real-world examples. Highly recommended.',
      date: '1 month ago',
    },

    {
      initials: 'PS',
      name: 'Priya Sharma',
      course:
        'Artificial Intelligence Student',
      review:
        'The Deep Learning, Computer Vision, and NLP modules were excellent. I built multiple AI applications that strengthened my technical skills and confidence.',
      date: '3 weeks ago',
    },

    {
      initials: 'VK',
      name: 'Vignesh Kumar',
      course:
        'Generative AI Student',
      review:
        'I learned Prompt Engineering, OpenAI API, LangChain, and Generative AI through hands-on projects. The placement guidance and mentorship were outstanding.',
      date: '5 days ago',
    },

    {
      initials: 'SM',
      name: 'Sneha Menon',
      course:
        'Data Analytics Student',
      review:
        'Power BI, SQL, Data Visualization, and Business Analytics were taught in a practical way. The instructors made every concept simple and industry-focused.',
      date: '2 months ago',
    },

    {
      initials: 'RK',
      name: 'Rohit Krishnan',
      course:
        'AI & Data Science Student',
      review:
        'The curriculum covers everything from Python to Generative AI and MLOps. Real-time projects, GitHub portfolio guidance, and interview preparation helped me become job-ready.',
      date: '1 week ago',
    },
  ];
}