/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import e from"./Widget.js";import r from"./Locate/LocateViewModel.js";import{a as i}from"../chunks/accessibleHandler.js";import{m as p}from"../chunks/messageBundle.js";import{v as m}from"../chunks/vmEvent.js";import{t as n}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/actions.js";import"./support/GeolocationPositioning.js";import"../Graphic.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/geolocationUtils.js";import"../chunks/trimExtend.js";import"../rest/support/GeneralizeParameters.js";import"../rest/support/LengthsParameters.js";import"../rest/support/OffsetParameters.js";import"../chunks/project.js";import"../chunks/utils4.js";import"../chunks/utils5.js";import"../rest/support/ProjectParameters.js";import"../rest/support/RelationParameters.js";import"../rest/support/TrimExtendParameters.js";import"./support/GoTo.js";let l=class extends e{constructor(o,t){super(o,t),this.iconClass="esri-icon-north-navigation",this.messages=null,this.messagesCommon=null,this.viewModel=new r}get geolocationOptions(){return this.viewModel.geolocationOptions}set geolocationOptions(o){this.viewModel.geolocationOptions=o}get goToLocationEnabled(){return this.viewModel.goToLocationEnabled}set goToLocationEnabled(o){this.viewModel.goToLocationEnabled=o}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(o){this.viewModel.goToOverride=o}get graphic(){return this.viewModel.graphic}set graphic(o){this.viewModel.graphic=o}get label(){return this.messages?.widgetLabel??""}set label(o){this._overrideIfSome("label",o)}get popupEnabled(){return this.viewModel.popupEnabled}set popupEnabled(o){this.viewModel.popupEnabled=o}get scale(){return this.viewModel.scale}set scale(o){this.viewModel.scale=o}get useHeadingEnabled(){return this.viewModel.useHeadingEnabled}set useHeadingEnabled(o){this.viewModel.useHeadingEnabled=o}get view(){return this.viewModel.view}set view(o){this.viewModel.view=o}cancelLocate(){this.viewModel.cancelLocate()}locate(){return this.viewModel.locate()}render(){const o=this.get("viewModel.state"),t="locating"===o,s={"esri-disabled":"disabled"===o,"esri-hidden":"feature-unsupported"===o},e={"esri-icon-loading-indicator":t,"esri-rotating":t,"esri-icon-locate":!t},r="locating"===o?this.messagesCommon.cancel:this.messages.title;return n("div",{bind:this,class:this.classes("esri-locate esri-widget--button esri-widget",s),hidden:"feature-unsupported"===o,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":r,title:r},n("span",{"aria-hidden":"true",class:this.classes("esri-icon",e)}),n("span",{class:"esri-icon-font-fallback-text"},this.messages.title))}_locate(){const{viewModel:o}=this;"locating"===o.state?o.cancelLocate():o.locate()}};o([t()],l.prototype,"geolocationOptions",null),o([t()],l.prototype,"goToLocationEnabled",null),o([t()],l.prototype,"goToOverride",null),o([t()],l.prototype,"graphic",null),o([t()],l.prototype,"iconClass",void 0),o([t()],l.prototype,"label",null),o([t(),p("esri/widgets/Locate/t9n/Locate")],l.prototype,"messages",void 0),o([t(),p("esri/t9n/common")],l.prototype,"messagesCommon",void 0),o([t()],l.prototype,"popupEnabled",null),o([t()],l.prototype,"scale",null),o([t()],l.prototype,"useHeadingEnabled",null),o([t()],l.prototype,"view",null),o([t({type:r}),m(["locate","locate-error"])],l.prototype,"viewModel",void 0),o([i()],l.prototype,"_locate",null),l=o([s("esri.widgets.Locate")],l);const a=l;export{a as default};
