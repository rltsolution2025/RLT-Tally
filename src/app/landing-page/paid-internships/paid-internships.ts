import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import AOS from 'aos';

interface InternshipApplication {
  name: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  year: string;
  track: string;
  message: string;
  paidProgramAcknowledged: boolean;
}

interface SeoTag {
  name?: string;
  property?: string;
  content: string;
}

interface InternshipFaq {
  question: string;
  answer: string;
}

interface CourseLink {
  title: string;
  path: string;
  subtitle: string;
}

interface CourseGroup {
  title: string;
  description: string;
  icon: string;
  courses: CourseLink[];
}

@Component({
  selector: 'app-paid-internships',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './paid-internships.html',
  styleUrl: './paid-internships.css',
})
export class PaidInternshipsComponent implements OnInit, AfterViewInit, OnDestroy {

  // =========================================================
  // PAGE SEO SETTINGS
  // Update the canonical URL if your published route is different.
  // =========================================================

  private readonly pageTitle =
    'Internship for College Students in Chennai | Hands-on Training | RLT Edzaro';

  private readonly metaDescription =
    'Explore paid internship programs for college students in Chennai at RLT Edzaro. Get hands-on training in Software & IT, TallyPrime and Accounting, and Instrumentation. Build practical skills and earn a certificate on successful completion.';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/internship-for-college-students-in-chennai/';

  private readonly organizationName = 'RLT Edzaro';
  private readonly organizationUrl = 'https://www.rltedzaro.com/';
  private readonly schemaScriptId = 'rlt-edzaro-internship-for-college-students-in-chennai-schema';

  private readonly pageKeywords: string[] = [
    'internship for college students in Chennai',
    'internship for college students',
    'paid internship in Chennai',
    'hands-on internship training',
    'RLT Edzaro internship',
    'software internship training',
    'TallyPrime internship training',
    'Tally and accounting internship',
    'instrumentation internship training',
    'hands-on product training',
    'internship with certificate',
    'authorised Tally Partner',
    'IT courses for college students',
    'emerging technology courses',
  ];

  // =========================================================
  // FORM CONFIGURATION
  // IMPORTANT: Set this to your real API endpoint before launch.
  // Example: https://your-domain.com/api/internship-applications
  // Do not publish with the placeholder endpoint.
  // =========================================================

  private readonly applicationApiUrl = 'YOUR_APPLICATION_API_ENDPOINT';

  // =========================================================
  // COMPONENT STATE
  // =========================================================

  menuOpen = false;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  readonly currentYear = new Date().getFullYear();

  formData: InternshipApplication = this.createEmptyForm();

  private readonly isBrowser: boolean;

  // =========================================================
  // FAQ DATA FOR STRUCTURED DATA
  // Keep these aligned with the visible HTML FAQ section.
  // =========================================================

  private readonly faqs: InternshipFaq[] = [
    {
      question: 'Is this a paid internship?',
      answer:
        'Yes. This is a paid internship and training program. Students must pay the applicable fee, which should be confirmed with the team before enrolment.',
    },
    {
      question: 'Which internship tracks are available?',
      answer:
        'The page covers Software & IT, TallyPrime & Accounting, and Instrumentation & Product Training. Availability and exact activities depend on the program arrangements.',
    },
    {
      question: 'Is RLT Edzaro an authorised Tally Partner?',
      answer:
        'RLT Edzaro identifies itself as an authorised Tally Partner and provides TallyPrime and accounting training.',
    },
    {
      question: 'Will I receive a certificate?',
      answer:
        'A certificate is provided on successful completion of the agreed program requirements. Ask the team to confirm the specific completion criteria for your track.',
    },
    {
      question: 'How long is the internship and what is the fee?',
      answer:
        'The duration and fee are not listed on this page because they may vary by track. Submit your interest and confirm the applicable fee, schedule and duration before paying.',
    },
    {
      question: 'Does submitting this form guarantee admission or a job?',
      answer:
        'No. The form registers your interest only. Admission, program availability and any other outcomes must be confirmed separately with RLT Edzaro.',
    },
  ];

  // =========================================================
  // COURSE DIRECTORY
  // Route paths match the course routes supplied for app.routes.ts.
  // Keep path spelling synchronized with the route definitions.
  // =========================================================

