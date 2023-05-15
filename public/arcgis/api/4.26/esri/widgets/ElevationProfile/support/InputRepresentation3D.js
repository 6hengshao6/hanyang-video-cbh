// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/asyncUtils ../../../core/handleUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../support/elevationInfoUtils ../../../views/3d/interactive/editingTools/settings ../../../views/3d/interactive/visualElements/OutlineVisualElement ../../../views/3d/layers/graphics/GraphicState ../../../views/3d/webgl-engine/lib/Material ../../../views/support/layerViewUtils".split(" "),function(k,m,n,l,d,p,q,
r,t,u,v,w,x){function h(f){return d.isSome(f.geometry)&&"polyline"===f.geometry.type}let z=function(){function f(a){this._params=a;this._visualElementHandle=this._highlightHandle=this._highlightTask=null}var g=f.prototype;g.destroy=function(){this.remove()};g.remove=function(){this._highlightTask=d.abortMaybe(this._highlightTask);this._highlightHandle=d.removeMaybe(this._highlightHandle);this._visualElementHandle=d.removeMaybe(this._visualElementHandle)};g.showHighlight=function(a){this.remove();
if(!d.isNone(a)&&h(a)){var b=a.layer;this._highlightTask=n.createTask(async c=>{const e=await this._params.view.whenLayerView(b);p.throwIfAborted(c);x.highlightsSupported(e)&&(this._highlightHandle=e.highlight(a))})}};g.showReshaping=function(a){this.remove();if(!d.isNone(a)){var b=this._params.view,c=new u.OutlineVisualElement({view:b,geometry:h(a)?a.geometry:null,attached:!1,elevationInfo:r.getGraphicEffectiveElevationInfo(a),renderOccluded:w.RenderOccludedFlag.OccludeAndTransparentStencil}),e=
new v.GraphicState({graphic:a});b=[q.watch(()=>e.isDraped,y=>{c.isDraped=y}),e.on("changed",()=>{c.geometry=h(a)?a.geometry:null}),b.trackGraphicState(e),b.maskOccludee(a),l.destroyHandle(c)];t.settings.visualElements.lineGraphics.outline.apply(c);c.attached=!0;this._visualElementHandle=l.handlesGroup(b)}};return m._createClass(f)}();k.InputRepresentation3D=z;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});