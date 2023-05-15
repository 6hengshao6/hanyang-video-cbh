// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/lang ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ./BaseImageMeasureParameters".split(" "),function(h,c,n,p,f,d,b,q,r,t,k){var l;b=l=function(g){function e(){var a=u.apply(this,arguments);a.type="area-perimeter";a.geometry=
null;a.is3D=!1;a.linearUnit="meters";a.areaUnit="square-meters";return a}h._inherits(e,g);var u=h._createSuper(e);g=e.prototype;g.writeGeometry=function(a,m,v){null!=a&&(m.geometryType=t.getJsonType(a),m[v]=a.toJSON())};g.clone=function(){return new l(p.clone({geometry:this.geometry,is3D:this.is3D,linearUnit:this.linearUnit,areaUnit:this.areaUnit,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,raster:this.raster}))};h._createClass(e,[{key:"measureOperation",get:function(){return this.is3D?
"area-and-perimeter-3D":"area-and-perimeter"}}]);return e}(k.BaseImageMeasureParameters);c.__decorate([d.property({types:n.geometryTypes,json:{name:"fromGeometry",read:!0,write:!0}})],b.prototype,"geometry",void 0);c.__decorate([r.writer("geometry")],b.prototype,"writeGeometry",null);c.__decorate([d.property({type:k.measureOperationJSONMap.apiValues,json:{write:k.measureOperationJSONMap.write}})],b.prototype,"measureOperation",null);c.__decorate([d.property({json:{read:!0}})],b.prototype,"is3D",void 0);
c.__decorate([d.property({type:String,json:{read:f.lengthUnitsJSONMap.read,write:f.lengthUnitsJSONMap.write}})],b.prototype,"linearUnit",void 0);c.__decorate([d.property({type:String,json:{read:f.areaUnitsJSONMap.read,write:f.areaUnitsJSONMap.write}})],b.prototype,"areaUnit",void 0);return b=l=c.__decorate([q.subclass("esri.rest.support.ImageAreaParameters")],b)});