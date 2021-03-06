module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-version');
	grunt.initConfig({
		version: {
			json: {
				options: {
					flags: ''
				},
				src: [ 'package.json', 'composer.json', 'package-lock.json' ]

			},
			php: {
				options: {
					prefix: 'THEMEISLE_GUTENBERG_CSS_VERSION\', \'',
					flags: ''
				},
				src: [ 'load.php' ]

			}

		}
	});


};
