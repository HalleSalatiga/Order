//Tampillkan Cart
const cartIcon = document.getElementById('cart-icon');
const cart = document.querySelector('.cart');

cartIcon.addEventListener('click', () => {
  cart.classList.toggle('cart-active'); 
});

const closeCart = document.getElementById('close-cart'); 

closeCart.addEventListener('click', () => {
    cart.classList.remove('cart-active');
});
