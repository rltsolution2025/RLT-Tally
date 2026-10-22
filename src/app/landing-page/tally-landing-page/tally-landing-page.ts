import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface TallyCourse {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  visualClass: string;
  visualLabel: string;
  topics: string[];
  featured?: boolean;
}

interface CourseEnquiry {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

interface LearningPath {
  number: string;
  title: string;
  description: string;
  course: string;
}

@Component({
  selector: 'app-tally-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './tally-landing-page.html',
  styleUrl: './tally-landing-page.css'
})
export class TallyLandingPage implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  readonly pageTitle =
    'Tally Courses in Chennai | TallyPrime, GST & Accounting | RLT Edzaro';
  readonly metaDescription =
    'Explore Tally Essential, TallyPrime, Tally Professional, GST Simulation, Master Accountant, Office Automation, Payroll and Income Tax, TDL Essential and Inventory Management courses at RLT Edzaro.';
  readonly canonicalUrl = 'https://rltedzaro.com/tally-courses/';

  /** The slugs below match the course routes provided in the request. */
  readonly courses: TallyCourse[] = [
    {
      slug: 'tally-essential', title: 'Tally Essential', category: 'Tally & Accounting',
      description: 'Build a foundation in accounting software and learn the core workflows used to record and organise business transactions.',
      icon: 'fa-solid fa-calculator', visualClass: 'tc-visual-blue', visualLabel: 'ACCOUNTING BASICS',
      topics: ['Accounting basics', 'Ledgers', 'Vouchers']
    },
    {
      slug: 'tally-prime', title: 'TallyPrime', category: 'Tally & Accounting',
      description: 'Explore TallyPrime workflows for company setup, transactions, ledgers and day-to-day accounting tasks.',
      icon: 'fa-solid fa-laptop-file', visualClass: 'tc-visual-indigo', visualLabel: 'TALLYPRIME', topics: ['Company setup', 'Transactions', 'Reports'], featured: true
    },
    {
      slug: 'tally-professional', title: 'Tally Professional', category: 'Tally & Accounting',
      description: 'Develop broader knowledge of accounting workflows and professional Tally usage for business records.',
      icon: 'fa-solid fa-briefcase', visualClass: 'tc-visual-navy', visualLabel: 'PROFESSIONAL', topics: ['Accounting', 'Business entries', 'Reporting']
    },
    {
      slug: 'gst-simulation', title: 'GST Simulation', category: 'GST & Taxation',
      description: 'Practise GST-oriented scenarios and understand how tax-related entries flow through an accounting system.',
      icon: 'fa-solid fa-file-invoice-dollar', visualClass: 'tc-visual-cyan', visualLabel: 'GST PRACTICE', topics: ['GST concepts', 'Tax invoices', 'Transactions'], featured: true
    },
    {
      slug: 'master-accountant', title: 'Master Accountant', category: 'Career Program',
      description: 'Explore a broader accounting learning pathway covering core business accounting tasks and related software workflows.',
      icon: 'fa-solid fa-user-tie', visualClass: 'tc-visual-violet', visualLabel: 'ACCOUNTING PATH', topics: ['Accounting skills', 'Business workflow', 'Reports']
    },
    {
      slug: 'office-automation', title: 'Office Automation', category: 'Office Productivity',
      description: 'Build familiarity with common office productivity tools and document, spreadsheet and presentation workflows.',
      icon: 'fa-solid fa-desktop', visualClass: 'tc-visual-steel', visualLabel: 'OFFICE TOOLS', topics: ['Documents', 'Spreadsheets', 'Presentations']
    },
    {
      slug: 'payroll-and-income-tax', title: 'Payroll and Income Tax', category: 'Payroll & Taxation',
      description: 'Explore employee salary structures, payroll records, payslips and introductory income-tax-related workflows.',
      icon: 'fa-solid fa-money-check-dollar', visualClass: 'tc-visual-deep', visualLabel: 'PAYROLL & TAX', topics: ['Salary structure', 'Payroll', 'Income tax']
    },
    {
      slug: 'tdl-essential', title: 'TDL Essential', category: 'Tally Customisation',
      description: 'Discover the fundamentals of Tally Definition Language and how TallyPrime customisation can extend workflows.',
      icon: 'fa-solid fa-code', visualClass: 'tc-visual-code', visualLabel: 'TDL CUSTOMISATION', topics: ['TDL basics', 'Definitions', 'Customisation']
    },
    {
      slug: 'complete-guide-to-inventory-management', title: 'Complete Guide to Inventory Management', category: 'Inventory Management',
      description: 'Understand inventory concepts, stock organisation, stock movements and inventory-related reporting in Tally.',
      icon: 'fa-solid fa-boxes-stacked', visualClass: 'tc-visual-inventory', visualLabel: 'INVENTORY', topics: ['Stock items', 'Stock movement', 'Inventory reports']
    }
  ];

