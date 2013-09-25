module.exports = function(grunt) {
	var jade = require('jade');
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			options: {
				keepSpecialComments: '*'
			},
			min: {
				files: {
					'./out/css/style.min.css': [
						'./src/css/normalize.css',
						'./src/css/helper.css',
						'./src/css/main.css',
						'./src/css/print.css'
					]
				}
			},
		},
		jade: {
			compile: {
				options: {
					pretty: true,
					// debug: true,
					filters: require('./src/filters.js'),
					data: function(dest, src) {
						// Return an object of data to pass to templates
						return require('./src/options.json');
					},
				},
				files: {
					"out/index.html": "src/index.jade"
				}
			}
		},
		watch: {
			files: [ 'src/**' ],
			tasks: [ 'cssmin', 'jade', 'copy' ]
		},
		clean: ['./out/'],
		copy: {
			js: {
				expand: true,
				cwd: './src/js/',
				src: '**',
				dest: './out/js/'
			},
			imgs: {
				expand: true,
				cwd: './src/img/',
				src: '**',
				dest: './out/img/'
			}

		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'cssmin', 'jade', 'copy']);
	grunt.registerTask('dev', ['default', 'watch']);
};