function xf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function wf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ju={exports:{}},Wi={},Pu={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),kf=Symbol.for("react.portal"),Sf=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Tf=Symbol.for("react.memo"),zf=Symbol.for("react.lazy"),Xl=Symbol.iterator;function Rf(e){return e===null||typeof e!="object"?null:(e=Xl&&e[Xl]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zu=Object.assign,Ru={};function _n(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Tu}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lu(){}Lu.prototype=_n.prototype;function qo(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Tu}var Ko=qo.prototype=new Lu;Ko.constructor=qo;zu(Ko,_n.prototype);Ko.isPureReactComponent=!0;var Gl=Array.isArray,bu=Object.prototype.hasOwnProperty,Yo={current:null},Ou={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)bu.call(t,r)&&!Ou.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_r,type:e,key:s,ref:o,props:i,_owner:Yo.current}}function Lf(e,t){return{$$typeof:_r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function bf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jl=/\/+/g;function ps(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bf(""+e.key):t.toString(36)}function Jr(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case _r:case kf:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ps(o,0):r,Gl(i)?(n="",e!=null&&(n=e.replace(Jl,"$&/")+"/"),Jr(i,t,n,"",function(c){return c})):i!=null&&(Xo(i)&&(i=Lf(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jl,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Gl(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+ps(s,l);o+=Jr(s,t,n,u,i)}else if(u=Rf(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+ps(s,l++),o+=Jr(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function br(e,t,n){if(e==null)return e;var r=[],i=0;return Jr(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Zr={transition:null},Af={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:Yo};function Iu(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!Xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=_n;A.Fragment=Sf;A.Profiler=_f;A.PureComponent=qo;A.StrictMode=Ef;A.Suspense=Pf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;A.act=Iu;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zu({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Yo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)bu.call(t,u)&&!Ou.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_r,type:e.type,key:i,ref:s,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:Nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cf,_context:e},e.Consumer=e};A.createElement=Au;A.createFactory=function(e){var t=Au.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:jf,render:e}};A.isValidElement=Xo;A.lazy=function(e){return{$$typeof:zf,_payload:{_status:-1,_result:e},_init:Of}};A.memo=function(e,t){return{$$typeof:Tf,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=t}};A.unstable_act=Iu;A.useCallback=function(e,t){return fe.current.useCallback(e,t)};A.useContext=function(e){return fe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};A.useEffect=function(e,t){return fe.current.useEffect(e,t)};A.useId=function(){return fe.current.useId()};A.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return fe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};A.useRef=function(e){return fe.current.useRef(e)};A.useState=function(e){return fe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return fe.current.useTransition()};A.version="18.3.1";Pu.exports=A;var k=Pu.exports;const Mu=wf(k),If=xf({__proto__:null,default:Mu},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=k,Df=Symbol.for("react.element"),Bf=Symbol.for("react.fragment"),Ff=Object.prototype.hasOwnProperty,Uf=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$f={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ff.call(t,r)&&!$f.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Df,type:e,key:s,ref:o,props:i,_owner:Uf.current}}Wi.Fragment=Bf;Wi.jsx=Du;Wi.jsxs=Du;ju.exports=Wi;var a=ju.exports,Ws={},Bu={exports:{}},_e={},Fu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var b=N.length;N.push(z);e:for(;0<b;){var K=b-1>>>1,ee=N[K];if(0<i(ee,z))N[K]=z,N[b]=ee,b=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],b=N.pop();if(b!==z){N[0]=b;e:for(var K=0,ee=N.length,Rr=ee>>>1;K<Rr;){var Lt=2*(K+1)-1,fs=N[Lt],bt=Lt+1,Lr=N[bt];if(0>i(fs,b))bt<ee&&0>i(Lr,fs)?(N[K]=Lr,N[bt]=b,K=bt):(N[K]=fs,N[Lt]=b,K=Lt);else if(bt<ee&&0>i(Lr,b))N[K]=Lr,N[bt]=b,K=bt;else break e}}return z}function i(N,z){var b=N.sortIndex-z.sortIndex;return b!==0?b:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],c=[],m=1,d=null,g=3,y=!1,x=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=N)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function w(N){if(v=!1,h(N),!x)if(n(u)!==null)x=!0,cs(_);else{var z=n(c);z!==null&&ds(w,z.startTime-N)}}function _(N,z){x=!1,v&&(v=!1,p(T),T=-1),y=!0;var b=g;try{for(h(z),d=n(u);d!==null&&(!(d.expirationTime>z)||N&&!xe());){var K=d.callback;if(typeof K=="function"){d.callback=null,g=d.priorityLevel;var ee=K(d.expirationTime<=z);z=e.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(u)&&r(u),h(z)}else r(u);d=n(u)}if(d!==null)var Rr=!0;else{var Lt=n(c);Lt!==null&&ds(w,Lt.startTime-z),Rr=!1}return Rr}finally{d=null,g=b,y=!1}}var j=!1,P=null,T=-1,$=5,L=-1;function xe(){return!(e.unstable_now()-L<$)}function Tn(){if(P!==null){var N=e.unstable_now();L=N;var z=!0;try{z=P(!0,N)}finally{z?zn():(j=!1,P=null)}}else j=!1}var zn;if(typeof f=="function")zn=function(){f(Tn)};else if(typeof MessageChannel<"u"){var Yl=new MessageChannel,vf=Yl.port2;Yl.port1.onmessage=Tn,zn=function(){vf.postMessage(null)}}else zn=function(){E(Tn,0)};function cs(N){P=N,j||(j=!0,zn())}function ds(N,z){T=E(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,cs(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var b=g;g=z;try{return N()}finally{g=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var b=g;g=N;try{return z()}finally{g=b}},e.unstable_scheduleCallback=function(N,z,b){var K=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?K+b:K):b=K,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=b+ee,N={id:m++,callback:z,priorityLevel:N,startTime:b,expirationTime:ee,sortIndex:-1},b>K?(N.sortIndex=b,t(c,N),n(u)===null&&N===n(c)&&(v?(p(T),T=-1):v=!0,ds(w,b-K))):(N.sortIndex=ee,t(u,N),x||y||(x=!0,cs(_))),N},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(N){var z=g;return function(){var b=g;g=z;try{return N.apply(this,arguments)}finally{g=b}}}})(Uu);Fu.exports=Uu;var Wf=Fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf=k,Ee=Wf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $u=new Set,ir={};function qt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(ir[e]=t,e=0;e<t.length;e++)$u.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vs=Object.prototype.hasOwnProperty,Hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zl={},ea={};function Qf(e){return Vs.call(ea,e)?!0:Vs.call(Zl,e)?!1:Hf.test(e)?ea[e]=!0:(Zl[e]=!0,!1)}function qf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kf(e,t,n,r){if(t===null||typeof t>"u"||qf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Go=/[\-:]([a-z])/g;function Jo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Go,Jo);se[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Go,Jo);se[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Go,Jo);se[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zo(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kf(t,n,i,r)&&(n=null),r||i===null?Qf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),el=Symbol.for("react.strict_mode"),Hs=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Vu=Symbol.for("react.context"),tl=Symbol.for("react.forward_ref"),Qs=Symbol.for("react.suspense"),qs=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Hu=Symbol.for("react.offscreen"),ta=Symbol.iterator;function Rn(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,hs;function Un(e){if(hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hs=t&&t[1]||""}return`
`+hs+e}var ms=!1;function gs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function Yf(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=gs(e.type,!1),e;case 11:return e=gs(e.type.render,!1),e;case 1:return e=gs(e.type,!0),e;default:return""}}function Ks(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Gt:return"Portal";case Hs:return"Profiler";case el:return"StrictMode";case Qs:return"Suspense";case qs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case tl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nl:return t=e.displayName||null,t!==null?t:Ks(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return Ks(e(t))}catch{}}return null}function Xf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ks(t);case 8:return t===el?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gf(e){var t=Qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){e._valueTracker||(e._valueTracker=Gf(e))}function qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ys(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function na(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ku(e,t){t=t.checked,t!=null&&Zo(e,"checked",t,!1)}function Xs(e,t){Ku(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gs(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ra(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gs(e,t,n){(t!=="number"||hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Js(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ia(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if($n(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function Yu(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jf=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){Jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qn[t]=qn[e]})});function Ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qn.hasOwnProperty(e)&&qn[e]?(""+t).trim():t+"px"}function Zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eo(e,t){if(t){if(Zf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function to(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var no=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ro=null,dn=null,fn=null;function oa(e){if(e=jr(e)){if(typeof ro!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ki(t),ro(e.stateNode,e.type,t))}}function ec(e){dn?fn?fn.push(e):fn=[e]:dn=e}function tc(){if(dn){var e=dn,t=fn;if(fn=dn=null,oa(e),t)for(e=0;e<t.length;e++)oa(t[e])}}function nc(e,t){return e(t)}function rc(){}var ys=!1;function ic(e,t,n){if(ys)return e(t,n);ys=!0;try{return nc(e,t,n)}finally{ys=!1,(dn!==null||fn!==null)&&(rc(),tc())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=Ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var io=!1;if(et)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){io=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{io=!1}function ep(e,t,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Kn=!1,mi=null,gi=!1,so=null,tp={onError:function(e){Kn=!0,mi=e}};function np(e,t,n,r,i,s,o,l,u){Kn=!1,mi=null,ep.apply(tp,arguments)}function rp(e,t,n,r,i,s,o,l,u){if(np.apply(this,arguments),Kn){if(Kn){var c=mi;Kn=!1,mi=null}else throw Error(S(198));gi||(gi=!0,so=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function la(e){if(Kt(e)!==e)throw Error(S(188))}function ip(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return la(i),e;if(s===r)return la(i),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function oc(e){return e=ip(e),e!==null?lc(e):null}function lc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lc(e);if(t!==null)return t;e=e.sibling}return null}var ac=Ee.unstable_scheduleCallback,aa=Ee.unstable_cancelCallback,sp=Ee.unstable_shouldYield,op=Ee.unstable_requestPaint,Y=Ee.unstable_now,lp=Ee.unstable_getCurrentPriorityLevel,il=Ee.unstable_ImmediatePriority,uc=Ee.unstable_UserBlockingPriority,yi=Ee.unstable_NormalPriority,ap=Ee.unstable_LowPriority,cc=Ee.unstable_IdlePriority,Vi=null,He=null;function up(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Vi,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:fp,cp=Math.log,dp=Math.LN2;function fp(e){return e>>>=0,e===0?32:31-(cp(e)/dp|0)|0}var Mr=64,Dr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Wn(l):(s&=o,s!==0&&(r=Wn(s)))}else o=n&~i,o!==0?r=Wn(o):s!==0&&(r=Wn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-De(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=pp(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dc(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pc,ol,hc,mc,gc,lo=!1,Br=[],mt=null,gt=null,yt=null,lr=new Map,ar=new Map,ut=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ua(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(t.pointerId)}}function bn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=jr(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yp(e,t,n,r,i){switch(t){case"focusin":return mt=bn(mt,e,t,n,r,i),!0;case"dragenter":return gt=bn(gt,e,t,n,r,i),!0;case"mouseover":return yt=bn(yt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return lr.set(s,bn(lr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ar.set(s,bn(ar.get(s)||null,e,t,n,r,i)),!0}return!1}function yc(e){var t=It(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=sc(n),t!==null){e.blockedOn=t,gc(e.priority,function(){hc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ao(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);no=r,n.target.dispatchEvent(r),no=null}else return t=jr(n),t!==null&&ol(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){ei(e)&&n.delete(t)}function vp(){lo=!1,mt!==null&&ei(mt)&&(mt=null),gt!==null&&ei(gt)&&(gt=null),yt!==null&&ei(yt)&&(yt=null),lr.forEach(ca),ar.forEach(ca)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,lo||(lo=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,vp)))}function ur(e){function t(i){return On(i,e)}if(0<Br.length){On(Br[0],e);for(var n=1;n<Br.length;n++){var r=Br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&On(mt,e),gt!==null&&On(gt,e),yt!==null&&On(yt,e),lr.forEach(t),ar.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&ut.shift()}var pn=it.ReactCurrentBatchConfig,xi=!0;function xp(e,t,n,r){var i=M,s=pn.transition;pn.transition=null;try{M=1,ll(e,t,n,r)}finally{M=i,pn.transition=s}}function wp(e,t,n,r){var i=M,s=pn.transition;pn.transition=null;try{M=4,ll(e,t,n,r)}finally{M=i,pn.transition=s}}function ll(e,t,n,r){if(xi){var i=ao(e,t,n,r);if(i===null)Ps(e,t,r,wi,n),ua(e,r);else if(yp(i,e,t,n,r))r.stopPropagation();else if(ua(e,r),t&4&&-1<gp.indexOf(e)){for(;i!==null;){var s=jr(i);if(s!==null&&pc(s),s=ao(e,t,n,r),s===null&&Ps(e,t,r,wi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var wi=null;function ao(e,t,n,r){if(wi=null,e=rl(r),e=It(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wi=e,null}function vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lp()){case il:return 1;case uc:return 4;case yi:case ap:return 16;case cc:return 536870912;default:return 16}default:return 16}}var dt=null,al=null,ti=null;function xc(){if(ti)return ti;var e,t=al,n=t.length,r,i="value"in dt?dt.value:dt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ti=i.slice(e,1<r?1-r:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function da(){return!1}function Ce(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fr:da,this.isPropagationStopped=da,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Ce(Cn),Nr=H({},Cn,{view:0,detail:0}),kp=Ce(Nr),xs,ws,An,Hi=H({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==An&&(An&&e.type==="mousemove"?(xs=e.screenX-An.screenX,ws=e.screenY-An.screenY):ws=xs=0,An=e),xs)},movementY:function(e){return"movementY"in e?e.movementY:ws}}),fa=Ce(Hi),Sp=H({},Hi,{dataTransfer:0}),Ep=Ce(Sp),_p=H({},Nr,{relatedTarget:0}),ks=Ce(_p),Cp=H({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Np=Ce(Cp),jp=H({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Ce(jp),Tp=H({},Cn,{data:0}),pa=Ce(Tp),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lp[e])?!!t[e]:!1}function cl(){return bp}var Op=H({},Nr,{key:function(e){if(e.key){var t=zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=Ce(Op),Ip=H({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ha=Ce(Ip),Mp=H({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),Dp=Ce(Mp),Bp=H({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=Ce(Bp),Up=H({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=Ce(Up),Wp=[9,13,27,32],dl=et&&"CompositionEvent"in window,Yn=null;et&&"documentMode"in document&&(Yn=document.documentMode);var Vp=et&&"TextEvent"in window&&!Yn,wc=et&&(!dl||Yn&&8<Yn&&11>=Yn),ma=String.fromCharCode(32),ga=!1;function kc(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function Hp(e,t){switch(e){case"compositionend":return Sc(t);case"keypress":return t.which!==32?null:(ga=!0,ma);case"textInput":return e=t.data,e===ma&&ga?null:e;default:return null}}function Qp(e,t){if(Zt)return e==="compositionend"||!dl&&kc(e,t)?(e=xc(),ti=al=dt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qp[e.type]:t==="textarea"}function Ec(e,t,n,r){ec(r),t=ki(t,"onChange"),0<t.length&&(n=new ul("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,cr=null;function Kp(e){Oc(e,0)}function Qi(e){var t=nn(e);if(qu(t))return e}function Yp(e,t){if(e==="change")return t}var _c=!1;if(et){var Ss;if(et){var Es="oninput"in document;if(!Es){var va=document.createElement("div");va.setAttribute("oninput","return;"),Es=typeof va.oninput=="function"}Ss=Es}else Ss=!1;_c=Ss&&(!document.documentMode||9<document.documentMode)}function xa(){Xn&&(Xn.detachEvent("onpropertychange",Cc),cr=Xn=null)}function Cc(e){if(e.propertyName==="value"&&Qi(cr)){var t=[];Ec(t,cr,e,rl(e)),ic(Kp,t)}}function Xp(e,t,n){e==="focusin"?(xa(),Xn=t,cr=n,Xn.attachEvent("onpropertychange",Cc)):e==="focusout"&&xa()}function Gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(cr)}function Jp(e,t){if(e==="click")return Qi(t)}function Zp(e,t){if(e==="input"||e==="change")return Qi(t)}function eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:eh;function dr(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vs.call(t,i)||!Fe(e[i],t[i]))return!1}return!0}function wa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ka(e,t){var n=wa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wa(n)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jc(){for(var e=window,t=hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hi(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function th(e){var t=jc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nc(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ka(n,s);var o=ka(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nh=et&&"documentMode"in document&&11>=document.documentMode,en=null,uo=null,Gn=null,co=!1;function Sa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;co||en==null||en!==hi(r)||(r=en,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&dr(Gn,r)||(Gn=r,r=ki(uo,"onSelect"),0<r.length&&(t=new ul("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},_s={},Pc={};et&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function qi(e){if(_s[e])return _s[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pc)return _s[e]=t[n];return e}var Tc=qi("animationend"),zc=qi("animationiteration"),Rc=qi("animationstart"),Lc=qi("transitionend"),bc=new Map,Ea="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){bc.set(e,t),qt(t,[e])}for(var Cs=0;Cs<Ea.length;Cs++){var Ns=Ea[Cs],rh=Ns.toLowerCase(),ih=Ns[0].toUpperCase()+Ns.slice(1);jt(rh,"on"+ih)}jt(Tc,"onAnimationEnd");jt(zc,"onAnimationIteration");jt(Rc,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Lc,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;_a(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;_a(i,l,c),s=u}}}if(gi)throw e=so,gi=!1,so=null,e}function B(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Ac(t,e,2,!1),n.add(r))}function js(e,t,n){var r=0;t&&(r|=4),Ac(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[$r]){e[$r]=!0,$u.forEach(function(n){n!=="selectionchange"&&(sh.has(n)||js(n,!1,e),js(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$r]||(t[$r]=!0,js("selectionchange",!1,t))}}function Ac(e,t,n,r){switch(vc(t)){case 1:var i=xp;break;case 4:i=wp;break;default:i=ll}n=i.bind(null,t,n,e),i=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=It(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ic(function(){var c=s,m=rl(n),d=[];e:{var g=bc.get(e);if(g!==void 0){var y=ul,x=e;switch(e){case"keypress":if(ni(n)===0)break e;case"keydown":case"keyup":y=Ap;break;case"focusin":x="focus",y=ks;break;case"focusout":x="blur",y=ks;break;case"beforeblur":case"afterblur":y=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Dp;break;case Tc:case zc:case Rc:y=Np;break;case Lc:y=Fp;break;case"scroll":y=kp;break;case"wheel":y=$p;break;case"copy":case"cut":case"paste":y=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ha}var v=(t&4)!==0,E=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var f=c,h;f!==null;){h=f;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=or(f,p),w!=null&&v.push(pr(f,w,h)))),E)break;f=f.return}0<v.length&&(g=new y(g,x,null,n,m),d.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==no&&(x=n.relatedTarget||n.fromElement)&&(It(x)||x[tt]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?It(x):null,x!==null&&(E=Kt(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(v=fa,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=ha,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=y==null?g:nn(y),h=x==null?g:nn(x),g=new v(w,f+"leave",y,n,m),g.target=E,g.relatedTarget=h,w=null,It(m)===c&&(v=new v(p,f+"enter",x,n,m),v.target=h,v.relatedTarget=E,w=v),E=w,y&&x)t:{for(v=y,p=x,f=0,h=v;h;h=Yt(h))f++;for(h=0,w=p;w;w=Yt(w))h++;for(;0<f-h;)v=Yt(v),f--;for(;0<h-f;)p=Yt(p),h--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Yt(v),p=Yt(p)}v=null}else v=null;y!==null&&Ca(d,g,y,v,!1),x!==null&&E!==null&&Ca(d,E,x,v,!0)}}e:{if(g=c?nn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var _=Yp;else if(ya(g))if(_c)_=Zp;else{_=Gp;var j=Xp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=Jp);if(_&&(_=_(e,c))){Ec(d,_,n,m);break e}j&&j(e,g,c),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Gs(g,"number",g.value)}switch(j=c?nn(c):window,e){case"focusin":(ya(j)||j.contentEditable==="true")&&(en=j,uo=c,Gn=null);break;case"focusout":Gn=uo=en=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,Sa(d,n,m);break;case"selectionchange":if(nh)break;case"keydown":case"keyup":Sa(d,n,m)}var P;if(dl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Zt?kc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(wc&&n.locale!=="ko"&&(Zt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Zt&&(P=xc()):(dt=m,al="value"in dt?dt.value:dt.textContent,Zt=!0)),j=ki(c,T),0<j.length&&(T=new pa(T,e,null,n,m),d.push({event:T,listeners:j}),P?T.data=P:(P=Sc(n),P!==null&&(T.data=P)))),(P=Vp?Hp(e,n):Qp(e,n))&&(c=ki(c,"onBeforeInput"),0<c.length&&(m=new pa("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:c}),m.data=P))}Oc(d,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=or(e,n),s!=null&&r.unshift(pr(e,s,i)),s=or(e,t),s!=null&&r.push(pr(e,s,i))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ca(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=or(n,s),u!=null&&o.unshift(pr(n,u,l))):i||(u=or(n,s),u!=null&&o.push(pr(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var oh=/\r\n?/g,lh=/\u0000|\uFFFD/g;function Na(e){return(typeof e=="string"?e:""+e).replace(oh,`
`).replace(lh,"")}function Wr(e,t,n){if(t=Na(t),Na(e)!==t&&n)throw Error(S(425))}function Si(){}var fo=null,po=null;function ho(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mo=typeof setTimeout=="function"?setTimeout:void 0,ah=typeof clearTimeout=="function"?clearTimeout:void 0,ja=typeof Promise=="function"?Promise:void 0,uh=typeof queueMicrotask=="function"?queueMicrotask:typeof ja<"u"?function(e){return ja.resolve(null).then(e).catch(ch)}:mo;function ch(e){setTimeout(function(){throw e})}function Ts(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ur(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),We="__reactFiber$"+Nn,hr="__reactProps$"+Nn,tt="__reactContainer$"+Nn,go="__reactEvents$"+Nn,dh="__reactListeners$"+Nn,fh="__reactHandles$"+Nn;function It(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pa(e);e!==null;){if(n=e[We])return n;e=Pa(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[We]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ki(e){return e[hr]||null}var yo=[],rn=-1;function Pt(e){return{current:e}}function F(e){0>rn||(e.current=yo[rn],yo[rn]=null,rn--)}function D(e,t){rn++,yo[rn]=e.current,e.current=t}var Nt={},ue=Pt(Nt),ge=Pt(!1),$t=Nt;function yn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function Ei(){F(ge),F(ue)}function Ta(e,t,n){if(ue.current!==Nt)throw Error(S(168));D(ue,t),D(ge,n)}function Ic(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Xf(e)||"Unknown",i));return H({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,$t=ue.current,D(ue,e),D(ge,ge.current),!0}function za(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ic(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,F(ge),F(ue),D(ue,e)):F(ge),D(ge,n)}var Xe=null,Yi=!1,zs=!1;function Mc(e){Xe===null?Xe=[e]:Xe.push(e)}function ph(e){Yi=!0,Mc(e)}function Tt(){if(!zs&&Xe!==null){zs=!0;var e=0,t=M;try{var n=Xe;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Yi=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),ac(il,Tt),i}finally{M=t,zs=!1}}return null}var sn=[],on=0,Ci=null,Ni=0,Ne=[],je=0,Wt=null,Ge=1,Je="";function Ot(e,t){sn[on++]=Ni,sn[on++]=Ci,Ci=e,Ni=t}function Dc(e,t,n){Ne[je++]=Ge,Ne[je++]=Je,Ne[je++]=Wt,Wt=e;var r=Ge;e=Je;var i=32-De(r)-1;r&=~(1<<i),n+=1;var s=32-De(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ge=1<<32-De(t)+i|n<<i|r,Je=s+e}else Ge=1<<s|n<<i|r,Je=e}function pl(e){e.return!==null&&(Ot(e,1),Dc(e,1,0))}function hl(e){for(;e===Ci;)Ci=sn[--on],sn[on]=null,Ni=sn[--on],sn[on]=null;for(;e===Wt;)Wt=Ne[--je],Ne[je]=null,Je=Ne[--je],Ne[je]=null,Ge=Ne[--je],Ne[je]=null}var Se=null,ke=null,U=!1,Me=null;function Bc(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,ke=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:Ge,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,ke=null,!0):!1;default:return!1}}function vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xo(e){if(U){var t=ke;if(t){var n=t;if(!Ra(e,t)){if(vo(e))throw Error(S(418));t=vt(n.nextSibling);var r=Se;t&&Ra(e,t)?Bc(r,n):(e.flags=e.flags&-4097|2,U=!1,Se=e)}}else{if(vo(e))throw Error(S(418));e.flags=e.flags&-4097|2,U=!1,Se=e}}}function La(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Vr(e){if(e!==Se)return!1;if(!U)return La(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ho(e.type,e.memoizedProps)),t&&(t=ke)){if(vo(e))throw Fc(),Error(S(418));for(;t;)Bc(e,t),t=vt(t.nextSibling)}if(La(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=Se?vt(e.stateNode.nextSibling):null;return!0}function Fc(){for(var e=ke;e;)e=vt(e.nextSibling)}function vn(){ke=Se=null,U=!1}function ml(e){Me===null?Me=[e]:Me.push(e)}var hh=it.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Hr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function Uc(e){function t(p,f){if(e){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=St(p,f),p.index=0,p.sibling=null,p}function s(p,f,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,h,w){return f===null||f.tag!==6?(f=Ms(h,p.mode,w),f.return=p,f):(f=i(f,h),f.return=p,f)}function u(p,f,h,w){var _=h.type;return _===Jt?m(p,f,h.props.children,w,h.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===lt&&ba(_)===f.type)?(w=i(f,h.props),w.ref=In(p,f,h),w.return=p,w):(w=ui(h.type,h.key,h.props,null,p.mode,w),w.ref=In(p,f,h),w.return=p,w)}function c(p,f,h,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ds(h,p.mode,w),f.return=p,f):(f=i(f,h.children||[]),f.return=p,f)}function m(p,f,h,w,_){return f===null||f.tag!==7?(f=Ft(h,p.mode,w,_),f.return=p,f):(f=i(f,h),f.return=p,f)}function d(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ms(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Or:return h=ui(f.type,f.key,f.props,null,p.mode,h),h.ref=In(p,null,f),h.return=p,h;case Gt:return f=Ds(f,p.mode,h),f.return=p,f;case lt:var w=f._init;return d(p,w(f._payload),h)}if($n(f)||Rn(f))return f=Ft(f,p.mode,h,null),f.return=p,f;Hr(p,f)}return null}function g(p,f,h,w){var _=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:l(p,f,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Or:return h.key===_?u(p,f,h,w):null;case Gt:return h.key===_?c(p,f,h,w):null;case lt:return _=h._init,g(p,f,_(h._payload),w)}if($n(h)||Rn(h))return _!==null?null:m(p,f,h,w,null);Hr(p,h)}return null}function y(p,f,h,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,l(f,p,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Or:return p=p.get(w.key===null?h:w.key)||null,u(f,p,w,_);case Gt:return p=p.get(w.key===null?h:w.key)||null,c(f,p,w,_);case lt:var j=w._init;return y(p,f,h,j(w._payload),_)}if($n(w)||Rn(w))return p=p.get(h)||null,m(f,p,w,_,null);Hr(f,w)}return null}function x(p,f,h,w){for(var _=null,j=null,P=f,T=f=0,$=null;P!==null&&T<h.length;T++){P.index>T?($=P,P=null):$=P.sibling;var L=g(p,P,h[T],w);if(L===null){P===null&&(P=$);break}e&&P&&L.alternate===null&&t(p,P),f=s(L,f,T),j===null?_=L:j.sibling=L,j=L,P=$}if(T===h.length)return n(p,P),U&&Ot(p,T),_;if(P===null){for(;T<h.length;T++)P=d(p,h[T],w),P!==null&&(f=s(P,f,T),j===null?_=P:j.sibling=P,j=P);return U&&Ot(p,T),_}for(P=r(p,P);T<h.length;T++)$=y(P,p,T,h[T],w),$!==null&&(e&&$.alternate!==null&&P.delete($.key===null?T:$.key),f=s($,f,T),j===null?_=$:j.sibling=$,j=$);return e&&P.forEach(function(xe){return t(p,xe)}),U&&Ot(p,T),_}function v(p,f,h,w){var _=Rn(h);if(typeof _!="function")throw Error(S(150));if(h=_.call(h),h==null)throw Error(S(151));for(var j=_=null,P=f,T=f=0,$=null,L=h.next();P!==null&&!L.done;T++,L=h.next()){P.index>T?($=P,P=null):$=P.sibling;var xe=g(p,P,L.value,w);if(xe===null){P===null&&(P=$);break}e&&P&&xe.alternate===null&&t(p,P),f=s(xe,f,T),j===null?_=xe:j.sibling=xe,j=xe,P=$}if(L.done)return n(p,P),U&&Ot(p,T),_;if(P===null){for(;!L.done;T++,L=h.next())L=d(p,L.value,w),L!==null&&(f=s(L,f,T),j===null?_=L:j.sibling=L,j=L);return U&&Ot(p,T),_}for(P=r(p,P);!L.done;T++,L=h.next())L=y(P,p,T,L.value,w),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?T:L.key),f=s(L,f,T),j===null?_=L:j.sibling=L,j=L);return e&&P.forEach(function(Tn){return t(p,Tn)}),U&&Ot(p,T),_}function E(p,f,h,w){if(typeof h=="object"&&h!==null&&h.type===Jt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Or:e:{for(var _=h.key,j=f;j!==null;){if(j.key===_){if(_=h.type,_===Jt){if(j.tag===7){n(p,j.sibling),f=i(j,h.props.children),f.return=p,p=f;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===lt&&ba(_)===j.type){n(p,j.sibling),f=i(j,h.props),f.ref=In(p,j,h),f.return=p,p=f;break e}n(p,j);break}else t(p,j);j=j.sibling}h.type===Jt?(f=Ft(h.props.children,p.mode,w,h.key),f.return=p,p=f):(w=ui(h.type,h.key,h.props,null,p.mode,w),w.ref=In(p,f,h),w.return=p,p=w)}return o(p);case Gt:e:{for(j=h.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(p,f.sibling),f=i(f,h.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Ds(h,p.mode,w),f.return=p,p=f}return o(p);case lt:return j=h._init,E(p,f,j(h._payload),w)}if($n(h))return x(p,f,h,w);if(Rn(h))return v(p,f,h,w);Hr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,h),f.return=p,p=f):(n(p,f),f=Ms(h,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var xn=Uc(!0),$c=Uc(!1),ji=Pt(null),Pi=null,ln=null,gl=null;function yl(){gl=ln=Pi=null}function vl(e){var t=ji.current;F(ji),e._currentValue=t}function wo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){Pi=e,gl=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(gl!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(Pi===null)throw Error(S(308));ln=e,Pi.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Mt=null;function xl(e){Mt===null?Mt=[e]:Mt.push(e)}function Wc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xl(t)):(n.next=i.next,i.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nt(e,n)}return i=r.interleaved,i===null?(t.next=t,xl(r)):(t.next=i.next,i.next=t),r.interleaved=t,nt(e,n)}function ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sl(e,n)}}function Oa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,r){var i=e.updateQueue;at=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,m=c=u=null,l=s;do{var g=l.lane,y=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(y,d,g);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,d,g):x,g==null)break e;d=H({},d,g);break e;case 2:at=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=y,u=d):m=m.next=y,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ht|=o,e.lanes=o,e.memoizedState=d}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Pr={},Qe=Pt(Pr),mr=Pt(Pr),gr=Pt(Pr);function Dt(e){if(e===Pr)throw Error(S(174));return e}function kl(e,t){switch(D(gr,t),D(mr,e),D(Qe,Pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zs(t,e)}F(Qe),D(Qe,t)}function wn(){F(Qe),F(mr),F(gr)}function Hc(e){Dt(gr.current);var t=Dt(Qe.current),n=Zs(t,e.type);t!==n&&(D(mr,e),D(Qe,n))}function Sl(e){mr.current===e&&(F(Qe),F(mr))}var W=Pt(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rs=[];function El(){for(var e=0;e<Rs.length;e++)Rs[e]._workInProgressVersionPrimary=null;Rs.length=0}var ii=it.ReactCurrentDispatcher,Ls=it.ReactCurrentBatchConfig,Vt=0,V=null,J=null,te=null,Ri=!1,Jn=!1,yr=0,mh=0;function oe(){throw Error(S(321))}function _l(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Cl(e,t,n,r,i,s){if(Vt=s,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?xh:wh,e=n(r,i),Jn){s=0;do{if(Jn=!1,yr=0,25<=s)throw Error(S(301));s+=1,te=J=null,t.updateQueue=null,ii.current=kh,e=n(r,i)}while(Jn)}if(ii.current=Li,t=J!==null&&J.next!==null,Vt=0,te=J=V=null,Ri=!1,t)throw Error(S(300));return e}function Nl(){var e=yr!==0;return yr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?V.memoizedState=te=e:te=te.next=e,te}function Le(){if(J===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=te===null?V.memoizedState:te.next;if(t!==null)te=t,J=e;else{if(e===null)throw Error(S(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?V.memoizedState=te=e:te=te.next=e}return te}function vr(e,t){return typeof t=="function"?t(e):t}function bs(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var m=c.lane;if((Vt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=d,o=r):u=u.next=d,V.lanes|=m,Ht|=m}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Fe(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,V.lanes|=s,Ht|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Os(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Fe(s,t.memoizedState)||(me=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Qc(){}function qc(e,t){var n=V,r=Le(),i=t(),s=!Fe(r.memoizedState,i);if(s&&(r.memoizedState=i,me=!0),r=r.queue,jl(Xc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,xr(9,Yc.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(S(349));Vt&30||Kc(n,t,i)}return i}function Kc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yc(e,t,n,r){t.value=n,t.getSnapshot=r,Gc(t)&&Jc(e)}function Xc(e,t,n){return n(function(){Gc(t)&&Jc(e)})}function Gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function Jc(e){var t=nt(e,1);t!==null&&Be(t,e,1,-1)}function Ia(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=vh.bind(null,V,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zc(){return Le().memoizedState}function si(e,t,n,r){var i=$e();V.flags|=e,i.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function Xi(e,t,n,r){var i=Le();r=r===void 0?null:r;var s=void 0;if(J!==null){var o=J.memoizedState;if(s=o.destroy,r!==null&&_l(r,o.deps)){i.memoizedState=xr(t,n,s,r);return}}V.flags|=e,i.memoizedState=xr(1|t,n,s,r)}function Ma(e,t){return si(8390656,8,e,t)}function jl(e,t){return Xi(2048,8,e,t)}function ed(e,t){return Xi(4,2,e,t)}function td(e,t){return Xi(4,4,e,t)}function nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rd(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4,4,nd.bind(null,t,e),n)}function Pl(){}function id(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function od(e,t,n){return Vt&21?(Fe(n,t)||(n=dc(),V.lanes|=n,Ht|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function gh(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ls.transition;Ls.transition={};try{e(!1),t()}finally{M=n,Ls.transition=r}}function ld(){return Le().memoizedState}function yh(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ad(e))ud(t,n);else if(n=Wc(e,t,n,r),n!==null){var i=de();Be(n,e,r,i),cd(n,t,r)}}function vh(e,t,n){var r=kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ad(e))ud(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Fe(l,o)){var u=t.interleaved;u===null?(i.next=i,xl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Wc(e,t,i,r),n!==null&&(i=de(),Be(n,e,r,i),cd(n,t,r))}}function ad(e){var t=e.alternate;return e===V||t!==null&&t===V}function ud(e,t){Jn=Ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sl(e,n)}}var Li={readContext:Re,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},xh={readContext:Re,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Ma,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,4,nd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yh.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:Ia,useDebugValue:Pl,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Ia(!1),t=e[0];return e=gh.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=$e();if(U){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ne===null)throw Error(S(349));Vt&30||Kc(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ma(Xc.bind(null,r,s,e),[e]),r.flags|=2048,xr(9,Yc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=$e(),t=ne.identifierPrefix;if(U){var n=Je,r=Ge;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wh={readContext:Re,useCallback:id,useContext:Re,useEffect:jl,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:td,useMemo:sd,useReducer:bs,useRef:Zc,useState:function(){return bs(vr)},useDebugValue:Pl,useDeferredValue:function(e){var t=Le();return od(t,J.memoizedState,e)},useTransition:function(){var e=bs(vr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:qc,useId:ld,unstable_isNewReconciler:!1},kh={readContext:Re,useCallback:id,useContext:Re,useEffect:jl,useImperativeHandle:rd,useInsertionEffect:ed,useLayoutEffect:td,useMemo:sd,useReducer:Os,useRef:Zc,useState:function(){return Os(vr)},useDebugValue:Pl,useDeferredValue:function(e){var t=Le();return J===null?t.memoizedState=e:od(t,J.memoizedState,e)},useTransition:function(){var e=Os(vr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:qc,useId:ld,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ko(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gi={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=kt(e),s=Ze(r,i);s.payload=t,n!=null&&(s.callback=n),t=xt(e,s,i),t!==null&&(Be(t,e,i,r),ri(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=kt(e),s=Ze(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=xt(e,s,i),t!==null&&(Be(t,e,i,r),ri(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=kt(e),i=Ze(n,r);i.tag=2,t!=null&&(i.callback=t),t=xt(e,i,r),t!==null&&(Be(t,e,r,n),ri(t,e,r))}};function Da(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!dr(n,r)||!dr(i,s):!0}function dd(e,t,n){var r=!1,i=Nt,s=t.contextType;return typeof s=="object"&&s!==null?s=Re(s):(i=ye(t)?$t:ue.current,r=t.contextTypes,s=(r=r!=null)?yn(e,i):Nt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ba(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gi.enqueueReplaceState(t,t.state,null)}function So(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Re(s):(s=ye(t)?$t:ue.current,i.context=yn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ko(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Gi.enqueueReplaceState(i,i.state,null),Ti(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=Yf(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sh=typeof WeakMap=="function"?WeakMap:Map;function fd(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,bo=r),Eo(e,t)},n}function pd(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Eo(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eo(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Fa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ih.bind(null,e,t,n),t.then(e,e))}function Ua(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $a(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var Eh=it.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?$c(t,null,n,r):xn(t,e.child,n,r)}function Wa(e,t,n,r,i){n=n.render;var s=t.ref;return hn(t,i),r=Cl(e,t,n,r,s,i),n=Nl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(U&&n&&pl(t),t.flags|=1,ce(e,t,r,i),t.child)}function Va(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Il(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,hd(e,t,s,r,i)):(e=ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:dr,n(o,r)&&e.ref===t.ref)return rt(e,t,i)}return t.flags|=1,e=St(s,r),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(dr(s,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,rt(e,t,i)}return _o(e,t,n,r,i)}function md(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(un,we),we|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(un,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,D(un,we),we|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,D(un,we),we|=r;return ce(e,t,i,n),t.child}function gd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _o(e,t,n,r,i){var s=ye(n)?$t:ue.current;return s=yn(t,s),hn(t,i),n=Cl(e,t,n,r,s,i),r=Nl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(U&&r&&pl(t),t.flags|=1,ce(e,t,n,i),t.child)}function Ha(e,t,n,r,i){if(ye(n)){var s=!0;_i(t)}else s=!1;if(hn(t,i),t.stateNode===null)oi(e,t),dd(t,n,r),So(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Re(c):(c=ye(n)?$t:ue.current,c=yn(t,c));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ba(t,o,r,c),at=!1;var g=t.memoizedState;o.state=g,Ti(t,r,o,i),u=t.memoizedState,l!==r||g!==u||ge.current||at?(typeof m=="function"&&(ko(t,n,m,r),u=t.memoizedState),(l=at||Da(t,n,l,r,g,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Vc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Oe(t.type,l),o.props=c,d=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=ye(n)?$t:ue.current,u=yn(t,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||g!==u)&&Ba(t,o,r,u),at=!1,g=t.memoizedState,o.state=g,Ti(t,r,o,i);var x=t.memoizedState;l!==d||g!==x||ge.current||at?(typeof y=="function"&&(ko(t,n,y,r),x=t.memoizedState),(c=at||Da(t,n,c,r,g,x,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Co(e,t,n,r,s,i)}function Co(e,t,n,r,i,s){gd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&za(t,n,!1),rt(e,t,s);r=t.stateNode,Eh.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=xn(t,e.child,null,s),t.child=xn(t,null,l,s)):ce(e,t,l,s),t.memoizedState=r.state,i&&za(t,n,!0),t.child}function yd(e){var t=e.stateNode;t.pendingContext?Ta(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ta(e,t.context,!1),kl(e,t.containerInfo)}function Qa(e,t,n,r,i){return vn(),ml(i),t.flags|=256,ce(e,t,n,r),t.child}var No={dehydrated:null,treeContext:null,retryLane:0};function jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function vd(e,t,n){var r=t.pendingProps,i=W.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(W,i&1),e===null)return xo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=es(o,r,0,null),e=Ft(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=jo(n),t.memoizedState=No,e):Tl(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return _h(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=St(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=St(l,s):(s=Ft(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?jo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=No,r}return s=e.child,e=s.sibling,r=St(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tl(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qr(e,t,n,r){return r!==null&&ml(r),xn(t,e.child,null,n),e=Tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _h(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=As(Error(S(422))),Qr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),s=Ft(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&xn(t,e.child,null,o),t.child.memoizedState=jo(o),t.memoizedState=No,s);if(!(t.mode&1))return Qr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=As(s,r,void 0),Qr(e,t,o,r)}if(l=(o&e.childLanes)!==0,me||l){if(r=ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nt(e,i),Be(r,e,i,-1))}return Al(),r=As(Error(S(421))),Qr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mh.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ke=vt(i.nextSibling),Se=t,U=!0,Me=null,e!==null&&(Ne[je++]=Ge,Ne[je++]=Je,Ne[je++]=Wt,Ge=e.id,Je=e.overflow,Wt=t),t=Tl(t,r.children),t.flags|=4096,t)}function qa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wo(e.return,t,n)}function Is(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xd(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qa(e,n,t);else if(e.tag===19)qa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&zi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Is(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Is(t,!0,n,null,s);break;case"together":Is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ch(e,t,n){switch(t.tag){case 3:yd(t),vn();break;case 5:Hc(t);break;case 1:ye(t.type)&&_i(t);break;case 4:kl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?vd(e,t,n):(D(W,W.current&1),e=rt(e,t,n),e!==null?e.sibling:null);D(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,md(e,t,n)}return rt(e,t,n)}var wd,Po,kd,Sd;wd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Po=function(){};kd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dt(Qe.current);var s=null;switch(n){case"input":i=Ys(e,i),r=Ys(e,r),s=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),s=[];break;case"textarea":i=Js(e,i),r=Js(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}eo(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ir.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ir.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&B("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Sd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nh(e,t,n){var r=t.pendingProps;switch(hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ye(t.type)&&Ei(),le(t),null;case 3:return r=t.stateNode,wn(),F(ge),F(ue),El(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Io(Me),Me=null))),Po(e,t),le(t),null;case 5:Sl(t);var i=Dt(gr.current);if(n=t.type,e!==null&&t.stateNode!=null)kd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return le(t),null}if(e=Dt(Qe.current),Vr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[We]=t,r[hr]=s,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Vn.length;i++)B(Vn[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":na(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":ia(r,s),B("invalid",r)}eo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Wr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Wr(r.textContent,l,e),i=["children",""+l]):ir.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":Ar(r),ra(r,s,!0);break;case"textarea":Ar(r),sa(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Si)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[We]=t,e[hr]=r,wd(e,t,!1,!1),t.stateNode=e;e:{switch(o=to(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vn.length;i++)B(Vn[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":na(e,r),i=Ys(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),B("invalid",e);break;case"textarea":ia(e,r),i=Js(e,r),B("invalid",e);break;default:i=r}eo(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Zu(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gu(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&sr(e,u):typeof u=="number"&&sr(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ir.hasOwnProperty(s)?u!=null&&s==="onScroll"&&B("scroll",e):u!=null&&Zo(e,s,u,o))}switch(n){case"input":Ar(e),ra(e,r,!1);break;case"textarea":Ar(e),sa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?cn(e,!!r.multiple,s,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Sd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(gr.current),Dt(Qe.current),Vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(s=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return le(t),null;case 13:if(F(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ke!==null&&t.mode&1&&!(t.flags&128))Fc(),vn(),t.flags|=98560,s=!1;else if(s=Vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[We]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),s=!1}else Me!==null&&(Io(Me),Me=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Z===0&&(Z=3):Al())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return wn(),Po(e,t),e===null&&fr(t.stateNode.containerInfo),le(t),null;case 10:return vl(t.type._context),le(t),null;case 17:return ye(t.type)&&Ei(),le(t),null;case 19:if(F(W),s=t.memoizedState,s===null)return le(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Mn(s,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=zi(e),o!==null){for(t.flags|=128,Mn(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(W,W.current&1|2),t.child}e=e.sibling}s.tail!==null&&Y()>Sn&&(t.flags|=128,r=!0,Mn(s,!1),t.lanes=4194304)}else{if(!r)if(e=zi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!U)return le(t),null}else 2*Y()-s.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,n=W.current,D(W,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function jh(e,t){switch(hl(t),t.tag){case 1:return ye(t.type)&&Ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),F(ge),F(ue),El(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(F(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(W),null;case 4:return wn(),null;case 10:return vl(t.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var qr=!1,ae=!1,Ph=typeof WeakSet=="function"?WeakSet:Set,C=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function To(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Ka=!1;function Th(e,t){if(fo=xi,e=jc(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,m=0,d=e,g=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)g=d,d=y;for(;;){if(d===e)break t;if(g===n&&++c===i&&(l=o),g===s&&++m===r&&(u=o),(y=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(po={focusedElem:e,selectionRange:n},xi=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,E=x.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Oe(t.type,v),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){Q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=Ka,Ka=!1,x}function Zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&To(t,n,s)}i=i.next}while(i!==r)}}function Ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[hr],delete t[go],delete t[dh],delete t[fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function Ya(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function Lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lo(e,t,n),e=e.sibling;e!==null;)Lo(e,t,n),e=e.sibling}var re=null,Ae=!1;function st(e,t,n){for(n=n.child;n!==null;)Cd(e,t,n),n=n.sibling}function Cd(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Vi,n)}catch{}switch(n.tag){case 5:ae||an(n,t);case 6:var r=re,i=Ae;re=null,st(e,t,n),re=r,Ae=i,re!==null&&(Ae?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Ae?(e=re,n=n.stateNode,e.nodeType===8?Ts(e.parentNode,n):e.nodeType===1&&Ts(e,n),ur(e)):Ts(re,n.stateNode));break;case 4:r=re,i=Ae,re=n.stateNode.containerInfo,Ae=!0,st(e,t,n),re=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&To(n,t,o),i=i.next}while(i!==r)}st(e,t,n);break;case 1:if(!ae&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,st(e,t,n),ae=r):st(e,t,n);break;default:st(e,t,n)}}function Xa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ph),t.forEach(function(r){var i=Dh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:re=l.stateNode,Ae=!1;break e;case 3:re=l.stateNode.containerInfo,Ae=!0;break e;case 4:re=l.stateNode.containerInfo,Ae=!0;break e}l=l.return}if(re===null)throw Error(S(160));Cd(s,o,i),re=null,Ae=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nd(t,e),t=t.sibling}function Nd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Ue(e),r&4){try{Zn(3,e,e.return),Ji(3,e)}catch(v){Q(e,e.return,v)}try{Zn(5,e,e.return)}catch(v){Q(e,e.return,v)}}break;case 1:be(t,e),Ue(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(be(t,e),Ue(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var i=e.stateNode;try{sr(i,"")}catch(v){Q(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ku(i,s),to(l,o);var c=to(l,s);for(o=0;o<u.length;o+=2){var m=u[o],d=u[o+1];m==="style"?Zu(i,d):m==="dangerouslySetInnerHTML"?Gu(i,d):m==="children"?sr(i,d):Zo(i,m,d,c)}switch(l){case"input":Xs(i,s);break;case"textarea":Yu(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?cn(i,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?cn(i,!!s.multiple,s.defaultValue,!0):cn(i,!!s.multiple,s.multiple?[]:"",!1))}i[hr]=s}catch(v){Q(e,e.return,v)}}break;case 6:if(be(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Q(e,e.return,v)}}break;case 3:if(be(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(v){Q(e,e.return,v)}break;case 4:be(t,e),Ue(e);break;case 13:be(t,e),Ue(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ll=Y())),r&4&&Xa(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||m,be(t,e),ae=c):be(t,e),Ue(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(d=C=m;C!==null;){switch(g=C,y=g.child,g.tag){case 0:case 11:case 14:case 15:Zn(4,g,g.return);break;case 1:an(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Q(r,n,v)}}break;case 5:an(g,g.return);break;case 22:if(g.memoizedState!==null){Ja(d);continue}}y!==null?(y.return=g,C=y):Ja(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ju("display",o))}catch(v){Q(e,e.return,v)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Q(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:be(t,e),Ue(e),r&4&&Xa(e);break;case 21:break;default:be(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_d(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(sr(i,""),r.flags&=-33);var s=Ya(e);Lo(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ya(e);Ro(e,l,o);break;default:throw Error(S(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zh(e,t,n){C=e,jd(e)}function jd(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qr;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ae;l=qr;var c=ae;if(qr=o,(ae=u)&&!c)for(C=i;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?Za(i):u!==null?(u.return=o,C=u):Za(i);for(;s!==null;)C=s,jd(s),s=s.sibling;C=i,qr=l,ae=c}Ga(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):Ga(e)}}function Ga(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Aa(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&ur(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&zo(t)}catch(g){Q(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ja(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Za(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ji(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Q(t,i,u)}}var s=t.return;try{zo(t)}catch(u){Q(t,s,u)}break;case 5:var o=t.return;try{zo(t)}catch(u){Q(t,o,u)}}}catch(u){Q(t,t.return,u)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var Rh=Math.ceil,bi=it.ReactCurrentDispatcher,zl=it.ReactCurrentOwner,ze=it.ReactCurrentBatchConfig,I=0,ne=null,X=null,ie=0,we=0,un=Pt(0),Z=0,wr=null,Ht=0,Zi=0,Rl=0,er=null,he=null,Ll=0,Sn=1/0,Ye=null,Oi=!1,bo=null,wt=null,Kr=!1,ft=null,Ai=0,tr=0,Oo=null,li=-1,ai=0;function de(){return I&6?Y():li!==-1?li:li=Y()}function kt(e){return e.mode&1?I&2&&ie!==0?ie&-ie:hh.transition!==null?(ai===0&&(ai=dc()),ai):(e=M,e!==0||(e=window.event,e=e===void 0?16:vc(e.type)),e):1}function Be(e,t,n,r){if(50<tr)throw tr=0,Oo=null,Error(S(185));Cr(e,n,r),(!(I&2)||e!==ne)&&(e===ne&&(!(I&2)&&(Zi|=n),Z===4&&ct(e,ie)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(Sn=Y()+500,Yi&&Tt()))}function ve(e,t){var n=e.callbackNode;hp(e,t);var r=vi(e,e===ne?ie:0);if(r===0)n!==null&&aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&aa(n),t===1)e.tag===0?ph(eu.bind(null,e)):Mc(eu.bind(null,e)),uh(function(){!(I&6)&&Tt()}),n=null;else{switch(fc(r)){case 1:n=il;break;case 4:n=uc;break;case 16:n=yi;break;case 536870912:n=cc;break;default:n=yi}n=Ad(n,Pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pd(e,t){if(li=-1,ai=0,I&6)throw Error(S(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=vi(e,e===ne?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ii(e,r);else{t=r;var i=I;I|=2;var s=zd();(ne!==e||ie!==t)&&(Ye=null,Sn=Y()+500,Bt(e,t));do try{Oh();break}catch(l){Td(e,l)}while(1);yl(),bi.current=s,I=i,X!==null?t=0:(ne=null,ie=0,t=Z)}if(t!==0){if(t===2&&(i=oo(e),i!==0&&(r=i,t=Ao(e,i))),t===1)throw n=wr,Bt(e,0),ct(e,r),ve(e,Y()),n;if(t===6)ct(e,r);else{if(i=e.current.alternate,!(r&30)&&!Lh(i)&&(t=Ii(e,r),t===2&&(s=oo(e),s!==0&&(r=s,t=Ao(e,s))),t===1))throw n=wr,Bt(e,0),ct(e,r),ve(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:At(e,he,Ye);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Ll+500-Y(),10<t)){if(vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mo(At.bind(null,e,he,Ye),t);break}At(e,he,Ye);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-De(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rh(r/1960))-r,10<r){e.timeoutHandle=mo(At.bind(null,e,he,Ye),r);break}At(e,he,Ye);break;case 5:At(e,he,Ye);break;default:throw Error(S(329))}}}return ve(e,Y()),e.callbackNode===n?Pd.bind(null,e):null}function Ao(e,t){var n=er;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Ii(e,t),e!==2&&(t=he,he=n,t!==null&&Io(t)),e}function Io(e){he===null?he=e:he.push.apply(he,e)}function Lh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fe(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~Rl,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function eu(e){if(I&6)throw Error(S(327));mn();var t=vi(e,0);if(!(t&1))return ve(e,Y()),null;var n=Ii(e,t);if(e.tag!==0&&n===2){var r=oo(e);r!==0&&(t=r,n=Ao(e,r))}if(n===1)throw n=wr,Bt(e,0),ct(e,t),ve(e,Y()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,he,Ye),ve(e,Y()),null}function bl(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Sn=Y()+500,Yi&&Tt())}}function Qt(e){ft!==null&&ft.tag===0&&!(I&6)&&mn();var t=I;I|=1;var n=ze.transition,r=M;try{if(ze.transition=null,M=1,e)return e()}finally{M=r,ze.transition=n,I=t,!(I&6)&&Tt()}}function Ol(){we=un.current,F(un)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ah(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(hl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:wn(),F(ge),F(ue),El();break;case 5:Sl(r);break;case 4:wn();break;case 13:F(W);break;case 19:F(W);break;case 10:vl(r.type._context);break;case 22:case 23:Ol()}n=n.return}if(ne=e,X=e=St(e.current,null),ie=we=t,Z=0,wr=null,Rl=Zi=Ht=0,he=er=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Mt=null}return e}function Td(e,t){do{var n=X;try{if(yl(),ii.current=Li,Ri){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ri=!1}if(Vt=0,te=J=V=null,Jn=!1,yr=0,zl.current=null,n===null||n.return===null){Z=1,wr=t,X=null;break}e:{var s=e,o=n.return,l=n,u=t;if(t=ie,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=l,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ua(o);if(y!==null){y.flags&=-257,$a(y,o,l,s,t),y.mode&1&&Fa(s,c,t),t=y,u=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(u),t.updateQueue=v}else x.add(u);break e}else{if(!(t&1)){Fa(s,c,t),Al();break e}u=Error(S(426))}}else if(U&&l.mode&1){var E=Ua(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),$a(E,o,l,s,t),ml(kn(u,l));break e}}s=u=kn(u,l),Z!==4&&(Z=2),er===null?er=[s]:er.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=fd(s,u,t);Oa(s,p);break e;case 1:l=u;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wt===null||!wt.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=pd(s,l,t);Oa(s,w);break e}}s=s.return}while(s!==null)}Ld(n)}catch(_){t=_,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function zd(){var e=bi.current;return bi.current=Li,e===null?Li:e}function Al(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(Ht&268435455)&&!(Zi&268435455)||ct(ne,ie)}function Ii(e,t){var n=I;I|=2;var r=zd();(ne!==e||ie!==t)&&(Ye=null,Bt(e,t));do try{bh();break}catch(i){Td(e,i)}while(1);if(yl(),I=n,bi.current=r,X!==null)throw Error(S(261));return ne=null,ie=0,Z}function bh(){for(;X!==null;)Rd(X)}function Oh(){for(;X!==null&&!sp();)Rd(X)}function Rd(e){var t=Od(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Ld(e):X=t,zl.current=null}function Ld(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jh(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=Nh(n,t,we),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function At(e,t,n){var r=M,i=ze.transition;try{ze.transition=null,M=1,Ah(e,t,n,r)}finally{ze.transition=i,M=r}return null}function Ah(e,t,n,r){do mn();while(ft!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(mp(e,s),e===ne&&(X=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kr||(Kr=!0,Ad(yi,function(){return mn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ze.transition,ze.transition=null;var o=M;M=1;var l=I;I|=4,zl.current=null,Th(e,n),Nd(n,e),th(po),xi=!!fo,po=fo=null,e.current=n,zh(n),op(),I=l,M=o,ze.transition=s}else e.current=n;if(Kr&&(Kr=!1,ft=e,Ai=i),s=e.pendingLanes,s===0&&(wt=null),up(n.stateNode),ve(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oi)throw Oi=!1,e=bo,bo=null,e;return Ai&1&&e.tag!==0&&mn(),s=e.pendingLanes,s&1?e===Oo?tr++:(tr=0,Oo=e):tr=0,Tt(),null}function mn(){if(ft!==null){var e=fc(Ai),t=ze.transition,n=M;try{if(ze.transition=null,M=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,Ai=0,I&6)throw Error(S(331));var i=I;for(I|=4,C=e.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(C=c;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Zn(8,m,s)}var d=m.child;if(d!==null)d.return=m,C=d;else for(;C!==null;){m=C;var g=m.sibling,y=m.return;if(Ed(m),m===c){C=null;break}if(g!==null){g.return=y,C=g;break}C=y}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,C=p;break e}C=s.return}}var f=e.current;for(C=f;C!==null;){o=C;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,C=h;else e:for(o=f;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ji(9,l)}}catch(_){Q(l,l.return,_)}if(l===o){C=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,C=w;break e}C=l.return}}if(I=i,Tt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Vi,e)}catch{}r=!0}return r}finally{M=n,ze.transition=t}}return!1}function tu(e,t,n){t=kn(n,t),t=fd(e,t,1),e=xt(e,t,1),t=de(),e!==null&&(Cr(e,1,t),ve(e,t))}function Q(e,t,n){if(e.tag===3)tu(e,e,n);else for(;t!==null;){if(t.tag===3){tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=kn(n,e),e=pd(t,e,1),t=xt(t,e,1),e=de(),t!==null&&(Cr(t,1,e),ve(t,e));break}}t=t.return}}function Ih(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ie&n)===n&&(Z===4||Z===3&&(ie&130023424)===ie&&500>Y()-Ll?Bt(e,0):Rl|=n),ve(e,t)}function bd(e,t){t===0&&(e.mode&1?(t=Dr,Dr<<=1,!(Dr&130023424)&&(Dr=4194304)):t=1);var n=de();e=nt(e,t),e!==null&&(Cr(e,t,n),ve(e,n))}function Mh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bd(e,n)}function Dh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),bd(e,n)}var Od;Od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Ch(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&Dc(t,Ni,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oi(e,t),e=t.pendingProps;var i=yn(t,ue.current);hn(t,n),i=Cl(null,t,r,e,i,n);var s=Nl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(s=!0,_i(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wl(t),i.updater=Gi,t.stateNode=i,i._reactInternals=t,So(t,r,e,n),t=Co(null,t,r,!0,s,n)):(t.tag=0,U&&s&&pl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fh(r),e=Oe(r,e),i){case 0:t=_o(null,t,r,e,n);break e;case 1:t=Ha(null,t,r,e,n);break e;case 11:t=Wa(null,t,r,e,n);break e;case 14:t=Va(null,t,r,Oe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),_o(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Ha(e,t,r,i,n);case 3:e:{if(yd(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Vc(e,t),Ti(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=kn(Error(S(423)),t),t=Qa(e,t,r,n,i);break e}else if(r!==i){i=kn(Error(S(424)),t),t=Qa(e,t,r,n,i);break e}else for(ke=vt(t.stateNode.containerInfo.firstChild),Se=t,U=!0,Me=null,n=$c(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===i){t=rt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Hc(t),e===null&&xo(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ho(r,i)?o=null:s!==null&&ho(r,s)&&(t.flags|=32),gd(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&xo(t),null;case 13:return vd(e,t,n);case 4:return kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Wa(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,D(ji,r._currentValue),r._currentValue=o,s!==null)if(Fe(s.value,o)){if(s.children===i.children&&!ge.current){t=rt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ze(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),wo(s.return,n,t),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wo(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hn(t,n),i=Re(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Oe(r,t.pendingProps),i=Oe(r.type,i),Va(e,t,r,i,n);case 15:return hd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),oi(e,t),t.tag=1,ye(r)?(e=!0,_i(t)):e=!1,hn(t,n),dd(t,r,i),So(t,r,i,n),Co(null,t,r,!0,e,n);case 19:return xd(e,t,n);case 22:return md(e,t,n)}throw Error(S(156,t.tag))};function Ad(e,t){return ac(e,t)}function Bh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Bh(e,t,n,r)}function Il(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fh(e){if(typeof e=="function")return Il(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tl)return 11;if(e===nl)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ui(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Il(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Jt:return Ft(n.children,i,s,t);case el:o=8,i|=8;break;case Hs:return e=Te(12,n,t,i|2),e.elementType=Hs,e.lanes=s,e;case Qs:return e=Te(13,n,t,i),e.elementType=Qs,e.lanes=s,e;case qs:return e=Te(19,n,t,i),e.elementType=qs,e.lanes=s,e;case Hu:return es(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:o=10;break e;case Vu:o=9;break e;case tl:o=11;break e;case nl:o=14;break e;case lt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Te(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ft(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Hu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ms(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function Ds(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vs(0),this.expirationTimes=vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ml(e,t,n,r,i,s,o,l,u){return e=new Uh(e,t,n,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Te(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(s),e}function $h(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Id(e){if(!e)return Nt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ye(n))return Ic(e,n,t)}return t}function Md(e,t,n,r,i,s,o,l,u){return e=Ml(n,r,!0,e,i,s,o,l,u),e.context=Id(null),n=e.current,r=de(),i=kt(n),s=Ze(r,i),s.callback=t??null,xt(n,s,i),e.current.lanes=i,Cr(e,i,r),ve(e,r),e}function ts(e,t,n,r){var i=t.current,s=de(),o=kt(i);return n=Id(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(i,t,o),e!==null&&(Be(e,i,o,s),ri(e,i,o)),o}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dl(e,t){nu(e,t),(e=e.alternate)&&nu(e,t)}function Wh(){return null}var Dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}ns.prototype.render=Bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ts(e,t,null,null)};ns.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){ts(null,e,null,null)}),t[tt]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=mc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&yc(e)}};function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ru(){}function Vh(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Mi(o);s.call(c)}}var o=Md(t,r,e,0,null,!1,!1,"",ru);return e._reactRootContainer=o,e[tt]=o.current,fr(e.nodeType===8?e.parentNode:e),Qt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Mi(u);l.call(c)}}var u=Ml(e,0,!1,null,null,!1,!1,"",ru);return e._reactRootContainer=u,e[tt]=u.current,fr(e.nodeType===8?e.parentNode:e),Qt(function(){ts(t,u,n,r)}),u}function is(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Mi(o);l.call(u)}}ts(t,o,e,i)}else o=Vh(n,t,e,i,r);return Mi(o)}pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(sl(t,n|1),ve(t,Y()),!(I&6)&&(Sn=Y()+500,Tt()))}break;case 13:Qt(function(){var r=nt(e,1);if(r!==null){var i=de();Be(r,e,1,i)}}),Dl(e,1)}};ol=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=de();Be(t,e,134217728,n)}Dl(e,134217728)}};hc=function(e){if(e.tag===13){var t=kt(e),n=nt(e,t);if(n!==null){var r=de();Be(n,e,t,r)}Dl(e,t)}};mc=function(){return M};gc=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};ro=function(e,t,n){switch(t){case"input":if(Xs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ki(r);if(!i)throw Error(S(90));qu(r),Xs(r,i)}}}break;case"textarea":Yu(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}};nc=bl;rc=Qt;var Hh={usingClientEntryPoint:!1,Events:[jr,nn,Ki,ec,tc,bl]},Dn={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qh={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oc(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||Wh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Vi=Yr.inject(Qh),He=Yr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hh;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fl(t))throw Error(S(200));return $h(e,t,null,n)};_e.createRoot=function(e,t){if(!Fl(e))throw Error(S(299));var n=!1,r="",i=Dd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ml(e,1,!1,null,null,n,!1,r,i),e[tt]=t.current,fr(e.nodeType===8?e.parentNode:e),new Bl(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=oc(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Qt(e)};_e.hydrate=function(e,t,n){if(!rs(t))throw Error(S(200));return is(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Fl(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Md(t,null,e,1,n??null,i,!1,s,o),e[tt]=t.current,fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};_e.render=function(e,t,n){if(!rs(t))throw Error(S(200));return is(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!rs(e))throw Error(S(40));return e._reactRootContainer?(Qt(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};_e.unstable_batchedUpdates=bl;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return is(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function Bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd)}catch(e){console.error(e)}}Bd(),Bu.exports=_e;var qh=Bu.exports,iu=qh;Ws.createRoot=iu.createRoot,Ws.hydrateRoot=iu.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kr.apply(this,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));const su="popstate";function Kh(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return Mo("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Di(i)}return Xh(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ul(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yh(){return Math.random().toString(36).substr(2,8)}function ou(e,t){return{usr:e.state,key:e.key,idx:t}}function Mo(e,t,n,r){return n===void 0&&(n=null),kr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jn(t):t,{state:n,key:t&&t.key||r||Yh()})}function Di(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xh(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=pt.Pop,u=null,c=m();c==null&&(c=0,o.replaceState(kr({},o.state,{idx:c}),""));function m(){return(o.state||{idx:null}).idx}function d(){l=pt.Pop;let E=m(),p=E==null?null:E-c;c=E,u&&u({action:l,location:v.location,delta:p})}function g(E,p){l=pt.Push;let f=Mo(v.location,E,p);n&&n(f,E),c=m()+1;let h=ou(f,c),w=v.createHref(f);try{o.pushState(h,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(w)}s&&u&&u({action:l,location:v.location,delta:1})}function y(E,p){l=pt.Replace;let f=Mo(v.location,E,p);n&&n(f,E),c=m();let h=ou(f,c),w=v.createHref(f);o.replaceState(h,"",w),s&&u&&u({action:l,location:v.location,delta:0})}function x(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Di(E);return f=f.replace(/ $/,"%20"),q(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return e(i,o)},listen(E){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(su,d),u=E,()=>{i.removeEventListener(su,d),u=null}},createHref(E){return t(i,E)},createURL:x,encodeLocation(E){let p=x(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(E){return o.go(E)}};return v}var lu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(lu||(lu={}));function Gh(e,t,n){return n===void 0&&(n="/"),Jh(e,t,n,!1)}function Jh(e,t,n,r){let i=typeof t=="string"?jn(t):t,s=En(i.pathname||"/",n);if(s==null)return null;let o=Fd(e);Zh(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=cm(s);l=am(o[u],c,r)}return l}function Fd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(q(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Et([r,u.relativePath]),m=n.concat(u);s.children&&s.children.length>0&&(q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Fd(s.children,t,m,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:om(c,s.index),routesMeta:m})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Ud(s.path))i(s,o,u)}),t}function Ud(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ud(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Zh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:lm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const em=/^:[\w-]+$/,tm=3,nm=2,rm=1,im=10,sm=-2,au=e=>e==="*";function om(e,t){let n=e.split("/"),r=n.length;return n.some(au)&&(r+=sm),t&&(r+=nm),n.filter(i=>!au(i)).reduce((i,s)=>i+(em.test(s)?tm:s===""?rm:im),r)}function lm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function am(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,m=s==="/"?t:t.slice(s.length)||"/",d=Bi({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},m),g=u.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Bi({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Et([s,d.pathname]),pathnameBase:mm(Et([s,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(s=Et([s,d.pathnameBase]))}return o}function Bi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=um(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,m,d)=>{let{paramName:g,isOptional:y}=m;if(g==="*"){let v=l[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const x=l[d];return y&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function um(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ul(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function cm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ul(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function En(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const dm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fm=e=>dm.test(e);function pm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jn(e):e,s;if(n)if(fm(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Ul(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=uu(n.substring(1),"/"):s=uu(n,t)}else s=t;return{pathname:s,search:gm(r),hash:ym(i)}}function uu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $d(e,t){let n=hm(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=jn(e):(i=kr({},e),q(!i.pathname||!i.pathname.includes("?"),Bs("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),Bs("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),Bs("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}l=d>=0?t[d]:"/"}let u=pm(i,l),c=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const Et=e=>e.join("/").replace(/\/\/+/g,"/"),mm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ym=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vd=["post","put","patch","delete"];new Set(Vd);const xm=["get",...Vd];new Set(xm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sr(){return Sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sr.apply(this,arguments)}const ss=k.createContext(null),Hd=k.createContext(null),zt=k.createContext(null),os=k.createContext(null),Rt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Qd=k.createContext(null);function wm(e,t){let{relative:n}=t===void 0?{}:t;Tr()||q(!1);let{basename:r,navigator:i}=k.useContext(zt),{hash:s,pathname:o,search:l}=ls(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Et([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Tr(){return k.useContext(os)!=null}function zr(){return Tr()||q(!1),k.useContext(os).location}function qd(e){k.useContext(zt).static||k.useLayoutEffect(e)}function $l(){let{isDataRoute:e}=k.useContext(Rt);return e?Om():km()}function km(){Tr()||q(!1);let e=k.useContext(ss),{basename:t,future:n,navigator:r}=k.useContext(zt),{matches:i}=k.useContext(Rt),{pathname:s}=zr(),o=JSON.stringify($d(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return qd(()=>{l.current=!0}),k.useCallback(function(c,m){if(m===void 0&&(m={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let d=Wd(c,JSON.parse(o),s,m.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Et([t,d.pathname])),(m.replace?r.replace:r.push)(d,m.state,m)},[t,r,o,s,e])}function Sm(){let{matches:e}=k.useContext(Rt),t=e[e.length-1];return t?t.params:{}}function ls(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(zt),{matches:i}=k.useContext(Rt),{pathname:s}=zr(),o=JSON.stringify($d(i,r.v7_relativeSplatPath));return k.useMemo(()=>Wd(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Em(e,t){return _m(e,t)}function _m(e,t,n,r){Tr()||q(!1);let{navigator:i}=k.useContext(zt),{matches:s}=k.useContext(Rt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=zr(),m;if(t){var d;let E=typeof t=="string"?jn(t):t;u==="/"||(d=E.pathname)!=null&&d.startsWith(u)||q(!1),m=E}else m=c;let g=m.pathname||"/",y=g;if(u!=="/"){let E=u.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(E.length).join("/")}let x=Gh(e,{pathname:y}),v=Tm(x&&x.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:Et([u,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?u:Et([u,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return t&&v?k.createElement(os.Provider,{value:{location:Sr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:pt.Pop}},v):v}function Cm(){let e=bm(),t=vm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,s)}const Nm=k.createElement(Cm,null);class jm extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Rt.Provider,{value:this.props.routeContext},k.createElement(Qd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pm(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(ss);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Rt.Provider,{value:t},r)}function Tm(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let m=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);m>=0||q(!1),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let d=o[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=m),d.route.id){let{loaderData:g,errors:y}=n,x=d.route.loader&&g[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((m,d,g)=>{let y,x=!1,v=null,E=null;n&&(y=l&&d.route.id?l[d.route.id]:void 0,v=d.route.errorElement||Nm,u&&(c<0&&g===0?(Am("route-fallback",!1),x=!0,E=null):c===g&&(x=!0,E=d.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),f=()=>{let h;return y?h=v:x?h=E:d.route.Component?h=k.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=m,k.createElement(Pm,{match:d,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?k.createElement(jm,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Kd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kd||{}),Fi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fi||{});function zm(e){let t=k.useContext(ss);return t||q(!1),t}function Rm(e){let t=k.useContext(Hd);return t||q(!1),t}function Lm(e){let t=k.useContext(Rt);return t||q(!1),t}function Yd(e){let t=Lm(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function bm(){var e;let t=k.useContext(Qd),n=Rm(Fi.UseRouteError),r=Yd(Fi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Om(){let{router:e}=zm(Kd.UseNavigateStable),t=Yd(Fi.UseNavigateStable),n=k.useRef(!1);return qd(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Sr({fromRouteId:t},s)))},[e,t])}const cu={};function Am(e,t,n){!t&&!cu[e]&&(cu[e]=!0)}function Im(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function ot(e){q(!1)}function Mm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=pt.Pop,navigator:s,static:o=!1,future:l}=e;Tr()&&q(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:s,static:o,future:Sr({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=jn(r));let{pathname:m="/",search:d="",hash:g="",state:y=null,key:x="default"}=r,v=k.useMemo(()=>{let E=En(m,u);return E==null?null:{location:{pathname:E,search:d,hash:g,state:y,key:x},navigationType:i}},[u,m,d,g,y,x,i]);return v==null?null:k.createElement(zt.Provider,{value:c},k.createElement(os.Provider,{children:n,value:v}))}function Dm(e){let{children:t,location:n}=e;return Em(Do(t),n)}new Promise(()=>{});function Do(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Do(r.props.children,s));return}r.type!==ot&&q(!1),!r.props.index||!r.props.children||q(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Do(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ui(){return Ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ui.apply(this,arguments)}function Xd(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Bm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Fm(e,t){return e.button===0&&(!t||t==="_self")&&!Bm(e)}const Um=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$m=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Wm="6";try{window.__reactRouterVersion=Wm}catch{}const Vm=k.createContext({isTransitioning:!1}),Hm="startTransition",du=If[Hm];function Qm(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=Kh({window:i,v5Compat:!0}));let o=s.current,[l,u]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},m=k.useCallback(d=>{c&&du?du(()=>u(d)):u(d)},[u,c]);return k.useLayoutEffect(()=>o.listen(m),[o,m]),k.useEffect(()=>Im(r),[r]),k.createElement(Mm,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ym=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:m,viewTransition:d}=t,g=Xd(t,Um),{basename:y}=k.useContext(zt),x,v=!1;if(typeof c=="string"&&Km.test(c)&&(x=c,qm))try{let h=new URL(window.location.href),w=c.startsWith("//")?new URL(h.protocol+c):new URL(c),_=En(w.pathname,y);w.origin===h.origin&&_!=null?c=_+w.search+w.hash:v=!0}catch{}let E=wm(c,{relative:i}),p=Gm(c,{replace:o,state:l,target:u,preventScrollReset:m,relative:i,viewTransition:d});function f(h){r&&r(h),h.defaultPrevented||p(h)}return k.createElement("a",Ui({},g,{href:x||E,onClick:v||s?r:f,ref:n,target:u}))}),Xt=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:m}=t,d=Xd(t,$m),g=ls(u,{relative:d.relative}),y=zr(),x=k.useContext(Hd),{navigator:v,basename:E}=k.useContext(zt),p=x!=null&&Jm(g)&&c===!0,f=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,h=y.pathname,w=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(h=h.toLowerCase(),w=w?w.toLowerCase():null,f=f.toLowerCase()),w&&E&&(w=En(w,E)||w);const _=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let j=h===f||!o&&h.startsWith(f)&&h.charAt(_)==="/",P=w!=null&&(w===f||!o&&w.startsWith(f)&&w.charAt(f.length)==="/"),T={isActive:j,isPending:P,isTransitioning:p},$=j?r:void 0,L;typeof s=="function"?L=s(T):L=[s,j?"active":null,P?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let xe=typeof l=="function"?l(T):l;return k.createElement(Ym,Ui({},d,{"aria-current":$,className:L,ref:n,style:xe,to:u,viewTransition:c}),typeof m=="function"?m(T):m)});var Bo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bo||(Bo={}));var fu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fu||(fu={}));function Xm(e){let t=k.useContext(ss);return t||q(!1),t}function Gm(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,u=$l(),c=zr(),m=ls(e,{relative:o});return k.useCallback(d=>{if(Fm(d,n)){d.preventDefault();let g=r!==void 0?r:Di(c)===Di(m);u(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,m,r,i,n,e,s,o,l])}function Jm(e,t){t===void 0&&(t={});let n=k.useContext(Vm);n==null&&q(!1);let{basename:r}=Xm(Bo.useViewTransitionState),i=ls(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=En(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=En(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Bi(i.pathname,o)!=null||Bi(i.pathname,s)!=null}var Zm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const eg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>k.createElement("svg",{ref:c,...Zm,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${eg(e)}`,...u},[...t.map(([m,d])=>k.createElement(m,d)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${e}`,n},pu=O("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),tg=O("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),ng=O("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),rg=O("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),hu=O("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),Ve=O("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),Gd=O("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Er=O("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),ig=O("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Wl=O("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]),Fo=O("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),sg=O("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),og=O("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),lg=O("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]),ag=O("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),Jd=O("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),mu=O("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),nr=O("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),rr=O("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),ug=O("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),gu=O("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]),yu=O("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),vu=O("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),cg=O("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),Zd=O("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),ef=O("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),dg=O("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),xu=O("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),fg=O("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]),pg=O("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),tf=O("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),wu=O("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),nf=O("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),hg=O("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),ku=O("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]),Ut=O("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]),Su=O("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),ht=O("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Ke=Object.create(null);Ke.open="0";Ke.close="1";Ke.ping="2";Ke.pong="3";Ke.message="4";Ke.upgrade="5";Ke.noop="6";const ci=Object.create(null);Object.keys(Ke).forEach(e=>{ci[Ke[e]]=e});const Uo={type:"error",data:"parser error"},rf=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",sf=typeof ArrayBuffer=="function",of=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Vl=({type:e,data:t},n,r)=>rf&&t instanceof Blob?n?r(t):Eu(t,r):sf&&(t instanceof ArrayBuffer||of(t))?n?r(t):Eu(new Blob([t]),r):r(Ke[e]+(t||"")),Eu=(e,t)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];t("b"+(r||""))},n.readAsDataURL(e)};function _u(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Fs;function mg(e,t){if(rf&&e.data instanceof Blob)return e.data.arrayBuffer().then(_u).then(t);if(sf&&(e.data instanceof ArrayBuffer||of(e.data)))return t(_u(e.data));Vl(e,!1,n=>{Fs||(Fs=new TextEncoder),t(Fs.encode(n))})}const Cu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Hn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Cu.length;e++)Hn[Cu.charCodeAt(e)]=e;const gg=e=>{let t=e.length*.75,n=e.length,r,i=0,s,o,l,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const c=new ArrayBuffer(t),m=new Uint8Array(c);for(r=0;r<n;r+=4)s=Hn[e.charCodeAt(r)],o=Hn[e.charCodeAt(r+1)],l=Hn[e.charCodeAt(r+2)],u=Hn[e.charCodeAt(r+3)],m[i++]=s<<2|o>>4,m[i++]=(o&15)<<4|l>>2,m[i++]=(l&3)<<6|u&63;return c},yg=typeof ArrayBuffer=="function",Hl=(e,t)=>{if(typeof e!="string")return{type:"message",data:lf(e,t)};const n=e.charAt(0);return n==="b"?{type:"message",data:vg(e.substring(1),t)}:ci[n]?e.length>1?{type:ci[n],data:e.substring(1)}:{type:ci[n]}:Uo},vg=(e,t)=>{if(yg){const n=gg(e);return lf(n,t)}else return{base64:!0,data:e}},lf=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},af=String.fromCharCode(30),xg=(e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((s,o)=>{Vl(s,!1,l=>{r[o]=l,++i===n&&t(r.join(af))})})},wg=(e,t)=>{const n=e.split(af),r=[];for(let i=0;i<n.length;i++){const s=Hl(n[i],t);if(r.push(s),s.type==="error")break}return r};function kg(){return new TransformStream({transform(e,t){mg(e,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}let Us;function Xr(e){return e.reduce((t,n)=>t+n.length,0)}function Gr(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function Sg(e,t){Us||(Us=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,l){for(n.push(o);;){if(r===0){if(Xr(n)<1)break;const u=Gr(n,1);s=(u[0]&128)===128,i=u[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Xr(n)<2)break;const u=Gr(n,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),r=3}else if(r===2){if(Xr(n)<8)break;const u=Gr(n,8),c=new DataView(u.buffer,u.byteOffset,u.length),m=c.getUint32(0);if(m>Math.pow(2,53-32)-1){l.enqueue(Uo);break}i=m*Math.pow(2,32)+c.getUint32(4),r=3}else{if(Xr(n)<i)break;const u=Gr(n,i);l.enqueue(Hl(s?u:Us.decode(u),t)),r=0}if(i===0||i>e){l.enqueue(Uo);break}}}})}const uf=4;function G(e){if(e)return Eg(e)}function Eg(e){for(var t in G.prototype)e[t]=G.prototype[t];return e}G.prototype.on=G.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};G.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this};G.prototype.off=G.prototype.removeListener=G.prototype.removeAllListeners=G.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+e],this};G.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this};G.prototype.emitReserved=G.prototype.emit;G.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};G.prototype.hasListeners=function(e){return!!this.listeners(e).length};const as=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,n)=>n(t,0))(),Pe=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),_g="arraybuffer";function cf(e,...t){return t.reduce((n,r)=>(e.hasOwnProperty(r)&&(n[r]=e[r]),n),{})}const Cg=Pe.setTimeout,Ng=Pe.clearTimeout;function us(e,t){t.useNativeTimers?(e.setTimeoutFn=Cg.bind(Pe),e.clearTimeoutFn=Ng.bind(Pe)):(e.setTimeoutFn=Pe.setTimeout.bind(Pe),e.clearTimeoutFn=Pe.clearTimeout.bind(Pe))}const jg=1.33;function Pg(e){return typeof e=="string"?Tg(e):Math.ceil((e.byteLength||e.size)*jg)}function Tg(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function df(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function zg(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}function Rg(e){let t={},n=e.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class Lg extends Error{constructor(t,n,r){super(t),this.description=n,this.context=r,this.type="TransportError"}}class Ql extends G{constructor(t){super(),this.writable=!1,us(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,n,r){return super.emitReserved("error",new Lg(t,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const n=Hl(t,this.socket.binaryType);this.onPacket(n)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,n={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const n=zg(t);return n.length?"?"+n:""}}class bg extends Ql{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const n=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};wg(t,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,xg(t,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=df()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(t,n)}}let ff=!1;try{ff=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Og=ff;function Ag(){}class Ig extends bg{constructor(t){if(super(t),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||r!==t.port}}doWrite(t,n){const r=this.request({method:"POST",data:t});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=t}}class qe extends G{constructor(t,n,r){super(),this.createRequest=t,us(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var t;const n=cf(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=qe.requestsCount++,qe.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Ag,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete qe.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}qe.requestsCount=0;qe.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Nu);else if(typeof addEventListener=="function"){const e="onpagehide"in Pe?"pagehide":"unload";addEventListener(e,Nu,!1)}}function Nu(){for(let e in qe.requests)qe.requests.hasOwnProperty(e)&&qe.requests[e].abort()}const Mg=function(){const e=pf({xdomain:!1});return e&&e.responseType!==null}();class Dg extends Ig{constructor(t){super(t);const n=t&&t.forceBase64;this.supportsBinary=Mg&&!n}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new qe(pf,this.uri(),t)}}function pf(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Og))return new XMLHttpRequest}catch{}if(!t)try{return new Pe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const hf=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Bg extends Ql{get name(){return"websocket"}doOpen(){const t=this.uri(),n=this.opts.protocols,r=hf?{}:cf(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;Vl(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&as(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=df()),this.supportsBinary||(n.b64=1),this.createUri(t,n)}}const $s=Pe.WebSocket||Pe.MozWebSocket;class Fg extends Bg{createSocket(t,n,r){return hf?new $s(t,n,r):n?new $s(t,n):new $s(t)}doWrite(t,n){this.ws.send(n)}}class Ug extends Ql{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const n=Sg(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=t.readable.pipeThrough(n).getReader(),i=kg();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:l,value:u})=>{l||(this.onPacket(u),s())}).catch(l=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;this._writer.write(r).then(()=>{i&&as(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const $g={websocket:Fg,webtransport:Ug,polling:Dg},Wg=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Vg=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function $o(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=Wg.exec(e||""),s={},o=14;for(;o--;)s[Vg[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Hg(s,s.path),s.queryKey=Qg(s,s.query),s}function Hg(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&r.splice(0,1),t.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Qg(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const Wo=typeof addEventListener=="function"&&typeof removeEventListener=="function",di=[];Wo&&addEventListener("offline",()=>{di.forEach(e=>e())},!1);class _t extends G{constructor(t,n){if(super(),this.binaryType=_g,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(n=t,t=null),t){const r=$o(t);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=$o(n.host).host);us(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Rg(this.opts.query)),Wo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},di.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const n=Object.assign({},this.opts.query);n.EIO=uf,n.transport=t,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&_t.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(t);n.open(),this.setTransport(n)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",_t.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=t.data,this._onError(n);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Pg(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,as(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,n,r){return this._sendPacket("message",t,n,r),this}send(t,n,r){return this._sendPacket("message",t,n,r),this}_sendPacket(t,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:t,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),t()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():t()}):this.upgrading?r():t()),this}_onError(t){if(_t.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Wo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=di.indexOf(this._offlineEventListener);r!==-1&&di.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,n),this.writeBuffer=[],this._prevBufferLen=0}}}_t.protocol=uf;class qg extends _t{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let n=this.createTransport(t),r=!1;_t.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",d=>{if(!r)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;_t.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(m(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const g=new Error("probe error");g.transport=n.name,this.emitReserved("upgradeError",g)}}))};function s(){r||(r=!0,m(),n.close(),n=null)}const o=d=>{const g=new Error("probe error: "+d);g.transport=n.name,s(),this.emitReserved("upgradeError",g)};function l(){o("transport closed")}function u(){o("socket closed")}function c(d){n&&d.name!==n.name&&s()}const m=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",l),this.off("close",u),this.off("upgrading",c)};n.once("open",i),n.once("error",o),n.once("close",l),this.once("close",u),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const n=[];for(let r=0;r<t.length;r++)~this.transports.indexOf(t[r])&&n.push(t[r]);return n}}let Kg=class extends qg{constructor(t,n={}){const r=typeof t=="object"?t:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>$g[i]).filter(i=>!!i)),super(t,r)}};function Yg(e,t="",n){let r=e;n=n||typeof location<"u"&&location,e==null&&(e=n.protocol+"//"+n.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=n.protocol+e:e=n.host+e),/^(https?|wss?):\/\//.test(e)||(typeof n<"u"?e=n.protocol+"//"+e:e="https://"+e),r=$o(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+t,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Xg=typeof ArrayBuffer=="function",Gg=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,mf=Object.prototype.toString,Jg=typeof Blob=="function"||typeof Blob<"u"&&mf.call(Blob)==="[object BlobConstructor]",Zg=typeof File=="function"||typeof File<"u"&&mf.call(File)==="[object FileConstructor]";function ql(e){return Xg&&(e instanceof ArrayBuffer||Gg(e))||Jg&&e instanceof Blob||Zg&&e instanceof File}function fi(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let n=0,r=e.length;n<r;n++)if(fi(e[n]))return!0;return!1}if(ql(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return fi(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&fi(e[n]))return!0;return!1}function ey(e){const t=[],n=e.data,r=e;return r.data=Vo(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Vo(e,t){if(!e)return e;if(ql(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}else if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=Vo(e[r],t);return n}else if(typeof e=="object"&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=Vo(e[r],t));return n}return e}function ty(e,t){return e.data=Ho(e.data,t),delete e.attachments,e}function Ho(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=Ho(e[n],t);else if(typeof e=="object")for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=Ho(e[n],t));return e}const gf=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ny=5;var R;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(R||(R={}));class ry{constructor(t){this.replacer=t}encode(t){return(t.type===R.EVENT||t.type===R.ACK)&&fi(t)?this.encodeAsBinary({type:t.type===R.EVENT?R.BINARY_EVENT:R.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let n=""+t.type;return(t.type===R.BINARY_EVENT||t.type===R.BINARY_ACK)&&(n+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(n+=t.nsp+","),t.id!=null&&(n+=t.id),t.data!=null&&(n+=JSON.stringify(t.data,this.replacer)),n}encodeAsBinary(t){const n=ey(t),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Kl extends G{constructor(t){super(),this.reviver=t}add(t){let n;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(t);const r=n.type===R.BINARY_EVENT;r||n.type===R.BINARY_ACK?(n.type=r?R.EVENT:R.ACK,this.reconstructor=new iy(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ql(t)||t.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let n=0;const r={type:Number(t.charAt(0))};if(R[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===R.BINARY_EVENT||r.type===R.BINARY_ACK){const s=n+1;for(;t.charAt(++n)!=="-"&&n!=t.length;);const o=t.substring(s,n);if(o!=Number(o)||t.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(t.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(t.charAt(n)===","||n===t.length););r.nsp=t.substring(s,n)}else r.nsp="/";const i=t.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=t.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===t.length)break}r.id=Number(t.substring(s,n+1))}if(t.charAt(++n)){const s=this.tryParse(t.substr(n));if(Kl.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,n){switch(t){case R.CONNECT:return $i(n);case R.DISCONNECT:return n===void 0;case R.CONNECT_ERROR:return typeof n=="string"||$i(n);case R.EVENT:case R.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&gf.indexOf(n[0])===-1);case R.ACK:case R.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class iy{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const n=ty(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function sy(e){return typeof e=="string"}const oy=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function ly(e){return e===void 0||oy(e)}function $i(e){return Object.prototype.toString.call(e)==="[object Object]"}function ay(e,t){switch(e){case R.CONNECT:return t===void 0||$i(t);case R.DISCONNECT:return t===void 0;case R.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&gf.indexOf(t[0])===-1);case R.ACK:return Array.isArray(t);case R.CONNECT_ERROR:return typeof t=="string"||$i(t);default:return!1}}function uy(e){return sy(e.nsp)&&ly(e.id)&&ay(e.type,e.data)}const cy=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Kl,Encoder:ry,get PacketType(){return R},isPacketValid:uy,protocol:ny},Symbol.toStringTag,{value:"Module"}));function Ie(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const dy=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class yf extends G{constructor(t,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Ie(t,"open",this.onopen.bind(this)),Ie(t,"packet",this.onpacket.bind(this)),Ie(t,"error",this.onerror.bind(this)),Ie(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...n){var r,i,s;if(dy.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(n.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:R.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const m=this.ids++,d=n.pop();this._registerAckCallback(m,d),o.id=m}const l=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[t]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);n.call(this,new Error("operation has timed out"))},i),o=(...l)=>{this.io.clearTimeoutFn(s),n.apply(this,l)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...n){return new Promise((r,i)=>{const s=(o,l)=>o?i(o):r(l);s.withError=!0,n.push(s),this.emit(t,...n)})}_addToQueue(t){let n;typeof t[t.length-1]=="function"&&(n=t.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!t||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:R.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(r=>String(r.id)===t)){const r=this.acks[t];delete this.acks[t],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case R.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case R.EVENT:case R.BINARY_EVENT:this.onevent(t);break;case R.ACK:case R.BINARY_ACK:this.onack(t);break;case R.DISCONNECT:this.ondisconnect();break;case R.CONNECT_ERROR:this.destroy();const r=new Error(t.data.message);r.data=t.data.data,this.emitReserved("connect_error",r);break}}onevent(t){const n=t.data||[];t.id!=null&&n.push(this.ack(t.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:R.ACK,id:t,data:i}))}}onack(t){const n=this.acks[t.id];typeof n=="function"&&(delete this.acks[t.id],n.withError&&t.data.unshift(null),n.apply(this,t.data))}onconnect(t,n){this.id=t,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:R.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(t===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,t.data)}}}function Pn(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Pn.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0};Pn.prototype.reset=function(){this.attempts=0};Pn.prototype.setMin=function(e){this.ms=e};Pn.prototype.setMax=function(e){this.max=e};Pn.prototype.setJitter=function(e){this.jitter=e};class Qo extends G{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(n=t,t=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,us(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Pn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=t;const i=n.parser||cy;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var n;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(n=this.backoff)===null||n===void 0||n.setMin(t),this)}randomizationFactor(t){var n;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(n=this.backoff)===null||n===void 0||n.setJitter(t),this)}reconnectionDelayMax(t){var n;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(n=this.backoff)===null||n===void 0||n.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Kg(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Ie(n,"open",function(){r.onopen(),t&&t()}),s=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},o=Ie(n,"error",s);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Ie(t,"ping",this.onping.bind(this)),Ie(t,"data",this.ondata.bind(this)),Ie(t,"error",this.onerror.bind(this)),Ie(t,"close",this.onclose.bind(this)),Ie(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(n){this.onclose("parse error",n)}}ondecoded(t){as(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,n){let r=this.nsps[t];return r?this._autoConnect&&!r.active&&r.connect():(r=new yf(this,t,n),this.nsps[t]=r),r}_destroy(t){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(t){const n=this.encoder.encode(t);for(let r=0;r<n.length;r++)this.engine.write(n[r],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Bn={};function pi(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const n=Yg(e,t.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Bn[i]&&s in Bn[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let u;return l?u=new Qo(r,t):(Bn[i]||(Bn[i]=new Qo(r,t)),u=Bn[i]),n.query&&!t.query&&(t.query=n.queryKey),u.socket(n.path,t)}Object.assign(pi,{Manager:Qo,Socket:yf,io:pi,connect:pi});function fy(){const[e,t]=k.useState([]),[n,r]=k.useState(""),[i,s]=k.useState(!1),[o,l]=k.useState(!1),u=k.useRef(null),c=k.useRef(null);k.useEffect(()=>(u.current=pi(),u.current.on("connect",()=>{l(!0)}),u.current.on("disconnect",()=>{l(!1)}),u.current.on("message",d=>{t(g=>[...g,d])}),u.current.on("typing",({isTyping:d})=>{s(d)}),()=>{var d;(d=u.current)==null||d.disconnect()}),[]),k.useEffect(()=>{var d;(d=c.current)==null||d.scrollIntoView({behavior:"smooth"})},[e,i]);const m=d=>{d.preventDefault(),!(!n.trim()||!o)&&(u.current.emit("message",{content:n}),r(""))};return a.jsxs("div",{className:"chat-page",children:[a.jsxs("div",{className:"chat-header",children:[a.jsxs("div",{className:"chat-header-info",children:[a.jsx("div",{className:"chat-avatar",children:a.jsx(Ve,{size:24})}),a.jsxs("div",{children:[a.jsx("h2",{children:"Claw Bot"}),a.jsxs("div",{className:"chat-status",children:[a.jsx("span",{className:`status-dot ${o?"online":""}`}),a.jsx("span",{children:o?"Online":"Connecting..."})]})]})]}),a.jsx("div",{className:"chat-badges",children:a.jsxs("span",{className:"badge badge-info",children:[a.jsx(tf,{size:12}),"AI Powered"]})})]}),a.jsxs("div",{className:"chat-messages",children:[e.length===0&&a.jsxs("div",{className:"welcome-message",children:[a.jsx("div",{className:"welcome-icon",children:a.jsx(Ve,{size:48})}),a.jsx("h3",{children:"Welcome to Claw Bot! 👋"}),a.jsx("p",{children:"I can help you with:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"🎯 Answering questions about our services"}),a.jsx("li",{children:"💡 Providing product recommendations"}),a.jsx("li",{children:"🔧 Troubleshooting common issues"}),a.jsx("li",{children:"📊 Explaining pricing and features"})]}),a.jsx("p",{className:"welcome-hint",children:"Try asking about pricing, features, or just say hello!"})]}),e.map((d,g)=>a.jsxs("div",{className:`message ${d.type==="user"?"message-user":"message-bot"} animate-fade-in`,style:{animationDelay:`${g*.05}s`},children:[a.jsx("div",{className:`message-avatar ${d.type}`,children:d.type==="user"?a.jsx(nf,{size:16}):a.jsx(Ve,{size:16})}),a.jsxs("div",{className:"message-content",children:[a.jsx("p",{children:d.content}),a.jsx("span",{className:"message-time",children:new Date(d.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]},d.id)),i&&a.jsxs("div",{className:"message message-bot",children:[a.jsx("div",{className:"message-avatar bot",children:a.jsx(Ve,{size:16})}),a.jsx("div",{className:"message-content typing",children:a.jsxs("div",{className:"typing-indicator",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})})]}),a.jsx("div",{ref:c})]}),a.jsxs("form",{className:"chat-input",onSubmit:m,children:[a.jsx("input",{type:"text",value:n,onChange:d=>r(d.target.value),placeholder:o?"Type your message...":"Connecting...",disabled:!o,className:"input"}),a.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.trim()||!o,children:o?a.jsx(ef,{size:18}):a.jsx(Jd,{size:18,className:"animate-spin"})})]}),a.jsx("style",{children:`
        .chat-page {
          display: flex;
          flex-direction: column;
          height: 100vh;
          max-height: 100vh;
        }
        
        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
        }
        
        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .chat-avatar {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .chat-header h2 {
          font-size: 18px;
          font-weight: 600;
        }
        
        .chat-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .chat-status .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--error);
        }
        
        .chat-status .status-dot.online {
          background: var(--success);
          box-shadow: 0 0 8px var(--success);
        }
        
        .chat-badges {
          display: flex;
          gap: 8px;
        }
        
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .welcome-message {
          text-align: center;
          padding: 40px;
          color: var(--text-secondary);
        }
        
        .welcome-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: white;
        }
        
        .welcome-message h3 {
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        
        .welcome-message ul {
          list-style: none;
          text-align: left;
          max-width: 300px;
          margin: 16px auto;
        }
        
        .welcome-message li {
          padding: 8px 0;
        }
        
        .welcome-hint {
          margin-top: 24px;
          padding: 12px 20px;
          background: var(--bg-card);
          border-radius: 8px;
          display: inline-block;
        }
        
        .message {
          display: flex;
          gap: 12px;
          max-width: 80%;
        }
        
        .message-user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        
        .message-bot {
          align-self: flex-start;
        }
        
        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .message-avatar.user {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
        
        .message-avatar.bot {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
        }
        
        .message-content {
          background: var(--bg-card);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        
        .message-user .message-content {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }
        
        .message-content p {
          font-size: 14px;
          line-height: 1.5;
        }
        
        .message-time {
          display: block;
          font-size: 11px;
          margin-top: 4px;
          opacity: 0.7;
        }
        
        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 4px 8px;
        }
        
        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: var(--text-secondary);
          border-radius: 50%;
          animation: typing 1s infinite;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        .chat-input {
          display: flex;
          gap: 12px;
          padding: 20px 24px;
          background: var(--bg-card);
          border-top: 1px solid var(--border);
        }
        
        .chat-input .input {
          flex: 1;
        }
        
        .chat-input .btn {
          padding: 12px 20px;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `})]})}function py(){const[e,t]=k.useState({totalConversations:0,totalMessages:0,activeWorkflows:0,totalWorkflows:0,activities:[]});k.useEffect(()=>{n();const o=setInterval(n,5e3);return()=>clearInterval(o)},[]);const n=async()=>{try{const l=await(await fetch("/api/stats")).json();t(l)}catch(o){console.error("Failed to fetch stats:",o)}},r=[{title:"Total Conversations",value:e.totalConversations,icon:nr,color:"#6366f1",change:"+12%"},{title:"Messages Exchanged",value:e.totalMessages,icon:Ve,color:"#ec4899",change:"+8%"},{title:"Active Workflows",value:e.activeWorkflows,icon:Ut,color:"#22c55e",change:"+3"},{title:"Integrations",value:"3",icon:ht,color:"#f59e0b",change:"Active"}],i=o=>{switch(o){case"message_received":return nr;case"agent_updated":return Ve;case"workflow_created":return Ut;case"integration_connected":return ht;default:return pu}},s=o=>{switch(o){case"message_received":return"#6366f1";case"agent_updated":return"#ec4899";case"workflow_created":return"#22c55e";case"integration_connected":return"#f59e0b";default:return"#94a3b8"}};return a.jsxs("div",{className:"dashboard",children:[a.jsxs("header",{className:"dashboard-header",children:[a.jsx("h1",{children:"Dashboard"}),a.jsx("p",{children:"Welcome to your Claw Bot command center"})]}),a.jsx("div",{className:"stats-grid",children:r.map((o,l)=>a.jsxs("div",{className:"stat-card animate-fade-in",style:{animationDelay:`${l*.1}s`},children:[a.jsx("div",{className:"stat-icon",style:{background:`${o.color}20`,color:o.color},children:a.jsx(o.icon,{size:24})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:o.value}),a.jsx("div",{className:"stat-title",children:o.title})]}),a.jsx("div",{className:"stat-change",style:{color:o.change.startsWith("+")?"#22c55e":o.color},children:o.change})]},l))}),a.jsxs("div",{className:"dashboard-grid",children:[a.jsxs("div",{className:"dashboard-card activity-feed",children:[a.jsxs("div",{className:"card-header",children:[a.jsx(pu,{size:20}),a.jsx("h3",{children:"Recent Activity"})]}),a.jsx("div",{className:"activity-list",children:e.activities.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(Er,{size:48,className:"empty-icon"}),a.jsx("p",{children:"No recent activity"})]}):e.activities.map((o,l)=>{const u=i(o.type),c=s(o.type);return a.jsxs("div",{className:"activity-item animate-fade-in",style:{animationDelay:`${l*.05}s`},children:[a.jsx("div",{className:"activity-icon",style:{background:`${c}20`,color:c},children:a.jsx(u,{size:16})}),a.jsxs("div",{className:"activity-content",children:[a.jsx("p",{children:o.message}),a.jsx("span",{className:"activity-time",children:new Date(o.timestamp).toLocaleTimeString()})]})]},o.id)})})]}),a.jsxs("div",{className:"dashboard-card quick-actions",children:[a.jsxs("div",{className:"card-header",children:[a.jsx(ht,{size:20}),a.jsx("h3",{children:"Quick Actions"})]}),a.jsxs("div",{className:"action-buttons",children:[a.jsxs("a",{href:"#/chat",className:"action-btn",children:[a.jsx(nr,{size:20}),a.jsx("span",{children:"Test Chat"})]}),a.jsxs("a",{href:"#/configure",className:"action-btn",children:[a.jsx(Ve,{size:20}),a.jsx("span",{children:"Configure Agent"})]}),a.jsxs("a",{href:"#/workflows",className:"action-btn",children:[a.jsx(Ut,{size:20}),a.jsx("span",{children:"Create Workflow"})]}),a.jsxs("a",{href:"#/integrations",className:"action-btn",children:[a.jsx(ht,{size:20}),a.jsx("span",{children:"Connect Integrations"})]})]})]})]}),a.jsx("style",{children:`
        .dashboard {
          padding: 32px;
        }
        
        .dashboard-header {
          margin-bottom: 32px;
        }
        
        .dashboard-header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .dashboard-header p {
          color: var(--text-secondary);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.2s;
        }
        
        .stat-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        
        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stat-content {
          flex: 1;
        }
        
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        .stat-title {
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .stat-change {
          font-size: 13px;
          font-weight: 600;
        }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }
        
        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .dashboard-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }
        
        .card-header h3 {
          font-size: 16px;
          font-weight: 600;
        }
        
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: var(--bg-dark);
          border-radius: 8px;
        }
        
        .activity-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .activity-content p {
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        
        .activity-time {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .empty-state {
          text-align: center;
          padding: 40px;
          color: var(--text-secondary);
        }
        
        .empty-icon {
          margin-bottom: 12px;
          opacity: 0.5;
        }
        
        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .action-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: var(--bg-dark);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.2s;
        }
        
        .action-btn:hover {
          background: var(--bg-hover);
          border-color: var(--primary);
        }
        
        .action-btn span {
          font-size: 14px;
          font-weight: 500;
        }
      `})]})}function hy(){const[e,t]=k.useState({name:"Claw Bot",personality:"friendly",tone:"professional",responseStyle:"detailed",welcomeMessage:"Hello! I'm Claw Bot. How can I help you today?",autoReply:!0,typingDelay:1e3}),[n,r]=k.useState(!1),[i,s]=k.useState(!0);k.useEffect(()=>{o()},[]);const o=async()=>{try{const g=await(await fetch("/api/agents/default")).json();t(y=>({...y,...g}))}catch(d){console.error("Failed to fetch config:",d)}finally{s(!1)}},l=async()=>{try{await fetch("/api/agents/default",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r(!0),setTimeout(()=>r(!1),3e3)}catch(d){console.error("Failed to save config:",d)}},u=[{value:"friendly",label:"😊 Friendly",desc:"Warm, approachable, and conversational"},{value:"professional",label:"💼 Professional",desc:"Formal, precise, and business-focused"},{value:"playful",label:"🎉 Playful",desc:"Fun, energetic, and uses emojis"},{value:"expert",label:"🎯 Expert",desc:"Knowledgeable, detailed, and authoritative"}],c=[{value:"professional",label:"Professional"},{value:"casual",label:"Casual"},{value:"enthusiastic",label:"Enthusiastic"},{value:"calm",label:"Calm & Supportive"}],m=[{value:"concise",label:"Concise",desc:"Short, direct answers"},{value:"detailed",label:"Detailed",desc:"Comprehensive explanations"},{value:"balanced",label:"Balanced",desc:"Moderate length responses"}];return i?a.jsx("div",{className:"config-page",children:a.jsx("div",{className:"loading",children:"Loading configuration..."})}):a.jsxs("div",{className:"config-page",children:[a.jsxs("div",{className:"config-header",children:[a.jsxs("div",{className:"config-title",children:[a.jsx(Ve,{size:28}),a.jsxs("div",{children:[a.jsx("h1",{children:"Agent Configuration"}),a.jsx("p",{children:"Customize how your AI agent behaves and responds"})]})]}),a.jsx("button",{className:`btn btn-primary save-btn ${n?"saved":""}`,onClick:l,children:n?a.jsxs(a.Fragment,{children:[a.jsx(Gd,{size:18})," Saved!"]}):a.jsxs(a.Fragment,{children:[a.jsx(Zd,{size:18})," Save Changes"]})})]}),a.jsxs("div",{className:"config-grid",children:[a.jsxs("div",{className:"config-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx(rr,{size:20}),a.jsx("h3",{children:"Basic Settings"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Agent Name"}),a.jsx("input",{type:"text",className:"input",value:e.name,onChange:d=>t({...e,name:d.target.value}),placeholder:"Enter agent name"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Welcome Message"}),a.jsx("textarea",{className:"input",rows:3,value:e.welcomeMessage,onChange:d=>t({...e,welcomeMessage:d.target.value}),placeholder:"Enter welcome message"})]})]}),a.jsxs("div",{className:"config-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx(fg,{size:20}),a.jsx("h3",{children:"Personality & Tone"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Personality"}),a.jsx("div",{className:"personality-grid",children:u.map(d=>a.jsxs("div",{className:`personality-card ${e.personality===d.value?"selected":""}`,onClick:()=>t({...e,personality:d.value}),children:[a.jsx("div",{className:"personality-label",children:d.label}),a.jsx("div",{className:"personality-desc",children:d.desc})]},d.value))})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Tone of Voice"}),a.jsx("select",{className:"select",value:e.tone,onChange:d=>t({...e,tone:d.target.value}),children:c.map(d=>a.jsx("option",{value:d.value,children:d.label},d.value))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Response Style"}),a.jsx("select",{className:"select",value:e.responseStyle,onChange:d=>t({...e,responseStyle:d.target.value}),children:m.map(d=>a.jsx("option",{value:d.value,children:d.label},d.value))})]})]})]}),a.jsxs("div",{className:"config-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx(Er,{size:20}),a.jsx("h3",{children:"Behavior Settings"})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("div",{className:"toggle-label",children:[a.jsx("label",{children:"Auto-Reply"}),a.jsx("div",{className:`toggle ${e.autoReply?"active":""}`,onClick:()=>t({...e,autoReply:!e.autoReply})})]}),a.jsx("p",{className:"help-text",children:"Automatically respond to incoming messages"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Typing Delay (ms)"}),a.jsx("input",{type:"number",className:"input",value:e.typingDelay,onChange:d=>t({...e,typingDelay:parseInt(d.target.value)||0}),min:"0",max:"5000",step:"100"}),a.jsx("p",{className:"help-text",children:"Simulate natural typing delay"})]})]})]})]}),a.jsx("style",{children:`
        .config-page {
          padding: 32px;
          max-width: 900px;
        }
        
        .config-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .config-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .config-title h1 {
          font-size: 24px;
          font-weight: 700;
        }
        
        .config-title p {
          color: var(--text-secondary);
          font-size: 14px;
        }
        
        .save-btn {
          transition: all 0.3s;
        }
        
        .save-btn.saved {
          background: var(--success);
        }
        
        .config-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .config-section {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        
        .section-header h3 {
          font-size: 16px;
          font-weight: 600;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group:last-child {
          margin-bottom: 0;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        
        label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        
        .help-text {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 6px;
        }
        
        .personality-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        @media (max-width: 600px) {
          .personality-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .personality-card {
          padding: 16px;
          background: var(--bg-dark);
          border: 2px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .personality-card:hover {
          border-color: var(--primary-light);
        }
        
        .personality-card.selected {
          border-color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
        }
        
        .personality-label {
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .personality-desc {
          font-size: 12px;
          color: var(--text-secondary);
        }
        
        .toggle-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        
        .toggle-label label {
          margin-bottom: 0;
        }
        
        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          color: var(--text-secondary);
        }
      `})]})}function my(){const[e,t]=k.useState([]),[n,r]=k.useState(null),[i,s]=k.useState(!1);k.useEffect(()=>{o()},[]);const o=async()=>{try{const x=await(await fetch("/api/workflows")).json();t(x)}catch(y){console.error("Failed to fetch workflows:",y)}},l=()=>{const y={id:Date.now().toString(),name:"New Workflow",description:"Describe your workflow",active:!1,nodes:[{id:"start",type:"trigger",label:"Message Received",icon:rr,x:50,y:50}],connections:[]};r(y),s(!0)},u=async()=>{try{const y=e.find(v=>v.id===n.id)?"PUT":"POST",x=y==="PUT"?`/api/workflows/${n.id}`:"/api/workflows";await fetch(x,{method:y,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),await o(),s(!1)}catch(y){console.error("Failed to save workflow:",y)}},c=async y=>{try{await fetch(`/api/workflows/${y}`,{method:"DELETE"}),await o(),(n==null?void 0:n.id)===y&&(r(null),s(!1))}catch(x){console.error("Failed to delete workflow:",x)}},m=async y=>{const x={...y,active:!y.active};try{await fetch(`/api/workflows/${y.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}),await o()}catch(v){console.error("Failed to toggle workflow:",v)}},d=y=>{const x={message:rr,email:mu,notify:hu,database:Fo,webhook:ku,delay:Er},v={message:"Send Message",email:"Send Email",notify:"Send Notification",database:"Update Database",webhook:"Webhook Call",delay:"Wait Delay"},E={id:`node-${Date.now()}`,type:y,label:v[y],icon:x[y],x:200+n.nodes.length*50,y:150+n.nodes.length*30};r({...n,nodes:[...n.nodes,E]})},g=[{type:"message",label:"Send Message",icon:rr,color:"#6366f1"},{type:"email",label:"Send Email",icon:mu,color:"#ec4899"},{type:"notify",label:"Notification",icon:hu,color:"#f59e0b"},{type:"database",label:"Database",icon:Fo,color:"#22c55e"},{type:"webhook",label:"Webhook",icon:ku,color:"#8b5cf6"},{type:"delay",label:"Delay",icon:Er,color:"#64748b"}];return i&&n?a.jsxs("div",{className:"workflow-builder",children:[a.jsxs("div",{className:"builder-header",children:[a.jsxs("div",{className:"builder-title",children:[a.jsx(Ut,{size:24}),a.jsx("input",{type:"text",value:n.name,onChange:y=>r({...n,name:y.target.value}),className:"workflow-name-input"})]}),a.jsxs("div",{className:"builder-actions",children:[a.jsx("button",{className:"btn btn-secondary",onClick:()=>s(!1),children:"Cancel"}),a.jsxs("button",{className:"btn btn-primary",onClick:u,children:[a.jsx(Zd,{size:18})," Save Workflow"]})]})]}),a.jsxs("div",{className:"builder-content",children:[a.jsxs("div",{className:"node-palette",children:[a.jsx("h4",{children:"Add Nodes"}),g.map(y=>a.jsxs("button",{className:"palette-item",onClick:()=>d(y.type),style:{"--node-color":y.color},children:[a.jsx(y.icon,{size:18,style:{color:y.color}}),a.jsx("span",{children:y.label})]},y.type))]}),a.jsx("div",{className:"canvas",children:a.jsxs("div",{className:"canvas-grid",children:[n.nodes.map((y,x)=>a.jsxs("div",{className:`workflow-node ${y.type}`,style:{left:y.x,top:y.y},children:[a.jsx("div",{className:"node-drag-handle",children:a.jsx(lg,{size:14})}),a.jsx("div",{className:"node-icon",children:a.jsx(y.icon,{size:18})}),a.jsxs("div",{className:"node-content",children:[a.jsx("div",{className:"node-label",children:y.label}),x<n.nodes.length-1&&a.jsx("div",{className:"node-connector",children:a.jsx(rg,{size:16})})]}),a.jsx("button",{className:"node-delete",onClick:()=>{r({...n,nodes:n.nodes.filter(v=>v.id!==y.id)})},children:a.jsx(wu,{size:14})})]},y.id)),a.jsxs("div",{className:"workflow-end",children:[a.jsx("div",{className:"end-dot"}),a.jsx("span",{children:"End"})]})]})})]}),a.jsx("style",{children:`
          .workflow-builder {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          
          .builder-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
          }
          
          .builder-title {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .workflow-name-input {
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-size: 18px;
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 4px;
          }
          
          .workflow-name-input:focus {
            outline: none;
            background: var(--bg-dark);
          }
          
          .builder-actions {
            display: flex;
            gap: 12px;
          }
          
          .builder-content {
            display: flex;
            flex: 1;
            overflow: hidden;
          }
          
          .node-palette {
            width: 240px;
            background: var(--bg-card);
            border-right: 1px solid var(--border);
            padding: 20px;
          }
          
          .node-palette h4 {
            margin-bottom: 16px;
            font-size: 14px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .palette-item {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
            padding: 12px;
            margin-bottom: 8px;
            background: var(--bg-dark);
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text-primary);
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .palette-item:hover {
            border-color: var(--node-color, var(--primary));
            background: rgba(99, 102, 241, 0.1);
          }
          
          .palette-item span {
            font-size: 13px;
          }
          
          .canvas {
            flex: 1;
            background: var(--bg-dark);
            position: relative;
            overflow: auto;
          }
          
          .canvas-grid {
            min-height: 100%;
            min-width: 100%;
            padding: 40px;
            background-image: 
              radial-gradient(var(--border) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          
          .workflow-node {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            background: var(--bg-card);
            border: 2px solid var(--border);
            border-radius: 10px;
            position: absolute;
            min-width: 180px;
            box-shadow: var(--shadow);
            transition: all 0.2s;
          }
          
          .workflow-node:hover {
            border-color: var(--primary);
            transform: translateY(-2px);
          }
          
          .workflow-node.trigger {
            border-color: var(--success);
          }
          
          .node-drag-handle {
            color: var(--text-muted);
            cursor: grab;
          }
          
          .node-icon {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          
          .node-content {
            flex: 1;
          }
          
          .node-label {
            font-size: 14px;
            font-weight: 500;
          }
          
          .node-connector {
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
          }
          
          .node-delete {
            opacity: 0;
            background: none;
            border: none;
            color: var(--error);
            cursor: pointer;
            padding: 4px;
            transition: opacity 0.2s;
          }
          
          .workflow-node:hover .node-delete {
            opacity: 1;
          }
          
          .workflow-end {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            position: absolute;
            left: 50%;
            top: 400px;
            color: var(--text-muted);
            font-size: 12px;
          }
          
          .end-dot {
            width: 24px;
            height: 24px;
            background: var(--border);
            border-radius: 50%;
            border: 3px solid var(--bg-card);
          }
        `})]}):a.jsxs("div",{className:"workflows-page",children:[a.jsxs("div",{className:"workflows-header",children:[a.jsxs("div",{className:"workflows-title",children:[a.jsx(Ut,{size:28}),a.jsxs("div",{children:[a.jsx("h1",{children:"Workflows"}),a.jsx("p",{children:"Build automated sequences for your AI agent"})]})]}),a.jsxs("button",{className:"btn btn-primary",onClick:l,children:[a.jsx(vu,{size:18})," Create Workflow"]})]}),a.jsx("div",{className:"workflows-list",children:e.length===0?a.jsxs("div",{className:"empty-workflows",children:[a.jsx(Ut,{size:64,className:"empty-icon"}),a.jsx("h3",{children:"No workflows yet"}),a.jsx("p",{children:"Create your first automation workflow to get started"}),a.jsxs("button",{className:"btn btn-primary",onClick:l,children:[a.jsx(vu,{size:18})," Create Your First Workflow"]})]}):e.map(y=>{var x;return a.jsxs("div",{className:"workflow-card",children:[a.jsxs("div",{className:"workflow-info",children:[a.jsx("div",{className:`workflow-status ${y.active?"active":""}`,children:y.active?a.jsx(yu,{size:14}):a.jsx(gu,{size:14})}),a.jsxs("div",{children:[a.jsx("h3",{children:y.name}),a.jsx("p",{children:y.description||`${((x=y.nodes)==null?void 0:x.length)||1} nodes`})]})]}),a.jsxs("div",{className:"workflow-actions",children:[a.jsx("button",{className:`btn ${y.active?"btn-secondary":"btn-primary"}`,onClick:()=>m(y),children:y.active?a.jsxs(a.Fragment,{children:[a.jsx(gu,{size:16})," Pause"]}):a.jsxs(a.Fragment,{children:[a.jsx(yu,{size:16})," Activate"]})}),a.jsx("button",{className:"btn btn-secondary",onClick:()=>{r(y),s(!0)},children:"Edit"}),a.jsx("button",{className:"btn btn-outline",onClick:()=>c(y.id),children:a.jsx(wu,{size:16})})]})]},y.id)})}),a.jsx("style",{children:`
        .workflows-page {
          padding: 32px;
        }
        
        .workflows-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .workflows-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .workflows-title h1 {
          font-size: 24px;
          font-weight: 700;
        }
        
        .workflows-title p {
          color: var(--text-secondary);
        }
        
        .empty-workflows {
          text-align: center;
          padding: 80px 40px;
          background: var(--bg-card);
          border: 2px dashed var(--border);
          border-radius: var(--radius);
        }
        
        .empty-icon {
          margin-bottom: 24px;
          opacity: 0.3;
        }
        
        .empty-workflows h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        
        .empty-workflows p {
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        
        .workflows-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .workflow-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: all 0.2s;
        }
        
        .workflow-card:hover {
          border-color: var(--primary);
        }
        
        .workflow-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .workflow-status {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--bg-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
        }
        
        .workflow-status.active {
          background: rgba(34, 197, 94, 0.2);
          color: var(--success);
        }
        
        .workflow-info h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .workflow-info p {
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .workflow-actions {
          display: flex;
          gap: 8px;
        }
      `})]})}function gy(){const[e,t]=k.useState({whatsapp:{enabled:!1,connected:!1,loading:!1},telegram:{enabled:!1,connected:!1,loading:!1},slack:{enabled:!1,connected:!1,loading:!1}});k.useEffect(()=>{n()},[]);const n=async()=>{try{const o=await(await fetch("/api/agents/default")).json();o.integrations&&t(l=>({whatsapp:{...l.whatsapp,...o.integrations.whatsapp},telegram:{...l.telegram,...o.integrations.telegram},slack:{...l.slack,...o.integrations.slack}}))}catch(s){console.error("Failed to fetch integrations:",s)}},r=async s=>{if(e[s].connected){t(l=>({...l,[s]:{...l[s],loading:!0}}));try{await fetch(`/api/integrations/${s}/disconnect`,{method:"POST"}),t(l=>({...l,[s]:{enabled:!1,connected:!1,loading:!1}}))}catch(l){console.error("Failed to disconnect:",l),t(u=>({...u,[s]:{...u[s],loading:!1}}))}}else{t(l=>({...l,[s]:{...l[s],enabled:!0,loading:!0}}));try{await fetch(`/api/integrations/${s}/connect`,{method:"POST"}),setTimeout(()=>{t(l=>({...l,[s]:{enabled:!0,connected:!0,loading:!1}}))},1500)}catch(l){console.error("Failed to connect:",l),t(u=>({...u,[s]:{...u[s],loading:!1}}))}}},i=[{id:"whatsapp",name:"WhatsApp",description:"Connect your AI agent to WhatsApp Business API",icon:nr,color:"#22c55e",features:["Send/receive messages","Media support","Group chat","Quick replies"]},{id:"telegram",name:"Telegram",description:"Integrate with Telegram Bot API",icon:pg,color:"#0088cc",features:["Bot commands","Inline queries","Webhook support","Rich media"]},{id:"slack",name:"Slack",description:"Add your agent to Slack workspaces",icon:ht,color:"#4a154b",features:["Slash commands","App mentions","Channel messages","DM support"]}];return a.jsxs("div",{className:"integrations-page",children:[a.jsx("div",{className:"integrations-header",children:a.jsxs("div",{className:"integrations-title",children:[a.jsx(ht,{size:28}),a.jsxs("div",{children:[a.jsx("h1",{children:"Integrations"}),a.jsx("p",{children:"Connect your AI agent to messaging platforms"})]})]})}),a.jsx("div",{className:"integrations-grid",children:i.map(s=>{const o=e[s.id];return a.jsxs("div",{className:"integration-card",children:[a.jsxs("div",{className:"integration-header",children:[a.jsx("div",{className:"integration-icon",style:{background:`${s.color}20`,color:s.color},children:a.jsx(s.icon,{size:28})}),a.jsx("div",{className:"integration-status",children:o.connected?a.jsxs("span",{className:"badge badge-success",children:[a.jsx(Gd,{size:12})," Connected"]}):o.enabled?a.jsxs("span",{className:"badge badge-warning",children:[a.jsx(tg,{size:12})," Setup Required"]}):a.jsxs("span",{className:"badge badge-error",children:[a.jsx(Su,{size:12})," Not Connected"]})})]}),a.jsxs("div",{className:"integration-content",children:[a.jsx("h3",{children:s.name}),a.jsx("p",{children:s.description}),a.jsx("div",{className:"integration-features",children:s.features.map((l,u)=>a.jsx("span",{className:"feature-tag",children:l},u))})]}),a.jsx("div",{className:"integration-actions",children:a.jsx("button",{className:`btn ${o.connected?"btn-secondary":"btn-primary"}`,onClick:()=>r(s.id),disabled:o.loading,children:o.loading?a.jsxs(a.Fragment,{children:[a.jsx(cg,{size:18,className:"animate-spin"})," Connecting..."]}):o.connected?a.jsxs(a.Fragment,{children:[a.jsx(Su,{size:18})," Disconnect"]}):a.jsxs(a.Fragment,{children:[a.jsx(sg,{size:18})," Connect"]})})}),o.connected&&a.jsxs("div",{className:"integration-config",children:[a.jsxs("div",{className:"config-item",children:[a.jsx("span",{children:"Webhook URL:"}),a.jsxs("code",{children:["https://api.clawbot.io/webhooks/",s.id]})]}),a.jsxs("div",{className:"config-item",children:[a.jsx("span",{children:"Status:"}),a.jsxs("span",{className:"status-active",children:[a.jsx("span",{className:"pulse-dot"})," Active"]})]})]})]},s.id)})}),a.jsxs("div",{className:"integration-tips",children:[a.jsx("div",{className:"tips-icon",children:a.jsx(Ve,{size:24})}),a.jsxs("div",{children:[a.jsx("h4",{children:"Pro Tip"}),a.jsx("p",{children:"You can connect multiple integrations at once. Your AI agent will respond through all connected channels simultaneously."})]})]}),a.jsx("style",{children:`
        .integrations-page {
          padding: 32px;
        }
        
        .integrations-header {
          margin-bottom: 32px;
        }
        
        .integrations-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .integrations-title h1 {
          font-size: 24px;
          font-weight: 700;
        }
        
        .integrations-title p {
          color: var(--text-secondary);
        }
        
        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }
        
        .integration-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          transition: all 0.2s;
        }
        
        .integration-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        
        .integration-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .integration-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .integration-content h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .integration-content p {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 16px;
        }
        
        .integration-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .feature-tag {
          font-size: 12px;
          padding: 4px 10px;
          background: var(--bg-dark);
          border-radius: 20px;
          color: var(--text-secondary);
        }
        
        .integration-actions {
          margin-bottom: 16px;
        }
        
        .integration-actions .btn {
          width: 100%;
          justify-content: center;
        }
        
        .integration-config {
          padding: 16px;
          background: var(--bg-dark);
          border-radius: 8px;
          font-size: 13px;
        }
        
        .config-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .config-item:last-child {
          margin-bottom: 0;
        }
        
        .config-item code {
          font-family: monospace;
          background: var(--bg-card);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
        }
        
        .status-active {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--success);
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        .integration-tips {
          margin-top: 32px;
          padding: 20px 24px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .tips-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .integration-tips h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .integration-tips p {
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `})]})}const Qn=[{id:"alpha",name:"Alpha",role:"System Architect",description:"Infrastructure, deployment, and system design",icon:xu,color:"#ef4444",status:"online",lastActive:"Now",specialty:"Architecture"},{id:"beta",name:"Beta",role:"Code Specialist",description:"Full-stack development and code review",icon:ig,color:"#3b82f6",status:"online",lastActive:"Now",specialty:"Development"},{id:"gamma",name:"Gamma",role:"UI/UX Designer",description:"Visual design, user experience, and frontend",icon:ug,color:"#ec4899",status:"busy",lastActive:"2m ago",specialty:"Design"},{id:"delta",name:"Delta",role:"Data Engineer",description:"Databases, analytics, and data pipelines",icon:Fo,color:"#22c55e",status:"online",lastActive:"Now",specialty:"Data"},{id:"epsilon",name:"Epsilon",role:"DevOps Lead",description:"CI/CD, cloud infrastructure, and automation",icon:ht,color:"#f59e0b",status:"online",lastActive:"Now",specialty:"DevOps"},{id:"zeta",name:"Zeta",role:"Security Expert",description:"Security audits, penetration testing, compliance",icon:xu,color:"#8b5cf6",status:"offline",lastActive:"1h ago",specialty:"Security"},{id:"eta",name:"Eta",role:"Integration Specialist",description:"APIs, third-party integrations, webhooks",icon:og,color:"#06b6d4",status:"online",lastActive:"Now",specialty:"Integration"},{id:"theta",name:"Theta",role:"AI/ML Engineer",description:"Machine learning, NLP, and AI models",icon:tf,color:"#f97316",status:"busy",lastActive:"5m ago",specialty:"AI/ML"}];function yy(){const e=$l();k.useState(null);const[t,n]=k.useState(""),r=Qn.filter(u=>u.name.toLowerCase().includes(t.toLowerCase())||u.role.toLowerCase().includes(t.toLowerCase())||u.specialty.toLowerCase().includes(t.toLowerCase())),i=Qn.filter(u=>u.status==="online").length,s=Qn.filter(u=>u.status==="busy").length,o=u=>{e(`/subagents/${u}`)},l=()=>{e("/chat")};return a.jsxs("div",{className:"subagents-page",children:[a.jsxs("header",{className:"subagents-header",children:[a.jsxs("div",{className:"header-title",children:[a.jsx(Wl,{size:28,className:"crown-icon"}),a.jsxs("div",{children:[a.jsx("h1",{children:"MasterClaw Sub-Agents"}),a.jsxs("p",{children:["Your AI automation fleet - ",i," online, ",s," busy"]})]})]}),a.jsxs("button",{className:"btn btn-primary masterclaw-btn",onClick:l,children:[a.jsx(nr,{size:18}),"Switch to MasterClaw"]})]}),a.jsxs("div",{className:"subagents-stats",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"stat-value",children:Qn.length}),a.jsx("div",{className:"stat-label",children:"Total Agents"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"stat-value online",children:i}),a.jsx("div",{className:"stat-label",children:"Online"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"stat-value busy",children:s}),a.jsx("div",{className:"stat-label",children:"Busy"})]})]}),a.jsx("div",{className:"search-bar",children:a.jsx("input",{type:"text",placeholder:"Search agents by name, role, or specialty...",value:t,onChange:u=>n(u.target.value),className:"input search-input"})}),a.jsx("div",{className:"agents-grid",children:r.map((u,c)=>a.jsxs("div",{className:`agent-card ${u.status}`,onClick:()=>o(u.id),style:{animationDelay:`${c*.05}s`},children:[a.jsxs("div",{className:"agent-header",children:[a.jsx("div",{className:"agent-avatar",style:{background:`${u.color}20`,color:u.color},children:a.jsx(u.icon,{size:24})}),a.jsxs("div",{className:"agent-status-badge",children:[a.jsx("span",{className:`status-indicator ${u.status}`}),a.jsx("span",{className:"status-text",children:u.status})]})]}),a.jsxs("div",{className:"agent-info",children:[a.jsx("h3",{children:u.name}),a.jsx("p",{className:"agent-role",children:u.role}),a.jsx("p",{className:"agent-description",children:u.description})]}),a.jsxs("div",{className:"agent-footer",children:[a.jsx("span",{className:"specialty-tag",style:{color:u.color},children:u.specialty}),a.jsxs("div",{className:"last-active",children:[a.jsx(Er,{size:12}),u.lastActive]})]})]},u.id))}),a.jsx("style",{children:`
        .subagents-page {
          padding: 32px;
          max-width: 1200px;
        }

        .subagents-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .header-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .crown-icon {
          color: var(--secondary);
        }

        .header-title h1 {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-title p {
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .masterclaw-btn {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .subagents-stats {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }

        .stat-item {
          text-align: center;
          min-width: 80px;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-value.online {
          color: var(--success);
        }

        .stat-value.busy {
          color: var(--warning);
        }

        .stat-label {
          font-size: 12px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .search-bar {
          margin-bottom: 24px;
        }

        .search-input {
          padding: 14px 20px;
          font-size: 15px;
        }

        .agents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .agent-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s;
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }

        .agent-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .agent-card.online {
          border-left: 3px solid var(--success);
        }

        .agent-card.busy {
          border-left: 3px solid var(--warning);
        }

        .agent-card.offline {
          border-left: 3px solid var(--text-muted);
          opacity: 0.8;
        }

        .agent-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .agent-avatar {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .agent-status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 4px 10px;
          background: var(--bg-dark);
          border-radius: 20px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-indicator.online {
          background: var(--success);
          box-shadow: 0 0 8px var(--success);
        }

        .status-indicator.busy {
          background: var(--warning);
        }

        .status-indicator.offline {
          background: var(--text-muted);
        }

        .agent-info h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .agent-role {
          font-size: 13px;
          color: var(--primary-light);
          font-weight: 500;
          margin-bottom: 8px;
        }

        .agent-description {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .agent-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .specialty-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          background: var(--bg-dark);
          border-radius: 20px;
        }

        .last-active {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--text-muted);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .agents-grid {
            grid-template-columns: 1fr;
          }

          .subagents-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `})]})}const Fn={};function vy(){const{agentId:e}=Sm(),t=$l(),[n,r]=k.useState(null),[i,s]=k.useState([]),[o,l]=k.useState(""),[u,c]=k.useState(!1),m=k.useRef(null);k.useEffect(()=>{const v=Qn.find(E=>E.id===e);v&&(r(v),Fn[e]||(Fn[e]=[{id:"welcome",type:"bot",content:`Hello! I'm ${v.name}, your ${v.role}. How can I assist you today?`,timestamp:new Date().toISOString(),agent:v}]),s(Fn[e]))},[e]),k.useEffect(()=>{var v;(v=m.current)==null||v.scrollIntoView({behavior:"smooth"})},[i,u]);const d=(v,E)=>{const p=E.toLowerCase(),f={alpha:{default:"I'll design the optimal system architecture for this. What's your scalability requirement?",help:"As System Architect, I can help you design microservices, choose databases, and plan your infrastructure. What are you building?",greeting:"Ready to architect something amazing. What's the project scope?"},beta:{default:"I can code that for you. Which language/framework would you prefer?",help:"I'm here to help with full-stack development. React, Node, Python - you name it. What's the task?",greeting:"Hey! Ready to write some clean code. What are we building?"},gamma:{default:"I'll create a beautiful UI for that. Any design preferences or brand guidelines?",help:"I specialize in UI/UX design. Wireframes, mockups, or frontend components - what do you need?",greeting:"Hello! Ready to make something beautiful. What's the design challenge?"},delta:{default:"I can set up the data pipeline. What volume of data are we handling?",help:"I handle databases, data pipelines, and analytics. SQL, NoSQL, or data warehousing - what's your need?",greeting:"Hi! Ready to wrangle some data. What are we working with?"},epsilon:{default:"I'll automate that deployment. Which cloud platform are you using?",help:"DevOps is my specialty. CI/CD, Docker, Kubernetes - what needs automating?",greeting:"Ready to deploy! What infrastructure are we working with?"},zeta:{default:"I'll run a security audit. Are there specific compliance requirements?",help:"Security is critical. I can audit code, check for vulnerabilities, or help with compliance. What do you need?",greeting:"Hello! Let's make your system secure. What would you like me to review?"},eta:{default:"I can build that integration. What APIs are we connecting to?",help:"I specialize in API integrations. REST, GraphQL, webhooks - what's the connection?",greeting:"Ready to connect! What systems need to talk to each other?"},theta:{default:"I can build an ML model for that. What type of prediction or analysis do you need?",help:"I work with AI/ML. NLP, computer vision, predictive models - what intelligence do you need?",greeting:"Greetings! Ready to add some AI magic. What problem should we solve?"}},h=f[v]||f.beta;return p.match(/hi|hello|hey/)?h.greeting:p.match(/help|assist/)?h.help:h.default},g=v=>{if(v.preventDefault(),!o.trim()||!n)return;const E={id:Date.now().toString(),type:"user",content:o,timestamp:new Date().toISOString(),agent:n},p=[...i,E];Fn[e]=p,s(p),l(""),c(!0),setTimeout(()=>{const f={id:(Date.now()+1).toString(),type:"bot",content:d(n.id,E.content),timestamp:new Date().toISOString(),agent:n},h=[...p,f];Fn[e]=h,s(h),c(!1)},1500)},y=()=>{t("/subagents")},x=()=>{t("/chat")};return n?a.jsxs("div",{className:"subagent-chat",children:[a.jsxs("header",{className:"chat-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsx("button",{className:"btn-icon",onClick:y,children:a.jsx(ng,{size:20})}),a.jsx("div",{className:"agent-avatar-small",style:{background:`${n.color}20`,color:n.color},children:a.jsx(n.icon,{size:20})}),a.jsxs("div",{className:"agent-info-header",children:[a.jsx("h2",{children:n.name}),a.jsx("span",{className:"agent-role-small",children:n.role})]})]}),a.jsxs("div",{className:"header-right",children:[a.jsxs("div",{className:`status-badge ${n.status}`,children:[a.jsx("span",{className:"status-dot-small"}),n.status]}),a.jsxs("button",{className:"btn btn-secondary masterclaw-small",onClick:x,children:[a.jsx(Wl,{size:14}),"MasterClaw"]})]})]}),a.jsxs("div",{className:"chat-messages",children:[i.length===0&&a.jsxs("div",{className:"welcome-message",children:[a.jsx("div",{className:"welcome-avatar",style:{color:n.color},children:a.jsx(n.icon,{size:48})}),a.jsxs("h3",{children:["Chat with ",n.name]}),a.jsx("p",{children:n.description}),a.jsxs("div",{className:"quick-prompts",children:[a.jsx("button",{onClick:()=>l("Hello!"),className:"prompt-btn",children:"👋 Say hello"}),a.jsx("button",{onClick:()=>l("I need help with..."),className:"prompt-btn",children:"🆘 Get help"}),a.jsx("button",{onClick:()=>l("Can you show me an example?"),className:"prompt-btn",children:"💡 Example"})]})]}),i.map(v=>a.jsxs("div",{className:`message ${v.type==="user"?"message-user":"message-bot"}`,children:[a.jsx("div",{className:"message-avatar",style:v.type==="bot"?{background:`${n.color}20`,color:n.color}:{},children:v.type==="user"?a.jsx(nf,{size:16}):a.jsx(n.icon,{size:16})}),a.jsxs("div",{className:"message-content",children:[a.jsx("p",{children:v.content}),a.jsx("span",{className:"message-time",children:new Date(v.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]},v.id)),u&&a.jsxs("div",{className:"message message-bot",children:[a.jsx("div",{className:"message-avatar",style:{background:`${n.color}20`,color:n.color},children:a.jsx(n.icon,{size:16})}),a.jsx("div",{className:"message-content typing",children:a.jsxs("div",{className:"typing-indicator",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})})]}),a.jsx("div",{ref:m})]}),a.jsxs("form",{className:"chat-input",onSubmit:g,children:[a.jsx("input",{type:"text",value:o,onChange:v=>l(v.target.value),placeholder:`Message ${n.name}...`,className:"input"}),a.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!o.trim(),style:{background:n.color},children:a.jsx(ef,{size:18})})]}),a.jsx("style",{children:`
        .subagent-chat {
          display: flex;
          flex-direction: column;
          height: 100vh;
          max-height: 100vh;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          background: var(--bg-hover);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .btn-icon:hover {
          background: var(--border);
          color: var(--text-primary);
        }

        .agent-avatar-small {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .agent-info-header h2 {
          font-size: 16px;
          font-weight: 600;
        }

        .agent-role-small {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 6px 12px;
          background: var(--bg-dark);
          border-radius: 20px;
        }

        .status-badge.online {
          color: var(--success);
        }

        .status-badge.busy {
          color: var(--warning);
        }

        .status-badge.offline {
          color: var(--text-muted);
        }

        .status-dot-small {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .masterclaw-small {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          font-size: 13px;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .welcome-message {
          text-align: center;
          padding: 40px;
          color: var(--text-secondary);
        }

        .welcome-avatar {
          width: 80px;
          height: 80px;
          background: var(--bg-card);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .welcome-message h3 {
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .quick-prompts {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .prompt-btn {
          padding: 8px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          color: var(--text-secondary);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .prompt-btn:hover {
          border-color: var(--primary);
          color: var(--text-primary);
        }

        .message {
          display: flex;
          gap: 12px;
          max-width: 80%;
          animation: fadeIn 0.2s ease-out;
        }

        .message-user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message-bot {
          align-self: flex-start;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: var(--bg-hover);
          color: var(--text-primary);
        }

        .message-content {
          background: var(--bg-card);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .message-user .message-content {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        .message-content p {
          font-size: 14px;
          line-height: 1.5;
        }

        .message-time {
          display: block;
          font-size: 11px;
          margin-top: 4px;
          opacity: 0.7;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 4px 8px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: var(--text-secondary);
          border-radius: 50%;
          animation: typing 1s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .chat-input {
          display: flex;
          gap: 12px;
          padding: 20px 24px;
          background: var(--bg-card);
          border-top: 1px solid var(--border);
        }

        .chat-input .input {
          flex: 1;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 16px;
          color: var(--text-secondary);
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]}):a.jsx("div",{className:"subagent-chat",children:a.jsxs("div",{className:"loading-state",children:[a.jsx(Jd,{size:32,className:"animate-spin"}),a.jsx("p",{children:"Loading agent..."})]})})}function xy(){return a.jsxs("div",{className:"app",children:[a.jsxs("nav",{className:"sidebar",children:[a.jsxs("div",{className:"sidebar-header",children:[a.jsxs("div",{className:"logo",children:[a.jsx(Ve,{className:"logo-icon"}),a.jsx("span",{children:"Claw Bot"})]}),a.jsx("div",{className:"version",children:"Rex Deus v2.0"})]}),a.jsxs("div",{className:"nav-links",children:[a.jsxs(Xt,{to:"/",className:({isActive:e})=>`nav-link ${e?"active":""}`,end:!0,children:[a.jsx(ag,{size:20}),a.jsx("span",{children:"Dashboard"})]}),a.jsxs(Xt,{to:"/chat",className:({isActive:e})=>`nav-link ${e?"active":""}`,children:[a.jsx(rr,{size:20}),a.jsx("span",{children:"Live Chat"})]}),a.jsxs(Xt,{to:"/configure",className:({isActive:e})=>`nav-link ${e?"active":""}`,children:[a.jsx(dg,{size:20}),a.jsx("span",{children:"Configure"})]}),a.jsxs(Xt,{to:"/workflows",className:({isActive:e})=>`nav-link ${e?"active":""}`,children:[a.jsx(Ut,{size:20}),a.jsx("span",{children:"Workflows"})]}),a.jsxs(Xt,{to:"/integrations",className:({isActive:e})=>`nav-link ${e?"active":""}`,children:[a.jsx(ht,{size:20}),a.jsx("span",{children:"Integrations"})]}),a.jsx("div",{className:"nav-section",children:a.jsxs("span",{className:"nav-section-title",children:[a.jsx(Wl,{size:14})," MasterClaw"]})}),a.jsxs(Xt,{to:"/subagents",className:({isActive:e})=>`nav-link ${e?"active":""}`,children:[a.jsx(hg,{size:20}),a.jsx("span",{children:"Sub-Agents"}),a.jsx("span",{className:"nav-badge",children:"8"})]})]}),a.jsx("div",{className:"sidebar-footer",children:a.jsxs("div",{className:"connection-status",children:[a.jsx("span",{className:"status-dot online"}),a.jsx("span",{children:"Rex Deus Online"})]})})]}),a.jsx("main",{className:"main-content",children:a.jsxs(Dm,{children:[a.jsx(ot,{path:"/",element:a.jsx(py,{})}),a.jsx(ot,{path:"/chat",element:a.jsx(fy,{})}),a.jsx(ot,{path:"/configure",element:a.jsx(hy,{})}),a.jsx(ot,{path:"/workflows",element:a.jsx(my,{})}),a.jsx(ot,{path:"/integrations",element:a.jsx(gy,{})}),a.jsx(ot,{path:"/subagents",element:a.jsx(yy,{})}),a.jsx(ot,{path:"/subagents/:agentId",element:a.jsx(vy,{})})]})}),a.jsx("style",{children:`
        .app {
          display: flex;
          min-height: 100vh;
        }
        
        .sidebar {
          width: 260px;
          background: var(--bg-card);
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
        }
        
        .sidebar-header {
          padding: 24px;
          border-bottom: 1px solid var(--border);
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 700;
        }
        
        .logo-icon {
          width: 32px;
          height: 32px;
          color: var(--primary);
        }
        
        .version {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 4px;
          margin-left: 44px;
        }
        
        .nav-links {
          flex: 1;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }
        
        .nav-section {
          margin-top: 16px;
          padding: 0 16px;
        }
        
        .nav-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--secondary);
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s;
          position: relative;
        }
        
        .nav-link:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
        
        .nav-link.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%);
          color: var(--primary-light);
        }
        
        .nav-badge {
          margin-left: auto;
          background: var(--secondary);
          color: white;
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 600;
        }
        
        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid var(--border);
        }
        
        .connection-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--error);
        }
        
        .status-dot.online {
          background: var(--success);
          box-shadow: 0 0 8px var(--success);
        }
        
        .main-content {
          flex: 1;
          margin-left: 260px;
          min-height: 100vh;
        }
        
        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            position: relative;
            height: auto;
          }
          
          .main-content {
            margin-left: 0;
          }
          
          .app {
            flex-direction: column;
          }
        }
      `})]})}Ws.createRoot(document.getElementById("root")).render(a.jsx(Mu.StrictMode,{children:a.jsx(Qm,{children:a.jsx(xy,{})})}));
