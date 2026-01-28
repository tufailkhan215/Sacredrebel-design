/**
 * Cart Functionality - AJAX Cart Drawer
 */

(function() {
  'use strict';

  class Cart {
    constructor() {
      this.drawer = document.querySelector('.cart-drawer');
      this.overlay = document.querySelector('.cart-drawer-overlay');
      this.cartToggle = document.querySelectorAll('.cart-toggle');
      this.cartClose = document.querySelector('.cart-drawer-close');
      this.cartItems = document.querySelector('.cart-items');
      this.cartTotal = document.querySelector('.cart-total-price');
      this.checkoutBtn = document.querySelector('.cart-checkout-btn');

      this.init();
    }

    init() {
      // Open cart drawer
      this.cartToggle.forEach(btn => {
        btn.addEventListener('click', () => this.openCart());
      });

      // Close cart drawer
      if (this.cartClose) {
        this.cartClose.addEventListener('click', () => this.closeCart());
      }

      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.closeCart());
      }

      // Update cart count on load
      this.updateCartCount();

      // Listen for cart updates
      document.addEventListener('cart:updated', () => {
        this.updateCart();
        this.updateCartCount();
      });
    }

    openCart() {
      this.drawer?.classList.add('open');
      this.overlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.updateCart();
    }

    closeCart() {
      this.drawer?.classList.remove('open');
      this.overlay?.classList.remove('active');
      document.body.style.overflow = '';
    }

    async updateCart() {
      try {
        const response = await fetch(window.routes.cart_url + '.js');
        const cart = await response.json();
        this.renderCart(cart);
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    }

    renderCart(cart) {
      if (!this.cartItems) return;

      if (cart.item_count === 0) {
        this.cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        if (this.cartTotal) {
          this.cartTotal.textContent = '$0.00';
        }
        return;
      }

      let html = '';
      cart.items.forEach(item => {
        html += `
          <div class="cart-item" data-key="${item.key}">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
              <div class="cart-item-title">${item.product_title}</div>
              <div class="cart-item-price">${this.formatMoney(item.final_line_price)}</div>
              <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="Cart.updateQuantity('${item.key}', ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="Cart.updateQuantity('${item.key}', ${item.quantity + 1})">+</button>
                <button class="cart-item-remove" onclick="Cart.removeItem('${item.key}')">Remove</button>
              </div>
            </div>
          </div>
        `;
      });

      this.cartItems.innerHTML = html;
      if (this.cartTotal) {
        this.cartTotal.textContent = this.formatMoney(cart.total_price);
      }
    }

    async addToCart(variantId, quantity = 1) {
      try {
        const response = await fetch(window.routes.cart_add_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: variantId,
            quantity: quantity
          })
        });

        const data = await response.json();
        
        if (data.error) {
          alert(data.error);
          return;
        }

        // Trigger cart update event
        document.dispatchEvent(new CustomEvent('cart:updated'));
        
        // Open cart drawer
        this.openCart();

        return data;
      } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Error adding item to cart');
      }
    }

    async updateQuantity(key, quantity) {
      if (quantity < 1) {
        this.removeItem(key);
        return;
      }

      try {
        const response = await fetch(window.routes.cart_change_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: key,
            quantity: quantity
          })
        });

        const data = await response.json();
        document.dispatchEvent(new CustomEvent('cart:updated'));
        return data;
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }

    async removeItem(key) {
      try {
        const response = await fetch(window.routes.cart_change_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: key,
            quantity: 0
          })
        });

        const data = await response.json();
        document.dispatchEvent(new CustomEvent('cart:updated'));
        return data;
      } catch (error) {
        console.error('Error removing item:', error);
      }
    }

    async updateCartCount() {
      try {
        const response = await fetch(window.routes.cart_url + '.js');
        const cart = await response.json();
        
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
          el.textContent = cart.item_count;
          el.style.display = cart.item_count > 0 ? 'flex' : 'none';
        });
      } catch (error) {
        console.error('Error updating cart count:', error);
      }
    }

    formatMoney(cents) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(cents / 100);
    }
  }

  // Initialize cart
  let cartInstance;
  document.addEventListener('DOMContentLoaded', function() {
    cartInstance = new Cart();
    window.Cart = cartInstance;
  });
})();
