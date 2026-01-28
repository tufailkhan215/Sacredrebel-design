/**
 * Mobile Menu Functionality
 */

(function() {
  'use strict';

  class MobileMenu {
    constructor() {
      this.menu = document.querySelector('.mobile-menu');
      this.toggle = document.querySelector('.mobile-menu-toggle');
      this.close = document.querySelector('.mobile-menu-close');
      this.overlay = document.querySelector('.mobile-menu-overlay');
      
      this.init();
    }

    init() {
      if (!this.menu || !this.toggle) return;

      this.toggle.addEventListener('click', () => this.open());
      
      if (this.close) {
        this.close.addEventListener('click', () => this.closeMenu());
      }

      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.closeMenu());
      }

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.menu.classList.contains('open')) {
          this.closeMenu();
        }
      });
    }

    open() {
      this.menu.classList.add('open');
      if (this.overlay) {
        this.overlay.classList.add('active');
      }
      document.body.style.overflow = 'hidden';
    }

    closeMenu() {
      this.menu.classList.remove('open');
      if (this.overlay) {
        this.overlay.classList.remove('active');
      }
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    new MobileMenu();
  });
})();
