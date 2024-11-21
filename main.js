//cart
let cartIcon = document.querySelector('#cart-icon.bx.bx-shopping-bag');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('.close-cart');

cartIcon.onclick = () => {
    cart.classList.add('active');
};