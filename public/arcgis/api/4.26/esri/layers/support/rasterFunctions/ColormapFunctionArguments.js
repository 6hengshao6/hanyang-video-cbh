// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ./BaseFunctionArguments ../../../renderers/support/colorRampUtils ../../../rest/support/colorRamps".split(" "),function(h,c,p,f,q,l,r,a,d,m){var k;a=k=function(e){function g(){return t.apply(this,arguments)}h._inherits(g,
e);var t=h._createSuper(g);e=g.prototype;e.castColormapName=function(b){if(!b)return null;b=b.toLowerCase();return d.rasterColormapNames.includes(b)?b:null};e.readColorRamp=function(b){return m.fromJSON(b)};e.readColorRampName=function(b,n){return b?(n=d.colorRampDict.jsonValues.find(u=>u.toLowerCase()===b.toLowerCase()))?d.colorRampDict.fromJSON(n):null:null};e.clone=function(){return new k({colormap:p.clone(this.colormap),colormapName:this.colormapName,colorRamp:this.colorRamp?.clone(),colorRampName:this.colorRampName})};
return h._createClass(g)}(a);c.__decorate([f.property({type:[[Number]],json:{write:!0}})],a.prototype,"colormap",void 0);c.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"colormapName",void 0);c.__decorate([q.cast("colormapName")],a.prototype,"castColormapName",null);c.__decorate([f.property({types:m.types,json:{write:!0}})],a.prototype,"colorRamp",void 0);c.__decorate([l.reader("colorRamp")],a.prototype,"readColorRamp",null);c.__decorate([f.property({type:d.colorRampDict.apiValues,
json:{type:d.colorRampDict.jsonValues,write:d.colorRampDict.write}})],a.prototype,"colorRampName",void 0);c.__decorate([l.reader("colorRampName")],a.prototype,"readColorRampName",null);return a=k=c.__decorate([r.subclass("esri.layers.support.rasterFunctions.ColormapFunctionArguments")],a)});