  readonly categories = [
    'All Courses', 'Tally & Accounting', 'GST & Taxation', 'Career Program',
    'Office Productivity', 'Payroll & Taxation', 'Tally Customisation', 'Inventory Management'
  ];

  readonly learningPaths: LearningPath[] = [
    { number: '01', title: 'New to Tally and accounting software?', description: 'Explore Tally Essential or TallyPrime as a starting point.', course: 'Tally Essential' },
    { number: '02', title: 'Want to practise GST workflows?', description: 'Explore GST Simulation and ask about its practical scenarios.', course: 'GST Simulation' },
    { number: '03', title: 'Interested in payroll and taxation?', description: 'Compare payroll, salary and income-tax learning topics.', course: 'Payroll and Income Tax' },
    { number: '04', title: 'Want to learn Tally customisation or inventory?', description: 'Explore TDL Essential and Inventory Management.', course: 'Course guidance / not sure yet' }
  ];

  readonly faqs = [
    { question: 'Which Tally course should a beginner choose?', answer: 'If you are new to accounting software, ask RLT Edzaro about Tally Essential or TallyPrime and confirm the syllabus that best matches your current knowledge.' },
    { question: 'Do you have a course focused on GST?', answer: 'GST Simulation is listed in this catalogue. Contact RLT Edzaro to check the current syllabus, practical scenarios, fees and batch availability.' },
    { question: 'Are payroll and inventory covered?', answer: 'Payroll and Income Tax and Complete Guide to Inventory Management are listed as individual learning options. Check the current course outline to confirm the topics included.' },
    { question: 'Can I view a course before enquiring?', answer: 'Yes. Select View Course on a course card to open its individual page, or use the enquiry form to ask about the course.' },
    { question: 'How do I enquire about fees and batches?', answer: 'Open the enquiry form, provide your name and mobile number, choose a course and prepare a WhatsApp message for RLT Edzaro. You must press Send in WhatsApp to submit it.' }
  ];

  // Search and category filter state
  searchTerm = '';
  activeCategory = 'All Courses';

  get filteredCourses(): TallyCourse[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.courses.filter(course => {
      const matchesCategory = this.activeCategory === 'All Courses' || course.category === this.activeCategory;
      const searchableText = [course.title, course.category, course.description, course.visualLabel, ...course.topics].join(' ').toLowerCase();
      return matchesCategory && (!query || searchableText.includes(query));
    });
  }

  onSearchChange(event: Event): void { this.searchTerm = (event.target as HTMLInputElement).value; }
  clearSearch(): void { this.searchTerm = ''; }
  setCategory(category: string): void { this.activeCategory = category; }
  resetFilters(): void { this.searchTerm = ''; this.activeCategory = 'All Courses'; }

  // Enquiry popup state
  isModalOpen = false;
  submissionNote = '';
  enquiry: CourseEnquiry = this.emptyEnquiry();
  private previousBodyOverflow = '';

