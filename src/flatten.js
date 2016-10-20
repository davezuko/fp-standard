/**
 * @name flatten
 * @signature [[a]] -> [a]
 * @since v0.1.0
 * @description
 * Shallowly flattens an array (i.e. 1 level deep).
 * @see flattenDeep
 *
 * @example
 * flatten([1, 2, [3, 4]])   // => [1, 2, 3, 4]
 * flatten([1, 2, [3, [4]]]) // => [1, 2, 3, [4]]
 */
export default function flatten (xs) {
  var acc = []
    , i   = 0
    , len = xs.length
    , x
    , xi
    , xlen

  for (; i < len; i++) {
    x = xs[i]
    if (Array.isArray(x)) {
      for (xi = 0, xlen = x.length; xi < xlen; xi++) {
        acc.push(x[xi])
      }
    } else {
      acc.push(x)
    }
  }
  return acc
}
