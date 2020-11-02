const chai = require('chai');
const assert = chai.assert;
const tail = require('../tail');

describe('#tail', function() {
  //
  it('returns 2 for ["Yo Yo", "Lighthouse", "Labs"].length', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
  //
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});
