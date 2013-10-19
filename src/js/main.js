if ($('.content-wrap_type_index')[0]) {
	$('.content-wrap_type_index').mosaicflow({
		itemSelector: '.post-preview',
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
