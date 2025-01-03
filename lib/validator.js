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

var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert-is-complex-like' );
var isRealFloatingDataType = require( '@stdlib/ndarray-base-assert-is-real-floating-point-data-type' );
var isUnsignedIntegerDataType = require( '@stdlib/ndarray-base-assert-is-unsigned-integer-data-type' );
var isSignedIntegerDataType = require( '@stdlib/ndarray-base-assert-is-signed-integer-data-type' );
var isBooleanDataType = require( '@stdlib/ndarray-base-assert-is-boolean-data-type' );
var isSafeCast = require( '@stdlib/ndarray-base-assert-is-safe-data-type-cast' );
var minDataType = require( '@stdlib/ndarray-min-dtype' );
var minSignedIntegerDataType = require( '@stdlib/ndarray-base-min-signed-integer-dtype' );
var complexDataType = require( '@stdlib/complex-dtype' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Verifies whether a provided value can be safely assigned to an element in an array having a "generic" or unknown data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - array data type
* @returns {null} null
*
* @example
* var err = validateGeneric( 3, 'generic' );
* // returns null
*/
function validateGeneric() {
	return null;
}

/**
* Verifies whether a provided value can be safely assigned to an element in an array having a boolean data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - array data type
* @returns {(Error|null)} error object or null
*
* @example
* var err = validateBoolean( true, 'bool' );
* // returns null
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var err = validateBoolean( new Complex128( 5.0, 6.0 ), 'bool' );
* // returns <TypeError>
*/
function validateBoolean( value, dtype ) {
	if ( isBoolean( value ) ) {
		return null;
	}
	return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', typeof value, dtype ) );
}

/**
* Verifies whether a provided value can be safely assigned to an element in an array having a real-valued floating-point data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - array data type
* @returns {(Error|null)} error object or null
*
* @example
* var err = validateRealFloating( 3.14, 'float64' );
* // returns null
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var err = validateRealFloating( new Complex128( 5.0, 6.0 ), 'float64' );
* // returns <TypeError>
*/
function validateRealFloating( value, dtype ) {
	if ( isNumber( value ) ) {
		return null;
	}
	if ( isComplexLike( value ) ) {
		return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', complexDataType( value ), dtype ) );
	}
	return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', typeof value, dtype ) );
}

/**
* Verifies whether a provided value can be safely assigned to an element in an array having a complex-valued floating-point data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - array data type
* @returns {(Error|null)} error object or null
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
*
* var err = validateComplexFloating( new Complex128( 5.0, 6.0 ), 'complex128' );
* // returns null
*
* @example
* var err = validateComplexFloating( {}, 'complex128' );
* // returns <TypeError>
*/
function validateComplexFloating( value, dtype ) {
	if ( isNumber( value ) || isComplexLike( value ) ) {
		return null;
	}
	return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', typeof value, dtype ) );
}

/**
* Verifies whether a provided value can be safely assigned to an element in an array having a signed integer data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - array data type
* @returns {(Error|null)} error object or null
*
* @example
* var err = validateSignedInteger( 3, 'int32' );
* // returns null
*
* @example
* var err = validateSignedInteger( 3.14, 'int32' );
* // returns <TypeError>
*/
function validateSignedInteger( value, dtype ) {
	var vdt;
	if ( isNumber( value ) ) {
		if ( !isInteger( value ) ) {
			return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', minDataType( value ), dtype ) );
		}
		vdt = minSignedIntegerDataType( value );
		if ( isSafeCast( vdt, dtype ) ) {
			return null;
		}
		return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', vdt, dtype ) );
	}
	if ( isComplexLike( value ) ) {
		return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', complexDataType( value ), dtype ) );
	}
	return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', typeof value, dtype ) );
}

/**
* Verifies whether a provided value can be safely assigned to an element in an array having an unsigned integer data type.
*
* @private
* @param {*} value - input value
* @param {string} dtype - array data type
* @returns {(Error|null)} error object or null
*
* @example
* var err = validateUnsignedInteger( 3, 'uint32' );
* // returns null
*
* @example
* var err = validateUnsignedInteger( -3, 'uint32' );
* // returns <TypeError>
*/
function validateUnsignedInteger( value, dtype ) {
	var vdt;
	if ( isNumber( value ) ) {
		vdt = minDataType( value ); // note: we rely on data type resolution to handle the case where `value` is a non-integer value. In that case, `vdt` will resolve to a floating-point data type and `isSafeCast` will evaluate to `false`
		if ( isSafeCast( vdt, dtype ) ) {
			return null;
		}
		return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', vdt, dtype ) );
	}
	if ( isComplexLike( value ) ) {
		return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', complexDataType( value ), dtype ) );
	}
	return new TypeError( format( 'invalid operation. Assigned value cannot be safely cast to the target array data type. Data types: [%s, %s].', typeof value, dtype ) );
}


// MAIN //

/**
* Returns a validation function for verifying whether a provided value can be safely assigned to an element in an array having a specified data type.
*
* @private
* @param {string} dtype - array data type
* @returns {Function} validation function
*
* @example
* var fcn = validator( 'int32' );
*
* var err = fcn( 3, 'int32' );
* // returns null
*
* err = fcn( 3.14, 'int32' );
* // returns <TypeError>
*/
function validator( dtype ) {
	if ( dtype === 'generic' || dtype === '' ) {
		return validateGeneric;
	}
	if ( isRealFloatingDataType( dtype ) ) {
		return validateRealFloating;
	}
	if ( isUnsignedIntegerDataType( dtype ) ) {
		return validateUnsignedInteger;
	}
	if ( isSignedIntegerDataType( dtype ) ) {
		return validateSignedInteger;
	}
	if ( isBooleanDataType( dtype ) ) {
		return validateBoolean;
	}
	// Case: isComplexDataType( dtype ) === true
	return validateComplexFloating;
}


// EXPORTS //

module.exports = validator;
