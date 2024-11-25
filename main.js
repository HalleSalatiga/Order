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

//Cart Working JS
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

//Making Function
function ready() {
  //remove Items From Cart
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem); // Pass the function correctly
  }
  //  Quantity Changes
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged);
}
}
//Remove Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
//Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <=0) {
    input.value = 1;
  }
  updatetotal();
}


//Update Total
function updatetotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box'); // Correct variable name
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i]; // Correct variable name
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}