// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Evented","../../../../core/Handles","../../../../core/maybe"],function(d,f,g,h,k){let m=function(){function e(b){this._handles=new h;this.events=new g;this._contentLayerViews=b.contentLayerViews;this._handles.add(this._contentLayerViews.on("change",a=>this._layerViewsChanged(a)));this._layerViewsChanged({added:this._contentLayerViews.toArray(),removed:[],moved:[],target:this._contentLayerViews})}var c=e.prototype;c.destroy=
function(){this._handles=k.destroyMaybe(this._handles);this._contentLayerViews.destroy()};c._layerViewsChanged=function(b){b.added.forEach(a=>{"esri.views.3d.layers.SceneLayerView3D"===a.declaredClass&&this._handles.add(a.on("visible-geometry-changed",()=>this._contentChanged()),a.uid)});b.removed.forEach(a=>this._handles.remove(a.uid))};c._contentChanged=function(){this.events.emit("request-update",l)};return f._createClass(e)}();const l={};d.ContentGeometryUpdates=m;Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});