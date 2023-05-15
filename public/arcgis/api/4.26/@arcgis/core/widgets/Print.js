/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Collection.js";import{o as s,e as i}from"../core/promiseUtils.js";import{clone as o}from"../core/lang.js";import{L as n}from"../chunks/Logger.js";import{watch as a,initial as r}from"../core/reactiveUtils.js";import{addProxy as l,hasSameOrigin as p}from"../core/urlUtils.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{g as m}from"../chunks/utils4.js";import u from"./Widget.js";import h from"../core/Accessor.js";import b from"../core/Handles.js";import"../chunks/typedArrayUtil.js";import y from"./Print/PrintViewModel.js";import g from"./Print/TemplateOptions.js";import{H as _}from"../chunks/Heading.js";import{P as f}from"../chunks/Popover.js";import{m as j,l as v}from"../chunks/widgetUtils.js";import{m as T}from"../chunks/messageBundle.js";import{t as k}from"../chunks/jsxFactory.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/tracking.js";import"../core/Error.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../kernel.js";import"../request.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../core/Loadable.js";import"../portal/Portal.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../chunks/submitJob.js";import"../rest/geoprocessor/GPOptions.js";import"../rest/support/JobInfo.js";import"../chunks/enumeration.js";import"../geometry/support/normalizeUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../chunks/zmUtils.js";import"../geometry/Polyline.js";import"../chunks/normalizeUtilsCommon.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"../chunks/simplify.js";import"../geometry.js";import"../chunks/typeUtils.js";import"../chunks/utils5.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../layers/support/MapImage.js";import"../rest/support/DataFile.js";import"../rest/support/FeatureSet.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../rest/support/LinearUnit.js";import"../rest/support/ParameterValue.js";import"../rest/support/RasterData.js";import"../rest/support/GPMessage.js";import"../rest/print.js";import"../chunks/floorFilterUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/sizeVariableUtils.js";import"../chunks/layoutTemplate.js";import"../rest/support/PrintTemplate.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../rest/support/PrintParameters.js";import"./Print/CustomTemplate.js";let w=class extends h{constructor(t){super(t),this._handles=new b,this.state="pending",this.url=""}initialize(){this._handles.add([a((()=>[this.extension,this.name]),(()=>this._setFormattedFileName()),r)])}destroy(){this._handles.destroy()}_setFormattedFileName(){if(!this.name||!this.extension)return;let t=this.name+"."+this.extension;this.count&&(t=this.name+"("+this.count+")."+this.extension),this.formattedName=t}};t([c()],w.prototype,"count",void 0),t([c()],w.prototype,"error",void 0),t([c()],w.prototype,"extension",void 0),t([c()],w.prototype,"formattedName",void 0),t([c()],w.prototype,"name",void 0),t([c()],w.prototype,"state",void 0),t([c()],w.prototype,"url",void 0),w=t([d("esri.widgets.print.FileLink")],w);const C=w,x=e.ofType(C),O="MAP_ONLY";var S;!function(t){t.layout="layoutTab",t.mapOnly="mapOnlyTab"}(S||(S={}));const L="esri-print",I=`${L}__advanced-options-button`,M={base:L,headerTitle:`${L}__header-title`,inputText:`${L}__input-text`,layoutTabList:`${L}__layout-tab-list`,layoutTab:`${L}__layout-tab`,layoutSection:`${L}__layout-section`,mapOnlySection:`${L}__map-only-section`,scaleInput:`${L}__scale-input`,templateList:`${L}__template-list`,templateListScroller:`${L}__template-list-scroller`,templateListFooter:`${L}__template-list-footer`,loader:`${L}__loader`,advancedOptionsButton:I,advancedOptionsButtonContainer:`${I}-container`,advancedOptionsButtonTitle:`${I}-title`,advancedOptionsButtonIconOpened:`${I}-icon--opened`,advancedOptionsButtonIconClosed:`${I}-icon--closed`,advancedOptionsButtonIconClosed_RTL:`${I}-icon--closed-rtl`,refreshButton:`${L}__refresh-button`,swapButton:`${L}__swap-button`,linkButton:`${L}__link-button`,printButton:`${L}__export-button`,templateButton:`${L}__template-button`,formSectionContainer:`${L}__form-section-container`,advancedOptionsSection:`${L}__advanced-options-section`,advancedOptionsContainer:`${L}__advanced-options-container`,authorInfoContainer:`${L}__author-info-container`,copyrightInfoContainer:`${L}__copyright-info-container`,exportedFilesContainer:`${L}__export-panel-container`,exportedFilesTitle:`${L}__export-title`,exportedFile:`${L}__exported-file`,exportedFileLink:"esri-widget__anchor esri-print__exported-file-link",exportedFileLinkTitle:`${L}__exported-file-link-title`,heightContainer:`${L}__height-container`,legendInfoContainer:`${L}__legend-info-container`,printWidgetContainer:`${L}__container`,panelContainer:`${L}__panel-container`,scaleInfoContainer:`${L}__scale-info-container`,scaleInputContainer:`${L}__scale-input-container`,sizeContainer:`${L}__size-container`,widthContainer:`${L}__width-container`,widget:"esri-widget",panel:"esri-widget--panel",widgetButton:"esri-widget--button",button:"esri-button",buttonSecondary:"esri-button--secondary",buttonTertiary:"esri-button--tertiary",select:"esri-select",input:"esri-input",disabled:"esri-disabled",anchorDisabled:"esri-widget__anchor--disabled",buttonDisabled:"esri-button--disabled",panelError:`${L}__panel--error`,exportedFileError:`${L}__exported-file--error`,hide:"esri-hidden",rotate:"esri-rotating",anchor:"esri-widget__anchor",menu:"esri-menu",menuList:"esri-menu__list",menuItem:"esri-menu__list-item",menuItemFocus:"esri-menu__list-item--focus",menuHeader:"esri-menu__header",iconCheckMark:"esri-icon-check-mark",iconDownload:"esri-icon-download",iconLaunchLink:"esri-icon-launch-link-external",iconError:"esri-icon-error",iconPrinter:"esri-icon-printer",iconRightTriangleArrow:"esri-icon-right-triangle-arrow",iconLeftTriangleArrow:"esri-icon-left-triangle-arrow",iconDownArrow:"esri-icon-down-arrow",iconRefresh:"esri-icon-refresh",iconSpinner:"esri-icon-loading-indicator",iconSwap:"esri-icon-swap",iconLinked:"esri-icon-link-horizontal",iconUnlinked:"esri-icon-unlocked-link-horizontal",widgetIcon:"esri-icon-printer"},F="User sets an invalid layout, resetting it to the default valid one...",D="User sets an invalid format, resetting it to the default valid one...";function P(t){return t?.toUpperCase()===O}let $=class extends u{constructor(t,e){super(t,e),this._activeTabFocusRequested=!1,this._advancedOptionsVisibleForLayout=!1,this._advancedOptionsVisibleForMapOnly=!1,this._awaitingServerResponse=!1,this._exportedFileNameMap={},this._focusedTemplateIndex=0,this._layoutTabSelected=!0,this._pendingExportScroll=!1,this._rootNode=null,this._selectTemplateNode=null,this._templateListPopover=new f({owner:this,placement:"top",offset:[0,-100],anchorElement:()=>this._selectTemplateNode,renderContentFunction:this.renderTemplateList}),this.exportedLinks=new x,this.headingLevel=3,this.iconClass=M.widgetIcon,this.templateOptions=new g,this.viewModel=new y,this.handleTemplateListCreation=t=>t.focus(),this.handleTemplateChildBlur=t=>{const e=t.relatedTarget?.closest(`.${M.templateList}`);e||this.handleCloseTemplateSelection()},this.handleCloseTemplateSelection=()=>{this._focusedTemplateIndex=0,this._templateListPopover.open=!1,this._selectTemplateNode?.focus()},this.handleSelectTemplateClick=()=>{this._focusedTemplateIndex=0,this._templateListPopover.open=!0},this.handleTemplateListClick=t=>{const e=t.target;this.applyTemplate(e["data-template"])},this.handleTemplateListKeyDown=t=>{if(this._focusedTemplateIndex){if(j(t.key))return this.applyTemplate(this.viewModel.defaultTemplates.getItemAt(this._focusedTemplateIndex)),void t.preventDefault();if("ArrowDown"===t.key||"ArrowUp"===t.key){const{defaultTemplates:e}=this.viewModel,s="ArrowDown"===t.key?1:-1,i=(this._focusedTemplateIndex+s)%e.length;this._focusedTemplateIndex=i<0?e.length-1:i;const o=t.currentTarget;v(o.querySelectorAll(`.${M.menuItem}`)[this._focusedTemplateIndex],o.parentElement),t.preventDefault()}"Escape"===t.key&&this.handleCloseTemplateSelection()}},this._removeLink=t=>{const e=t.currentTarget["data-item"];e&&"error"===e.state&&this.exportedLinks.remove(e)},this._handleLinkClick=t=>{const e=t.currentTarget,{href:s}=e,i=m(this.viewModel.effectivePrintServiceUrl);if(!i)return;if(!t.isTrusted)return void t.stopPropagation();t.preventDefault();const o=new URL(s);o.searchParams.set("token",i),e.href=o.href,e.click(),e.href=s},this._focusOnTabChange=this._focusOnTabChange.bind(this)}initialize(){this.addHandles([a((()=>this.viewModel?.templatesInfo),(t=>{const{format:e,layout:s}=this.templateOptions;if(t){const i=s===t.layout.defaultValue||P(s)||t.layout.choiceList&&s&&t.layout.choiceList.includes(s),o=e===t.format.defaultValue||t.format.choiceList&&e&&t.format.choiceList.includes(e);i||(s&&n.getLogger(this.declaredClass).warn(F),this.templateOptions.layout=t.layout.defaultValue),o||(e&&n.getLogger(this.declaredClass).warn(D),this.templateOptions.format=t.format.defaultValue),P(s)&&(this._layoutTabSelected=!1)}}),r),a((()=>this.templateOptions?.format),(t=>{const{viewModel:{templatesInfo:e}}=this;if(e&&t){let s=!1;e.format.choiceList&&e.format.choiceList.forEach((e=>{e.toUpperCase()===t.toUpperCase()&&(this.templateOptions.format=e,s=!0)})),s||(this.templateOptions.format=e.format.defaultValue,n.getLogger(this.declaredClass).warn(D)),this.scheduleRender()}}),r),a((()=>this.templateOptions?.layout),(t=>{const{viewModel:{templatesInfo:e}}=this;if(e&&t){this._layoutTabSelected=!P(t);let s=!this._layoutTabSelected;s||e.layout.choiceList&&e.layout.choiceList.forEach((e=>{e.toUpperCase()===t.toUpperCase()&&(this.templateOptions.layout=e,s=!0)})),s||(this.templateOptions.layout=e.layout.defaultValue,n.getLogger(this.declaredClass).warn(F));const i=this.viewModel.effectiveTemplateCustomTextElements[this.templateOptions.layout];this.templateOptions.customTextElements=i?o(i):null,this.scheduleRender()}}),r),a((()=>this.templateOptions?.dpi),(t=>{t<=0?this.templateOptions.dpi=1:this.scheduleRender()}),r),a((()=>this.viewModel?.view?.scale),(t=>{const{scale:e,scaleEnabled:s}=this.templateOptions;s&&e||(this.templateOptions.scale=t)}),r)]);const{height:t,width:e}=this.templateOptions;this.templateOptions.width=e||800,this.templateOptions.height=t||1100;const s=setTimeout((()=>{this._awaitingServerResponse=!0,this.scheduleRender()}),500);this.viewModel.load().then((()=>clearTimeout(s)))}get allowedFormats(){return this.viewModel.allowedFormats}set allowedFormats(t){this.viewModel.allowedFormats=t}get allowedLayouts(){return this.viewModel.allowedLayouts}set allowedLayouts(t){this.viewModel.allowedLayouts=t}get error(){return this.viewModel.error}get extraParameters(){return this.viewModel.extraParameters}set extraParameters(t){this.viewModel.extraParameters=t}get includeDefaultTemplates(){return this.viewModel.includeDefaultTemplates}set includeDefaultTemplates(t){this.viewModel.includeDefaultTemplates=t}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}get portal(){return this.viewModel.portal}set portal(t){this.viewModel.portal=t}get printServiceUrl(){return this.viewModel.printServiceUrl}set printServiceUrl(t){this.viewModel.printServiceUrl=t}get templateCustomTextElements(){return this.viewModel.templateCustomTextElements}set templateCustomTextElements(t){this.viewModel.templateCustomTextElements=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}render(){const{attributionEnabled:t,author:e,copyright:s,dpi:i,format:o,height:n,layout:a,legendEnabled:r,northArrowEnabled:l,scaleEnabled:p,scale:c,width:d}=this.templateOptions,m="ready"!==this.get("viewModel.state"),u=this.renderTitleOrFileNameSection(),{includeDefaultTemplates:h,messages:b,viewModel:y}=this,g=this.get("viewModel.templatesInfo.format.choiceList")||[],f=g.length>0?g.map((t=>k("option",{key:t,selected:t===o,value:t},t.toUpperCase()))):k("option",{key:"format-default-option"},b.formatDefaultOption),j=k("div",{class:M.formSectionContainer},k("label",null,b.fileFormatTitle,k("select",{class:M.select,onchange:this._updateFromOption,"data-target-property":"format",bind:this},f))),v=this.get("viewModel.templatesInfo.layout.choiceList")||[],T=v.length>0?v.map((t=>{const e=t===a,s=b[t]||t;return k("option",{key:t,selected:e,value:t},s)})):k("option",{key:"layout-default-option"},b.layoutDefaultOption),w=k("div",{class:M.formSectionContainer},k("label",null,b.layoutTitle,k("select",{class:M.select,onchange:this._updateFromOption,"data-target-property":"layout",bind:this},T))),C=k("div",{class:M.formSectionContainer},k("label",null,b.dpi,k("input",{type:"number",class:this.classes(M.inputText,M.input),"data-input-name":"dpi",onchange:this._handleDPIChange,value:`${i}`,min:"1",tabIndex:0,bind:this}))),x=k("div",{class:this.classes(M.scaleInfoContainer,M.formSectionContainer)},k("label",null,k("input",{"data-option-name":"scaleEnabled",checked:p,type:"checkbox",tabIndex:0,onchange:this._toggleInputValue,bind:this}),b.scale),k("div",{class:M.scaleInputContainer},k("input",{"aria-label":b.scaleLabel,"aria-valuenow":`${c}`,role:"spinbutton",type:"number",class:this.classes(M.inputText,M.input,M.scaleInput),tabIndex:0,"data-input-name":"scale",onchange:this._updateInputValue,disabled:!p,value:`${c}`,bind:this}),k("button",{type:"button","aria-label":b.reset,class:this.classes(M.widgetButton,M.refreshButton,M.iconRefresh),tabIndex:0,onclick:this._resetToCurrentScale,bind:this}))),O=this._advancedOptionsVisibleForLayout?k("div",{"aria-labelledby":`${this.id}__advancedOptionsForLayout`,class:M.advancedOptionsContainer},x,k("div",{class:this.classes(M.authorInfoContainer,M.formSectionContainer)},k("label",null,b.author,k("input",{type:"text",value:e??"",class:this.classes(M.inputText,M.input),tabIndex:0,"data-input-name":"author",onchange:this._updateInputValue,bind:this}))),k("div",{class:this.classes(M.copyrightInfoContainer,M.formSectionContainer)},k("label",null,b.copyright,k("input",{type:"text",class:this.classes(M.inputText,M.input),tabIndex:0,value:s??"","data-input-name":"copyright",onchange:this._updateInputValue,bind:this}))),C,k("div",{class:this.classes(M.legendInfoContainer,M.formSectionContainer)},k("label",null,k("input",{type:"checkbox","data-option-name":"legendEnabled",tabIndex:0,checked:r,onchange:this._toggleInputValue,bind:this}),b.legend)),this.viewModel.templateToNorthArrowInfo[a]?k("div",{class:this.classes(M.legendInfoContainer,M.formSectionContainer),key:"north-arrow"},k("label",null,k("input",{type:"checkbox","data-option-name":"northArrowEnabled",tabIndex:0,checked:l,onchange:this._toggleInputValue,bind:this}),b.northArrow)):null,this.renderCustomTextElementSection()):null,L=this._advancedOptionsVisibleForMapOnly?k("div",{"aria-labelledby":`${this.id}__advancedOptionsForMapOnly`,class:M.advancedOptionsContainer},x,C,k("div",{class:M.formSectionContainer},k("label",null,k("input",{"data-option-name":"attributionEnabled",type:"checkbox",onchange:this._toggleInputValue,tabIndex:0,checked:t,bind:this}),b.attribution)),this.renderCustomTextElementSection()):null,I=this._layoutTabSelected?k("section",{key:"esri-print__layoutContent",id:`${this.id}__layoutContent`,"aria-labelledby":`${this.id}__layoutTab`,class:M.layoutSection,role:"tabpanel"},k("div",{class:M.panelContainer},u,w,this._layoutTabSelected?j:null),k("div",{class:this.classes(M.panelContainer,M.advancedOptionsSection)},k("button",{"aria-label":b.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForLayout?"true":"false",class:M.advancedOptionsButton,onclick:this._showAdvancedOptions,bind:this,type:"button"},k("div",{class:M.advancedOptionsButtonContainer},k("span",{"aria-hidden":"true",class:this.classes(M.iconRightTriangleArrow,M.advancedOptionsButtonIconClosed)}),k("span",{"aria-hidden":"true",class:this.classes(M.iconLeftTriangleArrow,M.advancedOptionsButtonIconClosed_RTL)}),k("span",{"aria-hidden":"true",class:this.classes(M.iconDownArrow,M.advancedOptionsButtonIconOpened)}),k("span",{class:M.advancedOptionsButtonTitle},b.advancedOptions))),O)):k("section",{key:"esri-print__mapOnlyContent",id:`${this.id}__mapOnlyContent`,"aria-labelledby":`${this.id}__mapOnlyTab`,class:M.mapOnlySection,role:"tabpanel"},k("div",{class:M.panelContainer},u,this._layoutTabSelected?null:j,k("div",{class:this.classes(M.sizeContainer,M.formSectionContainer)},k("div",{class:M.widthContainer},k("label",null,b.width,k("input",{type:"number",class:this.classes(M.inputText,M.input),"data-input-name":"width",onchange:this._updateInputValue,value:`${d}`,tabIndex:0,bind:this}))),k("div",{class:M.heightContainer},k("label",null,b.height,k("input",{type:"number",class:this.classes(M.inputText,M.input),"data-input-name":"height",onchange:this._updateInputValue,value:`${n}`,tabIndex:0,bind:this}))),k("button",{type:"button","aria-label":b.swap,class:this.classes(M.widgetButton,M.swapButton,M.iconSwap),onclick:this._switchInput,tabIndex:0,bind:this})),k("div",{class:this.classes(M.panelContainer,M.advancedOptionsSection)},k("button",{"aria-label":b.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForMapOnly?"true":"false",type:"button",class:M.advancedOptionsButton,onclick:this._showAdvancedOptions,bind:this},k("div",{class:M.advancedOptionsButtonContainer},k("span",{"aria-hidden":"true",class:this.classes(M.iconRightTriangleArrow,M.advancedOptionsButtonIconClosed)}),k("span",{"aria-hidden":"true",class:this.classes(M.iconLeftTriangleArrow,M.advancedOptionsButtonIconClosed_RTL)}),k("span",{"aria-hidden":"true",class:this.classes(M.iconDownArrow,M.advancedOptionsButtonIconOpened)}),k("span",{class:M.advancedOptionsButtonTitle},b.advancedOptions))),L))),F=this.exportedLinks.toArray(),D=this._renderExportedLink(F),P={[M.buttonDisabled]:m||!a&&!o},$=null!=this.get("view")&&"2d"!==this.get("view.type"),E=k("div",{class:M.panelError},$?b.sceneViewError:b.serviceError),U=k("div",null,k("ul",{class:M.layoutTabList,role:"tablist",onclick:this._toggleLayoutPanel,onkeydown:this._handleLayoutPanelKeyDown,bind:this},k("li",{afterCreate:this._focusOnTabChange,afterUpdate:this._focusOnTabChange,id:`${this.id}__layoutTab`,"data-tab-id":S.layout,class:M.layoutTab,role:"tab",tabIndex:0,"aria-selected":`${this._layoutTabSelected}`},b.layoutTab),k("li",{afterCreate:this._focusOnTabChange,afterUpdate:this._focusOnTabChange,id:`${this.id}__mapOnlyTab`,"data-tab-id":S.mapOnly,class:M.layoutTab,role:"tab",tabIndex:0,"aria-selected":`${!this._layoutTabSelected}`},b.mapOnlyTab)),I,k("button",{"aria-label":b.exportDescription,type:"button",class:this.classes(M.printButton,M.button,P),disabled:m,tabIndex:0,onclick:this._handlePrintMap,bind:this},b.export),h&&y.defaultTemplates.length>0?this.renderTemplateSectionTrigger():null,k("div",{class:M.exportedFilesContainer,afterUpdate:this._scrollExportIntoView,bind:this},k(_,{class:M.exportedFilesTitle,level:this.headingLevel},b.exportText),F.length>0?null:k("div",null,k("div",null,b.exportHint)),D)),A=k("div",{class:M.printWidgetContainer},k("header",{class:M.headerTitle},b.export),this.error||$||!this.view?E:U),V="initializing"===this.get("viewModel.state")?this._renderLoader():A;return k("div",{afterCreate:this._handleRootAfterCreate,bind:this,class:this.classes(M.base,M.widget,M.panel)},V)}renderTemplateSectionTrigger(){const{messages:t,_templateListPopover:e}=this,s=e.open;return k("button",{afterCreate:t=>this._selectTemplateNode=t,"aria-controls":s?`${this.id}__template-selection`:"","aria-label":t.selectTemplateDescription,"aria-pressed":s.toString(),class:this.classes(M.button,M.buttonTertiary,M.templateButton),onclick:this.handleSelectTemplateClick,title:t.selectTemplateDescription,type:"button"},t.selectTemplate)}renderCustomTextElementSection(){const{templateOptions:{customTextElements:t}}=this;return t?k("div",{class:M.formSectionContainer,key:"custom-text-elements"},t.map((t=>{const[e,s]=Object.entries(t)[0];return"date"===e?null:k("label",{key:e},e,k("input",{bind:this,class:this.classes(M.inputText,M.input),"data-input-custom":!0,"data-input-name":e,onchange:this._updateInputValue,type:"text",value:s}))}))):null}renderTemplateList(){const{messages:t,messagesCommon:e,viewModel:s}=this,{defaultTemplates:i}=s,o=t.selectTemplateDescription,n=`${this.id}__template-selection`;return k("div",{class:this.classes(M.templateList,M.widget,M.panel),id:n},k(_,{class:M.menuHeader,level:this.headingLevel},t.selectTemplate),k("div",{class:M.templateListScroller},k("ul",{afterCreate:this.handleTemplateListCreation,"aria-activedescendant":`${this.id}__template-item--${this._focusedTemplateIndex}`,"aria-label":o,class:M.menuList,key:"templates",onblur:this.handleTemplateChildBlur,onclick:this.handleTemplateListClick,onkeydown:this.handleTemplateListKeyDown,role:"listbox",tabIndex:0,title:o},i.toArray().map(((e,s)=>{const i=s===this._focusedTemplateIndex,o=e.description??"",n=e.label??"";return k("li",{"aria-label":o,class:this.classes(M.menuItem,{[M.menuItemFocus]:i}),"data-template":e,id:`${this.id}__template-item--${s}`,key:n,title:o},P(n)?t.mapOnlyTab:n)})))),k("div",{class:M.templateListFooter},k("button",{type:"button",class:this.classes(M.button,M.buttonSecondary),onblur:this.handleTemplateChildBlur,onclick:this.handleCloseTemplateSelection},e.done)))}applyTemplate(t){const{format:e,layout:s,layoutOptions:i}=t,{templateOptions:o}=this;this._templateListPopover.open=!1,this._toggleTab("map-only"===s?S.mapOnly:S.layout,!1),e&&(o.format=e),s&&(o.layout=s),this._focusedTemplateIndex=null,o.legendEnabled=i?.legend??o.legendEnabled,this.handleCloseTemplateSelection()}renderTitleOrFileNameSection(){const{templateOptions:t,messages:e}=this;let s,i,o,n;return this._layoutTabSelected?(s=e.title,i=e.titlePlaceHolder,o=t.title,n="title"):(s=e.fileName,i=e.fileNamePlaceHolder,o=t.fileName,n="fileName"),k("div",{class:M.formSectionContainer,key:n},k("label",null,s,k("input",{type:"text",tabIndex:0,placeholder:i,class:this.classes(M.inputText,M.input),value:o??"","data-input-name":n,onchange:this._updateInputValue,bind:this})))}_handleRootAfterCreate(t){this._rootNode=t,this.addHandles(s(t,"scroll",(()=>{this._templateListPopover.open&&this.handleCloseTemplateSelection()})))}_focusOnTabChange(t){if(!this._activeTabFocusRequested)return;const e=t.getAttribute("data-tab-id");("layoutTab"===e&&this._layoutTabSelected||"mapOnlyTab"===e&&!this._layoutTabSelected)&&(t.focus(),this._activeTabFocusRequested=!1)}_renderLoader(){const t={[M.loader]:this._awaitingServerResponse};return k("div",{class:this.classes(t),key:"loader"})}_createFileLink(t,e){const s=e||this.messages.untitled,i=t.format.toLowerCase(),o=i.includes("png")?"png":i,n=s+o;return void 0!==this._exportedFileNameMap[n]?this._exportedFileNameMap[n]++:this._exportedFileNameMap[n]=0,new C({name:s,extension:o,count:this._exportedFileNameMap[n]})}_resetToCurrentScale(){this.templateOptions.scale=this.viewModel.view?.scale}_updateCustomTextElementValue(t,e,s){t.find((t=>{const[s]=Object.entries(t)[0];return s===e}))[e]=s}_updateInputValue(t){const e=t.target,s=e.getAttribute("data-input-name"),i=!!e["data-input-custom"],{templateOptions:o}=this;if(i)return void this._updateCustomTextElementValue(o.customTextElements,s,e.value);let n;if("number"===e.type){if(!function(t){return!isNaN(t)&&t>0}(e.valueAsNumber)){const t=o[s];return void(e.value=`${t}`)}n=e.valueAsNumber}else n=e.value;o[s]=n}_handleDPIChange(t){this._updateInputValue(t);const e=t.currentTarget.valueAsNumber,{height:s,width:i}=function(t){return{width:Math.round(8.3333*t),height:Math.round(11.4583*t)}}(e),{templateOptions:o}=this;o.height=s,o.width=i}_handlePrintMap(){this._pendingExportScroll=!0;const{templateOptions:t}=this,e=this.viewModel.toPrintTemplate(t),s=this._layoutTabSelected?e.layoutOptions?.titleText:t.fileName,i=this._createFileLink(e,s);this.exportedLinks.add(i),this.emit("submit",{link:i}),this.viewModel.print(e).then((t=>{i.set({url:t&&t.url,state:"ready"})})).catch((t=>{i.set({error:t,state:"error"})})).then((()=>{this.emit("complete",{link:i}),this.scheduleRender()}))}_updateFromOption(t){const e=t.target,s=e.selectedOptions?e.selectedOptions.item(0)?.value:e.options[e.selectedIndex].value,i=e.getAttribute("data-target-property");this.templateOptions[i]=s}_switchInput(){[this.templateOptions.width,this.templateOptions.height]=[this.templateOptions.height,this.templateOptions.width]}_showAdvancedOptions(){this._layoutTabSelected?this._advancedOptionsVisibleForLayout=!this._advancedOptionsVisibleForLayout:this._advancedOptionsVisibleForMapOnly=!this._advancedOptionsVisibleForMapOnly}_scrollExportIntoView(){if(!this._pendingExportScroll)return;this._pendingExportScroll=!1;const t=this._rootNode;if(!t)return;const{clientHeight:e,scrollHeight:s}=t,i=s-e;i>0&&(t.scrollTop=i)}_toggleInputValue(t){const e=t.target,s=e.getAttribute("data-option-name");this.templateOptions[s]=e.checked,"scaleEnabled"===s&&(this.templateOptions[s]||this._resetToCurrentScale())}_renderExportedLink(t){const e=this.messages;return t.map((t=>{const{error:s,url:i,state:o}=t,n=t.formattedName??"",a="error"===o,r="pending"===o,c="ready"===o,d={[M.anchorDisabled]:r||a};let m=i||null;m&&(m=l(m));const u=p(i,location.href),h={[M.iconSpinner]:r,[M.rotate]:r,[M.iconDownload]:u&&c,[M.iconLaunchLink]:!u&&c,[M.iconError]:a,[M.exportedFileError]:a},b={[M.exportedFileError]:a};let y;y=r?e.pending:c?e.ready:e.errorMessage;const g=a?"print-task:cim-symbol-unsupported"===s?.name?e.exportWebMapCIMError:e.exportWebMapError:"";return k("div",{"aria-label":y,class:M.exportedFile,"data-item":t,key:n,onclick:this._removeLink,title:g},k("a",{"aria-label":`${n}. ${e.linkReady}`,download:n,href:m??"",rel:"noreferrer",tabIndex:0,target:"_blank",class:this.classes(M.exportedFileLink,d),onclick:this._handleLinkClick},k("span",{class:this.classes(h)}),k("span",{class:this.classes(M.exportedFileLinkTitle,b)},n)))}))}_toggleLayoutPanel(t){const e=t.target;this._toggleTab(e.getAttribute("data-tab-id"))}_toggleTab(t,e=!0){if(this._layoutTabSelected=t===S.layout,this._layoutTabSelected){const t=this.get("viewModel.templatesInfo.layout.choiceList");this.templateOptions.layout=t&&t[0]}else this.templateOptions.layout=O;e&&(this._activeTabFocusRequested=!0)}_handleLayoutPanelKeyDown(t){const e=i(t),s=t.target.getAttribute("data-tab-id");if(j(e))return this._toggleTab(s),t.preventDefault(),void t.stopPropagation();"ArrowLeft"!==e&&"ArrowRight"!==e||(this._toggleTab(s===S.layout?S.mapOnly:S.layout),t.preventDefault(),t.stopPropagation())}};t([c()],$.prototype,"allowedFormats",null),t([c()],$.prototype,"allowedLayouts",null),t([c()],$.prototype,"error",null),t([c({type:x})],$.prototype,"exportedLinks",void 0),t([c()],$.prototype,"extraParameters",null),t([c()],$.prototype,"headingLevel",void 0),t([c()],$.prototype,"iconClass",void 0),t([c()],$.prototype,"includeDefaultTemplates",null),t([c()],$.prototype,"label",null),t([c(),T("esri/widgets/Print/t9n/Print")],$.prototype,"messages",void 0),t([c(),T("esri/t9n/common")],$.prototype,"messagesCommon",void 0),t([c()],$.prototype,"portal",null),t([c()],$.prototype,"printServiceUrl",null),t([c()],$.prototype,"templateCustomTextElements",null),t([c({type:g})],$.prototype,"templateOptions",void 0),t([c()],$.prototype,"view",null),t([c({type:y})],$.prototype,"viewModel",void 0),$=t([d("esri.widgets.Print")],$);const E=$;export{E as default};
