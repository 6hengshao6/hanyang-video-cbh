// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../request ../../../../../core/lang ../../../../../core/MapUtils ../../../../../core/promiseUtils".split(" "),function(g,k,l,m,n,h){function p(b,c){return n.getOrCreateMapValue(f,b,()=>new q(b)).getData(c).then(a=>{f.delete(b);return a}).catch(a=>{f.delete(b);throw a;})}let q=function(){function b(a){this._tileUrl=a;this._abortController=this._promise=null;this._abortOptions=[]}var c=b.prototype;c.getData=function(a){null===
this._promise&&(this._abortController=new AbortController,this._promise=this._makeRequest(this._tileUrl,this._abortController.signal));const d=this._abortOptions;d.push(a);h.onAbort(a,()=>{d.every(e=>h.isAborted(e))&&this._abortController.abort()});return this._promise.then(e=>m.clone(e))};c._makeRequest=async function(a,d){({data:a}=await l(a,{responseType:"array-buffer",signal:d}));return a};return k._createClass(b)}();const f=new Map;g.request=function(b,c,a,d,e){b=b.replace(/\{z\}/gi,c.toString()).replace(/\{y\}/gi,
a.toString()).replace(/\{x\}/gi,d.toString());return p(b,e)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});