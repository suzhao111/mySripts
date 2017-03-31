// 引入组件
var gulp = require('gulp');
var less = require('gulp-less');
var pug = require('gulp-pug');
// var minjs = require('gulp-uglify');
// var mincss = require('gulp-clean-css');
// var imageisux = require('gulp-imageisux');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
// var prefixer = require('gulp-autoprefixer');
// var plumber = require('gulp-plumber');
var replace = require('gulp-replace');
var mock = require('gulp-mock-server');
// var flatten = require('gulp-flatten');
// var util = require('gulp-util');
var watch = require('gulp-watch');
// var git = require('git-rev-sync');
var sync = require('browser-sync').create();





// 源目录
// var src = {
//     pug: ['src/models/*/*.pug'],
//     less: ['src/css/*.less', 'src/common/*.less'],
//     pic: 'src/images/*'
// }

// // 输出目录
// var dest = {
//     html: 'dist/view',
//     css: 'dist/css',
//     pic: 'dist/images'
// }

// 自动刷新(默认根目录)
gulp.task('server', function() {
    sync.init({
        notify: false,
        port: 3010,
        startPath: '/src/models/index/index.html',
        proxy: 'localhost:8000',
        serveStatic: ['./']
    });
})

gulp.task('refresh', function(){
    gulp.src('src/models/*/*')
        .pipe(watch('src/models/*/*'))
        .pipe(sync.stream())
})


// 编译pug文件为Html文件
// gulp.task('pug', function() {
//     gulp.src(src.pug)
//         .pipe(watch(src.pug))
//         .pipe(pug({pretty: true}))  //false压缩   true不压缩
//         .pipe(gulp.dest(dest.html))
//         .pipe(sync.stream())
// })

// 编译LESS文件
// gulp.task('less', function() {
//     gulp.src(src.less)
//         .pipe(watch(src.less))
//         .pipe(less())
//         .pipe(gulp.dest(dest.css))
//         .pipe(sync.stream())
// })

// // 压缩图片
// gulp.task('pic', function() {
//     gulp.src(src.pic)
//         .pipe(imagemin())
//         .pipe(gulp.dest(dest.pic))
// })







// 监听所有改动(数据驱动, 开发环境)
gulp.task('default', ['server', 'refresh'])
