// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point".split(" "),function(f,c,b,k,h,l,u,v,m,n,p){var g;b=g=function(d){function e(){var a=q.apply(this,arguments);a.geometries=null;a.rasterId=null;return a}f._inherits(e,
d);var q=f._createSuper(e);d=e.prototype;d.writeGeometry=function(a,r,w){r.geometries={geometryType:"esriGeometryPoint",geometries:a.map(t=>t.toJSON())}};d.clone=function(){return new g({geometries:this.geometries?.map(a=>a.clone())??[],rasterId:this.rasterId})};return f._createClass(e)}(k.JSONSupport);c.__decorate([h.property({type:[p],json:{write:!0}})],b.prototype,"geometries",void 0);c.__decorate([n.writer("geometries")],b.prototype,"writeGeometry",null);c.__decorate([h.property({type:l.Integer,
json:{write:!0}})],b.prototype,"rasterId",void 0);return b=g=c.__decorate([m.subclass("esri.rest.support.ImagePixelLocationParameters")],b)});