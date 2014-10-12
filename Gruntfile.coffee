module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'


    sass:
      options:
        outputStyle: 'expanded'
        sourcemap: true
      dist:
        files: 
          ['assets/css/main.css' : 'assets/css/source/main.scss'];
      
    autoprefixer:        
      single_file:
        options:
          browsers: ['last 10 version']
        src: 'assets/css/main.css',
        dest: 'assets/css/main.css'    

    watch:
      files: ['assets/css/source/*.scss', 'assets/css/source/**/*.scss']
      tasks: ['sass', 'autoprefixer']
      options:
        nospawn: true
        interrupt: true

    uglify:
      compress_mangle:
        files:
          'assets/js/main.min.js': ['assets/js/jquery.js', 'assets/js/prism.js', 'assets/js/main.js']


  grunt.loadNpmTasks 'grunt-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-autoprefixer'
  grunt.loadNpmTasks 'grunt-contrib-uglify'

  grunt.registerTask 'default', ['sass', 'autoprefixer', 'uglify', 'watch']