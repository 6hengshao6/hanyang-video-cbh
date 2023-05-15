// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Logger ../../core/maybe ../../core/maybeUpdating ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/projection ./LayerView".split(" "),function(y,u,e,c,l,v,x,f,D,E,F,z,r,A){const w=c.getLogger("esri.views.layers.SceneLayerView");c=function(g){function m(){var a=
B.apply(this,arguments);a.layer=null;a.filter=null;a._geometryEngine=null;a._projectionEngineLoaded=!1;return a}u._inherits(m,g);var B=u._createSuper(m);g=m.prototype;g.initialize=function(){x.whenOnce(()=>!this._geometryEngine&&l.isSome(this.layer.filter)&&this.layer.filter.geometries.length).then(async()=>this._geometryEngine=await new Promise((a,d)=>y(["../../geometry/geometryEngine"],a,d)));this._projectionEngineLoaded=r.isLoaded();x.whenOnce(()=>!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine).then(async()=>
{await r.load();this._projectionEngineLoaded=!0})};g.destroy=function(){};g.highlight=function(a){throw Error("Not implemented");};g.queryFeatures=function(a,d){throw Error("Not implemented");};g.queryObjectIds=function(a,d){throw Error("Not implemented");};g.queryFeatureCount=function(a,d){throw Error("Not implemented");};g.createQuery=function(){throw Error("Not implemented");};g.queryExtent=function(a,d){throw Error("Not implemented");};u._createClass(m,[{key:"availableFields",get:function(){return[]}},
{key:"maximumNumberOfFeatures",get:function(){return 0},set:function(a){throw Error("Not implemented");}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return!1}},{key:"layerFilter",get:function(){return v.unwrapUpdating(this._layerFilter)}},{key:"_layerFilter",get:function(){const a=this.layer.filter;if(l.isNone(a)||1>a.geometries.length)return null;const d=this._geometryEngine;if(l.isNone(d)||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return v.updating;const n=a.geometries.getItemAt(0).spatialReference,
C=a.geometries.toArray().map(b=>{try{b=d.simplify(b)}catch(p){return w.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==b)return null;if(b.spatialReference.equals(n))return b;try{return r.project(b,n)}catch(p){return w.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(l.isSome).sort((b,p)=>b.extent.xmin-p.extent.xmin),q=new Set,k=[],t=[];for(let b of C){const p=b.extent.xmin;k.length=0;q.forEach(h=>
{p>=h.extent.xmax?(t.push(h),q.delete(h)):b.extent.ymin<=h.extent.ymax&&b.extent.ymax>=h.extent.ymin&&d.intersects(b,h)&&k.push(h)});if(0<k.length){k.push(b);try{b=d.union(k)}catch(h){w.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}k.pop();k.forEach(h=>q.delete(h))}q.add(b)}q.forEach(b=>t.push(b));return 0<t.length?{spatialRelationship:a.spatialRelationship,geometries:t}:null}},{key:"_filterNeedsProjectionEngine",get:function(){const a=this.layer.filter;
if(l.isNone(a)||1>=a.geometries.length)return!1;const d=a.geometries.getItemAt(0).spatialReference;return a.geometries.some(({spatialReference:n})=>!n.equals(d)&&!r.canProjectWithoutEngine(n,d))}},{key:"layerFilterUpdating",get:function(){return v.isUpdating(this._layerFilter)}}]);return m}(A);e.__decorate([f.property()],c.prototype,"layer",void 0);e.__decorate([f.property()],c.prototype,"availableFields",null);e.__decorate([f.property()],c.prototype,"maximumNumberOfFeatures",null);e.__decorate([f.property({readOnly:!0})],
c.prototype,"maximumNumberOfFeaturesExceeded",null);e.__decorate([f.property()],c.prototype,"filter",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"layerFilter",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"_layerFilter",null);e.__decorate([f.property()],c.prototype,"_geometryEngine",void 0);e.__decorate([f.property()],c.prototype,"_projectionEngineLoaded",void 0);e.__decorate([f.property()],c.prototype,"_filterNeedsProjectionEngine",null);e.__decorate([f.property()],
c.prototype,"layerFilterUpdating",null);return c=e.__decorate([z.subclass("esri.views.layers.SceneLayerView")],c)});