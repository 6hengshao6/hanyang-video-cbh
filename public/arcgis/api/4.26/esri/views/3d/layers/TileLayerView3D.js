// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ./LayerView3D ./TiledLayerView3D ../../layers/LayerView ../../layers/RefreshableLayerView ../../layers/support/MapServiceLayerViewHelper ../../support/drapedUtils".split(" "),
function(h,c,m,k,f,b,y,z,n,p,q,r,t,u,l,v){b=function(d){function g(){var a=w.apply(this,arguments);a.type="tile-3d";a._popupHighlightHelper=null;return a}h._inherits(g,d);var w=h._createSuper(g);d=g.prototype;d.initialize=function(){if("web-tile"===this.layer.type){var a=this.layer.get("fullExtent.spatialReference");const e=this.layer.get("tileInfo.spatialReference");if(k.isNone(a)||k.isNone(e)||!p.canProjectWithoutEngine(a,e))a="defaults"===this.layer.originOf("fullExtent")||k.isNone(this.layer.fullExtent)?
"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer",this.addResolvingPromise(Promise.reject(new m("layerview:incompatible-fullextent",a)))}l.isMapServiceLayerView(this,this.layer)&&(this._popupHighlightHelper=new l.MapServiceLayerViewHelper({createFetchPopupFeaturesQueryGeometry:(e,x)=>v.createQueryGeometry(e,x,this.view),layerView:this,updatingHandles:this.updatingHandles}));
this._addTilingSchemeMatchPromise()};d.destroy=function(){this._popupHighlightHelper?.destroy()};d.fetchPopupFeatures=async function(a,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(a,e):[]};d.doRefresh=async function(){this.suspended||this.emit("data-changed")};h._createClass(g,[{key:"imageFormatIsOpaque",get:function(){return"jpg"===this.layer.tileInfo.format}},{key:"hasMixedImageFormats",get:function(){return"mixed"===this.layer.tileInfo.format}},{key:"tileInfo",
get:function(){return this.layer.tileInfo}},{key:"dataLevelRange",get:function(){if(this.tileInfo){const a=this.tileInfo.lods;return this.levelRangeFromScaleRange(a[0].scale,a[a.length-1].scale)}return{minLevel:0,maxLevel:0}}}]);return g}(u(r.TiledLayerView3D(q.LayerView3D(t))));c.__decorate([f.property()],b.prototype,"imageFormatIsOpaque",null);c.__decorate([f.property()],b.prototype,"hasMixedImageFormats",null);c.__decorate([f.property()],b.prototype,"layer",void 0);c.__decorate([f.property()],
b.prototype,"tileInfo",null);c.__decorate([f.property()],b.prototype,"dataLevelRange",null);return b=c.__decorate([n.subclass("esri.views.3d.layers.TileLayerView3D")],b)});