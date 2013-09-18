var jade = require('jade');
var jadefilters = module.exports = {};

jadefilters.Posts = function(block) {
	return '{block:Posts}'+jade.render(block)+'{/block:Posts}';
};

jadefilters.Audio = function(block) {
	return '{block:Audio}'+jade.render(block)+'{/block:Audio}';
};

jadefilters.Video = function(block) {
	return '{block:Video}'+jade.render(block)+'{/block:Video}';
};