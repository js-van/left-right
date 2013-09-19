"use strict"

var det3 = require("robust-determinant-3")

module.exports = leftRightTest

function leftRightTest(a, b, c) {
  var d = det3([[a[0], a[1], 1],
                [b[0], b[1], 1],
                [c[0], c[1], 1]])
  var s = d[d.length-1]
  if(s < 0) {
    return -1
  }
  if(s > 0) {
    return 1
  }
  return 0
}