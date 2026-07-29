import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EnrollComponent } from '../../component/enroll/enroll.component';

@Component({
  selector: 'app-ai-ml-learning',
  standalone: true,
  imports: [RouterLink, CommonModule, EnrollComponent],
  templateUrl: './ai-ml-learning.component.html',
  styleUrl: './ai-ml-learning.component.css',
})
export class AIMLLearningComponent implements AfterViewInit {
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
}
