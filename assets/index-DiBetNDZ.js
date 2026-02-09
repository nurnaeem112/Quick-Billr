var Fp=Object.defineProperty;var Jp=(n,d,u)=>d in n?Fp(n,d,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[d]=u;var ia=(n,d,u)=>Jp(n,typeof d!="symbol"?d+"":d,u);(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))o(p);new MutationObserver(p=>{for(const x of p)if(x.type==="childList")for(const g of x.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function u(p){const x={};return p.integrity&&(x.integrity=p.integrity),p.referrerPolicy&&(x.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?x.credentials="include":p.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function o(p){if(p.ep)return;p.ep=!0;const x=u(p);fetch(p.href,x)}})();function Fr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gd={exports:{}},Yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function $p(){if(Nm)return Yr;Nm=1;var n=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function u(o,p,x){var g=null;if(x!==void 0&&(g=""+x),p.key!==void 0&&(g=""+p.key),"key"in p){x={};for(var y in p)y!=="key"&&(x[y]=p[y])}else x=p;return p=x.ref,{$$typeof:n,type:o,key:g,ref:p!==void 0?p:null,props:x}}return Yr.Fragment=d,Yr.jsx=u,Yr.jsxs=u,Yr}var Cm;function Ip(){return Cm||(Cm=1,Gd.exports=$p()),Gd.exports}var r=Ip(),Vd={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function Pp(){if(Tm)return ee;Tm=1;var n=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),L=Symbol.iterator;function H(w){return w===null||typeof w!="object"?null:(w=L&&w[L]||w["@@iterator"],typeof w=="function"?w:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,b={};function q(w,_,G){this.props=w,this.context=_,this.refs=b,this.updater=G||X}q.prototype.isReactComponent={},q.prototype.setState=function(w,_){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,_,"setState")},q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function T(){}T.prototype=q.prototype;function D(w,_,G){this.props=w,this.context=_,this.refs=b,this.updater=G||X}var me=D.prototype=new T;me.constructor=D,Y(me,q.prototype),me.isPureReactComponent=!0;var ue=Array.isArray;function Ne(){}var W={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function De(w,_,G){var K=G.ref;return{$$typeof:n,type:w,key:_,ref:K!==void 0?K:null,props:G}}function Pe(w,_){return De(w.type,_,w.props)}function vt(w){return typeof w=="object"&&w!==null&&w.$$typeof===n}function Fe(w){var _={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(G){return _[G]})}var Lt=/\/+/g;function $(w,_){return typeof w=="object"&&w!==null&&w.key!=null?Fe(""+w.key):_.toString(36)}function P(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Ne,Ne):(w.status="pending",w.then(function(_){w.status==="pending"&&(w.status="fulfilled",w.value=_)},function(_){w.status==="pending"&&(w.status="rejected",w.reason=_)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function M(w,_,G,K,te){var re=typeof w;(re==="undefined"||re==="boolean")&&(w=null);var ge=!1;if(w===null)ge=!0;else switch(re){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(w.$$typeof){case n:case d:ge=!0;break;case j:return ge=w._init,M(ge(w._payload),_,G,K,te)}}if(ge)return te=te(w),ge=K===""?"."+$(w,0):K,ue(te)?(G="",ge!=null&&(G=ge.replace(Lt,"$&/")+"/"),M(te,_,G,"",function(Fl){return Fl})):te!=null&&(vt(te)&&(te=Pe(te,G+(te.key==null||w&&w.key===te.key?"":(""+te.key).replace(Lt,"$&/")+"/")+ge)),_.push(te)),1;ge=0;var $e=K===""?".":K+":";if(ue(w))for(var Be=0;Be<w.length;Be++)K=w[Be],re=$e+$(K,Be),ge+=M(K,_,G,re,te);else if(Be=H(w),typeof Be=="function")for(w=Be.call(w),Be=0;!(K=w.next()).done;)K=K.value,re=$e+$(K,Be++),ge+=M(K,_,G,re,te);else if(re==="object"){if(typeof w.then=="function")return M(P(w),_,G,K,te);throw _=String(w),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return ge}function Q(w,_,G){if(w==null)return w;var K=[],te=0;return M(w,K,"","",function(re){return _.call(G,re,te++)}),K}function V(w){if(w._status===-1){var _=w._result;_=_(),_.then(function(G){(w._status===0||w._status===-1)&&(w._status=1,w._result=G)},function(G){(w._status===0||w._status===-1)&&(w._status=2,w._result=G)}),w._status===-1&&(w._status=0,w._result=_)}if(w._status===1)return w._result.default;throw w._result}var oe=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},we={map:Q,forEach:function(w,_,G){Q(w,function(){_.apply(this,arguments)},G)},count:function(w){var _=0;return Q(w,function(){_++}),_},toArray:function(w){return Q(w,function(_){return _})||[]},only:function(w){if(!vt(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ee.Activity=C,ee.Children=we,ee.Component=q,ee.Fragment=u,ee.Profiler=p,ee.PureComponent=D,ee.StrictMode=o,ee.Suspense=h,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ee.__COMPILER_RUNTIME={__proto__:null,c:function(w){return W.H.useMemoCache(w)}},ee.cache=function(w){return function(){return w.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(w,_,G){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var K=Y({},w.props),te=w.key;if(_!=null)for(re in _.key!==void 0&&(te=""+_.key),_)!Ee.call(_,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&_.ref===void 0||(K[re]=_[re]);var re=arguments.length-2;if(re===1)K.children=G;else if(1<re){for(var ge=Array(re),$e=0;$e<re;$e++)ge[$e]=arguments[$e+2];K.children=ge}return De(w.type,te,K)},ee.createContext=function(w){return w={$$typeof:g,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:x,_context:w},w},ee.createElement=function(w,_,G){var K,te={},re=null;if(_!=null)for(K in _.key!==void 0&&(re=""+_.key),_)Ee.call(_,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(te[K]=_[K]);var ge=arguments.length-2;if(ge===1)te.children=G;else if(1<ge){for(var $e=Array(ge),Be=0;Be<ge;Be++)$e[Be]=arguments[Be+2];te.children=$e}if(w&&w.defaultProps)for(K in ge=w.defaultProps,ge)te[K]===void 0&&(te[K]=ge[K]);return De(w,re,te)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(w){return{$$typeof:y,render:w}},ee.isValidElement=vt,ee.lazy=function(w){return{$$typeof:j,_payload:{_status:-1,_result:w},_init:V}},ee.memo=function(w,_){return{$$typeof:m,type:w,compare:_===void 0?null:_}},ee.startTransition=function(w){var _=W.T,G={};W.T=G;try{var K=w(),te=W.S;te!==null&&te(G,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(Ne,oe)}catch(re){oe(re)}finally{_!==null&&G.types!==null&&(_.types=G.types),W.T=_}},ee.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ee.use=function(w){return W.H.use(w)},ee.useActionState=function(w,_,G){return W.H.useActionState(w,_,G)},ee.useCallback=function(w,_){return W.H.useCallback(w,_)},ee.useContext=function(w){return W.H.useContext(w)},ee.useDebugValue=function(){},ee.useDeferredValue=function(w,_){return W.H.useDeferredValue(w,_)},ee.useEffect=function(w,_){return W.H.useEffect(w,_)},ee.useEffectEvent=function(w){return W.H.useEffectEvent(w)},ee.useId=function(){return W.H.useId()},ee.useImperativeHandle=function(w,_,G){return W.H.useImperativeHandle(w,_,G)},ee.useInsertionEffect=function(w,_){return W.H.useInsertionEffect(w,_)},ee.useLayoutEffect=function(w,_){return W.H.useLayoutEffect(w,_)},ee.useMemo=function(w,_){return W.H.useMemo(w,_)},ee.useOptimistic=function(w,_){return W.H.useOptimistic(w,_)},ee.useReducer=function(w,_,G){return W.H.useReducer(w,_,G)},ee.useRef=function(w){return W.H.useRef(w)},ee.useState=function(w){return W.H.useState(w)},ee.useSyncExternalStore=function(w,_,G){return W.H.useSyncExternalStore(w,_,G)},ee.useTransition=function(){return W.H.useTransition()},ee.version="19.2.0",ee}var Sm;function xo(){return Sm||(Sm=1,Vd.exports=Pp()),Vd.exports}var z=xo();const da=Fr(z);var Zd={exports:{}},Qr={},Kd={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Wp(){return Am||(Am=1,(function(n){function d(M,Q){var V=M.length;M.push(Q);e:for(;0<V;){var oe=V-1>>>1,we=M[oe];if(0<p(we,Q))M[oe]=Q,M[V]=we,V=oe;else break e}}function u(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var Q=M[0],V=M.pop();if(V!==Q){M[0]=V;e:for(var oe=0,we=M.length,w=we>>>1;oe<w;){var _=2*(oe+1)-1,G=M[_],K=_+1,te=M[K];if(0>p(G,V))K<we&&0>p(te,G)?(M[oe]=te,M[K]=V,oe=K):(M[oe]=G,M[_]=V,oe=_);else if(K<we&&0>p(te,V))M[oe]=te,M[K]=V,oe=K;else break e}}return Q}function p(M,Q){var V=M.sortIndex-Q.sortIndex;return V!==0?V:M.id-Q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;n.unstable_now=function(){return x.now()}}else{var g=Date,y=g.now();n.unstable_now=function(){return g.now()-y}}var h=[],m=[],j=1,C=null,L=3,H=!1,X=!1,Y=!1,b=!1,q=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function me(M){for(var Q=u(m);Q!==null;){if(Q.callback===null)o(m);else if(Q.startTime<=M)o(m),Q.sortIndex=Q.expirationTime,d(h,Q);else break;Q=u(m)}}function ue(M){if(Y=!1,me(M),!X)if(u(h)!==null)X=!0,Ne||(Ne=!0,Fe());else{var Q=u(m);Q!==null&&P(ue,Q.startTime-M)}}var Ne=!1,W=-1,Ee=5,De=-1;function Pe(){return b?!0:!(n.unstable_now()-De<Ee)}function vt(){if(b=!1,Ne){var M=n.unstable_now();De=M;var Q=!0;try{e:{X=!1,Y&&(Y=!1,T(W),W=-1),H=!0;var V=L;try{t:{for(me(M),C=u(h);C!==null&&!(C.expirationTime>M&&Pe());){var oe=C.callback;if(typeof oe=="function"){C.callback=null,L=C.priorityLevel;var we=oe(C.expirationTime<=M);if(M=n.unstable_now(),typeof we=="function"){C.callback=we,me(M),Q=!0;break t}C===u(h)&&o(h),me(M)}else o(h);C=u(h)}if(C!==null)Q=!0;else{var w=u(m);w!==null&&P(ue,w.startTime-M),Q=!1}}break e}finally{C=null,L=V,H=!1}Q=void 0}}finally{Q?Fe():Ne=!1}}}var Fe;if(typeof D=="function")Fe=function(){D(vt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,$=Lt.port2;Lt.port1.onmessage=vt,Fe=function(){$.postMessage(null)}}else Fe=function(){q(vt,0)};function P(M,Q){W=q(function(){M(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(M){M.callback=null},n.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<M?Math.floor(1e3/M):5},n.unstable_getCurrentPriorityLevel=function(){return L},n.unstable_next=function(M){switch(L){case 1:case 2:case 3:var Q=3;break;default:Q=L}var V=L;L=Q;try{return M()}finally{L=V}},n.unstable_requestPaint=function(){b=!0},n.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var V=L;L=M;try{return Q()}finally{L=V}},n.unstable_scheduleCallback=function(M,Q,V){var oe=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?oe+V:oe):V=oe,M){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=V+we,M={id:j++,callback:Q,priorityLevel:M,startTime:V,expirationTime:we,sortIndex:-1},V>oe?(M.sortIndex=V,d(m,M),u(h)===null&&M===u(m)&&(Y?(T(W),W=-1):Y=!0,P(ue,V-oe))):(M.sortIndex=we,d(h,M),X||H||(X=!0,Ne||(Ne=!0,Fe()))),M},n.unstable_shouldYield=Pe,n.unstable_wrapCallback=function(M){var Q=L;return function(){var V=L;L=Q;try{return M.apply(this,arguments)}finally{L=V}}}})(Fd)),Fd}var Em;function eg(){return Em||(Em=1,Kd.exports=Wp()),Kd.exports}var Jd={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function tg(){if(zm)return Je;zm=1;var n=xo();function d(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)m+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(d(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},p=Symbol.for("react.portal");function x(h,m,j){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:C==null?null:""+C,children:h,containerInfo:m,implementation:j}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Je.createPortal=function(h,m){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(d(299));return x(h,m,null,j)},Je.flushSync=function(h){var m=g.T,j=o.p;try{if(g.T=null,o.p=2,h)return h()}finally{g.T=m,o.p=j,o.d.f()}},Je.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(h,m))},Je.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},Je.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var j=m.as,C=y(j,m.crossOrigin),L=typeof m.integrity=="string"?m.integrity:void 0,H=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;j==="style"?o.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:C,integrity:L,fetchPriority:H}):j==="script"&&o.d.X(h,{crossOrigin:C,integrity:L,fetchPriority:H,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Je.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var j=y(m.as,m.crossOrigin);o.d.M(h,{crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(h)},Je.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var j=m.as,C=y(j,m.crossOrigin);o.d.L(h,j,{crossOrigin:C,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Je.preloadModule=function(h,m){if(typeof h=="string")if(m){var j=y(m.as,m.crossOrigin);o.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(h)},Je.requestFormReset=function(h){o.d.r(h)},Je.unstable_batchedUpdates=function(h,m){return h(m)},Je.useFormState=function(h,m,j){return g.H.useFormState(h,m,j)},Je.useFormStatus=function(){return g.H.useHostTransitionStatus()},Je.version="19.2.0",Je}var Mm;function ag(){if(Mm)return Jd.exports;Mm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(d){console.error(d)}}return n(),Jd.exports=tg(),Jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function lg(){if(Bm)return Qr;Bm=1;var n=eg(),d=xo(),u=ag();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function x(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(x(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=x(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var s=a.return;if(s===null)break;var i=s.alternate;if(i===null){if(l=s.return,l!==null){a=l;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===a)return h(s),e;if(i===l)return h(s),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=s,l=i;else{for(var c=!1,f=s.child;f;){if(f===a){c=!0,a=s,l=i;break}if(f===l){c=!0,l=s,a=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===a){c=!0,a=i,l=s;break}if(f===l){c=!0,l=i,a=s;break}f=f.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,L=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),D=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),De=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),vt=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=vt&&e[vt]||e["@@iterator"],typeof e=="function"?e:null)}var Lt=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case q:return"Profiler";case b:return"StrictMode";case ue:return"Suspense";case Ne:return"SuspenseList";case De:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case D:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}var P=Array.isArray,M=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},oe=[],we=-1;function w(e){return{current:e}}function _(e){0>we||(e.current=oe[we],oe[we]=null,we--)}function G(e,t){we++,oe[we]=e.current,e.current=t}var K=w(null),te=w(null),re=w(null),ge=w(null);function $e(e,t){switch(G(re,t),G(te,e),G(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ku(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ku(t),e=Fu(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(K),G(K,e)}function Be(){_(K),_(te),_(re)}function Fl(e){e.memoizedState!==null&&G(ge,e);var t=K.current,a=Fu(t,e.type);t!==a&&(G(te,e),G(K,a))}function Pr(e){te.current===e&&(_(K),_(te)),ge.current===e&&(_(ge),Lr._currentValue=V)}var Tn,jo;function La(e){if(Tn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Tn=t&&t[1]||"",jo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tn+e+jo}var Sn=!1;function An(e,t){if(!e||Sn)return"";Sn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(B){var E=B}Reflect.construct(e,[],U)}else{try{U.call()}catch(B){E=B}e.call(U.prototype)}}else{try{throw Error()}catch(B){E=B}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(B){if(B&&E&&typeof B.stack=="string")return[B.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var v=c.split(`
`),A=f.split(`
`);for(s=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;s<A.length&&!A[s].includes("DetermineComponentFrameRoot");)s++;if(l===v.length||s===A.length)for(l=v.length-1,s=A.length-1;1<=l&&0<=s&&v[l]!==A[s];)s--;for(;1<=l&&0<=s;l--,s--)if(v[l]!==A[s]){if(l!==1||s!==1)do if(l--,s--,0>s||v[l]!==A[s]){var R=`
`+v[l].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=l&&0<=s);break}}}finally{Sn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?La(a):""}function Nx(e,t){switch(e.tag){case 26:case 27:case 5:return La(e.type);case 16:return La("Lazy");case 13:return e.child!==t&&t!==null?La("Suspense Fallback"):La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return An(e.type,!1);case 11:return An(e.type.render,!1);case 1:return An(e.type,!0);case 31:return La("Activity");default:return""}}function No(e){try{var t="",a=null;do t+=Nx(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var En=Object.prototype.hasOwnProperty,zn=n.unstable_scheduleCallback,Mn=n.unstable_cancelCallback,Cx=n.unstable_shouldYield,Tx=n.unstable_requestPaint,it=n.unstable_now,Sx=n.unstable_getCurrentPriorityLevel,Co=n.unstable_ImmediatePriority,To=n.unstable_UserBlockingPriority,Wr=n.unstable_NormalPriority,Ax=n.unstable_LowPriority,So=n.unstable_IdlePriority,Ex=n.log,zx=n.unstable_setDisableYieldValue,Jl=null,dt=null;function ma(e){if(typeof Ex=="function"&&zx(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Jl,e)}catch{}}var ot=Math.clz32?Math.clz32:Rx,Mx=Math.log,Bx=Math.LN2;function Rx(e){return e>>>=0,e===0?32:31-(Mx(e)/Bx|0)|0}var es=256,ts=262144,as=4194304;function _a(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ls(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var s=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~i,l!==0?s=_a(l):(c&=f,c!==0?s=_a(c):a||(a=f&~e,a!==0&&(s=_a(a))))):(f=l&~i,f!==0?s=_a(f):c!==0?s=_a(c):a||(a=l&~e,a!==0&&(s=_a(a)))),s===0?0:t!==0&&t!==s&&(t&i)===0&&(i=s&-s,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:s}function $l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ox(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ao(){var e=as;return as<<=1,(as&62914560)===0&&(as=4194304),e}function Bn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dx(e,t,a,l,s,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(a=c&~a;0<a;){var R=31-ot(a),U=1<<R;f[R]=0,v[R]=-1;var E=A[R];if(E!==null)for(A[R]=null,R=0;R<E.length;R++){var B=E[R];B!==null&&(B.lane&=-536870913)}a&=~U}l!==0&&Eo(e,l,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Eo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function zo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ot(a),s=1<<l;s&t|e[l]&t&&(e[l]|=t),a&=~s}}function Mo(e,t){var a=t&-t;return a=(a&42)!==0?1:Rn(a),(a&(e.suspendedLanes|t))!==0?0:a}function Rn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function On(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bo(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:hm(e.type))}function Ro(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var xa=Math.random().toString(36).slice(2),Xe="__reactFiber$"+xa,We="__reactProps$"+xa,rl="__reactContainer$"+xa,Dn="__reactEvents$"+xa,Ux="__reactListeners$"+xa,Lx="__reactHandles$"+xa,Oo="__reactResources$"+xa,Pl="__reactMarker$"+xa;function Un(e){delete e[Xe],delete e[We],delete e[Dn],delete e[Ux],delete e[Lx]}function sl(e){var t=e[Xe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[rl]||a[Xe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=tm(e);e!==null;){if(a=e[Xe])return a;e=tm(e)}return t}e=a,a=e.parentNode}return null}function nl(e){if(e=e[Xe]||e[rl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function il(e){var t=e[Oo];return t||(t=e[Oo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Pl]=!0}var Do=new Set,Uo={};function Ha(e,t){dl(e,t),dl(e+"Capture",t)}function dl(e,t){for(Uo[e]=t,e=0;e<t.length;e++)Do.add(t[e])}var _x=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},_o={};function Hx(e){return En.call(_o,e)?!0:En.call(Lo,e)?!1:_x.test(e)?_o[e]=!0:(Lo[e]=!0,!1)}function rs(e,t,a){if(Hx(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ss(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Xt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ho(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qx(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ln(e){if(!e._valueTracker){var t=Ho(e)?"checked":"value";e._valueTracker=qx(e,t,""+e[t])}}function qo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Ho(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yx=/[\n"\\]/g;function kt(e){return e.replace(Yx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _n(e,t,a,l,s,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Hn(e,c,bt(t)):a!=null?Hn(e,c,bt(a)):l!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+bt(f):e.removeAttribute("name")}function Yo(e,t,a,l,s,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ln(e);return}a=a!=null?""+bt(a):"",t=t!=null?""+bt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ln(e)}function Hn(e,t,a){t==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ol(e,t,a,l){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&l&&(e[a].defaultSelected=!0)}else{for(a=""+bt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Qo(e,t,a){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+bt(a):""}function Xo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(P(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=bt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ln(e)}function cl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Go(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Qx.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vo(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&a[s]!==l&&Go(e,s,l)}else for(var i in t)t.hasOwnProperty(i)&&Go(e,i,t[i])}function qn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function is(e){return Gx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Yn=null;function Qn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,ml=null;function Zo(e){var t=nl(e);if(t&&(e=t.stateNode)){var a=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(_n(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var s=l[We]||null;if(!s)throw Error(o(90));_n(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&qo(l)}break e;case"textarea":Qo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ol(e,!!a.multiple,t,!1)}}}var Xn=!1;function Ko(e,t,a){if(Xn)return e(t,a);Xn=!0;try{var l=e(t);return l}finally{if(Xn=!1,(ul!==null||ml!==null)&&(Fs(),ul&&(t=ul,e=ml,ml=ul=null,Zo(t),e)))for(t=0;t<e.length;t++)Zo(e[t])}}function er(e,t){var a=e.stateNode;if(a===null)return null;var l=a[We]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gn=!1;if(Vt)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Gn=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Gn=!1}var fa=null,Vn=null,ds=null;function Fo(){if(ds)return ds;var e,t=Vn,a=t.length,l,s="value"in fa?fa.value:fa.textContent,i=s.length;for(e=0;e<a&&t[e]===s[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===s[i-l];l++);return ds=s.slice(e,1<l?1-l:void 0)}function os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function Jo(){return!1}function et(e){function t(a,l,s,i,c){this._reactName=a,this._targetInst=s,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cs:Jo,this.isPropagationStopped=Jo,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),t}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=et(qa),ar=C({},qa,{view:0,detail:0}),Vx=et(ar),Zn,Kn,lr,ms=C({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(Zn=e.screenX-lr.screenX,Kn=e.screenY-lr.screenY):Kn=Zn=0,lr=e),Zn)},movementY:function(e){return"movementY"in e?e.movementY:Kn}}),$o=et(ms),Zx=C({},ms,{dataTransfer:0}),Kx=et(Zx),Fx=C({},ar,{relatedTarget:0}),Fn=et(Fx),Jx=C({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=et(Jx),Ix=C({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Px=et(Ix),Wx=C({},qa,{data:0}),Io=et(Wx),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=af[e])?!!t[e]:!1}function Jn(){return lf}var rf=C({},ar,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=et(rf),nf=C({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=et(nf),df=C({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn}),of=et(df),cf=C({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=et(cf),mf=C({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=et(mf),ff=C({},qa,{newState:0,oldState:0}),pf=et(ff),gf=[9,13,27,32],$n=Vt&&"CompositionEvent"in window,rr=null;Vt&&"documentMode"in document&&(rr=document.documentMode);var hf=Vt&&"TextEvent"in window&&!rr,Wo=Vt&&(!$n||rr&&8<rr&&11>=rr),ec=" ",tc=!1;function ac(e,t){switch(e){case"keyup":return gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xl=!1;function yf(e,t){switch(e){case"compositionend":return lc(t);case"keypress":return t.which!==32?null:(tc=!0,ec);case"textInput":return e=t.data,e===ec&&tc?null:e;default:return null}}function vf(e,t){if(xl)return e==="compositionend"||!$n&&ac(e,t)?(e=Fo(),ds=Vn=fa=null,xl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wo&&t.locale!=="ko"?null:t.data;default:return null}}var bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bf[e.type]:t==="textarea"}function sc(e,t,a,l){ul?ml?ml.push(l):ml=[l]:ul=l,t=tn(t,"onChange"),0<t.length&&(a=new us("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var sr=null,nr=null;function kf(e){Yu(e,0)}function xs(e){var t=Wl(e);if(qo(t))return e}function nc(e,t){if(e==="change")return t}var ic=!1;if(Vt){var In;if(Vt){var Pn="oninput"in document;if(!Pn){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),Pn=typeof dc.oninput=="function"}In=Pn}else In=!1;ic=In&&(!document.documentMode||9<document.documentMode)}function oc(){sr&&(sr.detachEvent("onpropertychange",cc),nr=sr=null)}function cc(e){if(e.propertyName==="value"&&xs(nr)){var t=[];sc(t,nr,e,Qn(e)),Ko(kf,t)}}function wf(e,t,a){e==="focusin"?(oc(),sr=t,nr=a,sr.attachEvent("onpropertychange",cc)):e==="focusout"&&oc()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xs(nr)}function Nf(e,t){if(e==="click")return xs(t)}function Cf(e,t){if(e==="input"||e==="change")return xs(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Tf;function ir(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var s=a[l];if(!En.call(t,s)||!ct(e[s],t[s]))return!1}return!0}function uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var a=uc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=uc(a)}}function xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ns(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ns(e.document)}return t}function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sf=Vt&&"documentMode"in document&&11>=document.documentMode,fl=null,ei=null,dr=null,ti=!1;function pc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ti||fl==null||fl!==ns(l)||(l=fl,"selectionStart"in l&&Wn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),dr&&ir(dr,l)||(dr=l,l=tn(ei,"onSelect"),0<l.length&&(t=new us("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=fl)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},ai={},gc={};Vt&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function Qa(e){if(ai[e])return ai[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in gc)return ai[e]=t[a];return e}var hc=Qa("animationend"),yc=Qa("animationiteration"),vc=Qa("animationstart"),Af=Qa("transitionrun"),Ef=Qa("transitionstart"),zf=Qa("transitioncancel"),bc=Qa("transitionend"),kc=new Map,li="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");li.push("scrollEnd");function Mt(e,t){kc.set(e,t),Ha(t,[e])}var fs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],gl=0,ri=0;function ps(){for(var e=gl,t=ri=gl=0;t<e;){var a=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var s=wt[t];wt[t++]=null;var i=wt[t];if(wt[t++]=null,l!==null&&s!==null){var c=l.pending;c===null?s.next=s:(s.next=c.next,c.next=s),l.pending=s}i!==0&&wc(a,s,i)}}function gs(e,t,a,l){wt[gl++]=e,wt[gl++]=t,wt[gl++]=a,wt[gl++]=l,ri|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function si(e,t,a,l){return gs(e,t,a,l),hs(e)}function Xa(e,t){return gs(e,null,null,t),hs(e)}function wc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var s=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&t!==null&&(s=31-ot(a),e=i.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=a|536870912),i):null}function hs(e){if(50<zr)throw zr=0,fd=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hl={};function Mf(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,a,l){return new Mf(e,t,a,l)}function ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var a=e.alternate;return a===null?(a=ut(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ys(e,t,a,l,s,i){var c=0;if(l=e,typeof e=="function")ni(e)&&(c=1);else if(typeof e=="string")c=Up(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case De:return e=ut(31,a,t,s),e.elementType=De,e.lanes=i,e;case Y:return Ga(a.children,s,i,t);case b:c=8,s|=24;break;case q:return e=ut(12,a,t,s|2),e.elementType=q,e.lanes=i,e;case ue:return e=ut(13,a,t,s),e.elementType=ue,e.lanes=i,e;case Ne:return e=ut(19,a,t,s),e.elementType=Ne,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:c=10;break e;case T:c=9;break e;case me:c=11;break e;case W:c=14;break e;case Ee:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ut(c,a,t,s),t.elementType=e,t.type=l,t.lanes=i,t}function Ga(e,t,a,l){return e=ut(7,e,l,t),e.lanes=a,e}function ii(e,t,a){return e=ut(6,e,null,t),e.lanes=a,e}function Nc(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function di(e,t,a){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Cc=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var a=Cc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:No(t)},Cc.set(e,t),t)}return{value:e,source:t,stack:No(t)}}var yl=[],vl=0,vs=null,or=0,Nt=[],Ct=0,pa=null,_t=1,Ht="";function Kt(e,t){yl[vl++]=or,yl[vl++]=vs,vs=e,or=t}function Tc(e,t,a){Nt[Ct++]=_t,Nt[Ct++]=Ht,Nt[Ct++]=pa,pa=e;var l=_t;e=Ht;var s=32-ot(l)-1;l&=~(1<<s),a+=1;var i=32-ot(t)+s;if(30<i){var c=s-s%5;i=(l&(1<<c)-1).toString(32),l>>=c,s-=c,_t=1<<32-ot(t)+s|a<<s|l,Ht=i+e}else _t=1<<i|a<<s|l,Ht=e}function oi(e){e.return!==null&&(Kt(e,1),Tc(e,1,0))}function ci(e){for(;e===vs;)vs=yl[--vl],yl[vl]=null,or=yl[--vl],yl[vl]=null;for(;e===pa;)pa=Nt[--Ct],Nt[Ct]=null,Ht=Nt[--Ct],Nt[Ct]=null,_t=Nt[--Ct],Nt[Ct]=null}function Sc(e,t){Nt[Ct++]=_t,Nt[Ct++]=Ht,Nt[Ct++]=pa,_t=t.id,Ht=t.overflow,pa=e}var Ge=null,Ce=null,ce=!1,ga=null,Tt=!1,ui=Error(o(519));function ha(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cr(jt(t,e)),ui}function Ac(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Xe]=e,t[We]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<Br.length;a++)ne(Br[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Yo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Xo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Vu(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ha(e,!0)}function Ec(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ge=Ge.return}}function bl(e){if(e!==Ge)return!1;if(!ce)return Ec(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ed(e.type,e.memoizedProps)),a=!a),a&&Ce&&ha(e),Ec(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ce=em(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ce=em(e)}else t===27?(t=Ce,Ma(e.type)?(e=Od,Od=null,Ce=e):Ce=t):Ce=Ge?At(e.stateNode.nextSibling):null;return!0}function Va(){Ce=Ge=null,ce=!1}function mi(){var e=ga;return e!==null&&(rt===null?rt=e:rt.push.apply(rt,e),ga=null),e}function cr(e){ga===null?ga=[e]:ga.push(e)}var xi=w(null),Za=null,Ft=null;function ya(e,t,a){G(xi,t._currentValue),t._currentValue=a}function Jt(e){e._currentValue=xi.current,_(xi)}function fi(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function pi(e,t,a,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var c=s.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=s;for(var v=0;v<t.length;v++)if(f.context===t[v]){i.lanes|=a,f=i.alternate,f!==null&&(f.lanes|=a),fi(i.return,a,e),l||(c=null);break e}i=f.next}}else if(s.tag===18){if(c=s.return,c===null)throw Error(o(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),fi(c,a,e),c=null}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===e){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}}function kl(e,t,a,l){e=null;for(var s=t,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var c=s.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var f=s.type;ct(s.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(s===ge.current){if(c=s.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Lr):e=[Lr])}s=s.return}e!==null&&pi(t,e,a,l),t.flags|=262144}function bs(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){Za=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return zc(Za,e)}function ks(e,t){return Za===null&&Ka(e),zc(e,t)}function zc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ft===null){if(e===null)throw Error(o(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return a}var Bf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Rf=n.unstable_scheduleCallback,Of=n.unstable_NormalPriority,Ue={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gi(){return{controller:new Bf,data:new Map,refCount:0}}function ur(e){e.refCount--,e.refCount===0&&Rf(Of,function(){e.controller.abort()})}var mr=null,hi=0,wl=0,jl=null;function Df(e,t){if(mr===null){var a=mr=[];hi=0,wl=bd(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return hi++,t.then(Mc,Mc),t}function Mc(){if(--hi===0&&mr!==null){jl!==null&&(jl.status="fulfilled");var e=mr;mr=null,wl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Uf(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),l}var Bc=M.S;M.S=function(e,t){pu=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Df(e,t),Bc!==null&&Bc(e,t)};var Fa=w(null);function yi(){var e=Fa.current;return e!==null?e:je.pooledCache}function ws(e,t){t===null?G(Fa,Fa.current):G(Fa,t.pool)}function Rc(){var e=yi();return e===null?null:{parent:Ue._currentValue,pool:e}}var Nl=Error(o(460)),vi=Error(o(474)),js=Error(o(542)),Ns={then:function(){}};function Oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lc(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lc(e),e}throw $a=t,Nl}}function Ja(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,Nl):a}}var $a=null;function Uc(){if($a===null)throw Error(o(459));var e=$a;return $a=null,e}function Lc(e){if(e===Nl||e===js)throw Error(o(483))}var Cl=null,xr=0;function Cs(e){var t=xr;return xr+=1,Cl===null&&(Cl=[]),Dc(Cl,e,t)}function fr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ts(e,t){throw t.$$typeof===L?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _c(e){function t(N,k){if(e){var S=N.deletions;S===null?(N.deletions=[k],N.flags|=16):S.push(k)}}function a(N,k){if(!e)return null;for(;k!==null;)t(N,k),k=k.sibling;return null}function l(N){for(var k=new Map;N!==null;)N.key!==null?k.set(N.key,N):k.set(N.index,N),N=N.sibling;return k}function s(N,k){return N=Zt(N,k),N.index=0,N.sibling=null,N}function i(N,k,S){return N.index=S,e?(S=N.alternate,S!==null?(S=S.index,S<k?(N.flags|=67108866,k):S):(N.flags|=67108866,k)):(N.flags|=1048576,k)}function c(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function f(N,k,S,O){return k===null||k.tag!==6?(k=ii(S,N.mode,O),k.return=N,k):(k=s(k,S),k.return=N,k)}function v(N,k,S,O){var J=S.type;return J===Y?R(N,k,S.props.children,O,S.key):k!==null&&(k.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ee&&Ja(J)===k.type)?(k=s(k,S.props),fr(k,S),k.return=N,k):(k=ys(S.type,S.key,S.props,null,N.mode,O),fr(k,S),k.return=N,k)}function A(N,k,S,O){return k===null||k.tag!==4||k.stateNode.containerInfo!==S.containerInfo||k.stateNode.implementation!==S.implementation?(k=di(S,N.mode,O),k.return=N,k):(k=s(k,S.children||[]),k.return=N,k)}function R(N,k,S,O,J){return k===null||k.tag!==7?(k=Ga(S,N.mode,O,J),k.return=N,k):(k=s(k,S),k.return=N,k)}function U(N,k,S){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ii(""+k,N.mode,S),k.return=N,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case H:return S=ys(k.type,k.key,k.props,null,N.mode,S),fr(S,k),S.return=N,S;case X:return k=di(k,N.mode,S),k.return=N,k;case Ee:return k=Ja(k),U(N,k,S)}if(P(k)||Fe(k))return k=Ga(k,N.mode,S,null),k.return=N,k;if(typeof k.then=="function")return U(N,Cs(k),S);if(k.$$typeof===D)return U(N,ks(N,k),S);Ts(N,k)}return null}function E(N,k,S,O){var J=k!==null?k.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return J!==null?null:f(N,k,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case H:return S.key===J?v(N,k,S,O):null;case X:return S.key===J?A(N,k,S,O):null;case Ee:return S=Ja(S),E(N,k,S,O)}if(P(S)||Fe(S))return J!==null?null:R(N,k,S,O,null);if(typeof S.then=="function")return E(N,k,Cs(S),O);if(S.$$typeof===D)return E(N,k,ks(N,S),O);Ts(N,S)}return null}function B(N,k,S,O,J){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return N=N.get(S)||null,f(k,N,""+O,J);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case H:return N=N.get(O.key===null?S:O.key)||null,v(k,N,O,J);case X:return N=N.get(O.key===null?S:O.key)||null,A(k,N,O,J);case Ee:return O=Ja(O),B(N,k,S,O,J)}if(P(O)||Fe(O))return N=N.get(S)||null,R(k,N,O,J,null);if(typeof O.then=="function")return B(N,k,S,Cs(O),J);if(O.$$typeof===D)return B(N,k,S,ks(k,O),J);Ts(k,O)}return null}function Z(N,k,S,O){for(var J=null,xe=null,F=k,le=k=0,de=null;F!==null&&le<S.length;le++){F.index>le?(de=F,F=null):de=F.sibling;var fe=E(N,F,S[le],O);if(fe===null){F===null&&(F=de);break}e&&F&&fe.alternate===null&&t(N,F),k=i(fe,k,le),xe===null?J=fe:xe.sibling=fe,xe=fe,F=de}if(le===S.length)return a(N,F),ce&&Kt(N,le),J;if(F===null){for(;le<S.length;le++)F=U(N,S[le],O),F!==null&&(k=i(F,k,le),xe===null?J=F:xe.sibling=F,xe=F);return ce&&Kt(N,le),J}for(F=l(F);le<S.length;le++)de=B(F,N,le,S[le],O),de!==null&&(e&&de.alternate!==null&&F.delete(de.key===null?le:de.key),k=i(de,k,le),xe===null?J=de:xe.sibling=de,xe=de);return e&&F.forEach(function(Ua){return t(N,Ua)}),ce&&Kt(N,le),J}function I(N,k,S,O){if(S==null)throw Error(o(151));for(var J=null,xe=null,F=k,le=k=0,de=null,fe=S.next();F!==null&&!fe.done;le++,fe=S.next()){F.index>le?(de=F,F=null):de=F.sibling;var Ua=E(N,F,fe.value,O);if(Ua===null){F===null&&(F=de);break}e&&F&&Ua.alternate===null&&t(N,F),k=i(Ua,k,le),xe===null?J=Ua:xe.sibling=Ua,xe=Ua,F=de}if(fe.done)return a(N,F),ce&&Kt(N,le),J;if(F===null){for(;!fe.done;le++,fe=S.next())fe=U(N,fe.value,O),fe!==null&&(k=i(fe,k,le),xe===null?J=fe:xe.sibling=fe,xe=fe);return ce&&Kt(N,le),J}for(F=l(F);!fe.done;le++,fe=S.next())fe=B(F,N,le,fe.value,O),fe!==null&&(e&&fe.alternate!==null&&F.delete(fe.key===null?le:fe.key),k=i(fe,k,le),xe===null?J=fe:xe.sibling=fe,xe=fe);return e&&F.forEach(function(Kp){return t(N,Kp)}),ce&&Kt(N,le),J}function ke(N,k,S,O){if(typeof S=="object"&&S!==null&&S.type===Y&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case H:e:{for(var J=S.key;k!==null;){if(k.key===J){if(J=S.type,J===Y){if(k.tag===7){a(N,k.sibling),O=s(k,S.props.children),O.return=N,N=O;break e}}else if(k.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ee&&Ja(J)===k.type){a(N,k.sibling),O=s(k,S.props),fr(O,S),O.return=N,N=O;break e}a(N,k);break}else t(N,k);k=k.sibling}S.type===Y?(O=Ga(S.props.children,N.mode,O,S.key),O.return=N,N=O):(O=ys(S.type,S.key,S.props,null,N.mode,O),fr(O,S),O.return=N,N=O)}return c(N);case X:e:{for(J=S.key;k!==null;){if(k.key===J)if(k.tag===4&&k.stateNode.containerInfo===S.containerInfo&&k.stateNode.implementation===S.implementation){a(N,k.sibling),O=s(k,S.children||[]),O.return=N,N=O;break e}else{a(N,k);break}else t(N,k);k=k.sibling}O=di(S,N.mode,O),O.return=N,N=O}return c(N);case Ee:return S=Ja(S),ke(N,k,S,O)}if(P(S))return Z(N,k,S,O);if(Fe(S)){if(J=Fe(S),typeof J!="function")throw Error(o(150));return S=J.call(S),I(N,k,S,O)}if(typeof S.then=="function")return ke(N,k,Cs(S),O);if(S.$$typeof===D)return ke(N,k,ks(N,S),O);Ts(N,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,k!==null&&k.tag===6?(a(N,k.sibling),O=s(k,S),O.return=N,N=O):(a(N,k),O=ii(S,N.mode,O),O.return=N,N=O),c(N)):a(N,k)}return function(N,k,S,O){try{xr=0;var J=ke(N,k,S,O);return Cl=null,J}catch(F){if(F===Nl||F===js)throw F;var xe=ut(29,F,null,N.mode);return xe.lanes=O,xe.return=N,xe}finally{}}}var Ia=_c(!0),Hc=_c(!1),va=!1;function bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ki(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=hs(e),wc(e,null,a),t}return gs(e,l,t,a),hs(e)}function pr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,zo(e,a)}}function wi(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var s=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?s=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?s=i=t:i=i.next=t}else s=i=t;a={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ji=!1;function gr(){if(ji){var e=jl;if(e!==null)throw e}}function hr(e,t,a,l){ji=!1;var s=e.updateQueue;va=!1;var i=s.firstBaseUpdate,c=s.lastBaseUpdate,f=s.shared.pending;if(f!==null){s.shared.pending=null;var v=f,A=v.next;v.next=null,c===null?i=A:c.next=A,c=v;var R=e.alternate;R!==null&&(R=R.updateQueue,f=R.lastBaseUpdate,f!==c&&(f===null?R.firstBaseUpdate=A:f.next=A,R.lastBaseUpdate=v))}if(i!==null){var U=s.baseState;c=0,R=A=v=null,f=i;do{var E=f.lane&-536870913,B=E!==f.lane;if(B?(ie&E)===E:(l&E)===E){E!==0&&E===wl&&(ji=!0),R!==null&&(R=R.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Z=e,I=f;E=t;var ke=a;switch(I.tag){case 1:if(Z=I.payload,typeof Z=="function"){U=Z.call(ke,U,E);break e}U=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=I.payload,E=typeof Z=="function"?Z.call(ke,U,E):Z,E==null)break e;U=C({},U,E);break e;case 2:va=!0}}E=f.callback,E!==null&&(e.flags|=64,B&&(e.flags|=8192),B=s.callbacks,B===null?s.callbacks=[E]:B.push(E))}else B={lane:E,tag:f.tag,payload:f.payload,callback:f.callback,next:null},R===null?(A=R=B,v=U):R=R.next=B,c|=E;if(f=f.next,f===null){if(f=s.shared.pending,f===null)break;B=f,f=B.next,B.next=null,s.lastBaseUpdate=B,s.shared.pending=null}}while(!0);R===null&&(v=U),s.baseState=v,s.firstBaseUpdate=A,s.lastBaseUpdate=R,i===null&&(s.shared.lanes=0),Ta|=c,e.lanes=c,e.memoizedState=U}}function qc(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Yc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qc(a[e],t)}var Tl=w(null),Ss=w(0);function Qc(e,t){e=ra,G(Ss,e),G(Tl,t),ra=e|t.baseLanes}function Ni(){G(Ss,ra),G(Tl,Tl.current)}function Ci(){ra=Ss.current,_(Tl),_(Ss)}var mt=w(null),St=null;function wa(e){var t=e.alternate;G(Re,Re.current&1),G(mt,e),St===null&&(t===null||Tl.current!==null||t.memoizedState!==null)&&(St=e)}function Ti(e){G(Re,Re.current),G(mt,e),St===null&&(St=e)}function Xc(e){e.tag===22?(G(Re,Re.current),G(mt,e),St===null&&(St=e)):ja()}function ja(){G(Re,Re.current),G(mt,mt.current)}function xt(e){_(mt),St===e&&(St=null),_(Re)}var Re=w(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bd(a)||Rd(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $t=0,ae=null,ve=null,Le=null,Es=!1,Sl=!1,Pa=!1,zs=0,yr=0,Al=null,Lf=0;function ze(){throw Error(o(321))}function Si(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ct(e[a],t[a]))return!1;return!0}function Ai(e,t,a,l,s,i){return $t=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?T0:Xi,Pa=!1,i=a(l,s),Pa=!1,Sl&&(i=Vc(t,a,l,s)),Gc(e),i}function Gc(e){M.H=kr;var t=ve!==null&&ve.next!==null;if($t=0,Le=ve=ae=null,Es=!1,yr=0,Al=null,t)throw Error(o(300));e===null||_e||(e=e.dependencies,e!==null&&bs(e)&&(_e=!0))}function Vc(e,t,a,l){ae=e;var s=0;do{if(Sl&&(Al=null),yr=0,Sl=!1,25<=s)throw Error(o(301));if(s+=1,Le=ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=S0,i=t(a,l)}while(Sl);return i}function _f(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?vr(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ae.flags|=1024),t}function Ei(){var e=zs!==0;return zs=0,e}function zi(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Mi(e){if(Es){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Es=!1}$t=0,Le=ve=ae=null,Sl=!1,yr=zs=0,Al=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ae.memoizedState=Le=e:Le=Le.next=e,Le}function Oe(){if(ve===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Le===null?ae.memoizedState:Le.next;if(t!==null)Le=t,ve=e;else{if(e===null)throw ae.alternate===null?Error(o(467)):Error(o(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Le===null?ae.memoizedState=Le=e:Le=Le.next=e}return Le}function Ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vr(e){var t=yr;return yr+=1,Al===null&&(Al=[]),e=Dc(Al,e,t),t=ae,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?T0:Xi),e}function Bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vr(e);if(e.$$typeof===D)return Ve(e)}throw Error(o(438,String(e)))}function Bi(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ms(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Pe;return t.index++,a}function It(e,t){return typeof t=="function"?t(e):t}function Rs(e){var t=Oe();return Ri(t,ve,e)}function Ri(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var s=e.baseQueue,i=l.pending;if(i!==null){if(s!==null){var c=s.next;s.next=i.next,i.next=c}t.baseQueue=s=i,l.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{t=s.next;var f=c=null,v=null,A=t,R=!1;do{var U=A.lane&-536870913;if(U!==A.lane?(ie&U)===U:($t&U)===U){var E=A.revertLane;if(E===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),U===wl&&(R=!0);else if(($t&E)===E){A=A.next,E===wl&&(R=!0);continue}else U={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(f=v=U,c=i):v=v.next=U,ae.lanes|=E,Ta|=E;U=A.action,Pa&&a(i,U),i=A.hasEagerState?A.eagerState:a(i,U)}else E={lane:U,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(f=v=E,c=i):v=v.next=E,ae.lanes|=U,Ta|=U;A=A.next}while(A!==null&&A!==t);if(v===null?c=i:v.next=f,!ct(i,e.memoizedState)&&(_e=!0,R&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=v,l.lastRenderedState=i}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Oi(e){var t=Oe(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,s=a.pending,i=t.memoizedState;if(s!==null){a.pending=null;var c=s=s.next;do i=e(i,c.action),c=c.next;while(c!==s);ct(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Zc(e,t,a){var l=ae,s=Oe(),i=ce;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!ct((ve||s).memoizedState,a);if(c&&(s.memoizedState=a,_e=!0),s=s.queue,Li(Jc.bind(null,l,s,e),[e]),s.getSnapshot!==t||c||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,El(9,{destroy:void 0},Fc.bind(null,l,s,a,t),null),je===null)throw Error(o(349));i||($t&127)!==0||Kc(l,t,a)}return a}function Kc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=Ms(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Fc(e,t,a,l){t.value=a,t.getSnapshot=l,$c(t)&&Ic(e)}function Jc(e,t,a){return a(function(){$c(t)&&Ic(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ct(e,a)}catch{return!0}}function Ic(e){var t=Xa(e,2);t!==null&&st(t,e,2)}function Di(e){var t=Ie();if(typeof e=="function"){var a=e;if(e=a(),Pa){ma(!0);try{a()}finally{ma(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},t}function Pc(e,t,a,l){return e.baseState=a,Ri(e,ve,typeof l=="function"?l:It)}function Hf(e,t,a,l,s){if(Us(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Wc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Wc(e,t){var a=t.action,l=t.payload,s=e.state;if(t.isTransition){var i=M.T,c={};M.T=c;try{var f=a(s,l),v=M.S;v!==null&&v(c,f),e0(e,t,f)}catch(A){Ui(e,t,A)}finally{i!==null&&c.types!==null&&(i.types=c.types),M.T=i}}else try{i=a(s,l),e0(e,t,i)}catch(A){Ui(e,t,A)}}function e0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){t0(e,t,l)},function(l){return Ui(e,t,l)}):t0(e,t,a)}function t0(e,t,a){t.status="fulfilled",t.value=a,a0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Wc(e,a)))}function Ui(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,a0(t),t=t.next;while(t!==l)}e.action=null}function a0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function l0(e,t){return t}function r0(e,t){if(ce){var a=je.formState;if(a!==null){e:{var l=ae;if(ce){if(Ce){t:{for(var s=Ce,i=Tt;s.nodeType!==8;){if(!i){s=null;break t}if(s=At(s.nextSibling),s===null){s=null;break t}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){Ce=At(s.nextSibling),l=s.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=Ie(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l0,lastRenderedState:t},a.queue=l,a=j0.bind(null,ae,l),l.dispatch=a,l=Di(!1),i=Qi.bind(null,ae,!1,l.queue),l=Ie(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,a=Hf.bind(null,ae,s,i,a),s.dispatch=a,l.memoizedState=e,[t,a,!1]}function s0(e){var t=Oe();return n0(t,ve,e)}function n0(e,t,a){if(t=Ri(e,t,l0)[0],e=Rs(It)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=vr(t)}catch(c){throw c===Nl?js:c}else l=t;t=Oe();var s=t.queue,i=s.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,El(9,{destroy:void 0},qf.bind(null,s,a),null)),[l,i,e]}function qf(e,t){e.action=t}function i0(e){var t=Oe(),a=ve;if(a!==null)return n0(t,a,e);Oe(),t=t.memoizedState,a=Oe();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function El(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Ms(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function d0(){return Oe().memoizedState}function Os(e,t,a,l){var s=Ie();ae.flags|=e,s.memoizedState=El(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ds(e,t,a,l){var s=Oe();l=l===void 0?null:l;var i=s.memoizedState.inst;ve!==null&&l!==null&&Si(l,ve.memoizedState.deps)?s.memoizedState=El(t,i,a,l):(ae.flags|=e,s.memoizedState=El(1|t,i,a,l))}function o0(e,t){Os(8390656,8,e,t)}function Li(e,t){Ds(2048,8,e,t)}function Yf(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Ms(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function c0(e){var t=Oe().memoizedState;return Yf({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function u0(e,t){return Ds(4,2,e,t)}function m0(e,t){return Ds(4,4,e,t)}function x0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function f0(e,t,a){a=a!=null?a.concat([e]):null,Ds(4,4,x0.bind(null,t,e),a)}function _i(){}function p0(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Si(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function g0(e,t){var a=Oe();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Si(t,l[1]))return l[0];if(l=e(),Pa){ma(!0);try{e()}finally{ma(!1)}}return a.memoizedState=[l,t],l}function Hi(e,t,a){return a===void 0||($t&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=hu(),ae.lanes|=e,Ta|=e,a)}function h0(e,t,a,l){return ct(a,t)?a:Tl.current!==null?(e=Hi(e,a,l),ct(e,t)||(_e=!0),e):($t&42)===0||($t&1073741824)!==0&&(ie&261930)===0?(_e=!0,e.memoizedState=a):(e=hu(),ae.lanes|=e,Ta|=e,t)}function y0(e,t,a,l,s){var i=Q.p;Q.p=i!==0&&8>i?i:8;var c=M.T,f={};M.T=f,Qi(e,!1,t,a);try{var v=s(),A=M.S;if(A!==null&&A(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var R=Uf(v,l);br(e,t,R,gt(e))}else br(e,t,l,gt(e))}catch(U){br(e,t,{then:function(){},status:"rejected",reason:U},gt())}finally{Q.p=i,c!==null&&f.types!==null&&(c.types=f.types),M.T=c}}function Qf(){}function qi(e,t,a,l){if(e.tag!==5)throw Error(o(476));var s=v0(e).queue;y0(e,s,t,V,a===null?Qf:function(){return b0(e),a(l)})}function v0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function b0(e){var t=v0(e);t.next===null&&(t=e.alternate.memoizedState),br(e,t.next.queue,{},gt())}function Yi(){return Ve(Lr)}function k0(){return Oe().memoizedState}function w0(){return Oe().memoizedState}function Xf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=ba(a);var l=ka(t,e,a);l!==null&&(st(l,t,a),pr(l,t,a)),t={cache:gi()},e.payload=t;return}t=t.return}}function Gf(e,t,a){var l=gt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Us(e)?N0(t,a):(a=si(e,t,a,l),a!==null&&(st(a,e,l),C0(a,t,l)))}function j0(e,t,a){var l=gt();br(e,t,a,l)}function br(e,t,a,l){var s={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Us(e))N0(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,a);if(s.hasEagerState=!0,s.eagerState=f,ct(f,c))return gs(e,t,s,0),je===null&&ps(),!1}catch{}finally{}if(a=si(e,t,s,l),a!==null)return st(a,e,l),C0(a,t,l),!0}return!1}function Qi(e,t,a,l){if(l={lane:2,revertLane:bd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Us(e)){if(t)throw Error(o(479))}else t=si(e,a,l,2),t!==null&&st(t,e,2)}function Us(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function N0(e,t){Sl=Es=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function C0(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,zo(e,a)}}var kr={readContext:Ve,use:Bs,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};kr.useEffectEvent=ze;var T0={readContext:Ve,use:Bs,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:o0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Os(4194308,4,x0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Os(4194308,4,e,t)},useInsertionEffect:function(e,t){Os(4,2,e,t)},useMemo:function(e,t){var a=Ie();t=t===void 0?null:t;var l=e();if(Pa){ma(!0);try{e()}finally{ma(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ie();if(a!==void 0){var s=a(t);if(Pa){ma(!0);try{a(t)}finally{ma(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=Gf.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=Di(e);var t=e.queue,a=j0.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_i,useDeferredValue:function(e,t){var a=Ie();return Hi(a,e,t)},useTransition:function(){var e=Di(!1);return e=y0.bind(null,ae,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,s=Ie();if(ce){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),je===null)throw Error(o(349));(ie&127)!==0||Kc(l,t,a)}s.memoizedState=a;var i={value:a,getSnapshot:t};return s.queue=i,o0(Jc.bind(null,l,i,e),[e]),l.flags|=2048,El(9,{destroy:void 0},Fc.bind(null,l,i,a,t),null),a},useId:function(){var e=Ie(),t=je.identifierPrefix;if(ce){var a=Ht,l=_t;a=(l&~(1<<32-ot(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=zs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Lf++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Yi,useFormState:r0,useActionState:r0,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Qi.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:Bi,useCacheRefresh:function(){return Ie().memoizedState=Xf.bind(null,ae)},useEffectEvent:function(e){var t=Ie(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Xi={readContext:Ve,use:Bs,useCallback:p0,useContext:Ve,useEffect:Li,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:m0,useMemo:g0,useReducer:Rs,useRef:d0,useState:function(){return Rs(It)},useDebugValue:_i,useDeferredValue:function(e,t){var a=Oe();return h0(a,ve.memoizedState,e,t)},useTransition:function(){var e=Rs(It)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:vr(e),t]},useSyncExternalStore:Zc,useId:k0,useHostTransitionStatus:Yi,useFormState:s0,useActionState:s0,useOptimistic:function(e,t){var a=Oe();return Pc(a,ve,e,t)},useMemoCache:Bi,useCacheRefresh:w0};Xi.useEffectEvent=c0;var S0={readContext:Ve,use:Bs,useCallback:p0,useContext:Ve,useEffect:Li,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:m0,useMemo:g0,useReducer:Oi,useRef:d0,useState:function(){return Oi(It)},useDebugValue:_i,useDeferredValue:function(e,t){var a=Oe();return ve===null?Hi(a,e,t):h0(a,ve.memoizedState,e,t)},useTransition:function(){var e=Oi(It)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:vr(e),t]},useSyncExternalStore:Zc,useId:k0,useHostTransitionStatus:Yi,useFormState:i0,useActionState:i0,useOptimistic:function(e,t){var a=Oe();return ve!==null?Pc(a,ve,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bi,useCacheRefresh:w0};S0.useEffectEvent=c0;function Gi(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:C({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vi={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=gt(),s=ba(l);s.payload=t,a!=null&&(s.callback=a),t=ka(e,s,l),t!==null&&(st(t,e,l),pr(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=gt(),s=ba(l);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=ka(e,s,l),t!==null&&(st(t,e,l),pr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=ka(e,l,a),t!==null&&(st(t,e,a),pr(t,e,a))}};function A0(e,t,a,l,s,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!ir(a,l)||!ir(s,i):!0}function E0(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Vi.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=C({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function z0(e){fs(e)}function M0(e){console.error(e)}function B0(e){fs(e)}function Ls(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function R0(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Zi(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Ls(e,t)},a}function O0(e){return e=ba(e),e.tag=3,e}function D0(e,t,a,l){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var i=l.value;e.payload=function(){return s(i)},e.callback=function(){R0(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){R0(t,a,l),typeof s!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Vf(e,t,a,l,s){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&kl(t,a,s,!0),a=mt.current,a!==null){switch(a.tag){case 31:case 13:return St===null?Js():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=s,l===Ns?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),hd(e,l,s)),!1;case 22:return a.flags|=65536,l===Ns?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),hd(e,l,s)),!1}throw Error(o(435,a.tag))}return hd(e,l,s),Js(),!1}if(ce)return t=mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==ui&&(e=Error(o(422),{cause:l}),cr(jt(e,a)))):(l!==ui&&(t=Error(o(423),{cause:l}),cr(jt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=jt(l,a),s=Zi(e.stateNode,l,s),wi(e,s),Me!==4&&(Me=2)),!1;var i=Error(o(520),{cause:l});if(i=jt(i,a),Er===null?Er=[i]:Er.push(i),Me!==4&&(Me=2),t===null)return!0;l=jt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Zi(a.stateNode,l,e),wi(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sa===null||!Sa.has(i))))return a.flags|=65536,s&=-s,a.lanes|=s,s=O0(s),D0(s,e,a,l),wi(a,s),!1}a=a.return}while(a!==null);return!1}var Ki=Error(o(461)),_e=!1;function Ze(e,t,a,l){t.child=e===null?Hc(t,null,a,l):Ia(t,e.child,a,l)}function U0(e,t,a,l,s){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var f in l)f!=="ref"&&(c[f]=l[f])}else c=l;return Ka(t),l=Ai(e,t,a,c,i,s),f=Ei(),e!==null&&!_e?(zi(e,t,s),Pt(e,t,s)):(ce&&f&&oi(t),t.flags|=1,Ze(e,t,l,s),t.child)}function L0(e,t,a,l,s){if(e===null){var i=a.type;return typeof i=="function"&&!ni(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,_0(e,t,i,l,s)):(e=ys(a.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!td(e,s)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:ir,a(c,l)&&e.ref===t.ref)return Pt(e,t,s)}return t.flags|=1,e=Zt(i,l),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,a,l,s){if(e!==null){var i=e.memoizedProps;if(ir(i,l)&&e.ref===t.ref)if(_e=!1,t.pendingProps=l=i,td(e,s))(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,Pt(e,t,s)}return Fi(e,t,a,l,s)}function H0(e,t,a,l){var s=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~i}else l=0,t.child=null;return q0(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ws(t,i!==null?i.cachePool:null),i!==null?Qc(t,i):Ni(),Xc(t);else return l=t.lanes=536870912,q0(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ws(t,i.cachePool),Qc(t,i),ja(),t.memoizedState=null):(e!==null&&ws(t,null),Ni(),ja());return Ze(e,t,s,a),t.child}function wr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function q0(e,t,a,l,s){var i=yi();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ws(t,null),Ni(),Xc(t),e!==null&&kl(e,t,l,!0),t.childLanes=s,null}function _s(e,t){return t=qs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Y0(e,t,a){return Ia(t,e.child,null,a),e=_s(t,t.pendingProps),e.flags|=2,xt(t),t.memoizedState=null,e}function Zf(e,t,a){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=_s(t,l),t.lanes=536870912,wr(null,e);if(Ti(t),(e=Ce)?(e=Wu(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:_t,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Nc(e),a.return=t,t.child=a,Ge=t,Ce=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return _s(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Ti(t),s)if(t.flags&256)t.flags&=-257,t=Y0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(_e||kl(e,t,a,!1),s=(a&e.childLanes)!==0,_e||s){if(l=je,l!==null&&(c=Mo(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Xa(e,c),st(l,e,c),Ki;Js(),t=Y0(e,t,a)}else e=i.treeContext,Ce=At(c.nextSibling),Ge=t,ce=!0,ga=null,Tt=!1,e!==null&&Sc(t,e),t=_s(t,l),t.flags|=4096;return t}return e=Zt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Fi(e,t,a,l,s){return Ka(t),a=Ai(e,t,a,l,void 0,s),l=Ei(),e!==null&&!_e?(zi(e,t,s),Pt(e,t,s)):(ce&&l&&oi(t),t.flags|=1,Ze(e,t,a,s),t.child)}function Q0(e,t,a,l,s,i){return Ka(t),t.updateQueue=null,a=Vc(t,l,a,s),Gc(e),l=Ei(),e!==null&&!_e?(zi(e,t,i),Pt(e,t,i)):(ce&&l&&oi(t),t.flags|=1,Ze(e,t,a,i),t.child)}function X0(e,t,a,l,s){if(Ka(t),t.stateNode===null){var i=hl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Ve(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vi,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},bi(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Ve(c):hl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Gi(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Vi.enqueueReplaceState(i,i.state,null),hr(t,l,i,s),gr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,v=Wa(a,f);i.props=v;var A=i.context,R=a.contextType;c=hl,typeof R=="object"&&R!==null&&(c=Ve(R));var U=a.getDerivedStateFromProps;R=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||A!==c)&&E0(t,i,l,c),va=!1;var E=t.memoizedState;i.state=E,hr(t,l,i,s),gr(),A=t.memoizedState,f||E!==A||va?(typeof U=="function"&&(Gi(t,a,U,l),A=t.memoizedState),(v=va||A0(t,a,v,l,E,A,c))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=c,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,ki(e,t),c=t.memoizedProps,R=Wa(a,c),i.props=R,U=t.pendingProps,E=i.context,A=a.contextType,v=hl,typeof A=="object"&&A!==null&&(v=Ve(A)),f=a.getDerivedStateFromProps,(A=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==U||E!==v)&&E0(t,i,l,v),va=!1,E=t.memoizedState,i.state=E,hr(t,l,i,s),gr();var B=t.memoizedState;c!==U||E!==B||va||e!==null&&e.dependencies!==null&&bs(e.dependencies)?(typeof f=="function"&&(Gi(t,a,f,l),B=t.memoizedState),(R=va||A0(t,a,R,l,E,B,v)||e!==null&&e.dependencies!==null&&bs(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,B,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,B,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),i.props=l,i.state=B,i.context=v,l=R):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Hs(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ia(t,e.child,null,s),t.child=Ia(t,null,a,s)):Ze(e,t,a,s),t.memoizedState=i.state,e=t.child):e=Pt(e,t,s),e}function G0(e,t,a,l){return Va(),t.flags|=256,Ze(e,t,a,l),t.child}var Ji={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $i(e){return{baseLanes:e,cachePool:Rc()}}function Ii(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=pt),e}function V0(e,t,a){var l=t.pendingProps,s=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),c&&(s=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(s?wa(t):ja(),(e=Ce)?(e=Wu(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:_t,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=Nc(e),a.return=t,t.child=a,Ge=t,Ce=null)):e=null,e===null)throw ha(t);return Rd(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,s?(ja(),s=t.mode,f=qs({mode:"hidden",children:f},s),l=Ga(l,s,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=$i(a),l.childLanes=Ii(e,c,a),t.memoizedState=Ji,wr(null,l)):(wa(t),Pi(t,f))}var v=e.memoizedState;if(v!==null&&(f=v.dehydrated,f!==null)){if(i)t.flags&256?(wa(t),t.flags&=-257,t=Wi(e,t,a)):t.memoizedState!==null?(ja(),t.child=e.child,t.flags|=128,t=null):(ja(),f=l.fallback,s=t.mode,l=qs({mode:"visible",children:l.children},s),f=Ga(f,s,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,Ia(t,e.child,null,a),l=t.child,l.memoizedState=$i(a),l.childLanes=Ii(e,c,a),t.memoizedState=Ji,t=wr(null,l));else if(wa(t),Rd(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;c=A,l=Error(o(419)),l.stack="",l.digest=c,cr({value:l,source:null,stack:null}),t=Wi(e,t,a)}else if(_e||kl(e,t,a,!1),c=(a&e.childLanes)!==0,_e||c){if(c=je,c!==null&&(l=Mo(c,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Xa(e,l),st(c,e,l),Ki;Bd(f)||Js(),t=Wi(e,t,a)}else Bd(f)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ce=At(f.nextSibling),Ge=t,ce=!0,ga=null,Tt=!1,e!==null&&Sc(t,e),t=Pi(t,l.children),t.flags|=4096);return t}return s?(ja(),f=l.fallback,s=t.mode,v=e.child,A=v.sibling,l=Zt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,A!==null?f=Zt(A,f):(f=Ga(f,s,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,wr(null,l),l=t.child,f=e.child.memoizedState,f===null?f=$i(a):(s=f.cachePool,s!==null?(v=Ue._currentValue,s=s.parent!==v?{parent:v,pool:v}:s):s=Rc(),f={baseLanes:f.baseLanes|a,cachePool:s}),l.memoizedState=f,l.childLanes=Ii(e,c,a),t.memoizedState=Ji,wr(e.child,l)):(wa(t),a=e.child,e=a.sibling,a=Zt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Pi(e,t){return t=qs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qs(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function Wi(e,t,a){return Ia(t,e.child,null,a),e=Pi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Z0(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),fi(e.return,t,a)}function ed(e,t,a,l,s,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:s,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=s,c.treeForkCount=i)}function K0(e,t,a){var l=t.pendingProps,s=l.revealOrder,i=l.tail;l=l.children;var c=Re.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,G(Re,c),Ze(e,t,l,a),l=ce?or:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Z0(e,a,t);else if(e.tag===19)Z0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&As(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),ed(t,!1,s,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&As(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}ed(t,!0,a,null,i,l);break;case"together":ed(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ta|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Zt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Zt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function td(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bs(e)))}function Kf(e,t,a){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),ya(t,Ue,e.memoizedState.cache),Va();break;case 27:case 5:Fl(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ti(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(wa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?V0(e,t,a):(wa(t),e=Pt(e,t,a),e!==null?e.sibling:null);wa(t);break;case 19:var s=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(kl(e,t,a,!1),l=(a&t.childLanes)!==0),s){if(l)return K0(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),G(Re,Re.current),l)break;return null;case 22:return t.lanes=0,H0(e,t,a,t.pendingProps);case 24:ya(t,Ue,e.memoizedState.cache)}return Pt(e,t,a)}function F0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)_e=!0;else{if(!td(e,a)&&(t.flags&128)===0)return _e=!1,Kf(e,t,a);_e=(e.flags&131072)!==0}else _e=!1,ce&&(t.flags&1048576)!==0&&Tc(t,or,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ja(t.elementType),t.type=e,typeof e=="function")ni(e)?(l=Wa(e,l),t.tag=1,t=X0(null,t,e,l,a)):(t.tag=0,t=Fi(null,t,e,l,a));else{if(e!=null){var s=e.$$typeof;if(s===me){t.tag=11,t=U0(null,t,e,l,a);break e}else if(s===W){t.tag=14,t=L0(null,t,e,l,a);break e}}throw t=$(e)||e,Error(o(306,t,""))}}return t;case 0:return Fi(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,s=Wa(l,t.pendingProps),X0(e,t,l,s,a);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;s=i.element,ki(e,t),hr(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ya(t,Ue,l),l!==i.cache&&pi(t,[Ue],a,!0),gr(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=G0(e,t,l,a);break e}else if(l!==s){s=jt(Error(o(424)),t),cr(s),t=G0(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=At(e.firstChild),Ge=t,ce=!0,ga=null,Tt=!0,a=Hc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Va(),l===s){t=Pt(e,t,a);break e}Ze(e,t,l,a)}t=t.child}return t;case 26:return Hs(e,t),e===null?(a=sm(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,l=an(re.current).createElement(a),l[Xe]=t,l[We]=e,Ke(l,a,e),Ye(l),t.stateNode=l):t.memoizedState=sm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fl(t),e===null&&ce&&(l=t.stateNode=am(t.type,t.pendingProps,re.current),Ge=t,Tt=!0,s=Ce,Ma(t.type)?(Od=s,Ce=At(l.firstChild)):Ce=s),Ze(e,t,t.pendingProps.children,a),Hs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((s=l=Ce)&&(l=jp(l,t.type,t.pendingProps,Tt),l!==null?(t.stateNode=l,Ge=t,Ce=At(l.firstChild),Tt=!1,s=!0):s=!1),s||ha(t)),Fl(t),s=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Ed(s,i)?l=null:c!==null&&Ed(s,c)&&(t.flags|=32),t.memoizedState!==null&&(s=Ai(e,t,_f,null,null,a),Lr._currentValue=s),Hs(e,t),Ze(e,t,l,a),t.child;case 6:return e===null&&ce&&((e=a=Ce)&&(a=Np(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ge=t,Ce=null,e=!0):e=!1),e||ha(t)),null;case 13:return V0(e,t,a);case 4:return $e(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ia(t,null,l,a):Ze(e,t,l,a),t.child;case 11:return U0(e,t,t.type,t.pendingProps,a);case 7:return Ze(e,t,t.pendingProps,a),t.child;case 8:return Ze(e,t,t.pendingProps.children,a),t.child;case 12:return Ze(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ya(t,t.type,l.value),Ze(e,t,l.children,a),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,Ka(t),s=Ve(s),l=l(s),t.flags|=1,Ze(e,t,l,a),t.child;case 14:return L0(e,t,t.type,t.pendingProps,a);case 15:return _0(e,t,t.type,t.pendingProps,a);case 19:return K0(e,t,a);case 31:return Zf(e,t,a);case 22:return H0(e,t,a,t.pendingProps);case 24:return Ka(t),l=Ve(Ue),e===null?(s=yi(),s===null&&(s=je,i=gi(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=a),s=i),t.memoizedState={parent:l,cache:s},bi(t),ya(t,Ue,s)):((e.lanes&a)!==0&&(ki(e,t),hr(t,null,null,a),gr()),s=e.memoizedState,i=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ya(t,Ue,l)):(l=i.cache,ya(t,Ue,l),l!==s.cache&&pi(t,[Ue],a,!0))),Ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Wt(e){e.flags|=4}function ad(e,t,a,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(ku())e.flags|=8192;else throw $a=Ns,vi}else e.flags&=-16777217}function J0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cm(t))if(ku())e.flags|=8192;else throw $a=Ns,vi}function Ys(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ao():536870912,e.lanes|=t,Rl|=t)}function jr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Ff(e,t,a){var l=t.pendingProps;switch(ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Jt(Ue),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(bl(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mi())),Te(t),null;case 26:var s=t.type,i=t.memoizedState;return e===null?(Wt(t),i!==null?(Te(t),J0(t,i)):(Te(t),ad(t,s,null,l,a))):i?i!==e.memoizedState?(Wt(t),Te(t),J0(t,i)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),Te(t),ad(t,s,e,l,a)),null;case 27:if(Pr(t),a=re.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Te(t),null}e=K.current,bl(t)?Ac(t):(e=am(s,l,a),t.stateNode=e,Wt(t))}return Te(t),null;case 5:if(Pr(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Te(t),null}if(i=K.current,bl(t))Ac(t);else{var c=an(re.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(s,{is:l.is}):c.createElement(s)}}i[Xe]=t,i[We]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Ke(i,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return Te(t),ad(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=re.current,bl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,s=Ge,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Vu(e.nodeValue,a)),e||ha(t,!0)}else e=an(e).createTextNode(l),e[Xe]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=bl(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Xe]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=mi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(xt(t),t):(xt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Te(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=bl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Xe]=t}else Va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),s=!1}else s=mi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(xt(t),t):(xt(t),null)}return xt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==s&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ys(t,t.updateQueue),Te(t),null);case 4:return Be(),e===null&&Nd(t.stateNode.containerInfo),Te(t),null;case 10:return Jt(t.type),Te(t),null;case 19:if(_(Re),l=t.memoizedState,l===null)return Te(t),null;if(s=(t.flags&128)!==0,i=l.rendering,i===null)if(s)jr(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=As(e),i!==null){for(t.flags|=128,jr(l,!1),e=i.updateQueue,t.updateQueue=e,Ys(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)jc(a,e),a=a.sibling;return G(Re,Re.current&1|2),ce&&Kt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>Zs&&(t.flags|=128,s=!0,jr(l,!1),t.lanes=4194304)}else{if(!s)if(e=As(i),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Ys(t,e),jr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ce)return Te(t),null}else 2*it()-l.renderingStartTime>Zs&&a!==536870912&&(t.flags|=128,s=!0,jr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Re.current,G(Re,s?a&1|2:a&1),ce&&Kt(t,l.treeForkCount),e):(Te(t),null);case 22:case 23:return xt(t),Ci(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&Ys(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&_(Fa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(Ue),Te(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Jf(e,t){switch(ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(Ue),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pr(t),null;case 31:if(t.memoizedState!==null){if(xt(t),t.alternate===null)throw Error(o(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Re),null;case 4:return Be(),null;case 10:return Jt(t.type),null;case 22:case 23:return xt(t),Ci(),e!==null&&_(Fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(Ue),null;case 25:return null;default:return null}}function $0(e,t){switch(ci(t),t.tag){case 3:Jt(Ue),Be();break;case 26:case 27:case 5:Pr(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&xt(t);break;case 13:xt(t);break;case 19:_(Re);break;case 10:Jt(t.type);break;case 22:case 23:xt(t),Ci(),e!==null&&_(Fa);break;case 24:Jt(Ue)}}function Nr(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==s)}}catch(f){ye(t,t.return,f)}}function Na(e,t,a){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var i=s.next;l=i;do{if((l.tag&e)===e){var c=l.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,s=t;var v=a,A=f;try{A()}catch(R){ye(s,v,R)}}}l=l.next}while(l!==i)}}catch(R){ye(t,t.return,R)}}function I0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yc(t,a)}catch(l){ye(e,e.return,l)}}}function P0(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ye(e,t,l)}}function Cr(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(s){ye(e,t,s)}}function qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(s){ye(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){ye(e,t,s)}else a.current=null}function W0(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(s){ye(e,e.return,s)}}function ld(e,t,a){try{var l=e.stateNode;hp(l,e.type,a,t),l[We]=t}catch(s){ye(e,e.return,s)}}function eu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(sd(e,t,a),e=e.sibling;e!==null;)sd(e,t,a),e=e.sibling}function Qs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qs(e,t,a),e=e.sibling;e!==null;)Qs(e,t,a),e=e.sibling}function tu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Ke(t,l,a),t[Xe]=e,t[We]=a}catch(i){ye(e,e.return,i)}}var ea=!1,He=!1,nd=!1,au=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function $f(e,t){if(e=e.containerInfo,Sd=cn,e=fc(e),Wn(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var s=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,f=-1,v=-1,A=0,R=0,U=e,E=null;t:for(;;){for(var B;U!==a||s!==0&&U.nodeType!==3||(f=c+s),U!==i||l!==0&&U.nodeType!==3||(v=c+l),U.nodeType===3&&(c+=U.nodeValue.length),(B=U.firstChild)!==null;)E=U,U=B;for(;;){if(U===e)break t;if(E===a&&++A===s&&(f=c),E===i&&++R===l&&(v=c),(B=U.nextSibling)!==null)break;U=E,E=U.parentNode}U=B}a=f===-1||v===-1?null:{start:f,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ad={focusedElem:e,selectionRange:a},cn=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,s=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Z=Wa(a.type,s);e=l.getSnapshotBeforeUpdate(Z,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(I){ye(a,a.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Md(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Md(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function lu(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),l&4&&Nr(5,a);break;case 1:if(aa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ye(a,a.return,c)}else{var s=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ye(a,a.return,c)}}l&64&&I0(a),l&512&&Cr(a,a.return);break;case 3:if(aa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yc(e,t)}catch(c){ye(a,a.return,c)}}break;case 27:t===null&&l&4&&tu(a);case 26:case 5:aa(e,a),t===null&&l&4&&W0(a),l&512&&Cr(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),l&4&&nu(e,a);break;case 13:aa(e,a),l&4&&iu(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sp.bind(null,a),Cp(e,a))));break;case 22:if(l=a.memoizedState!==null||ea,!l){t=t!==null&&t.memoizedState!==null||He,s=ea;var i=He;ea=l,(He=t)&&!i?la(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),ea=s,He=i}break;case 30:break;default:aa(e,a)}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Un(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,tt=!1;function ta(e,t,a){for(a=a.child;a!==null;)su(e,t,a),a=a.sibling}function su(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Jl,a)}catch{}switch(a.tag){case 26:He||qt(a,t),ta(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||qt(a,t);var l=Se,s=tt;Ma(a.type)&&(Se=a.stateNode,tt=!1),ta(e,t,a),Or(a.stateNode),Se=l,tt=s;break;case 5:He||qt(a,t);case 6:if(l=Se,s=tt,Se=null,ta(e,t,a),Se=l,tt=s,Se!==null)if(tt)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(i){ye(a,t,i)}else try{Se.removeChild(a.stateNode)}catch(i){ye(a,t,i)}break;case 18:Se!==null&&(tt?(e=Se,Iu(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Iu(Se,a.stateNode));break;case 4:l=Se,s=tt,Se=a.stateNode.containerInfo,tt=!0,ta(e,t,a),Se=l,tt=s;break;case 0:case 11:case 14:case 15:Na(2,a,t),He||Na(4,a,t),ta(e,t,a);break;case 1:He||(qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&P0(a,t,l)),ta(e,t,a);break;case 21:ta(e,t,a);break;case 22:He=(l=He)||a.memoizedState!==null,ta(e,t,a),He=l;break;default:ta(e,t,a)}}function nu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){ye(t,t.return,a)}}}function iu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){ye(t,t.return,a)}}function If(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new au),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new au),t;default:throw Error(o(435,e.tag))}}function Xs(e,t){var a=If(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var s=np.bind(null,e,l);l.then(s,s)}})}function at(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var s=a[l],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Ma(f.type)){Se=f.stateNode,tt=!1;break e}break;case 5:Se=f.stateNode,tt=!1;break e;case 3:case 4:Se=f.stateNode.containerInfo,tt=!0;break e}f=f.return}if(Se===null)throw Error(o(160));su(i,c,s),Se=null,tt=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)du(t,e),t=t.sibling}var Bt=null;function du(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),lt(e),l&4&&(Na(3,e,e.return),Nr(3,e),Na(5,e,e.return));break;case 1:at(t,e),lt(e),l&512&&(He||a===null||qt(a,a.return)),l&64&&ea&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var s=Bt;if(at(t,e),lt(e),l&512&&(He||a===null||qt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Pl]||i[Xe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(l),s.head.insertBefore(i,s.querySelector("head > title"))),Ke(i,l,a),i[Xe]=e,Ye(i),l=i;break e;case"link":var c=dm("link","href",s).get(l+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}i=s.createElement(l),Ke(i,l,a),s.head.appendChild(i);break;case"meta":if(c=dm("meta","content",s).get(l+(a.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}i=s.createElement(l),Ke(i,l,a),s.head.appendChild(i);break;default:throw Error(o(468,l))}i[Xe]=e,Ye(i),l=i}e.stateNode=l}else om(s,e.type,e.stateNode);else e.stateNode=im(s,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?om(s,e.type,e.stateNode):im(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ld(e,e.memoizedProps,a.memoizedProps)}break;case 27:at(t,e),lt(e),l&512&&(He||a===null||qt(a,a.return)),a!==null&&l&4&&ld(e,e.memoizedProps,a.memoizedProps);break;case 5:if(at(t,e),lt(e),l&512&&(He||a===null||qt(a,a.return)),e.flags&32){s=e.stateNode;try{cl(s,"")}catch(Z){ye(e,e.return,Z)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,ld(e,s,a!==null?a.memoizedProps:s)),l&1024&&(nd=!0);break;case 6:if(at(t,e),lt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Z){ye(e,e.return,Z)}}break;case 3:if(sn=null,s=Bt,Bt=ln(t.containerInfo),at(t,e),Bt=s,lt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(Z){ye(e,e.return,Z)}nd&&(nd=!1,ou(e));break;case 4:l=Bt,Bt=ln(e.stateNode.containerInfo),at(t,e),lt(e),Bt=l;break;case 12:at(t,e),lt(e);break;case 31:at(t,e),lt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xs(e,l)));break;case 13:at(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vs=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xs(e,l)));break;case 22:s=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,A=ea,R=He;if(ea=A||s,He=R||v,at(t,e),He=R,ea=A,lt(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||v||ea||He||el(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,s)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=v.stateNode;var U=v.memoizedProps.style,E=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(Z){ye(v,v.return,Z)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=s?"":v.memoizedProps}catch(Z){ye(v,v.return,Z)}}}else if(t.tag===18){if(a===null){v=t;try{var B=v.stateNode;s?Pu(B,!0):Pu(v.stateNode,!1)}catch(Z){ye(v,v.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Xs(e,a))));break;case 19:at(t,e),lt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xs(e,l)));break;case 30:break;case 21:break;default:at(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(eu(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var s=a.stateNode,i=rd(e);Qs(e,i,s);break;case 5:var c=a.stateNode;a.flags&32&&(cl(c,""),a.flags&=-33);var f=rd(e);Qs(e,f,c);break;case 3:case 4:var v=a.stateNode.containerInfo,A=rd(e);sd(e,A,v);break;default:throw Error(o(161))}}catch(R){ye(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ou(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ou(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lu(e,t.alternate,t),t=t.sibling}function el(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Na(4,t,t.return),el(t);break;case 1:qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&P0(t,t.return,a),el(t);break;case 27:Or(t.stateNode);case 26:case 5:qt(t,t.return),el(t);break;case 22:t.memoizedState===null&&el(t);break;case 30:el(t);break;default:el(t)}e=e.sibling}}function la(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:la(s,i,a),Nr(4,i);break;case 1:if(la(s,i,a),l=i,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(A){ye(l,l.return,A)}if(l=i,s=l.updateQueue,s!==null){var f=l.stateNode;try{var v=s.shared.hiddenCallbacks;if(v!==null)for(s.shared.hiddenCallbacks=null,s=0;s<v.length;s++)qc(v[s],f)}catch(A){ye(l,l.return,A)}}a&&c&64&&I0(i),Cr(i,i.return);break;case 27:tu(i);case 26:case 5:la(s,i,a),a&&l===null&&c&4&&W0(i),Cr(i,i.return);break;case 12:la(s,i,a);break;case 31:la(s,i,a),a&&c&4&&nu(s,i);break;case 13:la(s,i,a),a&&c&4&&iu(s,i);break;case 22:i.memoizedState===null&&la(s,i,a),Cr(i,i.return);break;case 30:break;default:la(s,i,a)}t=t.sibling}}function id(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ur(a))}function dd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ur(e))}function Rt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cu(e,t,a,l),t=t.sibling}function cu(e,t,a,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Rt(e,t,a,l),s&2048&&Nr(9,t);break;case 1:Rt(e,t,a,l);break;case 3:Rt(e,t,a,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ur(e)));break;case 12:if(s&2048){Rt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ye(t,t.return,v)}}else Rt(e,t,a,l);break;case 31:Rt(e,t,a,l);break;case 13:Rt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Rt(e,t,a,l):Tr(e,t):i._visibility&2?Rt(e,t,a,l):(i._visibility|=2,zl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&id(c,t);break;case 24:Rt(e,t,a,l),s&2048&&dd(t.alternate,t);break;default:Rt(e,t,a,l)}}function zl(e,t,a,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,f=a,v=l,A=c.flags;switch(c.tag){case 0:case 11:case 15:zl(i,c,f,v,s),Nr(8,c);break;case 23:break;case 22:var R=c.stateNode;c.memoizedState!==null?R._visibility&2?zl(i,c,f,v,s):Tr(i,c):(R._visibility|=2,zl(i,c,f,v,s)),s&&A&2048&&id(c.alternate,c);break;case 24:zl(i,c,f,v,s),s&&A&2048&&dd(c.alternate,c);break;default:zl(i,c,f,v,s)}t=t.sibling}}function Tr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,s=l.flags;switch(l.tag){case 22:Tr(a,l),s&2048&&id(l.alternate,l);break;case 24:Tr(a,l),s&2048&&dd(l.alternate,l);break;default:Tr(a,l)}t=t.sibling}}var Sr=8192;function Ml(e,t,a){if(e.subtreeFlags&Sr)for(e=e.child;e!==null;)uu(e,t,a),e=e.sibling}function uu(e,t,a){switch(e.tag){case 26:Ml(e,t,a),e.flags&Sr&&e.memoizedState!==null&&Lp(a,Bt,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,a);break;case 3:case 4:var l=Bt;Bt=ln(e.stateNode.containerInfo),Ml(e,t,a),Bt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Sr,Sr=16777216,Ml(e,t,a),Sr=l):Ml(e,t,a));break;default:Ml(e,t,a)}}function mu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ar(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,fu(l,e)}mu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xu(e),e=e.sibling}function xu(e){switch(e.tag){case 0:case 11:case 15:Ar(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Ar(e);break;case 12:Ar(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gs(e)):Ar(e);break;default:Ar(e)}}function Gs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,fu(l,e)}mu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Na(8,t,t.return),Gs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Gs(t));break;default:Gs(t)}e=e.sibling}}function fu(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:Na(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ur(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var s=l.sibling,i=l.return;if(ru(l),l===a){Qe=null;break e}if(s!==null){s.return=i,Qe=s;break e}Qe=i}}}var Pf={getCacheForType:function(e){var t=Ve(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ve(Ue).controller.signal}},Wf=typeof WeakMap=="function"?WeakMap:Map,pe=0,je=null,se=null,ie=0,he=0,ft=null,Ca=!1,Bl=!1,od=!1,ra=0,Me=0,Ta=0,tl=0,cd=0,pt=0,Rl=0,Er=null,rt=null,ud=!1,Vs=0,pu=0,Zs=1/0,Ks=null,Sa=null,qe=0,Aa=null,Ol=null,sa=0,md=0,xd=null,gu=null,zr=0,fd=null;function gt(){return(pe&2)!==0&&ie!==0?ie&-ie:M.T!==null?bd():Bo()}function hu(){if(pt===0)if((ie&536870912)===0||ce){var e=ts;ts<<=1,(ts&3932160)===0&&(ts=262144),pt=e}else pt=536870912;return e=mt.current,e!==null&&(e.flags|=32),pt}function st(e,t,a){(e===je&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Ea(e,ie,pt,!1)),Il(e,a),((pe&2)===0||e!==je)&&(e===je&&((pe&2)===0&&(tl|=a),Me===4&&Ea(e,ie,pt,!1)),Yt(e))}function yu(e,t,a){if((pe&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||$l(e,t),s=l?ap(e,t):gd(e,t,!0),i=l;do{if(s===0){Bl&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!ep(a)){s=gd(e,t,!1),i=!1;continue}if(s===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;s=Er;var v=f.current.memoizedState.isDehydrated;if(v&&(Dl(f,c).flags|=256),c=gd(f,c,!1),c!==2){if(od&&!v){f.errorRecoveryDisabledLanes|=i,tl|=i,s=4;break e}i=rt,rt=s,i!==null&&(rt===null?rt=i:rt.push.apply(rt,i))}s=c}if(i=!1,s!==2)continue}}if(s===1){Dl(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,i=s,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,pt,!Ca);break e;case 2:rt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=Vs+300-it(),10<s)){if(Ea(l,t,pt,!Ca),ls(l,0,!0)!==0)break e;sa=t,l.timeoutHandle=Ju(vu.bind(null,l,a,rt,Ks,ud,t,pt,tl,Rl,Ca,i,"Throttled",-0,0),s);break e}vu(l,a,rt,Ks,ud,t,pt,tl,Rl,Ca,i,null,-0,0)}}break}while(!0);Yt(e)}function vu(e,t,a,l,s,i,c,f,v,A,R,U,E,B){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},uu(t,i,U);var Z=(i&62914560)===i?Vs-it():(i&4194048)===i?pu-it():0;if(Z=_p(U,Z),Z!==null){sa=i,e.cancelPendingCommit=Z(Su.bind(null,e,t,i,a,l,s,c,f,v,R,U,null,E,B)),Ea(e,i,c,!A);return}}Su(e,t,i,a,l,s,c,f,v)}function ep(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var s=a[l],i=s.getSnapshot;s=s.value;try{if(!ct(i(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~cd,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var i=31-ot(s),c=1<<i;l[i]=-1,s&=~c}a!==0&&Eo(e,a,t)}function Fs(){return(pe&6)===0?(Mr(0),!1):!0}function pd(){if(se!==null){if(he===0)var e=se.return;else e=se,Ft=Za=null,Mi(e),Cl=null,xr=0,e=se;for(;e!==null;)$0(e.alternate,e),e=e.return;se=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,bp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,pd(),je=e,se=a=Zt(e.current,null),ie=t,he=0,ft=null,Ca=!1,Bl=$l(e,t),od=!1,Rl=pt=cd=tl=Ta=Me=0,rt=Er=null,ud=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-ot(l),i=1<<s;t|=e[s],l&=~i}return ra=t,ps(),a}function bu(e,t){ae=null,M.H=kr,t===Nl||t===js?(t=Uc(),he=3):t===vi?(t=Uc(),he=4):he=t===Ki?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,se===null&&(Me=1,Ls(e,jt(t,e.current)))}function ku(){var e=mt.current;return e===null?!0:(ie&4194048)===ie?St===null:(ie&62914560)===ie||(ie&536870912)!==0?e===St:!1}function wu(){var e=M.H;return M.H=kr,e===null?kr:e}function ju(){var e=M.A;return M.A=Pf,e}function Js(){Me=4,Ca||(ie&4194048)!==ie&&mt.current!==null||(Bl=!0),(Ta&134217727)===0&&(tl&134217727)===0||je===null||Ea(je,ie,pt,!1)}function gd(e,t,a){var l=pe;pe|=2;var s=wu(),i=ju();(je!==e||ie!==t)&&(Ks=null,Dl(e,t)),t=!1;var c=Me;e:do try{if(he!==0&&se!==null){var f=se,v=ft;switch(he){case 8:pd(),c=6;break e;case 3:case 2:case 9:case 6:mt.current===null&&(t=!0);var A=he;if(he=0,ft=null,Ul(e,f,v,A),a&&Bl){c=0;break e}break;default:A=he,he=0,ft=null,Ul(e,f,v,A)}}tp(),c=Me;break}catch(R){bu(e,R)}while(!0);return t&&e.shellSuspendCounter++,Ft=Za=null,pe=l,M.H=s,M.A=i,se===null&&(je=null,ie=0,ps()),c}function tp(){for(;se!==null;)Nu(se)}function ap(e,t){var a=pe;pe|=2;var l=wu(),s=ju();je!==e||ie!==t?(Ks=null,Zs=it()+500,Dl(e,t)):Bl=$l(e,t);e:do try{if(he!==0&&se!==null){t=se;var i=ft;t:switch(he){case 1:he=0,ft=null,Ul(e,t,i,1);break;case 2:case 9:if(Oc(i)){he=0,ft=null,Cu(t);break}t=function(){he!==2&&he!==9||je!==e||(he=7),Yt(e)},i.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:Oc(i)?(he=0,ft=null,Cu(t)):(he=0,ft=null,Ul(e,t,i,7));break;case 5:var c=null;switch(se.tag){case 26:c=se.memoizedState;case 5:case 27:var f=se;if(c?cm(c):f.stateNode.complete){he=0,ft=null;var v=f.sibling;if(v!==null)se=v;else{var A=f.return;A!==null?(se=A,$s(A)):se=null}break t}}he=0,ft=null,Ul(e,t,i,5);break;case 6:he=0,ft=null,Ul(e,t,i,6);break;case 8:pd(),Me=6;break e;default:throw Error(o(462))}}lp();break}catch(R){bu(e,R)}while(!0);return Ft=Za=null,M.H=l,M.A=s,pe=a,se!==null?0:(je=null,ie=0,ps(),Me)}function lp(){for(;se!==null&&!Cx();)Nu(se)}function Nu(e){var t=F0(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?$s(e):se=t}function Cu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Q0(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Q0(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:Mi(t);default:$0(a,t),t=se=jc(t,ra),t=F0(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?$s(e):se=t}function Ul(e,t,a,l){Ft=Za=null,Mi(t),Cl=null,xr=0;var s=t.return;try{if(Vf(e,s,t,a,ie)){Me=1,Ls(e,jt(a,e.current)),se=null;return}}catch(i){if(s!==null)throw se=s,i;Me=1,Ls(e,jt(a,e.current)),se=null;return}t.flags&32768?(ce||l===1?e=!0:Bl||(ie&536870912)!==0?e=!1:(Ca=e=!0,(l===2||l===9||l===3||l===6)&&(l=mt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Tu(t,e)):$s(t)}function $s(e){var t=e;do{if((t.flags&32768)!==0){Tu(t,Ca);return}e=t.return;var a=Ff(t.alternate,t,ra);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Me===0&&(Me=5)}function Tu(e,t){do{var a=Jf(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Me=6,se=null}function Su(e,t,a,l,s,i,c,f,v){e.cancelPendingCommit=null;do Is();while(qe!==0);if((pe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=ri,Dx(e,a,i,c,f,v),e===je&&(se=je=null,ie=0),Ol=t,Aa=e,sa=a,md=i,xd=s,gu=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ip(Wr,function(){return Bu(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,s=Q.p,Q.p=2,c=pe,pe|=4;try{$f(e,t,a)}finally{pe=c,Q.p=s,M.T=l}}qe=1,Au(),Eu(),zu()}}function Au(){if(qe===1){qe=0;var e=Aa,t=Ol,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=Q.p;Q.p=2;var s=pe;pe|=4;try{du(t,e);var i=Ad,c=fc(e.containerInfo),f=i.focusedElem,v=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&xc(f.ownerDocument.documentElement,f)){if(v!==null&&Wn(f)){var A=v.start,R=v.end;if(R===void 0&&(R=A),"selectionStart"in f)f.selectionStart=A,f.selectionEnd=Math.min(R,f.value.length);else{var U=f.ownerDocument||document,E=U&&U.defaultView||window;if(E.getSelection){var B=E.getSelection(),Z=f.textContent.length,I=Math.min(v.start,Z),ke=v.end===void 0?I:Math.min(v.end,Z);!B.extend&&I>ke&&(c=ke,ke=I,I=c);var N=mc(f,I),k=mc(f,ke);if(N&&k&&(B.rangeCount!==1||B.anchorNode!==N.node||B.anchorOffset!==N.offset||B.focusNode!==k.node||B.focusOffset!==k.offset)){var S=U.createRange();S.setStart(N.node,N.offset),B.removeAllRanges(),I>ke?(B.addRange(S),B.extend(k.node,k.offset)):(S.setEnd(k.node,k.offset),B.addRange(S))}}}}for(U=[],B=f;B=B.parentNode;)B.nodeType===1&&U.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var O=U[f];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}cn=!!Sd,Ad=Sd=null}finally{pe=s,Q.p=l,M.T=a}}e.current=t,qe=2}}function Eu(){if(qe===2){qe=0;var e=Aa,t=Ol,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=Q.p;Q.p=2;var s=pe;pe|=4;try{lu(e,t.alternate,t)}finally{pe=s,Q.p=l,M.T=a}}qe=3}}function zu(){if(qe===4||qe===3){qe=0,Tx();var e=Aa,t=Ol,a=sa,l=gu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,Ol=Aa=null,Mu(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Sa=null),On(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,s=Q.p,Q.p=2,M.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];i(f.value,{componentStack:f.stack})}}finally{M.T=t,Q.p=s}}(sa&3)!==0&&Is(),Yt(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===fd?zr++:(zr=0,fd=e):zr=0,Mr(0)}}function Mu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ur(t)))}function Is(){return Au(),Eu(),zu(),Bu()}function Bu(){if(qe!==5)return!1;var e=Aa,t=md;md=0;var a=On(sa),l=M.T,s=Q.p;try{Q.p=32>a?32:a,M.T=null,a=xd,xd=null;var i=Aa,c=sa;if(qe=0,Ol=Aa=null,sa=0,(pe&6)!==0)throw Error(o(331));var f=pe;if(pe|=4,xu(i.current),cu(i,i.current,c,a),pe=f,Mr(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Jl,i)}catch{}return!0}finally{Q.p=s,M.T=l,Mu(e,t)}}function Ru(e,t,a){t=jt(a,t),t=Zi(e.stateNode,t,2),e=ka(e,t,2),e!==null&&(Il(e,2),Yt(e))}function ye(e,t,a){if(e.tag===3)Ru(e,e,a);else for(;t!==null;){if(t.tag===3){Ru(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sa===null||!Sa.has(l))){e=jt(a,e),a=O0(2),l=ka(t,a,2),l!==null&&(D0(a,l,t,e),Il(l,2),Yt(l));break}}t=t.return}}function hd(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Wf;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(a)||(od=!0,s.add(a),e=rp.bind(null,e,t,a),t.then(e,e))}function rp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(ie&a)===a&&(Me===4||Me===3&&(ie&62914560)===ie&&300>it()-Vs?(pe&2)===0&&Dl(e,0):cd|=a,Rl===ie&&(Rl=0)),Yt(e)}function Ou(e,t){t===0&&(t=Ao()),e=Xa(e,t),e!==null&&(Il(e,t),Yt(e))}function sp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ou(e,a)}function np(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Ou(e,a)}function ip(e,t){return zn(e,t)}var Ps=null,Ll=null,yd=!1,Ws=!1,vd=!1,za=0;function Yt(e){e!==Ll&&e.next===null&&(Ll===null?Ps=Ll=e:Ll=Ll.next=e),Ws=!0,yd||(yd=!0,op())}function Mr(e,t){if(!vd&&Ws){vd=!0;do for(var a=!1,l=Ps;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var i=0;else{var c=l.suspendedLanes,f=l.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=s&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,_u(l,i))}else i=ie,i=ls(l,l===je?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||$l(l,i)||(a=!0,_u(l,i));l=l.next}while(a);vd=!1}}function dp(){Du()}function Du(){Ws=yd=!1;var e=0;za!==0&&vp()&&(e=za);for(var t=it(),a=null,l=Ps;l!==null;){var s=l.next,i=Uu(l,t);i===0?(l.next=null,a===null?Ps=s:a.next=s,s===null&&(Ll=a)):(a=l,(e!==0||(i&3)!==0)&&(Ws=!0)),l=s}qe!==0&&qe!==5||Mr(e),za!==0&&(za=0)}function Uu(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-ot(i),f=1<<c,v=s[c];v===-1?((f&a)===0||(f&l)!==0)&&(s[c]=Ox(f,t)):v<=t&&(e.expiredLanes|=f),i&=~f}if(t=je,a=ie,a=ls(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Mn(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$l(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Mn(l),On(a)){case 2:case 8:a=To;break;case 32:a=Wr;break;case 268435456:a=So;break;default:a=Wr}return l=Lu.bind(null,e),a=zn(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Mn(l),e.callbackPriority=2,e.callbackNode=null,2}function Lu(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Is()&&e.callbackNode!==a)return null;var l=ie;return l=ls(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(yu(e,l,t),Uu(e,it()),e.callbackNode!=null&&e.callbackNode===a?Lu.bind(null,e):null)}function _u(e,t){if(Is())return null;yu(e,t,!0)}function op(){kp(function(){(pe&6)!==0?zn(Co,dp):Du()})}function bd(){if(za===0){var e=wl;e===0&&(e=es,es<<=1,(es&261888)===0&&(es=256)),za=e}return za}function Hu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:is(""+e)}function qu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function cp(e,t,a,l,s){if(t==="submit"&&a&&a.stateNode===s){var i=Hu((s[We]||null).action),c=l.submitter;c&&(t=(t=c[We]||null)?Hu(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new us("action","action",null,l,s);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(za!==0){var v=c?qu(s,c):new FormData(s);qi(a,{pending:!0,data:v,method:s.method,action:i},null,v)}}else typeof i=="function"&&(f.preventDefault(),v=c?qu(s,c):new FormData(s),qi(a,{pending:!0,data:v,method:s.method,action:i},i,v))},currentTarget:s}]})}}for(var kd=0;kd<li.length;kd++){var wd=li[kd],up=wd.toLowerCase(),mp=wd[0].toUpperCase()+wd.slice(1);Mt(up,"on"+mp)}Mt(hc,"onAnimationEnd"),Mt(yc,"onAnimationIteration"),Mt(vc,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Af,"onTransitionRun"),Mt(Ef,"onTransitionStart"),Mt(zf,"onTransitionCancel"),Mt(bc,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Br));function Yu(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],s=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var f=l[c],v=f.instance,A=f.currentTarget;if(f=f.listener,v!==i&&s.isPropagationStopped())break e;i=f,s.currentTarget=A;try{i(s)}catch(R){fs(R)}s.currentTarget=null,i=v}else for(c=0;c<l.length;c++){if(f=l[c],v=f.instance,A=f.currentTarget,f=f.listener,v!==i&&s.isPropagationStopped())break e;i=f,s.currentTarget=A;try{i(s)}catch(R){fs(R)}s.currentTarget=null,i=v}}}}function ne(e,t){var a=t[Dn];a===void 0&&(a=t[Dn]=new Set);var l=e+"__bubble";a.has(l)||(Qu(t,e,2,!1),a.add(l))}function jd(e,t,a){var l=0;t&&(l|=4),Qu(a,e,l,t)}var en="_reactListening"+Math.random().toString(36).slice(2);function Nd(e){if(!e[en]){e[en]=!0,Do.forEach(function(a){a!=="selectionchange"&&(xp.has(a)||jd(a,!1,e),jd(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[en]||(t[en]=!0,jd("selectionchange",!1,t))}}function Qu(e,t,a,l){switch(hm(t)){case 2:var s=Yp;break;case 8:s=Qp;break;default:s=Hd}a=s.bind(null,t,a,e),s=void 0,!Gn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function Cd(e,t,a,l,s){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var f=l.stateNode.containerInfo;if(f===s)break;if(c===4)for(c=l.return;c!==null;){var v=c.tag;if((v===3||v===4)&&c.stateNode.containerInfo===s)return;c=c.return}for(;f!==null;){if(c=sl(f),c===null)return;if(v=c.tag,v===5||v===6||v===26||v===27){l=i=c;continue e}f=f.parentNode}}l=l.return}Ko(function(){var A=i,R=Qn(a),U=[];e:{var E=kc.get(e);if(E!==void 0){var B=us,Z=e;switch(e){case"keypress":if(os(a)===0)break e;case"keydown":case"keyup":B=sf;break;case"focusin":Z="focus",B=Fn;break;case"focusout":Z="blur",B=Fn;break;case"beforeblur":case"afterblur":B=Fn;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=$o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=of;break;case hc:case yc:case vc:B=$x;break;case bc:B=uf;break;case"scroll":case"scrollend":B=Vx;break;case"wheel":B=xf;break;case"copy":case"cut":case"paste":B=Px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Po;break;case"toggle":case"beforetoggle":B=pf}var I=(t&4)!==0,ke=!I&&(e==="scroll"||e==="scrollend"),N=I?E!==null?E+"Capture":null:E;I=[];for(var k=A,S;k!==null;){var O=k;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||N===null||(O=er(k,N),O!=null&&I.push(Rr(k,O,S))),ke)break;k=k.return}0<I.length&&(E=new B(E,Z,null,a,R),U.push({event:E,listeners:I}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",E&&a!==Yn&&(Z=a.relatedTarget||a.fromElement)&&(sl(Z)||Z[rl]))break e;if((B||E)&&(E=R.window===R?R:(E=R.ownerDocument)?E.defaultView||E.parentWindow:window,B?(Z=a.relatedTarget||a.toElement,B=A,Z=Z?sl(Z):null,Z!==null&&(ke=x(Z),I=Z.tag,Z!==ke||I!==5&&I!==27&&I!==6)&&(Z=null)):(B=null,Z=A),B!==Z)){if(I=$o,O="onMouseLeave",N="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(I=Po,O="onPointerLeave",N="onPointerEnter",k="pointer"),ke=B==null?E:Wl(B),S=Z==null?E:Wl(Z),E=new I(O,k+"leave",B,a,R),E.target=ke,E.relatedTarget=S,O=null,sl(R)===A&&(I=new I(N,k+"enter",Z,a,R),I.target=S,I.relatedTarget=ke,O=I),ke=O,B&&Z)t:{for(I=fp,N=B,k=Z,S=0,O=N;O;O=I(O))S++;O=0;for(var J=k;J;J=I(J))O++;for(;0<S-O;)N=I(N),S--;for(;0<O-S;)k=I(k),O--;for(;S--;){if(N===k||k!==null&&N===k.alternate){I=N;break t}N=I(N),k=I(k)}I=null}else I=null;B!==null&&Xu(U,E,B,I,!1),Z!==null&&ke!==null&&Xu(U,ke,Z,I,!0)}}e:{if(E=A?Wl(A):window,B=E.nodeName&&E.nodeName.toLowerCase(),B==="select"||B==="input"&&E.type==="file")var xe=nc;else if(rc(E))if(ic)xe=Cf;else{xe=jf;var F=wf}else B=E.nodeName,!B||B.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?A&&qn(A.elementType)&&(xe=nc):xe=Nf;if(xe&&(xe=xe(e,A))){sc(U,xe,a,R);break e}F&&F(e,E,A),e==="focusout"&&A&&E.type==="number"&&A.memoizedProps.value!=null&&Hn(E,"number",E.value)}switch(F=A?Wl(A):window,e){case"focusin":(rc(F)||F.contentEditable==="true")&&(fl=F,ei=A,dr=null);break;case"focusout":dr=ei=fl=null;break;case"mousedown":ti=!0;break;case"contextmenu":case"mouseup":case"dragend":ti=!1,pc(U,a,R);break;case"selectionchange":if(Sf)break;case"keydown":case"keyup":pc(U,a,R)}var le;if($n)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else xl?ac(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Wo&&a.locale!=="ko"&&(xl||de!=="onCompositionStart"?de==="onCompositionEnd"&&xl&&(le=Fo()):(fa=R,Vn="value"in fa?fa.value:fa.textContent,xl=!0)),F=tn(A,de),0<F.length&&(de=new Io(de,e,null,a,R),U.push({event:de,listeners:F}),le?de.data=le:(le=lc(a),le!==null&&(de.data=le)))),(le=hf?yf(e,a):vf(e,a))&&(de=tn(A,"onBeforeInput"),0<de.length&&(F=new Io("onBeforeInput","beforeinput",null,a,R),U.push({event:F,listeners:de}),F.data=le)),cp(U,e,A,a,R)}Yu(U,t)})}function Rr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function tn(e,t){for(var a=t+"Capture",l=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=er(e,a),s!=null&&l.unshift(Rr(e,s,i)),s=er(e,t),s!=null&&l.push(Rr(e,s,i))),e.tag===3)return l;e=e.return}return[]}function fp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xu(e,t,a,l,s){for(var i=t._reactName,c=[];a!==null&&a!==l;){var f=a,v=f.alternate,A=f.stateNode;if(f=f.tag,v!==null&&v===l)break;f!==5&&f!==26&&f!==27||A===null||(v=A,s?(A=er(a,i),A!=null&&c.unshift(Rr(a,A,v))):s||(A=er(a,i),A!=null&&c.push(Rr(a,A,v)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var pp=/\r\n?/g,gp=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(gp,"")}function Vu(e,t){return t=Gu(t),Gu(e)===t}function be(e,t,a,l,s,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||cl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&cl(e,""+l);break;case"className":ss(e,"class",l);break;case"tabIndex":ss(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ss(e,a,l);break;case"style":Vo(e,l,i);break;case"data":if(t!=="object"){ss(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=is(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&be(e,t,"name",s.name,s,null),be(e,t,"formEncType",s.formEncType,s,null),be(e,t,"formMethod",s.formMethod,s,null),be(e,t,"formTarget",s.formTarget,s,null)):(be(e,t,"encType",s.encType,s,null),be(e,t,"method",s.method,s,null),be(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=is(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=is(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),rs(e,"popover",l);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":rs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xx.get(a)||a,rs(e,a,l))}}function Td(e,t,a,l,s,i){switch(a){case"style":Vo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?cl(e,l):(typeof l=="number"||typeof l=="bigint")&&cl(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),i=e[We]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,s),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,s);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):rs(e,a,l)}}}function Ke(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,s=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:be(e,t,i,c,a,null)}}s&&be(e,t,"srcSet",a.srcSet,a,null),l&&be(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var f=i=c=s=null,v=null,A=null;for(l in a)if(a.hasOwnProperty(l)){var R=a[l];if(R!=null)switch(l){case"name":s=R;break;case"type":c=R;break;case"checked":v=R;break;case"defaultChecked":A=R;break;case"value":i=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:be(e,t,l,R,a,null)}}Yo(e,i,f,v,A,c,s,!1);return;case"select":ne("invalid",e),l=c=i=null;for(s in a)if(a.hasOwnProperty(s)&&(f=a[s],f!=null))switch(s){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":l=f;default:be(e,t,s,f,a,null)}t=i,a=c,e.multiple=!!l,t!=null?ol(e,!!l,t,!1):a!=null&&ol(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=s=l=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":l=f;break;case"defaultValue":s=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:be(e,t,c,f,a,null)}Xo(e,l,s,i);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(l=a[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:be(e,t,v,l,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<Br.length;l++)ne(Br[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(l=a[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:be(e,t,A,l,a,null)}return;default:if(qn(t)){for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!==void 0&&Td(e,t,R,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&be(e,t,f,l,a,null))}function hp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,c=null,f=null,v=null,A=null,R=null;for(B in a){var U=a[B];if(a.hasOwnProperty(B)&&U!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":v=U;default:l.hasOwnProperty(B)||be(e,t,B,null,l,U)}}for(var E in l){var B=l[E];if(U=a[E],l.hasOwnProperty(E)&&(B!=null||U!=null))switch(E){case"type":i=B;break;case"name":s=B;break;case"checked":A=B;break;case"defaultChecked":R=B;break;case"value":c=B;break;case"defaultValue":f=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==U&&be(e,t,E,B,l,U)}}_n(e,c,f,v,A,R,i,s);return;case"select":B=c=f=E=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":B=v;default:l.hasOwnProperty(i)||be(e,t,i,null,l,v)}for(s in l)if(i=l[s],v=a[s],l.hasOwnProperty(s)&&(i!=null||v!=null))switch(s){case"value":E=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==v&&be(e,t,s,i,l,v)}t=f,a=c,l=B,E!=null?ol(e,!!a,E,!1):!!l!=!!a&&(t!=null?ol(e,!!a,t,!0):ol(e,!!a,a?[]:"",!1));return;case"textarea":B=E=null;for(f in a)if(s=a[f],a.hasOwnProperty(f)&&s!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:be(e,t,f,null,l,s)}for(c in l)if(s=l[c],i=a[c],l.hasOwnProperty(c)&&(s!=null||i!=null))switch(c){case"value":E=s;break;case"defaultValue":B=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==i&&be(e,t,c,s,l,i)}Qo(e,E,B);return;case"option":for(var Z in a)if(E=a[Z],a.hasOwnProperty(Z)&&E!=null&&!l.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:be(e,t,Z,null,l,E)}for(v in l)if(E=l[v],B=a[v],l.hasOwnProperty(v)&&E!==B&&(E!=null||B!=null))switch(v){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:be(e,t,v,E,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in a)E=a[I],a.hasOwnProperty(I)&&E!=null&&!l.hasOwnProperty(I)&&be(e,t,I,null,l,E);for(A in l)if(E=l[A],B=a[A],l.hasOwnProperty(A)&&E!==B&&(E!=null||B!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:be(e,t,A,E,l,B)}return;default:if(qn(t)){for(var ke in a)E=a[ke],a.hasOwnProperty(ke)&&E!==void 0&&!l.hasOwnProperty(ke)&&Td(e,t,ke,void 0,l,E);for(R in l)E=l[R],B=a[R],!l.hasOwnProperty(R)||E===B||E===void 0&&B===void 0||Td(e,t,R,E,l,B);return}}for(var N in a)E=a[N],a.hasOwnProperty(N)&&E!=null&&!l.hasOwnProperty(N)&&be(e,t,N,null,l,E);for(U in l)E=l[U],B=a[U],!l.hasOwnProperty(U)||E===B||E==null&&B==null||be(e,t,U,E,l,B)}function Zu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var s=a[l],i=s.transferSize,c=s.initiatorType,f=s.duration;if(i&&f&&Zu(c)){for(c=0,f=s.responseEnd,l+=1;l<a.length;l++){var v=a[l],A=v.startTime;if(A>f)break;var R=v.transferSize,U=v.initiatorType;R&&Zu(U)&&(v=v.responseEnd,c+=R*(v<f?1:(f-A)/(v-A)))}if(--l,t+=8*(i+c)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sd=null,Ad=null;function an(e){return e.nodeType===9?e:e.ownerDocument}function Ku(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fu(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ed(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zd=null;function vp(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var Ju=typeof setTimeout=="function"?setTimeout:void 0,bp=typeof clearTimeout=="function"?clearTimeout:void 0,$u=typeof Promise=="function"?Promise:void 0,kp=typeof queueMicrotask=="function"?queueMicrotask:typeof $u<"u"?function(e){return $u.resolve(null).then(e).catch(wp)}:Ju;function wp(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function Iu(e,t){var a=t,l=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(s),Yl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Or(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Or(a);for(var i=a.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[Pl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&Or(e.ownerDocument.body);a=s}while(a);Yl(t)}function Pu(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Md(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Md(a),Un(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jp(e,t,a,l){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function Np(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=At(e.nextSibling),e===null))return null;return e}function Wu(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function Bd(e){return e.data==="$?"||e.data==="$~"}function Rd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Od=null;function em(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return At(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function tm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function am(e,t,a){switch(t=an(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Or(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Un(e)}var Et=new Map,lm=new Set;function ln(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=Q.d;Q.d={f:Tp,r:Sp,D:Ap,C:Ep,L:zp,m:Mp,X:Rp,S:Bp,M:Op};function Tp(){var e=na.f(),t=Fs();return e||t}function Sp(e){var t=nl(e);t!==null&&t.tag===5&&t.type==="form"?b0(t):na.r(e)}var _l=typeof document>"u"?null:document;function rm(e,t,a){var l=_l;if(l&&typeof t=="string"&&t){var s=kt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),lm.has(s)||(lm.add(s),e={rel:e,crossOrigin:a,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),Ke(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Ap(e){na.D(e),rm("dns-prefetch",e,null)}function Ep(e,t){na.C(e,t),rm("preconnect",e,t)}function zp(e,t,a){na.L(e,t,a);var l=_l;if(l&&e&&t){var s='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+kt(a.imageSizes)+'"]')):s+='[href="'+kt(e)+'"]';var i=s;switch(t){case"style":i=Hl(e);break;case"script":i=ql(e)}Et.has(i)||(e=C({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Et.set(i,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(Dr(i))||t==="script"&&l.querySelector(Ur(i))||(t=l.createElement("link"),Ke(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Mp(e,t){na.m(e,t);var a=_l;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(e)+'"]',i=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ql(e)}if(!Et.has(i)&&(e=C({rel:"modulepreload",href:e},t),Et.set(i,e),a.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ur(i)))return}l=a.createElement("link"),Ke(l,"link",e),Ye(l),a.head.appendChild(l)}}}function Bp(e,t,a){na.S(e,t,a);var l=_l;if(l&&e){var s=il(l).hoistableStyles,i=Hl(e);t=t||"default";var c=s.get(i);if(!c){var f={loading:0,preload:null};if(c=l.querySelector(Dr(i)))f.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Et.get(i))&&Dd(e,a);var v=c=l.createElement("link");Ye(v),Ke(v,"link",e),v._p=new Promise(function(A,R){v.onload=A,v.onerror=R}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,rn(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:f},s.set(i,c)}}}function Rp(e,t){na.X(e,t);var a=_l;if(a&&e){var l=il(a).hoistableScripts,s=ql(e),i=l.get(s);i||(i=a.querySelector(Ur(s)),i||(e=C({src:e,async:!0},t),(t=Et.get(s))&&Ud(e,t),i=a.createElement("script"),Ye(i),Ke(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(s,i))}}function Op(e,t){na.M(e,t);var a=_l;if(a&&e){var l=il(a).hoistableScripts,s=ql(e),i=l.get(s);i||(i=a.querySelector(Ur(s)),i||(e=C({src:e,async:!0,type:"module"},t),(t=Et.get(s))&&Ud(e,t),i=a.createElement("script"),Ye(i),Ke(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(s,i))}}function sm(e,t,a,l){var s=(s=re.current)?ln(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Hl(a.href),a=il(s).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hl(a.href);var i=il(s).hoistableStyles,c=i.get(e);if(c||(s=s.ownerDocument||s,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=s.querySelector(Dr(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Et.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Et.set(e,a),i||Dp(s,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ql(a),a=il(s).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Hl(e){return'href="'+kt(e)+'"'}function Dr(e){return'link[rel="stylesheet"]['+e+"]"}function nm(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Dp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ke(t,"link",a),Ye(t),e.head.appendChild(t))}function ql(e){return'[src="'+kt(e)+'"]'}function Ur(e){return"script[async]"+e}function im(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(l)return t.instance=l,Ye(l),l;var s=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Ke(l,"style",s),rn(l,a.precedence,e),t.instance=l;case"stylesheet":s=Hl(a.href);var i=e.querySelector(Dr(s));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;l=nm(a),(s=Et.get(s))&&Dd(l,s),i=(e.ownerDocument||e).createElement("link"),Ye(i);var c=i;return c._p=new Promise(function(f,v){c.onload=f,c.onerror=v}),Ke(i,"link",l),t.state.loading|=4,rn(i,a.precedence,e),t.instance=i;case"script":return i=ql(a.src),(s=e.querySelector(Ur(i)))?(t.instance=s,Ye(s),s):(l=a,(s=Et.get(i))&&(l=C({},a),Ud(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ye(s),Ke(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,rn(l,a.precedence,e));return t.instance}function rn(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,i=s,c=0;c<l.length;c++){var f=l[c];if(f.dataset.precedence===t)i=f;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Dd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ud(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var sn=null;function dm(e,t,a){if(sn===null){var l=new Map,s=sn=new Map;s.set(a,l)}else s=sn,l=s.get(a),l||(l=new Map,s.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var i=a[s];if(!(i[Pl]||i[Xe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=l.get(c);f?f.push(i):l.set(c,[i])}}return l}function om(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Up(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Lp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=Hl(l.href),i=t.querySelector(Dr(s));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=nn.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ye(i);return}i=t.ownerDocument||t,l=nm(l),(s=Et.get(s))&&Dd(l,s),i=i.createElement("link"),Ye(i);var c=i;c._p=new Promise(function(f,v){c.onload=f,c.onerror=v}),Ke(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nn.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ld=0;function _p(e,t){return e.stylesheets&&e.count===0&&on(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&on(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ld===0&&(Ld=62500*yp());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&on(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ld?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function nn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)on(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dn=null;function on(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dn=new Map,t.forEach(Hp,e),dn=null,nn.call(e))}function Hp(e,t){if(!(t.state.loading&4)){var a=dn.get(e);if(a)var l=a.get(null);else{a=new Map,dn.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var c=s[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}s=t.instance,c=s.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,s),a.set(c,s),this.count++,l=nn.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Lr={$$typeof:D,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function qp(e,t,a,l,s,i,c,f,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.hiddenUpdates=Bn(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function um(e,t,a,l,s,i,c,f,v,A,R,U){return e=new qp(e,t,a,c,v,A,R,U,f),t=1,i===!0&&(t|=24),i=ut(3,null,null,t),e.current=i,i.stateNode=e,t=gi(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},bi(i),e}function mm(e){return e?(e=hl,e):hl}function xm(e,t,a,l,s,i){s=mm(s),l.context===null?l.context=s:l.pendingContext=s,l=ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ka(e,l,t),a!==null&&(st(a,e,t),pr(a,e,t))}function fm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function _d(e,t){fm(e,t),(e=e.alternate)&&fm(e,t)}function pm(e){if(e.tag===13||e.tag===31){var t=Xa(e,67108864);t!==null&&st(t,e,67108864),_d(e,67108864)}}function gm(e){if(e.tag===13||e.tag===31){var t=gt();t=Rn(t);var a=Xa(e,t);a!==null&&st(a,e,t),_d(e,t)}}var cn=!0;function Yp(e,t,a,l){var s=M.T;M.T=null;var i=Q.p;try{Q.p=2,Hd(e,t,a,l)}finally{Q.p=i,M.T=s}}function Qp(e,t,a,l){var s=M.T;M.T=null;var i=Q.p;try{Q.p=8,Hd(e,t,a,l)}finally{Q.p=i,M.T=s}}function Hd(e,t,a,l){if(cn){var s=qd(l);if(s===null)Cd(e,t,l,un,a),ym(e,l);else if(Gp(s,e,t,a,l))l.stopPropagation();else if(ym(e,l),t&4&&-1<Xp.indexOf(e)){for(;s!==null;){var i=nl(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=_a(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var v=1<<31-ot(c);f.entanglements[1]|=v,c&=~v}Yt(i),(pe&6)===0&&(Zs=it()+500,Mr(0))}}break;case 31:case 13:f=Xa(i,2),f!==null&&st(f,i,2),Fs(),_d(i,2)}if(i=qd(l),i===null&&Cd(e,t,l,un,a),i===s)break;s=i}s!==null&&l.stopPropagation()}else Cd(e,t,l,null,a)}}function qd(e){return e=Qn(e),Yd(e)}var un=null;function Yd(e){if(un=null,e=sl(e),e!==null){var t=x(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return un=e,null}function hm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sx()){case Co:return 2;case To:return 8;case Wr:case Ax:return 32;case So:return 268435456;default:return 32}default:return 32}}var Qd=!1,Ba=null,Ra=null,Oa=null,_r=new Map,Hr=new Map,Da=[],Xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ym(e,t){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function qr(e,t,a,l,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[s]},t!==null&&(t=nl(t),t!==null&&pm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Gp(e,t,a,l,s){switch(t){case"focusin":return Ba=qr(Ba,e,t,a,l,s),!0;case"dragenter":return Ra=qr(Ra,e,t,a,l,s),!0;case"mouseover":return Oa=qr(Oa,e,t,a,l,s),!0;case"pointerover":var i=s.pointerId;return _r.set(i,qr(_r.get(i)||null,e,t,a,l,s)),!0;case"gotpointercapture":return i=s.pointerId,Hr.set(i,qr(Hr.get(i)||null,e,t,a,l,s)),!0}return!1}function vm(e){var t=sl(e.target);if(t!==null){var a=x(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Ro(e.priority,function(){gm(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,Ro(e.priority,function(){gm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=qd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Yn=l,a.target.dispatchEvent(l),Yn=null}else return t=nl(a),t!==null&&pm(t),e.blockedOn=a,!1;t.shift()}return!0}function bm(e,t,a){mn(e)&&a.delete(t)}function Vp(){Qd=!1,Ba!==null&&mn(Ba)&&(Ba=null),Ra!==null&&mn(Ra)&&(Ra=null),Oa!==null&&mn(Oa)&&(Oa=null),_r.forEach(bm),Hr.forEach(bm)}function xn(e,t){e.blockedOn===t&&(e.blockedOn=null,Qd||(Qd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Vp)))}var fn=null;function km(e){fn!==e&&(fn=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){fn===e&&(fn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Yd(l||a)===null)continue;break}var i=nl(a);i!==null&&(e.splice(t,3),t-=3,qi(i,{pending:!0,data:s,method:a.method,action:l},l,s))}}))}function Yl(e){function t(v){return xn(v,e)}Ba!==null&&xn(Ba,e),Ra!==null&&xn(Ra,e),Oa!==null&&xn(Oa,e),_r.forEach(t),Hr.forEach(t);for(var a=0;a<Da.length;a++){var l=Da[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)vm(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var s=a[l],i=a[l+1],c=s[We]||null;if(typeof i=="function")c||km(a);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(s=i,c=i[We]||null)f=c.formAction;else if(Yd(s)!==null)continue}else f=c.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),km(a)}}}function wm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return s=c})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Xd(e){this._internalRoot=e}pn.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=gt();xm(a,l,e,t,null,null)},pn.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xm(e.current,2,null,e,null,null),Fs(),t[rl]=null}};function pn(e){this._internalRoot=e}pn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Da.length&&t!==0&&t<Da[a].priority;a++);Da.splice(a,0,e),a===0&&vm(e)}};var jm=d.version;if(jm!=="19.2.0")throw Error(o(527,jm,"19.2.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var Zp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gn.isDisabled&&gn.supportsFiber)try{Jl=gn.inject(Zp),dt=gn}catch{}}return Qr.createRoot=function(e,t){if(!p(e))throw Error(o(299));var a=!1,l="",s=z0,i=M0,c=B0;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=um(e,1,!1,null,null,a,l,null,s,i,c,wm),e[rl]=t.current,Nd(e),new Xd(t)},Qr.hydrateRoot=function(e,t,a){if(!p(e))throw Error(o(299));var l=!1,s="",i=z0,c=M0,f=B0,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=um(e,1,!0,t,a??null,l,s,v,i,c,f,wm),t.context=mm(null),a=t.current,l=gt(),l=Rn(l),s=ba(l),s.callback=null,ka(a,s,l),a=l,t.current.lanes=a,Il(t,a),Yt(t),e[rl]=t.current,Nd(e),new pn(t)},Qr.version="19.2.0",Qr}var Rm;function rg(){if(Rm)return Zd.exports;Rm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(d){console.error(d)}}return n(),Zd.exports=lg(),Zd.exports}var sg=rg();const ng=Fr(sg);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Om="popstate";function ig(n={}){function d(o,p){let{pathname:x,search:g,hash:y}=o.location;return no("",{pathname:x,search:g,hash:y},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function u(o,p){return typeof p=="string"?p:Kr(p)}return og(d,u,null,n)}function Ae(n,d){if(n===!1||n===null||typeof n>"u")throw new Error(d)}function Dt(n,d){if(!n){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function dg(){return Math.random().toString(36).substring(2,10)}function Dm(n,d){return{usr:n.state,key:n.key,idx:d}}function no(n,d,u=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof d=="string"?Vl(d):d,state:u,key:d&&d.key||o||dg()}}function Kr({pathname:n="/",search:d="",hash:u=""}){return d&&d!=="?"&&(n+=d.charAt(0)==="?"?d:"?"+d),u&&u!=="#"&&(n+=u.charAt(0)==="#"?u:"#"+u),n}function Vl(n){let d={};if(n){let u=n.indexOf("#");u>=0&&(d.hash=n.substring(u),n=n.substring(0,u));let o=n.indexOf("?");o>=0&&(d.search=n.substring(o),n=n.substring(0,o)),n&&(d.pathname=n)}return d}function og(n,d,u,o={}){let{window:p=document.defaultView,v5Compat:x=!1}=o,g=p.history,y="POP",h=null,m=j();m==null&&(m=0,g.replaceState({...g.state,idx:m},""));function j(){return(g.state||{idx:null}).idx}function C(){y="POP";let b=j(),q=b==null?null:b-m;m=b,h&&h({action:y,location:Y.location,delta:q})}function L(b,q){y="PUSH";let T=no(Y.location,b,q);m=j()+1;let D=Dm(T,m),me=Y.createHref(T);try{g.pushState(D,"",me)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;p.location.assign(me)}x&&h&&h({action:y,location:Y.location,delta:1})}function H(b,q){y="REPLACE";let T=no(Y.location,b,q);m=j();let D=Dm(T,m),me=Y.createHref(T);g.replaceState(D,"",me),x&&h&&h({action:y,location:Y.location,delta:0})}function X(b){return cg(b)}let Y={get action(){return y},get location(){return n(p,g)},listen(b){if(h)throw new Error("A history only accepts one active listener");return p.addEventListener(Om,C),h=b,()=>{p.removeEventListener(Om,C),h=null}},createHref(b){return d(p,b)},createURL:X,encodeLocation(b){let q=X(b);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:L,replace:H,go(b){return g.go(b)}};return Y}function cg(n,d=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ae(u,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:Kr(n);return o=o.replace(/ $/,"%20"),!d&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function Im(n,d,u="/"){return ug(n,d,u,!1)}function ug(n,d,u,o){let p=typeof d=="string"?Vl(d):d,x=ca(p.pathname||"/",u);if(x==null)return null;let g=Pm(n);mg(g);let y=null;for(let h=0;y==null&&h<g.length;++h){let m=jg(x);y=kg(g[h],m,o)}return y}function Pm(n,d=[],u=[],o="",p=!1){let x=(g,y,h=p,m)=>{let j={relativePath:m===void 0?g.path||"":m,caseSensitive:g.caseSensitive===!0,childrenIndex:y,route:g};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(o)&&h)return;Ae(j.relativePath.startsWith(o),`Absolute route path "${j.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(o.length)}let C=oa([o,j.relativePath]),L=u.concat(j);g.children&&g.children.length>0&&(Ae(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${C}".`),Pm(g.children,d,L,C,h)),!(g.path==null&&!g.index)&&d.push({path:C,score:vg(C,g.index),routesMeta:L})};return n.forEach((g,y)=>{var h;if(g.path===""||!((h=g.path)!=null&&h.includes("?")))x(g,y);else for(let m of Wm(g.path))x(g,y,!0,m)}),d}function Wm(n){let d=n.split("/");if(d.length===0)return[];let[u,...o]=d,p=u.endsWith("?"),x=u.replace(/\?$/,"");if(o.length===0)return p?[x,""]:[x];let g=Wm(o.join("/")),y=[];return y.push(...g.map(h=>h===""?x:[x,h].join("/"))),p&&y.push(...g),y.map(h=>n.startsWith("/")&&h===""?"/":h)}function mg(n){n.sort((d,u)=>d.score!==u.score?u.score-d.score:bg(d.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var xg=/^:[\w-]+$/,fg=3,pg=2,gg=1,hg=10,yg=-2,Um=n=>n==="*";function vg(n,d){let u=n.split("/"),o=u.length;return u.some(Um)&&(o+=yg),d&&(o+=pg),u.filter(p=>!Um(p)).reduce((p,x)=>p+(xg.test(x)?fg:x===""?gg:hg),o)}function bg(n,d){return n.length===d.length&&n.slice(0,-1).every((o,p)=>o===d[p])?n[n.length-1]-d[d.length-1]:0}function kg(n,d,u=!1){let{routesMeta:o}=n,p={},x="/",g=[];for(let y=0;y<o.length;++y){let h=o[y],m=y===o.length-1,j=x==="/"?d:d.slice(x.length)||"/",C=jn({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},j),L=h.route;if(!C&&m&&u&&!o[o.length-1].route.index&&(C=jn({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},j)),!C)return null;Object.assign(p,C.params),g.push({params:p,pathname:oa([x,C.pathname]),pathnameBase:Sg(oa([x,C.pathnameBase])),route:L}),C.pathnameBase!=="/"&&(x=oa([x,C.pathnameBase]))}return g}function jn(n,d){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[u,o]=wg(n.path,n.caseSensitive,n.end),p=d.match(u);if(!p)return null;let x=p[0],g=x.replace(/(.)\/+$/,"$1"),y=p.slice(1);return{params:o.reduce((m,{paramName:j,isOptional:C},L)=>{if(j==="*"){let X=y[L]||"";g=x.slice(0,x.length-X.length).replace(/(.)\/+$/,"$1")}const H=y[L];return C&&!H?m[j]=void 0:m[j]=(H||"").replace(/%2F/g,"/"),m},{}),pathname:x,pathnameBase:g,pattern:n}}function wg(n,d=!1,u=!0){Dt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],p="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,y,h)=>(o.push({paramName:y,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),p+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?p+="\\/*$":n!==""&&n!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,d?void 0:"i"),o]}function jg(n){try{return n.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Dt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),n}}function ca(n,d){if(d==="/")return n;if(!n.toLowerCase().startsWith(d.toLowerCase()))return null;let u=d.endsWith("/")?d.length-1:d.length,o=n.charAt(u);return o&&o!=="/"?null:n.slice(u)||"/"}var Ng=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Cg(n,d="/"){let{pathname:u,search:o="",hash:p=""}=typeof n=="string"?Vl(n):n,x;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?x=Lm(u.substring(1),"/"):x=Lm(u,d)):x=d,{pathname:x,search:Ag(o),hash:Eg(p)}}function Lm(n,d){let u=d.replace(/\/+$/,"").split("/");return n.split("/").forEach(p=>{p===".."?u.length>1&&u.pop():p!=="."&&u.push(p)}),u.length>1?u.join("/"):"/"}function $d(n,d,u,o){return`Cannot include a '${n}' character in a manually specified \`to.${d}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tg(n){return n.filter((d,u)=>u===0||d.route.path&&d.route.path.length>0)}function fo(n){let d=Tg(n);return d.map((u,o)=>o===d.length-1?u.pathname:u.pathnameBase)}function po(n,d,u,o=!1){let p;typeof n=="string"?p=Vl(n):(p={...n},Ae(!p.pathname||!p.pathname.includes("?"),$d("?","pathname","search",p)),Ae(!p.pathname||!p.pathname.includes("#"),$d("#","pathname","hash",p)),Ae(!p.search||!p.search.includes("#"),$d("#","search","hash",p)));let x=n===""||p.pathname==="",g=x?"/":p.pathname,y;if(g==null)y=u;else{let C=d.length-1;if(!o&&g.startsWith("..")){let L=g.split("/");for(;L[0]==="..";)L.shift(),C-=1;p.pathname=L.join("/")}y=C>=0?d[C]:"/"}let h=Cg(p,y),m=g&&g!=="/"&&g.endsWith("/"),j=(x||g===".")&&u.endsWith("/");return!h.pathname.endsWith("/")&&(m||j)&&(h.pathname+="/"),h}var oa=n=>n.join("/").replace(/\/\/+/g,"/"),Sg=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Ag=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Eg=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,zg=class{constructor(n,d,u,o=!1){this.status=n,this.statusText=d||"",this.internal=o,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Mg(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function Bg(n){return n.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ex=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function tx(n,d){let u=n;if(typeof u!="string"||!Ng.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let o=u,p=!1;if(ex)try{let x=new URL(window.location.href),g=u.startsWith("//")?new URL(x.protocol+u):new URL(u),y=ca(g.pathname,d);g.origin===x.origin&&y!=null?u=y+g.search+g.hash:p=!0}catch{Dt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:p,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ax=["POST","PUT","PATCH","DELETE"];new Set(ax);var Rg=["GET",...ax];new Set(Rg);var Zl=z.createContext(null);Zl.displayName="DataRouter";var Nn=z.createContext(null);Nn.displayName="DataRouterState";var Og=z.createContext(!1),lx=z.createContext({isTransitioning:!1});lx.displayName="ViewTransition";var Dg=z.createContext(new Map);Dg.displayName="Fetchers";var Ug=z.createContext(null);Ug.displayName="Await";var yt=z.createContext(null);yt.displayName="Navigation";var Jr=z.createContext(null);Jr.displayName="Location";var Ut=z.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var go=z.createContext(null);go.displayName="RouteError";var rx="REACT_ROUTER_ERROR",Lg="REDIRECT",_g="ROUTE_ERROR_RESPONSE";function Hg(n){if(n.startsWith(`${rx}:${Lg}:{`))try{let d=JSON.parse(n.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function qg(n){if(n.startsWith(`${rx}:${_g}:{`))try{let d=JSON.parse(n.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new zg(d.status,d.statusText,d.data)}catch{}}function Yg(n,{relative:d}={}){Ae(Kl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=z.useContext(yt),{hash:p,pathname:x,search:g}=$r(n,{relative:d}),y=x;return u!=="/"&&(y=x==="/"?u:oa([u,x])),o.createHref({pathname:y,search:g,hash:p})}function Kl(){return z.useContext(Jr)!=null}function ua(){return Ae(Kl(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Jr).location}var sx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nx(n){z.useContext(yt).static||z.useLayoutEffect(n)}function ix(){let{isDataRoute:n}=z.useContext(Ut);return n?t1():Qg()}function Qg(){Ae(Kl(),"useNavigate() may be used only in the context of a <Router> component.");let n=z.useContext(Zl),{basename:d,navigator:u}=z.useContext(yt),{matches:o}=z.useContext(Ut),{pathname:p}=ua(),x=JSON.stringify(fo(o)),g=z.useRef(!1);return nx(()=>{g.current=!0}),z.useCallback((h,m={})=>{if(Dt(g.current,sx),!g.current)return;if(typeof h=="number"){u.go(h);return}let j=po(h,JSON.parse(x),p,m.relative==="path");n==null&&d!=="/"&&(j.pathname=j.pathname==="/"?d:oa([d,j.pathname])),(m.replace?u.replace:u.push)(j,m.state,m)},[d,u,x,p,n])}z.createContext(null);function Xg(){let{matches:n}=z.useContext(Ut),d=n[n.length-1];return d?d.params:{}}function $r(n,{relative:d}={}){let{matches:u}=z.useContext(Ut),{pathname:o}=ua(),p=JSON.stringify(fo(u));return z.useMemo(()=>po(n,JSON.parse(p),o,d==="path"),[n,p,o,d])}function Gg(n,d){return dx(n,d)}function dx(n,d,u,o,p){var T;Ae(Kl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:x}=z.useContext(yt),{matches:g}=z.useContext(Ut),y=g[g.length-1],h=y?y.params:{},m=y?y.pathname:"/",j=y?y.pathnameBase:"/",C=y&&y.route;{let D=C&&C.path||"";cx(m,!C||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let L=ua(),H;if(d){let D=typeof d=="string"?Vl(d):d;Ae(j==="/"||((T=D.pathname)==null?void 0:T.startsWith(j)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${D.pathname}" was given in the \`location\` prop.`),H=D}else H=L;let X=H.pathname||"/",Y=X;if(j!=="/"){let D=j.replace(/^\//,"").split("/");Y="/"+X.replace(/^\//,"").split("/").slice(D.length).join("/")}let b=Im(n,{pathname:Y});Dt(C||b!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Dt(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Jg(b&&b.map(D=>Object.assign({},D,{params:Object.assign({},h,D.params),pathname:oa([j,x.encodeLocation?x.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?j:oa([j,x.encodeLocation?x.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),g,u,o,p);return d&&q?z.createElement(Jr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},q):q}function Vg(){let n=e1(),d=Mg(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),u=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:o},x={padding:"2px 4px",backgroundColor:o},g=null;return console.error("Error handled by React Router default ErrorBoundary:",n),g=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:x},"ErrorBoundary")," or"," ",z.createElement("code",{style:x},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},d),u?z.createElement("pre",{style:p},u):null,g)}var Zg=z.createElement(Vg,null),ox=class extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,d){return d.location!==n.location||d.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:d.error,location:d.location,revalidation:n.revalidation||d.revalidation}}componentDidCatch(n,d){this.props.onError?this.props.onError(n,d):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const u=qg(n.digest);u&&(n=u)}let d=n!==void 0?z.createElement(Ut.Provider,{value:this.props.routeContext},z.createElement(go.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?z.createElement(Kg,{error:n},d):d}};ox.contextType=Og;var Id=new WeakMap;function Kg({children:n,error:d}){let{basename:u}=z.useContext(yt);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let o=Hg(d.digest);if(o){let p=Id.get(d);if(p)throw p;let x=tx(o.location,u);if(ex&&!Id.get(d))if(x.isExternal||o.reloadDocument)window.location.href=x.absoluteURL||x.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(x.to,{replace:o.replace}));throw Id.set(d,g),g}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${x.absoluteURL||x.to}`})}}return n}function Fg({routeContext:n,match:d,children:u}){let o=z.useContext(Zl);return o&&o.static&&o.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=d.route.id),z.createElement(Ut.Provider,{value:n},u)}function Jg(n,d=[],u=null,o=null,p=null){if(n==null){if(!u)return null;if(u.errors)n=u.matches;else if(d.length===0&&!u.initialized&&u.matches.length>0)n=u.matches;else return null}let x=n,g=u==null?void 0:u.errors;if(g!=null){let j=x.findIndex(C=>C.route.id&&(g==null?void 0:g[C.route.id])!==void 0);Ae(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),x=x.slice(0,Math.min(x.length,j+1))}let y=!1,h=-1;if(u)for(let j=0;j<x.length;j++){let C=x[j];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(h=j),C.route.id){let{loaderData:L,errors:H}=u,X=C.route.loader&&!L.hasOwnProperty(C.route.id)&&(!H||H[C.route.id]===void 0);if(C.route.lazy||X){y=!0,h>=0?x=x.slice(0,h+1):x=[x[0]];break}}}let m=u&&o?(j,C)=>{var L,H;o(j,{location:u.location,params:((H=(L=u.matches)==null?void 0:L[0])==null?void 0:H.params)??{},unstable_pattern:Bg(u.matches),errorInfo:C})}:void 0;return x.reduceRight((j,C,L)=>{let H,X=!1,Y=null,b=null;u&&(H=g&&C.route.id?g[C.route.id]:void 0,Y=C.route.errorElement||Zg,y&&(h<0&&L===0?(cx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,b=null):h===L&&(X=!0,b=C.route.hydrateFallbackElement||null)));let q=d.concat(x.slice(0,L+1)),T=()=>{let D;return H?D=Y:X?D=b:C.route.Component?D=z.createElement(C.route.Component,null):C.route.element?D=C.route.element:D=j,z.createElement(Fg,{match:C,routeContext:{outlet:j,matches:q,isDataRoute:u!=null},children:D})};return u&&(C.route.ErrorBoundary||C.route.errorElement||L===0)?z.createElement(ox,{location:u.location,revalidation:u.revalidation,component:Y,error:H,children:T(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:m}):T()},null)}function ho(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $g(n){let d=z.useContext(Zl);return Ae(d,ho(n)),d}function Ig(n){let d=z.useContext(Nn);return Ae(d,ho(n)),d}function Pg(n){let d=z.useContext(Ut);return Ae(d,ho(n)),d}function yo(n){let d=Pg(n),u=d.matches[d.matches.length-1];return Ae(u.route.id,`${n} can only be used on routes that contain a unique "id"`),u.route.id}function Wg(){return yo("useRouteId")}function e1(){var o;let n=z.useContext(go),d=Ig("useRouteError"),u=yo("useRouteError");return n!==void 0?n:(o=d.errors)==null?void 0:o[u]}function t1(){let{router:n}=$g("useNavigate"),d=yo("useNavigate"),u=z.useRef(!1);return nx(()=>{u.current=!0}),z.useCallback(async(p,x={})=>{Dt(u.current,sx),u.current&&(typeof p=="number"?await n.navigate(p):await n.navigate(p,{fromRouteId:d,...x}))},[n,d])}var _m={};function cx(n,d,u){!d&&!_m[n]&&(_m[n]=!0,Dt(!1,u))}z.memo(a1);function a1({routes:n,future:d,state:u,onError:o}){return dx(n,void 0,u,o,d)}function l1({to:n,replace:d,state:u,relative:o}){Ae(Kl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:p}=z.useContext(yt);Dt(!p,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:x}=z.useContext(Ut),{pathname:g}=ua(),y=ix(),h=po(n,fo(x),g,o==="path"),m=JSON.stringify(h);return z.useEffect(()=>{y(JSON.parse(m),{replace:d,state:u,relative:o})},[y,m,o,d,u]),null}function al(n){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function r1({basename:n="/",children:d=null,location:u,navigationType:o="POP",navigator:p,static:x=!1,unstable_useTransitions:g}){Ae(!Kl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=n.replace(/^\/*/,"/"),h=z.useMemo(()=>({basename:y,navigator:p,static:x,unstable_useTransitions:g,future:{}}),[y,p,x,g]);typeof u=="string"&&(u=Vl(u));let{pathname:m="/",search:j="",hash:C="",state:L=null,key:H="default"}=u,X=z.useMemo(()=>{let Y=ca(m,y);return Y==null?null:{location:{pathname:Y,search:j,hash:C,state:L,key:H},navigationType:o}},[y,m,j,C,L,H,o]);return Dt(X!=null,`<Router basename="${y}"> is not able to match the URL "${m}${j}${C}" because it does not start with the basename, so the <Router> won't render anything.`),X==null?null:z.createElement(yt.Provider,{value:h},z.createElement(Jr.Provider,{children:d,value:X}))}function s1({children:n,location:d}){return Gg(io(n),d)}function io(n,d=[]){let u=[];return z.Children.forEach(n,(o,p)=>{if(!z.isValidElement(o))return;let x=[...d,p];if(o.type===z.Fragment){u.push.apply(u,io(o.props.children,x));return}Ae(o.type===al,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!o.props.index||!o.props.children,"An index route cannot have child routes.");let g={id:o.props.id||x.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(g.children=io(o.props.children,x)),u.push(g)}),u}var bn="get",kn="application/x-www-form-urlencoded";function Cn(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function n1(n){return Cn(n)&&n.tagName.toLowerCase()==="button"}function i1(n){return Cn(n)&&n.tagName.toLowerCase()==="form"}function d1(n){return Cn(n)&&n.tagName.toLowerCase()==="input"}function o1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function c1(n,d){return n.button===0&&(!d||d==="_self")&&!o1(n)}var hn=null;function u1(){if(hn===null)try{new FormData(document.createElement("form"),0),hn=!1}catch{hn=!0}return hn}var m1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(n){return n!=null&&!m1.has(n)?(Dt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kn}"`),null):n}function x1(n,d){let u,o,p,x,g;if(i1(n)){let y=n.getAttribute("action");o=y?ca(y,d):null,u=n.getAttribute("method")||bn,p=Pd(n.getAttribute("enctype"))||kn,x=new FormData(n)}else if(n1(n)||d1(n)&&(n.type==="submit"||n.type==="image")){let y=n.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||y.getAttribute("action");if(o=h?ca(h,d):null,u=n.getAttribute("formmethod")||y.getAttribute("method")||bn,p=Pd(n.getAttribute("formenctype"))||Pd(y.getAttribute("enctype"))||kn,x=new FormData(y,n),!u1()){let{name:m,type:j,value:C}=n;if(j==="image"){let L=m?`${m}.`:"";x.append(`${L}x`,"0"),x.append(`${L}y`,"0")}else m&&x.append(m,C)}}else{if(Cn(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=bn,o=null,p=kn,g=n}return x&&p==="text/plain"&&(g=x,x=void 0),{action:o,method:u.toLowerCase(),encType:p,formData:x,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vo(n,d){if(n===!1||n===null||typeof n>"u")throw new Error(d)}function f1(n,d,u,o){let p=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return u?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${o}`:p.pathname=`${p.pathname}.${o}`:p.pathname==="/"?p.pathname=`_root.${o}`:d&&ca(p.pathname,d)==="/"?p.pathname=`${d.replace(/\/$/,"")}/_root.${o}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${o}`,p}async function p1(n,d){if(n.id in d)return d[n.id];try{let u=await import(n.module);return d[n.id]=u,u}catch(u){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function h1(n,d,u){let o=await Promise.all(n.map(async p=>{let x=d.routes[p.route.id];if(x){let g=await p1(x,u);return g.links?g.links():[]}return[]}));return k1(o.flat(1).filter(g1).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Hm(n,d,u,o,p,x){let g=(h,m)=>u[m]?h.route.id!==u[m].route.id:!0,y=(h,m)=>{var j;return u[m].pathname!==h.pathname||((j=u[m].route.path)==null?void 0:j.endsWith("*"))&&u[m].params["*"]!==h.params["*"]};return x==="assets"?d.filter((h,m)=>g(h,m)||y(h,m)):x==="data"?d.filter((h,m)=>{var C;let j=o.routes[h.route.id];if(!j||!j.hasLoader)return!1;if(g(h,m)||y(h,m))return!0;if(h.route.shouldRevalidate){let L=h.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:((C=u[0])==null?void 0:C.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof L=="boolean")return L}return!0}):[]}function y1(n,d,{includeHydrateFallback:u}={}){return v1(n.map(o=>{let p=d.routes[o.route.id];if(!p)return[];let x=[p.module];return p.clientActionModule&&(x=x.concat(p.clientActionModule)),p.clientLoaderModule&&(x=x.concat(p.clientLoaderModule)),u&&p.hydrateFallbackModule&&(x=x.concat(p.hydrateFallbackModule)),p.imports&&(x=x.concat(p.imports)),x}).flat(1))}function v1(n){return[...new Set(n)]}function b1(n){let d={},u=Object.keys(n).sort();for(let o of u)d[o]=n[o];return d}function k1(n,d){let u=new Set;return new Set(d),n.reduce((o,p)=>{let x=JSON.stringify(b1(p));return u.has(x)||(u.add(x),o.push({key:x,link:p})),o},[])}function ux(){let n=z.useContext(Zl);return vo(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function w1(){let n=z.useContext(Nn);return vo(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var bo=z.createContext(void 0);bo.displayName="FrameworkContext";function mx(){let n=z.useContext(bo);return vo(n,"You must render this element inside a <HydratedRouter> element"),n}function j1(n,d){let u=z.useContext(bo),[o,p]=z.useState(!1),[x,g]=z.useState(!1),{onFocus:y,onBlur:h,onMouseEnter:m,onMouseLeave:j,onTouchStart:C}=d,L=z.useRef(null);z.useEffect(()=>{if(n==="render"&&g(!0),n==="viewport"){let Y=q=>{q.forEach(T=>{g(T.isIntersecting)})},b=new IntersectionObserver(Y,{threshold:.5});return L.current&&b.observe(L.current),()=>{b.disconnect()}}},[n]),z.useEffect(()=>{if(o){let Y=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(Y)}}},[o]);let H=()=>{p(!0)},X=()=>{p(!1),g(!1)};return u?n!=="intent"?[x,L,{}]:[x,L,{onFocus:Xr(y,H),onBlur:Xr(h,X),onMouseEnter:Xr(m,H),onMouseLeave:Xr(j,X),onTouchStart:Xr(C,H)}]:[!1,L,{}]}function Xr(n,d){return u=>{n&&n(u),u.defaultPrevented||d(u)}}function N1({page:n,...d}){let{router:u}=ux(),o=z.useMemo(()=>Im(u.routes,n,u.basename),[u.routes,n,u.basename]);return o?z.createElement(T1,{page:n,matches:o,...d}):null}function C1(n){let{manifest:d,routeModules:u}=mx(),[o,p]=z.useState([]);return z.useEffect(()=>{let x=!1;return h1(n,d,u).then(g=>{x||p(g)}),()=>{x=!0}},[n,d,u]),o}function T1({page:n,matches:d,...u}){let o=ua(),{future:p,manifest:x,routeModules:g}=mx(),{basename:y}=ux(),{loaderData:h,matches:m}=w1(),j=z.useMemo(()=>Hm(n,d,m,x,o,"data"),[n,d,m,x,o]),C=z.useMemo(()=>Hm(n,d,m,x,o,"assets"),[n,d,m,x,o]),L=z.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let Y=new Set,b=!1;if(d.forEach(T=>{var me;let D=x.routes[T.route.id];!D||!D.hasLoader||(!j.some(ue=>ue.route.id===T.route.id)&&T.route.id in h&&((me=g[T.route.id])!=null&&me.shouldRevalidate)||D.hasClientLoader?b=!0:Y.add(T.route.id))}),Y.size===0)return[];let q=f1(n,y,p.unstable_trailingSlashAwareDataRequests,"data");return b&&Y.size>0&&q.searchParams.set("_routes",d.filter(T=>Y.has(T.route.id)).map(T=>T.route.id).join(",")),[q.pathname+q.search]},[y,p.unstable_trailingSlashAwareDataRequests,h,o,x,j,d,n,g]),H=z.useMemo(()=>y1(C,x),[C,x]),X=C1(C);return z.createElement(z.Fragment,null,L.map(Y=>z.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...u})),H.map(Y=>z.createElement("link",{key:Y,rel:"modulepreload",href:Y,...u})),X.map(({key:Y,link:b})=>z.createElement("link",{key:Y,nonce:u.nonce,...b,crossOrigin:b.crossOrigin??u.crossOrigin})))}function S1(...n){return d=>{n.forEach(u=>{typeof u=="function"?u(d):u!=null&&(u.current=d)})}}var A1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{A1&&(window.__reactRouterVersion="7.13.0")}catch{}function E1({basename:n,children:d,unstable_useTransitions:u,window:o}){let p=z.useRef();p.current==null&&(p.current=ig({window:o,v5Compat:!0}));let x=p.current,[g,y]=z.useState({action:x.action,location:x.location}),h=z.useCallback(m=>{u===!1?y(m):z.startTransition(()=>y(m))},[u]);return z.useLayoutEffect(()=>x.listen(h),[x,h]),z.createElement(r1,{basename:n,children:d,location:g.location,navigationType:g.action,navigator:x,unstable_useTransitions:u})}var xx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ht=z.forwardRef(function({onClick:d,discover:u="render",prefetch:o="none",relative:p,reloadDocument:x,replace:g,state:y,target:h,to:m,preventScrollReset:j,viewTransition:C,unstable_defaultShouldRevalidate:L,...H},X){let{basename:Y,unstable_useTransitions:b}=z.useContext(yt),q=typeof m=="string"&&xx.test(m),T=tx(m,Y);m=T.to;let D=Yg(m,{relative:p}),[me,ue,Ne]=j1(o,H),W=B1(m,{replace:g,state:y,target:h,preventScrollReset:j,relative:p,viewTransition:C,unstable_defaultShouldRevalidate:L,unstable_useTransitions:b});function Ee(Pe){d&&d(Pe),Pe.defaultPrevented||W(Pe)}let De=z.createElement("a",{...H,...Ne,href:T.absoluteURL||D,onClick:T.isExternal||x?d:Ee,ref:S1(X,ue),target:h,"data-discover":!q&&u==="render"?"true":void 0});return me&&!q?z.createElement(z.Fragment,null,De,z.createElement(N1,{page:D})):De});ht.displayName="Link";var Qt=z.forwardRef(function({"aria-current":d="page",caseSensitive:u=!1,className:o="",end:p=!1,style:x,to:g,viewTransition:y,children:h,...m},j){let C=$r(g,{relative:m.relative}),L=ua(),H=z.useContext(Nn),{navigator:X,basename:Y}=z.useContext(yt),b=H!=null&&L1(C)&&y===!0,q=X.encodeLocation?X.encodeLocation(C).pathname:C.pathname,T=L.pathname,D=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;u||(T=T.toLowerCase(),D=D?D.toLowerCase():null,q=q.toLowerCase()),D&&Y&&(D=ca(D,Y)||D);const me=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let ue=T===q||!p&&T.startsWith(q)&&T.charAt(me)==="/",Ne=D!=null&&(D===q||!p&&D.startsWith(q)&&D.charAt(q.length)==="/"),W={isActive:ue,isPending:Ne,isTransitioning:b},Ee=ue?d:void 0,De;typeof o=="function"?De=o(W):De=[o,ue?"active":null,Ne?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof x=="function"?x(W):x;return z.createElement(ht,{...m,"aria-current":Ee,className:De,ref:j,style:Pe,to:g,viewTransition:y},typeof h=="function"?h(W):h)});Qt.displayName="NavLink";var z1=z.forwardRef(({discover:n="render",fetcherKey:d,navigate:u,reloadDocument:o,replace:p,state:x,method:g=bn,action:y,onSubmit:h,relative:m,preventScrollReset:j,viewTransition:C,unstable_defaultShouldRevalidate:L,...H},X)=>{let{unstable_useTransitions:Y}=z.useContext(yt),b=D1(),q=U1(y,{relative:m}),T=g.toLowerCase()==="get"?"get":"post",D=typeof y=="string"&&xx.test(y),me=ue=>{if(h&&h(ue),ue.defaultPrevented)return;ue.preventDefault();let Ne=ue.nativeEvent.submitter,W=(Ne==null?void 0:Ne.getAttribute("formmethod"))||g,Ee=()=>b(Ne||ue.currentTarget,{fetcherKey:d,method:W,navigate:u,replace:p,state:x,relative:m,preventScrollReset:j,viewTransition:C,unstable_defaultShouldRevalidate:L});Y&&u!==!1?z.startTransition(()=>Ee()):Ee()};return z.createElement("form",{ref:X,method:T,action:q,onSubmit:o?h:me,...H,"data-discover":!D&&n==="render"?"true":void 0})});z1.displayName="Form";function M1(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fx(n){let d=z.useContext(Zl);return Ae(d,M1(n)),d}function B1(n,{target:d,replace:u,state:o,preventScrollReset:p,relative:x,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:h}={}){let m=ix(),j=ua(),C=$r(n,{relative:x});return z.useCallback(L=>{if(c1(L,d)){L.preventDefault();let H=u!==void 0?u:Kr(j)===Kr(C),X=()=>m(n,{replace:H,state:o,preventScrollReset:p,relative:x,viewTransition:g,unstable_defaultShouldRevalidate:y});h?z.startTransition(()=>X()):X()}},[j,m,C,u,o,d,n,p,x,g,y,h])}var R1=0,O1=()=>`__${String(++R1)}__`;function D1(){let{router:n}=fx("useSubmit"),{basename:d}=z.useContext(yt),u=Wg(),o=n.fetch,p=n.navigate;return z.useCallback(async(x,g={})=>{let{action:y,method:h,encType:m,formData:j,body:C}=x1(x,d);if(g.navigate===!1){let L=g.fetcherKey||O1();await o(L,u,g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:j,body:C,formMethod:g.method||h,formEncType:g.encType||m,flushSync:g.flushSync})}else await p(g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:j,body:C,formMethod:g.method||h,formEncType:g.encType||m,replace:g.replace,state:g.state,fromRouteId:u,flushSync:g.flushSync,viewTransition:g.viewTransition})},[o,p,d,u])}function U1(n,{relative:d}={}){let{basename:u}=z.useContext(yt),o=z.useContext(Ut);Ae(o,"useFormAction must be used inside a RouteContext");let[p]=o.matches.slice(-1),x={...$r(n||".",{relative:d})},g=ua();if(n==null){x.search=g.search;let y=new URLSearchParams(x.search),h=y.getAll("index");if(h.some(j=>j==="")){y.delete("index"),h.filter(C=>C).forEach(C=>y.append("index",C));let j=y.toString();x.search=j?`?${j}`:""}}return(!n||n===".")&&p.route.index&&(x.search=x.search?x.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(x.pathname=x.pathname==="/"?u:oa([u,x.pathname])),Kr(x)}function L1(n,{relative:d}={}){let u=z.useContext(lx);Ae(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=fx("useViewTransitionState"),p=$r(n,{relative:d});if(!u.isTransitioning)return!1;let x=ca(u.currentLocation.pathname,o)||u.currentLocation.pathname,g=ca(u.nextLocation.pathname,o)||u.nextLocation.pathname;return jn(p.pathname,g)!=null||jn(p.pathname,x)!=null}const ko=[{id:"get-paid-faster",title:"How to Get Paid Faster as a Freelancer: 10 Proven Strategies",description:"The fastest way to get paid as a freelancer is to implement clear payment terms upfront, require deposits on all projects, use automated invoicing systems with multiple payment options, and follow up consistently with professional payment reminders.",content:`
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
    `,imageUrl:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",date:"Oct 28, 2023",author:"Chris Thompson",readTime:"4 min read"}],_1=()=>r.jsx("div",{className:"bg-gray-50 py-16 sm:py-24 dark:bg-gray-900",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsxs("h1",{className:"text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white",children:["QuickBillr ",r.jsx("span",{className:"bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text",children:"Insights"})]}),r.jsx("p",{className:"mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto",children:"Tips, guides, and stories to help you manage your business billing more effectively."})]}),r.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:ko.map(n=>r.jsxs(ht,{to:`/blog/${n.id}`,className:"flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 dark:bg-gray-800 group",children:[r.jsxs("div",{className:"relative h-56 overflow-hidden",children:[r.jsx("img",{src:n.imageUrl,alt:n.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),r.jsx("div",{className:"absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700 dark:bg-gray-900/90 dark:text-primary-400",children:n.readTime})]}),r.jsxs("div",{className:"p-6 flex-grow flex flex-col",children:[r.jsx("p",{className:"text-sm text-primary-600 font-medium mb-2 dark:text-primary-400",children:n.date}),r.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors dark:text-white",children:n.title}),r.jsx("p",{className:"text-gray-600 text-sm line-clamp-3 mb-4 dark:text-gray-300",children:n.description}),r.jsxs("div",{className:"mt-auto flex items-center pt-4 border-t border-gray-100 dark:border-gray-700",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("div",{className:"w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs dark:bg-primary-900/30 dark:text-primary-400",children:n.author.charAt(0)})}),r.jsx("div",{className:"ml-3",children:r.jsx("p",{className:"text-xs font-semibold text-gray-900 dark:text-white",children:n.author})}),r.jsxs("div",{className:"ml-auto text-primary-600 flex items-center text-sm font-medium",children:["Read more",r.jsx("svg",{className:"ml-1 w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]})]})]})]},n.id))})]})});var Wd,qm;function H1(){if(qm)return Wd;qm=1;var n=typeof Element<"u",d=typeof Map=="function",u=typeof Set=="function",o=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(x,g){if(x===g)return!0;if(x&&g&&typeof x=="object"&&typeof g=="object"){if(x.constructor!==g.constructor)return!1;var y,h,m;if(Array.isArray(x)){if(y=x.length,y!=g.length)return!1;for(h=y;h--!==0;)if(!p(x[h],g[h]))return!1;return!0}var j;if(d&&x instanceof Map&&g instanceof Map){if(x.size!==g.size)return!1;for(j=x.entries();!(h=j.next()).done;)if(!g.has(h.value[0]))return!1;for(j=x.entries();!(h=j.next()).done;)if(!p(h.value[1],g.get(h.value[0])))return!1;return!0}if(u&&x instanceof Set&&g instanceof Set){if(x.size!==g.size)return!1;for(j=x.entries();!(h=j.next()).done;)if(!g.has(h.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(x)&&ArrayBuffer.isView(g)){if(y=x.length,y!=g.length)return!1;for(h=y;h--!==0;)if(x[h]!==g[h])return!1;return!0}if(x.constructor===RegExp)return x.source===g.source&&x.flags===g.flags;if(x.valueOf!==Object.prototype.valueOf&&typeof x.valueOf=="function"&&typeof g.valueOf=="function")return x.valueOf()===g.valueOf();if(x.toString!==Object.prototype.toString&&typeof x.toString=="function"&&typeof g.toString=="function")return x.toString()===g.toString();if(m=Object.keys(x),y=m.length,y!==Object.keys(g).length)return!1;for(h=y;h--!==0;)if(!Object.prototype.hasOwnProperty.call(g,m[h]))return!1;if(n&&x instanceof Element)return!1;for(h=y;h--!==0;)if(!((m[h]==="_owner"||m[h]==="__v"||m[h]==="__o")&&x.$$typeof)&&!p(x[m[h]],g[m[h]]))return!1;return!0}return x!==x&&g!==g}return Wd=function(g,y){try{return p(g,y)}catch(h){if((h.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw h}},Wd}var q1=H1();const Y1=Fr(q1);var eo,Ym;function Q1(){if(Ym)return eo;Ym=1;var n=function(d,u,o,p,x,g,y,h){if(!d){var m;if(u===void 0)m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var j=[o,p,x,g,y,h],C=0;m=new Error(u.replace(/%s/g,function(){return j[C++]})),m.name="Invariant Violation"}throw m.framesToPop=1,m}};return eo=n,eo}var X1=Q1();const Qm=Fr(X1);var to,Xm;function G1(){return Xm||(Xm=1,to=function(d,u,o,p){var x=o?o.call(p,d,u):void 0;if(x!==void 0)return!!x;if(d===u)return!0;if(typeof d!="object"||!d||typeof u!="object"||!u)return!1;var g=Object.keys(d),y=Object.keys(u);if(g.length!==y.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(u),m=0;m<g.length;m++){var j=g[m];if(!h(j))return!1;var C=d[j],L=u[j];if(x=o?o.call(p,C,L,j):void 0,x===!1||x===void 0&&C!==L)return!1}return!0}),to}var V1=G1();const Z1=Fr(V1);var px=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(px||{}),ao={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Gm=Object.values(px),wo={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},K1=Object.entries(wo).reduce((n,[d,u])=>(n[u]=d,n),{}),Ot="data-rh",Xl={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Gl=(n,d)=>{for(let u=n.length-1;u>=0;u-=1){const o=n[u];if(Object.prototype.hasOwnProperty.call(o,d))return o[d]}return null},F1=n=>{let d=Gl(n,"title");const u=Gl(n,Xl.TITLE_TEMPLATE);if(Array.isArray(d)&&(d=d.join("")),u&&d)return u.replace(/%s/g,()=>d);const o=Gl(n,Xl.DEFAULT_TITLE);return d||o||void 0},J1=n=>Gl(n,Xl.ON_CHANGE_CLIENT_STATE)||(()=>{}),lo=(n,d)=>d.filter(u=>typeof u[n]<"u").map(u=>u[n]).reduce((u,o)=>({...u,...o}),{}),$1=(n,d)=>d.filter(u=>typeof u.base<"u").map(u=>u.base).reverse().reduce((u,o)=>{if(!u.length){const p=Object.keys(o);for(let x=0;x<p.length;x+=1){const y=p[x].toLowerCase();if(n.indexOf(y)!==-1&&o[y])return u.concat(o)}}return u},[]),I1=n=>console&&typeof console.warn=="function"&&console.warn(n),Gr=(n,d,u)=>{const o={};return u.filter(p=>Array.isArray(p[n])?!0:(typeof p[n]<"u"&&I1(`Helmet: ${n} should be of type "Array". Instead found type "${typeof p[n]}"`),!1)).map(p=>p[n]).reverse().reduce((p,x)=>{const g={};x.filter(h=>{let m;const j=Object.keys(h);for(let L=0;L<j.length;L+=1){const H=j[L],X=H.toLowerCase();d.indexOf(X)!==-1&&!(m==="rel"&&h[m].toLowerCase()==="canonical")&&!(X==="rel"&&h[X].toLowerCase()==="stylesheet")&&(m=X),d.indexOf(H)!==-1&&(H==="innerHTML"||H==="cssText"||H==="itemprop")&&(m=H)}if(!m||!h[m])return!1;const C=h[m].toLowerCase();return o[m]||(o[m]={}),g[m]||(g[m]={}),o[m][C]?!1:(g[m][C]=!0,!0)}).reverse().forEach(h=>p.push(h));const y=Object.keys(g);for(let h=0;h<y.length;h+=1){const m=y[h],j={...o[m],...g[m]};o[m]=j}return p},[]).reverse()},P1=(n,d)=>{if(Array.isArray(n)&&n.length){for(let u=0;u<n.length;u+=1)if(n[u][d])return!0}return!1},W1=n=>({baseTag:$1(["href"],n),bodyAttributes:lo("bodyAttributes",n),defer:Gl(n,Xl.DEFER),encode:Gl(n,Xl.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:lo("htmlAttributes",n),linkTags:Gr("link",["rel","href"],n),metaTags:Gr("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:Gr("noscript",["innerHTML"],n),onChangeClientState:J1(n),scriptTags:Gr("script",["src","innerHTML"],n),styleTags:Gr("style",["cssText"],n),title:F1(n),titleAttributes:lo("titleAttributes",n),prioritizeSeoTags:P1(n,Xl.PRIORITIZE_SEO_TAGS)}),gx=n=>Array.isArray(n)?n.join(""):n,eh=(n,d)=>{const u=Object.keys(n);for(let o=0;o<u.length;o+=1)if(d[u[o]]&&d[u[o]].includes(n[u[o]]))return!0;return!1},ro=(n,d)=>Array.isArray(n)?n.reduce((u,o)=>(eh(o,d)?u.priority.push(o):u.default.push(o),u),{priority:[],default:[]}):{default:n,priority:[]},Vm=(n,d)=>({...n,[d]:void 0}),th=["noscript","script","style"],oo=(n,d=!0)=>d===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),hx=n=>Object.keys(n).reduce((d,u)=>{const o=typeof n[u]<"u"?`${u}="${n[u]}"`:`${u}`;return d?`${d} ${o}`:o},""),ah=(n,d,u,o)=>{const p=hx(u),x=gx(d);return p?`<${n} ${Ot}="true" ${p}>${oo(x,o)}</${n}>`:`<${n} ${Ot}="true">${oo(x,o)}</${n}>`},lh=(n,d,u=!0)=>d.reduce((o,p)=>{const x=p,g=Object.keys(x).filter(m=>!(m==="innerHTML"||m==="cssText")).reduce((m,j)=>{const C=typeof x[j]>"u"?j:`${j}="${oo(x[j],u)}"`;return m?`${m} ${C}`:C},""),y=x.innerHTML||x.cssText||"",h=th.indexOf(n)===-1;return`${o}<${n} ${Ot}="true" ${g}${h?"/>":`>${y}</${n}>`}`},""),yx=(n,d={})=>Object.keys(n).reduce((u,o)=>{const p=wo[o];return u[p||o]=n[o],u},d),rh=(n,d,u)=>{const o={key:d,[Ot]:!0},p=yx(u,o);return[da.createElement("title",p,d)]},wn=(n,d)=>d.map((u,o)=>{const p={key:o,[Ot]:!0};return Object.keys(u).forEach(x=>{const y=wo[x]||x;if(y==="innerHTML"||y==="cssText"){const h=u.innerHTML||u.cssText;p.dangerouslySetInnerHTML={__html:h}}else p[y]=u[x]}),da.createElement(n,p)}),zt=(n,d,u=!0)=>{switch(n){case"title":return{toComponent:()=>rh(n,d.title,d.titleAttributes),toString:()=>ah(n,d.title,d.titleAttributes,u)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>yx(d),toString:()=>hx(d)};default:return{toComponent:()=>wn(n,d),toString:()=>lh(n,d,u)}}},sh=({metaTags:n,linkTags:d,scriptTags:u,encode:o})=>{const p=ro(n,ao.meta),x=ro(d,ao.link),g=ro(u,ao.script);return{priorityMethods:{toComponent:()=>[...wn("meta",p.priority),...wn("link",x.priority),...wn("script",g.priority)],toString:()=>`${zt("meta",p.priority,o)} ${zt("link",x.priority,o)} ${zt("script",g.priority,o)}`},metaTags:p.default,linkTags:x.default,scriptTags:g.default}},nh=n=>{const{baseTag:d,bodyAttributes:u,encode:o=!0,htmlAttributes:p,noscriptTags:x,styleTags:g,title:y="",titleAttributes:h,prioritizeSeoTags:m}=n;let{linkTags:j,metaTags:C,scriptTags:L}=n,H={toComponent:()=>{},toString:()=>""};return m&&({priorityMethods:H,linkTags:j,metaTags:C,scriptTags:L}=sh(n)),{priority:H,base:zt("base",d,o),bodyAttributes:zt("bodyAttributes",u,o),htmlAttributes:zt("htmlAttributes",p,o),link:zt("link",j,o),meta:zt("meta",C,o),noscript:zt("noscript",x,o),script:zt("script",L,o),style:zt("style",g,o),title:zt("title",{title:y,titleAttributes:h},o)}},co=nh,yn=[],vx=!!(typeof window<"u"&&window.document&&window.document.createElement),uo=class{constructor(n,d){ia(this,"instances",[]);ia(this,"canUseDOM",vx);ia(this,"context");ia(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?yn:this.instances,add:n=>{(this.canUseDOM?yn:this.instances).push(n)},remove:n=>{const d=(this.canUseDOM?yn:this.instances).indexOf(n);(this.canUseDOM?yn:this.instances).splice(d,1)}}});this.context=n,this.canUseDOM=d||!1,d||(n.helmet=co({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ih={},bx=da.createContext(ih),ll,kx=(ll=class extends z.Component{constructor(u){super(u);ia(this,"helmetData");this.helmetData=new uo(this.props.context||{},ll.canUseDOM)}render(){return da.createElement(bx.Provider,{value:this.helmetData.value},this.props.children)}},ia(ll,"canUseDOM",vx),ll),Ql=(n,d)=>{const u=document.head||document.querySelector("head"),o=u.querySelectorAll(`${n}[${Ot}]`),p=[].slice.call(o),x=[];let g;return d&&d.length&&d.forEach(y=>{const h=document.createElement(n);for(const m in y)if(Object.prototype.hasOwnProperty.call(y,m))if(m==="innerHTML")h.innerHTML=y.innerHTML;else if(m==="cssText")h.styleSheet?h.styleSheet.cssText=y.cssText:h.appendChild(document.createTextNode(y.cssText));else{const j=m,C=typeof y[j]>"u"?"":y[j];h.setAttribute(m,C)}h.setAttribute(Ot,"true"),p.some((m,j)=>(g=j,h.isEqualNode(m)))?p.splice(g,1):x.push(h)}),p.forEach(y=>{var h;return(h=y.parentNode)==null?void 0:h.removeChild(y)}),x.forEach(y=>u.appendChild(y)),{oldTags:p,newTags:x}},mo=(n,d)=>{const u=document.getElementsByTagName(n)[0];if(!u)return;const o=u.getAttribute(Ot),p=o?o.split(","):[],x=[...p],g=Object.keys(d);for(const y of g){const h=d[y]||"";u.getAttribute(y)!==h&&u.setAttribute(y,h),p.indexOf(y)===-1&&p.push(y);const m=x.indexOf(y);m!==-1&&x.splice(m,1)}for(let y=x.length-1;y>=0;y-=1)u.removeAttribute(x[y]);p.length===x.length?u.removeAttribute(Ot):u.getAttribute(Ot)!==g.join(",")&&u.setAttribute(Ot,g.join(","))},dh=(n,d)=>{typeof n<"u"&&document.title!==n&&(document.title=gx(n)),mo("title",d)},Zm=(n,d)=>{const{baseTag:u,bodyAttributes:o,htmlAttributes:p,linkTags:x,metaTags:g,noscriptTags:y,onChangeClientState:h,scriptTags:m,styleTags:j,title:C,titleAttributes:L}=n;mo("body",o),mo("html",p),dh(C,L);const H={baseTag:Ql("base",u),linkTags:Ql("link",x),metaTags:Ql("meta",g),noscriptTags:Ql("noscript",y),scriptTags:Ql("script",m),styleTags:Ql("style",j)},X={},Y={};Object.keys(H).forEach(b=>{const{newTags:q,oldTags:T}=H[b];q.length&&(X[b]=q),T.length&&(Y[b]=H[b].oldTags)}),d&&d(),h(n,X,Y)},Vr=null,oh=n=>{Vr&&cancelAnimationFrame(Vr),n.defer?Vr=requestAnimationFrame(()=>{Zm(n,()=>{Vr=null})}):(Zm(n),Vr=null)},ch=oh,Km=class extends z.Component{constructor(){super(...arguments);ia(this,"rendered",!1)}shouldComponentUpdate(d){return!Z1(d,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:d}=this.props.context;d.remove(this),this.emitChange()}emitChange(){const{helmetInstances:d,setHelmet:u}=this.props.context;let o=null;const p=W1(d.get().map(x=>{const g={...x.props};return delete g.context,g}));kx.canUseDOM?ch(p):co&&(o=co(p)),u(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:d}=this.props.context;d.add(this),this.emitChange()}render(){return this.init(),null}},so,Ir=(so=class extends z.Component{shouldComponentUpdate(n){return!Y1(Vm(this.props,"helmetData"),Vm(n,"helmetData"))}mapNestedChildrenToProps(n,d){if(!d)return null;switch(n.type){case"script":case"noscript":return{innerHTML:d};case"style":return{cssText:d};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,d,u,o){return{...d,[n.type]:[...d[n.type]||[],{...u,...this.mapNestedChildrenToProps(n,o)}]}}mapObjectTypeChildren(n,d,u,o){switch(n.type){case"title":return{...d,[n.type]:o,titleAttributes:{...u}};case"body":return{...d,bodyAttributes:{...u}};case"html":return{...d,htmlAttributes:{...u}};default:return{...d,[n.type]:{...u}}}}mapArrayTypeChildrenToProps(n,d){let u={...d};return Object.keys(n).forEach(o=>{u={...u,[o]:n[o]}}),u}warnOnInvalidChildren(n,d){return Qm(Gm.some(u=>n.type===u),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Gm.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),Qm(!d||typeof d=="string"||Array.isArray(d)&&!d.some(u=>typeof u!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,d){let u={};return da.Children.forEach(n,o=>{if(!o||!o.props)return;const{children:p,...x}=o.props,g=Object.keys(x).reduce((h,m)=>(h[K1[m]||m]=x[m],h),{});let{type:y}=o;switch(typeof y=="symbol"?y=y.toString():this.warnOnInvalidChildren(o,p),y){case"Symbol(react.fragment)":d=this.mapChildrenToProps(p,d);break;case"link":case"meta":case"noscript":case"script":case"style":u=this.flattenArrayTypeChildren(o,u,g,p);break;default:d=this.mapObjectTypeChildren(o,d,g,p);break}}),this.mapArrayTypeChildrenToProps(u,d)}render(){const{children:n,...d}=this.props;let u={...d},{helmetData:o}=d;if(n&&(u=this.mapChildrenToProps(n,u)),o&&!(o instanceof uo)){const p=o;o=new uo(p.context,!0),delete u.helmetData}return o?da.createElement(Km,{...u,context:o.value}):da.createElement(bx.Consumer,null,p=>da.createElement(Km,{...u,context:p}))}},ia(so,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),so);const uh=({icon:n,title:d,description:u})=>r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800",children:[r.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white mb-4",children:n}),r.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:d}),r.jsx("p",{className:"mt-2 text-base text-gray-600 dark:text-gray-300",children:u})]}),mh=({quote:n,author:d,role:u,avatar:o})=>r.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800",children:[r.jsx("img",{className:"w-16 h-16 rounded-full mx-auto mb-4",src:o,alt:`Headshot of ${d}, ${u}`}),r.jsxs("p",{className:"text-gray-600 italic dark:text-gray-300",children:['"',n,'"']}),r.jsx("p",{className:"mt-4 font-semibold text-gray-900 dark:text-white",children:d}),r.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:u})]}),xh=()=>{const n=[{icon:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3"})}),title:"Global Ready",description:"Bill clients worldwide with support for 20+ languages and all major currencies."},{icon:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),title:"Customizable Templates",description:"Choose from a variety of free and premium templates to match your brand's style perfectly."},{icon:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v1m0 8v1m0 8v1m-4-8h1m8 0h1M4 12h1m8 0h1m-5-4v1m0 8v1m-4-4h1m8 0h1m-4-4h1m-1 8h1"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z"})]}),title:"Easy Payments with QR Codes",description:"Add a scannable QR code to your invoices linked to your payment page for faster payments."},{icon:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),title:"Instant Downloads",description:"Download your document as a professional PDF with a single click, ready to send to your client."}],d=[{quote:"QuickBillr has been a game-changer for my freelance business. I can create and send invoices in under a minute!",author:"Sarah L.",role:"Freelance Designer",avatar:"https://picsum.photos/id/1011/100/100"},{quote:"The live preview feature is amazing. It helps me catch any mistakes before I send the invoice. Highly recommended.",author:"Michael B.",role:"Consultant",avatar:"https://picsum.photos/id/1005/100/100"},{quote:"I love the professional templates. They make my small business look so much more established and professional.",author:"Jessica P.",role:"Small Business Owner",avatar:"https://picsum.photos/id/1027/100/100"}],u=ko.slice(0,3);return r.jsxs(r.Fragment,{children:[r.jsxs(Ir,{children:[r.jsx("title",{children:"Free Invoice Generator for Freelancers & Small Businesses | QuickBillr"}),r.jsx("meta",{name:"description",content:"Create professional invoices in seconds with QuickBillr — a free invoice generator built for freelancers and small businesses. Customize templates, support multiple currencies, add QR code payments, and get paid faster."},"description"),r.jsx("meta",{name:"keywords",content:"free invoice generator, invoice maker, create invoice online, freelancer invoice, small business invoicing, professional invoice template, billing software, estimate generator"}),r.jsx("link",{rel:"canonical",href:"https://quickbillr.online/"}),r.jsx("meta",{name:"robots",content:"index, follow"}),r.jsx("meta",{property:"og:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{property:"og:description",content:"Create professional invoices in seconds with QuickBillr."}),r.jsx("meta",{property:"og:type",content:"website"}),r.jsx("meta",{property:"og:url",content:"https://quickbillr.com/"}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),r.jsx("meta",{name:"twitter:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{name:"twitter:description",content:"Create invoices easily with QuickBillr."})]}),r.jsxs("div",{children:[r.jsx("section",{className:"bg-white dark:bg-gray-900",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-44 text-center",children:[r.jsxs("h1",{className:"text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight dark:text-white",children:["Create Professional Invoices & Estimates in ",r.jsx("span",{className:"bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text",children:"Seconds"})]}),r.jsx("p",{className:"mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300",children:"Free, simple, and globally compatible with multi-language support, currency options, and QR code payments — perfect for freelancers and small businesses."}),r.jsx("div",{className:"mt-8",children:r.jsx(ht,{to:"/free-invoice-generator",className:"inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition-all transform hover:scale-105",children:"Try Free Now"})})]})}),r.jsx("section",{className:"py-20 bg-gray-50 dark:bg-gray-800",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Everything You Need to Get Paid Faster"}),r.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"Powerful features to streamline your billing process."})]}),r.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map(o=>r.jsx(uh,{...o},o.title))})]})}),r.jsx("section",{className:"py-20 bg-white dark:bg-gray-900",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12",children:[r.jsxs("div",{className:"max-w-2xl",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Latest from Our Blog"}),r.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"Expert advice and insights to help your business grow and thrive."})]}),r.jsx("div",{className:"mt-6 md:mt-0",children:r.jsxs(ht,{to:"/blog",className:"inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors",children:["View all posts",r.jsx("svg",{className:"ml-2 w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]}),r.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:u.map(o=>r.jsxs(ht,{to:`/blog/${o.id}`,className:"group flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700",children:[r.jsx("div",{className:"relative h-48 overflow-hidden",children:r.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"})}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center text-xs font-medium text-primary-600 mb-2 dark:text-primary-400",children:[r.jsx("span",{children:o.date}),r.jsx("span",{className:"mx-2 text-gray-300 dark:text-gray-600",children:"•"}),r.jsx("span",{children:o.readTime})]}),r.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors dark:text-white line-clamp-2",children:o.title}),r.jsx("p",{className:"text-gray-600 text-sm line-clamp-3 dark:text-gray-400",children:o.description})]})]},o.id))})]})}),r.jsx("section",{className:"py-20 bg-gray-50 dark:bg-gray-800",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Loved by Professionals Worldwide"}),r.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"Don't just take our word for it. Here's what our users say."})]}),r.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:d.map(o=>r.jsx(mh,{...o},o.author))})]})})]})]})},fh="/assets/Template-1-XE8j1Tv6.png",ph="/assets/template-2-Cpzkimhv.png",gh="/assets/template-3-B0X3lMQO.png",hh="/assets/template-4-DK_5vUL_.png",yh="/assets/template-5-B2YiboKp.png",vh="/assets/template-6-B9WoFhgX.png",bh="/assets/template-7-D7vONJiy.png",kh="/assets/template-5-B2YiboKp.png",wh=[{id:"template-1",image:fh,name:"template-1",type:"Premium"},{id:"template-2",image:ph,name:"template-2",type:"Free"},{id:"template-3",image:gh,name:"template-3",type:"Premium"},{id:"template-4",image:hh,name:"template-4",type:"Free"},{id:"template-5",image:yh,name:"template-5",type:"Free"},{id:"template-6",image:vh,name:"template-6",type:"Free"},{id:"template-7",image:bh,name:"template-7",type:"Free"},{id:"template-8",image:kh,name:"template-8",type:"Free"}],Fm=[{symbol:"$",name:"USD"},{symbol:"€",name:"EUR"},{symbol:"£",name:"GBP"},{symbol:"¥",name:"JPY"},{symbol:"₹",name:"INR"},{symbol:"A$",name:"AUD"},{symbol:"C$",name:"CAD"},{symbol:"Fr",name:"CHF"},{symbol:"¥",name:"CNY"},{symbol:"kr",name:"SEK"},{symbol:"NZ$",name:"NZD"},{symbol:"Mex$",name:"MXN"},{symbol:"S$",name:"SGD"},{symbol:"HK$",name:"HKD"},{symbol:"kr",name:"NOK"},{symbol:"₩",name:"KRW"},{symbol:"₺",name:"TRY"},{symbol:"₽",name:"RUB"},{symbol:"R$",name:"BRL"},{symbol:"R",name:"ZAR"}],jh=[{code:"en-US",name:"English"},{code:"es-ES",name:"Español"},{code:"fr-FR",name:"Français"},{code:"de-DE",name:"Deutsch"},{code:"it-IT",name:"Italiano"},{code:"pt-BR",name:"Português (Brasil)"},{code:"ja-JP",name:"日本語"},{code:"zh-CN",name:"中文 (简体)"},{code:"ru-RU",name:"Русский"},{code:"ar-SA",name:"العربية"},{code:"hi-IN",name:"हिन्दी"},{code:"nl-NL",name:"Nederlands"},{code:"ko-KR",name:"한국어"},{code:"sv-SE",name:"Svenska"},{code:"tr-TR",name:"Türkçe"},{code:"pl-PL",name:"Polski"},{code:"da-DK",name:"Dansk"},{code:"fi-FI",name:"Suomi"},{code:"id-ID",name:"Bahasa Indonesia"},{code:"vi-VN",name:"Tiếng Việt"},{code:"th-TH",name:"ภาษาไทย"}];function Nh({selectedTemplate:n,setSelectedTemplate:d}){const[u,o]=z.useState(!1),p=z.useRef(null);return z.useEffect(()=>{function x(g){p.current&&!p.current.contains(g.target)&&o(!1)}return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]),r.jsxs("div",{className:"mt-6 relative",ref:p,children:[r.jsx("h3",{className:"text-gray-700 font-semibold mb-2 dark:text-gray-300",children:"Choose Template"}),r.jsx("div",{className:`border rounded-lg bg-white dark:bg-gray-800 transition-all duration-300 overflow-hidden ${u?"shadow-lg":"hover:shadow-md cursor-pointer"}`,onClick:()=>!u&&o(!0),children:r.jsx("div",{className:`grid grid-cols-2 gap-2 transition-all duration-300 ${u?"max-h-[500px] overflow-y-auto p-2":"max-h-[200px] p-2 pointer-events-none"}`,children:wh.map(x=>r.jsx("div",{className:`relative rounded-lg overflow-hidden border transition-all duration-200 ${n===x.id?"ring-2 ring-blue-500":""}`,onClick:g=>{u&&(g.stopPropagation(),d(x.id))},children:r.jsx("img",{src:x.image,alt:x.name,className:"w-full h-40 object-contain bg-white"})},x.id))})})]})}var nt=(n=>(n.Invoice="INVOICE",n.Estimate="ESTIMATE",n))(nt||{});function Zr(n,d){const[u,o]=z.useState(()=>{try{const x=window.localStorage.getItem(n);return x?JSON.parse(x):d}catch(x){return console.error(x),d}}),p=x=>{try{const g=x instanceof Function?x(u):x;o(g),window.localStorage.setItem(n,JSON.stringify(g))}catch(g){console.error(g)}};return z.useEffect(()=>{const x=g=>{g.key===n&&o(JSON.parse(g.newValue||"null"))};return window.addEventListener("storage",x),()=>{window.removeEventListener("storage",x)}},[n]),[u,p]}const Jm={"en-US":{documentTypeInvoice:"INVOICE",documentTypeEstimate:"ESTIMATE",addYourLogo:"+ Add Your Logo",billTo:"Bill To",invoiceNumberPrefix:"#",date:"Date:",dueDate:"Due Date:",paymentTerms:"Payment Terms:",poNumber:"PO Number:",item:"Item",quantity:"Quantity",rate:"Rate",amount:"Amount",addLineItem:"+ Line Item",paymentMethod:"Payment Method",notes:"Notes",subtotal:"Subtotal",discount:"Discount",tax:"Tax",total:"Total",amountPaid:"Amount Paid",balanceDue:"Balance Due",qrCodeHelper:"Scan to pay",authorizedSignature:"Authorized Signature",switchToEstimate:"Switch to Estimate",switchToInvoice:"Switch to Invoice",language:"Language"},"es-ES":{documentTypeInvoice:"FACTURA",documentTypeEstimate:"PRESUPUESTO",addYourLogo:"+ Añadir Logo",billTo:"Cliente",invoiceNumberPrefix:"Nº",date:"Fecha",dueDate:"Vencimiento",paymentTerms:"Términos de Pago",poNumber:"Nº de Pedido",item:"Concepto",quantity:"Cantidad",rate:"Precio",amount:"Importe",addLineItem:"+ Añadir Línea",paymentMethod:"Método de Pago",notes:"Notas",subtotal:"Subtotal",discount:"Descuento",tax:"Impuestos",total:"Total",amountPaid:"Cantidad Pagada",balanceDue:"Saldo Pendiente",qrCodeHelper:"Escanear para pagar",authorizedSignature:"Firma Autorizada",switchToEstimate:"Cambiar a Presupuesto",switchToInvoice:"Cambiar a Factura",language:"Idioma"},"fr-FR":{documentTypeInvoice:"FACTURE",documentTypeEstimate:"DEVIS",addYourLogo:"+ Ajouter Logo",billTo:"Client",invoiceNumberPrefix:"N°",date:"Date",dueDate:"Échéance",paymentTerms:"Conditions de Paiement",poNumber:"N° de Commande",item:"Article",quantity:"Quantité",rate:"Taux",amount:"Montant",addLineItem:"+ Ajouter Ligne",paymentMethod:"Moyen de Paiement",notes:"Notes",subtotal:"Sous-total",discount:"Remise",tax:"Taxe",total:"Total",amountPaid:"Montant Payé",balanceDue:"Solde Dû",qrCodeHelper:"Scanner pour payer",authorizedSignature:"Signature Autorisée",switchToEstimate:"Passer au Devis",switchToInvoice:"Passer à la Facture",language:"Langue"},"de-DE":{documentTypeInvoice:"RECHNUNG",documentTypeEstimate:"KOSTENVORANSCHLAG",addYourLogo:"+ Logo hinzufügen",billTo:"Rechnung an",invoiceNumberPrefix:"Nr.",date:"Datum",dueDate:"Fällig am",paymentTerms:"Zahlungsbedingungen",poNumber:"Bestellnummer",item:"Artikel",quantity:"Menge",rate:"Satz",amount:"Betrag",addLineItem:"+ Zeile hinzufügen",paymentMethod:"Zahlungsmethode",notes:"Anmerkungen",subtotal:"Zwischensumme",discount:"Rabatt",tax:"Steuer",total:"Gesamt",amountPaid:"Bezahlter Betrag",balanceDue:"Restbetrag",qrCodeHelper:"Scannen zum Bezahlen",authorizedSignature:"Autorisierte Unterschrift",switchToEstimate:"Zu Kostenvoranschlag wechseln",switchToInvoice:"Zu Rechnung wechseln",language:"Sprache"},"it-IT":{documentTypeInvoice:"FATTURA",documentTypeEstimate:"PREVENTIVO",addYourLogo:"+ Aggiungi Logo",billTo:"Cliente",invoiceNumberPrefix:"N.",date:"Data",dueDate:"Scadenza",paymentTerms:"Termini di Pagamento",poNumber:"N. Ordine",item:"Articolo",quantity:"Quantità",rate:"Prezzo",amount:"Importo",addLineItem:"+ Aggiungi Riga",paymentMethod:"Metodo di Pagamento",notes:"Note",subtotal:"Subtotale",discount:"Sconto",tax:"IVA",total:"Totale",amountPaid:"Importo Pagato",balanceDue:"Saldo Dovuto",qrCodeHelper:"Scansiona per pagare",authorizedSignature:"Firma Autorizzata",switchToEstimate:"Passa a Preventivo",switchToInvoice:"Passa a Fattura",language:"Lingua"},"pt-BR":{documentTypeInvoice:"NOTA FISCAL",documentTypeEstimate:"ORÇAMENTO",addYourLogo:"+ Adicionar Logo",billTo:"Cliente",invoiceNumberPrefix:"Nº",date:"Data",dueDate:"Vencimento",paymentTerms:"Termos de Pagamento",poNumber:"Nº do Pedido",item:"Item",quantity:"Quantidade",rate:"Valor",amount:"Total",addLineItem:"+ Adicionar Linha",paymentMethod:"Método de Pagamento",notes:"Observações",subtotal:"Subtotal",discount:"Desconto",tax:"Imposto",total:"Total",amountPaid:"Valor Pago",balanceDue:"Saldo Devedor",qrCodeHelper:"Escanear para pagar",authorizedSignature:"Assinatura Autorizada",switchToEstimate:"Mudar para Orçamento",switchToInvoice:"Mudar para Nota Fiscal",language:"Idioma"},"ja-JP":{documentTypeInvoice:"請求書",documentTypeEstimate:"見積書",addYourLogo:"+ ロゴを追加",billTo:"請求先",invoiceNumberPrefix:"第",date:"日付",dueDate:"支払期日",paymentTerms:"支払条件",poNumber:"注文番号",item:"品目",quantity:"数量",rate:"単価",amount:"金額",addLineItem:"+ 行を追加",paymentMethod:"支払方法",notes:"備考",subtotal:"小計",discount:"割引",tax:"税",total:"合計",amountPaid:"支払済額",balanceDue:"残高",qrCodeHelper:"スキャンして支払う",authorizedSignature:"署名",switchToEstimate:"見積書に切り替え",switchToInvoice:"請求書に切り替え",language:"言語"},"zh-CN":{documentTypeInvoice:"发票",documentTypeEstimate:"估价单",addYourLogo:"+ 添加标志",billTo:"账单收件人",invoiceNumberPrefix:"#",date:"日期",dueDate:"截止日期",paymentTerms:"付款条件",poNumber:"采购订单号",item:"项目",quantity:"数量",rate:"费率",amount:"金额",addLineItem:"+ 添加行项目",paymentMethod:"付款方法",notes:"笔记",subtotal:"小计",discount:"折扣",tax:"税",total:"总计",amountPaid:"已付金额",balanceDue:"应付余额",qrCodeHelper:"扫描支付",authorizedSignature:"授权签名",switchToEstimate:"切换到估价单",switchToInvoice:"切换到发票",language:"语言"},"ru-RU":{documentTypeInvoice:"СЧЕТ",documentTypeEstimate:"СМЕТА",addYourLogo:"+ Добавить логотип",billTo:"Плательщик",invoiceNumberPrefix:"№",date:"Дата",dueDate:"Срок оплаты",paymentTerms:"Условия оплаты",poNumber:"Номер заказа",item:"Наименование",quantity:"Кол-во",rate:"Цена",amount:"Сумма",addLineItem:"+ Добавить строку",paymentMethod:"Способ оплаты",notes:"Примечания",subtotal:"Подытог",discount:"Скидка",tax:"Налог",total:"Итого",amountPaid:"Оплачено",balanceDue:"Остаток к оплате",qrCodeHelper:"Сканировать для оплаты",authorizedSignature:"Авторизованная подпись",switchToEstimate:"Переключиться на смету",switchToInvoice:"Переключиться на счет",language:"Язык"},"ar-SA":{documentTypeInvoice:"فاتورة",documentTypeEstimate:"تقدير",addYourLogo:"+ إضافة شعارك",billTo:"فاتورة إلى",invoiceNumberPrefix:"#",date:"التاريخ",dueDate:"تاريخ الاستحقاق",paymentTerms:"شروط الدفع",poNumber:"رقم طلب الشراء",item:"بند",quantity:"الكمية",rate:"السعر",amount:"المبلغ",addLineItem:"+ إضافة بند",paymentMethod:"طريقة الدفع",notes:"ملاحظات",subtotal:"المجموع الفرعي",discount:"خصم",tax:"ضريبة",total:"المجموع",amountPaid:"المبلغ المدفوع",balanceDue:"الرصيد المستحق",qrCodeHelper:"امسح للدفع",authorizedSignature:"التوقيع المعتمد",switchToEstimate:"التبديل إلى تقدير",switchToInvoice:"التبديل إلى فاتورة",language:"اللغة"},"hi-IN":{documentTypeInvoice:"बीजक",documentTypeEstimate:"अनुमान",addYourLogo:"+ अपना लोगो जोड़ें",billTo:"बिल भेजें",invoiceNumberPrefix:"#",date:"तारीख",dueDate:"देय तिथि",paymentTerms:"भुगतान की शर्तें",poNumber:"पीओ नंबर",item:"मद",quantity:"मात्रा",rate:"दर",amount:"राशि",addLineItem:"+ पंक्ति आइटम जोड़ें",paymentMethod:"भुगतान विधि",notes:"टिप्पणियाँ",subtotal:"उप-योग",discount:"छूट",tax:"कर",total:"कुल",amountPaid:"चुकाई गई राशि",balanceDue:"बकाया राशि",qrCodeHelper:"भुगतान करने के लिए स्कैन करें",authorizedSignature:"अधिकृत हस्ताक्षर",switchToEstimate:"अनुमान पर स्विच करें",switchToInvoice:"बीजक पर स्विच करें",language:"भाषा"},"nl-NL":{documentTypeInvoice:"FACTUUR",documentTypeEstimate:"OFFERTE",addYourLogo:"+ Logo toevoegen",billTo:"Factuur aan",invoiceNumberPrefix:"Nr.",date:"Datum",dueDate:"Vervaldatum",paymentTerms:"Betalingsvoorwaarden",poNumber:"Bestelnummer",item:"Artikel",quantity:"Aantal",rate:"Tarief",amount:"Bedrag",addLineItem:"+ Regel toevoegen",paymentMethod:"Betaalmethode",notes:"Notities",subtotal:"Subtotaal",discount:"Korting",tax:"BTW",total:"Totaal",amountPaid:"Betaald bedrag",balanceDue:"Openstaand bedrag",qrCodeHelper:"Scan om te betalen",authorizedSignature:"Geautoriseerde handtekening",switchToEstimate:"Wisselen naar Offerte",switchToInvoice:"Wisselen naar Factuur",language:"Taal"},"ko-KR":{documentTypeInvoice:"청구서",documentTypeEstimate:"견적서",addYourLogo:"+ 로고 추가",billTo:"청구 대상",invoiceNumberPrefix:"번호",date:"날짜",dueDate:"기한",paymentTerms:"결제 조건",poNumber:"주문 번호",item:"항목",quantity:"수량",rate:"단가",amount:"금액",addLineItem:"+ 항목 추가",paymentMethod:"결제 방법",notes:"메모",subtotal:"소계",discount:"할인",tax:"세금",total:"합계",amountPaid:"지불액",balanceDue:"미지불 잔액",qrCodeHelper:"스캔하여 결제",authorizedSignature:"승인된 서명",switchToEstimate:"견적서로 전환",switchToInvoice:"청구서로 전환",language:"언어"},"sv-SE":{documentTypeInvoice:"FAKTURA",documentTypeEstimate:"OFFERT",addYourLogo:"+ Lägg till logotyp",billTo:"Fakturera till",invoiceNumberPrefix:"Nr.",date:"Datum",dueDate:"Förfallodatum",paymentTerms:"Betalningsvillkor",poNumber:"Inköpsordernummer",item:"Artikel",quantity:"Antal",rate:"Pris",amount:"Belopp",addLineItem:"+ Lägg till rad",paymentMethod:"Betalningsmetod",notes:"Anteckningar",subtotal:"Delsumma",discount:"Rabatt",tax:"Moms",total:"Totalt",amountPaid:"Betalt belopp",balanceDue:"Att betala",qrCodeHelper:"Skanna för att betala",authorizedSignature:"Auktoriserad signatur",switchToEstimate:"Byt till Offert",switchToInvoice:"Byt till Faktura",language:"Språk"},"tr-TR":{documentTypeInvoice:"FATURA",documentTypeEstimate:"TAHMİN",addYourLogo:"+ Logonuzu Ekleyin",billTo:"Fatura Adresi",invoiceNumberPrefix:"#",date:"Tarih",dueDate:"Vade Tarihi",paymentTerms:"Ödeme Koşulları",poNumber:"Sipariş Numarası",item:"Ürün/Hizmet",quantity:"Miktar",rate:"Birim Fiyat",amount:"Tutar",addLineItem:"+ Satır Ekle",paymentMethod:"Ödeme Yöntemi",notes:"Notlar",subtotal:"Ara Toplam",discount:"İndirim",tax:"Vergi",total:"Toplam",amountPaid:"Ödenen Tutar",balanceDue:"Kalan Bakiye",qrCodeHelper:"Ödemek için Tarayın",authorizedSignature:"Yetkili İmza",switchToEstimate:"Tahmine Geç",switchToInvoice:"Faturaya Geç",language:"Dil"},"pl-PL":{documentTypeInvoice:"FAKTURA",documentTypeEstimate:"WYCENA",addYourLogo:"+ Dodaj swoje logo",billTo:"Nabywca",invoiceNumberPrefix:"Nr",date:"Data",dueDate:"Termin płatności",paymentTerms:"Warunki płatności",poNumber:"Nr zamówienia",item:"Pozycja",quantity:"Ilość",rate:"Stawka",amount:"Kwota",addLineItem:"+ Dodaj pozycję",paymentMethod:"Metoda płatności",notes:"Uwagi",subtotal:"Suma częściowa",discount:"Rabat",tax:"Podatek",total:"Razem",amountPaid:"Zapłacono",balanceDue:"Do zapłaty",qrCodeHelper:"Zeskanuj, aby zapłacić",authorizedSignature:"Upoważniony podpis",switchToEstimate:"Przełącz na wycenę",switchToInvoice:"Przełącz na fakturę",language:"Język"},"da-DK":{documentTypeInvoice:"FAKTURA",documentTypeEstimate:"OVERSLAG",addYourLogo:"+ Tilføj dit logo",billTo:"Faktura til",invoiceNumberPrefix:"Nr.",date:"Dato",dueDate:"Forfaldsdato",paymentTerms:"Betalingsbetingelser",poNumber:"Bestillingsnr.",item:"Vare",quantity:"Antal",rate:"Pris",amount:"Beløb",addLineItem:"+ Tilføj linje",paymentMethod:"Betalingsmetode",notes:"Noter",subtotal:"Subtotal",discount:"Rabat",tax:"Moms",total:"Total",amountPaid:"Betalt beløb",balanceDue:"Restbeløb",qrCodeHelper:"Scan for at betale",authorizedSignature:"Autoriseret underskrift",switchToEstimate:"Skift til overslag",switchToInvoice:"Skift til faktura",language:"Sprog"},"fi-FI":{documentTypeInvoice:"LASKU",documentTypeEstimate:"ARVIO",addYourLogo:"+ Lisää logo",billTo:"Laskutustiedot",invoiceNumberPrefix:"Nro.",date:"Päivämäärä",dueDate:"Eräpäivä",paymentTerms:"Maksuehdot",poNumber:"Tilausnumero",item:"Nimike",quantity:"Määrä",rate:"Hinta",amount:"Summa",addLineItem:"+ Lisää rivi",paymentMethod:"Maksutapa",notes:"Huomautukset",subtotal:"Välisumma",discount:"Alennus",tax:"Vero",total:"Yhteensä",amountPaid:"Maksettu summa",balanceDue:"Maksamatta",qrCodeHelper:"Skannaa maksaaksesi",authorizedSignature:"Valtuutettu allekirjoitus",switchToEstimate:"Vaihda arvioon",switchToInvoice:"Vaihda laskuun",language:"Kieli"},"id-ID":{documentTypeInvoice:"FAKTUR",documentTypeEstimate:"PERKIRAAN",addYourLogo:"+ Tambahkan Logo Anda",billTo:"Tagihan Kepada",invoiceNumberPrefix:"#",date:"Tanggal",dueDate:"Tanggal Jatuh Tempo",paymentTerms:"Syarat Pembayaran",poNumber:"Nomor PO",item:"Barang",quantity:"Jumlah",rate:"Harga",amount:"Total",addLineItem:"+ Tambah Baris",paymentMethod:"Metode Pembayaran",notes:"Catatan",subtotal:"Subtotal",discount:"Diskon",tax:"Pajak",total:"Total",amountPaid:"Jumlah Dibayar",balanceDue:"Sisa Tagihan",qrCodeHelper:"Pindai untuk Membayar",authorizedSignature:"Tanda Tangan Resmi",switchToEstimate:"Ubah ke Perkiraan",switchToInvoice:"Ubah ke Faktur",language:"Bahasa"},"vi-VN":{documentTypeInvoice:"HÓA ĐƠN",documentTypeEstimate:"BÁO GIÁ",addYourLogo:"+ Thêm Logo",billTo:"Thanh toán cho",invoiceNumberPrefix:"Số",date:"Ngày",dueDate:"Ngày hết hạn",paymentTerms:"Điều khoản thanh toán",poNumber:"Số Đơn hàng",item:"Mặt hàng",quantity:"Số lượng",rate:"Đơn giá",amount:"Thành tiền",addLineItem:"+ Thêm dòng",paymentMethod:"Phương thức thanh toán",notes:"Ghi chú",subtotal:"Tổng phụ",discount:"Chiết khấu",tax:"Thuế",total:"Tổng cộng",amountPaid:"Đã thanh toán",balanceDue:"Số dư",qrCodeHelper:"Quét để thanh toán",authorizedSignature:"Chữ ký được ủy quyền",switchToEstimate:"Chuyển sang Báo giá",switchToInvoice:"Chuyển sang Hóa đơn",language:"Ngôn ngữ"},"th-TH":{documentTypeInvoice:"ใบแจ้งหนี้",documentTypeEstimate:"ใบเสนอราคา",addYourLogo:"+ เพิ่มโลโก้ของคุณ",billTo:"เรียกเก็บเงินไปที่",invoiceNumberPrefix:"เลขที่",date:"วันที่",dueDate:"วันที่ครบกำหนด",paymentTerms:"เงื่อนไขการชำระเงิน",poNumber:"เลขที่ใบสั่งซื้อ",item:"รายการ",quantity:"จำนวน",rate:"อัตรา",amount:"จำนวนเงิน",addLineItem:"+ เพิ่มรายการ",paymentMethod:"วิธีการชำระเงิน",notes:"หมายเหตุ",subtotal:"ยอดรวมย่อย",discount:"ส่วนลด",tax:"ภาษี",total:"ยอดรวมทั้งหมด",amountPaid:"จำนวนเงินที่ชำระแล้ว",balanceDue:"ยอดคงเหลือ",qrCodeHelper:"สแกนเพื่อชำระเงิน",authorizedSignature:"ลายมือชื่อผู้มีอำนาจ",switchToEstimate:"เปลี่ยนเป็นใบเสนอราคา",switchToInvoice:"เปลี่ยนเป็นใบแจ้งหนี้",language:"ภาษา"}},Ch=({data:n,t:d,currencySymbol:u,qrCodeUrl:o,showQrCode:p,formatNumber:x,formatDate:g,handleFileChange:y,removeImage:h,handleDataChange:m,handleItemChange:j,removeItem:C,addItem:L,subtotal:H,total:X,balanceDue:Y,EditableField:b})=>r.jsxs("div",{id:"invoice-preview",className:"bg-white p-10 rounded-lg font-Stepon shadow-lg text-base template-",children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:n.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:n.logoUrl,alt:"Company or client logo",className:"h-20 w-auto object-contain"}),r.jsx("button",{onClick:()=>h("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:d.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:q=>y(q,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(b,{value:n.from,onChange:m,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-gray-600 uppercase tracking-wide mb-2",children:d.billTo}),r.jsx(b,{value:n.to,onChange:m,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#000000] dark:text-[#000000] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-gray-800 tracking-widest ",children:n.documentType===nt.Invoice?d.documentTypeInvoice:d.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end mt-3",children:[r.jsx("span",{className:"text-gray-500 ",children:d.invoiceNumberPrefix}),r.jsx(b,{value:n.invoiceNumber,onChange:m,name:"invoiceNumber",className:" text-right mt-2 text-[#000000] dark:text-[#000000] font-semibold border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"150px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-gray-600 text-right ",children:d.date}),r.jsx(b,{type:"date",name:"date",value:n.date,onChange:m,className:"text-right text-[#000000] dark:text-[#000000] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"125px"}})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-gray-600 text-right ",children:d.dueDate}),r.jsx(b,{type:"date",name:"dueDate",value:n.dueDate,onChange:m,className:"text-right text-[#000000] dark:text-[#000000]  max-w-40 border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"125px"}})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"flex-shrink-0 grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-gray-600 text-right ",children:d.paymentTerms}),r.jsx(b,{type:"text",name:"paymentTerms",value:n.paymentTerms,onChange:m,placeholder:"e.g. Net 15",className:"text-right text-[#000000] dark:text-[#000000] flex-shrink-0 border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"125px"}})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"flex-shrink-0  grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-gray-600 text-right ",children:d.poNumber}),r.jsx(b,{type:"text",name:"poNumber",value:n.poNumber,onChange:m,placeholder:"e.g. PO-12345",className:"text-right text-[#000000] dark:text-[#000000] flex-shrink-0 border-[#d1d5db] dark:border-[#d1d5db]",style:{width:"125px"}})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed ",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"template1-pdf-border font-bold bg-gray-800 text-white",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:n.items.map(q=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(b,{value:q.description,onChange:T=>j(q.id,"description",T.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(b,{type:"number",value:q.quantity,onChange:T=>j(q.id,"quantity",T.target.value),placeholder:"0",className:" w-[90px] text-center text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(b,{type:"number",value:q.price,onChange:T=>j(q.id,"price",T.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-gray-800 ",children:[u,x(Number(q.quantity)*Number(q.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top overflow-visible",children:r.jsx("button",{onClick:()=>C(q.id),className:" overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},q.id))})]})})}),r.jsx("button",{onClick:L,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:d.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8 space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-gray-600 mb-2 ",children:d.paymentMethod}),r.jsx(b,{name:"paymentMethod",value:n.paymentMethod,onChange:m,rows:2,className:"text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-gray-600 ",children:d.notes}),r.jsx(b,{name:"notes",value:n.notes,onChange:m,rows:3,placeholder:"Thanks for your business!",className:"mt-1 text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-gray-700",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:d.subtotal}),r.jsxs("dd",{children:[u,x(H)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",placeholder:"0",name:"discountRate",value:n.discountRate,onChange:m,className:"max-w-20 text-right  text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",name:"taxRate",value:n.taxRate,onChange:m,className:"max-w-20 text-right text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-gray-900",children:[r.jsx("dt",{children:d.total}),r.jsxs("dd",{children:[u,x(X)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:d.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[u,r.jsx(b,{type:"number",name:"amountPaid",value:n.amountPaid,onChange:m,className:" text-right text-[#000000] dark:text-[#000000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t-2 border-black text-black balance-due-row",children:[r.jsx("dt",{children:d.balanceDue}),r.jsxs("dd",{children:[u,x(Y)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:p&&o&&r.jsxs("div",{children:[r.jsx("img",{src:o,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-gray-500 mt-1 max-w-[96px] text-center ",children:d.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:n.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:n.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>h("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:q=>y(q,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-gray-400 pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-gray-700 ",children:d.authorizedSignature})})]})]})]}),Th=({data:n,t:d,currencySymbol:u,qrCodeUrl:o,showQrCode:p,formatNumber:x,formatDate:g,handleFileChange:y,removeImage:h,handleDataChange:m,handleItemChange:j,removeItem:C,addItem:L,subtotal:H,total:X,balanceDue:Y,EditableField:b})=>{const q={backgroundColor:"#F2F2E9",textColor:"#1C166C"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:q.backgroundColor,color:q.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:n.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:n.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>h("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:d.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>y(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(b,{value:n.from,onChange:m,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#1C166C] dark:text-[#1C166C] uppercase tracking-wide mb-2",children:d.billTo}),r.jsx(b,{value:n.to,onChange:m,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#1C166C] dark:text-[#1C166C] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#1C166C] tracking-widest ",children:n.documentType===nt.Invoice?d.documentTypeInvoice:d.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#1C166C] ",children:d.invoiceNumberPrefix}),r.jsx(b,{value:n.invoiceNumber,onChange:m,name:"invoiceNumber",className:" text-right mt-2 text-[#1C166C] dark:text-[#1C166C] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#1C166C] dark:text-[#1C166C] text-right ",children:d.date}),r.jsx(b,{type:"date",name:"date",value:n.date,onChange:m,className:" w-[130px] text-right text-[#1C166C] dark:text-[#1C166C] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1C166C] dark:text-[#1C166C] text-right ",children:d.dueDate}),r.jsx(b,{type:"date",name:"dueDate",value:n.dueDate,onChange:m,className:" w-[130px] text-right text-[#1C166C] dark:text-[#1C166C] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1C166C] dark:text-[#1C166C] text-right ",children:d.paymentTerms}),r.jsx(b,{type:"text",name:"paymentTerms",value:n.paymentTerms,onChange:m,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#1C166C] dark:text-[#1C166C] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1C166C] dark:text-[#1C166C] text-right ",children:d.poNumber}),r.jsx(b,{type:"text",name:"poNumber",value:n.poNumber,onChange:m,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#1C166C] dark:text-[#1C166C] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#1C166C] dark:text-[#1C166C]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:n.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(b,{value:T.description,onChange:D=>j(T.id,"description",D.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(b,{type:"number",value:T.quantity,onChange:D=>j(T.id,"quantity",D.target.value),placeholder:"0",className:" w-[90px] text-center text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(b,{type:"number",value:T.price,onChange:D=>j(T.id,"price",D.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#1C166C] dark:text-[#1C166C] ",children:[u,x(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>C(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:L,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#1C166C] dark:text-[#1C166C] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:d.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#1C166C] dark:text-[#1C166C] mb-2 ",children:d.paymentMethod}),r.jsx(b,{name:"paymentMethod",value:n.paymentMethod,onChange:m,rows:2,className:"text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#1C166C] dark:text-[#1C166C] ",children:d.notes}),r.jsx(b,{name:"notes",value:n.notes,onChange:m,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#1C166C] dark:text-[#1C166C]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:d.subtotal}),r.jsxs("dd",{children:[u,x(H)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",placeholder:"0",name:"discountRate",value:n.discountRate,onChange:m,className:"max-w-20 text-right  text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#1C166C] dark:text-[#1C166C] flex justify-between items-center",children:[r.jsx("dt",{children:d.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",name:"taxRate",value:n.taxRate,onChange:m,className:"max-w-20 text-right text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#1C166C] dark:text-[#1C166C]",children:[r.jsx("dt",{children:d.total}),r.jsxs("dd",{children:[u,x(X)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:d.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[u,r.jsx(b,{type:"number",name:"amountPaid",value:n.amountPaid,onChange:m,className:" text-right text-[#1C166C] dark:text-[#1C166C] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t-2 border-[#1C166C] text-[#1C166C] dark:text-[#1C166C] balance-due-row",children:[r.jsx("dt",{children:d.balanceDue}),r.jsxs("dd",{children:[u,x(Y)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:p&&o&&r.jsxs("div",{children:[r.jsx("img",{src:o,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#1C166C] dark:text-[#1C166C] mt-1 max-w-[96px] text-center ",children:d.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:n.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:n.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>h("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>y(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#1C166C] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#1C166C] dark:text-[#1C166C] ",children:d.authorizedSignature})})]})]})]})},Sh=({data:n,t:d,currencySymbol:u,qrCodeUrl:o,showQrCode:p,formatNumber:x,formatDate:g,handleFileChange:y,removeImage:h,handleDataChange:m,handleItemChange:j,removeItem:C,addItem:L,subtotal:H,total:X,balanceDue:Y,EditableField:b})=>{const q={backgroundColor:"#000000ff",textColor:"#A6A6A6"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:q.backgroundColor,color:q.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:n.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:n.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>h("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:d.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>y(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(b,{value:n.from,onChange:m,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#A6A6A6] dark:text-[#A6A6A6] uppercase tracking-wide mb-2",children:d.billTo}),r.jsx(b,{value:n.to,onChange:m,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#A6A6A6] dark:text-[#A6A6A6] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#A6A6A6] tracking-widest ",children:n.documentType===nt.Invoice?d.documentTypeInvoice:d.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#A6A6A6] ",children:d.invoiceNumberPrefix}),r.jsx(b,{value:n.invoiceNumber,onChange:m,name:"invoiceNumber",className:" text-right mt-2 text-[#A6A6A6] dark:text-[#A6A6A6] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] text-right ",children:d.date}),r.jsx(b,{type:"date",name:"date",value:n.date,onChange:m,className:" w-[130px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] text-right ",children:d.dueDate}),r.jsx(b,{type:"date",name:"dueDate",value:n.dueDate,onChange:m,className:" w-[130px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] text-right ",children:d.paymentTerms}),r.jsx(b,{type:"text",name:"paymentTerms",value:n.paymentTerms,onChange:m,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] text-right ",children:d.poNumber}),r.jsx(b,{type:"text",name:"poNumber",value:n.poNumber,onChange:m,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#A6A6A6] dark:text-[#A6A6A6]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:n.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(b,{value:T.description,onChange:D=>j(T.id,"description",D.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(b,{type:"number",value:T.quantity,onChange:D=>j(T.id,"quantity",D.target.value),placeholder:"0",className:" w-[90px] text-center text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(b,{type:"number",value:T.price,onChange:D=>j(T.id,"price",D.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#A6A6A6] dark:text-[#A6A6A6] ",children:[u,x(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>C(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:L,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#A6A6A6] dark:text-[#A6A6A6] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:d.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#A6A6A6] dark:text-[#A6A6A6] mb-2 ",children:d.paymentMethod}),r.jsx(b,{name:"paymentMethod",value:n.paymentMethod,onChange:m,rows:2,className:"text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#A6A6A6] dark:text-[#A6A6A6] ",children:d.notes}),r.jsx(b,{name:"notes",value:n.notes,onChange:m,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#A6A6A6] dark:text-[#A6A6A6]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:d.subtotal}),r.jsxs("dd",{children:[u,x(H)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",placeholder:"0",name:"discountRate",value:n.discountRate,onChange:m,className:"max-w-20 text-right  text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#A6A6A6] dark:text-[#A6A6A6] flex justify-between items-center",children:[r.jsx("dt",{children:d.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",name:"taxRate",value:n.taxRate,onChange:m,className:"max-w-20 text-right text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#A6A6A6] dark:text-[#A6A6A6]",children:[r.jsx("dt",{children:d.total}),r.jsxs("dd",{children:[u,x(X)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:d.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[u,r.jsx(b,{type:"number",name:"amountPaid",value:n.amountPaid,onChange:m,className:" text-right text-[#A6A6A6] dark:text-[#A6A6A6] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#A6A6A6] dark:text-[#A6A6A6] balance-due-row",children:[r.jsx("dt",{children:d.balanceDue}),r.jsxs("dd",{children:[u,x(Y)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:p&&o&&r.jsxs("div",{children:[r.jsx("img",{src:o,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#A6A6A6] dark:text-[#A6A6A6] mt-1 max-w-[96px] text-center ",children:d.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:n.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:n.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>h("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>y(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#A6A6A6] dark:text-[#A6A6A6] ",children:d.authorizedSignature})})]})]})]})},Ah=({data:n,t:d,currencySymbol:u,qrCodeUrl:o,showQrCode:p,formatNumber:x,formatDate:g,handleFileChange:y,removeImage:h,handleDataChange:m,handleItemChange:j,removeItem:C,addItem:L,subtotal:H,total:X,balanceDue:Y,EditableField:b})=>{const q={backgroundColor:"#FEFEFE",textColor:"#1A485F"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:q.backgroundColor,color:q.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:n.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:n.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>h("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:d.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>y(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(b,{value:n.from,onChange:m,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#1A485F] dark:text-[#1A485F] uppercase tracking-wide mb-2",children:d.billTo}),r.jsx(b,{value:n.to,onChange:m,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#1A485F] dark:text-[#1A485F] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#1A485F] tracking-widest ",children:n.documentType===nt.Invoice?d.documentTypeInvoice:d.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#1A485F] ",children:d.invoiceNumberPrefix}),r.jsx(b,{value:n.invoiceNumber,onChange:m,name:"invoiceNumber",className:" text-right mt-2 text-[#1A485F] dark:text-[#1A485F] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#1A485F] dark:text-[#1A485F] text-right ",children:d.date}),r.jsx(b,{type:"date",name:"date",value:n.date,onChange:m,className:" w-[130px] text-right text-[#1A485F] dark:text-[#1A485F] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1A485F] dark:text-[#1A485F] text-right ",children:d.dueDate}),r.jsx(b,{type:"date",name:"dueDate",value:n.dueDate,onChange:m,className:" w-[130px] text-right text-[#1A485F] dark:text-[#1A485F] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1A485F] dark:text-[#1A485F] text-right ",children:d.paymentTerms}),r.jsx(b,{type:"text",name:"paymentTerms",value:n.paymentTerms,onChange:m,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#1A485F] dark:text-[#1A485F] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#1A485F] dark:text-[#1A485F] text-right ",children:d.poNumber}),r.jsx(b,{type:"text",name:"poNumber",value:n.poNumber,onChange:m,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#1A485F] dark:text-[#1A485F] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#1A485F] dark:text-[#1A485F]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:n.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(b,{value:T.description,onChange:D=>j(T.id,"description",D.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(b,{type:"number",value:T.quantity,onChange:D=>j(T.id,"quantity",D.target.value),placeholder:"0",className:" w-[90px] text-center text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(b,{type:"number",value:T.price,onChange:D=>j(T.id,"price",D.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#1A485F] dark:text-[#1A485F] ",children:[u,x(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>C(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:L,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#1A485F] dark:text-[#1A485F] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:d.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#1A485F] dark:text-[#1A485F] mb-2 ",children:d.paymentMethod}),r.jsx(b,{name:"paymentMethod",value:n.paymentMethod,onChange:m,rows:2,className:"text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#1A485F] dark:text-[#1A485F] ",children:d.notes}),r.jsx(b,{name:"notes",value:n.notes,onChange:m,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#1A485F] dark:text-[#1A485F]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:d.subtotal}),r.jsxs("dd",{children:[u,x(H)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",placeholder:"0",name:"discountRate",value:n.discountRate,onChange:m,className:"max-w-20 text-right  text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#1A485F] dark:text-[#1A485F] flex justify-between items-center",children:[r.jsx("dt",{children:d.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",name:"taxRate",value:n.taxRate,onChange:m,className:"max-w-20 text-right text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#1A485F] dark:text-[#1A485F]",children:[r.jsx("dt",{children:d.total}),r.jsxs("dd",{children:[u,x(X)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:d.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[u,r.jsx(b,{type:"number",name:"amountPaid",value:n.amountPaid,onChange:m,className:" text-right text-[#1A485F] dark:text-[#1A485F] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#1A485F] dark:text-[#1A485F] balance-due-row",children:[r.jsx("dt",{children:d.balanceDue}),r.jsxs("dd",{children:[u,x(Y)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:p&&o&&r.jsxs("div",{children:[r.jsx("img",{src:o,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#1A485F] dark:text-[#1A485F] mt-1 max-w-[96px] text-center ",children:d.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:n.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:n.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>h("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>y(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#1A485F] dark:text-[#1A485F] ",children:d.authorizedSignature})})]})]})]})},Eh=({data:n,t:d,currencySymbol:u,qrCodeUrl:o,showQrCode:p,formatNumber:x,formatDate:g,handleFileChange:y,removeImage:h,handleDataChange:m,handleItemChange:j,removeItem:C,addItem:L,subtotal:H,total:X,balanceDue:Y,EditableField:b})=>{const q={backgroundColor:"#FEFEFE",textColor:"#9B0000"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:q.backgroundColor,color:q.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:n.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:n.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>h("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:d.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>y(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(b,{value:n.from,onChange:m,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#9B0000] dark:text-[#9B0000] uppercase tracking-wide mb-2",children:d.billTo}),r.jsx(b,{value:n.to,onChange:m,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#9B0000] dark:text-[#9B0000] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#9B0000] tracking-widest ",children:n.documentType===nt.Invoice?d.documentTypeInvoice:d.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#9B0000] ",children:d.invoiceNumberPrefix}),r.jsx(b,{value:n.invoiceNumber,onChange:m,name:"invoiceNumber",className:" text-right mt-2 text-[#9B0000] dark:text-[#9B0000] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:d.date}),r.jsx(b,{type:"date",name:"date",value:n.date,onChange:m,className:" w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:d.dueDate}),r.jsx(b,{type:"date",name:"dueDate",value:n.dueDate,onChange:m,className:" w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:d.paymentTerms}),r.jsx(b,{type:"text",name:"paymentTerms",value:n.paymentTerms,onChange:m,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:d.poNumber}),r.jsx(b,{type:"text",name:"poNumber",value:n.poNumber,onChange:m,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#9B0000] dark:text-[#9B0000]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:n.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(b,{value:T.description,onChange:D=>j(T.id,"description",D.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(b,{type:"number",value:T.quantity,onChange:D=>j(T.id,"quantity",D.target.value),placeholder:"0",className:" w-[90px] text-center text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(b,{type:"number",value:T.price,onChange:D=>j(T.id,"price",D.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#9B0000] dark:text-[#9B0000] ",children:[u,x(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>C(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:L,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#9B0000] dark:text-[#9B0000] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:d.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#9B0000] dark:text-[#9B0000] mb-2 ",children:d.paymentMethod}),r.jsx(b,{name:"paymentMethod",value:n.paymentMethod,onChange:m,rows:2,className:"text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#9B0000] dark:text-[#9B0000] ",children:d.notes}),r.jsx(b,{name:"notes",value:n.notes,onChange:m,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#9B0000] dark:text-[#9B0000]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:d.subtotal}),r.jsxs("dd",{children:[u,x(H)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",placeholder:"0",name:"discountRate",value:n.discountRate,onChange:m,className:"max-w-20 text-right  text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#9B0000] dark:text-[#9B0000] flex justify-between items-center",children:[r.jsx("dt",{children:d.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",name:"taxRate",value:n.taxRate,onChange:m,className:"max-w-20 text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#9B0000] dark:text-[#9B0000]",children:[r.jsx("dt",{children:d.total}),r.jsxs("dd",{children:[u,x(X)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:d.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[u,r.jsx(b,{type:"number",name:"amountPaid",value:n.amountPaid,onChange:m,className:" text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#9B0000] dark:text-[#9B0000] balance-due-row",children:[r.jsx("dt",{children:d.balanceDue}),r.jsxs("dd",{children:[u,x(Y)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:p&&o&&r.jsxs("div",{children:[r.jsx("img",{src:o,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#9B0000] dark:text-[#9B0000] mt-1 max-w-[96px] text-center ",children:d.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:n.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:n.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>h("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>y(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#9B0000] dark:text-[#9B0000] ",children:d.authorizedSignature})})]})]})]})},zh=({data:n,t:d,currencySymbol:u,qrCodeUrl:o,showQrCode:p,formatNumber:x,formatDate:g,handleFileChange:y,removeImage:h,handleDataChange:m,handleItemChange:j,removeItem:C,addItem:L,subtotal:H,total:X,balanceDue:Y,EditableField:b})=>{const q={backgroundColor:"#F7F7F5",textColor:"#3C2C22"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:q.backgroundColor,color:q.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:n.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:n.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>h("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:d.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>y(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(b,{value:n.from,onChange:m,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#3C2C22] dark:text-[#3C2C22] uppercase tracking-wide mb-2",children:d.billTo}),r.jsx(b,{value:n.to,onChange:m,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#3C2C22] dark:text-[#3C2C22] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#3C2C22] tracking-widest ",children:n.documentType===nt.Invoice?d.documentTypeInvoice:d.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#3C2C22] ",children:d.invoiceNumberPrefix}),r.jsx(b,{value:n.invoiceNumber,onChange:m,name:"invoiceNumber",className:" text-right mt-2 text-[#3C2C22] dark:text-[#3C2C22] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#3C2C22] dark:text-[#3C2C22] text-right ",children:d.date}),r.jsx(b,{type:"date",name:"date",value:n.date,onChange:m,className:" w-[130px] text-right text-[#3C2C22] dark:text-[#3C2C22] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#3C2C22] dark:text-[#3C2C22] text-right ",children:d.dueDate}),r.jsx(b,{type:"date",name:"dueDate",value:n.dueDate,onChange:m,className:" w-[130px] text-right text-[#3C2C22] dark:text-[#3C2C22] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#3C2C22] dark:text-[#3C2C22] text-right ",children:d.paymentTerms}),r.jsx(b,{type:"text",name:"paymentTerms",value:n.paymentTerms,onChange:m,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#3C2C22] dark:text-[#3C2C22] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#3C2C22] dark:text-[#3C2C22] text-right ",children:d.poNumber}),r.jsx(b,{type:"text",name:"poNumber",value:n.poNumber,onChange:m,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#3C2C22] dark:text-[#3C2C22] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#3C2C22] dark:text-[#3C2C22]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:n.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(b,{value:T.description,onChange:D=>j(T.id,"description",D.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(b,{type:"number",value:T.quantity,onChange:D=>j(T.id,"quantity",D.target.value),placeholder:"0",className:" w-[90px] text-center text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(b,{type:"number",value:T.price,onChange:D=>j(T.id,"price",D.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#3C2C22] dark:text-[#3C2C22] ",children:[u,x(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>C(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:L,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#3C2C22] dark:text-[#3C2C22] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:d.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#3C2C22] dark:text-[#3C2C22] mb-2 ",children:d.paymentMethod}),r.jsx(b,{name:"paymentMethod",value:n.paymentMethod,onChange:m,rows:2,className:"text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#3C2C22] dark:text-[#3C2C22] ",children:d.notes}),r.jsx(b,{name:"notes",value:n.notes,onChange:m,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#3C2C22] dark:text-[#3C2C22]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:d.subtotal}),r.jsxs("dd",{children:[u,x(H)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",placeholder:"0",name:"discountRate",value:n.discountRate,onChange:m,className:"max-w-20 text-right  text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#3C2C22] dark:text-[#3C2C22] flex justify-between items-center",children:[r.jsx("dt",{children:d.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",name:"taxRate",value:n.taxRate,onChange:m,className:"max-w-20 text-right text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#3C2C22] dark:text-[#3C2C22]",children:[r.jsx("dt",{children:d.total}),r.jsxs("dd",{children:[u,x(X)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:d.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[u,r.jsx(b,{type:"number",name:"amountPaid",value:n.amountPaid,onChange:m,className:" text-right text-[#3C2C22] dark:text-[#3C2C22] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#3C2C22] dark:text-[#3C2C22] balance-due-row",children:[r.jsx("dt",{children:d.balanceDue}),r.jsxs("dd",{children:[u,x(Y)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:p&&o&&r.jsxs("div",{children:[r.jsx("img",{src:o,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#3C2C22] dark:text-[#3C2C22] mt-1 max-w-[96px] text-center ",children:d.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:n.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:n.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>h("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>y(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#3C2C22] dark:text-[#3C2C22] ",children:d.authorizedSignature})})]})]})]})},Mh=({data:n,t:d,currencySymbol:u,qrCodeUrl:o,showQrCode:p,formatNumber:x,formatDate:g,handleFileChange:y,removeImage:h,handleDataChange:m,handleItemChange:j,removeItem:C,addItem:L,subtotal:H,total:X,balanceDue:Y,EditableField:b})=>{const q={backgroundColor:"#1A1915",textColor:"#EFE5E4"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:q.backgroundColor,color:q.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:n.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:n.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>h("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:d.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>y(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(b,{value:n.from,onChange:m,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#EFE5E4] dark:text-[#EFE5E4] uppercase tracking-wide mb-2",children:d.billTo}),r.jsx(b,{value:n.to,onChange:m,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#EFE5E4] dark:text-[#EFE5E4] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#EFE5E4] tracking-widest ",children:n.documentType===nt.Invoice?d.documentTypeInvoice:d.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#EFE5E4] ",children:d.invoiceNumberPrefix}),r.jsx(b,{value:n.invoiceNumber,onChange:m,name:"invoiceNumber",className:" text-right mt-2 text-[#EFE5E4] dark:text-[#EFE5E4] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] text-right ",children:d.date}),r.jsx(b,{type:"date",name:"date",value:n.date,onChange:m,className:" w-[130px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] text-right ",children:d.dueDate}),r.jsx(b,{type:"date",name:"dueDate",value:n.dueDate,onChange:m,className:" w-[130px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] text-right ",children:d.paymentTerms}),r.jsx(b,{type:"text",name:"paymentTerms",value:n.paymentTerms,onChange:m,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] text-right ",children:d.poNumber}),r.jsx(b,{type:"text",name:"poNumber",value:n.poNumber,onChange:m,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#EFE5E4] dark:text-[#EFE5E4]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:n.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(b,{value:T.description,onChange:D=>j(T.id,"description",D.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(b,{type:"number",value:T.quantity,onChange:D=>j(T.id,"quantity",D.target.value),placeholder:"0",className:" w-[90px] text-center text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(b,{type:"number",value:T.price,onChange:D=>j(T.id,"price",D.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#EFE5E4] dark:text-[#EFE5E4] ",children:[u,x(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>C(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:L,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#EFE5E4] dark:text-[#EFE5E4] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:d.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#EFE5E4] dark:text-[#EFE5E4] mb-2 ",children:d.paymentMethod}),r.jsx(b,{name:"paymentMethod",value:n.paymentMethod,onChange:m,rows:2,className:"text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#EFE5E4] dark:text-[#EFE5E4] ",children:d.notes}),r.jsx(b,{name:"notes",value:n.notes,onChange:m,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#EFE5E4] dark:text-[#EFE5E4]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:d.subtotal}),r.jsxs("dd",{children:[u,x(H)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",placeholder:"0",name:"discountRate",value:n.discountRate,onChange:m,className:"max-w-20 text-right  text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#EFE5E4] dark:text-[#EFE5E4] flex justify-between items-center",children:[r.jsx("dt",{children:d.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",name:"taxRate",value:n.taxRate,onChange:m,className:"max-w-20 text-right text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#EFE5E4] dark:text-[#EFE5E4]",children:[r.jsx("dt",{children:d.total}),r.jsxs("dd",{children:[u,x(X)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:d.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[u,r.jsx(b,{type:"number",name:"amountPaid",value:n.amountPaid,onChange:m,className:" text-right text-[#EFE5E4] dark:text-[#EFE5E4] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#EFE5E4] dark:text-[#EFE5E4] balance-due-row",children:[r.jsx("dt",{children:d.balanceDue}),r.jsxs("dd",{children:[u,x(Y)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:p&&o&&r.jsxs("div",{children:[r.jsx("img",{src:o,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#EFE5E4] dark:text-[#EFE5E4] mt-1 max-w-[96px] text-center ",children:d.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:n.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:n.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>h("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>y(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#EFE5E4] dark:text-[#EFE5E4] ",children:d.authorizedSignature})})]})]})]})},Bh=({data:n,t:d,currencySymbol:u,qrCodeUrl:o,showQrCode:p,formatNumber:x,formatDate:g,handleFileChange:y,removeImage:h,handleDataChange:m,handleItemChange:j,removeItem:C,addItem:L,subtotal:H,total:X,balanceDue:Y,EditableField:b})=>{const q={backgroundColor:"#FEFEFE",textColor:"#9B0000"};return r.jsxs("div",{id:"invoice-preview",className:"p-10 rounded-lg font-Stepon shadow-lg text-base",style:{backgroundColor:q.backgroundColor,color:q.textColor,backgroundImage:"none",boxShadow:"none",isolation:"isolate"},children:[r.jsxs("div",{className:"flex flex-row justify-between items-start mb-12 gap-4",children:[r.jsxs("div",{className:"w-2/5",children:[r.jsx("div",{"data-export-id":"logo-container",children:n.logoUrl?r.jsxs("div",{className:"relative group",children:[r.jsx("img",{src:n.logoUrl,alt:"Company or client logo",className:"h-20  w-auto object-contain"}),r.jsx("button",{onClick:()=>h("logoUrl"),className:"absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"logo-upload",className:"cursor-pointer group preview-only inline-block",children:[r.jsx("div",{className:"w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition",children:d.addYourLogo}),r.jsx("input",{id:"logo-upload",type:"file",className:"hidden",onChange:T=>y(T,"logoUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"mt-4 ",children:r.jsx(b,{value:n.from,onChange:m,name:"from",placeholder:`Your Company
123 Your Street
Your City, ST 12345
your@email.com`,className:"text-lg w-[300px] text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]",rows:4})}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h2",{className:"text-sm font-bold text-[#9B0000] dark:text-[#9B0000] uppercase tracking-wide mb-2",children:d.billTo}),r.jsx(b,{value:n.to,onChange:m,name:"to",placeholder:`Client Company
456 Client Street
Client City, ST 54321
client@email.com`,className:"text-lg text-[#9B0000] dark:text-[#9B0000] w-[300px] border-[#d1d5db] dark:border-[#d1d5db] ",rows:4})]})]}),r.jsxs("div",{className:"w-auto text-right",children:[r.jsx("h1",{className:"text-5xl font-bold uppercase text-[#9B0000] tracking-widest ",children:n.documentType===nt.Invoice?d.documentTypeInvoice:d.documentTypeEstimate}),r.jsxs("div",{className:"flex items-center inline-flex justify-end  mt-3",children:[r.jsx("span",{className:"text-[#9B0000] ",children:d.invoiceNumberPrefix}),r.jsx(b,{value:n.invoiceNumber,onChange:m,name:"invoiceNumber",className:" text-right mt-2 text-[#9B0000] dark:text-[#9B0000] font-semibold border-[#d1d5db] dark:border-[#d1d5db] ",style:{width:"220px"}})]}),r.jsxs("div",{className:"space-y-2 mt-[50px]",children:[r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:" font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:d.date}),r.jsx(b,{type:"date",name:"date",value:n.date,onChange:m,className:" w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:d.dueDate}),r.jsx(b,{type:"date",name:"dueDate",value:n.dueDate,onChange:m,className:" w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-40 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"payment-terms-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:d.paymentTerms}),r.jsx(b,{type:"text",name:"paymentTerms",value:n.paymentTerms,onChange:m,placeholder:"e.g. Net 15",className:"w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]}),r.jsxs("div",{"data-export-id":"po-number-row",className:"grid grid-cols-[1fr_auto] items-center gap-4",children:[r.jsx("span",{className:"font-semibold text-[#9B0000] dark:text-[#9B0000] text-right ",children:d.poNumber}),r.jsx(b,{type:"text",name:"poNumber",value:n.poNumber,onChange:m,placeholder:"e.g. PO-12345",className:"w-[130px] text-right text-[#9B0000] dark:text-[#9B0000] max-w-36 border-[#d1d5db] dark:border-[#d1d5db]"})]})]})]})]}),r.jsx("div",{className:"flow-root line-items-table bg-[#f9f9f9] dark:bg-[#f9f9f9] p-0 rounded-lg",children:r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"min-w-full table-fixed",children:[r.jsxs("colgroup",{children:[r.jsx("col",{}),r.jsx("col",{className:"w-24"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-28"}),r.jsx("col",{className:"w-6"})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-bold text-[#9B0000] dark:text-[#9B0000]",children:[r.jsx("th",{className:"py-2  px-4 text-left font-semibold align-middle",children:"Item"}),r.jsx("th",{className:"py-2  px-4 text-center font-semibold align-middle",children:"Quantity"}),r.jsx("th",{className:"py-2 pl-11 text-center font-semibold align-middle",children:"Rate"}),r.jsx("th",{className:"py-2 px-4 text-right font-semibold align-middle",children:"Amount"})]})}),r.jsx("tbody",{children:n.items.map(T=>r.jsxs("tr",{className:"border-b border-gray-200 group 0",children:[r.jsx("td",{className:"py-2 pl-4 pr-1 align-top",children:r.jsx(b,{value:T.description,onChange:D=>j(T.id,"description",D.target.value),placeholder:"Description of item/service...",rows:2,className:" w-[420px] text-left text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-1 align-top text-center",children:r.jsx(b,{type:"number",value:T.quantity,onChange:D=>j(T.id,"quantity",D.target.value),placeholder:"0",className:" w-[90px] text-center text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsx("td",{className:"py-2 pl-1 pr-3 align-top text-right",children:r.jsx(b,{type:"number",value:T.price,onChange:D=>j(T.id,"price",D.target.value),placeholder:"0.00",className:" w-[110px] text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})}),r.jsxs("td",{className:"py-2 pl-1 pr-0 text-right align-top text-[#9B0000] dark:text-[#9B0000] ",children:[u,x(Number(T.quantity)*Number(T.price))]}),r.jsx("td",{className:"py-0 pl-0 pr-0 text-center align-top",children:r.jsx("button",{onClick:()=>C(T.id),className:"overflow-visible text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7",viewBox:"0 4 20 7",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},T.id))})]})})}),r.jsx("button",{onClick:L,className:"mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-[#9B0000] dark:text-[#9B0000] rounded-md hover:border-primary-500 hover:text-primary-500 transition-all preview-only",children:d.addLineItem}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-start gap-8",children:[r.jsxs("div",{className:"w-[35%] mt-8  space-y-8",children:[r.jsxs("div",{"data-export-id":"payment-method-container",children:[r.jsx("h4",{className:"font-bold text-[#9B0000] dark:text-[#9B0000] mb-2 ",children:d.paymentMethod}),r.jsx(b,{name:"paymentMethod",value:n.paymentMethod,onChange:m,rows:2,className:"text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]",placeholder:`PayPal Account: example@paypal.com
Bank Account: 
XXXX-XXXX-XXXX`})]}),r.jsxs("div",{"data-export-id":"notes-container",children:[r.jsx("h4",{className:"font-bold text-[#9B0000] dark:text-[#9B0000] ",children:d.notes}),r.jsx(b,{name:"notes",value:n.notes,onChange:m,rows:2,placeholder:"Thanks for your business!",className:"mt-1 text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db]"})]})]}),r.jsx("div",{className:"w-[35%] totals-summary",children:r.jsxs("dl",{className:"space-y-2 text-[#9B0000] dark:text-[#9B0000]",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("dt",{children:d.subtotal}),r.jsxs("dd",{children:[u,x(H)]})]}),r.jsxs("div",{"data-export-id":"discount-row",className:"flex justify-between items-center",children:[r.jsx("dt",{children:d.discount}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",placeholder:"0",name:"discountRate",value:n.discountRate,onChange:m,className:"max-w-20 text-right  text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"tax-row",className:" text-[#9B0000] dark:text-[#9B0000] flex justify-between items-center",children:[r.jsx("dt",{children:d.tax}),r.jsxs("dd",{className:"flex items-center",children:[r.jsx(b,{type:"number",name:"taxRate",value:n.taxRate,onChange:m,className:"max-w-20 text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"5"}),r.jsx("span",{children:"%"})]})]}),r.jsxs("div",{"data-export-id":"total-row",className:"flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-[#9B0000] dark:text-[#9B0000]",children:[r.jsx("dt",{children:d.total}),r.jsxs("dd",{children:[u,x(X)]})]}),r.jsxs("div",{"data-export-id":"amount-paid-row",className:"flex justify-between items-center pt-1",children:[r.jsx("dt",{children:d.amountPaid}),r.jsxs("dd",{className:"flex items-center",children:[u,r.jsx(b,{type:"number",name:"amountPaid",value:n.amountPaid,onChange:m,className:" text-right text-[#9B0000] dark:text-[#9B0000] border-[#d1d5db] dark:border-[#d1d5db] flex-shrink-0",placeholder:"0.00",style:{width:"120px"}})]})]}),r.jsxs("div",{"data-export-id":"balance-due-row",className:"flex justify-between font-bold text-xl pt-2 mt-2 border-t border-gray-300 text-[#9B0000] dark:text-[#9B0000] balance-due-row",children:[r.jsx("dt",{children:d.balanceDue}),r.jsxs("dd",{children:[u,x(Y)]})]})]})})]}),r.jsxs("div",{className:"mt-12 flex flex-row justify-between items-end gap-8 pt-3 ",children:[r.jsx("div",{children:p&&o&&r.jsxs("div",{children:[r.jsx("img",{src:o,alt:"QR Code for payment link",className:"w-24 h-24"}),r.jsx("p",{className:"text-xs text-[#9B0000] dark:text-[#9B0000] mt-1 max-w-[96px] text-center ",children:d.qrCodeHelper})]})}),r.jsxs("div",{"data-export-id":"signature-container",className:"w-48 text-center",children:[r.jsx("div",{className:"h-20 mb-2",children:n.signatureUrl?r.jsxs("div",{className:"relative group h-full",children:[r.jsx("img",{src:n.signatureUrl,alt:"Authorized signature",className:"h-full w-auto object-contain mx-auto"}),r.jsx("button",{onClick:()=>h("signatureUrl"),className:"absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only",children:"×"})]}):r.jsxs("label",{htmlFor:"signature-upload",className:"cursor-pointer group h-full flex items-end justify-center preview-only",children:[r.jsx("span",{className:"text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition :text-primary-400",children:"Click to upload signature"}),r.jsx("input",{id:"signature-upload",type:"file",className:"hidden",onChange:T=>y(T,"signatureUrl"),accept:"image/*"})]})}),r.jsx("div",{className:"border-t border-[#d1d5db] pt-1 ",children:r.jsx("p",{className:"text-sm font-semibold text-[#9B0000] dark:text-[#9B0000] ",children:d.authorizedSignature})})]})]})]})},Rh=n=>{const[d,u]=z.useState(!1),{data:o,t:p,currencySymbol:x,qrCodeUrl:g,showQrCode:y,formatNumber:h,formatDate:m,handleFileChange:j,removeImage:C,handleDataChange:L,handleItemChange:H,removeItem:X,addItem:Y,subtotal:b,total:q,balanceDue:T,EditableField:D,templateId:me}=n,ue=()=>{switch(me){case"template-1":return r.jsx(Ch,{...n});case"template-2":return r.jsx(Th,{...n});case"template-3":return r.jsx(Sh,{...n});case"template-4":return r.jsx(Ah,{...n});case"template-5":return r.jsx(Eh,{...n});case"template-6":return r.jsx(zh,{...n});case"template-7":return r.jsx(Mh,{...n});case"template-8":return r.jsx(Bh,{...n});default:return r.jsx("div",{id:"invoice-preview",className:`bg-white p-10 rounded-lg shadow-lg template-${me} ${d?"pdf-safe":""}`})}};return r.jsx(r.Fragment,{children:ue()})},Oh=async(n,d,u)=>{var h,m,j,C,L;const o=document.getElementById("invoice-preview");if(!o){console.error("invoice-preview element not found"),alert("Invoice preview not found!");return}const p=window.getComputedStyle(o),x=p.backgroundColor&&p.backgroundColor!=="transparent"?p.backgroundColor:"#ffffff",g=o.cloneNode(!0);g.querySelectorAll(".preview-only").forEach(H=>H.remove()),g.querySelectorAll("input, textarea").forEach(H=>{const X=H,Y=X.parentElement;if(!Y)return;const b=document.createElement("div");b.textContent=X.type==="date"&&X.value?u(X.value):X.value||"",b.style.display="block",b.style.whiteSpace="pre-wrap",Y.replaceChild(b,X)}),n.paymentMethod||(h=g.querySelector('[data-export-id="payment-method-container"]'))==null||h.remove(),n.poNumber||(m=g.querySelector('[data-export-id="po-number-row"]'))==null||m.remove(),n.paymentTerms||(j=g.querySelector('[data-export-id="payment-terms-row"]'))==null||j.remove(),n.notes||(C=g.querySelector('[data-export-id="notes-container"]'))==null||C.remove(),n.signatureUrl||(L=g.querySelector('[data-export-id="signature-container"]'))==null||L.remove(),g.style.boxSizing="border-box",g.style.backgroundColor=x,g.style.color=p.color||"#000",g.style.width=o.offsetWidth+"px",g.style.height="auto",g.style.maxHeight="none",g.style.overflow="visible",g.style.transform="none",g.style.padding=p.padding,g.querySelectorAll(".template1-pdf-border").forEach(H=>{H.style.borderBottom="25px solid #1F2937"});const y=document.createElement("div");y.style.position="absolute",y.style.top="-99999px",y.style.left="0",y.style.width=o.offsetWidth+"px",y.style.height="auto",y.style.overflow="visible",y.style.pointerEvents="none",y.appendChild(g),document.body.appendChild(y);try{await new Promise(D=>setTimeout(D,80));const H=await html2canvas(g,{scale:3,useCORS:!0,backgroundColor:x,windowWidth:g.scrollWidth,windowHeight:g.scrollHeight,scrollY:-window.scrollY});console.log("canvas px:",H.width,H.height),console.log("clone css width (px):",g.offsetWidth,"clone scrollHeight:",g.scrollHeight);const X=H.toDataURL("image/png"),Y=D=>D*.264583,b=Y(H.width),q=Y(H.height),T=new jspdf.jsPDF({orientation:b>=q?"l":"p",unit:"mm",format:[Math.round(b*100)/100,Math.round(q*100)/100]});T.addImage(X,"PNG",0,0,b,q),T.save(`${n.documentType.toLowerCase()}-${n.invoiceNumber}.pdf`)}catch(H){console.error("PDF export error:",H),alert("Error generating PDF (see console).")}finally{document.body.removeChild(y)}},Dh={documentType:nt.Invoice,from:"",to:"",logoUrl:null,signatureUrl:null,invoiceNumber:"1",poNumber:"",date:new Date().toISOString().split("T")[0],dueDate:new Date(new Date().setDate(new Date().getDate()+7)).toISOString().split("T")[0],paymentTerms:"",paymentMethod:"",items:[{id:crypto.randomUUID(),description:"",quantity:"",price:""}],notes:"",taxRate:"",discountRate:"",currency:"USD",amountPaid:"",paymentLink:"",language:"en-US"},Uh=({value:n,onChange:d,placeholder:u="",className:o="",type:p="text",rows:x,...g})=>{const y=z.useRef(null);z.useLayoutEffect(()=>{y.current&&(y.current.style.height="auto",y.current.style.height=`${y.current.scrollHeight}px`)},[n]);const h={value:n,onChange:d,placeholder:u,className:`bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-600 rounded-md p-1 w-full border border-gray-300 dark:text-gray-100 dark:placeholder:text-gray-500 dark:border-gray-600 dark:focus:ring-primary-500 ${o}`,...g};return x?r.jsx("textarea",{...h,ref:y,rows:x,className:`${h.className} resize-none overflow-hidden`}):r.jsx("input",{type:p,...h})},$m=({options:n,value:d,onChange:u,placeholder:o})=>{const[p,x]=z.useState(!1),g=z.useRef(null),y=n.find(m=>m.value===d);z.useEffect(()=>{const m=j=>{g.current&&!g.current.contains(j.target)&&x(!1)};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[]);const h=m=>{u(m),x(!1)};return r.jsxs(r.Fragment,{children:[r.jsxs(Ir,{children:[r.jsx("title",{children:"Free Online Invoice Generator – Create & Download Professional Invoices | QuickBillr"}),r.jsx("meta",{name:"description",content:"Generate, customize, and download professional invoices instantly with QuickBillr’s free online invoice generator. No signup required. Perfect for freelancers, contractors, and small businesses."},"description"),r.jsx("meta",{name:"keywords",content:"online invoice generator, create invoice free, download invoice pdf, invoice template free, freelancer billing software, invoice creator, estimate maker"}),r.jsx("link",{rel:"canonical",href:"https://quickbillr.online/free-invoice-generator"}),r.jsx("meta",{name:"robots",content:"index, follow"}),r.jsx("meta",{property:"og:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{property:"og:description",content:"Create professional invoices in seconds with QuickBillr."}),r.jsx("meta",{property:"og:type",content:"website"}),r.jsx("meta",{property:"og:url",content:"https://quickbillr.com/"}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),r.jsx("meta",{name:"twitter:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{name:"twitter:description",content:"Create invoices easily with QuickBillr."})]}),r.jsxs("div",{className:"relative",ref:g,children:[r.jsxs("button",{type:"button",onClick:()=>x(!p),className:"mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-transparent p-2 text-left dark:bg-gray-700 dark:border-gray-600 dark:text-white flex justify-between items-center","aria-haspopup":"listbox","aria-expanded":p,children:[r.jsx("span",{className:"truncate",children:y?y.label:o}),r.jsx("svg",{className:`h-5 w-5 text-gray-400 transform transition-transform ${p?"rotate-180":"rotate-0"}`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),p&&r.jsx("ul",{className:"absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 dark:ring-gray-600 overflow-auto focus:outline-none sm:text-sm",role:"listbox",children:n.map(m=>r.jsxs("li",{className:`cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${d===m.value?"bg-primary-50 dark:bg-primary-600/20":""}`,onClick:()=>h(m.value),role:"option","aria-selected":d===m.value,children:[r.jsx("span",{className:`block truncate ${d===m.value?"font-semibold":"font-normal"}`,children:m.label}),d===m.value&&r.jsx("span",{className:"absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600 dark:text-primary-400",children:r.jsx("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:r.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]},m.value))})]})]})},Lh=()=>{var Lt;const[n,d]=Zr("invoiceData",Dh),[u,o]=Zr("selectedTemplate","template-1"),[p,x]=Zr("showQrCode",!0),[g,y]=z.useState(""),[h]=Zr("paperSize","a4"),[m,j]=z.useState(!1),C=Jm[n.language]||Jm["en-US"],L=z.useCallback($=>{const{name:P,value:M,type:Q}=$.target;if(Q==="number")if(M==="")d(V=>({...V,[P]:""}));else{const V=parseFloat(M);isNaN(V)||d(oe=>({...oe,[P]:Math.max(0,V)}))}else d(V=>({...V,[P]:M}))},[d]),H=($,P)=>{var Q;const M=(Q=$.target.files)==null?void 0:Q[0];if(M){const V=new FileReader;V.onloadend=()=>{d(oe=>({...oe,[P]:V.result}))},V.readAsDataURL(M)}},X=$=>{d(P=>({...P,[$]:null}))},Y=($,P,M)=>{d(Q=>({...Q,items:Q.items.map(V=>{if(V.id===$){if(P==="quantity"||P==="price"){if(M==="")return{...V,[P]:""};const oe=parseFloat(M);return isNaN(oe)?V:{...V,[P]:Math.max(0,oe)}}return{...V,[P]:M}}return V})}))},b=()=>{d($=>({...$,items:[...$.items,{id:crypto.randomUUID(),description:"",quantity:"",price:""}]}))},q=$=>{d(P=>({...P,items:P.items.filter(M=>M.id!==$)}))},T=z.useCallback($=>{if(!$)return"";try{const P=new Date($+"T00:00:00");return new Intl.DateTimeFormat(n.language,{month:"short",day:"numeric",year:"numeric"}).format(P)}catch{return"Invalid Date"}},[n.language]),D=z.useCallback(async()=>{j(!0),await Oh(n,h,T),setTimeout(()=>{j(!1)},200)},[n,h,T]),me=z.useCallback(()=>{const $=document.getElementById("invoice-preview");if(!$)return;const P=$.cloneNode(!0);if(!P)return;const M=document.getElementById("print-container");M&&(M.innerHTML="",M.appendChild(P),window.print())},[n,T]),ue=n.items.reduce(($,P)=>$+(Number(P.quantity)||0)*(Number(P.price)||0),0),Ne=ue*(Number(n.discountRate)||0)/100,W=ue-Ne,Ee=W*(Number(n.taxRate)||0)/100,De=W+Ee,Pe=De-(Number(n.amountPaid)||0),vt=((Lt=Fm.find($=>$.name===n.currency))==null?void 0:Lt.symbol)||"$",Fe=z.useCallback($=>{const P=Number($);return isNaN(P)?"0.00":new Intl.NumberFormat(n.language,{minimumFractionDigits:2,maximumFractionDigits:2}).format(P)},[n.language]);return z.useEffect(()=>{if(!p||!n.paymentLink){y("");return}(async()=>{try{const P=encodeURIComponent(n.paymentLink),M=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${P}&bgcolor=ffffff`);if(!M.ok)throw new Error("Failed to fetch QR code");const Q=await M.blob(),V=new FileReader;V.onloadend=()=>{y(V.result)},V.readAsDataURL(Q)}catch(P){console.error("Error generating QR code:",P),y("")}})()},[n.paymentLink,p]),r.jsx(r.Fragment,{children:r.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-8",children:r.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[r.jsx("div",{className:"w-full lg:flex-grow flex justify-center items-start overflow-hidden",children:r.jsx(Rh,{data:n,t:C,currencySymbol:vt,qrCodeUrl:g,showQrCode:p,formatNumber:Fe,formatDate:T,handleFileChange:H,removeImage:X,handleDataChange:L,handleItemChange:Y,removeItem:q,addItem:b,subtotal:ue,total:De,balanceDue:Pe,EditableField:Uh,templateId:u,isDownloading:m})}),r.jsx("aside",{className:"lg:w-80 flex-shrink-0",children:r.jsx("div",{className:"sticky top-24 space-y-6",children:r.jsxs("div",{className:"bg-white rounded-lg shadow p-4 space-y-4 dark:bg-gray-800",children:[r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsxs("button",{onClick:D,className:"w-full text-center px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-md hover:shadow-lg hover:brightness-110 transition-all font-semibold text-base flex items-center justify-center space-x-2",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),r.jsx("span",{children:"Download PDF"})]}),r.jsxs("button",{onClick:me,className:"w-full text-center px-4 py-3 bg-gray-600 text-white rounded-md hover:shadow-lg hover:bg-gray-700 transition-all font-semibold text-base flex items-center justify-center space-x-2",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M5 4v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",clipRule:"evenodd"})}),r.jsx("span",{children:"Print"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 gap-4 pt-2",children:[r.jsx(Nh,{selectedTemplate:u,setSelectedTemplate:o}),r.jsxs("label",{className:"block",children:[r.jsx("span",{className:"text-gray-700 font-semibold dark:text-gray-300",children:C.language}),r.jsx($m,{value:n.language,onChange:$=>d(P=>({...P,language:$})),options:jh.map($=>({value:$.code,label:$.name}))})]}),r.jsxs("label",{className:"block",children:[r.jsx("span",{className:"text-gray-700 font-semibold dark:text-gray-300",children:"Currency"}),r.jsx($m,{value:n.currency,onChange:$=>d(P=>({...P,currency:$})),options:Fm.map($=>({value:$.name,label:r.jsxs(r.Fragment,{children:[$.name," ",r.jsxs("span",{className:"text-gray-500",children:["(",$.symbol,")"]})]})}))})]}),r.jsxs("label",{className:"block",children:[r.jsx("span",{className:"text-gray-700 font-semibold dark:text-gray-300",children:"Payment Link (for QR)"}),r.jsx("input",{type:"url",name:"paymentLink",value:n.paymentLink,onChange:L,placeholder:"https://paypal.me/yourname",className:"mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-transparent p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"})]}),r.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer text-sm",children:[r.jsx("input",{type:"checkbox",checked:p,onChange:$=>x($.target.checked),className:"h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"}),r.jsx("span",{className:"text-gray-700 font-medium dark:text-gray-300",children:"Add QR Code to Invoice"})]}),r.jsx("button",{onClick:()=>d($=>({...$,documentType:$.documentType===nt.Invoice?nt.Estimate:nt.Invoice})),className:"w-full text-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition mt-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",children:n.documentType===nt.Invoice?C.switchToEstimate:C.switchToInvoice})]})]})})})]})})})},_h=()=>r.jsxs(r.Fragment,{children:[r.jsxs(Ir,{children:[r.jsx("title",{children:"About QuickBillr – Our Mission to Simplify Invoicing for Freelancers"}),r.jsx("meta",{name:"description",content:"Learn about QuickBillr and our mission to simplify invoicing for freelancers and small businesses worldwide with fast, modern, and completely free billing tools."},"description"),r.jsx("meta",{name:"keywords",content:"about quickbillr, invoicing software company, freelancer tools platform, billing solutions, invoice startup"}),r.jsx("link",{rel:"canonical",href:"https://quickbillr.online/about-quickbillr"}),r.jsx("meta",{name:"robots",content:"index, follow"}),r.jsx("meta",{property:"og:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{property:"og:description",content:"Create professional invoices in seconds with QuickBillr."}),r.jsx("meta",{property:"og:type",content:"website"}),r.jsx("meta",{property:"og:url",content:"https://quickbillr.com/"}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),r.jsx("meta",{name:"twitter:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{name:"twitter:description",content:"Create invoices easily with QuickBillr."})]}),r.jsx("div",{className:"bg-white py-16 sm:py-24 dark:bg-gray-900",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 tracking-wide uppercase",children:"About Us"}),r.jsx("h1",{className:"mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl dark:text-white",children:"Empowering Your Business"}),r.jsx("p",{className:"max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400",children:"At QuickBillr, we believe billing should be the easiest part of your job, not the hardest."})]}),r.jsxs("div",{className:"mt-12 prose prose-lg text-gray-600 mx-auto dark:text-gray-300",children:[r.jsx("h2",{className:"dark:text-white",children:"Our Story"}),r.jsx("p",{children:"QuickBillr was born from a simple frustration: creating professional invoices and estimates was a tedious, time-consuming process. As freelancers and small business owners ourselves, we spent too much time fiddling with templates and spreadsheets. We knew there had to be a better way."}),r.jsx("p",{children:"We envisioned a tool that was fast, intuitive, and flexible. A platform where you could generate a beautiful, accurate invoice in seconds, not minutes. We focused on what matters: clean templates, multi-language and currency support, and modern features like QR code payments to help you get paid faster."}),r.jsx("h2",{className:"dark:text-white",children:"How It Works"}),r.jsxs("ol",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Fill in the Details:"})," Enter your and your client's information into our simple, straightforward form."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Add Your Items:"})," List your services or products. Our clean interface makes it easy to add items, quantities, and rates."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Customize & Preview:"})," Choose a template that fits your brand. Watch your invoice update in real-time with our live preview panel."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Download & Send:"})," Once you're happy, download a pixel-perfect PDF and get paid faster."]})]}),r.jsx("h2",{className:"dark:text-white",children:"Our Mission"}),r.jsx("p",{children:"Our mission is to provide freelancers, consultants, and small businesses with the tools they need to succeed. We're committed to building a product that is not only powerful but also accessible and easy to use. We handle the paperwork, so you can focus on what you do best: growing your business."})]})]})})]}),Hh=()=>{const[n,d]=z.useState("idle"),u=o=>{o.preventDefault(),d("submitting"),setTimeout(()=>{d("submitted")},1500)};return r.jsxs(r.Fragment,{children:[r.jsxs(Ir,{children:[r.jsx("title",{children:"Contact QuickBillr Support | Get Help With Invoicing & Billing"}),r.jsx("meta",{name:"description",content:"Need help with QuickBillr? Contact our support team for assistance with invoices, billing, or technical questions. We're here to help freelancers and businesses succeed."},"description"),r.jsx("meta",{name:"keywords",content:"contact quickbillr, invoice support, billing help, customer support invoicing software"}),r.jsx("link",{rel:"canonical",href:"https://quickbillr.online/contact-support"}),r.jsx("meta",{name:"robots",content:"index, follow"}),r.jsx("meta",{property:"og:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{property:"og:description",content:"Create professional invoices in seconds with QuickBillr."}),r.jsx("meta",{property:"og:type",content:"website"}),r.jsx("meta",{property:"og:url",content:"https://quickbillr.com/"}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),r.jsx("meta",{name:"twitter:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{name:"twitter:description",content:"Create invoices easily with QuickBillr."})]}),r.jsx("div",{className:"bg-white py-16 sm:py-24 dark:bg-gray-900",children:r.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"relative bg-white shadow-xl rounded-2xl dark:bg-gray-800",children:r.jsxs("div",{className:"grid lg:grid-cols-2",children:[r.jsxs("div",{className:"relative px-6 py-10 sm:px-10 lg:py-24 bg-gradient-to-br from-primary-700 to-primary-900 rounded-l-2xl text-white",children:[r.jsx("h1",{className:"text-3xl font-extrabold tracking-tight",children:"Get in touch"}),r.jsx("p",{className:"mt-3 text-lg text-primary-100",children:"Have a question or feedback? We'd love to hear from you. Fill out the form or email us."}),r.jsxs("dl",{className:"mt-8 space-y-6 text-primary-100",children:[r.jsx("dt",{children:r.jsx("span",{className:"sr-only",children:"Email"})}),r.jsxs("dd",{className:"flex text-base",children:[r.jsx("svg",{className:"flex-shrink-0 w-6 h-6 text-primary-200",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),r.jsx("span",{className:"ml-3",children:"support@quickbillr.app"})]})]})]}),r.jsx("div",{className:"px-6 py-10 sm:px-10 lg:py-24",children:n==="submitted"?r.jsxs("div",{className:"text-center",children:[r.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Thank You!"}),r.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300",children:"Your message has been sent. We'll get back to you shortly."})]}):r.jsxs("form",{onSubmit:u,className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",className:"sr-only",children:"Full name"}),r.jsx("input",{type:"text",name:"name",id:"name",required:!0,className:"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Full name"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"sr-only",children:"Email"}),r.jsx("input",{id:"email",name:"email",type:"email",required:!0,autoComplete:"email",className:"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Email"})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",className:"sr-only",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",rows:4,required:!0,className:"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",placeholder:"Message"})]}),r.jsx("div",{children:r.jsx("button",{type:"submit",disabled:n==="submitting",className:"w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all disabled:opacity-50",children:n==="submitting"?"Sending...":"Send Message"})})]})})]})})})})]})};function qh({title:n,description:d,image:u,url:o}){z.useEffect(()=>{document.title=n,Yh("description",d),vn("og:title",n),vn("og:description",d),u&&vn("og:image",u),o&&vn("og:url",o)},[n,d,u,o])}function Yh(n,d){let u=document.querySelector(`meta[name="${n}"]`);u||(u=document.createElement("meta"),u.setAttribute("name",n),document.head.appendChild(u)),u.setAttribute("content",d)}function vn(n,d){let u=document.querySelector(`meta[property="${n}"]`);u||(u=document.createElement("meta"),u.setAttribute("property",n),document.head.appendChild(u)),u.setAttribute("content",d)}const Qh=({html:n,className:d=""})=>r.jsx("div",{className:`blog-content ${d}`,dangerouslySetInnerHTML:{__html:n}}),Xh=()=>{const{id:n}=Xg(),d=ko.find(u=>u.id===n);return qh({title:`${d.title} | QuickBillr Blog`,description:d.description,image:d.imageUrl,url:`https://quickbillr.online/blog/${d.id}`}),d?r.jsxs(r.Fragment,{children:[r.jsxs(Ir,{children:[r.jsx("title",{children:"Invoicing Tips, Freelancer Guides & Small Business Advice | QuickBillr Blog"}),r.jsx("meta",{name:"description",content:"Explore expert invoicing tips, freelancer guides, and small business advice on the QuickBillr Blog. Learn how to get paid faster, manage clients, and grow your business smarter."},"description"),r.jsx("meta",{name:"keywords",content:"invoicing tips, freelancer advice, small business finance, how to get paid faster, billing tips, invoice guide, freelance business tips"}),r.jsx("link",{rel:"canonical",href:"https://quickbillr.online/blog"}),r.jsx("meta",{name:"robots",content:"index, follow"}),r.jsx("meta",{property:"og:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{property:"og:description",content:"Create professional invoices in seconds with QuickBillr."}),r.jsx("meta",{property:"og:type",content:"website"}),r.jsx("meta",{property:"og:url",content:"https://quickbillr.com/"}),r.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),r.jsx("meta",{name:"twitter:title",content:"Free Invoice Generator for Freelancers | QuickBillr"}),r.jsx("meta",{name:"twitter:description",content:"Create invoices easily with QuickBillr."})]}),r.jsxs("div",{className:"bg-white dark:bg-gray-900 min-h-screen",children:[r.jsxs("div",{className:"relative h-[400px] w-full",children:[r.jsx("img",{src:d.imageUrl,alt:d.title,className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 pb-12",children:[r.jsxs(ht,{to:"/blog",className:"inline-flex items-center text-primary-300 hover:text-white transition-colors mb-6 font-medium",children:[r.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})}),"Back to Blog"]}),r.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-white max-w-4xl",children:d.title})]})})]}),r.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-12",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsxs("div",{className:"flex items-center space-x-6 mb-10 pb-10 border-b border-gray-100 dark:border-gray-800",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{className:"w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg",children:d.author.charAt(0)}),r.jsxs("div",{className:"ml-4",children:[r.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white",children:d.author}),r.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Author"})]})]}),r.jsx("div",{className:"h-8 w-px bg-gray-200 dark:bg-gray-700"}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white",children:d.date}),r.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Published"})]}),r.jsx("div",{className:"h-8 w-px bg-gray-200 dark:bg-gray-700"}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-gray-900 dark:text-white",children:d.readTime}),r.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Reading time"})]})]}),r.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed",children:[r.jsx("p",{className:"text-xl font-medium text-gray-900 dark:text-white mb-8",children:d.description}),r.jsx(Qh,{html:d.content}),r.jsxs("div",{className:"bg-primary-50 rounded-2xl p-8 my-12 dark:bg-gray-800 border border-primary-100 dark:border-gray-700",children:[r.jsx("h3",{className:"text-xl font-bold text-primary-900 dark:text-primary-400 mb-4",children:"Start billing like a pro today"}),r.jsx("p",{className:"text-primary-800 dark:text-gray-300 mb-6",children:"Ready to create your own professional invoices and get paid faster? Try our free invoice builder."}),r.jsx(ht,{to:"/free-invoice-generator",className:"inline-block px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all shadow-md",children:"Create My First Invoice"})]})]})]})})]})]}):r.jsx(l1,{to:"/blog"})},wx=z.createContext(void 0),Gh=({children:n})=>{const[d,u]=Zr("theme","light");z.useEffect(()=>{const p=window.document.documentElement;p.classList.remove(d==="light"?"dark":"light"),p.classList.add(d)},[d]);const o=()=>{u(p=>p==="light"?"dark":"light")};return r.jsx(wx.Provider,{value:{theme:d,toggleTheme:o},children:n})},Vh=()=>{const n=z.useContext(wx);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},Zh=()=>{const{theme:n,toggleTheme:d}=Vh();return r.jsx("button",{onClick:d,className:"p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors","aria-label":"Toggle theme",children:n==="light"?r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}):r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})},Kh=()=>{const[n,d]=z.useState(!1),u=ua();z.useEffect(()=>{d(!1)},[u]);const o="font-semibold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text",p="text-gray-600 hover:text-primary-600 transition-colors dark:text-gray-300 dark:hover:text-primary-400",x="block py-2 text-lg text-center";return r.jsx("header",{className:"bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 dark:bg-gray-800/80 dark:border-b dark:border-gray-700",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"flex items-center justify-between h-16",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsxs(Qt,{to:"/",className:"flex items-center space-x-2",children:[r.jsx("svg",{className:"h-8 w-8 text-primary-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),r.jsx("span",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"QuickBillr"})]})}),r.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[r.jsx(Qt,{to:"/blog",className:({isActive:g})=>g?o:p,children:"Blog"}),r.jsx(Qt,{to:"/about-quickbillr",className:({isActive:g})=>g?o:p,children:"About"}),r.jsx(Qt,{to:"/contact-support",className:({isActive:g})=>g?o:p,children:"Contact"})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx(Zh,{}),r.jsx(Qt,{to:"/free-invoice-generator",className:"ml-4 hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700",children:"Create Invoice"}),r.jsx("div",{className:"md:hidden ml-2",children:r.jsxs("button",{onClick:()=>d(!n),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700","aria-controls":"mobile-menu","aria-expanded":n,children:[r.jsx("span",{className:"sr-only",children:"Open main menu"}),n?r.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):r.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})]}),n&&r.jsx("div",{className:"md:hidden",id:"mobile-menu",children:r.jsxs("div",{className:"pt-2 pb-4 space-y-1",children:[r.jsx(Qt,{to:"/about-quickbillr",className:({isActive:g})=>`${x} ${g?o:p}`,children:"About"}),r.jsx(Qt,{to:"/contact-support",className:({isActive:g})=>`${x} ${g?o:p}`,children:"Contact"}),r.jsx(Qt,{to:"/blog",className:({isActive:g})=>`${x} ${g?o:p}`,children:"Blog"}),r.jsx(Qt,{to:"/free-invoice-generator",className:"sm:hidden mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700",children:"Create Invoice"})]})})]})})},Fh=()=>{const n=[{name:"Twitter",path:r.jsx("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})},{name:"Facebook",path:r.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})},{name:"LinkedIn",path:r.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"})}];return r.jsx("footer",{className:"bg-white border-t dark:bg-gray-900 dark:border-gray-800",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[r.jsxs("div",{className:"space-y-8 xl:col-span-1",children:[r.jsxs(ht,{to:"/",className:"flex items-center space-x-2",children:[r.jsx("svg",{className:"h-8 w-8 text-primary-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),r.jsx("span",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"QuickBillr"})]}),r.jsx("p",{className:"text-gray-500 text-base dark:text-gray-400",children:"Create Professional Invoices & Estimates in Seconds."}),r.jsx("div",{className:"flex space-x-6",children:n.map(d=>r.jsxs("a",{href:"#",className:"text-gray-400 hover:text-gray-500 dark:hover:text-gray-300",children:[r.jsx("span",{className:"sr-only",children:d.name}),r.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.path})]},d.name))})]}),r.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2",children:[r.jsxs("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Quick Links"}),r.jsxs("ul",{className:"mt-4 space-y-4",children:[r.jsx("li",{children:r.jsx(ht,{to:"/builder",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Invoice Builder"})}),r.jsx("li",{children:r.jsx(ht,{to:"/about-quickbillr",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"About Us"})}),r.jsx("li",{children:r.jsx(ht,{to:"/blog",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Blog"})})]})]}),r.jsxs("div",{className:"mt-12 md:mt-0",children:[r.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Legal"}),r.jsxs("ul",{className:"mt-4 space-y-4",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Privacy Policy"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Terms of Service"})})]})]})]}),r.jsx("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:"Support"}),r.jsxs("ul",{className:"mt-4 space-y-4",children:[r.jsx("li",{children:r.jsx(ht,{to:"/contact-support",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"Contact"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",children:"FAQ"})})]})]})})]})]}),r.jsx("div",{className:"mt-12 border-t border-gray-200 pt-8 dark:border-gray-800",children:r.jsxs("p",{className:"text-base text-gray-400 xl:text-center",children:["© ",new Date().getFullYear()," QuickBillr. All rights reserved."]})})]})})},Jh=()=>r.jsx(Gh,{children:r.jsx(E1,{children:r.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200",children:[r.jsx(Kh,{}),r.jsx("main",{className:"flex-grow",children:r.jsxs(s1,{children:[r.jsx(al,{path:"/",element:r.jsx(xh,{})}),r.jsx(al,{path:"/free-invoice-generator",element:r.jsx(Lh,{})}),r.jsx(al,{path:"/about-quickbillr",element:r.jsx(_h,{})}),r.jsx(al,{path:"/contact-support",element:r.jsx(Hh,{})}),r.jsx(al,{path:"/blog",element:r.jsx(_1,{})}),r.jsx(al,{path:"/blog/:id",element:r.jsx(Xh,{})})]})}),r.jsx(Fh,{})]})})}),jx=document.getElementById("root");if(!jx)throw new Error("Could not find root element to mount to");ng.createRoot(jx).render(r.jsx(da.StrictMode,{children:r.jsx(kx,{children:r.jsx(Jh,{})})}));
