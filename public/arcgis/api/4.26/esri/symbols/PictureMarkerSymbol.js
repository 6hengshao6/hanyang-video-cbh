// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ./MarkerSymbol ./support/urlUtils".split(" "),function(g,c,q,k,e,b,r,t,u,v,n){var m;b=m=function(d){function h(...a){a=w.call(this,...a);a.color=null;a.type="picture-marker";a.url=null;a.source=
null;a.height=12;a.width=12;a.size=null;return a}g._inherits(h,d);var w=g._createSuper(h);d=h.prototype;d.normalizeCtorArgs=function(a,f,p){if(a&&"string"!==typeof a&&null==a.imageData)return a;const l={};a&&(l.url=a);null!=f&&(l.width=k.toPt(f));null!=p&&(l.height=k.toPt(p));return l};d.readHeight=function(a,f){return f.size||a};d.readWidth=function(a,f){return f.size||a};d.clone=function(){const a=new m({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});
a._set("source",q.clone(this.source));return a};d.hash=function(){return`${g._get(g._getPrototypeOf(h.prototype),"hash",this).call(this)}.${this.height}.${this.url}.${this.width}`};return g._createClass(h)}(v);c.__decorate([e.property({json:{write:!1}})],b.prototype,"color",void 0);c.__decorate([r.enumeration({esriPMS:"picture-marker"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([e.property(n.urlPropertyDefinition)],b.prototype,"url",void 0);c.__decorate([e.property(n.sourcePropertyDefinition)],
b.prototype,"source",void 0);c.__decorate([e.property({type:Number,cast:k.toPt,json:{write:!0}})],b.prototype,"height",void 0);c.__decorate([t.reader("height",["height","size"])],b.prototype,"readHeight",null);c.__decorate([e.property({type:Number,cast:k.toPt,json:{write:!0}})],b.prototype,"width",void 0);c.__decorate([e.property({json:{write:!1}})],b.prototype,"size",void 0);return b=m=c.__decorate([u.subclass("esri.symbols.PictureMarkerSymbol")],b)});