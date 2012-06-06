Hampi
=====

Preamble
--------
Some time ago i wanted to create normal (full-featured and seo-optimized) blog on tumblr. But i didn't find such tumblr theme, so i decided to create my own one.


Features
--------
* Header structure is seo-optimized:
	* *index* page: `h1` is logo and `h2` is posts' title.
	* *permalink* page: `h1` is post title, logo is a simple div.
* Conditional comments containing `html` tag ([paul irish tip][1])
* `html` attribute `lang` is displayed in accordance with the [blog settings ][2] (en, de, fr, it, ja, tr, es, ru, pl)
* [Modernizr][3] included
* `html` has `no-js/js` toggling by Modernizr class for advanced `css` styling
* `html5` tags used
* iPhone and iPad favicons
* Classes per page type for advanced customize
* Classes per post for advanced customize

Status
------
NOT READY

TODO
-----
* 'h1' for logo only on home page, not all index pages. Will be undone until *Tumblr theming api* will be updated.
* Customizable `<title>` format
* Customizable `date` per post format
* Add `CSS`
* Add more classes per post for advanced customize (realtive to date)
* Add microformates syntax
* Add `build in` possibility to add google/yandex verification codes, author's codes and google analytics, yandex.metrics;
* Add posibillity to config which post types to output, and which not.
* Short link to the each post
* Add author info blocks per post for multiply users blogs
* Possibility to show/hide posttype icons per post


[1]: http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither
[2]: https://www.tumblr.com/preferences
[3]: https://github.com/Modernizr/Modernizr