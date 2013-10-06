var jadefilters = module.exports = {},
	fs = require('fs');

jadefilters.b = function(block, options) {
	var type = Object.keys(options)[0],
		res = this.jade.render(block, this.data);

	return '{block:'+type+'}' + res + '{/block:'+type+'}';
};

jadefilters.if = function(block, options) {
	var type = Object.keys(options)[0],
		res = this.jade.render(block, this.data);

	return '{block:if'+type+'}' + res + '{/block:if'+type+'}';
};

jadefilters.not = function(block, options) {
	var type = Object.keys(options)[0],
		res = this.jade.render(block, this.data);

	return '{block:ifNot'+type+'}' + res + '{/block:ifNot'+type+'}';

};


/**
 * Including helper blocks
 */
var dir = './src/helpers/blocks/';

jadefilters.Tags = function(block) {
	return this.jade.render(fs.readFileSync(dir+'Tags.jade', {encoding: 'utf8'}), this.data);
};
jadefilters.Date = function(block) {
	return this.jade.render(fs.readFileSync(dir+'Date.jade', {encoding: 'utf8'}), this.data);
};
