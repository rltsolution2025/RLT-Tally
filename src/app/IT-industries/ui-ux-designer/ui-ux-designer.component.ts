import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  selector: 'app-ui-ux-designer',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './ui-ux-designer.component.html',
  styleUrl: './ui-ux-designer.component.css',
})
export class UiUxDesignerComponent implements AfterViewInit {
  constructor(private router: Router) {}
  goThankYou() {
    this.router.navigate(['/thank-you']);
  }

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

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCounter();

          observer.disconnect();
        }
      });
    });

    observer.observe(this.careerStats.nativeElement);
  }

  startCounter() {
    this.counters.forEach((counter) => {
      const speed = 25;

      const update = () => {
        if (counter.value < counter.target) {
          counter.value += Math.ceil(counter.target / speed);

          if (counter.value > counter.target) {
            counter.value = counter.target;
          }

          requestAnimationFrame(update);
        }
      };

      update();
    });
  }

  modalTitle = 'Enroll for the course';

  openEnrollModal() {
    this.modalTitle = 'Enroll for the course';
  }

  openSyllabusModal() {
    this.modalTitle = 'Download Course Syllabus';
  }

  overallRating = 4.9;

  totalReviews = 250;
  testimonials: Testimonial[] = [
    {
      initials: 'SK',
      name: 'Suresh Kumar',
      course: 'UI & UX Design Student',
      review:
        'The UI & UX Design course was very practical. I learned UX research, user personas, wireframing, Figma, UI design, and interactive prototyping through real-world projects. The mentors explained every concept clearly and guided us throughout the design process.',
      date: '2 weeks ago',
    },

    {
      initials: 'VN',
      name: 'Vignesh N',
      course: 'Figma UI Design Student',
      review:
        'The Figma training was excellent and completely hands-on. I learned Auto Layout, components, variants, typography, color systems, responsive layouts, and interactive prototypes. The practical design assignments helped me improve my confidence in creating professional interfaces.',
      date: '1 month ago',
    },

    {
      initials: 'DP',
      name: 'Dinesh Prabhu',
      course: 'UX Design Student',
      review:
        'The UX research modules were very useful. I learned user interviews, personas, empathy maps, customer journey mapping, information architecture, user flows, and usability testing. Working on real case studies helped me understand how professional UX design works.',
      date: '3 weeks ago',
    },

    {
      initials: 'KR',
      name: 'Kavya R',
      course: 'UI & UX Design Student',
      review:
        'I learned Figma, wireframing, high-fidelity UI design, design systems, responsive web design, mobile app design, and prototyping through practical projects. The design reviews and mentor feedback helped me improve both my visual design and UX thinking.',
      date: '5 days ago',
    },

    {
      initials: 'AJ',
      name: 'Arjun J',
      course: 'Product Design Student',
      review:
        'The curriculum covers UX research, information architecture, UI design, Figma, design systems, responsive interfaces, usability testing, and real-world product design. The capstone project helped me create a strong portfolio with a complete UX case study.',
      date: '2 months ago',
    },

    {
      initials: 'SR',
      name: 'Saranya R',
      course: 'UI & UX Design Professional',
      review:
        'The live projects, portfolio development, case study preparation, mock interviews, and placement support were very helpful. I gained practical experience in designing websites and mobile applications and feel much more confident about starting my UI/UX design career.',
      date: '1 week ago',
    },
  ];
}
