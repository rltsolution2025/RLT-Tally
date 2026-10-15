import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { EnrollComponent } from '../enroll/enroll.component';

@Component({
  selector: 'app-kids-program',
  standalone: true,
  imports: [
    RouterLink, EnrollComponent
  ],
  templateUrl: './kids-program.html',
  styleUrl: './kids-program.css'
})
export class KidsProgram implements OnInit {

  // ==========================================
  // SEO PAGE INFORMATION
  // ==========================================

  readonly pageTitle =
    'Future Tech Program for Kids (Ages 8–15) | RLT Edzaro';

  readonly metaDescription =
    'Explore Robotics, Artificial Intelligence, IoT, Drone Technology, Coding, AI Games and 3D Design at RLT Edzaro’s offline Future Tech Program for kids aged 8–15. Available in Kodambakkam, Madurai and Chengalpattu.';

  readonly canonicalUrl =
    'https://www.rltedzaro.com/future-tech-program-for-kids';

  readonly pageKeywords = [
    'Future Tech Program for Kids',
    'Robotics Classes for Kids',
    'AI Classes for Kids',
    'Coding Classes for Kids',
    'IoT Classes for Kids',
    'Drone Technology for Kids',
    '3D Design and Printing for Kids',
    'Technology Classes for Children',
    'Offline Technology Classes for Kids',
    'RLT Edzaro',
    'Kids Robotics Classes in Chennai',
    'AI Classes for Children in Chennai',
    'Technology Classes in Kodambakkam',
    'Technology Classes in Madurai',
    'Technology Classes in Chengalpattu'
  ].join(', ');

  // ==========================================
  // PROGRAM DETAILS
  // ==========================================

  readonly programName = 'Future Tech Program for Kids';

  readonly organisationName = 'RLT Edzaro';

  readonly associationName =
    'AITRA – Robotics and AI Research Lab';

  readonly ageGroup = '8–15 Years';

  readonly classMode = 'Offline Classes Only';

  readonly nextBatchDate = '20 October 2026';

  readonly centres: string[] = [
    'Kodambakkam',
    'Madurai',
    'Chengalpattu'
  ];

  readonly contactNumbers: string[] = [
    '89255 00513',
    '96006 81581'
  ];

  readonly contactEmail = 'contact@rltedzaro.com';

  readonly websiteUrl = 'https://www.rltedzaro.com';

  // ==========================================
  // TECHNOLOGY PROGRAMS
  // ==========================================

  readonly technologyPrograms = [
    {
      id: 'robotics',
      number: '01',
      name: 'Robotics & Automation',
      icon: 'fa-solid fa-robot',
      description:
        'Explore robot components, motors, sensors, basic electronics, robot control and automation through hands-on activities.',
      topics: [
        'Robot components',
        'Motors and movement',
        'Sensors',
        'Basic electronics',
        'Robot control',
        'Automation concepts',
        'Robot building',
        'Testing and troubleshooting'
      ]
    },
    {
      id: 'iot',
      number: '02',
      name: 'Internet of Things',
      icon: 'fa-solid fa-wifi',
      description:
        'Discover how connected devices collect information, communicate and respond to their surroundings.',
      topics: [
        'Sensors',
        'Controllers',
        'Smart devices',
        'Device communication',
        'Automation',
        'Connected systems',
        'Smart environment concepts',
        'IoT applications'
      ]
    },
    {
      id: 'drone',
      number: '03',
      name: 'Drone Technology',
      icon: 'fa-solid fa-helicopter',
      description:
        'Learn about drone components, flight principles, sensors, flight control, safety and real-world applications.',
      topics: [
        'Drone components',
        'Flight principles',
        'Propellers and motors',
        'Sensors',
        'Flight control',
        'Drone applications',
        'Safety awareness',
        'Practical demonstrations'
      ]
    },
    {
      id: 'generative-ai',
      number: '04',
      name: 'Generative AI',
      icon: 'fa-solid fa-brain',
      description:
        'Explore AI-assisted creativity, text and image generation, idea development and responsible AI usage.',
      topics: [
        'Introduction to Generative AI',
        'AI concepts',
        'AI-assisted creativity',
        'Text generation',
        'Image generation',
        'Idea development',
        'Creative experimentation',
        'Responsible AI usage'
      ]
    },
    {
      id: 'coding',
      number: '05',
      name: 'Coding & Computational Thinking',
      icon: 'fa-solid fa-code',
      description:
        'Discover how logic, sequences, patterns, conditions and algorithms can help solve problems.',
      topics: [
        'Logic',
        'Sequences',
        'Conditions',
        'Patterns',
        'Algorithms',
        'Visual and block-based coding',
        'Problem-solving',
        'Interactive activities'
      ]
    },
    {
      id: 'ai-games',
      number: '06',
      name: 'AI Games & Digital Creation',
      icon: 'fa-solid fa-gamepad',
      description:
        'Explore game concepts, interactive stories, character ideas, game logic, digital design and testing.',
      topics: [
        'Game concepts',
        'Interactive stories',
        'Character ideas',
        'Game logic',
        'AI-assisted creativity',
        'Digital design',
        'Testing',
        'Improvement'
      ]
    },
    {
      id: '3d-design',
      number: '07',
      name: '3D Design & Printing',
      icon: 'fa-solid fa-cubes',
      description:
        'Learn about digital modelling, shapes, structures, prototype development and the 3D printing workflow.',
      topics: [
        '3D design concepts',
        'Digital modelling',
        'Shapes and structures',
        'Design thinking',
        'Prototype development',
        '3D printing workflow',
        'Real-world applications'
      ]
    }
  ];

