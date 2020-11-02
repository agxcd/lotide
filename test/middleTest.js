const chai = require('chai');
const assert = chai.assert;
const middle = require('../middle');

describe('#middle', function() {
  //
  it('returns [] for [2]', () => {
    assert.deepEqual(middle([1]), []);
  });
  //
  it('returns ["Lighthouse"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(middle(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it('returns [2,3] for [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});
