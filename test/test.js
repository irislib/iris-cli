/*jshint unused:false*/
/*jshint -W030 */
/*global describe, it */
'use strict';
var chai = require('chai');
chai.should();

var identifi = require('../identifi');

describe('identifi-cli node module', function () {
    it('Should have the search method', function () {
        identifi.commands[0]._name.should.equal('search');
    });
});
