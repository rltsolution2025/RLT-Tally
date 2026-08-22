import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tallyprime-vs-excel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tallyprime-vs-excel.component.html',
  styleUrl: './tallyprime-vs-excel.component.css',
})
export class TallyprimeVsExcelComponent implements OnInit {
  // =========================================================
  // SEO DETAILS
  // =========================================================

  private readonly pageTitle = 'TallyPrime vs Excel: Which Is Better for Accounting? | RLT Edzaro';

  private readonly metaDescription =
    'TallyPrime vs Excel for accounting: compare accounting workflows, inventory, GST, payroll, reporting, data analysis and career value. Learn which is better for students and professionals.';

  private readonly canonicalUrl =
    'https://www.rltedzaro.com/blog/tallyprime-vs-excel-for-accounting';

  private readonly pageUrl = 'https://www.rltedzaro.com/blog/tallyprime-vs-excel-for-accounting';

  private readonly imageUrl = 'https://www.rltedzaro.com/assets/blog/tallyprime-vs-excel.jpg';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.setSeoMeta();
  }

  // =========================================================
  // SEO META
  // =========================================================

  private setSeoMeta(): void {
    /*
     * PAGE TITLE
     */

    this.titleService.setTitle(this.pageTitle);

    /*
     * STANDARD META TAGS
     */

    this.metaService.updateTag({
      name: 'description',
      content: this.metaDescription,
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });

    /*
     * CANONICAL URL
     */

    this.updateCanonical(this.canonicalUrl);

    /*
     * OPEN GRAPH
     */

    this.metaService.updateTag({
      property: 'og:type',
      content: 'article',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: this.pageTitle,
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: this.metaDescription,
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: this.pageUrl,
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: this.imageUrl,
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content: 'TallyPrime vs Excel comparison for accounting',
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    /*
     * ARTICLE OPEN GRAPH
     */

    this.metaService.updateTag({
      property: 'article:section',
      content: 'Tally & Finance',
    });

    this.metaService.updateTag({
      property: 'article:published_time',
      content: '2026-08-20',
    });

    this.metaService.updateTag({
      property: 'article:modified_time',
      content: '2026-08-20',
    });

    /*
     * TWITTER / X
     */

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: this.pageTitle,
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: this.metaDescription,
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: this.imageUrl,
    });

    /*
     * AUTHOR
     */

    this.metaService.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });
  }

  // =========================================================
  // CANONICAL
  // =========================================================

  private updateCanonical(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');

      link.setAttribute('rel', 'canonical');

      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  // =========================================================
  // SIDEBAR SCROLL
  // =========================================================

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const headerOffset = 100;

    const elementPosition = element.getBoundingClientRect().top;

    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,

      behavior: 'smooth',
    });
  }

  // =========================================================
  // BACK TO BLOG
  // =========================================================

  goToBlogs(): void {
    this.router.navigate(['/blogs']);
  }
}
