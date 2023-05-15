/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import{SmartMappingSliderBase as r}from"./SmartMappingSliderBase.js";import i from"./ColorSlider/ColorSliderViewModel.js";import"../../chunks/widgetUtils.js";import{m as e}from"../../chunks/messageBundle.js";import{t as p}from"../../chunks/jsxFactory.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../core/reactiveUtils.js";import"../../core/promiseUtils.js";import"../../chunks/watch.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/accessorSupport/decorators/cast.js";import"../Histogram.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../core/Evented.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/dom.js";import"../../chunks/index.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../Slider/SliderViewModel.js";import"./support/utils.js";import"../../chunks/utils16.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../core/JSONSupport.js";import"../../chunks/writer.js";import"../../chunks/utils6.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"./SmartMappingPrimaryHandleSliderViewModel.js";import"./SmartMappingSliderViewModel.js";var m;const l="esri-color-slider",n={base:l,rampElement:`${l}__ramp`,sliderContainer:`${l}__slider-container`,histogramContainer:`${l}__histogram-container`,primaryHandle:`${l}--primary-handle`,track:`${l}--interactive-track`,esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};let a=m=class extends r{constructor(s,o){super(s,o),this.messages=null,this.viewModel=new i,this._bgFillId=`${this.id}-bg-fill`,this._rampFillId=`${this.id}-linear-gradient`}get handlesSyncedToPrimary(){return this.viewModel.handlesSyncedToPrimary}set handlesSyncedToPrimary(s){this.viewModel.handlesSyncedToPrimary=s}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get primaryHandleEnabled(){return this.viewModel.primaryHandleEnabled}set primaryHandleEnabled(s){this.viewModel.primaryHandleEnabled=s}get stops(){return this.viewModel.stops}set stops(s){this.viewModel.stops=s}static fromRendererResult(s,o){const{visualVariable:{stops:t},statistics:r}=s,{avg:i,stddev:e}=r,p=s.renderer.authoringInfo.visualVariables.find((s=>"color"===s.type)),l=p.minSliderValue,n=p.maxSliderValue;return new m({max:n,min:l,stops:t,histogramConfig:{average:i,standardDeviation:e,bins:o?o.bins:[]},primaryHandleEnabled:"high-to-low"!==p.theme})}updateFromRendererResult(s,o){const{visualVariable:{stops:t},statistics:r}=s,{avg:i,stddev:e}=r,p=s.renderer.authoringInfo.visualVariables.find((s=>"color"===s.type)),m=p.minSliderValue,l=p.maxSliderValue;this.set({max:l,min:m,stops:t,histogramConfig:{average:i,standardDeviation:e,bins:o?o.bins:[]},primaryHandleEnabled:"high-to-low"!==p.theme})}render(){const{label:s,primaryHandleEnabled:o,state:t,visibleElements:r}=this,i="disabled"===t,e=this.classes(n.base,n.esriWidget,n.esriWidgetPanel,{[n.disabled]:i,[n.primaryHandle]:o,[n.track]:!!r.interactiveTrack});return p("div",{"aria-label":s,class:e},i?null:this.renderContent(this.renderRamp(),n.sliderContainer,n.histogramContainer))}renderRamp(){const{_bgFillId:s,_rampFillId:o,viewModel:t,zoomOptions:r}=this,i=t.getStopInfo();return p("div",{class:n.rampElement},p("svg",{xmlns:"http://www.w3.org/2000/svg"},p("defs",null,this.renderRampFillDefinition(o,i),this.renderBackgroundFillDefinition(s)),p("rect",{x:"0",y:"0",fill:`url(#${s})`,height:"100%",width:"100%"}),p("rect",{x:"0",y:"0",fill:`url(#${o})`,height:"100%",width:"100%"})),r?this.renderZoomCaps():null)}};s([o()],a.prototype,"handlesSyncedToPrimary",null),s([o()],a.prototype,"label",null),s([o(),e("esri/widgets/smartMapping/ColorSlider/t9n/ColorSlider")],a.prototype,"messages",void 0),s([o()],a.prototype,"primaryHandleEnabled",null),s([o()],a.prototype,"stops",null),s([o()],a.prototype,"viewModel",void 0),a=m=s([t("esri.widgets.smartMapping.ColorSlider")],a);const c=a;export{c as default};
