module.exports = function(grunt) {
	var jade = require('jade');
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: [
					'src/css/reset.css',
					'src/css/layout.css',
					'src/css/typo.css',
					'src/css/decoration.css',
					'src/css/print.css'
					],
				dest: 'out/css/style.css',
			},
		},
		cssmin: {
			css: {
				src: 'out/css/style.css',
				dest: 'out/css/style.min.css',
			},
		},

		jade: {
			compile: {
				options: {
					pretty: true,
					// debug: true,
					filters: require('./src/templates/filters/filters.js'),
					data: function(dest, src) {
						// Return an object of data to pass to templates
						return require('./theme_options.json');
					},
				},
				files: {
					"out/index.html": "src/index.jade"
				}
			}
		},
		watch: {
			files: [ 'src/*', 'src/*/*' ],
			tasks: [ 'concat', 'cssmin', 'jade' ]
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'cssmin', 'jade']);
	grunt.registerTask('dev', ['default', 'watch']);
};

/*
grunt.registerTask('main', ['task1', 'stylus', 'jade']);
grunt.registerTask('dev', ['main',  'watch']);
grunt.registerTask('prod', ['main', 'uglify', 'cssmin']);
*/
