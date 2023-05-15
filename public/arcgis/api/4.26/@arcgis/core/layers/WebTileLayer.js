/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import t from"../request.js";import r from"../core/Error.js";import{M as o}from"../chunks/MultiOriginJSONSupport.js";import{r as s}from"../chunks/string.js";import{Url as i,isProtocolRelative as l,normalize as n}from"../core/urlUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{r as a}from"../chunks/reader.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{w as c}from"../chunks/writer.js";import u from"./Layer.js";import{BlendLayer as h}from"./mixins/BlendLayer.js";import{O as j}from"../chunks/OperationalLayer.js";import{PortalLayer as y}from"./mixins/PortalLayer.js";import{RefreshableLayer as f}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as d}from"./mixins/ScaleRangeLayer.js";import{c as g}from"../chunks/imageBitmapUtils.js";import v from"./support/LOD.js";import w from"./support/TileInfo.js";import{JSONSupport as k}from"../core/JSONSupport.js";import{clone as b}from"../core/lang.js";import T from"../geometry/Extent.js";import U from"../geometry/SpatialReference.js";import P from"../geometry/Point.js";import"../geometry/Geometry.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../kernel.js";import"../core/Evented.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/screenUtils.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/commonProperties2.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/persistableUrlUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/opacityUtils.js";import"../chunks/asyncUtils.js";import"../chunks/layerUtils.js";import"../portal/Portal.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/SimpleObservable.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/TileKey.js";var S;let R=S=class extends k{constructor(e){super(e)}clone(){return new S({customLayerParameters:b(this.customLayerParameters),customParameters:b(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};var x;e([p({json:{type:Object,write:!0}})],R.prototype,"customLayerParameters",void 0),e([p({json:{type:Object,write:!0}})],R.prototype,"customParameters",void 0),e([p({type:String,json:{write:!0}})],R.prototype,"layerIdentifier",void 0),e([p({type:String,json:{write:!0}})],R.prototype,"tileMatrixSet",void 0),e([p({type:String,json:{write:!0}})],R.prototype,"url",void 0),R=S=e([m("esri.layer.support.WMTSLayerInfo")],R);let I=x=class extends(h(f(d(j(y(o(u))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new T(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,U.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=U.WebMercator,this.subDomains=null,this.tileInfo=new w({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new P({x:-20037508.342787,y:20037508.342787,spatialReference:U.WebMercator}),spatialReference:U.WebMercator,lods:[new v({level:0,scale:591657527.591555,resolution:156543.033928}),new v({level:1,scale:295828763.795777,resolution:78271.5169639999}),new v({level:2,scale:147914381.897889,resolution:39135.7584820001}),new v({level:3,scale:73957190.948944,resolution:19567.8792409999}),new v({level:4,scale:36978595.474472,resolution:9783.93962049996}),new v({level:5,scale:18489297.737236,resolution:4891.96981024998}),new v({level:6,scale:9244648.868618,resolution:2445.98490512499}),new v({level:7,scale:4622324.434309,resolution:1222.99245256249}),new v({level:8,scale:2311162.217155,resolution:611.49622628138}),new v({level:9,scale:1155581.108577,resolution:305.748113140558}),new v({level:10,scale:577790.554289,resolution:152.874056570411}),new v({level:11,scale:288895.277144,resolution:76.4370282850732}),new v({level:12,scale:144447.638572,resolution:38.2185141425366}),new v({level:13,scale:72223.819286,resolution:19.1092570712683}),new v({level:14,scale:36111.909643,resolution:9.55462853563415}),new v({level:15,scale:18055.954822,resolution:4.77731426794937}),new v({level:16,scale:9027.977411,resolution:2.38865713397468}),new v({level:17,scale:4513.988705,resolution:1.19432856685505}),new v({level:18,scale:2256.994353,resolution:.597164283559817}),new v({level:19,scale:1128.497176,resolution:.298582141647617}),new v({level:20,scale:564.248588,resolution:.14929107082380833}),new v({level:21,scale:282.124294,resolution:.07464553541190416}),new v({level:22,scale:141.062147,resolution:.03732276770595208}),new v({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new i(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&t.authority?.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new r("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&U.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,o=new i(t),s=o.scheme?o.scheme+"://":"//",l=s+o.authority+"/",n=o.authority;if(n?.includes("{subDomain}")){if(r&&r.length>0&&n.split(".").length>1)for(const t of r)e.push(s+n.replace(/\{subDomain\}/gi,t)+"/")}else e.push(l);return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new i(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&l(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=n(e)),t.templateUrl=e}fetchTile(e,r,o,s={}){const{signal:i}=s,l=this.getTileUrl(e,r,o),n={responseType:"image",signal:i,query:{...this.refreshParameters}};return t(l,n).then((e=>e.data))}async fetchImageBitmapTile(e,o,s,i={}){const{signal:l}=i;if(this.fetchTile!==x.prototype.fetchTile){const t=await this.fetchTile(e,o,s,i);try{return createImageBitmap(t)}catch(t){throw new r("request:server",`Unable to load tile ${e}/${o}/${s}`,{error:t,level:e,row:o,col:s})}}const n=this.getTileUrl(e,o,s),p={responseType:"blob",signal:l,query:{...this.refreshParameters}},{data:a}=await t(n,p);return g(a,n)}getTileUrl(e,t,r){const{levelValues:o,tileServers:i,urlPath:l}=this;if(!o||!i||!l)return"";const n=o[e];return i[t%i.length]+s(l,{level:n,z:n,col:r,x:r,row:t,y:t})}};e([p({type:String,value:"",json:{write:!0}})],I.prototype,"copyright",void 0),e([p({type:T,json:{write:!0},nonNullable:!0})],I.prototype,"fullExtent",void 0),e([p({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"legendEnabled",void 0),e([p({type:["show","hide"]})],I.prototype,"listMode",void 0),e([p({json:{read:!0,write:!0}})],I.prototype,"blendMode",void 0),e([p()],I.prototype,"levelValues",null),e([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],I.prototype,"isReference",void 0),e([p({type:["WebTiledLayer"],value:"WebTiledLayer"})],I.prototype,"operationalLayerType",void 0),e([p({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"popupEnabled",void 0),e([p({type:U})],I.prototype,"spatialReference",void 0),e([a("spatialReference",["spatialReference","fullExtent.spatialReference"])],I.prototype,"readSpatialReference",null),e([p({type:[String],json:{write:!0}})],I.prototype,"subDomains",void 0),e([p({type:w,json:{write:!0}})],I.prototype,"tileInfo",void 0),e([p({readOnly:!0})],I.prototype,"tileServers",null),e([p({json:{read:!1}})],I.prototype,"type",void 0),e([p()],I.prototype,"urlPath",null),e([p({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],I.prototype,"urlTemplate",void 0),e([a("urlTemplate",["urlTemplate","templateUrl"])],I.prototype,"readUrlTemplate",null),e([c("urlTemplate",{templateUrl:{type:String}})],I.prototype,"writeUrlTemplate",null),e([p({type:R,json:{write:!0}})],I.prototype,"wmtsInfo",void 0),I=x=e([m("esri.layers.WebTileLayer")],I);const L=I,M=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{R as W,M as a,L as default};
