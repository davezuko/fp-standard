/**
 * toPairs : {k:v} -> [[k, v]]
 *
 * @since v0.7.0
 */
var toPairs = function toPairs (obj) {
  var ys = []
    , p

  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      ys.push([p, obj[p]])
    }
  }
  return ys
}

export default toPairs