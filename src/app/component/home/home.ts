
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Contact,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {

  // =====================================================
  // CONTACT POPUP STATE
  // =====================================================

  showContactPopup = false;

  private previousBodyOverflow = '';
  private bodyScrollLocked = false;
  // =====================================================
  // PARTNERSHIP SECTION REFERENCES
  // =====================================================

  @ViewChild('partnershipSection')
  partnershipSection?: ElementRef<HTMLElement>;

  private partnershipObserver: IntersectionObserver | null = null;

  // =====================================================
  // CERTIFICATE SECTION REFERENCES
  // =====================================================

  @ViewChild('certificateSection')
  certificateSection?: ElementRef<HTMLElement>;

  private certificateObserver: IntersectionObserver | null = null;
  // =====================================================
  // SMOOTH SCROLLING
  // =====================================================
  // =====================================================
  // PARTNERSHIP SCROLL REVEAL ANIMATION
  // =====================================================

  private initPartnershipReveal(): void {

    const section = this.partnershipSection?.nativeElement;

    if (!section) {
      return;
    }

    const revealItems =
      section.querySelectorAll<HTMLElement>(
        '[data-partnership-reveal]'
      );

    // Check accessibility preference.
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Keep content visible when reduced motion is enabled.
    if (
      reducedMotion ||
      typeof IntersectionObserver === 'undefined'
    ) {
      revealItems.forEach(item => {
        item.classList.add('is-visible');
      });

      return;
    }

    // Activate the reveal CSS.
    section.classList.add('is-enhanced');

    this.partnershipObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add('is-visible');

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px'
      }
    );

    revealItems.forEach(item => {
      this.partnershipObserver?.observe(item);
    });

  }
  scrollToSection(sectionId: string, event?: Event): void {
    event?.preventDefault();

    const target = document.getElementById(sectionId);

    if (!target) {
      console.warn(`[Home] Section not found: #${sectionId}`);
      return;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    target.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }

  // =====================================================
  // OPEN CONTACT POPUP
  // =====================================================

  openContactPopup(event?: Event): void {
    event?.preventDefault();

    if (this.showContactPopup) {
      return;
    }

    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    this.bodyScrollLocked = true;
    this.showContactPopup = true;
  }

  // =====================================================
  // CLOSE CONTACT POPUP
  // =====================================================

  closeContactPopup(): void {
    if (!this.showContactPopup) {
      return;
    }

    this.showContactPopup = false;
    this.restoreBodyScroll();
  }

  // =====================================================
  // CLOSE POPUP WITH ESCAPE KEY
  // HostListener MUST come from @angular/core.
  // =====================================================

  @HostListener('document:keydown.escape')
  onContactPopupEscape(): void {
    if (this.showContactPopup) {
      this.closeContactPopup();
    }
  }

  // =====================================================
  // RESTORE PAGE SCROLLING
  // =====================================================

  private restoreBodyScroll(): void {
    if (!this.bodyScrollLocked) {
      return;
    }

    document.body.style.overflow = this.previousBodyOverflow;
    this.bodyScrollLocked = false;
  }

  // =====================================================
  // CERTIFICATE SECTION SCROLL REVEAL ANIMATION
  // =====================================================

  ngAfterViewInit(): void {
    const section = this.certificateSection?.nativeElement;

    if (!section) {
      return;
    }

    const revealItems = section.querySelectorAll<HTMLElement>(
      '.certificate-reveal'
    );

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (
      reducedMotion ||
      typeof IntersectionObserver === 'undefined'
    ) {
      revealItems.forEach(item => {
        item.classList.add('is-visible');
      });

      return;
    }

    section.classList.add('is-enhanced');

    this.certificateObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealItems.forEach(item => {
      this.certificateObserver?.observe(item);
    });
  }

  // =====================================================
  // COMPONENT CLEANUP
  // =====================================================

  ngOnDestroy(): void {
    this.restoreBodyScroll();
    this.certificateObserver?.disconnect();
  }


  // =====================================================
  // FREQUENTLY ASKED QUESTIONS (FAQ) SECTION
  // =====================================================

  activeFaqIndex: number | null = 0;

  faqItems = [
    {
      question: 'What courses are offered by RLT Edzaro?',
      answer:
        'RLT Edzaro offers professional training programmes in areas such as TallyPrime and accounting, software development, data analytics, digital marketing and emerging technologies. Contact our team for the latest course list and batch details.'
    },
    {
      question: 'Are the courses suitable for beginners?',
      answer:
        'Yes. Many programmes are designed to introduce learners to the fundamentals before moving into practical exercises. Course prerequisites may vary, so please check the requirements for your chosen programme.'
    },
    {
      question: 'Do students get practical training?',
      answer:
        'Our learning approach includes practical exercises, guided activities and project-based learning wherever applicable to the selected course.'
    },
    {
      question: 'Is the Tally course conducted by an authorised partner?',
      answer:
        'RLT Edzaro is an authorised partner of Tally Education. The available Tally course levels and certificate details depend on the programme you enrol in.'
    },
    {
      question: 'Will I receive a certificate after completing the course?',
      answer:
        'Certificate eligibility depends on the selected programme and its completion or assessment requirements. Our team can explain the applicable certificate details before you enrol.'
    },
    {
      question: 'Are both online and classroom learning options available?',
      answer:
        'Learning mode may vary by course and batch. Contact RLT Edzaro to confirm the available online and classroom options for your preferred programme.'
    },
    {
      question: 'How can I enquire about fees and the next batch?',
      answer:
        'Use the Enquire Now or Contact section on this page to share your details. Our team can provide the current course fee, schedule, duration and upcoming batch information.'
    }
  ];

  toggleFaq(index: number): void {
    this.activeFaqIndex =
      this.activeFaqIndex === index ? null : index;
  }

  learningFeatures: {
    title: string;
    description: string;
    iconPaths: string[];
  }[] = [

      {
        title: 'Live Projects',
        description: 'and Case Studies',
        iconPaths: [
          'M3 4h18v12H3z',
          'M8 20h8',
          'M12 16v4',
          'm9 10 2 2 4-4'
        ]
      },

      {
        title: 'Industry-Relevant',
        description: 'Curriculum',
        iconPaths: [
          'M4 5.5A2.5 2.5 0 0 1 6.5 3H12v17H6.5A2.5 2.5 0 0 0 4 22z',
          'M20 5.5A2.5 2.5 0 0 0 17.5 3H12v17h5.5A2.5 2.5 0 0 1 20 22z',
          'M7 7h2',
          'M15 7h2',
          'M7 11h2',
          'M15 11h2'
        ]
      },

      {
        title: 'Small Batch Size',
        description: 'for Better Learning',
        iconPaths: [
          'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
          'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
          'M22 21v-2a4 4 0 0 0-3-3.87',
          'M16 3.13a4 4 0 0 1 0 7.75'
        ]
      },

      {
        title: 'Online & Offline Classes',
        description: 'Flexible Learning Options',
        iconPaths: [
          'M3 4h18v13H3z',
          'M8 21h8',
          'M12 17v4',
          'M8 10l3 3 5-5'
        ]
      },

      {
        title: 'Continuous Support',
        description: 'even after Course Completion',
        iconPaths: [
          'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z',
          'm9 12 2 2 4-4'
        ]
      }

    ];

  /* =========================================================
     STUDENT SUCCESS STORIES
  ========================================================= */


  /* =========================================================
     STUDENT LEARNING JOURNEYS
  ========================================================= */

  @ViewChild('studentSuccessTrack')
  studentSuccessTrack?: ElementRef<HTMLDivElement>;


  /* =========================================================
     CAROUSEL STATE
  ========================================================= */

  canMovePrev = false;
  canMoveNext = true;

  activeStudentStory = 1;

  studentStoriesProgress = 0;


  /* =========================================================
     STUDENT JOURNEY CONTENT
  ========================================================= */

  studentSuccessStories = [

    {
      id: 1,
      number: '01',

      program: 'SOFTWARE DEVELOPMENT',
      category: 'TECHNICAL SKILLS',

      title: 'Building Practical Development Skills',

      description:
        'Explore programming concepts, apply them through projects and develop confidence with hands-on practice.',

      image:
        '/Home-page/testimonials/student-01.jpg',

      imageAlt:
        'Student learning software development'
    },

    {
      id: 2,
      number: '02',

      program: 'ACCOUNTING & FINANCE',
      category: 'PROFESSIONAL SKILLS',

      title: 'Developing Accounting Knowledge',

      description:
        'Build practical knowledge of accounting workflows, TallyPrime concepts and GST fundamentals.',

      image:
        '/Home-page/testimonials/student-02.jpg',

      imageAlt:
        'Student learning accounting and finance'
    },

    {
      id: 3,
      number: '03',

      program: 'DATA ANALYTICS',
      category: 'EMERGING TECHNOLOGY',

      title: 'Turning Data Into Meaningful Insights',

      description:
        'Strengthen analytical thinking through data handling, visualisation and practical exercises.',

      image:
        '/Home-page/testimonials/student-03.jpg',

      imageAlt:
        'Student exploring data analytics'
    },

    {
      id: 4,
      number: '04',

      program: 'STUDENT EXPERIENCE',
      category: 'LEARNING ENVIRONMENT',

      title: 'Growing Through Guided Learning',

      description:
        'Develop your skills through trainer guidance, structured practice and a collaborative learning environment.',

      image:
        '/Home-page/testimonials/student-04.jpg',

      imageAlt:
        'Student learning in a collaborative environment'
    }

  ];


  /* =========================================================
     MOVE CAROUSEL
  ========================================================= */

  moveStudentStories(direction: number): void {

    const track = this.studentSuccessTrack?.nativeElement;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>(
      '.student-success-card'
    );

    if (!firstCard) {
      return;
    }

    const styles = window.getComputedStyle(track);

    const gap =
      parseFloat(styles.columnGap || styles.gap || '0') || 0;

    const cardWidth = firstCard.getBoundingClientRect().width;

    const movement = cardWidth + gap;

    track.scrollBy({
      left: movement * direction,
      behavior: 'smooth'
    });

  }


  /* =========================================================
     UPDATE CAROUSEL POSITION AND PROGRESS
  ========================================================= */

  onStudentStoriesScroll(): void {

    const track = this.studentSuccessTrack?.nativeElement;

    if (!track) {
      return;
    }

    const cards = track.querySelectorAll<HTMLElement>(
      '.student-success-card'
    );

    const totalStories = cards.length;

    if (totalStories === 0) {
      return;
    }

    const styles = window.getComputedStyle(track);

    const gap =
      parseFloat(styles.columnGap || styles.gap || '0') || 0;

    const cardWidth = cards[0].getBoundingClientRect().width;

    const movement = cardWidth + gap;

    if (movement <= 0) {
      return;
    }

    const maxScroll = Math.max(
      0,
      track.scrollWidth - track.clientWidth
    );

    /* Previous and next button states */

    this.canMovePrev = track.scrollLeft > 2;

    this.canMoveNext =
      track.scrollLeft < maxScroll - 2;

    /* Active visible starting card */

    const currentIndex = Math.round(
      track.scrollLeft / movement
    );

    this.activeStudentStory = Math.min(
      totalStories,
      Math.max(1, currentIndex + 1)
    );

    /* Progress bar percentage */

    if (totalStories > 1) {

      this.studentStoriesProgress =
        ((this.activeStudentStory - 1) / (totalStories - 1)) * 100;

    } else {

      this.studentStoriesProgress = 100;

    }

  }

  /* =========================================================
     RLT EDZARO | LATEST ARTICLES
  ========================================================= */

  @ViewChild('latestArticlesTrack')
  latestArticlesTrack?: ElementRef<HTMLDivElement>;


  /* =========================================================
     CAROUSEL STATE
  ========================================================= */

  canMoveArticlesPrev = false;
  canMoveArticlesNext = true;

  activeArticleIndex = 1;

  latestArticlesProgress = 0;


  /* Display the active article number */

  get activeArticleIndexText(): string {
    return String(this.activeArticleIndex).padStart(2, '0');
  }


  /* =========================================================
     BLOG ARTICLE DATA
     Routes based on your Angular routing configuration
  ========================================================= */

  latestArticles = [

    {
      id: 1,
      number: '01',

      category: 'Accounting',
      categoryStyle: 'tally',

      title: 'TallyPrime vs Excel for Accounting',

      description:
        'Explore the differences between TallyPrime and Excel, their features and how they support everyday accounting activities.',

      readTime: '12 min read',

      image:
        'blogs-image/How-to-Export-TallyPrime-Reports-to-Excel-and-PDF.png',

      imageAlt:
        'Accounting professional using digital accounting software',

      route: '/tallyprime-vs-excel-for-accounting'
    },


    {
      id: 2,
      number: '02',

      category: 'Career Guide',
      categoryStyle: 'career',

      title: 'Tally Accountant Salary in India',

      description:
        'Understand accountant salary factors, required skills, professional experience and career opportunities in India.',

      readTime: '6 min read',

      image:
        '/blogs-image/Tally Accountant Salary in India.png',

      imageAlt:
        'Accounting professional working in an office',

      route: '/tally-accountant-salary-in-india'
    },


    {
      id: 3,
      number: '03',

      category: 'Career Guide',
      categoryStyle: 'career',

      title: 'Jobs After Learning Tally',

      description:
        'Explore job roles and career opportunities available to learners with practical TallyPrime and accounting knowledge.',

      readTime: '6 min read',

      image:
        '/blogs-image/Jobs After Learning Tally.png',

      imageAlt:
        'Professional working in an accounting department',

      route: '/jobs-after-learning-tally'
    },


    {
      id: 4,
      number: '04',

      category: 'Course Guide',
      categoryStyle: 'course',

      title: 'Tally Course After 12th',

      description:
        'Discover how students can begin learning accounting, understand TallyPrime and prepare for entry-level opportunities.',

      readTime: '7 min read',

      image:
        '/blogs-image/tally after 12.png',

      imageAlt:
        'Students learning professional accounting skills',

      route: '/tally-course-after-12th'
    },


    {
      id: 5,
      number: '05',

      category: 'Course Guide',
      categoryStyle: 'course',

      title: 'Tally Course Fees, Duration and Syllabus',

      description:
        'Understand the important aspects of a Tally course, including course fees, learning duration, syllabus and career scope.',

      readTime: '7 min read',

      image:
        '/blogs-image/Tally Course.png',

      imageAlt:
        'Professional accounting training session',

      route: '/tally-course-fees-duration-syllabus-career'
    },


    {
      id: 6,
      number: '06',

      category: 'Beginner Guide',
      categoryStyle: 'beginner',

      title: 'Learn Tally Without Accounting Knowledge',

      description:
        'Explore beginner-friendly concepts that introduce accounting fundamentals and help new learners approach TallyPrime.',

      readTime: '6 min read',

      image:
        '/blogs-image/Can You Learn Tally Without Knowing.png',

      imageAlt:
        'Beginner learning accounting on a computer',

      route: '/learn-tally-without-accounting-knowledge'
    },


    {
      id: 7,
      number: '07',

      category: 'Tally & GST',
      categoryStyle: 'tally',

      title: 'Tally With GST Training: What Will You Learn?',

      description:
        'Explore the accounting and GST topics covered in training, including practical workflows and transaction concepts.',

      readTime: '12 min read',

      image:
        '/blogs-image/Tally-with-GST-Training.png',

      imageAlt:
        'GST and accounting training on a computer',

      route: '/tally-with-gst-training-what-will-you-learn'
    },


    {
      id: 8,
      number: '08',

      category: 'Practical Guide',
      categoryStyle: 'beginner',

      title: 'TallyPrime Accounting Entries Beginners Should Practise',

      description:
        'Learn about common accounting entries that beginners can practise to improve their understanding of TallyPrime.',

      readTime: '6 min read',

      image:
        '/blogs-image/TallyPrime-Accounting-Entries.png',

      imageAlt:
        'Accounting learner practising entries in TallyPrime',

      route: '/tallyprime-accounting-entries-beginners-should-practice'
    }

  ];


  /* =========================================================
     MOVE ARTICLE CAROUSEL
  ========================================================= */

  moveLatestArticles(direction: number): void {

    const track = this.latestArticlesTrack?.nativeElement;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>(
      '.knowledge-card'
    );

    if (!firstCard) {
      return;
    }

    const styles = window.getComputedStyle(track);

    const gap =
      parseFloat(styles.columnGap || styles.gap || '0') || 0;

    const cardWidth =
      firstCard.getBoundingClientRect().width;

    const movement = cardWidth + gap;

    track.scrollBy({
      left: movement * direction,
      behavior: 'smooth'
    });

  }


  /* =========================================================
     UPDATE ARTICLE CAROUSEL STATE
  ========================================================= */

  onLatestArticlesScroll(): void {

    const track = this.latestArticlesTrack?.nativeElement;

    if (!track) {
      return;
    }

    const cards = track.querySelectorAll<HTMLElement>(
      '.knowledge-card'
    );

    const totalArticles = cards.length;

    if (totalArticles === 0) {
      return;
    }

    const styles = window.getComputedStyle(track);

    const gap =
      parseFloat(styles.columnGap || styles.gap || '0') || 0;

    const cardWidth =
      cards[0].getBoundingClientRect().width;

    const movement = cardWidth + gap;

    const maxScroll = Math.max(
      0,
      track.scrollWidth - track.clientWidth
    );

    if (movement <= 0) {
      return;
    }

    /* Navigation button states */

    this.canMoveArticlesPrev = track.scrollLeft > 2;

    this.canMoveArticlesNext =
      track.scrollLeft < maxScroll - 2;

    /* Active article position */

    const currentIndex = Math.round(
      track.scrollLeft / movement
    );

    this.activeArticleIndex = Math.min(
      totalArticles,
      Math.max(1, currentIndex + 1)
    );

    /* Carousel progress */

    this.latestArticlesProgress = maxScroll > 0
      ? Math.min(
        100,
        Math.max(0, (track.scrollLeft / maxScroll) * 100)
      )
      : 100;

  }


  /* =========================================================
     RLT EDZARO | CAREER PATHWAY ROADMAP
  ========================================================= */


  /* =========================================================
     01. CAREER DOMAINS
  ========================================================= */

  careerDomains: string[] = [
    'Software Development',
    'Accounting & Finance',
    'Data Analytics',
    'Digital Marketing',
    'Emerging Technologies'
  ];


  /* =========================================================
     02. ACTIVE ROADMAP STATE
  ========================================================= */

  activeCareerRoadmapStep = 0;

  isCareerRoadmapPlaying = true;

  /*
    Progress percentage:
    0 = First stage
    83.34 = Final stage
  
    The CSS timeline starts at 8.33% and ends at 91.67%.
  */

  careerRoadmapProgress = 0;


  /* =========================================================
     03. AUTO SLIDER CONFIGURATION
  ========================================================= */

  private careerRoadmapTimer: ReturnType<typeof setInterval> | null = null;

  private readonly careerRoadmapInterval = 5000;


  /* =========================================================
     04. CAREER ROADMAP DATA
  ========================================================= */

  careerRoadmapSteps = [

    /* -------------------------------------------------------
       STEP 01: DISCOVER
    ------------------------------------------------------- */

    {
      number: '01',

      phase: 'PHASE 01',

      title: 'Discover',

      summary: 'Identify your interests',

      detailTitle: 'Discover Your Career Direction',

      description:
        'Start by understanding your interests, strengths and career goals. Explore different professional domains and identify the learning direction that matches your ambitions.',

      activities: [
        'Identify your interests and strengths',
        'Explore different career domains',
        'Understand available job roles',
        'Set your initial career goals'
      ],

      skills: [
        'Self-awareness',
        'Goal Setting',
        'Career Exploration',
        'Decision Making'
      ],

      outcome:
        'A clearer understanding of your interests and a focused direction for your learning journey.'
    },


    /* -------------------------------------------------------
       STEP 02: CHOOSE
    ------------------------------------------------------- */

    {
      number: '02',

      phase: 'PHASE 02',

      title: 'Choose',

      summary: 'Select your learning path',

      detailTitle: 'Choose the Right Learning Path',

      description:
        'Select a suitable training programme based on your career interests. Understand the course structure, learning requirements and skills needed for your chosen domain.',

      activities: [
        'Explore relevant training programmes',
        'Select your preferred domain',
        'Understand course objectives',
        'Create a personal learning plan'
      ],

      skills: [
        'Planning',
        'Career Direction',
        'Learning Strategy',
        'Time Management'
      ],

      outcome:
        'A defined learning path with clear course objectives and a structured plan for skill development.'
    },


    /* -------------------------------------------------------
       STEP 03: LEARN
    ------------------------------------------------------- */

    {
      number: '03',

      phase: 'PHASE 03',

      title: 'Learn',

      summary: 'Build your core knowledge',

      detailTitle: 'Build Strong Technical Foundations',

      description:
        'Develop the foundational knowledge and practical understanding required in your selected field through structured training and guided learning.',

      activities: [
        'Understand core concepts and fundamentals',
        'Learn relevant tools and technologies',
        'Attend guided training sessions',
        'Complete regular practical exercises'
      ],

      skills: [
        'Technical Knowledge',
        'Problem Solving',
        'Tool Proficiency',
        'Conceptual Understanding'
      ],

      outcome:
        'A strong foundation in the concepts, tools and technologies relevant to your selected career domain.'
    },


    /* -------------------------------------------------------
       STEP 04: PRACTISE
    ------------------------------------------------------- */

    {
      number: '04',

      phase: 'PHASE 04',

      title: 'Practise',

      summary: 'Apply skills through projects',

      detailTitle: 'Turn Knowledge Into Practical Experience',

      description:
        'Apply what you learn through assignments, practical exercises, case studies and project-based activities that help strengthen your understanding.',

      activities: [
        'Work on practical assignments',
        'Complete guided projects and case studies',
        'Solve domain-related problems',
        'Review and improve your work'
      ],

      skills: [
        'Practical Application',
        'Critical Thinking',
        'Project Execution',
        'Problem Solving'
      ],

      outcome:
        'Practical work samples and stronger confidence in applying your skills to real-world tasks.'
    },


    /* -------------------------------------------------------
       STEP 05: DEMONSTRATE
    ------------------------------------------------------- */

    {
      number: '05',

      phase: 'PHASE 05',

      title: 'Demonstrate',

      summary: 'Showcase your abilities',

      detailTitle: 'Demonstrate Your Professional Skills',

      description:
        'Organise your completed projects, review your learning progress and prepare evidence that demonstrates your knowledge and practical abilities.',

      activities: [
        'Build a portfolio of selected projects',
        'Review practical assignments',
        'Prepare project explanations',
        'Complete relevant course assessments'
      ],

      skills: [
        'Portfolio Development',
        'Presentation',
        'Communication',
        'Professional Confidence'
      ],

      outcome:
        'A collection of projects and practical work that helps demonstrate your learning and developing abilities.'
    },


    /* -------------------------------------------------------
       STEP 06: PREPARE & PROGRESS
    ------------------------------------------------------- */

    {
      number: '06',

      phase: 'PHASE 06',

      title: 'Prepare & Progress',

      summary: 'Get ready for opportunities',

      detailTitle: 'Prepare for Your Career Opportunities',

      description:
        'Prepare for the professional world by improving your resume, practising interview communication and exploring suitable internships and job opportunities.',

      activities: [
        'Create or improve your professional resume',
        'Practise interview questions',
        'Improve workplace communication',
        'Explore relevant job opportunities'
      ],

      skills: [
        'Resume Preparation',
        'Interview Skills',
        'Communication',
        'Career Readiness'
      ],

      outcome:
        'A more structured approach to job applications, interviews and pursuing suitable career opportunities.'
    }

  ];


  /* =========================================================
     05. UPDATE ROADMAP PROGRESS
  ========================================================= */

  updateCareerRoadmapProgress(): void {

    const totalSteps = this.careerRoadmapSteps.length;

    if (totalSteps <= 1) {

      this.careerRoadmapProgress = 0;

      return;

    }

    const progressRatio =
      this.activeCareerRoadmapStep / (totalSteps - 1);

    /*
      Maximum width is 83.34%.
      This aligns the progress line with the
      first and last roadmap markers.
    */

    this.careerRoadmapProgress = progressRatio * 83.34;

  }


  /* =========================================================
     06. SELECT A ROADMAP STAGE
  ========================================================= */

  selectCareerRoadmapStep(index: number): void {

    if (
      index < 0 ||
      index >= this.careerRoadmapSteps.length
    ) {

      return;

    }

    this.activeCareerRoadmapStep = index;

    this.updateCareerRoadmapProgress();

    /*
      Reset the automatic slider after manual selection.
    */

    if (this.isCareerRoadmapPlaying) {

      this.startCareerRoadmapAutoplay();

    }

  }


  /* =========================================================
     07. PREVIOUS / NEXT NAVIGATION
  ========================================================= */

  moveCareerRoadmapStep(direction: number): void {

    const nextIndex =
      this.activeCareerRoadmapStep + direction;

    if (
      nextIndex < 0 ||
      nextIndex >= this.careerRoadmapSteps.length
    ) {

      return;

    }

    this.selectCareerRoadmapStep(nextIndex);

  }


  /* =========================================================
     08. START AUTOMATIC SLIDER
  ========================================================= */

  startCareerRoadmapAutoplay(): void {

    /*
      Clear an existing timer before starting another.
    */

    this.stopCareerRoadmapAutoplay();


    /*
      Do not start if autoplay is disabled.
    */

    if (
      !this.isCareerRoadmapPlaying ||
      this.careerRoadmapSteps.length <= 1
    ) {

      return;

    }


    /*
      Automatically move to the next stage every 5 seconds.
    */

    this.careerRoadmapTimer = setInterval(() => {

      const totalSteps =
        this.careerRoadmapSteps.length;

      /*
        Move forward.
        At the last step, return to the first step.
      */

      this.activeCareerRoadmapStep =
        (this.activeCareerRoadmapStep + 1) % totalSteps;

      this.updateCareerRoadmapProgress();

    }, this.careerRoadmapInterval);

  }


  /* =========================================================
     09. STOP AUTOMATIC SLIDER
  ========================================================= */

  stopCareerRoadmapAutoplay(): void {

    if (this.careerRoadmapTimer !== null) {

      clearInterval(this.careerRoadmapTimer);

      this.careerRoadmapTimer = null;

    }

  }


  /* =========================================================
     10. PLAY / PAUSE AUTOMATIC SLIDER
  ========================================================= */

  toggleCareerRoadmapAutoplay(): void {

    this.isCareerRoadmapPlaying =
      !this.isCareerRoadmapPlaying;

    if (this.isCareerRoadmapPlaying) {

      this.startCareerRoadmapAutoplay();

    } else {

      this.stopCareerRoadmapAutoplay();

    }
  }
}


