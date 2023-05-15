/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r from"../core/Error.js";import"./Logger.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import i from"../geometry/Extent.js";import{D as e}from"./DynamicLayerView3D.js";import{W as o}from"./WMSLayerView.js";import"../core/lang.js";import"./maybe.js";import"./object.js";import"../config.js";import"./string.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./asyncUtils.js";import"../core/reactiveUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"./RenderGeometry.js";import"../core/Evented.js";import"./mat4.js";import"./ViewingMode.js";import"./glUtil3D.js";import"./mat3.js";import"./mat3f64.js";import"./mat4f64.js";import"./lengthUtils.js";import"./interfaces2.js";import"./Material.js";import"./VertexAttribute.js";import"./aaBoundingBox.js";import"./Util2.js";import"./vec2f64.js";import"./vec4f64.js";import"./ShaderBuilder.js";import"./enums3.js";import"./VertexElementDescriptor.js";import"./FramebufferObject.js";import"./Texture.js";import"./context-util.js";import"./interfaces4.js";import"./basicInterfaces.js";import"./vec2f32.js";import"./ShaderOutput.js";import"./TextureOnly.glsl.js";import"./ScreenSpacePass.glsl.js";import"./Float4PassUniform.js";import"./Texture2DPassUniform.js";import"./NestedMap.js";import"./ShaderTechniqueConfiguration.js";import"./Camera.js";import"./screenUtils.js";import"./vec2.js";import"./frustum.js";import"./ray.js";import"./byteSizeEstimations.js";import"./quatf64.js";import"./plane.js";import"./vector.js";import"./mathUtils2.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./Attribute.js";import"./DefaultBufferWriter.js";import"./Indices.js";import"./triangle.js";import"./lineSegment.js";import"./doublePrecisionUtils.js";import"./BufferView.js";import"./TriangleMaterial.js";import"./sphere.js";import"./Octree.js";import"./InterleavedLayout.js";import"./types.js";import"./RenderSlot.js";import"./MarkerSizing.glsl.js";import"./VisualVariables.glsl.js";import"./Float3PassUniform.js";import"./Matrix3PassUniform.js";import"./FloatPassUniform.js";import"./sdfPrimitives.js";import"./floatRGBA.js";import"./Texture2.js";import"./compilerUtils.js";import"./requestImageUtils.js";import"./TransparencyPassType.js";import"./DefaultTechniqueConfiguration.js";import"./RibbonLine.glsl.js";import"./ForwardLinearDepth.glsl.js";import"./vec3f32.js";import"./View.glsl.js";import"./mat4f32.js";import"./Matrix4PassUniform.js";import"./RgbaFloatEncoding.glsl.js";import"./Slice.glsl.js";import"./ObjectAndLayerIdColor.glsl.js";import"./OutputDepth.glsl.js";import"./LineStipple.glsl.js";import"./MultipassTerrainTest.glsl.js";import"./ReadLinearDepth.glsl.js";import"./PiUtils.glsl.js";import"./AlphaCutoff.js";import"./ColorConversion.glsl.js";import"./Program2.js";import"./OrderIndependentTransparency.js";import"./renderState.js";import"./WaterSurface.glsl.js";import"./Transform.glsl.js";import"./OutputHighlight.glsl.js";import"./BooleanPassUniform.js";import"./Texture2DDrawUniform.js";import"./NormalUtils.glsl.js";import"./MultipassGeometryTest.glsl.js";import"./SSAOHelper.js";import"./SSAOBlur.glsl.js";import"./SSAO.glsl.js";import"./CameraSpace.glsl.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./quat.js";import"./glUtil.js";import"./AppleAmdDriverHelper.js";import"./VertexNormal.glsl.js";import"./MemCache.js";import"./Scheduler.js";import"./ObservableValue.js";import"./debugFlags.js";import"./LayerView3D.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./DoubleArray.js";import"./GeometryUtil.js";import"./projectExtentUtils.js";import"./geometryServiceUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./project.js";import"../geometry/support/jsonUtils.js";import"./utils4.js";import"./utils5.js";import"../rest/support/ProjectParameters.js";import"./ImageMaterial.js";import"./GLTextureMaterial.js";import"./ImageMaterial.glsl.js";import"../views/layers/LayerView.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/Identifiable.js";import"./RefreshableLayerView.js";import"./layerViewUtils.js";import"./commonProperties2.js";import"../TimeExtent.js";import"./timeUtils.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../geometry.js";import"./typeUtils.js";import"./unitConversionUtils.js";import"./opacityUtils.js";import"./ExportWMSImageParameters.js";let p=class extends(o(e)){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new r("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add((()=>this.exportImageParameters?.version),(()=>{this.updatingHandles.addPromise(this.refreshDebounced())}))}createFetchPopupFeaturesQuery(t){const r=this.findExtentInfoAt(t),s=r.extent,e=new i(s[0],s[1],s[2],s[3],this._spatialReference),o=r.imageSize,p=o.width,m=o.height,a=e.width/p;return{extent:e,width:p,height:m,x:Math.round((t.x-e.xmin)/a),y:Math.round((e.ymax-t.y)/a)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};p=t([s("esri.views.3d.layers.WMSLayerView3D")],p);const m=p;export{m as default};
