var orient = require("robust-orientation")[3]
var sgn = require("signum")
module.exports = function(a,b,c) {
  return -sgn(orient(a,b,c))
}