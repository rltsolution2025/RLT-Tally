import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, RouterLinkActive, MobileHeaderComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
