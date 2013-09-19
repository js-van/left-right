"use strict"

var robustSum = require("robust-sum")
var robustScale = require("robust-scale")
var twoSum = require("two-sum")
var twoProduct = require("two-product")

module.exports = leftRightTest

function leftRightTest(a, b, c) {
  var X = robustScale(twoSum(b[1], -c[1]), a[0])
  var Y = robustScale(twoSum(c[0], -b[0]), a[1])
  var Z = robustSum(twoProduct(b[0], c[1]), twoProduct(-b[1], c[0]))
  var d = robustSum(robustSum(X, Y), Z)
  var s = d[d.length-1]
  if(s < 0) {
    return -1
  }
  if(s > 0) {
    return 1
  }
  return 0
}