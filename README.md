<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ndarray2fancy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert an ndarray to an object supporting fancy indexing.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A fancy ndarray is an [`ndarray`][@stdlib/ndarray/ctor] which supports slicing via indexing expressions.

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs';

// Create a plain ndarray:
var buffer = [ 1, 2, 3, 4, 5, 6 ];
var x = new ndarray( 'generic', buffer, [ 6 ], [ 1 ], 0, 'row-major' );
// returns <ndarray>

// Convert to a fancy ndarray:
var y = ndarray2fancy( x );

// Select the first 3 elements:
var z = y[ ':3' ];
// returns <ndarray>

var arr = ndarray2array( z );
// returns [ 1, 2, 3 ]

// Select every other element, starting with the second element:
z = y[ '1::2' ];
// returns <ndarray>

arr = ndarray2array( z );
// returns [ 2, 4, 6 ]

// Reverse the array, starting with last element and skipping every other element:
z = y[ '::-2' ];
// returns <ndarray>

arr = ndarray2array( z );
// returns [ 6, 4, 2 ]
```

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import ndarray2fancy from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-fancy@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory, idx } from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-fancy@esm/index.mjs';
```

#### ndarray2fancy( x\[, options] )

Converts an [ndarray][@stdlib/ndarray/ctor] to an object supporting fancy indexing.

```javascript
console.log( 'TODO' );
```

The function supports the following options:

-   **cache**: cache for resolving ndarray index objects. Must have a `get` method which accepts a single argument: a string identifier associated with an ndarray index.

    If an ndarray index associated with a provided identifier exists, the `get` method should return an object having the following properties:

    -   **data**: the underlying index ndarray.
    -   **type**: the index type. Must be either `'mask'`, `'bool'`, or `'int'`.
    -   **dtype**: the [data type][@stdlib/ndarray/dtypes] of the underlying ndarray.

    If an ndarray index is not associated with a provided identifier, the `get` method should return `null`.

    Default: [`ndindex`][@stdlib/ndarray/index].

-   **strict**: boolean indicating whether to enforce strict bounds checking. Default: `false`.

By default, the function returns a fancy ndarray which does **not** enforce strict bounds checking. For example,

```javascript
console.log( 'TODO' );
```

To enforce strict bounds checking, set the `strict` option to `true`.

<!-- run throws: false -->

```javascript
console.log( 'TODO' );
```

#### ndarray2fancy.factory( \[options] )

Returns a function for converting an [ndarray][@stdlib/ndarray/ctor] to an object supporting fancy indexing.

```javascript
var fcn = ndarray2fancy.factory();

console.log( 'TODO' );
```

The function supports the following options:

-   **cache**: default cache for resolving ndarray index objects. Must have a `get` method which accepts a single argument: a string identifier associated with an ndarray index.

    If an ndarray index associated with a provided identifier exists, the `get` method should return an object having the following properties:

    -   **data**: the underlying index ndarray.
    -   **type**: the index type. Must be either `'mask'`, `'bool'`, or `'int'`.
    -   **dtype**: the [data type][@stdlib/ndarray/dtypes] of the underlying ndarray.

    If an ndarray index is not associated with a provided identifier, the `get` method should return `null`.

    Default: [`ndindex`][@stdlib/ndarray/index].

-   **strict**: boolean indicating whether to enforce strict bounds checking by default. Default: `false`.

By default, the function returns a function which, by default, does **not** enforce strict bounds checking. For example,

```javascript
var fcn = ndarray2fancy.factory();

console.log( 'TODO' );
```

To enforce strict bounds checking by default, set the `strict` option to `true`.

<!-- run throws: false -->

```javascript
var fcn = ndarray2fancy.factory({
    'strict': true
});

console.log( 'TODO' );
```

The returned function supports the same options as above. When the returned function is provided option values, those values override the factory method defaults.

#### ndarray2fancy.idx( x\[, options] )

Wraps a provided ndarray as an ndarray index object.

```javascript
console.log( 'TODO' );
```

