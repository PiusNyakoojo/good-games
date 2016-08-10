var uniqueRandomArray = require('unique-random-array');
var goodGameNames = require('./good-games.json');
var getRandomItem = uniqueRandomArray(goodGameNames);

module.exports = {
	all: goodGameNames,
	random: random
};

function random(number) {

	if ( number === undefined ) {
		return getRandomItem();
	} else {
		var array = [];

		for (var i = 0; i < number; i++) {
			array.push( getRandomItem() );
		}

		return array;
	}
	
}