// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol".split(" "),function(d,e,f,g,a,p,q,h,k,l){a=function(m){function c(b){b=n.call(this,b);b.type="simple-line";b.width=.75;return b}d._inherits(c,m);var n=d._createSuper(c);c.prototype.hash=function(){return`${this.type}.${this.width}`};
return d._createClass(c)}(l);e.__decorate([h.enumeration({esriSLS:"simple-line"},{readOnly:!0})],a.prototype,"type",void 0);e.__decorate([g.property({type:Number,cast:f.toPt,json:{write:!0}})],a.prototype,"width",void 0);return a=e.__decorate([k.subclass("esri.symbols.LineSymbol")],a)});