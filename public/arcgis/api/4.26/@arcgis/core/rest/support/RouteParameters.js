/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{ClonableMixin as o}from"../../core/Clonable.js";import r from"../../core/Collection.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{a as s,i}from"../../chunks/maybe.js";import{property as p}from"../../core/accessorSupport/decorators/property.js";import{m as n}from"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{e as m}from"../../chunks/enumeration.js";import{r as l}from"../../chunks/reader.js";import{subclass as u}from"../../core/accessorSupport/decorators/subclass.js";import{w as a}from"../../chunks/writer.js";import{a as y}from"../../chunks/commonProperties3.js";import c from"./DataLayer.js";import j from"./FeatureSet.js";import{i as d,r as h,a as b,j as S,k,d as v,l as w,o as g,m as f}from"../../chunks/networkEnums.js";import B from"./NetworkFeatureSet.js";import P from"./NetworkUrl.js";import T from"./TravelMode.js";import D from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../geometry/Geometry.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";var A;let U=A=class extends(o(e)){constructor(t){super(t),this.accumulateAttributes=null,this.apiKey=null,this.attributeParameterValues=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsOutputType=null,this.directionsStyleName=null,this.directionsTimeAttribute=null,this.findBestSequence=null,this.geometryPrecision=null,this.geometryPrecisionM=null,this.geometryPrecisionZ=null,this.ignoreInvalidLocations=null,this.impedanceAttribute=null,this.outputGeometryPrecision=null,this.outputGeometryPrecisionUnits=null,this.outputLines="true-shape",this.outSpatialReference=null,this.overrides=null,this.pointBarriers=null,this.polygonBarriers=null,this.polylineBarriers=null,this.preserveFirstStop=null,this.preserveLastStop=null,this.preserveObjectID=null,this.restrictionAttributes=null,this.restrictUTurns=null,this.returnBarriers=!1,this.returnDirections=!1,this.returnPolygonBarriers=!1,this.returnPolylineBarriers=!1,this.returnRoutes=!0,this.returnStops=!1,this.returnTraversedEdges=null,this.returnTraversedJunctions=null,this.returnTraversedTurns=null,this.returnZ=!0,this.startTime=null,this.startTimeIsUTC=!0,this.stops=null,this.timeWindowsAreUTC=null,this.travelMode=null,this.useHierarchy=null,this.useTimeWindows=null}static from(t){return n(A,t)}readAccumulateAttributes(t){return s(t)?null:t.map((t=>d.fromJSON(t)))}writeAccumulateAttributes(t,o,r){!s(t)&&t.length&&(o[r]=t.map((t=>d.toJSON(t))))}writePointBarriers(t,o,r){C(t,o,r)}writePolygonBarrier(t,o,r){C(t,o,r)}writePolylineBarrier(t,o,r){C(t,o,r)}readRestrictionAttributes(t){return s(t)?null:t.map((t=>h.fromJSON(t)))}writeRestrictionAttributes(t,o,r){!s(t)&&t.length&&(o[r]=t.map((t=>h.toJSON(t))))}readStartTime(t,o){const{startTime:r}=o;return s(r)?null:"now"===r?"now":new Date(r)}writeStartTime(t,o){s(t)||(o.startTime="now"===t?"now":t.getTime())}readStops(t,o){return function(t){return t&&"type"in t}(r=o.stops)?c.fromJSON(r):function(t){return t&&"url"in t}(r)?P.fromJSON(r):function(t){return t&&"features"in t&&"doNotLocateOnRestrictedElements"in t}(r)?B.fromJSON(r):function(t){return t&&"features"in t}(r)?j.fromJSON(r):null;var r}writeStops(t,o,r){C(t,o,r)}};t([p({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],U.prototype,"accumulateAttributes",void 0),t([l("accumulateAttributes")],U.prototype,"readAccumulateAttributes",null),t([a("accumulateAttributes")],U.prototype,"writeAccumulateAttributes",null),t([p(y)],U.prototype,"apiKey",void 0),t([p({json:{write:!0}})],U.prototype,"attributeParameterValues",void 0),t([p({type:String,json:{write:!0}})],U.prototype,"directionsLanguage",void 0),t([m(b)],U.prototype,"directionsLengthUnits",void 0),t([m(S)],U.prototype,"directionsOutputType",void 0),t([m(k)],U.prototype,"directionsStyleName",void 0),t([m(v,{name:"directionsTimeAttributeName",ignoreUnknown:!1})],U.prototype,"directionsTimeAttribute",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"findBestSequence",void 0),t([p({type:Number,json:{write:!0}})],U.prototype,"geometryPrecision",void 0),t([p({type:Number,json:{write:!0}})],U.prototype,"geometryPrecisionM",void 0),t([p({type:Number,json:{write:!0}})],U.prototype,"geometryPrecisionZ",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"ignoreInvalidLocations",void 0),t([m(d,{name:"impedanceAttributeName",ignoreUnknown:!1})],U.prototype,"impedanceAttribute",void 0),t([p({type:Number,json:{write:!0}})],U.prototype,"outputGeometryPrecision",void 0),t([m(w)],U.prototype,"outputGeometryPrecisionUnits",void 0),t([m(g)],U.prototype,"outputLines",void 0),t([p({type:D,json:{name:"outSR",write:!0}})],U.prototype,"outSpatialReference",void 0),t([p({json:{write:!0}})],U.prototype,"overrides",void 0),t([p({json:{name:"barriers",write:!0}})],U.prototype,"pointBarriers",void 0),t([a("pointBarriers")],U.prototype,"writePointBarriers",null),t([p({json:{write:!0}})],U.prototype,"polygonBarriers",void 0),t([a("polygonBarriers")],U.prototype,"writePolygonBarrier",null),t([p({json:{write:!0}})],U.prototype,"polylineBarriers",void 0),t([a("polylineBarriers")],U.prototype,"writePolylineBarrier",null),t([p({type:Boolean,json:{write:!0}})],U.prototype,"preserveFirstStop",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"preserveLastStop",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"preserveObjectID",void 0),t([p({type:[String],json:{name:"restrictionAttributeNames",write:!0}})],U.prototype,"restrictionAttributes",void 0),t([l("restrictionAttributes")],U.prototype,"readRestrictionAttributes",null),t([a("restrictionAttributes")],U.prototype,"writeRestrictionAttributes",null),t([m(f)],U.prototype,"restrictUTurns",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnBarriers",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnDirections",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnPolygonBarriers",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnPolylineBarriers",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnRoutes",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnStops",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnTraversedEdges",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnTraversedJunctions",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnTraversedTurns",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"returnZ",void 0),t([p({type:Date,json:{type:Number,write:!0}})],U.prototype,"startTime",void 0),t([l("startTime")],U.prototype,"readStartTime",null),t([a("startTime")],U.prototype,"writeStartTime",null),t([p({type:Boolean,json:{write:!0}})],U.prototype,"startTimeIsUTC",void 0),t([p({json:{write:!0}})],U.prototype,"stops",void 0),t([l("stops")],U.prototype,"readStops",null),t([a("stops")],U.prototype,"writeStops",null),t([p({type:Boolean,json:{write:!0}})],U.prototype,"timeWindowsAreUTC",void 0),t([p({type:T,json:{write:!0}})],U.prototype,"travelMode",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"useHierarchy",void 0),t([p({type:Boolean,json:{write:!0}})],U.prototype,"useTimeWindows",void 0),U=A=t([u("esri.rest.support.RouteParameters")],U);const L=U;function C(t,o,e){i(t)&&(o[e]=r.isCollection(t)?{features:t.toArray().map((t=>t.toJSON()))}:t.toJSON())}export{L as default};