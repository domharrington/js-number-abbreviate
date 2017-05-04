var NumAbbr = require('./')
  , numAbbrFn = require('./')
  , assert = require('assert')

describe('number-abbreviate', function () {

  it('should abbreviate numbers', function () {

    var numAbbr = new NumAbbr()
    assert.equal(numAbbr.abbreviate(12, 1), '12')
    assert.equal(numAbbr.abbreviate(0, 2), '0')
    assert.equal(numAbbr.abbreviate(1234, 0), '1k')
    assert.equal(numAbbr.abbreviate(34567, 2), '34.57k')
    assert.equal(numAbbr.abbreviate(918395, 1), '918.4k')
    assert.equal(numAbbr.abbreviate(2134124, 2), '2.13m')
    assert.equal(numAbbr.abbreviate(47475782130, 2), '47.48b')
    assert.equal(numAbbr.abbreviate(47475782130000, 2), '47.48t')

  })

  it('should abbreviate to digital units', function() {

    var numAbbr = new NumAbbr(['KB', 'MB', 'GB', 'T'])
    assert.equal(numAbbr.abbreviate(13, 1), '13')
    assert.equal(numAbbr.abbreviate(0.0, 4), '0')
    assert.equal(numAbbr.abbreviate(4398, 0), '4KB')
    assert.equal(numAbbr.abbreviate(8192, 2), '8.19KB')
    assert.equal(numAbbr.abbreviate(833124111, 3), '833.124MB')
    assert.equal(numAbbr.abbreviate(833124111, 3), '833.124MB')
    assert.equal(numAbbr.abbreviate(16000000000, 0), '16GB')
    assert.equal(numAbbr.abbreviate(2120000000001, 2), '2.12T')

  })

  it('should default decimal place argument to 0', function () {

    var numAbbr = new NumAbbr()
    assert.equal(numAbbr.abbreviate(1234), '1k')

  })

  it('calling the function without `new` enters shorthand mode', function () {

    assert.equal(numAbbrFn(13, 1, ['KB', 'MB', 'GB', 'T']), '13')
    assert.equal(numAbbrFn(0.0, 4, ['KB', 'MB', 'GB', 'T']), '0')


  })

  it('should abbreviate negative numbers', function () {
    var numAbbr = new NumAbbr()
    assert.equal(numAbbr.abbreviate(-12, 1), '-12')
    assert.equal(numAbbr.abbreviate(-1234, 0), '-1k')
    assert.equal(numAbbr.abbreviate(-34567, 2), '-34.57k')
    assert.equal(numAbbr.abbreviate(-918395, 1), '-918.4k')
    assert.equal(numAbbr.abbreviate(-2134124, 2), '-2.13m')
    assert.equal(numAbbr.abbreviate(-47475782130, 2), '-47.48b')
    assert.equal(numAbbr.abbreviate(-47475782130000, 2), '-47.48t')
  });
})
