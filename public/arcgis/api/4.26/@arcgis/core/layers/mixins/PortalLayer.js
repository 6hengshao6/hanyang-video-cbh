/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../config.js";import{id as r}from"../../kernel.js";import s from"../../request.js";import{r as i}from"../../chunks/asyncUtils.js";import o from"../../core/Error.js";import{L as a}from"../../chunks/Logger.js";import{d as l,i as p,a as n}from"../../chunks/maybe.js";import{throwIfAborted as m,isAbortError as u,throwIfAbortError as c}from"../../core/promiseUtils.js";import{hasSameCanonicalPortal as h,normalize as d,hasSamePortal as g}from"../../core/urlUtils.js";import{property as j}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as y}from"../../chunks/reader.js";import{subclass as f}from"../../core/accessorSupport/decorators/subclass.js";import{w as k}from"../../chunks/writer.js";import{g as P}from"../../chunks/layerUtils.js";import I from"../../portal/Portal.js";import v from"../../portal/PortalItem.js";import U from"../../portal/PortalUser.js";import{g as w}from"../../chunks/portalItemUtils.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/JSONSupport.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../chunks/assets.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../geometry/projection.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/SimpleObservable.js";import"../../chunks/mat4.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/pe.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";const E=E=>{let _=class extends E{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=l(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new v({id:e.itemId,portal:r&&r.portal})}writePortalItem(t,e){t&&t.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem&&this.portalItem.id)try{const r=await import("../../chunks/layersLoader.js");return m(e),await r.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData,layerModuleTypeMap:t.layerModuleTypeMap},e)}catch(t){throw u(t)||a.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}async finishLoadEditablePortalLayer(t){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(t).catch((t=>(c(t),!0))))}async _setUserPrivileges(t,r){if(!e.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(r);if(this.url)try{const{features:{edit:e,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(t,r);this._set("userHasEditingPrivileges",e),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(t){c(t)}}async _fetchUserPrivileges(t,e){let s=this.portalItem;if(!t||!s||!s.loaded||s.sourceUrl)return this._fetchFallbackUserPrivileges(e);const i=t===s.id;if(i&&s.portal.user)return w(s);let o,a;if(i)o=s.portal.url;else try{o=await P(this.url,e)}catch(t){c(t)}if(!o||!h(o,s.portal.url))return this._fetchFallbackUserPrivileges(e);try{const t=p(e)?e.signal:null;a=await(r?.getCredential(`${o}/sharing`,{prompt:!1,signal:t}))}catch(t){c(t)}if(!a)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(i?await s.reload():(s=new v({id:t,portal:{url:o}}),await s.load(e)),s.portal.user)return w(s)}catch(t){c(t)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(t){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(t)}catch(t){c(t)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(t){const e=this.url?r?.findCredential(this.url):null;if(!e)return!0;const s=b.credential===e?b.user:await this._fetchEditingUser(t);return b.credential=e,b.user=s,n(s)||null==s.privileges||s.privileges.includes("features:user:edit")}async _fetchEditingUser(t){const e=this.portalItem?.portal?.user;if(e)return e;const o=r.findServerInfo(this.url??"");if(!o?.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,l=I.getDefault();if(l&&l.loaded&&d(l.restUrl)===d(a))return l.user;const n=`${a}/community/self`,m=p(t)?t.signal:null,u=await i(s(n,{authMode:"no-prompt",query:{f:"json"},signal:m}));return u.ok?U.fromJSON(u.value.data):null}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e&&e.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||I.getDefault());return r&&s&&!g(s.restUrl,r.restUrl)?(e.messages&&e.messages.push(new o("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return t([j({type:v})],_.prototype,"portalItem",null),t([y("web-document","portalItem",["itemId"])],_.prototype,"readPortalItem",null),t([k("web-document","portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),t([j({clonable:!1})],_.prototype,"resourceReferences",void 0),t([j({type:Boolean,readOnly:!0})],_.prototype,"userHasEditingPrivileges",void 0),t([j({type:Boolean,readOnly:!0})],_.prototype,"userHasFullEditingPrivileges",void 0),t([j({type:Boolean,readOnly:!0})],_.prototype,"userHasUpdateItemPrivileges",void 0),_=t([f("esri.layers.mixins.PortalLayer")],_),_},b={credential:null,user:null};export{E as PortalLayer};