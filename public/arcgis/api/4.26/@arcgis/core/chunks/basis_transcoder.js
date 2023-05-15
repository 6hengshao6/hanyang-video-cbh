/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as t}from"./_commonjsHelpers.js";function e(t,e){for(var r=0;r<e.length;r++){const n=e[r];if("string"!=typeof n&&!Array.isArray(n))for(const e in n)if("default"!==e&&!(e in t)){const r=Object.getOwnPropertyDescriptor(n,e);r&&Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var r,n,i,o={};r={get exports(){return o},set exports(t){o=t}},n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(n=n||__filename),i=function(e){var r,i,o=void 0!==(e=e||{})?e:{};o.ready=new Promise((function(t,e){r=t,i=e}));var a,u={};for(a in o)o.hasOwnProperty(a)&&(u[a]=o[a]);var s,l,c=!1,f=!1;c="object"==typeof window,f="function"==typeof importScripts,s="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l=!c&&!s&&!f;var p,d,y,h,v="";s?(v=f?require("path").dirname(v)+"/":__dirname+"/",p=function(t,e){return y||(y=require("fs")),h||(h=require("path")),t=h.normalize(t),y.readFileSync(t,e?null:"utf8")},d=function(t){var e=p(t,!0);return e.buffer||(e=new Uint8Array(e)),T(e.buffer),e},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof Ae))throw t})),process.on("unhandledRejection",tt),o.inspect=function(){return"[Emscripten Module object]"}):l?("undefined"!=typeof read&&(p=function(t){return read(t)}),d=function(t){var e;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(T("object"==typeof(e=read(t,"binary"))),e)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(c||f)&&(f?v=self.location.href:document.currentScript&&(v=document.currentScript.src),n&&(v=n),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",p=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},f&&(d=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var m,g,b=o.print||console.log.bind(console),$=o.printErr||console.warn.bind(console);for(a in u)u.hasOwnProperty(a)&&(o[a]=u[a]);u=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(m=o.wasmBinary),o.noExitRuntime&&o.noExitRuntime,"object"!=typeof WebAssembly&&tt("no native wasm support detected");var C=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),w=!1;function T(t,e){t||tt("Assertion failed: "+e)}var _="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(t,e,r){for(var n=e+r,i=e;t[i]&&!(i>=n);)++i;if(i-e>16&&t.subarray&&_)return _.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function A(t,e){return t?P(S,t,e):""}var W,E,S,j,O,k,F,R,x,D="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function I(t,e){for(var r=t,n=r>>1,i=n+e/2;!(n>=i)&&O[n];)++n;if((r=n<<1)-t>32&&D)return D.decode(S.subarray(t,r));for(var o=0,a="";;){var u=j[t+2*o>>1];if(0==u||o==e/2)return a;++o,a+=String.fromCharCode(u)}}function U(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,i=(r-=2)<2*t.length?r/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);j[e>>1]=a,e+=2}return j[e>>1]=0,e-n}function M(t){return 2*t.length}function V(t,e){for(var r=0,n="";!(r>=e/4);){var i=k[t+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(i)}return n}function H(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,i=n+r-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),k[e>>2]=a,(e+=4)+4>i)break}return k[e>>2]=0,e-n}function z(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}function q(t){W=t,o.HEAP8=E=new Int8Array(t),o.HEAP16=j=new Int16Array(t),o.HEAP32=k=new Int32Array(t),o.HEAPU8=S=new Uint8Array(t),o.HEAPU16=O=new Uint16Array(t),o.HEAPU32=F=new Uint32Array(t),o.HEAPF32=R=new Float32Array(t),o.HEAPF64=x=new Float64Array(t)}var B=o.INITIAL_MEMORY||16777216;function N(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?o.dynCall_v(r):o.dynCall_vi(r,e.arg):r(void 0===e.arg?null:e.arg)}else e(o)}}(g=o.wasmMemory?o.wasmMemory:new WebAssembly.Memory({initial:B/65536,maximum:32768}))&&(W=g.buffer),B=W.byteLength,q(W),k[80624]=5565536;var G=[],L=[],X=[],J=[],Y=Math.ceil,Z=Math.floor,K=0,Q=null;function tt(t){o.onAbort&&o.onAbort(t),$(t+=""),w=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(t);throw i(e),e}function et(t,e){return String.prototype.startsWith?t.startsWith(e):0===t.indexOf(e)}o.preloadedImages={},o.preloadedAudios={};var rt="data:application/octet-stream;base64,";function nt(t){return et(t,rt)}var it="file://";function ot(t){return et(t,it)}var at,ut="basis_transcoder.wasm";function st(){try{if(m)return new Uint8Array(m);if(d)return d(ut);throw"both async and sync fetching of the wasm failed"}catch(t){tt(t)}}nt(ut)||(at=ut,ut=o.locateFile?o.locateFile(at,v):v+at),L.push({func:function(){we()}});var lt={};function ct(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function ft(t){return this.fromWireType(F[t>>2])}var pt={},dt={},yt={},ht=48,vt=57;function mt(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=ht&&e<=vt?"_"+t:t}function gt(t,e){return t=mt(t),function(){return e.apply(this,arguments)}}function bt(t,e){var r=gt(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var $t=void 0;function Ct(t){throw new $t(t)}function wt(t,e,r){function n(e){var n=r(e);n.length!==t.length&&Ct("Mismatched type converter count");for(var i=0;i<t.length;++i)Et(t[i],n[i])}t.forEach((function(t){yt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){dt.hasOwnProperty(t)?i[e]=dt[t]:(o.push(t),pt.hasOwnProperty(t)||(pt[t]=[]),pt[t].push((function(){i[e]=dt[t],++a===o.length&&n(i)})))})),0===o.length&&n(i)}function Tt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var _t=void 0;function Pt(t){for(var e="",r=t;S[r];)e+=_t[S[r++]];return e}var At=void 0;function Wt(t){throw new At(t)}function Et(t,e,r){if(r=r||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||Wt('type "'+n+'" must have a positive integer typeid pointer'),dt.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;Wt("Cannot register type '"+n+"' twice")}if(dt[t]=e,delete yt[t],pt.hasOwnProperty(t)){var i=pt[t];delete pt[t],i.forEach((function(t){t()}))}}function St(t){Wt(t.$$.ptrType.registeredClass.name+" instance already deleted")}var jt=!1;function Ot(t){}function kt(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function Ft(t){return"undefined"==typeof FinalizationGroup?(Ft=function(t){return t},t):(jt=new FinalizationGroup((function(t){for(var e=t.next();!e.done;e=t.next()){var r=e.value;r.ptr?kt(r):console.warn("object already deleted: "+r.ptr)}})),Ft=function(t){return jt.register(t,t.$$,t.$$),t},Ot=function(t){jt.unregister(t.$$)},Ft(t))}var Rt=void 0,xt=[];function Dt(){for(;xt.length;){var t=xt.pop();t.$$.deleteScheduled=!1,t.delete()}}function It(){}var Ut={};function Mt(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||Wt("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function Vt(t,e,r){o.hasOwnProperty(t)?((void 0===r||void 0!==o[t].overloadTable&&void 0!==o[t].overloadTable[r])&&Wt("Cannot register public name '"+t+"' twice"),Mt(o,t,t),o.hasOwnProperty(r)&&Wt("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),o[t].overloadTable[r]=e):(o[t]=e,void 0!==r&&(o[t].numArguments=r))}function Ht(t,e,r,n,i,o,a,u){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function zt(t,e,r){for(;e!==r;)e.upcast||Wt("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function qt(t,e){if(null===e)return this.isReference&&Wt("null is not a valid "+this.name),0;e.$$||Wt('Cannot pass "'+le(e)+'" as a '+this.name),e.$$.ptr||Wt("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return zt(e.$$.ptr,r,this.registeredClass)}function Bt(t,e){var r;if(null===e)return this.isReference&&Wt("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||Wt('Cannot pass "'+le(e)+'" as a '+this.name),e.$$.ptr||Wt("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&Wt("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=zt(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&Wt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:Wt("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var i=e.clone();r=this.rawShare(r,ae((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:Wt("Unsupporting sharing policy")}return r}function Nt(t,e){if(null===e)return this.isReference&&Wt("null is not a valid "+this.name),0;e.$$||Wt('Cannot pass "'+le(e)+'" as a '+this.name),e.$$.ptr||Wt("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&Wt("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return zt(e.$$.ptr,r,this.registeredClass)}function Gt(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=Gt(t,e,r.baseClass);return null===n?null:r.downcast(n)}var Lt={};function Xt(t,e){return e.ptrType&&e.ptr||Ct("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&Ct("Both smartPtrType and smartPtr must be specified"),e.count={value:1},Ft(Object.create(t,{$$:{value:e}}))}function Jt(t,e,r,n,i,o,a,u,s,l,c){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=c,i||void 0!==e.baseClass?this.toWireType=Bt:n?(this.toWireType=qt,this.destructorFunction=null):(this.toWireType=Nt,this.destructorFunction=null)}function Yt(t,e,r){o.hasOwnProperty(t)||Ct("Replacing nonexistant public symbol"),void 0!==o[t].overloadTable&&void 0!==r?o[t].overloadTable[r]=e:(o[t]=e,o[t].argCount=r)}function Zt(t,e){t=Pt(t);var r,n,i=o["dynCall_"+t],a=(r=i,n=[e],function(){n.length=arguments.length+1;for(var t=0;t<arguments.length;t++)n[t+1]=arguments[t];return r.apply(null,n)});return"function"!=typeof a&&Wt("unknown function pointer with signature "+t+": "+e),a}var Kt=void 0;function Qt(t){var e=Pe(t),r=Pt(e);return _e(e),r}function te(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||dt[e]||(yt[e]?yt[e].forEach(t):(r.push(e),n[e]=!0))})),new Kt(t+": "+r.map(Qt).join([", "]))}function ee(t,e){for(var r=[],n=0;n<t;n++)r.push(k[(e>>2)+n]);return r}function re(t,e,r,n,i){var o=e.length;o<2&&Wt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,u=!1,s=1;s<e.length;++s)if(null!==e[s]&&void 0===e[s].destructorFunction){u=!0;break}var l="void"!==e[0].name,c=o-2,f=new Array(c),p=[],d=[];return function(){var r;arguments.length!==c&&Wt("function "+t+" called with "+arguments.length+" arguments, expected "+c+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(r=e[1].toWireType(d,this),p[1]=r);for(var o=0;o<c;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=n.apply(null,p);if(u)ct(d);else for(o=a?1:2;o<e.length;o++){var y=1===o?r:f[o-2];null!==e[o].destructorFunction&&e[o].destructorFunction(y)}if(l)return e[0].fromWireType(s)}}var ne=[],ie=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function oe(t){t>4&&0==--ie[t].refcount&&(ie[t]=void 0,ne.push(t))}function ae(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=ne.length?ne.pop():ie.length;return ie[e]={refcount:1,value:t},e}}function ue(t,e,r){switch(e){case 0:return function(t){var e=r?E:S;return this.fromWireType(e[t])};case 1:return function(t){var e=r?j:O;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=r?k:F;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function se(t,e){var r=dt[t];return void 0===r&&Wt(e+" has unknown type "+Qt(t)),r}function le(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function ce(t,e){switch(e){case 2:return function(t){return this.fromWireType(R[t>>2])};case 3:return function(t){return this.fromWireType(x[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function fe(t,e,r){switch(e){case 0:return r?function(t){return E[t]}:function(t){return S[t]};case 1:return r?function(t){return j[t>>1]}:function(t){return O[t>>1]};case 2:return r?function(t){return k[t>>2]}:function(t){return F[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function pe(t){return t||Wt("Cannot use deleted val. handle = "+t),ie[t].value}var de={};function ye(t){var e=de[t];return void 0===e?Pt(t):e}var he=[];function ve(){if("object"==typeof globalThis)return globalThis;function e(t){t.$$$embind_global$$$=t;var e="object"==typeof $$$embind_global$$$&&t.$$$embind_global$$$===t;return e||delete t.$$$embind_global$$$,e}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof t&&e(t)?$$$embind_global$$$=t:"object"==typeof self&&e(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var me={};function ge(t){try{return g.grow(t-W.byteLength+65535>>>16),q(g.buffer),1}catch(t){}}var be={mappings:{},buffers:[null,[],[]],printChar:function(t,e){var r=be.buffers[t];0===e||10===e?((1===t?b:$)(P(r,0)),r.length=0):r.push(e)},varargs:void 0,get:function(){return be.varargs+=4,k[be.varargs-4>>2]},getStr:function(t){return A(t)},get64:function(t,e){return t}};$t=o.InternalError=bt(Error,"InternalError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);_t=t}(),At=o.BindingError=bt(Error,"BindingError"),It.prototype.isAliasOf=function(t){if(!(this instanceof It))return!1;if(!(t instanceof It))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return e===n&&r===i},It.prototype.clone=function(){if(this.$$.ptr||St(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=Ft(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},It.prototype.delete=function(){this.$$.ptr||St(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Wt("Object already scheduled for deletion"),Ot(this),kt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},It.prototype.isDeleted=function(){return!this.$$.ptr},It.prototype.deleteLater=function(){return this.$$.ptr||St(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Wt("Object already scheduled for deletion"),xt.push(this),1===xt.length&&Rt&&Rt(Dt),this.$$.deleteScheduled=!0,this},Jt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},Jt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},Jt.prototype.argPackAdvance=8,Jt.prototype.readValueFromPointer=ft,Jt.prototype.deleteObject=function(t){null!==t&&t.delete()},Jt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=function(t,e){return e=function(t,e){for(void 0===e&&Wt("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),Lt[e]}(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function i(){return this.isSmartPointer?Xt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):Xt(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),u=Ut[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=Gt(e,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?Xt(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):Xt(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})},o.getInheritedInstanceCount=function(){return Object.keys(Lt).length},o.getLiveInheritedInstances=function(){var t=[];for(var e in Lt)Lt.hasOwnProperty(e)&&t.push(Lt[e]);return t},o.flushPendingDeletes=Dt,o.setDelayFunction=function(t){Rt=t,xt.length&&Rt&&Rt(Dt)},Kt=o.UnboundTypeError=bt(Error,"UnboundTypeError"),o.count_emval_handles=function(){for(var t=0,e=5;e<ie.length;++e)void 0!==ie[e]&&++t;return t},o.get_first_emval=function(){for(var t=5;t<ie.length;++t)if(void 0!==ie[t])return ie[t];return null};var $e={u:function(t){var e=lt[t];delete lt[t];var r=e.rawConstructor,n=e.rawDestructor,i=e.fields;wt([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(e,r){var n=e.fieldName,a=t[r],u=e.getter,s=e.getterContext,l=t[r+i.length],c=e.setter,f=e.setterContext;o[n]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,e){var r=[];c(f,t,l.toWireType(r,e)),ct(r)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var r in o)e[r]=o[r].read(t);return n(t),e},toWireType:function(t,e){for(var i in o)if(!(i in e))throw new TypeError('Missing field:  "'+i+'"');var a=r();for(i in o)o[i].write(a,e[i]);return null!==t&&t.push(n,a),a},argPackAdvance:8,readValueFromPointer:ft,destructorFunction:n}]}))},J:function(t,e,r,n,i){var o=Tt(r);Et(t,{name:e=Pt(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:i},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=E;else if(2===r)n=j;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=k}return this.fromWireType(n[t>>o])},destructorFunction:null})},y:function(t,e,r,n,i,o,a,u,s,l,c,f,p){c=Pt(c),o=Zt(i,o),u&&(u=Zt(a,u)),l&&(l=Zt(s,l)),p=Zt(f,p);var d=mt(c);Vt(d,(function(){te("Cannot construct "+c+" due to unbound types",[n])})),wt([t,e,r],n?[n]:[],(function(e){var r,i;e=e[0],i=n?(r=e.registeredClass).instancePrototype:It.prototype;var a=gt(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new At("Use 'new' to construct "+c);if(void 0===f.constructor_body)throw new At(c+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new At("Tried to invoke ctor of "+c+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Ht(c,a,s,p,r,o,u,l),y=new Jt(c,f,!0,!1,!1),h=new Jt(c+"*",f,!1,!1,!1),v=new Jt(c+" const*",f,!1,!0,!1);return Ut[t]={pointerType:h,constPointerType:v},Yt(d,a),[y,h,v]}))},x:function(t,e,r,n,i,o){T(e>0);var a=ee(e,r);i=Zt(n,i);var u=[o],s=[];wt([],[t],(function(t){var r="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new At("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){te("Cannot construct "+t.name+" due to unbound types",a)},wt([],a,(function(n){return t.registeredClass.constructor_body[e-1]=function(){arguments.length!==e-1&&Wt(r+" called with "+arguments.length+" arguments, expected "+(e-1)),s.length=0,u.length=e;for(var t=1;t<e;++t)u[t]=n[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return ct(s),n[0].fromWireType(o)},[]})),[]}))},d:function(t,e,r,n,i,o,a,u){var s=ee(r,n);e=Pt(e),o=Zt(i,o),wt([],[t],(function(t){var n=(t=t[0]).name+"."+e;function i(){te("Cannot call "+n+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(e);var l=t.registeredClass.instancePrototype,c=l[e];return void 0===c||void 0===c.overloadTable&&c.className!==t.name&&c.argCount===r-2?(i.argCount=r-2,i.className=t.name,l[e]=i):(Mt(l,e,n),l[e].overloadTable[r-2]=i),wt([],s,(function(i){var u=re(n,i,t,o,a);return void 0===l[e].overloadTable?(u.argCount=r-2,l[e]=u):l[e].overloadTable[r-2]=u,[]})),[]}))},k:function(t,e,r){t=Pt(t),wt([],[e],(function(e){return e=e[0],o[t]=e.fromWireType(r),[]}))},I:function(t,e){Et(t,{name:e=Pt(e),fromWireType:function(t){var e=ie[t].value;return oe(t),e},toWireType:function(t,e){return ae(e)},argPackAdvance:8,readValueFromPointer:ft,destructorFunction:null})},n:function(t,e,r,n){var i=Tt(r);function o(){}e=Pt(e),o.values={},Et(t,{name:e,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:ue(e,i,n),destructorFunction:null}),Vt(e,o)},a:function(t,e,r){var n=se(t,"enum");e=Pt(e);var i=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:gt(n.name+"_"+e,(function(){}))}});i.values[r]=o,i[e]=o},B:function(t,e,r){var n=Tt(r);Et(t,{name:e=Pt(e),fromWireType:function(t){return t},toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+le(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:ce(e,n),destructorFunction:null})},i:function(t,e,r,n,i,o){var a=ee(e,r);t=Pt(t),i=Zt(n,i),Vt(t,(function(){te("Cannot call "+t+" due to unbound types",a)}),e-1),wt([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return Yt(t,re(t,n,null,i,o),e-1),[]}))},j:function(t,e,r,n,i){e=Pt(e),-1===i&&(i=4294967295);var o=Tt(r),a=function(t){return t};if(0===n){var u=32-8*r;a=function(t){return t<<u>>>u}}var s=-1!=e.indexOf("unsigned");Et(t,{name:e,fromWireType:a,toWireType:function(t,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+le(r)+'" to '+this.name);if(r<n||r>i)throw new TypeError('Passing a number "'+le(r)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+n+", "+i+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:fe(e,o,0!==n),destructorFunction:null})},h:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=F,r=e[t>>=2],i=e[t+1];return new n(W,i,r)}Et(t,{name:r=Pt(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},C:function(t,e){var r="std::string"===(e=Pt(e));Et(t,{name:e,fromWireType:function(t){var e,n=F[t>>2];if(r)for(var i=t+4,o=0;o<=n;++o){var a=t+4+o;if(o==n||0==S[a]){var u=A(i,a-i);void 0===e?e=u:(e+=String.fromCharCode(0),e+=u),i=a+1}}else{var s=new Array(n);for(o=0;o<n;++o)s[o]=String.fromCharCode(S[t+4+o]);e=s.join("")}return _e(t),e},toWireType:function(t,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var i="string"==typeof e;i||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||Wt("Cannot pass non-string to std::string"),n=r&&i?function(){return function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&t.charCodeAt(++r)),n<=127?++e:e+=n<=2047?2:n<=65535?3:4}return e}(e)}:function(){return e.length};var o=n(),a=Te(4+o+1);if(F[a>>2]=o,r&&i)!function(t,e,r,n){if(!(n>0))return 0;for(var i=r+n-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),a<=127){if(r>=i)break;e[r++]=a}else if(a<=2047){if(r+1>=i)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=i)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=i)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}e[r]=0}(e,S,a+4,o+1);else if(i)for(var u=0;u<o;++u){var s=e.charCodeAt(u);s>255&&(_e(a),Wt("String has UTF-16 code units that do not fit in 8 bits")),S[a+4+u]=s}else for(u=0;u<o;++u)S[a+4+u]=e[u];return null!==t&&t.push(_e,a),a},argPackAdvance:8,readValueFromPointer:ft,destructorFunction:function(t){_e(t)}})},w:function(t,e,r){var n,i,o,a,u;r=Pt(r),2===e?(n=I,i=U,a=M,o=function(){return O},u=1):4===e&&(n=V,i=H,a=z,o=function(){return F},u=2),Et(t,{name:r,fromWireType:function(t){for(var r,i=F[t>>2],a=o(),s=t+4,l=0;l<=i;++l){var c=t+4+l*e;if(l==i||0==a[c>>u]){var f=n(s,c-s);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),s=c+e}}return _e(t),r},toWireType:function(t,n){"string"!=typeof n&&Wt("Cannot pass non-string to C++ string type "+r);var o=a(n),s=Te(4+o+e);return F[s>>2]=o>>u,i(n,s+4,o+e),null!==t&&t.push(_e,s),s},argPackAdvance:8,readValueFromPointer:ft,destructorFunction:function(t){_e(t)}})},v:function(t,e,r,n,i,o){lt[t]={name:Pt(e),rawConstructor:Zt(r,n),rawDestructor:Zt(i,o),fields:[]}},c:function(t,e,r,n,i,o,a,u,s,l){lt[t].fields.push({fieldName:Pt(e),getterReturnType:r,getter:Zt(n,i),getterContext:o,setterArgumentType:a,setter:Zt(u,s),setterContext:l})},K:function(t,e){Et(t,{isVoid:!0,name:e=Pt(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})},m:function(t,e,r){t=pe(t),e=se(e,"emval::as");var n=[],i=ae(n);return k[r>>2]=i,e.toWireType(n,t)},s:function(t,e,r,n){(t=he[t])(e=pe(e),r=ye(r),null,n)},b:oe,z:function(t){return 0===t?ae(ve()):(t=ye(t),ae(ve()[t]))},t:function(t,e){var r,n,i=function(t,e){for(var r=new Array(t),n=0;n<t;++n)r[n]=se(k[(e>>2)+n],"parameter "+n);return r}(t,e),o=i[0],a=new Array(t-1);return r=function(e,r,n,u){for(var s=0,l=0;l<t-1;++l)a[l]=i[l+1].readValueFromPointer(u+s),s+=i[l+1].argPackAdvance;var c=e[r].apply(e,a);for(l=0;l<t-1;++l)i[l+1].deleteObject&&i[l+1].deleteObject(a[l]);if(!o.isVoid)return o.toWireType(n,c)},n=he.length,he.push(r),n},r:function(t){return t=ye(t),ae(o[t])},e:function(t,e){return ae((t=pe(t))[e=pe(e)])},g:function(t){t>4&&(ie[t].refcount+=1)},q:function(t,e,r,n){t=pe(t);var i=me[e];return i||(i=function(t){var e=new Array(t+1);return function(r,n,i){e[0]=r;for(var o=0;o<t;++o){var a=se(k[(n>>2)+o],"parameter "+o);e[o+1]=a.readValueFromPointer(i),i+=a.argPackAdvance}return ae(new(r.bind.apply(r,e)))}}(e),me[e]=i),i(t,r,n)},f:function(t){return ae(ye(t))},l:function(t){ct(ie[t].value),oe(t)},p:function(){tt()},F:function(t,e,r){S.copyWithin(t,e,e+r)},G:function(t){t>>>=0;var e=S.length,r=2147483648;if(t>r)return!1;for(var n,i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),ge(Math.min(r,((n=Math.max(16777216,t,o))%65536>0&&(n+=65536-n%65536),n))))return!0}return!1},H:function(t){return 0},D:function(t,e,r,n,i){},A:function(t,e,r,n){for(var i=0,o=0;o<r;o++){for(var a=k[e+8*o>>2],u=k[e+(8*o+4)>>2],s=0;s<u;s++)be.printChar(t,S[a+s]);i+=u}return k[n>>2]=i,0},memory:g,o:function(t){return(t=+t)>=0?+Z(t+.5):+Y(t-.5)},E:function(t){},table:C};!function(){var t={a:$e};function e(t,e){var r=t.exports;o.asm=r,function(t){if(K--,o.monitorRunDependencies&&o.monitorRunDependencies(K),0==K&&Q){var e=Q;Q=null,e()}}()}function r(t){e(t.instance)}function n(e){return(m||!c&&!f||"function"!=typeof fetch||ot(ut)?new Promise((function(t,e){t(st())})):fetch(ut,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+ut+"'";return t.arrayBuffer()})).catch((function(){return st()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){$("failed to asynchronously prepare wasm: "+t),tt(t)}))}if(K++,o.monitorRunDependencies&&o.monitorRunDependencies(K),o.instantiateWasm)try{return o.instantiateWasm(t,e)}catch(t){return $("Module.instantiateWasm callback failed with error: "+t),!1}!function(){if(m||"function"!=typeof WebAssembly.instantiateStreaming||nt(ut)||ot(ut)||"function"!=typeof fetch)return n(r);fetch(ut,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(r,(function(t){return $("wasm streaming compile failed: "+t),$("falling back to ArrayBuffer instantiation"),n(r)}))}))}()}();var Ce,we=o.___wasm_call_ctors=function(){return(we=o.___wasm_call_ctors=o.asm.L).apply(null,arguments)},Te=o._malloc=function(){return(Te=o._malloc=o.asm.M).apply(null,arguments)},_e=o._free=function(){return(_e=o._free=o.asm.N).apply(null,arguments)},Pe=o.___getTypeName=function(){return(Pe=o.___getTypeName=o.asm.O).apply(null,arguments)};function Ae(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function We(t){function e(){Ce||(Ce=!0,o.calledRun=!0,w||(N(L),N(X),r(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)t=o.postRun.shift(),J.unshift(t);var t;N(J)}()))}K>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)t=o.preRun.shift(),G.unshift(t);var t;N(G)}(),K>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),e()}),1)):e()))}if(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.P).apply(null,arguments)},o.dynCall_viii=function(){return(o.dynCall_viii=o.asm.Q).apply(null,arguments)},o.dynCall_vi=function(){return(o.dynCall_vi=o.asm.R).apply(null,arguments)},o.dynCall_v=function(){return(o.dynCall_v=o.asm.S).apply(null,arguments)},o.dynCall_i=function(){return(o.dynCall_i=o.asm.T).apply(null,arguments)},o.dynCall_iii=function(){return(o.dynCall_iii=o.asm.U).apply(null,arguments)},o.dynCall_ii=function(){return(o.dynCall_ii=o.asm.V).apply(null,arguments)},o.dynCall_vii=function(){return(o.dynCall_vii=o.asm.W).apply(null,arguments)},o.dynCall_iiii=function(){return(o.dynCall_iiii=o.asm.X).apply(null,arguments)},o.dynCall_iiiii=function(){return(o.dynCall_iiiii=o.asm.Y).apply(null,arguments)},o.dynCall_iiiiii=function(){return(o.dynCall_iiiiii=o.asm.Z).apply(null,arguments)},o.dynCall_iiiiiiii=function(){return(o.dynCall_iiiiiiii=o.asm._).apply(null,arguments)},o.dynCall_iiiiiiiii=function(){return(o.dynCall_iiiiiiiii=o.asm.$).apply(null,arguments)},o.dynCall_viiii=function(){return(o.dynCall_viiii=o.asm.aa).apply(null,arguments)},o.dynCall_iiiiiii=function(){return(o.dynCall_iiiiiii=o.asm.ba).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiiii=o.asm.ca).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiiiii=o.asm.da).apply(null,arguments)},o.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiiiiiiiiiii=o.asm.ea).apply(null,arguments)},o.dynCall_viiiii=function(){return(o.dynCall_viiiii=o.asm.fa).apply(null,arguments)},o.dynCall_iiiiiiiiii=function(){return(o.dynCall_iiiiiiiiii=o.asm.ga).apply(null,arguments)},o.dynCall_iiiiiiiiiii=function(){return(o.dynCall_iiiiiiiiiii=o.asm.ha).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.ia).apply(null,arguments)},o.dynCall_viiiiii=function(){return(o.dynCall_viiiiii=o.asm.ja).apply(null,arguments)},Q=function t(){Ce||We(),Ce||(Q=t)},o.run=We,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return We(),e.ready},r.exports=i;const a=e({__proto__:null,default:o},[o]);export{a as b};