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
  selector: 'app-power-bi',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './power-bi.component.html',
  styleUrl: './power-bi.component.css',
})
export class PowerBIComponent implements AfterViewInit {
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
      name: 'Sathish Kumar',
      course: 'Power BI Student',
      review:
        'The Power BI training was excellent. I learned data cleaning with Power Query, data modeling, DAX, KPI creation, and interactive dashboard development through practical business datasets. The trainers explained every concept clearly.',
      date: '2 weeks ago',
    },

    {
      initials: 'SR',
      name: 'Surya Raj',
      course: 'Tableau Student',
      review:
        'The Tableau sessions were very practical. I learned how to connect data sources, create visualizations, use filters and parameters, build interactive dashboards, and present business insights through data storytelling.',
      date: '1 month ago',
    },

    {
      initials: 'MN',
      name: 'Manikandan',
      course: 'Business Intelligence Student',
      review:
        'This course gave me a strong foundation in Excel, SQL, Power BI, and Tableau. Working on sales, finance, and business dashboards helped me understand how data is transformed into useful business insights.',
      date: '3 weeks ago',
    },

    {
      initials: 'DP',
      name: 'Dinesh Prabhu',
      course: 'Power BI & Tableau Student',
      review:
        'I really enjoyed the practical approach. I learned Power Query, DAX, data relationships, KPI analysis, Tableau visualizations, and dashboard design. The real-world projects helped me build confidence in Business Intelligence.',
      date: '5 days ago',
    },

    {
      initials: 'VS',
      name: 'Vasanth Kumar',
      course: 'Data Analytics Student',
      review:
        'The curriculum is well structured and easy to follow. SQL, Excel, Power BI, and Tableau were taught with practical examples. The project work helped me create a strong analytics portfolio for job applications.',
      date: '2 months ago',
    },

    {
      initials: 'AR',
      name: 'Arun Raj',
      course: 'BI & Data Visualization Student',
      review:
        'The dashboard projects were the best part of the course. I learned how to build KPI dashboards, analyze business performance, and present insights professionally using Power BI and Tableau. The career support was also very helpful.',
      date: '1 week ago',
    },
  ];
}
