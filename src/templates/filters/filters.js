// var jade = require('jade');
var jadefilters = module.exports = {};
var locals = require('./../../../theme_options.json');


/**
 * always working fine 
 */
jadefilters.Posts = function(block) {
	return '{block:Posts}'+block+'{/block:Posts}';
};

jadefilters.Audio = function(block) {
	return '{block:Audio}'+block+'{/block:Audio}';
};

jadefilters.Video = function(block) {
	return '{block:Video}'+block+'{/block:Video}';
};

/**
 * working fine with locals, but failed with nested filters
 */
/*
jadefilters.Posts = function(block) {
	return '{block:Posts}'+jade.render(block, locals)+'{/block:Posts}';
};

jadefilters.Audio = function(block) {
	return '{block:Audio}'+jade.render(block, locals)+'{/block:Audio}';
};

jadefilters.Video = function(block) {
	return '{block:Video}'+jade.render(block, locals)+'{/block:Video}';
};
*/