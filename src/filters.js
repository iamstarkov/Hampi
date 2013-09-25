var jadefilters = module.exports = {};

jadefilters.b = function(block, options) {
	// console.log(arguments);
	var type = Object.keys(options)[0];
	return '{block:'+type+'}'+this.jade.render(block, this.locals)+'{/block:'+type+'}';
};