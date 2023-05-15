/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../Color.js";import{a as s,i}from"../../chunks/maybe.js";import{watch as e}from"../../core/reactiveUtils.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{cast as n}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/typedArrayUtil.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import p from"../Histogram.js";import a from"../Slider.js";import l from"../Widget.js";import{getDeviationValues as c}from"./support/utils.js";import"../../chunks/widgetUtils.js";import{t as u}from"../../chunks/jsxFactory.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/string.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/handleUtils.js";import"../../chunks/watch.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/metadata.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../Histogram/HistogramViewModel.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/messageBundle.js";import"../../chunks/domUtils.js";import"../../core/Evented.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/dom.js";import"../../chunks/index.js";import"../../chunks/jsxWidgetSupport.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../Slider/SliderViewModel.js";import"../../chunks/utils16.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../core/JSONSupport.js";import"../../chunks/writer.js";import"../../chunks/utils6.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";const h="zoom-cap",d={zoomCap:h,maxZoomCap:`${h}--max`,minZoomCap:`${h}--min`,zoomCapLine:`${h}--line`,zoomCapMask:`${h}--mask`,zoomCapUnderline:`${h}--underline`},j={interactiveTrack:!1};let g=class extends l{constructor(t,o){super(t,o),this.histogram=new p({layout:"vertical"}),this.histogramConfig=null,this.slider=new a({syncedSegmentsEnabled:!0,thumbsConstrained:!1,layout:"vertical",visibleElements:{labels:!0,rangeLabels:!0},labelInputsEnabled:!0,rangeLabelInputsEnabled:!0}),this.viewModel=null,this.visibleElements={...j};const s=this.slider;!t?.hasTimeData||t?.inputParseFunction||t?.inputFormatFunction||s.set({labelInputsEnabled:!1,rangeLabelInputsEnabled:!1}),s.draggableSegmentsEnabled=!!t?.visibleElements?.interactiveTrack,this.addHandles([s.on("max-change",(t=>this.emit("max-change",t))),s.on("max-click",(t=>this.emit("max-click",t))),s.on("min-change",(t=>this.emit("min-change",t))),s.on("min-click",(t=>this.emit("min-click",t))),s.on("segment-click",(t=>this.emit("segment-click",t))),s.on("segment-drag",(t=>this.emit("segment-drag",t))),s.on("thumb-change",(t=>this.emit("thumb-change",t))),s.on("thumb-click",(t=>this.emit("thumb-click",t))),s.on("thumb-drag",(t=>this.emit("thumb-drag",t))),s.on("track-click",(t=>this.emit("track-click",t))),e((()=>[this.histogramConfig,this.max,this.min,this.zoomOptions]),(()=>{const{histogram:t,histogramConfig:o,viewModel:{max:s,min:i}}=this,e=this.getParamsFromHistogramConfig(o);t.set({...e,max:s,min:i})})),e((()=>this.labelFormatFunction),(()=>{const{histogram:t,labelFormatFunction:o}=this;t.set({labelFormatFunction:o})})),e((()=>this.hasTimeData),(t=>{const{labelInputsEnabled:o,rangeLabelInputsEnabled:i}=this.slider,e=!t||this.inputFormatFunction&&this.inputParseFunction;s.set({labelInputsEnabled:o&&e,rangeLabelInputsEnabled:i&&e})})),e((()=>this.visibleElements?.interactiveTrack),(t=>{s.draggableSegmentsEnabled=!!t}))]),this._onMaxZoomCapPointerDown=this._onMaxZoomCapPointerDown.bind(this),this._onMinZoomCapPointerDown=this._onMinZoomCapPointerDown.bind(this)}initialize(){const{histogramConfig:t={},viewModel:o}=this,{labelFormatFunction:s,max:i,min:e}=o,r=this.getParamsFromHistogramConfig(t);this.histogram.set({labelFormatFunction:s,...r,max:i,min:e}),this.slider.set({viewModel:o})}get hasTimeData(){return this.viewModel?.hasTimeData??!1}set hasTimeData(t){this.viewModel&&(this.viewModel.hasTimeData=t)}get inputFormatFunction(){return this.viewModel?.inputFormatFunction}set inputFormatFunction(t){this.viewModel&&(this.viewModel.inputFormatFunction=t)}get inputParseFunction(){return this.viewModel?.inputParseFunction}set inputParseFunction(t){this.viewModel&&(this.viewModel.inputParseFunction=t)}get labelFormatFunction(){return this.viewModel?.labelFormatFunction}set labelFormatFunction(t){this.viewModel&&(this.viewModel.labelFormatFunction=t)}get max(){return this.viewModel?.getUnzoomedMax()??this._get("max")??null}set max(t){this.viewModel?this.viewModel.max=t:this._set("max",t)}get min(){return this.viewModel?.getUnzoomedMin()??this._get("min")??null}set min(t){this.viewModel?this.viewModel.min=t:this._set("min",t)}get precision(){return this.viewModel?.precision??4}set precision(t){this.viewModel&&(this.viewModel.precision=t)}get state(){return this.viewModel?.state??"disabled"}get syncedSegmentsEnabled(){return this.slider?.syncedSegmentsEnabled}set syncedSegmentsEnabled(t){this.slider&&(this.slider.syncedSegmentsEnabled=t)}get values(){return this.viewModel?.values??[]}castVisibleElements(t){return{...j,...t}}get zoomOptions(){return this.viewModel?.zoomOptions}set zoomOptions(t){this.viewModel&&(this.viewModel.zoomOptions=t)}renderContent(t,o,s){return this.slider.extraNodes=[t,this.renderHistogram(s)],u("div",{class:o},this.slider.render())}renderHistogram(t){return this.histogramConfig?u("div",{key:"histogram",class:t??void 0},this.histogram.render()):null}renderBackgroundFillDefinition(t){return u("pattern",{id:t,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"15",height:"15"},u("image",{x:"0",y:"0",width:"15",height:"15",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"}))}renderRampFillDefinition(t,o){return u("linearGradient",{id:t,x1:"0",x2:"0",y1:"0",y2:"1"},this.renderRampFillStops(o))}renderRampFillStops(t){return t.reverse().map(((t,o)=>this.renderStop(t,o)))}renderStop(t,o){const{color:s,offset:i,opacity:e}=this.getPropsForStop(t);return u("stop",{key:`${o}-stop`,offset:i,"stop-color":s,"stop-opacity":e})}renderZoomCaps(){return[this.renderMaxZoomCap(),this.renderMinZoomCap()]}renderMinZoomCap(){if(this.zoomOptions&&!s(this.zoomOptions.min))return u("svg",{key:"bottom",class:this.classes(d.zoomCap,d.minZoomCap),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMinZoomCapPointerDown},u("polygon",{class:d.zoomCapMask,key:"mask",fill:"#1B8617",points:"0 11.3846154 30 11.3846154 30 1 25 5.38461538 20 1 15 5.38461538 10 1 5 5.38461538 0 1"}),u("polygon",{class:d.zoomCapUnderline,key:"underline",fill:"#69DCFF",points:"0 0 5 4.38461538 10 0 15 4.38461538 20 0 25 4.38461538 30 0 30 4.61538462 25 9 20 4.61538462 15 9 10 4.61538462 5 9 0 4.61538462"}),u("polygon",{class:d.zoomCapLine,key:"line",fill:"#DA5656",points:"0 1 5 5.38461538 10 1 15 5.38461538 20 1 25 5.38461538 30 1 30 5.61538462 25 10 20 5.61538462 15 10 10 5.61538462 5 10 0 5.61538462"}))}renderMaxZoomCap(){if(this.zoomOptions&&!s(this.zoomOptions.max))return u("svg",{key:"top",class:this.classes(d.zoomCap,d.maxZoomCap),viewBox:"0 0 30 11",xmlns:"http://www.w3.org/2000/svg",onpointerdown:this._onMaxZoomCapPointerDown},u("polygon",{class:d.zoomCapMask,key:"mask",points:"0 -1.81994377e-12 30 -1.81994377e-12 30 8.23076923 25 3.61538462 20 8.23076923 15 3.61538462 10 8.23076923 5 3.61538462 0 8.23076923"}),u("polygon",{class:d.zoomCapUnderline,key:"underline",points:"0 5.61538462 5 1 10 5.61538462 15 1 20 5.61538462 25 1 30 5.61538462 30 10.2307692 25 5.61538462 20 10.2307692 15 5.61538462 10 10.2307692 5 5.61538462 0 10.2307692"}),u("polygon",{class:d.zoomCapLine,key:"line",points:"0 4.61538462 5 -1.87329639e-12 10 4.61538462 15 -1.87329639e-12 20 4.61538462 25 -1.87329639e-12 30 4.61538462 30 9.23076923 25 4.61538462 20 9.23076923 15 4.61538462 10 9.23076923 5 4.61538462 0 9.23076923"}))}getPropsForStop(t){const{color:s,offset:i}=t;return{color:s instanceof o?s.toCss(!0):o.fromString(s).toCss(!0),offset:(100*i).toFixed(2)+"%",opacity:s instanceof o?s.toRgba()[3]:null}}getParamsFromHistogramConfig(t){if(!t)return null;const{average:o,barCreatedFunction:s,bins:i,dataLineCreatedFunction:e,dataLineUpdatedFunction:r}=t;return{average:o,barCreatedFunction:s,bins:i,dataLineCreatedFunction:e,dataLineUpdatedFunction:r,dataLines:this._getDataLines(t)}}_onMaxZoomCapPointerDown(){const{zoomOptions:t}=this;if(t&&i(t.max)){const{min:o}=t;this.zoomOptions=i(o)?{min:o}:null}}_onMinZoomCapPointerDown(){const{zoomOptions:t}=this;if(t&&i(t.min)){const{max:o}=t;this.zoomOptions=i(o)?{max:o}:null}}_getDataLines(t){const{average:o,standardDeviation:s,standardDeviationCount:i}=t,{max:e,min:r}=this.viewModel.getBounds();return[...this._getStandardDeviationDataLines(s,o,i||1),...t.dataLines||[]].filter((({value:t})=>t<=e&&t>=r))}_getStandardDeviationDataLines(t,o,s){const{max:i,min:e}=this.viewModel,r=.06*(i-e);return c(t,o,s).filter((t=>Math.abs(o-t)>r)).map(((t,s,i)=>{const e=this.labelFormatFunction?this.labelFormatFunction(t):t,r=i.length/2,n=s>=r?s-r+1:r-s;return{value:t,label:`${t>o?"+":"-"}${1===n?"":n}σ ${e}`}}))}};t([r()],g.prototype,"hasTimeData",null),t([r()],g.prototype,"histogram",void 0),t([r()],g.prototype,"histogramConfig",void 0),t([r()],g.prototype,"inputFormatFunction",null),t([r()],g.prototype,"inputParseFunction",null),t([r()],g.prototype,"labelFormatFunction",null),t([r()],g.prototype,"max",null),t([r()],g.prototype,"min",null),t([r()],g.prototype,"precision",null),t([r()],g.prototype,"slider",void 0),t([r({readOnly:!0})],g.prototype,"state",null),t([r()],g.prototype,"syncedSegmentsEnabled",null),t([r({readOnly:!0})],g.prototype,"values",null),t([r()],g.prototype,"viewModel",void 0),t([r()],g.prototype,"visibleElements",void 0),t([n("visibleElements")],g.prototype,"castVisibleElements",null),t([r()],g.prototype,"zoomOptions",null),g=t([m("esri.widgets.smartMapping.SmartMappingSliderBase")],g);export{g as SmartMappingSliderBase};
