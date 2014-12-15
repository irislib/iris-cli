/*global describe, it */
'use strict';

var assert = require('assert');
var identifi = require('../identifi');

describe('identifi-cli node module', function () {
    it('Should have the search method', function () {
        assert(identifi.commands[0]._name === 'search');
    });
});
