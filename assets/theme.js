/**
 * CALIFORNIA 89 - SIERRA STYLE THEME
 * Main Theme JavaScript
 */

(function() {
  'use strict';

  // Initialize theme when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
  });

  function initTheme() {
    // Initialize sticky header
    initStickyHeader();
    
    // Add scroll content padding if header is sticky
    initScrollContentPadding();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize search
    initSearch();
    
    // Initialize lazy loading
    initLazyLoading();
  }

  // Sticky Header
  function initStickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  // Add scroll content padding when header is sticky/fixed
  function initScrollContentPadding() {
    const headerContainer = document.querySelector('.header-container');
    const mainContent = document.querySelector('#MainContent');
    
    if (headerContainer && mainContent) {
      // Check if header has the header-sticky class
      if (headerContainer.classList.contains('header-sticky')) {
        mainContent.classList.add('scrol-content');
      }
    }
  }

  // Mobile Menu
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.mobile-menu-close');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');

    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        mobileMenu?.classList.add('open');
        menuOverlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (menuClose) {
      menuClose.addEventListener('click', closeMobileMenu);
    }

    if (menuOverlay) {
      menuOverlay.addEventListener('click', closeMobileMenu);
    }

    function closeMobileMenu() {
      mobileMenu?.classList.remove('open');
      menuOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Search Functionality
  function initSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');
    const searchClose = document.querySelector('.search-close');

    if (searchToggle) {
      searchToggle.addEventListener('click', function() {
        searchBar?.classList.add('active');
      });
    }

    if (searchClose) {
      searchClose.addEventListener('click', function() {
        searchBar?.classList.remove('active');
      });
    }
  }

  // Lazy Loading Images
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = anchor.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Export for use in other scripts
  window.Theme = {
    init: initTheme
  };
})();
