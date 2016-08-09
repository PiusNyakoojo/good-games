var uniqueRandomArray = require('unique-random-array');
var goodGameNames = require('./good-games.json');

module.exports = {
	all: goodGameNames,
	random: uniqueRandomArray(goodGameNames)
};