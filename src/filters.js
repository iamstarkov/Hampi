var jadefilters = module.exports = {};

jadefilters.b = function(block, options) {
	// console.log(arguments);
	var type = Object.keys(options)[0],
		res = this.jade.render(block, this.data);

	// console.log('block type:', type);
	// console.log(arguments);
	if (this.data.tumblr_markup) {
		res = '{block:'+type+'}' + res + '{/block:'+type+'}';
	}

	return res;
};