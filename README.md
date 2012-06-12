Hampi
=====

Preamble
--------
Some time ago i wanted to create normal (full-featured and seo-optimized) blog on tumblr. But i didn't find such tumblr theme, so i decided to create my own one.


Features
--------
* Header structure is seo-optimized:
	* *index* page: `div` is logo and `h2` is posts' title.
	* *permalink* page: `h1` is post title, logo is a simple div.
* `html` attribute `lang` is displayed in accordance with the [blog settings ][2] (en, de, fr, it, ja, tr, es, ru, pl)
* [Modernizr][3] included
* `html` has `no-js/js` toggling by Modernizr class for advanced `css` styling
* `html5` tags used
* iPhone and iPad favicons
* Classes per page type for advanced customize
* Classes per post for advanced customize
* Respect rtl and ltr languages
* A lot of classes per post for advanced customize (relatively to date)
* Choice beetwen long and short date
* Author info blocks per post for multiply users blogs
* Google Analytics support
* Google Verification code support
* Yandex Metrika support (with features)
* Yandex Verification code support
* Posibillity to choose which post types to output, and which not.


Status
------
NOT READY

TODO
----
* Conditional comments containing `html` tag ([paul irish tip][1])
* Customizable `title` format
* Customizable `date` format
* Add microformates syntax
* Short link to the each post
* Possibility to show/hide posttype icons per post
* meta tag for previous and next and author tag
* skip links
* Add ARIA requirements	
* Permalink navigation
* Respect to http://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B2%D1%8B%D1%87%D0%BA%D0%B8
* **IMPOSSIBLE NOW** 'h1' for logo only on home page, not all index pages. Will be undone until *Tumblr theming api* will be updated.
* Optimizations for opera speed dial shots
* http://www.globinch.com/pagination-seo-using-relnext-and-relprev-link-attributes/

[1]: http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither
[2]: https://www.tumblr.com/preferences
[3]: https://github.com/Modernizr/Modernizr