var vegetablesJson = [{
	name: 'tomato',
	color: 'red',
	quantity: 3,
	sweet: false,
	greetings: () => greetVegetable(this)
}, {
	name: 'carrot',
	color: 'orange',
	quantity: 2,
	sweet: true,
	greetings: () => greetVegetable(this)
}];

function greetVegetable(veg) {
	console.log('Hello, I am' + veg.name)
};

for (var veg of vegetablesJson) {
	veg.age = (veg.sweet) ? 10 : 100;
	var vegNode = document.createElement('li');
	var name = ' ';
	for (var i = 0; i < veg.quantity; i++) {
		name += veg.name + ' ';
	}
	veg.greetings();

	vegNode.textContent = name;
	vegNode.style.color = veg.color;
	vegNode.style.fontStyle = (veg.sweet) ? 'italic' : 'normal';
	document.querySelector('.vegetables').appendChild(vegNode);
}


