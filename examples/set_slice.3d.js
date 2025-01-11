/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable new-cap, array-element-newline, comma-spacing */

'use strict';

var S = require( '@stdlib/slice-ctor' );
var E = require( '@stdlib/slice-multi' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var ndzeros = require( '@stdlib/ndarray-zeros' );
var toArray = require( '@stdlib/ndarray-to-array' );
var ndarray2fancy = require( './../lib' );

// Define an output array:
var buffer = [
	1, 2,

	3, 4,    // 0,0,{0,1}
	5, 6,    // 0,1,{0,1}
	7, 8,    // 0,2,{0,1}

	9, 10,   // 1,0,{0,1}
	11, 12,  // 1,1,{0,1}
	13, 14,  // 1,2,{0,1}

	15, 16,
	17, 18,
	19, 20
];
var shape = [ 2, 3, 2 ];
var strides = [ 6, 2, 1 ];
var offset = 2;

// Create a normal ndarray:
var x = new ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
// returns <ndarray>

// Convert to a fancy ndarray:
var y = ndarray2fancy( x );

// Create an alias for `undefined` for more concise slicing expressions:
var _ = void 0;

// Create a multi-dimensional slice:
var s = E( 1, S(0,_,2), _ );
// returns <MultiSlice>

// Update the first and third rows of the second matrix:
y[ s ] = 100;
console.log( toArray( y ) );
/* =>
  [
    [
      [ 3, 4 ],
      [ 5, 6 ],
      [ 7, 8 ]
    ],
    [
      [ 100, 100 ],
      [ 11, 12 ],
      [ 100, 100 ]
    ]
  ]
*/

// Create a vector of zeros:
var z = ndzeros( [ 2 ] );
// returns <ndarray>

// Update all elements in the first matrix:
y[ '0,:,:' ] = z;
console.log( toArray( y ) );
/* =>
  [
    [
      [ 0, 0 ],
      [ 0, 0 ],
      [ 0, 0 ]
    ],
    [
      [ 100, 100 ],
      [ 11, 12 ],
      [ 100, 100 ]
    ]
  ]
*/