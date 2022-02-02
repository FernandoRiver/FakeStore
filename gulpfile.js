const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
// const concat = require("gulp-concat");
// const imgmin = require("gulp-imagemin");

// CSS  JavaScript

const  css = () => {
    return src("src/sass/App.scss")
    .pipe( sass() )
    .pipe( dest("src/") );
}

function watchArchivos(){
    watch("src/sass/**/*.scss", css);
}

exports.watch = watchArchivos;