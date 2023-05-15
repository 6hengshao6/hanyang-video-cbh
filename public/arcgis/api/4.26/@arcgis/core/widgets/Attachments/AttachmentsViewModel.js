/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../Graphic.js";import r from"../../core/Accessor.js";import o from"../../core/Collection.js";import i from"../../core/Error.js";import{a as s,i as n}from"../../chunks/maybe.js";import{watch as a,initial as l}from"../../core/reactiveUtils.js";import{property as p}from"../../core/accessorSupport/decorators/property.js";import{cast as c}from"../../core/accessorSupport/decorators/cast.js";import"../../chunks/typedArrayUtil.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import u from"../../rest/query/support/AttachmentInfo.js";import f from"../../rest/support/AttachmentQuery.js";import"../../intl.js";import{L as d}from"../../chunks/Logger.js";import{r as h}from"../../chunks/string.js";import{f as y,a as j,b,c as g}from"../../chunks/number.js";import{featureHasFields as I,isRasterPixelValueField as A}from"../../layers/support/fieldUtils.js";import{c as k}from"../../chunks/layerUtils.js";import w from"../../popup/support/FieldInfoFormat.js";import{l as v}from"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/lang.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/messages.js";import"../../chunks/assets.js";const S=d.getLogger("esri.widgets.Feature.support.featureUtils"),F=/href=(""|'')/gi,L=/(\{([^\{\r\n]+)\})/g,C=/\'/g,M=/^\s*expression\//i,D=/(\n)/gi,q=/[\u00A0-\u9999<>\&]/gim,U=/href\s*=\s*(?:\"([^\"]+)\"|\'([^\']+)\')/gi,E=/^(?:mailto:|tel:)/,x="relationships/",P=g("short-date-short-time");function T(t){if(!s(t))return t.get("sourceLayer")||t.get("layer")}async function N(t,e){return"function"==typeof t?t.call(null,e):t}function _(t=""){if(t)return!E.test(t.trim().toLowerCase())}function R(t){return!!t&&M.test(t)}function O(t,e){const r=function(t,e){if(!R(e)||!t)return null;const r=e.replace(M,"").toLowerCase();let o=null;return t.some((t=>t.name.toLowerCase()===r&&(o=t,!0))),o}(e,t?.fieldName);return r?r.title||null:t?t.label||t.fieldName:null}function $(t,e){const r=z(e,t);return r?r.name:t}function G(t,e){return t&&t.map((t=>$(t,e)))}function z(t,e){return t&&"function"==typeof t.getField&&e?t.getField(e)??null:null}function B(t){return`${t}`.trim()}function V({attributes:t,globalAttributes:e,layer:r,text:o,expressionAttributes:i,fieldInfoMap:s}){return o?Q({formattedAttributes:e,template:W(o,{...e,...i,...t},r),fieldInfoMap:s}):""}function Q({formattedAttributes:t,template:e,fieldInfoMap:r}){return B((o=h(h(e,(t=>function(t,e){const r=e.get(t.toLowerCase());return`{${r&&r.fieldName||t}}`}(t,r))),t),o.replace(F,"")));var o}function H(t,e){return t.replace(L,((t,r,o)=>{const i=z(e,o);return i?`{${i.name}}`:r}))}function W(t,e,r){const o=H(t,r);return o?o.replace(U,((t,r,o)=>function(t,e,r){const o=(e=B(e))&&"{"!==e[0];return h(t,function(t,e=!1){const r={...t};return Object.keys(r).forEach((t=>function(t,e,r=!1){const o=e[t];if("string"==typeof o){const i="%27",s=(r?encodeURIComponent(o):o).replace(C,i);e[t]=s}}(t,r,e))),r}(r,o||!1))}(t,r||o,e))):o}function Z(t){return!!t?.layer}function J(t,e){if(!t||!t.length||!e)return;const r=e.toLowerCase();let o;return t.some((t=>!(!t.fieldName||t.fieldName.toLowerCase()!==r||(o=t,0)))),o}function K(t,e){const{creatorField:r,creationDateField:o,editorField:i,editDateField:s}=t;if(!e)return;const n=e[s];if("number"==typeof n){const t=e[i];return{type:"edit",date:y(n,P),user:t}}const a=e[o];if("number"==typeof a){const t=e[r];return{type:"create",date:y(a,P),user:t}}return null}function X(t,e){const r=new Map;return t?(t.forEach((t=>{const o=$(t.fieldName,e);t.fieldName=o,r.set(o.toLowerCase(),t)})),r):r}function Y(t){const e=[];if(!t)return e;const{fieldInfos:r,content:o}=t;return r&&e.push(...r),o&&Array.isArray(o)?(o.forEach((t=>{if("fields"===t.type){const r=t&&t.fieldInfos;r&&e.push(...r)}})),e):e}function tt(t){return t.replace(q,(t=>`&#${t.charCodeAt(0)};`))}function et(t){return"string"==typeof t?t.replace(D,'<br class="esri-text-new-line" />'):t}function rt(t){const{value:e,fieldName:r,fieldInfos:o,fieldInfoMap:i,layer:s,graphic:n}=t;if(null==e)return"";const a=function({fieldName:t,value:e,graphic:r,layer:o}){if(nt(t))return null;if(!o||"function"!=typeof o.getFieldDomain)return null;const i=r&&o.getFieldDomain(t,{feature:r});return i&&"coded-value"===i.type?i.getName(e):null}({fieldName:r,value:e,graphic:n,layer:s});if(a)return a;const l=function({fieldName:t,graphic:e,layer:r}){if(nt(t))return null;if(!r||"function"!=typeof r.getFeatureType)return null;const{typeIdField:o}=r;if(!o||t!==o)return null;const i=r.getFeatureType(e);return i?i.name:null}({fieldName:r,graphic:n,layer:s});if(l)return l;if(i.get(r.toLowerCase()))return function(t,e){const r=e.fieldName,o=J(e.fieldInfos,r),i=o?.clone(),s=e.preventPlacesFormatting,n=e.layer,a=z(n,r);if(i&&"date"===a?.type){const t=i.format||new w;t.dateFormat=t.dateFormat||"short-date-short-time",t.dateTimeFormatOptions=!Z(n)&&function(t){return"feature"===t?.type}(n)&&n.datesInUnknownTimezone||Z(n)&&function(t){return"map-image"===t?.type}(n.layer)&&n.layer.datesInUnknownTimezone?{timeZone:"UTC"}:null,i.format=t}const l=i&&i.format;return"string"==typeof t&&A(r)&&l?l.formatRasterPixelValue(t):(t=function(t,e){if("string"==typeof t&&e&&null==e.dateFormat&&(null!=e.places||null!=e.digitSeparator)){const e=Number(t);if(!isNaN(e))return e}return t}(t,l),"string"==typeof t||null==t||null==l?et(t):s?j(t,{...b(l),minimumFractionDigits:0,maximumFractionDigits:20}):l.format(t))}(e,{fieldInfos:o||Array.from(i.values()),fieldName:r,layer:s});const p=s&&s.fieldsIndex;return p&&p.isDateField(r)?y(e,P):et(e)}function ot({fieldInfos:t,attributes:e,layer:r,graphic:o,fieldInfoMap:i,relatedInfos:s}){const n={};return s?.forEach((e=>function({attributes:t,relatedInfo:e,fieldInfoMap:r,fieldInfos:o,layer:i}){t&&e&&(e.relatedFeatures&&e.relatedFeatures&&e.relatedFeatures.forEach((s=>at({attributes:t,graphic:s,relatedInfo:e,fieldInfoMap:r,fieldInfos:o,layer:i}))),e.relatedStatsFeatures&&e.relatedStatsFeatures&&e.relatedStatsFeatures.forEach((s=>at({attributes:t,graphic:s,relatedInfo:e,fieldInfoMap:r,fieldInfos:o,layer:i}))))}({attributes:n,relatedInfo:e,fieldInfoMap:i,fieldInfos:t,layer:r}))),e&&Object.keys(e).forEach((s=>{const a=e[s];n[s]=rt({fieldName:s,fieldInfos:t,fieldInfoMap:i,layer:r,value:a,graphic:o})})),n}async function it(t,e){const{layer:r,graphic:o,outFields:i,objectIds:s,returnGeometry:n,spatialReference:a}=t,l=s[0];if("number"!=typeof l&&"string"!=typeof l){const t="Could not query required fields for the specified feature. The feature's ID is invalid.",e={layer:r,graphic:o,objectId:l,requiredFields:i};return S.warn(t,e),null}if(!k(r)?.operations?.supportsQuery){const t="The specified layer cannot be queried. The following fields will not be available.",e={layer:r,graphic:o,requiredFields:i,returnGeometry:n};return S.warn(t,e),null}const p=r.createQuery();return p.objectIds=s,p.outFields=i?.length?i:[r.objectIdField],p.returnGeometry=!!n,p.returnZ=!!n,p.returnM=!!n,p.outSpatialReference=a,(await r.queryFeatures(p,e)).features[0]}async function st({graphic:t,popupTemplate:e,layer:r,spatialReference:o},i){if(!r||!e)return;if("function"==typeof r.load&&await r.load(i),!t.attributes)return;const s=t.attributes[r.objectIdField];if(null==s)return;const n=[s],a=await e.getRequiredFields(r.fieldsIndex),l=I(a,t),p=l?[]:a,c=e.returnGeometry||await async function(t){if(!t.expressionInfos?.length)return!1;const e=await v(),{arcadeUtils:{hasGeometryFunctions:r}}=e;return r(t)}(e);if(l&&!c)return;const m=await it({layer:r,graphic:t,outFields:p,objectIds:n,returnGeometry:c,spatialReference:o},i);m&&(m.geometry&&(t.geometry=m.geometry),m.attributes&&(t.attributes={...t.attributes,...m.attributes}))}function nt(t=""){return!!t&&t.includes(x)}function at({attributes:t,graphic:e,relatedInfo:r,fieldInfos:o,fieldInfoMap:i,layer:s}){t&&e&&r&&Object.keys(e.attributes).forEach((n=>{const a=(l={layerId:r.relation.id.toString(),fieldName:n})?`${x}${l.layerId}/${l.fieldName}`:"";var l;const p=e.attributes[n];t[a]=rt({fieldName:a,fieldInfos:o,fieldInfoMap:i,layer:s,value:p,graphic:e})}))}const lt=t=>{if(!t)return!1;const e=t.toUpperCase();return e.includes("CURRENT_TIMESTAMP")||e.includes("CURRENT_DATE")||e.includes("CURRENT_TIME")},pt=({layer:t,method:e,query:r,definitionExpression:o})=>{if(!t.capabilities?.query?.supportsCacheHint||"attachments"===e)return;const i=n(r.where)?r.where:null,s=n(r.geometry)?r.geometry:null;lt(o)||lt(i)||"extent"===s?.type||"tile"===r.resultType||(r.cacheHint=!0)},ct=({query:t,layer:e,method:r})=>{pt({layer:e,method:r,query:t,definitionExpression:`${e.definitionExpression} ${e.serviceDefinitionExpression}`})},mt=({queryPayload:t,layer:e,method:r})=>{pt({layer:e,method:r,query:t,definitionExpression:`${e.definitionExpression} ${e.serviceDefinitionExpression}`})};function ut(t,e,r){return t&&e&&r?ft(t.allLayers,e,r)||ft(t.allTables,e,r):null}function ft(t,e,r){return t.find((t=>t!==e&&"feature"===t.type&&t.url===e.url&&t.layerId===r.relatedTableId))}const dt={editing:!1,operations:{add:!0,update:!0,delete:!0}},ht=o.ofType(u);let yt=class extends r{constructor(t){super(t),this._getAttachmentsPromise=null,this._attachmentLayer=null,this.abilities={...dt},this.activeAttachmentInfo=null,this.activeFileInfo=null,this.attachmentInfos=new ht,this.fileInfos=new o,this.graphic=null,this.mode="view",this.filesEnabled=!1,this.addHandles(a((()=>this.graphic),(()=>this._graphicChanged()),l))}destroy(){this._attachmentLayer=null,this.graphic=null}castAbilities(t){return{...dt,...t}}get state(){return this._getAttachmentsPromise?"loading":this.graphic?"ready":"disabled"}get supportsResizeAttachments(){const{graphic:t}=this;if(!t)return!1;const e=t.layer||t.sourceLayer;return e?.loaded&&"capabilities"in e&&e.capabilities&&"operations"in e.capabilities&&"supportsResizeAttachments"in e.capabilities.operations&&e.capabilities.operations.supportsResizeAttachments||!1}async getAttachments(){const{_attachmentLayer:t,attachmentInfos:e}=this;if(!t||"function"!=typeof t.queryAttachments)throw new i("invalid-layer","getAttachments(): A valid layer is required.");const r=this._getObjectId(),o=new f({objectIds:[r],returnMetadata:!0}),s=[],n=t.queryAttachments(o).then((t=>t[r]||s)).catch((()=>s));this._getAttachmentsPromise=n,this.notifyChange("state");const a=await n;return e.removeAll(),a.length&&e.addMany(a),this._getAttachmentsPromise=null,this.notifyChange("state"),a}async addAttachment(t,e=this.graphic){const{_attachmentLayer:r,attachmentInfos:o,abilities:s}=this;if(!e)throw new i("invalid-graphic","addAttachment(): A valid graphic is required.",{graphic:e});if(!t)throw new i("invalid-attachment","addAttachment(): An attachment is required.",{attachment:t});if(!s.operations?.add)throw new i("invalid-abilities","addAttachment(): add abilities are required.");if(!r||"function"!=typeof r.addAttachment)throw new i("invalid-layer","addAttachment(): A valid layer is required.");const n=r.addAttachment(e,t).then((t=>this._queryAttachment(t.objectId,e))),a=await n;return o.add(a),a}async deleteAttachment(t){const{_attachmentLayer:e,attachmentInfos:r,graphic:o,abilities:s}=this;if(!t)throw new i("invalid-attachment-info","deleteAttachment(): An attachmentInfo is required.",{attachmentInfo:t});if(!s.operations?.delete)throw new i("invalid-abilities","deleteAttachment(): delete abilities are required.");if(!e||"function"!=typeof e.deleteAttachments)throw new i("invalid-layer","deleteAttachment(): A valid layer is required.");if(!o)throw new i("invalid-graphic","deleteAttachment(): A graphic is required.");const n=e.deleteAttachments(o,[t.id]).then((()=>t)),a=await n;return r.remove(a),a}async updateAttachment(t,e=this.activeAttachmentInfo){const{_attachmentLayer:r,attachmentInfos:o,graphic:s,abilities:n}=this;if(!t)throw new i("invalid-attachment","updateAttachment(): An attachment is required.",{attachment:t});if(!e)throw new i("invalid-attachment-info","updateAttachment(): An attachmentInfo is required.",{attachmentInfo:e});if(!n.operations?.update)throw new i("invalid-abilities","updateAttachment(): Update abilities are required.");const a=o.findIndex((t=>t===e));if(!r||"function"!=typeof r.updateAttachment)throw new i("invalid-layer","updateAttachment(): A valid layer is required.");if(!s)throw new i("invalid-graphic","updateAttachment(): A graphic is required.");const l=r.updateAttachment(s,e.id,t).then((t=>this._queryAttachment(t.objectId))),p=await l;return o.splice(a,1,p),p}async commitFiles(){return await Promise.all(this.fileInfos.items.map((t=>this.addAttachment(t.form)))),this.fileInfos.removeAll(),this.getAttachments()}addFile(t,e){if(!t||!e)return null;const r={file:t,form:e};return this.fileInfos.add(r),r}updateFile(t,e,r=this.activeFileInfo){if(!t||!e||!r)return null;const o=this.fileInfos.findIndex((t=>r===t));return o>-1&&this.fileInfos.splice(o,1,{file:t,form:e}),this.fileInfos.items[o]}deleteFile(t){const e=this.fileInfos.find((e=>e.file===t));return e?(this.fileInfos.remove(e),e):null}async _queryAttachment(t,e){const{_attachmentLayer:r}=this;if(!t||!r?.queryAttachments)throw new i("invalid-attachment-id","Could not query attachment.");const o=this._getObjectId(e),s=new f({objectIds:[o],attachmentsWhere:`AttachmentId=${t}`,returnMetadata:!0});return r.queryAttachments(s).then((t=>t[o][0]))}_getObjectId(t=this.graphic){return t?.getObjectId()??null}_graphicChanged(){this.graphic&&(this._setAttachmentLayer(),this.getAttachments().catch((()=>{})))}_setAttachmentLayer(){const{graphic:t}=this,e=T(t);this._attachmentLayer=e?"scene"===e.type&&n(e.associatedLayer)?e.associatedLayer:e:null}};t([p()],yt.prototype,"abilities",void 0),t([c("abilities")],yt.prototype,"castAbilities",null),t([p()],yt.prototype,"activeAttachmentInfo",void 0),t([p()],yt.prototype,"activeFileInfo",void 0),t([p({readOnly:!0,type:ht})],yt.prototype,"attachmentInfos",void 0),t([p()],yt.prototype,"fileInfos",void 0),t([p({type:e})],yt.prototype,"graphic",void 0),t([p()],yt.prototype,"mode",void 0),t([p({readOnly:!0})],yt.prototype,"state",null),t([p()],yt.prototype,"filesEnabled",void 0),t([p({readOnly:!0})],yt.prototype,"supportsResizeAttachments",null),yt=t([m("esri.widgets.Attachments.AttachmentsViewModel")],yt);const jt=yt;export{O as a,V as b,Q as c,G as d,jt as default,$ as e,H as f,N as g,R as h,nt as i,J as j,et as k,tt as l,ut as m,X as n,Y as o,T as p,it as q,K as r,_ as s,st as t,ot as u,ct as v,mt as w};
