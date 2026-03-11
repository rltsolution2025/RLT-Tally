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
    'Specialization Programs',
    'Premium Programs',
  ];

  activeCategory = 'All';

  programs = [
    {
      image: 'Program-Image/Tally Essential.jpg',
      name: 'Tally Essentials – Tally Foundation Program',
      description: 'Master accounting fundamentals and essential Tally skills for managing business transactions, ledgers, vouchers, and reports.',
      category: 'Popular Programs',
      link: '/tally-essential'
    },
    {
      image: 'Program-Image/Tally professional.jpg',
      name: 'Tally Professional - Industry Accounting Skills',
      description: 'Become a professional accountant by mastering Tally with GST, payroll, inventory management, and financial reporting.',
      category: 'Popular Programs',
      link: '/tally-professional'
    },
    {
      image: 'Program-Image/Tally Prime.jpg',
      name: 'TallyPrime – Complete ERP Accounting Solution',
      description: 'Learn Tally Prime / Tally ERP to efficiently manage accounting, inventory, vouchers, and financial reports for businesses.',
      category: 'Popular Programs',
      link: '/tally-prime'
    },
    {
      image: 'Program-Image/GST Simulation.jpg',
      name: 'GST Simulation – Real-Time GST Practice',
      description: 'Become a professional accountant by mastering Tally with GST, payroll, inventory management, and financial reporting.',
      category: 'Specialization Programs',
      link: '/gst-simulation'
    },
    {
      image: 'Program-Image/Office Automation.jpg',
      name: 'Office Automation – Workplace Computer Skills',
      description: 'Master MS Office tools including Word, Excel, and PowerPoint to handle everyday office tasks efficiently and professionally for business',
      category: 'Specialization Programs',
      link: '/office-automation'
    },
    {
      image: 'Program-Image/P & IT.jpg',
      name: 'Payroll & Income Tax – Tax & Salary Management',
      description: 'Learn payroll processing, salary management, and income tax calculation for efficient employee and tax management.',
      category: 'Specialization Programs',
      link: '/payroll-&-income-tax'
    },
    {
      image: 'Program-Image/Master Accountant.png',
      name: 'Master Accountant – Advanced Tally Program',
      description: 'Master accounting with Tally, covering GST, payroll, taxation, and financial management for business operations.',
      category: 'Premium Programs',
      link: '/master-accountant'
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
