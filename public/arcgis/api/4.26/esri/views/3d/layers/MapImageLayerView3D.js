// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/Error ../../../core/accessorSupport/decorators/subclass ./DynamicLayerView3D ../../layers/MapImageLayerView ../../layers/support/MapServiceLayerViewHelper ../../support/drapedUtils".split(" "),function(d,g,e,q,r,t,u,h,k,l,m,n){e=function(a){function c(){var b=p.apply(this,arguments);b.type="map-image-3d";
return b}d._inherits(c,a);var p=d._createSuper(c);a=c.prototype;a.initialize=function(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced()));this._popupHighlightHelper=new m.MapServiceLayerViewHelper({createFetchPopupFeaturesQueryGeometry:(b,f)=>n.createQueryGeometry(b,f,this.view),layerView:this,updatingHandles:this.updatingHandles})};a.destroy=function(){this._popupHighlightHelper?.destroy()};a.fetchPopupFeatures=function(b,f){return this._popupHighlightHelper.fetchPopupFeatures(b,
f)};a.getFetchOptions=function(){return{timeExtent:this.timeExtent}};return d._createClass(c)}(l(k));return e=g.__decorate([h.subclass("esri.views.3d.layers.MapImageLayerView3D")],e)});