  readonly courseGroups: CourseGroup[] = [
    {
      title: 'Tally & Accounting Courses',
      description: 'Accounting software, GST, payroll and business operations.',
      icon: '₹',
      courses: [
        { title: 'Tally Essential', path: 'tally-essential', subtitle: 'Accounting foundations' },
        { title: 'TallyPrime', path: 'tally-prime', subtitle: 'Practical TallyPrime training' },
        { title: 'Tally Professional', path: 'tally-professional', subtitle: 'Advanced accounting workflows' },
        { title: 'GST Simulation', path: 'gst-simulation', subtitle: 'Practice GST transactions' },
        { title: 'Master Accountant', path: 'master-accountant', subtitle: 'End-to-end accounting skills' },
        { title: 'Office Automation', path: 'office-automation', subtitle: 'Productivity and office tools' },
        { title: 'Payroll and Income Tax', path: 'payroll-and-income-tax', subtitle: 'Payroll and tax workflows' },
        { title: 'TDL Essential', path: 'tdl-essential', subtitle: 'Tally Definition Language basics' },
        { title: 'Complete Guide to Inventory Management', path: 'complete-guide-to-inventory-management', subtitle: 'Inventory and stock workflows' },
      ],
    },
    {
      title: 'IT Industry Courses',
      description: 'Software, data, networking, design and digital skills.',
      icon: '</>',
      courses: [
        { title: 'Artificial Intelligence & Machine Learning', path: 'artificial-intelligence-machine-learning-course', subtitle: 'AI and machine learning foundations' },
        { title: 'Cloud Computing', path: 'cloud-computing-course', subtitle: 'Cloud concepts and services' },
        { title: 'Data Science with AI', path: 'data-science-with-ai-course', subtitle: 'Data analysis and AI methods' },
        { title: 'Digital Marketing', path: 'digital-marketing-course', subtitle: 'Digital channels and campaigns' },
        { title: 'Java Full Stack Developer', path: 'java-full-stack-developer-course', subtitle: 'Front end and Java back end' },
        { title: '.NET Full Stack Developer', path: 'dotnet-full-stack-developer-course', subtitle: '.NET application development' },
        { title: 'Python Full Stack Developer', path: 'python-full-stack-developer-course', subtitle: 'Python-based web development' },
        { title: 'UI/UX Design', path: 'ui-ux-design-course', subtitle: 'Interface and user experience design' },
        { title: 'CCNA Networking', path: 'ccna-networking-course', subtitle: 'Networking fundamentals' },
        { title: 'Power BI & Tableau', path: 'power-bi-tableau-course', subtitle: 'Business intelligence and dashboards' },
      ],
    },
    {
      title: 'Emerging Technology Courses',
      description: 'Connected devices, robotics, generative AI and drone technology.',
      icon: '⌁',
      courses: [
        { title: 'Robotics', path: 'robitics-course', subtitle: 'Robotics fundamentals and applications' },
        { title: 'Internet of Things (IoT)', path: 'internet-of-things-course', subtitle: 'Connected devices and sensors' },
        { title: 'Generative AI', path: 'generative-ai-course', subtitle: 'Generative AI concepts and use cases' },
        { title: 'Drone Technology', path: 'drone-technology-course', subtitle: 'Drone systems and applications' },
      ],
    },
  ];

  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly hostElement: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // =========================================================
  // INITIALIZATION
  // =========================================================

  ngOnInit(): void {
    this.setSeoMetadata();
    this.setCanonicalUrl();
    this.setStructuredData();
  }

  ngAfterViewInit(): void {
    console.log('[Internship] ngAfterViewInit started');

    if (!this.isBrowser) {
      console.log('[Internship] Browser rendering is unavailable');
      return;
    }

    const view = this.document.defaultView;
    const root = this.hostElement.nativeElement;

    if (!view) {
      console.error('[Internship] Window not available');
      return;
    }

    // Confirm the expected HTML elements exist.
    console.log(
      '[Internship] Hero found:',
      !!root.querySelector('.hero-copy')
    );

    // Add animation attributes before initializing AOS.
    this.applyDefaultAosAttributes();

    console.log(
      '[Internship] Animation attribute count:',
      root.querySelectorAll('[data-aos]').length
    );

    console.log(
      '[Internship] Hero animation:',
      root.querySelector('.hero-copy')?.getAttribute('data-aos')
    );

    view.requestAnimationFrame(() => {
      AOS.init({
        disable: false,
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 80,
        delay: 0,
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });

      AOS.refreshHard();

      console.log(
        '[Internship] AOS initialized. Attributes:',
        root.querySelectorAll('[data-aos]').length
      );
    });
  }

