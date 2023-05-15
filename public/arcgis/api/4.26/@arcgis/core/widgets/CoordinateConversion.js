/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{e}from"../core/promiseUtils.js";import{L as o}from"../chunks/Logger.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import{cast as i}from"../core/accessorSupport/decorators/cast.js";import"../chunks/typedArrayUtil.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import n from"./Widget.js";import a from"./CoordinateConversion/CoordinateConversionViewModel.js";import l from"./CoordinateConversion/support/Conversion.js";import{H as p}from"../chunks/Heading.js";import{a as c}from"../chunks/accessibleHandler.js";import{m as d}from"../chunks/messageBundle.js";import{t as m}from"../chunks/jsxFactory.js";import{s as u,i as h}from"../chunks/widgetUtils.js";import"../core/Error.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/ensureType.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../geometry/projection.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"./CoordinateConversion/support/Format.js";import"../geometry/coordinateFormatter.js";import"../chunks/number3.js";import"./support/GoTo.js";const _="esri-coordinate-conversion__popup",b="esri-coordinate-conversion__conversion-list",v="esri-coordinate-conversion__row",g="esri-coordinate-conversion__select-row",y="esri-coordinate-conversion__tools",j="esri-coordinate-conversion__mode-toggle",k="esri-coordinate-conversion__row-button",C="esri-coordinate-conversion__back-button",f="esri-coordinate-conversion__input-coordinate",w="esri-coordinate-conversion__input-group",x="esri-coordinate-conversion__heading",S="esri-coordinate-conversion__pattern-input",I="esri-coordinate-conversion__settings-group",M="esri-coordinate-conversion__preview-coordinate",P="esri-input",T="esri-widget__heading",V="esri-widget--button",D="esri-icon-map-pin",L="esri-select",F={settingsButton:!0,inputButton:!0,captureButton:!0,expandButton:!0};let E=class extends n{constructor(t,e){super(t,e),this._popupMessage=null,this._popupTimeoutId=void 0,this._clipboardPopupTimeoutId=void 0,this._coordinateInput=null,this._badInput=!1,this._goToEnabled=!1,this._conversionFormat=null,this._settingsFormat=null,this._previewConversion=null,this._expanded=!1,this._clipboardPopupVisible=!1,this._popupVisible=!1,this._settingsVisible=!1,this._inputVisible=!1,this.headingLevel=4,this.messages=null,this.messagesCommon=null,this.orientation="auto",this.viewModel=new a,this.visibleElements={...F}}get conversions(){return this.viewModel.conversions}set conversions(t){this.viewModel.conversions=t}get currentLocation(){return this.viewModel.currentLocation}set currentLocation(t){this.viewModel.currentLocation=t}get formats(){return this.viewModel.formats}set formats(t){this.viewModel.formats=t}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(t){this.viewModel.goToOverride=t}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}get mode(){return this.viewModel.mode}set mode(t){this.viewModel.mode=t}set multipleConversions(t){!1===t&&(this._expanded=!1,this.conversions.splice(1,this.conversions.length-1)),this._set("multipleConversions",t)}get multipleConversions(){const t=this._get("multipleConversions");return"boolean"!=typeof t||t}get locationSymbol(){return this.viewModel.locationSymbol}set locationSymbol(t){this.viewModel.locationSymbol=t}get storageEnabled(){return this.viewModel.storageEnabled}set storageEnabled(t){this.viewModel.storageEnabled=t}get storageType(){return this.viewModel.storageType}set storageType(t){this.viewModel.storageType=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}castVisibleElements(t){return{...F,...t}}reverseConvert(t,e){return this.viewModel.reverseConvert(t,e)}render(){const t=this.get("viewModel.state"),e="disabled"===t?m("div",{key:"esri-coordinate__no-basemap"},this.messages?.noBasemap):null,o=!e&&this._inputVisible?this._renderInputForm():null,s=!e&&this._settingsVisible?this._renderSettings():null,i=e||o||s?null:this._renderConversionsView(),r=this._popupVisible?this._renderPopup():null,n={"esri-coordinate-conversion--capture-mode":"capture"===this.mode,"esri-disabled":"loading"===t,"esri-coordinate-conversion--no-basemap":"disabled"===t};return m("div",{class:this.classes("esri-coordinate-conversion esri-widget",n)},r,e,i,s,o)}_addConversion(t){const e=t.target,o=e.options[e.options.selectedIndex]["data-format"],s=e["data-index"],i=new l({format:o});e.options.selectedIndex=0,s>=0&&this.conversions.removeAt(s),this.conversions.add(i,s)}_findSettingsFormat(){return this._settingsFormat||this.conversions.reduceRight(((t,e)=>{const o=e.format;return o?.hasDisplayProperties?o:t}),null)||this.formats.find((t=>t.hasDisplayProperties))}_hidePopup(){this._popupTimeoutId&&(clearTimeout(this._popupTimeoutId),this._popupTimeoutId=void 0),this._popupVisible=!1,this._popupMessage=null,this.scheduleRender()}_hideClipboardPopup(){this._clipboardPopupTimeoutId&&(clearTimeout(this._clipboardPopupTimeoutId),this._clipboardPopupTimeoutId=void 0),this._clipboardPopupVisible=!1,this.scheduleRender()}_onConvertComplete(){this._inputVisible=!1,this._coordinateInput.value=""}_onCopy(t){const e=t.currentTarget["data-conversion"].displayCoordinate;t.clipboardData?.setData("text/plain",e),this._showClipboardPopup(),t.preventDefault()}_processUserInput(t){const s=e(t),i=this.viewModel;if("Enter"!==s&&s)this._badInput&&(this._badInput=!1);else{const t=this._coordinateInput["data-format"],e=this._coordinateInput.value;this._reverseConvert(e,t).then((t=>{"capture"===this.mode?i.resume():this.mode="capture",this.currentLocation=t,i.setLocation(t),this._onConvertComplete()})).catch((t=>{o.getLogger(this.declaredClass).error(t),this._showPopup(this.messages?.invalidCoordinate),this._badInput=!0}))}}async _reverseConvert(t,e){const s=this.viewModel,i=await e.reverseConvert(t);return this._goToEnabled&&i&&s.goToLocation(i).catch((t=>{o.getLogger(this.declaredClass).warn(t),this._showPopup(this.messages?.locationOffBasemap)})),i}_setInputFormat(t){const e=t.target,o=e[e.options.selectedIndex]["data-format"];this._conversionFormat=o}_setPreviewConversion(){const t=this._findSettingsFormat(),e=this.viewModel;if(t){const o=this.conversions.find((e=>e.format===t));this._previewConversion=new l({format:t,position:{location:this.currentLocation,coordinate:o?.position?.coordinate}}),this._previewConversion.position?.coordinate||e.previewConversion(this._previewConversion)}}_setSettingsFormat(t){const e=t.target,o=e[e.options.selectedIndex]["data-format"];this._settingsFormat=o,this._setPreviewConversion()}_showClipboardPopup(){this._clipboardPopupVisible?clearTimeout(this._clipboardPopupTimeoutId):this._clipboardPopupVisible=!0,this.scheduleRender(),this._popupTimeoutId=setTimeout((()=>{this._popupTimeoutId=void 0,this._hideClipboardPopup()}),750)}_showPopup(t,e=2500){this._popupMessage=t,this._popupVisible?clearTimeout(this._popupTimeoutId):this._popupVisible=!0,this.scheduleRender(),this._popupTimeoutId=setTimeout((()=>{this._popupTimeoutId=void 0,this._hidePopup()}),e)}_toggleGoTo(){this._goToEnabled=!this._goToEnabled}_updateCurrentPattern(t){t.stopPropagation();const e=t.target,o=this._findSettingsFormat();o&&(o.currentPattern=e.value)}_renderConversion(t,e){const{messages:o}=this;if(!o)return m("li",null);const{format:s}=t,i=s?.label??"",r=`${this.id}__list-item-${e}`,n=`${i} ${o.conversionOutputSuffix}`,a=0===e,l=a||this._expanded,p=a?this._renderFirstConversion(t):this._renderTools(e,t,r),c=a&&!t.displayCoordinate?o.noLocation:t.displayCoordinate,d=m("div",{"aria-label":c,class:"esri-coordinate-conversion__display","data-conversion":t,role:"listitem",tabindex:"0",title:c??""},c),u=this._renderOptions(this.formats.filter((t=>t!==s)));return l?m("li",{"aria-label":n,class:v,id:r,key:t,role:"group",title:n,tabindex:"0"},m("select",{"aria-controls":r,"aria-label":o.selectFormat,class:this.classes(L,g),bind:this,"data-index":e,onchange:this._addConversion,title:o.selectFormat},m("option",{"aria-label":i,selected:!0,title:i},i.toUpperCase()),u),d,p):null}_renderCopyButton(t){const e=this._clipboardPopupVisible&&this._renderClipboardPopup(),{messagesCommon:o}=this;return o?m("li",{"aria-label":o.copy,bind:this,class:this.classes(V,k),"data-conversion":t,onclick:this._copyCoordinateOutput,onkeydown:this._copyCoordinateOutput,oncopy:this._onCopy,role:"button",tabindex:"0",title:o.copy},e,m("span",{"aria-hidden":"true",class:"esri-icon-duplicate"})):m("li",null)}_renderFirstConversion(t){const e=this.id,o={"esri-icon-down":!this._expanded,"esri-icon-up":this._expanded},{messages:s,messagesCommon:i,multipleConversions:r,visibleElements:n}=this;if(!i||!s)return m("ul",null);const a="live"===this.mode?s.captureMode:s.liveMode,l=this._expanded?i.collapse:i.expand,p=t.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(t):null,c=r&&n.expandButton&&m("li",{"aria-controls":`${e}__${b}`,"aria-label":l,bind:this,class:V,key:"esri-coordinate-conversion__expand-button",onclick:this._toggleExpand,onkeydown:this._toggleExpand,role:"button",tabindex:"0",title:l},m("span",{"aria-hidden":"true",class:this.classes(o)})),d=!r&&n.captureButton&&m("li",{"aria-label":a,bind:this,class:this.classes(V,j),key:"esri-coordinate-conversion__mode-toggle",onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:a},m("span",{"aria-hidden":"true",class:D}));return m("ul",{class:y},p,c,d)}_renderInputForm(){const t=this._conversionFormat||this.conversions.getItemAt(0).format,e=this.formats.findIndex((e=>e.name===t?.name)),o=this.id,s=`${o}__${f}`,i=`${o}__${f}__header`,r=this._renderOptions(this.formats,!0,e),n={"esri-coordinate-conversion__input-coordinate--rejected":this._badInput},{messages:a,messagesCommon:l,headingLevel:c}=this;return l&&a?m("div",{"aria-labelledby":i,class:"esri-coordinate-conversion__input-form",key:"esri-coordinate-conversion__input-form",role:"search"},m("div",{class:x},m("div",{"aria-label":l.back,bind:this,class:this.classes(V,C),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:l.back},this._renderBackIcon()),m(p,{level:c,class:T,id:i},a.inputCoordTitle)),m("div",{class:w},m("select",{"aria-controls":s,"aria-label":a.selectFormat,bind:this,class:this.classes(L,g),onchange:this._setInputFormat,title:a.selectFormat},r),m("input",{afterCreate:u,"aria-labelledby":i,"aria-required":"true",bind:this,class:this.classes(f,P,n),"data-format":t,"data-node-ref":"_coordinateInput",id:s,onkeydown:this._processUserInput,placeholder:a.inputCoordTitle,role:"textbox",spellcheck:!1,title:a.inputCoordTitle,type:"text"})),m("div",{class:w},m("label",{"aria-label":a.goTo},m("input",{bind:this,checked:this._goToEnabled,onclick:this._toggleGoTo,title:a.goTo,type:"checkbox"}),a.goTo),m("button",{"aria-label":a.convert,bind:this,class:this.classes("esri-coordinate-conversion__button","esri-button"),onclick:this._processUserInput,title:a.convert,type:"button"},m("span",{class:"esri-coordinate-conversion__convert-button-span"},a.convert)))):m("div",null)}_renderConversionsView(){const{messages:t}=this;if(!t)return m("div",null);const e=`${this.id}__${b}`,o=this._renderPrimaryTools(),s=this._renderOptions(this.formats),i=this.conversions.map(((t,e)=>this._renderConversion(t,e))).toArray(),r=this._expanded?m("div",{class:v},m("select",{"aria-controls":e,"aria-label":t.addConversion,bind:this,class:this.classes(L,"esri-coordinate-conversion__select-primary"),onchange:this._addConversion,title:t.addConversion},m("option",{disabled:!0,selected:!0,value:""},t.addConversion),s),o):null,n={"esri-coordinate-conversion__conversions-view--expanded":this._expanded,"esri-coordinate-conversion__conversions-view--expand-up":"expand-up"===this.orientation,"esri-coordinate-conversion__conversions-view--expand-down":"expand-down"===this.orientation};return m("div",{class:this.classes("esri-coordinate-conversion__conversions-view",n),key:"esri-coordinate-conversion__main-view"},m("ul",{"aria-expanded":this._expanded?"true":"false",class:b,id:e},i),r)}_renderOptions(t,e,o){const s=this.conversions.getItemAt(0),i=s.format?.name;return t.map(((t,r)=>{const n=!(e||!s)&&(i===t.name||this.conversions.map((t=>t.format?.name)).includes(t.name));return m("option",{"aria-label":t.label,"data-format":t,disabled:n,key:t.name??"unnamed-format",selected:r===o,value:t.label},t.label.toUpperCase())})).toArray()}_renderPopup(){return m("div",{class:_,role:"alert"},this._popupMessage)}_renderClipboardPopup(){const{messages:t}=this;return t?m("div",{class:this.classes(_,"esri-coordinate-conversion__clipboard-popup"),role:"alert"},t.copySuccessMessage):m("div",null)}_renderPrimaryTools(){const{messages:t,visibleElements:e}=this;if(!t)return m("ul",null);const o="live"===this.mode?t.captureMode:t.liveMode,s=e.inputButton&&m("li",{bind:this,class:V,onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:t.inputCoordTitle},m("span",{"aria-hidden":"true",class:"esri-icon-edit"})),i=e.captureButton&&m("li",{bind:this,class:this.classes(V,j),onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:o},m("span",{"aria-hidden":"true",class:D})),r=e.settingsButton&&m("li",{bind:this,class:V,onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:t.settingsTitle},m("span",{"aria-hidden":"true",class:"esri-icon-settings2"}));return m("ul",{class:y},s,i,r)}_renderSettings(){const t=this.id,e=`${t}__${S}`,o=`${t}__${S}__header`,s=`${t}__${M}`,i=this.formats.filter((t=>t.hasDisplayProperties)),r=this._findSettingsFormat(),n=r?i.indexOf(r):-1,a=this._renderOptions(i,!0,n),l=r?.get("currentPattern"),{messages:c,messagesCommon:d,headingLevel:u}=this;return d&&c?m("div",{"aria-labelledby":o,class:"esri-coordinate__settings",key:"esri-coordinate-conversion__settings"},m("div",{class:x},m("div",{bind:this,class:this.classes(V,C),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:d.back},this._renderBackIcon()),m(p,{level:u,class:T,id:o},c.settingsTitle)),m("div",{class:I},m("label",{for:e},c.changeCoordinateDisplay),m("select",{"aria-label":c.selectFormat,class:L,bind:this,onchange:this._setSettingsFormat,title:c.selectFormat},a),m("div",{class:"esri-coordinate-conversion__settings-group-horizontal"},m("input",{"aria-controls":s,bind:this,class:this.classes(S,P),id:e,oninput:this._updateCurrentPattern,spellcheck:!1,title:c.changeCoordinateDisplay,type:"text",value:l}),m("div",{"aria-controls":e,bind:this,class:V,onclick:this._setDefaultPattern,onkeydown:this._setDefaultPattern,role:"button",tabindex:"0",title:c.defaultPattern},m("span",{"aria-hidden":"true",class:"esri-icon-refresh"})))),m("div",{class:I},m("label",null,d.preview,m("div",{class:M,id:s,tabindex:"0"},this._previewConversion?.displayCoordinate)))):m("div",null)}_renderBackIcon(){return m("span",{"aria-hidden":"true",class:h(this.container)?"esri-icon-right-arrow":"esri-icon-left-arrow"})}_renderTools(t,e,o){const s=e.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(e):null,{messages:i}=this;return i?m("ul",{class:y,role:"listitem"},s,m("li",{"aria-controls":o,"aria-label":i.removeConversion,bind:this,class:this.classes(V,k),"data-index":t,key:`${o}__${V}`,onclick:this._removeConversion,onkeydown:this._removeConversion,tabindex:"0",role:"button",title:i.removeConversion},m("span",{"aria-hidden":"true",class:"esri-icon-close"}))):m("ul",null)}_copyCoordinateOutput(t){const e=t.target;if(!("createTextRange"in document.body)){const t=window.getSelection(),o=document.createRange();o.selectNodeContents(e),t?.removeAllRanges(),t?.addRange(o)}document.execCommand("copy")}_removeConversion(t){const e=t.currentTarget["data-index"];this.conversions.removeAt(e)}_setDefaultPattern(t){t.stopPropagation();const e=this._findSettingsFormat();e&&(e.currentPattern=e.get("defaultPattern"))}_toggleExpand(){this._expanded=!this._expanded}_toggleInputVisibility(){this._inputVisible=!this._inputVisible,this._popupVisible&&this._hidePopup(),this._inputVisible?this.viewModel.pause():this.viewModel.resume()}_toggleMode(){this.mode="live"===this.mode?"capture":"live"}_toggleSettingsVisibility(){this._settingsVisible=!this._settingsVisible,this._popupVisible&&this._hidePopup(),this._settingsVisible?(this._setPreviewConversion(),this.viewModel.pause()):this.viewModel.resume()}};t([s()],E.prototype,"conversions",null),t([s()],E.prototype,"currentLocation",null),t([s()],E.prototype,"formats",null),t([s()],E.prototype,"goToOverride",null),t([s()],E.prototype,"headingLevel",void 0),t([s()],E.prototype,"label",null),t([s(),d("esri/widgets/CoordinateConversion/t9n/CoordinateConversion")],E.prototype,"messages",void 0),t([s(),d("esri/t9n/common")],E.prototype,"messagesCommon",void 0),t([s()],E.prototype,"mode",null),t([s()],E.prototype,"orientation",void 0),t([s()],E.prototype,"multipleConversions",null),t([s()],E.prototype,"locationSymbol",null),t([s()],E.prototype,"storageEnabled",null),t([s()],E.prototype,"storageType",null),t([s()],E.prototype,"view",null),t([s({type:a})],E.prototype,"viewModel",void 0),t([s()],E.prototype,"visibleElements",void 0),t([i("visibleElements")],E.prototype,"castVisibleElements",null),t([c()],E.prototype,"_copyCoordinateOutput",null),t([c()],E.prototype,"_removeConversion",null),t([c()],E.prototype,"_setDefaultPattern",null),t([c()],E.prototype,"_toggleExpand",null),t([c()],E.prototype,"_toggleInputVisibility",null),t([c()],E.prototype,"_toggleMode",null),t([c()],E.prototype,"_toggleSettingsVisibility",null),E=t([r("esri.widgets.CoordinateConversion")],E);const U=E;export{U as default};