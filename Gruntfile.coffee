module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'


    sass:
      options:
        style: 'expanded'
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
      files: ['assets/css/source/*.scss']
      tasks: ['sass', 'autoprefixer']
      options:
        nospawn: true
        interrupt: true

  grunt.loadNpmTasks 'grunt-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-autoprefixer'

  grunt.registerTask 'default', ['sass', 'autoprefixer', 'watch']