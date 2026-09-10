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
  selector: 'app-ccna',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './ccna.component.html',
  styleUrl: './ccna.component.css',
})
export class CCNAComponent
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
    'https://www.rltedzaro.com/ccna';

  private readonly pageTitle =
    'CCNA & Networking Course in Chennai | RLT Edzaro';

  private readonly pageDescription =
    'Join the CCNA & Networking Course in Chennai at RLT Edzaro. Learn networking fundamentals, IP addressing, subnetting, routing, switching, VLANs, OSPF, Cisco technologies, network security and troubleshooting through practical training.';

  private readonly pageKeywords =
    'CCNA Course in Chennai, CCNA Training in Chennai, Networking Course in Chennai, Networking Training in Chennai, CCNA Certification Course, Cisco Networking Course, Network Engineer Course, Network Administration Course, IT Networking Course, Networking Management Course, Network Security Course, Routing and Switching Course, Cisco Training in Chennai, IP Addressing Course, Subnetting Course, VLAN Training, OSPF Training, IT Infrastructure Course, Software and IT Training in Chennai, RLT Edzaro';

  private readonly ogImage =
    'https://www.rltedzaro.com/assets/IT%20Course/CCNA%20Course.jpeg';

  private schemaElement?: HTMLScriptElement;

  ngOnInit(): void {
    this.setSeo();
  }

  /* =========================================================
     SEO
     ========================================================= */

  private setSeo(): void {
    /* ---------- TITLE ---------- */

    this.titleService.setTitle(this.pageTitle);

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

    this.updateMeta(
      'geo.region',
      'IN-TN'
    );

    this.updateMeta(
      'geo.placename',
      'Chennai'
    );

    /* ---------- CONTENT LANGUAGE ---------- */

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
      'CCNA and Networking Course in Chennai'
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
        'link[rel="canonical"][data-rlt-ccna="true"]'
      ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical =
        this.renderer.createElement('link');

      this.renderer.setAttribute(
        canonical,
        'rel',
        'canonical'
      );

      this.renderer.setAttribute(
        canonical,
        'data-rlt-ccna',
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

          name: 'CCNA & Networking Course',

          description:
            'Industry-focused CCNA and Networking course covering networking fundamentals, IP addressing, subnetting, Ethernet, switching, VLANs, routing, OSPF, network services, wireless networking, Cisco device management, network security and troubleshooting.',

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
            'Computer Networking',
            'Networking Fundamentals',
            'OSI Model',
            'TCP/IP',
            'Ethernet',
            'IPv4',
            'IPv6',
            'IP Addressing',
            'Subnetting',
            'VLSM',
            'CIDR',
            'Switching',
            'VLANs',
            '802.1Q Trunking',
            'Spanning Tree Protocol',
            'Routing',
            'Inter-VLAN Routing',
            'Static Routing',
            'Dynamic Routing',
            'OSPF',
            'DHCP',
            'DNS',
            'NAT',
            'PAT',
            'Wireless Networking',
            'Network Security',
            'Access Control Lists',
            'Cisco IOS',
            'Cisco Router Configuration',
            'Cisco Switch Configuration',
            'Network Troubleshooting',
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
                'Networking & IT Infrastructure',
            },

            {
              '@type':
                'Thing',

              name:
                'Cisco Networking',
            },
          ],

          areaServed: {
            '@type': 'City',
            name: 'Chennai',
          },
        },

        /* =====================================================
           ORGANIZATION
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
                'CCNA & Networking Course',

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
      'data-rlt-ccna',
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
        'script[data-rlt-ccna="true"]'
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
        'link[rel="canonical"][data-rlt-ccna="true"]'
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
      initials: 'SK',
      name: 'Suresh Kumar',
      course:
        'CCNA & Networking Student',
      review:
        'The CCNA training was excellent. I learned networking fundamentals, IP addressing, subnetting, VLANs, routing, and Cisco configuration through practical lab sessions. The trainers explained every concept clearly.',
      date: '2 weeks ago',
    },

    {
      initials: 'VP',
      name: 'Vignesh Prakash',
      course:
        'Cisco Networking Student',
      review:
        'The Cisco networking labs were very practical. I gained hands-on experience with routers, switches, VLAN configuration, trunking, and troubleshooting. The real-world scenarios made networking much easier to understand.',
      date: '1 month ago',
    },

    {
      initials: 'SK',
      name: 'Surya Kumar',
      course:
        'Network Engineer Student',
      review:
        'Highly recommended for beginners in networking. The course covered OSI and TCP/IP models, subnetting, switching, routing, and OSPF with practical examples and hands-on Cisco exercises.',
      date: '3 weeks ago',
    },

    {
      initials: 'AP',
      name: 'Aravind Prasad',
      course:
        'CCNA Certification Student',
      review:
        'The CCNA preparation was very useful. I improved my subnetting, routing, VLAN, and troubleshooting skills through regular lab practice and mock assessments. The career guidance also helped me prepare for networking interviews.',
      date: '5 days ago',
    },

    {
      initials: 'KR',
      name: 'Keerthana R',
      course:
        'Network Security Student',
      review:
        'The networking security modules were excellent. I learned ACLs, NAT, secure device management, wireless security, and network troubleshooting through practical exercises. The trainers were very supportive throughout the course.',
      date: '2 months ago',
    },

    {
      initials: 'MB',
      name: 'Manoj Balaji',
      course:
        'Network Management Student',
      review:
        'The curriculum is well structured and practical. I learned Cisco IOS, IP addressing, routing, switching, OSPF, DHCP, network security, and enterprise network management. The hands-on projects gave me confidence to pursue networking roles.',
      date: '1 week ago',
    },
  ];
}