const directory = {
    input: 'src',
    output: 'dist'
};

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const path = {
    input: {
        data: `./${directory.input}/data/data.json`,
        html: `./${directory.input}/*.html`,
        image: {
            main: [
                `./${directory.input}/image/**/*.*`,
                `!./${directory.input}/image/sprite/**/*.*`
            ],
            sprite: {
                raster: `./${directory.input}/image/sprite/**/*.png`,
                vector: `./${directory.input}/image/sprite/**/*.svg`
            }
        },
        script: {
            library: [
                './node_modules/jquery/dist/jquery.min.js', // 85 kb
                './node_modules/slick-carousel/slick/slick.min.js', // 42 kb
                './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js', // 20 kb
                './node_modules/jquery-zoom/jquery.zoom.min.js' // 3 kb
            ],
            main: `./${directory.input}/script/**/*.js`
        },
        style: `./${directory.input}/style/main.scss`
    },
    output: {
        html: `./${directory.output}`,
        image: {
            main: `./${directory.output}/image`,
            sprite: {
                raster: `./${directory.output}/image/sprite`,
                vector: `./${directory.output}/image/sprite`
            },
        },
        script: {
            library: `./${directory.output}/script`,
            main: `./${directory.output}/script`
        },
        style: `./${directory.output}/style`
    },
    watch: {
        data: `./${directory.input}/data/data.json`,
        html: `./${directory.input}/**/*.html`,
        image: {
            main: [
                `./${directory.input}/image/**/*.*`,
                `!./${directory.input}/image/sprite/**/*.*`
            ],
            sprite: {
                raster: `./${directory.input}/image/sprite/**/*.png`,
                vector: `./${directory.input}/image/sprite/**/*.svg`
            }
        },
        script: {
            main: `./${directory.input}/script/**/*.js`
        },
        style: `./${directory.input}/style/**/*.scss`
    }
};

const port = 3000;

module.exports.directory = directory;
module.exports.isDevelopment = isDevelopment;
module.exports.path = path;
module.exports.port = port;