// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass".split(" "),function(d,e,a,g,m,n,p,h){var f;a=f=function(k){function c(b){b=l.call(this,b);b.returnTopmostRaster=null;b.showNoDataRecords=null;return b}d._inherits(c,k);var l=d._createSuper(c);c.prototype.clone=function(){return new f({showNoDataRecords:this.showNoDataRecords,
returnTopmostRaster:this.returnTopmostRaster})};return d._createClass(c)}(a.JSONSupport);e.__decorate([g.property({type:Boolean,json:{write:!0}})],a.prototype,"returnTopmostRaster",void 0);e.__decorate([g.property({type:Boolean,json:{write:!0}})],a.prototype,"showNoDataRecords",void 0);return a=f=e.__decorate([h.subclass("esri.popup.LayerOptions")],a)});