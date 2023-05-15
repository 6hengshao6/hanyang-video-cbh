/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(n,t){for(var e=0;e<t.length;e++){const r=t[e];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t);e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var t,e,r={},o={get exports(){return r},set exports(n){r=n}};t=o,void 0!==(e={load:function(n){const e=n.locateFile,r={};var o=void 0!==o?o:{};const i=(()=>{let n;return{resolve:t=>n(t),promise:new Promise((t=>n=t))}})();o.locateFile=e,o.onRuntimeInitialized=()=>{i.resolve(r)},r.Module=o,r.whenLoaded=()=>i.promise;var a,u={};for(a in o)o.hasOwnProperty(a)&&(u[a]=o[a]);var s,f,c,l,p,m="object"==typeof window,h="function"==typeof importScripts,d="";"object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node?(d=h?require("path").dirname(d)+"/":__dirname+"/",s=function(n,t){return l||(l=require("fs")),p||(p=require("path")),n=p.normalize(n),l.readFileSync(n,t?null:"utf8")},c=function(n){var t=s(n,!0);return t.buffer||(t=new Uint8Array(t)),t.buffer||q("Assertion failed: "+undefined),t},f=function(n,t,e){l||(l=require("fs")),p||(p=require("path")),n=p.normalize(n),l.readFile(n,(function(n,r){n?e(n):t(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),t.exports=o,process.on("uncaughtException",(function(n){if(!(n instanceof K))throw n})),process.on("unhandledRejection",q),o.inspect=function(){return"[Emscripten Module object]"}):(m||h)&&(h?d=self.location.href:"undefined"!=typeof document&&document.currentScript&&(d=document.currentScript.src),d=0!==d.indexOf("blob:")?d.substr(0,d.lastIndexOf("/")+1):"",s=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},h&&(c=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),f=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)});var y=o.print||console.log.bind(console),g=o.printErr||console.warn.bind(console);for(a in u)u.hasOwnProperty(a)&&(o[a]=u[a]);u=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit;var v,w,b=0;o.wasmBinary&&(v=o.wasmBinary),o.noExitRuntime,"object"!=typeof WebAssembly&&q("no native wasm support detected");var A,_,E,R,P=!1,S="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function T(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o;if(o-t>16&&n.subarray&&S)return S.decode(n.subarray(t,o));for(var i="";t<o;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var s=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&n[t++])<65536)i+=String.fromCharCode(a);else{var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function j(n){A=n,o.HEAP8=new Int8Array(n),o.HEAP16=new Int16Array(n),o.HEAP32=E=new Int32Array(n),o.HEAPU8=_=new Uint8Array(n),o.HEAPU16=new Uint16Array(n),o.HEAPU32=new Uint32Array(n),o.HEAPF32=new Float32Array(n),o.HEAPF64=new Float64Array(n)}o.INITIAL_MEMORY;var I=[],x=[],H=[],M=0,F=null;function q(n){throw o.onAbort&&o.onAbort(n),g(n+=""),P=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}o.preloadedImages={},o.preloadedAudios={};var C,O,W="data:application/octet-stream;base64,";function U(n){return n.startsWith(W)}function L(n){return n.startsWith("file://")}function k(n){try{if(n==C&&v)return new Uint8Array(v);if(c)return c(n);throw"both async and sync fetching of the wasm failed"}catch(n){q(n)}}function B(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?R.get(e)():R.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(o)}}function D(n){try{return w.grow(n-A.byteLength+65535>>>16),j(w.buffer),1}catch(n){}}U(C="libtess.wasm")||(O=C,C=o.locateFile?o.locateFile(O,d):d+O);var z={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=z.buffers[n];0===t||10===t?((1===n?y:g)(T(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return z.varargs+=4,E[z.varargs-4>>2]},getStr:function(n){return function(n,t){return n?T(_,n,void 0):""}(n)},get64:function(n,t){return n}},N={h:function(){throw"longjmp"},l:function(n,t,e){_.copyWithin(n,t,t+e)},g:function(n){var t,e=_.length,r=2147483648;if((n>>>=0)>r)return!1;for(var o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,n+100663296),D(Math.min(r,((t=Math.max(n,i))%65536>0&&(t+=65536-t%65536),t))))return!0}return!1},f:function(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var a=E[t+8*i>>2],u=E[t+(8*i+4)>>2],s=0;s<u;s++)z.printChar(n,_[a+s]);o+=u}return E[r>>2]=o,0},b:function(){return b},k:function(n){var t=X();try{return R.get(n)()}catch(n){if(Y(t),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},d:function(n,t){var e=X();try{return R.get(n)(t)}catch(n){if(Y(e),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},j:function(n,t,e){var r=X();try{return R.get(n)(t,e)}catch(n){if(Y(r),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},i:function(n,t,e,r){var o=X();try{return R.get(n)(t,e,r)}catch(n){if(Y(o),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},e:function(n,t){var e=X();try{R.get(n)(t)}catch(n){if(Y(e),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},c:function(n,t,e){var r=X();try{R.get(n)(t,e)}catch(n){if(Y(r),n!==n+0&&"longjmp"!==n)throw n;J(1,0)}},a:function(n){b=n}};(function(){var n={a:N};function t(n,t){var e,r=n.exports;o.asm=r,j((w=o.asm.m).buffer),R=o.asm.q,e=o.asm.n,x.unshift(e),function(n){if(M--,o.monitorRunDependencies&&o.monitorRunDependencies(M),0==M&&F){var t=F;F=null,t()}}()}function e(n){t(n.instance)}function r(t){return function(){if(!v&&(m||h)){if("function"==typeof fetch&&!L(C))return fetch(C,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+C+"'";return n.arrayBuffer()})).catch((function(){return k(C)}));if(f)return new Promise((function(n,t){f(C,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return k(C)}))}().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){g("failed to asynchronously prepare wasm: "+n),q(n)}))}if(M++,o.monitorRunDependencies&&o.monitorRunDependencies(M),o.instantiateWasm)try{return o.instantiateWasm(n,t)}catch(n){return g("Module.instantiateWasm callback failed with error: "+n),!1}v||"function"!=typeof WebAssembly.instantiateStreaming||U(C)||L(C)||"function"!=typeof fetch?r(e):fetch(C,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return g("wasm streaming compile failed: "+n),g("falling back to ArrayBuffer instantiation"),r(e)}))}))})(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.n).apply(null,arguments)},o._malloc=function(){return(o._malloc=o.asm.o).apply(null,arguments)},o._free=function(){return(o._free=o.asm.p).apply(null,arguments)},o._triangulate=function(){return(o._triangulate=o.asm.r).apply(null,arguments)};var G,X=o.stackSave=function(){return(X=o.stackSave=o.asm.s).apply(null,arguments)},Y=o.stackRestore=function(){return(Y=o.stackRestore=o.asm.t).apply(null,arguments)},J=o._setThrew=function(){return(J=o._setThrew=o.asm.u).apply(null,arguments)};function K(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Q(n){function t(){G||(G=!0,o.calledRun=!0,P||(B(x),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)n=o.postRun.shift(),H.unshift(n);var n;B(H)}()))}M>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)n=o.preRun.shift(),I.unshift(n);var n;B(I)}(),M>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(F=function n(){G||Q(),G||(F=n)},o.run=Q,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();Q();let V=null,Z=null,$=null,nn=null;const tn=r.Module;let en=0;return r.triangulate=(n,t,e)=>{V||(V=tn._triangulate);let r=tn.HEAPF32;const o=tn.HEAP32.BYTES_PER_ELEMENT,i=r.BYTES_PER_ELEMENT;e>en&&(en=e,$&&(tn._free($),$=0),Z&&(tn._free(Z),Z=0)),$||($=tn._malloc(e*i)),nn||(nn=tn._malloc(4e3*o));const a=2*e;Z||(Z=tn._malloc(a*i)),r=tn.HEAPF32,r.set(n,$/i),tn.HEAP32.set(t,nn/o);const u=a/2,s=V($,nn,Math.min(t.length,4e3),2,Z,u),f=2*s;r=tn.HEAPF32;const c=r.slice(Z/i,Z/i+f),l={};return l.buffer=c,l.vertexCount=s,l},r.whenLoaded()}})&&(t.exports=e);const i=n({__proto__:null,default:r},[r]);export{i as l};
