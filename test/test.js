"use strict"

var lr = require("../leftright.js")

require("tape")(function(t) {
  
  t.equals(lr([1, 0], [0, 0], [0, 1]), -1)
  t.equals(lr([0, 1], [0, 0], [1, 0]),  1)
  t.equals(lr([1, 0], [0, 0], [1, 0]),  0)

  t.equals(lr([1e64, 0], [0, 0], [0, 1e-64]), -1)
  t.equals(lr([1e64, 0], [0, 0], [0, -1e-64]), 1)
  
  t.equals(lr([100, 100], [1, 1], [30, 0]), 1)
  
  for(var i=-100; i<=100; i+=5) {
    t.equals(lr([0,0], [1, Math.pow(2,i)], [Math.pow(2,-i), 1]), 0)
    for(var j=-100; j<=100; j+=5) {
      t.equals(lr([0,0], [1, Math.pow(2,i)], [Math.pow(2,j), 0]), -1)
      t.equals(lr([0,0], [1, Math.pow(2,i)], [-Math.pow(2,j), 0]), 1)
    }
  }
  
  t.end()
})