'use strict';

var a = [1, 14, 2];
a = a.concat(3, 127);
a = a.sort((a, b) => a - b);
var print = '';
var i;
var separator = ', ';
for (i = 0; i < a.length; i++) {
	if (i === a.length - 1) {
		separator = ' :)';
	}
	if (i === 0 && a[i] !== 10) {
		a[i] = 'one';
	}

	switch (i) {
		default:
			break;
		case 3:
		case 4:
			a[i] = 'x';
			break;
	}

	print += a[i] + separator;
}

document.querySelector('.print').textContent = print;