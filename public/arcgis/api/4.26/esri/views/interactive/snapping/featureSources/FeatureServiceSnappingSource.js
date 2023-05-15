// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/HandleOwner ../../../../core/handleUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../core/accessorSupport/tracking/ObservableValue ../../../../support/elevationInfoUtils ../../../2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D ../../../3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D ./queryEngineUtils ./WorkerTileTreeDebugger ./featureServiceSource/FeatureServiceSnappingSourceWorkerHandle ./featureServiceSource/FeatureServiceTilesSimple ../../../support/debugFlags".split(" "),
function(c,u,f,z,A,x,m,g,d,k,K,L,M,B,C,D,E,F,y,G,v,H,I){c.FeatureServiceSnappingSource=function(n){function q(a){a=J.call(this,a);a._workerHandle=null;a._debug=null;return a}u._inherits(q,n);var J=u._createSuper(q);n=q.prototype;n.initialize=function(){let a;const e=this.view;if(m.isSome(e))switch(e.type){case "2d":this._tilesOfInterest=new E.FeatureServiceTiles2D({view:e,layer:this._layer});a=this._workerHandle=new v.FeatureServiceSnappingSourceWorkerHandle;break;case "3d":const {resourceController:h}=
e,r=this._layer,t=e.whenLayerView(r);this._tilesOfInterest=new F.FeatureServiceTiles3D({view:e});a=this._workerHandle=new v.FeatureServiceSnappingSourceWorkerHandle({schedule:b=>h.immediate.schedule(b),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(b,l)=>{const w=await t;g.throwIfAborted(l);return w.elevationAlignPointsInFeatures(b,l)},queryForSymbologySnapping:async(b,l)=>{const w=await t;g.throwIfAborted(l);return w.queryForSymbologySnapping(b,l)}});const p=
new C.ObservableValue(null);t.then(b=>p.set(b));this.addHandles([e.elevationProvider.on("elevation-change",({context:b})=>{const {elevationInfo:l}=r;D.elevationContextAffectsAlignment(b,l)&&g.ignoreAbortErrors(a.notifyElevationSourceChange())}),d.watch(()=>r.elevationInfo,()=>g.ignoreAbortErrors(a.notifyElevationSourceChange()),d.initial),d.watch(()=>m.applySome(p.get(),({processor:b})=>b?.renderer),()=>g.ignoreAbortErrors(a.notifySymbologyChange()),d.initial),d.watch(()=>m.mapOr(p.get(),!1,b=>b.symbologySnappingSupported),
b=>g.ignoreAbortErrors(a.setSymbologySnappingSupported(b)),d.initial),d.on(()=>m.toNullable(p.get())?.layer,["edits","apply-edits","graphic-update"],()=>a.notifySymbologyChange())])}else this._tilesOfInterest=new H.FeatureServiceTilesSimple({layer:this._layer}),a=this._workerHandle=new v.FeatureServiceSnappingSourceWorkerHandle;this.handles.add([x.destroyHandle(a)]);g.ignoreAbortErrors(a.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null));this.updatingHandles.add(()=>
this._updateTilesParameters,()=>g.ignoreAbortErrors(a.updateTiles(this._updateTilesParameters,null)),d.initial);this.handles.add([d.watch(()=>this.configuration,h=>g.ignoreAbortErrors(a.configure(h,null)),d.sync)]);m.isSome(e)&&this.handles.add(d.watch(()=>I.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,h=>{h&&!this._debug?(this._debug=new G.WorkerTileTreeDebugger({view:e,handle:a}),this.handles.add(x.destroyHandle(this._debug),"debug")):!h&&this._debug&&this.handles.remove("debug")},d.initial));
this.handles.add(this.layerSource.layer.on("apply-edits",h=>{g.ignoreAbortErrors(a.applyEdits(h,null))}))};n.refresh=function(){this._workerHandle?.refresh(null)};n.fetchCandidates=async function(a,e){const {coordinateHelper:h,point:r}=a;this._tilesOfInterest.pointOfInterest=h.arrayToPoint(r);const t=this._getGroundElevation;return(await this._workerHandle.fetchCandidates({...a},e)).candidates.map(p=>y.convertSnappingCandidate(p,t))};n.getDebugInfo=function(a){return this._workerHandle.getDebugInfo(a)};
u._createClass(q,[{key:"_updateTilesParameters",get:function(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}},{key:"updating",get:function(){return this._workerHandle?.updating||this.updatingHandles.updating}},{key:"configuration",get:function(){var {view:a}=this;a=m.isSome(a)?a.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:a}}},{key:"availability",get:function(){return this._workerHandle?.availability??
0}},{key:"_layer",get:function(){return this.layerSource.layer}},{key:"_getGroundElevation",get:function(){return y.makeGetGroundElevation(this.view)}}]);return q}(A.HandleOwnerMixin(z));f.__decorate([k.property({constructOnly:!0})],c.FeatureServiceSnappingSource.prototype,"spatialReference",void 0);f.__decorate([k.property({constructOnly:!0})],c.FeatureServiceSnappingSource.prototype,"layerSource",void 0);f.__decorate([k.property({constructOnly:!0})],c.FeatureServiceSnappingSource.prototype,"view",
void 0);f.__decorate([k.property()],c.FeatureServiceSnappingSource.prototype,"_tilesOfInterest",void 0);f.__decorate([k.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"_updateTilesParameters",null);f.__decorate([k.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"updating",null);f.__decorate([k.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"configuration",null);f.__decorate([k.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,
"availability",null);f.__decorate([k.property()],c.FeatureServiceSnappingSource.prototype,"_getGroundElevation",null);c.FeatureServiceSnappingSource=f.__decorate([B.subclass("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],c.FeatureServiceSnappingSource);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});