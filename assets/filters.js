/**
 * Collection Page Filters and Sorting
 */

(function() {
  'use strict';

  class CollectionFilters {
    constructor() {
      this.filters = document.querySelectorAll('.filter-checkbox input');
      this.clearBtn = document.querySelector('.filter-clear');
      this.sortSelect = document.querySelector('.sort-select');
      this.gridToggle = document.querySelectorAll('.view-toggle');
      this.productGrid = document.querySelector('.product-grid');
      
      this.init();
    }

    init() {
      // Filter checkboxes
      this.filters.forEach(filter => {
        filter.addEventListener('change', () => this.applyFilters());
      });

      // Clear filters
      if (this.clearBtn) {
        this.clearBtn.addEventListener('click', () => this.clearFilters());
      }

      // Sort dropdown
      if (this.sortSelect) {
        this.sortSelect.addEventListener('change', () => this.applySort());
      }

      // Grid/List toggle
      this.gridToggle.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const view = toggle.dataset.view;
          this.switchView(view);
        });
      });

      // Load saved view preference
      const savedView = localStorage.getItem('productView');
      if (savedView) {
        this.switchView(savedView);
      }
    }

    applyFilters() {
      const selectedFilters = Array.from(this.filters)
        .filter(f => f.checked)
        .map(f => f.value);

      // Update URL
      const url = new URL(window.location);
      if (selectedFilters.length > 0) {
        url.searchParams.set('filter', selectedFilters.join(','));
      } else {
        url.searchParams.delete('filter');
      }
      window.history.pushState({}, '', url);

      // Apply filters (AJAX or reload)
      this.filterProducts(selectedFilters);
    }

    filterProducts(filters) {
      // This would typically make an AJAX request
      // For now, we'll reload the page with filters
      // In production, implement AJAX filtering
      window.location.search = filters.length > 0 ? `?filter=${filters.join(',')}` : '';
    }

    clearFilters() {
      this.filters.forEach(filter => {
        filter.checked = false;
      });
      this.applyFilters();
    }

    applySort() {
      const sortValue = this.sortSelect.value;
      const url = new URL(window.location);
      url.searchParams.set('sort_by', sortValue);
      window.location.href = url.toString();
    }

    switchView(view) {
      // Update active toggle
      this.gridToggle.forEach(toggle => {
        toggle.classList.remove('active');
        if (toggle.dataset.view === view) {
          toggle.classList.add('active');
        }
      });

      // Update grid class
      if (this.productGrid) {
        this.productGrid.className = `product-grid product-grid-${view}`;
      }

      // Save preference
      localStorage.setItem('productView', view);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.collection-filters')) {
      new CollectionFilters();
    }
  });
})();
