
const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('input[name="size"]');
const shippingCheckbox = document.getElementById('shipping');
const priceElement = document.getElementById('outprice');

let totalPrice = 189.99; 

colors.forEach((color) => {
  color.addEventListener('click', () => {
    const selectedColor = color.getAttribute('color');
    const price = color.getAttribute('data-price');
    totalPrice = parseFloat(price); 
    updatePrice();
    removeActiveClass(colors); 
    color.classList.add('active'); 
  });
});


sizes.forEach((size) => {
  size.addEventListener('change', () => {
    const selectedSize = size.value;
    console.log(selectedSize); 
  });
});


shippingCheckbox.addEventListener('change', () => {
  if (shippingCheckbox.checked) {
    totalPrice += 10;
  } else {
    totalPrice -= 10;
  }
  updatePrice();
});

function updatePrice() {
  priceElement.textContent = totalPrice.toFixed(2);
}

function removeActiveClass(elements) {
  elements.forEach((element) => {
    element.classList.remove('active');
  });
}