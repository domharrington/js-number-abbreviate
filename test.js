var numAbbr = require('./')
  , assert = require('assert')

describe('number-abbreviate', function () {

  it('should abbreviate numbers', function () {

    assert.equal(numAbbr(12, 1), '12')
    assert.equal(numAbbr(0, 2), '0')
    assert.equal(numAbbr(1234, 0), '1k')
    assert.equal(numAbbr(34567, 2), '34.57k')
    assert.equal(numAbbr(918395, 1), '918.4k')
    assert.equal(numAbbr(2134124, 2), '2.13m')
    assert.equal(numAbbr(47475782130, 2), '47.48b')

  })

})
