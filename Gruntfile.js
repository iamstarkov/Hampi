module.exports = function(grunt) {

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
	
	/*
	
	var asd = require('./src/filters.js');

	console.log(asd.Date());
	 */

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', [
		'clean',
		'cssmin',
		'jade:locales',
		'jade:tumblr',
		// 'copy'
		]
	);
	grunt.registerTask('dev', [
		'default',
		'watch'
		]
	);
};