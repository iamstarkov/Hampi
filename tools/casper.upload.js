/*jslint browser: true, regexp: true */
// global casper, require 

var USERNAME, PASSWORD, FILE, casper;

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


if (!casper.cli.has('username') || !casper.cli.has('password') || !casper.cli.has('file')) {
	casper.echo('Usage: $ casperjs tumbl.login.js --username=USERNAME --password=PASSWORD --file=FILE').exit(-1);
}

USERNAME = casper.cli.get('username');
PASSWORD = casper.cli.get('password');
FILE     = casper.cli.get('file');
PWD      = '/Users/vstarkov/projects/Hampi/';

casper.on('remote.message', function(msg) {
    this.log('remote message caught: ' + msg, 'info');
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

	.thenOpen('http://www.tumblr.com/themes/upload_static_file', function() {
		
		this
			.fillSelectors('#content form', {
				'input[type="file"]': PWD+FILE
			}, true);
		this.capture('tumblr.upload.1.jpg');
		// this.click('#content input[type="submit"]');
	})

	.waitForUrl('http://www.tumblr.com/themes/upload_static_file', function() {
		this.capture('tumblr.upload.2.jpg');

		var val = this.evaluate(function() {
			return document.querySelector('#content input[type=text]').getAttribute('value');
		});
		
		this.log('UPLOADED FILE URL: '+val, 'info');
	})

	
	.run();
