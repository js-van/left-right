left-right
==========
Tests if 3 points are oriented clockwise, counter-clockwise or colinear.

## Example

```javascript
var lr = require("left-right")

console.log(lr([1, 0], [0, 0], [0, 1]))

//Prints out:  -1
```

## Install

    npm install left-right
    
## API

### `require("left-right")(a, b, c)`
Computes the orientation of `a`, `b`, `c`

* `a,b,c` are 3 2d points, encoded as arrays

**Returns** One of the following values:

* 1 if `a,b,c` are counter clockwise oriented
* -1 if `a,b,c` are clockwise
* 0 if they are colinear

## Credits
(c) 2013 Mikola Lysenko. MIT License