let orderLinks = document.querySelectorAll('.order-link');
var receiptHistory = document.querySelector('.receipt-history');
let subtotal = 0;
let displaySubtotal = document.querySelector('#display-subtotal');
let displayTax = document.querySelector('#display-tax');
let displayTotal = document.querySelector('#display-total');
let orderButton = document.querySelector('.btn');
let form = document.querySelector('form');
let main = document.querySelector('.main');

window.onload = function() {
  receiptHistory.innerHTML = localStorage.orderhistory;
  subtotal = parseFloat(localStorage.subtotal);
  displaySubtotal.innerHTML = localStorage.subtotal;
  var oldItems = document.querySelectorAll('.receipt-item');
  for (var i = 4; i < oldItems.length; i++) {
    let height = main.offsetHeight;
    let newHeight = main.offsetHeight + 50;
    main.style.height = `${newHeight}px`
  }
  let btns = document.querySelectorAll('.btn-medium');
  btns.forEach(function(element){
    element.addEventListener('click', removeItem)
  })
}


orderLinks.forEach(function(element){
  element.addEventListener('click', addToOrder);
})

form.addEventListener('submit', placeOrder);


function addToOrder(event) {
  event.preventDefault();
  var item = document.createElement('div');
  item.classList.add('receipt-item');
  if (event.target.id === 'royale') {
    item.innerHTML = "<span>Royale With Cheese</span> <span class='right'>$8.99</span><a class='btn-floating btn-medium grey'><i class='material-icons'>close</i></a>";
    subtotal += 8.99;
  }
  else if (event.target.id === 'pie') {
    item.innerHTML = "<span>Arugula Pie</span> <span class='right'>$11.99</span><a class='btn-floating btn-medium grey'><i class='material-icons'>close</i></a>"
    subtotal += 11.99;
  }
  else if (event.target.id === 'swine') {
    item.innerHTML = "<span>Smoked Swine</span> <span class='right'>$14.99</span><a class='btn-floating btn-medium grey'><i class='material-icons'>close</i></a>"
    subtotal += 14.99;
  }
  else if (event.target.id === 'ice-cream') {
    item.innerHTML = "<span>Ice Cream Biscuit</span> <span class='right'>$7.99</span><a class='btn-floating btn-medium grey'><i class='material-icons'>close</i></a>"
    subtotal += 7.99;
  }
  receiptHistory.append(item);
  console.log(subtotal);
  displaySubtotal.innerHTML = `$${subtotal.toFixed(2)}`;
  displayTax.innerHTML = `$${(0.08 * subtotal).toFixed(2)}`;
  displayTotal.innerHTML = `$${(subtotal + (0.08 * subtotal)).toFixed(2)}`;

  var totalReceipts = document.querySelectorAll('.receipt-item');
  if (totalReceipts.length > 5) {
    let height = main.offsetHeight;
    let newHeight = main.offsetHeight + 50;
    main.style.height = `${newHeight}px`
  }
  localStorage.setItem('subtotal', subtotal);
  localStorage.setItem('orderhistory', `${receiptHistory.innerHTML}`);
  let btns = document.querySelectorAll('.btn-medium');
  btns.forEach(function(element){
    element.addEventListener('click', removeItem)
  })
}

function placeOrder(event) {
    event.preventDefault();
    if(subtotal === 0) {
      Materialize.toast('Your Cart Is Empty! Please Add Foodz.', 5000);
   }
   else {
     Materialize.toast('We Are Making Your Foodz, Prepare For Calories!', 5000);
     localStorage.clear();
     receiptHistory.innerHTML = '';

   }
}

function removeItem(event) {
  let price = this.parentNode.children[1].textContent.substr(1);
  subtotal -= price;
  localStorage.setItem('subtotal', subtotal);
  displaySubtotal.innerHTML = `$${subtotal.toFixed(2)}`;
  displayTax.innerHTML = `$${(0.08 * subtotal).toFixed(2)}`;
  displayTotal.innerHTML = `$${(subtotal + (0.08 * subtotal)).toFixed(2)}`;
  this.parentNode.parentNode.removeChild(this.parentNode);
  localStorage.setItem('orderhistory', `${receiptHistory.innerHTML}`);
}
