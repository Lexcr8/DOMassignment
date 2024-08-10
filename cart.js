// Select DOM elements
const addToCartButton = document.getElementById('addToCartButton');
const removeFromCartButton = document.getElementById('removeFromCartButton');
const loveButton = document.getElementById('loveButton');
const cartItemsDiv = document.getElementById('cartItems');

// Sample item to add to the cart
let item = 'Shoes';

// Add to Cart Functionality
addToCartButton.addEventListener('click', () => {
  let cartItem = document.createElement('p');
  cartItem.textContent = item;
  cartItem.className = 'cart-item';
  cartItemsDiv.appendChild(cartItem);
  updateCartMessage();
});

// Remove from Cart Functionality
removeFromCartButton.addEventListener('click', () => {
  const cartItems = document.querySelectorAll('.cart-item');
  if (cartItems.length > 0) {
    cartItemsDiv.removeChild(cartItems[cartItems.length - 1]);
  }
  updateCartMessage();
});

// Toggle Love (Favorite) Shape
loveButton.addEventListener('click', () => {
  loveButton.classList.toggle('loved');
});

// Update the cart message
function updateCartMessage() {
  const cartItems = document.querySelectorAll('.cart-item');
  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = '<p>No items in cart.</p>';
  } else {
    cartItemsDiv.innerHTML = ''; // Clear the message if items exist
    cartItems.forEach(item => cartItemsDiv.appendChild(item));
  }
}
