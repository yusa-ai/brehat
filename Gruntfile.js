module.exports = function (grunt) {
    grunt.initConfig({
        responsive_images: {
            task: {
                options: {
                    sizes: [{
                        width: 320,
                    }, {
                        width: 640,
                    }, {
                        width: 1024,
                    }],
                    engine: 'im'
                },
                files: [{
                    expand: true,
                    src: ['**.{jpg,gif,png}'],
                    cwd: './img',
                    custom_dest: './dist/img/{%= width %}/'
                }]
            }
        },
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

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-purgecss');
    grunt.loadNpmTasks('grunt-critical');
}