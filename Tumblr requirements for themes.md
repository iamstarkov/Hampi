Requirements
------------

* No external assets.  Host ALL assets (images, css, js, etc.) with our static file uploader.

* Third-party widgets must be optional.  All widgets (Disqus, Flickr, etc.) and placeholder content (blogrolls, etc.) should only be enabled using custom text.

* Must support all post types. Include:
	* Text
	* Photo
	* Quote
	* Link
	* Chat
	* Audio
	* Video blocks.

* Must support standard tags. Include:
	* {RSS} (never use "/rss")
	* {Favicon}
	* {CustomCSS}
	* {LinkOpenTag} (for Photo posts)
	* {MetaDescription}
	* {PhotoAlt}

* Try to include:
	* {PostNotes}
	* {NoteCount}
	* {Description}
	* search
	* custom colors where aesthetically acceptable.

* Must be under 64KB. Host CSS and JavaScript using our static file uploader if necessary.