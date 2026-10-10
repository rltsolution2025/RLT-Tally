import { AfterViewInit, Component } from '@angular/core';
import AOS from 'aos';
import { EnrollComponent } from '../../enroll/enroll.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterLink, EnrollComponent],
  selector: 'app-drone-technologies',
  styleUrl: './drone-technologies.css',
  templateUrl: './drone-technologies.html',
})
export class DroneTechnologies implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.init({
        duration: 900,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0,
        mirror: false
      });

      AOS.refresh();
    }, 100);
  }
}