  // =========================================================
  // AOS FALLBACK ATTRIBUTES
  // Makes scroll effects work if the active HTML file is missing
  // data-aos attributes. Existing data-aos values are preserved.
  // =========================================================

  private applyDefaultAosAttributes(): void {
    const root = this.hostElement.nativeElement;

    const animationRules: Array<{
      selector: string;
      animation: string;
      delayStep?: number;
    }> = [
        { selector: '.hero-copy', animation: 'fade-right' },
        { selector: '.hero-visual', animation: 'zoom-in' },

        { selector: '.trust-item', animation: 'fade-up', delayStep: 100 },
        { selector: '.section-copy', animation: 'fade-up' },
        { selector: '.intro-text', animation: 'fade-left' },
        { selector: '.section-heading', animation: 'fade-up' },

        { selector: '.program-card', animation: 'fade-up', delayStep: 120 },
        { selector: '.program-note', animation: 'fade-up' },
        {
          selector: '.course-group-panel',
          animation: 'fade-up',
          delayStep: 120,
        },
        { selector: '.course-directory-note', animation: 'fade-up' },

        { selector: '.experience-copy', animation: 'fade-up' },
        { selector: '.benefit-item', animation: 'fade-left', delayStep: 120 },
        { selector: '.process-step', animation: 'fade-up', delayStep: 120 },
        { selector: '.fee-card', animation: 'zoom-in-up' },

        { selector: '.application-copy', animation: 'fade-up' },
        { selector: '.application-form-wrap', animation: 'fade-left' },
        { selector: '.faq-heading', animation: 'fade-up' },
        { selector: '.faq-item', animation: 'fade-up', delayStep: 100 },
        { selector: '.final-cta', animation: 'zoom-in-up' },
      ];

    for (const rule of animationRules) {
      const elements =
        root.querySelectorAll<HTMLElement>(rule.selector);

      elements.forEach((element, index) => {
        // Preserve any animation already set in the HTML.
        if (!element.hasAttribute('data-aos')) {
          element.setAttribute('data-aos', rule.animation);
        }

        if (
          rule.delayStep &&
          !element.hasAttribute('data-aos-delay')
        ) {
          element.setAttribute(
            'data-aos-delay',
            String(index * rule.delayStep)
          );
        }
      });
    }

    // Confirm the attributes were added to the actual component DOM.
    console.log(
      '[Internship] Helper completed:',
      root.querySelectorAll('[data-aos]').length
    );
  }

  // =========================================================
  // FORM INITIALIZATION
  // =========================================================

  private createEmptyForm(): InternshipApplication {
    return {
      name: '',
      email: '',
      phone: '',
      college: '',
      degree: '',
      year: '',
      track: '',
      message: '',
      paidProgramAcknowledged: false,
    };
  }

  // =========================================================
  // SEO TITLE AND META TAGS
  // =========================================================

