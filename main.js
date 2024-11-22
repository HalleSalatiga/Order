//cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('.close-cart'); // Adjust selector

//Open Cart
cartIcon.onClick = () => {
    cart.classList.add('active');
};

//Close Cart
closeCart.onClick = () => {
    cart.classList.remove('active');
};

//Cart Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

//Making Function
function ready(){
    //Remove Item From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener ('click', removeCartItem)
    } 
}

// Function to remove cart items (you need to implement the logic here)
function removeCartItem(event) {
    // 1. Get the item to be removed (e.g., using event.target or its parent element)
    // 2. Update your cart data structure (if you have one) 
    // 3. Update the HTML of your cart (remove the item's display)
    // 4. Update the total price (if you have one)
}