# number-abbreviate

Abbreviate a number and add unit letters e.g. 2200000 => '2.2m'

[![build status](https://secure.travis-ci.org/domharrington/js-number-abbreviate.png)](http://travis-ci.org/domharrington/js-number-abbreviate)

Code inspired by [http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k](http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k)

## Example
Simple/shorthand mode:

```js
var abbreviate = require('number-abbreviate')
abbreviate(1000) // => 1k
abbreviate(1111, 0) // => 1k
abbreviate(1111, 1) // => 1.1k
abbreviate(1111, 2) // => 1.11k
```

Class/constructor mode:
``` js
var NumAbbr = require('number-abbreviate')

var numAbbr = new NumAbbr()

numAbbr.abbreviate(12, 1)
// => 12
numAbbr.abbreviate(0, 2)
// => 0
numAbbr.abbreviate(1234, 0)
// => 1k
numAbbr.abbreviate(34567, 2)
// => 34.57k
numAbbr.abbreviate(918395, 1)
// => 918.4k
numAbbr.abbreviate(2134124, 2)
// => 2.13m
numAbbr.abbreviate(47475782130, 2)
// => 47.48b
numAbbr.abbreviate(-1234, 0)
// => -1k
numAbbr.abbreviate(-918395, 1)
// => -918.4k
numAbbr.abbreviate(-47475782130, 2)
// => -47.48b
```

## Usage
``` js
var NumAbbr = require('number-abbreviate')

var numAbbr = new NumAbbr([units])

numAbbr.abbreviate([number], [decPlaces])
```

The `units` is optional. It can be an array of units, defaulting to `['k', 'm', 'b', 't']`.

`decPlaces` is also optional. It defaults to 0.

### numAbbr.abbreviate([number], [decPlaces])

Takes a number and the number of decimal places to abbreviate

## Installation
```
npm install number-abbreviate --save

bower install number-abbreviate
```

## Credits
[Dom Harrington](https://twitter.com/domharrington)

[http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k](http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k)

## License
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
