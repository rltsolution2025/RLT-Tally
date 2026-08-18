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
  selector: 'app-python-full-stack',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './python-full-stack.component.html',
  styleUrl: './python-full-stack.component.css'
})
export class PythonFullStackComponent implements AfterViewInit {
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
    initials: 'AK',
    name: 'Arun Kumar',
    course: 'Python Full Stack Developer Student',
    review:
      'The Python Full Stack course was excellent. I learned Python programming, Django, Django REST Framework, React.js, MySQL, and REST APIs through practical projects. The trainers explained every concept clearly and provided excellent hands-on guidance.',
    date: '2 weeks ago',
  },

  {
    initials: 'VD',
    name: 'Vignesh D',
    course: 'Django Developer Student',
    review:
      'The Django training was highly practical. I learned how to build backend applications, work with Django ORM, create REST APIs, integrate MySQL, and implement authentication. The real-time projects gave me confidence to develop web applications.',
    date: '1 month ago',
  },

  {
    initials: 'PM',
    name: 'Pradeep M',
    course: 'React.js Developer Student',
    review:
      'The React.js modules were very useful and practical. I learned components, props, state, hooks, routing, Redux Toolkit, API integration, and responsive UI development. Building projects helped me understand modern frontend development.',
    date: '3 weeks ago',
  },

  {
    initials: 'KS',
    name: 'Keerthana S',
    course: 'Python Full Stack Student',
    review:
      'I learned Python, Django, REST APIs, React.js, MySQL, JWT authentication, Docker, Git, and AWS deployment through practical projects. The trainers focused on real-world development, which made the concepts much easier to understand.',
    date: '5 days ago',
  },

  {
    initials: 'AR',
    name: 'Aravind Raj',
    course: 'Software Development Student',
    review:
      'The curriculum covers Python programming, Django, Django REST Framework, React, database development, full stack integration, and cloud deployment. The capstone project helped me create a strong GitHub portfolio and improve my development skills.',
    date: '2 months ago',
  },

  {
    initials: 'NP',
    name: 'Nithya T',
    course: 'Python Full Stack Professional',
    review:
      'The live projects, mock technical interviews, resume building, GitHub portfolio development, and placement support were very helpful. The course gave me practical experience in Python Full Stack development and prepared me for software developer interviews.',
    date: '1 week ago',
  },
];
}
