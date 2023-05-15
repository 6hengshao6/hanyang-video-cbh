// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/jsonMap ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./FillSymbol ./SimpleLineSymbol".split(" "),function(c,d,p,e,q,k,w,r,t,b,u){var l;e=new e.JSONMap({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",
esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});b=l=function(f){function g(...a){a=v.call(this,...a);a.color=new p([0,0,0,.25]);a.outline=new u;a.type="simple-fill";a.style="solid";return a}c._inherits(g,f);var v=c._createSuper(g);f=g.prototype;f.normalizeCtorArgs=function(a,m,n){if(a&&"string"!==typeof a)return a;const h={};a&&(h.style=a);m&&(h.outline=m);n&&(h.color=n);return h};f.clone=function(){return new l({color:q.clone(this.color),outline:this.outline&&
this.outline.clone(),style:this.style})};f.hash=function(){return`${c._get(c._getPrototypeOf(g.prototype),"hash",this).call(this)}${this.style}.${this.color&&this.color.hash()}`};return c._createClass(g)}(b);d.__decorate([k.property()],b.prototype,"color",void 0);d.__decorate([k.property()],b.prototype,"outline",void 0);d.__decorate([r.enumeration({esriSFS:"simple-fill"},{readOnly:!0})],b.prototype,"type",void 0);d.__decorate([k.property({type:e.apiValues,json:{read:e.read,write:e.write}})],b.prototype,
"style",void 0);return b=l=d.__decorate([t.subclass("esri.symbols.SimpleFillSymbol")],b)});