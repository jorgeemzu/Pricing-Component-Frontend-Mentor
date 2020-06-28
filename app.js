const price = document.querySelectorAll('.price');
const checkbox = document.getElementById('checkbox');
let element = document.querySelector('label');
let toggle = window.getComputedStyle(element, '::after');
let moveToggle = toggle.getPropertyValue('height');

function setPrice() {
	if (checkbox.checked) {
		price[0].innerHTML = '&dollar;19.99';
		price[1].innerHTML = '&dollar;24.99';
		price[2].innerHTML = '&dollar;39.99';
	} else {
		price[0].innerHTML = '&dollar;199.99';
		price[1].innerHTML = '&dollar;249.99';
		price[2].innerHTML = '&dollar;399.99';
	}
}

checkbox.addEventListener('change', setPrice);
