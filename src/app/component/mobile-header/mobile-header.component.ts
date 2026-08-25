import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css',
})
export class MobileHeaderComponent {
  isMenuOpen = false;

  dropdownStates: {
    [key: string]: boolean;
  } = {
    software: false,
    tally: false,
  };

  // =====================================================
  // OPEN / CLOSE MENU
  // =====================================================

  toggleMenu(event?: Event): void {
    event?.stopPropagation();

    this.isMenuOpen = !this.isMenuOpen;

    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;

    this.closeAllDropdowns();

    this.updateBodyScroll();
  }

  // =====================================================
  // DROPDOWN
  // =====================================================

  toggleDropdown(key: string, event: Event): void {
    event.preventDefault();

    event.stopPropagation();

    Object.keys(this.dropdownStates).forEach((dropdownKey) => {
      if (dropdownKey !== key) {
        this.dropdownStates[dropdownKey] = false;
      }
    });

    this.dropdownStates[key] = !this.dropdownStates[key];
  }

  // =====================================================
  // CHECK DROPDOWN
  // =====================================================

  isDropdownOpen(key: string): boolean {
    return !!this.dropdownStates[key];
  }

  // =====================================================
  // CLOSE ALL DROPDOWNS
  // =====================================================

  private closeAllDropdowns(): void {
    Object.keys(this.dropdownStates).forEach((key) => {
      this.dropdownStates[key] = false;
    });
  }

  // =====================================================
  // BODY SCROLL CONTROL
  // =====================================================

  private updateBodyScroll(): void {
    if (this.isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }

  // =====================================================
  // ESCAPE KEY
  // =====================================================

  @HostListener('document:keydown.escape')
  handleEscapeKey(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
