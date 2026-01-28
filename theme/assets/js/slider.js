/**
 * Hero Slider/Carousel Functionality
 */

(function() {
  'use strict';

  class HeroSlider {
    constructor(container) {
      this.container = container;
      this.slides = container.querySelectorAll('.hero-slide');
      this.dots = container.querySelectorAll('.slider-dot');
      this.prevBtn = container.querySelector('.slider-nav.prev');
      this.nextBtn = container.querySelector('.slider-nav.next');
      this.currentSlide = 0;
      this.autoPlayInterval = null;
      this.autoPlayDelay = 5000; // 5 seconds

      if (this.slides.length === 0) return;

      this.init();
    }

    init() {
      // Show first slide
      this.showSlide(0);

      // Event listeners
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.nextSlide());
      }

      // Dot navigation
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => this.goToSlide(index));
      });

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.prevSlide();
        if (e.key === 'ArrowRight') this.nextSlide();
      });

      // Touch/swipe support
      this.initTouchEvents();

      // Auto-play
      this.startAutoPlay();

      // Pause on hover
      this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
      this.container.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    showSlide(index) {
      // Hide all slides
      this.slides.forEach(slide => slide.classList.remove('active'));
      this.dots.forEach(dot => dot.classList.remove('active'));

      // Show current slide
      if (this.slides[index]) {
        this.slides[index].classList.add('active');
      }
      if (this.dots[index]) {
        this.dots[index].classList.add('active');
      }

      this.currentSlide = index;
    }

    nextSlide() {
      const next = (this.currentSlide + 1) % this.slides.length;
      this.showSlide(next);
    }

    prevSlide() {
      const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.showSlide(prev);
    }

    goToSlide(index) {
      if (index >= 0 && index < this.slides.length) {
        this.showSlide(index);
      }
    }

    startAutoPlay() {
      this.stopAutoPlay();
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayDelay);
    }

    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    }

    initTouchEvents() {
      let startX = 0;
      let startY = 0;
      let distX = 0;
      let distY = 0;
      let threshold = 150; // Minimum swipe distance
      let restraint = 100; // Maximum vertical distance
      let allowedTime = 300; // Maximum swipe time
      let startTime = 0;

      this.container.addEventListener('touchstart', (e) => {
        const touch = e.changedTouches[0];
        startX = touch.pageX;
        startY = touch.pageY;
        startTime = new Date().getTime();
        this.stopAutoPlay();
      });

      this.container.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0];
        distX = touch.pageX - startX;
        distY = touch.pageY - startY;
        const elapsedTime = new Date().getTime() - startTime;

        if (elapsedTime <= allowedTime) {
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
            if (distX > 0) {
              this.prevSlide();
            } else {
              this.nextSlide();
            }
          }
        }
        this.startAutoPlay();
      });
    }
  }

  // Initialize all sliders on page load
  document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.hero-slider');
    sliders.forEach(slider => {
      new HeroSlider(slider);
    });
  });
})();
