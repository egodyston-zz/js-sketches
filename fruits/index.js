'use strict';

var fruits = ['apple', 'melon', 'banana'];
var fruitsCount;
var fruitsArray = [];

for (fruitsCount = 9; fruitsCount--;) {
	var randomFruit;
	var randomInt = parseInt(Math.random() * 10);

	if (randomInt <= 3) {
		randomFruit = 'apple';
	} else if (randomInt <= 7) {
		randomFruit = 'melon';
	} else {
		randomFruit = 'banana';
	}

	fruitsArray.push(randomFruit);
};



var j;
for (j in fruitsArray) {
	var fruitNode = document.createElement('img');

	switch(fruitsArray[j]) {
		case 'apple':
			fruitNode.src = 'http://www.realfruitpower.com/ContentImage/ContentImage7-8-2014873623971.png';
			break;
		case 'melon':
			fruitNode.src = 'https://www.pacificcoastfruit.com/wp-content/uploads/2015/06/cantaloupe.png';
			break;
		case 'banana':
			fruitNode.src = 'http://abcfresh.de/wp-content/uploads/2016/03/Banana.png';
			break;
	}
	document.querySelector('.fruit-box').appendChild(fruitNode);
};


