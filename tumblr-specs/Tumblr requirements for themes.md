#SUBMIT PHOTO PHOTOSET post-type detection

Requirements
------------

* No external assets.  Host ALL assets (images, css, js, etc.) with our static file uploader.

* Third-party widgets must be optional.  All widgets (Disqus, Flickr, etc.) and placeholder content (blogrolls, etc.) should only be enabled using custom text.

* Must support all post types. Include:
	* Text **DONE**
	* Photo
	* Photosets
	* Quote
	* Link
	* Chat
	* Audio
	* Video blocks

* Must support standard tags. Include:
	* {RSS} (never use "/rss") **DONE**
	* {Favicon} **DONE**
	* {CustomCSS} **DONE**
	* {LinkOpenTag} (for Photo posts) **DONE**
	* {MetaDescription} **DONE**
	* {PhotoAlt} **DONE**

* Try to include:
	* {PostNotes}
	* {NoteCount}
	* {Description}
	* search
	* custom colors where aesthetically acceptable.

* Must be under 64KB. Host CSS and JavaScript using our static file uploader if necessary.