  // ==========================================
  // SKILLS YOUR CHILD CAN DEVELOP
  // ==========================================

  readonly skills = [
    {
      name: 'Creative Thinking',
      icon: 'fa-solid fa-palette',
      description:
        'Generate ideas and explore different possibilities.'
    },
    {
      name: 'Logical Thinking',
      icon: 'fa-solid fa-brain',
      description:
        'Understand sequences, patterns, systems and instructions.'
    },
    {
      name: 'Problem Solving',
      icon: 'fa-solid fa-puzzle-piece',
      description:
        'Identify problems, test solutions and improve the result.'
    },
    {
      name: 'Design Thinking',
      icon: 'fa-solid fa-pen-ruler',
      description:
        'Develop, test and refine ideas through a structured process.'
    },
    {
      name: 'Technology Awareness',
      icon: 'fa-solid fa-microchip',
      description:
        'Explore technologies used in modern industries.'
    },
    {
      name: 'Collaboration',
      icon: 'fa-solid fa-people-group',
      description:
        'Share ideas and work together to solve challenges.'
    },
    {
      name: 'Communication',
      icon: 'fa-solid fa-comments',
      description:
        'Explain ideas and demonstrate completed projects.'
    },
    {
      name: 'Experimental Mindset',
      icon: 'fa-solid fa-arrows-rotate',
      description:
        'Learn through testing, experimentation and improvement.'
    }
  ];

  // ==========================================
  // LEARNING JOURNEY
  // ==========================================

  readonly learningJourney = [
    {
      number: '01',
      title: 'Explore',
      description: 'Discover new technologies.',
      icon: 'fa-solid fa-binoculars'
    },
    {
      number: '02',
      title: 'Understand',
      description: 'Learn the basic concepts.',
      icon: 'fa-solid fa-book-open'
    },
    {
      number: '03',
      title: 'Experiment',
      description: 'Try different tools and ideas.',
      icon: 'fa-solid fa-flask-vial'
    },
    {
      number: '04',
      title: 'Build',
      description: 'Create guided projects.',
      icon: 'fa-solid fa-hammer'
    },
    {
      number: '05',
      title: 'Solve',
      description: 'Work through challenges.',
      icon: 'fa-solid fa-puzzle-piece'
    },
    {
      number: '06',
      title: 'Create',
      description: 'Develop original ideas.',
      icon: 'fa-solid fa-lightbulb'
    },
    {
      number: '07',
      title: 'Demonstrate',
      description: 'Present what you have built.',
      icon: 'fa-solid fa-display'
    }
  ];

  // ==========================================
  // PROJECT-BASED LEARNING
  // ==========================================

  readonly projects = [
    {
      title: 'Build a Robotic System',
      category: 'Robotics',
      icon: 'fa-solid fa-robot',
      description:
        'Identify robotic components and understand how a simple robot moves or responds.'
    },
    {
      title: 'Explore Smart Devices',
      category: 'Internet of Things',
      icon: 'fa-solid fa-house-signal',
      description:
        'Explore how sensors, controllers and connected devices exchange information.'
    },
    {
      title: 'Create with AI',
      category: 'Generative AI',
      icon: 'fa-solid fa-wand-magic-sparkles',
      description:
        'Develop an idea, generate a digital creation and improve the result.'
    },
    {
      title: 'Create an Interactive Game',
      category: 'Coding',
      icon: 'fa-solid fa-gamepad',
      description:
        'Explore game concepts, instructions, logic, testing and improvement.'
    },
    {
      title: 'Discover Drone Technology',
      category: 'Drones',
      icon: 'fa-solid fa-helicopter',
      description:
        'Understand drone components, flight principles and practical demonstrations.'
    },
    {
      title: 'Design a 3D Model',
      category: '3D Design',
      icon: 'fa-solid fa-cubes',
      description:
        'Explore the process of converting a digital design into a physical object.'
    }
  ];

