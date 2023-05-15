// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","./materialKey/MaterialKey"],function(l,u){function m(h,d,a,...e){d<h.length?h.splice(d,a,...e):h.push(...e)}let z=function(){function h(){this.symbolLevels=[]}var d=h.prototype;d.replay=function(a,e,c){for(const f of this.symbolLevels)for(const n of f.zLevels){var b=n.geometryDPInfo.unified;if(b)for(const k of b){const {geometryType:p,materialKey:r,indexFrom:v,indexCount:w}=k;b=u.MaterialKeyBase.load(r).symbologyType;b=a.painter.getBrush(p,b);
var g=e.getGeometry(p);g={geometryType:p,materialKey:r,indexFrom:v,indexCount:w,target:g};b.prepareState(a);b.drawGeometry(a,e,g,c)}}};d.clear=function(){this.symbolLevels.length=0};d.addToList=function(a,e){if(Array.isArray(a))for(const c of a)this._addToList(c,e);else this._addToList(a,e)};d.removeFromList=function(a){Array.isArray(a)||(a=[a]);let e=null;for(const c of a)e=this._removeFromList(c);return e};d.clone=function(){const a=new h;for(const e of this.symbolLevels)a.symbolLevels.push(e.clone());
return a};d.splitAfter=function(a){const e=this._getDisplayList(a.symbolLevel,a.zOrder),c=e.length,b=a.indexFrom+a.indexCount;for(let g=0;g<c;++g){const f=e[g];if(f.geometryType===a.geometryType&&b>f.indexFrom&&b<=f.indexFrom+f.indexCount)return b<f.indexFrom+f.indexCount&&(a=new q,a.geometryType=f.geometryType,a.materialKey=f.materialKey,a.indexFrom=b,a.indexCount=f.indexFrom+f.indexCount-b,e.splice(g+1,0,a),f.indexCount=b-f.indexFrom),g}};d._addToList=function(a,e){const c=this._getDisplayList(a.symbolLevel,
a.zOrder);e=null!=e?e:c.length-1;var b=0<=e&&e<c.length?c[e]:null;null!==b&&b.materialKey===a.materialKey&&b.indexFrom+b.indexCount===a.indexFrom&&b.geometryType===a.geometryType?b.indexCount+=a.indexCount:(b=new q,b.indexFrom=a.indexFrom,b.indexCount=a.indexCount,b.materialKey=a.materialKey,b.geometryType=a.geometryType,m(c,e+1,0,b))};d._removeFromList=function(a){const e=this._getDisplayList(a.symbolLevel,a.zOrder);var c=e.length;let b=void 0;for(var g=0;g<c;++g){var f=e[g];if(a.indexFrom+a.indexCount>
f.indexFrom&&a.indexFrom<f.indexFrom+f.indexCount&&f.geometryType===a.geometryType){b=g;break}}if(void 0!==b){c=e[b];if(a.indexFrom===c.indexFrom)return c.indexCount-=a.indexCount,c.indexFrom+=a.indexCount,0===c.indexCount&&m(e,b,1),b-1;if(a.indexFrom+a.indexCount===c.indexFrom+c.indexCount)return c.indexCount-=a.indexCount,0===c.indexCount?(m(e,b,1),b-1):b;g=c.indexFrom;f=a.indexFrom-c.indexFrom;const n=a.indexCount;a=c.indexFrom+c.indexCount-(a.indexFrom+a.indexCount);c.indexCount=f;const k=new q;
k.geometryType=c.geometryType;k.materialKey=c.materialKey;k.indexFrom=g+f+n;k.indexCount=a;m(e,b+1,0,k);return b}return null};d._getDisplayList=function(a,e){let c;var b=this.symbolLevels.length;for(let f=0;f<b;f++)if(this.symbolLevels[f].symbolLevel===a){c=this.symbolLevels[f];break}c||(c=new x,c.symbolLevel=a,this.symbolLevels.push(c));let g;a=c.zLevels.length;for(b=0;b<a;b++)if(c.zLevels[b].zLevel===e){g=c.zLevels[b];break}g||(g=new y,g.geometryDPInfo=new t,g.zLevel=e,c.zLevels.push(g));g.geometryDPInfo.unified||
(g.geometryDPInfo.unified=[]);return g.geometryDPInfo.unified};d.getDPInfoType=function(){return"unified"};l._createClass(h,[{key:"empty",get:function(){return!this.symbolLevels||0===this.symbolLevels.length}}]);return h}(),q=function(){function h(){this.materialKey=null;this.indexCount=this.indexFrom=0}h.prototype.clone=function(){const d=new h;d.geometryType=this.geometryType;d.materialKey=this.materialKey;d.indexFrom=this.indexFrom;d.indexCount=this.indexCount;return d};return l._createClass(h)}(),
t=function(){function h(){this.unified=this.label=this.text=this.marker=this.line=this.fill=null}h.prototype.clone=function(){const d=new h;d.fill=this.fill&&this.fill.map(a=>a.clone());d.line=this.line&&this.line.map(a=>a.clone());d.marker=this.marker&&this.marker.map(a=>a.clone());d.text=this.text&&this.text.map(a=>a.clone());d.label=this.label&&this.label.map(a=>a.clone());d.unified=this.unified&&this.unified.map(a=>a.clone());return d};return l._createClass(h)}(),y=function(){function h(){this.geometryDPInfo=
new t}h.prototype.clone=function(){const d=new h;d.zLevel=this.zLevel;d.geometryDPInfo=this.geometryDPInfo.clone();return d};return l._createClass(h)}(),x=function(){function h(){this.zLevels=[]}h.prototype.clone=function(){const d=new h;d.symbolLevel=this.symbolLevel;for(const a of this.zLevels)d.zLevels.push(a.clone());return d};return l._createClass(h)}();return z});