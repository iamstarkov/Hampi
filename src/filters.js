var jadefilters = module.exports = {};

jadefilters.b = function(block, options) {
	// console.log(arguments);
	var type = Object.keys(options)[0];
	var res = this.jade.render(block, this.locals);
	// console.log(this.locals.tumblr_markup);

	if (this.locals.tumblr_markup) {
		res = '{block:'+type+'}' + res + '{/block:'+type+'}';
	}

	return res;
};