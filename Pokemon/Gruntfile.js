module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    "dist/css/styles.css": "src/*.less"
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            css: {
                src: 'dist/css/*.css',
                dest: 'dist/css/styles.min.css'
            }
        },
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: 'src/*.js',
                dest: 'dist/js/build.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'dist/js/build.min.js': 'dist/js/build.js'
                }
            }
        },
        clean: {
            build: ['dist'],
        },
        injector: {
            options: {
                addRootSlash: false,
                relative: true
            },
            local_dependencies: {
                files: {
                    'src/index.html': ['./dist/js/build.min.js', './dist/css/styles.min.css'],
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean', 'less', 'cssmin', 'concat', 'uglify', 'injector']);
}