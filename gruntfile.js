module.exports = function(grunt) {
	
	grunt.initConfig({
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'expanded'
				},
				files: {                         // Dictionary of files
					'assets/style.css': 'assets/sass/style.scss'       // 'destination': 'source'
				}
			}
		},
		watch: {
			css: {
    			files: ['**/*.scss'],
    			tasks: ['sass'],
    // 			options: {
				// 	livereload: true,
				// }
			},			
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', 'sass');
}