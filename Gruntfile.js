module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      files: 'src/*',
      tasks: ['jshint'],
      options: {
        debounceDelay: 250
      }
    },
    jshint: {
      files: ['src/**/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'watch']);
};