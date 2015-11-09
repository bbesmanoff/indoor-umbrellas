const Browser = require('zombie');

import server from '../server.js';
const browser = new Browser();

describe('Testing stocks', function(){
	before(function(done){
		browser.visit('http://localhost:3000/stocks.html', done);
	});

	it('should load navbar', function() {
		browser.assert.elements('nav', 1);
	});

	xit('should be able to get Googles correct stock info', function(){
		//TODO testing if stocks work, should also test for bad inputs
	});
});