const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function styles(){
    return src('./app/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('./dist'));
}


exports.styles = styles;
