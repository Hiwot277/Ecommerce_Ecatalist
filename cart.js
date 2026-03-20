// ============= CART =============
let cart = [];
let cartOpen = false;

function addToCart(product) {
  const existing = cart.find(i => i.product.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }
  cartOpen = true;
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.product.id !== productId);
  renderCart();
}

function updateQuantity(productId, qty) {
  if (qty <= 0) { removeFromCart(productId); return; }
  const item = cart.find(i => i.product.id === productId);
  if (item) item.quantity = qty;
  renderCart();
}

function getTotalItems() {
  return cart.reduce((sum, i) => sum + i.quantity, 0);
}

function getTotalPrice() {
  return cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

function openCart() { cartOpen = true; renderCart(); }
function closeCart() { cartOpen = false; renderCart(); }

function renderCart() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  const badge = document.getElementById('cart-badge');
  
  if (!overlay || !drawer) return;

  const total = getTotalItems();
  if (badge) {
    badge.textContent = total;
    badge.classList.toggle('hidden', total === 0);
  }

  overlay.classList.toggle('open', cartOpen);
  drawer.classList.toggle('open', cartOpen);

  const content = drawer.querySelector('.cart-content');
  if (!content) return;

  if (cart.length === 0) {
    content.innerHTML = `
      <div class="cart-empty">
        ${icons.shoppingBag}
        <p style="font-size:0.875rem">Your cart is empty</p>
      </div>`;
  } else {
    content.innerHTML = `
      <div class="cart-items">
        ${cart.map(item => `
          <div class="cart-item">
            <div class="cart-item-img">${item.product.unit_count}</div>
            <div class="cart-item-info">
              <h4>${item.product.name}</h4>
              <p class="price">$${item.product.price.toFixed(2)}</p>
              <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.product.id}', ${item.quantity - 1})">${icons.minus}</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.product.id}', ${item.quantity + 1})">${icons.plus}</button>
                <button class="remove-btn" onclick="removeFromCart('${item.product.id}')">Remove</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Total</span>
          <span>$${getTotalPrice().toFixed(2)}</span>
        </div>
        <button class="checkout-btn">Checkout</button>
      </div>`;
  }
}
