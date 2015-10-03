const Browser = require('zombie');

Browser.localhost('indoor-umbrellas',3000);

describe('User visits landing page', function(){
	const browser = new Browser();

	before(function(done){
		browser.visit('/',done);
	});

	it('Successfull landing', function() {
        browser.assert.success();
    });

    it('navbar loaded', function() {
		browser.assert.elements('nav',1);
    });
});