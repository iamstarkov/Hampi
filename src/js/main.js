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

$(function() {
	if ($('.content-wrap_type_index')[0]) {

		// infinitescroll() is called on the element that surrounds 
		// the items you will be loading more of
		$('.content-wrap_type_index').infinitescroll({

			// selector for the paged navigation (it will be hidden)
			navSelector: '.navigation_type_pagination',

			// selector for the NEXT link (to page 2)
			nextSelector: '.navigation_type_pagination [rel="next"]',

			// selector for all items you'll retrieve
			itemSelector: '.post-preview',

			bufferPx: document.height
		});
	}
});