  // ==========================================
  // REAL-WORLD APPLICATIONS
  // ==========================================

  readonly realWorldApplications = [
    {
      title: 'Robotics',
      icon: 'fa-solid fa-industry',
      description:
        'Manufacturing, healthcare, logistics and automation.'
    },
    {
      title: 'Internet of Things',
      icon: 'fa-solid fa-house-signal',
      description:
        'Smart homes, agriculture, healthcare and industrial systems.'
    },
    {
      title: 'Drone Technology',
      icon: 'fa-solid fa-helicopter',
      description:
        'Agriculture, mapping, inspection, photography and emergency applications.'
    },
    {
      title: 'Artificial Intelligence',
      icon: 'fa-solid fa-brain',
      description:
        'Education, entertainment, healthcare, design and software.'
    },
    {
      title: '3D Printing',
      icon: 'fa-solid fa-cubes',
      description:
        'Product development, engineering, healthcare and prototyping.'
    },
    {
      title: 'Coding',
      icon: 'fa-solid fa-laptop-code',
      description:
        'Software, applications, games, automation and digital systems.'
    }
  ];

  // ==========================================
  // FREQUENTLY ASKED QUESTIONS
  // ==========================================

  readonly faqs = [
    {
      question: 'What is the age group for this program?',
      answer:
        'The Future Tech Program is designed for children aged 8–15 years.'
    },
    {
      question: 'Are classes conducted online?',
      answer:
        'No. The program is offered as offline, in-person classes only.'
    },
    {
      question: 'Does a child need advanced technical knowledge?',
      answer:
        'No advanced technical knowledge is required. Children can begin with foundational concepts and progress towards practical activities.'
    },
    {
      question: 'Which technologies can children explore?',
      answer:
        'Children can explore Robotics, IoT, Drone Technology, Generative AI, Coding, AI Games, Digital Creation, and 3D Design and Printing.'
    },
    {
      question: 'Where are the available centres?',
      answer:
        'The listed centres are Kodambakkam, Madurai and Chengalpattu. Contact RLT Edzaro to enquire about enrollment.'
    },
    {
      question: 'When does the next batch start?',
      answer:
        'The advertised next batch start date is 20 October 2026. Contact RLT Edzaro to confirm batch availability.'
    }
  ];

  // ==========================================
  // CONSTRUCTOR
  // ==========================================

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT)
    private readonly document: Document
  ) { }

  // ==========================================
  // INITIALISE COMPONENT AND SEO
  // ==========================================

  ngOnInit(): void {
    this.setPageTitle();
    this.setMetaTags();
    this.setCanonicalUrl();
    this.setSocialSharingTags();
  }

  // ==========================================
  // PAGE TITLE
  // ==========================================

  private setPageTitle(): void {
    this.titleService.setTitle(this.pageTitle);
  }

  // ==========================================
  // META DESCRIPTION AND KEYWORDS
  // ==========================================

  private setMetaTags(): void {
    this.metaService.updateTag({
      name: 'description',
      content: this.metaDescription
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: this.pageKeywords
    });

    this.metaService.updateTag({
      name: 'author',
      content: this.organisationName
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large'
    });

    this.metaService.updateTag({
      name: 'theme-color',
      content: '#071b49'
    });
  }

  // ==========================================
  // CANONICAL URL
  // ==========================================

  private setCanonicalUrl(): void {
    const head = this.document.head;

    let canonicalLink =
      head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');

      canonicalLink.setAttribute('rel', 'canonical');

      head.appendChild(canonicalLink);
    }

    canonicalLink.href = this.canonicalUrl;
  }

  // ==========================================
  // OPEN GRAPH AND SOCIAL SHARING
  // ==========================================

  private setSocialSharingTags(): void {
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: this.organisationName
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
      content: this.canonicalUrl
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary'
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: this.pageTitle
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: this.metaDescription
    });
  }

}