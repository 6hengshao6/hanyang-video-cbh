// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../request ../../core/Error ../../core/Logger ../../core/LRUCache ../../core/maybe ../../core/promiseUtils ../../core/string ../../support/arcadeOnDemand ../../symbols/CIMSymbol".split(" "),function(q,w,x,r,y,t,z,p,A,B,u,C){function v(l,m){if(l&&(l=l.symbolLayers))for(var a=l.length;a--;){var b=l[a];if(b&&!1!==b.enable)switch(b.type){case "CIMVectorMarker":var c=m;if(b=b.markerGraphics)for(const d of b)if(d&&(b=d.symbol))switch(b.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":v(b,
c);break;case "CIMTextSymbol":b.fieldMap=c}}}}const D={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let E=function(){function l(a,b,c){this.url=this.fieldMap=this.config=null;this._ongoingRequests=new Map;this._symbolCache=new z(100);this._dictionaryPromise=null;this.url=a;this.config=b;this.fieldMap=c}var m=l.prototype;m.getSymbolFields=function(){return this._symbolFields};m.getSymbolAsync=async function(a,b){this._dictionaryPromise||
(this._dictionaryPromise=this.fetchResources(b));try{var c=await this._dictionaryPromise}catch(h){if(A.isAbortError(h))return this._dictionaryPromise=null}var d={};if(this.fieldMap)for(var g of this._symbolFields){var f=this.fieldMap[g];d[g]=f&&null!=a.attributes[f]?""+a.attributes[f]:""}c=c?.(d,b);if(!c||"string"!==typeof c)return null;const k=B.numericHash(c).toString();if(d=this._symbolCache.get(k))return d.catch(()=>{this._symbolCache.pop(k)}),d;g=c.split(";");c=[];d=[];for(const h of g)if(h)if(h.includes("po:")){var e=
h.substr(3).split("|");3===e.length&&(g=e[0],f=e[1],e=e[2],"DashTemplate"===f?e=e.split(" ").map(n=>Number(n)):"Color"===f?(e=(new x(e)).toRgba(),e=[e[0],e[1],e[2],255*e[3]]):e=Number(e),d.push({primitiveName:g,propertyName:f,value:e}))}else if(h.includes("|"))for(const n of h.split("|")){if(this._itemNames.has(n)){c.push(n);break}}else this._itemNames.has(h)&&c.push(h);a=p.isSome(a.geometry)&&(a.geometry.hasZ||"point"!==a.geometry.type)?!1:!0;b=this._cimPartsToCIMSymbol(c,d,a,b);this._symbolCache.put(k,
b,1);return b};m.fetchResources=async function(a){if(this._dictionaryPromise)return this._dictionaryPromise;if(this.url){var b=r(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:p.isSome(a)?a.signal:null}),[{data:c}]=await Promise.all([b,u.loadArcade()]);if(!c)throw this._dictionaryPromise=null,new y("esri.renderers.DictionaryRenderer","Bad dictionary data!");b=c.expression;var d=c.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+c.cimRefTemplateUrl;
this._itemNames=new Set(c.itemsNames);this._symbolFields=d.symbol;c={};if(this.config){const k=this.config;for(var g in k)c[g]=k[g]}if(d.configuration)for(var f of d.configuration)c.hasOwnProperty(f.name)||(c[f.name]=f.value);g=[];if(p.isSome(a)&&a.fields&&this.fieldMap)for(const k of this._symbolFields){const e=this.fieldMap[k];f=a.fields.filter(h=>h.name===e);0<f.length&&g.push({...f[0],name:k})}return this._dictionaryPromise=a=u.createDictionaryExpression(b,p.isSome(a)?a.spatialReference:null,
g,c).then(k=>{const e={scale:0};return(h,n)=>{if(p.isNone(k))return null;h=k.repurposeFeature({geometry:null,attributes:h});e.scale=p.isSome(n)?n.scale??void 0:void 0;return k.evaluate({$feature:h,$view:e})}}).catch(k=>{t.getLogger("esri.renderers.support.DictionaryLoader").error("Creating dictinoary expression failed:",k);return null})}t.getLogger("esri.renderers.support.DictionaryLoader").error("no valid URL!")};m._cimPartsToCIMSymbol=async function(a,b,c,d){const g=Array(a.length);for(let f=0;f<
a.length;f++)g[f]=this._getSymbolPart(a[f],d);a=await Promise.all(g);if(d=this.fieldMap)for(const f of a)v(f,d);return new C({data:this._combineSymbolParts(a,b,c)})};m._getSymbolPart=async function(a,b){if(this._ongoingRequests.has(a))return this._ongoingRequests.get(a).then(d=>d.data);const c=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,a);b=r(c,{responseType:"json",query:{f:"json"},...b});this._ongoingRequests.set(a,b);try{return(await b).data}catch(d){throw this._ongoingRequests.delete(a),
d;}};m._combineSymbolParts=function(a,b,c){if(!a||0===a.length)return null;const d={...a[0]};if(1<a.length){d.symbolLayers=[];for(const g of a)d.symbolLayers.unshift(...g.symbolLayers)}c&&(d.callout=D);return{type:"CIMSymbolReference",symbol:d,primitiveOverrides:b}};return w._createClass(l)}();q.DictionaryLoader=E;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});