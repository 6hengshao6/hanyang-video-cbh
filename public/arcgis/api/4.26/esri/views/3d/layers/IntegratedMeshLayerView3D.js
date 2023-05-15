// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./I3SMeshView3D ./interfaces ./LayerView3D ../support/updatingProperties ../../layers/LayerView".split(" "),function(g,c,k,l,h,e,b,v,w,m,n,p,q,r,t){b=function(d){function f(){var a=
u.apply(this,arguments);a.type="integrated-mesh-3d";a._elevationContext="im";a._isIntegratedMesh=!0;a._supportsLabeling=!1;a.drapeTargetType=p.DrapeTargetType.WithoutRasterImage;return a}g._inherits(f,d);var u=g._createSuper(f);d=f.prototype;d.initialize=function(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),h.initial);this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)};d.destroy=function(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)};
d._createLayerGraphic=function(){const a=new k;a.layer=this.layer;a.sourceLayer=this.layer;return a};d.canResume=function(){return g._get(g._getPrototypeOf(f.prototype),"canResume",this).call(this)&&(!this._controller||this._controller.rootNodeVisible)};d._loadModifications=function(){this.handles.remove("modifications");if(l.isNone(this.layer.modifications))this._modifications=[];else{var a=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>a,()=>this._modifications=
a.toArray(),h.initial),"modifications")}};g._createClass(f,[{key:"i3slayer",get:function(){return this.layer}},{key:"updatingProgressValue",get:function(){return this._controller?.updatingProgress??0}},{key:"lodFactor",get:function(){return this.view?.qualitySettings?.sceneService?.integratedMesh?.lodFactor??1}},{key:"progressiveLoadFactor",get:function(){return 1<=this.lodFactor?.2:1}},{key:"layerPopupEnabled",get:function(){return!1}}]);return f}(n.I3SMeshView3D(q.LayerView3D(t)));c.__decorate([e.property()],
b.prototype,"layer",void 0);c.__decorate([e.property()],b.prototype,"i3slayer",null);c.__decorate([e.property(r.updatingProgress)],b.prototype,"updatingProgress",void 0);c.__decorate([e.property()],b.prototype,"updatingProgressValue",null);c.__decorate([e.property()],b.prototype,"lodFactor",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"progressiveLoadFactor",null);return b=c.__decorate([m.subclass("esri.views.3d.layers.SceneLayerView3D")],b)});