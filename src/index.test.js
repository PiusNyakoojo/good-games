var expect = require('chai').expect;
var goodGames = require('./index');

describe('good-games', function() {
	describe('all', function() {
		it('should be an array of strings', function() {
			expect(goodGames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should contain `World of Warcraft`', function() {
			expect(goodGames.all).to.include('World of Warcraft');
		});
	});

	describe('random', function() {
		it('should return a random item from goodGames.all', function() {
			var randomItem = goodGames.random();
			expect(goodGames.all).to.include(randomItem);
		});

		it('should return an array of random items if passed a number', function() {
			var randomItems = goodGames.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(item) {
				expect(goodGames.all).to.include(item);
			});
		});
	});
});