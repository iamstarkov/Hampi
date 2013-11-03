module.exports = function(grunt) {
	"use strict";

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
		autoprefixer: {
			options: {
				browsers: ['last 3 version', 'android 4', 'bb 10', 'bb 7']
			},
			files: {
		      expand: true,
		      flatten: true,
		      src: 'src/css/*.css', // -> src/css/file1.css, src/css/file2.css
		      dest: 'src/css/' // -> dest/css/file1.css, dest/css/file2.css
		    },
		},
		jade: {
			locales: {
				options: {
					pretty: true,
					data: function(dest, src) {
						var options = require('./src/options.json');
						return options;
					},
				},
				files: [
					{
						expand: true,
						cwd: './src/helpers/locales/',
						src: '*',
						dest: './src/tmp/helpers/locales/',
						ext: '.tumblr'
					}
				]
			},
			tumblr: {
				options: {
					pretty: true,
					data: function(dest, src) {

						var options = require('./src/options.json');
						
						// Including helpers locales
						grunt.file.expand( {filter: 'isFile'}, './src/tmp/helpers/locales/*') .forEach(function(file) {
							var name = file.replace('./src/tmp/helpers/locales/', '').replace('.tumblr', '');
								content = grunt.file.read(file);
							options[name] = content;
						});
						return options;
					},
				},
				files: {
					'./out/theme.tumblr': './src/theme.jade',
				}
			},
		},
		watch: {
			files: [ './Gruntfile.js', './src/**' ],
			tasks: [ 'cssmin', 'jade', 'copy' ]
		},
		clean: ['./out/', './src/tmp/'],
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

    require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
		'clean',
		'cssmin',
		'jade:locales',
		'jade:tumblr',
		'copy'
		]
	);
	grunt.registerTask('dev', [
		'default',
		'watch'
		]
	);
};
