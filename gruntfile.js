'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 320,
            name: 'small'
          }, {
            width: 640,
            name: 'medium'
          }, {
            width: 800,
            name: 'large'
          }]
        },
        files: [{
          expand: true,
          src: ['imgSrc/*.{jpg,gif,png}'],
          dest: 'tmp/'
        }]
      }
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'tmp/imageSrc/',
          src: '**',          
          dest: 'image/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images','copy']);
};