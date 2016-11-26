const Browser = require('zombie');

import app from '../server.js';
const browser = new Browser();

describe('Testing stocks', function(){
    var server;
    
    before(function(done){
		server = app.listen(3000, () => {
            //TODO log in first
            //TODO need quandl api info
			browser.visit('http://localhost:3000/stocks.html', done);
		});
	});

	it('should load navbar', function() {
		browser.assert.elements('nav', 1);
	});

	xit('should be able to get Googles correct stock info', function(){
		//TODO testing if stocks work, should also test for bad inputs
	});
    
    after(() => {
      server.close();
    });
});