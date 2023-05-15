/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"./typedArrayUtil.js";import"../core/Error.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{D as r}from"./DynamicLayerView3D.js";import{M as s}from"./MapImageLayerView.js";import{M as i}from"./MapServiceLayerViewHelper.js";import{a as e}from"./drapedUtils.js";import"../config.js";import"./object.js";import"../core/lang.js";import"./maybe.js";import"./string.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./asyncUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"../core/reactiveUtils.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"./RenderGeometry.js";import"../core/Evented.js";import"./mat4.js";import"./ViewingMode.js";import"./glUtil3D.js";import"./mat3.js";import"./mat3f64.js";import"./mat4f64.js";import"./lengthUtils.js";import"./interfaces2.js";import"./Material.js";import"./VertexAttribute.js";import"./aaBoundingBox.js";import"./Util2.js";import"./vec2f64.js";import"./vec4f64.js";import"./ShaderBuilder.js";import"./enums3.js";import"./VertexElementDescriptor.js";import"./FramebufferObject.js";import"./Texture.js";import"./context-util.js";import"./interfaces4.js";import"./basicInterfaces.js";import"./vec2f32.js";import"./ShaderOutput.js";import"./TextureOnly.glsl.js";import"./ScreenSpacePass.glsl.js";import"./Float4PassUniform.js";import"./Texture2DPassUniform.js";import"./NestedMap.js";import"./ShaderTechniqueConfiguration.js";import"./Camera.js";import"./screenUtils.js";import"./vec2.js";import"./frustum.js";import"./ray.js";import"./byteSizeEstimations.js";import"./quatf64.js";import"./plane.js";import"./vector.js";import"./mathUtils2.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./Attribute.js";import"./DefaultBufferWriter.js";import"./Indices.js";import"./triangle.js";import"./lineSegment.js";import"./doublePrecisionUtils.js";import"./BufferView.js";import"./TriangleMaterial.js";import"./sphere.js";import"./Octree.js";import"./InterleavedLayout.js";import"./types.js";import"./RenderSlot.js";import"./MarkerSizing.glsl.js";import"./VisualVariables.glsl.js";import"./Float3PassUniform.js";import"./Matrix3PassUniform.js";import"./FloatPassUniform.js";import"./sdfPrimitives.js";import"./floatRGBA.js";import"./Texture2.js";import"./compilerUtils.js";import"./requestImageUtils.js";import"./TransparencyPassType.js";import"./DefaultTechniqueConfiguration.js";import"./RibbonLine.glsl.js";import"./ForwardLinearDepth.glsl.js";import"./vec3f32.js";import"./View.glsl.js";import"./mat4f32.js";import"./Matrix4PassUniform.js";import"./RgbaFloatEncoding.glsl.js";import"./Slice.glsl.js";import"./ObjectAndLayerIdColor.glsl.js";import"./OutputDepth.glsl.js";import"./LineStipple.glsl.js";import"./MultipassTerrainTest.glsl.js";import"./ReadLinearDepth.glsl.js";import"./PiUtils.glsl.js";import"./AlphaCutoff.js";import"./ColorConversion.glsl.js";import"./Program2.js";import"./OrderIndependentTransparency.js";import"./renderState.js";import"./WaterSurface.glsl.js";import"./Transform.glsl.js";import"./OutputHighlight.glsl.js";import"./BooleanPassUniform.js";import"./Texture2DDrawUniform.js";import"./NormalUtils.glsl.js";import"./MultipassGeometryTest.glsl.js";import"./SSAOHelper.js";import"./SSAOBlur.glsl.js";import"./SSAO.glsl.js";import"./CameraSpace.glsl.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./quat.js";import"./glUtil.js";import"./AppleAmdDriverHelper.js";import"./VertexNormal.glsl.js";import"./MemCache.js";import"./Scheduler.js";import"./ObservableValue.js";import"./debugFlags.js";import"./LayerView3D.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./DoubleArray.js";import"./GeometryUtil.js";import"./projectExtentUtils.js";import"./geometryServiceUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./project.js";import"../geometry/support/jsonUtils.js";import"./utils4.js";import"./utils5.js";import"../rest/support/ProjectParameters.js";import"./ImageMaterial.js";import"./GLTextureMaterial.js";import"./ImageMaterial.glsl.js";import"../views/layers/LayerView.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/Identifiable.js";import"./RefreshableLayerView.js";import"./layerViewUtils.js";import"./commonProperties2.js";import"../TimeExtent.js";import"./timeUtils.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../geometry.js";import"./typeUtils.js";import"./unitConversionUtils.js";import"./opacityUtils.js";import"./ExportImageParameters.js";import"../core/sql.js";import"./floorFilterUtils.js";import"./sublayerUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"./shared.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./scaleUtils.js";import"../rest/identify.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../rest/support/IdentifyParameters.js";import"../rest/support/IdentifyResult.js";import"./popupUtils.js";let p=class extends(s(r)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add((()=>this.exportImageVersion),(()=>this.updatingHandles.addPromise(this.refreshDebounced()))),this._popupHighlightHelper=new i({createFetchPopupFeaturesQueryGeometry:(t,o)=>e(t,o,this.view),layerView:this,updatingHandles:this.updatingHandles})}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeatures(t,o){return this._popupHighlightHelper.fetchPopupFeatures(t,o)}getFetchOptions(){return{timeExtent:this.timeExtent}}};p=t([o("esri.views.3d.layers.MapImageLayerView3D")],p);const m=p;export{m as default};