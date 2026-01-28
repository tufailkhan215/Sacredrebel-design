/**
 * Product Interactions (Quick View, Wishlist, etc.)
 */

(function() {
  'use strict';

  class ProductInteractions {
    constructor() {
      this.init();
    }

    init() {
      // Quick view buttons
      document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const productHandle = btn.dataset.handle;
          this.openQuickView(productHandle);
        });
      });

      // Wishlist buttons
      document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const productId = btn.dataset.productId;
          this.toggleWishlist(productId, btn);
        });
      });

      // Add to cart buttons
      document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const variantId = btn.dataset.variantId;
          const quantity = btn.dataset.quantity || 1;
          if (window.Cart) {
            window.Cart.addToCart(variantId, parseInt(quantity));
          }
        });
      });
    }

    async openQuickView(handle) {
      try {
        const response = await fetch(`/products/${handle}.js`);
        const product = await response.json();
        
        // Create and show quick view modal
        this.showQuickViewModal(product);
      } catch (error) {
        console.error('Error loading product:', error);
      }
    }

    showQuickViewModal(product) {
      // Create modal HTML
      const modal = document.createElement('div');
      modal.className = 'quick-view-modal';
      modal.innerHTML = `
        <div class="quick-view-overlay"></div>
        <div class="quick-view-content">
          <button class="quick-view-close">&times;</button>
          <div class="quick-view-product">
            <div class="quick-view-image">
              <img src="${product.featured_image}" alt="${product.title}">
            </div>
            <div class="quick-view-details">
              <h2>${product.title}</h2>
              <div class="quick-view-price">${this.formatMoney(product.price)}</div>
              <div class="quick-view-description">${product.description}</div>
              <form class="quick-view-form">
                <select name="id" class="variant-select">
                  ${product.variants.map(v => `
                    <option value="${v.id}">${v.title}</option>
                  `).join('')}
                </select>
                <button type="submit" class="btn btn-primary">Add to Cart</button>
              </form>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';

      // Close handlers
      modal.querySelector('.quick-view-close').addEventListener('click', () => {
        this.closeQuickView(modal);
      });
      modal.querySelector('.quick-view-overlay').addEventListener('click', () => {
        this.closeQuickView(modal);
      });

      // Form submit
      modal.querySelector('.quick-view-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const variantId = modal.querySelector('.variant-select').value;
        if (window.Cart) {
          window.Cart.addToCart(variantId, 1);
          this.closeQuickView(modal);
        }
      });
    }

    closeQuickView(modal) {
      modal.remove();
      document.body.style.overflow = '';
    }

    toggleWishlist(productId, btn) {
      let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const index = wishlist.indexOf(productId);

      if (index > -1) {
        wishlist.splice(index, 1);
        btn.classList.remove('active');
      } else {
        wishlist.push(productId);
        btn.classList.add('active');
      }

      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    formatMoney(cents) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(cents / 100);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    new ProductInteractions();
  });
})();
