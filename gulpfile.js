'use strict';

var gulp = require('gulp');
var counoscoincoreTasks = require('counoscoincore-build');

counoscoincoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
