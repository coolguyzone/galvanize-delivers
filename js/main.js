let orderLinks = document.querySelectorAll('.order-link');
var receiptHistory = document.querySelector('.receipt-history');
let subtotal = 0;
let displaySubtotal = document.querySelector('#display-subtotal');
let displayTax = document.querySelector('#display-tax');
let displayTotal = document.querySelector('#display-total');
let orderButton = document.querySelector('.btn');
let form = document.querySelector('form');

orderLinks.forEach(function(element){
  element.addEventListener('click', addToOrder);
})

// orderButton.addEventListener('click', placeOrder);
form.addEventListener('submit', placeOrder)


function addToOrder(event) {
  event.preventDefault();
  var item = document.createElement('div');
  item.classList.add('receipt-item');
  if (event.target.id === 'royale') {
    item.innerHTML = "<span>Royale With Cheese</span> <span class='right'>$8.99</span>";
    subtotal += 8.99;
  }
  else if (event.target.id === 'pie') {
    item.innerHTML = "<span>Arugula Pie</span> <span class='right'>$11.99</span>"
    subtotal += 11.99;
  }
  else if (event.target.id === 'swine') {
    item.innerHTML = "<span>Smoked Swine</span> <span class='right'>$14.99</span>"
    subtotal += 14.99;
  }
  else if (event.target.id === 'ice-cream') {
    item.innerHTML = "<span>Ice Cream Biscuit</span> <span class='right'>$7.99</span>"
    subtotal += 7.99;
  }
  receiptHistory.append(item);
  console.log(subtotal);
  displaySubtotal.innerHTML = `$${subtotal.toFixed(2)}`;
  displayTax.innerHTML = `$${(0.08 * subtotal).toFixed(2)}`;
  displayTotal.innerHTML = `$${(subtotal + (0.08 * subtotal)).toFixed(2)}`;
}

function placeOrder(event) {

  console.log('hey!');
}
