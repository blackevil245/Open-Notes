var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var copy = require('gulp-copy');
var express = require('gulp-express');
var inject = require('gulp-inject');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var wiredep = require('wiredep');
var notify = require('gulp-notify')

gulp.task('server', function() {
	// Start the server at the beginning of the task
    express.run(['index.js']);

    // Restart server when file changes
    gulp.watch(['app/**/*.html', 'app/**/*.js'], server.notify);
})