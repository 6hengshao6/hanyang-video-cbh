/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{watch as t,on as s,initial as i}from"../core/reactiveUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{cast as o}from"../core/accessorSupport/decorators/cast.js";import"../chunks/typedArrayUtil.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import l from"./Widget.js";import n from"./Legend/LegendViewModel.js";import{substitute as p}from"../intl.js";import{a as c}from"../chunks/screenUtils.js";import"../chunks/ensureType.js";import{i as m}from"../chunks/renderUtils.js";import{d}from"../chunks/utils6.js";import{renderColorRampPreviewHTML as y,r as h}from"../symbols/support/symbolUtils.js";import{c as u}from"../chunks/projector.js";import{i as v}from"../chunks/widgetUtils.js";import{t as b}from"../chunks/jsxFactory.js";import{H as g,i as f}from"../chunks/Heading.js";import{a as j}from"../chunks/accessibleHandler.js";import{m as _}from"../chunks/messageBundle.js";import{a as L}from"../chunks/number.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/handleUtils.js";import"../chunks/watch.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/tracking.js";import"../chunks/metadata.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/dom.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../chunks/jsonMap.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"./Legend/support/ActiveLayerInfo.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/EffectView.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/jsonUtils.js";import"../chunks/ExportImageParameters.js";import"../core/HandleOwner.js";import"../chunks/WatchUpdatingTracking.js";import"../core/sql.js";import"../chunks/commonProperties2.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/floorFilterUtils.js";import"../chunks/sublayerUtils.js";import"../chunks/pixelRangeUtils.js";import"../renderers/support/jsonUtils.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/compilerUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../chunks/rendererConversion.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"../chunks/previewUtils.js";import"../chunks/utils16.js";import"../chunks/numberUtils.js";import"../chunks/themeUtils.js";import"./smartMapping/support/utils.js";import"../chunks/asyncUtils.js";import"../chunks/ItemCache.js";import"../chunks/colorUtils2.js";import"../chunks/mat2df32.js";import"../chunks/mat2d.js";import"../chunks/previewSymbol3D.js";import"../chunks/webStyleSymbolUtils.js";import"../chunks/devEnvironmentUtils.js";const w="esri-legend--card",k="esri-legend",C={activated:`${w}__carousel-indicator--activated`,base:w,stacked:`${k}--stacked`,carouselTitle:`${w}__carousel-title`,indicator:`${w}__carousel-indicator`,intervalSeparator:`${w}__interval-separator`,imageryLayerStretchedImage:`${w}__imagery-layer-image--stretched`,imageLabel:`${w}__image-label`,layerCaption:`${w}__layer-caption`,labelElement:`${w}__label-element`,layerRow:`${w}__layer-row`,labelCell:`${w}__label-cell`,message:`${w}__message`,rampLabel:`${w}__ramp-label`,section:`${w}__section`,relationshipSection:`${w}__relationship-section`,serviceCaptionText:`${w}__service-caption-text`,serviceContent:`${w}__service-content`,service:`${w}__service`,groupLayer:`${w}__group-layer`,groupLayerChild:`${w}__group-layer-child`,symbol:`${w}__symbol`,sizeRampRow:`${w}__size-ramp-row`,symbolRow:`${w}__symbol-row`,symbolCell:`${w}__symbol-cell`,indicatorContainer:`${w}__carousel-indicator-container`,intervalSeparatorsContainer:`${w}__interval-separators-container`,relationshipLabelContainer:`${w}__relationship-label-container`,labelContainer:`${w}__label-container`,serviceCaptionContainer:`${w}__service-caption-container`,symbolContainer:`${w}__symbol-container`,sizeRampContainer:`${w}__size-ramp-container`,sizeRampPreview:`${w}__size-ramp-preview`,pieChartRampPreview:`${w}__pie-chart-ramp-preview`,rampContainer:`${k}__ramps`,sizeRampHorizontal:`${k}__size-ramp--horizontal`,rampLabelsContainer:`${k}__ramp-labels`,layerInfo:`${k}__layer-cell ${k}__layer-cell--info`,univariateAboveAndBelowColorRamp:"esri-univariate-above-and-below-ramp__color--card",hidden:"esri-hidden"},S=u(),$=10,I=20,R=10,x=20,z={univariateAboveAndBelowSymbol:"esri-univariate-above-and-below-ramp__symbol",colorRamp:"esri-legend__color-ramp"};function A(e="vertical"){const t="stroke:rgb(200, 200, 200);stroke-width:1";return"vertical"===e?b("svg",{height:"4",width:"10"},b("line",{x1:"0",y1:"2",x2:"10",y2:"2",style:t})):b("svg",{height:"10",width:"10"},b("line",{x1:"5",y1:"0",x2:"5",y2:"10",style:t}))}function U(e,t="vertical"){const s=document.createElement("div");return s.style.height=`${I}px`,s.className=z.univariateAboveAndBelowSymbol,null!=e&&(s.style.opacity=e.toString()),S.append(s,A.bind(null,t)),s}function E(e,t,s="vertical",i){e.infos.forEach(((e,r)=>{if(i&&2===r)e.preview=U(t,s);else{const t=c(e.size)+("horizontal"===s?x:R),i=e.preview,r="div"===i?.tagName.toLowerCase(),o=r?i:document.createElement("div");o.className=z.univariateAboveAndBelowSymbol,"horizontal"===s?o.style.width=`${t}px`:o.style.height=`${t}px`,!r&&i&&o.appendChild(i),e.preview=o}}))}function M(e,t="classic"){const s=e.infos;return"classic"===t?(c(s[0].size)+R)/2:(c(s[0].size)-c(s[s.length-1].size))/2}function V(e,t){if(!e)return null;const s=e.infos.map((e=>e.color)),i=y("full"===t.type?s:"above"===t.type?s.slice(0,3):s.slice(2,5),{width:t.width,height:t.height,align:t.rampAlignment,effectList:t.effectList});return i.className=z.colorRamp,null!=t.opacity&&(i.style.opacity=t.opacity.toString()),i}function N(e,t,s,i="vertical"){let r=0;const o=e.infos,a=Math.floor(o.length/2),l="full"===t||"above"===t?0:a,n="full"===t||"below"===t?o.length-1:a;for(let e=l;e<=n;e++)r+=s&&e===a?"horizontal"===i?$:I:c(o[e].size)+("horizontal"===i?x:R);return Math.round(r)}function F(e,t,s,i="vertical"){const r=N(e,t,s,i),o=e.infos,a=Math.floor(o.length/2),l="full"===t||"above"===t?0:a,n="full"===t||"below"===t?o.length-1:a,p="full"===t?o[l].size+o[n].size:"above"===t?o[l].size:o[n].size,m=s?"vertical"===i?I:$:0,d="vertical"===i?R*("full"===t?2:1):x*("full"===t?2:1);return Math.round(r-(c(p)/2+m/2+d/2))}function D(e,t,s="vertical"){const i=e.infos;let r=i.find((({type:e})=>"size-ramp"===e)),o=i.find((({type:e})=>"color-ramp"===e));return r&&(r={...r},r.infos=[...r.infos],E(r,t,s,!0)),o&&(o={...o},o.infos=[...o.infos]),"horizontal"===s&&(r?.infos.reverse(),o?.infos.reverse()),{sizeRampElement:r,colorRampElement:o}}function P(e,t="vertical"){const s=e.infos;let i=s.find((({type:e})=>"size-ramp"===e)),r=s.find((({type:e})=>"color-ramp"===e));return i&&(i={...i},i.infos=[...i.infos],E(i,null,t,!1)),r&&(r={...r},r.infos=[...r.infos]),"horizontal"===t&&(i?.infos.reverse(),r?.infos.reverse()),{sizeRampElement:i,colorRampElement:r}}function T(e){e.appendChild(this)}function B(e,t,s){if(!t)return;if("string"==typeof t||"number"==typeof t)return t;if("value"in t||"unit"in t)return p(e.dotValue,t);if("colorName"in t&&"bandName"in t)return e[t.colorName]+": "+(e[t.bandName]||t.bandName);if("showCount"in t)return t.showCount?e.clusterCountTitle:void 0;let i=null;return function(e,t){return t}(0,s)?i=t.ratioPercentTotal?"showRatioPercentTotal":t.ratioPercent?"showRatioPercent":t.ratio?"showRatio":t.normField?"showNormField":t.field?"showField":null:O(0,s)&&(i=t.normField?"showNormField":t.normByPct?"showNormPct":t.field?"showField":null),i?p("showField"===i?"{field}":e[i],{field:t.field,normField:t.normField}):void 0}function O(e,t){return!t}function H(e,t){return!!(t&&"Stretched"===t&&e.version>=10.3&&"esri.layers.ImageryLayer"===e.declaredClass)}var q;!function(e){e.Auto="auto",e.Stack="stack",e.SideBySide="side-by-side"}(q||(q={}));const W=window.devicePixelRatio;let G=class extends l{constructor(e,t){super(e,t),this._hasIndicators=!1,this._selectedSectionName=null,this._sectionNames=[],this._sectionMap=new Map,this.activeLayerInfos=null,this.headingLevel=3,this.layout=q.Stack,this.messages=null,this.messagesCommon=null,this.type="card",this.view=null}initialize(){this.addHandles(t((()=>this.activeLayerInfos),(e=>{this.removeAllHandles(),this._watchForSectionChanges(e)})))}render(){const{view:e}=this;this._hasIndicators=this.layout===q.Auto&&e&&e.container.clientWidth<=768||this.layout===q.Stack;const t=this.activeLayerInfos,s=t&&t.toArray().map((e=>this._renderLegendForLayer(e))).filter((e=>!!e));this._hasIndicators?this._selectedSectionName&&this._sectionNames.includes(this._selectedSectionName)||(this._selectedSectionName=this._sectionNames&&this._sectionNames[0]):this._selectedSectionName=null;const i=this._sectionNames.length,r=this._sectionNames.map(((e,t)=>{const s=p(this.messagesCommon.pagination.pageText,{index:t+1,total:i});return b("div",{key:e,role:"tab",id:e,"aria-label":s,"aria-controls":`${e}-panel`,"aria-selected":(this._selectedSectionName===e).toString(),tabIndex:this._selectedSectionName===e?0:-1,title:s,onclick:this._selectSection,onkeydown:this._focusSection,bind:this,class:this.classes(C.indicator,{[C.activated]:this._selectedSectionName===e}),"data-section-name":e})})),o=this._hasIndicators&&i>1?b("div",{class:C.indicatorContainer,key:"carousel-navigation",role:"tablist"},r):null,a=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):s&&s.length?s:null,l={[C.stacked]:this._hasIndicators};return b("div",{class:this.classes(C.base,l)},a||b("div",{class:C.message},this.messages.noLegend),o)}_selectSection(e){const t=e.target.getAttribute("data-section-name");t&&(this._selectedSectionName=t)}_focusSection(e){switch(e.key){case"ArrowLeft":case"ArrowRight":this._switchSectionOnArrowPress(e);break;case"Enter":case" ":this._selectSection(e)}}_switchSectionOnArrowPress(e){const t=e.key,s="ArrowLeft"===t?-1:1,i=e.target.getAttribute("data-section-name"),r=this._sectionNames.indexOf(i),o=this._sectionNames;let a=null;-1!==r&&(o[r+s]?a=document.getElementById(o[r+s]):"ArrowLeft"===t?a=document.getElementById(o[o.length-1]):"ArrowRight"===t&&(a=document.getElementById(o[0])),a?.focus())}_watchForSectionChanges(e){if(this._generateSectionNames(),e){e.forEach((e=>{const s=`activeLayerInfo-${e.layer.uid}-version-change`;this.removeHandles(s),this._watchForSectionChanges(e.children),this.addHandles(t((()=>e.version),(()=>this._generateSectionNames())),s)}));const s="activeLayerInfos-collection-change";this.removeHandles(s),this.addHandles(e.on("change",(()=>this._watchForSectionChanges(e))),s)}}_generateSectionNames(){this._sectionNames.length=0,this._selectedSectionName=null,this.activeLayerInfos&&this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo,this)}_getSectionName(e,t,s){return`${this.id}${e.uid}-type-${t.type}-${s}`}_generateSectionNamesForActiveLayerInfo(e){e.children.forEach(this._generateSectionNamesForActiveLayerInfo,this),e.legendElements&&e.legendElements.forEach(((t,s)=>{this._sectionNames.push(this._getSectionName(e.layer,t,s))}))}_renderLegendForLayer(e){if(!e.ready)return null;if(e.children.length){const t=e.children.map((e=>this._renderLegendForLayer(e))).toArray();return b("div",{key:e.layer.uid,class:this.classes(C.service,C.groupLayer)},b("div",{class:C.serviceCaptionContainer},e.title),t)}{const t=e.legendElements;if(t&&!t.length)return null;const s=t.some((e=>"relationship-ramp"===e.type)),i=t.map(((t,i)=>this._renderLegendForElement(t,e,i,s))).filter((e=>!!e));if(!i.length)return null;const r={[C.groupLayerChild]:!!e.parent};return b("div",{key:e.layer.uid,class:this.classes(C.service,r)},b("div",{class:C.serviceCaptionContainer},b("div",{class:C.serviceCaptionText},e.title)),b("div",{class:C.serviceContent},i))}}_renderLegendForElement(e,t,s,i=!1,r=!1){const o="color-ramp"===e.type,a="opacity-ramp"===e.type,l="size-ramp"===e.type,n=t.layer;let p=null;if("string"==typeof e.title)p=e.title;else if(e.title){const t=e.title,s=B(this.messages,t,o||a);p=t.title?`${t.title} (${s})`:s}const c=this._getSectionName(n,e,s),m=this._hasIndicators&&!r?b("div",null,b(g,{level:this.headingLevel,class:C.carouselTitle},t.title),b(g,{level:f(this.headingLevel),class:C.layerCaption},p)):p?b(g,{level:this.headingLevel,class:C.layerCaption},p):null,d=t.effectList;let y=null;if("symbol-table"===e.type){const s=e.infos.map(((s,i)=>this._renderLegendForElementInfo(s,t,e.legendType,i))).filter((e=>!!e));if(s.length){const e=s[0].properties.classes&&s[0].properties.classes[C.symbolRow],t={[C.labelContainer]:!e&&!i,[C.relationshipLabelContainer]:i};y=b("div",{class:this.classes(t)},s)}}else"color-ramp"===e.type||"opacity-ramp"===e.type||"heatmap-ramp"===e.type?y=this._renderLegendForRamp(e,n.opacity,d):l?y=this._renderSizeRamp(e,n.opacity):"pie-chart-ramp"===e.type?y=this._renderPieChartRamp(e):"relationship-ramp"===e.type?y=h(e,this.id,n.opacity,d):"univariate-above-and-below-ramp"===e.type?y=this._renderUnivariateAboveAndBelowRamp(e,n.opacity,d):"univariate-color-size-ramp"===e.type&&(y=this._renderUnivariateColorSizeRamp(e,n.opacity,d));if(!y)return null;const u=b("div",{key:c,class:C.section,id:`${c}-panel`,role:"tabpanel","aria-labelledby":c,tabIndex:0},[m,y]);return r||this._sectionMap.set(c,u),u}_renderPieChartRamp(e){return b("div",{class:C.pieChartRampPreview,bind:e.preview,afterCreate:T})}_renderUnivariateAboveAndBelowRamp(e,t,s){const{sizeRampElement:i,colorRampElement:r}=D(e,t,"horizontal");if(!i)return null;const o=N(i,"full",!0,"horizontal"),a=F(i,"above",!0,"horizontal"),l=F(i,"below",!0,"horizontal"),n=V(r,{width:a,height:12,rampAlignment:"horizontal",opacity:t,type:"above",effectList:s}),p=V(r,{width:l,height:12,rampAlignment:"horizontal",opacity:t,type:"below",effectList:s}),c=M(i,"card"),m=i.infos.map((e=>e.label)),d=m.length-1,y=m.map(((e,t)=>0===t||t===d?b("div",{key:t},e):null)),h={marginTop:"3px",display:"flex"};v(this.container)?h.marginRight=`${c}px`:h.marginLeft=`${c}px`;const u={width:`${o}px`,display:"flex",flexDirection:"row",justifyContent:"space-between"};return b("div",{class:C.layerRow,key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},b("div",{class:this.classes(C.symbolContainer,C.sizeRampHorizontal),styles:{display:"flex",flexDirection:"row"}},i.infos.map(((e,t)=>b("div",{key:t,class:C.symbol,bind:e.preview,afterCreate:T})))),n?b("div",{class:C.univariateAboveAndBelowColorRamp,styles:h,key:"color-ramp-preview"},b("div",{bind:n,afterCreate:T}),b("div",{bind:p,afterCreate:T})):null,b("div",{class:C.layerInfo},b("div",{class:C.rampLabelsContainer,styles:u},y)))}_renderUnivariateColorSizeRamp(e,t,s){const{sizeRampElement:i,colorRampElement:r}=P(e,"horizontal");if(!i)return null;const o=N(i,"full",!1,"horizontal"),a=V(r,{width:F(i,"full",!1,"horizontal"),height:12,rampAlignment:"horizontal",opacity:t,type:"full",effectList:s}),l=M(i,"card"),n=i.infos.length-1,p=i.infos.map(((e,t)=>0===t||t===n?b("div",{key:t},e.label):null)),c={marginTop:"3px",display:"flex"};v(this.container)?c.marginRight=`${l}px`:c.marginLeft=`${l}px`;const m={width:`${o}px`,display:"flex",flexDirection:"row",justifyContent:"space-between"};return b("div",{class:C.layerRow,key:"size-ramp-preview",styles:{display:"flex",flexDirection:"column"}},b("div",{class:this.classes(C.symbolContainer,C.sizeRampHorizontal),styles:{display:"flex",flexDirection:"row"}},i.infos.map(((e,t)=>b("div",{key:t,class:C.symbol,bind:e.preview,afterCreate:T})))),b("div",{class:C.univariateAboveAndBelowColorRamp,styles:c,key:"color-ramp-preview"},b("div",{bind:a,afterCreate:T})),b("div",{class:C.layerInfo},b("div",{class:C.rampLabelsContainer,styles:m},p)))}_renderLegendForElementInfo(e,t,s,i){const r=t.layer;if(e.type)return this._renderLegendForElement(e,t,i,!1,!0);const o=H(r,s);if(e.preview){if(!e.symbol||!e.symbol.type.includes("simple-fill")){if(!e.label)return b("div",{key:i,bind:e.preview,afterCreate:T});const t={[C.symbolCell]:this._hasIndicators};return b("div",{key:i,class:this.classes(C.layerRow,{[C.symbolRow]:this._hasIndicators})},b("div",{class:this.classes(t),bind:e.preview,afterCreate:T}),b("div",{class:this.classes(C.imageLabel,{[C.labelCell]:this._hasIndicators})},B(this.messages,e.label,!1)||""))}let s=255,o=255,a=255,l=0,n=255,p=255,c=255,m=0;const y=e.symbol.color&&e.symbol.color.a,h=e.symbol.outline&&e.symbol.outline.color&&e.symbol.outline.color.a;y&&(s=e.symbol.color.r,o=e.symbol.color.g,a=e.symbol.color.b,l=e.symbol.color.a*r.opacity),h&&(n=e.symbol.outline.color.r,p=e.symbol.outline.color.g,c=e.symbol.outline.color.b,m=e.symbol.outline.color.a*r.opacity);const u=e.symbol.color?.isBright??!0,v=u?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)",g={background:y?`rgba(${s}, ${o}, ${a}, ${l})`:"none",color:u?"black":"white",textShadow:`-1px -1px 0 ${v},\n                                              1px -1px 0 ${v},\n                                              -1px 1px 0 ${v},\n                                              1px 1px 0 ${v}`,border:h?`1px solid rgba(${n}, ${p}, ${c}, ${m})`:"none",filter:d(t.effectList)??void 0};return b("div",{key:i,class:C.layerRow},b("div",{class:C.labelElement,styles:g}," ",e.label," "))}if(e.src){const t=this._renderImage(e,r,o);return b("div",{key:i,class:C.layerRow},t,b("div",{class:C.imageLabel},e.label||""))}}_renderImage(e,t,s){const{label:i,src:r,opacity:o}=e,a={[C.imageryLayerStretchedImage]:s,[C.symbol]:!s},l={opacity:`${null!=o?o:t.opacity}`};return b("img",{alt:B(this.messages,i,!1),src:r,border:0,width:e.width,height:e.height,class:this.classes(a),styles:l})}_renderSizeRampLines(e){const t=e.infos,s=t[0],i=t[t.length-1],r=s.symbol,o=this._hasIndicators,a=c(s.size+s.outlineSize)*W,l=c(i.size+i.outlineSize)*W,n=o?a:a+50*W,p=o?a/2+50*W:a,m=function(e){if(e){if(e.type.includes("3d")){const t=e.symbolLayers&&e.symbolLayers.length;if(!t)return;const s=e.symbolLayers.getItemAt(t-1).get("resource.primitive");return"triangle"===s||"cone"===s||"tetrahedron"===s}return"triangle"===e.style}}(r),d=function(e){if(e){if(e.type.includes("3d")){const t=e.symbolLayers&&e.symbolLayers.length;if(!t)return;const s=e.symbolLayers.getItemAt(t-1),i=s.resource&&s.resource.primitive;return"circle"===i||"cross"===i||"kite"===i||"sphere"===i||"cube"===i||"diamond"===i}{const t=e.style;return"circle"===t||"diamond"===t||"cross"===t}}}(r),y=document.createElement("canvas");y.width=n,y.height=p,y.style.width=y.width/W+"px",y.style.height=y.height/W+"px";const h=y.getContext("2d");if(o){h.beginPath();const e=0,t=0,s=n/2-l/2,i=p;h.moveTo(e,t),h.lineTo(s,i);const r=n,o=0,a=n/2+l/2,c=p;h.moveTo(r,o),h.lineTo(a,c)}else{h.beginPath();const e=0,t=p/2-l/2,s=n,i=0;h.moveTo(e,t),h.lineTo(s,i);const r=0,o=p/2+l/2,a=n,c=p;h.moveTo(r,o),h.lineTo(a,c)}return h.strokeStyle="#ddd",h.stroke(),b("div",{bind:y,afterCreate:T,styles:o?{display:"flex",marginTop:`-${m?0:d?a/2:0}px`,marginBottom:`-${m?l:d?l/2:0}px`}:{display:"flex",marginRight:`-${m?0:d?a/2:0}px`,marginLeft:`-${m?0:d?l/2:0}px`}})}_renderSizeRamp(e,t){const s=e.infos,i=s[0].label,r=s[s.length-1].label;let o=s[0].preview,a=s[s.length-1].preview;const l=this._hasIndicators,n={"flex-direction":l?"column":"row-reverse"};o&&(o=o.cloneNode(!0),o.style.display="flex"),a&&(a=a.cloneNode(!0),a.style.display="flex");const p={opacity:null!=t?`${t}`:""};return b("div",{class:this.classes(C.layerRow,{[C.sizeRampRow]:l})},b("div",{class:C.rampLabel},l?i:r),b("div",{class:C.sizeRampContainer,styles:n},b("div",{bind:o,afterCreate:T,class:C.sizeRampPreview,styles:p}),this._renderSizeRampLines(e),b("div",{bind:a,afterCreate:T,class:C.sizeRampContainer,styles:p})),b("div",{class:C.rampLabel},l?r:i))}_renderLegendForRamp(e,t,s){const i=e.infos,r="heatmap-ramp"===e.type,o=i.length-1,a=o>2&&!r?25*o:100,l=a+20,n=i.slice(0).reverse();n.forEach(((e,t)=>{e.offset=r?e.ratio:t/o}));const p=n.length-1,c=n.length%2!=0&&n[n.length/2|0],y=c&&b("div",{class:C.intervalSeparatorsContainer},b("div",{class:C.intervalSeparator},"|"),b("div",{class:C.rampLabel},c.label)),h=i[i.length-1].label,u=i[0].label,v=[[{shape:{type:"path",path:"M0 12.5 L10 0 L10 25 Z"},fill:n[0].color,stroke:{width:0}},{shape:{type:"rect",x:10,y:0,width:a,height:25},fill:{type:"linear",x1:10,y1:0,x2:a+10,y2:0,colors:n},stroke:{width:0}},{shape:{type:"path",path:`M${a+10} 0 L${l} 12.5 L${a+10} 25 Z`},fill:n[p].color,stroke:{width:0}}]],g=m(v,l,25),{messages:f}=this,j={filter:d(s)??void 0,opacity:null==t?void 0:`${t}`};return b("div",{class:C.layerRow,styles:{justifyContent:"center"}},b("div",{class:C.rampLabel},r?f[h]:h),b("div",{class:C.symbolContainer},b("div",{styles:j},g),y),b("div",{class:C.rampLabel},r?f[u]:u))}};e([r()],G.prototype,"activeLayerInfos",void 0),e([r()],G.prototype,"headingLevel",void 0),e([r()],G.prototype,"layout",void 0),e([r(),_("esri/widgets/Legend/t9n/Legend")],G.prototype,"messages",void 0),e([r(),_("esri/t9n/common")],G.prototype,"messagesCommon",void 0),e([r({readOnly:!0})],G.prototype,"type",void 0),e([r()],G.prototype,"view",void 0),e([j()],G.prototype,"_selectSection",null),G=e([a("esri.widgets.Legend.styles.Card")],G);const Q=G,Z="esri-legend",J={service:`${Z}__service`,label:`${Z}__service-label`,layer:`${Z}__layer`,groupLayer:`${Z}__group-layer`,groupLayerChild:`${Z}__group-layer-child`,layerTable:`${Z}__layer-table`,layerTableSizeRamp:`${Z}__layer-table--size-ramp`,layerChildTable:`${Z}__layer-child-table`,layerCaption:`${Z}__layer-caption`,layerBody:`${Z}__layer-body`,layerRow:`${Z}__layer-row`,layerCell:`${Z}__layer-cell`,layerInfo:`${Z}__layer-cell ${Z}__layer-cell--info`,imageryLayerStretchedImage:`${Z}__imagery-layer-image--stretched`,imageryLayerCellStretched:`${Z}__imagery-layer-cell--stretched`,imageryLayerInfoStretched:`${Z}__imagery-layer-info--stretched`,symbolContainer:`${Z}__layer-cell esri-legend__layer-cell--symbols`,symbol:`${Z}__symbol`,rampContainer:`${Z}__ramps`,sizeRamp:`${Z}__size-ramp`,colorRamp:`${Z}__color-ramp`,opacityRamp:`${Z}__opacity-ramp`,borderlessRamp:`${Z}__borderless-ramp`,rampTick:`${Z}__ramp-tick`,rampFirstTick:`${Z}__ramp-tick-first`,rampLastTick:`${Z}__ramp-tick-last`,rampLabelsContainer:`${Z}__ramp-labels`,rampLabel:`${Z}__ramp-label`,univariateAboveAndBelowSymbol:"esri-univariate-above-and-below-ramp__symbol",univariateAboveAndBelowLabel:"esri-univariate-above-and-below-ramp__label",message:`${Z}__message`,header:"esri-widget__heading",hidden:"esri-hidden"},K=`${Z}__`,X={display:"flex",alignItems:"flex-start"},Y={marginLeft:"3px"},ee={display:"table-cell",verticalAlign:"middle"};let te=class extends l{constructor(e,t){super(e,t),this.activeLayerInfos=null,this.headingLevel=3,this.messages=null,this.type="classic"}render(){const e=this.activeLayerInfos,t=e&&e.toArray().map((e=>this._renderLegendForLayer(e))).filter((e=>!!e));return b("div",null,t&&t.length?t:b("div",{class:J.message},this.messages.noLegend))}_renderLegendForLayer(e){if(!e.ready)return null;const t=!!e.children.length,s=`${K}${e.layer.uid}-version-${e.version}`,i=e.title?g({level:this.headingLevel,class:this.classes(J.header,J.label)},e.title):null;if(t){const t=e.children.map((e=>this._renderLegendForLayer(e))).toArray();return b("div",{key:s,class:this.classes(J.service,J.groupLayer)},i,t)}{const t=e.legendElements;if(t&&!t.length)return null;const r=t.map((t=>this._renderLegendForElement(t,e.layer,e.effectList))).filter((e=>!!e));if(!r.length)return null;const o={[J.groupLayerChild]:!!e.parent};return b("div",{key:s,class:this.classes(J.service,o),tabIndex:0},i,b("div",{class:J.layer},r))}}_renderLegendForElement(e,t,s,i){const r="color-ramp"===e.type,o="opacity-ramp"===e.type,a="size-ramp"===e.type;let l=null;if("symbol-table"===e.type||a){const i=e.infos.map((i=>this._renderLegendForElementInfo(i,t,s,a,e.legendType))).filter((e=>!!e));i.length&&(l=b("div",{class:J.layerBody},i))}else"color-ramp"===e.type||"opacity-ramp"===e.type||"heatmap-ramp"===e.type||"stretch-ramp"===e.type?l=this._renderLegendForRamp(e,t.opacity):"relationship-ramp"===e.type?l=h(e,this.id,t.opacity,s):"pie-chart-ramp"===e.type?l=this._renderPieChartRamp(e):"univariate-above-and-below-ramp"===e.type?l=this._renderUnivariateAboveAndBelowRamp(e,t.opacity,s):"univariate-color-size-ramp"===e.type&&(l=this._renderUnivariateColorSizeRamp(e,t.opacity,s));if(!l)return null;const n=e.title;let p=null;if("string"==typeof n)p=n;else if(n){const e=B(this.messages,n,r||o);p=O(0,r||o)&&n.title?`${n.title} (${e})`:e}const c=i?J.layerChildTable:J.layerTable,m=p?b("div",{class:J.layerCaption},p):null,d={[J.layerTableSizeRamp]:a||!i};return b("div",{class:this.classes(c,d)},m,l)}_renderPieChartRamp(e){return b("div",{bind:e.preview,afterCreate:T})}_renderUnivariateAboveAndBelowRamp(e,t,s){const{sizeRampElement:i,colorRampElement:r}=D(e,t);if(!i)return null;const o=F(i,"above",!0),a=F(i,"below",!0),l=V(r,{width:12,height:o,rampAlignment:"vertical",opacity:t,type:"above",effectList:s}),n=V(r,{width:12,height:a,rampAlignment:"vertical",opacity:t,type:"below",effectList:s}),p=M(i),c=i.infos.map((e=>e.label)),m=c.map(((e,t)=>{const s=2===t;return 0===t?b("div",{key:t,class:e?l?J.univariateAboveAndBelowLabel:J.rampLabel:void 0},e):s?b("div",null):null})),d=c.length-1,y=Math.floor(c.length/2),h=c.map(((e,t)=>t===y||t===d?b("div",{key:t,class:e?l?J.univariateAboveAndBelowLabel:J.rampLabel:void 0},e):null)),u={display:"table-cell",verticalAlign:"middle"},v={marginTop:`${p}px`},g={height:`${o}px`},f={height:`${a}px`};return b("div",{key:"univariate-above-and-below-ramp-preview",styles:X},b("div",{class:J.layerBody},i.infos.map(((e,t)=>b("div",{class:this.classes(J.layerRow,J.sizeRamp)},b("div",{class:J.symbol,styles:u,bind:e.preview,afterCreate:T}),l||t%2!=0?null:b("div",{class:J.layerInfo},c[t]))))),l?b("div",{styles:v,key:"color-ramp-preview"},b("div",{styles:Y},b("div",{styles:ee},b("div",{class:J.rampContainer,bind:l,afterCreate:T})),b("div",{styles:ee},b("div",{class:J.rampLabelsContainer,styles:g},m))),b("div",{styles:Y},b("div",{styles:ee},b("div",{class:J.rampContainer,bind:n,afterCreate:T})),b("div",{styles:ee},b("div",{class:J.rampLabelsContainer,styles:f},h)))):null)}_renderUnivariateColorSizeRamp(e,t,s){const{sizeRampElement:i,colorRampElement:r}=P(e);if(!i)return null;const o=M(i),a=F(i,"full",!1),l=V(r,{width:12,height:a,rampAlignment:"vertical",opacity:t,type:"full",effectList:s}),n=i.infos.length-1,p=i.infos.map(((e,t)=>0===t||t===n?b("div",{key:t,class:e.label?r?J.univariateAboveAndBelowLabel:J.rampLabel:void 0},e.label):null)),c={display:"table-cell",verticalAlign:"middle"},m={marginTop:`${o}px`},d={height:`${a}px`};return b("div",{key:"univariate-above-and-below-ramp-preview",styles:X},b("div",{class:J.layerBody},i.infos.map((e=>b("div",{class:this.classes(J.layerRow,J.sizeRamp)},b("div",{class:J.symbol,styles:c,bind:e.preview,afterCreate:T}))))),b("div",{styles:m,key:"color-ramp-preview"},b("div",{styles:Y},b("div",{styles:ee},b("div",{class:J.rampContainer,bind:l,afterCreate:T})),b("div",{styles:ee},b("div",{class:J.rampLabelsContainer,styles:d},p)))))}_renderLegendForRamp(e,t){const s=e.infos,i="opacity-ramp"===e.type,r="heatmap-ramp"===e.type,o="stretch-ramp"===e.type,a=e.preview,l=i?J.opacityRamp:"";a.className=`${J.colorRamp} ${l}`,null!=t&&(a.style.opacity=t.toString());const n=s.map((e=>b("div",{class:e.label?J.rampLabel:void 0},r?this.messages[e.label]||e.label:o?this._getStretchStopLabel(e):e.label))),p={height:a.style.height};return b("div",{class:J.layerRow},b("div",{class:J.symbolContainer,styles:{width:"24px"}},b("div",{class:J.rampContainer,bind:a,afterCreate:T})),b("div",{class:J.layerInfo},b("div",{class:J.rampLabelsContainer,styles:p},n)))}_getStretchStopLabel(e){return e.label?this.messages[e.label]+": "+("string"==typeof e.value?e.value:L(e.value,{style:"decimal",notation:e.value.toString().includes("e")?"scientific":"standard"})):""}_renderLegendForElementInfo(e,t,s,i,r){if(e.type)return this._renderLegendForElement(e,t,s,!0);let o=null;const a=H(t,r);if(e.preview?o=b("div",{class:J.symbol,bind:e.preview,afterCreate:T}):e.src&&(o=this._renderImage(e,t,a)),!o)return null;const l={[J.imageryLayerInfoStretched]:a},n={[J.imageryLayerInfoStretched]:a,[J.sizeRamp]:!a&&i};return b("div",{class:J.layerRow},b("div",{class:this.classes(J.symbolContainer,n)},o),b("div",{class:this.classes(J.layerInfo,l)},B(this.messages,e.label,!1)||""))}_renderImage(e,t,s){const{label:i,src:r,opacity:o}=e,a={[J.imageryLayerStretchedImage]:s,[J.symbol]:!s},l={opacity:`${null!=o?o:t.opacity}`};return b("img",{alt:B(this.messages,i,!1),src:r,border:0,width:e.width,height:e.height,class:this.classes(a),styles:l})}};e([r()],te.prototype,"activeLayerInfos",void 0),e([r()],te.prototype,"headingLevel",void 0),e([r(),_("esri/widgets/Legend/t9n/Legend")],te.prototype,"messages",void 0),e([r({readOnly:!0})],te.prototype,"type",void 0),te=e([a("esri.widgets.Legend.styles.Classic")],te);const se=te;let ie=class extends l{constructor(e,t){super(e,t),this.headingLevel=3,this.iconClass="esri-icon-layer-list",this.messages=null,this.style=new se,this.viewModel=new n}initialize(){this.addHandles([s((()=>this.view),"resize",(()=>this.scheduleRender())),s((()=>this.activeLayerInfos),"change",(()=>this._refreshActiveLayerInfos(this.activeLayerInfos))),t((()=>this.headingLevel),(e=>{const{style:t}=this;t&&(t.headingLevel=e)})),t((()=>this.style),((e,t)=>{t&&e!==t&&t.destroy(),e&&(e.activeLayerInfos=this.activeLayerInfos,"card"===e.type&&(e.view=this.view),e.headingLevel=this.headingLevel)}),i)])}get activeLayerInfos(){return this.viewModel.activeLayerInfos}set activeLayerInfos(e){this.viewModel.activeLayerInfos=e}get basemapLegendVisible(){return this.viewModel.basemapLegendVisible}set basemapLegendVisible(e){this.viewModel.basemapLegendVisible=e}get groundLegendVisible(){return this.viewModel.groundLegendVisible}set groundLegendVisible(e){this.viewModel.groundLegendVisible=e}get hideLayersNotInCurrentView(){return this.viewModel.hideLayersNotInCurrentView}set hideLayersNotInCurrentView(e){this.viewModel.hideLayersNotInCurrentView=e}get keepCacheOnDestroy(){return this.viewModel.keepCacheOnDestroy}set keepCacheOnDestroy(e){this.viewModel.keepCacheOnDestroy=e}get respectLayerVisibility(){return this.viewModel.respectLayerVisibility}set respectLayerVisibility(e){this.viewModel.respectLayerVisibility=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get layerInfos(){return this.viewModel.layerInfos}set layerInfos(e){this.viewModel.layerInfos=e}castStyle(e){if(e instanceof Q||e instanceof se)return e;if("string"==typeof e)return"card"===e?new Q:new se;if(e&&"string"==typeof e.type){const t={...e};return delete t.type,new("card"===e.type?Q:se)(t)}return new se}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){return b("div",{class:this.classes("esri-legend","esri-widget",this.style instanceof se?"esri-widget--panel":null)},this.style.render())}_refreshActiveLayerInfos(e){this.removeAllHandles(),e.forEach((e=>this._renderOnActiveLayerInfoChange(e))),this.scheduleRender()}_renderOnActiveLayerInfoChange(e){const r=t((()=>e.version),(()=>this.scheduleRender()));this.addHandles(r,`version_${e.layer.uid}`);const o=s((()=>e.children),"change",(()=>e.children.forEach((e=>this._renderOnActiveLayerInfoChange(e)))),i);this.addHandles(o,`children_${e.layer.uid}`),e.children.forEach((e=>this._renderOnActiveLayerInfoChange(e)))}};e([r()],ie.prototype,"activeLayerInfos",null),e([r()],ie.prototype,"basemapLegendVisible",null),e([r()],ie.prototype,"groundLegendVisible",null),e([r()],ie.prototype,"headingLevel",void 0),e([r()],ie.prototype,"hideLayersNotInCurrentView",null),e([r()],ie.prototype,"keepCacheOnDestroy",null),e([r()],ie.prototype,"respectLayerVisibility",null),e([r()],ie.prototype,"iconClass",void 0),e([r()],ie.prototype,"label",null),e([r()],ie.prototype,"layerInfos",null),e([r(),_("esri/widgets/Legend/t9n/Legend")],ie.prototype,"messages",void 0),e([r()],ie.prototype,"style",void 0),e([o("style")],ie.prototype,"castStyle",null),e([r()],ie.prototype,"view",null),e([r()],ie.prototype,"viewModel",void 0),ie=e([a("esri.widgets.Legend")],ie);const re=ie;export{re as default};