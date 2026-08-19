import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EnrollComponent } from '../../component/enroll/enroll.component';
interface Testimonial{
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
export class CCNAComponent implements AfterViewInit {
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
      initials: 'RK',
      name: 'Rakesh Kumar',
      course: 'AI & ML Student',
      review:
        'Excellent training with real-time projects. The trainers explained every AI concept clearly and provided outstanding placement support.',
      date: '2 weeks ago',
    },

    {
      initials: 'AP',
      name: 'Arun Prakash',
      course: 'Python & AI Student',
      review:
        'One of the best AI courses. Practical sessions, coding exercises, and live projects helped me gain confidence.',
      date: '1 month ago',
    },

    {
      initials: 'SK',
      name: 'Sanjay Kumar',
      course: 'Machine Learning Student',
      review:
        'Highly recommended for beginners. Every topic was taught with practical examples and hands-on coding.',
      date: '3 weeks ago',
    },

    {
      initials: 'VP',
      name: 'Vignesh Prabu',
      course: 'AI Engineer Student',
      review:
        'The certification and placement guidance helped me prepare confidently for interviews.',
      date: '5 days ago',
    },

    {
      initials: 'MJ',
      name: 'Meena Joseph',
      course: 'Generative AI Student',
      review:
        'Excellent explanation of ChatGPT, Prompt Engineering, AI Agents and LLMs. Worth every session.',
      date: '2 months ago',
    },

    {
      initials: 'KR',
      name: 'Karthik Raj',
      course: 'Data Science Student',
      review: 'Very supportive trainers, structured curriculum and excellent learning environment.',
      date: '1 week ago',
    },
  ];
}
