const Browser = require('zombie');

import server from '../server.js';

describe('User visits landing page', function(){
	const browser = new Browser();


	before(function(done){
		server.listen(3001, () => {
			browser.visit('http://localhost:3001/#/', done);
		});
	});

	it('Successfull landing', function() {
        browser.assert.success();
    });

    it('navbar loaded', function() {
		browser.assert.elements('nav',1);
    });
});