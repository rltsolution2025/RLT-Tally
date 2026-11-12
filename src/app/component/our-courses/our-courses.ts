
import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
  ElementRef
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

import AOS from 'aos';
// @ts-ignore CSS is handled by the Angular bundler and has no TypeScript declarations.
import 'aos/dist/aos.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// =========================================
// COURSE INTERFACE
// =========================================

interface Course {
  id: number;
  title: string;
  category: string;
  categoryKey: 'tally' | 'it' | 'emerging';
  description: string;
  duration: string;
  level: string;
  route: string;
  icon: string;
  popular?: boolean;
  featured?: boolean;
  tags: string[];
}

// =========================================
// CATEGORY INTERFACE
// =========================================

interface CourseCategory {
  label: string;
  value: string;
}

// =========================================
// COMPONENT
// =========================================

@Component({
  selector: 'app-our-courses',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './our-courses.html',
  styleUrl: './our-courses.css'
})

export class OurCourses
  implements OnInit, AfterViewInit, OnDestroy {

  // =========================================
  // COMPONENT STATE
  // =========================================

  searchTerm = '';

  activeCategory = 'all';

  isBrowser: boolean;

  private aosRefreshTimer: ReturnType<typeof setTimeout> | null = null;

  private gsapContext: gsap.Context | null = null;

  private gsapMatchMedia: ReturnType<typeof gsap.matchMedia> | null = null;

  // =========================================
  // COURSE CATEGORIES
  // =========================================

  categories: CourseCategory[] = [
    {
      label: 'All Courses',
      value: 'all'
    },
    {
      label: 'Tally & Accounting',
      value: 'tally'
    },
    {
      label: 'IT Industries',
      value: 'it'
    },
    {
      label: 'Emerging Technologies',
      value: 'emerging'
    }
  ];

  // =========================================
  // ALL 23 COURSES
  // =========================================

  courses: Course[] = [

    // TALLY & ACCOUNTING

    {
      id: 1,
      title: 'Tally Essential',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Learn the fundamentals of accounting, business transactions and TallyPrime operations.',
      duration: 'Foundation Training',
      level: 'Beginner',
      route: 'tally-essential',
      icon: 'calculator',
      tags: ['Accounting', 'TallyPrime', 'Business']
    },

    {
      id: 2,
      title: 'TallyPrime',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Develop practical accounting skills using TallyPrime, including company management and financial transactions.',
      duration: 'Professional Training',
      level: 'Beginner',
      route: 'tally-prime',
      icon: 'chart',
      popular: true,
      tags: ['TallyPrime', 'Accounting', 'GST']
    },

    {
      id: 3,
      title: 'Tally Professional',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Advance your accounting knowledge with professional TallyPrime applications and business management.',
      duration: 'Advanced Training',
      level: 'Advanced',
      route: 'tally-professional',
      icon: 'briefcase',
      tags: ['Advanced Accounting', 'Tally', 'Finance']
    },

    {
      id: 4,
      title: 'GST Simulation',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Understand GST processes through practical business transactions, returns and simulation exercises.',
      duration: 'Practical Training',
      level: 'Intermediate',
      route: 'gst-simulation',
      icon: 'file',
      tags: ['GST', 'Taxation', 'Accounting']
    },

    {
      id: 5,
      title: 'Master Accountant',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Build comprehensive accounting and taxation knowledge for professional accounting careers.',
      duration: 'Professional Training',
      level: 'Advanced',
      route: 'master-accountant',
      icon: 'award',
      featured: true,
      tags: ['Accounting', 'Taxation', 'Finance']
    },

    {
      id: 6,
      title: 'Office Automation',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Develop essential computer and office productivity skills for modern workplaces.',
      duration: 'Foundation Training',
      level: 'Beginner',
      route: 'office-automation',
      icon: 'monitor',
      tags: ['MS Office', 'Computer Skills', 'Productivity']
    },

    {
      id: 7,
      title: 'Payroll & Income Tax',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Learn employee payroll processing, salary calculations, income tax and related compliance.',
      duration: 'Professional Training',
      level: 'Intermediate',
      route: 'payroll-and-income-tax',
      icon: 'wallet',
      tags: ['Payroll', 'Income Tax', 'Finance']
    },

    {
      id: 8,
      title: 'TDL Essential',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Explore the fundamentals of Tally Definition Language and customisation in Tally.',
      duration: 'Technical Training',
      level: 'Intermediate',
      route: 'tdl-essential',
      icon: 'code',
      tags: ['TDL', 'Tally Customisation', 'Programming']
    },

    {
      id: 9,
      title: 'Complete Guide to Inventory Management',
      category: 'Tally & Accounting',
      categoryKey: 'tally',
      description: 'Understand stock groups, stock categories, units, godowns and inventory management in TallyPrime.',
      duration: 'Practical Training',
      level: 'Intermediate',
      route: 'complete-guide-to-inventory-management',
      icon: 'boxes',
      tags: ['Inventory', 'Stock Management', 'TallyPrime']
    },

    // IT INDUSTRIES

    {
      id: 10,
      title: 'Artificial Intelligence & Machine Learning',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Explore AI concepts, machine learning algorithms, data processing and intelligent applications.',
      duration: 'Professional Training',
      level: 'Advanced',
      route: 'artificial-intelligence-machine-learning-course',
      icon: 'brain',
      popular: true,
      tags: ['AI', 'Machine Learning', 'Python']
    },

    {
      id: 11,
      title: 'Cloud Computing',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Learn cloud computing concepts, infrastructure, deployment models and cloud technologies.',
      duration: 'Professional Training',
      level: 'Intermediate',
      route: 'cloud-computing-course',
      icon: 'cloud',
      tags: ['Cloud', 'Infrastructure', 'Technology']
    },

    {
      id: 12,
      title: 'Data Science with AI',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Develop data analysis, visualisation and AI-powered problem-solving skills.',
      duration: 'Professional Training',
      level: 'Advanced',
      route: 'data-science-with-ai-course',
      icon: 'database',
      featured: true,
      tags: ['Data Science', 'AI', 'Analytics']
    },

    {
      id: 13,
      title: 'Digital Marketing',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Learn SEO, social media marketing, online advertising and digital marketing strategies.',
      duration: 'Professional Training',
      level: 'Beginner',
      route: 'digital-marketing-course',
      icon: 'megaphone',
      tags: ['SEO', 'Social Media', 'Marketing']
    },

    {
      id: 14,
      title: 'Java Full Stack Developer',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Build full-stack development skills using Java, backend technologies and frontend frameworks.',
      duration: 'Professional Training',
      level: 'Advanced',
      route: 'java-full-stack-developer-course',
      icon: 'code',
      popular: true,
      tags: ['Java', 'Full Stack', 'Development']
    },

    {
      id: 15,
      title: '.NET Full Stack Developer',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Learn full-stack application development using .NET technologies and modern web tools.',
      duration: 'Professional Training',
      level: 'Advanced',
      route: 'dotnet-full-stack-developer-course',
      icon: 'laptop',
      tags: ['.NET', 'C#', 'Full Stack']
    },

    {
      id: 16,
      title: 'Python Full Stack Developer',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Learn Python programming, backend development, frontend technologies and database integration.',
      duration: 'Professional Training',
      level: 'Advanced',
      route: 'python-full-stack-developer-course',
      icon: 'terminal',
      popular: true,
      tags: ['Python', 'Full Stack', 'Programming']
    },

    {
      id: 17,
      title: 'UI / UX Design',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Develop user interface and user experience design skills through practical design projects.',
      duration: 'Professional Training',
      level: 'Beginner',
      route: 'ui-ux-design-course',
      icon: 'palette',
      tags: ['UI Design', 'UX Design', 'Figma']
    },

    {
      id: 18,
      title: 'CCNA Networking',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Understand networking fundamentals, routing, switching and network infrastructure.',
      duration: 'Technical Training',
      level: 'Intermediate',
      route: 'ccna-networking-course',
      icon: 'network',
      tags: ['Networking', 'CCNA', 'Infrastructure']
    },

    {
      id: 19,
      title: 'Power BI & Tableau',
      category: 'IT Industries',
      categoryKey: 'it',
      description: 'Learn business intelligence, data visualisation, dashboards and reporting techniques.',
      duration: 'Professional Training',
      level: 'Intermediate',
      route: 'power-bi-tableau-course',
      icon: 'chart',
      tags: ['Power BI', 'Tableau', 'Data Analytics']
    },

    // EMERGING TECHNOLOGIES

    {
      id: 20,
      title: 'Robotics',
      category: 'Emerging Technologies',
      categoryKey: 'emerging',
      description: 'Explore robotics fundamentals, automation, electronic components and practical robot development.',
      duration: 'Technical Training',
      level: 'Beginner',
      route: 'robitics-course',
      icon: 'bot',
      tags: ['Robotics', 'Automation', 'Electronics']
    },

    {
      id: 21,
      title: 'Internet of Things (IoT)',
      category: 'Emerging Technologies',
      categoryKey: 'emerging',
      description: 'Understand connected devices, sensors, microcontrollers and IoT-based applications.',
      duration: 'Technical Training',
      level: 'Intermediate',
      route: 'internet-of-things-course',
      icon: 'wifi',
      tags: ['IoT', 'Sensors', 'Smart Devices']
    },

    {
      id: 22,
      title: 'Generative AI',
      category: 'Emerging Technologies',
      categoryKey: 'emerging',
      description: 'Explore generative AI concepts, AI tools, prompt engineering and intelligent content creation.',
      duration: 'Professional Training',
      level: 'Beginner',
      route: 'generative-ai-course',
      icon: 'sparkles',
      tags: ['Generative AI', 'Prompt Engineering', 'AI Tools']
    },

    {
      id: 23,
      title: 'Drone Technology',
      category: 'Emerging Technologies',
      categoryKey: 'emerging',
      description: 'Discover drone systems, components, flight fundamentals and practical drone applications.',
      duration: 'Technical Training',
      level: 'Intermediate',
      route: 'drone-technology-course',
      icon: 'drone',
      tags: ['Drones', 'Technology', 'Automation']
    }

  ];

  // =========================================
  // CONSTRUCTOR
  // =========================================

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // =========================================
  // ANGULAR LIFECYCLE
  // =========================================

  ngOnInit(): void {
    // Component initialisation
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.initialiseAOS();
    this.initialiseGSAP();
  }

  ngOnDestroy(): void {
    if (this.aosRefreshTimer !== null) {
      clearTimeout(this.aosRefreshTimer);
      this.aosRefreshTimer = null;
    }

    if (this.gsapMatchMedia) {
      this.gsapMatchMedia.revert();
      this.gsapMatchMedia = null;
    }

    if (this.gsapContext) {
      this.gsapContext.revert();
      this.gsapContext = null;
    }

    if (this.isBrowser) {
      AOS.refreshHard();
    }
  }

  // =========================================
  // INITIALISE AOS
  // =========================================

  private initialiseAOS(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 80,
      delay: 0,
      anchorPlacement: 'top-bottom'
    });

    this.refreshAnimations();
  }

  // =========================================
  // INITIALISE GSAP
  // =========================================

  private initialiseGSAP(): void {
    if (!this.isBrowser) {
      return;
    }

    const host = this.elementRef.nativeElement as HTMLElement;

    this.gsapContext = gsap.context(() => {

      this.gsapMatchMedia = gsap.matchMedia();

      // Respect the user's reduced-motion preference.
      this.gsapMatchMedia.add(
        '(prefers-reduced-motion: no-preference)',
        () => {

          // Floating cards animation.
          // These elements should not also use AOS transforms.
          gsap.to('.tech-floating-card', {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: 0.35
          });

          // Continuous rotation for decorative circles.
          gsap.to('.tech-visual-circle', {
            rotation: 360,
            duration: 30,
            repeat: -1,
            ease: 'none'
          });

          // Hero visual entrance.
          gsap.from('.tech-hero-visual', {
            opacity: 0,
            scale: 0.92,
            duration: 1.1,
            ease: 'power3.out',
            clearProps: 'all'
          });

          // Hero text entrance.
          gsap.from('.tech-hero-content', {
            opacity: 0,
            y: 35,
            duration: 0.9,
            delay: 0.15,
            ease: 'power3.out',
            clearProps: 'all'
          });

          // Scroll-based movement for the CTA visual.
          // Remove this selector if it does not exist in your HTML.
          gsap.from('.courses-cta-visual', {
            y: 45,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.courses-cta-visual',
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          });

        }
      );

    }, host);
  }

  // =========================================
  // REFRESH AOS AND SCROLLTRIGGER
  // =========================================

  private refreshAnimations(): void {
    if (!this.isBrowser) {
      return;
    }

    if (this.aosRefreshTimer !== null) {
      clearTimeout(this.aosRefreshTimer);
    }

    this.aosRefreshTimer = setTimeout(() => {

      AOS.refreshHard();

      ScrollTrigger.refresh();

      this.aosRefreshTimer = null;

    }, 150);
  }

  // =========================================
  // FILTERED COURSES
  // =========================================

  get filteredCourses(): Course[] {

    const search = this.searchTerm.trim().toLowerCase();

    return this.courses.filter(course => {

      const matchesCategory =
        this.activeCategory === 'all' ||
        course.categoryKey === this.activeCategory;

      const searchableContent = [
        course.title,
        course.category,
        course.description,
        course.level,
        course.duration,
        course.route,
        ...course.tags
      ].join(' ').toLowerCase();

      const matchesSearch =
        !search || searchableContent.includes(search);

      return matchesCategory && matchesSearch;

    });
  }

  // =========================================
  // CATEGORY FILTER
  // =========================================

  setCategory(category: string): void {
    this.activeCategory = category;
    this.refreshAnimations();
  }

  // =========================================
  // SEARCH COURSES
  // =========================================

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchTerm = input.value;

    this.refreshAnimations();
  }

  // =========================================
  // CLEAR SEARCH
  // =========================================

  clearSearch(): void {
    this.searchTerm = '';
    this.refreshAnimations();
  }

  // =========================================
  // RESET FILTERS
  // =========================================

  resetFilters(): void {
    this.searchTerm = '';
    this.activeCategory = 'all';

    this.refreshAnimations();
  }

  // =========================================
  // COURSE COUNTS
  // =========================================

  get totalCourses(): number {
    return this.courses.length;
  }

  get tallyCoursesCount(): number {
    return this.getCategoryCount('tally');
  }

  get itCoursesCount(): number {
    return this.getCategoryCount('it');
  }

  get emergingCoursesCount(): number {
    return this.getCategoryCount('emerging');
  }

  // =========================================
  // CATEGORY COUNT
  // =========================================

  getCategoryCount(category: string): number {

    if (category === 'all') {
      return this.totalCourses;
    }

    return this.courses.filter(
      course => course.categoryKey === category
    ).length;
  }

}
