//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");

cartIcon.onclick = () =>{
    cart.classList.add("active");
}