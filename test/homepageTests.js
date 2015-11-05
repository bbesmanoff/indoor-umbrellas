const Browser = require('zombie');

import server from '../server.js';
const browser = new Browser();

describe('Visiting the site loggged off', function(){

	before(function(done){
		browser.visit('http://localhost:8080/', done);
	});

	it('Successfull landing', function() {
		browser.assert.success();
	});

	xit('shouldnt be able to access the home page', function() {
		browser.visit('http://localhost:8080/index.html', done);
		//make sure we reload the landing page
	});

	xit('shouldnt be able to access the Calendar page', function() {
		browser.visit('http://localhost:8080/calendar.html', done);
	});

	xit('shouldnt be able to access the Stocks page', function() {
		browser.visit('http://localhost:8080/stocks.html', done);
	});
});

describe('Logging in', function(){

	xit('as test user', function() {
		//need to look up how to click the button on landing page
		//then log in as test user and make sure you can navigate to the site
	});
});

describe('Testing homepage components', function(){

	before(function(done){
		browser.visit('http://localhost:8080/index.html', done);
	});

	it('Successfull landing', function() {
		browser.assert.success();
	});

	it('should load navbar', function() {
		browser.assert.elements('nav', 1);
	});

	xit('should be able to post to Facebook', function() {
		//TODO test front page functionality including facebook posting, and other things
	});
});