/* constructor(private route: ActivatedRoute) { }
   
   ngAfterViewInit(): void {
 
   
     this.route.fragment.subscribe(fragment => {
       if (fragment) {
         setTimeout(() => {
           const element = document.getElementById(fragment);
 
           if (element) {
             element.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
             });
           }
         }, 100);
       }
     });
 
 
 
     const carouselElement = document.getElementById('homeCarousel');
 
     if (carouselElement) {
 
       new Carousel(carouselElement, {
         interval: 4000,
         ride: 'carousel',
         pause: false,
         wrap: true,
         touch: true,
         keyboard: true
       });
 
     }
 
     const observer = new IntersectionObserver(
       entries => {
 
         entries.forEach(entry => {
 
           if (entry.isIntersecting) {
 
             entry.target.classList.add('active');
 
             observer.unobserve(entry.target);
 
           }
 
         });
 
       },
       {
         threshold: 0.2
       }
     );
 
 
     document.querySelectorAll(
       '.reveal, .reveal-up, .reveal-fade, .reveal-right, .reveal-zoom'
     ).forEach(element => {
       observer.observe(element);
     });
 
   }
   
   categories = [
     'All',
     'Popular Programs',
     'Add-On Programs',
     'Premium Programs',
   ];
 
   activeCategory = 'All';
 
   programs = [
     {
       image: 'Program-Image/Tally-Essential.jpg',
       name: 'Tally Essentials – Tally Foundation Program',
       description: 'Master accounting fundamentals and essential Tally skills for managing business transactions, ledgers, vouchers, and reports.',
       category: 'Popular Programs',
       link: '/tally-essential'
     },
     {
       image: 'Program-Image/Tally-professional.jpg',
       name: 'Tally Professional - Industry Accounting Skills',
       description: 'Become a professional accountant by mastering Tally with GST, payroll, inventory management, and financial reporting.',
       category: 'Popular Programs',
       link: '/tally-professional'
     },
     {
       image: 'Program-Image/Tally-Prime.jpg',
       name: 'TallyPrime – Complete ERP Accounting Solution',
       description: 'Learn Tally Prime / Tally ERP to efficiently manage accounting, inventory, vouchers, and financial reports for businesses.',
       category: 'Popular Programs',
       link: '/tally-prime'
     },
     {
       image: 'Program-Image/GST-Simulation.jpg',
       name: 'GST Simulation – Real-Time GST Practice',
       description: 'Become a professional accountant by mastering Tally with GST, payroll, inventory management, and financial reporting.',
       category: 'Add-On Programs',
       link: '/gst-simulation'
     },
     {
       image: 'Program-Image/Office-Automation.jpg',
       name: 'Office Automation – Workplace Computer Skills',
       description: 'Master MS Office tools including Word, Excel, and PowerPoint to handle everyday office tasks efficiently and professionally for business',
       category: 'Add-On Programs',
       link: '/office-automation'
     },
     {
       image: 'Program-Image/Payroll-&-Income-Tax.jpg',
       name: 'Payroll & Income Tax – Tax & Salary Management',
       description: 'Learn payroll processing, salary management, and income tax calculation for efficient employee and tax management.',
       category: 'Add-On Programs',
       link: '/payroll-and-income-tax'
     },
     {
       image: 'Program-Image/Master-Accountant.png',
       name: 'Master Accountant – Advanced Tally Program',
       description: 'Master accounting with Tally, covering GST, payroll, taxation, and financial management for business operations.',
       category: 'Premium Programs',
       link: '/master-accountant'
     }
   ];
 
   get filteredPrograms() {
     return this.activeCategory === 'All'
       ? this.programs
       : this.programs.filter(p => p.category === this.activeCategory);
   }
 
   selectCategory(category: string) {
     this.activeCategory = category;
   }
 */
