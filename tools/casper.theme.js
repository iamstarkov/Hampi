/*jslint browser: true, regexp: true */
// global casper, require 

var USERNAME, PASSWORD, THEME, casper;

casper = require('casper').create({
	waitTimeout: 20000,
	viewportSize: {
		width: 1400,
		height: 768
	},
	verbose: true,
	// logLevel: 'info',
	logLevel: 'debug',
	// loadPlugins: 'true',
	userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)'
});

if (!casper.cli.has('username') || !casper.cli.has('password') || !casper.cli.has('theme')) {
	casper.echo('Usage: $ casperjs tumbl.login.js --username=USERNAME --password=PASSWORD --theme=text').exit(-1);
}

USERNAME = casper.cli.get('username');
PASSWORD = casper.cli.get('password');
// THEME    = casper.cli.get('theme');
THEME = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html;charset=utf-8" /> {block:Description}<meta name="description" content="{MetaDescription}" />{/block:Description} ZZ <title>{Title}{block:PostSummary} | {PostSummary}{/block:PostSummary}</title> <style> {CustomCSS} </style> </head> <body> </body> </html>';

casper.on('remote.message', function(msg) {
    this.log('REMOTE MESSAGE CAUGHT: ' + msg);
});

casper
	.start('https://tumblr.com/login', function () {
		'use strict';

		this.log('Logging in', 'info');

		this
			.fillSelectors('#signup_form', {
				'#signup_email': USERNAME,
				'#signup_password': PASSWORD
			}, true)
			.waitForUrl('http://tumblr.com/dashboard', function () {
				this.log('We\'re logged in.', 'info');
				this.log( this.getTitle() , 'info');
			});

	})

	.thenOpen('http://tumblr.com/customize', function() {
		this.log('We\'re logged in.', 'info');
		this.log( this.getTitle() , 'info');

		this.click('#edit_html_button');
		console.log(1);
		this.capture('tumblr.theme.1.jpg');

	})

	// .waitUntilVisible('#editor .ace_line_group', function() {
	// .waitForResource('http://fonts.googleapis.com/css?family=Droid+Sans+Mono', function() {
	// .waitForSelector('#editor .ace_line_group', function() {})
	// .waitForText('DOCTYPE', function() {})
	// .waitUntilVisible('#editor', function() {})
	.wait(10000, function() {
		console.log(2);

		casper.capture('tumblr.theme.2.jpg');
		

		var ace = this.evaluate(function(term) {
			var asd = ace.edit("editor");
			var val = asd.session.getValue();

			asd.selectAll();
			// asd.removeLines();
			// asd.insert(term);
			// asd.session.setValue(term);
			// val = asd.session.getValue();
			return val;
		}, THEME);
		this.capture('tumblr.theme.2.1.jpg');
		console.log('ace: ', ace);
	})
	.wait(1000)
	.then(function() {
		console.log(3);
		// this.click('#update_preview_button');
		this.capture('tumblr.theme.3.jpg');
	})
	/*

	.waitUntilVisible('#save_preview_button', function() {
		this.click('#save_preview_button');
		console.log(4);
		this.capture('tumblr.theme.4.jpg');
	})
	.waitWhileVisible('#save_preview_button', function() {
		console.log(5);
		// this.click('#back_to_appearance_button');
		this.capture('tumblr.theme.5.jpg');
	})
	.waitUntilVisible('#appearance #appearance_fields .image_field_control .label', function() {
		console.log(6);
		this.capture('tumblr.theme.6.jpg');
		this.click('#save_settings_button');
	})
	*/

	.run()
	;
	
