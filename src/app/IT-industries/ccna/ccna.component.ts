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
      initials: 'SK',
      name: 'Suresh Kumar',
      course: 'CCNA & Networking Student',
      review:
        'The CCNA training was excellent. I learned networking fundamentals, IP addressing, subnetting, VLANs, routing, and Cisco configuration through practical lab sessions. The trainers explained every concept clearly.',
      date: '2 weeks ago',
    },

    {
      initials: 'VP',
      name: 'Vignesh Prakash',
      course: 'Cisco Networking Student',
      review:
        'The Cisco networking labs were very practical. I gained hands-on experience with routers, switches, VLAN configuration, trunking, and troubleshooting. The real-world scenarios made networking much easier to understand.',
      date: '1 month ago',
    },

    {
      initials: 'SK',
      name: 'Surya Kumar',
      course: 'Network Engineer Student',
      review:
        'Highly recommended for beginners in networking. The course covered OSI and TCP/IP models, subnetting, switching, routing, and OSPF with practical examples and hands-on Cisco exercises.',
      date: '3 weeks ago',
    },

    {
      initials: 'AP',
      name: 'Aravind Prasad',
      course: 'CCNA Certification Student',
      review:
        'The CCNA preparation was very useful. I improved my subnetting, routing, VLAN, and troubleshooting skills through regular lab practice and mock assessments. The career guidance also helped me prepare for networking interviews.',
      date: '5 days ago',
    },

    {
      initials: 'KR',
      name: 'Keerthana R',
      course: 'Network Security Student',
      review:
        'The networking security modules were excellent. I learned ACLs, NAT, secure device management, wireless security, and network troubleshooting through practical exercises. The trainers were very supportive throughout the course.',
      date: '2 months ago',
    },

    {
      initials: 'MB',
      name: 'Manoj Balaji',
      course: 'Network Management Student',
      review:
        'The curriculum is well structured and practical. I learned Cisco IOS, IP addressing, routing, switching, OSPF, DHCP, network security, and enterprise network management. The hands-on projects gave me confidence to pursue networking roles.',
      date: '1 week ago',
    },
  ];
}
