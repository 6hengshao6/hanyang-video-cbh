// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(e,c,a,k,h,f,n,p,q,l){a=function(d){function g(b){b=m.call(this,b);b.shapeAreaField=null;b.shapeLengthField=null;b.units=null;return b}e._inherits(g,d);var m=e._createSuper(g);return e._createClass(g)}(a.ClonableMixin(k.JSONSupport));
c.__decorate([f.property({type:String,json:{read:{source:"shapeAreaFieldName"}}})],a.prototype,"shapeAreaField",void 0);c.__decorate([f.property({type:String,json:{read:{source:"shapeLengthFieldName"}}})],a.prototype,"shapeLengthField",void 0);c.__decorate([f.property({type:String,json:{read:d=>h.areaUnitsJSONMap.read(d)||h.lengthUnitsJSONMap.read(d)}})],a.prototype,"units",void 0);return a=c.__decorate([l.subclass("esri.layers.support.GeometryFieldsInfo")],a)});