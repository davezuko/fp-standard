import _defn from './internal/_defn'

/**
 * @name concat
 * @signature
 * [a] -> [a] -> [a]
 * String -> String -> String
 * @namespace Collection
 * @since v0.7.0
 * @description
 * Concatenates two values together. Dispatches to the `concat` method of the
 * first argument.
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]) // => [1, 2, 3, 4, 5, 6]
 * concat([1, 2, 3], [])        // => [1, 2, 3]
 * concat('foo', 'bar')         // => 'foobar'
 */
// TODO(zuko): consider flipping argument order, breaking change
export default _defn('concat', function (xs, ys) {
  return xs.concat(ys)
})
