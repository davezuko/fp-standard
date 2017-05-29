/* eslint-disable one-var */
const test = require('ava')
    , h    = require('../../dist/redash')

const EXPECTED_FNS = [
  'add'
, 'all'
, 'always'
, 'any'
, 'append'
, 'assoc'
, 'chain'
, 'clamp'
, 'compact'
, 'complement'
, 'compose'
, 'concat'
, 'cond'
, 'contains'
, 'curry'
, 'curryN'
, 'dec'
, 'dissoc'
, 'divide'
, 'drop'
, 'dropUntil'
, 'dropWhile'
, 'empty'
, 'equals'
, 'F'
, 'filter'
, 'find'
, 'findIndex'
, 'findLast'
, 'flatten'
, 'flattenDeep'
, 'forEach'
, 'fromPairs'
, 'get'
, 'getEq'
, 'getIn'
, 'groupBy'
, 'has'
, 'head'
, 'identical'
, 'identity'
, 'ifElse'
, 'inc'
, 'init'
, 'insert'
, 'isEmpty'
, 'isEven'
, 'isNil'
, 'isOdd'
, 'isType'
, 'join'
, 'juxt'
, 'keys'
, 'last'
, 'length'
, 'lens'
, 'lensProp'
, 'map'
, 'mapi'
, 'mapKeys'
, 'match'
, 'max'
, 'mean'
, 'merge'
, 'min'
, 'multiply'
, 'omit'
, 'over'
, 'pair'
, 'partition'
, 'pick'
, 'pipe'
, 'prepend'
, 'range'
, 'rangeBy'
, 'reduce'
, 'reduceRight'
, 'reject'
, 'replace'
, 'reverse'
, 'scan'
, 'set'
, 'split'
, 'subtract'
, 'sum'
, 'T'
, 'tail'
, 'take'
, 'takeUntil'
, 'takeWhile'
, 'tap'
, 'test'
, 'times'
, 'toLower'
, 'toPairs'
, 'toUpper'
, 'trace'
, 'transform'
, 'trim'
, 'type'
, 'unless'
, 'values'
, 'view'
, 'when'
, 'where'
, 'without'
, 'zip'
, 'zipObj'
]

const stringifyFn = fn => fn.name

test('all functions have a correct `name` property', (t) => {
  EXPECTED_FNS.forEach(key => {
    t.is(h[key].name, key)
  })
})

test('all functions have a `displayName` property matching `name`', (t) => {
  EXPECTED_FNS.forEach(key => {
    t.is(h[key].displayName, h[key].name)
  })
})

test('function names allow introspecting curried arguments', (t) => {
  t.is(stringifyFn(h.map()), 'map')
  t.is(stringifyFn(h.map(h.multiply(2))), 'map(multiply(2))')
  t.is(stringifyFn(h.groupBy(h.get('id'))), 'groupBy(get("id"))')
})
