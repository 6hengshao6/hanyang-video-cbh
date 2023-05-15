/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{L as r}from"./Logger.js";import{d as e}from"./maybe.js";import{isAbortError as i}from"../core/promiseUtils.js";import{watch as o}from"../core/reactiveUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import p from"../geometry/Extent.js";import{B as a}from"./BitmapContainer.js";import{L as j}from"./LayerView2D.js";import{E as n}from"./ExportStrategy.js";import l from"../views/layers/LayerView.js";import{R as c}from"./RefreshableLayerView.js";import{W as h}from"./WMSLayerView.js";import"../config.js";import"./object.js";import"../core/lang.js";import"./string.js";import"../core/Error.js";import"./handleUtils.js";import"./watch.js";import"./ArrayPool.js";import"../core/scheduling.js";import"./nextTick.js";import"./get.js";import"./utils.js";import"./tracking.js";import"./metadata.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./WGLContainer.js";import"./mat3f32.js";import"./definitions.js";import"./FramebufferObject.js";import"./enums3.js";import"./Texture.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"./context-util.js";import"./VertexElementDescriptor.js";import"./WGLBrushVTLSymbol.js";import"./vec4f32.js";import"./enums4.js";import"./number2.js";import"./StyleDefinition.js";import"./enums.js";import"./vec2f32.js";import"./config.js";import"./GeometryUtils2.js";import"./color.js";import"./ShaderCompiler.js";import"./ProgramTemplate.js";import"./Program.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./utils19.js";import"./screenUtils.js";import"./heatmapUtils.js";import"./vec4f64.js";import"../Color.js";import"./colorUtils.js";import"./heatmapTextureUtils.js";import"./DefaultVertexAttributeLayouts.js";import"./Container.js";import"./EffectView.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./DisplayObject.js";import"../core/Evented.js";import"./earcut.js";import"./vec2.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./collectionUtils.js";import"./HighlightOptions.js";import"./ClipRect.js";import"../geometry.js";import"./typeUtils.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"./TileKey.js";import"./Bitmap.js";import"./mat3.js";import"./TileInfoView.js";import"./TileKey2.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/Identifiable.js";import"../core/Promise.js";import"./commonProperties2.js";import"../TimeExtent.js";import"./timeUtils.js";import"./persistableUrlUtils.js";import"../core/urlUtils.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./opacityUtils.js";import"./ExportWMSImageParameters.js";let u=class extends(h(c(j(l)))){constructor(){super(...arguments),this.bitmapContainer=new a}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch((t=>{i(t)||r.getLogger(this.declaredClass).error(t)}))}attach(){const{layer:t}=this,{imageMaxHeight:r,imageMaxWidth:e}=t;this.bitmapContainer=new a,this.container.addChild(this.bitmapContainer),this.strategy=new n({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(o((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=e(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:r,bitmapContainer:e}=this,{x:i,y:o}=t,{spatialReference:s}=r;let m,a=0,j=0;if(e.children.some((t=>{const{width:r,height:e,resolution:n,x:l,y:c}=t,h=l+n*r,u=c-n*e;return i>=l&&i<=h&&o<=c&&o>=u&&(m=new p({xmin:l,ymin:u,xmax:h,ymax:c,spatialReference:s}),a=r,j=e,!0)})),!m)return null;const n=m.width/a,l=Math.round((i-m.xmin)/n),c=Math.round((m.ymax-o)/n);return{extent:m,width:a,height:j,x:l,y:c}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,r,e,i){return this.layer.fetchImageBitmap(t,r,e,{timeExtent:this.timeExtent,...i})}};t([s()],u.prototype,"strategy",void 0),t([s()],u.prototype,"updating",void 0),u=t([m("esri.views.2d.layers.WMSLayerView2D")],u);const d=u;export{d as default};
