import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './platform.html',
  styleUrl: './platform.css',
})
export class Platform implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.handleFragmentScroll();
  }

  handleFragmentScroll() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 200); // increased delay for reliability
      }
    });
  }
}