'use strict';

var assert = require('assert');
var Exec = require('../lib/exec');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Exec).run(
    [], // inputs
    {command: 'ls .'}, // options
    console // logger
).then(function(inputs){

}).catch(errorHandler);

(new Exec).run(
    [], // inputs
    {command: 'notexisted'}, // options
    console // logger
).then(function(inputs){

    }).catch(errorHandler);