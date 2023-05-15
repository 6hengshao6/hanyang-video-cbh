/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{id as e}from"../kernel.js";import t from"../request.js";import r from"../core/Error.js";import{J as i}from"../chunks/jsonMap.js";import{i as o}from"../chunks/maybe.js";import{p as s,c as n,a}from"../chunks/screenUtils.js";import{normalize as l,dataComponents as p}from"../core/urlUtils.js";import m from"../geometry/Polygon.js";import{collectLabelingFields as c}from"../layers/support/fieldUtils.js";import{a as u}from"../chunks/floorFilterUtils.js";import{getSize as y,getColor as f,getOpacity as d,getRotationAngle as b,getSizeRangeAtScale as g}from"../chunks/visualVariableUtils.js";import{g as h}from"../chunks/utils4.js";import{s as j,e as S}from"../chunks/submitJob.js";import{t as w,a as x}from"../chunks/layoutTemplate.js";import D from"./support/PrintTemplate.js";import"../chunks/typedArrayUtil.js";import"../config.js";import"../chunks/object.js";import"../core/lang.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../chunks/tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/tracking.js";import"../chunks/writer.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../chunks/zmUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Color.js";import"../chunks/colorUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/sizeVariableUtils.js";import"./geoprocessor/GPOptions.js";import"./support/JobInfo.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils5.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../layers/support/MapImage.js";import"./support/DataFile.js";import"./support/FeatureSet.js";import"./support/LinearUnit.js";import"./support/ParameterValue.js";import"./support/RasterData.js";import"./support/GPMessage.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";const I="simple-marker",v="picture-marker",k="simple-line",L="simple-fill",T="shield-label-symbol",M="text";function P(e,t){const{graphic:r,renderer:i,symbol:o}=t,n=o.type;if(n===M||n===T||!("visualVariables"in i)||!i.visualVariables)return;const a=i.getVisualVariablesForType("size"),l=i.getVisualVariablesForType("color"),p=i.getVisualVariablesForType("opacity"),m=i.getVisualVariablesForType("rotation"),c=a[0],u=l[0],g=p[0],h=m[0];if(c){const t=n===I?o.style:null,i=y(c,r,{shape:t});null!=i&&(n===I?e.size=s(i):n===v?(e.width=s(i),e.height=s(i)):n===k?e.width=s(i):e.outline&&(e.outline.width=s(i)))}if(u){const t=f(u,r);(t&&n===I||n===k||n===L)&&(e.color=t?t.toJSON():void 0)}if(g){const t=d(g,r);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}h&&(e.angle=-b(i,r))}function E(e){return"bing-maps"===e?.type}function V(e){return e&&"blendMode"in e&&"effect"in e}function O(e){return"csv"===e?.type}function U(e){return"esri.views.2d.layers.GroupLayerView2D"===e?.declaredClass}function F(e){const t=e.layer;if(V(t)){const r=t.blendMode;if((!r||"normal"===r)&&(t.effect||"featureEffect"in e&&e.featureEffect))return!0}return!1}const C={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},R=new i({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),A=new i({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),N=new Map;async function J(e,r,i){const o=_(e);let s=N.get(o);return Promise.resolve().then((()=>s?{data:s.gpMetadata}:(s={gpServerUrl:o,is11xService:!1,legendLayerNameMap:{},legendLayers:[]},t(o,{query:{f:"json"}})))).then((e=>(s.gpMetadata=e.data,s.cimVersion=s.gpMetadata.cimVersion,s.is11xService=!!s.cimVersion,N.set(o,s),G(r,s)))).then((t=>{const o=ye(s);let n;const a=e=>"sync"===o?e.results&&e.results[0]&&e.results[0].value:n.fetchResultData("Output_File",null,i).then((e=>e.value));return"async"===o?j(e,t,void 0,i).then((e=>(n=e,e.waitForJobCompletion({interval:r.updateDelay}).then(a)))):S(e,t,void 0,i).then(a)}))}async function z(e){const t=_(e);return ye(N.get(t))}async function G(t,i){i=i||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};const s=t.template||new D;null==s.showLabels&&(s.showLabels=!0);const n=s.exportOptions;let a;const l=w(s.layout);if(n&&(a={dpi:n.dpi},"map_only"===l.toLowerCase()||""===l)){const e=n.width,t=n.height;a.outputSize=null!=e&&null!=t?[e,t]:void 0}const p=s.layoutOptions;let m;if(p){let e,t;"Miles"===p.scalebarUnit||"Kilometers"===p.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==p.scalebarUnit&&"Feet"!==p.scalebarUnit||(e="Meters",t="Feet"),m={titleText:p.titleText,authorText:p.authorText,copyrightText:p.copyrightText,customTextElements:p.customTextElements,elementOverrides:p.elementOverrides,scaleBarOptions:{metricUnit:R.toJSON(e),metricLabel:e?C[e]:void 0,nonMetricUnit:R.toJSON(t),nonMetricLabel:t?C[t]:void 0}}}let c=null;p?.legendLayers&&(c=p.legendLayers.map((e=>{const t=e.layerId;i.legendLayerNameMap[t]=e.title;const r={id:t};return e.subLayerIds&&(r.subLayerIds=e.subLayerIds),r})));const u=await async function(e,t,r){const i=e.view;let s=i.spatialReference;const n={operationalLayers:await $(i,t,r)};t.includeTables&&(n.tables=await async function(e){const t=[],r=[];for(const t of e.map.allTables)"feature"!==t.type||t.loaded||r.push(t.load());r.length&&await Promise.allSettled(r);for(const r of e.map.allTables)if("feature"===r.type&&r.loaded&&r.isTable&&"feature-layer"===r.source?.type){const e={id:(i=r.write()).id,title:i.title,customParameters:i.customParameters,layerDefinition:{definitionExpression:i.layerDefinition?.definitionExpression}};pe(e,r),t.push(e)}var i;return t.length?t:void 0}(i));let a=r.ssExtent||e.extent||i.extent;if(s&&s.isWrappable&&(a=a.clone()._normalize(!0),s=a.spatialReference),n.mapOptions={extent:a&&a.toJSON(),spatialReference:s&&s.toJSON(),showAttribution:t.attributionVisible},r.ssExtent=null,i.background&&(n.background=i.background.toJSON()),i.rotation&&(n.mapOptions.rotation=-i.rotation),t.scalePreserved&&(n.mapOptions.scale=t.outScale||i.scale),o(i.timeExtent)){const e=o(i.timeExtent.start)?i.timeExtent.start.getTime():null,t=o(i.timeExtent.end)?i.timeExtent.end.getTime():null;n.mapOptions.time=[e,t]}return n}(t,s,i);if(u.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),t=/[\u0600-\u06FF]/,o=r=>{const i=r.text,o=r.font,s=o&&o.family&&o.family.toLowerCase();i&&o&&("arial"===s||"arial unicode ms"===s)&&(o.family=e.test(i)?"Arial Unicode MS":"Arial","normal"!==o.style&&t.test(i)&&(o.family="Arial Unicode MS"))},s=()=>{throw new r("print:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};u.operationalLayers.forEach((e=>{e.featureCollection?.layers?e.featureCollection.layers.forEach((e=>{if(e.layerDefinition?.drawingInfo?.renderer?.symbol){const t=e.layerDefinition.drawingInfo.renderer;"esriTS"===t.symbol.type?o(t.symbol):"CIMSymbolReference"!==t.symbol.type||i.is11xService||s()}e.featureSet?.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?o(e.symbol):"CIMSymbolReference"!==e.symbol.type||i.is11xService||s())}))})):!i.is11xService&&e.layerDefinition?.drawingInfo?.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&s()}))}t.outSpatialReference&&(u.mapOptions.spatialReference=t.outSpatialReference.toJSON()),Object.assign(u,{exportOptions:a,layoutOptions:m||{}}),Object.assign(u.layoutOptions,{legendOptions:{operationalLayers:null!=c?c:i.legendLayers.slice()}}),i.legendLayers.length=0,N.set(i.gpServerUrl,i);const y={Web_Map_as_JSON:JSON.stringify(u),Format:x(s.format),Layout_Template:l,Layout_Item_ID:void 0};if(s.layoutItem){delete y.Layout_Template;const t=s.layoutItem;await t.load(),"public"!==t.access&&e&&await e.getCredential(i.gpServerUrl),y.Layout_Item_ID=JSON.stringify({id:t.id})}return t.extraParameters&&Object.assign(y,t.extraParameters),y}function _(e){let t=e;const r=t.lastIndexOf("/GPServer/");return r>0&&(t=t.slice(0,r+9)),t}async function $(e,t,r){const i=[],o={layerView:null,printTemplate:t,view:e};let s=0;t.scalePreserved&&(s=t.outScale||e.scale);const n=function(e,t){const r=e.allLayerViews.items;if(t===e.scale)return r.filter((e=>!e.suspended));const i=new Array;for(const e of r)U(e.parent)&&!i.includes(e.parent)||!e.visible||t&&"isVisibleAtScale"in e&&!e.isVisibleAtScale(t)||i.push(e);return i}(e,s);for(const e of n){const t=e.layer;if(!t.loaded||"group"===t?.type)continue;let s;o.layerView=e,s=F(e)?await re(t,o,r):E(t)?B(t):O(t)?await W(t,o,r):"feature"===t?.type?await K(t,o,r):"geojson"===t?.type?await Q(t,o,r):"graphics"===t?.type?await H(t,o,r):"imagery"===t?.type?X(t,r):"imagery-tile"===t?.type?await Y(t,o,r):"kml"===t?.type?await Z(t,o,r):"map-image"===t?.type?ee(t,o,r):"map-notes"===t?.type?await te(o,r):"open-street-map"===t?.type?{type:"OpenStreetMap"}:"stream"===t?.type?await ie(t,o,r):"tile"===t?.type?oe(t,r):"vector-tile"===t?.type?await se(t,o,r):"web-tile"===t?.type?ne(t):"wms"===t?.type?ae(t,r):"wmts"===t?.type?le(t):await re(t,o,r),s&&(Array.isArray(s)?i.push(...s):(s.id=t.id,s.title=r.legendLayerNameMap[t.id]||t.title,s.opacity=t.opacity,s.minScale=t.minScale||0,s.maxScale=t.maxScale||0,V(t)&&t.blendMode&&"normal"!==t.blendMode&&(s.blendMode=t.blendMode),i.push(s)))}if(s&&i.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const o=await q(null,e.graphics,t,r);o&&i.push(o)}return i}function B(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function W(e,t,r){e.legendEnabled&&r.legendLayers.push({id:e.id});const i=t.layerView,o=t.printTemplate;let s;return!r.is11xService||i.filter?q(e,await ue(i),o,r):(s={type:"CSV"},e.write(s,{origin:"web-map"}),delete s.popupInfo,delete s.layerType,s.showLabels=o.showLabels&&e.labelsVisible,s)}async function q(e,t,r,i){let o;const s={layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}},n={layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}},a={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}},l={layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}},p={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}};if(p.layerDefinition.name="textLayer",delete p.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?s.layerDefinition.name=n.layerDefinition.name=a.layerDefinition.name=l.layerDefinition.name=i.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON(),r=s.layerDefinition.drawingInfo;r&&(r.renderer=t);const i=n.layerDefinition.drawingInfo;i&&(i.renderer=t);const o=a.layerDefinition.drawingInfo;o&&(o.renderer=t);const p=l.layerDefinition.drawingInfo;p&&(p.renderer=t)}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){const t=e.write({},{origin:"web-map"}),r=t.layerDefinition?.drawingInfo?.labelingInfo;if(r){o=!0;const e=s.layerDefinition.drawingInfo;e&&(e.labelingInfo=r);const t=n.layerDefinition.drawingInfo;t&&(t.labelingInfo=r);const i=a.layerDefinition.drawingInfo;i&&(i.labelingInfo=r);const p=l.layerDefinition.drawingInfo;p&&(p.labelingInfo=r)}}}let u;e?.renderer||o||(delete s.layerDefinition.drawingInfo,delete n.layerDefinition.drawingInfo,delete a.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo);const y=e?.fieldsIndex,f=e?.renderer;if(y){const t=new Set;o&&await c(t,e),f&&"function"==typeof f.collectRequiredFields&&await f.collectRequiredFields(t,y),u=Array.from(t);const r=y.fields.map((e=>e.toJSON()));s.layerDefinition.fields=r,n.layerDefinition.fields=r,a.layerDefinition.fields=r,l.layerDefinition.fields=r}const d=t&&t.length;let b;for(let o=0;o<d;o++){const c=t[o]||t.getItemAt(o);if(!1===c.visible||!c.geometry)continue;if(b=c.toJSON(),b.hasOwnProperty("popupTemplate")&&delete b.popupTemplate,b.geometry&&b.geometry.z&&delete b.geometry.z,b.symbol&&b.symbol.outline&&"esriCLS"===b.symbol.outline.type&&!i.is11xService)continue;!i.is11xService&&b.symbol&&b.symbol.outline&&b.symbol.outline.color&&b.symbol.outline.color[3]&&(b.symbol.outline.color[3]=255);const y=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!b.symbol&&e&&e.renderer&&y&&!i.is11xService){const t=e.renderer,r=await t.getSymbolAsync(c);if(!r)continue;b.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&P(b.symbol,{renderer:t,graphic:c,symbol:r})}if(b.symbol&&(b.symbol.angle||delete b.symbol.angle,fe(b.symbol)?b.symbol=await me(b.symbol,i):b.symbol.text&&delete b.attributes),(!r||!r.forceFeatureAttributes)&&u?.length){const e={};u.forEach((t=>{b.attributes&&b.attributes.hasOwnProperty(t)&&(e[t]=b.attributes[t])})),b.attributes=e}"polygon"===c.geometry.type?s.featureSet.features.push(b):"polyline"===c.geometry.type?n.featureSet.features.push(b):"point"===c.geometry.type?b.symbol&&b.symbol.text?p.featureSet.features.push(b):a.featureSet.features.push(b):"multipoint"===c.geometry.type?l.featureSet.features.push(b):"extent"===c.geometry.type&&(b.geometry=m.fromExtent(c.geometry).toJSON(),s.featureSet.features.push(b))}const g=[s,n,l,a,p].filter((e=>e.featureSet.features.length>0));for(const e of g){const t=e.featureSet.features.every((e=>e.symbol));!t||r&&r.forceFeatureAttributes||e.featureSet.features.forEach((e=>{delete e.attributes})),t&&delete e.layerDefinition.drawingInfo,e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.renderer&&await ce(e.layerDefinition.drawingInfo.renderer,i)}return g.length?{featureCollection:{layers:g},showLabels:o}:null}async function K(e,t,r){let i;const o=e.renderer,s=parseFloat(r.cimVersion);if("binning"===e.featureReduction?.type||"cluster"===e.featureReduction?.type&&(!r.is11xService||s<2.9)||"pie-chart"===o?.type||"dot-density"===o?.type&&(!r.is11xService||s<2.6))return re(e,t,r);e.legendEnabled&&r.legendLayers.push({id:e.id});const n=t.layerView,{printTemplate:a,view:l}=t,p=o&&("valueExpression"in o&&o.valueExpression||"hasVisualVariables"in o&&o.hasVisualVariables()),m="feature-layer"!==e.source?.type&&"ogc-feature"!==e.source?.type;if(!r.is11xService&&p||n.filter||m||!o||"field"in o&&null!=o.field&&("string"!=typeof o.field||!e.getField(o.field))){const t=await ue(n);i=await q(e,t,a,r)}else{if(i={id:(c=e.write()).id,title:c.title,opacity:c.opacity,minScale:c.minScale,maxScale:c.maxScale,url:c.url,layerType:c.layerType,customParameters:c.customParameters,layerDefinition:c.layerDefinition},i.showLabels=a.showLabels&&e.labelsVisible,pe(i,e),i.layerDefinition?.drawingInfo?.renderer&&(delete i.layerDefinition.minScale,delete i.layerDefinition.maxScale,await ce(i.layerDefinition.drawingInfo.renderer,r),"visualVariables"in o&&o.visualVariables&&o.visualVariables[0])){const e=o.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=g(e,l.scale);i.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,i.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}const t=u(n);t&&(i.layerDefinition||(i.layerDefinition={}),i.layerDefinition.definitionExpression=i.layerDefinition.definitionExpression?`(${i.layerDefinition.definitionExpression}) AND (${t})`:t)}var c;return i}async function Q(e,t,r){return"binning"===e.featureReduction?.type||"cluster"===e.featureReduction?.type?re(e,t,r):(e.legendEnabled&&r.legendLayers.push({id:e.id}),q(e,await ue(t.layerView),t.printTemplate,r))}async function H(e,{printTemplate:t},r){return q(e,null,t,r)}function X(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const r={layerType:(i=e.write()).layerType,customParameters:i.customParameters};var i;if(r.bandIds=e.bandIds,r.compressionQuality=e.compressionQuality,r.format=e.format,r.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(r.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(r.renderingRule=e.renderingRule.toJSON()),e.renderer&&(r.layerDefinition=r.layerDefinition||{},r.layerDefinition.drawingInfo=r.layerDefinition.drawingInfo||{},r.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(r.renderingRule=t.toJSON())}return pe(r,e),r}async function Y(e,t,r){if("flow"===e.renderer?.type)return re(e,t,r);e.legendEnabled&&r.legendLayers.push({id:e.id});const i={bandIds:(o=e.write()||{}).bandIds,customParameters:o.customParameters,interpolation:o.interpolation,layerDefinition:o.layerDefinition};var o;return i.layerType="ArcGISImageServiceLayer",pe(i,e),i}async function Z(e,t,r){const i=t.printTemplate;if(r.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=l(e.url),t}{const o=[],s=t.layerView;s.allVisibleMapImages.forEach(((t,r)=>{const i={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?i.imageData=t.href.substr(22):i.url=t.href,o.push(i)}));const n=[...s.allVisiblePoints.items,...s.allVisiblePolylines.items,...s.allVisiblePolygons.items],a={id:e.id,...await q(null,n,i,r)};return o.push(a),o}}function ee(e,{view:t},r){let i;const o={id:e.id,subLayerIds:[]};let s=[];const n=t.scale,a=e=>{const t=0===n,r=0===e.minScale||n<=e.minScale,i=0===e.maxScale||n>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(a);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};s.unshift(r),o.subLayerIds.push(e.id)}};var l;return e.sublayers&&e.sublayers.forEach(a),s.length&&(s=s.map((({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r}))),i={layerType:(l=e.write()).layerType,customParameters:l.customParameters},i.layers=s,i.visibleLayers=e.capabilities?.exportMap?.supportsDynamicLayers?void 0:o.subLayerIds,pe(i,e),e.legendEnabled&&r.legendLayers.push(o)),i}async function te({layerView:e,printTemplate:t},r){const i=[],s=e.layer;if(o(s.featureCollections))for(const e of s.featureCollections){const o=await q(e,e.source,t,r);o&&i.push(...o.featureCollection.layers)}else if(o(s.sublayers))for(const e of s.sublayers){const o=await q(null,e.graphics,t,r);o&&i.push(...o.featureCollection.layers)}return{featureCollection:{layers:i}}}async function re(e,{printTemplate:t,view:r},i){const o={type:"image"},s={format:"png",ignoreBackground:!0,layers:[e],rotation:0},a=i.ssExtent||r.extent.clone();let l=96,m=!0,c=!0;if(t.exportOptions){const e=t.exportOptions;null!=e.dpi&&e.dpi>0&&(l=e.dpi),null!=e.width&&e.width>0&&(m=e.width%2==r.width%2),null!=e.height&&e.height>0&&(c=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===l&&(!m||!c)&&(s.area={x:0,y:0,width:r.width,height:r.height},m||(s.area.width-=1),c||(s.area.height-=1),!i.ssExtent)){const e=r.toMap(n(s.area.width,s.area.height));a.ymin=e.y,a.xmax=e.x,i.ssExtent=a}o.extent=a.clone()._normalize(!0).toJSON();const u=await r.takeScreenshot(s);return o.imageData=p(u.dataUrl)?.data,o}async function ie(e,{layerView:t,printTemplate:r},i){return e.legendEnabled&&i.legendLayers.push({id:e.id}),q(e,await ue(t),r,i)}function oe(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const r={layerType:(i=e.write()).layerType,customParameters:i.customParameters};var i;return pe(r,e),r}async function se(e,t,r){if(r.is11xService&&e.serviceUrl&&e.styleUrl){const t=h(e.styleUrl,e.apiKey),i=h(e.serviceUrl,e.apiKey);if(!t&&!i||"2.1.0"!==r.cimVersion){const r={type:"VectorTileLayer"};return r.styleUrl=l(e.styleUrl),r.token=t,i!==t&&(r.additionalTokens=[{url:e.serviceUrl,token:i}]),r}}return re(e,t,r)}function ne(e){const t=e.urlTemplate?.replace(/\${/g,"{"),r={type:"WebTiledLayer",urlTemplate:t,credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(r.subDomains=e.subDomains),r}function ae(e,t){let r;const i=[],o=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(o):e.name&&i.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(o),i.length&&(e.legendEnabled&&t.legendLayers.push({id:e.id,subLayerIds:i}),r={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:i,url:l(e.url),version:e.version}),r}function le(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:l(e.url)}}function pe(e,t){t.url&&(e.url=l(e.url||t.url),e.token=h(e.url,t.apiKey))}async function me(e,r){r.canvas||(r.canvas=document.createElement("canvas"));const i=1024;r.canvas.width=i,r.canvas.height=i;const o=r.canvas.getContext("2d");let n,l;if(e.path){const t=new Path2D(e.path);t.closePath(),o.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",o.fill(t);const r=function(e,t=15){const r=e.canvas.width,i=e.canvas.height,o=e.getImageData(0,0,r,i).data;let s,n,a,l,p,m;e:for(n=i;n--;)for(s=r;s--;)if(o[4*(r*n+s)+3]>t){m=n;break e}if(!m)return null;e:for(s=r;s--;)for(n=m+1;n--;)if(o[4*(r*n+s)+3]>t){p=s;break e}e:for(s=0;s<=p;++s)for(n=m+1;n--;)if(o[4*(r*n+s)+3]>t){a=s;break e}e:for(n=0;n<=m;++n)for(s=a;s<=p;++s)if(o[4*(r*n+s)+3]>t){l=n;break e}return{x:a,y:l,width:p-a,height:m-l}}(o);if(!r)return null;o.clearRect(0,0,i,i);const s=a(e.size)/Math.max(r.width,r.height);o.scale(s,s);const p=i/s,m=p/2-r.width/2-r.x,c=p/2-r.height/2-r.y;if(o.translate(m,c),Array.isArray(e.color)&&o.fill(t),e.outline?.width&&Array.isArray(e.outline.color)){const i=e.outline;o.lineWidth=a(i.width)/s,o.lineJoin="round",o.strokeStyle=`rgba(${i.color[0]},${i.color[1]},${i.color[2]},${i.color[3]/255})`,o.stroke(t),r.width+=o.lineWidth,r.height+=o.lineWidth}r.width*=s,r.height*=s;const u=o.getImageData(512-r.width/2,512-r.height/2,Math.ceil(r.width),Math.ceil(r.height));n=u.width,l=u.height,o.canvas.width=n,o.canvas.height=l,o.putImageData(u,0,0)}else{const r="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,i=(await t(r,{responseType:"image"})).data;n=a(e.width),l=a(e.height),o.canvas.width=n,o.canvas.height=l,o.drawImage(i,0,0,o.canvas.width,o.canvas.height)}return{type:"esriPMS",imageData:o.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:s(l),width:s(n),xoffset:e.xoffset,yoffset:e.yoffset}}async function ce(e,t){const r=e.type;if("simple"===r&&fe(e.symbol))e.symbol=await me(e.symbol,t);else if("uniqueValue"===r||"classBreaks"===r){fe(e.defaultSymbol)&&(e.defaultSymbol=await me(e.defaultSymbol,t));const i=e["uniqueValue"===r?"uniqueValueInfos":"classBreakInfos"];if(i)for(const e of i)fe(e.symbol)&&(e.symbol=await me(e.symbol,t))}}async function ue(e){return e.queryFeatures(e.createQuery()).then((e=>e.features))}function ye(e){return e.gpMetadata&&e.gpMetadata.executionType?A.fromJSON(e.gpMetadata.executionType):"sync"}function fe(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}export{J as execute,G as getGpPrintParams,_ as getGpServerUrl,z as getMode,N as printCacheMap};
