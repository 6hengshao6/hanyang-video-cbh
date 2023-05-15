// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../request ../../../core/asyncUtils ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/urlUtils".split(" "),function(d,h,k,l,m,n,e,f){let r=function(){function g(a){this._streamDataRequester=a}var c=g.prototype;c.loadJSON=async function(a,b){return this._load("json",a,b)};c.loadBinary=async function(a,b){return f.isDataProtocol(a)?(e.throwIfAborted(b),f.dataToArrayBuffer(a)):this._load("binary",a,b)};c.loadImage=
async function(a,b){return this._load("image",a,b)};c._load=async function(a,b,p){if(n.isNone(this._streamDataRequester))return(await k(b,{responseType:q[a]})).data;a=await l.result(this._streamDataRequester.request(b,a,p));if(!0===a.ok)return a.value;e.throwIfAbortError(a.error);throw new m("",`Request for resource failed: ${a.error}`);};return h._createClass(g)}();const q={image:"image",binary:"array-buffer",json:"json"};d.DefaultLoadingContext=r;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});