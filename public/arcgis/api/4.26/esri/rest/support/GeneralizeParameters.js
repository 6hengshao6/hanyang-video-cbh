// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(f,e,a,k,g,l,p,q,m,n){a=function(c){function b(d){d=h.call(this,d);d.deviationUnit=null;d.geometries=null;d.maxDeviation=null;return d}f._inherits(b,c);var h=f._createSuper(b);
return f._createClass(b)}(a.JSONSupport);e.__decorate([g.property({type:String,json:{write:!0}})],a.prototype,"deviationUnit",void 0);e.__decorate([g.property({json:{read:{reader:c=>c?c.map(b=>n.fromJSON(b)).filter(k.isSome):null},write:{writer:(c,b)=>{b.geometries=c?.map(h=>h.toJSON())??null}}}})],a.prototype,"geometries",void 0);e.__decorate([g.property({type:Number,json:{write:!0}})],a.prototype,"maxDeviation",void 0);a=e.__decorate([m.subclass("esri.rest.support.GeneralizeParameters")],a);a.from=
l.ensureType(a);return a});