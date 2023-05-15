/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../config.js";import r from"../Graphic.js";import s from"../PopupTemplate.js";import o from"../request.js";import n from"../core/Collection.js";import{C as i}from"../chunks/CollectionFlattener.js";import{J as a}from"../chunks/jsonMap.js";import{clone as l}from"../core/lang.js";import{i as m,a as p}from"../chunks/maybe.js";import{M as u}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as c}from"../core/promiseUtils.js";import{on as y,watch as d,sync as f}from"../core/reactiveUtils.js";import{urlToObject as h,addQueryParameters as j,addProxy as g,Url as b}from"../core/urlUtils.js";import{property as x}from"../core/accessorSupport/decorators/property.js";import{I as S}from"../chunks/ensureType.js";import{r as k}from"../chunks/reader.js";import{subclass as I}from"../core/accessorSupport/decorators/subclass.js";import{w}from"../chunks/writer.js";import{a as v}from"../core/JSONSupport.js";import F from"../geometry/Extent.js";import E from"../geometry/SpatialReference.js";import{g as L}from"../chunks/scaleUtils.js";import{f as N}from"../chunks/unitUtils.js";import M from"./Layer.js";import{BlendLayer as U}from"./mixins/BlendLayer.js";import{O as P}from"../chunks/OperationalLayer.js";import{PortalLayer as R}from"./mixins/PortalLayer.js";import{RefreshableLayer as C}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as A}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as O}from"./mixins/TemporalLayer.js";import{i as T}from"../chunks/crsUtils.js";import{d as D}from"../chunks/arcgisLayerUrl.js";import{a as _,u as B}from"../chunks/commonProperties2.js";import{E as V}from"../chunks/ExportWMSImageParameters.js";import{c as W}from"../chunks/imageBitmapUtils.js";import q from"./support/WMSSublayer.js";import $ from"../core/Error.js";import"../chunks/typedArrayUtil.js";import"../chunks/object.js";import"../geometry.js";import"../geometry/Geometry.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../chunks/enumeration.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/asyncUtils.js";import"../chunks/layerUtils.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"../chunks/TimeReference.js";import"../chunks/datetime.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../core/HandleOwner.js";import"../chunks/WatchUpdatingTracking.js";const G={84:4326,83:4269,27:4267};function H(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new $("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const s=z("Capability",r),o=z("Service",r),n=s&&z("Request",s);if(!s||!o||!n)return null;const i=z("Layer",s);if(!i)return null;const a="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",l=Y("Title",o,"")||Y("Name",o,""),p=Y("AccessConstraints",o,""),u=/^none$/i.test(p)?"":p,c=Y("Abstract",o,""),y=parseInt(Y("MaxWidth",o,"5000"),10),d=parseInt(Y("MaxHeight",o,"5000"),10),f=te(n,"GetMap"),h=ee(n,"GetMap"),j=se(i,a,t);if(!j)return null;let g,b=0;const x=Array.prototype.slice.call(s.childNodes),S=j.sublayers??[],k=e=>{null!=e&&S.push(e)};x.forEach((e=>{"Layer"===e.nodeName&&(0===b?g=e:1===b?(j.name&&(j.name="",k(se(g,a,t))),k(se(e,a,t))):k(se(e,a,t)),b++)}));let I=j.sublayers,w=j.extent;const v=j.fullExtents??[];if(I||(I=[]),0===I.length&&I.push(j),!w){const e=new F(I[0].extent);j.extent=e.toJSON(),w=j.extent}const E=j.spatialReferences.length>0?j.spatialReferences:X(j),L=ee(n,"GetFeatureInfo"),N=L?te(n,"GetFeatureInfo"):null,M=J(I),U=j.minScale||0,P=j.maxScale||0,R=j.dimensions??[],C=M.reduce(((e,t)=>e.concat(t.dimensions??[])),[]),A=R.concat(C).filter(ne);let O=null;if(A.length){const e=A.map((e=>{const{extent:t}=e;return r=t,Array.isArray(r)&&r.length>0&&r[0]instanceof Date?t.map((e=>e.getTime())):t?.map((e=>[e.min.getTime(),e.max.getTime()]));var r})).flat(2).filter(m);O={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...e),Math.max(...e)]}}return{copyright:u,description:c,dimensions:R,extent:w,fullExtents:v,featureInfoFormats:N,featureInfoUrl:L,mapUrl:h,maxWidth:y,maxHeight:d,maxScale:P,minScale:U,layers:M,spatialReferences:E,supportedImageFormatTypes:f,timeInfo:O,title:l,version:a}}function X(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=X(t);if(e.length>0)return e}return[]}function J(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(J(r.sublayers)),delete r.sublayers);return t}function Q(e,t,r){return t.getAttribute(e)??r}function z(e,t){for(let r=0;r<t.childNodes.length;r++){const s=t.childNodes[r];if(oe(s)&&s.nodeName===e)return s}return null}function K(e,t){if(null==t)return[];const r=[];for(let s=0;s<t.childNodes.length;s++){const o=t.childNodes[s];oe(o)&&o.nodeName===e&&r.push(o)}return r}function Y(e,t,r){return z(e,t)?.textContent??r}function Z(e,t,r){if(!e)return null;const s=parseFloat(e.getAttribute("minx")),o=parseFloat(e.getAttribute("miny")),n=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let a,l,m,p;r?(a=isNaN(o)?-Number.MAX_VALUE:o,l=isNaN(s)?-Number.MAX_VALUE:s,m=isNaN(i)?Number.MAX_VALUE:i,p=isNaN(n)?Number.MAX_VALUE:n):(a=isNaN(s)?-Number.MAX_VALUE:s,l=isNaN(o)?-Number.MAX_VALUE:o,m=isNaN(n)?Number.MAX_VALUE:n,p=isNaN(i)?Number.MAX_VALUE:i);const u=new E({wkid:t});return new F({xmin:a,ymin:l,xmax:m,ymax:p,spatialReference:u})}function ee(e,t){const r=z(t,e);if(r){const e=z("DCPType",r);if(e){const t=z("HTTP",e);if(t){const e=z("Get",t);if(e){let t=function(e,t,r,s){const o=z("OnlineResource",r);return o?Q("xlink:href",o,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],s=h(e);for(const e in s.query)s.query.hasOwnProperty(e)&&(t.includes(e.toLowerCase())||r.push(e+"="+s.query[e]));return s.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function te(e,t){const r=K("Operation",e);if(!r.length)return K("Format",z(t,e)).map((({textContent:e})=>e)).filter(m);const s=[];for(const e of r)if(e.getAttribute("name")===t){const t=K("Format",e);for(const{textContent:e}of t)null!=e&&s.push(e)}return s}function re(e,t,r){const s=z(t,e);if(!s)return r;const{textContent:o}=s;if(null==o||""===o)return r;const n=Number(o);return isNaN(n)?r:n}function se(e,t,r){if(!e)return null;const s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},o=z("LatLonBoundingBox",e),n=z("EX_GeographicBoundingBox",e);let i=null;o&&(i=Z(o,4326)),n&&(i=new F(0,0,0,0,new E({wkid:4326})),i.xmin=parseFloat(Y("westBoundLongitude",n,"0")),i.ymin=parseFloat(Y("southBoundLatitude",n,"0")),i.xmax=parseFloat(Y("eastBoundLongitude",n,"0")),i.ymax=parseFloat(Y("northBoundLatitude",n,"0"))),o||n||(i=new F(-180,-90,180,90,new E({wkid:4326}))),s.minScale=re(e,"MaxScaleDenominator",0),s.maxScale=re(e,"MinScaleDenominator",0);const a=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)s.name=e.textContent||"";else if("Title"===e.nodeName)s.title=e.textContent||"";else if("Abstract"===e.nodeName)s.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(a);if(r&&0===r.indexOf("EPSG:")){const s=parseInt(r.substring(5),10);0===s||isNaN(s)||i||(i="1.3.0"===t?Z(e,s,T(s)):Z(e,s))}const o=r&&r.indexOf(":");if(o&&o>-1){let n=parseInt(r.substring(o+1,r.length),10);0===n||isNaN(n)||(n=G[n]??n);const i="1.3.0"===t?Z(e,n,T(n)):Z(e,n);i&&s.fullExtents&&s.fullExtents.push(i)}}else if(e.nodeName===a)(e.textContent?.split(" ")??[]).forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){const e=G[t]??t;s.spatialReferences.includes(e)||s.spatialReferences.push(e)}}));else if("Style"!==e.nodeName||s.legendURL){if("Layer"===e.nodeName){const o=se(e,t,r);o&&(o.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(o))}}else{const t=z("LegendURL",e);if(t){const e=z("OnlineResource",t);e&&(s.legendURL=e.getAttribute("xlink:href"))}}})),s.extent=i?.toJSON(),s.dimensions=K("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),s=e.textContent,o=e.getAttribute("unitSymbol")??void 0,n=e.getAttribute("default")??void 0,i="0"!==Q("default",e,"0"),a="0"!==Q("nearestValue",e,"0"),l="0"!==Q("current",e,"0");return ne({name:t,units:r})?{name:"time",units:"ISO8601",extent:le(s),default:le(n),multipleValues:i,nearestValue:a,current:l}:/^elevation$/i.test((m={name:t,units:r}).name)&&/^(epsg|crs):\d+$/i.test(m.units)?{name:"elevation",units:r,extent:ie(s),unitSymbol:o,default:ie(n),multipleValues:i,nearestValue:a}:{name:t,units:r,extent:ae(s),unitSymbol:o,default:ae(n),multipleValues:i,nearestValue:a};var m})),s}function oe(e){return e.nodeType===Node.ELEMENT_NODE}function ne(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ie(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(m):r.map((e=>parseFloat(e)))}function ae(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(m):r}function le(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?function(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:me(t[1]),months:me(t[2]),days:me(t[3]),hours:me(t[4]),minutes:me(t[5]),seconds:me(t[6])}:null}(t[2]):void 0}})).filter(m):r.map((e=>new Date(e)))}function me(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function pe(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const ue=new Set([102100,3857,102113,900913]),ce=new Set([3395,54004]),ye=new a({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function de(e){return"text/html"===e}function fe(e){return"text/plain"===e}let he=class extends(U(O(C(A(P(R(u(M)))))))){constructor(...e){super(...e),this.allSublayers=new i({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.addHandles([y((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=e.layer=this}),f),y((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),f),d((()=>this.sublayers),((e,t)=>{if(t)for(const e of t)e.layer=e.parent=null;if(e)for(const t of e)t.parent=t.layer=this}),f)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=m(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(c).then((()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new F({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return p(this.featureInfoFormats)?null:this.featureInfoFormats.find(de)??this.featureInfoFormats.find(fe)??null}set featureInfoFormat(e){m(e)?(de(e)||fe(e))&&this._override("featureInfoFormat",e):(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat"))}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new E(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return je(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return je(t.layers,r)}writeSublayers(e,t,r,s){t.layers=[];const o=new Map,n=e.flatten((({sublayers:e})=>e??[]));for(const e of n)if("number"==typeof e.parent?.id){const t=o.get(e.parent.id);null!=t?t.push(e.id):o.set(e.parent.id,[e.id])}for(const e of n){const r={sublayer:e,...s},n=e.write({parentLayerId:"number"==typeof e.parent?.id?e.parent.id:-1},r);if(o.has(e.id)&&(n.sublayerIds=o.get(e.id)),!e.sublayers&&e.name){const s=e.write({},r);delete s.id,t.layers.push(s)}}t.visibleLayers=n.filter((({visible:e,sublayers:t})=>e&&!t)).map((({name:e})=>e)).toArray()}createExportImageParameters(e,t,r,s){const o=s?.pixelRatio??1,n=L({extent:e,width:t})*o,i=new V({layer:this,scale:n}),{xmin:a,ymin:l,xmax:m,ymax:u,spatialReference:c}=e,y=function(e,t){let r=e.wkid;return p(t)?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&ue.has(r)?t.find((e=>ue.has(e)))||t.find((e=>ce.has(e)))||102100:r)}(c,this.spatialReferences),d="1.3.0"===this.version&&T(y)?`${l},${a},${u},${m}`:`${a},${l},${m},${u}`,f=i.toJSON();return{bbox:d,["1.3.0"===this.version?"crs":"srs"]:null==y||isNaN(y)?void 0:"EPSG:"+y,...f}}async fetchImage(e,t,r,s){const n=this.mapUrl,i=this.createExportImageParameters(e,t,r,s);if(!i.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=s?.timeExtent?.start,l=s?.timeExtent?.end,p=m(a)&&m(l)?a.getTime()===l.getTime()?pe(a):`${pe(a)}/${pe(l)}`:void 0,u={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...i,time:p,...this.refreshParameters}),signal:s?.signal};return o(n??"",u).then((e=>e.data))}async fetchImageBitmap(e,t,r,s){const n=this.mapUrl??"",i=this.createExportImageParameters(e,t,r,s);if(!i.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=s?.timeExtent?.start,l=s?.timeExtent?.end,p=m(a)&&m(l)?a.getTime()===l.getTime()?pe(a):`${pe(a)}/${pe(l)}`:void 0,u={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...i,time:p,...this.refreshParameters}),signal:s?.signal},{data:c}=await o(n,u);return W(c,n)}fetchFeatureInfo(e,t,r,s,o){const n=L({extent:e,width:t}),i=function(e){const t=e.filter((e=>e.popupEnabled&&e.name&&e.queryable));return t.length?t.map((({name:e})=>e)).join():null}(new V({layer:this,scale:n}).visibleSublayers);if(p(this.featureInfoUrl)||p(i))return Promise.resolve([]);if(p(this.fetchFeatureInfoFunction)&&p(this.featureInfoFormat))return Promise.resolve([]);const a="1.3.0"===this.version?{I:s,J:o}:{x:s,y:o},l={query_layers:i,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...a},u={...this.createExportImageParameters(e,t,r),...l},c=this._mixCustomParameters(u);return m(this.fetchFeatureInfoFunction)?this.fetchFeatureInfoFunction(c):this._defaultFetchFeatureInfoFunction(j(this.featureInfoUrl,c))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}serviceSupportsSpatialReference(e){return D(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((t=>{const r=900913===t?E.WebMercator:new E({wkid:t});return N(r,e)}))}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=g(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const o=new s({title:this.title,content:t}),n=new r({sourceLayer:this,popupTemplate:o});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo){const{path:t,query:r}=this.parsedUrl??{};r?.service&&(r.SERVICE=r.service,delete r.service),r?.request&&(r.REQUEST=r.request,delete r.request);const{data:s}=await o(t??"",{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=H(s)}if(this.parsedUrl){const e=new b(this.parsedUrl.path),{httpsDomains:r}=t.request;"https"!==e.scheme||e.port&&"443"!==e.port||!e.host||r.includes(e.host)||r.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function je(e,t,r){e=e??[];const s=new Map;e.every((e=>null==e.id))&&(e=l(e)).forEach(((e,t)=>e.id=t));for(const o of e){const e=new q;e.read(o,t),r&&!r.includes(e.name)&&(e.visible=!1),s.set(e.id,e)}const o=[];for(const t of e){const e=null!=t.id?s.get(t.id):null;if(e)if(null!=t.parentLayerId&&t.parentLayerId>=0){const r=s.get(t.parentLayerId);if(!r)continue;r.sublayers||(r.sublayers=new n),r.sublayers.push(e)}else o.push(e)}return o}e([x({readOnly:!0})],he.prototype,"allSublayers",void 0),e([x({json:{type:Object,write:!0}})],he.prototype,"customParameters",void 0),e([x({json:{type:Object,write:!0}})],he.prototype,"customLayerParameters",void 0),e([x({type:String,json:{write:!0}})],he.prototype,"copyright",void 0),e([x()],he.prototype,"description",void 0),e([x({readOnly:!0})],he.prototype,"dimensions",void 0),e([x({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],he.prototype,"fullExtent",void 0),e([k(["web-document","portal-item"],"fullExtent",["extent"])],he.prototype,"readFullExtentFromItemOrMap",null),e([w(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],he.prototype,"writeFullExtent",null),e([x()],he.prototype,"fullExtents",void 0),e([x({type:String,json:{write:{ignoreOrigin:!0}}})],he.prototype,"featureInfoFormat",null),e([x({type:[String],readOnly:!0})],he.prototype,"featureInfoFormats",void 0),e([x({type:String,json:{write:{ignoreOrigin:!0}}})],he.prototype,"featureInfoUrl",void 0),e([x()],he.prototype,"fetchFeatureInfoFunction",void 0),e([x({type:String,json:{origins:{"web-document":{default:"image/png",type:ye.jsonValues,read:{reader:ye.read,source:"format"},write:{writer:ye.write,target:"format"}}}}})],he.prototype,"imageFormat",void 0),e([k("imageFormat",["supportedImageFormatTypes"])],he.prototype,"readImageFormat",null),e([x({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],he.prototype,"imageMaxHeight",void 0),e([x({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],he.prototype,"imageMaxWidth",void 0),e([x()],he.prototype,"imageTransparency",void 0),e([x(_)],he.prototype,"legendEnabled",void 0),e([x({type:["show","hide","hide-children"]})],he.prototype,"listMode",void 0),e([x({type:String,json:{write:{ignoreOrigin:!0}}})],he.prototype,"mapUrl",void 0),e([x({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],he.prototype,"isReference",void 0),e([x({type:["WMS"]})],he.prototype,"operationalLayerType",void 0),e([x()],he.prototype,"resourceInfo",void 0),e([x({type:E,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],he.prototype,"spatialReference",void 0),e([k(["web-document","portal-item"],"spatialReference",["spatialReferences"])],he.prototype,"readSpatialReferenceFromItemOrDocument",null),e([x({type:[S],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],he.prototype,"spatialReferences",void 0),e([w(["web-document","portal-item"],"spatialReferences")],he.prototype,"writeSpatialReferences",null),e([x({type:n.ofType(q),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if(v(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],he.prototype,"sublayers",void 0),e([k(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],he.prototype,"readSublayersFromItemOrMap",null),e([k("service","sublayers",["layers"])],he.prototype,"readSublayers",null),e([w("sublayers",{layers:{type:[q]},visibleLayers:{type:[String]}})],he.prototype,"writeSublayers",null),e([x({json:{read:!1},readOnly:!0,value:"wms"})],he.prototype,"type",void 0),e([x(B)],he.prototype,"url",void 0),e([x({type:String,json:{write:{ignoreOrigin:!0}}})],he.prototype,"version",void 0),he=e([I("esri.layers.WMSLayer")],he);const ge=he;export{ge as default};
