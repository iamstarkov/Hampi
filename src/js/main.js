if ($('.cells-wrap')[0]) {
	$('.cells-wrap').mosaicflow({
		itemSelector: '.cell',
		minItemWidth: 304,
		itemHeightCalculation: 'attribute'
	});
}

if ($('.post__images-wrap')[0]) {
	$('.post__images-wrap').mosaicflow({
		itemSelector: 'img',
		minItemWidth: 468,
		itemHeightCalculation: 'attribute'
	});
}


$('iframe').prop('width', '100%');
$(window).resize(function() {
	$('iframe').prop('width', '100%');
});
