import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [/*RouterLink, RouterLinkWithHref*/],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const headerOffset = 80;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
