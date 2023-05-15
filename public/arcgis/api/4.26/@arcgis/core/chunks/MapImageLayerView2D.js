/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{L as o}from"./Logger.js";import{isAbortError as i}from"../core/promiseUtils.js";import{watch as s}from"../core/reactiveUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{G as p}from"./GraphicsCollection.js";import{B as m}from"./BitmapContainer.js";import{L as a}from"./LayerView2D.js";import{G as l}from"./GraphicsView2D.js";import{H as j}from"./HighlightGraphicContainer.js";import{E as n}from"./ExportStrategy.js";import u from"../views/layers/LayerView.js";import{M as c}from"./MapImageLayerView.js";import{R as h}from"./RefreshableLayerView.js";import{M as y}from"./MapServiceLayerViewHelper.js";import{a as d}from"./drapedUtils.js";import"../config.js";import"./object.js";import"../core/lang.js";import"./maybe.js";import"./string.js";import"../core/Error.js";import"./handleUtils.js";import"./watch.js";import"./ArrayPool.js";import"../core/scheduling.js";import"./nextTick.js";import"./get.js";import"./utils.js";import"./tracking.js";import"./metadata.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"./WGLContainer.js";import"./mat3f32.js";import"./definitions.js";import"./FramebufferObject.js";import"./enums3.js";import"./Texture.js";import"./context-util.js";import"./VertexElementDescriptor.js";import"./WGLBrushVTLSymbol.js";import"./vec4f32.js";import"./enums4.js";import"./number2.js";import"./StyleDefinition.js";import"./enums.js";import"./vec2f32.js";import"./config.js";import"./GeometryUtils2.js";import"./color.js";import"./ShaderCompiler.js";import"./ProgramTemplate.js";import"./Program.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./utils19.js";import"./heatmapUtils.js";import"./vec4f64.js";import"./heatmapTextureUtils.js";import"./DefaultVertexAttributeLayouts.js";import"./Container.js";import"./EffectView.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./DisplayObject.js";import"./earcut.js";import"./vec2.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./HighlightOptions.js";import"./ClipRect.js";import"./shapingUtils.js";import"./BidiEngine.js";import"./mat2d.js";import"./mat2df32.js";import"./Rect.js";import"./normalizeUtilsSync.js";import"./normalizeUtilsCommon.js";import"./projectionSupport.js";import"../geometry/projection.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./json.js";import"./cimAnalyzer.js";import"./fontUtils.js";import"./GeometryUtils.js";import"./utils7.js";import"./callExpressionWithFeature.js";import"./quantizationUtils.js";import"./floatRGBA.js";import"./defaults.js";import"./defaultsJSON.js";import"./AttributeStoreView.js";import"./mat3.js";import"./TiledDisplayObject.js";import"./TileKey2.js";import"./visualVariablesUtils.js";import"./visualVariablesUtils2.js";import"./Matcher.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"./Queue.js";import"./TileInfoView.js";import"./tileUtils.js";import"./libtess.js";import"./TurboLine.js";import"./LRUCache.js";import"./MemCache.js";import"./ExpandedCIM.js";import"./devEnvironmentUtils.js";import"./styleUtils.js";import"./schemaUtils.js";import"../core/sql.js";import"./diffUtils.js";import"./labelingInfo.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./layerUtils.js";import"../symbols/support/jsonUtils.js";import"./createSymbolSchema.js";import"./rendererUtils.js";import"./capabilities2.js";import"./clusterUtils.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./lengthUtils.js";import"./util.js";import"./ComputedAttributeStorage.js";import"./FeatureSetReader.js";import"./ArcadeDate.js";import"./executionError.js";import"./datetime.js";import"./arcadeTimeUtils.js";import"../layers/support/FieldsIndex.js";import"./TimeReference.js";import"./centroid.js";import"./rbush.js";import"./quickselect.js";import"../geometry/support/normalizeUtils.js";import"./simplify.js";import"./utils4.js";import"./utils5.js";import"./GraphicsView.js";import"./BaseGraphicContainer.js";import"./FeatureContainer.js";import"./TileContainer.js";import"./vec3f32.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"./TileKey.js";import"./Bitmap.js";import"./commonProperties2.js";import"../TimeExtent.js";import"./timeUtils.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./ExportImageParameters.js";import"./floorFilterUtils.js";import"./sublayerUtils.js";import"./scaleUtils.js";import"../rest/identify.js";import"../rest/support/IdentifyParameters.js";import"../rest/support/IdentifyResult.js";import"./popupUtils.js";let g=class extends(c(h(a(u)))){constructor(){super(...arguments),this._highlightGraphics=new p,this._updateHash=""}fetchPopupFeatures(t,o){return this._popupHighlightHelper.fetchPopupFeatures(t,o)}update(t){const s=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==s&&(this._updateHash=s,this.strategy.update(t).catch((t=>{i(t)||o.getLogger(this.declaredClass).error(t)})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:o,version:i}=this.layer,r=i>=10.3,e=i>=10;this._bitmapContainer=new m,this.container.addChild(this._bitmapContainer),this._highlightView=new l({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new j(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new y({createFetchPopupFeaturesQueryGeometry:(t,o)=>d(t,o,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,o)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:o})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new n({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:o,imageRotationSupported:r,imageNormalizationSupported:e,hidpi:!0}),this.addAttachHandles(s((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,o,i,s){return this.layer.fetchImage(t,o,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(t,o,i,s){return this.layer.fetchImageBitmap(t,o,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(t){return this._popupHighlightHelper.highlight(t)}};t([r()],g.prototype,"strategy",void 0),t([r()],g.prototype,"updating",void 0),g=t([e("esri.views.2d.layers.MapImageLayerView2D")],g);const b=g;export{b as default};
