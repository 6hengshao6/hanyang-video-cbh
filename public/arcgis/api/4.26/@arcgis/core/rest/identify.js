/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import o from"../request.js";import{normalizeCentralMeridian as s}from"../geometry/support/normalizeUtils.js";import{p as t,e as r,a as e}from"../chunks/utils4.js";import{i,e as p}from"../chunks/maybe.js";import{sqlAnd as m}from"../core/sql.js";import{getJsonType as n}from"../geometry/support/jsonUtils.js";import{g as l}from"../chunks/scaleUtils.js";import{g as a}from"../chunks/floorFilterUtils.js";import{a as c}from"../chunks/sublayerUtils.js";import u from"./support/IdentifyParameters.js";import j from"./support/IdentifyResult.js";import"../config.js";import"../chunks/typedArrayUtil.js";import"../chunks/object.js";import"../core/lang.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../geometry/Polygon.js";import"../chunks/tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/tracking.js";import"../chunks/writer.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../chunks/zmUtils.js";import"../geometry/Polyline.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../chunks/typeUtils.js";import"../chunks/utils5.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";const y=o=>o.spatialReference.wkid||JSON.stringify(o.spatialReference);async function b(j,b,h){const d=(b=function(o){return u.from(o)}(b)).geometry?[b.geometry]:[],k=t(j);return k.path+="/identify",s(d).then((s=>{const t=function(o,s){const{dpi:t,gdbVersion:r,geometry:e,geometryPrecision:u,height:j,layerOption:b,mapExtent:f,maxAllowableOffset:h,returnFieldName:d,returnGeometry:k,returnUnformattedValues:g,returnZ:S,spatialReference:x,timeExtent:D,tolerance:I,width:U}=o.toJSON(),{dynamicLayers:L,layerDefs:E,layerIds:M}=function(o){const{mapExtent:s,floors:t,width:r,sublayers:e,layerIds:n,layerOption:u,gdbVersion:j}=o,y=e?.find((o=>null!=o.layer))?.layer?.serviceSublayers,b="popup"===u,f={},h=l({extent:s,width:r,spatialReference:s?.spatialReference}),d=[],k=o=>{const s=0===h,t=0===o.minScale||h<=o.minScale,r=0===o.maxScale||h>=o.maxScale;if(o.visible&&(s||t&&r))if(o.sublayers)o.sublayers.forEach(k);else{if(!1===n?.includes(o.id)||b&&(!o.popupTemplate||!o.popupEnabled))return;d.unshift(o)}};if(e?.forEach(k),e&&!d.length)f.layerIds=[];else{const o=c(d,y,j),s=d.map((o=>{const s=a(t,o);return o.toExportImageJSON(s)}));if(o)f.dynamicLayers=JSON.stringify(s);else{if(e){let o=d.map((({id:o})=>o));n&&(o=o.filter((o=>n.includes(o)))),f.layerIds=o}else n?.length&&(f.layerIds=n);const o=function(o,s){const t=!!o?.length,r=s.filter((o=>null!=o.definitionExpression||t&&null!=o.floorInfo));return r.length?r.map((s=>{const t=a(o,s),r=m(t,s.definitionExpression);return{id:s.id,definitionExpression:p(r,void 0)}})):null}(t,d);if(i(o)&&o.length){const s={};for(const t of o)t.definitionExpression&&(s[t.id]=t.definitionExpression);Object.keys(s).length&&(f.layerDefs=JSON.stringify(s))}}}return f}(o),P=s&&i(s.geometry)?s.geometry:null,C={geometryPrecision:u,maxAllowableOffset:h,returnFieldName:d,returnGeometry:k,returnUnformattedValues:g,returnZ:S,tolerance:I},O=P&&P.toJSON()||e;if(C.imageDisplay=`${U},${j},${t}`,r&&(C.gdbVersion=r),O&&(delete O.spatialReference,C.geometry=JSON.stringify(O),C.geometryType=n(O)),x?C.sr=x.wkid||JSON.stringify(x):O&&O.spatialReference?C.sr=y(O):f&&f.spatialReference&&(C.sr=y(f)),C.time=D?[D.start,D.end].join(","):null,f){const{xmin:o,ymin:s,xmax:t,ymax:r}=f;C.mapExtent=`${o},${s},${t},${r}`}return E&&(C.layerDefs=E),L&&!E&&(C.dynamicLayers=L),C.layers="popup"===b?"visible":b,M&&!L&&(C.layers+=`:${M.join(",")}`),C}(b,{geometry:s&&s[0]}),u=r({...k.query,f:"json",...t}),j=e(u,h);return o(k.path,j).then(f).then((o=>function(o,s){if(!s?.length)return o;const t=new Map;s.forEach((function o(s){t.set(s.id,s),s.sublayers&&s.sublayers.forEach(o)}));for(const s of o.results)s.feature.sourceLayer=t.get(s.layerId);return o}(o,b.sublayers)))}))}function f(o){const s=o.data;return s.results=s.results||[],s.exceededTransferLimit=Boolean(s.exceededTransferLimit),s.results=s.results.map((o=>j.fromJSON(o))),s}export{b as identify};