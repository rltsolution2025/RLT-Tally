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
  selector: 'app-datascience',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './datascience.component.html',
  styleUrl: './datascience.component.css',
})
export class DatascienceComponent implements AfterViewInit {
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
      initials: 'AR',
      name: 'Arun Raj',
      course: 'Data Science with AI Student',
      review:
        'Excellent Data Science with AI training. The Python, Machine Learning, and Deep Learning sessions were practical and easy to understand. The live projects gave me real industry experience.',
      date: '2 weeks ago',
    },

    {
      initials: 'NK',
      name: 'Nithin Kumar',
      course: 'Machine Learning Student',
      review:
        'One of the best Data Science institutes. The trainers explained Statistics, Python, SQL, and Machine Learning with real-world examples. Highly recommended.',
      date: '1 month ago',
    },

    {
      initials: 'PS',
      name: 'Priya Sharma',
      course: 'Artificial Intelligence Student',
      review:
        'The Deep Learning, Computer Vision, and NLP modules were excellent. I built multiple AI applications that strengthened my technical skills and confidence.',
      date: '3 weeks ago',
    },

    {
      initials: 'VK',
      name: 'Vignesh Kumar',
      course: 'Generative AI Student',
      review:
        'I learned Prompt Engineering, OpenAI API, LangChain, and Generative AI through hands-on projects. The placement guidance and mentorship were outstanding.',
      date: '5 days ago',
    },

    {
      initials: 'SM',
      name: 'Sneha Menon',
      course: 'Data Analytics Student',
      review:
        'Power BI, SQL, Data Visualization, and Business Analytics were taught in a practical way. The instructors made every concept simple and industry-focused.',
      date: '2 months ago',
    },

    {
      initials: 'RK',
      name: 'Rohit Krishnan',
      course: 'AI & Data Science Student',
      review:
        'The curriculum covers everything from Python to Generative AI and MLOps. Real-time projects, GitHub portfolio guidance, and interview preparation helped me become job-ready.',
      date: '1 week ago',
    },
  ];
}
