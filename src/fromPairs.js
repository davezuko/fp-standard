/**
 * fromPairs : [[k, v]] -> {k:v}
 *
 * @since v0.7.0
 */
var fromPairs = function fromPairs (xs) {
  var y   = {}
    , i   = 0
    , len = xs.length
    , x

  for (; i < len; i++) {
    x = xs[i]
    y[x[0]] = x[1]
  }

  return y
}

export default fromPairs