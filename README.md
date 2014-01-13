# number-abbreviate

Abbreviate a number and add unit letters e.g. 2200000 => '2.2m'

[![build status](https://secure.travis-ci.org/domharrington/js-number-abbreviate.png)](http://travis-ci.org/domharrington/js-number-abbreviate)

Code inspired by [http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k](http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k)

## Example
``` js
  var numAbbr = require('number-abbreviate')

  numAbbr(12, 1)
  // => 12
  numAbbr(0, 2)
  // => 0
  numAbbr(1234, 0)
  // => 1k
  numAbbr(34567, 2)
  // => 34.57k
  numAbbr(918395, 1)
  // => 918.4k
  numAbbr(2134124, 2)
  // => 2.13m
  numAbbr(47475782130, 2)
  // => 47.48b
```

## Usage
``` js
  var numAbbr = require('number-abbreviate')

  numAbbr([number], [decPlaces])
```

### numAbbr([number], [decPlaces])

Takes a number and the number of decimal places to abbreviate

## Installation

    npm install number-abbreviate --save

## Credits
[Dom Harrington](https://twitter.com/domharrington)

[http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k](http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k)

## License
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
