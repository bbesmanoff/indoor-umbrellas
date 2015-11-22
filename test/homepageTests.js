const Browser = require('zombie');

import app from '../server.js';
const browser = new Browser();

describe('Visiting the site', function(){
    var server;
    
	before(function(done){
		server = app.listen(3000, () => {
			browser.visit('http://localhost:3000/', done);
		});
	});
    
    context('when not logged in', function() {
        it('Successfull landing', function() {
            browser.assert.success();
        });

        xit('shouldnt be able to access the home page', function() {
            browser.visit('http://localhost:3000/index.html', done);
            //make sure we reload the landing page
        });

        xit('shouldnt be able to access the Calendar page', function() {
            browser.visit('http://localhost:3000/calendar.html', done);
        });

        xit('shouldnt be able to access the Stocks page', function() {
            browser.visit('http://localhost:3000/stocks.html', done);
        });
    });
    
    context('when logging in', function() {
        it("should see login button", function(next) {
            browser.visit('http://localhost:3000/', function() {
                browser.assert.text('h3', 'Please log in with Facebook here');
                browser.assert.attribute('a', 'href', '/auth/facebook');
                next();
            });
        });
        
        it("can click login button", function(next) {
            browser.visit('http://localhost:3000/', function() {
                browser.assert.attribute('a', 'href', '/auth/facebook');
                browser.clickLink("a", function(){
                    //redirects to fb login page with error message
                    browser.assert.redirected();
                    browser.assert.text('title', 'Error');
                    next();
                });
            });
        });
        
        /*context("attempting to log in", function(){
            it("with wrong credentials", function(next) {
                browser.visit('http://localhost:3000/', function() {
                    browser.assert.attribute('a', 'href', '/auth/facebook');
                    browser.clickLink("a", function(){
                        browser.wait(10000, function(){
                            browser.assert.text('title', 'Log into Facebook | Facebook');
                          browser
                            .fill('input[name="email"]', "wrongname")
                            .fill('input[name="pass"]', "wrongpassword")
                            .pressButton('input[name="login"]', function() {
                                //expect failure
                                expect(browser.query('input[name="login"]')).toBeDefined();
                                next();
                            });
                        });
                    });
                });
            });

            it("should be able to login with correct credentials", function(next) {
                browser
                .fill('input[name="username"]', "admin")
                .fill('input[name="password"]', "1234")
                .pressButton('input[value="Login"]', function(res) {
                    expect(browser.html("body")).toContain("Insanely fast, headless full-stack testing using Node.js");
                    expect(browser.query("input[value='Login']")).toBeUndefined();
                    next();
                });
            });
        });*/
    });
    
    context('after successful login', function() {
        it('Successfull landing', function() {
            browser.assert.success();
        });

        /*it('should load navbar', function() {
            browser.assert.elements('nav', 1);
        });*/

        xit('should be able to post to Facebook', function() {
            //TODO test front page functionality including facebook posting, and other things
        });
        
    });
    
    after(() => {
      server.close();
    });
});