import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EnrollComponent } from '../../component/enroll/enroll.component';
import { CommonModule } from '@angular/common';

interface Testimonial {
  initials: string;

  name: string;

  course: string;

  review: string;

  date: string;
}

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.css',
})
export class CloudComponent implements AfterViewInit {
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
      name: 'Rajesh Kumar',
      course: 'Cloud Developer Student',
      review:
        'Excellent Cloud Developer training with hands-on AWS, Azure, Docker, and Kubernetes labs. The real-time projects helped me understand cloud deployment with confidence.',
      date: '2 weeks ago',
    },

    {
      initials: 'AK',
      name: 'Ajith Kumar',
      course: 'AWS Cloud Student',
      review:
        'One of the best cloud training institutes. The AWS modules, Linux administration, and Terraform sessions were practical and easy to understand.',
      date: '1 month ago',
    },

    {
      initials: 'SK',
      name: 'Sunil Kumar',
      course: 'DevOps Student',
      review:
        'The Docker, Kubernetes, Jenkins, and CI/CD pipeline training was excellent. I gained practical experience through live deployment projects.',
      date: '3 weeks ago',
    },

    {
      initials: 'VP',
      name: 'Vinoth Prasanth',
      course: 'Azure Cloud Student',
      review:
        'The Azure training covered Virtual Machines, Networking, Storage, and App Services with real-world examples. The placement support was outstanding.',
      date: '5 days ago',
    },

    {
      initials: 'AK',
      name: 'Akhila',
      course: 'Cloud Security Student',
      review:
        'I learned Cloud Security, IAM, Monitoring, Terraform, and Infrastructure as Code through hands-on labs. The trainers explained every concept clearly.',
      date: '2 months ago',
    },

    {
      initials: 'KR',
      name: 'Karun Raj',
      course: 'Cloud & DevOps Student',
      review:
        'Highly recommended for anyone interested in Cloud Computing. The AWS, Azure, GCP, Kubernetes, and DevOps curriculum is industry-focused and helped me build a strong portfolio.',
      date: '1 week ago',
    },
  ];
}
