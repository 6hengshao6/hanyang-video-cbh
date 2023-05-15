/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import t from"../../Graphic.js";import"../../symbols.js";import s from"../../core/Collection.js";import r from"../../core/Error.js";import i from"../../core/Handles.js";import{L as o}from"../../chunks/Logger.js";import{i as n,a,u as l}from"../../chunks/maybe.js";import{watch as p,when as u,sync as m}from"../../core/reactiveUtils.js";import{property as c}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import{geographicToWebMercator as d}from"../../geometry/support/webMercatorUtils.js";import j from"../../layers/Layer.js";import y from"../../support/actions/ActionBase.js";import g from"../../support/actions/ActionButton.js";import f from"../../support/actions/ActionToggle.js";import{getDisplayedSymbol as b}from"../../symbols/support/symbolUtils.js";import{V as w}from"../../chunks/InputManager.js";import{h as v}from"../../chunks/layerViewUtils.js";import F from"../Feature/FeatureViewModel.js";import{z as k,a as C,b as P,r as _}from"../../chunks/actions.js";import{throwIfNotAbortError as S}from"../../core/promiseUtils.js";import{A as I}from"../../chunks/AnchorElementViewModel.js";import{GoToMixin as E}from"../support/GoTo.js";import L from"../../symbols/SimpleFillSymbol.js";import x from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../config.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/Identifiable.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/assets.js";import"../../chunks/ItemCache.js";import"../../chunks/MemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/previewUtils.js";import"../../chunks/renderUtils.js";import"../../chunks/colorUtils2.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/mat2d.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/previewSymbol3D.js";import"../../chunks/webStyleSymbolUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/styleUtils.js";import"../../chunks/Queue.js";import"../../chunks/PropertiesPool.js";import"../../chunks/ObservableValue.js";import"../../chunks/throttle.js";import"../Attachments/AttachmentsViewModel.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../intl.js";import"../../chunks/messages.js";import"../../core/HandleOwner.js";import"../../chunks/WatchUpdatingTracking.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils4.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils5.js";import"../../chunks/urlUtils2.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/FullTextSearch.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../layers/FeatureLayer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../core/sql.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../chunks/editsZScale.js";import"../../layers/mixins/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../chunks/arcgisLayerUrl.js";import"../../layers/mixins/BlendLayer.js";import"../../layers/mixins/CustomParametersMixin.js";import"../../chunks/EditBusLayer.js";import"../../layers/mixins/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../layers/mixins/FeatureLayerBase.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/commonProperties2.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/TimeReference.js";import"../../chunks/datetime.js";import"../../chunks/featureLayerUtils.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/serviceCapabilitiesUtils.js";import"../../layers/mixins/FeatureReductionLayer.js";import"../../layers/support/AggregateField.js";import"../../layers/support/ExpressionInfo.js";import"../../chunks/FeatureReduction.js";import"../../layers/support/FeatureReductionBinning.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/FeatureReductionSelection.js";import"../../chunks/clusterUtils.js";import"../../chunks/OperationalLayer.js";import"../../layers/mixins/OrderedLayer.js";import"../../layers/mixins/PortalLayer.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/portalItemUtils.js";import"../../geometry/projection.js";import"../../chunks/pe.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../layers/mixins/PublishableLayer.js";import"../../layers/support/PublishingInfo.js";import"../../layers/mixins/RefreshableLayer.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../layers/mixins/TemporalLayer.js";import"../../TimeInterval.js";import"../../layers/support/TimeInfo.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/labelingInfo.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils2.js";import"../../support/popupUtils.js";const M=o.getLogger("esri.widgets.Popup.PopupViewModel");function V(e){const{selectedFeature:t,location:s,view:r}=e;return r?"3d"===r.type?t??s??null:e.get("selectedFeature.geometry")||s:null}function U(e){return!!e&&e.isAggregate&&"cluster"===e.sourceLayer?.featureReduction?.type}async function A(e,t){const s=await e.whenLayerView(t.sourceLayer),r=s.createQuery(),i=t.getObjectId();return r.aggregateIds=null!=i?[i]:[],[s,r]}function T(e){if(a(e))return null;switch(e.type){case"point":return e;case"extent":return e.center;case"polygon":return e.centroid;case"multipoint":case"polyline":return e.extent?.center;default:return null}}const O="OBJECTID",R=s.ofType({key:"type",defaultKeyValue:"button",base:y,typeMap:{button:g,toggle:f}});let D=class extends(E(I)){get isLoadingFeature(){return this.featureViewModels.some((e=>e.waitingForContent))}constructor(e){super(e),this._handles=new i,this._pendingPromises=new Set,this._fetchFeaturesController=null,this._highlightSelectedFeaturePromise=null,this._highlightActiveFeaturePromise=null,this._selectedClusterFeature=null,this.featurePage=null,this.actions=new R,this.activeFeature=null,this.defaultPopupTemplateEnabled=!1,this.autoCloseEnabled=!1,this.autoOpenEnabled=!0,this.browseClusterEnabled=!1,this.content=null,this.featuresPerPage=20,this.featureViewModelAbilities=null,this.featureViewModels=[],this.highlightEnabled=!0,this.includeDefaultActions=!0,this.selectedClusterBoundaryFeature=new t({symbol:new L({outline:{width:1.5,color:"cyan"},style:"none"})}),this.title=null,this.updateLocationEnabled=!1,this.view=null,this.visible=!1,this.zoomFactor=4,this.zoomToLocation=null}initialize(){this._handles.add([p((()=>[this.autoOpenEnabled,this.view]),(()=>this._autoOpenEnabledChange())),this.on("view-change",(()=>this._autoClose())),p((()=>[this.highlightEnabled,this.selectedFeature,this.visible,this.view]),(()=>this._highlightSelectedFeature())),p((()=>[this.highlightEnabled,this.activeFeature,this.visible,this.view]),(()=>this._highlightActiveFeature())),p((()=>this.view?.animation?.state),(e=>this._animationStateChange(e))),p((()=>this.location),(e=>this._locationChange(e))),p((()=>this.selectedFeature),(e=>this._selectedFeatureChange(e))),p((()=>[this.selectedFeatureIndex,this.featureCount,this.featuresPerPage]),(()=>this._selectedFeatureIndexChange())),p((()=>[this.featurePage,this.selectedFeatureIndex,this.featureCount,this.featuresPerPage,this.featureViewModels]),(()=>this._setGraphicOnFeatureViewModels())),p((()=>this.featureViewModels),(()=>this._featureViewModelsChange())),this.on("trigger-action",(e=>(e=>{const{event:t,view:s}=e,{action:i}=t,o=s&&s.popup;if(!i)return Promise.reject(new r("trigger-action:missing-arguments","Event has no action"));if(!o)return Promise.reject(new r("trigger-action:missing-arguments","view.popup is missing"));const{disabled:a,id:l}=i;if(!l)return Promise.reject(new r("trigger-action:invalid-action","action.id is missing"));if(a)return Promise.reject(new r("trigger-action:invalid-action","Action is disabled"));if(l===k.id)return async function(e){const{location:t,selectedFeature:s,view:i,zoomFactor:o}=e,a=V(e);if(!i||!a){const e=new r("zoom-to:invalid-target-or-view","Cannot zoom to location without a target and view.",{target:a,view:i});throw M.error(e),e}const l=i.scale/o,p=e.selectedFeature?.geometry,u=p??t,m=n(u)&&"point"===u.type&&await async function(e,t){if("3d"!==t?.type||!e||"esri.Graphic"!==e.declaredClass)return!0;const s=t.getViewForGraphic(e);if(s&&"whenGraphicBounds"in s){let t;try{t=await s.whenGraphicBounds(e,{useViewElevation:!0})}catch(e){}return!t||!t.boundingBox||t.boundingBox[0]===t.boundingBox[3]&&t.boundingBox[1]===t.boundingBox[4]&&t.boundingBox[2]===t.boundingBox[5]}return!0}(s,i);k.active=!0,k.disabled=!0;try{await e.zoomTo({target:{target:a,scale:m?l:void 0}})}catch(e){const t=new r("zoom-to:invalid-graphic","Could not zoom to the location of the graphic.",{graphic:s});M.error(t)}finally{k.active=!1,k.disabled=!1,e.zoomToLocation=null,m&&(e.location=u)}}(o.viewModel).catch(S);if(l===C.id)return async function(e){const{selectedFeature:t,view:s}=e;if("2d"!==s?.type){const e=new r("zoomToCluster:invalid-view","View must be 2d MapView.",{view:s});throw M.error(e),e}if(!t||!U(t)){const e=new r("zoomToCluster:invalid-selectedFeature","Selected feature must represent an aggregate/cluster graphic.",{selectedFeature:t});throw M.error(e),e}const[i,o]=await A(s,t);C.active=!0,C.disabled=!0;const{extent:n}=await i.queryExtent(o);await e.zoomTo({target:n}),C.active=!1,C.disabled=!1}(o.viewModel);if(l===P.id)return o.featureMenuOpen=!o.featureMenuOpen,o.viewModel.browseClusterEnabled=!o.viewModel.browseClusterEnabled,Promise.resolve();if(o.viewModel.browseClusterEnabled=!1,l===_.id){o.close();const{selectedFeature:e}=o;if(!e)return Promise.reject(new r(`trigger-action:${_.id}`,"selectedFeature is required",{selectedFeature:e}));const{sourceLayer:t}=e;return t?t.remove(e):s.graphics.remove(e),Promise.resolve()}return Promise.resolve()})({event:e,view:this.view}))),u((()=>!this.waitingForResult),(()=>this._waitingForResultChange()),m),p((()=>[this.features,this.view?.map,this.view?.spatialReference]),(()=>this._updateFeatureVMs())),p((()=>this.view?.scale),(()=>this._viewScaleChange())),u((()=>!this.visible),(()=>this.browseClusterEnabled=!1)),p((()=>this.browseClusterEnabled),(e=>e?this.enableClusterBrowsing():this.disableClusterBrowsing()))])}destroy(){this._cancelFetchingFeatures(),this._handles.destroy(),this._pendingPromises.clear(),this.browseClusterEnabled=!1,this.view=null}get active(){return!(!this.visible||this.waitingForResult)}get allActions(){const e=this._get("allActions")||new R;e.removeAll();const{actions:t,defaultActions:s,defaultPopupTemplateEnabled:r,includeDefaultActions:i,selectedFeature:o}=this,n=i?s.concat(t):t,a=o&&("function"==typeof o.getEffectivePopupTemplate&&o.getEffectivePopupTemplate(r)||o.popupTemplate),l=a&&a.actions,p=a&&a.overwriteActions?l:l?l.concat(n):n;return p&&p.filter(Boolean).forEach((t=>e.add(t))),e}get defaultActions(){const e=this._get("defaultActions")||new R;return e.removeAll(),e.addMany(U(this.selectedFeature)?[C.clone(),P.clone()]:[k.clone()]),e}get featureCount(){return this.features.length}get features(){return this._get("features")||[]}set features(e){const t=e||[];this._set("features",t);const{pendingPromisesCount:s,promiseCount:r,selectedFeatureIndex:i}=this,o=r&&t.length;o&&s&&-1===i?this.selectedFeatureIndex=0:o&&-1!==i||(this.selectedFeatureIndex=t.length?0:-1)}get location(){return this._get("location")||null}set location(e){let t=e;const s=this.view?.spatialReference?.isWebMercator;e&&e?.spatialReference?.isWGS84&&s&&(t=d(e)),this._set("location",t)}get pendingPromisesCount(){return this._pendingPromises.size}get waitingForResult(){return!(!(this._fetchFeaturesController||this.pendingPromisesCount>0)||0!==this.featureCount)}get promiseCount(){return this.promises.length}get promises(){return this._get("promises")||[]}set promises(e){if(this._pendingPromises.clear(),this.features=[],!Array.isArray(e)||!e.length)return this._set("promises",[]),void this.notifyChange("pendingPromisesCount");this._set("promises",e),(e=e.slice(0)).forEach((e=>{this._pendingPromises.add(e),e.then((t=>{this._pendingPromises.has(e)&&this._updateFeatures(t),this._updatePendingPromises(e)}),(()=>this._updatePendingPromises(e)))})),this.notifyChange("pendingPromisesCount")}get selectedFeature(){const{features:e,selectedFeatureIndex:t}=this;return-1===t?null:e[t]||null}get selectedFeatureIndex(){const e=this._get("selectedFeatureIndex");return"number"==typeof e?e:-1}set selectedFeatureIndex(e){const{featureCount:t}=this;e=isNaN(e)||e<-1||!t?-1:(e+t)%t,this.activeFeature=null,this._set("selectedFeatureIndex",e)}get selectedFeatureViewModel(){return this.featureViewModels[this.selectedFeatureIndex]||null}get state(){return this.get("view.ready")?"ready":"disabled"}centerAtLocation(){const{view:e}=this,t=V(this);return t&&e?this.callGoTo({target:{target:t,scale:e.scale}}):Promise.reject(new r("center-at-location:invalid-target-or-view","Cannot center at a location without a target and view.",{target:t,view:e}))}zoomTo(e){return this.callGoTo(e)}clear(){this.set({promises:[],features:[],content:null,title:null,location:null,activeFeature:null})}fetchFeatures(e,t){const{view:s}=this;if(!s||!e)throw new r("fetch-features:invalid-screenpoint-or-view","Cannot fetch features without a screenPoint and view.",{screenPoint:e,view:s});return s.fetchPopupFeatures(e,{event:t&&t.event,defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,signal:t&&t.signal})}open(e){const t={updateLocationEnabled:!1,promises:[],fetchFeatures:!1,...e,visible:!0},{fetchFeatures:s}=t;delete t.fetchFeatures,s&&this._setFetchFeaturesPromises(t.location);const r=["actionsMenuOpen","collapsed","featureMenuOpen"];for(const e of r)delete t[e];this.set(t)}triggerAction(e){const t=this.allActions.getItemAt(e);t&&!t.disabled&&this.emit("trigger-action",{action:t})}next(){return this.selectedFeatureIndex=this.selectedFeatureIndex+1,this}previous(){return this.selectedFeatureIndex=this.selectedFeatureIndex-1,this}disableClusterBrowsing(){!function(e){const t=e.features.filter((e=>U(e)));t.length&&(e.features=t)}(this),this._clearBrowsedClusterGraphics()}async enableClusterBrowsing(){const{view:e,selectedFeature:t}=this;"2d"===e?.type?U(t)?(await async function(e){const{view:t,selectedFeature:s}=e;if(!t||!s)return;const[r,i]=await A(t,s),{extent:o}=await r.queryExtent(i);e.selectedClusterBoundaryFeature.geometry=o,t.graphics.add(e.selectedClusterBoundaryFeature)}(this),await async function(e){const{selectedFeature:t,view:s}=e;if(!s||!t)return;const[r,i]=await A(s,t);P.active=!0,P.disabled=!0;const{features:o}=await r.queryFeatures(i);P.active=!1,P.disabled=!1,s.popup?.open({features:[t].concat(o),featureMenuOpen:!0})}(this)):o.getLogger(this.declaredClass).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.",t):o.getLogger(this.declaredClass).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.",t)}_animationStateChange(e){this.zoomToLocation||(k.disabled="waiting-for-target"===e)}_clearBrowsedClusterGraphics(){const e=this.view?.graphics;e&&(e.remove(this.selectedClusterBoundaryFeature),this._selectedClusterFeature&&e.remove(this._selectedClusterFeature)),this._selectedClusterFeature=null,this.selectedClusterBoundaryFeature.geometry=null}_viewScaleChange(){if(U(this.selectedFeature))return this.browseClusterEnabled=!1,this.visible=!1,void this.clear();this.browseClusterEnabled&&(this.features=this.selectedFeature?[this.selectedFeature]:[])}_locationChange(e){const{selectedFeature:t,updateLocationEnabled:s}=this;s&&e&&(!t||t.geometry)&&this.centerAtLocation()}_selectedFeatureIndexChange(){this.featurePage=this.featureCount>1?Math.floor(this.selectedFeatureIndex/this.featuresPerPage)+1:null}_featureViewModelsChange(){this.featurePage=this.featureCount>1?1:null}_setGraphicOnFeatureViewModels(){const{features:e,featureCount:t,featurePage:s,featuresPerPage:r,featureViewModels:i}=this;if(null===s)return;const o=((s-1)*r+t)%t,n=o+r;i.slice(o,n).forEach(((t,s)=>{t&&!t.graphic&&(t.graphic=e[o+s])}))}async _selectedFeatureChange(e){const{location:t,updateLocationEnabled:s,view:r}=this;if(e&&r){if(this.browseClusterEnabled){if(this._selectedClusterFeature&&(r.graphics.remove(this._selectedClusterFeature),this._selectedClusterFeature=null),U(e))return;return e.symbol=await b(e),this._selectedClusterFeature=e,void r.graphics.add(this._selectedClusterFeature)}!s&&t||!e.geometry?s&&!e.geometry&&this.centerAtLocation().then((()=>{const e=r.center?.clone();e&&(this.location=e)})):this.location=l(T(e.geometry))}}_waitingForResultChange(){!this.featureCount&&this.promises&&(this.visible=!1)}_setFetchFeaturesPromises(e){return this._fetchFeaturesWithController(this._getScreenPoint(e||this.location)).then((e=>{const{clientOnlyGraphics:t,promisesPerLayerView:s}=e,r=Promise.resolve(t),i=s.map((e=>e.promise));this.promises=[r,...i]}))}_destroyFeatureVMs(){this.featureViewModels.forEach((e=>e&&!e.destroyed&&e.destroy())),this._set("featureViewModels",[])}_updateFeatureVMs(){const{selectedFeature:e,features:t,featureViewModels:s}=this;if(U(e)||(this.browseClusterEnabled=!1),this._destroyFeatureVMs(),!t||!t.length)return;const r=s.slice(0),i=[];t.forEach(((t,s)=>{if(!t)return;let o=null;if(r.some(((e,s)=>(e&&e.graphic===t&&(o=e,r.splice(s,1)),!!o))),o)i[s]=o;else{const r=new F({abilities:this.featureViewModelAbilities,defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,spatialReference:this.view?.spatialReference,graphic:t===e?t:null,map:this.view?.map,view:this.view});i[s]=r}})),r.forEach((e=>e&&!e.destroyed&&e.destroy())),this._set("featureViewModels",i)}_getScreenPoint(e){const{view:t}=this;return t&&e&&"function"==typeof t.toScreen?t.toScreen(e):null}_autoOpenEnabledChange(){const e="auto-fetch-features",{_handles:t,autoOpenEnabled:s}=this;if(t.remove(e),s&&this.view){const s=this.view.on("click",(e=>{"mouse"===e.pointerType&&0!==e.button||this._fetchFeaturesAndOpen(e)}),w.WIDGET);t.add(s,e)}}_cancelFetchingFeatures(){const e=this._fetchFeaturesController;e&&e.abort(),this._fetchFeaturesController=null,this.notifyChange("waitingForResult")}_fetchFeaturesWithController(e,t){this._cancelFetchingFeatures();const s=new AbortController,{signal:r}=s;this._fetchFeaturesController=s,this.notifyChange("waitingForResult");const i=this.fetchFeatures(e,{signal:r,event:t});return i.catch((()=>{})).then((()=>{this._fetchFeaturesController=null,this.notifyChange("waitingForResult")})),i}_fetchFeaturesAndOpen(e){const{screenPoint:t,mapPoint:s}=e,{view:r}=this;this._fetchFeaturesWithController(t,e).then((e=>{const{clientOnlyGraphics:t,promisesPerLayerView:i,location:o}=e,n=[Promise.resolve(t),...i.map((e=>e.promise))];return r?.popup?.open({location:o||s,promises:n}),e}))}_updatePendingPromises(e){e&&this._pendingPromises.has(e)&&(this._pendingPromises.delete(e),this.notifyChange("pendingPromisesCount"))}_autoClose(){this.autoCloseEnabled&&(this.visible=!1)}async _getLayerView(e,t){return await e.when(),e.whenLayerView(t)}_getHighlightLayer(e){const{layer:t,sourceLayer:s}=e;return s&&"layer"in s&&s.layer?s.layer:"map-notes"===s?.type||"subtype-group"===s?.type?s:t}_getHighlightTarget(e,t){const s="imagery"===t.type?void 0:"objectIdField"in t?t.objectIdField||O:null,r=e.attributes;return r&&s&&r[s]||e}async _highlightActiveFeature(){const e="highlight-active-feature";this._handles.remove(e);const{highlightEnabled:t,view:s,activeFeature:r,visible:i}=this;if(!(r&&s&&t&&i))return;const o=this._getHighlightLayer(r);if(!(o&&o instanceof j))return;const n=this._getLayerView(s,o);this._highlightActiveFeaturePromise=n;const a=await n;if(!(a&&v(a)&&this._highlightActiveFeaturePromise===n&&this.activeFeature&&this.highlightEnabled))return;const l=a.highlight(this._getHighlightTarget(r,o));this._handles.add(l,e)}async _highlightSelectedFeature(){const e="highlight-selected-feature";this._handles.remove(e);const{selectedFeature:t,highlightEnabled:s,view:r,visible:i}=this;if(!(t&&r&&s&&i))return;const o=this._getHighlightLayer(t);if(!(o&&o instanceof j))return;const n=this._getLayerView(r,o);this._highlightSelectedFeaturePromise=n;const a=await n;if(!(a&&v(a)&&this._highlightSelectedFeaturePromise===n&&this.selectedFeature&&this.highlightEnabled&&this.visible))return;const l=a.highlight(this._getHighlightTarget(t,o));this._handles.add(l,e)}_updateFeatures(e){const{features:t}=this;if(!e||!e.length)return;if(!t.length)return void(this.features=e);const s=e.filter((e=>!t.includes(e)));this.features=t.concat(s)}};e([c()],D.prototype,"featurePage",void 0),e([c()],D.prototype,"isLoadingFeature",null),e([c({type:R})],D.prototype,"actions",void 0),e([c({readOnly:!0})],D.prototype,"active",null),e([c()],D.prototype,"activeFeature",void 0),e([c({readOnly:!0})],D.prototype,"allActions",null),e([c({type:Boolean})],D.prototype,"defaultPopupTemplateEnabled",void 0),e([c()],D.prototype,"autoCloseEnabled",void 0),e([c()],D.prototype,"autoOpenEnabled",void 0),e([c()],D.prototype,"browseClusterEnabled",void 0),e([c()],D.prototype,"content",void 0),e([c({type:R,readOnly:!0})],D.prototype,"defaultActions",null),e([c({readOnly:!0})],D.prototype,"featureCount",null),e([c()],D.prototype,"features",null),e([c()],D.prototype,"featuresPerPage",void 0),e([c()],D.prototype,"featureViewModelAbilities",void 0),e([c({readOnly:!0})],D.prototype,"featureViewModels",void 0),e([c()],D.prototype,"highlightEnabled",void 0),e([c()],D.prototype,"includeDefaultActions",void 0),e([c({type:x})],D.prototype,"location",null),e([c({readOnly:!0})],D.prototype,"pendingPromisesCount",null),e([c({readOnly:!0})],D.prototype,"selectedClusterBoundaryFeature",void 0),e([c({readOnly:!0})],D.prototype,"waitingForResult",null),e([c({readOnly:!0})],D.prototype,"promiseCount",null),e([c()],D.prototype,"promises",null),e([c({value:null,readOnly:!0})],D.prototype,"selectedFeature",null),e([c({value:-1})],D.prototype,"selectedFeatureIndex",null),e([c({readOnly:!0})],D.prototype,"selectedFeatureViewModel",null),e([c({readOnly:!0})],D.prototype,"state",null),e([c()],D.prototype,"title",void 0),e([c()],D.prototype,"updateLocationEnabled",void 0),e([c()],D.prototype,"view",void 0),e([c()],D.prototype,"visible",void 0),e([c()],D.prototype,"zoomFactor",void 0),e([c()],D.prototype,"zoomToLocation",void 0),e([c()],D.prototype,"centerAtLocation",null),D=e([h("esri.widgets.Popup.PopupViewModel")],D);const B=D;export{B as default,O as f,T as g};