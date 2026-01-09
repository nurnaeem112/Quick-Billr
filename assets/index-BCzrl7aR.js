(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const h of g.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function m(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerPolicy&&(g.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?g.credentials="include":f.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(f){if(f.ep)return;f.ep=!0;const g=m(f);fetch(f.href,g)}})();function gm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var zd={exports:{}},Rr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wu;function lg(){if(Wu)return Rr;Wu=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function m(c,f,g){var h=null;if(g!==void 0&&(h=""+g),f.key!==void 0&&(h=""+f.key),"key"in f){g={};for(var j in f)j!=="key"&&(g[j]=f[j])}else g=f;return f=g.ref,{$$typeof:i,type:c,key:h,ref:f!==void 0?f:null,props:g}}return Rr.Fragment=o,Rr.jsx=m,Rr.jsxs=m,Rr}var Iu;function rg(){return Iu||(Iu=1,zd.exports=lg()),zd.exports}var r=rg(),Md={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function sg(){if(Pu)return ee;Pu=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),h=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),H=Symbol.iterator;function q(b){return b===null||typeof b!="object"?null:(b=H&&b[H]||b["@@iterator"],typeof b=="function"?b:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,k={};function _(b,U,G){this.props=b,this.context=U,this.refs=k,this.updater=G||Q}_.prototype.isReactComponent={},_.prototype.setState=function(b,U){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,U,"setState")},_.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function T(){}T.prototype=_.prototype;function L(b,U,G){this.props=b,this.context=U,this.refs=k,this.updater=G||Q}var ue=L.prototype=new T;ue.constructor=L,X(ue,_.prototype),ue.isPureReactComponent=!0;var ye=Array.isArray;function Me(){}var P={H:null,A:null,T:null,S:null},Be=Object.prototype.hasOwnProperty;function Ne(b,U,G){var K=G.ref;return{$$typeof:i,type:b,key:U,ref:K!==void 0?K:null,props:G}}function $e(b,U){return Ne(b.type,U,b.props)}function We(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function Je(b){var U={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(G){return U[G]})}var Ot=/\/+/g;function $(b,U){return typeof b=="object"&&b!==null&&b.key!=null?Je(""+b.key):U.toString(36)}function I(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Me,Me):(b.status="pending",b.then(function(U){b.status==="pending"&&(b.status="fulfilled",b.value=U)},function(U){b.status==="pending"&&(b.status="rejected",b.reason=U)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function E(b,U,G,K,te){var re=typeof b;(re==="undefined"||re==="boolean")&&(b=null);var ge=!1;if(b===null)ge=!0;else switch(re){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(b.$$typeof){case i:case o:ge=!0;break;case N:return ge=b._init,E(ge(b._payload),U,G,K,te)}}if(ge)return te=te(b),ge=K===""?"."+$(b,0):K,ye(te)?(G="",ge!=null&&(G=ge.replace(Ot,"$&/")+"/"),E(te,U,G,"",function(ql){return ql})):te!=null&&(We(te)&&(te=$e(te,G+(te.key==null||b&&b.key===te.key?"":(""+te.key).replace(Ot,"$&/")+"/")+ge)),U.push(te)),1;ge=0;var Ie=K===""?".":K+":";if(ye(b))for(var Re=0;Re<b.length;Re++)K=b[Re],re=Ie+$(K,Re),ge+=E(K,U,G,re,te);else if(Re=q(b),typeof Re=="function")for(b=Re.call(b),Re=0;!(K=b.next()).done;)K=K.value,re=Ie+$(K,Re++),ge+=E(K,U,G,re,te);else if(re==="object"){if(typeof b.then=="function")return E(I(b),U,G,K,te);throw U=String(b),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ge}function Y(b,U,G){if(b==null)return b;var K=[],te=0;return E(b,K,"","",function(re){return U.call(G,re,te++)}),K}function V(b){if(b._status===-1){var U=b._result;U=U(),U.then(function(G){(b._status===0||b._status===-1)&&(b._status=1,b._result=G)},function(G){(b._status===0||b._status===-1)&&(b._status=2,b._result=G)}),b._status===-1&&(b._status=0,b._result=U)}if(b._status===1)return b._result.default;throw b._result}var oe=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},we={map:Y,forEach:function(b,U,G){Y(b,function(){U.apply(this,arguments)},G)},count:function(b){var U=0;return Y(b,function(){U++}),U},toArray:function(b){return Y(b,function(U){return U})||[]},only:function(b){if(!We(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ee.Activity=B,ee.Children=we,ee.Component=_,ee.Fragment=m,ee.Profiler=f,ee.PureComponent=L,ee.StrictMode=c,ee.Suspense=y,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ee.__COMPILER_RUNTIME={__proto__:null,c:function(b){return P.H.useMemoCache(b)}},ee.cache=function(b){return function(){return b.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(b,U,G){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var K=X({},b.props),te=b.key;if(U!=null)for(re in U.key!==void 0&&(te=""+U.key),U)!Be.call(U,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&U.ref===void 0||(K[re]=U[re]);var re=arguments.length-2;if(re===1)K.children=G;else if(1<re){for(var ge=Array(re),Ie=0;Ie<re;Ie++)ge[Ie]=arguments[Ie+2];K.children=ge}return Ne(b.type,te,K)},ee.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:g,_context:b},b},ee.createElement=function(b,U,G){var K,te={},re=null;if(U!=null)for(K in U.key!==void 0&&(re=""+U.key),U)Be.call(U,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(te[K]=U[K]);var ge=arguments.length-2;if(ge===1)te.children=G;else if(1<ge){for(var Ie=Array(ge),Re=0;Re<ge;Re++)Ie[Re]=arguments[Re+2];te.children=Ie}if(b&&b.defaultProps)for(K in ge=b.defaultProps,ge)te[K]===void 0&&(te[K]=ge[K]);return Ne(b,re,te)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(b){return{$$typeof:j,render:b}},ee.isValidElement=We,ee.lazy=function(b){return{$$typeof:N,_payload:{_status:-1,_result:b},_init:V}},ee.memo=function(b,U){return{$$typeof:x,type:b,compare:U===void 0?null:U}},ee.startTransition=function(b){var U=P.T,G={};P.T=G;try{var K=b(),te=P.S;te!==null&&te(G,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(Me,oe)}catch(re){oe(re)}finally{U!==null&&G.types!==null&&(U.types=G.types),P.T=U}},ee.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ee.use=function(b){return P.H.use(b)},ee.useActionState=function(b,U,G){return P.H.useActionState(b,U,G)},ee.useCallback=function(b,U){return P.H.useCallback(b,U)},ee.useContext=function(b){return P.H.useContext(b)},ee.useDebugValue=function(){},ee.useDeferredValue=function(b,U){return P.H.useDeferredValue(b,U)},ee.useEffect=function(b,U){return P.H.useEffect(b,U)},ee.useEffectEvent=function(b){return P.H.useEffectEvent(b)},ee.useId=function(){return P.H.useId()},ee.useImperativeHandle=function(b,U,G){return P.H.useImperativeHandle(b,U,G)},ee.useInsertionEffect=function(b,U){return P.H.useInsertionEffect(b,U)},ee.useLayoutEffect=function(b,U){return P.H.useLayoutEffect(b,U)},ee.useMemo=function(b,U){return P.H.useMemo(b,U)},ee.useOptimistic=function(b,U){return P.H.useOptimistic(b,U)},ee.useReducer=function(b,U,G){return P.H.useReducer(b,U,G)},ee.useRef=function(b){return P.H.useRef(b)},ee.useState=function(b){return P.H.useState(b)},ee.useSyncExternalStore=function(b,U,G){return P.H.useSyncExternalStore(b,U,G)},ee.useTransition=function(){return P.H.useTransition()},ee.version="19.2.0",ee}var em;function qd(){return em||(em=1,Md.exports=sg()),Md.exports}var z=qd();const ng=gm(z);var Bd={exports:{}},Dr={},Rd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function ig(){return tm||(tm=1,(function(i){function o(E,Y){var V=E.length;E.push(Y);e:for(;0<V;){var oe=V-1>>>1,we=E[oe];if(0<f(we,Y))E[oe]=Y,E[V]=we,V=oe;else break e}}function m(E){return E.length===0?null:E[0]}function c(E){if(E.length===0)return null;var Y=E[0],V=E.pop();if(V!==Y){E[0]=V;e:for(var oe=0,we=E.length,b=we>>>1;oe<b;){var U=2*(oe+1)-1,G=E[U],K=U+1,te=E[K];if(0>f(G,V))K<we&&0>f(te,G)?(E[oe]=te,E[K]=V,oe=K):(E[oe]=G,E[U]=V,oe=U);else if(K<we&&0>f(te,V))E[oe]=te,E[K]=V,oe=K;else break e}}return Y}function f(E,Y){var V=E.sortIndex-Y.sortIndex;return V!==0?V:E.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;i.unstable_now=function(){return g.now()}}else{var h=Date,j=h.now();i.unstable_now=function(){return h.now()-j}}var y=[],x=[],N=1,B=null,H=3,q=!1,Q=!1,X=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function ue(E){for(var Y=m(x);Y!==null;){if(Y.callback===null)c(x);else if(Y.startTime<=E)c(x),Y.sortIndex=Y.expirationTime,o(y,Y);else break;Y=m(x)}}function ye(E){if(X=!1,ue(E),!Q)if(m(y)!==null)Q=!0,Me||(Me=!0,Je());else{var Y=m(x);Y!==null&&I(ye,Y.startTime-E)}}var Me=!1,P=-1,Be=5,Ne=-1;function $e(){return k?!0:!(i.unstable_now()-Ne<Be)}function We(){if(k=!1,Me){var E=i.unstable_now();Ne=E;var Y=!0;try{e:{Q=!1,X&&(X=!1,T(P),P=-1),q=!0;var V=H;try{t:{for(ue(E),B=m(y);B!==null&&!(B.expirationTime>E&&$e());){var oe=B.callback;if(typeof oe=="function"){B.callback=null,H=B.priorityLevel;var we=oe(B.expirationTime<=E);if(E=i.unstable_now(),typeof we=="function"){B.callback=we,ue(E),Y=!0;break t}B===m(y)&&c(y),ue(E)}else c(y);B=m(y)}if(B!==null)Y=!0;else{var b=m(x);b!==null&&I(ye,b.startTime-E),Y=!1}}break e}finally{B=null,H=V,q=!1}Y=void 0}}finally{Y?Je():Me=!1}}}var Je;if(typeof L=="function")Je=function(){L(We)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,$=Ot.port2;Ot.port1.onmessage=We,Je=function(){$.postMessage(null)}}else Je=function(){_(We,0)};function I(E,Y){P=_(function(){E(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(E){E.callback=null},i.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<E?Math.floor(1e3/E):5},i.unstable_getCurrentPriorityLevel=function(){return H},i.unstable_next=function(E){switch(H){case 1:case 2:case 3:var Y=3;break;default:Y=H}var V=H;H=Y;try{return E()}finally{H=V}},i.unstable_requestPaint=function(){k=!0},i.unstable_runWithPriority=function(E,Y){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var V=H;H=E;try{return Y()}finally{H=V}},i.unstable_scheduleCallback=function(E,Y,V){var oe=i.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?oe+V:oe):V=oe,E){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=V+we,E={id:N++,callback:Y,priorityLevel:E,startTime:V,expirationTime:we,sortIndex:-1},V>oe?(E.sortIndex=V,o(x,E),m(y)===null&&E===m(x)&&(X?(T(P),P=-1):X=!0,I(ye,V-oe))):(E.sortIndex=we,o(y,E),Q||q||(Q=!0,Me||(Me=!0,Je()))),E},i.unstable_shouldYield=$e,i.unstable_wrapCallback=function(E){var Y=H;return function(){var V=H;H=Y;try{return E.apply(this,arguments)}finally{H=V}}}})(Dd)),Dd}var am;function dg(){return am||(am=1,Rd.exports=ig()),Rd.exports}var Od={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function og(){if(lm)return Fe;lm=1;var i=qd();function o(y){var x="https://react.dev/errors/"+y;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)x+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+y+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var c={d:{f:m,r:function(){throw Error(o(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},f=Symbol.for("react.portal");function g(y,x,N){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:B==null?null:""+B,children:y,containerInfo:x,implementation:N}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(y,x){if(y==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Fe.createPortal=function(y,x){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return g(y,x,null,N)},Fe.flushSync=function(y){var x=h.T,N=c.p;try{if(h.T=null,c.p=2,y)return y()}finally{h.T=x,c.p=N,c.d.f()}},Fe.preconnect=function(y,x){typeof y=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(y,x))},Fe.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},Fe.preinit=function(y,x){if(typeof y=="string"&&x&&typeof x.as=="string"){var N=x.as,B=j(N,x.crossOrigin),H=typeof x.integrity=="string"?x.integrity:void 0,q=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;N==="style"?c.d.S(y,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:B,integrity:H,fetchPriority:q}):N==="script"&&c.d.X(y,{crossOrigin:B,integrity:H,fetchPriority:q,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Fe.preinitModule=function(y,x){if(typeof y=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var N=j(x.as,x.crossOrigin);c.d.M(y,{crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(y)},Fe.preload=function(y,x){if(typeof y=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var N=x.as,B=j(N,x.crossOrigin);c.d.L(y,N,{crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Fe.preloadModule=function(y,x){if(typeof y=="string")if(x){var N=j(x.as,x.crossOrigin);c.d.m(y,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:N,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(y)},Fe.requestFormReset=function(y){c.d.r(y)},Fe.unstable_batchedUpdates=function(y,x){return y(x)},Fe.useFormState=function(y,x,N){return h.H.useFormState(y,x,N)},Fe.useFormStatus=function(){return h.H.useHostTransitionStatus()},Fe.version="19.2.0",Fe}var rm;function cg(){if(rm)return Od.exports;rm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Od.exports=og(),Od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function ug(){if(sm)return Dr;sm=1;var i=dg(),o=qd(),m=cg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(g(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var s=a.return;if(s===null)break;var n=s.alternate;if(n===null){if(l=s.return,l!==null){a=l;continue}break}if(s.child===n.child){for(n=s.child;n;){if(n===a)return y(s),e;if(n===l)return y(s),t;n=n.sibling}throw Error(c(188))}if(a.return!==l.return)a=s,l=n;else{for(var d=!1,u=s.child;u;){if(u===a){d=!0,a=s,l=n;break}if(u===l){d=!0,l=s,a=n;break}u=u.sibling}if(!d){for(u=n.child;u;){if(u===a){d=!0,a=n,l=s;break}if(u===l){d=!0,l=n,a=s;break}u=u.sibling}if(!d)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,H=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),L=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),$e=Symbol.for("react.memo_cache_sentinel"),We=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=We&&e[We]||e["@@iterator"],typeof e=="function"?e:null)}var Ot=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case _:return"Profiler";case k:return"StrictMode";case ye:return"Suspense";case Me:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case L:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}var I=Array.isArray,E=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},oe=[],we=-1;function b(e){return{current:e}}function U(e){0>we||(e.current=oe[we],oe[we]=null,we--)}function G(e,t){we++,oe[we]=e.current,e.current=t}var K=b(null),te=b(null),re=b(null),ge=b(null);function Ie(e,t){switch(G(re,t),G(te,e),G(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bu(t),e=ku(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(K),G(K,e)}function Re(){U(K),U(te),U(re)}function ql(e){e.memoizedState!==null&&G(ge,e);var t=K.current,a=ku(t,e.type);t!==a&&(G(te,e),G(K,a))}function qr(e){te.current===e&&(U(K),U(te)),ge.current===e&&(U(ge),Er._currentValue=V)}var mn,Fd;function Ra(e){if(mn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);mn=t&&t[1]||"",Fd=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mn+e+Fd}var xn=!1;function fn(e,t){if(!e||xn)return"";xn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(M){var A=M}Reflect.construct(e,[],O)}else{try{O.call()}catch(M){A=M}e.call(O.prototype)}}else{try{throw Error()}catch(M){A=M}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(M){if(M&&A&&typeof M.stack=="string")return[M.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),d=n[0],u=n[1];if(d&&u){var p=d.split(`
`),S=u.split(`
`);for(s=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;if(l===p.length||s===S.length)for(l=p.length-1,s=S.length-1;1<=l&&0<=s&&p[l]!==S[s];)s--;for(;1<=l&&0<=s;l--,s--)if(p[l]!==S[s]){if(l!==1||s!==1)do if(l--,s--,0>s||p[l]!==S[s]){var R=`
`+p[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=s);break}}}finally{xn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ra(a):""}function Rm(e,t){switch(e.tag){case 26:case 27:case 5:return Ra(e.type);case 16:return Ra("Lazy");case 13:return e.child!==t&&t!==null?Ra("Suspense Fallback"):Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 15:return fn(e.type,!1);case 11:return fn(e.type.render,!1);case 1:return fn(e.type,!0);case 31:return Ra("Activity");default:return""}}function $d(e){try{var t="",a=null;do t+=Rm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var gn=Object.prototype.hasOwnProperty,pn=i.unstable_scheduleCallback,hn=i.unstable_cancelCallback,Dm=i.unstable_shouldYield,Om=i.unstable_requestPaint,it=i.unstable_now,Um=i.unstable_getCurrentPriorityLevel,Wd=i.unstable_ImmediatePriority,Id=i.unstable_UserBlockingPriority,Yr=i.unstable_NormalPriority,Lm=i.unstable_LowPriority,Pd=i.unstable_IdlePriority,_m=i.log,Hm=i.unstable_setDisableYieldValue,Yl=null,dt=null;function da(e){if(typeof _m=="function"&&Hm(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Yl,e)}catch{}}var ot=Math.clz32?Math.clz32:Qm,qm=Math.log,Ym=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(qm(e)/Ym|0)|0}var Qr=256,Xr=262144,Gr=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vr(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var s=0,n=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~n,l!==0?s=Da(l):(d&=u,d!==0?s=Da(d):a||(a=u&~e,a!==0&&(s=Da(a))))):(u=l&~n,u!==0?s=Da(u):d!==0?s=Da(d):a||(a=l&~e,a!==0&&(s=Da(a)))),s===0?0:t!==0&&t!==s&&(t&n)===0&&(n=s&-s,a=t&-t,n>=a||n===32&&(a&4194048)!==0)?t:s}function Ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eo(){var e=Gr;return Gr<<=1,(Gr&62914560)===0&&(Gr=4194304),e}function yn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gm(e,t,a,l,s,n){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,p=e.expirationTimes,S=e.hiddenUpdates;for(a=d&~a;0<a;){var R=31-ot(a),O=1<<R;u[R]=0,p[R]=-1;var A=S[R];if(A!==null)for(S[R]=null,R=0;R<A.length;R++){var M=A[R];M!==null&&(M.lane&=-536870913)}a&=~O}l!==0&&to(e,l,0),n!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=n&~(d&~t))}function to(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ao(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ot(a),s=1<<l;s&t|e[l]&t&&(e[l]|=t),a&=~s}}function lo(e,t){var a=t&-t;return a=(a&42)!==0?1:vn(a),(a&(e.suspendedLanes|t))!==0?0:a}function vn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ro(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Gu(e.type))}function so(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var oa=Math.random().toString(36).slice(2),Xe="__reactFiber$"+oa,et="__reactProps$"+oa,el="__reactContainer$"+oa,kn="__reactEvents$"+oa,Vm="__reactListeners$"+oa,Zm="__reactHandles$"+oa,no="__reactResources$"+oa,Gl="__reactMarker$"+oa;function wn(e){delete e[Xe],delete e[et],delete e[kn],delete e[Vm],delete e[Zm]}function tl(e){var t=e[Xe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[el]||a[Xe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Tu(e);e!==null;){if(a=e[Xe])return a;e=Tu(e)}return t}e=a,a=e.parentNode}return null}function al(e){if(e=e[Xe]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ll(e){var t=e[no];return t||(t=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Gl]=!0}var io=new Set,oo={};function Oa(e,t){rl(e,t),rl(e+"Capture",t)}function rl(e,t){for(oo[e]=t,e=0;e<t.length;e++)io.add(t[e])}var Km=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),co={},uo={};function Jm(e){return gn.call(uo,e)?!0:gn.call(co,e)?!1:Km.test(e)?uo[e]=!0:(co[e]=!0,!1)}function Zr(e,t,a){if(Jm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Kr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,n=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){a=""+d,n.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jn(e){if(!e._valueTracker){var t=mo(e)?"checked":"value";e._valueTracker=Fm(e,t,""+e[t])}}function xo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=mo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $m=/[\n"\\]/g;function bt(e){return e.replace($m,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nn(e,t,a,l,s,n,d,u){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Cn(e,d,vt(t)):a!=null?Cn(e,d,vt(a)):l!=null&&e.removeAttribute("value"),s==null&&n!=null&&(e.defaultChecked=!!n),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+vt(u):e.removeAttribute("name")}function fo(e,t,a,l,s,n,d,u){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){jn(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),jn(e)}function Cn(e,t,a){t==="number"&&Jr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sl(e,t,a,l){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function go(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function po(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(I(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),jn(e)}function nl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ho(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yo(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&a[s]!==l&&ho(e,s,l)}else for(var n in t)t.hasOwnProperty(n)&&ho(e,n,t[n])}function Sn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fr(e){return Pm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var An=null;function Tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,dl=null;function vo(e){var t=al(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var s=l[et]||null;if(!s)throw Error(c(90));Nn(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&xo(l)}break e;case"textarea":go(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&sl(e,!!a.multiple,t,!1)}}}var En=!1;function bo(e,t,a){if(En)return e(t,a);En=!0;try{var l=e(t);return l}finally{if(En=!1,(il!==null||dl!==null)&&(Us(),il&&(t=il,e=dl,dl=il=null,vo(t),e)))for(t=0;t<e.length;t++)vo(e[t])}}function Zl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[et]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zn=!1;if(Gt)try{var Kl={};Object.defineProperty(Kl,"passive",{get:function(){zn=!0}}),window.addEventListener("test",Kl,Kl),window.removeEventListener("test",Kl,Kl)}catch{zn=!1}var ca=null,Mn=null,$r=null;function ko(){if($r)return $r;var e,t=Mn,a=t.length,l,s="value"in ca?ca.value:ca.textContent,n=s.length;for(e=0;e<a&&t[e]===s[e];e++);var d=a-e;for(l=1;l<=d&&t[a-l]===s[n-l];l++);return $r=s.slice(e,1<l?1-l:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function wo(){return!1}function tt(e){function t(a,l,s,n,d){this._reactName=a,this._targetInst=s,this.type=l,this.nativeEvent=n,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(n):n[u]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ir:wo,this.isPropagationStopped=wo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pr=tt(Ua),Jl=B({},Ua,{view:0,detail:0}),ex=tt(Jl),Bn,Rn,Fl,es=B({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:On,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(Bn=e.screenX-Fl.screenX,Rn=e.screenY-Fl.screenY):Rn=Bn=0,Fl=e),Bn)},movementY:function(e){return"movementY"in e?e.movementY:Rn}}),jo=tt(es),tx=B({},es,{dataTransfer:0}),ax=tt(tx),lx=B({},Jl,{relatedTarget:0}),Dn=tt(lx),rx=B({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=tt(rx),nx=B({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ix=tt(nx),dx=B({},Ua,{data:0}),No=tt(dx),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ux[e])?!!t[e]:!1}function On(){return mx}var xx=B({},Jl,{key:function(e){if(e.key){var t=ox[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:On,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fx=tt(xx),gx=B({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=tt(gx),px=B({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:On}),hx=tt(px),yx=B({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=tt(yx),bx=B({},es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=tt(bx),wx=B({},Ua,{newState:0,oldState:0}),jx=tt(wx),Nx=[9,13,27,32],Un=Gt&&"CompositionEvent"in window,$l=null;Gt&&"documentMode"in document&&($l=document.documentMode);var Cx=Gt&&"TextEvent"in window&&!$l,So=Gt&&(!Un||$l&&8<$l&&11>=$l),Ao=" ",To=!1;function Eo(e,t){switch(e){case"keyup":return Nx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function Sx(e,t){switch(e){case"compositionend":return zo(t);case"keypress":return t.which!==32?null:(To=!0,Ao);case"textInput":return e=t.data,e===Ao&&To?null:e;default:return null}}function Ax(e,t){if(ol)return e==="compositionend"||!Un&&Eo(e,t)?(e=ko(),$r=Mn=ca=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return So&&t.locale!=="ko"?null:t.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tx[e.type]:t==="textarea"}function Bo(e,t,a,l){il?dl?dl.push(l):dl=[l]:il=l,t=Xs(t,"onChange"),0<t.length&&(a=new Pr("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Wl=null,Il=null;function Ex(e){fu(e,0)}function ts(e){var t=Vl(e);if(xo(t))return e}function Ro(e,t){if(e==="change")return t}var Do=!1;if(Gt){var Ln;if(Gt){var _n="oninput"in document;if(!_n){var Oo=document.createElement("div");Oo.setAttribute("oninput","return;"),_n=typeof Oo.oninput=="function"}Ln=_n}else Ln=!1;Do=Ln&&(!document.documentMode||9<document.documentMode)}function Uo(){Wl&&(Wl.detachEvent("onpropertychange",Lo),Il=Wl=null)}function Lo(e){if(e.propertyName==="value"&&ts(Il)){var t=[];Bo(t,Il,e,Tn(e)),bo(Ex,t)}}function zx(e,t,a){e==="focusin"?(Uo(),Wl=t,Il=a,Wl.attachEvent("onpropertychange",Lo)):e==="focusout"&&Uo()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ts(Il)}function Bx(e,t){if(e==="click")return ts(t)}function Rx(e,t){if(e==="input"||e==="change")return ts(t)}function Dx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Dx;function Pl(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var s=a[l];if(!gn.call(t,s)||!ct(e[s],t[s]))return!1}return!0}function _o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ho(e,t){var a=_o(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_o(a)}}function qo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ox=Gt&&"documentMode"in document&&11>=document.documentMode,cl=null,qn=null,er=null,Yn=!1;function Qo(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yn||cl==null||cl!==Jr(l)||(l=cl,"selectionStart"in l&&Hn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),er&&Pl(er,l)||(er=l,l=Xs(qn,"onSelect"),0<l.length&&(t=new Pr("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=cl)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ul={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Qn={},Xo={};Gt&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function _a(e){if(Qn[e])return Qn[e];if(!ul[e])return e;var t=ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Xo)return Qn[e]=t[a];return e}var Go=_a("animationend"),Vo=_a("animationiteration"),Zo=_a("animationstart"),Ux=_a("transitionrun"),Lx=_a("transitionstart"),_x=_a("transitioncancel"),Ko=_a("transitionend"),Jo=new Map,Xn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xn.push("scrollEnd");function zt(e,t){Jo.set(e,t),Oa(t,[e])}var as=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],ml=0,Gn=0;function ls(){for(var e=ml,t=Gn=ml=0;t<e;){var a=kt[t];kt[t++]=null;var l=kt[t];kt[t++]=null;var s=kt[t];kt[t++]=null;var n=kt[t];if(kt[t++]=null,l!==null&&s!==null){var d=l.pending;d===null?s.next=s:(s.next=d.next,d.next=s),l.pending=s}n!==0&&Fo(a,s,n)}}function rs(e,t,a,l){kt[ml++]=e,kt[ml++]=t,kt[ml++]=a,kt[ml++]=l,Gn|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Vn(e,t,a,l){return rs(e,t,a,l),ss(e)}function Ha(e,t){return rs(e,null,null,t),ss(e)}function Fo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var s=!1,n=e.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(s=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,s&&t!==null&&(s=31-ot(a),e=n.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=a|536870912),n):null}function ss(e){if(50<wr)throw wr=0,ed=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xl={};function Hx(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,a,l){return new Hx(e,t,a,l)}function Zn(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vt(e,t){var a=e.alternate;return a===null?(a=ut(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $o(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ns(e,t,a,l,s,n){var d=0;if(l=e,typeof e=="function")Zn(e)&&(d=1);else if(typeof e=="string")d=Vf(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=ut(31,a,t,s),e.elementType=Ne,e.lanes=n,e;case X:return qa(a.children,s,n,t);case k:d=8,s|=24;break;case _:return e=ut(12,a,t,s|2),e.elementType=_,e.lanes=n,e;case ye:return e=ut(13,a,t,s),e.elementType=ye,e.lanes=n,e;case Me:return e=ut(19,a,t,s),e.elementType=Me,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:d=10;break e;case T:d=9;break e;case ue:d=11;break e;case P:d=14;break e;case Be:d=16,l=null;break e}d=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=ut(d,a,t,s),t.elementType=e,t.type=l,t.lanes=n,t}function qa(e,t,a,l){return e=ut(7,e,l,t),e.lanes=a,e}function Kn(e,t,a){return e=ut(6,e,null,t),e.lanes=a,e}function Wo(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function Jn(e,t,a){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Io=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=Io.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$d(t)},Io.set(e,t),t)}return{value:e,source:t,stack:$d(t)}}var fl=[],gl=0,is=null,tr=0,jt=[],Nt=0,ua=null,Ut=1,Lt="";function Zt(e,t){fl[gl++]=tr,fl[gl++]=is,is=e,tr=t}function Po(e,t,a){jt[Nt++]=Ut,jt[Nt++]=Lt,jt[Nt++]=ua,ua=e;var l=Ut;e=Lt;var s=32-ot(l)-1;l&=~(1<<s),a+=1;var n=32-ot(t)+s;if(30<n){var d=s-s%5;n=(l&(1<<d)-1).toString(32),l>>=d,s-=d,Ut=1<<32-ot(t)+s|a<<s|l,Lt=n+e}else Ut=1<<n|a<<s|l,Lt=e}function Fn(e){e.return!==null&&(Zt(e,1),Po(e,1,0))}function $n(e){for(;e===is;)is=fl[--gl],fl[gl]=null,tr=fl[--gl],fl[gl]=null;for(;e===ua;)ua=jt[--Nt],jt[Nt]=null,Lt=jt[--Nt],jt[Nt]=null,Ut=jt[--Nt],jt[Nt]=null}function e0(e,t){jt[Nt++]=Ut,jt[Nt++]=Lt,jt[Nt++]=ua,Ut=t.id,Lt=t.overflow,ua=e}var Ge=null,Ce=null,ce=!1,ma=null,Ct=!1,Wn=Error(c(519));function xa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ar(wt(t,e)),Wn}function t0(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Xe]=e,t[et]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<Nr.length;a++)ne(Nr[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),fo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),po(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||yu(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||xa(e,!0)}function a0(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Ge=Ge.return}}function pl(e){if(e!==Ge)return!1;if(!ce)return a0(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gd(e.type,e.memoizedProps)),a=!a),a&&Ce&&xa(e),a0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ce=Au(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ce=Au(e)}else t===27?(t=Ce,Aa(e.type)?(e=bd,bd=null,Ce=e):Ce=t):Ce=Ge?At(e.stateNode.nextSibling):null;return!0}function Ya(){Ce=Ge=null,ce=!1}function In(){var e=ma;return e!==null&&(st===null?st=e:st.push.apply(st,e),ma=null),e}function ar(e){ma===null?ma=[e]:ma.push(e)}var Pn=b(null),Qa=null,Kt=null;function fa(e,t,a){G(Pn,t._currentValue),t._currentValue=a}function Jt(e){e._currentValue=Pn.current,U(Pn)}function ei(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ti(e,t,a,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var n=s.dependencies;if(n!==null){var d=s.child;n=n.firstContext;e:for(;n!==null;){var u=n;n=s;for(var p=0;p<t.length;p++)if(u.context===t[p]){n.lanes|=a,u=n.alternate,u!==null&&(u.lanes|=a),ei(n.return,a,e),l||(d=null);break e}n=u.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(c(341));d.lanes|=a,n=d.alternate,n!==null&&(n.lanes|=a),ei(d,a,e),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===e){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function hl(e,t,a,l){e=null;for(var s=t,n=!1;s!==null;){if(!n){if((s.flags&524288)!==0)n=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var u=s.type;ct(s.pendingProps.value,d.value)||(e!==null?e.push(u):e=[u])}}else if(s===ge.current){if(d=s.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Er):e=[Er])}s=s.return}e!==null&&ti(t,e,a,l),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Qa=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return l0(Qa,e)}function os(e,t){return Qa===null&&Xa(e),l0(e,t)}function l0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Kt===null){if(e===null)throw Error(c(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return a}var qx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yx=i.unstable_scheduleCallback,Qx=i.unstable_NormalPriority,Ue={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ai(){return{controller:new qx,data:new Map,refCount:0}}function lr(e){e.refCount--,e.refCount===0&&Yx(Qx,function(){e.controller.abort()})}var rr=null,li=0,yl=0,vl=null;function Xx(e,t){if(rr===null){var a=rr=[];li=0,yl=nd(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return li++,t.then(r0,r0),t}function r0(){if(--li===0&&rr!==null){vl!==null&&(vl.status="fulfilled");var e=rr;rr=null,yl=0,vl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Gx(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),l}var s0=E.S;E.S=function(e,t){Qc=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xx(e,t),s0!==null&&s0(e,t)};var Ga=b(null);function ri(){var e=Ga.current;return e!==null?e:je.pooledCache}function cs(e,t){t===null?G(Ga,Ga.current):G(Ga,t.pool)}function n0(){var e=ri();return e===null?null:{parent:Ue._currentValue,pool:e}}var bl=Error(c(460)),si=Error(c(474)),us=Error(c(542)),ms={then:function(){}};function i0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Xt,Xt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,c0(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,c0(e),e}throw Za=t,bl}}function Va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,bl):a}}var Za=null;function o0(){if(Za===null)throw Error(c(459));var e=Za;return Za=null,e}function c0(e){if(e===bl||e===us)throw Error(c(483))}var kl=null,sr=0;function xs(e){var t=sr;return sr+=1,kl===null&&(kl=[]),d0(kl,e,t)}function nr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fs(e,t){throw t.$$typeof===H?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function u0(e){function t(w,v){if(e){var C=w.deletions;C===null?(w.deletions=[v],w.flags|=16):C.push(v)}}function a(w,v){if(!e)return null;for(;v!==null;)t(w,v),v=v.sibling;return null}function l(w){for(var v=new Map;w!==null;)w.key!==null?v.set(w.key,w):v.set(w.index,w),w=w.sibling;return v}function s(w,v){return w=Vt(w,v),w.index=0,w.sibling=null,w}function n(w,v,C){return w.index=C,e?(C=w.alternate,C!==null?(C=C.index,C<v?(w.flags|=67108866,v):C):(w.flags|=67108866,v)):(w.flags|=1048576,v)}function d(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function u(w,v,C,D){return v===null||v.tag!==6?(v=Kn(C,w.mode,D),v.return=w,v):(v=s(v,C),v.return=w,v)}function p(w,v,C,D){var F=C.type;return F===X?R(w,v,C.props.children,D,C.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Be&&Va(F)===v.type)?(v=s(v,C.props),nr(v,C),v.return=w,v):(v=ns(C.type,C.key,C.props,null,w.mode,D),nr(v,C),v.return=w,v)}function S(w,v,C,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Jn(C,w.mode,D),v.return=w,v):(v=s(v,C.children||[]),v.return=w,v)}function R(w,v,C,D,F){return v===null||v.tag!==7?(v=qa(C,w.mode,D,F),v.return=w,v):(v=s(v,C),v.return=w,v)}function O(w,v,C){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Kn(""+v,w.mode,C),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return C=ns(v.type,v.key,v.props,null,w.mode,C),nr(C,v),C.return=w,C;case Q:return v=Jn(v,w.mode,C),v.return=w,v;case Be:return v=Va(v),O(w,v,C)}if(I(v)||Je(v))return v=qa(v,w.mode,C,null),v.return=w,v;if(typeof v.then=="function")return O(w,xs(v),C);if(v.$$typeof===L)return O(w,os(w,v),C);fs(w,v)}return null}function A(w,v,C,D){var F=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return F!==null?null:u(w,v,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case q:return C.key===F?p(w,v,C,D):null;case Q:return C.key===F?S(w,v,C,D):null;case Be:return C=Va(C),A(w,v,C,D)}if(I(C)||Je(C))return F!==null?null:R(w,v,C,D,null);if(typeof C.then=="function")return A(w,v,xs(C),D);if(C.$$typeof===L)return A(w,v,os(w,C),D);fs(w,C)}return null}function M(w,v,C,D,F){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return w=w.get(C)||null,u(v,w,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case q:return w=w.get(D.key===null?C:D.key)||null,p(v,w,D,F);case Q:return w=w.get(D.key===null?C:D.key)||null,S(v,w,D,F);case Be:return D=Va(D),M(w,v,C,D,F)}if(I(D)||Je(D))return w=w.get(C)||null,R(v,w,D,F,null);if(typeof D.then=="function")return M(w,v,C,xs(D),F);if(D.$$typeof===L)return M(w,v,C,os(v,D),F);fs(v,D)}return null}function Z(w,v,C,D){for(var F=null,me=null,J=v,le=v=0,de=null;J!==null&&le<C.length;le++){J.index>le?(de=J,J=null):de=J.sibling;var xe=A(w,J,C[le],D);if(xe===null){J===null&&(J=de);break}e&&J&&xe.alternate===null&&t(w,J),v=n(xe,v,le),me===null?F=xe:me.sibling=xe,me=xe,J=de}if(le===C.length)return a(w,J),ce&&Zt(w,le),F;if(J===null){for(;le<C.length;le++)J=O(w,C[le],D),J!==null&&(v=n(J,v,le),me===null?F=J:me.sibling=J,me=J);return ce&&Zt(w,le),F}for(J=l(J);le<C.length;le++)de=M(J,w,le,C[le],D),de!==null&&(e&&de.alternate!==null&&J.delete(de.key===null?le:de.key),v=n(de,v,le),me===null?F=de:me.sibling=de,me=de);return e&&J.forEach(function(Ba){return t(w,Ba)}),ce&&Zt(w,le),F}function W(w,v,C,D){if(C==null)throw Error(c(151));for(var F=null,me=null,J=v,le=v=0,de=null,xe=C.next();J!==null&&!xe.done;le++,xe=C.next()){J.index>le?(de=J,J=null):de=J.sibling;var Ba=A(w,J,xe.value,D);if(Ba===null){J===null&&(J=de);break}e&&J&&Ba.alternate===null&&t(w,J),v=n(Ba,v,le),me===null?F=Ba:me.sibling=Ba,me=Ba,J=de}if(xe.done)return a(w,J),ce&&Zt(w,le),F;if(J===null){for(;!xe.done;le++,xe=C.next())xe=O(w,xe.value,D),xe!==null&&(v=n(xe,v,le),me===null?F=xe:me.sibling=xe,me=xe);return ce&&Zt(w,le),F}for(J=l(J);!xe.done;le++,xe=C.next())xe=M(J,w,le,xe.value,D),xe!==null&&(e&&xe.alternate!==null&&J.delete(xe.key===null?le:xe.key),v=n(xe,v,le),me===null?F=xe:me.sibling=xe,me=xe);return e&&J.forEach(function(ag){return t(w,ag)}),ce&&Zt(w,le),F}function ke(w,v,C,D){if(typeof C=="object"&&C!==null&&C.type===X&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case q:e:{for(var F=C.key;v!==null;){if(v.key===F){if(F=C.type,F===X){if(v.tag===7){a(w,v.sibling),D=s(v,C.props.children),D.return=w,w=D;break e}}else if(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Be&&Va(F)===v.type){a(w,v.sibling),D=s(v,C.props),nr(D,C),D.return=w,w=D;break e}a(w,v);break}else t(w,v);v=v.sibling}C.type===X?(D=qa(C.props.children,w.mode,D,C.key),D.return=w,w=D):(D=ns(C.type,C.key,C.props,null,w.mode,D),nr(D,C),D.return=w,w=D)}return d(w);case Q:e:{for(F=C.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){a(w,v.sibling),D=s(v,C.children||[]),D.return=w,w=D;break e}else{a(w,v);break}else t(w,v);v=v.sibling}D=Jn(C,w.mode,D),D.return=w,w=D}return d(w);case Be:return C=Va(C),ke(w,v,C,D)}if(I(C))return Z(w,v,C,D);if(Je(C)){if(F=Je(C),typeof F!="function")throw Error(c(150));return C=F.call(C),W(w,v,C,D)}if(typeof C.then=="function")return ke(w,v,xs(C),D);if(C.$$typeof===L)return ke(w,v,os(w,C),D);fs(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,v!==null&&v.tag===6?(a(w,v.sibling),D=s(v,C),D.return=w,w=D):(a(w,v),D=Kn(C,w.mode,D),D.return=w,w=D),d(w)):a(w,v)}return function(w,v,C,D){try{sr=0;var F=ke(w,v,C,D);return kl=null,F}catch(J){if(J===bl||J===us)throw J;var me=ut(29,J,null,w.mode);return me.lanes=D,me.return=w,me}finally{}}}var Ka=u0(!0),m0=u0(!1),ga=!1;function ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=ss(e),Fo(e,null,a),t}return rs(e,l,t,a),ss(e)}function ir(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ao(e,a)}}function di(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var s=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?s=n=d:n=n.next=d,a=a.next}while(a!==null);n===null?s=n=t:n=n.next=t}else s=n=t;a={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var oi=!1;function dr(){if(oi){var e=vl;if(e!==null)throw e}}function or(e,t,a,l){oi=!1;var s=e.updateQueue;ga=!1;var n=s.firstBaseUpdate,d=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var p=u,S=p.next;p.next=null,d===null?n=S:d.next=S,d=p;var R=e.alternate;R!==null&&(R=R.updateQueue,u=R.lastBaseUpdate,u!==d&&(u===null?R.firstBaseUpdate=S:u.next=S,R.lastBaseUpdate=p))}if(n!==null){var O=s.baseState;d=0,R=S=p=null,u=n;do{var A=u.lane&-536870913,M=A!==u.lane;if(M?(ie&A)===A:(l&A)===A){A!==0&&A===yl&&(oi=!0),R!==null&&(R=R.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var Z=e,W=u;A=t;var ke=a;switch(W.tag){case 1:if(Z=W.payload,typeof Z=="function"){O=Z.call(ke,O,A);break e}O=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=W.payload,A=typeof Z=="function"?Z.call(ke,O,A):Z,A==null)break e;O=B({},O,A);break e;case 2:ga=!0}}A=u.callback,A!==null&&(e.flags|=64,M&&(e.flags|=8192),M=s.callbacks,M===null?s.callbacks=[A]:M.push(A))}else M={lane:A,tag:u.tag,payload:u.payload,callback:u.callback,next:null},R===null?(S=R=M,p=O):R=R.next=M,d|=A;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;M=u,u=M.next,M.next=null,s.lastBaseUpdate=M,s.shared.pending=null}}while(!0);R===null&&(p=O),s.baseState=p,s.firstBaseUpdate=S,s.lastBaseUpdate=R,n===null&&(s.shared.lanes=0),wa|=d,e.lanes=d,e.memoizedState=O}}function x0(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function f0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)x0(a[e],t)}var wl=b(null),gs=b(0);function g0(e,t){e=la,G(gs,e),G(wl,t),la=e|t.baseLanes}function ci(){G(gs,la),G(wl,wl.current)}function ui(){la=gs.current,U(wl),U(gs)}var mt=b(null),St=null;function ya(e){var t=e.alternate;G(De,De.current&1),G(mt,e),St===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(St=e)}function mi(e){G(De,De.current),G(mt,e),St===null&&(St=e)}function p0(e){e.tag===22?(G(De,De.current),G(mt,e),St===null&&(St=e)):va()}function va(){G(De,De.current),G(mt,mt.current)}function xt(e){U(mt),St===e&&(St=null),U(De)}var De=b(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yd(a)||vd(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,ae=null,ve=null,Le=null,hs=!1,jl=!1,Ja=!1,ys=0,cr=0,Nl=null,Vx=0;function Ee(){throw Error(c(321))}function xi(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function fi(e,t,a,l,s,n){return Ft=n,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?P0:Ei,Ja=!1,n=a(l,s),Ja=!1,jl&&(n=y0(t,a,l,s)),h0(e),n}function h0(e){E.H=xr;var t=ve!==null&&ve.next!==null;if(Ft=0,Le=ve=ae=null,hs=!1,cr=0,Nl=null,t)throw Error(c(300));e===null||_e||(e=e.dependencies,e!==null&&ds(e)&&(_e=!0))}function y0(e,t,a,l){ae=e;var s=0;do{if(jl&&(Nl=null),cr=0,jl=!1,25<=s)throw Error(c(301));if(s+=1,Le=ve=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}E.H=ec,n=t(a,l)}while(jl);return n}function Zx(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?ur(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ae.flags|=1024),t}function gi(){var e=ys!==0;return ys=0,e}function pi(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function hi(e){if(hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hs=!1}Ft=0,Le=ve=ae=null,jl=!1,cr=ys=0,Nl=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ae.memoizedState=Le=e:Le=Le.next=e,Le}function Oe(){if(ve===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Le===null?ae.memoizedState:Le.next;if(t!==null)Le=t,ve=e;else{if(e===null)throw ae.alternate===null?Error(c(467)):Error(c(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Le===null?ae.memoizedState=Le=e:Le=Le.next=e}return Le}function vs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ur(e){var t=cr;return cr+=1,Nl===null&&(Nl=[]),e=d0(Nl,e,t),t=ae,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?P0:Ei),e}function bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ur(e);if(e.$$typeof===L)return Ve(e)}throw Error(c(438,String(e)))}function yi(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vs(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=$e;return t.index++,a}function $t(e,t){return typeof t=="function"?t(e):t}function ks(e){var t=Oe();return vi(t,ve,e)}function vi(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var s=e.baseQueue,n=l.pending;if(n!==null){if(s!==null){var d=s.next;s.next=n.next,n.next=d}t.baseQueue=s=n,l.pending=null}if(n=e.baseState,s===null)e.memoizedState=n;else{t=s.next;var u=d=null,p=null,S=t,R=!1;do{var O=S.lane&-536870913;if(O!==S.lane?(ie&O)===O:(Ft&O)===O){var A=S.revertLane;if(A===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),O===yl&&(R=!0);else if((Ft&A)===A){S=S.next,A===yl&&(R=!0);continue}else O={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(u=p=O,d=n):p=p.next=O,ae.lanes|=A,wa|=A;O=S.action,Ja&&a(n,O),n=S.hasEagerState?S.eagerState:a(n,O)}else A={lane:O,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(u=p=A,d=n):p=p.next=A,ae.lanes|=O,wa|=O;S=S.next}while(S!==null&&S!==t);if(p===null?d=n:p.next=u,!ct(n,e.memoizedState)&&(_e=!0,R&&(a=vl,a!==null)))throw a;e.memoizedState=n,e.baseState=d,e.baseQueue=p,l.lastRenderedState=n}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function bi(e){var t=Oe(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,s=a.pending,n=t.memoizedState;if(s!==null){a.pending=null;var d=s=s.next;do n=e(n,d.action),d=d.next;while(d!==s);ct(n,t.memoizedState)||(_e=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,l]}function v0(e,t,a){var l=ae,s=Oe(),n=ce;if(n){if(a===void 0)throw Error(c(407));a=a()}else a=t();var d=!ct((ve||s).memoizedState,a);if(d&&(s.memoizedState=a,_e=!0),s=s.queue,ji(w0.bind(null,l,s,e),[e]),s.getSnapshot!==t||d||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},k0.bind(null,l,s,a,t),null),je===null)throw Error(c(349));n||(Ft&127)!==0||b0(l,t,a)}return a}function b0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=vs(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function k0(e,t,a,l){t.value=a,t.getSnapshot=l,j0(t)&&N0(e)}function w0(e,t,a){return a(function(){j0(t)&&N0(e)})}function j0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch{return!0}}function N0(e){var t=Ha(e,2);t!==null&&nt(t,e,2)}function ki(e){var t=Pe();if(typeof e=="function"){var a=e;if(e=a(),Ja){da(!0);try{a()}finally{da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function C0(e,t,a,l){return e.baseState=a,vi(e,ve,typeof l=="function"?l:$t)}function Kx(e,t,a,l,s){if(Ns(e))throw Error(c(485));if(e=t.action,e!==null){var n={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){n.listeners.push(d)}};E.T!==null?a(!0):n.isTransition=!1,l(n),a=t.pending,a===null?(n.next=t.pending=n,S0(t,n)):(n.next=a.next,t.pending=a.next=n)}}function S0(e,t){var a=t.action,l=t.payload,s=e.state;if(t.isTransition){var n=E.T,d={};E.T=d;try{var u=a(s,l),p=E.S;p!==null&&p(d,u),A0(e,t,u)}catch(S){wi(e,t,S)}finally{n!==null&&d.types!==null&&(n.types=d.types),E.T=n}}else try{n=a(s,l),A0(e,t,n)}catch(S){wi(e,t,S)}}function A0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){T0(e,t,l)},function(l){return wi(e,t,l)}):T0(e,t,a)}function T0(e,t,a){t.status="fulfilled",t.value=a,E0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,S0(e,a)))}function wi(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,E0(t),t=t.next;while(t!==l)}e.action=null}function E0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function z0(e,t){return t}function M0(e,t){if(ce){var a=je.formState;if(a!==null){e:{var l=ae;if(ce){if(Ce){t:{for(var s=Ce,n=Ct;s.nodeType!==8;){if(!n){s=null;break t}if(s=At(s.nextSibling),s===null){s=null;break t}}n=s.data,s=n==="F!"||n==="F"?s:null}if(s){Ce=At(s.nextSibling),l=s.data==="F!";break e}}xa(l)}l=!1}l&&(t=a[0])}}return a=Pe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z0,lastRenderedState:t},a.queue=l,a=$0.bind(null,ae,l),l.dispatch=a,l=ki(!1),n=Ti.bind(null,ae,!1,l.queue),l=Pe(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,a=Kx.bind(null,ae,s,n,a),s.dispatch=a,l.memoizedState=e,[t,a,!1]}function B0(e){var t=Oe();return R0(t,ve,e)}function R0(e,t,a){if(t=vi(e,t,z0)[0],e=ks($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ur(t)}catch(d){throw d===bl?us:d}else l=t;t=Oe();var s=t.queue,n=s.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,Cl(9,{destroy:void 0},Jx.bind(null,s,a),null)),[l,n,e]}function Jx(e,t){e.action=t}function D0(e){var t=Oe(),a=ve;if(a!==null)return R0(t,a,e);Oe(),t=t.memoizedState,a=Oe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=vs(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function O0(){return Oe().memoizedState}function ws(e,t,a,l){var s=Pe();ae.flags|=e,s.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function js(e,t,a,l){var s=Oe();l=l===void 0?null:l;var n=s.memoizedState.inst;ve!==null&&l!==null&&xi(l,ve.memoizedState.deps)?s.memoizedState=Cl(t,n,a,l):(ae.flags|=e,s.memoizedState=Cl(1|t,n,a,l))}function U0(e,t){ws(8390656,8,e,t)}function ji(e,t){js(2048,8,e,t)}function Fx(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=vs(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function L0(e){var t=Oe().memoizedState;return Fx({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function _0(e,t){return js(4,2,e,t)}function H0(e,t){return js(4,4,e,t)}function q0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y0(e,t,a){a=a!=null?a.concat([e]):null,js(4,4,q0.bind(null,t,e),a)}function Ni(){}function Q0(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&xi(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function X0(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&xi(t,l[1]))return l[0];if(l=e(),Ja){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l}function Ci(e,t,a){return a===void 0||(Ft&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Gc(),ae.lanes|=e,wa|=e,a)}function G0(e,t,a,l){return ct(a,t)?a:wl.current!==null?(e=Ci(e,a,l),ct(e,t)||(_e=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(ie&261930)===0?(_e=!0,e.memoizedState=a):(e=Gc(),ae.lanes|=e,wa|=e,t)}function V0(e,t,a,l,s){var n=Y.p;Y.p=n!==0&&8>n?n:8;var d=E.T,u={};E.T=u,Ti(e,!1,t,a);try{var p=s(),S=E.S;if(S!==null&&S(u,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var R=Gx(p,l);mr(e,t,R,pt(e))}else mr(e,t,l,pt(e))}catch(O){mr(e,t,{then:function(){},status:"rejected",reason:O},pt())}finally{Y.p=n,d!==null&&u.types!==null&&(d.types=u.types),E.T=d}}function $x(){}function Si(e,t,a,l){if(e.tag!==5)throw Error(c(476));var s=Z0(e).queue;V0(e,s,t,V,a===null?$x:function(){return K0(e),a(l)})}function Z0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function K0(e){var t=Z0(e);t.next===null&&(t=e.alternate.memoizedState),mr(e,t.next.queue,{},pt())}function Ai(){return Ve(Er)}function J0(){return Oe().memoizedState}function F0(){return Oe().memoizedState}function Wx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=pa(a);var l=ha(t,e,a);l!==null&&(nt(l,t,a),ir(l,t,a)),t={cache:ai()},e.payload=t;return}t=t.return}}function Ix(e,t,a){var l=pt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ns(e)?W0(t,a):(a=Vn(e,t,a,l),a!==null&&(nt(a,e,l),I0(a,t,l)))}function $0(e,t,a){var l=pt();mr(e,t,a,l)}function mr(e,t,a,l){var s={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))W0(t,s);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var d=t.lastRenderedState,u=n(d,a);if(s.hasEagerState=!0,s.eagerState=u,ct(u,d))return rs(e,t,s,0),je===null&&ls(),!1}catch{}finally{}if(a=Vn(e,t,s,l),a!==null)return nt(a,e,l),I0(a,t,l),!0}return!1}function Ti(e,t,a,l){if(l={lane:2,revertLane:nd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(c(479))}else t=Vn(e,a,l,2),t!==null&&nt(t,e,2)}function Ns(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function W0(e,t){jl=hs=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function I0(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ao(e,a)}}var xr={readContext:Ve,use:bs,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee};xr.useEffectEvent=Ee;var P0={readContext:Ve,use:bs,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:U0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ws(4194308,4,q0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){ws(4,2,e,t)},useMemo:function(e,t){var a=Pe();t=t===void 0?null:t;var l=e();if(Ja){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Pe();if(a!==void 0){var s=a(t);if(Ja){da(!0);try{a(t)}finally{da(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=Ix.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=ki(e);var t=e.queue,a=$0.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ni,useDeferredValue:function(e,t){var a=Pe();return Ci(a,e,t)},useTransition:function(){var e=ki(!1);return e=V0.bind(null,ae,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,s=Pe();if(ce){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),je===null)throw Error(c(349));(ie&127)!==0||b0(l,t,a)}s.memoizedState=a;var n={value:a,getSnapshot:t};return s.queue=n,U0(w0.bind(null,l,n,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},k0.bind(null,l,n,a,t),null),a},useId:function(){var e=Pe(),t=je.identifierPrefix;if(ce){var a=Lt,l=Ut;a=(l&~(1<<32-ot(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ys++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Vx++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ai,useFormState:M0,useActionState:M0,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ti.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:yi,useCacheRefresh:function(){return Pe().memoizedState=Wx.bind(null,ae)},useEffectEvent:function(e){var t=Pe(),a={impl:e};return t.memoizedState=a,function(){if((fe&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Ei={readContext:Ve,use:bs,useCallback:Q0,useContext:Ve,useEffect:ji,useImperativeHandle:Y0,useInsertionEffect:_0,useLayoutEffect:H0,useMemo:X0,useReducer:ks,useRef:O0,useState:function(){return ks($t)},useDebugValue:Ni,useDeferredValue:function(e,t){var a=Oe();return G0(a,ve.memoizedState,e,t)},useTransition:function(){var e=ks($t)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:ur(e),t]},useSyncExternalStore:v0,useId:J0,useHostTransitionStatus:Ai,useFormState:B0,useActionState:B0,useOptimistic:function(e,t){var a=Oe();return C0(a,ve,e,t)},useMemoCache:yi,useCacheRefresh:F0};Ei.useEffectEvent=L0;var ec={readContext:Ve,use:bs,useCallback:Q0,useContext:Ve,useEffect:ji,useImperativeHandle:Y0,useInsertionEffect:_0,useLayoutEffect:H0,useMemo:X0,useReducer:bi,useRef:O0,useState:function(){return bi($t)},useDebugValue:Ni,useDeferredValue:function(e,t){var a=Oe();return ve===null?Ci(a,e,t):G0(a,ve.memoizedState,e,t)},useTransition:function(){var e=bi($t)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:ur(e),t]},useSyncExternalStore:v0,useId:J0,useHostTransitionStatus:Ai,useFormState:D0,useActionState:D0,useOptimistic:function(e,t){var a=Oe();return ve!==null?C0(a,ve,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yi,useCacheRefresh:F0};ec.useEffectEvent=L0;function zi(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:B({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mi={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),s=pa(l);s.payload=t,a!=null&&(s.callback=a),t=ha(e,s,l),t!==null&&(nt(t,e,l),ir(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),s=pa(l);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=ha(e,s,l),t!==null&&(nt(t,e,l),ir(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=ha(e,l,a),t!==null&&(nt(t,e,a),ir(t,e,a))}};function tc(e,t,a,l,s,n,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,d):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(s,n):!0}function ac(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Mi.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=B({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function lc(e){as(e)}function rc(e){console.error(e)}function sc(e){as(e)}function Cs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function nc(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Bi(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cs(e,t)},a}function ic(e){return e=pa(e),e.tag=3,e}function dc(e,t,a,l){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var n=l.value;e.payload=function(){return s(n)},e.callback=function(){nc(t,a,l)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){nc(t,a,l),typeof s!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Px(e,t,a,l,s){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&hl(t,a,s,!0),a=mt.current,a!==null){switch(a.tag){case 31:case 13:return St===null?Ls():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=s,l===ms?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ld(e,l,s)),!1;case 22:return a.flags|=65536,l===ms?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ld(e,l,s)),!1}throw Error(c(435,a.tag))}return ld(e,l,s),Ls(),!1}if(ce)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==Wn&&(e=Error(c(422),{cause:l}),ar(wt(e,a)))):(l!==Wn&&(t=Error(c(423),{cause:l}),ar(wt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=wt(l,a),s=Bi(e.stateNode,l,s),di(e,s),ze!==4&&(ze=2)),!1;var n=Error(c(520),{cause:l});if(n=wt(n,a),kr===null?kr=[n]:kr.push(n),ze!==4&&(ze=2),t===null)return!0;l=wt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Bi(a.stateNode,l,e),di(a,e),!1;case 1:if(t=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(ja===null||!ja.has(n))))return a.flags|=65536,s&=-s,a.lanes|=s,s=ic(s),dc(s,e,a,l),di(a,s),!1}a=a.return}while(a!==null);return!1}var Ri=Error(c(461)),_e=!1;function Ze(e,t,a,l){t.child=e===null?m0(t,null,a,l):Ka(t,e.child,a,l)}function oc(e,t,a,l,s){a=a.render;var n=t.ref;if("ref"in l){var d={};for(var u in l)u!=="ref"&&(d[u]=l[u])}else d=l;return Xa(t),l=fi(e,t,a,d,n,s),u=gi(),e!==null&&!_e?(pi(e,t,s),Wt(e,t,s)):(ce&&u&&Fn(t),t.flags|=1,Ze(e,t,l,s),t.child)}function cc(e,t,a,l,s){if(e===null){var n=a.type;return typeof n=="function"&&!Zn(n)&&n.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=n,uc(e,t,n,l,s)):(e=ns(a.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!Yi(e,s)){var d=n.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(d,l)&&e.ref===t.ref)return Wt(e,t,s)}return t.flags|=1,e=Vt(n,l),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,a,l,s){if(e!==null){var n=e.memoizedProps;if(Pl(n,l)&&e.ref===t.ref)if(_e=!1,t.pendingProps=l=n,Yi(e,s))(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,Wt(e,t,s)}return Di(e,t,a,l,s)}function mc(e,t,a,l){var s=l.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~n}else l=0,t.child=null;return xc(e,t,n,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cs(t,n!==null?n.cachePool:null),n!==null?g0(t,n):ci(),p0(t);else return l=t.lanes=536870912,xc(e,t,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(cs(t,n.cachePool),g0(t,n),va(),t.memoizedState=null):(e!==null&&cs(t,null),ci(),va());return Ze(e,t,s,a),t.child}function fr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function xc(e,t,a,l,s){var n=ri();return n=n===null?null:{parent:Ue._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&cs(t,null),ci(),p0(t),e!==null&&hl(e,t,l,!0),t.childLanes=s,null}function Ss(e,t){return t=Ts({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,a){return Ka(t,e.child,null,a),e=Ss(t,t.pendingProps),e.flags|=2,xt(t),t.memoizedState=null,e}function ef(e,t,a){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=Ss(t,l),t.lanes=536870912,fr(null,e);if(mi(t),(e=Ce)?(e=Su(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Ut,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=Wo(e),a.return=t,t.child=a,Ge=t,Ce=null)):e=null,e===null)throw xa(t);return t.lanes=536870912,null}return Ss(t,l)}var n=e.memoizedState;if(n!==null){var d=n.dehydrated;if(mi(t),s)if(t.flags&256)t.flags&=-257,t=fc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(_e||hl(e,t,a,!1),s=(a&e.childLanes)!==0,_e||s){if(l=je,l!==null&&(d=lo(l,a),d!==0&&d!==n.retryLane))throw n.retryLane=d,Ha(e,d),nt(l,e,d),Ri;Ls(),t=fc(e,t,a)}else e=n.treeContext,Ce=At(d.nextSibling),Ge=t,ce=!0,ma=null,Ct=!1,e!==null&&e0(t,e),t=Ss(t,l),t.flags|=4096;return t}return e=Vt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function As(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Di(e,t,a,l,s){return Xa(t),a=fi(e,t,a,l,void 0,s),l=gi(),e!==null&&!_e?(pi(e,t,s),Wt(e,t,s)):(ce&&l&&Fn(t),t.flags|=1,Ze(e,t,a,s),t.child)}function gc(e,t,a,l,s,n){return Xa(t),t.updateQueue=null,a=y0(t,l,a,s),h0(e),l=gi(),e!==null&&!_e?(pi(e,t,n),Wt(e,t,n)):(ce&&l&&Fn(t),t.flags|=1,Ze(e,t,a,n),t.child)}function pc(e,t,a,l,s){if(Xa(t),t.stateNode===null){var n=xl,d=a.contextType;typeof d=="object"&&d!==null&&(n=Ve(d)),n=new a(l,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Mi,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=l,n.state=t.memoizedState,n.refs={},ni(t),d=a.contextType,n.context=typeof d=="object"&&d!==null?Ve(d):xl,n.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(zi(t,a,d,l),n.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(d=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),d!==n.state&&Mi.enqueueReplaceState(n,n.state,null),or(t,l,n,s),dr(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){n=t.stateNode;var u=t.memoizedProps,p=Fa(a,u);n.props=p;var S=n.context,R=a.contextType;d=xl,typeof R=="object"&&R!==null&&(d=Ve(R));var O=a.getDerivedStateFromProps;R=typeof O=="function"||typeof n.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,R||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u||S!==d)&&ac(t,n,l,d),ga=!1;var A=t.memoizedState;n.state=A,or(t,l,n,s),dr(),S=t.memoizedState,u||A!==S||ga?(typeof O=="function"&&(zi(t,a,O,l),S=t.memoizedState),(p=ga||tc(t,a,p,l,A,S,d))?(R||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),n.props=l,n.state=S,n.context=d,l=p):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{n=t.stateNode,ii(e,t),d=t.memoizedProps,R=Fa(a,d),n.props=R,O=t.pendingProps,A=n.context,S=a.contextType,p=xl,typeof S=="object"&&S!==null&&(p=Ve(S)),u=a.getDerivedStateFromProps,(S=typeof u=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d!==O||A!==p)&&ac(t,n,l,p),ga=!1,A=t.memoizedState,n.state=A,or(t,l,n,s),dr();var M=t.memoizedState;d!==O||A!==M||ga||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof u=="function"&&(zi(t,a,u,l),M=t.memoizedState),(R=ga||tc(t,a,R,l,A,M,p)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(S||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,M,p),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,M,p)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),n.props=l,n.state=M,n.context=p,l=R):(typeof n.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return n=l,As(e,t),l=(t.flags&128)!==0,n||l?(n=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&l?(t.child=Ka(t,e.child,null,s),t.child=Ka(t,null,a,s)):Ze(e,t,a,s),t.memoizedState=n.state,e=t.child):e=Wt(e,t,s),e}function hc(e,t,a,l){return Ya(),t.flags|=256,Ze(e,t,a,l),t.child}var Oi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ui(e){return{baseLanes:e,cachePool:n0()}}function Li(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=gt),e}function yc(e,t,a){var l=t.pendingProps,s=!1,n=(t.flags&128)!==0,d;if((d=n)||(d=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),d&&(s=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(s?ya(t):va(),(e=Ce)?(e=Su(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Ut,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=Wo(e),a.return=t,t.child=a,Ge=t,Ce=null)):e=null,e===null)throw xa(t);return vd(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,s?(va(),s=t.mode,u=Ts({mode:"hidden",children:u},s),l=qa(l,s,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=Ui(a),l.childLanes=Li(e,d,a),t.memoizedState=Oi,fr(null,l)):(ya(t),_i(t,u))}var p=e.memoizedState;if(p!==null&&(u=p.dehydrated,u!==null)){if(n)t.flags&256?(ya(t),t.flags&=-257,t=Hi(e,t,a)):t.memoizedState!==null?(va(),t.child=e.child,t.flags|=128,t=null):(va(),u=l.fallback,s=t.mode,l=Ts({mode:"visible",children:l.children},s),u=qa(u,s,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Ka(t,e.child,null,a),l=t.child,l.memoizedState=Ui(a),l.childLanes=Li(e,d,a),t.memoizedState=Oi,t=fr(null,l));else if(ya(t),vd(u)){if(d=u.nextSibling&&u.nextSibling.dataset,d)var S=d.dgst;d=S,l=Error(c(419)),l.stack="",l.digest=d,ar({value:l,source:null,stack:null}),t=Hi(e,t,a)}else if(_e||hl(e,t,a,!1),d=(a&e.childLanes)!==0,_e||d){if(d=je,d!==null&&(l=lo(d,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Ha(e,l),nt(d,e,l),Ri;yd(u)||Ls(),t=Hi(e,t,a)}else yd(u)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ce=At(u.nextSibling),Ge=t,ce=!0,ma=null,Ct=!1,e!==null&&e0(t,e),t=_i(t,l.children),t.flags|=4096);return t}return s?(va(),u=l.fallback,s=t.mode,p=e.child,S=p.sibling,l=Vt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,S!==null?u=Vt(S,u):(u=qa(u,s,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,fr(null,l),l=t.child,u=e.child.memoizedState,u===null?u=Ui(a):(s=u.cachePool,s!==null?(p=Ue._currentValue,s=s.parent!==p?{parent:p,pool:p}:s):s=n0(),u={baseLanes:u.baseLanes|a,cachePool:s}),l.memoizedState=u,l.childLanes=Li(e,d,a),t.memoizedState=Oi,fr(e.child,l)):(ya(t),a=e.child,e=a.sibling,a=Vt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function _i(e,t){return t=Ts({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ts(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function Hi(e,t,a){return Ka(t,e.child,null,a),e=_i(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vc(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ei(e.return,t,a)}function qi(e,t,a,l,s,n){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:s,treeForkCount:n}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=s,d.treeForkCount=n)}function bc(e,t,a){var l=t.pendingProps,s=l.revealOrder,n=l.tail;l=l.children;var d=De.current,u=(d&2)!==0;if(u?(d=d&1|2,t.flags|=128):d&=1,G(De,d),Ze(e,t,l,a),l=ce?tr:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,a,t);else if(e.tag===19)vc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&ps(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),qi(t,!1,s,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ps(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}qi(t,!0,a,null,n,l);break;case"together":qi(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(hl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Vt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Vt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Yi(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function tf(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),fa(t,Ue,e.memoizedState.cache),Ya();break;case 27:case 5:ql(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mi(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?yc(e,t,a):(ya(t),e=Wt(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var s=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(hl(e,t,a,!1),l=(a&t.childLanes)!==0),s){if(l)return bc(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),G(De,De.current),l)break;return null;case 22:return t.lanes=0,mc(e,t,a,t.pendingProps);case 24:fa(t,Ue,e.memoizedState.cache)}return Wt(e,t,a)}function kc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)_e=!0;else{if(!Yi(e,a)&&(t.flags&128)===0)return _e=!1,tf(e,t,a);_e=(e.flags&131072)!==0}else _e=!1,ce&&(t.flags&1048576)!==0&&Po(t,tr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")Zn(e)?(l=Fa(e,l),t.tag=1,t=pc(null,t,e,l,a)):(t.tag=0,t=Di(null,t,e,l,a));else{if(e!=null){var s=e.$$typeof;if(s===ue){t.tag=11,t=oc(null,t,e,l,a);break e}else if(s===P){t.tag=14,t=cc(null,t,e,l,a);break e}}throw t=$(e)||e,Error(c(306,t,""))}}return t;case 0:return Di(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,s=Fa(l,t.pendingProps),pc(e,t,l,s,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var n=t.memoizedState;s=n.element,ii(e,t),or(t,l,null,a);var d=t.memoizedState;if(l=d.cache,fa(t,Ue,l),l!==n.cache&&ti(t,[Ue],a,!0),dr(),l=d.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=hc(e,t,l,a);break e}else if(l!==s){s=wt(Error(c(424)),t),ar(s),t=hc(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=At(e.firstChild),Ge=t,ce=!0,ma=null,Ct=!0,a=m0(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ya(),l===s){t=Wt(e,t,a);break e}Ze(e,t,l,a)}t=t.child}return t;case 26:return As(e,t),e===null?(a=Bu(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,l=Gs(re.current).createElement(a),l[Xe]=t,l[et]=e,Ke(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=Bu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ql(t),e===null&&ce&&(l=t.stateNode=Eu(t.type,t.pendingProps,re.current),Ge=t,Ct=!0,s=Ce,Aa(t.type)?(bd=s,Ce=At(l.firstChild)):Ce=s),Ze(e,t,t.pendingProps.children,a),As(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((s=l=Ce)&&(l=Bf(l,t.type,t.pendingProps,Ct),l!==null?(t.stateNode=l,Ge=t,Ce=At(l.firstChild),Ct=!1,s=!0):s=!1),s||xa(t)),ql(t),s=t.type,n=t.pendingProps,d=e!==null?e.memoizedProps:null,l=n.children,gd(s,n)?l=null:d!==null&&gd(s,d)&&(t.flags|=32),t.memoizedState!==null&&(s=fi(e,t,Zx,null,null,a),Er._currentValue=s),As(e,t),Ze(e,t,l,a),t.child;case 6:return e===null&&ce&&((e=a=Ce)&&(a=Rf(a,t.pendingProps,Ct),a!==null?(t.stateNode=a,Ge=t,Ce=null,e=!0):e=!1),e||xa(t)),null;case 13:return yc(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ka(t,null,l,a):Ze(e,t,l,a),t.child;case 11:return oc(e,t,t.type,t.pendingProps,a);case 7:return Ze(e,t,t.pendingProps,a),t.child;case 8:return Ze(e,t,t.pendingProps.children,a),t.child;case 12:return Ze(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,fa(t,t.type,l.value),Ze(e,t,l.children,a),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,Xa(t),s=Ve(s),l=l(s),t.flags|=1,Ze(e,t,l,a),t.child;case 14:return cc(e,t,t.type,t.pendingProps,a);case 15:return uc(e,t,t.type,t.pendingProps,a);case 19:return bc(e,t,a);case 31:return ef(e,t,a);case 22:return mc(e,t,a,t.pendingProps);case 24:return Xa(t),l=Ve(Ue),e===null?(s=ri(),s===null&&(s=je,n=ai(),s.pooledCache=n,n.refCount++,n!==null&&(s.pooledCacheLanes|=a),s=n),t.memoizedState={parent:l,cache:s},ni(t),fa(t,Ue,s)):((e.lanes&a)!==0&&(ii(e,t),or(t,null,null,a),dr()),s=e.memoizedState,n=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),fa(t,Ue,l)):(l=n.cache,fa(t,Ue,l),l!==s.cache&&ti(t,[Ue],a,!0))),Ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function It(e){e.flags|=4}function Qi(e,t,a,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Jc())e.flags|=8192;else throw Za=ms,si}else e.flags&=-16777217}function wc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lu(t))if(Jc())e.flags|=8192;else throw Za=ms,si}function Es(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?eo():536870912,e.lanes|=t,El|=t)}function gr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function af(e,t,a){var l=t.pendingProps;switch($n(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Jt(Ue),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pl(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,In())),Se(t),null;case 26:var s=t.type,n=t.memoizedState;return e===null?(It(t),n!==null?(Se(t),wc(t,n)):(Se(t),Qi(t,s,null,l,a))):n?n!==e.memoizedState?(It(t),Se(t),wc(t,n)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&It(t),Se(t),Qi(t,s,e,l,a)),null;case 27:if(qr(t),a=re.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Se(t),null}e=K.current,pl(t)?t0(t):(e=Eu(s,l,a),t.stateNode=e,It(t))}return Se(t),null;case 5:if(qr(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Se(t),null}if(n=K.current,pl(t))t0(t);else{var d=Gs(re.current);switch(n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?d.createElement(s,{is:l.is}):d.createElement(s)}}n[Xe]=t,n[et]=l;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=n;e:switch(Ke(n,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&It(t)}}return Se(t),Qi(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,pl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,s=Ge,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yu(e.nodeValue,a)),e||xa(t,!0)}else e=Gs(e).createTextNode(l),e[Xe]=t,t.stateNode=e}return Se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=pl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Xe]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else a=In(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(xt(t),t):(xt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=pl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Xe]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),s=!1}else s=In(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(xt(t),t):(xt(t),null)}return xt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==s&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Es(t,t.updateQueue),Se(t),null);case 4:return Re(),e===null&&cd(t.stateNode.containerInfo),Se(t),null;case 10:return Jt(t.type),Se(t),null;case 19:if(U(De),l=t.memoizedState,l===null)return Se(t),null;if(s=(t.flags&128)!==0,n=l.rendering,n===null)if(s)gr(l,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=ps(e),n!==null){for(t.flags|=128,gr(l,!1),e=n.updateQueue,t.updateQueue=e,Es(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$o(a,e),a=a.sibling;return G(De,De.current&1|2),ce&&Zt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>Ds&&(t.flags|=128,s=!0,gr(l,!1),t.lanes=4194304)}else{if(!s)if(e=ps(n),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Es(t,e),gr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!ce)return Se(t),null}else 2*it()-l.renderingStartTime>Ds&&a!==536870912&&(t.flags|=128,s=!0,gr(l,!1),t.lanes=4194304);l.isBackwards?(n.sibling=t.child,t.child=n):(e=l.last,e!==null?e.sibling=n:t.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=De.current,G(De,s?a&1|2:a&1),ce&&Zt(t,l.treeForkCount),e):(Se(t),null);case 22:case 23:return xt(t),ui(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Es(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&U(Ga),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(Ue),Se(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function lf(e,t){switch($n(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(Ue),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qr(t),null;case 31:if(t.memoizedState!==null){if(xt(t),t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(De),null;case 4:return Re(),null;case 10:return Jt(t.type),null;case 22:case 23:return xt(t),ui(),e!==null&&U(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(Ue),null;case 25:return null;default:return null}}function jc(e,t){switch($n(t),t.tag){case 3:Jt(Ue),Re();break;case 26:case 27:case 5:qr(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&xt(t);break;case 13:xt(t);break;case 19:U(De);break;case 10:Jt(t.type);break;case 22:case 23:xt(t),ui(),e!==null&&U(Ga);break;case 24:Jt(Ue)}}function pr(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){l=void 0;var n=a.create,d=a.inst;l=n(),d.destroy=l}a=a.next}while(a!==s)}}catch(u){he(t,t.return,u)}}function ba(e,t,a){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var n=s.next;l=n;do{if((l.tag&e)===e){var d=l.inst,u=d.destroy;if(u!==void 0){d.destroy=void 0,s=t;var p=a,S=u;try{S()}catch(R){he(s,p,R)}}}l=l.next}while(l!==n)}}catch(R){he(t,t.return,R)}}function Nc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{f0(t,a)}catch(l){he(e,e.return,l)}}}function Cc(e,t,a){a.props=Fa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){he(e,t,l)}}function hr(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(s){he(e,t,s)}}function _t(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(s){he(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){he(e,t,s)}else a.current=null}function Sc(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(s){he(e,e.return,s)}}function Xi(e,t,a){try{var l=e.stateNode;Sf(l,e.type,a,t),l[et]=t}catch(s){he(e,e.return,s)}}function Ac(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Gi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xt));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Vi(e,t,a),e=e.sibling;e!==null;)Vi(e,t,a),e=e.sibling}function zs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zs(e,t,a),e=e.sibling;e!==null;)zs(e,t,a),e=e.sibling}function Tc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ke(t,l,a),t[Xe]=e,t[et]=a}catch(n){he(e,e.return,n)}}var Pt=!1,He=!1,Zi=!1,Ec=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function rf(e,t){if(e=e.containerInfo,xd=Ws,e=Yo(e),Hn(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var s=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var d=0,u=-1,p=-1,S=0,R=0,O=e,A=null;t:for(;;){for(var M;O!==a||s!==0&&O.nodeType!==3||(u=d+s),O!==n||l!==0&&O.nodeType!==3||(p=d+l),O.nodeType===3&&(d+=O.nodeValue.length),(M=O.firstChild)!==null;)A=O,O=M;for(;;){if(O===e)break t;if(A===a&&++S===s&&(u=d),A===n&&++R===l&&(p=d),(M=O.nextSibling)!==null)break;O=A,A=O.parentNode}O=M}a=u===-1||p===-1?null:{start:u,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(fd={focusedElem:e,selectionRange:a},Ws=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,a=t,s=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var Z=Fa(a.type,s);e=l.getSnapshotBeforeUpdate(Z,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){he(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)hd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function zc(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),l&4&&pr(5,a);break;case 1:if(ta(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){he(a,a.return,d)}else{var s=Fa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){he(a,a.return,d)}}l&64&&Nc(a),l&512&&hr(a,a.return);break;case 3:if(ta(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{f0(e,t)}catch(d){he(a,a.return,d)}}break;case 27:t===null&&l&4&&Tc(a);case 26:case 5:ta(e,a),t===null&&l&4&&Sc(a),l&512&&hr(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),l&4&&Rc(e,a);break;case 13:ta(e,a),l&4&&Dc(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ff.bind(null,a),Df(e,a))));break;case 22:if(l=a.memoizedState!==null||Pt,!l){t=t!==null&&t.memoizedState!==null||He,s=Pt;var n=He;Pt=l,(He=t)&&!n?aa(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),Pt=s,He=n}break;case 30:break;default:ta(e,a)}}function Mc(e){var t=e.alternate;t!==null&&(e.alternate=null,Mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,at=!1;function ea(e,t,a){for(a=a.child;a!==null;)Bc(e,t,a),a=a.sibling}function Bc(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Yl,a)}catch{}switch(a.tag){case 26:He||_t(a,t),ea(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||_t(a,t);var l=Ae,s=at;Aa(a.type)&&(Ae=a.stateNode,at=!1),ea(e,t,a),Sr(a.stateNode),Ae=l,at=s;break;case 5:He||_t(a,t);case 6:if(l=Ae,s=at,Ae=null,ea(e,t,a),Ae=l,at=s,Ae!==null)if(at)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(n){he(a,t,n)}else try{Ae.removeChild(a.stateNode)}catch(n){he(a,t,n)}break;case 18:Ae!==null&&(at?(e=Ae,Nu(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ll(e)):Nu(Ae,a.stateNode));break;case 4:l=Ae,s=at,Ae=a.stateNode.containerInfo,at=!0,ea(e,t,a),Ae=l,at=s;break;case 0:case 11:case 14:case 15:ba(2,a,t),He||ba(4,a,t),ea(e,t,a);break;case 1:He||(_t(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Cc(a,t,l)),ea(e,t,a);break;case 21:ea(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,ea(e,t,a),He=l;break;default:ea(e,t,a)}}function Rc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ll(e)}catch(a){he(t,t.return,a)}}}function Dc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(a){he(t,t.return,a)}}function sf(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ec),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ec),t;default:throw Error(c(435,e.tag))}}function Ms(e,t){var a=sf(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var s=gf.bind(null,e,l);l.then(s,s)}})}function lt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var s=a[l],n=e,d=t,u=d;e:for(;u!==null;){switch(u.tag){case 27:if(Aa(u.type)){Ae=u.stateNode,at=!1;break e}break;case 5:Ae=u.stateNode,at=!1;break e;case 3:case 4:Ae=u.stateNode.containerInfo,at=!0;break e}u=u.return}if(Ae===null)throw Error(c(160));Bc(n,d,s),Ae=null,at=!1,n=s.alternate,n!==null&&(n.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Oc(t,e),t=t.sibling}var Mt=null;function Oc(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),rt(e),l&4&&(ba(3,e,e.return),pr(3,e),ba(5,e,e.return));break;case 1:lt(t,e),rt(e),l&512&&(He||a===null||_t(a,a.return)),l&64&&Pt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var s=Mt;if(lt(t,e),rt(e),l&512&&(He||a===null||_t(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":n=s.getElementsByTagName("title")[0],(!n||n[Gl]||n[Xe]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=s.createElement(l),s.head.insertBefore(n,s.querySelector("head > title"))),Ke(n,l,a),n[Xe]=e,Ye(n),l=n;break e;case"link":var d=Ou("link","href",s).get(l+(a.href||""));if(d){for(var u=0;u<d.length;u++)if(n=d[u],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(u,1);break t}}n=s.createElement(l),Ke(n,l,a),s.head.appendChild(n);break;case"meta":if(d=Ou("meta","content",s).get(l+(a.content||""))){for(u=0;u<d.length;u++)if(n=d[u],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(u,1);break t}}n=s.createElement(l),Ke(n,l,a),s.head.appendChild(n);break;default:throw Error(c(468,l))}n[Xe]=e,Ye(n),l=n}e.stateNode=l}else Uu(s,e.type,e.stateNode);else e.stateNode=Du(s,l,e.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?Uu(s,e.type,e.stateNode):Du(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Xi(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),rt(e),l&512&&(He||a===null||_t(a,a.return)),a!==null&&l&4&&Xi(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),rt(e),l&512&&(He||a===null||_t(a,a.return)),e.flags&32){s=e.stateNode;try{nl(s,"")}catch(Z){he(e,e.return,Z)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,Xi(e,s,a!==null?a.memoizedProps:s)),l&1024&&(Zi=!0);break;case 6:if(lt(t,e),rt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Z){he(e,e.return,Z)}}break;case 3:if(Ks=null,s=Mt,Mt=Vs(t.containerInfo),lt(t,e),Mt=s,rt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ll(t.containerInfo)}catch(Z){he(e,e.return,Z)}Zi&&(Zi=!1,Uc(e));break;case 4:l=Mt,Mt=Vs(e.stateNode.containerInfo),lt(t,e),rt(e),Mt=l;break;case 12:lt(t,e),rt(e);break;case 31:lt(t,e),rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ms(e,l)));break;case 13:lt(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rs=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ms(e,l)));break;case 22:s=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,S=Pt,R=He;if(Pt=S||s,He=R||p,lt(t,e),He=R,Pt=S,rt(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||p||Pt||He||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(n=p.stateNode,s)d=n.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{u=p.stateNode;var O=p.memoizedProps.style,A=O!=null&&O.hasOwnProperty("display")?O.display:null;u.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(Z){he(p,p.return,Z)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(Z){he(p,p.return,Z)}}}else if(t.tag===18){if(a===null){p=t;try{var M=p.stateNode;s?Cu(M,!0):Cu(p.stateNode,!1)}catch(Z){he(p,p.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ms(e,a))));break;case 19:lt(t,e),rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ms(e,l)));break;case 30:break;case 21:break;default:lt(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ac(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var s=a.stateNode,n=Gi(e);zs(e,n,s);break;case 5:var d=a.stateNode;a.flags&32&&(nl(d,""),a.flags&=-33);var u=Gi(e);zs(e,u,d);break;case 3:case 4:var p=a.stateNode.containerInfo,S=Gi(e);Vi(e,S,p);break;default:throw Error(c(161))}}catch(R){he(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ta(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zc(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),$a(t);break;case 1:_t(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Cc(t,t.return,a),$a(t);break;case 27:Sr(t.stateNode);case 26:case 5:_t(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function aa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,n=t,d=n.flags;switch(n.tag){case 0:case 11:case 15:aa(s,n,a),pr(4,n);break;case 1:if(aa(s,n,a),l=n,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(S){he(l,l.return,S)}if(l=n,s=l.updateQueue,s!==null){var u=l.stateNode;try{var p=s.shared.hiddenCallbacks;if(p!==null)for(s.shared.hiddenCallbacks=null,s=0;s<p.length;s++)x0(p[s],u)}catch(S){he(l,l.return,S)}}a&&d&64&&Nc(n),hr(n,n.return);break;case 27:Tc(n);case 26:case 5:aa(s,n,a),a&&l===null&&d&4&&Sc(n),hr(n,n.return);break;case 12:aa(s,n,a);break;case 31:aa(s,n,a),a&&d&4&&Rc(s,n);break;case 13:aa(s,n,a),a&&d&4&&Dc(s,n);break;case 22:n.memoizedState===null&&aa(s,n,a),hr(n,n.return);break;case 30:break;default:aa(s,n,a)}t=t.sibling}}function Ki(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&lr(a))}function Ji(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&lr(e))}function Bt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lc(e,t,a,l),t=t.sibling}function Lc(e,t,a,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,a,l),s&2048&&pr(9,t);break;case 1:Bt(e,t,a,l);break;case 3:Bt(e,t,a,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&lr(e)));break;case 12:if(s&2048){Bt(e,t,a,l),e=t.stateNode;try{var n=t.memoizedProps,d=n.id,u=n.onPostCommit;typeof u=="function"&&u(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){he(t,t.return,p)}}else Bt(e,t,a,l);break;case 31:Bt(e,t,a,l);break;case 13:Bt(e,t,a,l);break;case 23:break;case 22:n=t.stateNode,d=t.alternate,t.memoizedState!==null?n._visibility&2?Bt(e,t,a,l):yr(e,t):n._visibility&2?Bt(e,t,a,l):(n._visibility|=2,Sl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Ki(d,t);break;case 24:Bt(e,t,a,l),s&2048&&Ji(t.alternate,t);break;default:Bt(e,t,a,l)}}function Sl(e,t,a,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,d=t,u=a,p=l,S=d.flags;switch(d.tag){case 0:case 11:case 15:Sl(n,d,u,p,s),pr(8,d);break;case 23:break;case 22:var R=d.stateNode;d.memoizedState!==null?R._visibility&2?Sl(n,d,u,p,s):yr(n,d):(R._visibility|=2,Sl(n,d,u,p,s)),s&&S&2048&&Ki(d.alternate,d);break;case 24:Sl(n,d,u,p,s),s&&S&2048&&Ji(d.alternate,d);break;default:Sl(n,d,u,p,s)}t=t.sibling}}function yr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,s=l.flags;switch(l.tag){case 22:yr(a,l),s&2048&&Ki(l.alternate,l);break;case 24:yr(a,l),s&2048&&Ji(l.alternate,l);break;default:yr(a,l)}t=t.sibling}}var vr=8192;function Al(e,t,a){if(e.subtreeFlags&vr)for(e=e.child;e!==null;)_c(e,t,a),e=e.sibling}function _c(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&vr&&e.memoizedState!==null&&Zf(a,Mt,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var l=Mt;Mt=Vs(e.stateNode.containerInfo),Al(e,t,a),Mt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=vr,vr=16777216,Al(e,t,a),vr=l):Al(e,t,a));break;default:Al(e,t,a)}}function Hc(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Yc(l,e)}Hc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qc(e),e=e.sibling}function qc(e){switch(e.tag){case 0:case 11:case 15:br(e),e.flags&2048&&ba(9,e,e.return);break;case 3:br(e);break;case 12:br(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bs(e)):br(e);break;default:br(e)}}function Bs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Yc(l,e)}Hc(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),Bs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Bs(t));break;default:Bs(t)}e=e.sibling}}function Yc(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:lr(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var s=l.sibling,n=l.return;if(Mc(l),l===a){Qe=null;break e}if(s!==null){s.return=n,Qe=s;break e}Qe=n}}}var nf={getCacheForType:function(e){var t=Ve(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ve(Ue).controller.signal}},df=typeof WeakMap=="function"?WeakMap:Map,fe=0,je=null,se=null,ie=0,pe=0,ft=null,ka=!1,Tl=!1,Fi=!1,la=0,ze=0,wa=0,Wa=0,$i=0,gt=0,El=0,kr=null,st=null,Wi=!1,Rs=0,Qc=0,Ds=1/0,Os=null,ja=null,qe=0,Na=null,zl=null,ra=0,Ii=0,Pi=null,Xc=null,wr=0,ed=null;function pt(){return(fe&2)!==0&&ie!==0?ie&-ie:E.T!==null?nd():ro()}function Gc(){if(gt===0)if((ie&536870912)===0||ce){var e=Xr;Xr<<=1,(Xr&3932160)===0&&(Xr=262144),gt=e}else gt=536870912;return e=mt.current,e!==null&&(e.flags|=32),gt}function nt(e,t,a){(e===je&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ml(e,0),Ca(e,ie,gt,!1)),Xl(e,a),((fe&2)===0||e!==je)&&(e===je&&((fe&2)===0&&(Wa|=a),ze===4&&Ca(e,ie,gt,!1)),Ht(e))}function Vc(e,t,a){if((fe&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ql(e,t),s=l?uf(e,t):ad(e,t,!0),n=l;do{if(s===0){Tl&&!l&&Ca(e,t,0,!1);break}else{if(a=e.current.alternate,n&&!of(a)){s=ad(e,t,!1),n=!1;continue}if(s===2){if(n=t,e.errorRecoveryDisabledLanes&n)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var u=e;s=kr;var p=u.current.memoizedState.isDehydrated;if(p&&(Ml(u,d).flags|=256),d=ad(u,d,!1),d!==2){if(Fi&&!p){u.errorRecoveryDisabledLanes|=n,Wa|=n,s=4;break e}n=st,st=s,n!==null&&(st===null?st=n:st.push.apply(st,n))}s=d}if(n=!1,s!==2)continue}}if(s===1){Ml(e,0),Ca(e,t,0,!0);break}e:{switch(l=e,n=s,n){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ca(l,t,gt,!ka);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(s=Rs+300-it(),10<s)){if(Ca(l,t,gt,!ka),Vr(l,0,!0)!==0)break e;ra=t,l.timeoutHandle=wu(Zc.bind(null,l,a,st,Os,Wi,t,gt,Wa,El,ka,n,"Throttled",-0,0),s);break e}Zc(l,a,st,Os,Wi,t,gt,Wa,El,ka,n,null,-0,0)}}break}while(!0);Ht(e)}function Zc(e,t,a,l,s,n,d,u,p,S,R,O,A,M){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},_c(t,n,O);var Z=(n&62914560)===n?Rs-it():(n&4194048)===n?Qc-it():0;if(Z=Kf(O,Z),Z!==null){ra=n,e.cancelPendingCommit=Z(eu.bind(null,e,t,n,a,l,s,d,u,p,R,O,null,A,M)),Ca(e,n,d,!S);return}}eu(e,t,n,a,l,s,d,u,p)}function of(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var s=a[l],n=s.getSnapshot;s=s.value;try{if(!ct(n(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ca(e,t,a,l){t&=~$i,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var n=31-ot(s),d=1<<n;l[n]=-1,s&=~d}a!==0&&to(e,a,t)}function Us(){return(fe&6)===0?(jr(0),!1):!0}function td(){if(se!==null){if(pe===0)var e=se.return;else e=se,Kt=Qa=null,hi(e),kl=null,sr=0,e=se;for(;e!==null;)jc(e.alternate,e),e=e.return;se=null}}function Ml(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ef(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,td(),je=e,se=a=Vt(e.current,null),ie=t,pe=0,ft=null,ka=!1,Tl=Ql(e,t),Fi=!1,El=gt=$i=Wa=wa=ze=0,st=kr=null,Wi=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-ot(l),n=1<<s;t|=e[s],l&=~n}return la=t,ls(),a}function Kc(e,t){ae=null,E.H=xr,t===bl||t===us?(t=o0(),pe=3):t===si?(t=o0(),pe=4):pe=t===Ri?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,se===null&&(ze=1,Cs(e,wt(t,e.current)))}function Jc(){var e=mt.current;return e===null?!0:(ie&4194048)===ie?St===null:(ie&62914560)===ie||(ie&536870912)!==0?e===St:!1}function Fc(){var e=E.H;return E.H=xr,e===null?xr:e}function $c(){var e=E.A;return E.A=nf,e}function Ls(){ze=4,ka||(ie&4194048)!==ie&&mt.current!==null||(Tl=!0),(wa&134217727)===0&&(Wa&134217727)===0||je===null||Ca(je,ie,gt,!1)}function ad(e,t,a){var l=fe;fe|=2;var s=Fc(),n=$c();(je!==e||ie!==t)&&(Os=null,Ml(e,t)),t=!1;var d=ze;e:do try{if(pe!==0&&se!==null){var u=se,p=ft;switch(pe){case 8:td(),d=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var S=pe;if(pe=0,ft=null,Bl(e,u,p,S),a&&Tl){d=0;break e}break;default:S=pe,pe=0,ft=null,Bl(e,u,p,S)}}cf(),d=ze;break}catch(R){Kc(e,R)}while(!0);return t&&e.shellSuspendCounter++,Kt=Qa=null,fe=l,E.H=s,E.A=n,se===null&&(je=null,ie=0,ls()),d}function cf(){for(;se!==null;)Wc(se)}function uf(e,t){var a=fe;fe|=2;var l=Fc(),s=$c();je!==e||ie!==t?(Os=null,Ds=it()+500,Ml(e,t)):Tl=Ql(e,t);e:do try{if(pe!==0&&se!==null){t=se;var n=ft;t:switch(pe){case 1:pe=0,ft=null,Bl(e,t,n,1);break;case 2:case 9:if(i0(n)){pe=0,ft=null,Ic(t);break}t=function(){pe!==2&&pe!==9||je!==e||(pe=7),Ht(e)},n.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:i0(n)?(pe=0,ft=null,Ic(t)):(pe=0,ft=null,Bl(e,t,n,7));break;case 5:var d=null;switch(se.tag){case 26:d=se.memoizedState;case 5:case 27:var u=se;if(d?Lu(d):u.stateNode.complete){pe=0,ft=null;var p=u.sibling;if(p!==null)se=p;else{var S=u.return;S!==null?(se=S,_s(S)):se=null}break t}}pe=0,ft=null,Bl(e,t,n,5);break;case 6:pe=0,ft=null,Bl(e,t,n,6);break;case 8:td(),ze=6;break e;default:throw Error(c(462))}}mf();break}catch(R){Kc(e,R)}while(!0);return Kt=Qa=null,E.H=l,E.A=s,fe=a,se!==null?0:(je=null,ie=0,ls(),ze)}function mf(){for(;se!==null&&!Dm();)Wc(se)}function Wc(e){var t=kc(e.alternate,e,la);e.memoizedProps=e.pendingProps,t===null?_s(e):se=t}function Ic(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=gc(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=gc(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:hi(t);default:jc(a,t),t=se=$o(t,la),t=kc(a,t,la)}e.memoizedProps=e.pendingProps,t===null?_s(e):se=t}function Bl(e,t,a,l){Kt=Qa=null,hi(t),kl=null,sr=0;var s=t.return;try{if(Px(e,s,t,a,ie)){ze=1,Cs(e,wt(a,e.current)),se=null;return}}catch(n){if(s!==null)throw se=s,n;ze=1,Cs(e,wt(a,e.current)),se=null;return}t.flags&32768?(ce||l===1?e=!0:Tl||(ie&536870912)!==0?e=!1:(ka=e=!0,(l===2||l===9||l===3||l===6)&&(l=mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Pc(t,e)):_s(t)}function _s(e){var t=e;do{if((t.flags&32768)!==0){Pc(t,ka);return}e=t.return;var a=af(t.alternate,t,la);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ze===0&&(ze=5)}function Pc(e,t){do{var a=lf(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);ze=6,se=null}function eu(e,t,a,l,s,n,d,u,p){e.cancelPendingCommit=null;do Hs();while(qe!==0);if((fe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(n=t.lanes|t.childLanes,n|=Gn,Gm(e,a,n,d,u,p),e===je&&(se=je=null,ie=0),zl=t,Na=e,ra=a,Ii=n,Pi=s,Xc=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pf(Yr,function(){return su(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=E.T,E.T=null,s=Y.p,Y.p=2,d=fe,fe|=4;try{rf(e,t,a)}finally{fe=d,Y.p=s,E.T=l}}qe=1,tu(),au(),lu()}}function tu(){if(qe===1){qe=0;var e=Na,t=zl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var l=Y.p;Y.p=2;var s=fe;fe|=4;try{Oc(t,e);var n=fd,d=Yo(e.containerInfo),u=n.focusedElem,p=n.selectionRange;if(d!==u&&u&&u.ownerDocument&&qo(u.ownerDocument.documentElement,u)){if(p!==null&&Hn(u)){var S=p.start,R=p.end;if(R===void 0&&(R=S),"selectionStart"in u)u.selectionStart=S,u.selectionEnd=Math.min(R,u.value.length);else{var O=u.ownerDocument||document,A=O&&O.defaultView||window;if(A.getSelection){var M=A.getSelection(),Z=u.textContent.length,W=Math.min(p.start,Z),ke=p.end===void 0?W:Math.min(p.end,Z);!M.extend&&W>ke&&(d=ke,ke=W,W=d);var w=Ho(u,W),v=Ho(u,ke);if(w&&v&&(M.rangeCount!==1||M.anchorNode!==w.node||M.anchorOffset!==w.offset||M.focusNode!==v.node||M.focusOffset!==v.offset)){var C=O.createRange();C.setStart(w.node,w.offset),M.removeAllRanges(),W>ke?(M.addRange(C),M.extend(v.node,v.offset)):(C.setEnd(v.node,v.offset),M.addRange(C))}}}}for(O=[],M=u;M=M.parentNode;)M.nodeType===1&&O.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<O.length;u++){var D=O[u];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Ws=!!xd,fd=xd=null}finally{fe=s,Y.p=l,E.T=a}}e.current=t,qe=2}}function au(){if(qe===2){qe=0;var e=Na,t=zl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var l=Y.p;Y.p=2;var s=fe;fe|=4;try{zc(e,t.alternate,t)}finally{fe=s,Y.p=l,E.T=a}}qe=3}}function lu(){if(qe===4||qe===3){qe=0,Om();var e=Na,t=zl,a=ra,l=Xc;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,zl=Na=null,ru(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ja=null),bn(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=E.T,s=Y.p,Y.p=2,E.T=null;try{for(var n=e.onRecoverableError,d=0;d<l.length;d++){var u=l[d];n(u.value,{componentStack:u.stack})}}finally{E.T=t,Y.p=s}}(ra&3)!==0&&Hs(),Ht(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===ed?wr++:(wr=0,ed=e):wr=0,jr(0)}}function ru(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,lr(t)))}function Hs(){return tu(),au(),lu(),su()}function su(){if(qe!==5)return!1;var e=Na,t=Ii;Ii=0;var a=bn(ra),l=E.T,s=Y.p;try{Y.p=32>a?32:a,E.T=null,a=Pi,Pi=null;var n=Na,d=ra;if(qe=0,zl=Na=null,ra=0,(fe&6)!==0)throw Error(c(331));var u=fe;if(fe|=4,qc(n.current),Lc(n,n.current,d,a),fe=u,jr(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Yl,n)}catch{}return!0}finally{Y.p=s,E.T=l,ru(e,t)}}function nu(e,t,a){t=wt(a,t),t=Bi(e.stateNode,t,2),e=ha(e,t,2),e!==null&&(Xl(e,2),Ht(e))}function he(e,t,a){if(e.tag===3)nu(e,e,a);else for(;t!==null;){if(t.tag===3){nu(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){e=wt(a,e),a=ic(2),l=ha(t,a,2),l!==null&&(dc(a,l,t,e),Xl(l,2),Ht(l));break}}t=t.return}}function ld(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new df;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(a)||(Fi=!0,s.add(a),e=xf.bind(null,e,t,a),t.then(e,e))}function xf(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(ie&a)===a&&(ze===4||ze===3&&(ie&62914560)===ie&&300>it()-Rs?(fe&2)===0&&Ml(e,0):$i|=a,El===ie&&(El=0)),Ht(e)}function iu(e,t){t===0&&(t=eo()),e=Ha(e,t),e!==null&&(Xl(e,t),Ht(e))}function ff(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),iu(e,a)}function gf(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),iu(e,a)}function pf(e,t){return pn(e,t)}var qs=null,Rl=null,rd=!1,Ys=!1,sd=!1,Sa=0;function Ht(e){e!==Rl&&e.next===null&&(Rl===null?qs=Rl=e:Rl=Rl.next=e),Ys=!0,rd||(rd=!0,yf())}function jr(e,t){if(!sd&&Ys){sd=!0;do for(var a=!1,l=qs;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var n=0;else{var d=l.suspendedLanes,u=l.pingedLanes;n=(1<<31-ot(42|e)+1)-1,n&=s&~(d&~u),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,uu(l,n))}else n=ie,n=Vr(l,l===je?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||Ql(l,n)||(a=!0,uu(l,n));l=l.next}while(a);sd=!1}}function hf(){du()}function du(){Ys=rd=!1;var e=0;Sa!==0&&Tf()&&(e=Sa);for(var t=it(),a=null,l=qs;l!==null;){var s=l.next,n=ou(l,t);n===0?(l.next=null,a===null?qs=s:a.next=s,s===null&&(Rl=a)):(a=l,(e!==0||(n&3)!==0)&&(Ys=!0)),l=s}qe!==0&&qe!==5||jr(e),Sa!==0&&(Sa=0)}function ou(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var d=31-ot(n),u=1<<d,p=s[d];p===-1?((u&a)===0||(u&l)!==0)&&(s[d]=Xm(u,t)):p<=t&&(e.expiredLanes|=u),n&=~u}if(t=je,a=ie,a=Vr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hn(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ql(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&hn(l),bn(a)){case 2:case 8:a=Id;break;case 32:a=Yr;break;case 268435456:a=Pd;break;default:a=Yr}return l=cu.bind(null,e),a=pn(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&hn(l),e.callbackPriority=2,e.callbackNode=null,2}function cu(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hs()&&e.callbackNode!==a)return null;var l=ie;return l=Vr(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vc(e,l,t),ou(e,it()),e.callbackNode!=null&&e.callbackNode===a?cu.bind(null,e):null)}function uu(e,t){if(Hs())return null;Vc(e,t,!0)}function yf(){zf(function(){(fe&6)!==0?pn(Wd,hf):du()})}function nd(){if(Sa===0){var e=yl;e===0&&(e=Qr,Qr<<=1,(Qr&261888)===0&&(Qr=256)),Sa=e}return Sa}function mu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fr(""+e)}function xu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function vf(e,t,a,l,s){if(t==="submit"&&a&&a.stateNode===s){var n=mu((s[et]||null).action),d=l.submitter;d&&(t=(t=d[et]||null)?mu(t.formAction):d.getAttribute("formAction"),t!==null&&(n=t,d=null));var u=new Pr("action","action",null,l,s);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Sa!==0){var p=d?xu(s,d):new FormData(s);Si(a,{pending:!0,data:p,method:s.method,action:n},null,p)}}else typeof n=="function"&&(u.preventDefault(),p=d?xu(s,d):new FormData(s),Si(a,{pending:!0,data:p,method:s.method,action:n},n,p))},currentTarget:s}]})}}for(var id=0;id<Xn.length;id++){var dd=Xn[id],bf=dd.toLowerCase(),kf=dd[0].toUpperCase()+dd.slice(1);zt(bf,"on"+kf)}zt(Go,"onAnimationEnd"),zt(Vo,"onAnimationIteration"),zt(Zo,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(Ux,"onTransitionRun"),zt(Lx,"onTransitionStart"),zt(_x,"onTransitionCancel"),zt(Ko,"onTransitionEnd"),rl("onMouseEnter",["mouseout","mouseover"]),rl("onMouseLeave",["mouseout","mouseover"]),rl("onPointerEnter",["pointerout","pointerover"]),rl("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nr));function fu(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],s=l.event;l=l.listeners;e:{var n=void 0;if(t)for(var d=l.length-1;0<=d;d--){var u=l[d],p=u.instance,S=u.currentTarget;if(u=u.listener,p!==n&&s.isPropagationStopped())break e;n=u,s.currentTarget=S;try{n(s)}catch(R){as(R)}s.currentTarget=null,n=p}else for(d=0;d<l.length;d++){if(u=l[d],p=u.instance,S=u.currentTarget,u=u.listener,p!==n&&s.isPropagationStopped())break e;n=u,s.currentTarget=S;try{n(s)}catch(R){as(R)}s.currentTarget=null,n=p}}}}function ne(e,t){var a=t[kn];a===void 0&&(a=t[kn]=new Set);var l=e+"__bubble";a.has(l)||(gu(t,e,2,!1),a.add(l))}function od(e,t,a){var l=0;t&&(l|=4),gu(a,e,l,t)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function cd(e){if(!e[Qs]){e[Qs]=!0,io.forEach(function(a){a!=="selectionchange"&&(wf.has(a)||od(a,!1,e),od(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qs]||(t[Qs]=!0,od("selectionchange",!1,t))}}function gu(e,t,a,l){switch(Gu(t)){case 2:var s=$f;break;case 8:s=Wf;break;default:s=Cd}a=s.bind(null,t,a,e),s=void 0,!zn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function ud(e,t,a,l,s){var n=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var u=l.stateNode.containerInfo;if(u===s)break;if(d===4)for(d=l.return;d!==null;){var p=d.tag;if((p===3||p===4)&&d.stateNode.containerInfo===s)return;d=d.return}for(;u!==null;){if(d=tl(u),d===null)return;if(p=d.tag,p===5||p===6||p===26||p===27){l=n=d;continue e}u=u.parentNode}}l=l.return}bo(function(){var S=n,R=Tn(a),O=[];e:{var A=Jo.get(e);if(A!==void 0){var M=Pr,Z=e;switch(e){case"keypress":if(Wr(a)===0)break e;case"keydown":case"keyup":M=fx;break;case"focusin":Z="focus",M=Dn;break;case"focusout":Z="blur",M=Dn;break;case"beforeblur":case"afterblur":M=Dn;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=hx;break;case Go:case Vo:case Zo:M=sx;break;case Ko:M=vx;break;case"scroll":case"scrollend":M=ex;break;case"wheel":M=kx;break;case"copy":case"cut":case"paste":M=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Co;break;case"toggle":case"beforetoggle":M=jx}var W=(t&4)!==0,ke=!W&&(e==="scroll"||e==="scrollend"),w=W?A!==null?A+"Capture":null:A;W=[];for(var v=S,C;v!==null;){var D=v;if(C=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||C===null||w===null||(D=Zl(v,w),D!=null&&W.push(Cr(v,D,C))),ke)break;v=v.return}0<W.length&&(A=new M(A,Z,null,a,R),O.push({event:A,listeners:W}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",A&&a!==An&&(Z=a.relatedTarget||a.fromElement)&&(tl(Z)||Z[el]))break e;if((M||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,M?(Z=a.relatedTarget||a.toElement,M=S,Z=Z?tl(Z):null,Z!==null&&(ke=g(Z),W=Z.tag,Z!==ke||W!==5&&W!==27&&W!==6)&&(Z=null)):(M=null,Z=S),M!==Z)){if(W=jo,D="onMouseLeave",w="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=Co,D="onPointerLeave",w="onPointerEnter",v="pointer"),ke=M==null?A:Vl(M),C=Z==null?A:Vl(Z),A=new W(D,v+"leave",M,a,R),A.target=ke,A.relatedTarget=C,D=null,tl(R)===S&&(W=new W(w,v+"enter",Z,a,R),W.target=C,W.relatedTarget=ke,D=W),ke=D,M&&Z)t:{for(W=jf,w=M,v=Z,C=0,D=w;D;D=W(D))C++;D=0;for(var F=v;F;F=W(F))D++;for(;0<C-D;)w=W(w),C--;for(;0<D-C;)v=W(v),D--;for(;C--;){if(w===v||v!==null&&w===v.alternate){W=w;break t}w=W(w),v=W(v)}W=null}else W=null;M!==null&&pu(O,A,M,W,!1),Z!==null&&ke!==null&&pu(O,ke,Z,W,!0)}}e:{if(A=S?Vl(S):window,M=A.nodeName&&A.nodeName.toLowerCase(),M==="select"||M==="input"&&A.type==="file")var me=Ro;else if(Mo(A))if(Do)me=Rx;else{me=Mx;var J=zx}else M=A.nodeName,!M||M.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?S&&Sn(S.elementType)&&(me=Ro):me=Bx;if(me&&(me=me(e,S))){Bo(O,me,a,R);break e}J&&J(e,A,S),e==="focusout"&&S&&A.type==="number"&&S.memoizedProps.value!=null&&Cn(A,"number",A.value)}switch(J=S?Vl(S):window,e){case"focusin":(Mo(J)||J.contentEditable==="true")&&(cl=J,qn=S,er=null);break;case"focusout":er=qn=cl=null;break;case"mousedown":Yn=!0;break;case"contextmenu":case"mouseup":case"dragend":Yn=!1,Qo(O,a,R);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":Qo(O,a,R)}var le;if(Un)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else ol?Eo(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(So&&a.locale!=="ko"&&(ol||de!=="onCompositionStart"?de==="onCompositionEnd"&&ol&&(le=ko()):(ca=R,Mn="value"in ca?ca.value:ca.textContent,ol=!0)),J=Xs(S,de),0<J.length&&(de=new No(de,e,null,a,R),O.push({event:de,listeners:J}),le?de.data=le:(le=zo(a),le!==null&&(de.data=le)))),(le=Cx?Sx(e,a):Ax(e,a))&&(de=Xs(S,"onBeforeInput"),0<de.length&&(J=new No("onBeforeInput","beforeinput",null,a,R),O.push({event:J,listeners:de}),J.data=le)),vf(O,e,S,a,R)}fu(O,t)})}function Cr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Xs(e,t){for(var a=t+"Capture",l=[];e!==null;){var s=e,n=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||n===null||(s=Zl(e,a),s!=null&&l.unshift(Cr(e,s,n)),s=Zl(e,t),s!=null&&l.push(Cr(e,s,n))),e.tag===3)return l;e=e.return}return[]}function jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pu(e,t,a,l,s){for(var n=t._reactName,d=[];a!==null&&a!==l;){var u=a,p=u.alternate,S=u.stateNode;if(u=u.tag,p!==null&&p===l)break;u!==5&&u!==26&&u!==27||S===null||(p=S,s?(S=Zl(a,n),S!=null&&d.unshift(Cr(a,S,p))):s||(S=Zl(a,n),S!=null&&d.push(Cr(a,S,p)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var Nf=/\r\n?/g,Cf=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(Nf,`
`).replace(Cf,"")}function yu(e,t){return t=hu(t),hu(e)===t}function be(e,t,a,l,s,n){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(e,""+l);break;case"className":Kr(e,"class",l);break;case"tabIndex":Kr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kr(e,a,l);break;case"style":yo(e,l,n);break;case"data":if(t!=="object"){Kr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fr(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(t!=="input"&&be(e,t,"name",s.name,s,null),be(e,t,"formEncType",s.formEncType,s,null),be(e,t,"formMethod",s.formMethod,s,null),be(e,t,"formTarget",s.formTarget,s,null)):(be(e,t,"encType",s.encType,s,null),be(e,t,"method",s.method,s,null),be(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fr(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Xt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Zr(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Zr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Im.get(a)||a,Zr(e,a,l))}}function md(e,t,a,l,s,n){switch(a){case"style":yo(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?nl(e,l):(typeof l=="number"||typeof l=="bigint")&&nl(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),n=e[et]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(t,n,s),typeof l=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,s);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Zr(e,a,l)}}}function Ke(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,s=!1,n;for(n in a)if(a.hasOwnProperty(n)){var d=a[n];if(d!=null)switch(n){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:be(e,t,n,d,a,null)}}s&&be(e,t,"srcSet",a.srcSet,a,null),l&&be(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var u=n=d=s=null,p=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":s=R;break;case"type":d=R;break;case"checked":p=R;break;case"defaultChecked":S=R;break;case"value":n=R;break;case"defaultValue":u=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:be(e,t,l,R,a,null)}}fo(e,n,u,p,S,d,s,!1);return;case"select":ne("invalid",e),l=d=n=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":n=u;break;case"defaultValue":d=u;break;case"multiple":l=u;default:be(e,t,s,u,a,null)}t=n,a=d,e.multiple=!!l,t!=null?sl(e,!!l,t,!1):a!=null&&sl(e,!!l,a,!0);return;case"textarea":ne("invalid",e),n=s=l=null;for(d in a)if(a.hasOwnProperty(d)&&(u=a[d],u!=null))switch(d){case"value":l=u;break;case"defaultValue":s=u;break;case"children":n=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:be(e,t,d,u,a,null)}po(e,l,s,n);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:be(e,t,p,l,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<Nr.length;l++)ne(Nr[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:be(e,t,S,l,a,null)}return;default:if(Sn(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&md(e,t,R,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&be(e,t,u,l,a,null))}function Sf(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,n=null,d=null,u=null,p=null,S=null,R=null;for(M in a){var O=a[M];if(a.hasOwnProperty(M)&&O!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":p=O;default:l.hasOwnProperty(M)||be(e,t,M,null,l,O)}}for(var A in l){var M=l[A];if(O=a[A],l.hasOwnProperty(A)&&(M!=null||O!=null))switch(A){case"type":n=M;break;case"name":s=M;break;case"checked":S=M;break;case"defaultChecked":R=M;break;case"value":d=M;break;case"defaultValue":u=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==O&&be(e,t,A,M,l,O)}}Nn(e,d,u,p,S,R,n,s);return;case"select":M=d=u=A=null;for(n in a)if(p=a[n],a.hasOwnProperty(n)&&p!=null)switch(n){case"value":break;case"multiple":M=p;default:l.hasOwnProperty(n)||be(e,t,n,null,l,p)}for(s in l)if(n=l[s],p=a[s],l.hasOwnProperty(s)&&(n!=null||p!=null))switch(s){case"value":A=n;break;case"defaultValue":u=n;break;case"multiple":d=n;default:n!==p&&be(e,t,s,n,l,p)}t=u,a=d,l=M,A!=null?sl(e,!!a,A,!1):!!l!=!!a&&(t!=null?sl(e,!!a,t,!0):sl(e,!!a,a?[]:"",!1));return;case"textarea":M=A=null;for(u in a)if(s=a[u],a.hasOwnProperty(u)&&s!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:be(e,t,u,null,l,s)}for(d in l)if(s=l[d],n=a[d],l.hasOwnProperty(d)&&(s!=null||n!=null))switch(d){case"value":A=s;break;case"defaultValue":M=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==n&&be(e,t,d,s,l,n)}go(e,A,M);return;case"option":for(var Z in a)if(A=a[Z],a.hasOwnProperty(Z)&&A!=null&&!l.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:be(e,t,Z,null,l,A)}for(p in l)if(A=l[p],M=a[p],l.hasOwnProperty(p)&&A!==M&&(A!=null||M!=null))switch(p){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:be(e,t,p,A,l,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)A=a[W],a.hasOwnProperty(W)&&A!=null&&!l.hasOwnProperty(W)&&be(e,t,W,null,l,A);for(S in l)if(A=l[S],M=a[S],l.hasOwnProperty(S)&&A!==M&&(A!=null||M!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:be(e,t,S,A,l,M)}return;default:if(Sn(t)){for(var ke in a)A=a[ke],a.hasOwnProperty(ke)&&A!==void 0&&!l.hasOwnProperty(ke)&&md(e,t,ke,void 0,l,A);for(R in l)A=l[R],M=a[R],!l.hasOwnProperty(R)||A===M||A===void 0&&M===void 0||md(e,t,R,A,l,M);return}}for(var w in a)A=a[w],a.hasOwnProperty(w)&&A!=null&&!l.hasOwnProperty(w)&&be(e,t,w,null,l,A);for(O in l)A=l[O],M=a[O],!l.hasOwnProperty(O)||A===M||A==null&&M==null||be(e,t,O,A,l,M)}function vu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Af(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var s=a[l],n=s.transferSize,d=s.initiatorType,u=s.duration;if(n&&u&&vu(d)){for(d=0,u=s.responseEnd,l+=1;l<a.length;l++){var p=a[l],S=p.startTime;if(S>u)break;var R=p.transferSize,O=p.initiatorType;R&&vu(O)&&(p=p.responseEnd,d+=R*(p<u?1:(u-S)/(p-S)))}if(--l,t+=8*(n+d)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xd=null,fd=null;function Gs(e){return e.nodeType===9?e:e.ownerDocument}function bu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ku(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pd=null;function Tf(){var e=window.event;return e&&e.type==="popstate"?e===pd?!1:(pd=e,!0):(pd=null,!1)}var wu=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Mf)}:wu;function Mf(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Nu(e,t){var a=t,l=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(s),Ll(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Sr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sr(a);for(var n=a.firstChild;n;){var d=n.nextSibling,u=n.nodeName;n[Gl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=d}}else a==="body"&&Sr(e.ownerDocument.body);a=s}while(a);Ll(t)}function Cu(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function hd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hd(a),wn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bf(e,t,a,l){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function Rf(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=At(e.nextSibling),e===null))return null;return e}function Su(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$?"||e.data==="$~"}function vd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Df(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bd=null;function Au(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return At(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Eu(e,t,a){switch(t=Gs(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Sr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wn(e)}var Tt=new Map,zu=new Set;function Vs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=Y.d;Y.d={f:Of,r:Uf,D:Lf,C:_f,L:Hf,m:qf,X:Qf,S:Yf,M:Xf};function Of(){var e=sa.f(),t=Us();return e||t}function Uf(e){var t=al(e);t!==null&&t.tag===5&&t.type==="form"?K0(t):sa.r(e)}var Dl=typeof document>"u"?null:document;function Mu(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var s=bt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),zu.has(s)||(zu.add(s),e={rel:e,crossOrigin:a,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),Ke(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Lf(e){sa.D(e),Mu("dns-prefetch",e,null)}function _f(e,t){sa.C(e,t),Mu("preconnect",e,t)}function Hf(e,t,a){sa.L(e,t,a);var l=Dl;if(l&&e&&t){var s='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+bt(a.imageSizes)+'"]')):s+='[href="'+bt(e)+'"]';var n=s;switch(t){case"style":n=Ol(e);break;case"script":n=Ul(e)}Tt.has(n)||(e=B({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(n,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(Ar(n))||t==="script"&&l.querySelector(Tr(n))||(t=l.createElement("link"),Ke(t,"link",e),Ye(t),l.head.appendChild(t)))}}function qf(e,t){sa.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+bt(l)+'"][href="'+bt(e)+'"]',n=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ul(e)}if(!Tt.has(n)&&(e=B({rel:"modulepreload",href:e},t),Tt.set(n,e),a.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tr(n)))return}l=a.createElement("link"),Ke(l,"link",e),Ye(l),a.head.appendChild(l)}}}function Yf(e,t,a){sa.S(e,t,a);var l=Dl;if(l&&e){var s=ll(l).hoistableStyles,n=Ol(e);t=t||"default";var d=s.get(n);if(!d){var u={loading:0,preload:null};if(d=l.querySelector(Ar(n)))u.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(n))&&kd(e,a);var p=d=l.createElement("link");Ye(p),Ke(p,"link",e),p._p=new Promise(function(S,R){p.onload=S,p.onerror=R}),p.addEventListener("load",function(){u.loading|=1}),p.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Zs(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:u},s.set(n,d)}}}function Qf(e,t){sa.X(e,t);var a=Dl;if(a&&e){var l=ll(a).hoistableScripts,s=Ul(e),n=l.get(s);n||(n=a.querySelector(Tr(s)),n||(e=B({src:e,async:!0},t),(t=Tt.get(s))&&wd(e,t),n=a.createElement("script"),Ye(n),Ke(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(s,n))}}function Xf(e,t){sa.M(e,t);var a=Dl;if(a&&e){var l=ll(a).hoistableScripts,s=Ul(e),n=l.get(s);n||(n=a.querySelector(Tr(s)),n||(e=B({src:e,async:!0,type:"module"},t),(t=Tt.get(s))&&wd(e,t),n=a.createElement("script"),Ye(n),Ke(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(s,n))}}function Bu(e,t,a,l){var s=(s=re.current)?Vs(s):null;if(!s)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ol(a.href),a=ll(s).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ol(a.href);var n=ll(s).hoistableStyles,d=n.get(e);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,d),(n=s.querySelector(Ar(e)))&&!n._p&&(d.instance=n,d.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),n||Gf(s,e,a,d.state))),t&&l===null)throw Error(c(528,""));return d}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ul(a),a=ll(s).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ol(e){return'href="'+bt(e)+'"'}function Ar(e){return'link[rel="stylesheet"]['+e+"]"}function Ru(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function Gf(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ke(t,"link",a),Ye(t),e.head.appendChild(t))}function Ul(e){return'[src="'+bt(e)+'"]'}function Tr(e){return"script[async]"+e}function Du(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var s=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Ke(l,"style",s),Zs(l,a.precedence,e),t.instance=l;case"stylesheet":s=Ol(a.href);var n=e.querySelector(Ar(s));if(n)return t.state.loading|=4,t.instance=n,Ye(n),n;l=Ru(a),(s=Tt.get(s))&&kd(l,s),n=(e.ownerDocument||e).createElement("link"),Ye(n);var d=n;return d._p=new Promise(function(u,p){d.onload=u,d.onerror=p}),Ke(n,"link",l),t.state.loading|=4,Zs(n,a.precedence,e),t.instance=n;case"script":return n=Ul(a.src),(s=e.querySelector(Tr(n)))?(t.instance=s,Ye(s),s):(l=a,(s=Tt.get(n))&&(l=B({},a),wd(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ye(s),Ke(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Zs(l,a.precedence,e));return t.instance}function Zs(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,n=s,d=0;d<l.length;d++){var u=l[d];if(u.dataset.precedence===t)n=u;else if(n!==s)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function kd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ks=null;function Ou(e,t,a){if(Ks===null){var l=new Map,s=Ks=new Map;s.set(a,l)}else s=Ks,l=s.get(a),l||(l=new Map,s.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var n=a[s];if(!(n[Gl]||n[Xe]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var d=n.getAttribute(t)||"";d=e+d;var u=l.get(d);u?u.push(n):l.set(d,[n])}}return l}function Uu(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Vf(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Lu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zf(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=Ol(l.href),n=t.querySelector(Ar(s));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Js.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=n,Ye(n);return}n=t.ownerDocument||t,l=Ru(l),(s=Tt.get(s))&&kd(l,s),n=n.createElement("link"),Ye(n);var d=n;d._p=new Promise(function(u,p){d.onload=u,d.onerror=p}),Ke(n,"link",l),a.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Js.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var jd=0;function Kf(e,t){return e.stylesheets&&e.count===0&&$s(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&$s(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&jd===0&&(jd=62500*Af());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$s(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>jd?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Js(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$s(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fs=null;function $s(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fs=new Map,t.forEach(Jf,e),Fs=null,Js.call(e))}function Jf(e,t){if(!(t.state.loading&4)){var a=Fs.get(e);if(a)var l=a.get(null);else{a=new Map,Fs.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<s.length;n++){var d=s[n];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),l=d)}l&&a.set(null,l)}s=t.instance,d=s.getAttribute("data-precedence"),n=a.get(d)||l,n===l&&a.set(null,s),a.set(d,s),this.count++,l=Js.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),n?n.parentNode.insertBefore(s,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Er={$$typeof:L,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Ff(e,t,a,l,s,n,d,u,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.hiddenUpdates=yn(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=n,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function _u(e,t,a,l,s,n,d,u,p,S,R,O){return e=new Ff(e,t,a,d,p,S,R,O,u),t=1,n===!0&&(t|=24),n=ut(3,null,null,t),e.current=n,n.stateNode=e,t=ai(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:t},ni(n),e}function Hu(e){return e?(e=xl,e):xl}function qu(e,t,a,l,s,n){s=Hu(s),l.context===null?l.context=s:l.pendingContext=s,l=pa(t),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=ha(e,l,t),a!==null&&(nt(a,e,t),ir(a,e,t))}function Yu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Nd(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}function Qu(e){if(e.tag===13||e.tag===31){var t=Ha(e,67108864);t!==null&&nt(t,e,67108864),Nd(e,67108864)}}function Xu(e){if(e.tag===13||e.tag===31){var t=pt();t=vn(t);var a=Ha(e,t);a!==null&&nt(a,e,t),Nd(e,t)}}var Ws=!0;function $f(e,t,a,l){var s=E.T;E.T=null;var n=Y.p;try{Y.p=2,Cd(e,t,a,l)}finally{Y.p=n,E.T=s}}function Wf(e,t,a,l){var s=E.T;E.T=null;var n=Y.p;try{Y.p=8,Cd(e,t,a,l)}finally{Y.p=n,E.T=s}}function Cd(e,t,a,l){if(Ws){var s=Sd(l);if(s===null)ud(e,t,l,Is,a),Vu(e,l);else if(Pf(s,e,t,a,l))l.stopPropagation();else if(Vu(e,l),t&4&&-1<If.indexOf(e)){for(;s!==null;){var n=al(s);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var d=Da(n.pendingLanes);if(d!==0){var u=n;for(u.pendingLanes|=2,u.entangledLanes|=2;d;){var p=1<<31-ot(d);u.entanglements[1]|=p,d&=~p}Ht(n),(fe&6)===0&&(Ds=it()+500,jr(0))}}break;case 31:case 13:u=Ha(n,2),u!==null&&nt(u,n,2),Us(),Nd(n,2)}if(n=Sd(l),n===null&&ud(e,t,l,Is,a),n===s)break;s=n}s!==null&&l.stopPropagation()}else ud(e,t,l,null,a)}}function Sd(e){return e=Tn(e),Ad(e)}var Is=null;function Ad(e){if(Is=null,e=tl(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Is=e,null}function Gu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Um()){case Wd:return 2;case Id:return 8;case Yr:case Lm:return 32;case Pd:return 268435456;default:return 32}default:return 32}}var Td=!1,Ta=null,Ea=null,za=null,zr=new Map,Mr=new Map,Ma=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vu(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function Br(e,t,a,l,s,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[s]},t!==null&&(t=al(t),t!==null&&Qu(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Pf(e,t,a,l,s){switch(t){case"focusin":return Ta=Br(Ta,e,t,a,l,s),!0;case"dragenter":return Ea=Br(Ea,e,t,a,l,s),!0;case"mouseover":return za=Br(za,e,t,a,l,s),!0;case"pointerover":var n=s.pointerId;return zr.set(n,Br(zr.get(n)||null,e,t,a,l,s)),!0;case"gotpointercapture":return n=s.pointerId,Mr.set(n,Br(Mr.get(n)||null,e,t,a,l,s)),!0}return!1}function Zu(e){var t=tl(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,so(e.priority,function(){Xu(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,so(e.priority,function(){Xu(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Sd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);An=l,a.target.dispatchEvent(l),An=null}else return t=al(a),t!==null&&Qu(t),e.blockedOn=a,!1;t.shift()}return!0}function Ku(e,t,a){Ps(e)&&a.delete(t)}function eg(){Td=!1,Ta!==null&&Ps(Ta)&&(Ta=null),Ea!==null&&Ps(Ea)&&(Ea=null),za!==null&&Ps(za)&&(za=null),zr.forEach(Ku),Mr.forEach(Ku)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Td||(Td=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,eg)))}var tn=null;function Ju(e){tn!==e&&(tn=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){tn===e&&(tn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Ad(l||a)===null)continue;break}var n=al(a);n!==null&&(e.splice(t,3),t-=3,Si(n,{pending:!0,data:s,method:a.method,action:l},l,s))}}))}function Ll(e){function t(p){return en(p,e)}Ta!==null&&en(Ta,e),Ea!==null&&en(Ea,e),za!==null&&en(za,e),zr.forEach(t),Mr.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Zu(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var s=a[l],n=a[l+1],d=s[et]||null;if(typeof n=="function")d||Ju(a);else if(d){var u=null;if(n&&n.hasAttribute("formAction")){if(s=n,d=n[et]||null)u=d.formAction;else if(Ad(s)!==null)continue}else u=d.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Ju(a)}}}function Fu(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(d){return s=d})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Ed(e){this._internalRoot=e}an.prototype.render=Ed.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=pt();qu(a,l,e,t,null,null)},an.prototype.unmount=Ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qu(e.current,2,null,e,null,null),Us(),t[el]=null}};function an(e){this._internalRoot=e}an.prototype.unstable_scheduleHydration=function(e){if(e){var t=ro();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Zu(e)}};var $u=o.version;if($u!=="19.2.0")throw Error(c(527,$u,"19.2.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var tg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ln=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ln.isDisabled&&ln.supportsFiber)try{Yl=ln.inject(tg),dt=ln}catch{}}return Dr.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,l="",s=lc,n=rc,d=sc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=_u(e,1,!1,null,null,a,l,null,s,n,d,Fu),e[el]=t.current,cd(e),new Ed(t)},Dr.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var l=!1,s="",n=lc,d=rc,u=sc,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=_u(e,1,!0,t,a??null,l,s,p,n,d,u,Fu),t.context=Hu(null),a=t.current,l=pt(),l=vn(l),s=pa(l),s.callback=null,ha(a,s,l),a=l,t.current.lanes=a,Xl(t,a),Ht(t),e[el]=t.current,cd(e),new an(t)},Dr.version="19.2.0",Dr}var nm;function mg(){if(nm)return Bd.exports;nm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Bd.exports=ug(),Bd.exports}var xg=mg();const fg=gm(xg);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var im="popstate";function gg(i={}){function o(f,g){let{pathname:h="/",search:j="",hash:y=""}=Pa(f.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),_d("",{pathname:h,search:j,hash:y},g.state&&g.state.usr||null,g.state&&g.state.key||"default")}function m(f,g){let h=f.document.querySelector("base"),j="";if(h&&h.getAttribute("href")){let y=f.location.href,x=y.indexOf("#");j=x===-1?y:y.slice(0,x)}return j+"#"+(typeof g=="string"?g:Lr(g))}function c(f,g){Et(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(g)})`)}return hg(o,m,c,i)}function Te(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Et(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function pg(){return Math.random().toString(36).substring(2,10)}function dm(i,o){return{usr:i.state,key:i.key,idx:o}}function _d(i,o,m=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?Pa(o):o,state:m,key:o&&o.key||c||pg()}}function Lr({pathname:i="/",search:o="",hash:m=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),m&&m!=="#"&&(i+=m.charAt(0)==="#"?m:"#"+m),i}function Pa(i){let o={};if(i){let m=i.indexOf("#");m>=0&&(o.hash=i.substring(m),i=i.substring(0,m));let c=i.indexOf("?");c>=0&&(o.search=i.substring(c),i=i.substring(0,c)),i&&(o.pathname=i)}return o}function hg(i,o,m,c={}){let{window:f=document.defaultView,v5Compat:g=!1}=c,h=f.history,j="POP",y=null,x=N();x==null&&(x=0,h.replaceState({...h.state,idx:x},""));function N(){return(h.state||{idx:null}).idx}function B(){j="POP";let k=N(),_=k==null?null:k-x;x=k,y&&y({action:j,location:X.location,delta:_})}function H(k,_){j="PUSH";let T=_d(X.location,k,_);m&&m(T,k),x=N()+1;let L=dm(T,x),ue=X.createHref(T);try{h.pushState(L,"",ue)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;f.location.assign(ue)}g&&y&&y({action:j,location:X.location,delta:1})}function q(k,_){j="REPLACE";let T=_d(X.location,k,_);m&&m(T,k),x=N();let L=dm(T,x),ue=X.createHref(T);h.replaceState(L,"",ue),g&&y&&y({action:j,location:X.location,delta:0})}function Q(k){return yg(k)}let X={get action(){return j},get location(){return i(f,h)},listen(k){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(im,B),y=k,()=>{f.removeEventListener(im,B),y=null}},createHref(k){return o(f,k)},createURL:Q,encodeLocation(k){let _=Q(k);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:H,replace:q,go(k){return h.go(k)}};return X}function yg(i,o=!1){let m="http://localhost";typeof window<"u"&&(m=window.location.origin!=="null"?window.location.origin:window.location.href),Te(m,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:Lr(i);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=m+c),new URL(c,m)}function pm(i,o,m="/"){return vg(i,o,m,!1)}function vg(i,o,m,c){let f=typeof o=="string"?Pa(o):o,g=ia(f.pathname||"/",m);if(g==null)return null;let h=hm(i);bg(h);let j=null;for(let y=0;j==null&&y<h.length;++y){let x=Mg(g);j=Eg(h[y],x,c)}return j}function hm(i,o=[],m=[],c="",f=!1){let g=(h,j,y=f,x)=>{let N={relativePath:x===void 0?h.path||"":x,caseSensitive:h.caseSensitive===!0,childrenIndex:j,route:h};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(c)&&y)return;Te(N.relativePath.startsWith(c),`Absolute route path "${N.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(c.length)}let B=na([c,N.relativePath]),H=m.concat(N);h.children&&h.children.length>0&&(Te(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${B}".`),hm(h.children,o,H,B,y)),!(h.path==null&&!h.index)&&o.push({path:B,score:Ag(B,h.index),routesMeta:H})};return i.forEach((h,j)=>{var y;if(h.path===""||!((y=h.path)!=null&&y.includes("?")))g(h,j);else for(let x of ym(h.path))g(h,j,!0,x)}),o}function ym(i){let o=i.split("/");if(o.length===0)return[];let[m,...c]=o,f=m.endsWith("?"),g=m.replace(/\?$/,"");if(c.length===0)return f?[g,""]:[g];let h=ym(c.join("/")),j=[];return j.push(...h.map(y=>y===""?g:[g,y].join("/"))),f&&j.push(...h),j.map(y=>i.startsWith("/")&&y===""?"/":y)}function bg(i){i.sort((o,m)=>o.score!==m.score?m.score-o.score:Tg(o.routesMeta.map(c=>c.childrenIndex),m.routesMeta.map(c=>c.childrenIndex)))}var kg=/^:[\w-]+$/,wg=3,jg=2,Ng=1,Cg=10,Sg=-2,om=i=>i==="*";function Ag(i,o){let m=i.split("/"),c=m.length;return m.some(om)&&(c+=Sg),o&&(c+=jg),m.filter(f=>!om(f)).reduce((f,g)=>f+(kg.test(g)?wg:g===""?Ng:Cg),c)}function Tg(i,o){return i.length===o.length&&i.slice(0,-1).every((c,f)=>c===o[f])?i[i.length-1]-o[o.length-1]:0}function Eg(i,o,m=!1){let{routesMeta:c}=i,f={},g="/",h=[];for(let j=0;j<c.length;++j){let y=c[j],x=j===c.length-1,N=g==="/"?o:o.slice(g.length)||"/",B=on({path:y.relativePath,caseSensitive:y.caseSensitive,end:x},N),H=y.route;if(!B&&x&&m&&!c[c.length-1].route.index&&(B=on({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},N)),!B)return null;Object.assign(f,B.params),h.push({params:f,pathname:na([g,B.pathname]),pathnameBase:Og(na([g,B.pathnameBase])),route:H}),B.pathnameBase!=="/"&&(g=na([g,B.pathnameBase]))}return h}function on(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[m,c]=zg(i.path,i.caseSensitive,i.end),f=o.match(m);if(!f)return null;let g=f[0],h=g.replace(/(.)\/+$/,"$1"),j=f.slice(1);return{params:c.reduce((x,{paramName:N,isOptional:B},H)=>{if(N==="*"){let Q=j[H]||"";h=g.slice(0,g.length-Q.length).replace(/(.)\/+$/,"$1")}const q=j[H];return B&&!q?x[N]=void 0:x[N]=(q||"").replace(/%2F/g,"/"),x},{}),pathname:g,pathnameBase:h,pattern:i}}function zg(i,o=!1,m=!0){Et(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,j,y)=>(c.push({paramName:j,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(c.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):m?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),c]}function Mg(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Et(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function ia(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let m=o.endsWith("/")?o.length-1:o.length,c=i.charAt(m);return c&&c!=="/"?null:i.slice(m)||"/"}function Bg(i,o="/"){let{pathname:m,search:c="",hash:f=""}=typeof i=="string"?Pa(i):i;return{pathname:m?m.startsWith("/")?m:Rg(m,o):o,search:Ug(c),hash:Lg(f)}}function Rg(i,o){let m=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?m.length>1&&m.pop():f!=="."&&m.push(f)}),m.length>1?m.join("/"):"/"}function Ud(i,o,m,c){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${m}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dg(i){return i.filter((o,m)=>m===0||o.route.path&&o.route.path.length>0)}function Yd(i){let o=Dg(i);return o.map((m,c)=>c===o.length-1?m.pathname:m.pathnameBase)}function Qd(i,o,m,c=!1){let f;typeof i=="string"?f=Pa(i):(f={...i},Te(!f.pathname||!f.pathname.includes("?"),Ud("?","pathname","search",f)),Te(!f.pathname||!f.pathname.includes("#"),Ud("#","pathname","hash",f)),Te(!f.search||!f.search.includes("#"),Ud("#","search","hash",f)));let g=i===""||f.pathname==="",h=g?"/":f.pathname,j;if(h==null)j=m;else{let B=o.length-1;if(!c&&h.startsWith("..")){let H=h.split("/");for(;H[0]==="..";)H.shift(),B-=1;f.pathname=H.join("/")}j=B>=0?o[B]:"/"}let y=Bg(f,j),x=h&&h!=="/"&&h.endsWith("/"),N=(g||h===".")&&m.endsWith("/");return!y.pathname.endsWith("/")&&(x||N)&&(y.pathname+="/"),y}var na=i=>i.join("/").replace(/\/\/+/g,"/"),Og=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Ug=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Lg=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function _g(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var vm=["POST","PUT","PATCH","DELETE"];new Set(vm);var Hg=["GET",...vm];new Set(Hg);var _l=z.createContext(null);_l.displayName="DataRouter";var cn=z.createContext(null);cn.displayName="DataRouterState";z.createContext(!1);var bm=z.createContext({isTransitioning:!1});bm.displayName="ViewTransition";var qg=z.createContext(new Map);qg.displayName="Fetchers";var Yg=z.createContext(null);Yg.displayName="Await";var Rt=z.createContext(null);Rt.displayName="Navigation";var _r=z.createContext(null);_r.displayName="Location";var Dt=z.createContext({outlet:null,matches:[],isDataRoute:!1});Dt.displayName="Route";var Xd=z.createContext(null);Xd.displayName="RouteError";function Qg(i,{relative:o}={}){Te(Hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:m,navigator:c}=z.useContext(Rt),{hash:f,pathname:g,search:h}=Hr(i,{relative:o}),j=g;return m!=="/"&&(j=g==="/"?m:na([m,g])),c.createHref({pathname:j,search:h,hash:f})}function Hl(){return z.useContext(_r)!=null}function Yt(){return Te(Hl(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(_r).location}var km="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wm(i){z.useContext(Rt).static||z.useLayoutEffect(i)}function jm(){let{isDataRoute:i}=z.useContext(Dt);return i?ap():Xg()}function Xg(){Te(Hl(),"useNavigate() may be used only in the context of a <Router> component.");let i=z.useContext(_l),{basename:o,navigator:m}=z.useContext(Rt),{matches:c}=z.useContext(Dt),{pathname:f}=Yt(),g=JSON.stringify(Yd(c)),h=z.useRef(!1);return wm(()=>{h.current=!0}),z.useCallback((y,x={})=>{if(Et(h.current,km),!h.current)return;if(typeof y=="number"){m.go(y);return}let N=Qd(y,JSON.parse(g),f,x.relative==="path");i==null&&o!=="/"&&(N.pathname=N.pathname==="/"?o:na([o,N.pathname])),(x.replace?m.replace:m.push)(N,x.state,x)},[o,m,g,f,i])}z.createContext(null);function Gg(){let{matches:i}=z.useContext(Dt),o=i[i.length-1];return o?o.params:{}}function Hr(i,{relative:o}={}){let{matches:m}=z.useContext(Dt),{pathname:c}=Yt(),f=JSON.stringify(Yd(m));return z.useMemo(()=>Qd(i,JSON.parse(f),c,o==="path"),[i,f,c,o])}function Vg(i,o){return Nm(i,o)}function Nm(i,o,m,c,f){var T;Te(Hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:g}=z.useContext(Rt),{matches:h}=z.useContext(Dt),j=h[h.length-1],y=j?j.params:{},x=j?j.pathname:"/",N=j?j.pathnameBase:"/",B=j&&j.route;{let L=B&&B.path||"";Cm(x,!B||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let H=Yt(),q;if(o){let L=typeof o=="string"?Pa(o):o;Te(N==="/"||((T=L.pathname)==null?void 0:T.startsWith(N)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${L.pathname}" was given in the \`location\` prop.`),q=L}else q=H;let Q=q.pathname||"/",X=Q;if(N!=="/"){let L=N.replace(/^\//,"").split("/");X="/"+Q.replace(/^\//,"").split("/").slice(L.length).join("/")}let k=pm(i,{pathname:X});Et(B||k!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),Et(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=$g(k&&k.map(L=>Object.assign({},L,{params:Object.assign({},y,L.params),pathname:na([N,g.encodeLocation?g.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?N:na([N,g.encodeLocation?g.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),h,m,c,f);return o&&_?z.createElement(_r.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...q},navigationType:"POP"}},_):_}function Zg(){let i=tp(),o=_g(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),m=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},g={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:g},"ErrorBoundary")," or"," ",z.createElement("code",{style:g},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},o),m?z.createElement("pre",{style:f},m):null,h)}var Kg=z.createElement(Zg,null),Jg=class extends z.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){this.props.unstable_onError?this.props.unstable_onError(i,o):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?z.createElement(Dt.Provider,{value:this.props.routeContext},z.createElement(Xd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Fg({routeContext:i,match:o,children:m}){let c=z.useContext(_l);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),z.createElement(Dt.Provider,{value:i},m)}function $g(i,o=[],m=null,c=null,f=null){if(i==null){if(!m)return null;if(m.errors)i=m.matches;else if(o.length===0&&!m.initialized&&m.matches.length>0)i=m.matches;else return null}let g=i,h=m==null?void 0:m.errors;if(h!=null){let x=g.findIndex(N=>N.route.id&&(h==null?void 0:h[N.route.id])!==void 0);Te(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),g=g.slice(0,Math.min(g.length,x+1))}let j=!1,y=-1;if(m)for(let x=0;x<g.length;x++){let N=g[x];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(y=x),N.route.id){let{loaderData:B,errors:H}=m,q=N.route.loader&&!B.hasOwnProperty(N.route.id)&&(!H||H[N.route.id]===void 0);if(N.route.lazy||q){j=!0,y>=0?g=g.slice(0,y+1):g=[g[0]];break}}}return g.reduceRight((x,N,B)=>{let H,q=!1,Q=null,X=null;m&&(H=h&&N.route.id?h[N.route.id]:void 0,Q=N.route.errorElement||Kg,j&&(y<0&&B===0?(Cm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,X=null):y===B&&(q=!0,X=N.route.hydrateFallbackElement||null)));let k=o.concat(g.slice(0,B+1)),_=()=>{let T;return H?T=Q:q?T=X:N.route.Component?T=z.createElement(N.route.Component,null):N.route.element?T=N.route.element:T=x,z.createElement(Fg,{match:N,routeContext:{outlet:x,matches:k,isDataRoute:m!=null},children:T})};return m&&(N.route.ErrorBoundary||N.route.errorElement||B===0)?z.createElement(Jg,{location:m.location,revalidation:m.revalidation,component:Q,error:H,children:_(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:c}):_()},null)}function Gd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wg(i){let o=z.useContext(_l);return Te(o,Gd(i)),o}function Ig(i){let o=z.useContext(cn);return Te(o,Gd(i)),o}function Pg(i){let o=z.useContext(Dt);return Te(o,Gd(i)),o}function Vd(i){let o=Pg(i),m=o.matches[o.matches.length-1];return Te(m.route.id,`${i} can only be used on routes that contain a unique "id"`),m.route.id}function ep(){return Vd("useRouteId")}function tp(){var c;let i=z.useContext(Xd),o=Ig("useRouteError"),m=Vd("useRouteError");return i!==void 0?i:(c=o.errors)==null?void 0:c[m]}function ap(){let{router:i}=Wg("useNavigate"),o=Vd("useNavigate"),m=z.useRef(!1);return wm(()=>{m.current=!0}),z.useCallback(async(f,g={})=>{Et(m.current,km),m.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:o,...g}))},[i,o])}var cm={};function Cm(i,o,m){!o&&!cm[i]&&(cm[i]=!0,Et(!1,m))}z.memo(lp);function lp({routes:i,future:o,state:m,unstable_onError:c}){return Nm(i,void 0,m,c,o)}function rp({to:i,replace:o,state:m,relative:c}){Te(Hl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=z.useContext(Rt);Et(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=z.useContext(Dt),{pathname:h}=Yt(),j=jm(),y=Qd(i,Yd(g),h,c==="path"),x=JSON.stringify(y);return z.useEffect(()=>{j(JSON.parse(x),{replace:o,state:m,relative:c})},[j,x,c,o,m]),null}function Ia(i){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sp({basename:i="/",children:o=null,location:m,navigationType:c="POP",navigator:f,static:g=!1}){Te(!Hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),j=z.useMemo(()=>({basename:h,navigator:f,static:g,future:{}}),[h,f,g]);typeof m=="string"&&(m=Pa(m));let{pathname:y="/",search:x="",hash:N="",state:B=null,key:H="default"}=m,q=z.useMemo(()=>{let Q=ia(y,h);return Q==null?null:{location:{pathname:Q,search:x,hash:N,state:B,key:H},navigationType:c}},[h,y,x,N,B,H,c]);return Et(q!=null,`<Router basename="${h}"> is not able to match the URL "${y}${x}${N}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:z.createElement(Rt.Provider,{value:j},z.createElement(_r.Provider,{children:o,value:q}))}function np({children:i,location:o}){return Vg(Hd(i),o)}function Hd(i,o=[]){let m=[];return z.Children.forEach(i,(c,f)=>{if(!z.isValidElement(c))return;let g=[...o,f];if(c.type===z.Fragment){m.push.apply(m,Hd(c.props.children,g));return}Te(c.type===Ia,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||g.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=Hd(c.props.children,g)),m.push(h)}),m}var nn="get",dn="application/x-www-form-urlencoded";function un(i){return i!=null&&typeof i.tagName=="string"}function ip(i){return un(i)&&i.tagName.toLowerCase()==="button"}function dp(i){return un(i)&&i.tagName.toLowerCase()==="form"}function op(i){return un(i)&&i.tagName.toLowerCase()==="input"}function cp(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function up(i,o){return i.button===0&&(!o||o==="_self")&&!cp(i)}var rn=null;function mp(){if(rn===null)try{new FormData(document.createElement("form"),0),rn=!1}catch{rn=!0}return rn}var xp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ld(i){return i!=null&&!xp.has(i)?(Et(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dn}"`),null):i}function fp(i,o){let m,c,f,g,h;if(dp(i)){let j=i.getAttribute("action");c=j?ia(j,o):null,m=i.getAttribute("method")||nn,f=Ld(i.getAttribute("enctype"))||dn,g=new FormData(i)}else if(ip(i)||op(i)&&(i.type==="submit"||i.type==="image")){let j=i.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||j.getAttribute("action");if(c=y?ia(y,o):null,m=i.getAttribute("formmethod")||j.getAttribute("method")||nn,f=Ld(i.getAttribute("formenctype"))||Ld(j.getAttribute("enctype"))||dn,g=new FormData(j,i),!mp()){let{name:x,type:N,value:B}=i;if(N==="image"){let H=x?`${x}.`:"";g.append(`${H}x`,"0"),g.append(`${H}y`,"0")}else x&&g.append(x,B)}}else{if(un(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');m=nn,c=null,f=dn,h=i}return g&&f==="text/plain"&&(h=g,g=void 0),{action:c,method:m.toLowerCase(),encType:f,formData:g,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zd(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function gp(i,o,m){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${m}`:o&&ia(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${m}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${m}`,c}async function pp(i,o){if(i.id in o)return o[i.id];try{let m=await import(i.module);return o[i.id]=m,m}catch(m){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(m),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hp(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function yp(i,o,m){let c=await Promise.all(i.map(async f=>{let g=o.routes[f.route.id];if(g){let h=await pp(g,m);return h.links?h.links():[]}return[]}));return wp(c.flat(1).filter(hp).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function um(i,o,m,c,f,g){let h=(y,x)=>m[x]?y.route.id!==m[x].route.id:!0,j=(y,x)=>{var N;return m[x].pathname!==y.pathname||((N=m[x].route.path)==null?void 0:N.endsWith("*"))&&m[x].params["*"]!==y.params["*"]};return g==="assets"?o.filter((y,x)=>h(y,x)||j(y,x)):g==="data"?o.filter((y,x)=>{var B;let N=c.routes[y.route.id];if(!N||!N.hasLoader)return!1;if(h(y,x)||j(y,x))return!0;if(y.route.shouldRevalidate){let H=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((B=m[0])==null?void 0:B.params)||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof H=="boolean")return H}return!0}):[]}function vp(i,o,{includeHydrateFallback:m}={}){return bp(i.map(c=>{let f=o.routes[c.route.id];if(!f)return[];let g=[f.module];return f.clientActionModule&&(g=g.concat(f.clientActionModule)),f.clientLoaderModule&&(g=g.concat(f.clientLoaderModule)),m&&f.hydrateFallbackModule&&(g=g.concat(f.hydrateFallbackModule)),f.imports&&(g=g.concat(f.imports)),g}).flat(1))}function bp(i){return[...new Set(i)]}function kp(i){let o={},m=Object.keys(i).sort();for(let c of m)o[c]=i[c];return o}function wp(i,o){let m=new Set;return new Set(o),i.reduce((c,f)=>{let g=JSON.stringify(kp(f));return m.has(g)||(m.add(g),c.push({key:g,link:f})),c},[])}function Sm(){let i=z.useContext(_l);return Zd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function jp(){let i=z.useContext(cn);return Zd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Kd=z.createContext(void 0);Kd.displayName="FrameworkContext";function Am(){let i=z.useContext(Kd);return Zd(i,"You must render this element inside a <HydratedRouter> element"),i}function Np(i,o){let m=z.useContext(Kd),[c,f]=z.useState(!1),[g,h]=z.useState(!1),{onFocus:j,onBlur:y,onMouseEnter:x,onMouseLeave:N,onTouchStart:B}=o,H=z.useRef(null);z.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let X=_=>{_.forEach(T=>{h(T.isIntersecting)})},k=new IntersectionObserver(X,{threshold:.5});return H.current&&k.observe(H.current),()=>{k.disconnect()}}},[i]),z.useEffect(()=>{if(c){let X=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(X)}}},[c]);let q=()=>{f(!0)},Q=()=>{f(!1),h(!1)};return m?i!=="intent"?[g,H,{}]:[g,H,{onFocus:Or(j,q),onBlur:Or(y,Q),onMouseEnter:Or(x,q),onMouseLeave:Or(N,Q),onTouchStart:Or(B,q)}]:[!1,H,{}]}function Or(i,o){return m=>{i&&i(m),m.defaultPrevented||o(m)}}function Cp({page:i,...o}){let{router:m}=Sm(),c=z.useMemo(()=>pm(m.routes,i,m.basename),[m.routes,i,m.basename]);return c?z.createElement(Ap,{page:i,matches:c,...o}):null}function Sp(i){let{manifest:o,routeModules:m}=Am(),[c,f]=z.useState([]);return z.useEffect(()=>{let g=!1;return yp(i,o,m).then(h=>{g||f(h)}),()=>{g=!0}},[i,o,m]),c}function Ap({page:i,matches:o,...m}){let c=Yt(),{manifest:f,routeModules:g}=Am(),{basename:h}=Sm(),{loaderData:j,matches:y}=jp(),x=z.useMemo(()=>um(i,o,y,f,c,"data"),[i,o,y,f,c]),N=z.useMemo(()=>um(i,o,y,f,c,"assets"),[i,o,y,f,c]),B=z.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let Q=new Set,X=!1;if(o.forEach(_=>{var L;let T=f.routes[_.route.id];!T||!T.hasLoader||(!x.some(ue=>ue.route.id===_.route.id)&&_.route.id in j&&((L=g[_.route.id])!=null&&L.shouldRevalidate)||T.hasClientLoader?X=!0:Q.add(_.route.id))}),Q.size===0)return[];let k=gp(i,h,"data");return X&&Q.size>0&&k.searchParams.set("_routes",o.filter(_=>Q.has(_.route.id)).map(_=>_.route.id).join(",")),[k.pathname+k.search]},[h,j,c,f,x,o,i,g]),H=z.useMemo(()=>vp(N,f),[N,f]),q=Sp(N);return z.createElement(z.Fragment,null,B.map(Q=>z.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...m})),H.map(Q=>z.createElement("link",{key:Q,rel:"modulepreload",href:Q,...m})),q.map(({key:Q,link:X})=>z.createElement("link",{key:Q,nonce:m.nonce,...X})))}function Tp(...i){return o=>{i.forEach(m=>{typeof m=="function"?m(o):m!=null&&(m.current=o)})}}var Tm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Tm&&(window.__reactRouterVersion="7.9.4")}catch{}function Ep({basename:i,children:o,window:m}){let c=z.useRef();c.current==null&&(c.current=gg({window:m,v5Compat:!0}));let f=c.current,[g,h]=z.useState({action:f.action,location:f.location}),j=z.useCallback(y=>{z.startTransition(()=>h(y))},[h]);return z.useLayoutEffect(()=>f.listen(j),[f,j]),z.createElement(sp,{basename:i,children:o,location:g.location,navigationType:g.action,navigator:f})}var Em=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ht=z.forwardRef(function({onClick:o,discover:m="render",prefetch:c="none",relative:f,reloadDocument:g,replace:h,state:j,target:y,to:x,preventScrollReset:N,viewTransition:B,...H},q){let{basename:Q}=z.useContext(Rt),X=typeof x=="string"&&Em.test(x),k,_=!1;if(typeof x=="string"&&X&&(k=x,Tm))try{let Ne=new URL(window.location.href),$e=x.startsWith("//")?new URL(Ne.protocol+x):new URL(x),We=ia($e.pathname,Q);$e.origin===Ne.origin&&We!=null?x=We+$e.search+$e.hash:_=!0}catch{Et(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=Qg(x,{relative:f}),[L,ue,ye]=Np(c,H),Me=Bp(x,{replace:h,state:j,target:y,preventScrollReset:N,relative:f,viewTransition:B});function P(Ne){o&&o(Ne),Ne.defaultPrevented||Me(Ne)}let Be=z.createElement("a",{...H,...ye,href:k||T,onClick:_||g?o:P,ref:Tp(q,ue),target:y,"data-discover":!X&&m==="render"?"true":void 0});return L&&!X?z.createElement(z.Fragment,null,Be,z.createElement(Cp,{page:T})):Be});ht.displayName="Link";var qt=z.forwardRef(function({"aria-current":o="page",caseSensitive:m=!1,className:c="",end:f=!1,style:g,to:h,viewTransition:j,children:y,...x},N){let B=Hr(h,{relative:x.relative}),H=Yt(),q=z.useContext(cn),{navigator:Q,basename:X}=z.useContext(Rt),k=q!=null&&Lp(B)&&j===!0,_=Q.encodeLocation?Q.encodeLocation(B).pathname:B.pathname,T=H.pathname,L=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;m||(T=T.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&X&&(L=ia(L,X)||L);const ue=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let ye=T===_||!f&&T.startsWith(_)&&T.charAt(ue)==="/",Me=L!=null&&(L===_||!f&&L.startsWith(_)&&L.charAt(_.length)==="/"),P={isActive:ye,isPending:Me,isTransitioning:k},Be=ye?o:void 0,Ne;typeof c=="function"?Ne=c(P):Ne=[c,ye?"active":null,Me?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let $e=typeof g=="function"?g(P):g;return z.createElement(ht,{...x,"aria-current":Be,className:Ne,ref:N,style:$e,to:h,viewTransition:j},typeof y=="function"?y(P):y)});qt.displayName="NavLink";var zp=z.forwardRef(({discover:i="render",fetcherKey:o,navigate:m,reloadDocument:c,replace:f,state:g,method:h=nn,action:j,onSubmit:y,relative:x,preventScrollReset:N,viewTransition:B,...H},q)=>{let Q=Op(),X=Up(j,{relative:x}),k=h.toLowerCase()==="get"?"get":"post",_=typeof j=="string"&&Em.test(j),T=L=>{if(y&&y(L),L.defaultPrevented)return;L.preventDefault();let ue=L.nativeEvent.submitter,ye=(ue==null?void 0:ue.getAttribute("formmethod"))||h;Q(ue||L.currentTarget,{fetcherKey:o,method:ye,navigate:m,replace:f,state:g,relative:x,preventScrollReset:N,viewTransition:B})};return z.createElement("form",{ref:q,method:k,action:X,onSubmit:c?y:T,...H,"data-discover":!_&&i==="render"?"true":void 0})});zp.displayName="Form";function Mp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zm(i){let o=z.useContext(_l);return Te(o,Mp(i)),o}function Bp(i,{target:o,replace:m,state:c,preventScrollReset:f,relative:g,viewTransition:h}={}){let j=jm(),y=Yt(),x=Hr(i,{relative:g});return z.useCallback(N=>{if(up(N,o)){N.preventDefault();let B=m!==void 0?m:Lr(y)===Lr(x);j(i,{replace:B,state:c,preventScrollReset:f,relative:g,viewTransition:h})}},[y,j,x,m,c,o,i,f,g,h])}var Rp=0,Dp=()=>`__${String(++Rp)}__`;function Op(){let{router:i}=zm("useSubmit"),{basename:o}=z.useContext(Rt),m=ep();return z.useCallback(async(c,f={})=>{let{action:g,method:h,encType:j,formData:y,body:x}=fp(c,o);if(f.navigate===!1){let N=f.fetcherKey||Dp();await i.fetch(N,m,f.action||g,{preventScrollReset:f.preventScrollReset,formData:y,body:x,formMethod:f.method||h,formEncType:f.encType||j,flushSync:f.flushSync})}else await i.navigate(f.action||g,{preventScrollReset:f.preventScrollReset,formData:y,body:x,formMethod:f.method||h,formEncType:f.encType||j,replace:f.replace,state:f.state,fromRouteId:m,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,o,m])}function Up(i,{relative:o}={}){let{basename:m}=z.useContext(Rt),c=z.useContext(Dt);Te(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),g={...Hr(i||".",{relative:o})},h=Yt();if(i==null){g.search=h.search;let j=new URLSearchParams(g.search),y=j.getAll("index");if(y.some(N=>N==="")){j.delete("index"),y.filter(B=>B).forEach(B=>j.append("index",B));let N=j.toString();g.search=N?`?${N}`:""}}return(!i||i===".")&&f.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),m!=="/"&&(g.pathname=g.pathname==="/"?m:na([m,g.pathname])),Lr(g)}function Lp(i,{relative:o}={}){let m=z.useContext(bm);Te(m!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=zm("useViewTransitionState"),f=Hr(i,{relative:o});if(!m.isTransitioning)return!1;let g=ia(m.currentLocation.pathname,c)||m.currentLocation.pathname,h=ia(m.nextLocation.pathname,c)||m.nextLocation.pathname;return on(f.pathname,h)!=null||on(f.pathname,g)!=null}const Jd=[{id:"get-paid-faster",title:"How to Get Paid Faster as a Freelancer: 10 Proven Strategies",description:"The fastest way to get paid as a freelancer is to implement clear payment terms upfront, require deposits on all projects, use automated invoicing systems with multiple payment options, and follow up consistently with professional payment reminders.",content:`
<h1 class="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
  Why Payment Delays Happen (And How to Prevent Them)
</h1>
<p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
  Freelancers lose thousands of dollars annually to late payments and unpaid invoices. The typical "net 30" payment terms can stretch to 60 or 90 days if you don't have systems in place. Here's your complete guide to transforming your payment process.
</p>

<div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 dark:bg-yellow-900/30 dark:border-yellow-400">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-yellow-800 dark:text-yellow-200">
        According to recent surveys, 70% of freelancers report experiencing late payments at least once per quarter.
      </p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">1. Set Crystal-Clear Payment Terms Before Starting Work</h2>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  Never begin work without written agreement on payment terms. Your contract should specify:
</p>
<ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
  <li>Project price (fixed or hourly rate)</li>
  <li>Deposit percentage (25-50% standard)</li>
  <li>Payment milestones for larger projects</li>
  <li>Due date (e.g., "7 days upon invoice receipt")</li>
  <li>Late payment fees (typically 1.5-2% monthly)</li>
</ul>
<div class="bg-blue-50 rounded-lg p-4 mb-6 dark:bg-blue-900/20">
  <p class="font-semibold text-blue-800 dark:text-blue-300 mb-2">Pro Tip:</p>
  <p class="text-blue-700 dark:text-blue-400">
    Use the "50/50 rule" - 50% upfront, 50% upon delivery. This ensures you're never working completely unpaid.
  </p>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">2. Require Upfront Deposits (Your Best Defense)</h2>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  A deposit accomplishes three things:
</p>
<ol class="list-decimal pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
  <li>Filters out unserious clients</li>
  <li>Covers initial costs and time</li>
  <li>Creates immediate client investment</li>
</ol>
<div class="bg-gray-50 rounded-lg p-4 mb-6 dark:bg-gray-800">
  <p class="font-mono text-sm text-gray-800 dark:text-gray-300">
    Script to use: "My policy requires a 50% deposit to secure your project in my schedule. The remaining balance will be due upon final delivery."
  </p>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">3. Implement Automated Invoicing Systems</h2>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  Manual invoicing wastes time and creates delays. Automate with:
</p>
<div class="overflow-x-auto mb-6">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Platform</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Best For</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Cost</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
      <tr>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">FreshBooks or QuickBooks</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Recurring clients</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$$</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Wave Apps</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Basic invoicing (free option)</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Free</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">HoneyBook</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Client management</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$$</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Stripe or PayPal</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Instant payments</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">% based</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  Set invoices to auto-send on project completion or monthly for retainer clients.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">4. Offer Multiple Payment Options</h2>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  The more ways clients can pay, the faster you'll get paid:
</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div class="bg-white p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-2">
      <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
        <span class="text-green-800 font-bold dark:text-green-300">✓</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Credit/debit cards</h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Fastest option</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-2">
      <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
        <span class="text-blue-800 font-bold dark:text-blue-300">✓</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Bank transfers (ACH)</h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Lowest fees</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-2">
      <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 dark:bg-purple-900">
        <span class="text-purple-800 font-bold dark:text-purple-300">✓</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">PayPal/Venmo</h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">For smaller amounts</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-2">
      <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 dark:bg-orange-900">
        <span class="text-orange-800 font-bold dark:text-orange-300">✓</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Digital wallets</h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Apple Pay, Google Pay</p>
  </div>
</div>
<div class="bg-green-50 rounded-lg p-4 mb-6 dark:bg-green-900/20">
  <p class="font-semibold text-green-800 dark:text-green-300 mb-2">Important:</p>
  <p class="text-green-700 dark:text-green-400">
    Include payment links directly in your invoices.
  </p>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">5. Create a Logical Payment Schedule</h2>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  For longer projects, break payments into milestones:
</p>
<div class="mb-6">
  <div class="flex items-center mb-4">
    <div class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3">1</div>
    <div>
      <p class="font-semibold text-gray-900 dark:text-white">30% deposit to start</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Secures project spot</p>
    </div>
  </div>
  <div class="flex items-center mb-4">
    <div class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3">2</div>
    <div>
      <p class="font-semibold text-gray-900 dark:text-white">30% upon first draft/phase completion</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Maintains cash flow</p>
    </div>
  </div>
  <div class="flex items-center">
    <div class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3">3</div>
    <div>
      <p class="font-semibold text-gray-900 dark:text-white">40% upon final delivery</p>
      <p class="text-sm text-gray-600 dark:text-gray-400">Final payment</p>
    </div>
  </div>
</div>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  This keeps cash flowing and reduces risk on both sides.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">6. Send Invoices Immediately Upon Completion</h2>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  Don't wait! Send invoices:
</p>
<ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
  <li>Same day the work is delivered</li>
  <li>Include clear deliverables list</li>
  <li>Use descriptive line items (not just "services rendered")</li>
  <li>Attach any supporting documents</li>
</ul>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">7. Use Smart Follow-Up Sequences</h2>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  Create a 3-email sequence for overdue payments:
</p>
<div class="space-y-4 mb-6">
  <div class="border-l-4 border-green-500 pl-4 py-2">
    <p class="font-semibold text-gray-900 dark:text-white">Day 3 overdue: Friendly reminder</p>
    <p class="text-sm text-gray-600 dark:text-gray-400 italic mt-1">"Hi [Name], just checking if you received my invoice #123 for [project]. Let me know if you have any questions!"</p>
  </div>
  <div class="border-l-4 border-yellow-500 pl-4 py-2">
    <p class="font-semibold text-gray-900 dark:text-white">Day 7 overdue: Firmer reminder</p>
    <p class="text-sm text-gray-600 dark:text-gray-400 italic mt-1">"Following up on invoice #123 now 7 days overdue. Please process payment by [date] to avoid late fees."</p>
  </div>
  <div class="border-l-4 border-red-500 pl-4 py-2">
    <p class="font-semibold text-gray-900 dark:text-white">Day 14 overdue: Final notice</p>
    <p class="text-sm text-gray-600 dark:text-gray-400 italic mt-1">"Payment is now 14 days overdue. Per our agreement, a late fee of [amount] has been added. All work will be paused until payment is received."</p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">8. Consider Early Payment Incentives</h2>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  Offer 2-3% discount for payment within 7 days. The psychology works - clients want to "save money" by paying early, which improves your cash flow.
</p>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">9. Stop Work for Late Payments</h2>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  This is crucial: Never continue working for clients who haven't paid for previous work.
</p>
<div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 dark:bg-red-900/20 dark:border-red-800">
  <p class="font-semibold text-red-800 dark:text-red-300">
    Have a clause in your contract stating that work pauses after 15 days of non-payment. This isn't punitive - it's business.
  </p>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">10. Use Retainers for Predictable Income</h2>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  Convert project clients to monthly retainers. Benefits:
</p>
<ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
  <li>Predictable monthly income</li>
  <li>No invoicing for each small task</li>
  <li>Stronger client relationships</li>
  <li>Less time chasing payments</li>
</ul>

<h2 class="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">Quick Implementation Checklist</h2>
<div class="bg-white rounded-lg border border-gray-200 p-6 mb-8 dark:bg-gray-800 dark:border-gray-700">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex items-start">
      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">Create a standard contract with payment terms</span>
    </div>
    <div class="flex items-start">
      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">Set up automated invoicing software</span>
    </div>
    <div class="flex items-start">
      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">Require 50% deposits on all new projects</span>
    </div>
    <div class="flex items-start">
      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">Add multiple payment methods to invoices</span>
    </div>
    <div class="flex items-start">
      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">Create email templates for payment reminders</span>
    </div>
    <div class="flex items-start">
      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">Implement a "no work without payment" policy</span>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">The Mindset Shift: You're a Business, Not a Friend</h2>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  The biggest barrier to getting paid faster is often psychological. You worry about appearing "pushy" or damaging the relationship. Remember:
</p>
<div class="bg-purple-50 rounded-lg p-6 mb-8 dark:bg-purple-900/20">
  <ul class="space-y-3">
    <li class="flex items-start">
      <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span class="text-purple-800 dark:text-purple-300">Clear payment terms are professional, not pushy</span>
    </li>
    <li class="flex items-start">
      <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span class="text-purple-800 dark:text-purple-300">Good clients expect to pay for quality work</span>
    </li>
    <li class="flex items-start">
      <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span class="text-purple-800 dark:text-purple-300">Your time and expertise have value</span>
    </li>
    <li class="flex items-start">
      <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span class="text-purple-800 dark:text-purple-300">Fast payment enables you to do your best work for them</span>
    </li>
  </ul>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Final Reality Check</h2>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  Using these strategies, I've reduced my average payment time from 42 days to 6 days. The fastest payment I ever received? 37 seconds from invoice to payment notification. That's the power of having the right systems.
</p>
<p class="mb-6 text-gray-700 dark:text-gray-300">
  Your freelance business can't survive on skill alone - it needs cash flow. Implement even 2-3 of these strategies this week, and watch your payment velocity transform. The time you save chasing payments can be spent on higher-value work or attracting better clients.
</p>

<div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white mb-8">
  <h3 class="text-2xl font-bold mb-4">Ready to Get Paid Faster?</h3>
  <p class="mb-6 opacity-90">
    Start today: Pick one system to implement immediately. Whether it's requiring deposits or setting up automated invoices, consistent small improvements compound into dramatically faster payments and a healthier business.
  </p>
  <button class="bg-white text-primary-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
    Create Your First Professional Invoice →
  </button>
</div>`,imageUrl:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",date:"Oct 12, 2023",author:"Sarah Jenkins",readTime:"5 min read"},{id:"invoicing-mistakes",title:"5 Common Invoicing Mistakes That Delay Your Payments (And How to Fix Them)",description:"Clear answer: The most common invoicing mistakes freelancers make include unclear payment terms, missing essential information, not sending invoices promptly, using unprofessional formats, and lacking automated follow-up systems—all of which directly delay getting paid.",content:`<h1 class="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
  The 5 Costly Invoicing Mistakes Every Freelancer Makes (And How to Fix Them)
</h1>
<p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
  Invoicing isn't just administrative paperwork—it's the bridge between your completed work and your bank account. Yet many freelancers undermine their own cash flow with easily preventable errors. After reviewing thousands of freelance invoices, I've identified the five most costly mistakes and the simple fixes to ensure you get paid faster and more consistently.
</p>

<div class="bg-red-50 border-l-4 border-red-500 p-4 mb-8 dark:bg-red-900/30 dark:border-red-400">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-red-800 dark:text-red-200">
        According to industry data, freelancers lose an average of 13% of their income to invoicing errors and payment delays.
      </p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white flex items-center">
  <span class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-800 font-bold mr-3 dark:bg-red-900 dark:text-red-300">1</span>
  Vague or Missing Payment Terms
</h2>
<div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 dark:bg-red-900/20 dark:border-red-800">
  <p class="font-semibold text-red-800 dark:text-red-300 mb-2">The Mistake:</p>
  <p class="text-red-700 dark:text-red-400">Sending an invoice that just says "Balance Due: $1,500" with no payment instructions, due date, or late fee policy.</p>
</div>

<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">Why It Delays Payment:</h3>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  Clients need clarity. Without specific terms, they'll:
</p>
<ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
  <li>Pay according to their company's standard cycle (often 30-45 days)</li>
  <li>Need to email you for payment details</li>
  <li>Treat your invoice as low priority</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">The Fix:</h3>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  Every invoice must include:
</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div class="bg-white p-4 rounded-lg border border-green-200 dark:bg-gray-800 dark:border-green-800">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
        <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
      </div>
      <span class="font-semibold text-gray-900 dark:text-white">Due Date</span>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">"Payment due within 7 days of receipt"</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-green-200 dark:bg-gray-800 dark:border-green-800">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
        <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
      </div>
      <span class="font-semibold text-gray-900 dark:text-white">Payment Methods</span>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">List all accepted (Bank transfer, PayPal, credit card)</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-green-200 dark:bg-gray-800 dark:border-green-800">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
        <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
      </div>
      <span class="font-semibold text-gray-900 dark:text-white">Account Details</span>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Include your banking information or payment link</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-green-200 dark:bg-gray-800 dark:border-green-800">
    <div class="flex items-center mb-2">
      <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
        <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
      </div>
      <span class="font-semibold text-gray-900 dark:text-white">Late Fee Policy</span>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">"1.5% monthly interest on overdue balances"</p>
  </div>
</div>

<div class="bg-blue-50 rounded-lg p-4 mb-8 dark:bg-blue-900/20">
  <p class="font-semibold text-blue-800 dark:text-blue-300 mb-2">Pro Tip:</p>
  <p class="text-blue-700 dark:text-blue-400">
    Use the phrase "Payment due upon receipt" instead of "Net 30" to psychologically encourage faster payment.
  </p>
</div>

<h2 class="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white flex items-center">
  <span class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-bold mr-3 dark:bg-orange-900 dark:text-orange-300">2</span>
  Missing Essential Information
</h2>
<div class="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 dark:bg-orange-900/20 dark:border-orange-800">
  <p class="font-semibold text-orange-800 dark:text-orange-300 mb-2">The Mistake:</p>
  <p class="text-orange-700 dark:text-orange-400">An invoice that's just your name, an amount, and "For services rendered."</p>
</div>

<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">Why It Gets Questioned:</h3>
<p class="mb-4 text-gray-700 dark:text-gray-300">
  Accounting departments need specific information to process payments. Missing details trigger:
</p>
<ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
  <li>Approval delays while they request clarification</li>
  <li>Potential rejection if it doesn't match their internal requirements</li>
  <li>Slower processing as it moves between departments</li>
</ul>

<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">The Fix: The 10 essential elements every invoice needs:</h3>
<div class="overflow-x-auto mb-6">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">#</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Element</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Why It's Critical</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">1</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Your business name/legal name</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Legal requirement for payment processing</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">2</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Your contact information</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Address, phone, email for verification</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">3</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Client's billing contact and address</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Ensures routing to correct department</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">4</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Unique invoice number</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Critical for tracking and reference</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">5</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Invoice date and due date</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Establishes payment timeline</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">6</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Clear description of services</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Itemized breakdown prevents disputes</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">7</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Hours worked with rates</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Transparency for hourly projects</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">8</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Total amount due</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Clearly displayed final amount</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">9</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Payment terms and instructions</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">How and where to send payment</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">10</td>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Tax information</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">If applicable for accounting</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mb-8">
  <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Real Example:</h4>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-red-50 border-l-4 border-red-500 p-4 dark:bg-red-900/20 dark:border-red-400">
      <p class="font-semibold text-red-800 dark:text-red-300 mb-2">Instead of:</p>
      <p class="text-red-700 dark:text-red-400 font-mono">"Website design - $2,500"</p>
    </div>
    <div class="bg-green-50 border-l-4 border-green-500 p-4 dark:bg-green-900/20 dark:border-green-400">
      <p class="font-semibold text-green-800 dark:text-green-300 mb-2">Use:</p>
      <p class="text-green-700 dark:text-green-400 font-mono">"Website redesign project (March 2024): Homepage layout (5 hrs × $100), About page copywriting (3 hrs × $120), Mobile optimization (4 hrs × $100) - Total: $1,220"</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white flex items-center">
  <span class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 font-bold mr-3 dark:bg-yellow-900 dark:text-yellow-300">3</span>
  Delayed Invoice Submission
</h2>
<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 dark:bg-yellow-900/20 dark:border-yellow-800">
  <p class="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">The Mistake:</p>
  <p class="text-yellow-700 dark:text-yellow-400">Completing work on the 1st but not sending the invoice until the 15th because you're "busy with client work."</p>
</div>

<div class="mb-6">
  <h4 class="font-semibold text-gray-900 dark:text-white mb-3">The Cash Flow Impact:</h4>
  <div class="flex items-center justify-between mb-4">
    <div class="text-center">
      <div class="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2 dark:bg-red-900">
        <span class="text-2xl font-bold text-red-800 dark:text-red-300">+14</span>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400">Days added to payment</p>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-2 dark:bg-yellow-900">
        <span class="text-2xl font-bold text-yellow-800 dark:text-yellow-300">-40%</span>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400">Payment priority</p>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2 dark:bg-orange-900">
        <span class="text-2xl font-bold text-orange-800 dark:text-orange-300">Compete</span>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400">With other vendors</p>
    </div>
  </div>
  <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
    <li>Every day you delay invoicing adds a day to getting paid</li>
    <li>Clients forget the value you just delivered</li>
    <li>Your invoice competes with other vendors who billed immediately</li>
  </ul>
</div>

<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">The Fix:</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  <div class="bg-white p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-3">
      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 dark:bg-primary-900">
        <svg class="w-5 h-5 text-primary-800 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </div>
      <h4 class="font-semibold text-gray-900 dark:text-white">Automate delivery</h4>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Set invoices to send automatically upon project completion</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-3">
      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 dark:bg-primary-900">
        <svg class="w-5 h-5 text-primary-800 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      </div>
      <h4 class="font-semibold text-gray-900 dark:text-white">Set personal deadlines</h4>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Invoice within 24 hours of delivering work</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-3">
      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 dark:bg-primary-900">
        <svg class="w-5 h-5 text-primary-800 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      </div>
      <h4 class="font-semibold text-gray-900 dark:text-white">Batch invoicing</h4>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Pick specific days (Mondays and Thursdays) for all invoicing</p>
  </div>
  <div class="bg-white p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-3">
      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 dark:bg-primary-900">
        <svg class="w-5 h-5 text-primary-800 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </div>
      <h4 class="font-semibold text-gray-900 dark:text-white">Use project triggers</h4>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">When task status changes to "complete," auto-generate invoice</p>
  </div>
</div>

<div class="bg-purple-50 rounded-lg p-4 mb-8 dark:bg-purple-900/20">
  <p class="font-semibold text-purple-800 dark:text-purple-300 mb-2">Psychology Tip:</p>
  <p class="text-purple-700 dark:text-purple-400">
    Invoicing immediately while the client is still excited about your delivered work increases payment speed by up to 40%.
  </p>
</div>

<h2 class="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white flex items-center">
  <span class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-3 dark:bg-blue-900 dark:text-blue-300">4</span>
  Unprofessional Invoice Formatting
</h2>
<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 dark:bg-blue-900/20 dark:border-blue-800">
  <p class="font-semibold text-blue-800 dark:text-blue-300 mb-2">The Mistake:</p>
  <p class="text-blue-700 dark:text-blue-400">Sending invoices as plain text emails, Word documents with inconsistent formatting, or poorly designed PDFs.</p>
</div>

<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">How Perception Affects Payment:</h3>
<div class="mb-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-green-50 p-4 rounded-lg dark:bg-green-900/20">
      <h4 class="font-semibold text-green-800 dark:text-green-300 mb-2">Professional invoices:</h4>
      <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-400">
        <li>Signal you're a serious business</li>
        <li>Make accounting departments' jobs easier</li>
        <li>Build trust in your brand</li>
        <li>Get processed faster through automated systems</li>
      </ul>
    </div>
    <div class="bg-red-50 p-4 rounded-lg dark:bg-red-900/20">
      <h4 class="font-semibold text-red-800 dark:text-red-300 mb-2">Unprofessional invoices:</h4>
      <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-400">
        <li>Appear amateurish</li>
        <li>Cause processing delays</li>
        <li>Damage your credibility</li>
        <li>May get flagged for review</li>
      </ul>
    </div>
  </div>
</div>

<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">The Fix:</h3>
<div class="overflow-x-auto mb-6">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Solution</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Tools/Examples</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Impact</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
      <tr>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Use professional software</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">FreshBooks, QuickBooks, Wave</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Automated, consistent formatting</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Create branded templates</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Logo, colors, professional layout</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Builds brand recognition</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Mobile-friendly design</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Responsive templates</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Approval on-the-go</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Searchable PDFs</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Not image-based</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Accounting system compatible</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bg-gray-50 rounded-lg p-6 mb-8 dark:bg-gray-800">
  <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Quick Audit:</h4>
  <p class="text-gray-700 dark:text-gray-300 mb-4">
    Send a test invoice to yourself. Does it look like it came from a legitimate business? Would you prioritize paying it?
  </p>
  <div class="flex items-center">
    <svg class="w-5 h-5 text-primary-600 mr-2 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
    </svg>
    <span class="text-sm text-gray-600 dark:text-gray-400">Be honest with yourself - your invoice's appearance affects payment speed</span>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white flex items-center">
  <span class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold mr-3 dark:bg-indigo-900 dark:text-indigo-300">5</span>
  No Automated Follow-Up System
</h2>
<div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6 dark:bg-indigo-900/20 dark:border-indigo-800">
  <p class="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">The Mistake:</p>
  <p class="text-indigo-700 dark:text-indigo-400">Sending one invoice, then waiting and hoping the client remembers to pay.</p>
</div>

<div class="mb-6">
  <h4 class="font-semibold text-gray-900 dark:text-white mb-3">The Reality:</h4>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div class="bg-white p-4 rounded-lg border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700">
      <div class="text-3xl font-bold text-red-600 mb-1 dark:text-red-400">30%</div>
      <p class="text-sm text-gray-600 dark:text-gray-400">of invoices require follow-up</p>
    </div>
    <div class="bg-white p-4 rounded-lg border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700">
      <div class="text-3xl font-bold text-orange-600 mb-1 dark:text-orange-400">+21</div>
      <p class="text-sm text-gray-600 dark:text-gray-400">days average delay without reminders</p>
    </div>
    <div class="bg
`,imageUrl:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",date:"Oct 15, 2023",author:"Michael Chen",readTime:"4 min read"},{id:"branding-your-business",title:"Why Professional Invoices Matter for Your Brand: The Ultimate Guide to Building Trust and Getting Paid Faster",description:"Clear answer: Professional invoices significantly enhance your brand credibility, accelerate payment timelines by up to 40%, reduce administrative friction by 65%, and position your freelance business as legitimate and trustworthy—directly impacting client retention and referral rates.",content:`
    <h1 class="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
  Why Professional Invoicing Matters for Your Business Growth
</h1>
<p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
  Your invoice is not just a payment request—it's a critical brand touchpoint that communicates professionalism, attention to detail, and business maturity. While most freelancers focus on portfolios and proposals, they overlook this powerful marketing asset that can transform their business perception and cash flow.
</p>

<div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-6 mb-8 text-white">
  <div class="flex items-start">
    <svg class="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <div>
      <p class="font-bold text-lg mb-1">Key Insight:</p>
      <p class="opacity-90">Professional invoices are the bridge between completed work and sustainable business growth.</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">The Data-Backed Benefits of Professional Invoicing</h2>

<div class="mb-8">
  <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
    <span class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold mr-3 dark:bg-green-900 dark:text-green-300">1</span>
    Accelerated Payment Processing
  </h3>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-white p-4 rounded-lg border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700">
      <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1 dark:text-primary-400">2.3x</div>
      <p class="text-sm text-gray-600 dark:text-gray-400">Faster payment than generic invoices</p>
    </div>
    <div class="bg-white p-4 rounded-lg border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700">
      <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1 dark:text-primary-400">72%</div>
      <p class="text-sm text-gray-600 dark:text-gray-400">Fewer follow-up emails needed</p>
    </div>
    <div class="bg-white p-4 rounded-lg border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700">
      <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1 dark:text-primary-400">89%</div>
      <p class="text-sm text-gray-600 dark:text-gray-400">Faster with digital payment links</p>
    </div>
  </div>
  
  <div class="bg-blue-50 rounded-lg p-4 dark:bg-blue-900/20">
    <p class="font-semibold text-blue-800 dark:text-blue-300 mb-2">Why this happens:</p>
    <p class="text-blue-700 dark:text-blue-400">
      Accounting departments prioritize well-structured invoices that fit their workflow. A messy invoice gets pushed to the bottom of the pile or requires clarification emails, delaying payment by weeks.
    </p>
  </div>
</div>

<div class="mb-8">
  <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
    <span class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-bold mr-3 dark:bg-purple-900 dark:text-purple-300">2</span>
    Enhanced Brand Perception and Trust
  </h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="bg-white p-5 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Professional invoices communicate:</h4>
      <ul class="space-y-2">
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-gray-700 dark:text-gray-300">Reliability: Systematic processes suggest dependable service delivery</span>
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-gray-700 dark:text-gray-300">Legitimacy: You're a serious business, not a hobbyist</span>
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-gray-700 dark:text-gray-300">Attention to detail: If your invoice is meticulous, your work likely is too</span>
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-gray-700 dark:text-gray-300">Modern business practices: Digital, streamlined operations</span>
        </li>
      </ul>
    </div>
    <div class="bg-purple-50 p-5 rounded-lg dark:bg-purple-900/20">
      <h4 class="font-semibold text-purple-800 dark:text-purple-300 mb-3">Real impact:</h4>
      <div class="space-y-3">
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3 dark:bg-purple-900">
            <span class="text-purple-800 font-bold dark:text-purple-300">+45%</span>
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900 dark:text-white">Repeat work likelihood</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">Clients who receive professional invoices</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3 dark:bg-purple-900">
            <span class="text-purple-800 font-bold dark:text-purple-300">+60%</span>
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900 dark:text-white">Referral likelihood</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">More likely to refer you to others</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mb-8">
  <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
    <span class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-bold mr-3 dark:bg-orange-900 dark:text-orange-300">3</span>
    Reduced Administrative Overhead
  </h3>
  
  <div class="overflow-x-auto mb-6">
    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead class="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Benefit</th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Impact</th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Time Saved Monthly</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Automated invoicing</td>
          <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Saves manual tasks</td>
          <td class="px-4 py-3 text-sm font-bold text-primary-600 dark:text-primary-400">5-7 hours</td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Professional templates</td>
          <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Reduces errors</td>
          <td class="px-4 py-3 text-sm font-bold text-primary-600 dark:text-primary-400">92% reduction</td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Integrated systems</td>
          <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Cuts payment processing time</td>
          <td class="px-4 py-3 text-sm font-bold text-primary-600 dark:text-primary-400">75% faster</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">The 5 Elements of a Brand-Building Invoice</h2>

<div class="space-y-8 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-start mb-4">
      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 dark:bg-primary-900">
        <span class="text-primary-800 font-bold dark:text-primary-300">1</span>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Element 1: Consistent Brand Identity</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Your logo, color scheme, and typography</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Professional email domain (not Gmail/Yahoo)</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Brand voice in all communications</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Customized thank you messages</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-start mb-4">
      <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 dark:bg-blue-900">
        <span class="text-blue-800 font-bold dark:text-blue-300">2</span>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Element 2: Clear Value Communication</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Itemized services (not just "design work")</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Time investment breakdown</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Results delivered section</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">ROI language where applicable</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-start mb-4">
      <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 dark:bg-green-900">
        <span class="text-green-800 font-bold dark:text-green-300">3</span>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Element 3: Seamless Payment Experience</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Multiple payment options (credit card, bank transfer, PayPal)</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Mobile-optimized payment portals</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">One-click payment processing</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Automatic currency conversion for international clients</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-start mb-4">
      <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4 dark:bg-yellow-900">
        <span class="text-yellow-800 font-bold dark:text-yellow-300">4</span>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Element 4: Professional Documentation</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Professional invoice numbering system</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Tax compliance information</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Legal business details</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Digital signature capability</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-start mb-4">
      <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 dark:bg-purple-900">
        <span class="text-purple-800 font-bold dark:text-purple-300">5</span>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Element 5: Relationship Nurturing</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Personalized thank you notes</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Next project suggestions</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Referral request section</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Satisfaction survey link</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">How Professional Invoices Impact Different Business Areas</h2>

<div class="mb-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center mb-4">
        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
          <svg class="w-5 h-5 text-green-800 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing & Client Acquisition</h3>
      </div>
      <ul class="space-y-2">
        <li class="flex items-start">
          <svg class="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm text-gray-700 dark:text-gray-300">Portfolio extension: Your invoice showcases organizational skills</span>
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm text-gray-700 dark:text-gray-300">Referral generation: Clients share exceptional experiences</span>
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm text-gray-700 dark:text-gray-300">Testimonial collection: Professional follow-up increases feedback rates</span>
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm text-gray-700 dark:text-gray-300">Upsell opportunities: Clear service breakdown reveals additional needs</span>
        </li>
      </ul>
    </div>

    <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center mb-4">
        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
          <svg class="w-5 h-5 text-blue-800 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Operations & Efficiency</h3>
      </div>
      <ul class="space-y-2">
        <li class="flex items-start">
          <svg class="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm text-gray-700 dark:text-gray-300">Automated workflows: Reduce manual entry errors</span>
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm text-gray-700 dark:text-gray-300">Cash flow predictability: Faster payments improve financial planning</span>
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm text-gray-700 dark:text-gray-300">Tax preparation simplicity: Organized records save hours during tax season</span>
        </li>
        <li class="flex items-start">
          <svg class="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm text-gray-700 dark:text-gray-300">Client communication reduction: Clear invoices answer questions before they're asked</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">The Competitive Advantage You're Missing</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Against Other Freelancers:</h3>
    <div class="space-y-3">
      <div class="flex items-start">
        <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
          <svg class="w-4 h-4 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-medium text-gray-900 dark:text-white">Perception gap</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Professional invoices position you above competitors</p>
        </div>
      </div>
      <div class="flex items-start">
        <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
          <svg class="w-4 h-4 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-medium text-gray-900 dark:text-white">Trust differential</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Clients perceive less risk with systematic businesses</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Against Agencies:</h3>
    <div class="space-y-3">
      <div class="flex items-start">
        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
          <svg class="w-4 h-4 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-medium text-gray-900 dark:text-white">Personal touch</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Maintain freelancer flexibility with corporate professionalism</p>
        </div>
      </div>
      <div class="flex items-start">
        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
          <svg class="w-4 h-4 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-medium text-gray-900 dark:text-white">Cost efficiency</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Offer agency-level presentation without agency overhead</p>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Immediate Implementation Checklist</h2>

<div class="space-y-6 mb-8">
  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center mr-3">
        <span class="text-white font-bold">1</span>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Week 1: Foundation Building</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
          <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Choose professional invoicing software</span>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
          <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Create branded template with logo and colors</span>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
          <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Set up automated payment reminders</span>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
          <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Add multiple payment options</span>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center mr-3">
        <span class="text-white font-bold">2</span>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Week 2: Process Optimization</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 dark:bg-gray-700">
          <span class="text-xs text-gray-600 dark:text-gray-400">○</span>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Develop standard service descriptions</span>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 dark:bg-gray-700">
          <span class="text-xs text-gray-600 dark:text-gray-400">○</span>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Create invoice approval workflow</span>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 dark:bg-gray-700">
          <span class="text-xs text-gray-600 dark:text-gray-400">○</span>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Set up recurring invoice templates</span>
      </div>
      <div class="flex items-center">
        <div class="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 dark:bg-gray-700">
          <span class="text-xs text-gray-600 dark:text-gray-400">○</span>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Integrate with accounting software</span>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Common Objections Debunked</h2>

<div class="space-y-6 mb-8">
  <div class="bg-white rounded-lg border border-red-200 p-5 dark:bg-gray-800 dark:border-red-800">
    <h3 class="font-semibold text-red-700 dark:text-red-400 mb-3">"It's too expensive"</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-medium text-gray-900 dark:text-white mb-1">Reality:</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">Professional invoicing software starts at $0-$15/month</p>
      </div>
      <div>
        <p class="font-medium text-gray-900 dark:text-white mb-1">ROI:</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">Time saved pays for itself in 1-2 invoices</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-yellow-200 p-5 dark:bg-gray-800 dark:border-yellow-800">
    <h3 class="font-semibold text-yellow-700 dark:text-yellow-400 mb-3">"My clients don't care"</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-medium text-gray-900 dark:text-white mb-1">Data shows:</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">78% of business clients report preferring professional invoices</p>
      </div>
      <div>
        <p class="font-medium text-gray-900 dark:text-white mb-1">Hidden benefit:</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">Even if clients don't consciously notice, subconsciously they trust you more</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-green-200 p-5 dark:bg-gray-800 dark:border-green-800">
    <h3 class="font-semibold text-green-700 dark:text-green-400 mb-3">"I don't have time"</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-medium text-gray-900 dark:text-white mb-1">Irony:</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">Professional systems save 5-10 hours monthly</p>
      </div>
      <div>
        <p class="font-medium text-gray-900 dark:text-white mb-1">Initial investment:</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">2 hours to set up saves hundreds annually</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white mb-8">
  <h2 class="text-2xl font-bold mb-4">The Bottom Line: Your Invoice as a Marketing Tool</h2>
  <p class="mb-6 opacity-90">
    Professional invoicing isn't an administrative task—it's a client retention strategy, brand building exercise, and cash flow optimization tool wrapped into one document. Every invoice you send should:
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>Reinforce your brand identity</span>
    </div>
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>Make payment effortless</span>
    </div>
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>Demonstrate your professionalism</span>
    </div>
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>Encourage repeat business</span>
    </div>
  </div>
  <div class="bg-white/20 rounded-lg p-4">
    <p class="font-bold mb-2">Start today:</p>
    <p class="opacity-90">
      Audit your current invoicing process. Does it reflect the quality of your work? Does it make payment easy? Does it reinforce why clients chose you? If not, implement one improvement this week. Your brand—and your bank account—will thank you.
    </p>
  </div>
</div>
    `,imageUrl:"https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800",date:"Oct 18, 2023",author:"Jessica Miller",readTime:"6 min read"},{id:"tax-season-prep",title:"Preparing Your Invoices for Tax Season: The Complete Freelancer Guide",description:"Clear answer: Properly organizing and categorizing your invoices before tax season can save you 15-20 hours of administrative work, maximize your eligible deductions by up to 30%, reduce audit risk by 85%, and potentially save thousands in overpaid taxes through accurate expense tracking and documentation.",content:`
    <h1 class="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
  Why Invoice Organization Is Your #1 Tax Preparation Strategy
</h1>
<p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
  For freelancers, invoices aren't just payment requests—they're the backbone of your tax documentation, the proof of your income, and the key to unlocking legitimate deductions. The IRS reports that freelancers and self-employed individuals overpay taxes by an average of $3,000 annually due to poor record-keeping and missed deductions. This guide will transform your invoice management from a year-end headache into a strategic financial advantage.
</p>

<div class="bg-red-50 border-l-4 border-red-500 p-6 mb-8 dark:bg-red-900/30 dark:border-red-400">
  <div class="flex items-start">
    <div class="flex-shrink-0">
      <svg class="h-6 w-6 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
    </div>
    <div class="ml-4">
      <p class="text-lg font-bold text-red-800 dark:text-red-300">$3,000 Average Overpayment</p>
      <p class="text-red-700 dark:text-red-400">
        According to IRS data, freelancers overpay by an average of $3,000 annually due to poor invoicing and record-keeping practices.
      </p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">The 4 Critical Roles Invoices Play in Your Tax Strategy</h2>

<div class="mb-10">
  <div class="flex items-center mb-6">
    <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center mr-3">
      <span class="text-white font-bold">1</span>
    </div>
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Income Verification and Reporting</h3>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-5 mb-6 dark:bg-gray-800 dark:border-gray-700">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="font-semibold text-gray-900 dark:text-white mb-3">IRS Requirements:</h4>
        <ul class="space-y-2">
          <li class="flex items-start">
            <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Report all income over $400 from freelance work</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Organized invoices provide clear income trails</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Match client-issued 1099s against your invoice records</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Actionable Tip:</h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">Create a master spreadsheet with columns for:</p>
        <div class="bg-gray-50 rounded p-3 dark:bg-gray-700">
          <p class="font-mono text-sm text-gray-800 dark:text-gray-300">
            Invoice #, Client Name, Date Issued, Amount, Payment Status, 1099 Status (Yes/No)
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mb-10">
  <div class="flex items-center mb-6">
    <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
      <span class="text-white font-bold">2</span>
    </div>
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Expense Deduction Documentation</h3>
  </div>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Direct Project Expenses:</h4>
      <ul class="space-y-2">
        <li class="flex items-start">
          <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Software/tools used specifically for client work</span>
        </li>
        <li class="flex items-start">
          <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Subcontractor payments (with their invoices saved)</span>
        </li>
        <li class="flex items-start">
          <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Stock assets purchased for client projects</span>
        </li>
      </ul>
    </div>
    
    <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Business Operation Expenses:</h4>
      <ul class="space-y-2">
        <li class="flex items-start">
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 dark:bg-green-900">
            <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Home office calculations (simplified or actual expense method)</span>
        </li>
        <li class="flex items-start">
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 dark:bg-green-900">
            <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Invoice software costs (FreshBooks, QuickBooks, etc.)</span>
        </li>
        <li class="flex items-start">
          <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5 dark:bg-green-900">
            <svg class="w-3 h-3 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Banking and payment processing fees</span>
        </li>
      </ul>
    </div>
  </div>
  
  <div class="bg-blue-50 rounded-lg p-4 dark:bg-blue-900/20">
    <p class="font-semibold text-blue-800 dark:text-blue-300 mb-2">Pro Tax Strategy:</p>
    <p class="text-blue-700 dark:text-blue-400">
      Add a "Project Expenses" section to your invoice templates that automatically tracks deductible items per client.
    </p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">The 7-Step Invoice Tax Preparation System</h2>

<div class="space-y-8 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 dark:bg-primary-900">
        <span class="text-primary-800 font-bold text-lg dark:text-primary-300">1</span>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Step 1: Digital Consolidation (January 1)</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Gather all invoices from all platforms</p>
      </div>
    </div>
    <ul class="space-y-3 pl-4">
      <li class="flex items-start">
        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="text-gray-700 dark:text-gray-300">Create standardized naming: "2024-Invoice-001-ClientName.pdf"</span>
      </li>
      <li class="flex items-start">
        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="text-gray-700 dark:text-gray-300">Use cloud storage with backup (Google Drive + external hard drive)</span>
      </li>
    </ul>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 dark:bg-blue-900">
        <span class="text-blue-800 font-bold text-lg dark:text-blue-300">2</span>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Step 2: Income Reconciliation (January 15)</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Match every payment to its corresponding invoice</p>
      </div>
    </div>
    <div class="bg-gray-50 rounded-lg p-4 dark:bg-gray-700">
      <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Checklist:</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="flex items-center">
          <div class="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center mr-2 dark:bg-primary-900">
            <svg class="w-2 h-2 text-primary-800 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">All invoices numbered sequentially</span>
        </div>
        <div class="flex items-center">
          <div class="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center mr-2 dark:bg-primary-900">
            <svg class="w-2 h-2 text-primary-800 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Payments matched to bank deposits</span>
        </div>
        <div class="flex items-center">
          <div class="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center mr-2 dark:bg-primary-900">
            <svg class="w-2 h-2 text-primary-800 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-sm text-gray-700 dark:text-gray-300">1099 forms collected from clients</span>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Quarter-by-Quarter Tax Tracking</h2>

<div class="overflow-x-auto mb-10">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Quarter</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Total Invoiced</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Expenses</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Taxable Income</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Paid Estimated</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">Q1</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$25,000</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$4,000</td>
        <td class="px-4 py-3 text-sm font-semibold text-primary-600 dark:text-primary-400">$21,000</td>
        <td class="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">$5,250</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">Q2</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$28,000</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$3,500</td>
        <td class="px-4 py-3 text-sm font-semibold text-primary-600 dark:text-primary-400">$24,500</td>
        <td class="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">$6,125</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">Q3</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$31,000</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$5,000</td>
        <td class="px-4 py-3 text-sm font-semibold text-primary-600 dark:text-primary-400">$26,000</td>
        <td class="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">$6,500</td>
      </tr>
      <tr>
        <td class="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">Q4</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$35,000</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">$4,200</td>
        <td class="px-4 py-3 text-sm font-semibold text-primary-600 dark:text-primary-400">$30,800</td>
        <td class="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">$7,700</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">The Digital Tools That Transform Tax Preparation</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Automated Solutions:</h3>
    <div class="space-y-3">
      <div class="flex items-center">
        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
          <svg class="w-4 h-4 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-medium text-gray-900 dark:text-white">QuickBooks Self-Employed</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">Automatically categorizes expenses, tracks mileage</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
          <svg class="w-4 h-4 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-medium text-gray-900 dark:text-white">FreshBooks</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">Professional invoices with expense tracking</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Free Alternatives:</h3>
    <div class="space-y-3">
      <div class="flex items-center">
        <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 dark:bg-purple-900">
          <svg class="w-4 h-4 text-purple-800 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-medium text-gray-900 dark:text-white">Wave Apps</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">Free invoicing with expense tracking</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 dark:bg-orange-900">
          <svg class="w-4 h-4 text-orange-800 dark:text-orange-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-medium text-gray-900 dark:text-white">Google Sheets Templates</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">Customizable tracking spreadsheets</p>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Common Invoice-Related Tax Mistakes (And How to Avoid Them)</h2>

<div class="space-y-6 mb-10">
  <div class="bg-white rounded-lg border border-red-200 p-5 dark:bg-gray-800 dark:border-red-800">
    <div class="flex items-center mb-3">
      <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 dark:bg-red-900">
        <span class="text-red-800 font-bold dark:text-red-300">1</span>
      </div>
      <h3 class="font-semibold text-red-700 dark:text-red-400">Mixing Personal and Business Expenses</h3>
    </div>
    <div class="bg-red-50 rounded p-3 dark:bg-red-900/20">
      <p class="text-sm text-red-700 dark:text-red-400 font-semibold mb-1">Solution:</p>
      <p class="text-red-600 dark:text-red-300">Open separate business banking accounts and credit cards immediately.</p>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-yellow-200 p-5 dark:bg-gray-800 dark:border-yellow-800">
    <div class="flex items-center mb-3">
      <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3 dark:bg-yellow-900">
        <span class="text-yellow-800 font-bold dark:text-yellow-300">5</span>
      </div>
      <h3 class="font-semibold text-yellow-700 dark:text-yellow-400">Missing Quarterly Tax Payments</h3>
    </div>
    <div class="bg-yellow-50 rounded p-3 dark:bg-yellow-900/20">
      <p class="text-sm text-yellow-700 dark:text-yellow-400 font-semibold mb-1">Solution:</p>
      <p class="text-yellow-600 dark:text-yellow-300">Set calendar reminders 2 weeks before each deadline (April 15, June 15, September 15, January 15).</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Your 12-Month Invoice Tax Calendar</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-2">
      <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-2 dark:bg-primary-900">
        <span class="text-primary-800 font-bold text-sm dark:text-primary-300">Jan</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">January</h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Year-end reconciliation, 1099 collection</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-2">
      <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 dark:bg-blue-900">
        <span class="text-blue-800 font-bold text-sm dark:text-blue-300">Apr</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">April</h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Q1 estimated payment, Q1 review</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-2">
      <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
        <span class="text-green-800 font-bold text-sm dark:text-green-300">Sep</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">September</h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">Q3 estimated payment, year-end planning</p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">The ROI of Organized Invoicing</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-primary-600 mb-1 dark:text-primary-400">15-20</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Hours saved annually</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-green-600 mb-1 dark:text-green-400">$2K-5K</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Tax savings potential</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-blue-600 mb-1 dark:text-blue-400">90%</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Less audit anxiety</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-purple-600 mb-1 dark:text-purple-400">Clear</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Business insights gained</p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Immediate Action Plan</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
      <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
        <svg class="w-4 h-4 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
      </span>
      This Week
    </h3>
    <ul class="space-y-2">
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-primary-600 mt-1.5 mr-2 dark:bg-primary-400"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Gather all 2024 invoices into one digital location</span>
      </li>
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-primary-600 mt-1.5 mr-2 dark:bg-primary-400"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Create income summary spreadsheet</span>
      </li>
    </ul>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
      <span class="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2 dark:bg-yellow-900">
        <span class="text-yellow-800 font-bold text-sm dark:text-yellow-300">M</span>
      </span>
      This Month
    </h3>
    <ul class="space-y-2">
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2 dark:bg-yellow-400"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Open separate business bank account if needed</span>
      </li>
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2 dark:bg-yellow-400"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Choose and implement invoicing/accounting software</span>
      </li>
    </ul>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
      <span class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 dark:bg-blue-900">
        <span class="text-blue-800 font-bold text-sm dark:text-blue-300">Q</span>
      </span>
      This Quarter
    </h3>
    <ul class="space-y-2">
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2 dark:bg-blue-400"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Schedule meeting with tax professional</span>
      </li>
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2 dark:bg-blue-400"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Make first quarterly estimated payment if applicable</span>
      </li>
    </ul>
  </div>
</div>

<div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white mb-8">
  <h2 class="text-2xl font-bold mb-4">Conclusion: Your Invoices Are Your Financial Story</h2>
  <p class="mb-6 opacity-90">
    Proper invoice management does more than prepare you for tax season—it tells the financial story of your business, reveals profitability patterns, identifies ideal clients, and provides the documentation needed to grow, secure loans, or sell your business someday.
  </p>
  <div class="bg-white/20 rounded-lg p-4">
    <p class="font-bold mb-2 flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      Start today with one simple step:
    </p>
    <p class="opacity-90">
      Create a "2024 Taxes" folder and save your next invoice there. By building this habit now, you'll transform tax season from a source of stress into a showcase of your business's financial health and professional management.
    </p>
  </div>
</div>
    `,imageUrl:"https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800",date:"Oct 22, 2023",author:"David Wilson",readTime:"7 min read"},{id:"remote-work-billing",title:"Billing Strategies for International Clients: Maximizing Payments While Minimizing Fees and Friction",description:"Clear answer: The most effective billing strategy for international clients combines multi-currency payment options, transparent fee structures, tax compliance across jurisdictions, and localized billing practices—reducing payment delays by 60% while increasing international client retention by 45%.",content:`
    <h1 class="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
  The 4-Pillar Framework for International Billing Success
</h1>
<p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
  Expand your freelance business globally with this comprehensive guide to international billing, currency strategies, and cross-border payment systems that actually work.
</p>

<div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-8 text-white">
  <div class="flex items-start">
    <svg class="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <div>
      <p class="font-bold text-lg mb-1">Global Opportunity:</p>
      <p class="opacity-90">International clients typically pay 25-50% higher rates and provide more stable, diversified income streams.</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">Pillar 1: Currency Strategy - Getting Paid in the Right Money</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
  <div class="bg-white rounded-lg border border-blue-200 p-5 dark:bg-gray-800 dark:border-blue-800">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
        <span class="text-blue-800 font-bold dark:text-blue-300">A</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Option A: Bill in Your Local Currency</h3>
    </div>
    <div class="mb-4">
      <div class="bg-blue-50 rounded px-3 py-1 inline-block mb-2 dark:bg-blue-900/30">
        <span class="text-xs font-semibold text-blue-800 dark:text-blue-300">Best for:</span>
        <span class="text-xs text-blue-700 dark:text-blue-400 ml-1">Stable currency countries (USD, EUR, GBP)</span>
      </div>
    </div>
    <div class="space-y-2">
      <div class="flex items-start">
        <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm text-gray-700 dark:text-gray-300">Predictable income, no exchange risk</span>
      </div>
      <div class="flex items-start">
        <svg class="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm text-gray-700 dark:text-gray-300">Clients bear exchange costs and uncertainty</span>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-green-200 p-5 dark:bg-gray-800 dark:border-green-800">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
        <span class="text-green-800 font-bold dark:text-green-300">B</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Option B: Bill in Client's Currency</h3>
    </div>
    <div class="mb-4">
      <div class="bg-green-50 rounded px-3 py-1 inline-block mb-2 dark:bg-green-900/30">
        <span class="text-xs font-semibold text-green-800 dark:text-green-300">Best for:</span>
        <span class="text-xs text-green-700 dark:text-green-400 ml-1">Building long-term relationships</span>
      </div>
    </div>
    <div class="space-y-2">
      <div class="flex items-start">
        <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm text-gray-700 dark:text-gray-300">Client convenience, competitive advantage</span>
      </div>
      <div class="flex items-start">
        <svg class="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm text-gray-700 dark:text-gray-300">You bear exchange risk and fees</span>
      </div>
    </div>
    <div class="mt-4 bg-yellow-50 rounded p-2 dark:bg-yellow-900/20">
      <p class="text-xs font-semibold text-yellow-800 dark:text-yellow-300">Protection Strategy:</p>
      <p class="text-xs text-yellow-700 dark:text-yellow-400">Add 3-5% buffer for exchange fluctuations</p>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-purple-200 p-5 dark:bg-gray-800 dark:border-purple-800">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 dark:bg-purple-900">
        <span class="text-purple-800 font-bold dark:text-purple-300">C</span>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Option C: Bill in USD</h3>
    </div>
    <div class="mb-4">
      <div class="bg-purple-50 rounded px-3 py-1 inline-block mb-2 dark:bg-purple-900/30">
        <span class="text-xs font-semibold text-purple-800 dark:text-purple-300">Best for:</span>
        <span class="text-xs text-purple-700 dark:text-purple-400 ml-1">Global client bases</span>
      </div>
      <div class="bg-gray-100 rounded p-2 text-center dark:bg-gray-700">
        <p class="text-sm font-bold text-gray-900 dark:text-white">79%</p>
        <p class="text-xs text-gray-600 dark:text-gray-400">International contracts use USD as default</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-lg p-5 mb-10 dark:bg-blue-900/20">
  <h3 class="font-semibold text-blue-800 dark:text-blue-300 mb-3">Smart Hybrid Approach:</h3>
  <div class="bg-white rounded p-4 dark:bg-gray-800">
    <p class="font-mono text-sm text-gray-800 dark:text-gray-300">
      "Prices quoted in USD. Payments accepted in USD, EUR, or GBP at current exchange rate. All bank transfer fees are client responsibility."
    </p>
  </div>
  <p class="text-sm text-blue-700 dark:text-blue-400 mt-3">
    Actionable Tool: Use XE.com or Wise mid-market rates for transparent conversions.
  </p>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Pillar 2: Payment Platform Selection - Moving Money Efficiently</h2>

<div class="overflow-x-auto mb-10">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Platform</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Best For</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Fees</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Transfer Time</th>
        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Currency Options</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td class="px-4 py-3">
          <div class="flex items-center">
            <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
              <span class="text-green-800 font-bold text-xs dark:text-green-300">W</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white">Wise</span>
          </div>
        </td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Low-cost transfers</td>
        <td class="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">0.3-1.5%</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1-2 days</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">50+ currencies</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td class="px-4 py-3">
          <div class="flex items-center">
            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 dark:bg-blue-900">
              <span class="text-blue-800 font-bold text-xs dark:text-blue-300">P</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white">PayPal</span>
          </div>
        </td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Quick, familiar</td>
        <td class="px-4 py-3 text-sm font-semibold text-orange-600 dark:text-orange-400">3-5% + fx fee</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Instant</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">25 currencies</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td class="px-4 py-3">
          <div class="flex items-center">
            <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 dark:bg-purple-900">
              <span class="text-purple-800 font-bold text-xs dark:text-purple-300">S</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white">Stripe</span>
          </div>
        </td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Professional invoicing</td>
        <td class="px-4 py-3 text-sm font-semibold text-purple-600 dark:text-purple-400">2.9% + 30¢</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">7 days</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">135+ currencies</td>
      </tr>
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
        <td class="px-4 py-3">
          <div class="flex items-center">
            <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-2 dark:bg-yellow-900">
              <span class="text-yellow-800 font-bold text-xs dark:text-yellow-300">P</span>
            </div>
            <span class="text-sm font-medium text-gray-900 dark:text-white">Payoneer</span>
          </div>
        </td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Emerging markets</td>
        <td class="px-4 py-3 text-sm font-semibold text-yellow-600 dark:text-yellow-400">1-3%</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1-3 days</td>
        <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">150+ countries</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Pillar 3: Tax Compliance and Documentation</h2>

<div class="mb-10">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Critical Tax Considerations:</h3>
      <ul class="space-y-3">
        <li class="flex items-start">
          <div class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5 dark:bg-red-900">
            <svg class="w-3 h-3 text-red-800 dark:text-red-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div>
            <p class="font-medium text-gray-900 dark:text-white text-sm">Double Taxation Agreements</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">Check if your country has DTAs with client countries</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div>
            <p class="font-medium text-gray-900 dark:text-white text-sm">VAT/GST Handling</p>
            <p class="text-xs text-gray-600 dark:text-gray-400">EU: Charge VAT if over €10,000/year (MOSS scheme)</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Required Forms:</h3>
      <div class="space-y-3">
        <div class="bg-blue-50 rounded p-3 dark:bg-blue-900/20">
          <p class="font-semibold text-blue-800 dark:text-blue-300 text-sm">W-8BEN Form</p>
          <p class="text-xs text-blue-700 dark:text-blue-400">For US clients to claim treaty benefits</p>
        </div>
        <div class="bg-green-50 rounded p-3 dark:bg-green-900/20">
          <p class="font-semibold text-green-800 dark:text-green-300 text-sm">VAT Numbers</p>
          <p class="text-xs text-green-700 dark:text-green-400">Collect from EU business clients</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-50 rounded-lg p-5 dark:bg-gray-800">
    <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Sample Tax-Compliant Invoice Wording:</h4>
    <div class="bg-white rounded p-4 dark:bg-gray-900">
      <p class="font-mono text-sm text-gray-800 dark:text-gray-300">
        "For EU Business Clients: VAT reverse charge applies per Article 44 of EU VAT Directive 2006/112/EC. Client accounts for VAT locally."
      </p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Advanced Billing Strategies for Specific Scenarios</h2>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Strategy 1: The Tiered Retainer Model</h3>
    <div class="mb-4">
      <div class="bg-yellow-50 rounded px-3 py-1 inline-block dark:bg-yellow-900/20">
        <span class="text-xs font-semibold text-yellow-800 dark:text-yellow-300">Problem:</span>
        <span class="text-xs text-yellow-700 dark:text-yellow-400 ml-1">Client in opposite time zone requires overlapping hours</span>
      </div>
    </div>
    <div class="space-y-3">
      <div class="flex items-center justify-between border-b pb-2">
        <span class="text-sm text-gray-700 dark:text-gray-300">Base retainer</span>
        <span class="text-sm font-semibold text-gray-900 dark:text-white">Standard deliverables</span>
      </div>
      <div class="flex items-center justify-between border-b pb-2">
        <span class="text-sm text-gray-700 dark:text-gray-300">Premium tier</span>
        <span class="text-sm font-semibold text-gray-900 dark:text-white">+30% for "overlap hours availability"</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-700 dark:text-gray-300">Enterprise tier</span>
        <span class="text-sm font-semibold text-gray-900 dark:text-white">Dedicated communication window</span>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Strategy 2: Geographic Pricing Matrix</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Client Location</th>
            <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Rate Multiplier</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          <tr>
            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">North America/EU</td>
            <td class="px-3 py-2">
              <span class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">1.0x (Standard)</span>
            </td>
          </tr>
          <tr>
            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">Australia/NZ</td>
            <td class="px-3 py-2">
              <span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">0.9x</span>
            </td>
          </tr>
          <tr>
            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-300">Eastern Europe</td>
            <td class="px-3 py-2">
              <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">0.7-0.8x</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4 bg-gray-50 rounded p-3 dark:bg-gray-700">
      <p class="text-xs text-gray-600 dark:text-gray-400 italic">
        "While my standard rate is $X, I offer regional adjustments based on local market conditions."
      </p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Reducing Fees: The 7% Rule and How to Beat It</h2>

<div class="mb-10">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-red-50 rounded-lg p-5 dark:bg-red-900/20">
      <div class="text-center mb-4">
        <div class="text-4xl font-bold text-red-600 dark:text-red-400">7%</div>
        <p class="text-sm text-red-700 dark:text-red-400">Average international payment cost</p>
      </div>
      <p class="text-red-700 dark:text-red-400 text-sm">
        The Problem: Average international payment costs consume 5-7% of transaction value
      </p>
    </div>

    <div class="bg-green-50 rounded-lg p-5 dark:bg-green-900/20">
      <div class="text-center mb-4">
        <div class="text-4xl font-bold text-green-600 dark:text-green-400">1-3%</div>
        <p class="text-sm text-green-700 dark:text-green-400">Target cost through strategic planning</p>
      </div>
      <p class="text-green-700 dark:text-green-400 text-sm">
        The Goal: Reduce to 1-3% through strategic planning
      </p>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-5 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Fee Reduction Calculation:</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-red-50 rounded p-4 dark:bg-red-900/20">
        <p class="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">With 7% Fees:</p>
        <p class="text-lg font-bold text-red-700 dark:text-red-400">$10,000 project = $700 lost</p>
      </div>
      <div class="bg-green-50 rounded p-4 dark:bg-green-900/20">
        <p class="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">With 2% Fees:</p>
        <p class="text-lg font-bold text-green-700 dark:text-green-400">$10,000 project = $200 lost</p>
      </div>
    </div>
    <div class="mt-4 text-center">
      <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">$500 SAVINGS</div>
      <p class="text-sm text-gray-600 dark:text-gray-400">(5% of project value recovered)</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Technology Stack for International Billing Success</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-3">
      <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
        <svg class="w-5 h-5 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
        </svg>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Wise Business</h3>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Multi-currency accounts, local bank details</p>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-3">
      <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
        <svg class="w-5 h-5 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"/>
        </svg>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">QuickBooks Online</h3>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Multi-currency tracking, VAT handling</p>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-3">
      <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 dark:bg-purple-900">
        <svg class="w-5 h-5 text-purple-800 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
        </svg>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Stripe Atlas</h3>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Form US entity as foreign freelancer</p>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-3">
      <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 dark:bg-orange-900">
        <svg class="w-5 h-5 text-orange-800 dark:text-orange-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
        </svg>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white">Time Zone.io</h3>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Team time zone coordination</p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Your 30-Day Implementation Plan</h2>

<div class="space-y-6 mb-10">
  <div class="bg-white rounded-lg border border-green-200 p-5 dark:bg-gray-800 dark:border-green-800">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
        <span class="text-white font-bold">1-2</span>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Week 1-2: Foundation</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Setup and research phase</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="bg-green-50 rounded p-3 dark:bg-green-900/20">
        <p class="text-xs font-semibold text-green-800 dark:text-green-300">Set up</p>
        <p class="text-xs text-green-700 dark:text-green-400">Wise Business account</p>
      </div>
      <div class="bg-green-50 rounded p-3 dark:bg-green-900/20">
        <p class="text-xs font-semibold text-green-800 dark:text-green-300">Create</p>
        <p class="text-xs text-green-700 dark:text-green-400">Multi-currency invoice templates</p>
      </div>
      <div class="bg-green-50 rounded p-3 dark:bg-green-900/20">
        <p class="text-xs font-semibold text-green-800 dark:text-green-300">Research</p>
        <p class="text-xs text-green-700 dark:text-green-400">Tax obligations for target countries</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-yellow-200 p-5 dark:bg-gray-800 dark:border-yellow-800">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center mr-3">
        <span class="text-white font-bold">3-4</span>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Week 3-4: Testing</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Implementation and optimization</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="bg-yellow-50 rounded p-3 dark:bg-yellow-900/20">
        <p class="text-xs font-semibold text-yellow-800 dark:text-yellow-300">Run</p>
        <p class="text-xs text-yellow-700 dark:text-yellow-400">Test transactions internationally</p>
      </div>
      <div class="bg-yellow-50 rounded p-3 dark:bg-yellow-900/20">
        <p class="text-xs font-semibold text-yellow-800 dark:text-yellow-300">Draft</p>
        <p class="text-xs text-yellow-700 dark:text-yellow-400">International contract addendum</p>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Measuring Success: Key Metrics for International Billing</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-primary-600 mb-1 dark:text-primary-400">↓ Days</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Avg payment time</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-green-600 mb-1 dark:text-green-400">1-3%</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Effective fee %</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-blue-600 mb-1 dark:text-blue-400">95%+</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Client satisfaction</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-purple-600 mb-1 dark:text-purple-400">98%</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Payment completion rate</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-2xl font-bold text-orange-600 mb-1 dark:text-orange-400">±%</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Currency gain/loss</p>
  </div>
</div>

<div class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white mb-8">
  <h2 class="text-2xl font-bold mb-4">The Bottom Line: Why This Investment Pays Off</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div>
      <div class="flex items-center mb-3">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
        </svg>
        <span class="font-semibold">Higher Rates</span>
      </div>
      <p class="opacity-90 text-sm">25-50% premium over local clients</p>
    </div>
    <div>
      <div class="flex items-center mb-3">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="font-semibold">More Stable Work</span>
      </div>
      <p class="opacity-90 text-sm">Larger organizations, longer contracts</p>
    </div>
  </div>
  <div class="bg-white/20 rounded-lg p-4">
    <p class="font-bold mb-2 flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      Start today with one simple step:
    </p>
    <p class="opacity-90">
      Pick one element—whether it's opening a Wise account, updating your invoice templates with currency options, or researching tax requirements for your first target market—and implement it this week. Your future global client base awaits.
    </p>
  </div>
</div>
    `,imageUrl:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",date:"Oct 25, 2023",author:"Elena Rodriguez",readTime:"5 min read"},{id:"the-future-of-billing",title:"The Future of Billing: How QR Codes and AI Are Revolutionizing Freelance Payments",description:"Clear answer: QR code payments combined with AI-powered billing systems are set to transform freelance invoicing by reducing payment time from days to seconds, automating 90% of administrative tasks, and creating hyper-personalized client experiences—representing the most significant billing evolution since digital invoicing began.",content:`
    <h1 class="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
  The Convergence Point: Where QR Meets AI in Modern Billing
</h1>
<p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
  The freelance billing landscape is undergoing its most dramatic transformation in a decade. While traditional invoicing systems still dominate, forward-thinking freelancers are adopting technologies that reduce payment friction by 85% and cut administrative overhead by 70%. This isn't incremental improvement—it's a complete reimagining of how money moves for knowledge workers.
</p>

<div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 mb-8 text-white">
  <div class="flex items-start">
    <svg class="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
    <div>
      <p class="font-bold text-lg mb-1">Tech Adoption Advantage:</p>
      <p class="opacity-90">Early adopters of QR+AI billing see 85% faster payments and 70% less admin work—creating immediate competitive differentiation.</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">Part 1: QR Code Payments - The Instant Payment Revolution</h2>

<div class="mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-5 mb-6 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="font-semibold text-gray-900 dark:text-white mb-4">What QR Code Billing Actually Solves</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div class="bg-red-50 border-l-4 border-red-500 pl-4 py-2 mb-4 dark:bg-red-900/20 dark:border-red-400">
          <p class="font-semibold text-red-800 dark:text-red-300">The Problem:</p>
          <p class="text-red-700 dark:text-red-400 text-sm">Average freelance payment time: 27 days</p>
        </div>
        <ul class="space-y-2">
          <li class="flex items-start">
            <svg class="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Finding payment details in emails</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Manually entering banking information</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="bg-green-50 border-l-4 border-green-500 pl-4 py-2 mb-4 dark:bg-green-900/20 dark:border-green-400">
          <p class="font-semibold text-green-800 dark:text-green-300">The QR Solution:</p>
          <p class="text-green-700 dark:text-green-400 text-sm">One scan → instant payment confirmation</p>
        </div>
        <div class="flex justify-center">
          <div class="w-48 h-48 bg-white border-4 border-gray-300 flex items-center justify-center dark:bg-gray-900 dark:border-gray-700">
            <div class="text-center">
              <div class="w-32 h-32 bg-gray-200 mx-auto mb-2 flex items-center justify-center dark:bg-gray-700">
                <span class="text-4xl">📱</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400">QR Code Example</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Implementation Models That Actually Work</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div class="bg-white rounded-lg border border-blue-200 p-5 dark:bg-gray-800 dark:border-blue-800">
      <div class="flex items-center mb-3">
        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
          <span class="text-blue-800 font-bold dark:text-blue-300">1</span>
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white">Static QR Invoices</h4>
      </div>
      <div class="mb-3">
        <div class="bg-blue-50 rounded px-2 py-1 inline-block dark:bg-blue-900/30">
          <span class="text-xs font-semibold text-blue-800 dark:text-blue-300">Best for:</span>
          <span class="text-xs text-blue-700 dark:text-blue-400 ml-1">Recurring clients</span>
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Unique QR code on every invoice</p>
      <div class="bg-gray-50 rounded p-2 dark:bg-gray-700">
        <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">Conversion lift:</p>
        <p class="text-lg font-bold text-green-600 dark:text-green-400">62% faster payments</p>
      </div>
    </div>

    <div class="bg-white rounded-lg border border-green-200 p-5 dark:bg-gray-800 dark:border-green-800">
      <div class="flex items-center mb-3">
        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
          <span class="text-green-800 font-bold dark:text-green-300">2</span>
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white">Dynamic Session QR</h4>
      </div>
      <div class="mb-3">
        <div class="bg-green-50 rounded px-2 py-1 inline-block dark:bg-green-900/30">
          <span class="text-xs font-semibold text-green-800 dark:text-green-300">Best for:</span>
          <span class="text-xs text-green-700 dark:text-green-400 ml-1">In-person services</span>
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Client scans → creates temporary payment session</p>
      <div class="bg-gray-50 rounded p-2 dark:bg-gray-700">
        <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">Security advantage:</p>
        <p class="text-xs text-green-600 dark:text-green-400">Expires after use, no reuse risk</p>
      </div>
    </div>

    <div class="bg-white rounded-lg border border-purple-200 p-5 dark:bg-gray-800 dark:border-purple-800">
      <div class="flex items-center mb-3">
        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 dark:bg-purple-900">
          <span class="text-purple-800 font-bold dark:text-purple-300">3</span>
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white">AI-Generated QR</h4>
      </div>
      <div class="mb-3">
        <div class="bg-purple-50 rounded px-2 py-1 inline-block dark:bg-purple-900/30">
          <span class="text-xs font-semibold text-purple-800 dark:text-purple-300">Best for:</span>
          <span class="text-xs text-purple-700 dark:text-purple-400 ml-1">High-value clients</span>
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">AI analyzes client → creates personalized QR experience</p>
      <div class="bg-gray-50 rounded p-2 dark:bg-gray-700">
        <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">Impact:</p>
        <p class="text-lg font-bold text-purple-600 dark:text-purple-400">45% higher satisfaction</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-gray-200 p-5 mb-6 dark:bg-gray-800 dark:border-gray-700">
    <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Global QR Payment Adoption Data</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="text-center">
        <div class="text-3xl font-bold text-blue-600 mb-1 dark:text-blue-400">89%</div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Asia - consumer usage</p>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-green-600 mb-1 dark:text-green-400">47%</div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Europe - YoY business growth</p>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-purple-600 mb-1 dark:text-purple-400">32%</div>
        <p class="text-sm text-gray-600 dark:text-gray-400">North America - freelancers offering</p>
      </div>
    </div>
    <div class="mt-4 text-center">
      <div class="inline-block bg-gray-100 px-4 py-2 rounded-lg dark:bg-gray-700">
        <p class="text-sm font-semibold text-gray-900 dark:text-white">Global projection by 2027:</p>
        <p class="text-lg font-bold text-primary-600 dark:text-primary-400">75% of invoices will include QR</p>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Part 2: AI-Powered Billing - The Intelligence Layer</h2>

<div class="mb-10">
  <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">AI Capabilities Transforming Billing:</h3>
  
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
    <div class="bg-white rounded-lg border border-blue-200 p-5 dark:bg-gray-800 dark:border-blue-800">
      <div class="flex items-center mb-3">
        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900">
          <svg class="w-6 h-6 text-blue-800 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white">Intelligent Invoice Generation</h4>
      </div>
      <ul class="space-y-2">
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Natural Language Processing</span>
        </li>
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Context Awareness</span>
        </li>
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Regulatory Compliance</span>
        </li>
      </ul>
    </div>

    <div class="bg-white rounded-lg border border-green-200 p-5 dark:bg-gray-800 dark:border-green-800">
      <div class="flex items-center mb-3">
        <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3 dark:bg-green-900">
          <svg class="w-6 h-6 text-green-800 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white">Predictive Cash Flow Management</h4>
      </div>
      <ul class="space-y-2">
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Pattern Recognition</span>
        </li>
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Risk Assessment</span>
        </li>
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Optimization Suggestions</span>
        </li>
      </ul>
    </div>

    <div class="bg-white rounded-lg border border-purple-200 p-5 dark:bg-gray-800 dark:border-purple-800">
      <div class="flex items-center mb-3">
        <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3 dark:bg-purple-900">
          <svg class="w-6 h-6 text-purple-800 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white">Automated Client Communication</h4>
      </div>
      <ul class="space-y-2">
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Personalized Reminders</span>
        </li>
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Smart Escalation</span>
        </li>
        <li class="flex items-start">
          <div class="w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></div>
          <span class="text-sm text-gray-700 dark:text-gray-300">Multilingual Support</span>
        </li>
      </ul>
    </div>
  </div>

  <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Real AI Tools Available Now</h3>
  
  <div class="overflow-x-auto mb-8">
    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead class="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Tool</th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">AI Feature</th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Impact</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
          <td class="px-4 py-3">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 dark:bg-blue-900">
                <span class="text-blue-800 font-bold text-xs dark:text-blue-300">Q</span>
              </div>
              <span class="text-sm font-medium text-gray-900 dark:text-white">QuickBooks AI</span>
            </div>
          </td>
          <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Automated expense categorization</td>
          <td class="px-4 py-3">
            <span class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">Saves 3-5 hours monthly</span>
          </td>
        </tr>
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
          <td class="px-4 py-3">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
                <span class="text-green-800 font-bold text-xs dark:text-green-300">F</span>
              </div>
              <span class="text-sm font-medium text-gray-900 dark:text-white">FreshBooks AI</span>
            </div>
          </td>
          <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Predictive late payment alerts</td>
          <td class="px-4 py-3">
            <span class="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded dark:bg-red-900 dark:text-red-300">Reduces late payments by 35%</span>
          </td>
        </tr>
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
          <td class="px-4 py-3">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 dark:bg-purple-900">
                <span class="text-purple-800 font-bold text-xs dark:text-purple-300">Z</span>
              </div>
              <span class="text-sm font-medium text-gray-900 dark:text-white">Zoho Invoice IQ</span>
            </div>
          </td>
          <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Smart payment method recommendation</td>
          <td class="px-4 py-3">
            <span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Increases on-time payments by 28%</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-purple-50 rounded-lg p-5 dark:bg-purple-900/20">
    <h4 class="font-semibold text-purple-800 dark:text-purple-300 mb-3">The Hidden Benefit: Client Experience Personalization</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="text-sm text-purple-700 dark:text-purple-400 mb-2">AI analyzes:</p>
        <ul class="space-y-1">
          <li class="flex items-center">
            <svg class="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Preferred payment times</span>
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm text-gray-700 dark:text-gray-300">Communication effectiveness</span>
          </li>
        </ul>
      </div>
      <div class="bg-white rounded p-4 dark:bg-gray-800">
        <p class="font-semibold text-gray-900 dark:text-white text-sm mb-1">Result:</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">Each client receives their optimal payment experience without manual configuration.</p>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Part 3: The Synergy - QR + AI = The Complete System</h2>

<div class="mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-5 mb-6 dark:bg-gray-800 dark:border-gray-700">
    <h3 class="font-semibold text-gray-900 dark:text-white mb-4">The Intelligent QR Code Ecosystem</h3>
    
    <div class="relative mb-8">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div class="bg-blue-50 rounded-lg p-4 text-center w-full md:w-1/6 dark:bg-blue-900/20">
          <div class="text-2xl font-bold text-blue-600 mb-1 dark:text-blue-400">1</div>
          <p class="text-xs text-blue-700 dark:text-blue-400">AI generates invoice</p>
        </div>
        
        <div class="hidden md:block">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        
        <div class="bg-green-50 rounded-lg p-4 text-center w-full md:w-1/6 dark:bg-green-900/20">
          <div class="text-2xl font-bold text-green-600 mb-1 dark:text-green-400">2</div>
          <p class="text-xs text-green-700 dark:text-green-400">Smart QR generation</p>
        </div>
        
        <div class="hidden md:block">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        
        <div class="bg-purple-50 rounded-lg p-4 text-center w-full md:w-1/6 dark:bg-purple-900/20">
          <div class="text-2xl font-bold text-purple-600 mb-1 dark:text-purple-400">3</div>
          <p class="text-xs text-purple-700 dark:text-purple-400">Instant payment</p>
        </div>
        
        <div class="hidden md:block">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        
        <div class="bg-orange-50 rounded-lg p-4 text-center w-full md:w-1/6 dark:bg-orange-900/20">
          <div class="text-2xl font-bold text-orange-600 mb-1 dark:text-orange-400">4</div>
          <p class="text-xs text-orange-700 dark:text-orange-400">Automated reconciliation</p>
        </div>
        
        <div class="hidden md:block">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        
        <div class="bg-indigo-50 rounded-lg p-4 text-center w-full md:w-1/6 dark:bg-indigo-900/20">
          <div class="text-2xl font-bold text-indigo-600 mb-1 dark:text-indigo-400">5</div>
          <p class="text-xs text-indigo-700 dark:text-indigo-400">Continuous improvement</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-red-50 rounded-lg p-4 dark:bg-red-900/20">
        <h4 class="font-semibold text-red-800 dark:text-red-300 mb-2">Before:</h4>
        <div class="text-center mb-2">
          <div class="text-3xl font-bold text-red-600 dark:text-red-400">27 days</div>
          <p class="text-sm text-red-700 dark:text-red-400">14-step process</p>
        </div>
      </div>
      
      <div class="bg-green-50 rounded-lg p-4 dark:bg-green-900/20">
        <h4 class="font-semibold text-green-800 dark:text-green-300 mb-2">After:</h4>
        <div class="text-center mb-2">
          <div class="text-3xl font-bold text-green-600 dark:text-green-400">47 seconds</div>
          <p class="text-sm text-green-700 dark:text-green-400">3-step process</p>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Part 4: The Competitive Advantages of Early Adoption</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-3xl font-bold text-green-600 mb-1 dark:text-green-400">85%</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Reduction in days-to-pay</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-3xl font-bold text-blue-600 mb-1 dark:text-blue-400">8-12</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Hours monthly regained</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-3xl font-bold text-purple-600 mb-1 dark:text-purple-400">40%</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Client retention improvement</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-3xl font-bold text-orange-600 mb-1 dark:text-orange-400">Tech</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Forward professional perception</p>
  </div>
  
  <div class="bg-white rounded-lg border border-gray-200 p-4 text-center dark:bg-gray-800 dark:border-gray-700">
    <div class="text-3xl font-bold text-red-600 mb-1 dark:text-red-400">95%</div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Decrease in billing errors</p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Part 5: Implementation Roadmap - Phased Adoption Strategy</h2>

<div class="space-y-6 mb-10">
  <div class="bg-white rounded-lg border border-green-200 p-5 dark:bg-gray-800 dark:border-green-800">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
        <span class="text-white font-bold">1-2</span>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Phase 1: Foundation (Month 1-2)</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Getting started with QR code payments</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-semibold text-gray-900 dark:text-white text-sm mb-2">Actions:</p>
        <ul class="space-y-1">
          <li class="flex items-center">
            <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span class="text-sm text-gray-700 dark:text-gray-300">Implement QR codes on all invoices</span>
          </li>
          <li class="flex items-center">
            <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span class="text-sm text-gray-700 dark:text-gray-300">Choose one AI feature to adopt</span>
          </li>
        </ul>
      </div>
      <div class="bg-green-50 rounded p-3 dark:bg-green-900/20">
        <p class="font-semibold text-green-800 dark:text-green-300 text-sm mb-1">Metric to track:</p>
        <p class="text-lg font-bold text-green-700 dark:text-green-400">QR scan rate (aim for 25%+)</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-yellow-200 p-5 dark:bg-gray-800 dark:border-yellow-800">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center mr-3">
        <span class="text-white font-bold">3-6</span>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Phase 2: Integration (Month 3-6)</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Advanced payment automation</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-semibold text-gray-900 dark:text-white text-sm mb-2">Actions:</p>
        <ul class="space-y-1">
          <li class="flex items-center">
            <div class="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
            <span class="text-sm text-gray-700 dark:text-gray-300">Connect AI tool to accounting software</span>
          </li>
          <li class="flex items-center">
            <div class="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
            <span class="text-sm text-gray-700 dark:text-gray-300">Implement dynamic QR with options</span>
          </li>
        </ul>
      </div>
      <div class="bg-yellow-50 rounded p-3 dark:bg-yellow-900/20">
        <p class="font-semibold text-yellow-800 dark:text-yellow-300 text-sm mb-1">Metric to track:</p>
        <p class="text-lg font-bold text-yellow-700 dark:text-yellow-400">Average payment time (under 7 days)</p>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Part 6: Addressing Common Concerns and Objections</h2>

<div class="space-y-6 mb-10">
  <div class="bg-white rounded-lg border border-red-200 p-5 dark:bg-gray-800 dark:border-red-800">
    <h3 class="font-semibold text-red-700 dark:text-red-400 mb-3">"Is This Secure?"</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-red-50 rounded p-3 dark:bg-red-900/20">
        <p class="font-semibold text-red-800 dark:text-red-300 text-sm mb-1">QR Security:</p>
        <ul class="space-y-1">
          <li class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs text-red-700 dark:text-red-400">One-time use, encrypted data</span>
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs text-red-700 dark:text-red-400">No stored payment info</span>
          </li>
        </ul>
      </div>
      <div class="bg-red-50 rounded p-3 dark:bg-red-900/20">
        <p class="font-semibold text-red-800 dark:text-red-300 text-sm mb-1">Best practice:</p>
        <p class="text-xs text-red-700 dark:text-red-400">Use established platforms (Stripe, PayPal) not custom solutions</p>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg border border-blue-200 p-5 dark:bg-gray-800 dark:border-blue-800">
    <h3 class="font-semibold text-blue-700 dark:text-blue-400 mb-3">"Too Expensive to Implement"</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="text-center">
        <div class="text-2xl font-bold text-green-600 mb-1 dark:text-green-400">Free</div>
        <p class="text-xs text-gray-600 dark:text-gray-400">QR implementation</p>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-blue-600 mb-1 dark:text-blue-400">$10-50</div>
        <p class="text-xs text-gray-600 dark:text-gray-400">AI tools monthly</p>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-purple-600 mb-1 dark:text-purple-400">2-4</div>
        <p class="text-xs text-gray-600 dark:text-gray-400">Hours setup time</p>
      </div>
    </div>
    <div class="mt-4 bg-blue-50 rounded p-3 dark:bg-blue-900/20">
      <p class="font-semibold text-blue-800 dark:text-blue-300 text-sm">ROI Reality:</p>
      <p class="text-sm text-blue-700 dark:text-blue-400">Saves 8+ hours monthly = positive ROI immediately</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Your Action Plan: Starting Tomorrow</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
  <div class="bg-white rounded-lg border border-green-200 p-5 dark:bg-gray-800 dark:border-green-800">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
      <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 dark:bg-green-900">
        <svg class="w-4 h-4 text-green-800 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
        </svg>
      </span>
      Immediate Actions (This Week)
    </h3>
    <ul class="space-y-2">
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Add QR codes to your next 3 invoices</span>
      </li>
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Test one AI feature in billing software</span>
      </li>
    </ul>
  </div>
  
  <div class="bg-white rounded-lg border border-yellow-200 p-5 dark:bg-gray-800 dark:border-yellow-800">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
      <span class="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2 dark:bg-yellow-900">
        <span class="text-yellow-800 font-bold text-sm dark:text-yellow-300">30</span>
      </span>
      Short-Term Goals (Next 30 Days)
    </h3>
    <ul class="space-y-2">
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Achieve 30% QR adoption rate</span>
      </li>
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Reduce avg payment time by 15%</span>
      </li>
    </ul>
  </div>
  
  <div class="bg-white rounded-lg border border-purple-200 p-5 dark:bg-gray-800 dark:border-purple-800">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
      <span class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2 dark:bg-purple-900">
        <span class="text-purple-800 font-bold text-sm dark:text-purple-300">90</span>
      </span>
      Medium-Term Objectives (Next 90 Days)
    </h3>
    <ul class="space-y-2">
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Fully integrate AI payment predictions</span>
      </li>
      <li class="flex items-start">
        <div class="w-2 h-2 rounded-full bg-purple-500 mt-1.5 mr-2"></div>
        <span class="text-sm text-gray-700 dark:text-gray-300">Reduce late payments by 40%</span>
      </li>
    </ul>
  </div>
</div>

<div class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white mb-8">
  <h2 class="text-2xl font-bold mb-4">The Strategic Mindset Shift Required</h2>
  <p class="mb-6 opacity-90">
    This isn't about adding features—it's about fundamentally rethinking the payment experience as:
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="flex items-center bg-white/10 rounded-lg p-3">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>A client retention tool rather than administrative necessity</span>
    </div>
    <div class="flex items-center bg-white/10 rounded-lg p-3">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>A brand differentiation point in crowded markets</span>
    </div>
  </div>
  
  <div class="bg-white/20 rounded-lg p-4">
    <p class="font-bold mb-2">Start simple:</p>
    <p class="opacity-90 mb-3">
      Add a QR code to your next invoice. Notice what happens. Then add one AI feature. Measure the improvement. Iterate from there.
    </p>
    <p class="opacity-90">
      The most sophisticated systems grow from the simplest beginnings—but only if you begin.
    </p>
  </div>
</div>
    `,imageUrl:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",date:"Oct 28, 2023",author:"Chris Thompson",readTime:"4 min read"}],_p=()=>r.jsx("div",{className:"bg-gray-50 py-16 sm:py-24 dark:bg-gray-900",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsxs("h1",{className:"text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white",children:["QuickBillr ",r.jsx("span",{className:"bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text",children:"Insights"})]}),r.jsx("p",{className:"mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto",children:"Tips, guides, and stories to help you manage your business billing more effectively."})]}),r.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:Jd.map(i=>r.jsxs(ht,{to:`/blog/${i.id}`,className:"flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 dark:bg-gray-800 group",children:[r.jsxs("div",{className:"relative h-56 overflow-hidden",children:[r.jsx("img",{src:i.imageUrl,alt:i.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),r.jsx("div",{className:"absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700 dark:bg-gray-900/90 dark:text-primary-400",children:i.readTime})]}),r.jsxs("div",{className:"p-6 flex-grow flex flex-col",children:[r.jsx("p",{className:"text-sm text-primary-600 font-medium mb-2 dark:text-primary-400",children:i.date}),r.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors dark:text-white",children:i.title}),r.jsx("p",{className:"text-gray-600 text-sm line-clamp-3 mb-4 dark:text-gray-300",children:i.description}),r.jsxs("div",{className:"mt-auto flex items-center pt-4 border-t border-gray-100 dark:border-gray-700",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("div",{className:"w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs dark:bg-primary-900/30 dark:text-primary-400",children:i.author.charAt(0)})}),r.jsx("div",{className:"ml-3",children:r.jsx("p",{className:"text-xs font-semibold text-gray-900 dark:text-white",children:i.author})}),r.jsxs("div",{className:"ml-auto text-primary-600 flex items-center text-sm font-medium",children:["Read more",r.jsx("svg",{className:"ml-1 w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]})]})]})]},i.id))})]})}),Hp=({icon:i,title:o,description:m})=>r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800",children:[r.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white mb-4",children:i}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:o}),r.jsx("p",{className:"mt-2 text-base text-gray-600 dark:text-gray-300",children:m})]}),qp=({quote:i,author:o,role:m,avatar:c})=>r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800",children:[r.jsx("img",{className:"w-16 h-16 rounded-full mx-auto mb-4",src:c,alt:`Headshot of ${o}, ${m}`}),r.jsxs("p",{className:"text-gray-600 italic dark:text-gray-300",children:['"',i,'"']}),r.jsx("p",{className:"mt-4 font-semibold text-gray-900 dark:text-white",children:o}),r.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:m})]}),Yp=()=>{const i=[{icon:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3"})}),title:"Global Ready",description:"Bill clients worldwide with support for 20+ languages and all major currencies."},{icon:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),title:"Customizable Templates",description:"Choose from a variety of free and premium templates to match your brand's style perfectly."},{icon:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v1m0 8v1m0 8v1m-4-8h1m8 0h1M4 12h1m8 0h1m-5-4v1m0 8v1m-4-4h1m8 0h1m-4-4h1m-1 8h1"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z"})]}),title:"Easy Payments with QR Codes",description:"Add a scannable QR code to your invoices linked to your payment page for faster payments."},{icon:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),title:"Instant Downloads",description:"Download your document as a professional PDF with a single click, ready to send to your client."}],o=[{quote:"QuickBillr has been a game-changer for my freelance business. I can create and send invoices in under a minute!",author:"Sarah L.",role:"Freelance Designer",avatar:"https://picsum.photos/id/1011/100/100"},{quote:"The live preview feature is amazing. It helps me catch any mistakes before I send the invoice. Highly recommended.",author:"Michael B.",role:"Consultant",avatar:"https://picsum.photos/id/1005/100/100"},{quote:"I love the professional templates. They make my small business look so much more established and professional.",author:"Jessica P.",role:"Small Business Owner",avatar:"https://picsum.photos/id/1027/100/100"}],m=Jd.slice(0,3);return r.jsxs("div",{children:[r.jsx("section",{className:"bg-white dark:bg-gray-900",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-44 text-center",children:[r.jsxs("h1",{className:"text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight dark:text-white",children:["Create Professional Invoices & Estimates in ",r.jsx("span",{className:"bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text",children:"Seconds"})]}),r.jsx("p",{className:"mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300",children:"Free, simple, and globally compatible with multi-language support, currency options, and QR code payments — perfect for freelancers and small businesses."}),r.jsx("div",{className:"mt-8",children:r.jsx(ht,{to:"/free-invoice-generator",className:"inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition-all transform hover:scale-105",children:"Try Free Now"})})]})}),r.jsx("section",{className:"py-20 bg-gray-50 dark:bg-gray-800",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Everything You Need to Get Paid Faster"}),r.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"Powerful features to streamline your billing process."})]}),r.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:i.map(c=>r.jsx(Hp,{...c},c.title))})]})}),r.jsx("section",{className:"py-20 bg-white dark:bg-gray-900",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12",children:[r.jsxs("div",{className:"max-w-2xl",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Latest from Our Blog"}),r.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"Expert advice and insights to help your business grow and thrive."})]}),r.jsx("div",{className:"mt-6 md:mt-0",children:r.jsxs(ht,{to:"/blog",className:"inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors",children:["View all posts",r.jsx("svg",{className:"ml-2 w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]}),r.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:m.map(c=>r.jsxs(ht,{to:`/blog/${c.id}`,className:"group flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700",children:[r.jsx("div",{className:"relative h-48 overflow-hidden",children:r.jsx("img",{src:c.imageUrl,alt:c.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center text-xs font-medium text-primary-600 mb-2 dark:text-primary-400",children:[r.jsx("span",{children:c.date}),r.jsx("span",{className:"mx-2 text-gray-300 dark:text-gray-600",children:"•"}),r.jsx("span",{children:c.readTime})]}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors dark:text-white line-clamp-2",children:c.title}),r.jsx("p",{className:"text-gray-600 text-sm line-clamp-3 dark:text-gray-400",children:c.description})]})]},c.id))})]})}),r.jsx("section",{className:"py-20 bg-gray-50 dark:bg-gray-800",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Loved by Professionals Worldwide"}),r.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"Don't just take our word for it. Here's what our users say."})]}),r.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:o.map(c=>r.jsx(qp,{...c},c.author))})]})})]})},Qp="/assets/template-1-XE8j1Tv6.png",Xp="/assets/template-2-Cpzkimhv.png",Gp="/assets/template-3-B0X3lMQO.png",Vp="/assets/template-4-DK_5vUL_.png",Zp="/assets/template-5-B2YiboKp.png",Kp="/assets/template-6-B9WoFhgX.png",Jp="/assets/template-7-D7vONJiy.png",Fp=[{id:"template-1",image:Qp,name:"template-1",type:"Premium"},{id:"template-2",image:Xp,name:"template-2",type:"Free"},{id:"template-3",image:Gp,name:"template-3",type:"Premium"},{id:"template-4",image:Vp,name:"template-4",type:"Free"},{id:"template-5",image:Zp,name:"template-5",type:"Free"},{id:"template-6",image:Kp,name:"template-6",type:"Free"},{id:"template-7",image:Jp,name:"template-7",type:"Free"}],mm=[{symbol:"$",name:"USD"},{symbol:"€",name:"EUR"},{symbol:"£",name:"GBP"},{symbol:"¥",name:"JPY"},{symbol:"₹",name:"INR"},{symbol:"A$",name:"AUD"},{symbol:"C$",name:"CAD"},{symbol:"Fr",name:"CHF"},{symbol:"¥",name:"CNY"},{symbol:"kr",name:"SEK"},{symbol:"NZ$",name:"NZD"},{symbol:"Mex$",name:"MXN"},{symbol:"S$",name:"SGD"},{symbol:"HK$",name:"HKD"},{symbol:"kr",name:"NOK"},{symbol:"₩",name:"KRW"},{symbol:"₺",name:"TRY"},{symbol:"₽",name:"RUB"},{symbol:"R$",name:"BRL"},{symbol:"R",name:"ZAR"}],$p=[{code:"en-US",name:"English"},{code:"es-ES",name:"Español"},{code:"fr-FR",name:"Français"},{code:"de-DE",name:"Deutsch"},{code:"it-IT",name:"Italiano"},{code:"pt-BR",name:"Português (Brasil)"},{code:"ja-JP",name:"日本語"},{code:"zh-CN",name:"中文 (简体)"},{code:"ru-RU",name:"Русский"},{code:"ar-SA",name:"العربية"},{code:"hi-IN",name:"हिन्दी"},{code:"nl-NL",name:"Nederlands"},{code:"ko-KR",name:"한국어"},{code:"sv-SE",name:"Svenska"},{code:"tr-TR",name:"Türkçe"},{code:"pl-PL",name:"Polski"},{code:"da-DK",name:"Dansk"},{code:"fi-FI",name:"Suomi"},{code:"id-ID",name:"Bahasa Indonesia"},{code:"vi-VN",name:"Tiếng Việt"},{code:"th-TH",name:"ภาษาไทย"}];function Wp({selectedTemplate:i,setSelectedTemplate:o}){const[m,c]=z.useState(!1),f=z.useRef(null);return z.useEffect(()=>{function g(h){f.current&&!f.current.contains(h.target)&&c(!1)}return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),r.jsxs("div",{className:"mt-6 relative",ref:f,children:[r.jsx("h3",{className:"text-gray-700 font-semibold mb-2 dark:text-gray-300",children:"Choose Template"}),r.jsx("div",{className:`border rounded-lg bg-white dark:bg-gray-800 transition-all duration-300 overflow-hidden ${m?"shadow-lg":"hover:shadow-md cursor-pointer"}`,onClick:()=>!m&&c(!0),children:r.jsx("div",{className:`grid grid-cols-2 gap-2 transition-all duration-300 ${m?"max-h-[500px] overflow-y-auto p-2":"max-h-[200px] p-2 pointer-events-none"}`,children:Fp.map(g=>r.jsx("div",{className:`relative rounded-lg overflow-hidden border transition-all duration-200 ${i===g.id?"ring-2 ring-blue-500":""}`,onClick:h=>{m&&(h.stopPropagation(),o(g.id))},children:r.jsx("img",{src:g.image,alt:g.name,className:"w-full h-40 object-contain bg-white"})},g.id))})})]})}var yt=(i=>(i.Invoice="INVOICE",i.Estimate="ESTIMATE",i))(yt||{});function Ur(i,o){const[m,c]=z.useState(()=>{try{const g=window.localStorage.getItem(i);return g?JSON.parse(g):o}catch(g){return console.error(g),o}}),f=g=>{try{const h=g instanceof Function?g(m):g;c(h),window.localStorage.setItem(i,JSON.stringify(h))}catch(h){console.error(h)}};return z.useEffect(()=>{const g=h=>{h.key===i&&c(JSON.parse(h.newValue||"null"))};return window.addEventListener("storage",g),()=>{window.removeEventListener("storage",g)}},[i]),[m,f]}const xm={"en-US":{documentTypeInvoice:"INVOICE",documentTypeEstimate:"ESTIMATE",addYourLogo:"+ Add Your Logo",billTo:"Bill To",invoiceNumberPrefix:"#",date:"Date:",dueDate:"Due Date:",paymentTerms:"Payment Terms:",poNumber:"PO Number:",item:"Item",quantity:"Quantity",rate:"Rate",amount:"Amount",addLineItem:"+ Line Item",paymentMethod:"Payment Method",notes:"Notes",subtotal:"Subtotal",discount:"Discount",tax:"Tax",total:"Total",amountPaid:"Amount Paid",balanceDue:"Balance Due",qrCodeHelper:"Scan to pay",authorizedSignature:"Authorized Signature",switchToEstimate:"Switch to Estimate",switchToInvoice:"Switch to Invoice",language:"Language"},"es-ES":{documentTypeInvoice:"FACTURA",documentTypeEstimate:"PRESUPUESTO",addYourLogo:"+ Añadir Logo",billTo:"Cliente",invoiceNumberPrefix:"Nº",date:"Fecha",dueDate:"Vencimiento",paymentTerms:"Términos de Pago",poNumber:"Nº de Pedido",item:"Concepto",quantity:"Cantidad",rate:"Precio",amount:"Importe",addLineItem:"+ Añadir Línea",paymentMethod:"Método de Pago",notes:"Notas",subtotal:"Subtotal",discount:"Descuento",tax:"Impuestos",total:"Total",amountPaid:"Cantidad Pagada",balanceDue:"Saldo Pendiente",qrCodeHelper:"Escanear para pagar",authorizedSignature:"Firma Autorizada",switchToEstimate:"Cambiar a Presupuesto",switchToInvoice:"Cambiar a Factura",language:"Idioma"},"fr-FR":{documentTypeInvoice:"FACTURE",documentTypeEstimate:"DEVIS",addYourLogo:"+ Ajouter Logo",billTo:"Client",invoiceNumberPrefix:"N°",date:"Date",dueDate:"Échéance",paymentTerms:"Conditions de Paiement",poNumber:"N° de Commande",item:"Article",quantity:"Quantité",rate:"Taux",amount:"Montant",addLineItem:"+ Ajouter Ligne",paymentMethod:"Moyen de Paiement",notes:"Notes",subtotal:"Sous-total",discount:"Remise",tax:"Taxe",total:"Total",amountPaid:"Montant Payé",balanceDue:"Solde Dû",qrCodeHelper:"Scanner pour payer",authorizedSignature:"Signature Autorisée",switchToEstimate:"Passer au Devis",switchToInvoice:"Passer à la Facture",language:"Langue"},"de-DE":{documentTypeInvoice:"RECHNUNG",documentTypeEstimate:"KOSTENVORANSCHLAG",addYourLogo:"+ Logo hinzufügen",billTo:"Rechnung an",invoiceNumberPrefix:"Nr.",date:"Datum",dueDate:"Fällig am",paymentTerms:"Zahlungsbedingungen",poNumber:"Bestellnummer",item:"Artikel",quantity:"Menge",rate:"Satz",amount:"Betrag",addLineItem:"+ Zeile hinzufügen",paymentMethod:"Zahlungsmethode",notes:"Anmerkungen",subtotal:"Zwischensumme",discount:"Rabatt",tax:"Steuer",total:"Gesamt",amountPaid:"Bezahlter Betrag",balanceDue:"Restbetrag",qrCodeHelper:"Scannen zum Bezahlen",authorizedSignature:"Autorisierte Unterschrift",switchToEstimate:"Zu Kostenvoranschlag wechseln",switchToInvoice:"Zu Rechnung wechseln",language:"Sprache"},"it-IT":{documentTypeInvoice:"FATTURA",documentTypeEstimate:"PREVENTIVO",addYourLogo:"+ Aggiungi Logo",billTo:"Cliente",invoiceNumberPrefix:"N.",date:"Data",dueDate:"Scadenza",paymentTerms:"Termini di Pagamento",poNumber:"N. Ordine",item:"Articolo",quantity:"Quantità",rate:"Prezzo",amount:"Importo",addLineItem:"+ Aggiungi Riga",paymentMethod:"Metodo di Pagamento",notes:"Note",subtotal:"Subtotale",discount:"Sconto",tax:"IVA",total:"Totale",amountPaid:"Importo Pagato",balanceDue:"Saldo Dovuto",qrCodeHelper:"Scansiona per pagare",authorizedSignature:"Firma Autorizzata",switchToEstimate:"Passa a Preventivo",switchToInvoice:"Passa a Fattura",language:"Lingua"},"pt-BR":{documentTypeInvoice:"NOTA FISCAL",documentTypeEstimate:"ORÇAMENTO",addYourLogo:"+ Adicionar Logo",billTo:"Cliente",invoiceNumberPrefix:"Nº",date:"Data",dueDate:"Vencimento",paymentTerms:"Termos de Pagamento",poNumber:"Nº do Pedido",item:"Item",quantity:"Quantidade",rate:"Valor",amount:"Total",addLineItem:"+ Adicionar Linha",paymentMethod:"Método de Pagamento",notes:"Observações",subtotal:"Subtotal",discount:"Desconto",tax:"Imposto",total:"Total",amountPaid:"Valor Pago",balanceDue:"Saldo Devedor",qrCodeHelper:"Escanear para pagar",authorizedSignature:"Assinatura Autorizada",switchToEstimate:"Mudar para Orçamento",switchToInvoice:"Mudar para Nota Fiscal",language:"Idioma"},"ja-JP":{documentTypeInvoice:"請求書",documentTypeEstimate:"見積書",addYourLogo:"+ ロゴを追加",billTo:"請求先",invoiceNumberPrefix:"第",date:"日付",dueDate:"支払期日",paymentTerms:"支払条件",poNumber:"注文番号",item:"品目",quantity:"数量",rate:"単価",amount:"金額",addLineItem:"+ 行を追加",paymentMethod:"支払方法",notes:"備考",subtotal:"小計",discount:"割引",tax:"税",total:"合計",amountPaid:"支払済額",balanceDue:"残高",qrCodeHelper:"スキャンして支払う",authorizedSignature:"署名",switchToEstimate:"見積書に切り替え",switchToInvoice:"請求書に切り替え",language:"言語"},"zh-CN":{documentTypeInvoice:"发票",documentTypeEstimate:"估价单",addYourLogo:"+ 添加标志",billTo:"账单收件人",invoiceNumberPrefix:"#",date:"日期",dueDate:"截止日期",paymentTerms:"付款条件",poNumber:"采购订单号",item:"项目",quantity:"数量",rate:"费率",amount:"金额",addLineItem:"+ 添加行项目",paymentMethod:"付款方法",notes:"笔记",subtotal:"小计",discount:"折扣",tax:"税",total:"总计",amountPaid:"已付金额",balanceDue:"应付余额",qrCodeHelper:"扫描支付",authorizedSignature:"授权签名",switchToEstimate:"切换到估价单",switchToInvoice:"切换到发票",language:"语言"},"ru-RU":{documentTypeInvoice:"СЧЕТ",documentTypeEstimate:"СМЕТА",addYourLogo:"+ Добавить логотип",billTo:"Плательщик",invoiceNumberPrefix:"№",date:"Дата",dueDate:"Срок оплаты",paymentTerms:"Условия оплаты",poNumber:"Номер заказа",item:"Наименование",quantity:"Кол-во",rate:"Цена",amount:"Сумма",addLineItem:"+ Добавить строку",paymentMethod:"Способ оплаты",notes:"Примечания",subtotal:"Подытог",discount:"Скидка",tax:"Налог",total:"Итого",amountPaid:"Оплачено",balanceDue:"Остаток к оплате",qrCodeHelper:"Сканировать для оплаты",authorizedSignature:"Авторизованная подпись",switchToEstimate:"Переключиться на смету",switchToInvoice:"Переключиться на счет",language:"Язык"},"ar-SA":{documentTypeInvoice:"فاتورة",documentTypeEstimate:"تقدير",addYourLogo:"+ إضافة شعارك",billTo:"فاتورة إلى",invoiceNumberPrefix:"#",date:"التاريخ",dueDate:"تاريخ الاستحقاق",paymentTerms:"شروط الدفع",poNumber:"رقم طلب الشراء",item:"بند",quantity:"الكمية",rate:"السعر",amount:"المبلغ",addLineItem:"+ إضافة بند",paymentMethod:"طريقة الدفع",notes:"ملاحظات",subtotal:"المجموع الفرعي",discount:"خصم",tax:"ضريبة",total:"المجموع",amountPaid:"المبلغ المدفوع",balanceDue:"الرصيد المستحق",qrCodeHelper:"امسح للدفع",authorizedSignature:"التوقيع المعتمد",switchToEstimate:"التبديل إلى تقدير",switchToInvoice:"التبديل إلى فاتورة",language:"اللغة"},"hi-IN":{documentTypeInvoice:"बीजक",documentTypeEstimate:"अनुमान",addYourLogo:"+ अपना लोगो जोड़ें",billTo:"बिल भेजें",invoiceNumberPrefix:"#",date:"तारीख",dueDate:"देय तिथि",paymentTerms:"भुगतान की शर्तें",poNumber:"पीओ नंबर",item:"मद",quantity:"मात्रा",rate:"दर",amount:"राशि",addLineItem:"+ पंक्ति आइटम जोड़ें",paymentMethod:"भुगतान विधि",notes:"टिप्पणियाँ",subtotal:"उप-योग",discount:"छूट",tax:"कर",total:"कुल",amountPaid:"चुकाई गई राशि",balanceDue:"बकाया राशि",qrCodeHelper:"भुगतान करने के लिए स्कैन करें",authorizedSignature:"अधिकृत हस्ताक्षर",switchToEstimate:"अनुमान पर स्विच करें",switchToInvoice:"बीजक पर स्विच करें",language:"भाषा"},"nl-NL":{documentTypeInvoice:"FACTUUR",documentTypeEstimate:"OFFERTE",addYourLogo:"+ Logo toevoegen",billTo:"Factuur aan",invoiceNumberPrefix:"Nr.",date:"Datum",dueDate:"Vervaldatum",paymentTerms:"Betalingsvoorwaarden",poNumber:"Bestelnummer",item:"Artikel",quantity:"Aantal",rate:"Tarief",amount:"Bedrag",addLineItem:"+ Regel toevoegen",paymentMethod:"Betaalmethode",notes:"Notities",subtotal:"Subtotaal",discount:"Korting",tax:"BTW",total:"Totaal",amountPaid:"Betaald bedrag",balanceDue:"Openstaand bedrag",qrCodeHelper:"Scan om te betalen",authorizedSignature:"Geautoriseerde handtekening",switchToEstimate:"Wisselen naar Offerte",switchToInvoice:"Wisselen naar Factuur",language:"Taal"},"ko-KR":{documentTypeInvoice:"청구서",documentTypeEstimate:"견적서",addYourLogo:"+ 로고 추가",billTo:"청구 대상",invoiceNumberPrefix:"번호",date:"날짜",dueDate:"기한",paymentTerms:"결제 조건",poNumber:"주문 번호",item:"항목",quantity:"수량",rate:"단가",amount:"금액",addLineItem:"+ 항목 추가",paymentMethod:"결제 방법",notes:"메모",subtotal:"소계",discount:"할인",tax:"세금",total:"합계",amountPaid:"지불액",balanceDue:"미지불 잔액",qrCodeHelper:"스캔하여 결제",authorizedSignature:"승인된 서명",switchToEstimate:"견적서로 전환",switchToInvoice:"청구서로 전환",language:"언어"},"sv-SE":{documentTypeInvoice:"FAKTURA",documentTypeEstimate:"OFFERT",addYourLogo:"+ Lägg till logotyp",billTo:"Fakturera till",invoiceNumberPrefix:"Nr.",date:"Datum",dueDate:"Förfallodatum",paymentTerms:"Betalningsvillkor",poNumber:"Inköpsordernummer",item:"Artikel",quantity:"Antal",rate:"Pris",amount:"Belopp",addLineItem:"+ Lägg till rad",paymentMethod:"Betalningsmetod",notes:"Anteckningar",subtotal:"Delsumma",discount:"Rabatt",tax:"Moms",total:"Totalt",amountPaid:"Betalt belopp",balanceDue:"Att betala",qrCodeHelper:"Skanna för att betala",authorizedSignature:"Auktoriserad signatur",switchToEstimate:"Byt till Offert",switchToInvoice:"Byt till Faktura",language:"Språk"},"tr-TR":{documentTypeInvoice:"FATURA",documentTypeEstimate:"TAHMİN",addYourLogo:"+ Logonuzu Ekleyin",billTo:"Fatura Adresi",invoiceNumberPrefix:"#",date:"Tarih",dueDate:"Vade Tarihi",paymentTerms:"Ödeme Koşulları",poNumber:"Sipariş Numarası",item:"Ürün/Hizmet",quantity:"Miktar",rate:"Birim Fiyat",amount:"Tutar",addLineItem:"+ Satır Ekle",paymentMethod:"Ödeme Yöntemi",notes:"Notlar",subtotal:"Ara Toplam",discount:"İndirim",tax:"Vergi",total:"Toplam",amountPaid:"Ödenen Tutar",balanceDue:"Kalan Bakiye",qrCodeHelper:"Ödemek için Tarayın",authorizedSignature:"Yetkili İmza",switchToEstimate:"Tahmine Geç",switchToInvoice:"Faturaya Geç",language:"Dil"},"pl-PL":{documentTypeInvoice:"FAKTURA",documentTypeEstimate:"WYCENA",addYourLogo:"+ Dodaj swoje logo",billTo:"Nabywca",invoiceNumberPrefix:"Nr",date:"Data",dueDate:"Termin płatności",paymentTerms:"Warunki płatności",poNumber:"Nr zamówienia",item:"Pozycja",quantity:"Ilość",rate:"Stawka",amount:"Kwota",addLineItem:"+ Dodaj pozycję",paymentMethod:"Metoda płatności",notes:"Uwagi",subtotal:"Suma częściowa",discount:"Rabat",tax:"Podatek",total:"Razem",amountPaid:"Zapłacono",balanceDue:"Do zapłaty",qrCodeHelper:"Zeskanuj, aby zapłacić",authorizedSignature:"Upoważniony podpis",switchToEstimate:"Przełącz na wycenę",switchToInvoice:"Przełącz na fakturę",language:"Język"},"da-DK":{documentTypeInvoice:"FAKTURA",documentTypeEstimate:"OVERSLAG",addYourLogo:"+ Tilføj dit logo",billTo:"Faktura til",invoiceNumberPrefix:"Nr.",date:"Dato",dueDate:"Forfaldsdato",paymentTerms:"Betalingsbetingelser",poNumber:"Bestillingsnr.",item:"Vare",quantity:"Antal",rate:"Pris",amount:"Beløb",addLineItem:"+ Tilføj linje",paymentMethod:"Betalingsmetode",notes:"Noter",subtotal:"Subtotal",discount:"Rabat",tax:"Moms",total:"Total",amountPaid:"Betalt beløb",balanceDue:"Restbeløb",qrCodeHelper:"Scan for at betale",authorizedSignature:"Autoriseret underskrift",switchToEstimate:"Skift til overslag",switchToInvoice:"Skift til faktura",language:"Sprog"},"fi-FI":{documentTypeInvoice:"LASKU",documentTypeEstimate:"ARVIO",addYourLogo:"+ Lisää logo",billTo:"Laskutustiedot",invoiceNumberPrefix:"Nro.",date:"Päivämäärä",dueDate:"Eräpäivä",paymentTerms:"Maksuehdot",poNumber:"Tilausnumero",item:"Nimike",quantity:"Määrä",rate:"Hinta",amount:"Summa",addLineItem:"+ Lisää rivi",paymentMethod:"Maksutapa",notes:"Huomautukset",subtotal:"Välisumma",discount:"Alennus",tax:"Vero",total:"Yhteensä",amountPaid:"Maksettu summa",balanceDue:"Maksamatta",qrCodeHelper:"Skannaa maksaaksesi",authorizedSignature:"Valtuutettu allekirjoitus",switchToEstimate:"Vaihda arvioon",switchToInvoice:"Vaihda laskuun",language:"Kieli"},"id-ID":{documentTypeInvoice:"FAKTUR",documentTypeEstimate:"PERKIRAAN",addYourLogo:"+ Tambahkan Logo Anda",billTo:"Tagihan Kepada",invoiceNumberPrefix:"#",date:"Tanggal",dueDate:"Tanggal Jatuh Tempo",paymentTerms:"Syarat Pembayaran",poNumber:"Nomor PO",item:"Barang",quantity:"Jumlah",rate:"Harga",amount:"Total",addLineItem:"+ Tambah Baris",paymentMethod:"Metode Pembayaran",notes:"Catatan",subtotal:"Subtotal",discount:"Diskon",tax:"Pajak",total:"Total",amountPaid:"Jumlah Dibayar",balanceDue:"Sisa Tagihan",qrCodeHelper:"Pindai untuk Membayar",authorizedSignature:"Tanda Tangan Resmi",switchToEstimate:"Ubah ke Perkiraan",switchToInvoice:"Ubah ke Faktur",language:"Bahasa"},"vi-VN":{documentTypeInvoice:"HÓA ĐƠN",documentTypeEstimate:"BÁO GIÁ",addYourLogo:"+ Thêm Logo",billTo:"Thanh toán cho",invoiceNumberPrefix:"Số",date:"Ngày",dueDate:"Ngày hết hạn",paymentTerms:"Điều khoản thanh toán",poNumber:"Số Đơn hàng",item:"Mặt hàng",quantity:"Số lượng",rate:"Đơn giá",amount:"Thành tiền",addLineItem:"+ Thêm dòng",paymentMethod:"Phương thức thanh toán",notes:"Ghi chú",subtotal:"Tổng phụ",discount:"Chiết khấu",tax:"Thuế",total:"Tổng cộng",amountPaid:"Đã thanh toán",balanceDue:"Số dư",qrCodeHelper:"Quét để thanh toán",authorizedSignature:"Chữ ký được ủy quyền",switchToEstimate:"Chuyển sang Báo giá",switchToInvoice:"Chuyển sang Hóa đơn",language:"Ngôn ngữ"},"th-TH":{documentTypeInvoice:"ใบแจ้งหนี้",documentTypeEstimate:"ใบเสนอราคา",addYourLogo:"+ เพิ่มโลโก้ของคุณ",billTo:"เรียกเก็บเงินไปที่",invoiceNumberPrefix:"เลขที่",date:"วันที่",dueDate:"วันที่ครบกำหนด",paymentTerms:"เงื่อนไขการชำระเงิน",poNumber:"เลขที่ใบสั่งซื้อ",item:"รายการ",quantity:"จำนวน",rate:"อัตรา",amount:"จำนวนเงิน",addLineItem:"+ เพิ่มรายการ",paymentMethod:"วิธีการชำระเงิน",notes:"หมายเหตุ",subtotal:"ยอดรวมย่อย",discount:"ส่วนลด",tax:"ภาษี",total:"ยอดรวมทั้งหมด",amountPaid:"จำนวนเงินที่ชำระแล้ว",balanceDue:"ยอดคงเหลือ",qrCodeHelper:"สแกนเพื่อชำระเงิน",authorizedSignature:"ลายมือชื่อผู้มีอำนาจ",switchToEstimate:"เปลี่ยนเป็นใบเสนอราคา",switchToInvoice:"เปลี่ยนเป็นใบแจ้งหนี้",language:"ภาษา"}},Ip=({data:i,t:o,currencySymbol:m,qrCodeUrl:c,showQrCode:f,formatNumber:g,formatDate:h,handleFileChange:j,removeImage:y,handleDataChange:x,handleItemChange:N,removeItem:B,addItem:H,subtotal:q,total:Q,balanceDue:X,EditableField:k})=>r.jsxs("div",{id:"invoice-preview",className:"bg-white p-10 rounded-lg font-Stepon shadow-lg text-base template-",children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:i.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:i.logoUrl,alt:"Company or client logo",className:"h-20 w-auto object-contain"}),r.jsx("button",{onClick:()=>y("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:o.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:_=>j(_,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(k,{value:i.from,onChange:x,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-gray-600 uppercase tracking-wide mb-2",children:o.billTo}),r.jsx(k,{value:i.to,onChange:x,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#000000] dark:text-[#000000] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-gray-800 tracking-widest ",children:i.documentType===yt.Invoice?o.documentTypeInvoice:o.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end mt-3",children:[r.jsx("span",{className:"text-gray-500 ",children:o.invoiceNumberPrefix}),r.jsx(k,{value:i.invoiceNumber,onChange:x,name:"invoiceNumber",className:" text-right mt-2 text-[#000000] dark:text-[#000000] font-semibold border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"150px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-gray-600 text-right ",children:o.date}),r.jsx(k,{type:"date",name:"date",value:i.date,onChange:x,className:"text-right text-[#000000] dark:text-[#000000] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"125px"}})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-gray-600 text-right ",children:o.dueDate}),r.jsx(k,{type:"date",name:"dueDate",value:i.dueDate,onChange:x,className:"text-right text-[#000000] dark:text-[#000000]  max-w-40 border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"125px"}})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"flex-shrink-0 grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-gray-600 text-right ",children:o.paymentTerms}),r.jsx(k,{type:"text",name:"paymentTerms",value:i.paymentTerms,onChange:x,placeholder:"e.g. Net 15",className:"text-right text-[#000000] dark:text-[#000000] flex-shrink-0 border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"125px"}})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"flex-shrink-0  grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-gray-600 text-right ",children:o.poNumber}),r.jsx(k,{type:"text",name:"poNumber",value:i.poNumber,onChange:x,placeholder:"e.g. PO-12345",className:"text-right text-[#000000] dark:text-[#000000] flex-shrink-0 border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"125px"}})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed ",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"template1-pdf-border font-bold bg-gray-800 text-white",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:i.items.map(_=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(k,{value:_.description,onChange:T=>N(_.id,"description",T.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(k,{type:"number",value:_.quantity,onChange:T=>N(_.id,"quantity",T.target.value),placeholder:"0",className:" w-[90px] text-center text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(k,{type:"number",value:_.price,onChange:T=>N(_.id,"price",T.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-gray-800 ",children:[m,g(Number(_.quantity)*Number(_.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top overflow-visible",children:r.jsx("button",{onClick:()=>B(_.id),className:" overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},_.id))})]})})}),r.jsx("button",{onClick:H,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:o.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8 space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-gray-600 mb-2 ",children:o.paymentMethod}),r.jsx(k,{name:"paymentMethod",value:i.paymentMethod,onChange:x,rows:2,className:"text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-gray-600 ",children:o.notes}),r.jsx(k,{name:"notes",value:i.notes,onChange:x,rows:3,placeholder:"Thanks for your business!",className:"mt-1 text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-gray-700",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:o.subtotal}),r.jsxs("dd",{children:[m,g(q)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:o.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",placeholder:"0",name:"discountRate",value:i.discountRate,onChange:x,className:"max-w-20 text-right  text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:o.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",name:"taxRate",value:i.taxRate,onChange:x,className:"max-w-20 text-right text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-gray-900",children:[r.jsx("dt",{children:o.total}),r.jsxs("dd",{children:[m,g(Q)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:o.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[m,r.jsx(k,{type:"number",name:"amountPaid",value:i.amountPaid,onChange:x,className:" text-right text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t-2 border-black text-black balance-due-row",children:[r.jsx("dt",{children:o.balanceDue}),r.jsxs("dd",{children:[m,g(X)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:f&&c&&r.jsxs("div",{children:[r.jsx("img",{src:c,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-gray-500 mt-1 max-w-[96px] text-center ",children:o.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:i.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:i.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>y("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:_=>j(_,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-gray-400 pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-gray-700 ",children:o.authorizedSignature})})]})]})]}),Pp=({data:i,t:o,currencySymbol:m,qrCodeUrl:c,showQrCode:f,formatNumber:g,formatDate:h,handleFileChange:j,removeImage:y,handleDataChange:x,handleItemChange:N,removeItem:B,addItem:H,subtotal:q,total:Q,balanceDue:X,EditableField:k})=>{const _={backgroundColor:"#F2F2E9",textColor:"#1C166C"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:_.backgroundColor,color:_.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:i.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:i.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>y("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:o.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>j(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(k,{value:i.from,onChange:x,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#1C166C] dark:text-[#1C166C] uppercase tracking-wide mb-2",children:o.billTo}),r.jsx(k,{value:i.to,onChange:x,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#1C166C] dark:text-[#1C166C] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#1C166C] tracking-widest ",children:i.documentType===yt.Invoice?o.documentTypeInvoice:o.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#1C166C] ",children:o.invoiceNumberPrefix}),r.jsx(k,{value:i.invoiceNumber,onChange:x,name:"invoiceNumber",className:" text-right mt-2 text-[#1C166C] dark:text-[#1C166C] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#1C166C] dark:text-[#1C166C] text-right ",children:o.date}),r.jsx(k,{type:"date",name:"date",value:i.date,onChange:x,className:" w-[130px] text-right text-[#1C166C] dark:text-[#1C166C] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1C166C] dark:text-[#1C166C] text-right ",children:o.dueDate}),r.jsx(k,{type:"date",name:"dueDate",value:i.dueDate,onChange:x,className:" w-[130px] text-right text-[#1C166C] dark:text-[#1C166C] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1C166C] dark:text-[#1C166C] text-right ",children:o.paymentTerms}),r.jsx(k,{type:"text",name:"paymentTerms",value:i.paymentTerms,onChange:x,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#1C166C] dark:text-[#1C166C] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1C166C] dark:text-[#1C166C] text-right ",children:o.poNumber}),r.jsx(k,{type:"text",name:"poNumber",value:i.poNumber,onChange:x,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#1C166C] dark:text-[#1C166C] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#1C166C] dark:text-[#1C166C]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:i.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(k,{value:T.description,onChange:L=>N(T.id,"description",L.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(k,{type:"number",value:T.quantity,onChange:L=>N(T.id,"quantity",L.target.value),placeholder:"0",className:" w-[90px] text-center text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(k,{type:"number",value:T.price,onChange:L=>N(T.id,"price",L.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#1C166C] dark:text-[#1C166C] ",children:[m,g(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>B(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:H,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#1C166C] dark:text-[#1C166C] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:o.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#1C166C] dark:text-[#1C166C] mb-2 ",children:o.paymentMethod}),r.jsx(k,{name:"paymentMethod",value:i.paymentMethod,onChange:x,rows:2,className:"text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#1C166C] dark:text-[#1C166C] ",children:o.notes}),r.jsx(k,{name:"notes",value:i.notes,onChange:x,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#1C166C] dark:text-[#1C166C]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:o.subtotal}),r.jsxs("dd",{children:[m,g(q)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:o.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",placeholder:"0",name:"discountRate",value:i.discountRate,onChange:x,className:"max-w-20 text-right  text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#1C166C] dark:text-[#1C166C] flex justify-between items-center",children:[r.jsx("dt",{children:o.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",name:"taxRate",value:i.taxRate,onChange:x,className:"max-w-20 text-right text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#1C166C] dark:text-[#1C166C]",children:[r.jsx("dt",{children:o.total}),r.jsxs("dd",{children:[m,g(Q)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:o.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[m,r.jsx(k,{type:"number",name:"amountPaid",value:i.amountPaid,onChange:x,className:" text-right text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t-2 border-[#1C166C] text-[#1C166C] dark:text-[#1C166C] balance-due-row",children:[r.jsx("dt",{children:o.balanceDue}),r.jsxs("dd",{children:[m,g(X)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:f&&c&&r.jsxs("div",{children:[r.jsx("img",{src:c,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#1C166C] dark:text-[#1C166C] mt-1 max-w-[96px] text-center ",children:o.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:i.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:i.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>y("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>j(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#1C166C] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#1C166C] dark:text-[#1C166C] ",children:o.authorizedSignature})})]})]})]})},e1=({data:i,t:o,currencySymbol:m,qrCodeUrl:c,showQrCode:f,formatNumber:g,formatDate:h,handleFileChange:j,removeImage:y,handleDataChange:x,handleItemChange:N,removeItem:B,addItem:H,subtotal:q,total:Q,balanceDue:X,EditableField:k})=>{const _={backgroundColor:"#000000ff",textColor:"#A6A6A6"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:_.backgroundColor,color:_.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:i.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:i.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>y("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:o.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>j(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(k,{value:i.from,onChange:x,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#A6A6A6] dark:text-[#A6A6A6] uppercase tracking-wide mb-2",children:o.billTo}),r.jsx(k,{value:i.to,onChange:x,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#A6A6A6] dark:text-[#A6A6A6] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#A6A6A6] tracking-widest ",children:i.documentType===yt.Invoice?o.documentTypeInvoice:o.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#A6A6A6] ",children:o.invoiceNumberPrefix}),r.jsx(k,{value:i.invoiceNumber,onChange:x,name:"invoiceNumber",className:" text-right mt-2 text-[#A6A6A6] dark:text-[#A6A6A6] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] text-right ",children:o.date}),r.jsx(k,{type:"date",name:"date",value:i.date,onChange:x,className:" w-[130px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] text-right ",children:o.dueDate}),r.jsx(k,{type:"date",name:"dueDate",value:i.dueDate,onChange:x,className:" w-[130px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] text-right ",children:o.paymentTerms}),r.jsx(k,{type:"text",name:"paymentTerms",value:i.paymentTerms,onChange:x,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] text-right ",children:o.poNumber}),r.jsx(k,{type:"text",name:"poNumber",value:i.poNumber,onChange:x,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#A6A6A6] dark:text-[#A6A6A6]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:i.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(k,{value:T.description,onChange:L=>N(T.id,"description",L.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(k,{type:"number",value:T.quantity,onChange:L=>N(T.id,"quantity",L.target.value),placeholder:"0",className:" w-[90px] text-center text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(k,{type:"number",value:T.price,onChange:L=>N(T.id,"price",L.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#A6A6A6] dark:text-[#A6A6A6] ",children:[m,g(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>B(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:H,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#A6A6A6] dark:text-[#A6A6A6] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:o.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#A6A6A6] dark:text-[#A6A6A6] mb-2 ",children:o.paymentMethod}),r.jsx(k,{name:"paymentMethod",value:i.paymentMethod,onChange:x,rows:2,className:"text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#A6A6A6] dark:text-[#A6A6A6] ",children:o.notes}),r.jsx(k,{name:"notes",value:i.notes,onChange:x,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#A6A6A6] dark:text-[#A6A6A6]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:o.subtotal}),r.jsxs("dd",{children:[m,g(q)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:o.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",placeholder:"0",name:"discountRate",value:i.discountRate,onChange:x,className:"max-w-20 text-right  text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#A6A6A6] dark:text-[#A6A6A6] flex justify-between items-center",children:[r.jsx("dt",{children:o.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",name:"taxRate",value:i.taxRate,onChange:x,className:"max-w-20 text-right text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#A6A6A6] dark:text-[#A6A6A6]",children:[r.jsx("dt",{children:o.total}),r.jsxs("dd",{children:[m,g(Q)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:o.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[m,r.jsx(k,{type:"number",name:"amountPaid",value:i.amountPaid,onChange:x,className:" text-right text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#A6A6A6] dark:text-[#A6A6A6] balance-due-row",children:[r.jsx("dt",{children:o.balanceDue}),r.jsxs("dd",{children:[m,g(X)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:f&&c&&r.jsxs("div",{children:[r.jsx("img",{src:c,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#A6A6A6] dark:text-[#A6A6A6] mt-1 max-w-[96px] text-center ",children:o.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:i.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:i.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>y("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>j(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] ",children:o.authorizedSignature})})]})]})]})},t1=({data:i,t:o,currencySymbol:m,qrCodeUrl:c,showQrCode:f,formatNumber:g,formatDate:h,handleFileChange:j,removeImage:y,handleDataChange:x,handleItemChange:N,removeItem:B,addItem:H,subtotal:q,total:Q,balanceDue:X,EditableField:k})=>{const _={backgroundColor:"#FEFEFE",textColor:"#1A485F"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:_.backgroundColor,color:_.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:i.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:i.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>y("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:o.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>j(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(k,{value:i.from,onChange:x,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#1A485F] dark:text-[#1A485F] uppercase tracking-wide mb-2",children:o.billTo}),r.jsx(k,{value:i.to,onChange:x,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#1A485F] dark:text-[#1A485F] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#1A485F] tracking-widest ",children:i.documentType===yt.Invoice?o.documentTypeInvoice:o.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#1A485F] ",children:o.invoiceNumberPrefix}),r.jsx(k,{value:i.invoiceNumber,onChange:x,name:"invoiceNumber",className:" text-right mt-2 text-[#1A485F] dark:text-[#1A485F] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#1A485F] dark:text-[#1A485F] text-right ",children:o.date}),r.jsx(k,{type:"date",name:"date",value:i.date,onChange:x,className:" w-[130px] text-right text-[#1A485F] dark:text-[#1A485F] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1A485F] dark:text-[#1A485F] text-right ",children:o.dueDate}),r.jsx(k,{type:"date",name:"dueDate",value:i.dueDate,onChange:x,className:" w-[130px] text-right text-[#1A485F] dark:text-[#1A485F] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1A485F] dark:text-[#1A485F] text-right ",children:o.paymentTerms}),r.jsx(k,{type:"text",name:"paymentTerms",value:i.paymentTerms,onChange:x,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#1A485F] dark:text-[#1A485F] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1A485F] dark:text-[#1A485F] text-right ",children:o.poNumber}),r.jsx(k,{type:"text",name:"poNumber",value:i.poNumber,onChange:x,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#1A485F] dark:text-[#1A485F] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#1A485F] dark:text-[#1A485F]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:i.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(k,{value:T.description,onChange:L=>N(T.id,"description",L.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(k,{type:"number",value:T.quantity,onChange:L=>N(T.id,"quantity",L.target.value),placeholder:"0",className:" w-[90px] text-center text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(k,{type:"number",value:T.price,onChange:L=>N(T.id,"price",L.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#1A485F] dark:text-[#1A485F] ",children:[m,g(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>B(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:H,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#1A485F] dark:text-[#1A485F] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:o.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#1A485F] dark:text-[#1A485F] mb-2 ",children:o.paymentMethod}),r.jsx(k,{name:"paymentMethod",value:i.paymentMethod,onChange:x,rows:2,className:"text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#1A485F] dark:text-[#1A485F] ",children:o.notes}),r.jsx(k,{name:"notes",value:i.notes,onChange:x,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#1A485F] dark:text-[#1A485F]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:o.subtotal}),r.jsxs("dd",{children:[m,g(q)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:o.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",placeholder:"0",name:"discountRate",value:i.discountRate,onChange:x,className:"max-w-20 text-right  text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#1A485F] dark:text-[#1A485F] flex justify-between items-center",children:[r.jsx("dt",{children:o.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",name:"taxRate",value:i.taxRate,onChange:x,className:"max-w-20 text-right text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#1A485F] dark:text-[#1A485F]",children:[r.jsx("dt",{children:o.total}),r.jsxs("dd",{children:[m,g(Q)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:o.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[m,r.jsx(k,{type:"number",name:"amountPaid",value:i.amountPaid,onChange:x,className:" text-right text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#1A485F] dark:text-[#1A485F] balance-due-row",children:[r.jsx("dt",{children:o.balanceDue}),r.jsxs("dd",{children:[m,g(X)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:f&&c&&r.jsxs("div",{children:[r.jsx("img",{src:c,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#1A485F] dark:text-[#1A485F] mt-1 max-w-[96px] text-center ",children:o.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:i.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:i.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>y("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>j(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#1A485F] dark:text-[#1A485F] ",children:o.authorizedSignature})})]})]})]})},a1=({data:i,t:o,currencySymbol:m,qrCodeUrl:c,showQrCode:f,formatNumber:g,formatDate:h,handleFileChange:j,removeImage:y,handleDataChange:x,handleItemChange:N,removeItem:B,addItem:H,subtotal:q,total:Q,balanceDue:X,EditableField:k})=>{const _={backgroundColor:"#FEFEFE",textColor:"#9B0000"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:_.backgroundColor,color:_.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:i.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:i.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>y("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:o.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>j(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(k,{value:i.from,onChange:x,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#9B0000] dark:text-[#9B0000] uppercase tracking-wide mb-2",children:o.billTo}),r.jsx(k,{value:i.to,onChange:x,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#9B0000] dark:text-[#9B0000] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#9B0000] tracking-widest ",children:i.documentType===yt.Invoice?o.documentTypeInvoice:o.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#9B0000] ",children:o.invoiceNumberPrefix}),r.jsx(k,{value:i.invoiceNumber,onChange:x,name:"invoiceNumber",className:" text-right mt-2 text-[#9B0000] dark:text-[#9B0000] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:o.date}),r.jsx(k,{type:"date",name:"date",value:i.date,onChange:x,className:" w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:o.dueDate}),r.jsx(k,{type:"date",name:"dueDate",value:i.dueDate,onChange:x,className:" w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:o.paymentTerms}),r.jsx(k,{type:"text",name:"paymentTerms",value:i.paymentTerms,onChange:x,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:o.poNumber}),r.jsx(k,{type:"text",name:"poNumber",value:i.poNumber,onChange:x,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#9B0000] dark:text-[#9B0000]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:i.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(k,{value:T.description,onChange:L=>N(T.id,"description",L.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(k,{type:"number",value:T.quantity,onChange:L=>N(T.id,"quantity",L.target.value),placeholder:"0",className:" w-[90px] text-center text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(k,{type:"number",value:T.price,onChange:L=>N(T.id,"price",L.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#9B0000] dark:text-[#9B0000] ",children:[m,g(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>B(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:H,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#9B0000] dark:text-[#9B0000] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:o.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#9B0000] dark:text-[#9B0000] mb-2 ",children:o.paymentMethod}),r.jsx(k,{name:"paymentMethod",value:i.paymentMethod,onChange:x,rows:2,className:"text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#9B0000] dark:text-[#9B0000] ",children:o.notes}),r.jsx(k,{name:"notes",value:i.notes,onChange:x,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#9B0000] dark:text-[#9B0000]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:o.subtotal}),r.jsxs("dd",{children:[m,g(q)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:o.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",placeholder:"0",name:"discountRate",value:i.discountRate,onChange:x,className:"max-w-20 text-right  text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#9B0000] dark:text-[#9B0000] flex justify-between items-center",children:[r.jsx("dt",{children:o.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",name:"taxRate",value:i.taxRate,onChange:x,className:"max-w-20 text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#9B0000] dark:text-[#9B0000]",children:[r.jsx("dt",{children:o.total}),r.jsxs("dd",{children:[m,g(Q)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:o.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[m,r.jsx(k,{type:"number",name:"amountPaid",value:i.amountPaid,onChange:x,className:" text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#9B0000] dark:text-[#9B0000] balance-due-row",children:[r.jsx("dt",{children:o.balanceDue}),r.jsxs("dd",{children:[m,g(X)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:f&&c&&r.jsxs("div",{children:[r.jsx("img",{src:c,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#9B0000] dark:text-[#9B0000] mt-1 max-w-[96px] text-center ",children:o.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:i.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:i.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>y("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>j(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#9B0000] dark:text-[#9B0000] ",children:o.authorizedSignature})})]})]})]})},l1=({data:i,t:o,currencySymbol:m,qrCodeUrl:c,showQrCode:f,formatNumber:g,formatDate:h,handleFileChange:j,removeImage:y,handleDataChange:x,handleItemChange:N,removeItem:B,addItem:H,subtotal:q,total:Q,balanceDue:X,EditableField:k})=>{const _={backgroundColor:"#F7F7F5",textColor:"#3C2C22"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:_.backgroundColor,color:_.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:i.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:i.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>y("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:o.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>j(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(k,{value:i.from,onChange:x,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#3C2C22] dark:text-[#3C2C22] uppercase tracking-wide mb-2",children:o.billTo}),r.jsx(k,{value:i.to,onChange:x,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#3C2C22] dark:text-[#3C2C22] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#3C2C22] tracking-widest ",children:i.documentType===yt.Invoice?o.documentTypeInvoice:o.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#3C2C22] ",children:o.invoiceNumberPrefix}),r.jsx(k,{value:i.invoiceNumber,onChange:x,name:"invoiceNumber",className:" text-right mt-2 text-[#3C2C22] dark:text-[#3C2C22] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#3C2C22] dark:text-[#3C2C22] text-right ",children:o.date}),r.jsx(k,{type:"date",name:"date",value:i.date,onChange:x,className:" w-[130px] text-right text-[#3C2C22] dark:text-[#3C2C22] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#3C2C22] dark:text-[#3C2C22] text-right ",children:o.dueDate}),r.jsx(k,{type:"date",name:"dueDate",value:i.dueDate,onChange:x,className:" w-[130px] text-right text-[#3C2C22] dark:text-[#3C2C22] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#3C2C22] dark:text-[#3C2C22] text-right ",children:o.paymentTerms}),r.jsx(k,{type:"text",name:"paymentTerms",value:i.paymentTerms,onChange:x,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#3C2C22] dark:text-[#3C2C22] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#3C2C22] dark:text-[#3C2C22] text-right ",children:o.poNumber}),r.jsx(k,{type:"text",name:"poNumber",value:i.poNumber,onChange:x,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#3C2C22] dark:text-[#3C2C22] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#3C2C22] dark:text-[#3C2C22]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:i.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(k,{value:T.description,onChange:L=>N(T.id,"description",L.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(k,{type:"number",value:T.quantity,onChange:L=>N(T.id,"quantity",L.target.value),placeholder:"0",className:" w-[90px] text-center text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(k,{type:"number",value:T.price,onChange:L=>N(T.id,"price",L.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#3C2C22] dark:text-[#3C2C22] ",children:[m,g(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>B(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:H,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#3C2C22] dark:text-[#3C2C22] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:o.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#3C2C22] dark:text-[#3C2C22] mb-2 ",children:o.paymentMethod}),r.jsx(k,{name:"paymentMethod",value:i.paymentMethod,onChange:x,rows:2,className:"text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#3C2C22] dark:text-[#3C2C22] ",children:o.notes}),r.jsx(k,{name:"notes",value:i.notes,onChange:x,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#3C2C22] dark:text-[#3C2C22]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:o.subtotal}),r.jsxs("dd",{children:[m,g(q)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:o.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",placeholder:"0",name:"discountRate",value:i.discountRate,onChange:x,className:"max-w-20 text-right  text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#3C2C22] dark:text-[#3C2C22] flex justify-between items-center",children:[r.jsx("dt",{children:o.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",name:"taxRate",value:i.taxRate,onChange:x,className:"max-w-20 text-right text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#3C2C22] dark:text-[#3C2C22]",children:[r.jsx("dt",{children:o.total}),r.jsxs("dd",{children:[m,g(Q)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:o.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[m,r.jsx(k,{type:"number",name:"amountPaid",value:i.amountPaid,onChange:x,className:" text-right text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#3C2C22] dark:text-[#3C2C22] balance-due-row",children:[r.jsx("dt",{children:o.balanceDue}),r.jsxs("dd",{children:[m,g(X)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:f&&c&&r.jsxs("div",{children:[r.jsx("img",{src:c,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#3C2C22] dark:text-[#3C2C22] mt-1 max-w-[96px] text-center ",children:o.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:i.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:i.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>y("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>j(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#3C2C22] dark:text-[#3C2C22] ",children:o.authorizedSignature})})]})]})]})},r1=({data:i,t:o,currencySymbol:m,qrCodeUrl:c,showQrCode:f,formatNumber:g,formatDate:h,handleFileChange:j,removeImage:y,handleDataChange:x,handleItemChange:N,removeItem:B,addItem:H,subtotal:q,total:Q,balanceDue:X,EditableField:k})=>{const _={backgroundColor:"#1A1915",textColor:"#EFE5E4"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:_.backgroundColor,color:_.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:i.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:i.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>y("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:o.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>j(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(k,{value:i.from,onChange:x,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#EFE5E4] dark:text-[#EFE5E4] uppercase tracking-wide mb-2",children:o.billTo}),r.jsx(k,{value:i.to,onChange:x,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#EFE5E4] dark:text-[#EFE5E4] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#EFE5E4] tracking-widest ",children:i.documentType===yt.Invoice?o.documentTypeInvoice:o.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#EFE5E4] ",children:o.invoiceNumberPrefix}),r.jsx(k,{value:i.invoiceNumber,onChange:x,name:"invoiceNumber",className:" text-right mt-2 text-[#EFE5E4] dark:text-[#EFE5E4] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] text-right ",children:o.date}),r.jsx(k,{type:"date",name:"date",value:i.date,onChange:x,className:" w-[130px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] text-right ",children:o.dueDate}),r.jsx(k,{type:"date",name:"dueDate",value:i.dueDate,onChange:x,className:" w-[130px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] text-right ",children:o.paymentTerms}),r.jsx(k,{type:"text",name:"paymentTerms",value:i.paymentTerms,onChange:x,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] text-right ",children:o.poNumber}),r.jsx(k,{type:"text",name:"poNumber",value:i.poNumber,onChange:x,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#EFE5E4] dark:text-[#EFE5E4]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:i.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(k,{value:T.description,onChange:L=>N(T.id,"description",L.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(k,{type:"number",value:T.quantity,onChange:L=>N(T.id,"quantity",L.target.value),placeholder:"0",className:" w-[90px] text-center text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(k,{type:"number",value:T.price,onChange:L=>N(T.id,"price",L.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#EFE5E4] dark:text-[#EFE5E4] ",children:[m,g(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>B(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:H,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#EFE5E4] dark:text-[#EFE5E4] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:o.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#EFE5E4] dark:text-[#EFE5E4] mb-2 ",children:o.paymentMethod}),r.jsx(k,{name:"paymentMethod",value:i.paymentMethod,onChange:x,rows:2,className:"text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#EFE5E4] dark:text-[#EFE5E4] ",children:o.notes}),r.jsx(k,{name:"notes",value:i.notes,onChange:x,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#EFE5E4] dark:text-[#EFE5E4]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:o.subtotal}),r.jsxs("dd",{children:[m,g(q)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:o.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",placeholder:"0",name:"discountRate",value:i.discountRate,onChange:x,className:"max-w-20 text-right  text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#EFE5E4] dark:text-[#EFE5E4] flex justify-between items-center",children:[r.jsx("dt",{children:o.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(k,{type:"number",name:"taxRate",value:i.taxRate,onChange:x,className:"max-w-20 text-right text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#EFE5E4] dark:text-[#EFE5E4]",children:[r.jsx("dt",{children:o.total}),r.jsxs("dd",{children:[m,g(Q)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:o.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[m,r.jsx(k,{type:"number",name:"amountPaid",value:i.amountPaid,onChange:x,className:" text-right text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#EFE5E4] dark:text-[#EFE5E4] balance-due-row",children:[r.jsx("dt",{children:o.balanceDue}),r.jsxs("dd",{children:[m,g(X)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:f&&c&&r.jsxs("div",{children:[r.jsx("img",{src:c,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#EFE5E4] dark:text-[#EFE5E4] mt-1 max-w-[96px] text-center ",children:o.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:i.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:i.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>y("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>j(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] ",children:o.authorizedSignature})})]})]})]})},s1=i=>{const[o,m]=z.useState(!1),{data:c,t:f,currencySymbol:g,qrCodeUrl:h,showQrCode:j,formatNumber:y,formatDate:x,handleFileChange:N,removeImage:B,handleDataChange:H,handleItemChange:q,removeItem:Q,addItem:X,subtotal:k,total:_,balanceDue:T,EditableField:L,templateId:ue}=i,ye=()=>{switch(ue){case"template-1":return r.jsx(Ip,{...i});case"template-2":return r.jsx(Pp,{...i});case"template-3":return r.jsx(e1,{...i});case"template-4":return r.jsx(t1,{...i});case"template-5":return r.jsx(a1,{...i});case"template-6":return r.jsx(l1,{...i});case"template-7":return r.jsx(r1,{...i});default:return r.jsx("div",{id:"invoice-preview",className:`bg-white p-10 rounded-lg shadow-lg template-${ue} ${o?"pdf-safe":""}`})}};return r.jsx(r.Fragment,{children:ye()})},n1=async(i,o,m)=>{var y,x,N,B,H;const c=document.getElementById("invoice-preview");if(!c){console.error("invoice-preview element not found"),alert("Invoice preview not found!");return}const f=window.getComputedStyle(c),g=f.backgroundColor&&f.backgroundColor!=="transparent"?f.backgroundColor:"#ffffff",h=c.cloneNode(!0);h.querySelectorAll(".preview-only").forEach(q=>q.remove()),h.querySelectorAll("input, textarea").forEach(q=>{const Q=q,X=Q.parentElement;if(!X)return;const k=document.createElement("div");k.textContent=Q.type==="date"&&Q.value?m(Q.value):Q.value||"",k.style.display="block",k.style.whiteSpace="pre-wrap",X.replaceChild(k,Q)}),i.paymentMethod||(y=h.querySelector('[data-export-id="payment-method-container"]'))==null||y.remove(),i.poNumber||(x=h.querySelector('[data-export-id="po-number-row"]'))==null||x.remove(),i.paymentTerms||(N=h.querySelector('[data-export-id="payment-terms-row"]'))==null||N.remove(),i.notes||(B=h.querySelector('[data-export-id="notes-container"]'))==null||B.remove(),i.signatureUrl||(H=h.querySelector('[data-export-id="signature-container"]'))==null||H.remove(),h.style.boxSizing="border-box",h.style.backgroundColor=g,h.style.color=f.color||"#000",h.style.width=c.offsetWidth+"px",h.style.height="auto",h.style.maxHeight="none",h.style.overflow="visible",h.style.transform="none",h.style.padding=f.padding,h.querySelectorAll(".template1-pdf-border").forEach(q=>{q.style.borderBottom="25px solid #1F2937"});const j=document.createElement("div");j.style.position="absolute",j.style.top="-99999px",j.style.left="0",j.style.width=c.offsetWidth+"px",j.style.height="auto",j.style.overflow="visible",j.style.pointerEvents="none",j.appendChild(h),document.body.appendChild(j);try{await new Promise(L=>setTimeout(L,80));const q=await html2canvas(h,{scale:3,useCORS:!0,backgroundColor:g,windowWidth:h.scrollWidth,windowHeight:h.scrollHeight,scrollY:-window.scrollY});console.log("canvas px:",q.width,q.height),console.log("clone css width (px):",h.offsetWidth,"clone scrollHeight:",h.scrollHeight);const Q=q.toDataURL("image/png"),X=L=>L*.264583,k=X(q.width),_=X(q.height),T=new jspdf.jsPDF({orientation:k>=_?"l":"p",unit:"mm",format:[Math.round(k*100)/100,Math.round(_*100)/100]});T.addImage(Q,"PNG",0,0,k,_),T.save(`${i.documentType.toLowerCase()}-${i.invoiceNumber}.pdf`)}catch(q){console.error("PDF export error:",q),alert("Error generating PDF (see console).")}finally{document.body.removeChild(j)}},i1={documentType:yt.Invoice,from:"",to:"",logoUrl:null,signatureUrl:null,invoiceNumber:"1",poNumber:"",date:new Date().toISOString().split("T")[0],dueDate:new Date(new Date().setDate(new Date().getDate()+7)).toISOString().split("T")[0],paymentTerms:"",paymentMethod:"",items:[{id:crypto.randomUUID(),description:"",quantity:"",price:""}],notes:"",taxRate:"",discountRate:"",currency:"USD",amountPaid:"",paymentLink:"",language:"en-US"},d1=({value:i,onChange:o,placeholder:m="",className:c="",type:f="text",rows:g,...h})=>{const j=z.useRef(null);z.useLayoutEffect(()=>{j.current&&(j.current.style.height="auto",j.current.style.height=`${j.current.scrollHeight}px`)},[i]);const y={value:i,onChange:o,placeholder:m,className:`bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-600 rounded-md p-1 w-full border border-gray-300 dark:text-gray-100 dark:placeholder:text-gray-500 dark:border-gray-600 dark:focus:ring-primary-500 ${c}`,...h};return g?r.jsx("textarea",{...y,ref:j,rows:g,className:`${y.className} resize-none overflow-hidden`}):r.jsx("input",{type:f,...y})},fm=({options:i,value:o,onChange:m,placeholder:c})=>{const[f,g]=z.useState(!1),h=z.useRef(null),j=i.find(x=>x.value===o);z.useEffect(()=>{const x=N=>{h.current&&!h.current.contains(N.target)&&g(!1)};return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[]);const y=x=>{m(x),g(!1)};return r.jsxs("div",{className:"relative",ref:h,children:[r.jsxs("button",{type:"button",onClick:()=>g(!f),className:"mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-transparent p-2 text-left dark:bg-gray-700 dark:border-gray-600 dark:text-white flex justify-between items-center","aria-haspopup":"listbox","aria-expanded":f,children:[r.jsx("span",{className:"truncate",children:j?j.label:c}),r.jsx("svg",{className:`h-5 w-5 text-gray-400 transform transition-transform ${f?"rotate-180":"rotate-0"}`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),f&&r.jsx("ul",{className:"absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 dark:ring-gray-600 overflow-auto focus:outline-none sm:text-sm",role:"listbox",children:i.map(x=>r.jsxs("li",{className:`cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${o===x.value?"bg-primary-50 dark:bg-primary-600/20":""}`,onClick:()=>y(x.value),role:"option","aria-selected":o===x.value,children:[r.jsx("span",{className:`block truncate ${o===x.value?"font-semibold":"font-normal"}`,children:x.label}),o===x.value&&r.jsx("span",{className:"absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600 dark:text-primary-400",children:r.jsx("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]},x.value))})]})},o1=()=>{var Ot;const[i,o]=Ur("invoiceData",i1),[m,c]=Ur("selectedTemplate","template-1"),[f,g]=Ur("showQrCode",!0),[h,j]=z.useState(""),[y]=Ur("paperSize","a4"),[x,N]=z.useState(!1),B=xm[i.language]||xm["en-US"],H=z.useCallback($=>{const{name:I,value:E,type:Y}=$.target;if(Y==="number")if(E==="")o(V=>({...V,[I]:""}));else{const V=parseFloat(E);isNaN(V)||o(oe=>({...oe,[I]:Math.max(0,V)}))}else o(V=>({...V,[I]:E}))},[o]),q=($,I)=>{var Y;const E=(Y=$.target.files)==null?void 0:Y[0];if(E){const V=new FileReader;V.onloadend=()=>{o(oe=>({...oe,[I]:V.result}))},V.readAsDataURL(E)}},Q=$=>{o(I=>({...I,[$]:null}))},X=($,I,E)=>{o(Y=>({...Y,items:Y.items.map(V=>{if(V.id===$){if(I==="quantity"||I==="price"){if(E==="")return{...V,[I]:""};const oe=parseFloat(E);return isNaN(oe)?V:{...V,[I]:Math.max(0,oe)}}return{...V,[I]:E}}return V})}))},k=()=>{o($=>({...$,items:[...$.items,{id:crypto.randomUUID(),description:"",quantity:"",price:""}]}))},_=$=>{o(I=>({...I,items:I.items.filter(E=>E.id!==$)}))},T=z.useCallback($=>{if(!$)return"";try{const I=new Date($+"T00:00:00");return new Intl.DateTimeFormat(i.language,{month:"short",day:"numeric",year:"numeric"}).format(I)}catch{return"Invalid Date"}},[i.language]),L=z.useCallback(async()=>{N(!0),await n1(i,y,T),setTimeout(()=>{N(!1)},200)},[i,y,T]),ue=z.useCallback(()=>{const $=document.getElementById("invoice-preview");if(!$)return;const I=$.cloneNode(!0);if(!I)return;const E=document.getElementById("print-container");E&&(E.innerHTML="",E.appendChild(I),window.print())},[i,T]),ye=i.items.reduce(($,I)=>$+(Number(I.quantity)||0)*(Number(I.price)||0),0),Me=ye*(Number(i.discountRate)||0)/100,P=ye-Me,Be=P*(Number(i.taxRate)||0)/100,Ne=P+Be,$e=Ne-(Number(i.amountPaid)||0),We=((Ot=mm.find($=>$.name===i.currency))==null?void 0:Ot.symbol)||"$",Je=z.useCallback($=>{const I=Number($);return isNaN(I)?"0.00":new Intl.NumberFormat(i.language,{minimumFractionDigits:2,maximumFractionDigits:2}).format(I)},[i.language]);return z.useEffect(()=>{if(!f||!i.paymentLink){j("");return}(async()=>{try{const I=encodeURIComponent(i.paymentLink),E=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${I}&bgcolor=ffffff`);if(!E.ok)throw new Error("Failed to fetch QR code");const Y=await E.blob(),V=new FileReader;V.onloadend=()=>{j(V.result)},V.readAsDataURL(Y)}catch(I){console.error("Error generating QR code:",I),j("")}})()},[i.paymentLink,f]),r.jsx(r.Fragment,{children:r.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-8",children:r.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[r.jsx("div",{className:"w-full lg:flex-grow flex justify-center items-start overflow-hidden",children:r.jsx(s1,{data:i,t:B,currencySymbol:We,qrCodeUrl:h,showQrCode:f,formatNumber:Je,formatDate:T,handleFileChange:q,removeImage:Q,handleDataChange:H,handleItemChange:X,removeItem:_,addItem:k,subtotal:ye,total:Ne,balanceDue:$e,EditableField:d1,templateId:m,isDownloading:x})}),r.jsx("aside",{className:"lg:w-80 flex-shrink-0",children:r.jsx("div",{className:"sticky top-24 space-y-6",children:r.jsxs("div",{className:"bg-white rounded-lg shadow p-4 space-y-4 dark:bg-gray-800",children:[r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsxs("button",{onClick:L,className:"w-full text-center px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-md hover:shadow-lg hover:brightness-110 transition-all font-semibold text-base flex items-center justify-center space-x-2",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),r.jsx("span",{children:"Download PDF"})]}),r.jsxs("button",{onClick:ue,className:"w-full text-center px-4 py-3 bg-gray-600 text-white rounded-md hover:shadow-lg hover:bg-gray-700 transition-all font-semibold text-base flex items-center justify-center space-x-2",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M5 4v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",clipRule:"evenodd"})}),r.jsx("span",{children:"Print"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 gap-4 pt-2",children:[r.jsx(Wp,{selectedTemplate:m,setSelectedTemplate:c}),r.jsxs("label",{className:"block",children:[r.jsx("span",{className:"text-gray-700 font-semibold dark:text-gray-300",children:B.language}),r.jsx(fm,{value:i.language,onChange:$=>o(I=>({...I,language:$})),options:$p.map($=>({value:$.code,label:$.name}))})]}),r.jsxs("label",{className:"block",children:[r.jsx("span",{className:"text-gray-700 font-semibold dark:text-gray-300",children:"Currency"}),r.jsx(fm,{value:i.currency,onChange:$=>o(I=>({...I,currency:$})),options:mm.map($=>({value:$.name,label:r.jsxs(r.Fragment,{children:[$.name," ",r.jsxs("span",{className:"text-gray-500",children:["(",$.symbol,")"]})]})}))})]}),r.jsxs("label",{className:"block",children:[r.jsx("span",{className:"text-gray-700 font-semibold dark:text-gray-300",children:"Payment Link (for QR)"}),r.jsx("input",{type:"url",name:"paymentLink",value:i.paymentLink,onChange:H,placeholder:"https://paypal.me/yourname",className:"mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-transparent p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"})]}),r.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer text-sm",children:[r.jsx("input",{type:"checkbox",checked:f,onChange:$=>g($.target.checked),className:"h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"}),r.jsx("span",{className:"text-gray-700 font-medium dark:text-gray-300",children:"Add QR Code to Invoice"})]}),r.jsx("button",{onClick:()=>o($=>({...$,documentType:$.documentType===yt.Invoice?yt.Estimate:yt.Invoice})),className:"w-full text-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition mt-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",children:i.documentType===yt.Invoice?B.switchToEstimate:B.switchToInvoice})]})]})})})]})})})},c1=()=>r.jsx("div",{className:"bg-white py-16 sm:py-24 dark:bg-gray-900",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 tracking-wide uppercase",children:"About Us"}),r.jsx("h1",{className:"mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl dark:text-white",children:"Empowering Your Business"}),r.jsx("p",{className:"max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400",children:"At QuickBillr, we believe billing should be the easiest part of your job, not the hardest."})]}),r.jsxs("div",{className:"mt-12 prose prose-lg text-gray-600 mx-auto dark:text-gray-300",children:[r.jsx("h2",{className:"dark:text-white",children:"Our Story"}),r.jsx("p",{children:"QuickBillr was born from a simple frustration: creating professional invoices and estimates was a tedious, time-consuming process. As freelancers and small business owners ourselves, we spent too much time fiddling with templates and spreadsheets. We knew there had to be a better way."}),r.jsx("p",{children:"We envisioned a tool that was fast, intuitive, and flexible. A platform where you could generate a beautiful, accurate invoice in seconds, not minutes. We focused on what matters: clean templates, multi-language and currency support, and modern features like QR code payments to help you get paid faster."}),r.jsx("h2",{className:"dark:text-white",children:"How It Works"}),r.jsxs("ol",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Fill in the Details:"})," Enter your and your client's information into our simple, straightforward form."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Add Your Items:"})," List your services or products. Our clean interface makes it easy to add items, quantities, and rates."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Customize & Preview:"})," Choose a template that fits your brand. Watch your invoice update in real-time with our live preview panel."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Download & Send:"})," Once you're happy, download a pixel-perfect PDF and get paid faster."]})]}),r.jsx("h2",{className:"dark:text-white",children:"Our Mission"}),r.jsx("p",{children:"Our mission is to provide freelancers, consultants, and small businesses with the tools they need to succeed. We're committed to building a product that is not only powerful but also accessible and easy to use. We handle the paperwork, so you can focus on what you do best: growing your business."})]})]})}),u1=()=>{const[i,o]=z.useState("idle"),m=c=>{c.preventDefault(),o("submitting"),setTimeout(()=>{o("submitted")},1500)};return r.jsx("div",{className:"bg-white py-16 sm:py-24 dark:bg-gray-900",children:r.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"relative bg-white shadow-xl rounded-2xl dark:bg-gray-800",children:r.jsxs("div",{className:"grid lg:grid-cols-2",children:[r.jsxs("div",{className:"relative px-6 py-10 sm:px-10 lg:py-24 bg-gradient-to-br from-primary-700 to-primary-900 rounded-l-2xl text-white",children:[r.jsx("h1",{className:"text-3xl font-extrabold tracking-tight",children:"Get in touch"}),r.jsx("p",{className:"mt-3 text-lg text-primary-100",children:"Have a question or feedback? We'd love to hear from you. Fill out the form or email us."}),r.jsxs("dl",{className:"mt-8 space-y-6 text-primary-100",children:[r.jsx("dt",{children:r.jsx("span",{className:"sr-only",children:"Email"})}),r.jsxs("dd",{className:"flex text-base",children:[r.jsx("svg",{className:"flex-shrink-0 w-6 h-6 text-primary-200",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),r.jsx("span",{className:"ml-3",children:"support@quickbillr.app"})]})]})]}),r.jsx("div",{className:"px-6 py-10 sm:px-10 lg:py-24",children:i==="submitted"?r.jsxs("div",{className:"text-center",children:[r.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Thank You!"}),r.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"Your message has been sent. We'll get back to you shortly."})]}):r.jsxs("form",{onSubmit:m,className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",className:"sr-only",children:"Full name"}),r.jsx("input",{type:"text",name:"name",id:"name",required:!0,className:"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Full name"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email"}),r.jsx("input",{id:"email",name:"email",type:"email",required:!0,autoComplete:"email",className:"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Email"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",rows:4,required:!0,className:"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Message"})]}),r.jsx("div",{children:r.jsx("button",{type:"submit",disabled:i==="submitting",className:"w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all disabled:opacity-50",children:i==="submitting"?"Sending...":"Send Message"})})]})})]})})})})},Mm=z.createContext(void 0),m1=({children:i})=>{const[o,m]=Ur("theme","light");z.useEffect(()=>{const f=window.document.documentElement;f.classList.remove(o==="light"?"dark":"light"),f.classList.add(o)},[o]);const c=()=>{m(f=>f==="light"?"dark":"light")};return r.jsx(Mm.Provider,{value:{theme:o,toggleTheme:c},children:i})},x1=()=>{const i=z.useContext(Mm);if(i===void 0)throw new Error("useTheme must be used within a ThemeProvider");return i},f1=()=>{const{theme:i,toggleTheme:o}=x1();return r.jsx("button",{onClick:o,className:"p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors","aria-label":"Toggle theme",children:i==="light"?r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}):r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})},g1=()=>{const[i,o]=z.useState(!1),m=Yt();z.useEffect(()=>{o(!1)},[m]);const c="font-semibold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text",f="text-gray-600 hover:text-primary-600 transition-colors dark:text-gray-300 dark:hover:text-primary-400",g="block py-2 text-lg text-center";return r.jsx("header",{className:"bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 dark:bg-gray-800/80 dark:border-b dark:border-gray-700",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"flex items-center justify-between h-16",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsxs(qt,{to:"/",className:"flex items-center space-x-2",children:[r.jsx("svg",{className:"h-8 w-8 text-primary-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),r.jsx("span",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"QuickBillr"})]})}),r.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[r.jsx(qt,{to:"/blog",className:({isActive:h})=>h?c:f,children:"Blog"}),r.jsx(qt,{to:"/about-quickbillr",className:({isActive:h})=>h?c:f,children:"About"}),r.jsx(qt,{to:"/contact-support",className:({isActive:h})=>h?c:f,children:"Contact"})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx(f1,{}),r.jsx(qt,{to:"/free-invoice-generator",className:"ml-4 hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700",children:"Create Invoice"}),r.jsx("div",{className:"md:hidden ml-2",children:r.jsxs("button",{onClick:()=>o(!i),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700","aria-controls":"mobile-menu","aria-expanded":i,children:[r.jsx("span",{className:"sr-only",children:"Open main menu"}),i?r.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):r.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})]}),i&&r.jsx("div",{className:"md:hidden",id:"mobile-menu",children:r.jsxs("div",{className:"pt-2 pb-4 space-y-1",children:[r.jsx(qt,{to:"/about-quickbillr",className:({isActive:h})=>`${g} ${h?c:f}`,children:"About"}),r.jsx(qt,{to:"/contact-support",className:({isActive:h})=>`${g} ${h?c:f}`,children:"Contact"}),r.jsx(qt,{to:"/blog",className:({isActive:h})=>`${g} ${h?c:f}`,children:"Blog"}),r.jsx(qt,{to:"/free-invoice-generator",className:"sm:hidden mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700",children:"Create Invoice"})]})})]})})},p1=()=>{const i=[{name:"Twitter",path:r.jsx("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})},{name:"Facebook",path:r.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})},{name:"LinkedIn",path:r.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"})}];return r.jsx("footer",{className:"bg-white border-t dark:bg-gray-900 dark:border-gray-800",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[r.jsxs("div",{className:"space-y-8 xl:col-span-1",children:[r.jsxs(ht,{to:"/",className:"flex items-center space-x-2",children:[r.jsx("svg",{className:"h-8 w-8 text-primary-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),r.jsx("span",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"QuickBillr"})]}),r.jsx("p",{className:"text-gray-500 text-base dark:text-gray-400",children:"Create Professional Invoices & Estimates in Seconds."}),r.jsx("div",{className:"flex space-x-6",children:i.map(o=>r.jsxs("a",{href:"#",className:"text-gray-400 hover:text-gray-500 dark:hover:text-gray-300",children:[r.jsx("span",{className:"sr-only",children:o.name}),r.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:o.path})]},o.name))})]}),r.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2",children:[r.jsxs("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Quick Links"}),r.jsxs("ul",{className:"mt-4 space-y-4",children:[r.jsx("li",{children:r.jsx(ht,{to:"/builder",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Invoice Builder"})}),r.jsx("li",{children:r.jsx(ht,{to:"/about-quickbillr",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"About Us"})}),r.jsx("li",{children:r.jsx(ht,{to:"/blog",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Blog"})})]})]}),r.jsxs("div",{className:"mt-12 md:mt-0",children:[r.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Legal"}),r.jsxs("ul",{className:"mt-4 space-y-4",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Privacy Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Terms of Service"})})]})]})]}),r.jsx("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Support"}),r.jsxs("ul",{className:"mt-4 space-y-4",children:[r.jsx("li",{children:r.jsx(ht,{to:"/contact-support",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Contact"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"FAQ"})})]})]})})]})]}),r.jsx("div",{className:"mt-12 border-t border-gray-200 pt-8 dark:border-gray-800",children:r.jsxs("p",{className:"text-base text-gray-400 xl:text-center",children:["© ",new Date().getFullYear()," QuickBillr. All rights reserved."]})})]})})};function h1({title:i,description:o,image:m,url:c}){z.useEffect(()=>{document.title=i,y1("description",o),sn("og:title",i),sn("og:description",o),m&&sn("og:image",m),c&&sn("og:url",c)},[i,o,m,c])}function y1(i,o){let m=document.querySelector(`meta[name="${i}"]`);m||(m=document.createElement("meta"),m.setAttribute("name",i),document.head.appendChild(m)),m.setAttribute("content",o)}function sn(i,o){let m=document.querySelector(`meta[property="${i}"]`);m||(m=document.createElement("meta"),m.setAttribute("property",i),document.head.appendChild(m)),m.setAttribute("content",o)}const v1=({html:i,className:o=""})=>r.jsx("div",{className:`blog-content ${o}`,dangerouslySetInnerHTML:{__html:i}}),b1=()=>{const{id:i}=Gg(),o=Jd.find(m=>m.id===i);return h1({title:`${o.title} | QuickBillr Blog`,description:o.description,image:o.imageUrl,url:`https://quickbillr.online/blog/${o.id}`}),o?r.jsxs("div",{className:"bg-white dark:bg-gray-900 min-h-screen",children:[r.jsxs("div",{className:"relative h-[400px] w-full",children:[r.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 pb-12",children:[r.jsxs(ht,{to:"/blog",className:"inline-flex items-center text-primary-300 hover:text-white transition-colors mb-6 font-medium",children:[r.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})}),"Back to Blog"]}),r.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-white max-w-4xl",children:o.title})]})})]}),r.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-12",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsxs("div",{className:"flex items-center space-x-6 mb-10 pb-10 border-b border-gray-100 dark:border-gray-800",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{className:"w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg",children:o.author.charAt(0)}),r.jsxs("div",{className:"ml-4",children:[r.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white",children:o.author}),r.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Author"})]})]}),r.jsx("div",{className:"h-8 w-px bg-gray-200 dark:bg-gray-700"}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white",children:o.date}),r.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Published"})]}),r.jsx("div",{className:"h-8 w-px bg-gray-200 dark:bg-gray-700"}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white",children:o.readTime}),r.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Reading time"})]})]}),r.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed",children:[r.jsx("p",{className:"text-xl font-medium text-gray-900 dark:text-white mb-8",children:o.description}),r.jsx(v1,{html:o.content}),r.jsxs("div",{className:"bg-primary-50 rounded-2xl p-8 my-12 dark:bg-gray-800 border border-primary-100 dark:border-gray-700",children:[r.jsx("h3",{className:"text-xl font-bold text-primary-900 dark:text-primary-400 mb-4",children:"Start billing like a pro today"}),r.jsx("p",{className:"text-primary-800 dark:text-gray-300 mb-6",children:"Ready to create your own professional invoices and get paid faster? Try our free invoice builder."}),r.jsx(ht,{to:"/free-invoice-generator",className:"inline-block px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all shadow-md",children:"Create My First Invoice"})]})]})]})})]}):r.jsx(rp,{to:"/blog"})},k1=()=>{const i=Yt();return z.useEffect(()=>{const o=(y,x,N)=>{let B=document.querySelector(`meta[${y}='${x}']`);B||(B=document.createElement("meta"),B.setAttribute(y,x),document.head.appendChild(B)),B.setAttribute("content",N)},m=y=>{let x=document.querySelector("link[rel='canonical']");x||(x=document.createElement("link"),x.setAttribute("rel","canonical"),document.head.appendChild(x)),x.setAttribute("href",y)};let c,f,g,h;const j=window.location.href.split("#")[0];switch(i.pathname){case"/free-invoice-generator":c="Free Invoice Generator | QuickBillr",f="Easily create professional invoices and estimates online for free. Customize, download as PDF, and share instantly.",g="invoice generator, free invoice maker, create invoice online, PDF invoice, QuickBillr",h=`${j}#/free-invoice-generator`;break;case"/about-quickbillr":c="About QuickBillr | Our Mission to Simplify Invoicing",f="Discover QuickBillr’s story and our mission to empower freelancers and small businesses with smarter invoicing tools.",g="about QuickBillr, online invoicing, business tools, invoice generator story",h=`${j}#/about-quickbillr`;break;case"/contact-support":c="Contact Support | QuickBillr Help Center",f="Need help or have a question? Contact QuickBillr support for fast assistance with invoices, billing, or feedback.",g="contact QuickBillr, invoice help, customer support, billing issues",h=`${j}#/contact-support`;break;case"/blog":c="Blog | QuickBillr Updates & Invoicing Tips",f="Discover QuickBillr’s story and our mission to empower freelancers and small businesses with smarter invoicing tools.",g="blog, QuickBillr, invoicing tips, invoice updates",h=`${j}#/blog`;break;default:c="QuickBillr - Free Invoice & Estimate Generator",f="Generate professional invoices and estimates in seconds. Supports 20+ languages, multiple currencies, QR code payments, and customizable templates.",g="invoice maker, estimate generator, free invoice template, freelancer billing tool",h=j;break}document.title=c,o("name","description",f),o("name","keywords",g),m(h),o("property","og:title",c),o("property","og:description",f),o("property","og:url",h),o("property","twitter:title",c),o("property","twitter:description",f),o("property","twitter:url",h)},[i]),null},w1=()=>r.jsx(m1,{children:r.jsxs(Ep,{children:[r.jsx(k1,{}),r.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200",children:[r.jsx(g1,{}),r.jsx("main",{className:"flex-grow",children:r.jsxs(np,{children:[r.jsx(Ia,{path:"/",element:r.jsx(Yp,{})}),r.jsx(Ia,{path:"/free-invoice-generator",element:r.jsx(o1,{})}),r.jsx(Ia,{path:"/about-quickbillr",element:r.jsx(c1,{})}),r.jsx(Ia,{path:"/contact-support",element:r.jsx(u1,{})}),r.jsx(Ia,{path:"/blog",element:r.jsx(_p,{})}),r.jsx(Ia,{path:"/blog/:id",element:r.jsx(b1,{})})]})}),r.jsx(p1,{})]})]})}),Bm=document.getElementById("root");if(!Bm)throw new Error("Could not find root element to mount to");const j1=fg.createRoot(Bm);j1.render(r.jsx(ng.StrictMode,{children:r.jsx(w1,{})}));
