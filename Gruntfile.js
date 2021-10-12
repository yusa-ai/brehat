module.exports = function (grunt) {
    grunt.initConfig({
        cwebp: {
            static: {
                options: {
                    m: 6,
                    q: 50
                },
                files: {
                    './build/img/background.webp': './img/background.png',
                    './build/img/brehat.webp': './img/brehat.png',
                    './build/img/chapelle.webp': './img/chapelle.jpg',
                    './build/img/logo.webp': './img/logo.png',
                    './build/img/office.webp': './img/office.jpg',
                    './build/img/port.webp': './img/port.jpg'
                }
            }
        },
        purgecss: {
            bootstrap: {
                options: {
                    content: ['./index.htm']
                },
                files: {
                    './build/css/bootstrap.css': ['./bootstrap-5.1.3-dist/css/bootstrap.min.css']
                }
            },
            style: {
                options: {
                    content: ['./index.htm']
                },
                files: {
                    './build/css/style.css': ['./css/style.css']
                }
            }
        },
        critical: {
            index: {
                options: {
                    base: './',
                    css: ['./build/css/style.css', './build/css/bootstrap.css'],
                    width: 320,
                    height: 70
                },
                src: './index.htm',
                dest: './build/index.htm'
            }
        },
        compress: {
            htm: {
                options: {
                    mode: 'brotli',
                    brotli: {
                        mode: 1
                    }
                },
                expand: true,
                cwd: './build/',
                src: ['**/*.htm'],
                dest: './build/',
                extDot: 'last',
                ext: '.htm.br'
            },
            css: {
                options: {
                    mode: 'brotli',
                    brotli: {
                        mode: 1
                    }
                },
                expand: true,
                cwd: './build/',
                src: ['**/*.css'],
                dest: './build/',
                extDot: 'last',
                ext: '.css.br'
            },
            js: {
                options: {
                    mode: 'brotli',
                    brotli: {
                        mode: 1
                    }
                },
                expand: true,
                cwd: './build/',
                src: ['**/*.js'],
                dest: './build/',
                extDot: 'last',
                ext: '.js.br'
            }
        }
    })

    grunt.loadNpmTasks('grunt-cwebp');
    grunt.loadNpmTasks('grunt-purgecss');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-compress');
}