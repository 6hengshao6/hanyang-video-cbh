/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{c as n}from"./_commonjsHelpers.js";function t(n,t){for(var e=0;e<t.length;e++){const r=t[e];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t);e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var e,r,a,i={};e={get exports(){return i},set exports(n){i=n}},r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=function(t){var e,a,i;t=t||{},e||(e=void 0!==t?t:{}),e.ready=new Promise((function(n,t){a=n,i=t}));var o=Object.assign({},e),u="./this.program",c="";"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),r&&(c=r),c=0!==c.indexOf("blob:")?c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var f,s=e.print||console.log.bind(console),l=e.printErr||console.warn.bind(console);Object.assign(e,o),o=null,e.thisProgram&&(u=e.thisProgram),e.wasmBinary&&(f=e.wasmBinary),e.noExitRuntime,"object"!=typeof WebAssembly&&I("no native wasm support detected");var h,d,p,v,m,y,g,b,w,A,T,_,P=!1,C="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function $(n,t,e){var r=t+e;for(e=t;n[e]&&!(e>=r);)++e;if(16<e-t&&n.buffer&&C)return C.decode(n.subarray(t,e));for(r="";t<e;){var a=n[t++];if(128&a){var i=63&n[t++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|i);else{var o=63&n[t++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&n[t++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else r+=String.fromCharCode(a)}return r}function k(){var n=h.buffer;d=n,e.HEAP8=p=new Int8Array(n),e.HEAP16=m=new Int16Array(n),e.HEAP32=g=new Int32Array(n),e.HEAPU8=v=new Uint8Array(n),e.HEAPU16=y=new Uint16Array(n),e.HEAPU32=b=new Uint32Array(n),e.HEAPF32=w=new Float32Array(n),e.HEAPF64=_=new Float64Array(n),e.HEAP64=A=new BigInt64Array(n),e.HEAPU64=T=new BigUint64Array(n)}var W,j=[],E=[],O=[];function S(){var n=e.preRun.shift();j.unshift(n)}var F,U=0,R=null;function I(n){throw e.onAbort&&e.onAbort(n),l(n="Aborted("+n+")"),P=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),i(n),n}function x(){return F.startsWith("data:application/octet-stream;base64,")}if(F="arcgis-knowledge-client-core-simd.wasm",!x()){var V=F;F=e.locateFile?e.locateFile(V,c):c+V}function H(){var n=F;try{if(n==F&&f)return new Uint8Array(f);throw"both async and sync fetching of the wasm failed"}catch(n){I(n)}}function B(n){for(;0<n.length;)n.shift()(e)}function D(n){this.fa=n-24,this.Sa=function(n){b[this.fa+4>>2]=n},this.Ia=function(n){b[this.fa+8>>2]=n},this.Oa=function(){g[this.fa>>2]=0},this.Ga=function(){p[this.fa+12>>0]=0},this.Pa=function(){p[this.fa+13>>0]=0},this.Ca=function(n,t){this.Fa(),this.Sa(n),this.Ia(t),this.Oa(),this.Ga(),this.Pa()},this.Fa=function(){b[this.fa+16>>2]=0}}var z={};function M(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function q(n){return this.fromWireType(g[n>>2])}var N={},L={},G={};function J(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=t&&57>=t?"_"+n:n}function Y(n,t){return n=J(n),function(){return t.apply(this,arguments)}}function Z(n){var t=Error,e=Y(n,(function(t){this.name=n,this.message=t,void 0!==(t=Error(t).stack)&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var K=void 0;function Q(n){throw new K(n)}function X(n,t,e){function r(t){(t=e(t)).length!==n.length&&Q("Mismatched type converter count");for(var r=0;r<n.length;++r)on(n[r],t[r])}n.forEach((function(n){G[n]=t}));var a=Array(t.length),i=[],o=0;t.forEach(((n,t)=>{L.hasOwnProperty(n)?a[t]=L[n]:(i.push(n),N.hasOwnProperty(n)||(N[n]=[]),N[n].push((()=>{a[t]=L[n],++o===i.length&&r(a)})))})),0===i.length&&r(a)}function nn(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}var tn=void 0;function en(n){for(var t="";v[n];)t+=tn[v[n++]];return t}var rn=void 0;function an(n){throw new rn(n)}function on(n,t,e={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=t.name;if(n||an('type "'+r+'" must have a positive integer typeid pointer'),L.hasOwnProperty(n)){if(e.Qa)return;an("Cannot register type '"+r+"' twice")}L[n]=t,delete G[n],N.hasOwnProperty(n)&&(t=N[n],delete N[n],t.forEach((n=>n())))}function un(n,t,e){switch(t){case 0:return e?function(n){return p[n]}:function(n){return v[n]};case 1:return e?function(n){return m[n>>1]}:function(n){return y[n>>1]};case 2:return e?function(n){return g[n>>2]}:function(n){return b[n>>2]};case 3:return e?function(n){return A[n>>3]}:function(n){return T[n>>3]};default:throw new TypeError("Unknown integer type: "+n)}}function cn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function fn(n){an(n.da.ga.ea.name+" instance already deleted")}var sn=!1;function ln(){}function hn(n){--n.count.value,0===n.count.value&&(n.ia?n.ka.ma(n.ia):n.ga.ea.ma(n.fa))}function dn(n,t,e){return t===e?n:void 0===e.la||null===(n=dn(n,t,e.la))?null:e.Ea(n)}var pn={},vn=[];function mn(){for(;vn.length;){var n=vn.pop();n.da.qa=!1,n.delete()}}var yn=void 0,gn={};function bn(n,t){return t.ga&&t.fa||Q("makeClassHandle requires ptr and ptrType"),!!t.ka!=!!t.ia&&Q("Both smartPtrType and smartPtr must be specified"),t.count={value:1},wn(Object.create(n,{da:{value:t}}))}function wn(n){return"undefined"==typeof FinalizationRegistry?(wn=n=>n,n):(sn=new FinalizationRegistry((n=>{hn(n.da)})),ln=n=>{sn.unregister(n)},(wn=n=>{var t=n.da;return t.ia&&sn.register(n,{da:t},n),n})(n))}function An(){}function Tn(n,t,e){if(void 0===n[t].ha){var r=n[t];n[t]=function(){return n[t].ha.hasOwnProperty(arguments.length)||an("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].ha+")!"),n[t].ha[arguments.length].apply(this,arguments)},n[t].ha=[],n[t].ha[r.pa]=r}}function _n(n,t,r){e.hasOwnProperty(n)?((void 0===r||void 0!==e[n].ha&&void 0!==e[n].ha[r])&&an("Cannot register public name '"+n+"' twice"),Tn(e,n,n),e.hasOwnProperty(r)&&an("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),e[n].ha[r]=t):(e[n]=t,void 0!==r&&(e[n].$a=r))}function Pn(n,t,e,r,a,i,o,u){this.name=n,this.constructor=t,this.na=e,this.ma=r,this.la=a,this.Ja=i,this.sa=o,this.Ea=u,this.Ua=[]}function Cn(n,t,e){for(;t!==e;)t.sa||an("Expected null or instance of "+e.name+", got an instance of "+t.name),n=t.sa(n),t=t.la;return n}function $n(n,t){return null===t?(this.va&&an("null is not a valid "+this.name),0):(t.da||an('Cannot pass "'+nn(t)+'" as a '+this.name),t.da.fa||an("Cannot pass deleted object as a pointer of type "+this.name),Cn(t.da.fa,t.da.ga.ea,this.ea))}function kn(n,t){if(null===t){if(this.va&&an("null is not a valid "+this.name),this.ua){var e=this.wa();return null!==n&&n.push(this.ma,e),e}return 0}if(t.da||an('Cannot pass "'+nn(t)+'" as a '+this.name),t.da.fa||an("Cannot pass deleted object as a pointer of type "+this.name),!this.ta&&t.da.ga.ta&&an("Cannot convert argument of type "+(t.da.ka?t.da.ka.name:t.da.ga.name)+" to parameter type "+this.name),e=Cn(t.da.fa,t.da.ga.ea,this.ea),this.ua)switch(void 0===t.da.ia&&an("Passing raw pointer to smart pointer is illegal"),this.Za){case 0:t.da.ka===this?e=t.da.ia:an("Cannot convert argument of type "+(t.da.ka?t.da.ka.name:t.da.ga.name)+" to parameter type "+this.name);break;case 1:e=t.da.ia;break;case 2:if(t.da.ka===this)e=t.da.ia;else{var r=t.clone();e=this.Va(e,Mn((function(){r.delete()}))),null!==n&&n.push(this.ma,e)}break;default:an("Unsupporting sharing policy")}return e}function Wn(n,t){return null===t?(this.va&&an("null is not a valid "+this.name),0):(t.da||an('Cannot pass "'+nn(t)+'" as a '+this.name),t.da.fa||an("Cannot pass deleted object as a pointer of type "+this.name),t.da.ga.ta&&an("Cannot convert argument of type "+t.da.ga.name+" to parameter type "+this.name),Cn(t.da.fa,t.da.ga.ea,this.ea))}function jn(n,t,e,r,a,i,o,u,c,f,s){this.name=n,this.ea=t,this.va=e,this.ta=r,this.ua=a,this.Ta=i,this.Za=o,this.Aa=u,this.wa=c,this.Va=f,this.ma=s,a||void 0!==t.la?this.toWireType=kn:(this.toWireType=r?$n:Wn,this.ja=null)}function En(n,t,r){e.hasOwnProperty(n)||Q("Replacing nonexistant public symbol"),void 0!==e[n].ha&&void 0!==r?e[n].ha[r]=t:(e[n]=t,e[n].pa=r)}var On=[];function Sn(n,t){n=en(n);var e=On[t];return e||(t>=On.length&&(On.length=t+1),On[t]=e=W.get(t)),"function"!=typeof e&&an("unknown function pointer with signature "+n+": "+t),e}var Fn=void 0;function Un(n){var t=en(n=yt(n));return mt(n),t}function Rn(n,t){var e=[],r={};throw t.forEach((function n(t){r[t]||L[t]||(G[t]?G[t].forEach(n):(e.push(t),r[t]=!0))})),new Fn(n+": "+e.map(Un).join([", "]))}function In(n,t,e,r,a){var i=t.length;2>i&&an("argTypes array size mismatch! Must at least get return value and 'this' types!");var o=null!==t[1]&&null!==e,u=!1;for(e=1;e<t.length;++e)if(null!==t[e]&&void 0===t[e].ja){u=!0;break}var c="void"!==t[0].name,f=i-2,s=Array(f),l=[],h=[];return function(){if(arguments.length!==f&&an("function "+n+" called with "+arguments.length+" arguments, expected "+f+" args!"),h.length=0,l.length=o?2:1,l[0]=a,o){var e=t[1].toWireType(h,this);l[1]=e}for(var i=0;i<f;++i)s[i]=t[i+2].toWireType(h,arguments[i]),l.push(s[i]);if(i=r.apply(null,l),u)M(h);else for(var d=o?1:2;d<t.length;d++){var p=1===d?e:s[d-2];null!==t[d].ja&&t[d].ja(p)}return c?t[0].fromWireType(i):void 0}}function xn(n,t){for(var e=[],r=0;r<n;r++)e.push(b[t+4*r>>2]);return e}function Vn(n,t,e){return n instanceof Object||an(e+' with invalid "this": '+n),n instanceof t.ea.constructor||an(e+' incompatible with "this" of type '+n.constructor.name),n.da.fa||an("cannot call emscripten binding method "+e+" on deleted object"),Cn(n.da.fa,n.da.ga.ea,t.ea)}var Hn=[],Bn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Dn(n){4<n&&0==--Bn[n].xa&&(Bn[n]=void 0,Hn.push(n))}var zn=n=>(n||an("Cannot use deleted val. handle = "+n),Bn[n].value),Mn=n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Hn.length?Hn.pop():Bn.length;return Bn[t]={xa:1,value:n},t}};function qn(n,t,e){switch(t){case 0:return function(n){return this.fromWireType((e?p:v)[n])};case 1:return function(n){return this.fromWireType((e?m:y)[n>>1])};case 2:return function(n){return this.fromWireType((e?g:b)[n>>2])};default:throw new TypeError("Unknown integer type: "+n)}}function Nn(n,t){var e=L[n];return void 0===e&&an(t+" has unknown type "+Un(n)),e}function Ln(n,t){switch(t){case 2:return function(n){return this.fromWireType(w[n>>2])};case 3:return function(n){return this.fromWireType(_[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}var Gn="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Jn(n,t){for(var e=n>>1,r=e+t/2;!(e>=r)&&y[e];)++e;if(32<(e<<=1)-n&&Gn)return Gn.decode(v.subarray(n,e));for(e="",r=0;!(r>=t/2);++r){var a=m[n+2*r>>1];if(0==a)break;e+=String.fromCharCode(a)}return e}function Yn(n,t,e){if(void 0===e&&(e=2147483647),2>e)return 0;var r=t;e=(e-=2)<2*n.length?e/2:n.length;for(var a=0;a<e;++a)m[t>>1]=n.charCodeAt(a),t+=2;return m[t>>1]=0,t-r}function Zn(n){return 2*n.length}function Kn(n,t){for(var e=0,r="";!(e>=t/4);){var a=g[n+4*e>>2];if(0==a)break;++e,65536<=a?(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a)):r+=String.fromCharCode(a)}return r}function Qn(n,t,e){if(void 0===e&&(e=2147483647),4>e)return 0;var r=t;e=r+e-4;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),g[t>>2]=i,(t+=4)+4>e)break}return g[t>>2]=0,t-r}function Xn(n){for(var t=0,e=0;e<n.length;++e){var r=n.charCodeAt(e);55296<=r&&57343>=r&&++e,t+=4}return t}function nt(n,t){for(var e=Array(n),r=0;r<n;++r)e[r]=Nn(b[t+4*r>>2],"parameter "+r);return e}var tt={};function et(n){var t=tt[n];return void 0===t?en(n):t}var rt=[];function at(){function t(n){n.$$$embind_global$$$=n;var t="object"==typeof $$$embind_global$$$&&n.$$$embind_global$$$==n;return t||delete n.$$$embind_global$$$,t}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof n&&t(n)?$$$embind_global$$$=n:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var it=[],ot={},ut={};function ct(){if(!ft){var n,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(n in ut)void 0===ut[n]?delete t[n]:t[n]=ut[n];var e=[];for(n in t)e.push(n+"="+t[n]);ft=e}return ft}var ft,st=[null,[],[]];K=e.InternalError=Z("InternalError");for(var lt=Array(256),ht=0;256>ht;++ht)lt[ht]=String.fromCharCode(ht);tn=lt,rn=e.BindingError=Z("BindingError"),An.prototype.isAliasOf=function(n){if(!(this instanceof An&&n instanceof An))return!1;var t=this.da.ga.ea,e=this.da.fa,r=n.da.ga.ea;for(n=n.da.fa;t.la;)e=t.sa(e),t=t.la;for(;r.la;)n=r.sa(n),r=r.la;return t===r&&e===n},An.prototype.clone=function(){if(this.da.fa||fn(this),this.da.ra)return this.da.count.value+=1,this;var n=wn,t=Object,e=t.create,r=Object.getPrototypeOf(this),a=this.da;return(n=n(e.call(t,r,{da:{value:{count:a.count,qa:a.qa,ra:a.ra,fa:a.fa,ga:a.ga,ia:a.ia,ka:a.ka}}}))).da.count.value+=1,n.da.qa=!1,n},An.prototype.delete=function(){this.da.fa||fn(this),this.da.qa&&!this.da.ra&&an("Object already scheduled for deletion"),ln(this),hn(this.da),this.da.ra||(this.da.ia=void 0,this.da.fa=void 0)},An.prototype.isDeleted=function(){return!this.da.fa},An.prototype.deleteLater=function(){return this.da.fa||fn(this),this.da.qa&&!this.da.ra&&an("Object already scheduled for deletion"),vn.push(this),1===vn.length&&yn&&yn(mn),this.da.qa=!0,this},e.getInheritedInstanceCount=function(){return Object.keys(gn).length},e.getLiveInheritedInstances=function(){var n,t=[];for(n in gn)gn.hasOwnProperty(n)&&t.push(gn[n]);return t},e.flushPendingDeletes=mn,e.setDelayFunction=function(n){yn=n,vn.length&&yn&&yn(mn)},jn.prototype.Ka=function(n){return this.Aa&&(n=this.Aa(n)),n},jn.prototype.ya=function(n){this.ma&&this.ma(n)},jn.prototype.argPackAdvance=8,jn.prototype.readValueFromPointer=q,jn.prototype.deleteObject=function(n){null!==n&&n.delete()},jn.prototype.fromWireType=function(n){function t(){return this.ua?bn(this.ea.na,{ga:this.Ta,fa:e,ka:this,ia:n}):bn(this.ea.na,{ga:this,fa:n})}var e=this.Ka(n);if(!e)return this.ya(n),null;var r=function(n,t){for(void 0===t&&an("ptr should not be undefined");n.la;)t=n.sa(t),n=n.la;return gn[t]}(this.ea,e);if(void 0!==r)return 0===r.da.count.value?(r.da.fa=e,r.da.ia=n,r.clone()):(r=r.clone(),this.ya(n),r);if(r=this.ea.Ja(e),!(r=pn[r]))return t.call(this);r=this.ta?r.Ba:r.pointerType;var a=dn(e,this.ea,r.ea);return null===a?t.call(this):this.ua?bn(r.ea.na,{ga:r,fa:a,ka:this,ia:n}):bn(r.ea.na,{ga:r,fa:a})},Fn=e.UnboundTypeError=Z("UnboundTypeError"),e.count_emval_handles=function(){for(var n=0,t=5;t<Bn.length;++t)void 0!==Bn[t]&&++n;return n},e.get_first_emval=function(){for(var n=5;n<Bn.length;++n)if(void 0!==Bn[n])return Bn[n];return null};var dt={j:function(n){return vt(n+24)+24},i:function(n,t,e){throw new D(n).Ca(t,e),n},t:function(n){var t=z[n];delete z[n];var e=t.wa,r=t.ma,a=t.za;X([n],a.map((n=>n.Na)).concat(a.map((n=>n.Xa))),(n=>{var i={};return a.forEach(((t,e)=>{var r=n[e],o=t.La,u=t.Ma,c=n[e+a.length],f=t.Wa,s=t.Ya;i[t.Ha]={read:n=>r.fromWireType(o(u,n)),write:(n,t)=>{var e=[];f(s,n,c.toWireType(e,t)),M(e)}}})),[{name:t.name,fromWireType:function(n){var t,e={};for(t in i)e[t]=i[t].read(n);return r(n),e},toWireType:function(n,t){for(var a in i)if(!(a in t))throw new TypeError('Missing field:  "'+a+'"');var o=e();for(a in i)i[a].write(o,t[a]);return null!==n&&n.push(r,o),o},argPackAdvance:8,readValueFromPointer:q,ja:r}]}))},A:function(n,t,e,r,a){t=en(t),e=cn(e);var i=-1!=t.indexOf("u");i&&(a=(1n<<64n)-1n),on(n,{name:t,fromWireType:function(n){return n},toWireType:function(n,e){if("bigint"!=typeof e&&"number"!=typeof e)throw new TypeError('Cannot convert "'+nn(e)+'" to '+this.name);if(e<r||e>a)throw new TypeError('Passing a number "'+nn(e)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+r+", "+a+"]!");return e},argPackAdvance:8,readValueFromPointer:un(t,e,!i),ja:null})},R:function(n,t,e,r,a){var i=cn(e);on(n,{name:t=en(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?r:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var r=p;else if(2===e)r=m;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+t);r=g}return this.fromWireType(r[n>>i])},ja:null})},f:function(n,t,e,r,a,i,o,u,c,f,s,l,h){s=en(s),i=Sn(a,i),u&&(u=Sn(o,u)),f&&(f=Sn(c,f)),h=Sn(l,h);var d=J(s);_n(d,(function(){Rn("Cannot construct "+s+" due to unbound types",[r])})),X([n,t,e],r?[r]:[],(function(t){if(t=t[0],r)var e=t.ea,a=e.na;else a=An.prototype;t=Y(d,(function(){if(Object.getPrototypeOf(this)!==o)throw new rn("Use 'new' to construct "+s);if(void 0===c.oa)throw new rn(s+" has no accessible constructor");var n=c.oa[arguments.length];if(void 0===n)throw new rn("Tried to invoke ctor of "+s+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(c.oa).toString()+") parameters instead!");return n.apply(this,arguments)}));var o=Object.create(a,{constructor:{value:t}});t.prototype=o;var c=new Pn(s,t,o,h,e,i,u,f);e=new jn(s,c,!0,!1,!1),a=new jn(s+"*",c,!1,!1,!1);var l=new jn(s+" const*",c,!1,!0,!1);return pn[n]={pointerType:a,Ba:l},En(d,t),[e,a,l]}))},D:function(n,t,e,r,a,i,o){var u=xn(e,r);t=en(t),i=Sn(a,i),X([],[n],(function(n){function r(){Rn("Cannot call "+a+" due to unbound types",u)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]);var c=n.ea.constructor;return void 0===c[t]?(r.pa=e-1,c[t]=r):(Tn(c,t,a),c[t].ha[e-1]=r),X([],u,(function(n){return n=In(a,[n[0],null].concat(n.slice(1)),null,i,o),void 0===c[t].ha?(n.pa=e-1,c[t]=n):c[t].ha[e-1]=n,[]})),[]}))},o:function(n,t,e,r,a,i){0<t||I();var o=xn(t,e);a=Sn(r,a),X([],[n],(function(n){var e="constructor "+(n=n[0]).name;if(void 0===n.ea.oa&&(n.ea.oa=[]),void 0!==n.ea.oa[t-1])throw new rn("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.ea.oa[t-1]=()=>{Rn("Cannot construct "+n.name+" due to unbound types",o)},X([],o,(function(r){return r.splice(1,0,null),n.ea.oa[t-1]=In(e,r,null,a,i),[]})),[]}))},b:function(n,t,e,r,a,i,o,u){var c=xn(e,r);t=en(t),i=Sn(a,i),X([],[n],(function(n){function r(){Rn("Cannot call "+a+" due to unbound types",c)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]),u&&n.ea.Ua.push(t);var f=n.ea.na,s=f[t];return void 0===s||void 0===s.ha&&s.className!==n.name&&s.pa===e-2?(r.pa=e-2,r.className=n.name,f[t]=r):(Tn(f,t,a),f[t].ha[e-2]=r),X([],c,(function(r){return r=In(a,r,n,i,o),void 0===f[t].ha?(r.pa=e-2,f[t]=r):f[t].ha[e-2]=r,[]})),[]}))},c:function(n,t,e,r,a,i,o,u,c,f){t=en(t),a=Sn(r,a),X([],[n],(function(n){var r=(n=n[0]).name+"."+t,s={get:function(){Rn("Cannot access "+r+" due to unbound types",[e,o])},enumerable:!0,configurable:!0};return s.set=c?()=>{Rn("Cannot access "+r+" due to unbound types",[e,o])}:()=>{an(r+" is a read-only property")},Object.defineProperty(n.ea.na,t,s),X([],c?[e,o]:[e],(function(e){var o=e[0],s={get:function(){var t=Vn(this,n,r+" getter");return o.fromWireType(a(i,t))},enumerable:!0};if(c){c=Sn(u,c);var l=e[1];s.set=function(t){var e=Vn(this,n,r+" setter"),a=[];c(f,e,l.toWireType(a,t)),M(a)}}return Object.defineProperty(n.ea.na,t,s),[]})),[]}))},Q:function(n,t){on(n,{name:t=en(t),fromWireType:function(n){var t=zn(n);return Dn(n),t},toWireType:function(n,t){return Mn(t)},argPackAdvance:8,readValueFromPointer:q,ja:null})},q:function(n,t,e,r){function a(){}e=cn(e),t=en(t),a.values={},on(n,{name:t,constructor:a,fromWireType:function(n){return this.constructor.values[n]},toWireType:function(n,t){return t.value},argPackAdvance:8,readValueFromPointer:qn(t,e,r),ja:null}),_n(t,a)},e:function(n,t,e){var r=Nn(n,"enum");t=en(t),n=r.constructor,r=Object.create(r.constructor.prototype,{value:{value:e},constructor:{value:Y(r.name+"_"+t,(function(){}))}}),n.values[e]=r,n[t]=r},z:function(n,t,e){e=cn(e),on(n,{name:t=en(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:Ln(t,e),ja:null})},V:function(n,t,e,r,a,i){var o=xn(t,e);n=en(n),a=Sn(r,a),_n(n,(function(){Rn("Cannot call "+n+" due to unbound types",o)}),t-1),X([],o,(function(e){return En(n,In(n,[e[0],null].concat(e.slice(1)),null,a,i),t-1),[]}))},r:function(n,t,e,r,a){t=en(t),-1===a&&(a=4294967295),a=cn(e);var i=n=>n;if(0===r){var o=32-8*e;i=n=>n<<o>>>o}e=t.includes("unsigned")?function(n,t){return t>>>0}:function(n,t){return t},on(n,{name:t,fromWireType:i,toWireType:e,argPackAdvance:8,readValueFromPointer:un(t,a,0!==r),ja:null})},l:function(n,t,e){function r(n){var t=b;return new a(d,t[1+(n>>=2)],t[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];on(n,{name:e=en(e),fromWireType:r,argPackAdvance:8,readValueFromPointer:r},{Qa:!0})},k:function(n,t,e,r,a,i,o,u,c,f,s,l){e=en(e),i=Sn(a,i),u=Sn(o,u),f=Sn(c,f),l=Sn(s,l),X([n],[t],(function(n){return n=n[0],[new jn(e,n.ea,!1,!1,!0,n,r,i,u,f,l)]}))},B:function(n,t){var e="std::string"===(t=en(t));on(n,{name:t,fromWireType:function(n){var t=b[n>>2],r=n+4;if(e)for(var a=r,i=0;i<=t;++i){var o=r+i;if(i==t||0==v[o]){if(a=a?$(v,a,o-a):"",void 0===u)var u=a;else u+=String.fromCharCode(0),u+=a;a=o+1}}else{for(u=Array(t),i=0;i<t;++i)u[i]=String.fromCharCode(v[r+i]);u=u.join("")}return mt(n),u},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r,a,i="string"==typeof t;if(i||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||an("Cannot pass non-string to std::string"),e&&i)for(r=a=0;r<t.length;++r){var o=t.charCodeAt(r);127>=o?a++:2047>=o?a+=2:55296<=o&&57343>=o?(a+=4,++r):a+=3}else a=t.length;if(o=(a=vt(4+(r=a)+1))+4,b[a>>2]=r,e&&i){if(i=o,o=r+1,r=v,0<o){o=i+o-1;for(var u=0;u<t.length;++u){var c=t.charCodeAt(u);if(55296<=c&&57343>=c&&(c=65536+((1023&c)<<10)|1023&t.charCodeAt(++u)),127>=c){if(i>=o)break;r[i++]=c}else{if(2047>=c){if(i+1>=o)break;r[i++]=192|c>>6}else{if(65535>=c){if(i+2>=o)break;r[i++]=224|c>>12}else{if(i+3>=o)break;r[i++]=240|c>>18,r[i++]=128|c>>12&63}r[i++]=128|c>>6&63}r[i++]=128|63&c}}r[i]=0}}else if(i)for(i=0;i<r;++i)255<(u=t.charCodeAt(i))&&(mt(o),an("String has UTF-16 code units that do not fit in 8 bits")),v[o+i]=u;else for(i=0;i<r;++i)v[o+i]=t[i];return null!==n&&n.push(mt,a),a},argPackAdvance:8,readValueFromPointer:q,ja:function(n){mt(n)}})},w:function(n,t,e){if(e=en(e),2===t)var r=Jn,a=Yn,i=Zn,o=()=>y,u=1;else 4===t&&(r=Kn,a=Qn,i=Xn,o=()=>b,u=2);on(n,{name:e,fromWireType:function(n){for(var e,a=b[n>>2],i=o(),c=n+4,f=0;f<=a;++f){var s=n+4+f*t;f!=a&&0!=i[s>>u]||(c=r(c,s-c),void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),c=s+t)}return mt(n),e},toWireType:function(n,r){"string"!=typeof r&&an("Cannot pass non-string to C++ string type "+e);var o=i(r),c=vt(4+o+t);return b[c>>2]=o>>u,a(r,c+4,o+t),null!==n&&n.push(mt,c),c},argPackAdvance:8,readValueFromPointer:q,ja:function(n){mt(n)}})},u:function(n,t,e,r,a,i){z[n]={name:en(t),wa:Sn(e,r),ma:Sn(a,i),za:[]}},h:function(n,t,e,r,a,i,o,u,c,f){z[n].za.push({Ha:en(t),Na:e,La:Sn(r,a),Ma:i,Xa:o,Wa:Sn(u,c),Ya:f})},S:function(n,t){on(n,{Ra:!0,name:t=en(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},n:function(n,t,e){n=zn(n),t=Nn(t,"emval::as");var r=[],a=Mn(r);return b[e>>2]=a,t.toWireType(r,n)},F:function(n,t){return n=zn(n),(t=Nn(t,"emval::as")).toWireType(null,n)},W:function(n,t,e,r){n=zn(n),e=nt(t,e);for(var a=Array(t),i=0;i<t;++i){var o=e[i];a[i]=o.readValueFromPointer(r),r+=o.argPackAdvance}return n=n.apply(void 0,a),Mn(n)},U:function(n,t,e,r,a){n=rt[n],t=zn(t),e=et(e);var i=[];return b[r>>2]=Mn(i),n(t,e,i,a)},C:function(n,t,e,r){(n=rt[n])(t=zn(t),e=et(e),null,r)},a:Dn,v:function(n){return 0===n?Mn(at()):(n=et(n),Mn(at()[n]))},x:function(n,t){var e=nt(n,t),r=e[0];t=r.name+"_$"+e.slice(1).map((function(n){return n.name})).join("_")+"$";var a=it[t];if(void 0!==a)return a;var i=Array(n-1);return a=function(n){var t=rt.length;return rt.push(n),t}(((t,a,o,u)=>{for(var c=0,f=0;f<n-1;++f)i[f]=e[f+1].readValueFromPointer(u+c),c+=e[f+1].argPackAdvance;for(t=t[a].apply(t,i),f=0;f<n-1;++f)e[f+1].Da&&e[f+1].Da(i[f]);if(!r.Ra)return r.toWireType(o,t)})),it[t]=a},s:function(n,t){return n=zn(n),t=zn(t),Mn(n[t])},g:function(n){4<n&&(Bn[n].xa+=1)},H:function(n,t){return(n=zn(n))instanceof zn(t)},P:function(n){return"number"==typeof(n=zn(n))},T:function(n){return"string"==typeof(n=zn(n))},E:function(n,t,e,r){n=zn(n);var a=ot[t];return a||(a=function(n){var t=Array(n+1);return function(e,r,a){t[0]=e;for(var i=0;i<n;++i){var o=Nn(b[r+4*i>>2],"parameter "+i);t[i+1]=o.readValueFromPointer(a),a+=o.argPackAdvance}return e=new(e.bind.apply(e,t)),Mn(e)}}(t),ot[t]=a),a(n,e,r)},p:function(n){return Mn(et(n))},m:function(n){M(zn(n)),Dn(n)},d:function(n,t){return n=(n=Nn(n,"_emval_take_value")).readValueFromPointer(t),Mn(n)},G:function(n){return n=zn(n),Mn(typeof n)},y:function(){I("")},L:function(n,t,e){v.copyWithin(n,t,t+e)},K:function(n){var t=v.length;if(2147483648<(n>>>=0))return!1;for(var e=1;4>=e;e*=2){var r=t*(1+.2/e);r=Math.min(r,n+100663296);var a=Math;r=Math.max(n,r),a=a.min.call(a,2147483648,r+(65536-r%65536)%65536);n:{try{h.grow(a-d.byteLength+65535>>>16),k();var i=1;break n}catch(n){}i=void 0}if(i)return!0}return!1},I:function(n,t){var e=0;return ct().forEach((function(r,a){var i=t+e;for(a=b[n+4*a>>2]=i,i=0;i<r.length;++i)p[a++>>0]=r.charCodeAt(i);p[a>>0]=0,e+=r.length+1})),0},J:function(n,t){var e=ct();b[n>>2]=e.length;var r=0;return e.forEach((function(n){r+=n.length+1})),b[t>>2]=r,0},O:function(){return 52},N:function(){return 70},M:function(n,t,e,r){for(var a=0,i=0;i<e;i++){var o=b[t>>2],u=b[t+4>>2];t+=8;for(var c=0;c<u;c++){var f=v[o+c],h=st[n];0===f||10===f?((1===n?s:l)($(h,0)),h.length=0):h.push(f)}a+=u}return b[r>>2]=a,0}};!function(){function n(n){e.asm=n.exports,h=e.asm.X,k(),W=e.asm.ba,E.unshift(e.asm.Y),U--,e.monitorRunDependencies&&e.monitorRunDependencies(U),0==U&&R&&(n=R,R=null,n())}function t(t){n(t.instance)}function r(n){return(f||"function"!=typeof fetch?Promise.resolve().then((function(){return H()})):fetch(F,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+F+"'";return n.arrayBuffer()})).catch((function(){return H()}))).then((function(n){return WebAssembly.instantiate(n,a)})).then((function(n){return n})).then(n,(function(n){l("failed to asynchronously prepare wasm: "+n),I(n)}))}var a={a:dt};if(U++,e.monitorRunDependencies&&e.monitorRunDependencies(U),e.instantiateWasm)try{return e.instantiateWasm(a,n)}catch(n){l("Module.instantiateWasm callback failed with error: "+n),i(n)}(f||"function"!=typeof WebAssembly.instantiateStreaming||x()||"function"!=typeof fetch?r(t):fetch(F,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,a).then(t,(function(n){return l("wasm streaming compile failed: "+n),l("falling back to ArrayBuffer instantiation"),r(t)}))}))).catch(i)}(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.Y).apply(null,arguments)};var pt,vt=e._malloc=function(){return(vt=e._malloc=e.asm.Z).apply(null,arguments)},mt=e._free=function(){return(mt=e._free=e.asm._).apply(null,arguments)},yt=e.___getTypeName=function(){return(yt=e.___getTypeName=e.asm.$).apply(null,arguments)};function gt(){function n(){if(!pt&&(pt=!0,e.calledRun=!0,!P)){if(B(E),a(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var n=e.postRun.shift();O.unshift(n)}B(O)}}if(!(0<U)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)S();B(j),0<U||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),n()}),1)):n())}}if(e.__embind_initialize_bindings=function(){return(e.__embind_initialize_bindings=e.asm.aa).apply(null,arguments)},e.___cxa_is_pointer_type=function(){return(e.___cxa_is_pointer_type=e.asm.ca).apply(null,arguments)},R=function n(){pt||gt(),pt||(R=n)},e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();return gt(),t.ready},e.exports=a;const o=t({__proto__:null,default:i},[i]);export{o as a};