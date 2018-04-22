module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    simplemocha: {
      backend: {
        src: ['test/unit/specs/server/models/atm.spec']
      }
    },
    karma: {
      unit: {
        configFile: 'test/unit/karma.conf.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['simplemocha']);
};
