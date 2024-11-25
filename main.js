const cartIcon = document.getElementById('cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.getElementById('close-cart');

// Tampilkan keranjang saat ikon bag diklik
cartIcon.addEventListener('click', () => {
  cart.classList.add('cart-active');
});

// Tutup keranjang saat ikon close diklik
closeCart.addEventListener('click', () => {
  cart.classList.remove('cart-active');
});