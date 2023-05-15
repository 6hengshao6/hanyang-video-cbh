/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r from"../core/Error.js";import{i as e,u as s,a as i}from"./maybe.js";import{whenOnce as o}from"../core/reactiveUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{L as l}from"./LayerView3D.js";import{T as a}from"./TiledLayerView3D.js";import{R as n}from"../views/SceneView.js";import{I as j}from"./ImageryTileLayerView.js";import u from"../views/layers/LayerView.js";import{R as y}from"./RefreshableLayerView.js";import{a as d}from"./drapedUtils.js";import{g as c}from"./capabilities2.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"../core/promiseUtils.js";import"./handleUtils.js";import"./watch.js";import"./ArrayPool.js";import"../core/scheduling.js";import"./nextTick.js";import"./get.js";import"./utils.js";import"./tracking.js";import"./metadata.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./jsonMap.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./unitUtils.js";import"./Ellipsoid.js";import"./reader.js";import"./writer.js";import"./arcgisLayerUrl.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"./terrainUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./layerUtils.js";import"../kernel.js";import"../request.js";import"./ViewingMode.js";import"./Util2.js";import"./vec2f64.js";import"./vec4.js";import"./common.js";import"./vec4f64.js";import"./Scheduler.js";import"./ObservableValue.js";import"./debugFlags.js";import"./interfaces4.js";import"./vec3.js";import"../geometry/projection.js";import"./mathUtils.js";import"./mat4.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./TerrainConst.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"../Camera.js";import"../core/Clonable.js";import"./Cyclical.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../Viewpoint.js";import"./domUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"./messages.js";import"./GraphicsCollection.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"./boundedPlane.js";import"./ray.js";import"./byteSizeEstimations.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vector.js";import"./lineSegment.js";import"./plane.js";import"./mathUtils2.js";import"./RenderCoordsHelper.js";import"./spatialReferenceEllipsoidUtils.js";import"./sphere.js";import"./ElevationProvider.js";import"./spatialReferenceSupport.js";import"./scaleUtils.js";import"../widgets/Popup/PopupViewModel.js";import"../layers/Layer.js";import"../symbols/support/symbolUtils.js";import"./utils6.js";import"./asyncUtils.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./ItemCache.js";import"./MemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"./previewUtils.js";import"./renderUtils.js";import"./colorUtils2.js";import"./projector.js";import"./widgetUtils.js";import"./mat2df32.js";import"./mat2d.js";import"./jsxFactory.js";import"./jsxWidgetSupport.js";import"./previewSymbol3D.js";import"./webStyleSymbolUtils.js";import"./devEnvironmentUtils.js";import"../symbols/support/jsonUtils.js";import"./styleUtils.js";import"./InputManager.js";import"./PropertiesPool.js";import"./layerViewUtils.js";import"../widgets/Feature/FeatureViewModel.js";import"./throttle.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./executeQueryJSON.js";import"./utils4.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils5.js";import"./urlUtils2.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"../rest/support/FeatureSet.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"./featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"./editsZScale.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"../layers/mixins/BlendLayer.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureLayerBase.js";import"./commonProperties2.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./TimeReference.js";import"./datetime.js";import"./featureLayerUtils.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./serviceCapabilitiesUtils.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"./OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./portalItemUtils.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"./labelingInfo.js";import"./versionUtils.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"./actions.js";import"./AnchorElementViewModel.js";import"../widgets/support/GoTo.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./loadAll.js";import"./writeUtils.js";import"../Ground.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"./basemapUtils.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../support/TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./intersectionUtils.js";import"./viewpointUtils.js";import"./mat3.js";import"./frustum.js";import"./Intersector2.js";import"./verticalOffsetUtils.js";import"./quat.js";import"./vec3f32.js";import"./earthUtils.js";import"../views/ViewAnimation.js";import"./Camera.js";import"./vec2.js";import"./NestedMap.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces5.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"../widgets/Popup.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"./dom.js";import"./index.js";import"../widgets/Attachments.js";import"./unitFormatUtils.js";import"./messageBundle.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"./themeUtils.js";import"./uriUtils.js";import"./utils16.js";import"./numberUtils.js";import"./chartUtils.js";import"./Spinner.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"./WebGLRequirements.js";import"./context-util.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./BooleanPassUniform.js";import"./Float3PassUniform.js";import"./ShaderBuilder.js";import"./Float4PassUniform.js";import"./interfaces2.js";import"./RgbaFloatEncoding.glsl.js";import"./Texture2DPassUniform.js";import"./VertexAttribute.js";import"./View.glsl.js";import"./Matrix4PassUniform.js";import"./Texture2DDrawUniform.js";import"./basicInterfaces.js";import"./PiUtils.glsl.js";import"./ReadLinearDepth.glsl.js";import"./WaterSurface.glsl.js";import"./ForwardLinearDepth.glsl.js";import"./ShaderOutput.js";import"./Matrix3PassUniform.js";import"./Slice.glsl.js";import"./Transform.glsl.js";import"./OutputHighlight.glsl.js";import"./MultipassTerrainTest.glsl.js";import"./NormalUtils.glsl.js";import"./FloatPassUniform.js";import"./AlphaCutoff.js";import"./ColorConversion.glsl.js";import"./TransparencyPassType.js";import"./Program2.js";import"./enums3.js";import"./Texture.js";import"./Material.js";import"./renderState.js";import"./ShaderTechniqueConfiguration.js";import"./glUtil3D.js";import"./VertexElementDescriptor.js";import"./FramebufferObject.js";import"./ScreenSpacePass.glsl.js";import"./RenderGeometry.js";import"./vec2f32.js";import"./TextureOnly.glsl.js";import"./Attribute.js";import"./DefaultBufferWriter.js";import"./Indices.js";import"./triangle.js";import"./doublePrecisionUtils.js";import"./BufferView.js";import"./TriangleMaterial.js";import"./Octree.js";import"./InterleavedLayout.js";import"./types.js";import"./RenderSlot.js";import"./MarkerSizing.glsl.js";import"./VisualVariables.glsl.js";import"./sdfPrimitives.js";import"./floatRGBA.js";import"./Texture2.js";import"./requestImageUtils.js";import"./DefaultTechniqueConfiguration.js";import"./RibbonLine.glsl.js";import"./ObjectAndLayerIdColor.glsl.js";import"./OutputDepth.glsl.js";import"./LineStipple.glsl.js";import"./OrderIndependentTransparency.js";import"./MultipassGeometryTest.glsl.js";import"./SSAOHelper.js";import"./SSAOBlur.glsl.js";import"./SSAO.glsl.js";import"./CameraSpace.glsl.js";import"./Intersector.js";import"./glUtil.js";import"./AppleAmdDriverHelper.js";import"./VertexNormal.glsl.js";import"./GeometryUtil.js";import"./DoubleArray.js";import"./AlignPixel.glsl.js";import"./VerticalOffset.glsl.js";import"./axisAngleDegrees.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./ray2.js";import"./ZoomMomentumEstimator.js";import"./ElevationQuery2.js";import"./ElevationContext.js";import"./graphicUtils.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"./hydratedFeatures.js";import"./LineCallout.glsl.js";import"./edgeUtils.js";import"./earcut.js";import"./vec32.js";import"./SnappingCandidate.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./objectResourceUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./resourceUtils2.js";import"./mat3f32.js";import"./Normals.glsl.js";import"./GLTextureMaterial.js";import"./DefaultMaterial.glsl.js";import"./MixExternalColor.glsl.js";import"./symbolColorUtils.js";import"./DiscardOrAdjustAlphaBlend.glsl.js";import"./VertexColor.glsl.js";import"./EvaluateSceneLighting.glsl.js";import"./RealisticTree.glsl.js";import"./callExpressionWithFeature.js";import"./HUDMaterial.js";import"./HUDMaterial.glsl.js";import"./line.js";import"./line2.js";import"./LineMarkerMaterial.js";import"./LineMarker.glsl.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./NativeLine.glsl.js";import"./Intersector3.js";import"./Path.glsl.js";import"./ColorMaterial.js";import"./ColorMaterial.glsl.js";import"./Pattern.glsl.js";import"./labelFormatUtils.js";import"./FeatureTileDescriptor3D.js";import"./vec4f32.js";import"./geometryServiceUtils.js";import"./project.js";import"../rest/support/ProjectParameters.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./WorkerHandle.js";import"./VectorTile.js";import"./enums2.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey2.js";import"./ElevationSamplerData.js";import"./rasterUtils.js";import"../views/2d/ViewState.js";import"./mat2df64.js";import"./orientedBoundingBox.js";import"./quatf32.js";import"./edgeProcessing.js";import"./resources.js";import"./EdgeWorkerHandle.js";import"./workerHelper.js";import"./DisjointTimerQuery.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./Program.js";import"./DefaultVertexAttributeLayouts.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../widgets/Attribution.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";import"./rasterProjectionHelper.js";import"./popupUtils.js";let g=class extends(j(y(a(l(u))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),null==this.fullExtent&&this.addResolvingPromise(Promise.reject(new r("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const t=o((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const t=this.view.basemapTerrain.tilingScheme,r=this.layer.tileInfo,e=["png","png24","png32","jpg","mixed"].includes(r.format)&&t.compatibleWith(r);this.isAlignedMapTile=e;const s=e?r:t.toTileInfo();this.tileInfo=s,this.updatingHandles.add((()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent]),(()=>this.refresh()))}));this.addResolvingPromise(t)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const t=document.createElement("canvas"),r=t.getContext("2d"),[e,s]=this.tileInfo.size;return t.width=e,t.height=s,r.clearRect(0,0,e,s),r.getImageData(0,0,e,s)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){const t=this.tileInfo.lods,r=this.layer.tileInfo.lods,e=t[0].scale,s=r[r.length-1].scale;return this.levelRangeFromScaleRange(e,s)}_getfullExtent(){return this.projectFullExtent(this.view.basemapTerrain&&e(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(t,r,e,o){const p=this.tileInfo,m=this._canSymbolizeInWebGL(),l={tileInfo:p,requestRawData:m,signal:s(o.signal),timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},a=await this.layer.fetchTile(t,r,e,l);if(a instanceof HTMLImageElement)return a;let j=a&&a.pixelBlock;if(i(j))return this._blankTile;if(!m&&(j=await this.layer.applyRenderer(a),i(j)))return this._blankTile;const u=new n([t,r,e],j,p.size[0],p.size[1]);return m?(u.symbolizerRenderer=this.layer.symbolizer.rendererJSON,u.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(t)),u.transformGrid=a.transformGrid):u.isRendereredSource=!0,u.interpolation=this.layer.interpolation,u.bandIds=this.layer.bandIds,u}_getSymbolizerOptions(t){const r=this.tileInfo.lodAt(t).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain&&e(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:r,y:r},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(t){this._canSymbolizeInWebGL()&&JSON.stringify(t.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(t.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(t.lij[0])))}createFetchPopupFeaturesQueryGeometry(t,r){return d(t,r,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){return c("3d").supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};t([p({readOnly:!0})],g.prototype,"_blankTile",null),t([p({readOnly:!0})],g.prototype,"imageFormatIsOpaque",null),t([p({readOnly:!0})],g.prototype,"hasMixedImageFormats",null),t([p({readOnly:!0})],g.prototype,"dataLevelRange",null),g=t([m("esri.views.3d.layers.ImageryTileLayerView3D")],g);const b=g;export{b as default};
