/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../request.js";import e from"../../core/Collection.js";import s from"../../core/Error.js";import{clone as r}from"../../core/lang.js";import i from"../../core/Loadable.js";import{u as p}from"../../chunks/maybe.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{f as n,c as a}from"../../chunks/number.js";import{a as u}from"../../chunks/locale.js";import c from"../../portal/Portal.js";import{e as j}from"../../chunks/submitJob.js";import"../../rest/geoprocessor/GPOptions.js";import"../../chunks/typedArrayUtil.js";import"../../geometry/support/normalizeUtils.js";import"../../layers/support/Field.js";import"../../layers/support/MapImage.js";import"../../config.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../rest/support/DataFile.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/LinearUnit.js";import"../../rest/support/ParameterValue.js";import"../../rest/support/RasterData.js";import"../../rest/support/JobInfo.js";import{execute as y}from"../../rest/print.js";import{f as h,b as d}from"../../chunks/layoutTemplate.js";import f from"../../rest/support/PrintParameters.js";import b from"../../rest/support/PrintTemplate.js";import k from"./CustomTemplate.js";import"../../core/promiseUtils.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../chunks/ArrayPool.js";import"../../core/Evented.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/Promise.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../rest/support/GPMessage.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/normalizeUtilsCommon.js";import"../../geometry/support/jsonUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/simplify.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../chunks/utils4.js";import"../../chunks/utils5.js";import"../../chunks/enumeration.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/floorFilterUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/sizeVariableUtils.js";import"../../portal/PortalItem.js";import"../../chunks/assets.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";const S=e.ofType(k);let v=class extends i{constructor(t){super(t),this._serviceTemplateCustomTextElements=null,this.allowedFormats="all",this.allowedLayouts="all",this.defaultTemplates=new S,this.extraParameters=null,this.includeDefaultTemplates=!0,this.error=null,this.portal=c.getDefault(),this.printServiceUrl=null,this.templatesInfo=null,this.updateDelay=1e3,this.view=null,this.templateCustomTextElements=null,this.print=this.print.bind(this)}destroy(){this.view=null}get effectivePrintServiceUrl(){return this.printServiceUrl??null}get effectiveTemplateCustomTextElements(){if(!this._serviceTemplateCustomTextElements)return{};const t=r(this._serviceTemplateCustomTextElements);return this.templateCustomTextElements&&Object.keys(this.templateCustomTextElements).forEach((o=>{const e=t[o];if(e){const t=this.templateCustomTextElements?.[o];e.forEach((o=>{const[e]=Object.entries(o)[0];t?.forEach((t=>{const[s,r]=Object.entries(t)[0];e===s&&(o[e]=r)}))}))}})),Object.freeze(t)}get state(){return"loading"===this.loadStatus?"initializing":this.error||"failed"===this.loadStatus?"error":this.get("view.ready")&&"loaded"===this.loadStatus?"ready":"disabled"}async load(t){return this.addResolvingPromise(this._loadResources(t).catch((t=>this.error=t))),this}async print(t){const{view:o,extraParameters:e,updateDelay:r}=this;if(!o)throw new s("print:view-required","view is not set");!function(t){if(t.layoutOptions||(t.layoutOptions={}),t.layoutOptions.customTextElements||(t.layoutOptions.customTextElements=[]),!t.layoutOptions.customTextElements.find((t=>"date"in t))){const{customTextElements:o}=t.layoutOptions;let e=n(Date.now(),a("short-date"));"ar"===u()&&(e="‏"+e),o.push({date:e})}}(t);const i=new f({view:o,template:t,extraParameters:e,updateDelay:r});try{return await y(this.effectivePrintServiceUrl,i)}catch(t){throw new s("print:export-error","An error occurred while exporting the web map.",{error:t})}}toPrintTemplate({attributionEnabled:t,author:o,copyright:e,customTextElements:s,dpi:r,forceFeatureAttributes:i,format:p,height:l,layout:m,legendEnabled:n,northArrowEnabled:a,scale:u,scaleEnabled:c,title:j,width:y}){const h=new b({attributionVisible:t,forceFeatureAttributes:i,format:p,layout:m,layoutOptions:{authorText:o||"",copyrightText:e||"",customTextElements:s,titleText:j||""},outScale:u??0,scalePreserved:c});y&&(h.exportOptions.width=y),l&&(h.exportOptions.height=l),r&&(h.exportOptions.dpi=r),!n&&h.layoutOptions&&(h.layoutOptions.legendLayers=[]);const d=this.templateToNorthArrowInfo[m];return d&&d.visible!==a&&h.layoutOptions&&(h.layoutOptions.elementOverrides={[d.name]:{visible:a}}),h}async _loadResources(t){let o=[];const{printServiceUrl:e}=this;if(!e){if(this.destroyed)return;const{portal:e}=this;try{await e.load(t)}catch(t){throw new s("print:could-not-load-portal","Cannot load print resource information from portal",{url:this.effectivePrintServiceUrl})}const r=e.helperServices?.printTask;r&&(this._set("effectivePrintServiceUrl",r.url),o=(r?.templates??[]).map((t=>k.fromJSON(t))))}o.length>0&&this.defaultTemplates.addMany(o);const r=this.effectivePrintServiceUrl?.toLowerCase().split("/");if(-1===(r?.indexOf("gpserver")??-1))throw new s("print:invalid-print-service-url","Can't fetch print templates information from provided URL",{url:this.effectivePrintServiceUrl});this._processLayoutTemplateInfos(await this._getLayoutTemplatesInfo(t)),await this._loadServiceDescription(t)}async _loadServiceDescription(t){const o=await this._getPrintTemplatesFromService(t);this._set("templatesInfo",o)}async _getLayoutTemplatesInfo(t){let o=[];const e=async o=>{const e=this.effectivePrintServiceUrl.replace(/(\/GPServer\/).+/i,`$1${encodeURI(o)}`);return(await j(e,null,null,p(t))).results[0].value};try{o=await e("Get Layout Templates Info Task")}catch(t){}if(!o||o.length<1)try{o=await e("Get Layout Templates Info")}catch(t){}return o}_processLayoutTemplateInfos(t){const o={},e={};t.forEach((({layoutTemplate:t,layoutOptions:{customTextElements:s,mapSurroundInfos:r}})=>{const i=h(t);o[i]=s,r&&(e[i]=r.find((t=>"CIMMarkerNorthArrow"===t.type)))})),this.templateCustomTextElements=Object.freeze(o),this.templateToNorthArrowInfo=e}async _getPrintTemplatesFromService(t){return o(this.effectivePrintServiceUrl,{...t,query:{f:"json"},timeout:6e4}).then((t=>{const o=t&&t.data,e=o&&o.parameters;let s=null,r=null;return e.forEach((t=>{let o=t.choiceList&&t.choiceList.slice(),e=-1;o&&o.length&&t.defaultValue&&(e=o.indexOf(t.defaultValue)),e>-1&&(o.splice(e,1),o.unshift(t.defaultValue));const i=(t,o)=>{const e="all"===o?t:t.filter((t=>o.includes(t)));return 0===e.length?t:e};if("Format"===t.name){const e=i(o.map(d),this.allowedFormats),r=d(t.defaultValue);s={defaultValue:e.includes(r)?r:e[0],choiceList:e}}else if("Layout_Template"===t.name){o=o.filter((t=>"map_only"!==t.toLowerCase()));let e,s=-1;o.some(((t,o)=>{const e=t.toLowerCase();return e.includes("letter")&&e.includes("landscape")?(s=o,!0):!(!e.includes("a4")||!e.includes("landscape")||(s=o,1))})),s&&(e=o[s],o.splice(s,1),o.unshift(e));const p=i(o.map(h),this.allowedLayouts),l=h(t.defaultValue);r={defaultValue:p.includes(l)?l:p[0],choiceList:p}}})),this.error=null,{format:s,layout:r}})).catch((t=>{throw new s("print:unavailable-service-info","Can't fetch templates info from service",{error:t})}))}};t([l()],v.prototype,"_serviceTemplateCustomTextElements",void 0),t([l()],v.prototype,"allowedFormats",void 0),t([l()],v.prototype,"allowedLayouts",void 0),t([l({type:S})],v.prototype,"defaultTemplates",void 0),t([l()],v.prototype,"extraParameters",void 0),t([l()],v.prototype,"includeDefaultTemplates",void 0),t([l({readOnly:!0})],v.prototype,"effectivePrintServiceUrl",null),t([l()],v.prototype,"effectiveTemplateCustomTextElements",null),t([l()],v.prototype,"error",void 0),t([l({type:c})],v.prototype,"portal",void 0),t([l()],v.prototype,"printServiceUrl",void 0),t([l({readOnly:!0})],v.prototype,"state",null),t([l({readOnly:!0})],v.prototype,"templatesInfo",void 0),t([l()],v.prototype,"updateDelay",void 0),t([l()],v.prototype,"view",void 0),t([l()],v.prototype,"templateCustomTextElements",void 0),t([l()],v.prototype,"templateToNorthArrowInfo",void 0),v=t([m("esri.widgets.Print.PrintViewModel")],v);const g=v;export{g as default};