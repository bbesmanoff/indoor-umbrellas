const Browser = require('zombie');

import app from '../server.js';
const browser = new Browser();

describe('Testing Calendar Events', function(){
    var server;
    
	before(function(done){
		server =  app.listen(3000, () => {
            //TODO log in first
          //  browser.visit('http://localhost:3000/calendar.html', done);
            done();
		});
	});

	/*it('should load navbar', function() {
		browser.assert.elements('nav', 1);
	});*/

	xit('should add new events to calendar', function(){
		//TODO
	});
    
    after(() => {
      server.close();
    });
});