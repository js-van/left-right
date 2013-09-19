"use strict"

var lr = require("../leftright.js")

require("tape")(function(t) {
  
  t.equals(lr([1, 0], [0, 0], [0, 1]), -1)
  t.equals(lr([0, 1], [0, 0], [1, 0]),  1)
  t.equals(lr([1, 0], [0, 0], [1, 0]),  0)

  t.equals(lr([1e64, 0], [0, 0], [0, 1e-64]), -1)
  t.equals(lr([1e64, 0], [0, 0], [0, -1e-64]), 1)
  
  t.end()
})