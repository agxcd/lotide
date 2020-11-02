const chai = require('chai');
const assert = chai.assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe('eqArrays', function() {
  //
  it('eqArrays(["1", "2", "3"], ["1", "2", "3"]))', function() {
    const actual = ["1", "2", "3"];
    const expected = ["1", "2", "3"];
    assert.equal(assertEqual(eqArrays(actual, expected), true));
  });

  //
  it('eqArrays(["1", "2", "3"], ["1", "2", 3])', function() {
    const actual = ["1", "2", "3"];
    const expected = ["1", "2", 3];
    assert.equal(assertEqual(eqArrays(actual, expected), false));
  });


  //
  it('eqArrays([1, "2", "3"], ["1", "2", 3])', function() {
    const actual = [1, "2", "3"];
    const expected = ["1", "2", 3];
    assert.equal(assertEqual(eqArrays(actual, expected), false));
  });
});
