'use strict';

var app = require('angular').module('app');
app.controller('test', ['common', require('./test')]);