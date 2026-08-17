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
  selector: 'app-java-fullstack',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './java-fullstack.component.html',
  styleUrl: './java-fullstack.component.css',
})
export class JavaFullstackComponent implements AfterViewInit {
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
      initials: 'KP',
      name: 'Karthik Prabhu',
      course: 'Java Full Stack Developer Student',
      review:
        'The Java Full Stack course was excellent. I learned Core Java, Spring Boot, React.js, REST APIs, and MySQL through real-time enterprise projects. The trainers explained every concept clearly.',
      date: '2 weeks ago',
    },

    {
      initials: 'VS',
      name: 'Vignesh S',
      course: 'Spring Boot Student',
      review:
        'The Spring Boot training was highly practical. Building REST APIs, implementing JWT Authentication, and working with Hibernate gave me confidence to develop enterprise applications.',
      date: '1 month ago',
    },

    {
      initials: 'PM',
      name: 'Praveen M',
      course: 'React Developer Student',
      review:
        'The React.js modules covered components, hooks, routing, Redux Toolkit, and API integration in detail. The frontend projects helped me understand modern UI development.',
      date: '3 weeks ago',
    },

    {
      initials: 'KR',
      name: 'Kavya R',
      course: 'Java Full Stack Student',
      review:
        'I learned MySQL, Spring Security, JWT Authentication, Docker, and AWS deployment through live projects. The practical sessions made enterprise development easy to understand.',
      date: '5 days ago',
    },

    {
      initials: 'AR',
      name: 'Aravind R',
      course: 'Software Development Student',
      review:
        'The curriculum covered everything from Core Java to Spring Boot, React, Microservices, and Cloud Deployment. The capstone project helped me build an impressive GitHub portfolio.',
      date: '2 months ago',
    },

    {
      initials: 'NT',
      name: 'Nithya T',
      course: 'Java Full Stack Professional',
      review:
        'The live enterprise projects, mock technical interviews, resume building, and placement support prepared me well for software developer interviews. I highly recommend this course to aspiring Java Full Stack Developers.',
      date: '1 week ago',
    },
  ];
}
