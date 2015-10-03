const Browser = require('zombie');

import server from '../server';

describe('User visits landing page', function(){
	const browser = new Browser();

	before(function(done){
		const port = 3001;
		server.listen(port);
		browser.visit('http://127.0.0.1:3001/#/',done);
	});

	it('Successfull landing', function() {
        browser.assert.success();
    });

    it('navbar loaded', function() {
		browser.assert.elements('nav',1);
    });
});