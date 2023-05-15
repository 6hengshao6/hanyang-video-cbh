/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import s from"../core/Error.js";import{L as t}from"./Logger.js";import{i as r}from"./maybe.js";import{watch as i,initial as o}from"../core/reactiveUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{h as n,n as m,s as h,d as p}from"./vec3.js";import{projectVectorToVector as c}from"../geometry/projection.js";import{k as d,e as u}from"./aaBoundingBox.js";import{f as y}from"./unitUtils.js";import{L as b}from"./LayerView3D.js";import{P as g}from"./PopupSceneLayerView.js";import w from"../views/layers/LayerView.js";import{C as V}from"./context-util.js";import v from"../geometry/SpatialReference.js";import"../geometry/Extent.js";import"./string.js";import"./object.js";import"../core/lang.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"../config.js";import"./reader.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec4.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./SimpleObservable.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./popupUtils.js";import"../core/Evented.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/Identifiable.js";import"../core/Promise.js";var _;!function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"}(_||(_={}));const f=p(),W=p();let j=class extends(g(b(w))){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){return this.layer.parsedUrl?.path??""}get wasmLayerId(){return this._wasmLayerId}initialize(){if(this._dbgFlags.add(_.Error),"local"!==this.view.viewingMode)throw new s("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(this.view._stage.renderView.renderingContext.type!==V.WEBGL2)throw new s("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});if(!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)throw new s("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!y(e,this.view.spatialReference))throw new s("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const t=this.layer.currentVariableId,a=this.layer.getVolume(t),l=this.layer.getVariable(t);if(r(a)&&r(l)){const e=a.dimensions[0],s=a.dimensions[1],t=a.zDimension;if(t>1){const r=a.dimensions[t],i=e.size*s.size*r.size;let o=1;switch(l.renderingFormat.type){case"Int16":case"UInt16":o=2;break;case"Int32":case"UInt32":case"Float32":o=4}this._futureMemory=o*i}}const n=this.view.addVoxelLayerViewToWasm(this).then((e=>{this._wasmLayerId=e,this._suspendedHandle=i((()=>this.suspended),(e=>{const s=this.view.voxelWasm;r(s)&&s.setEnabled(this,!e)}),o),this.handles.add([i((()=>this.layer.renderMode),(e=>this._pushRenderModeToWasm(e))),i((()=>this.layer.currentVariableId),(e=>this._pushCurrentVariableIdToWasm(e))),i((()=>this.layer.getSections()),(e=>this._pushSectionsToWasm(e))),i((()=>this.layer.getVariableStyles()),(e=>this._pushVariableStylesToWasm(e))),i((()=>this.layer.getVolumeStyles()),(e=>this._pushVolumeStylesToWasm(e))),i((()=>this.layer.enableDynamicSections),(e=>this._pushEnableDynamicSectionsToWasm(e))),i((()=>this.layer.enableIsosurfaces),(e=>this._pushEnableIsosurfacesToWasm(e))),i((()=>this.layer.enableSections),(e=>this._pushEnableSectionsToWasm(e))),i((()=>this.layer.enableSlices),(e=>this._pushEnableSlicesToWasm(e))),i((()=>this.slicePlaneEnabled),(e=>this._pushAnalysisSliceToWasm(e,this.view.slicePlane))),i((()=>this.view.slicePlane),(e=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,e)))])})).catch((e=>{if(this.view.removeVoxelLayerViewFromWasm(this),this._wasmLayerId=-1,-1===e)throw new s("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new s("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(n)}destroy(){this.view.removeVoxelLayerViewFromWasm(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=this.view.voxelWasm;return!(this._wasmLayerId<0||!r(e))&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}whenGraphicBounds(e,s){const t=e.attributes["Voxel.WorldPosition"];if(t){const e=d(),s=JSON.parse(t);if(c(s,this.view.renderSpatialReference,W,this.view.spatialReference||v.WGS84))return u(e,W),Promise.resolve({boundingBox:e,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=this.view.voxelWasm;r(e)&&e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=this.view.voxelWasm;r(e)&&e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){let e=[];const s=this.view.voxelWasm;return r(s)&&(e=s.getLayerTimes(this)),e}getCurrentLayerTimeIndex(){let e=0;const s=this.view.voxelWasm;return r(s)&&(e=s.getCurrentLayerTimeIndex(this)),e}_pushRenderModeToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(r(s)?"have WASM":"don't have WASM!!!")),r(s)&&s.setRenderMode(this,e)||this._dbg(_.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(r(s)?"have WASM":"don't have WASM!!!")),r(s)&&s.setStaticSections(this,e)||this._dbg(_.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(r(s)?"have WASM":"don't have WASM!!!")),r(s)&&s.setCurrentVariable(this,e)||this._dbg(_.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(r(s)?"have WASM":"don't have WASM!!!"));let t=!1;r(s)&&(t=s.setVariableStyles(this,e),t||this._dbg(_.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!"))}_accountForEnableSlices(e,s){const t=r(s)?s:this.layer.enableSlices;for(let s=0;s<e.length;++s){const r=e[s];for(const e of r.slices)e.enabled=e.enabled&&t}}_pushVolumeStylesToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(r(s)?"have WASM":"don't have WASM!!!"));let t=!1;r(s)&&(this._accountForEnableSlices(e,null),t=s.setVolumeStyles(this,e),t||this._dbg(_.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const t=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(r(t)?"have WASM":"don't have WASM!!!"));let i=!1;if(r(t)){if(r(s)){const r=s.origin;n(f,s.basis1,s.basis2),m(f,f),i=t.setAnalysisSlice(this,e,r,f)}else h(f,0,0,1),i=t.setAnalysisSlice(this,!1,f,f);i||this._dbg(_.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_pushEnableDynamicSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(r(s)?"have WASM":"don't have WASM!!!"));let t=!1;r(s)&&(t=s.setEnableDynamicSections(this,e),t||this._dbg(_.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!"))}_pushEnableSlicesToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(r(s)?"have WASM":"don't have WASM!!!"));let t=!1;if(r(s)){const r=this.layer.getVolumeStyles();this._accountForEnableSlices(r,e),t=s.setVolumeStyles(this,r),t||this._dbg(_.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(r(s)?"have WASM":"don't have WASM!!!"));let t=!1;r(s)&&(t=s.setEnableIsosurfaces(this,e),t||this._dbg(_.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!"))}_pushEnableSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(_.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(r(s)?"have WASM":"don't have WASM!!!"));let t=!1;r(s)&&(t=s.setEnableSections(this,e),t||this._dbg(_.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!"))}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===_.Error?t.getLogger(this.declaredClass).error(s):t.getLogger(this.declaredClass).warn(s))}};e([a()],j.prototype,"layer",void 0),e([a()],j.prototype,"baseUrl",null),e([a({type:Boolean})],j.prototype,"slicePlaneEnabled",void 0),j=e([l("esri.views.3d.layers.VoxelLayerView3D")],j);const S=j;export{S as default};