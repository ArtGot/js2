// задание 2.1

const elem1 = document.createElement('div');

document.body.appendChild(elem1);

elem1.textContent = "Этот элемент создан при помощи DOM API";

// задание 2.2

const elem2 = document.createElement('div');

elem2.textContent = "Этот элемент создан при помощи DOM API";

elem2.classList.add('inner');

elem1.appendChild(elem2);

// задание 2.3

elem2.style.color = "red";

// задание 2.4

elem1.addEventListener('click', function () {
	console.log("Этот текст говорит о том, что я всё сделал правильно");
});

// задание 2.5

const elem3 = document.createElement('a');

elem3.setAttribute('href', 'https://loftschool.com');

document.body.appendChild(elem3);

elem3.textContent = "Это созданная ссылка";

elem3.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('Я кликнул на ссылку ' + elem3.getAttribute('href'));
});

// задание 2.6

const elem4 = document.createElement('input');
const elem5 = document.createElement('button');

document.body.appendChild(elem4);
document.body.appendChild(elem5);

elem5.textContent = "Это кнопка";

elem4.setAttribute('id', 'elemId');

elem5.addEventListener('click', function(el) {
	el.preventDefault();
	console.log(document.getElementById('elemId').value);
});

// задание 2.7

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const maxRight = 500;
const minRight = 0;
const step = 100;
let currentRigth = 0;

items.style.right = currentRigth;

right.addEventListener("click", function(elem) {
	elem.preventDefault();

	if (currentRigth<maxRight) {
		currentRigth += step;
		items.style.right = currentRigth + "px";
	};

});

left.addEventListener("click", function(elem) {
	elem.preventDefault();

	if (currentRigth>minRight) {
		currentRigth -= step;
		items.style.right = currentRigth + "px";
	};

});