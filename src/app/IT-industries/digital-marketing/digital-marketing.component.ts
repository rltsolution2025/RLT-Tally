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
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.css',
})
export class DigitalMarketingComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /* =========================================================
     SEO CONFIGURATION
     ========================================================= */

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/digital-marketing';

  private readonly pageTitle =
    'Digital Marketing Course in Chennai | RLT Edzaro';

  private readonly pageDescription =
    'Join the Digital Marketing Course in Chennai at RLT Edzaro. Learn SEO, Google Ads, Meta Ads, Social Media Marketing, Performance Marketing, Analytics, WordPress, Email Marketing and AI tools through practical training and projects.';

  private readonly pageKeywords =
    'Digital Marketing Course in Chennai, Digital Marketing Training in Chennai, Digital Marketing Institute in Chennai, SEO Course in Chennai, SEO Training in Chennai, Google Ads Course, Google Ads Training, Meta Ads Course, Facebook Ads Training, Instagram Marketing Course, Social Media Marketing Course in Chennai, Performance Marketing Course, Digital Advertising Course, WordPress Course in Chennai, Google Analytics Course, Email Marketing Course, Content Marketing Course, AI Digital Marketing Course, Digital Marketing Certification, Software and IT Training in Chennai, RLT Edzaro';

  private readonly ogImage =
    'https://www.rltedzaro.com/assets/IT%20Course/Digital%20Marketing%20Course.jpeg';

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
      'Digital Marketing Course in Chennai'
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
        'link[rel="canonical"][data-rlt-digital-marketing="true"]'
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
        'data-rlt-digital-marketing',
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

          '@id':
            `${this.canonicalUrl}#course`,

          name:
            'Digital Marketing Course',

          description:
            'Practical Digital Marketing training covering SEO, Google Ads, Meta Ads, Social Media Marketing, Performance Marketing, WordPress, Analytics, Email Marketing and digital campaign management.',

          url:
            this.canonicalUrl,

          image:
            this.ogImage,

          inLanguage:
            'en-IN',

          educationalLevel:
            'Beginner to Advanced',

          provider: {
            '@type':
              'EducationalOrganization',

            name:
              'RLT Edzaro',

            url:
              'https://www.rltedzaro.com/',

            areaServed: {
              '@type':
                'City',

              name:
                'Chennai',
            },

            address: {
              '@type':
                'PostalAddress',

              addressLocality:
                'Chennai',

              addressRegion:
                'Tamil Nadu',

              addressCountry:
                'IN',
            },
          },

          teaches: [
            'Digital Marketing',
            'Digital Advertising',
            'Search Engine Optimization',
            'SEO',
            'Keyword Research',
            'On-Page SEO',
            'Technical SEO',
            'Google Search Console',
            'Google Ads',
            'Performance Marketing',
            'Meta Ads',
            'Facebook Ads',
            'Instagram Marketing',
            'Social Media Marketing',
            'Lead Generation',
            'Campaign Optimization',
            'Content Marketing',
            'WordPress',
            'Elementor',
            'Google Analytics',
            'Email Marketing',
            'AI Tools for Digital Marketing',
            'Digital Marketing Analytics',
          ],

          about: [
            {
              '@type':
                'Thing',

              name:
                'Software & IT Training',
            },

            {
              '@type':
                'Thing',

              name:
                'Digital Marketing',
            },

            {
              '@type':
                'Thing',

              name:
                'Search Engine Optimization',
            },

            {
              '@type':
                'Thing',

              name:
                'Performance Marketing',
            },

            {
              '@type':
                'Thing',

              name:
                'Social Media Marketing',
            },
          ],

          areaServed: {
            '@type':
              'City',

            name:
              'Chennai',
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

          name:
            'RLT Edzaro',

          alternateName:
            'RLT Academy of Excellence',

          url:
            'https://www.rltedzaro.com/',

          description:
            'RLT Edzaro provides Software, IT, Tally and Accounting training with practical and industry-focused learning.',

          areaServed: {
            '@type':
              'City',

            name:
              'Chennai',
          },
        },

        /* =====================================================
           WEBSITE
           ===================================================== */

        {
          '@type':
            'WebSite',

          '@id':
            'https://www.rltedzaro.com/#website',

          url:
            'https://www.rltedzaro.com/',

          name:
            'RLT Edzaro',

          publisher: {
            '@id':
              'https://www.rltedzaro.com/#organization',
          },

          inLanguage:
            'en-IN',
        },

        /* =====================================================
           WEB PAGE
           ===================================================== */

        {
          '@type':
            'WebPage',

          '@id':
            `${this.canonicalUrl}#webpage`,

          url:
            this.canonicalUrl,

          name:
            this.pageTitle,

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

          inLanguage:
            'en-IN',
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

              name:
                'Home',

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
                'Digital Marketing Course',

              item:
                this.canonicalUrl,
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
      'data-rlt-digital-marketing',
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
        'script[data-rlt-digital-marketing="true"]'
      );

    existing.forEach(
      (element) =>
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
        'link[rel="canonical"][data-rlt-digital-marketing="true"]'
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
    if (
      !this.careerStats
        ?.nativeElement
    ) {
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
      this.careerStats
        .nativeElement
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
      initials: 'AK',
      name: 'Arun Kumar',
      course:
        'Digital Marketing Student',
      review:
        'The Digital Marketing course was excellent. I learned SEO, Google Ads, and Social Media Marketing through practical sessions and live projects. The trainers explained every concept clearly.',
      date: '2 weeks ago',
    },

    {
      initials: 'PV',
      name: 'Priyadharshini V',
      course:
        'SEO Student',
      review:
        'The SEO training covered keyword research, on-page SEO, technical SEO, and Google Search Console in detail. The practical assignments helped me improve my skills.',
      date: '1 month ago',
    },

    {
      initials: 'SK',
      name: 'Saravanan K',
      course:
        'Performance Marketing Student',
      review:
        'I gained hands-on experience in Google Ads, Meta Ads, lead generation, and campaign optimization. The live campaigns gave me real industry exposure.',
      date: '3 weeks ago',
    },

    {
      initials: 'NK',
      name: 'Nandhini K',
      course:
        'Social Media Marketing Student',
      review:
        'The Social Media Marketing modules were very informative. I learned Instagram Marketing, Facebook Ads, Canva, AI tools, and content creation with practical examples.',
      date: '5 days ago',
    },

    {
      initials: 'MV',
      name: 'Madhan Vel',
      course:
        'WordPress & Digital Marketing Student',
      review:
        'The WordPress website development, Elementor, Google Analytics, and email marketing sessions were excellent. I was able to build my own business website confidently.',
      date: '2 months ago',
    },

    {
      initials: 'SR',
      name: 'Sathya Raj',
      course:
        'Digital Marketing Professional',
      review:
        'The curriculum covered SEO, Google Ads, Social Media Marketing, Analytics, AI tools, and freelancing. The placement support and mock interviews helped me become job-ready.',
      date: '1 week ago',
    },
  ];
}