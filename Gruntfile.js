module.exports = function (grunt) {
    grunt.initConfig({
        mkdir: {
            build: {
                options: {
                    create: [
                        'build',
                        'build/img',
                        'build/img/320',
                        'build/img/640',
                        'build/img/1024'
                    ]
                },
            },
        },
        cwebp: {
            static: {
                options: {
                    m: 6,
                    q: 50
                },
                files: {
                    'build/img/background.webp': 'img/background.png',
                    'build/img/brehat.webp': 'img/brehat.png',
                    'build/img/chapelle.webp': 'img/chapelle.jpg',
                    'build/img/logo.webp': 'img/logo.png',
                    'build/img/office.webp': 'img/office.jpg',
                    'build/img/port.webp': 'img/port.jpg'
                }
            }
        },
        copy: {
            htm: {
                src: 'build.htm',
                dest: 'build/index.htm',
                options: {}
            },
            css: {
                src: 'css/style.css',
                dest: 'build/css/main.css',
                options: {}
            },
            js: {
                src: 'js/main.js',
                dest: 'build/js/main.js',
                options: {}
            },
            favicon: {
                src: 'img/favicon.png',
                dest: 'build/img/favicon.png',
                options: {}
            },
        },
        uncss: {
            build: {
                files: {
                    'build/css/main.css': ['build.htm']
                }
            }
        },
        processhtml: {
            options: {
                customBlockTypes: ['custom-blocktypes.js']
            },
            dist: {
                files: {
                    'build/index.htm': ['build/index.htm']
                }
            }
        },
        minifyHtml: {
            options: {},
            dist: {
                files: {
                    'build/index.htm': 'build/index.htm'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'build/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/css/',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'build/js/main.js': ['build/js/main.js']
                }
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
                cwd: 'build/',
                src: ['**/*.htm'],
                dest: 'build/',
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
                cwd: 'build/',
                src: ['**/*.css'],
                dest: 'build/',
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
                cwd: 'build/',
                src: ['**/*.js'],
                dest: 'build/',
                extDot: 'last',
                ext: '.js.br'
            }
        }
    })

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-cwebp');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
}