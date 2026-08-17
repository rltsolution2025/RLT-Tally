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
  selector: 'app-dotnet-fullstack',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './dotnet-fullstack.component.html',
  styleUrl: './dotnet-fullstack.component.css',
})
export class DotnetFullstackComponent implements AfterViewInit {
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
      initials: 'MP',
      name: 'M. Praveen',
      course: '.NET Full Stack Developer Student',
      review:
        'The .NET Full Stack course exceeded my expectations. I learned C#, ASP.NET Core MVC, Web API, SQL Server, and Angular through hands-on projects. The trainers explained every concept clearly.',
      date: '2 weeks ago',
    },

    {
      initials: 'KS',
      name: 'K. Surya',
      course: 'ASP.NET Core Student',
      review:
        'The ASP.NET Core MVC and Web API modules were practical and industry-focused. Building real-time applications helped me understand enterprise development workflows.',
      date: '1 month ago',
    },

    {
      initials: 'VD',
      name: 'V. Dinesh',
      course: 'Angular Developer Student',
      review:
        'The Angular training covered components, routing, services, Reactive Forms, RxJS, and API integration. I gained confidence in building responsive front-end applications.',
      date: '3 weeks ago',
    },

    {
      initials: 'AR',
      name: 'A. Ramesh',
      course: 'Full Stack Development Student',
      review:
        'I learned SQL Server, Entity Framework Core, JWT Authentication, and Azure deployment through live projects. The practical sessions made learning easy and enjoyable.',
      date: '5 days ago',
    },

    {
      initials: 'SJ',
      name: 'S. Jeeva',
      course: '.NET Developer Student',
      review:
        'The curriculum covered everything from C# programming to Azure Cloud and DevOps. The enterprise application project helped me build a strong GitHub portfolio.',
      date: '2 months ago',
    },

    {
      initials: 'NT',
      name: 'N. Tharun',
      course: '.NET Full Stack Professional',
      review:
        'The live projects, mock technical interviews, resume building, and placement support prepared me well for software developer interviews. I highly recommend this course to aspiring .NET developers.',
      date: '1 week ago',
    },
  ];
}
