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

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var RE_NDINDEX = require( './re_ndindex.js' );


// MAIN //

/**
* Tests if an indexing expression is a serialized ndarray index.
*
* @private
* @param {(string|symbol)} prop - property name
* @returns {boolean} result
*
* @example
* var out = isArrayIndexString( 'ndindex<0>' );
* // returns true
*
* @example
* var out = isArrayIndexString( ':' );
* // returns false
*/
function isArrayIndexString( prop ) {
	return ( isString( prop ) && RE_NDINDEX.test( prop ) );
}


// EXPORTS //

module.exports = isArrayIndexString;
