/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{A as r}from"./typedArrayUtil.js";import t from"../core/Error.js";import{L as e}from"./Logger.js";import{a as o,i as s}from"./maybe.js";import{debounce as i,eachAlways as p}from"../core/promiseUtils.js";import{u as a}from"./originUtils.js";import m from"../layers/FeatureLayer.js";import{p as l}from"./arcgisLayerUrl.js";import{f as n}from"./fetchService.js";import{a as j,m as u}from"./layerUtils.js";import y from"../portal/Portal.js";import c from"../portal/PortalItem.js";import{a as d}from"./jsonContext.js";import{a as f,T as b,b as S,r as g}from"./portalItemUtils.js";import"../core/lang.js";import"./object.js";import"../config.js";import"./string.js";import"./multiOriginJSONSupportUtils.js";import"./tslib.es6.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"./get.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../core/JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../Graphic.js";import"./compilerUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../symbols/support/jsonUtils.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"./vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../core/reactiveUtils.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../layers/Layer.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./assets.js";import"../intl.js";import"./messages.js";import"./editsZScale.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"./fieldType.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../TimeExtent.js";import"./timeUtils.js";import"../rest/support/Query.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"./commonProperties2.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./TimeReference.js";import"./datetime.js";import"./featureLayerUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./serviceCapabilitiesUtils.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"./OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"./asyncUtils.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../geometry/projection.js";import"./pe.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"./labelingInfo.js";import"./versionUtils.js";import"./styleUtils2.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";const I=e.getLogger("esri.layers.FeatureLayer"),h="Feature Service";function w(r,t){return`Layer (title: ${r.title}, id: ${r.id}) of type '${r.declaredClass}' ${t}`}function U(r,e){if(e.type!==h)throw new t("feature-layer:portal-item-wrong-type",w(r,`should have portal item of type "${h}"`))}async function L(r){if(await r.load(),j(r))throw new t("feature-layer:save",w(r,"using an in-memory source cannot be saved to a portal item"))}async function v(r,e,o){"beforeSave"in r&&"function"==typeof r.beforeSave&&await r.beforeSave();const s=r.write({},e);return function(r,e){let o=(r.messages??[]).filter((({type:r})=>"error"===r)).map((({name:r,message:e,details:o})=>new t(r,e,o)));if(e?.ignoreUnsupported&&(o=o.filter((({name:r})=>"layer:unsupported"!==r&&"symbol:unsupported"!==r&&"symbol-layer:unsupported"!==r&&"property:unsupported"!==r&&"url:unsupported"!==r))),o.length>0)throw new t("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}(e,o),s}function C(r){const{layer:t,layerJSON:e}=r;return t.isTable?{layers:[],tables:[e]}:{layers:[e],tables:[]}}function x(r){f(r,b.JSAPI),r.typeKeywords&&(r.typeKeywords=r.typeKeywords.filter(((r,t,e)=>e.indexOf(r)===t)))}async function D(r,t){return/\/\d+\/?$/.test(r.url??"")?C(t[0]):async function(r,t){const{layer:{url:e,customParameters:s,apiKey:i}}=t[0];let a=await r.fetchData("json");a&&null!=a.layers&&null!=a.tables||(a=await async function(r,t,e){var s,i;r||(r={}),(s=r).layers||(s.layers=[]),(i=r).tables||(i.tables=[]);const{url:a,customParameters:l,apiKey:j}=t,{serviceJSON:u,layersJSON:y}=await n(a,{customParameters:l,apiKey:j}),c=P(r.layers,u.layers,e),d=P(r.tables,u.tables,e);r.layers=c.itemResources,r.tables=d.itemResources;const f=[...c.added,...d.added],b=y?[...y.layers,...y.tables]:[];return await async function(r,t,e,s){const i=t.map((({id:r})=>new m({url:e,layerId:r,sourceJSON:s.find((({id:t})=>t===r))})));await p(i.map((r=>r.load()))),i.forEach((t=>{const{layerId:e,loaded:s,defaultPopupTemplate:i}=t;s&&!o(i)&&R(t,{id:e,popupInfo:i.toJSON()},r)}))}(r,f,a,b),r}(a,{url:e??"",customParameters:s,apiKey:i},t.map((r=>r.layer.layerId))));for(const r of t)R(r.layer,r.layerJSON,a);return a}(r,t)}function P(t,e,o){const s=r(t,e,((r,t)=>r.id===t.id));t=t.filter((r=>!s.removed.some((t=>t.id===r.id))));const i=s.added.map((({id:r})=>({id:r})));return i.forEach((({id:r})=>{t.push({id:r})})),{itemResources:t,added:i.filter((({id:r})=>!o.includes(r)))}}function R(r,t,e){r.isTable?F(e.tables,t):F(e.layers,t)}function F(r,t){if(!r)return;const e=r.findIndex((({id:r})=>r===t.id));-1===e?r.push(t):r[e]=t}function T(r){const{portalItem:t}=r;return u(r)&&!r.dynamicDataSource&&!!t?.loaded&&t.type===h}const M=i((async function(r,e){await L(r),function(r){const e=r.portalItem;if(!e)throw I.error("save: requires the portalItem property to be set"),new t("feature-layer:portal-item-not-set",w(r,"requires the portalItem property to be set"));if(!e.loaded)throw new t("feature-layer:portal-item-not-loaded",w(r,"cannot be saved to a portal item that does not exist or is inaccessible"));U(r,e)}(r);const o=r.portalItem,s=d(o),i=await v(r,s,e),p=await D(o,[{layer:r,layerJSON:i}]);return x(o),await o.update({data:p}),a(s),o})),E=i((async(r,e)=>{await async function(r){if(!r?.length)throw new t("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(r.map((r=>r.load())));for(const e of r)if(!T(e))throw new t("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${w(e,"does not conform")}`,{layer:e});const e=r.map((r=>r.portalItem.id));if(new Set(e).size>1)throw new t("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const o=r.map((r=>r.layerId));if(new Set(o).size!==o.length)throw new t("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}(r);const o=r[0].portalItem,s=d(o),i=await Promise.all(r.map((r=>v(r,s,e)))),p=await D(o,r.map(((r,t)=>({layer:r,layerJSON:i[t]}))));return x(o),await o.update({data:p}),await Promise.all(r.slice(1).map((r=>r.portalItem.reload()))),a(s),o.clone()})),V=i((async function(r,t,e){await L(r);const o=function(r,t){var e,o;let s=c.from(t);return s.id&&(s=s.clone(),s.id=null),(e=s).type??(e.type=h),(o=s).portal??(o.portal=y.getDefault()),U(r,s),s}(r,t),i=d(o),p=C({layer:r,layerJSON:await v(r,i,e)});return await async function(r,t){const{url:e,layerId:o,title:i,fullExtent:p,isTable:a}=r,m=l(e),n=s(m)&&"FeatureServer"===m.serverType;t.url=n?e:`${e}/${o}`,t.title||(t.title=i),t.extent=null,!a&&s(p)&&(t.extent=await S(p)),g(t,b.METADATA),g(t,b.MULTI_LAYER),f(t,b.SINGLE_LAYER),a&&f(t,b.TABLE),x(t)}(r,o),await async function(r,t,e){const o=r.portal;await(o?.signIn()),await(o?.user?.addItem({item:r,data:t,folder:e?.folder}))}(o,p,e),r.portalItem=o,a(i),o}));export{M as save,E as saveAll,V as saveAs};
