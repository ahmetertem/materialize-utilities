module.exports = function(grunt) {
    // configure the tasks
    grunt.initConfig({
        sass: { // Task
            expanded: { // Target
                options: { // Target options
                    outputStyle: 'expanded',
                    sourcemap: false,
                },
                files: {
                    'dist/css/materialize-utilities.css': 'sass/materialize-utilities.scss',
                }
            },
            min: {
                options: {
                    outputStyle: 'compressed',
                    sourcemap: false
                },
                files: {
                    'dist/css/materialize-utilities.min.css': 'sass/materialize-utilities.scss',
                }
            }
        },
        uglify: {
            options: {
                // mangle: false,
                // compress: false,
                // beautify: true
            },
            dist: {
                files: {
                    'dist/js/materialize-utilities.min.js': ['dist/js/materialize-utilities.js']
                }
            }
        },
        watch: {
            sass: {
                files: ['sass/**/*'],
                tasks: ['sass_compile'],
                options: {
                    interrupt: false,
                    spawn: false,
                },
            }
        },
        notify: {
            watching: {
                options: {
                    enabled: true,
                    message: 'Watching Files!',
                    success: true,
                    duration: 1
                }
            },
            sass_compile: {
                options: {
                    enabled: true,
                    message: 'Sass Compiled!',
                    success: true,
                    duration: 1
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-notify');
    grunt.registerTask('release', ['sass:expanded', 'sass:min']);
    grunt.registerTask('sass_compile', ['notify:sass_compile', 'release']);
    grunt.registerTask('default', ['release']);
};
