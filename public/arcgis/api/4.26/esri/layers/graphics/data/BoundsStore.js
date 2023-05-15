// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/has","../../../core/libs/rbush/PooledRBush","../../../geometry/support/aaBoundingRect"],function(g,h,k,l,m){function n(e,c,a){f.minX=c[0];f.minY=c[1];f.maxX=c[2];f.maxY=c[3];e.search(f,a)}const f={minX:0,minY:0,maxX:0,maxY:0};let q=function(){function e(){this._indexInvalid=!1;this._boundsToLoad=[];this._boundsById=new Map;this._idByBounds=new Map;this._index=new l.PooledRBush(9,k("esri-csp-restrictions")?a=>({minX:a[0],
minY:a[1],maxX:a[2],maxY:a[3]}):["[0]","[1]","[2]","[3]"]);this._loadIndex=()=>{if(this._indexInvalid){const a=Array(this._idByBounds.size);let b=0;this._idByBounds.forEach((d,p)=>{a[b++]=p});this._indexInvalid=!1;this._index.clear();this._index.load(a)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(a=>this._idByBounds.has(a))))),this._boundsToLoad.length=0)}}var c=e.prototype;c.clear=function(){this._indexInvalid=!1;this._boundsToLoad.length=0;this._boundsById.clear();
this._idByBounds.clear();this._index.clear()};c.delete=function(a){const b=this._boundsById.get(a);this._boundsById.delete(a);b&&(this._idByBounds.delete(b),this._indexInvalid||this._index.remove(b))};c.forEachInBounds=function(a,b){this._loadIndex();n(this._index,a,d=>b(this._idByBounds.get(d)))};c.get=function(a){return this._boundsById.get(a)};c.has=function(a){return this._boundsById.has(a)};c.invalidateIndex=function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)};
c.set=function(a,b){if(!this._indexInvalid){const d=this._boundsById.get(a);d&&(this._index.remove(d),this._idByBounds.delete(d))}this._boundsById.set(a,b);b&&(this._idByBounds.set(b,a),this._indexInvalid||(this._boundsToLoad.push(b),5E4<this._boundsToLoad.length&&this._loadIndex()))};h._createClass(e,[{key:"fullBounds",get:function(){if(!this._boundsById.size)return null;const a=m.empty();for(const b of this._boundsById.values())b&&(a[0]=Math.min(b[0],a[0]),a[1]=Math.min(b[1],a[1]),a[2]=Math.max(b[2],
a[2]),a[3]=Math.max(b[3],a[3]));return a}},{key:"valid",get:function(){return!this._indexInvalid}}]);return e}();g.BoundsStore=q;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});