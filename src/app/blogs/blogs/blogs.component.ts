import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Blog {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  url: string;
  featured?: boolean;
}

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  searchTerm: string = '';
  selectedCategory: string = 'All';

  blogs: Blog[] = [
    {
      title: 'TallyPrime vs Excel: Which Is Better for Accounting?',
      description:
        'TallyPrime vs Excel for accounting: compare features, accounting workflows, reporting, inventory, GST, flexibility and when to use each tool.',
      image: 'blogs-image/tallyprime vs Excel.png',
      category: 'Tally & Finance',
      date: 'August 20, 2026',
      readTime: '6 min read',
      url: '/tallyprime-vs-excel-for-accounting',
      featured: true,
    },
    {
      title: 'Tally Accountant Salary in India: Fresher to Experienced',
      description:
        'Learn about Tally accountant salaries in India, factors affecting pay, entry-level roles, required skills and career growth opportunities for accounting professionals.',
      image: 'blogs-image/Tally Accountant Salary in India.png',
      category: 'Tally & Finance',
      date: 'August 20, 2026',
      readTime: '6 min read',
      url: '/tally-accountant-salary-in-india',
      featured: true,
    },
    {
      title: 'What Jobs Can You Get After Learning Tally?',
      description:
        'Explore jobs after learning TallyPrime, including accountant, accounts assistant, billing executive, GST and payroll roles, plus the skills employers may look for.',
      image: 'blogs-image/Jobs After Learning Tally.png',
      category: 'Tally & Finance',
      date: 'August 20, 2026',
      readTime: '6 min read',
      url: '/jobs-after-learning-tally',
      featured: true,
    },
    {
      title: 'Tally Course After 12th: Career Options',
      description:
        'Learn how TallyPrime after 12th can build practical accounting skills and explore career options such as accounts assistant, billing executive, junior accountant, accounts executive, payroll assistant and GST assistant.',
      image: 'blogs-image/tally after 12.png',
      category: 'Tally & Finance',
      date: 'August 22, 2026',
      readTime: '7 min read',
      url: '/tally-course-after-12th',
      featured: true,
    },
    {
      title: 'Tally Course: Fees, Duration, Syllabus & Career Opportunities',
      description:
        'Explore Tally course fees, duration, syllabus, eligibility, practical training and career opportunities. Learn what to check before joining a Tally course.',
      image: 'blogs-image/Tally Course.png',
      category: 'Tally & Finance',
      date: 'August 22, 2026',
      readTime: '7 min read',
      url: '/tally-course-fees-duration-syllabus-career',
      featured: true,
    },

    {
      title: 'Can You Learn Tally Without Knowing Accounting?',
      description:
        'Learn whether you can start TallyPrime without accounting knowledge, what accounting basics beginners should learn, whether a commerce degree is required and how to build practical Tally skills.',
      image: 'blogs-image/Can You Learn Tally Without Knowing.png',
      category: 'Tally & Finance',
      date: 'August 22, 2026',
      readTime: '6 min read',
      url: '/learn-tally-without-accounting-knowledge',
      featured: true,
    },
    {
      title: 'How Long Does It Take to Learn TallyPrime?',
      description:
        'Find out how long it takes to learn TallyPrime, from accounting fundamentals and voucher entry to GST, inventory, payroll, reporting and practical accounting skills.',
      image: 'blogs-image/How Long Does It Take to Learn TallyPrime.png',
      category: 'Tally & Finance',
      date: 'August 24, 2026',
      readTime: '7 min read',
      url: '/how-long-does-it-take-to-learn-tallyprime',
      featured: true,
    },
    {
      title: 'Is TallyPrime Easy to Learn for Beginners? Complete Guide',
      description:
        'Is TallyPrime easy for beginners? Learn the basics, required accounting knowledge, learning stages, common challenges and tips for learning TallyPrime.',
      image: 'blogs-image/Is TallyPrime Easy to Learn for Beginners.png',
      category: 'Tally & Finance',
      date: 'August 24, 2026',
      readTime: '7 min read',
      url: '/is-tallyprime-easy-to-learn-for-beginners',
      featured: true,
    },
  ];

  // ================================
  // FEATURED BLOG
  // ================================

  get featuredBlog(): Blog | undefined {
    return this.blogs.find((blog) => blog.featured);
  }

  // ================================
  // FILTERED BLOGS
  // ================================

  get filteredBlogs(): Blog[] {
    return this.blogs.filter((blog) => {
      const matchesCategory =
        this.selectedCategory === 'All' || blog.category === this.selectedCategory;

      const search = this.searchTerm.toLowerCase().trim();

      const matchesSearch =
        !search ||
        blog.title.toLowerCase().includes(search) ||
        blog.description.toLowerCase().includes(search) ||
        blog.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }

  // ================================
  // CATEGORY FILTER
  // ================================

  filterCategory(category: string): void {
    this.selectedCategory = category;
  }

  // ================================
  // SEARCH
  // ================================

  searchBlogs(): void {
    // Filtering is handled automatically
    // through the filteredBlogs getter.
  }

  // ================================
  // CLEAR FILTERS
  // ================================

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'All';
  }
}
