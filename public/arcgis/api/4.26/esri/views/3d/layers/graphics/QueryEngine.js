// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Extent ../../../../layers/graphics/data/QueryEngine ../../../../rest/support/FeatureSet ../../../../rest/support/Query ../../../../geometry/support/typeUtils".split(" "),
function(e,l,g,F,q,n,h,G,H,I,r,t,u,p,v,w){const x=u.QueryEngine;e.QueryEngine=function(d){function k(a){a=y.call(this,a);a._dataQueryEngineInstance=null;return a}l._inherits(k,d);var y=l._createSuper(k);d=k.prototype;d.destroy=function(){this.clear()};d.clear=function(){return this._dataQueryEngineInstance?(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0):!1};d.executeQueryForIdSet=async function(a,b,c){return this._dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(a,
b),c)};d.executeQueryForCount=async function(a,b){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(a),b)};d.executeQueryForExtent=async function(a,b){const {count:c,extent:f}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(a),b);a=t.fromJSON(f);return{count:c,extent:a}};d.executeQueryForIds=async function(a,b){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(a),b)};d.executeQueryForLatestObservations=async function(a,b){a=await this._dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(a),
b);a=p.fromJSON(a);a.features.forEach(c=>{c.layer=this.layer;c.sourceLayer=this.layer});return a};d.executeQuery=async function(a,b){a=await this._dataQueryEngine.executeQuery(this._ensureQueryJSON(a),b);a=p.fromJSON(a);a.features.forEach(c=>{c.layer=this.layer;c.sourceLayer=this.layer});return a};d._ensureQueryJSON=function(a,b){let c=this.defaultQueryJSON;n.isSome(a)&&("outSpatialReference"in a&&!a.outSpatialReference&&(a.outSpatialReference=this.spatialReference),c=a.toJSON());n.isSome(b)&&(a=
b.geometries.map(f=>f.toJSON()).reduce((f,m)=>{f.rings=f.rings.concat(m.rings);return f}),c={...c,sceneFilter:{...b,geometry:a}});return c};d._ensureDataQueryEngine=function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const a="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,b=this.layer.objectIdField,c=w.featureGeometryTypeKebabDictionary.toJSON(this._queryGeometryType),f=this.layer.fields?.map(z=>z.toJSON())??[],m=this.priority,A=this.spatialReference.toJSON(),
{hasZ:B,hasM:C,featureStore:D,scheduler:E}=this.context;return this._dataQueryEngineInstance=new x({hasZ:B,hasM:C,geometryType:c,fields:f,timeInfo:a,spatialReference:A,objectIdField:b,featureStore:D,scheduler:E,priority:m})};l._createClass(k,[{key:"layer",get:function(){return this.context.layer}},{key:"spatialReference",get:function(){return this.context.spatialReference}},{key:"_queryGeometryType",get:function(){switch(this.layer.geometryType){case "multipoint":case "point":case "polygon":case "polyline":return this.layer.geometryType;
case "mesh":return"polygon"}}},{key:"defaultQueryJSON",get:function(){return(new v({outSpatialReference:this.spatialReference})).toJSON()}},{key:"_dataQueryEngine",get:function(){return this._ensureDataQueryEngine()}}]);return k}(q);g.__decorate([h.property({constructOnly:!0})],e.QueryEngine.prototype,"context",void 0);g.__decorate([h.property({constructOnly:!0})],e.QueryEngine.prototype,"priority",void 0);g.__decorate([h.property()],e.QueryEngine.prototype,"layer",null);g.__decorate([h.property()],
e.QueryEngine.prototype,"spatialReference",null);g.__decorate([h.property()],e.QueryEngine.prototype,"_queryGeometryType",null);g.__decorate([h.property()],e.QueryEngine.prototype,"defaultQueryJSON",null);e.QueryEngine=g.__decorate([r.subclass("esri.views.3d.layers.graphics.QueryEngine")],e.QueryEngine);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});