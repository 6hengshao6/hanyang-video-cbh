/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../intl.js";import{n as t}from"../chunks/compilerUtils.js";import{i as s,a as i}from"../chunks/maybe.js";import{watch as r}from"../core/reactiveUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{g as a,getFieldRange as l}from"../layers/support/fieldUtils.js";import p,{l as u}from"./Widget.js";import{i as m,a as d}from"./FeatureForm/InputField.js";import c from"./FeatureForm/FeatureFormViewModel.js";import{H as h,i as j}from"../chunks/Heading.js";import"../chunks/widgetUtils.js";import{m as y}from"../chunks/messageBundle.js";import{v as b}from"../chunks/vmEvent.js";import{t as g}from"../chunks/jsxFactory.js";import{D as f}from"../chunks/datetime.js";import{g as I}from"../chunks/locale.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/object.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/handleUtils.js";import"../chunks/watch.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/tracking.js";import"../chunks/metadata.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../core/HandleOwner.js";import"../chunks/WatchUpdatingTracking.js";import"../layers/support/CodedValueDomain.js";import"../chunks/enumeration.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/layerUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../chunks/domains.js";import"../chunks/editableLayers.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/Subtype.js";import"../arcade.js";import"../chunks/ArcadeDate.js";import"../chunks/executionError.js";import"../chunks/ImmutableArray.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../layers/Layer.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"../chunks/fieldType.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/commonProperties2.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/TimeReference.js";import"../chunks/featureLayerUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"./FeatureForm/InputFieldGroup.js";const v="esri-feature-form",k=`${v}__date`,F=`${v}__group`,_=`${v}__input`,D={base:v,form:`${v}__form`,formHeader:`${v}__form-header`,label:`${v}__label`,inputFieldWrapper:`${_}-wrapper`,inputFieldLoader:`${_}-loader`,inputField:`${_}`,inputDate:`${_}--date`,inputTime:`${_}--time`,inputRadioGroup:`${_}--radio-group`,inputRadio:`${_}--radio`,inputRadioLabel:`${_}--radio-label`,inputDisabled:`${_}--disabled`,inputSwitch:`${_}--switch`,inputInvalid:`${_}--invalid`,inputIconInvalid:`${_}-icon--invalid`,errorMessage:`${v}__field-error-message`,description:`${v}__description-text`,dateInputPart:`${k}-input-part`,loneDateInputPart:`${k}-input-part--lone`,dateInputContainer:`${k}-input-container`,dateFormatHint:`${k}-format-hint`,group:F,groupLabel:`${F}-label`,groupHeader:`${F}-header`,groupHeading:`${F}-header`,groupTitle:`${F}-title`,groupDescription:`${F}-description`,groupToggleIcon:`${F}-toggle-icon`,groupCollapsed:`${F}--collapsed`,groupSequential:`${F}--sequential`,groupActive:`${F}--active`,collapseIcon:"esri-icon-up",errorIcon:"esri-icon-notice-triangle",expandIcon:"esri-icon-down",widget:"esri-widget",panel:"esri-widget--panel",input:"esri-input",select:"esri-select"},x="data-field-name",C="latn",w=e=>"valueAsDate"in e;let V=class extends p{constructor(e,t){super(e,t),this._dateInputFieldMap=new Map,this._activeInputName="",this._activeNumberFieldEdit=null,this._fieldFocusNeeded=!1,this._fieldToInitialIncompatibleDomainValue=new Map,this._switchFieldsWithInitialIncompatibleValue=new Set,this._userUpdatedInputFieldNames=new Set,this.disabled=!1,this.groupDisplay="all",this.headingLevel=2,this.messages=null,this.messagesTemplates=null,this.viewModel=new c,this._handleInputInput=e=>{this._commitInputValue(e.currentTarget)},this._handleFormKeyDown=this._handleFormKeyDown.bind(this),this._handleInputBlur=this._handleInputBlur.bind(this),this._handleInputFocus=this._handleInputFocus.bind(this),this._handleNumberInputMouseDown=this._handleNumberInputMouseDown.bind(this),this._handleInputKeyDown=this._handleInputKeyDown.bind(this),this._handleOptionChange=this._handleOptionChange.bind(this),this._handleGroupClick=this._handleGroupClick.bind(this),this._handleSubmit=this._handleSubmit.bind(this),this._afterInputCreateOrUpdate=this._afterInputCreateOrUpdate.bind(this),this._afterDateInputCreateOrUpdate=this._afterDateInputCreateOrUpdate.bind(this)}initialize(){this.addHandles([r((()=>this.feature),(()=>{const e=this._getFocusableInput("forward");this._activeInputName=e?.name||"",this._userUpdatedInputFieldNames.clear(),this._fieldToInitialIncompatibleDomainValue.clear(),this._switchFieldsWithInitialIncompatibleValue.clear(),this._dateInputFieldMap.clear(),this._fieldFocusNeeded=!0})),this.on("submit",(e=>{if(e.invalid.length>0){const[t]=e.invalid;e.invalid.forEach((e=>this._userUpdatedInputFieldNames.add(e))),this._activeInputName=t,this._fieldFocusNeeded=!0,this.scheduleRender()}}))])}loadDependencies(){return u({combobox:()=>import("../chunks/calcite-combobox.js"),"combobox-item":()=>import("../chunks/calcite-combobox-item.js"),"combobox-item-group":()=>import("../chunks/calcite-combobox-item-group.js"),"input-date-picker":()=>import("../chunks/calcite-input-date-picker.js"),"input-message":()=>import("../chunks/calcite-input-message.js"),"input-time-picker":()=>import("../chunks/calcite-input-time-picker.js"),progress:()=>import("../chunks/calcite-progress.js"),switch:()=>import("../chunks/calcite-switch.js")})}get feature(){return this.viewModel.feature}set feature(e){this.viewModel.feature=e}get formTemplate(){return this.viewModel.formTemplate}set formTemplate(e){this.viewModel.formTemplate=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get layer(){return this.viewModel.layer}set layer(e){this.viewModel.layer=e}get spatialReference(){return this.viewModel.spatialReference}set spatialReference(e){this.viewModel.spatialReference=e}get strict(){return this.viewModel.strict}set strict(e){this.viewModel.strict=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}getValues(){return this.viewModel.getValues()}submit(){return this.viewModel.submit()}render(){const{state:e}=this.viewModel;return g("div",{class:this.classes(D.base,D.widget,D.panel)},"ready"===e?this.renderForm():null)}renderForm(){const e=this.viewModel,t=s(e.formTitle)&&g(h,{key:"title",level:this.headingLevel},e.formTitle),i=s(e.formDescription)&&g("p",{class:D.description,key:"description"},e.formDescription),r=t||i?g("div",{class:D.formHeader},t,i):null;return g("form",{class:D.form,novalidate:!0,onsubmit:this._handleSubmit,onkeydown:this._handleFormKeyDown},r,this.renderFields())}renderFields(){const{viewModel:{inputFields:e}}=this;return e.filter((e=>e.visible)).map(((e,t)=>m(e)?this.renderGroup(e,t):this.renderLabeledField(e)))}renderGroup(e,t){const{formTemplate:i,disabled:r}=this,{description:o,inputFields:n,label:a,state:l}=e,p=n.filter((e=>e.visible)),u=this.viewModel.findField(this._activeInputName),m=!(!u||u.group!==e),d=`${this.id}_group_${t}`,c=`${this.id}_group-label_${t}`,y=`${this.id}_group-description_${t}`,b=o?g("p",{class:this.classes(D.groupDescription,D.description),id:y},o):null,f="sequential"===this.groupDisplay,I=f?m:"expanded"===l,v=I?D.collapseIcon:D.expandIcon;return g("fieldset",{"aria-expanded":I.toString(),"aria-labelledby":c,"aria-describedby":o?y:"",class:this.classes(D.group,f?D.groupSequential:null,I?null:D.groupCollapsed,m?D.groupActive:null,r?D.inputDisabled:null),disabled:r,"data-group":e,id:d,key:t,onclick:this._handleGroupClick},g("button",{role:f?"presentation":void 0,class:D.groupHeader,type:"button",tabIndex:f?-1:0},g("div",{class:D.groupTitle},g(h,{class:D.groupLabel,id:c,level:s(i)&&i.title?j(this.headingLevel):this.headingLevel},a),b),f?null:g("span",{class:this.classes(v,D.groupToggleIcon)})),p.map((e=>this.renderLabeledField(e))))}_getFocusableInput(e,t){const s=this.viewModel.allInputFields,i="forward"===e?s:s.slice().reverse();let r;if(t)if(m(t))r=i.indexOf(t.inputFields[0]);else{let s;if(this._isInputFieldInGroup(t)&&"collapsed"===t.group.state){const{inputFields:i}=t.group;s="forward"===e?i[i.length-1]:i[0]}else s=t;r=i.indexOf(s)+1}else r=0;for(let e=r;e<i.length;e++){const t=i[e];if(t.visible)return t}return null}renderLabeledField(e){const{feature:t,label:s,layer:i,type:r}=e;return g("label",{key:`${i.id}-${t.uid}-${e.name}`,class:D.label},[s,"unsupported"!==r?this.renderInputField(e):this.renderUnsupportedField(e),this.renderAuxiliaryText(e)])}renderInputField(e){const{domain:t,name:i,type:r,updating:o,value:n}=e,a=this.getCommonInputProps(e);if("coded-value"===t?.type){if(d(e.fieldElement,"switch")){const{fieldElement:t}=e;if(!(this._switchFieldsWithInitialIncompatibleValue.has(i)||null==n||t.input.onValue!==n&&t.input.offValue!==n))return this.renderSwitchInputField(e,a);this._switchFieldsWithInitialIncompatibleValue.add(i)}return"radio-buttons"===e.inputType?this.renderRadioButtonsInputField(e,t.codedValues.map((({code:e,name:t})=>({value:e,name:t}))),a):this.renderSelectInputField(e,this._getFieldValueOptions(i,t),a)}if("datetime-picker"===e.inputType||"date"===r)return this.renderDateInputField(e,a);const l="number"===r?g("input",{type:"number",...a,value:s(this._activeNumberFieldEdit)&&this._activeNumberFieldEdit.fieldName===e.name?this._activeNumberFieldEdit.value:`${a.value}`}):"text-area"===e.inputType?g("textarea",{...a}):g("input",{type:"text",...a});return o?g("div",{class:D.inputFieldWrapper},l,g("div",{class:D.inputFieldLoader},g("calcite-progress",{type:"indeterminate"}))):l}renderDateInputField(e,t){const{includeTime:i,label:r,name:o,valid:n,value:a}=e,{readOnly:l,required:p}=t,{date:u,time:m}=this._formatValueForDateInputs(a),d=s(t.max)?this._formatValueForDateInputs(t.max):void 0,c=s(t.min)?this._formatValueForDateInputs(t.min):void 0,h=d?.date??void 0,j=c?.date??void 0,y={afterCreate:this._afterDateInputCreate,afterUpdate:this._afterDateInputCreateOrUpdate,"aria-invalid":!n,label:r,numberingSystem:C,overlayPositioning:"fixed",readOnly:l,required:p,tabIndex:0,[x]:o};return g("div",{key:`${t.key}-date-time-container`,class:D.dateInputContainer},g("calcite-input-date-picker",{bind:this,...y,class:this.classes(t.class,D.inputDate),"data-date-part":"date",key:`${t.key}-date-input`,valueAsDate:u??void 0,maxAsDate:h,minAsDate:j,onCalciteInputDatePickerChange:e=>this._commitDateChanges(e.target),onblur:e=>this._commitDateChanges(e.target,!0)}),i?g("calcite-input-time-picker",{bind:this,...y,class:this.classes(t.class,D.inputTime),"data-date-part":"time",key:`${t.key}-time-input`,value:m??void 0,step:1,onCalciteInputTimePickerChange:e=>this._commitDateChanges(e.target),onfocus:e=>{e.target.calciteTimePickerEl&&(e.target.calciteTimePickerEl.showSecond=!0)},onblur:e=>this._commitDateChanges(e.target,!0)}):null)}renderUnsupportedField(e){const t=this.getCommonInputProps(e);return g("input",{afterCreate:t.afterCreate,afterUpdate:t.afterUpdate,class:this.classes(D.input,D.inputField,D.inputDisabled),onfocus:t.onfocus,readOnly:!0,tabIndex:t.tabIndex,type:"text",value:t.value,[x]:t[x]})}renderSelectInputField(e,t,s){const{value:r}=e,{messages:o,messagesTemplates:n}=this,a=t.map((e=>e.map((e=>g("calcite-combobox-item",{value:`${e.value}`,textLabel:e.name,key:`#${e.value}`,selected:r===e.value}))))),[l,p]=a;this._registerIncompatibleValue(r,t.flat(),e,(e=>{p.unshift(g("calcite-combobox-item",{value:`${e}`,textLabel:`${e}`,key:"incompatible-option",readOnly:!0}))}));const u=p.length>0?[g("calcite-combobox-item-group",{key:"recommended",label:o.recommended},l),g("calcite-combobox-item-group",{key:"other",label:n.other},p)]:l,m=i(e.fieldElement)||d(e.fieldElement,"combo-box")&&e.fieldElement.input.showNoValueOption;if(!e.required&&m){const t="",s=d(e.fieldElement,"combo-box")&&e.fieldElement.input.noValueOptionLabel||this.messages.empty;u.unshift(g("calcite-combobox-item",{value:t,textLabel:this.messages.empty,key:"empty-option"},s))}return g("calcite-combobox",{...s,selectionMode:"single",disabled:s.readOnly,allowCustomValues:!1,onCalciteComboboxChange:e=>this._handleOptionChange(e.target)},u)}_registerIncompatibleValue(e,t,s,i){const r=this._fieldToInitialIncompatibleDomainValue,o=r.has(s.name);(o||null!=e&&""!==e&&!t.some((t=>t.value===e)))&&(o||r.set(s.name,e),i?.(e))}renderRadioButtonsInputField(e,t,s){const{value:r}=e,o=t.map((t=>this.renderRadioButton({key:t.name,label:t.name,name:e.name,value:t.value,selected:t.value===r,props:s})));this._registerIncompatibleValue(r,t,e);const n=i(e.fieldElement)||d(e.fieldElement,"radio-buttons")&&e.fieldElement.input.showNoValueOption;if(!e.required&&n){const t="",i=d(e.fieldElement,"radio-buttons")&&e.fieldElement.input.noValueOptionLabel||this.messages.empty,n=r===t||null===r;o.unshift(this.renderRadioButton({key:"empty-option",label:i,name:e.name,value:t,selected:n,props:s}))}return g("div",{key:`${s.key}-radio`,class:D.inputRadioGroup},o)}renderSwitchInputField(e,t){const{value:s}=e,i=!!d(e.fieldElement,"switch")&&s===e.fieldElement.input.onValue;return g("calcite-switch",{...t,class:D.inputSwitch,onCalciteSwitchChange:e=>this._commitInputValue(e.target),checked:i,disabled:t.readOnly})}renderRadioButton({key:e,name:t,value:s,selected:i,label:r,props:o}){return g("label",{key:e,class:D.inputRadioLabel},g("input",{...o,class:D.inputRadio,name:t,type:"radio",value:s,checked:i,disabled:o.readOnly,onchange:e=>this._commitInputValue(e.target)}),r)}renderAuxiliaryText(e){const t=this._userUpdatedInputFieldNames.has(e.name)&&!e.valid?e.errorMessage:s(this.viewModel.contingencyConstraintViolations.get(e.name))?this.messages.validationErrors.valuesIncompatible:s(e.valueExpressionExecutor)&&e.valueExpressionExecutor.stale?this.messages.valueExpressionError:null;return s(t)?g("calcite-input-message",{status:"invalid",icon:!0},t):e.description?g("div",{key:"description",class:D.description},e.description):null}getCommonInputProps(e){const{disabled:t,groupDisplay:i}=this,{editable:r,group:o,hint:n,label:a,maxLength:l,minLength:p,name:u,required:m,type:d,valid:c,value:h}=e,j=this._userUpdatedInputFieldNames.has(u),y=!r||t,b="all"===i&&s(o)&&"collapsed"===o.state;return{afterCreate:this._afterInputCreateOrUpdate,afterUpdate:this._afterInputCreateOrUpdate,"aria-invalid":c?"false":"true",class:this.classes(D.input,D.inputField,y?D.inputDisabled:null,j&&!c?D.inputInvalid:null),key:u,label:a,minlength:p>-1?`${p}`:"",maxlength:l>-1?`${l}`:"",...this._getNumberFieldConstraints(e),readOnly:y,value:null==h?"":`${h}`,[x]:u,onfocus:this._handleInputFocus,oninput:this._handleInputInput,onblur:this._handleInputBlur,onkeydown:this._handleInputKeyDown,onmousedown:"number"===d?this._handleNumberInputMouseDown:void 0,placeholder:"number"===d||"text"===d?n??void 0:"",required:m,tabIndex:b?-1:0}}_isInputFieldInGroup(e){return!m(e)&&s(e.group)}_handleNumberInputMouseDown({target:e}){e.focus(),this.scheduleRender()}_getFieldValueOptions(e,t){const s=t.codedValues.map((({code:e,name:t})=>({value:e,name:t}))),i=this.viewModel.fieldsWithContingentValues.has(e)?this._getContingentValueOptions(e):[];if(i.length>0){const e=new Set(i.map((e=>e.value)));return[i,s.filter((t=>!e.has(t.value)))]}return[s,[]]}_getContingentValueOptions(e){const t={};for(const s of this.viewModel.allInputFields){const{name:r,value:o}=s;!i(o)&&r!==e&&this.viewModel.fieldsWithContingentValues.has(r)&&(t[r]=o)}const s=this.viewModel.joinedContingentValues.slice(),r=new Map;for(const o of s){const s=o.values[e];if(i(s)||"code"!==s.objectType&&"null"!==s.objectType)continue;const{code:n,name:a}=s.codedValue&&"null"!==s.objectType?s.codedValue:{code:"",name:this.messages.empty};r.has(n)||Object.entries(t).every((([e,t])=>!o.values.hasOwnProperty(e)||this._valueIsValidContingentValue(t,o.values[e])))&&r.set(n,{name:a,value:n})}return[...r.values()]}_getInputFieldFromInput(e){return this.viewModel.findField(e.getAttribute(x))}_getNumberFieldConstraints(e){const t=a(e.domain)||l(e.field);return t&&t.max!==Number.MAX_VALUE&&t.min!==Number.MIN_VALUE?t:{min:null,max:null}}async _afterDateInputCreate(e){!w(e)&&s(e.value)&&"setValue"in e&&e.setValue({value:e.value,origin:"external"}),this._afterDateInputCreateOrUpdate(e)}_afterDateInputCreateOrUpdate(e){const{name:t}=this._getInputFieldFromInput(e),i=this._dateInputFieldMap.get(t),r=w(e);s(i)?r?i.date=e:i.time=e:this._dateInputFieldMap.set(t,{[r?"date":"time"]:e}),this._afterInputCreateOrUpdate(e)}_afterInputCreateOrUpdate(e){const{viewModel:t}=this,s=this._getInputFieldFromInput(e),i=t.findField(this._activeInputName),r=this._fieldToInitialIncompatibleDomainValue.get(s.name)===s.value;this._fieldFocusNeeded&&i===s&&("radio-buttons"!==s.inputType||r||e.checked)&&(this._fieldFocusNeeded=!1,this._isInputFieldInGroup(s)&&(s.group.state="expanded"),e.focus())}_handleInputFocus(e){const t=e.target,s=this._getInputFieldFromInput(t);this._activeInputName=s.name,this._isNumberInputField(s)&&(this._activeNumberFieldEdit={fieldName:s.name,input:t,value:t.value})}_isNumberInputField({domain:e,inputType:t="text-box",type:s}){return"number"===s&&"text-box"===t&&(!e||"coded-value"!==e.type)}_handleInputBlur(e){const t=e.target,i=this._getInputFieldFromInput(t);"number"===i.type&&s(this._activeNumberFieldEdit)&&(this._activeNumberFieldEdit.input.value=`${i.value}`,this._activeNumberFieldEdit=null),this._commitInputValue(t),this.scheduleRender()}_commitDateChanges(e,t=!1){const{name:s}=this._getInputFieldFromInput(e);if(!this._dateInputFieldMap.has(s))return;const i=this._dateInputFieldMap.get(s);if(!i||!i.date)return;const r=this._getFieldValueFromDateInput(e),o=this._getFieldValueFromDateInputs(i.date,i.time);this.viewModel.getValue(s)!==o&&(null!==r&&null!==o?this._updateFieldValue(s,o):t&&this._updateFieldValue(s,null))}_commitInputValue(e){const t=this._getInputFieldFromInput(e);s(this._activeNumberFieldEdit)&&this._isNumberInputField(t)&&(this._activeNumberFieldEdit.value=e.value),this._updateFieldValue(t.name,this._parseValue(e))}_handleInputKeyDown(e){const{key:t,altKey:s,ctrlKey:i,metaKey:r}=e,o=this._getInputFieldFromInput(e.target);if("Enter"===t)this._isInputFieldInGroup(o)&&"collapsed"===o.group.state&&(o.group.state="expanded");else{const{type:n}=o.field,a="single"===n||"double"===n;if(("integer"===n||"small-integer"===n||a)&&!s&&!i&&!r&&1===t.length){const s=Number(t),i=["-","+"],r=["e","."],o=a?[...i,...r]:i;isNaN(s)&&!o.includes(t)&&e.preventDefault()}}}_updateFieldValue(e,t){if(this.viewModel.setValue(e,t),this._userUpdatedInputFieldNames.add(e),this.viewModel.fieldsWithContingentValues.has(e)){const e=Object.fromEntries(Object.entries(this.getValues()).filter((([e,t])=>s(t))));this.viewModel.validateContingencyConstraints(e)}}_parseValue(e){const t=this._getInputFieldFromInput(e),s=e.value;if(d(t.fieldElement,"switch")&&"CALCITE-COMBOBOX"!==e.tagName)return e.checked?t.fieldElement.input.onValue:t.fieldElement.input.offValue;if("radio-buttons"===t.inputType&&"radio"===e.type&&!e.checked)return t.value;const{type:i}=t;return"number"===i?s?parseFloat(s):null:s}_handleOptionChange(e){this._commitInputValue(e),this.scheduleRender()}_handleGroupClick(e){const t=e.currentTarget["data-group"],s="expanded"===t.state,i="sequential"===this.groupDisplay,r=`.${D.groupHeader}`;if(!s||e.target.closest(r)){if(this._activeInputName=this._getFocusableInput("forward",t)?.name||"",i){const i=e.target.closest(r);if(s&&!i)return;this.viewModel.inputFields.forEach((e=>{m(e)&&e!==t&&(e.state="collapsed")}))}t.state=s?"collapsed":"expanded",this._fieldFocusNeeded=i,this.scheduleRender()}}_handleSubmit(e){e.preventDefault()}_handleFormKeyDown(e){"Enter"===e.key&&this.viewModel.submit()}_getDefaultLocaleOptions(){return{locale:I(),numberingSystem:C}}_getFieldValueFromDateInputs(e,t){const i=this._getDateTimeFromInput(e),r=this._getDateTimeFromInput(t);if(!i&&!r)return null;const o=this._getInputFieldFromInput(e),n=this._getNumberFieldConstraints(o),a=Date.now(),l=s(n.max)&&n.max<a?n.max:a,p=f.fromMillis(l,this._getDefaultLocaleOptions()),u=i||p,{year:m,month:d,day:c}=u,{hour:h,minute:j,second:y}=r||p,b=u.set({year:m,month:d,day:c,hour:h,minute:j,second:y});return b.isValid?b.toMillis():null}_getDateTimeFromInput(e){if(!e)return null;let t=null;if(w(e)){const s=e.valueAsDate;if(!s||Array.isArray(s))return null;t=f.fromJSDate(s)}else{if(!e.value)return null;t=f.fromFormat(e.value,"TT",this._getDefaultLocaleOptions())}return t??null}_getFieldValueFromDateInput(e){return this._dateTimeToFieldValue(this._getDateTimeFromInput(e))}_dateTimeToFieldValue(e){return e?.isValid?e.toMillis():null}_dateTimeFromFieldValue(e){return null===e?null:f.fromMillis(e,this._getDefaultLocaleOptions())}_formatValueForDateInputs(e){if(null==e||isNaN(e))return{date:null,time:null};const t=this._dateTimeFromFieldValue(e);return t?{date:t.toJSDate(),time:t.toFormat("TT",this._getDefaultLocaleOptions())}:{date:null,time:null}}_valueIsValidContingentValue(e,i){switch(i.objectType){case"any":return!0;case"null":return null==e;case"code":return e===i.codedValue?.code;case"range":return s(e)&&s(i.minValue)&&s(i.maxValue)&&e>=i.minValue&&e<=i.maxValue;default:return t(i.objectType),!1}}};e([o()],V.prototype,"disabled",void 0),e([o()],V.prototype,"feature",null),e([o()],V.prototype,"formTemplate",null),e([o()],V.prototype,"groupDisplay",void 0),e([o()],V.prototype,"headingLevel",void 0),e([o()],V.prototype,"label",null),e([o()],V.prototype,"layer",null),e([o(),y("esri/widgets/FeatureForm/t9n/FeatureForm")],V.prototype,"messages",void 0),e([o(),y("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],V.prototype,"messagesTemplates",void 0),e([o()],V.prototype,"spatialReference",null),e([o()],V.prototype,"strict",null),e([o()],V.prototype,"view",null),e([o(),b(["value-change","submit"])],V.prototype,"viewModel",void 0),V=e([n("esri.widgets.FeatureForm")],V);const S=V;export{S as default};