/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"./typedArrayUtil.js";import"../core/Error.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{d as e,a as r}from"./heatmapUtils.js";import{B as s}from"./BitmapTileContainer.js";import{B as o}from"./BaseTileRenderer.js";import"../config.js";import"./object.js";import"../core/lang.js";import"./maybe.js";import"./string.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"./screenUtils.js";import"./vec4f64.js";import"./aaBoundingRect.js";import"../geometry/Extent.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./mat3f32.js";import"./Bitmap.js";import"./mat3.js";import"./vec2f32.js";import"./DisplayObject.js";import"../core/Evented.js";import"./context-util.js";import"./enums3.js";import"./Texture.js";import"./TiledDisplayObject.js";import"./TileKey2.js";import"./WGLContainer.js";import"./definitions.js";import"./FramebufferObject.js";import"./VertexElementDescriptor.js";import"./WGLBrushVTLSymbol.js";import"./vec4f32.js";import"./enums4.js";import"./number2.js";import"./StyleDefinition.js";import"./enums.js";import"./config.js";import"./GeometryUtils2.js";import"./color.js";import"./ShaderCompiler.js";import"./ProgramTemplate.js";import"./Program.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./utils19.js";import"../Color.js";import"./colorUtils.js";import"./heatmapTextureUtils.js";import"./DefaultVertexAttributeLayouts.js";import"./Container.js";import"./EffectView.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../core/reactiveUtils.js";import"./earcut.js";import"./vec2.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./TileContainer.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";class m{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(t){e(t,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let n=class extends o{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new s(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if("heatmap"===t.type){const{minDensity:i,maxDensity:e,colorStops:s}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=e,this._gradient=r(s),this.tiles.forEach((t=>{const r=t.bitmap.source;r&&(r.minDensity=i,r.maxDensity=e,r.gradient=this._gradient,t.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&"heatmap"===t.type}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const e=t.intensityInfo,{minDensity:r,maxDensity:s}=this._intensityInfo,o=i.bitmap.source||new m;o.intensities=e&&e.matrix||null,o.minDensity=r,o.maxDensity=s,o.gradient=this._gradient,i.bitmap.source=o,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};n=t([i("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],n);const p=n;export{p as default};