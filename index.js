(function(root){
  'use strict';

  var NumberAbbreviate = function(abbrev) {
    if (!(this instanceof NumberAbbreviate)) return new NumberAbbreviate(abbrev)
    this.abbrev = abbrev == null ? ['k', 'm', 'b', 't'] : abbrev
  }

  NumberAbbreviate.prototype.abbreviate = function(number, decPlaces) {
    decPlaces = Math.pow(10, decPlaces)

    for (var i = this.abbrev.length - 1; i>=0; i--) {

      var size = Math.pow(10, (i + 1) * 3)

      if(size <= number) {
        number = Math.round(number * decPlaces / size) / decPlaces

        if((number === 1000) && (i < this.abbrev.length - 1)) {
          number = 1
          i++
        }

        number += this.abbrev[i]

        break
      }
    }

    return number
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NumberAbbreviate
  } else {
    root.NumberAbbreviate = NumberAbbreviate
  }

})(this);