  private setSeoMetadata(): void {
    this.titleService.setTitle(this.pageTitle);

    const tags: SeoTag[] = [
      { name: 'description', content: this.metaDescription },
      { name: 'keywords', content: this.pageKeywords.join(', ') },
      { name: 'author', content: this.organizationName },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'content-language', content: 'en-IN' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: this.organizationName },
      { property: 'og:title', content: this.pageTitle },
      { property: 'og:description', content: this.metaDescription },
      { property: 'og:url', content: this.canonicalUrl },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: this.pageTitle },
      { name: 'twitter:description', content: this.metaDescription },
    ];

    tags.forEach((tag) => {
      if (tag.property) {
        this.metaService.updateTag({
          property: tag.property,
          content: tag.content,
        });
      } else if (tag.name) {
        this.metaService.updateTag({
          name: tag.name,
          content: tag.content,
        });
      }
    });
  }

  // =========================================================
  // CANONICAL URL
  // =========================================================

  private setCanonicalUrl(): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = this.canonicalUrl;
  }

  // =========================================================
  // STRUCTURED DATA
  // Organization, WebSite, WebPage, BreadcrumbList and FAQPage
  // =========================================================

  private setStructuredData(): void {
    const organizationId = `${this.organizationUrl}#organization`;
    const websiteId = `${this.organizationUrl}#website`;
    const breadcrumbId = `${this.canonicalUrl}#breadcrumb`;
    const faqId = `${this.canonicalUrl}#faq`;

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': organizationId,
          name: this.organizationName,
          url: this.organizationUrl,
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          name: this.organizationName,
          url: this.organizationUrl,
          publisher: { '@id': organizationId },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'WebPage',
          '@id': this.canonicalUrl,
          url: this.canonicalUrl,
          name: this.pageTitle,
          description: this.metaDescription,
          isPartOf: { '@id': websiteId },
          inLanguage: 'en-IN',
          breadcrumb: { '@id': breadcrumbId },
          mainEntity: { '@id': faqId },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': breadcrumbId,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: this.organizationUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Paid Internships',
              item: this.canonicalUrl,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': faqId,
          mainEntity: this.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    let schemaScript = this.document.getElementById(
      this.schemaScriptId,
    ) as HTMLScriptElement | null;

    if (!schemaScript) {
      schemaScript = this.document.createElement('script');
      schemaScript.id = this.schemaScriptId;
      schemaScript.type = 'application/ld+json';
      this.document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(schema);
  }

  // =========================================================
  // MOBILE NAVIGATION
  // =========================================================

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  // =========================================================
  // SELECT AN INTERNSHIP TRACK FROM A PROGRAM CARD
  // =========================================================

  selectTrack(track: string): void {
    this.formData.track = track;
    this.scrollToApplication();
  }

  // =========================================================
  // SCROLL TO A PAGE SECTION
  // Use buttons for in-page actions to avoid a conflict between
  // native anchor jumps and JavaScript smooth scrolling.
  // =========================================================

  scrollToSection(sectionId: string): void {
    if (!this.isBrowser) {
      return;
    }

    const target = this.document.getElementById(sectionId);

    if (!target) {
      console.warn(`[PaidInternships] Section not found: #${sectionId}`);
      return;
    }

    // The target sections use scroll-margin-top in paid-internships.css
    // to keep the section heading clear of a sticky site header.
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // =========================================================
  // SCROLL TO APPLICATION FORM
  // =========================================================

  scrollToApplication(): void {
    this.scrollToSection('application');
  }

  // =========================================================
  // FORM SUBMISSION
  // Connect a real API endpoint before publishing this page.
  // This prevents showing a false success state without delivery.
  // =========================================================

  async submitApplication(): Promise<void> {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.isSubmitting) {
      return;
    }

    if (!this.formData.paidProgramAcknowledged) {
      this.errorMessage =
        'Please acknowledge that this is a paid internship before submitting.';
      return;
    }

    if (
      !this.applicationApiUrl ||
      this.applicationApiUrl === 'YOUR_APPLICATION_API_ENDPOINT'
    ) {
      this.errorMessage =
        'The application form is ready, but online submission has not been connected yet. Configure your application API endpoint in paid-internships.ts before publishing the page.';
      return;
    }

    const view = this.document.defaultView;

    if (!view) {
      this.errorMessage =
        'The form could not be submitted in this browser. Please try again.';
      return;
    }

    this.isSubmitting = true;

    try {
      const response = await view.fetch(this.applicationApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...this.formData,
          formName: 'RLT Edzaro Paid Internship Application',
          submittedAt: new Date().toISOString(),
          pageUrl: this.canonicalUrl,
        }),
      });

      if (!response.ok) {
        throw new Error(`Application endpoint returned ${response.status}`);
      }

      this.successMessage =
        'Your application details have been submitted successfully. The team can follow up using the contact information you provided.';
      this.formData = this.createEmptyForm();
    } catch {
      this.errorMessage =
        'We could not submit your application. Please check your connection and try again, or contact RLT Edzaro through the website.';
    } finally {
      this.isSubmitting = false;
    }
  }

  // =========================================================
  // CLEANUP
  // =========================================================

  ngOnDestroy(): void {
    this.document.getElementById(this.schemaScriptId)?.remove();
  }
}