  private emptyEnquiry(): CourseEnquiry {
    return { name: '', phone: '', email: '', course: '', message: '' };
  }

  openEnquiry(course?: TallyCourse | string): void {
    const selectedCourse = typeof course === 'string' ? course : course?.title ?? '';
    this.enquiry = { ...this.emptyEnquiry(), course: selectedCourse };
    this.submissionNote = '';
    this.isModalOpen = true;
    if (isPlatformBrowser(this.platformId)) {
      this.previousBodyOverflow = this.document.body.style.overflow;
      this.document.body.style.overflow = 'hidden';
    }
  }

  closeEnquiry(): void {
    this.isModalOpen = false;
    this.submissionNote = '';
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = this.previousBodyOverflow;
    }
  }

  submitEnquiry(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const lines = [
      'Hello RLT Edzaro, I would like to enquire about a course.', '',
      `Name: ${this.enquiry.name.trim()}`,
      `Mobile: ${this.enquiry.phone.trim()}`,
      `Email: ${this.enquiry.email.trim() || 'Not provided'}`,
      `Course: ${this.enquiry.course}`,
      `Message: ${this.enquiry.message.trim() || 'Please share the course details.'}`
    ];
    const whatsappUrl = `https://wa.me/918925500513?text=${encodeURIComponent(lines.join('\n'))}`;

    if (isPlatformBrowser(this.platformId)) {
      this.document.defaultView?.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    this.submissionNote = 'A WhatsApp message has been prepared. Review the details in WhatsApp and press Send to submit your enquiry. This website does not send the form directly.';
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void { if (this.isModalOpen) this.closeEnquiry(); }

  // Pointer-driven subtle 3D tilt on course cards (mouse only)
  tiltCard(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    const card = event.currentTarget as HTMLElement | null;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty('--tc-rotate-x', `${((0.5 - y) * 5).toFixed(2)}deg`);
    card.style.setProperty('--tc-rotate-y', `${((x - 0.5) * 5).toFixed(2)}deg`);
  }

  resetCardTilt(event: PointerEvent): void {
    const card = event.currentTarget as HTMLElement | null;
    if (!card) return;
    card.style.setProperty('--tc-rotate-x', '0deg');
    card.style.setProperty('--tc-rotate-y', '0deg');
  }

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.metaService.updateTag({ name: 'description', content: this.metaDescription });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.metaService.updateTag({ name: 'author', content: 'RLT Edzaro' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:site_name', content: 'RLT Edzaro' });
    this.metaService.updateTag({ property: 'og:title', content: this.pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.metaDescription });
    this.metaService.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: this.metaDescription });
    this.setCanonicalUrl();
  }

  private setCanonicalUrl(): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = this.canonicalUrl;
  }

  // Reveal elements once they enter the viewport as the user scrolls
  private revealObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (typeof IntersectionObserver === 'undefined') {
      this.revealAllElements();
      return;
    }

    this.revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

    this.observeRevealElements();
  }

  /** Also observes cards that are inserted after the user filters the catalogue. */
  ngAfterViewChecked(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.revealObserver) {
      this.observeRevealElements();
    } else if (typeof IntersectionObserver === 'undefined') {
      this.revealAllElements();
    }
  }

  private observeRevealElements(): void {
    if (!this.revealObserver) return;

    this.document.querySelectorAll<HTMLElement>('.tc-reveal:not([data-tc-observed])').forEach(element => {
      element.setAttribute('data-tc-observed', 'true');
      this.revealObserver?.observe(element);
    });
  }

  private revealAllElements(): void {
    this.document.querySelectorAll<HTMLElement>('.tc-reveal').forEach(element => {
      element.classList.add('is-visible');
    });
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    if (isPlatformBrowser(this.platformId)) this.document.body.style.overflow = this.previousBodyOverflow;
  }
}
