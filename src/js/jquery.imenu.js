/*!
 * jQuery 'best options' plugin boilerplate
 * Author: @cowboy
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

$.fn.imenu = function ( custom_options ) {

	function on_switch($elem, o, is_mobile) {
		if (is_mobile) {
			o.debug && console.log('desktop -> mobile');
			$elem.addClass(
				$elem.data('imenu-state')
			);
		} else {
			o.debug && console.log('mobile -> desktop');
			$elem.data(
				'imenu-state',
				o.classes.states[
					($elem.hasClass(o.classes.states[0])) ? 0 : 1
				]
			);
			$elem.removeClass( o.classes.states.join(' ') );
		}
	}

	function setting_modes($elem, o) {
		$elem.removeClass(o.classes.modes.join(' '));
		
		var is_mobile = $(window).width() < o.breakpoint;

		if ($elem.data('is_mobile') != is_mobile) {
			on_switch($elem, o, is_mobile);
		}
		$elem.data('is_mobile', is_mobile);


		$elem.addClass(o.classes.modes[is_mobile ? 0 : 1]);
	}

	options = $.extend( {}, $.fn.imenu.options, custom_options );

	return this.each(function () {

		var $elem = $(this),
			o = $.extend( {}, options, $elem.data('imenu') );

		o.debug && console.log($elem, o);

		$elem.data('is_mobile', $(window).width() < o.breakpoint );

		setting_modes($elem, o);
		$(window).resize(function() {
			setting_modes($elem, o);
		});

		if ($elem.data('is_mobile')) {
			$elem.addClass(o.classes.states[0]);
		}
		$(o.toggler).on('click', function (event) {
			if ($elem.data('is_mobile')) {
				$elem.toggleClass( o.classes.states.join(' ') );
			}
			event.preventDefault();
		});


	});
};

$.fn.imenu.options = {
	breakpoint: 600,
	debug: false,
	toggler: '.imenu__toggler',
	classes: {
		modes: [ 'imenu_mode_mobile', 'imenu_mode_desktop' ],
		states: [ 'imenu_mode_mobile-closed', 'imenu_mode_mobile-opened' ]
	}
};


(function () {
	var $a = $('.imenu');
	if (!$a[0]) return -1;
	$a.imenu();
})();

})( jQuery, window, document );