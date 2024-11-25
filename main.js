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
if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}
//mMaking Function
function ready(){
  //remove Items From Cart
  var removeCartButtons  = document.getElementsByClassName('cart-remove')
  console.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i]
    button.addEventListener('click', removeCartItems)
    }
  }