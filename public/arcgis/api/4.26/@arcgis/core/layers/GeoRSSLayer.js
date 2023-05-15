/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import s from"../config.js";import t from"../request.js";import"../symbols.js";import{i as r}from"../chunks/maybe.js";import{M as e}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as i}from"../core/promiseUtils.js";import{getFilename as m}from"../core/urlUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{r as p}from"../chunks/reader.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import a from"../geometry/Extent.js";import{i as y}from"../chunks/unitUtils.js";import c from"./Layer.js";import{BlendLayer as j}from"./mixins/BlendLayer.js";import{O as u}from"../chunks/OperationalLayer.js";import{PortalLayer as h}from"./mixins/PortalLayer.js";import{RefreshableLayer as b}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as S}from"./mixins/ScaleRangeLayer.js";import{i as k,a as d,u as g}from"../chunks/commonProperties2.js";import f from"../symbols/Symbol.js";import v from"../symbols/SimpleLineSymbol.js";import P from"../symbols/PictureMarkerSymbol.js";import D from"../symbols/SimpleMarkerSymbol.js";import U from"../symbols/SimpleFillSymbol.js";import"../chunks/object.js";import"../core/lang.js";import"../kernel.js";import"../core/Error.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../symbols/CIMSymbol.js";import"../chunks/enumeration.js";import"../chunks/jsonMap.js";import"../chunks/writer.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../geometry/SpatialReference.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../core/Identifiable.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/asyncUtils.js";import"../chunks/layerUtils.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";const L=["atom","xml"],C={base:f,key:"type",typeMap:{"simple-line":v},errorContext:"symbol"},x={base:f,key:"type",typeMap:{"picture-marker":P,"simple-marker":D},errorContext:"symbol"},M={base:f,key:"type",typeMap:{"simple-fill":U},errorContext:"symbol"};let E=class extends(j(b(u(h(S(e(c))))))){constructor(...o){super(...o),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(o,s){return"string"==typeof o?{url:o,...s}:o}readFeatureCollections(o,s){return s.featureCollection.layers.forEach((o=>{const s=o.layerDefinition.drawingInfo.renderer.symbol;s&&"esriSFS"===s.type&&s.outline?.style.includes("esriSFS")&&(s.outline.style="esriSLSSolid")})),s.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const o=this._get("title");return o&&"defaults"!==this.originOf("title")?o:this.url?m(this.url,L)||"GeoRSS":o||""}set title(o){this._set("title",o)}load(o){const s=r(o)?o.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},o).catch(i).then((()=>this._fetchService(s))).then((o=>{this.read(o,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const o=await this._fetchService();return this.read(o,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(o){const r=this.spatialReference,{data:e}=await t(s.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:y(r)?void 0:r.wkid??JSON.stringify(r)},signal:o});return e}_hasGeometry(o){return this.featureCollections?.some((s=>s.featureSet?.geometryType===o&&s.featureSet.features?.length>0))??!1}};o([l()],E.prototype,"description",void 0),o([l()],E.prototype,"featureCollections",void 0),o([p("service","featureCollections",["featureCollection.layers"])],E.prototype,"readFeatureCollections",null),o([l({type:a,json:{name:"lookAtExtent"}})],E.prototype,"fullExtent",void 0),o([l(k)],E.prototype,"id",void 0),o([l(d)],E.prototype,"legendEnabled",void 0),o([l({types:C,json:{write:!0}})],E.prototype,"lineSymbol",void 0),o([l({type:["show","hide"]})],E.prototype,"listMode",void 0),o([l({types:x,json:{write:!0}})],E.prototype,"pointSymbol",void 0),o([l({types:M,json:{write:!0}})],E.prototype,"polygonSymbol",void 0),o([l({type:["GeoRSS"]})],E.prototype,"operationalLayerType",void 0),o([l(g)],E.prototype,"url",void 0),o([l({json:{origins:{service:{read:{source:"name",reader:o=>o||void 0}}}}})],E.prototype,"title",null),o([l({readOnly:!0,json:{read:!1},value:"geo-rss"})],E.prototype,"type",void 0),E=o([n("esri.layers.GeoRSSLayer")],E);const G=E;export{G as default};