For documentation and usage, see [`ndindex`][@stdlib/ndarray/index].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   A fancy ndarray shares the **same** data as the provided input [ndarray][@stdlib/ndarray/ctor]. Hence, any mutations to the returned ndarray will affect the underlying input ndarray and vice versa.
-   For operations returning a new ndarray (e.g., when slicing or invoking an instance method), a fancy ndarray returns a new fancy ndarray having the same configuration as specified by `options`.
-   A fancy ndarray supports indexing using positive and negative integers (both numeric literals and strings), [`Slice`][@stdlib/slice/ctor] and [`MultiSlice`][@stdlib/slice/multi] instances, [subsequence expressions][@stdlib/slice/seq2multislice], and [index arrays][@stdlib/ndarray/index] (boolean, mask, and integer).
-   A fancy ndarray supports all properties and methods of the input ndarray, and, thus, a fancy ndarray can be consumed by any API which supports ndarray-like objects.
-   Indexing expressions provide a convenient and powerful means for creating and operating on ndarray views; however, their use does entail a performance cost. Indexing expressions are best suited for interactive use (e.g., in the [REPL][@stdlib/repl]) and scripting. For performance critical applications, prefer equivalent functional APIs supporting ndarray-like objects.
-   In older JavaScript environments which do **not** support [`Proxy`][@stdlib/proxy/ctor] objects, the use of indexing expressions is **not** supported.

### Bounds Checking

// TODO: see array/to-fancy

### Broadcasting

// TODO: see array/to-fancy

### Casting

// TODO: see array/to-fancy

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap, array-element-newline, comma-spacing -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import S from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';
import E from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@esm/index.mjs';
import toArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs';
import ndarray2fancy from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-fancy@esm/index.mjs';

var buffer = [
    1, 2,
    3, 4,  // 0
    5, 6,  // 1
    7, 8,  // 2
    9, 10
];
var shape = [ 3, 2 ];
var strides = [ 2, 1 ];
var offset = 2;

// Create a normal ndarray:
var x = new ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

// Convert to a fancy ndarray:
var y = ndarray2fancy( x );

// Access an ndarray property:
var ndims = y.ndims;
// returns 2

// Retrieve an ndarray element:
var v = y.get( 2, 1 );
// returns 8

// Set an ndarray element:
y.set( 2, 1, 20 );
v = y.get( 2, 1 );
// returns 20

// Create an alias for `undefined` for more concise slicing expressions:
var _ = void 0;

// Create a multi-dimensional slice:
var s = E( S(0,_,2), _ );
// returns <MultiSlice>

// Use the slice to create a view on the original ndarray:
var y1 = y[ s ];
console.log( toArray( y1 ) );
// => [ [ 3, 4 ], [ 7, 20 ] ]

// Use alternative syntax:
var y2 = y[ [ S(0,_,2), _ ] ];
console.log( toArray( y2 ) );
// => [ [ 3, 4 ], [ 7, 20 ] ]

// Use alternative syntax:
var y3 = y[ '0::2,:' ];
console.log( toArray( y3 ) );
// => [ [ 3, 4 ], [ 7, 20 ] ]

// Flip dimensions:
var y4 = y[ [ S(_,_,-2), S(_,_,-1) ] ];
console.log( toArray( y4 ) );
// => [ [ 20, 7 ], [ 4, 3 ] ]

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-to-fancy.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-to-fancy

[test-image]: https://github.com/stdlib-js/ndarray-to-fancy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-to-fancy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-to-fancy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-to-fancy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-to-fancy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-to-fancy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-to-fancy/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-to-fancy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-to-fancy/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-to-fancy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-to-fancy/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-to-fancy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-to-fancy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-to-fancy/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/esm

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/esm

[@stdlib/ndarray/index]: https://github.com/stdlib-js/ndarray-index/tree/esm

[@stdlib/repl]: https://github.com/stdlib-js/repl/tree/esm

[@stdlib/proxy/ctor]: https://github.com/stdlib-js/proxy-ctor/tree/esm

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor/tree/esm

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi/tree/esm

[@stdlib/slice/seq2multislice]: https://github.com/stdlib-js/slice-seq2multislice/tree/esm

</section>

<!-- /.links -->
