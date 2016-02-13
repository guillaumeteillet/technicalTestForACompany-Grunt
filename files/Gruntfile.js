module.exports = function(grunt) {

    grunt.initConfig({
          pkg: grunt.file.readJSON('config.json'),
          copy: {
              main: {
                  files: [{
                      expand: true,
                      cwd: '../files/',
                      src: ['test.js'],
                      dest: '../release/'
                  }]
              }
          },
          'string-replace': {
            dist: {
              files: [{
                expand: true,
                cwd: '../release/',
                src: 'test.js',
                dest: '../release/'
              }],
              options: {
                replacements: [{
                  pattern: '**VERSION**',
                  replacement: '<%= pkg.version %>'
                }]
              }
            }
          }
      });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');


   grunt.registerTask('DoWork', ['copy', 'string-replace']);
}
