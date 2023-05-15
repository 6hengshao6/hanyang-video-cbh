/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import r from"../core/Error.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{c as e}from"../chunks/maybe.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import{e as i}from"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import p from"./PortalQueryParams.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/jsonMap.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";let u=class extends o{constructor(t){super(t),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.tags=null,this.title=null}get thumbnailUrl(){const t=this.url,r=this.thumbnail;return t&&r&&this.portal?this.portal?.normalizeUrl(`${t}/info/${r}?f=json`):null}get url(){const t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null}fetchCategorySchema(t){return e(this.portal).request(this.url+"/categorySchema",t).then((r=>{const o=r.categorySchema||[];return o.some((t=>"contentCategorySetsGroupQuery.LivingAtlas"===t.source))?this._fetchCategorySchemaSet("LivingAtlas",t):o}))}fetchMembers(t){return e(this.portal).request(this.url+"/users",t)}getThumbnailUrl(t){let r=this.thumbnailUrl;return r&&t&&(r+=`&w=${t}`),r}toJSON(){throw new r("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}queryItems(t,r){let o=i(p,t);const s=e(this.portal);return parseFloat(s.currentVersion)>5?(o=o||new p,s.queryPortal(`/content/groups/${this.id}/search`,o,"PortalItem",r)):(o=o?o.clone():new p,o.query="group:"+this.id+(o.query?" "+o.query:""),s.queryItems(o,r))}_fetchCategorySchemaSet(t,o){const s=e(this.portal);return s.fetchSelf(s.authMode,!0,o).then((t=>{const e=t.contentCategorySetsGroupQuery;if(e){const t=new p;return t.disableExtraQuery=!0,t.num=1,t.query=e,s.queryGroups(t,o)}throw new r("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")})).then((e=>{if(e.total){const r=e.results[0],s=new p;return s.num=1,s.query=`typekeywords:"${t}"`,r.queryItems(s,o)}throw new r("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")})).then((t=>t.total?t.results[0].fetchData("json",o).then((t=>{const r=t&&t.categorySchema;return r&&r.length?r:[]})):[]))}};t([s()],u.prototype,"access",void 0),t([s({type:Date})],u.prototype,"created",void 0),t([s()],u.prototype,"description",void 0),t([s()],u.prototype,"id",void 0),t([s()],u.prototype,"isInvitationOnly",void 0),t([s({type:Date})],u.prototype,"modified",void 0),t([s()],u.prototype,"owner",void 0),t([s()],u.prototype,"portal",void 0),t([s()],u.prototype,"snippet",void 0),t([s()],u.prototype,"sortField",void 0),t([s()],u.prototype,"sortOrder",void 0),t([s()],u.prototype,"tags",void 0),t([s()],u.prototype,"thumbnail",void 0),t([s({readOnly:!0})],u.prototype,"thumbnailUrl",null),t([s()],u.prototype,"title",void 0),t([s({readOnly:!0})],u.prototype,"url",null),u=t([n("esri.portal.PortalGroup")],u);const l=u;export{l as default};
