/**
 * Scroll Animations and Transitions
 */

(function() {
  'use strict';

  class ScrollAnimations {
    constructor() {
      this.init();
    }

    init() {
      // Fade in on scroll
      this.initFadeIn();
      
      // Parallax effects
      this.initParallax();
    }

    initFadeIn() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe elements with fade-in class
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });
    }

    initParallax() {
      const parallaxElements = document.querySelectorAll('.parallax');
      
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
          const rate = scrolled * (element.dataset.rate || 0.5);
          element.style.transform = `translateY(${rate}px)`;
        });
      });
    }
  }

  // Add CSS for fade-in animation
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', function() {
    new ScrollAnimations();
  });
})();
