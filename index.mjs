// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-index@esm/index.mjs";export{default as idx}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-index@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/proxy-ctor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-complex-floating-point-data-type@v0.2.2-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@v0.2.2-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-real-floating-point-data-type@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-unsigned-integer-data-type@v0.2.2-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-signed-integer-data-type@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-boolean-data-type@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-safe-data-type-cast@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-min-dtype@v0.3.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-min-signed-integer-dtype@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtype@v0.2.2-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@esm/index.mjs";import _ from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-seq2multislice@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-starts-with@esm/index.mjs";import{isPrimitive as L}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-str2multislice@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-str2slice@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-sargs2multislice@esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.2.2-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-strides@v0.2.2-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-order@v0.2.2-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind2sub@v0.2.2-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.2-esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-from-scalar-like@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@esm/index.mjs";import Q from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice-assign@v0.2.1-esm/index.mjs";import Y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-floating-point-data-type@esm/index.mjs";import $ from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-unsigned-integer-data-type@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-signed-integer-data-type@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-safe-data-type-cast@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int8-max@esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int16-max@esm/index.mjs";import K from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@esm/index.mjs";import X from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-min-dtype@esm/index.mjs";import Z from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@esm/index.mjs";var rr="function"==typeof n;function tr(r){return a(r)?[r,0]:r}function er(r,t){return function(e){return r(e,t)}}function nr(r,t){return m(t)?c(t,"strict")&&(r.strict=t.strict,!p(r.strict))?new TypeError(d("null2o","strict",r.strict)):c(t,"cache")&&(r.cache=t.cache,!u(r.cache,"get"))?new TypeError(d("invalid option. `%s` option is missing a `%s` method. Option: `%s`.","cache","get",r.cache)):null:new TypeError(d("null2V",t))}function sr(){return null}function ir(r,t){return p(r)?null:new TypeError(d("nullEw",typeof r,t))}function or(r,t){return a(r)?null:h(r)?new TypeError(d("nullEw",x(r),t)):new TypeError(d("nullEw",typeof r,t))}function dr(r,t){return a(r)||h(r)?null:new TypeError(d("nullEw",typeof r,t))}function lr(r,t){var e;return a(r)?f(r)?(e=y(r),g(e,t)?null:new TypeError(d("nullEw",e,t))):new TypeError(d("nullEw",b(r),t)):h(r)?new TypeError(d("nullEw",x(r),t)):new TypeError(d("nullEw",typeof r,t))}function ar(r,t){var e;return a(r)?(e=b(r),g(e,t)?null:new TypeError(d("nullEw",e,t))):h(r)?new TypeError(d("nullEw",x(r),t)):new TypeError(d("nullEw",typeof r,t))}function mr(r){return"generic"===r||""===r?sr:j(r)?or:v(r)?ar:E(r)?lr:w(r)?ir:dr}function cr(r){return"M"===r[0]&&T(r,"MultiSlice(",0)&&")"===r[r.length-1]}function pr(r){return"S"===r[0]&&T(r,"Slice(",0)&&")"===r[r.length-1]}var ur=/^-?[0-9]+$/;function fr(r){return L(r)&&ur.test(r)}var hr=/:/;function jr(r){return hr.test(r)}function vr(r){return"..."===r}function Er(r){return""===r}function wr(r,t){var e=C(t);if(null===e)throw new Error(d("nullEn",r));return e}function gr(r,t){var e=A(t);if(null===e)throw new Error(d("nullEn",r));return new S(e)}function br(r,t){return new S(parseInt(t,10))}function yr(r,t){var e=I(t);return Er(e)||vr(e)?new S:pr(e)?gr(t,e):cr(e)?wr(t,e):fr(e)?br(0,e):jr(e)?function(r,t,e){var n=R(t,e,!0);if(n.code){if("ERR_SLICE_INVALID_INCREMENT"===n.code)throw new Error(d("nullEq",r));if("ERR_SLICE_INVALID_ELLIPSIS"===n.code)throw new Error(d("nullEr",r));if("ERR_SLICE_INVALID_SUBSEQUENCE"===n.code)throw new Error(d("nullEn",r));throw new RangeError(d("nullEv",e.join(","),_(t,/\.\.\.,/,"").split(",").length))}return n}(t,e,N(r,!1)):null}function xr(r,t,e){var n=I(t);return pr(n)?gr(t,n):cr(n)?wr(t,n):fr(n)?br(0,n):jr(n)||vr(n)?function(r,t,e,n){var s=R(t,e,!0);if(s.code){if("ERR_SLICE_INVALID_INCREMENT"===s.code)throw new Error(d("nullEq",r));if("ERR_SLICE_INVALID_ELLIPSIS"===s.code)throw new Error(d("nullEr",r));if("ERR_SLICE_INVALID_SUBSEQUENCE"===s.code)throw new Error(d("nullEn",r));if("ERR_SLICE_TOO_MANY_DIMENSIONS"===s.code)throw new RangeError(d("nullEv",e.join(","),_(t,/\.\.\.,/,"").split(",").length));if("ERR_SLICE_OUT_OF_BOUNDS"===s.code){if(n)throw new RangeError(d("nullEp",e.join(",")));s=R(t,e,!1)}}return s}(t,n,N(r,!1),e):null}function Ir(r,t,e){var n=I(t);return cr(n)?wr(t,n):jr(n)||vr(n)?function(r,t,e,n){var s=R(t,e,!0);if(s.code){if("ERR_SLICE_INVALID_INCREMENT"===s.code)throw new Error(d("nullEq",r));if("ERR_SLICE_INVALID_ELLIPSIS"===s.code)throw new Error(d("nullEr",r));if("ERR_SLICE_INVALID_SUBSEQUENCE"===s.code)throw new Error(d("nullEn",r));if("ERR_SLICE_TOO_MANY_DIMENSIONS"===s.code||"ERR_SLICE_INSUFFICIENT_DIMENSIONS"===s.code)throw new RangeError(d("nullEv",e.join(","),_(t,/\.\.\.,/,"").split(",").length));if("ERR_SLICE_OUT_OF_BOUNDS"===s.code){if(n)throw new RangeError(d("nullEp",e.join(",")));s=R(t,e,!1)}}return s}(t,n,N(r,!1),e):Er(n)?null:k(n)}function _r(r,t){return function(e,n){var s,i;switch((i=n).length){case 0:s=new e;break;case 1:s=new e(i[0]);break;case 2:s=new e(i[0],i[1]);break;case 3:s=new e(i[0],i[1],i[2]);break;case 4:s=new e(i[0],i[1],i[2],i[3]);break;case 5:s=new e(i[0],i[1],i[2],i[3],i[4]);break;case 6:s=new e(i[0],i[1],i[2],i[3],i[4],i[5]);break;case 7:s=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6]);break;case 8:s=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]);break;case 9:s=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]);break;case 10:s=new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]);break;default:s=e.apply(null,i)}return r(s,t)}}function Sr(r,t,e){var n,s;if(n=parseInt(r,10),-1===(s=P(n,t-1))&&e)throw new RangeError(d("invalid operation. Index exceeds ndarray bounds."));return s}function Rr(r,t,e){if(-1!==(t=Sr(t,M(D(r,!1)),e)))return r.iget(t)}function Nr(r,t,e){var n,s;if(s=D(r,!1),-1!==(t=Sr(t,M(s),e)))return n=V(s,O(r),0,U(r),t,"throw"),r.get.apply(r,n)}function Tr(r){return u(r,"iget")?Rr:Nr}function Lr(r,t,e,n){return-1!==(t=Sr(t,M(D(r,!1)),n))&&(r.iset(t,e),!0)}function Cr(r,t,e,n){var s,i;return i=D(r,!1),-1!==(t=Sr(t,M(i),n))&&((s=V(i,O(r),0,U(r),t,"throw")).push(e),r.set.apply(r,s),!0)}function Ar(r){return u(r,"iset")?Lr:Cr}var kr=/\s*ndindex<[^>]+>\s*/;function Dr(r){return L(r)&&kr.test(r)}var Or=/^\s*(?:-?[0-9]+)\s*(?:,\s*(?:-?[0-9]+)\s*)*,\s*(?:-?[0-9]+)\s*$/;function Ur(r){return Or.test(r)}function Mr(r,t,e){var n,s,i,o;if(n=t.length,(s=r.split(/\s*,\s*/)).length!==n)throw new RangeError(d("invalid operation. Number of indices does not match the number of array dimensions. Array shape: (%s). Index dimensions: %u.",t.join(","),s.length));for(o=0;o<n;o++){if(-1===(i=Sr(s[o],t[o],e)))return;s[o]=i}return s}function Vr(r){return _(r,/^invalid arguments?/,"invalid operation")}function Pr(r){return function(t,e,n){if(fr(e))return function(r,t,e){var n=e.getter(r,t,e.strict);if(void 0!==n)return e.postGetArray(G(r,n))}(t,e,r);if(B(t,e)||!L(e))return function(r,t,e,n){var s=r[t];return q(s)?s===r.constructor?n.ctor:function(){var t,n;for(t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return s.apply(this===e?r:this,t)}:s}(t,e,n,r);if(Ur(e))return function(r,t,e){var n,s;if(void 0!==(n=Mr(t,D(r,!1),e.strict))&&void 0!==(s=r.get.apply(r,n)))return e.postGetArray(G(r,s))}(t,e,r);if(Dr(e))return;return function(r,t,e){var n=e.prop2slice(r,t,e.strict);if(null!==n)try{return e.postGetArray(F(r,n,e.strict,!1))}catch(r){throw new r.constructor(Vr(r.message))}}(t,e,r)}}function Br(r,t,e){return r[t]=e,!0}function Gr(r){return{dtype:r}}function qr(r){return function(t,n,s,i){var o;if(B(t,n)||!L(n))return Br(t,n,s);if(fr(n))return function(r,t,e,n){var s,i;if(s=n.validator(e,n.dtype))throw s;return i=n.preSetElement?n.preSetElement(e):e,n.setter(r,t,i,n.strict)}(t,n,s,r);if(Ur(n))return function(r,t,e,n){var s,i,o;if(i=n.validator(e,n.dtype))throw i;return o=n.preSetElement?n.preSetElement(e):e,void 0!==(s=Mr(t,D(r,!1),n.strict))&&(s.push(o),r.set.apply(r,s),!0)}(t,n,s,r);if(Dr(n))return!1;if(o=function(r,t,n,s,i){var o,m,c;if(null===(c=i.prop2slice(r,t,i.strict)))return!1;if(!e(n))if("generic"===(m=i.dtype))n=Z(n,Gr(m));else if(a(n))if(Y(m))n=Z(n,Gr(m));else if($(m)){if(o=X(n),!W(o,m))throw new TypeError(d("nullEw",o,m));n=Z(n,Gr(m))}else if(z(m)){if(!f(n))throw new TypeError(d("nullEw",X(n),m));if(o=n<0?X(n):n<=H?"int8":n<=J?"int16":n<=K?"int32":"float64",!W(o,m))throw new TypeError(d("nullEw",o,m));n=Z(n,Gr(m))}else{if("binary"!==m)throw new TypeError(d("nullEx",m));if("uint8"!==(o=X(n)))throw new TypeError(d("nullEw",o,m));n=Z(n,Gr(m))}else{if(!h(n))throw new TypeError(d("nullEw",typeof n,m));if(!l(m))throw new TypeError(d("nullEw",x(n),m));n=Z(n,Gr(m))}try{Q(n,s,c,i.strict)}catch(r){throw new r.constructor(Vr(r.message))}return!0}(t,n,s,i,r),o)return o;return Br(t,n,s)}}function Fr(){var r,a;if(r={cache:t,strict:!1},arguments.length&&(a=nr(r,arguments[0])))throw a;return function t(a){var m,c,p,u,f;if(!e(a))throw new TypeError(d("null4f",a));if(rr){if(m=o({},r),arguments.length>1&&(c=nr(m,arguments[1])))throw c;return f={ref:a,dtype:u=(p=i(a)).dtype||"",getter:Tr(a),setter:Ar(a),preSetElement:(j=u,l(j)?tr:null),postGetArray:er(t,m),cache:m.cache,strict:m.strict,validator:mr(u),ndarray2fancy:t,ctor:new n(a.constructor||s,{construct:_r(t,m)}),prop2slice:(h=p.shape.length,0===h?yr:1===h?xr:Ir)},new n(a,{get:Pr(f),set:qr(f)})}var h;var j;return console.warn("WARNING: Proxy objects are not supported in the current environment. Some fancy functionality may not be available."),a}}var Qr=Fr();r(Qr,"factory",Fr),r(Qr,"idx",t);export{Qr as default,Fr as factory};
//# sourceMappingURL=index.mjs.map