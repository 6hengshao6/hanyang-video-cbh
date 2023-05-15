/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import s from"../../core/Error.js";import{i as e}from"../../chunks/maybe.js";import{f as r}from"../../chunks/messages.js";import o from"../../renderers/support/AuthoringInfo.js";import t from"../../renderers/support/AuthoringInfoVisualVariable.js";import{r as i}from"../../chunks/numberUtils.js";import p from"../../renderers/visualVariables/OpacityVariable.js";import{v as n,b as a,o as m,f as l,n as u,q as c,a as j}from"../../chunks/utils17.js";import{createVisualVariables as y}from"./size.js";import{createRenderer as d}from"./type.js";import h from"../statistics/predominantCategories.js";import b from"../statistics/summaryStatistics.js";import{getPredominanceExpressions as k}from"../statistics/support/predominanceUtils.js";import{v as g}from"../../chunks/binningUtils.js";import{b as f,f as S,c as v,g as U}from"../../chunks/layerUtils2.js";import{cloneScheme as w,getSchemes as V}from"../symbology/predominance.js";import"../../core/lang.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/promiseUtils.js";import"../../chunks/locale.js";import"../../chunks/tslib.es6.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../chunks/get.js";import"../../chunks/ArrayPool.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/reader.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/enumeration.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../core/accessorSupport/decorators/cast.js";import"../../intl.js";import"../../chunks/number.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../chunks/writer.js";import"../../chunks/opacityUtils.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/scaleUtils.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../chunks/statsWorker.js";import"../../chunks/quantizationUtils.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../chunks/utils10.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/utils13.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../core/reactiveUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../renderers/support/jsonUtils.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../chunks/executeQuery.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils4.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils5.js";import"../../chunks/urlUtils2.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/FullTextSearch.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/executeQueryPBF.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/utils14.js";import"../../views/support/colorUtils.js";import"../../chunks/utils16.js";import"../../chunks/utils6.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/ageUnit.js";import"../statistics/summaryStatisticsForAge.js";import"../statistics/support/ageUtils.js";import"../heuristics/sizeRange.js";import"../heuristics/scaleRange.js";import"../symbology/size.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils18.js";import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import"../../renderers/PointCloudRGBRenderer.js";import"../../renderers/PointCloudStretchRenderer.js";import"../../renderers/PointCloudUniqueValueRenderer.js";import"../statistics/uniqueValues.js";import"../symbology/type.js";import"../../chunks/colors2.js";async function C(C){const I=await async function(r){if(!(r&&r.layer&&r.view&&r.fields&&r.fields.length))throw new s("predominance-renderer:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(r.fields.length<2)throw new s("predominance-renderer:invalid-parameters","Minimum 2 fields are required");if(r.fields.length>10)throw new s("predominance-renderer:invalid-parameters","Maximum 10 fields are supported");r.forBinning&&g(r,"predominance-renderer");const o={...r,layer:r.layer,fields:r.fields};o.symbolType=o.symbolType||"2d",o.defaultSymbolEnabled??(o.defaultSymbolEnabled=!0),o.includeOpacityVariable=r.includeOpacityVariable||!1,o.includeSizeVariable=r.includeSizeVariable||!1,o.sortBy??(o.sortBy="count");const t=r.forBinning?f:S,i=v(o.layer,t,r.forBinning);if(!i)throw new s("predominance-renderer:invalid-parameters","'layer' must be one of these types: "+U(S).join(", "));o.layer=i;const p=e(o.signal)?{signal:o.signal}:null;await i.load(p);const a=i.geometryType,m=o.symbolType.includes("3d");if(o.outlineOptimizationEnabled="polygon"===a&&o.outlineOptimizationEnabled,o.includeSizeVariable||(o.sizeOptimizationEnabled=("point"===a||"multipoint"===a||"polyline"===a)&&o.sizeOptimizationEnabled),"mesh"===a)o.symbolType="3d-volumetric",o.colorMixMode=o.colorMixMode||"replace",o.edgesType=o.edgesType||"none",o.sizeOptimizationEnabled=!1;else{if(m&&("polyline"===a||"polygon"===a))throw new s("predominance-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(o.symbolType.includes("3d-volumetric")&&(!o.view||"3d"!==o.view.type))throw new s("predominance-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const l=o.fields.map((s=>s.name)),u=n(i,l,"predominance-renderer:invalid-parameters");if(u)throw u;return o}(C),z=I.layer,M=await async function(s){let r=s.predominanceScheme,o=null,t=null;const i=await a(s.basemap,s.view);if(o=e(i.basemapId)?i.basemapId:null,t=e(i.basemapTheme)?i.basemapTheme:null,r)return{scheme:w(r),basemapId:o,basemapTheme:t};const p=V({basemap:o,basemapTheme:t,geometryType:s.geometryType,numColors:s.numColors,theme:s.theme,worldScale:s.worldScale,view:s.view});return p&&(r=p.primaryScheme,o=p.basemapId,t=p.basemapTheme),{scheme:r,basemapId:o,basemapTheme:t}}({basemap:I.basemap,geometryType:z.geometryType,numColors:I.fields.length,predominanceScheme:I.predominanceScheme,worldScale:!!I.symbolType?.includes("3d-volumetric"),view:I.view}),T=M.scheme,x=I.fields.map((s=>s.name)),E=k(z,x),D=async function(s,e,t,i){const p=await r("esri/smartMapping/t9n/smartMapping"),n=s.layer,a={layer:s.layer,view:s.view,signal:s.signal},[y,b]=await Promise.all([h({layer:n,fields:i,view:s.view,signal:s.signal}),s.outlineOptimizationEnabled?m(a).catch(l):null]);let k=y;y&&y.predominantCategoryInfos||(k={predominantCategoryInfos:i.map((s=>({value:s,count:0})))});const g=b&&b.opacity,f=await d({layer:n,basemap:s.basemap,valueExpression:e.valueExpression,valueExpressionTitle:p.predominantCategory,numTypes:-1,defaultSymbolEnabled:s.defaultSymbolEnabled,sortBy:s.sortBy,typeScheme:t,statistics:{uniqueValueInfos:k.predominantCategoryInfos},legendOptions:s.legendOptions,outlineOptimizationEnabled:!1,sizeOptimizationEnabled:(!s.includeSizeVariable||!s.sizeOptimizationEnabled)&&s.sizeOptimizationEnabled,symbolType:s.symbolType,colorMixMode:s.colorMixMode,edgesType:s.edgesType,view:s.view,signal:s.signal}),{renderer:S,basemapId:v,basemapTheme:U,uniqueValueInfos:w,excludedUniqueValueInfos:V}=f,C=S.uniqueValueInfos??[],I={};for(const e of s.fields){const s=n.getField(e.name);I[s.name]=e.label||s&&s.alias||e.name}if(C.forEach(((s,e)=>{const r=I[s.value];s.label=r,w[e].label=r})),s.includeSizeVariable){let e=n.geometryType,r=null;if("polygon"===e){const o=t.sizeScheme,i=o.background;S.backgroundFillSymbol=u(e,{type:s.symbolType,color:i.color,outline:c(i,e,g)}),r=o.marker.size,e="point"}else r="polyline"===e?t.width:t.size;const o=j(t.colors,C.length);C.forEach(((i,p)=>{const n=u(e,{type:s.symbolType,color:o[p],size:r,outline:c(t,e,g),meshInfo:{colorMixMode:s.colorMixMode,edgesType:s.edgesType}});i.symbol=n,w[p].symbol=n.clone()}))}return b&&b.visualVariables&&b.visualVariables.length&&(S.visualVariables=b.visualVariables.map((s=>s.clone()))),S.authoringInfo=new o({type:"predominance",fields:[...i]}),{renderer:S,predominantCategoryInfos:w,excludedCategoryInfos:V,predominanceScheme:t,basemapId:v,basemapTheme:U}}(I,E.predominantCategory,T,x),P=I.includeSizeVariable?async function(s,e,o){const t=await r("esri/smartMapping/t9n/smartMapping");return y({layer:s.layer,basemap:s.basemap,valueExpression:e.valueExpression,sqlExpression:e.statisticsQuery.sqlExpression,sqlWhere:e.statisticsQuery.sqlWhere,sizeScheme:o,sizeOptimizationEnabled:s.sizeOptimizationEnabled,worldScale:!!s.symbolType?.includes("3d-volumetric"),legendOptions:{title:t.sumOfCategories},view:s.view,signal:s.signal})}(I,E.size,T.sizeScheme):null,R=I.includeOpacityVariable?async function(s,e){const n=await r("esri/smartMapping/t9n/smartMapping"),a=await b({layer:s.layer,valueExpression:e.valueExpression,sqlExpression:e.statisticsQuery.sqlExpression,sqlWhere:e.statisticsQuery.sqlWhere,view:s.view,signal:s.signal}),{avg:m,stddev:l}=a,u=null==m||null==l,c=1/s.fields.length*100;let j=u?100:m+1.285*l;j>100&&(j=100);const y=i([c,j],{strictBounds:!0}),d=new p({valueExpression:e.valueExpression,stops:[{value:y[0],opacity:.15},{value:y[1],opacity:1}],legendOptions:{title:n.strengthOfPredominance}}),h=new t({type:"opacity",minSliderValue:a.min,maxSliderValue:a.max});return{visualVariable:d,statistics:a,defaultValuesUsed:u,authoringInfo:new o({visualVariables:[h]})}}(I,E.opacity):null,[O,L,q]=await Promise.all([D,P,R]),F=[],A=[];if(L&&(Array.prototype.push.apply(F,L.visualVariables.map((s=>s.clone()))),delete L.sizeScheme,O.size=L,Array.prototype.push.apply(A,L.authoringInfo.visualVariables.map((s=>s.clone())))),q&&(F.push(q.visualVariable.clone()),O.opacity=q,Array.prototype.push.apply(A,q.authoringInfo.visualVariables.map((s=>s.clone())))),F.length){const s=O.renderer.visualVariables||[];Array.prototype.push.apply(s,F),O.renderer.visualVariables=s,O.renderer.authoringInfo.visualVariables=A}return O}export{C as createRenderer};