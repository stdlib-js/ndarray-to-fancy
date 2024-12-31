"use strict";var u=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var k=u(function(Ha,U){
var ge=require('@stdlib/proxy-ctor/dist'),Ee=typeof ge=="function";U.exports=Ee
});var j=u(function(Ja,B){
var Se=require('@stdlib/ndarray-base-assert-is-complex-floating-point-data-type/dist'),me=require('@stdlib/assert-is-number/dist').isPrimitive;function he(r){return me(r)?[r,0]:r}function Ie(r){return Se(r)?he:null}B.exports=Ie
});var G=u(function(Ka,F){
function we(r,i){return e;function e(t){return r(t,i)}}F.exports=we
});var Q=u(function(Za,X){
var be=require('@stdlib/ndarray-index/dist');function _e(){return{cache:be,strict:!1}}X.exports=_e
});var Y=u(function(rn,z){
var Ae=require('@stdlib/assert-is-plain-object/dist'),W=require('@stdlib/assert-has-own-property/dist'),Re=require('@stdlib/assert-is-boolean/dist').isPrimitive,Ne=require('@stdlib/assert-is-method-in/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist');function De(r,i){return Ae(i)?W(i,"strict")&&(r.strict=i.strict,!Re(r.strict))?new TypeError(A('null2o',"strict",r.strict)):W(i,"cache")&&(r.cache=i.cache,!Ne(r.cache,"get"))?new TypeError(A('nullFb',"cache","get",r.cache)):null:new TypeError(A('null2V',i));}z.exports=De
});var K=u(function(en,J){
var g=require('@stdlib/assert-is-number/dist').isPrimitive,Te=require('@stdlib/assert-is-integer/dist').isPrimitive,Ce=require('@stdlib/assert-is-boolean/dist').isPrimitive,E=require('@stdlib/assert-is-complex-like/dist'),Le=require('@stdlib/ndarray-base-assert-is-real-floating-point-data-type/dist'),Me=require('@stdlib/ndarray-base-assert-is-unsigned-integer-data-type/dist'),Ve=require('@stdlib/ndarray-base-assert-is-signed-integer-data-type/dist'),xe=require('@stdlib/ndarray-base-assert-is-boolean-data-type/dist'),$=require('@stdlib/ndarray-base-assert-is-safe-data-type-cast/dist'),H=require('@stdlib/ndarray-min-dtype/dist'),Oe=require('@stdlib/ndarray-base-min-signed-integer-dtype/dist'),R=require('@stdlib/complex-dtype/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist');function Pe(){return null}function Ue(r,i){return Ce(r)?null:new TypeError(c('nullEw',typeof r,i));}function ke(r,i){return g(r)?null:E(r)?new TypeError(c('nullEw',R(r),i)):new TypeError(c('nullEw',typeof r,i));}function Be(r,i){return g(r)||E(r)?null:new TypeError(c('nullEw',typeof r,i));}function je(r,i){var e;return g(r)?Te(r)?(e=Oe(r),$(e,i)?null:new TypeError(c('nullEw',e,i))):new TypeError(c('nullEw',H(r),i)):E(r)?new TypeError(c('nullEw',R(r),i)):new TypeError(c('nullEw',typeof r,i));}function Fe(r,i){var e;return g(r)?(e=H(r),$(e,i)?null:new TypeError(c('nullEw',e,i))):E(r)?new TypeError(c('nullEw',R(r),i)):new TypeError(c('nullEw',typeof r,i));}function Ge(r){return r==="generic"||r===""?Pe:Le(r)?ke:Me(r)?Fe:Ve(r)?je:xe(r)?Ue:Be}J.exports=Ge
});var S=u(function(tn,Z){
var Xe=require('@stdlib/string-base-starts-with/dist');function Qe(r){return r[0]==="M"&&Xe(r,"MultiSlice(",0)&&r[r.length-1]===")"}Z.exports=Qe
});var N=u(function(an,rr){
var We=require('@stdlib/string-base-starts-with/dist');function ze(r){return r[0]==="S"&&We(r,"Slice(",0)&&r[r.length-1]===")"}rr.exports=ze
});var ir=u(function(nn,er){
var Ye=/^-?[0-9]+$/;er.exports=Ye
});var d=u(function(sn,tr){
var $e=require('@stdlib/assert-is-string/dist').isPrimitive,He=ir();function Je(r){return $e(r)&&He.test(r)}tr.exports=Je
});var nr=u(function(un,ar){
var Ke=/:/;ar.exports=Ke
});var m=u(function(on,sr){
var Ze=nr();function ri(r){return Ze.test(r)}sr.exports=ri
});var h=u(function(cn,ur){
function ei(r){return r==="..."}ur.exports=ei
});var D=u(function(ln,or){
function ii(r){return r===""}or.exports=ii
});var I=u(function(vn,cr){
var ti=require('@stdlib/slice-base-str2multislice/dist'),ai=require('@stdlib/error-tools-fmtprodmsg/dist');function ni(r,i){var e=ti(i);if(e===null)throw new Error(ai('nullEn',r));return e}cr.exports=ni
});var T=u(function(fn,lr){
var si=require('@stdlib/slice-base-str2slice/dist'),ui=require('@stdlib/slice-multi/dist'),oi=require('@stdlib/error-tools-fmtprodmsg/dist');function ci(r,i){var e=si(i);if(e===null)throw new Error(oi('nullEn',r));return new ui(e)}lr.exports=ci
});var C=u(function(pn,vr){
var li=require('@stdlib/slice-multi/dist');function vi(r,i){return new li(parseInt(i,10))}vr.exports=vi
});var pr=u(function(dn,fr){
var fi=require('@stdlib/string-base-trim/dist'),pi=require('@stdlib/string-base-replace/dist'),di=require('@stdlib/slice-multi/dist'),qi=require('@stdlib/slice-base-seq2multislice/dist'),yi=require('@stdlib/ndarray-base-shape/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist'),gi=S(),Ei=N(),Si=d(),mi=m(),hi=h(),Ii=D(),wi=I(),bi=T(),_i=C();function Ai(r,i,e){var t=qi(i,e,!0);if(t.code)throw t.code==="ERR_SLICE_INVALID_INCREMENT"?new Error(w('nullEq',r)):t.code==="ERR_SLICE_INVALID_ELLIPSIS"?new Error(w('nullEr',r)):t.code==="ERR_SLICE_INVALID_SUBSEQUENCE"?new Error(w('nullEn',r)):new RangeError(w('nullEv',e.join(","),pi(i,/\.\.\.,/,"").split(",").length));return t}function Ri(r,i){var e=fi(i);return Ii(e)||hi(e)?new di:Ei(e)?bi(i,e):gi(e)?wi(i,e):Si(e)?_i(i,e):mi(e)?Ai(i,e,yi(r,!1)):null}fr.exports=Ri
});var yr=u(function(qn,qr){
var Ni=require('@stdlib/string-base-trim/dist'),Di=require('@stdlib/string-base-replace/dist'),dr=require('@stdlib/slice-base-seq2multislice/dist'),Ti=require('@stdlib/ndarray-base-shape/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),Ci=N(),Li=S(),Mi=d(),Vi=m(),xi=h(),Oi=I(),Pi=T(),Ui=C();function ki(r,i,e,t){var n=dr(i,e,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(q('nullEq',r));if(n.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new Error(q('nullEr',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(q('nullEn',r));if(n.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new RangeError(q('nullEv',e.join(","),Di(i,/\.\.\.,/,"").split(",").length));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError(q('nullEp',e.join(",")));n=dr(i,e,!1)}}return n}function Bi(r,i,e){var t=Ni(i);return Ci(t)?Pi(i,t):Li(t)?Oi(i,t):Mi(t)?Ui(i,t):Vi(t)||xi(t)?ki(i,t,Ti(r,!1),e):null}qr.exports=Bi
});var Sr=u(function(yn,Er){
var ji=require('@stdlib/string-base-trim/dist'),Fi=require('@stdlib/string-base-replace/dist'),gr=require('@stdlib/slice-base-seq2multislice/dist'),Gi=require('@stdlib/slice-base-sargs2multislice/dist'),Xi=require('@stdlib/ndarray-base-shape/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Qi=m(),Wi=h(),zi=S(),Yi=D(),$i=I();function Hi(r,i,e,t){var n=gr(i,e,!0);if(n.code){if(n.code==="ERR_SLICE_INVALID_INCREMENT")throw new Error(y('nullEq',r));if(n.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new Error(y('nullEr',r));if(n.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new Error(y('nullEn',r));if(n.code==="ERR_SLICE_TOO_MANY_DIMENSIONS"||n.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new RangeError(y('nullEv',e.join(","),Fi(i,/\.\.\.,/,"").split(",").length));if(n.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError(y('nullEp',e.join(",")));n=gr(i,e,!1)}}return n}function Ji(r,i,e){var t=ji(i);return zi(t)?$i(i,t):Qi(t)||Wi(t)?Hi(i,t,Xi(r,!1),e):Yi(t)?null:Gi(t)}Er.exports=Ji
});var hr=u(function(gn,mr){
var Ki=pr(),Zi=yr(),rt=Sr();function et(r){return r===0?Ki:r===1?Zi:rt}mr.exports=et
});var wr=u(function(En,Ir){
function it(r,i){return e;function e(t,n){var s,a;switch(a=n,a.length){case 0:s=new t;break;case 1:s=new t(a[0]);break;case 2:s=new t(a[0],a[1]);break;case 3:s=new t(a[0],a[1],a[2]);break;case 4:s=new t(a[0],a[1],a[2],a[3]);break;case 5:s=new t(a[0],a[1],a[2],a[3],a[4]);break;case 6:s=new t(a[0],a[1],a[2],a[3],a[4],a[5]);break;case 7:s=new t(a[0],a[1],a[2],a[3],a[4],a[5],a[6]);break;case 8:s=new t(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);break;case 9:s=new t(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);break;case 10:s=new t(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9]);break;default:s=t.apply(null,a)}return r(s,i)}}Ir.exports=it
});var b=u(function(Sn,br){
var tt=require('@stdlib/ndarray-base-normalize-index/dist'),at=require('@stdlib/error-tools-fmtprodmsg/dist');function nt(r,i,e){var t,n;if(t=parseInt(r,10),n=tt(t,i-1),n===-1&&e)throw new RangeError(at("invalid operation. Index exceeds ndarray bounds."));return n}br.exports=nt
});var Dr=u(function(mn,Nr){
var st=require('@stdlib/assert-is-method-in/dist'),_r=require('@stdlib/ndarray-base-shape/dist'),ut=require('@stdlib/ndarray-strides/dist'),ot=require('@stdlib/ndarray-order/dist'),Ar=require('@stdlib/ndarray-base-numel/dist'),ct=require('@stdlib/ndarray-base-ind2sub/dist'),Rr=b();function lt(r,i,e){if(i=Rr(i,Ar(_r(r,!1)),e),i!==-1)return r.iget(i)}function vt(r,i,e){var t,n;if(n=_r(r,!1),i=Rr(i,Ar(n),e),i!==-1)return t=ct(n,ut(r),0,ot(r),i,"throw"),r.get.apply(r,t)}function ft(r){return st(r,"iget")?lt:vt}Nr.exports=ft
});var Vr=u(function(hn,Mr){
var pt=require('@stdlib/assert-is-method-in/dist'),Tr=require('@stdlib/ndarray-base-shape/dist'),dt=require('@stdlib/ndarray-strides/dist'),qt=require('@stdlib/ndarray-order/dist'),Cr=require('@stdlib/ndarray-base-numel/dist'),yt=require('@stdlib/ndarray-base-ind2sub/dist'),Lr=b();function gt(r,i,e,t){return i=Lr(i,Cr(Tr(r,!1)),t),i===-1?!1:(r.iset(i,e),!0)}function Et(r,i,e,t){var n,s;return s=Tr(r,!1),i=Lr(i,Cr(s),t),i===-1?!1:(n=yt(s,dt(r),0,qt(r),i,"throw"),n.push(e),r.set.apply(r,n),!0)}function St(r){return pt(r,"iset")?gt:Et}Mr.exports=St
});var Or=u(function(In,xr){
var mt=/\s*ndindex<[^>]+>\s*/;xr.exports=mt
});var L=u(function(wn,Pr){
var ht=require('@stdlib/assert-is-string/dist').isPrimitive,It=Or();function wt(r){return ht(r)&&It.test(r)}Pr.exports=wt
});var kr=u(function(bn,Ur){
var bt=/^\s*(?:-?[0-9]+)\s*(?:,\s*(?:-?[0-9]+)\s*)*,\s*(?:-?[0-9]+)\s*$/;Ur.exports=bt
});var M=u(function(_n,Br){
var _t=kr();function At(r){return _t.test(r)}Br.exports=At
});var Fr=u(function(An,jr){
var Rt=require('@stdlib/ndarray-base-from-scalar-like/dist');function Nt(r,i,e){var t=e.getter(r,i,e.strict);if(t!==void 0)return e.postGetArray(Rt(r,t))}jr.exports=Nt
});var V=u(function(Rn,Gr){
var Dt=require('@stdlib/error-tools-fmtprodmsg/dist'),Tt=b();function Ct(r,i,e){var t,n,s,a;if(t=i.length,n=r.split(/\s*,\s*/),n.length!==t)throw new RangeError(Dt("invalid operation. Number of indices does not match the number of array dimensions. Array shape: (%s). Index dimensions: %u.",i.join(","),n.length));for(a=0;a<t;a++){if(s=Tt(n[a],i[a],e),s===-1)return;n[a]=s}return n}Gr.exports=Ct
});var Qr=u(function(Nn,Xr){
var Lt=require('@stdlib/ndarray-base-from-scalar-like/dist'),Mt=require('@stdlib/ndarray-base-shape/dist'),Vt=V();function xt(r,i,e){var t,n;if(t=Vt(i,Mt(r,!1),e.strict),t!==void 0&&(n=r.get.apply(r,t),n!==void 0))return e.postGetArray(Lt(r,n))}Xr.exports=xt
});var zr=u(function(Dn,Wr){
var Ot=require('@stdlib/assert-is-function/dist');function Pt(r,i,e,t){var n=r[i];if(Ot(n))return n===r.constructor?t.ctor:s;return n;function s(){var a,o;for(a=[],o=0;o<arguments.length;o++)a.push(arguments[o]);return n.apply(this===e?r:this,a)}}Wr.exports=Pt
});var x=u(function(Tn,Yr){
var Ut=require('@stdlib/string-base-replace/dist');function kt(r){return Ut(r,/^invalid arguments?/,"invalid operation")}Yr.exports=kt
});var Hr=u(function(Cn,$r){
var Bt=require('@stdlib/ndarray-base-slice/dist'),jt=x();function Ft(r,i,e){var t=e.prop2slice(r,i,e.strict);if(t!==null)try{return e.postGetArray(Bt(r,t,e.strict,!1))}catch(n){throw new n.constructor(jt(n.message))}}$r.exports=Ft
});var Kr=u(function(Ln,Jr){
var Gt=require('@stdlib/assert-is-string/dist').isPrimitive,Xt=require('@stdlib/assert-has-property/dist'),Qt=d(),Wt=L(),zt=M(),Yt=Fr(),$t=Qr(),Ht=zr(),Jt=Hr();function Kt(r){return i;function i(e,t,n){if(Qt(t))return Yt(e,t,r);if(Xt(e,t)||!Gt(t))return Ht(e,t,n,r);if(zt(t))return $t(e,t,r);if(!Wt(t))return Jt(e,t,r)}}Jr.exports=Kt
});var re=u(function(Mn,Zr){
var Zt=require('@stdlib/ndarray-base-shape/dist'),ra=V();function ea(r,i,e,t){var n,s,a;if(s=t.validator(e,t.dtype),s)throw s;return t.preSetElement?a=t.preSetElement(e):a=e,n=ra(i,Zt(r,!1),t.strict),n===void 0?!1:(n.push(a),r.set.apply(r,n),!0)}Zr.exports=ea
});var ie=u(function(Vn,ee){
function ia(r,i,e,t){var n,s;if(n=t.validator(e,t.dtype),n)throw n;return t.preSetElement?s=t.preSetElement(e):s=e,t.setter(r,i,s,t.strict)}ee.exports=ia
});var ae=u(function(xn,te){
function ta(r,i,e){return r[i]=e,!0}te.exports=ta
});var ue=u(function(On,se){
var aa=require('@stdlib/ndarray-base-slice-assign/dist'),na=require('@stdlib/assert-is-ndarray-like/dist'),sa=require('@stdlib/assert-is-number/dist').isPrimitive,ua=require('@stdlib/assert-is-integer/dist').isPrimitive,oa=require('@stdlib/assert-is-complex-like/dist'),ca=require('@stdlib/ndarray-base-assert-is-complex-floating-point-data-type/dist'),la=require('@stdlib/ndarray-base-assert-is-floating-point-data-type/dist'),va=require('@stdlib/ndarray-base-assert-is-unsigned-integer-data-type/dist'),fa=require('@stdlib/ndarray-base-assert-is-signed-integer-data-type/dist'),ne=require('@stdlib/ndarray-base-assert-is-safe-data-type-cast/dist'),pa=require('@stdlib/constants-int8-max/dist'),da=require('@stdlib/constants-int16-max/dist'),qa=require('@stdlib/constants-int32-max/dist'),_=require('@stdlib/ndarray-min-dtype/dist'),ya=require('@stdlib/complex-dtype/dist'),f=require('@stdlib/ndarray-from-scalar/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist'),ga=x();function p(r){return{dtype:r}}function Ea(r,i,e,t,n){var s,a,o;if(o=n.prop2slice(r,i,n.strict),o===null)return!1;if(!na(e))if(a=n.dtype,a==="generic")e=f(e,p(a));else if(sa(e))if(la(a))e=f(e,p(a));else if(va(a))if(s=_(e),ne(s,a))e=f(e,p(a));else throw new TypeError(l('nullEw',s,a));else if(fa(a)){if(!ua(e))throw new TypeError(l('nullEw',_(e),a));if(e<0?s=_(e):e<=pa?s="int8":e<=da?s="int16":e<=qa?s="int32":s="float64",ne(s,a))e=f(e,p(a));else throw new TypeError(l('nullEw',s,a))}else if(a==="binary")if(s=_(e),s==="uint8")e=f(e,p(a));else throw new TypeError(l('nullEw',s,a));else throw new TypeError(l('nullEx',a));else if(oa(e)){if(!ca(a))throw new TypeError(l('nullEw',ya(e),a));e=f(e,p(a))}else throw new TypeError(l('nullEw',typeof e,a));try{aa(e,t,o,n.strict)}catch(v){throw new v.constructor(ga(v.message))}return!0}se.exports=Ea
});var le=u(function(Pn,ce){
var Sa=require('@stdlib/assert-is-string/dist').isPrimitive,ma=require('@stdlib/assert-has-property/dist'),ha=M(),Ia=L(),wa=d(),ba=re(),_a=ie(),oe=ae(),Aa=ue();function Ra(r){return i;function i(e,t,n,s){var a;return ma(e,t)||!Sa(t)?oe(e,t,n,r):wa(t)?_a(e,t,n,r):ha(t)?ba(e,t,n,r):Ia(t)?!1:(a=Aa(e,t,n,s,r),a||oe(e,t,n,r))}}ce.exports=Ra
});var O=u(function(Un,pe){
var Na=require('@stdlib/assert-is-ndarray-like/dist'),ve=require('@stdlib/proxy-ctor/dist'),Da=require('@stdlib/ndarray-ctor/dist'),Ta=require('@stdlib/ndarray-base-ndarraylike2object/dist'),Ca=require('@stdlib/object-assign/dist'),La=require('@stdlib/error-tools-fmtprodmsg/dist'),Ma=k(),Va=j(),xa=G(),Oa=Q(),fe=Y(),Pa=K(),Ua=hr(),ka=wr(),Ba=Dr(),ja=Vr(),Fa=Kr(),Ga=le();function Xa(){var r,i;if(r=Oa(),arguments.length&&(i=fe(r,arguments[0]),i))throw i;return e;function e(t){var n,s,a,o,v;if(!Na(t))throw new TypeError(La('null4f',t));if(Ma){if(n=Ca({},r),arguments.length>1&&(s=fe(n,arguments[1]),s))throw s;return a=Ta(t),o=a.dtype||"",v={ref:t,dtype:o,getter:Ba(t),setter:ja(t),preSetElement:Va(o),postGetArray:xa(e,n),cache:n.cache,strict:n.strict,validator:Pa(o),ndarray2fancy:e,ctor:new ve(t.constructor||Da,{construct:ka(e,n)}),prop2slice:Ua(a.shape.length)},new ve(t,{get:Fa(v),set:Ga(v)})}return console.warn("WARNING: Proxy objects are not supported in the current environment. Some fancy functionality may not be available."),t}}pe.exports=Xa
});var qe=u(function(kn,de){
var Qa=O(),Wa=Qa();de.exports=Wa
});var ye=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),za=require('@stdlib/ndarray-index/dist'),P=qe(),Ya=O();ye(P,"factory",Ya);ye(P,"idx",za);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
