import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css'
})
export class MobileHeaderComponent {

  isMenuOpen = false;

  // Dropdown state (scalable for future menus)
  dropdownStates: { [key: string]: boolean } = {
    courses: false
  };

  constructor(private router: Router) {}

  toggleMenu(event: Event) {
  event.stopPropagation();
  this.isMenuOpen = !this.isMenuOpen;

  if (this.isMenuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}

  // Close full menu
  closeMenu() {
    this.isMenuOpen = false;

    // Reset all dropdowns
    Object.keys(this.dropdownStates).forEach(key => {
      this.dropdownStates[key] = false;
    });
  }

  // Toggle dropdown (Courses, etc.)
  toggleDropdown(key: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();

    // Close others
    Object.keys(this.dropdownStates).forEach(k => {
      if (k !== key) {
        this.dropdownStates[k] = false;
      }
    });

    // Toggle selected
    this.dropdownStates[key] = !this.dropdownStates[key];
  }

  // Check dropdown state
  isDropdownOpen(key: string): boolean {
    return !!this.dropdownStates[key];
  }

  // Navigate + close menu
  navigateAndClose() {
    this.closeMenu();
  }
}