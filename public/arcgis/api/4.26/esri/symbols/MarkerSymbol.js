// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Symbol".split(" "),function(g,d,h,f,b,n,p,k,l){b=function(a){function e(c){c=m.call(this,c);c.angle=0;c.type=null;c.xoffset=0;c.yoffset=0;c.size=9;return c}g._inherits(e,a);var m=g._createSuper(e);e.prototype.hash=function(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`};
return g._createClass(e)}(l);d.__decorate([f.property({type:Number,json:{read:a=>a&&-1*a,write:(a,e)=>e.angle=a&&-1*a}})],b.prototype,"angle",void 0);d.__decorate([f.property({type:["simple-marker","picture-marker"],readOnly:!0})],b.prototype,"type",void 0);d.__decorate([f.property({type:Number,cast:h.toPt,json:{write:!0}})],b.prototype,"xoffset",void 0);d.__decorate([f.property({type:Number,cast:h.toPt,json:{write:!0}})],b.prototype,"yoffset",void 0);d.__decorate([f.property({type:Number,cast:a=>
"auto"===a?a:h.toPt(a),json:{write:!0}})],b.prototype,"size",void 0);return b=d.__decorate([k.subclass("esri.symbols.MarkerSymbol")],b)});