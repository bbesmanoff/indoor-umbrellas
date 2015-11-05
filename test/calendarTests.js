const Browser = require('zombie');

import server from '../server.js';
const browser = new Browser();

describe('Testing Calendar Events', function(){
	before(function(done){
		server.listen(8080, () => {
			browser.visit('http://localhost:8080/calendar.html', done);
		});
	});

	it('should load navbar', function() {
		browser.assert.elements('nav', 1);
	});

	xit('should add new events to calendar', function(){
		//TODO
	});
});