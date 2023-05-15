/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{A as e}from"./ArcadeDate.js";import{p as t,q as r,F as i,l as s,w as o,ah as n,X as a,H as l,L as p,T as m,m as u,o as c,W as f,n as d,k as y,t as j,B as g,ai as h,aj as b,a0 as I,ak as w}from"./arcadeUtils.js";import{A as F,E as S}from"./executionError.js";import{F as D,c as x,a as E,b as L,d as T,O as A,e as P,T as C,f as R,g as v,h as N,i as U,S as M,j as $,k as O,A as k,l as V}from"./featureSetUtils.js";import{I as z}from"./ImmutableArray.js";import{g as B}from"./portalUtils.js";import{E as G,i as H}from"./SpatialFilter.js";import{isPromiseLike as q}from"../core/promiseUtils.js";import{WhereClause as W}from"../core/sql/WhereClause.js";import Q from"../layers/FeatureLayer.js";import Z from"../layers/support/Field.js";import"./datetime.js";import"../geometry.js";import"./ensureType.js";import"./typedArrayUtil.js";import"./maybe.js";import"./Logger.js";import"../config.js";import"./object.js";import"../core/lang.js";import"./string.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./number3.js";import"./locale.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./arcadeTimeUtils.js";import"../layers/support/FieldsIndex.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./TimeReference.js";import"../core/Clonable.js";import"../kernel.js";import"../core/urlUtils.js";import"./hash.js";import"../request.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./sizeVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./clusterUtils.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/SizeStop.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./lengthUtils.js";import"./DataLayerSource.js";import"./executeQueryJSON.js";import"./utils4.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils5.js";import"./urlUtils2.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./executeForIds.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/support/FeatureType.js";import"../layers/support/FeatureTemplate.js";import"../portal/PortalItem.js";import"./assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../geometry/geometryEngineAsync.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"./messages.js";import"./_commonjsHelpers.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../symbols/support/jsonUtils.js";import"./layerUtils.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"./vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../core/reactiveUtils.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../layers/Layer.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"./editsZScale.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"./commonProperties2.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./featureLayerUtils.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./serviceCapabilitiesUtils.js";import"../layers/mixins/FeatureReductionLayer.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"./asyncUtils.js";import"./portalItemUtils.js";import"../geometry/projection.js";import"./pe.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"./fieldProperties.js";import"./labelingInfo.js";import"./versionUtils.js";import"./styleUtils2.js";import"../support/popupUtils.js";async function _(e,t,r){const i=e.getVariables();if(i.length>0){const s=[];for(let e=0;e<i.length;e++){const o={name:i[e]};s.push(await t.evaluateIdentifier(r,o))}const o={};for(let e=0;e<i.length;e++)o[i[e]]=s[e];return e.parameters=o,e}return e}function J(e,t,r=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return r}function K(e){if(null===e)return null;const t={type:J(e,"type",""),name:J(e,"name","")};if("range"===t.type)t.range=J(e,"range",[]);else{t.codedValues=[];for(const r of J(e,"codedValues",[]))t.codedValues.push({name:J(r,"name",""),code:J(r,"code",null)})}return t}function X(e){if(null===e)return null;const t={},r=J(e,"wkt",null);null!==r&&(t.wkt=r);const i=J(e,"wkid",null);return null!==i&&(t.wkid=i),t}function Y(e){if(null===e)return null;const t={hasZ:J(e,"hasz",!1),hasM:J(e,"hasm",!1)},r=J(e,"spatialreference",null);r&&(t.spatialReference=X(r));const i=J(e,"x",null);if(null!==i)return t.x=i,t.y=J(e,"y",null),t;const s=J(e,"rings",null);if(null!==s)return t.rings=s,t;const o=J(e,"paths",null);if(null!==o)return t.paths=o,t;const n=J(e,"points",null);if(null!==n)return t.points=n,t;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const i=J(e,r,null);null!==i&&(t[r]=i)}return t}function ee(ee){"async"===ee.mode&&(ee.functions.timezone=function(l,p){return ee.standardFunctionAsync(l,p,(async(m,u,c)=>{if(t(c,1,2,l,p),r(c[0])){if(await c[0].load(),1===c.length||null===c[1])return c[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(c[1]instanceof i)||!1===c[1].hasField("type"))throw new F(l,S.InvalidParameter,p);const e=c[1].field("type");if(!1===s(e))throw new F(l,S.InvalidParameter,p);switch(o(e).toLowerCase()){case"preferredtimezone":return c[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return c[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return c[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(c[1].hasField("fieldname")&&s(c[1].field("fieldname")))return c[0].dateTimeReferenceFieldIndex.fieldTimeZone(o(c[1].field("fieldname")))}throw new F(l,S.InvalidParameter,p)}const f=n(c[0],a(l));if(null===f)return null;const d=f.timeZone;return"system"===d?e.systemTimeZoneCanonicalName:d}))},ee.functions.sqltimestamp=function(e,i){return ee.standardFunctionAsync(e,i,(async(s,n,a)=>{t(a,1,3,e,i);const p=a[0];if(l(p)){if(1===a.length)return p.toSQLString();if(2===a.length)return p.changeTimeZone(o(a[1])).toSQLString();throw new F(e,S.InvalidParameter,i)}if(r(p)){if(3!==a.length)throw new F(e,S.InvalidParameter,i);await p.load();const t=o(a[1]);if(!1===l(a[2]))throw new F(e,S.InvalidParameter,i);const r=p.fieldTimeZone(t);return null===r?a[2].toSQLString():a[2].changeTimeZone(r).toSQLString()}throw new F(e,S.InvalidParameter,i)}))},ee.signatures.push({name:"sqltimestamp",min:2,max:4}),ee.functions.featuresetbyid=function(e,r){return ee.standardFunctionAsync(e,r,((i,s,n)=>{if(t(n,2,4,e,r),n[0]instanceof D){const t=o(n[1]);let i=p(n[2],null);const s=m(p(n[3],!0));if(null===i&&(i=["*"]),!1===u(i))throw new F(e,S.InvalidParameter,r);return n[0].featureSetById(t,s,i)}throw new F(e,S.InvalidParameter,r)}))},ee.signatures.push({name:"featuresetbyid",min:2,max:4}),ee.functions.getfeatureset=function(e,r){return ee.standardFunctionAsync(e,r,((i,s,n)=>{if(t(n,1,2,e,r),c(n[0])){let t=p(n[1],"datasource");return null===t&&(t="datasource"),t=o(t).toLowerCase(),x(n[0].fullSchema(),t,e.lrucache,e.interceptor,e.spatialReference)}throw new F(e,S.InvalidParameter,r)}))},ee.signatures.push({name:"getfeatureset",min:1,max:2}),ee.functions.featuresetbyportalitem=function(e,r){return ee.standardFunctionAsync(e,r,((i,n,a)=>{if(t(a,2,5,e,r),null===a[0])throw new F(e,S.PortalRequired,r);if(a[0]instanceof f){const t=o(a[1]),i=o(a[2]);let s=p(a[3],null);const n=m(p(a[4],!0));if(null===s&&(s=["*"]),!1===u(s))throw new F(e,S.InvalidParameter,r);let l=null;return e.services&&e.services.portal&&(l=e.services.portal),l=B(a[0],l),E(t,i,e.spatialReference,s,n,l,e.lrucache,e.interceptor)}if(!1===s(a[0]))throw new F(e,S.PortalRequired,r);const l=o(a[0]),c=o(a[1]);let d=p(a[2],null);const y=m(p(a[3],!0));if(null===d&&(d=["*"]),!1===u(d))throw new F(e,S.InvalidParameter,r);if(e.services&&e.services.portal)return E(l,c,e.spatialReference,d,y,e.services.portal,e.lrucache,e.interceptor);throw new F(e,S.PortalRequired,r)}))},ee.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),ee.functions.featuresetbyname=function(e,r){return ee.standardFunctionAsync(e,r,((i,s,n)=>{if(t(n,2,4,e,r),n[0]instanceof D){const t=o(n[1]);let i=p(n[2],null);const s=m(p(n[3],!0));if(null===i&&(i=["*"]),!1===u(i))throw new F(e,S.InvalidParameter,r);return n[0].featureSetByName(t,s,i)}throw new F(e,S.InvalidParameter,r)}))},ee.signatures.push({name:"featuresetbyname",min:2,max:4}),ee.functions.featureset=function(e,r){return ee.standardFunction(e,r,((o,n,a)=>{t(a,1,1,e,r);let l=a[0];const p={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(s(l))l=JSON.parse(l),void 0!==l.layerDefinition?(p.layerDefinition=l.layerDefinition,p.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(p.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(p.featureSet.features=l.features,p.featureSet.geometryType=l.geometryType,p.layerDefinition.geometryType=p.featureSet.geometryType,p.layerDefinition.objectIdField=l.objectIdFieldName,p.layerDefinition.typeIdField=l.typeIdFieldName,p.layerDefinition.globalIdField=l.globalIdFieldName,p.layerDefinition.fields=l.fields,l.spatialReference&&(p.layerDefinition.spatialReference=l.spatialReference));else{if(!(a[0]instanceof i))throw new F(e,S.InvalidParameter,r);{l=JSON.parse(a[0].castToText(!0));const e=J(l,"layerdefinition");if(null!==e){p.layerDefinition.geometryType=J(e,"geometrytype",""),p.featureSet.geometryType=p.layerDefinition.geometryType,p.layerDefinition.globalIdField=J(e,"globalidfield",""),p.layerDefinition.objectIdField=J(e,"objectidfield",""),p.layerDefinition.typeIdField=J(e,"typeidfield","");const t=J(e,"spatialreference",null);t&&(p.layerDefinition.spatialReference=X(t));for(const t of J(e,"fields",[])){const e={name:J(t,"name",""),alias:J(t,"alias",""),type:J(t,"type",""),nullable:J(t,"nullable",!0),editable:J(t,"editable",!0),length:J(t,"length",null),domain:K(J(t,"domain"))};p.layerDefinition.fields.push(e)}const r=J(l,"featureset",null);if(r){const e={};for(const t of p.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of J(r,"features",[])){const r={},i=J(t,"attributes",{});for(const t in i)r[e[t.toLowerCase()]]=i[t];p.featureSet.features.push({attributes:r,geometry:Y(J(t,"geometry",null))})}}}else{p.layerDefinition.geometryType=J(l,"geometrytype",""),p.featureSet.geometryType=p.layerDefinition.geometryType,p.layerDefinition.objectIdField=J(l,"objectidfieldname",""),p.layerDefinition.typeIdField=J(l,"typeidfieldname","");const e=J(l,"spatialreference",null);e&&(p.layerDefinition.spatialReference=X(e));for(const e of J(l,"fields",[])){const t={name:J(e,"name",""),alias:J(e,"alias",""),type:J(e,"type",""),nullable:J(e,"nullable",!0),editable:J(e,"editable",!0),length:J(e,"length",null),domain:K(J(e,"domain"))};p.layerDefinition.fields.push(t)}const t={};for(const e of p.layerDefinition.fields)t[e.name.toLowerCase()]=e.name;for(const e of J(l,"features",[])){const r={},i=J(e,"attributes",{});for(const e in i)r[t[e.toLowerCase()]]=i[e];p.featureSet.features.push({attributes:r,geometry:Y(J(e,"geometry",null))})}}}}if(0==(!!(m=p).layerDefinition&&!!m.featureSet&&!1!==function(e,t){for(const t of["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(t===e)return!0;return!1}(m.layerDefinition.geometryType)&&null!==m.layerDefinition.objectIdField&&""!==m.layerDefinition.objectIdField&&!1!==u(m.layerDefinition.fields)&&!1!==u(m.featureSet.features)))throw new F(e,S.InvalidParameter,r);var m;return""===(p?.layerDefinition?.geometryType||"")&&(p.layerDefinition.geometryType="esriGeometryNull"),L.create(p,e.spatialReference)}))},ee.signatures.push({name:"featureset",min:1,max:1}),ee.functions.filter=function(e,i){return ee.standardFunctionAsync(e,i,(async(s,o,n)=>{if(t(n,2,2,e,i),u(n[0])||d(n[0])){const t=[];let r=n[0];r instanceof z&&(r=r.toArray());let s=null;if(!y(n[1]))throw new F(e,S.InvalidParameter,i);s=n[1].createFunction(e);for(const e of r){const r=s(e);q(r)?!0===await r&&t.push(e):!0===r&&t.push(e)}return t}if(r(n[0])){const t=await n[0].load(),r=W.create(n[1],t.getFieldsIndex()),i=r.getVariables();if(i.length>0){const t=[];for(let r=0;r<i.length;r++){const s={name:i[r]};t.push(await ee.evaluateIdentifier(e,s))}const s={};for(let e=0;e<i.length;e++)s[i[e]]=t[e];return r.parameters=s,new T({parentfeatureset:n[0],whereclause:r})}return new T({parentfeatureset:n[0],whereclause:r})}throw new F(e,S.InvalidParameter,i)}))},ee.signatures.push({name:"filter",min:2,max:2}),ee.functions.orderby=function(e,i){return ee.standardFunctionAsync(e,i,(async(s,o,n)=>{if(t(n,2,2,e,i),r(n[0])){const e=new A(n[1]);return new P({parentfeatureset:n[0],orderbyclause:e})}throw new F(e,S.InvalidParameter,i)}))},ee.signatures.push({name:"orderby",min:2,max:2}),ee.functions.top=function(e,i){return ee.standardFunctionAsync(e,i,(async(s,o,n)=>{if(t(n,2,2,e,i),r(n[0]))return new C({parentfeatureset:n[0],topnum:n[1]});if(u(n[0]))return j(n[1])>=n[0].length?n[0].slice(0):n[0].slice(0,j(n[1]));if(d(n[0]))return j(n[1])>=n[0].length()?n[0].slice(0):n[0].slice(0,j(n[1]));throw new F(e,S.InvalidParameter,i)}))},ee.signatures.push({name:"top",min:2,max:2}),ee.functions.first=function(e,i){return ee.standardFunctionAsync(e,i,(async(s,o,n)=>{if(t(n,1,1,e,i),r(n[0])){const t=await n[0].first(s.abortSignal);if(null!==t){const r=g.createFromGraphicLikeObject(t.geometry,t.attributes,n[0],e.timeReference);return r._underlyingGraphic=t,r}return t}return u(n[0])?0===n[0].length?null:n[0][0]:d(n[0])?0===n[0].length()?null:n[0].get(0):null}))},ee.signatures.push({name:"first",min:1,max:1}),ee.functions.attachments=function(e,s){return ee.standardFunctionAsync(e,s,(async(o,n,a)=>{t(a,1,2,e,s);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(a.length>1)if(a[1]instanceof i){if(a[1].hasField("minsize")&&(l.minsize=j(a[1].field("minsize"))),a[1].hasField("metadata")&&(l.returnMetadata=m(a[1].field("metadata"))),a[1].hasField("maxsize")&&(l.maxsize=j(a[1].field("maxsize"))),a[1].hasField("types")){const e=h(a[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==a[1])throw new F(e,S.InvalidParameter,s);if(c(a[0])){let t=a[0]._layer;return t instanceof Q&&(t=R(t,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===t||!1===r(t)?[]:(await t.load(),t.queryAttachments(a[0].field(t.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===a[0])return[];throw new F(e,S.InvalidParameter,s)}))},ee.signatures.push({name:"attachments",min:1,max:2}),ee.functions.featuresetbyrelationshipname=function(e,i){return ee.standardFunctionAsync(e,i,(async(s,n,a)=>{t(a,2,4,e,i);const l=a[0],f=o(a[1]);let d=p(a[2],null);const y=m(p(a[3],!0));if(null===d&&(d=["*"]),!1===u(d))throw new F(e,S.InvalidParameter,i);if(null===a[0])return null;if(!c(a[0]))throw new F(e,S.InvalidParameter,i);let j=l._layer;if(j instanceof Q&&(j=R(j,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===j)return null;if(!1===r(j))return null;j=await j.load();const g=j.relationshipMetaData().filter((e=>e.name===f));if(0===g.length)return null;if(void 0!==g[0].relationshipTableId&&null!==g[0].relationshipTableId&&g[0].relationshipTableId>-1)return v(j,g[0],l.field(j.objectIdField),j.spatialReference,d,y,e.lrucache,e.interceptor);let h=j.serviceUrl();if(!h)return null;h="/"===h.charAt(h.length-1)?h+g[0].relatedTableId.toString():h+"/"+g[0].relatedTableId.toString();const b=await N(h,j.spatialReference,d,y,e.lrucache,e.interceptor);await b.load();let I=b.relationshipMetaData();if(I=I.filter((e=>e.id===g[0].id)),!1===l.hasField(g[0].keyField)||null===l.field(g[0].keyField)){const e=await j.getFeatureByObjectId(l.field(j.objectIdField),[g[0].keyField]);if(e){const t=W.create(I[0].keyField+"= @id",b.getFieldsIndex());return t.parameters={id:e.attributes[g[0].keyField]},b.filter(t)}return new G({parentfeatureset:b})}const w=W.create(I[0].keyField+"= @id",b.getFieldsIndex());return w.parameters={id:l.field(g[0].keyField)},b.filter(w)}))},ee.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),ee.functions.featuresetbyassociation=function(e,i){return ee.standardFunctionAsync(e,i,(async(n,a,l)=>{t(l,2,3,e,i);const m=l[0],u=o(p(l[1],"")).toLowerCase(),f=s(l[2])?o(l[2]):null;if(null===l[0])return null;if(!c(l[0]))throw new F(e,S.InvalidParameter,i);let d=m._layer;if(d instanceof Q&&(d=R(d,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===d)return null;if(!1===r(d))return null;await d.load();const y=d.serviceUrl(),j=await U(y,e.spatialReference);let g=null,h=null,w=!1;if(null!==f&&""!==f&&void 0!==f){for(const e of j.terminals)e.terminalName===f&&(h=e.terminalId);null===h&&(w=!0)}const D=j.associations.getFieldsIndex(),x=D.get("TOGLOBALID").name,E=D.get("FROMGLOBALID").name,L=D.get("TOTERMINALID").name,T=D.get("FROMTERMINALID").name,A=D.get("FROMNETWORKSOURCEID").name,P=D.get("TONETWORKSOURCEID").name,C=D.get("ASSOCIATIONTYPE").name,v=D.get("ISCONTENTVISIBLE").name,N=D.get("OBJECTID").name;for(const e of d.fields)if("global-id"===e.type){g=m.field(e.name);break}let z=null,B=new M(new Z({name:"percentalong",alias:"percentalong",type:"double"}),W.create("0",j.associations.getFieldsIndex())),G=new M(new Z({name:"side",alias:"side",type:"string"}),W.create("''",j.associations.getFieldsIndex()));const H="globalid",q="globalId",_={};for(const e in j.lkp)_[e]=j.lkp[e].sourceId;const J=new $(new Z({name:"classname",alias:"classname",type:"string"}),null,_);let K="";switch(u){case"midspan":{K=`((${x}='${g}') OR ( ${E}='${g}')) AND (${C} IN (5))`,J.codefield=W.create(`CASE WHEN (${x}='${g}') THEN ${A} ELSE ${P} END`,j.associations.getFieldsIndex());const e=I(k.findField(j.associations.fields,E));e.name=H,e.alias=H,z=new M(e,W.create(`CASE WHEN (${E}='${g}') THEN ${x} ELSE ${E} END`,j.associations.getFieldsIndex())),B=j.unVersion>=4?new V(k.findField(j.associations.fields,D.get("PERCENTALONG").name)):new M(new Z({name:"percentalong",alias:"percentalong",type:"double"}),W.create("0",j.associations.getFieldsIndex()));break}case"junctionedge":{K=`((${x}='${g}') OR ( ${E}='${g}')) AND (${C} IN (4,6))`,J.codefield=W.create(`CASE WHEN (${x}='${g}') THEN ${A} ELSE ${P} END`,j.associations.getFieldsIndex());const e=I(k.findField(j.associations.fields,E));e.name=H,e.alias=H,z=new M(e,W.create(`CASE WHEN (${E}='${g}') THEN ${x} ELSE ${E} END`,j.associations.getFieldsIndex())),G=new M(new Z({name:"side",alias:"side",type:"string"}),W.create(`CASE WHEN (${C}=4) THEN 'from' ELSE 'to' END`,j.associations.getFieldsIndex()));break}case"connected":{let e=`${x}='@T'`,t=`${E}='@T'`;null!==h&&(e+=` AND ${L}=@A`,t+=` AND ${T}=@A`),K="(("+e+") OR ("+t+"))",K=b(K,"@T",g??""),e=b(e,"@T",g??""),null!==h&&(e=b(e,"@A",h.toString()),K=b(K,"@A",h.toString())),J.codefield=W.create("CASE WHEN "+e+` THEN ${A} ELSE ${P} END`,j.associations.getFieldsIndex());const r=I(k.findField(j.associations.fields,E));r.name=H,r.alias=H,z=new M(r,W.create("CASE WHEN "+e+` THEN ${E} ELSE ${x} END`,j.associations.getFieldsIndex()));break}case"container":K=`${x}='${g}' AND ${C} = 2`,null!==h&&(K+=` AND ${L} = `+h.toString()),J.codefield=A,K="( "+K+" )",z=new O(k.findField(j.associations.fields,E),H,H);break;case"content":K=`(${E}='${g}' AND ${C} = 2)`,null!==h&&(K+=` AND ${T} = `+h.toString()),J.codefield=P,K="( "+K+" )",z=new O(k.findField(j.associations.fields,x),H,H);break;case"structure":K=`(${x}='${g}' AND ${C} = 3)`,null!==h&&(K+=` AND ${L} = `+h.toString()),J.codefield=A,K="( "+K+" )",z=new O(k.findField(j.associations.fields,E),H,q);break;case"attached":K=`(${E}='${g}' AND ${C} = 3)`,null!==h&&(K+=` AND ${T} = `+h.toString()),J.codefield=P,K="( "+K+" )",z=new O(k.findField(j.associations.fields,x),H,q);break;default:throw new F(e,S.InvalidParameter,i)}return w&&(K="1 <> 1"),new k({parentfeatureset:j.associations,adaptedFields:[new V(k.findField(j.associations.fields,N)),new V(k.findField(j.associations.fields,v)),z,G,J,B],extraFilter:K?W.create(K,j.associations.getFieldsIndex()):null})}))},ee.signatures.push({name:"featuresetbyassociation",min:2,max:6}),ee.functions.groupby=function(e,n){return ee.standardFunctionAsync(e,n,(async(a,l,p)=>{if(t(p,3,3,e,n),!r(p[0]))throw new F(e,S.InvalidParameter,n);const m=await p[0].load(),c=[],f=[];let y=!1,j=[];if(s(p[1]))j.push(p[1]);else if(p[1]instanceof i)j.push(p[1]);else if(u(p[1]))j=p[1];else{if(!d(p[1]))throw new F(e,S.InvalidParameter,n);j=p[1].toArray()}for(const t of j)if(s(t)){const e=W.create(o(t),m.getFieldsIndex()),r=!0===H(e)?o(t):"%%%%FIELDNAME";c.push({name:r,expression:e}),"%%%%FIELDNAME"===r&&(y=!0)}else{if(!(t instanceof i))throw new F(e,S.InvalidParameter,n);{const r=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",i=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===r&&(y=!0),!r)throw new F(e,S.InvalidParameter,n);c.push({name:r,expression:W.create(i||r,m.getFieldsIndex())})}}if(j=[],s(p[2]))j.push(p[2]);else if(u(p[2]))j=p[2];else if(d(p[2]))j=p[2].toArray();else{if(!(p[2]instanceof i))throw new F(e,S.InvalidParameter,n);j.push(p[2])}for(const t of j){if(!(t instanceof i))throw new F(e,S.InvalidParameter,n);{const r=t.hasField("name")?t.field("name"):"",i=t.hasField("statistic")?t.field("statistic"):"",s=t.hasField("expression")?t.field("expression"):"";if(!r||!i||!s)throw new F(e,S.InvalidParameter,n);f.push({name:r,statistic:i.toLowerCase(),expression:W.create(s,m.getFieldsIndex())})}}if(y){const e={};for(const t of m.fields)e[t.name.toLowerCase()]=1;for(const t of c)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of f)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const r of c)if("%%%%FIELDNAME"===r.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,r.name="FIELD_"+t.toString()}}for(const t of c)await _(t.expression,ee,e);for(const t of f)await _(t.expression,ee,e);return p[0].groupby(c,f)}))},ee.signatures.push({name:"groupby",min:3,max:3}),ee.functions.distinct=function(e,n){return ee.standardFunctionAsync(e,n,(async(a,l,p)=>{if(r(p[0])){t(p,2,2,e,n);const r=await p[0].load(),a=[];let l=[];if(s(p[1]))l.push(p[1]);else if(p[1]instanceof i)l.push(p[1]);else if(u(p[1]))l=p[1];else{if(!d(p[1]))throw new F(e,S.InvalidParameter,n);l=p[1].toArray()}let m=!1;for(const t of l)if(s(t)){const e=W.create(o(t),r.getFieldsIndex()),i=!0===H(e)?o(t):"%%%%FIELDNAME";a.push({name:i,expression:e}),"%%%%FIELDNAME"===i&&(m=!0)}else{if(!(t instanceof i))throw new F(e,S.InvalidParameter,n);{const i=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",s=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===i&&(m=!0),!i)throw new F(e,S.InvalidParameter,n);a.push({name:i,expression:W.create(s||i,r.getFieldsIndex())})}}if(m){const e={};for(const t of r.fields)e[t.name.toLowerCase()]=1;for(const t of a)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const r of a)if("%%%%FIELDNAME"===r.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,r.name="FIELD_"+t.toString()}}for(const t of a)await _(t.expression,ee,e);return p[0].groupby(a,[])}return function(e,t,r,i){if(1===i.length){if(u(i[0]))return w(e,i[0],-1);if(d(i[0]))return w(e,i[0].toArray(),-1)}return w(e,i,-1)}("distinct",0,0,p)}))})}export{ee as registerFunctions};