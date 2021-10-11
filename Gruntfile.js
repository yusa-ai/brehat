module.exports = function (grunt) {
    grunt.initConfig({
        purgecss: {
            bootstrap: {
                options: {
                    content: ['./index.htm']
                },
                files: {
                    './dist/css/bootstrap.css': ['./bootstrap-5.1.3-dist/css/bootstrap.min.css']
                }
            },
            style: {
                options: {
                    content: ['./index.htm']
                },
                files: {
                    './dist/css/style.css': ['./css/style.css']
                }
            }
        },
        critical: {
            index: {
                options: {
                    base: './',
                    css: ['./dist/css/style.css', './dist/css/bootstrap.css'],
                    width: 320,
                    height: 70
                },
                src: './index.htm',
                dest: './dist/index.htm'
            }
        }
    })

    grunt.loadNpmTasks('grunt-purgecss');
    grunt.loadNpmTasks('grunt-critical');
}