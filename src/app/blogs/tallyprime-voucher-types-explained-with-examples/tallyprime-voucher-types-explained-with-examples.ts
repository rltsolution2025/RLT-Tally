import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-tallyprime-voucher-types-explained-with-examples',
  styleUrl: './tallyprime-voucher-types-explained-with-examples.css',
  templateUrl: './tallyprime-voucher-types-explained-with-examples.html',
})
export class TallyprimeVoucherTypesExplainedWithExamples {
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const targetElement = document.getElementById(sectionId);

    if (!targetElement) {
      console.warn(`Section not found: ${sectionId}`);
      return;
    }

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    window.history.replaceState(null, '', `#${sectionId}`);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
