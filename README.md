# Halcyon
[![Build Status](https://travis-ci.org/davezuko/halcyon.svg?branch=master)](https://travis-ci.org/davezuko/halcyon)
[![dependencies Status](https://david-dm.org/davezuko/halcyon/status.svg)](https://david-dm.org/davezuko/halcyon)

[Check out the API docs!](https://halcyon.zuko.me)

The missing standard library for JavaScript. This lightweight library is meant to fill the gap between Ramda (functional) and Lodash (performance) while providing you with the tools you need to write sane JavaScript. This means that all functions are immutable, auto-curried, and designed for composition by expecting data last.

1. [Why](#why)
1. [Usage](#usage)
1. [Comparisons](#comparisons)

## Why?

### First Class Functional Programming
The Halcyon API is designed specifically for functional programming styles.

Unlike some other libraries that simply offer FP-_ish_ wrappers, functional programming is a first class citizen in Halcyon. This means that every function is immutable, auto-curried, and written to expect data last to facilitate composition. Halcyon also compares objects by value, not reference, which allows you to start working with data in a meaningful way without concerning yourself with how it's stored in memory.

### A Better Developer Experience

One of the common pain points when writing more functional-style JavaScript is debuggability. Because features like currying are not native to the language, it can be difficult to debug partially applied functions and compositions, especially because of JavaScript's dynamic nature. Halcyon strives to improve upon this to make your life easier.

```js
const double = multiply(2)

console.log(double) // "multiply(2)"
```

### 

### Built for the Next Generation of JavaScript
The Halcyon codebase is written with ES2015 modules and packaged with rollup, allowing you to take advantage of tree shaking to produce slimmer bundles without the need for extra tooling.

## Usage

```bash
npm install --save halcyon
```

After that's done, just import it in your code and get on to building awesome stuff. If you haven't already done so, you should check out the [API documentation](https://halcyon.zuko.me) to see what functions are available and learn how to use them. With that out of the way, here are two of the most common ways to use Halcyon:

### ES2015 Module
```js
import * as h from 'halcyon'

const getName = h.prop('name')
h.map(getName, [{ name: 'Dwight' }, { name: 'Jim' }]) // => ['Dwight', 'Jim']
```

### Installer
If you have full control over your codebase and don't want to continually import/prefix all of the functions, you can install the library to a context.

```js
import installTo from 'halcyon/installer'

installTo(global) // or `window` if you are in the browser

// Now all of the functions are available on the scope you installed it to:
prop('name', { name: 'Michael' }) // => 'Michael'
```

## Comparisons

Category        | Halcyon  | Ramda | Lodash    | Lodash-FP
--------------- | -------- | ----- | --------- | ---------
Minified (kb)   | 10.1     | 41.1  | 70.1      | 81.2
100% Immutable  | Yes      | Yes   | No        | Yes
Auto-Curry      | Yes      | Yes   | No        | Yes
Object Equality | Value    | Value | Reference | Reference
IE 9+           | Yes      | Yes   | Yes       | Yes
