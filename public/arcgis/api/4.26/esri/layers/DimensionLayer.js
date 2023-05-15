// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../analysis/DimensionAnalysis ../analysis/DimensionSimpleStyle ../analysis/LengthDimension ../core/Collection ../core/maybe ../core/MultiOriginJSONSupport ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Layer ./mixins/OperationalLayer".split(" "),function(l,c,p,r,t,
u,g,b,q,e,B,C,D,v,w,x,y){b=function(f){function h(a){var d=z.call(this,a);d.type="dimension";d.operationalLayerType="ArcGISDimensionLayer";d.source=new p;d.opacity=1;if(a){const {source:m,style:k}=a;m&&k&&(m.style=k)}return d}l._inherits(h,f);var z=l._createSuper(h);f=h.prototype;f.initialize=function(){this.addHandles([q.watch(()=>this.source,(a,d)=>{g.isSome(d)&&d.parent===this&&(d.parent=null);g.isSome(a)&&(a.parent=this)},q.syncAndInitial)])};f.load=async function(){this.addResolvingPromise(this.source.waitComputeExtent());
return this};f.releaseAnalysis=function(a){this.source===a&&(this.source=new p)};f.writeDimensions=function(a,d,m,k){d.dimensions=a.filter(({startPoint:n,endPoint:A})=>g.isSome(n)&&g.isSome(A)).map(n=>n.toJSON(k)).toJSON()};l._createClass(h,[{key:"spatialReference",get:function(){return g.unwrap(this.source.spatialReference)}},{key:"style",get:function(){return this.source.style},set:function(a){this.source.style=a}},{key:"fullExtent",get:function(){return this.source.extent}},{key:"analysis",get:function(){return this.source},
set:function(a){this.source=a}},{key:"dimensions",get:function(){return this.source.dimensions},set:function(a){this.source.dimensions=a}}]);return h}(y.OperationalLayer(b.MultiOriginJSONMixin(x)));c.__decorate([e.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);c.__decorate([e.property({type:["ArcGISDimensionLayer"]})],b.prototype,"operationalLayerType",void 0);c.__decorate([e.property({nonNullable:!0})],b.prototype,"source",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,
"spatialReference",null);c.__decorate([e.property({types:{key:"type",base:null,typeMap:{simple:r}},json:{write:{ignoreOrigin:!0}}})],b.prototype,"style",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"fullExtent",null);c.__decorate([e.property({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],b.prototype,"opacity",void 0);c.__decorate([e.property({type:["show","hide"]})],b.prototype,"listMode",
void 0);c.__decorate([e.property({type:u.ofType(t),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],b.prototype,"dimensions",null);c.__decorate([w.writer("web-scene","dimensions")],b.prototype,"writeDimensions",null);return b=c.__decorate([v.subclass("esri.layers.DimensionLayer")],b)});