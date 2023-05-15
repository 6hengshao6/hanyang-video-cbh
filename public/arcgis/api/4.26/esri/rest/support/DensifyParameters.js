// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(f,c,g,b,h,d,t,u,v,k,l){const m=new b.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});b=function(n){function e(a){a=
p.call(this,a);a.geometries=null;a.geodesic=null;a.lengthUnit=null;a.maxSegmentLength=null;return a}f._inherits(e,n);var p=f._createSuper(e);e.prototype.toJSON=function(){const a={};if(this.geometries&&0<this.geometries.length){const r=this.geometries.map(q=>q.toJSON());a.geometries=JSON.stringify({geometryType:l.getJsonType(this.geometries[0]),geometries:r});a.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}this.geodesic&&(a.geodesic=this.geodesic);this.lengthUnit&&(a.lengthUnit=
m.toJSON(this.lengthUnit));this.maxSegmentLength&&(a.maxSegmentLength=this.maxSegmentLength);return a};return f._createClass(e)}(h.JSONSupport);c.__decorate([d.property({types:[g.geometryTypes],json:{write:!0}})],b.prototype,"geometries",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"geodesic",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"lengthUnit",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"maxSegmentLength",
void 0);return b=c.__decorate([k.subclass("esri.rest.support.DensifyParameters")],b)});