/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{g as t}from"../../chunks/assets.js";import s from"../../config.js";import o from"../../Graphic.js";import r from"../../PopupTemplate.js";import"../../symbols.js";import i from"../../core/Accessor.js";import l from"../../core/Collection.js";import a from"../../core/Error.js";import n from"../../core/Evented.js";import{L as u}from"../../chunks/Logger.js";import{i as p,u as c,a as m}from"../../chunks/maybe.js";import{eachAlways as h,after as d}from"../../core/promiseUtils.js";import{watch as y,whenOnce as g,initial as f}from"../../core/reactiveUtils.js";import{property as j}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as S}from"../../core/accessorSupport/decorators/subclass.js";import b from"../../geometry/Point.js";import _ from"../../geometry/SpatialReference.js";import{o as v}from"../../chunks/locale.js";import{f as w}from"../../chunks/messages.js";import k from"../../portal/Portal.js";import{h as x}from"../../chunks/layerViewUtils.js";import L from"./LayerSearchSource.js";import I,{i as P,m as E,a as T,b as R}from"./LocatorSearchSource.js";import F from"./SearchSource.js";import{g as C,a as D}from"../../chunks/geometryUtils3.js";import{s as M,g as O,p as A}from"../../chunks/geolocationUtils.js";import{GoToMixin as G}from"../support/GoTo.js";import U from"../../symbols/PictureMarkerSymbol.js";import N from"../../symbols/SimpleLineSymbol.js";import V from"../../symbols/SimpleFillSymbol.js";import B from"../../symbols/TextSymbol.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/string.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/reader.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Clonable.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../intl.js";import"../../chunks/FullTextSearch.js";import"../../chunks/suggestLocations.js";import"../../chunks/utils4.js";import"../../rest/support/AddressCandidate.js";import"../../chunks/commonProperties3.js";import"../../chunks/scaleUtils.js";import"../../chunks/trimExtend.js";import"../../rest/support/GeneralizeParameters.js";import"../../rest/support/LengthsParameters.js";import"../../rest/support/OffsetParameters.js";import"../../chunks/project.js";import"../../chunks/utils5.js";import"../../rest/support/ProjectParameters.js";import"../../rest/support/RelationParameters.js";import"../../rest/support/TrimExtendParameters.js";function H(e,t){return e.hasOwnProperty(t)&&null!=e[t]&&""!==e[t]}const J="esri.widgets.Search.SearchViewModel",Q=u.getLogger(J),z="highlight",q=l.ofType({key:e=>e.layer?"layer":"locator",base:F,typeMap:{layer:L,locator:I}}),W=_.WGS84,Z=/<(?:.|\s)*?>/g,K=-1;let X=class extends(G(n.EventedMixin(i))){constructor(e){super(e),this._gotoController=null,this._searching=null,this._updatingPromise=null,this._createdFeatureLayers=[],this.autoNavigate=!0,this.autoSelect=!0,this.defaultPopupTemplate=null,this.defaultSources=new q,this.defaultSymbols={point:new U({url:t("esri/images/search/search-symbol-32.png"),size:24,width:24,height:24}),polyline:new N({color:[130,130,130,1],width:2}),polygon:new V({color:[235,235,235,.4],outline:{color:[130,130,130,1],width:2}})},this.includeDefaultSources=!0,this.maxInputLength=128,this.maxResults=6,this.maxSuggestions=6,this.messages=null,this.minSuggestCharacters=3,this.popupEnabled=!0,this.popupTemplate=null,this.portal=k.getDefault(),this.resultCount=null,this.resultGraphicEnabled=!0,this.resultGraphic=null,this.results=null,this.selectedSuggestion=null,this.searchAllEnabled=!0,this.selectedResult=null,this.sources=new q,this.suggestionDelay=350,this.suggestionCount=null,this.suggestions=null,this.suggestionsEnabled=!0,this.view=null}initialize(){const e=async()=>{const e=await w("esri/widgets/Search/t9n/Search");this.messages=e,this.defaultPopupTemplate=new r({title:e.searchResult,content:"{Match_addr}"})};e(),this.addHandles([y((()=>[this.includeDefaultSources,this.view,this.portal]),(()=>this._update()),f),v(e)])}destroy(){this.removeAllHandles(),this._destroyFeatureLayers(),this._abortGoTo(),this.clearGraphics()}get activeSource(){return this.allSources.at(this.activeSourceIndex)??null}get activeSourceIndex(){return 1!==this.allSources.length&&this.searchAllEnabled?K:0}set activeSourceIndex(e){this._overrideIfSome("activeSourceIndex",e)}get allPlaceholder(){return this.messages?.allPlaceholder}set allPlaceholder(e){this._overrideIfSome("allPlaceholder",e)}get allSources(){const{sources:e,defaultSources:t,includeDefaultSources:s}=this,o="function"==typeof s?s.call(null,{sources:e,defaultSources:t}):s?t.concat(e):e,r=this._get("allSources")||new q;return r.removeAll(),r.addMany(o.filter(Boolean)),r}get locationEnabled(){return this._get("locationEnabled")||M()}set locationEnabled(e){if(void 0===e)return void this._clearOverride("locationEnabled");const t=M();if(e&&!t){const e=new a("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});Q.error(e)}this._override("locationEnabled",!!e&&t)}get placeholder(){const{allSources:e,activeSourceIndex:t,allPlaceholder:s}=this;if(t===K)return s??"";const o=e.at(t);return o?o.placeholder:""}set searchTerm(e){this._set("searchTerm",e||""),this.clearGraphics(),this.selectedSuggestion&&this.selectedSuggestion.text!==e&&this._set("selectedSuggestion",null),""===e&&this._clear()}get searchTerm(){return this._get("searchTerm")||""}get state(){return this._searching?"searching":this.updating?"loading":0===this.allSources.length?"disabled":"ready"}get updating(){return null!=this._updatingPromise}clear(){this.searchTerm=""}clearGraphics(){this._removeHighlight(),this._closePopup();const{view:e,resultGraphic:t}=this;e&&t&&e.graphics.remove(t),this._set("resultGraphic",null)}search(e,t){this.emit("search-start"),this.clearGraphics();const s=this._createSuggestionForSearch(e),o=(async()=>{try{await this.when();const e=await this._getResultsFromSources(s,t);if(c(t?.signal)?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:s.text??"",numResults:0,numErrors:0,errors:[],results:[]};this._formatResponse(o,e,s);const r=this._getFirstResult(o.results),i=s.location&&r?r.name:s.text,l=i?.replace(Z,"");return this._set("searchTerm",l),(s.key&&"number"==typeof s.sourceIndex||s.location)&&this._set("selectedSuggestion",s),this._set("results",o.results),this._set("resultCount",o.results.reduce(((e,t)=>e+(t.results?.length??0)),0)),this.emit("search-complete",o),await this._selectFirstResult(r),o}finally{this._clearSearching()}})();return this._searching=o,o}async searchNearby(e){if(!this.locationEnabled){const e=new a("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});throw Q.error(e),e}const t=(async()=>{try{const t=await O(),s=await A({position:t,view:this.view},e);return await this.search(s,e)}finally{this._clearSearching()}})();return this._searching=t,t}async select(e){if(this.clearGraphics(),!e){const t=new a("select:missing-parameter","Cannot select without a searchResult.",{searchResult:e});throw Q.error(t),t}const{view:t}=this,s=H(e,"sourceIndex")?e.sourceIndex:this._getSourceIndexOfResult(e),r=null!=s?this.allSources.at(s):null;if(!r){const e=new a("select:missing-source","Cannot select without a source.",{source:r});throw Q.error(e),e}const i=r instanceof L?this._getLayerSourcePopupTemplate(r):r.popupTemplate,l=r.resultSymbol||this._getDefaultSymbol(e),n=H(r,"resultGraphicEnabled")?r.resultGraphicEnabled:this.resultGraphicEnabled,u=H(r,"autoNavigate")?r.autoNavigate:this.autoNavigate,c=H(r,"popupEnabled")?r.popupEnabled:this.popupEnabled,m=c?i||this.popupTemplate||this.defaultPopupTemplate:null,{feature:d}=e;if(!d){const e=new a("select:missing-feature","Cannot select without a feature.",{feature:d});throw Q.error(e),e}const{attributes:y,geometry:g,layer:f,sourceLayer:j}=d,S=C(g),b={layerViewQuery:this._getLayerView(d),elevationQuery:t&&p(S)?D(S,t).catch((()=>S)):Promise.resolve(S)},_=await h(b),v=_.layerViewQuery.value,w=_.elevationQuery.value;l instanceof B&&(l.text=e.name);const k=t&&u?e.target||e.extent:null,I=p(k)?this._goToSearchResult(k):Promise.resolve();await I;const P=v?d:new o({geometry:g,symbol:l,attributes:y,layer:f,sourceLayer:j,popupTemplate:m}),E=c&&this.view?.popup,T=E&&P.getEffectivePopupTemplate(E.defaultPopupTemplateEnabled);return T&&E.open({features:[P],location:w}),v&&x(v)&&!T&&this._highlightFeature({graphic:P,layerView:v}),!v&&n&&t&&t.graphics.push(P),this._setResultFloor(e),this._set("selectedResult",e),this._set("resultGraphic",P),this.emit("select-result",{result:e,source:r,sourceIndex:s}),e}async suggest(e,t,s){const o=e||this.searchTerm;this.emit("suggest-start",{searchTerm:o}),await this._suggestTimer(t,s);const r=await this._suggestImmediate(o,s);return this._set("suggestions",r?.results),this._set("suggestionCount",r?.results.reduce(((e,t)=>e+(t.results?.length??0)),0)??null),this.emit("suggest-complete",r),r}async when(){await g((()=>!this.updating))}async _update(){const{portal:e,view:t}=this;if(this.includeDefaultSources){const s=this._updatingPromise=h([e?.load(),t?.when()]);if(this.destroyed)return;if(await s,s!==this._updatingPromise)return}await g((()=>this.messages)),this.destroyed||this._updateDefaultSources(),this._updatingPromise=null}_clearSearching(){this._searching=null}_convertHelperServices(){const e=this.portal?.helperServices?.geocode;return e?e.map((e=>{if(!1===e.placefinding)return;const t=s.apiKey&&P(e.url)?{url:E}:null,o=I.fromJSON({...e,...t}),r=o.url;if(P(r)||T(r)||R(r)){const e=o.outFields??["Addr_type","Match_addr","StAddr","City"],t=o.placeholder??this.messages?.placeholder??"",s="number"==typeof o.defaultZoomScale?o.defaultZoomScale:2500;o.set({singleLineFieldName:"SingleLine",outFields:e,placeholder:t,defaultZoomScale:s})}return o.singleLineFieldName?o:void 0})).filter(p):[]}_destroyFeatureLayers(){this._createdFeatureLayers.forEach((e=>e?.destroy())),this._createdFeatureLayers=[]}_getLayerSources(e,t){const s=this.view?.map;return e.map((e=>{const o=s.findLayerById(e.id);if(!o)return;const r=this._getLayerJSON(e),i=L.fromJSON(r);return i.placeholder=t,this._getLayer(o,r).then((e=>{i.layer=e})),i})).filter(p).toArray()}_getTableSources(e,t){const s=this.view?.map;return e.map((e=>{if(!e.id)return;const o=s.findTableById(e.id);if(!o)return;const r=this._getLayerJSON(e),i=L.fromJSON(r);return i.placeholder=t,this._getLayer(o,r).then((e=>{i.layer=e})),i})).filter(p).toArray()}_convertApplicationProperties(){const e=this.view?.map,t=e?.applicationProperties?.viewing?.search;if(!t)return[];const{enabled:s,hintText:o,layers:r,tables:i}=t;return s?[...this._getLayerSources(r,o),...this._getTableSources(i,o)]:[]}async _getSubLayer(e,t){if(await e.load(),!e.allSublayers)throw new Error;const s=e.allSublayers.find((e=>e.id===t.subLayer));if(!s)throw new Error;const o=await(s.createFeatureLayer?.());if(!o)throw new Error;return this._createdFeatureLayers.push(o),o}async _getBuildingSubLayer(e,t){await e.load();const s=e.allSublayers.find((e=>e.id===t.subLayer));if("building-component"!==s?.type)throw new Error;if(await s.load(),null==s.associatedLayer)throw new Error;return await s.associatedLayer.load(),s}async _getLayer(e,t){if("feature"===e.type||"scene"===e.type||"csv"===e.type||"geojson"===e.type||"ogc-feature"===e.type)return e;if("map-image"===e.type)try{return await this._getSubLayer(e,t)}catch(t){const s=new a("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:e});return Q.error(s),null}return"building-scene"===e.type?this._getBuildingSubLayer(e,t):null}_getLayerJSON(e){return"function"==typeof e.toJSON?e.toJSON():e}_updateDefaultSources(){const{defaultSources:e,includeDefaultSources:t}=this;this._destroyFeatureLayers(),e.removeAll(),t&&e.addMany([...this._convertApplicationProperties(),...this._convertHelperServices()])}_abortGoTo(){this._gotoController&&this._gotoController.abort(),this._gotoController=null}_clear(){this._abortGoTo(),this._set("resultCount",null),this._set("results",null),this._set("suggestions",null),this._set("suggestionCount",null),this._set("selectedResult",null),this._set("selectedSuggestion",null),this.emit("search-clear")}_closePopup(){const e=this.view?.popup,{resultGraphic:t}=this;if(!e||!t)return;const{selectedFeature:s}=e;s&&s===t&&e.close()}_suggestTimer(e,t){const s=null!=e?e:this.suggestionDelay;return d(s,null,t&&t.signal)}_createLocationForSearch(e){return e instanceof o?C(e.geometry):e instanceof b?e:Array.isArray(e)&&2===e.length?new b({longitude:e[0],latitude:e[1]}):null}_createSuggestionForSearch(e){if(e&&H(e,"key")&&H(e,"text")&&H(e,"sourceIndex"))return e;const t=this._createLocationForSearch(e),s="string"==typeof e?e:this.searchTerm,{selectedSuggestion:o,selectedResult:r}=this,i=!e&&o&&r,l=i&&o.key===r.key&&o.sourceIndex===r.sourceIndex,a=i&&o.location;return l||a?o:{location:c(t),text:t?"":s,sourceIndex:null,key:null}}_getFirstResult(e){let t=null;return e&&e.some((e=>{const{results:s}=e,o=s?.[0],r=!!o;return r&&(t=o),r})),t}async _selectFirstResult(e){return this.autoSelect&&e?this.select(e):null}async _suggestImmediate(e,t){await this.when();const s=await this._getSuggestionsFromSources(e,t);if(c(t?.signal)?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:e??"",numResults:0,numErrors:0,errors:[],results:[]};return this._formatResponse(o,s),o}_formatSourceResponse(e,t,s){const o=t?.value||[],r=t?.error,i=this.allSources.at(s);if(r){const t={sourceIndex:s,source:i,error:r};e.errors.push(t),Q.error(r),e.numErrors++}else{const t={sourceIndex:s,source:i,results:o};e.results.push(t),e.numResults+=o.length}}_formatResponse(e,t,s){if(t)if(e.activeSourceIndex===K){const o=s&&H(s,"sourceIndex")&&-1!==s.sourceIndex?s.sourceIndex:void 0;t.forEach(((t,s)=>{const r=void 0!==o?o:s;this._formatSourceResponse(e,t,r)}))}else this._formatSourceResponse(e,t[0],e.activeSourceIndex)}async _getResultsFromSources(e,t){const{allSources:s}=this,o=!e.location&&H(e,"sourceIndex")?e.sourceIndex:this.activeSourceIndex,r=[];if(!s.length){const e=new a("search:no-sources-defined","At least one source is required.",{allSources:s});throw Q.error(e),e}return o===K?s.forEach(((s,o)=>{r.push(this._getResultsFromSource(e,o,t))})):r.push(this._getResultsFromSource(e,o,t)),h(r)}async _getSuggestionsFromSources(e,t){const{allSources:s,activeSourceIndex:o}=this,r=[];if(!s.length){const e=new a("suggest:no-sources-defined","At least one source is required.",{allSources:s});throw Q.error(e),e}return o===K?s.forEach(((s,o)=>{r.push(this._getSuggestionsFromSource(e,o,t))})):r.push(this._getSuggestionsFromSource(e,o,t)),h(r)}async _getResultsFromSource(e,t,s){const o=null!=t?this.allSources.at(t):null;if(!o)return null;const{location:r=null}=e,i=this.view?.spatialReference||W,l=H(o,"maxResults")?o.maxResults:this.maxResults,a=!!(o instanceof L&&H(o,"exactMatch"))&&o.exactMatch,{view:n}=this;return o.getResults?.({view:n,sourceIndex:t,location:r,suggestResult:e,spatialReference:i,exactMatch:a,maxResults:l},s)}async _getSuggestionsFromSource(e,t,s){const o=this.allSources.at(t);if(!o)return null;e??(e="");const r=H(o,"suggestionsEnabled")?o.suggestionsEnabled:this.suggestionsEnabled,i=e?.length,l=H(o,"minSuggestCharacters")?o.minSuggestCharacters:this.minSuggestCharacters;if(r&&e.trim()&&i>=l){const r=this.view?.spatialReference||W,i=H(o,"maxSuggestions")?o.maxSuggestions:this.maxSuggestions,{view:l}=this,a=!!(o instanceof L&&H(o,"exactMatch"))&&o.exactMatch;return o.getSuggestions?.({view:l,sourceIndex:t,suggestTerm:e,spatialReference:r,maxSuggestions:i,exactMatch:a},s)}return null}_getLayerSourcePopupTemplate(e){const{layer:t}=e;if(t)return H(e,"popupTemplate")?e.popupTemplate:t.popupTemplate}_getSourceIndexOfResult(e){const t=this.results;if(!t)return null;let s=null;return t.some((t=>t.results.some((o=>o===e&&(s=t.sourceIndex,!0))))),s}async _goToSearchResult(e){const t=!!e;this._abortGoTo();const s=new AbortController;this._gotoController=s;const o={target:{target:e},options:{animate:t,signal:s.signal}};await this.callGoTo(o),this._gotoController=null}_getDefaultSymbol(e){const{defaultSymbols:t}=this,s=e.feature?.geometry;if(m(s))return null;switch(s.type){case"point":case"multipoint":return t.point;case"polyline":return t.polyline;case"extent":case"polygon":return t.polygon;default:return null}}_removeHighlight(){this.removeHandles(z)}async _getLayerView(e){const{view:t}=this;if(!e||!t||"building-component"===e.layer?.type||"subtype-sublayer"===e.layer?.type)return null;const{layer:s}=e;return s?(await t.when(),t.whenLayerView(s)):null}_highlightFeature(e){const{graphic:t,layerView:s}=e,{attributes:o,layer:r}=t,{objectIdField:i}=r,l=(i&&o?.[i])??null,a=s.highlight(l??t);this.addHandles(a,z)}_setResultFloor(e){const{view:t}=this,s=e.feature?.attributes,o=e.feature?.sourceLayer;if(o&&"floorInfo"in o&&o?.floorInfo?.floorField&&s){const e=s[o.floorInfo.floorField];t?.emit("select-result-floor",e)}}};X.ALL_INDEX=K,e([j()],X.prototype,"_searching",void 0),e([j()],X.prototype,"_updatingPromise",void 0),e([j({readOnly:!0,value:null})],X.prototype,"activeSource",null),e([j()],X.prototype,"activeSourceIndex",null),e([j()],X.prototype,"allPlaceholder",null),e([j({readOnly:!0})],X.prototype,"allSources",null),e([j()],X.prototype,"autoNavigate",void 0),e([j()],X.prototype,"autoSelect",void 0),e([j()],X.prototype,"defaultPopupTemplate",void 0),e([j({readOnly:!0})],X.prototype,"defaultSources",void 0),e([j()],X.prototype,"defaultSymbols",void 0),e([j()],X.prototype,"includeDefaultSources",void 0),e([j()],X.prototype,"locationEnabled",null),e([j()],X.prototype,"maxInputLength",void 0),e([j()],X.prototype,"maxResults",void 0),e([j()],X.prototype,"maxSuggestions",void 0),e([j()],X.prototype,"messages",void 0),e([j()],X.prototype,"minSuggestCharacters",void 0),e([j({readOnly:!0})],X.prototype,"placeholder",null),e([j()],X.prototype,"popupEnabled",void 0),e([j({type:r})],X.prototype,"popupTemplate",void 0),e([j({type:k})],X.prototype,"portal",void 0),e([j()],X.prototype,"resultCount",void 0),e([j()],X.prototype,"resultGraphicEnabled",void 0),e([j({readOnly:!0})],X.prototype,"resultGraphic",void 0),e([j({readOnly:!0})],X.prototype,"results",void 0),e([j({readOnly:!0})],X.prototype,"selectedSuggestion",void 0),e([j()],X.prototype,"searchAllEnabled",void 0),e([j({readOnly:!0})],X.prototype,"selectedResult",void 0),e([j()],X.prototype,"searchTerm",null),e([j({type:q})],X.prototype,"sources",void 0),e([j({readOnly:!0})],X.prototype,"state",null),e([j()],X.prototype,"suggestionDelay",void 0),e([j()],X.prototype,"suggestionCount",void 0),e([j({readOnly:!0})],X.prototype,"suggestions",void 0),e([j()],X.prototype,"suggestionsEnabled",void 0),e([j({readOnly:!0})],X.prototype,"updating",null),e([j()],X.prototype,"view",void 0),e([j()],X.prototype,"clear",null),X=e([S(J)],X);const Y=X;export{Y as default};
