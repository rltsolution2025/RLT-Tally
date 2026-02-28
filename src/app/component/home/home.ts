import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  
  ngAfterViewInit(): void {
     const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(
      '.reveal, .reveal-up, .reveal-fade, .reveal-right, .reveal-zoom'
    ).forEach(el => observer.observe(el));
  }
 categories = [
    'All',
    'Popular Programs',
    'Corporate Training',
    'Colleges Programs',
    'Program for Schools'
  ];

  activeCategory = 'All';

  programs = [
    {
      image: 'assets/tally-essential.jpg',
      name: 'Tally Essential',
      description: 'Accounting fundamentals and Tally basics.',
      category: 'Popular Programs',
      link: '/tally-essential'
    },
    {
      image: 'assets/tally-professional.jpg',
      name: 'Tally Professional',
      description: 'Advanced accounting, GST & payroll.',
      category: 'Institute Programs',
      link: '/tally-professional'
    },
    {
      image: 'assets/corporate-training.jpg',
      name: 'Corporate Accounting Training',
      description: 'Customized accounting training for organizations.',
      category: 'Corporate Training',
      link: '/corporate-training'
    },
    {
      image: 'assets/college-program.jpg',
      name: 'College Accounting Program',
      description: 'Skill-based learning for college students.',
      category: 'Colleges Programs',
      link: '/college-programs'
    },
    {
      image: 'assets/school-commerce.jpg',
      name: 'School Commerce Foundation',
      description: 'Early exposure to commerce & accounting.',
      category: 'Program for Schools',
      link: '/school-programs'
    }
  ];

  get filteredPrograms() {
    return this.activeCategory === 'All'
      ? this.programs
      : this.programs.filter(p => p.category === this.activeCategory);
  }

  selectCategory(category: string) {
    this.activeCategory = category;
  }
}
