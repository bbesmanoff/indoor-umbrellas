const Browser = require('zombie');

import server from '../server.js';

describe('User visits landing page', function(){
	const browser = new Browser();


	before(function(done){
		server.listen(8080, () => {
			browser.visit('http://localhost:8080/#/', done);
		});
	});

	it('Successfull landing', function() {
		browser.assert.success();
	});

	it('', function() {
		browser.assert.elements('nav',1);
	});
});