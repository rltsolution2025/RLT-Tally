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
  selector: 'app-cloud',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.css',
})
export class CloudComponent
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
    'https://www.rltedzaro.com/cloud-computing-course';

  private readonly pageTitle =
    'Cloud Computing Course in Chennai | RLT Edzaro';

  private readonly pageDescription =
    'Join the Cloud Computing Course in Chennai at RLT Edzaro. Learn AWS, Azure, GCP, Linux, Networking, Docker, Kubernetes, Terraform, Jenkins, CI/CD, Cloud Security and DevOps through practical training and projects.';

  private readonly pageKeywords =
    'Cloud Computing Course in Chennai, Cloud Computing Training in Chennai, Cloud Engineer Course in Chennai, Cloud Developer Course, AWS Course in Chennai, AWS Training in Chennai, Azure Course in Chennai, Azure Training in Chennai, Google Cloud Course, GCP Training, DevOps Course in Chennai, DevOps Training in Chennai, Docker Training, Kubernetes Training, Terraform Training, Cloud Security Course, Linux Administration Course, Cloud Infrastructure Course, IT Infrastructure Course, Software and IT Training in Chennai, RLT Edzaro';

  private readonly ogImage =
    'https://www.rltedzaro.com/assets/IT%20Course/Cloud%20Computing%20Course.jpeg';

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
      'Cloud Computing Course in Chennai'
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
     CANONICAL
     ========================================================= */

  private setCanonical(): void {
    let canonical =
      this.document.querySelector(
        'link[rel="canonical"][data-rlt-cloud="true"]'
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
        'data-rlt-cloud',
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
            'Cloud Computing Course',

          description:
            'Industry-focused Cloud Computing and DevOps training covering AWS, Microsoft Azure, Google Cloud Platform, Linux Administration, Networking, Docker, Kubernetes, Terraform, Jenkins, CI/CD, Infrastructure as Code, Cloud Security and cloud deployment.',

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
            'Cloud Computing',
            'Cloud Architecture',
            'Linux Administration',
            'Linux Shell Scripting',
            'Computer Networking',
            'Git',
            'GitHub',
            'Amazon Web Services',
            'AWS',
            'Microsoft Azure',
            'Google Cloud Platform',
            'GCP',
            'AWS EC2',
            'AWS S3',
            'AWS RDS',
            'AWS VPC',
            'AWS IAM',
            'AWS CloudWatch',
            'AWS CloudTrail',
            'Azure Virtual Machines',
            'Azure Storage',
            'Azure Networking',
            'Azure App Services',
            'Azure SQL Database',
            'Google Compute Engine',
            'Google Cloud Storage',
            'Google Cloud SQL',
            'Google Kubernetes Engine',
            'Cloud Functions',
            'Docker',
            'Docker Compose',
            'Kubernetes',
            'DevOps',
            'Jenkins',
            'GitHub Actions',
            'CI/CD',
            'Nginx',
            'Infrastructure as Code',
            'Terraform',
            'Cloud Security',
            'Identity and Access Management',
            'Cloud Monitoring',
            'Cloud Deployment',
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
                'Cloud Computing',
            },

            {
              '@type': 'Thing',
              name:
                'DevOps Engineering',
            },

            {
              '@type': 'Thing',
              name:
                'Cloud Infrastructure',
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
                'Cloud Computing Course',

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
                'What does the Cloud Computing Course cover?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'The Cloud Computing Course covers cloud fundamentals, Linux Administration, Networking, AWS, Microsoft Azure, Google Cloud Platform, Docker, Kubernetes, DevOps, Terraform, CI/CD, Cloud Security and cloud deployment.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Does the Cloud Computing Course include AWS?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The course includes Amazon Web Services with topics such as AWS infrastructure, IAM, EC2, storage, VPC, RDS, DynamoDB, load balancing, auto scaling, CloudWatch and CloudTrail.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Does the course include Azure and Google Cloud?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The program covers Microsoft Azure and Google Cloud Platform along with their core compute, storage, networking, database, security and deployment services.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Is DevOps included in the Cloud Computing Course?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. DevOps topics include Git, GitHub, Jenkins, GitHub Actions, CI/CD pipelines, Docker, Kubernetes, Nginx, deployment automation and Infrastructure as Code.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Is Terraform included in the course?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The program includes Infrastructure as Code using Terraform, including providers, resources, variables, modules, state management and cloud infrastructure provisioning.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Does the Cloud Computing Course include practical projects?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'Yes. The curriculum includes hands-on cloud labs, deployment exercises and practical projects across AWS, Azure, GCP, Docker, Kubernetes, DevOps and cloud infrastructure.',
              },
            },

            {
              '@type':
                'Question',

              name:
                'Where is the Cloud Computing Course offered?',

              acceptedAnswer: {
                '@type':
                  'Answer',

                text:
                  'RLT Edzaro offers the Cloud Computing Course in Chennai.',
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
      'data-rlt-cloud',
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
        'script[data-rlt-cloud="true"]'
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
        'link[rel="canonical"][data-rlt-cloud="true"]'
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

  modalTitle = 'Enroll for the Course';

  showEnrollModal = false;

  showSyllabusModal = false;


  openEnrollModal(): void {

    this.modalTitle = 'Enroll for the Course';

    this.showSyllabusModal = false;

    this.showEnrollModal = true;

    document.body.classList.add('modal-open');
  }


  openSyllabusModal(): void {

    this.modalTitle = 'Get the Course Syllabus';

    this.showEnrollModal = false;

    this.showSyllabusModal = true;

    document.body.classList.add('modal-open');
  }


  closeEnrollModal(): void {

    this.showEnrollModal = false;

    this.showSyllabusModal = false;

    document.body.classList.remove('modal-open');
  }

  /* =========================================================
     REVIEWS
     ========================================================= */

  overallRating = 4.9;

  totalReviews = 250;

  testimonials: Testimonial[] = [
    {
      initials: 'RK',
      name: 'Rajesh Kumar',
      course:
        'Cloud Developer Student',
      review:
        'Excellent Cloud Developer training with hands-on AWS, Azure, Docker, and Kubernetes labs. The real-time projects helped me understand cloud deployment with confidence.',
      date: '2 weeks ago',
    },

    {
      initials: 'AK',
      name: 'Ajith Kumar',
      course:
        'AWS Cloud Student',
      review:
        'One of the best cloud training institutes. The AWS modules, Linux administration, and Terraform sessions were practical and easy to understand.',
      date: '1 month ago',
    },

    {
      initials: 'SK',
      name: 'Sunil Kumar',
      course:
        'DevOps Student',
      review:
        'The Docker, Kubernetes, Jenkins, and CI/CD pipeline training was excellent. I gained practical experience through live deployment projects.',
      date: '3 weeks ago',
    },

    {
      initials: 'VP',
      name: 'Vinoth Prasanth',
      course:
        'Azure Cloud Student',
      review:
        'The Azure training covered Virtual Machines, Networking, Storage, and App Services with real-world examples. The placement support was outstanding.',
      date: '5 days ago',
    },

    {
      initials: 'AK',
      name: 'Akhila',
      course:
        'Cloud Security Student',
      review:
        'I learned Cloud Security, IAM, Monitoring, Terraform, and Infrastructure as Code through hands-on labs. The trainers explained every concept clearly.',
      date: '2 months ago',
    },

    {
      initials: 'KR',
      name: 'Karun Raj',
      course:
        'Cloud & DevOps Student',
      review:
        'Highly recommended for anyone interested in Cloud Computing. The AWS, Azure, GCP, Kubernetes, and DevOps curriculum is industry-focused and helped me build a strong portfolio.',
      date: '1 week ago',
    },
  ];
}