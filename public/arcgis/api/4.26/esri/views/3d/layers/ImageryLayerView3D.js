// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/Error ../../../core/accessorSupport/decorators/subclass ./DynamicLayerView3D ../../layers/ImageryLayerView".split(" "),function(g,l,k,m,n,h,u,v,w,x,p,q,r){h=function(c){function e(){var a=t.apply(this,arguments);a.type="imagery-3d";
a.redrawDebounced=m.debounce(async d=>{a.redraw((b,f)=>a._redrawImage(b,f),d)},2E3);return a}g._inherits(e,c);var t=g._createSuper(e);c=e.prototype;c.initialize=function(){this.handles.add([n.when(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]);this.updatingHandles.add(()=>this.layer?.exportImageServiceParameters?.version,()=>{this.updatingHandles.addPromise(this.refreshDebounced())});
this.updatingHandles.add(()=>this.layer?.renderer,()=>{this.updatingHandles.addPromise(this.refreshDebounced())});this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))};c._initializeMaximumDataResolution=function(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null};c.getFetchOptions=function(){return{timeExtent:this.timeExtent}};c.processResult=async function(a,d,b){d.imageOrCanvasElement?a.image=d.imageOrCanvasElement:
(a.image=document.createElement("canvas"),a.pixelData=d.pixelData,await this._redrawImage(a,b))};c._redrawImage=async function(a,d){if(!(a.image instanceof HTMLCanvasElement)||k.isNone(a.pixelData))throw Error();var b=a.image;const f=b.getContext("2d");a=await this.layer.applyRenderer(a.pixelData,{signal:d});a=this.layer.applyFilter(a).pixelBlock;if(k.isNone(a))throw Error();b.width=a.width;b.height=a.height;b=f.createImageData(a.width,a.height);b.data.set(a.getAsRGBA());f.putImageData(b,0,0)};return g._createClass(e)}(r(q));
return h=l.__decorate([p.subclass("esri.views.3d.layers.ImageryLayerView3D")],h)});