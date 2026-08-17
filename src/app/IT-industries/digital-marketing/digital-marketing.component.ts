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
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.css',
})
export class DigitalMarketingComponent implements AfterViewInit {
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
      course: 'Digital Marketing Student',
      review:
        'The Digital Marketing course was excellent. I learned SEO, Google Ads, and Social Media Marketing through practical sessions and live projects. The trainers explained every concept clearly.',
      date: '2 weeks ago',
    },

    {
      initials: 'PV',
      name: 'Priyadharshini V',
      course: 'SEO Student',
      review:
        'The SEO training covered keyword research, on-page SEO, technical SEO, and Google Search Console in detail. The practical assignments helped me improve my skills.',
      date: '1 month ago',
    },

    {
      initials: 'SK',
      name: 'Saravanan K',
      course: 'Performance Marketing Student',
      review:
        'I gained hands-on experience in Google Ads, Meta Ads, lead generation, and campaign optimization. The live campaigns gave me real industry exposure.',
      date: '3 weeks ago',
    },

    {
      initials: 'NK',
      name: 'Nandhini K',
      course: 'Social Media Marketing Student',
      review:
        'The Social Media Marketing modules were very informative. I learned Instagram Marketing, Facebook Ads, Canva, AI tools, and content creation with practical examples.',
      date: '5 days ago',
    },

    {
      initials: 'MV',
      name: 'Madhan Vel',
      course: 'WordPress & Digital Marketing Student',
      review:
        'The WordPress website development, Elementor, Google Analytics, and email marketing sessions were excellent. I was able to build my own business website confidently.',
      date: '2 months ago',
    },

    {
      initials: 'SR',
      name: 'Sathya Raj',
      course: 'Digital Marketing Professional',
      review:
        'The curriculum covered SEO, Google Ads, Social Media Marketing, Analytics, AI tools, and freelancing. The placement support and mock interviews helped me become job-ready.',
      date: '1 week ago',
    },
  ];
}
