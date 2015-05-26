(function(root){
  'use strict';

  var NumberAbbreviate = function(abbrev) {
    if (!(this instanceof NumberAbbreviate)) return new NumberAbbreviate(abbrev)
    this.abbrev = abbrev == null ? ['k', 'm', 'b', 't'] : abbrev
  }

  function abbreviate (number, decPlaces, instance) {
    decPlaces = Math.pow(10, decPlaces)

    for (var i = instance.abbrev.length - 1; i>=0; i--) {

      var size = Math.pow(10, (i + 1) * 3)

      if(size <= number) {
        number = Math.round(number * decPlaces / size) / decPlaces

        if((number === 1000) && (i < instance.abbrev.length - 1)) {
          number = 1
          i++
        }

        number += instance.abbrev[i]

        break
      }
    }

    return number
  }

  NumberAbbreviate.prototype.abbreviate = function(number, decPlaces) {
    var isNegative = number < 0
    var abbreviatedNumber = abbreviate(Math.abs(number), decPlaces, this)

    return isNegative ? '-' + abbreviatedNumber : abbreviatedNumber;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NumberAbbreviate
  } else {
    root.NumberAbbreviate = NumberAbbreviate
  }

})(this);
