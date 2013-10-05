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
			compile_helpers: {
				options: {
					pretty: true,
					filters: require('./src/filters.js'),
					data: function(dest, src) {
						var options = require('./src/options.json');
						options.tumblr_markup = true;
						return options;
					},
				},
				files: [
					{
						expand: true,
						cwd: './src/helpers/',
						src: '*',
						dest: './src/tmp/helpers/',
						ext: '.tumblr'
					}
				]
			},
			compile_pages: {
				options: {
					pretty: true,
					filters: require('./src/filters.js'),
					data: function(dest, src) {
						var options = require('./src/options.json');

						options.tumblr_markup = false;

						return options;
					},
				},
				files: [
					{
						expand: true,
						cwd: './src/pages/',
						src: '*',
						dest: './out/',
						ext: '.html'

					}
				]
			},
			compile_tumblr: {
				options: {
					pretty: true,
					filters: require('./src/filters.js'),
					data: function(dest, src) {

						var options = require('./src/options.json');
						
						grunt.file.expand(
							{filter: 'isFile'},
							'./src/tmp/helpers/*'
						)
						.forEach(function(file) {
							// console.log(file);
							var name = file
								.replace('./src/tmp/helpers/', '')
								.replace('.tumblr', ''),
								content = grunt.file.read(file);
							options[name] = content;
						});
						
						options.tumblr_markup = true;
						
						return options;
					},
				},
				files: {
					'./out/theme.tumblr': './src/theme.jade',
				}
			},
		},
		watch: {
			files: [ './src/**' ],
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

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', [
		'clean',
		'cssmin',
		'jade:compile_helpers',
		'jade:compile_pages',
		'jade:compile_tumblr',
		'copy'
		]
	);
	grunt.registerTask('dev', [
		'default',
		'watch'
		]
	);
};