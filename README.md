Hampi
=====

Preamble
--------
Some time ago i wanted to create normal (full-featured and seo-optimized) blog on tumblr. But i didn't find such tumblr theme, so i decided to create my own one.


Features
--------
* Outputs only text and video (iframe) posts
* Header structure is seo-optimized:
	* **index page**: `h1` is logo and `h2` is posts' title
	* **post page**: `h1` is post title, logo only simple div
* Conditional comments containing `html` tag ([paul irish tip][1])
* `html` attribute `lang` is displayed in accordance with the [blog settings ][2] (en, de, fr, it, ja, tr, es, ru, pl)
* [Modernizr][3] included
* `html` has `no-js/js` toggling by Modernizr class for advanced `css` styling
* `html5` tags used


Status
------
Markup only for index page exists, and there is no CSS yet.

TODO
-----
* iphone and ipad favicons
* `html5` heading structure if on index page outputs not only titles or using 'read more' blocks


[1]: http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither
[2]: https://www.tumblr.com/preferences
[3]: https://github.com/Modernizr/Modernizr