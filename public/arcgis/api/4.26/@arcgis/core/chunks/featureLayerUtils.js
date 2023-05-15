/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{id as t}from"../kernel.js";import e from"../core/Error.js";import{J as r}from"./jsonMap.js";import{i as a}from"./maybe.js";import{parseWhereClause as n}from"../core/sql.js";import{g as s}from"./layerUtils.js";import o from"../rest/support/AttachmentQuery.js";import i from"../rest/support/Query.js";import u from"../rest/support/RelationshipQuery.js";const c=new r({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function p(t,r,a,n){const s=await E(t);if(await l(t,r,n),!s.addAttachment)throw new e(n,"Layer source does not support addAttachment capability");return s.addAttachment(r,a)}function l(t,r,a){const{attributes:n}=r,{objectIdField:s}=t;return t.get("capabilities.data.supportsAttachment")?r?n?s&&n[s]?Promise.resolve():Promise.reject(new e(a,`feature is missing the identifying attribute ${s}`)):Promise.reject(new e(a,"'attributes' are required on a feature to query attachments")):Promise.reject(new e(a,"A feature is required to add/delete/update attachments")):Promise.reject(new e(a,"this layer doesn't support attachments"))}async function y(t,r,a,n,s){const o=await E(t);if(await l(t,r,s),!o.updateAttachment)throw new e(s,"Layer source does not support updateAttachment capability");return o.updateAttachment(r,a,n)}async function d(t,e,r){const a=await import("./editingSupport.js"),n=await t.load();return a.applyEdits(n,n.source,e,r)}async function f(t,r,a,n){const s=await E(t);if(await l(t,r,n),!s.deleteAttachments)throw new e(n,"Layer source does not support deleteAttachments capability");return s.deleteAttachments(r,a)}async function m(t,r,a){const n=(await t.load({signal:r?.signal})).source;if(!n.fetchRecomputedExtents)throw new e(a,"Layer source does not support fetchUpdates capability");return n.fetchRecomputedExtents(r)}async function h(t,r,a,n){r=o.from(r),await t.load();const s=t.source,i=t.capabilities;if(!i?.data?.supportsAttachment)throw new e(n,"this layer doesn't support attachments");const{attachmentTypes:u,objectIds:c,globalIds:p,num:l,size:y,start:d,where:f}=r;if(!i?.operations?.supportsQueryAttachments&&(u?.length>0||p?.length>0||y?.length>0||l||d||f))throw new e(n,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",r);if(!(c?.length||p?.length||f))throw new e(n,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",r);if(!s.queryAttachments)throw new e(n,"Layer source does not support queryAttachments capability",r);return s.queryAttachments(r)}async function w(t,r,a,n){const s=await E(t);if(!s.queryObjectIds)throw new e(n,"Layer source does not support queryObjectIds capability");return s.queryObjectIds(i.from(r)??t.createQuery(),a)}async function b(t,r,a,n){const s=await E(t);if(!s.queryFeatureCount)throw new e(n,"Layer source does not support queryFeatureCount capability");return s.queryFeatureCount(i.from(r)??t.createQuery(),a)}async function g(t,r,a,n){const s=await E(t);if(!s.queryExtent)throw new e(n,"Layer source does not support queryExtent capability");return s.queryExtent(i.from(r)??t.createQuery(),a)}async function q(t,r,a,n){const s=await E(t);if(!s.queryRelatedFeatures)throw new e(n,"Layer source does not support queryRelatedFeatures capability");return s.queryRelatedFeatures(u.from(r),a)}async function j(t,r,a,n){const s=await E(t);if(!s.queryRelatedFeaturesCount)throw new e(n,"Layer source does not support queryRelatedFeaturesCount capability");return s.queryRelatedFeaturesCount(u.from(r),a)}async function F(t){const e=t.source;if(e?.refresh)try{const{dataChanged:r,updates:n}=await e.refresh();if(a(n)&&(t.sourceJSON={...t.sourceJSON,...n},t.read(n,{origin:"service",url:t.parsedUrl})),r)return!0}catch{}if(t.definitionExpression)try{return(await n(t.definitionExpression,t.fieldsIndex)).hasDateFunctions}catch{}return!1}function I(t){const e=new i,r=t.get("capabilities.data"),a=t.get("capabilities.query");e.historicMoment=t.historicMoment,e.gdbVersion=t.gdbVersion,e.returnGeometry=!0,a&&(e.compactGeometryEnabled=a.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=a.supportsDefaultSpatialReference),r&&(r.supportsZ&&null!=t.returnZ&&(e.returnZ=t.returnZ),r.supportsM&&null!=t.returnM&&(e.returnM=t.returnM)),e.outFields=["*"];const{timeOffset:n,timeExtent:s}=t;return e.timeExtent=null!=n&&null!=s?s.offset(-n.value,n.unit):s||null,e.multipatchOption="multipatch"===t.geometryType?"xyFootprint":null,e}function P(t){const{globalIdField:e,fields:r}=t;if(e)return e;if(r)for(const t of r)if("esriFieldTypeGlobalID"===t.type)return t.name}function A(t){const{objectIdField:e,fields:r}=t;if(e)return e;if(r)for(const t of r)if("esriFieldTypeOID"===t.type)return t.name}function O(t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}async function E(t){return(await t.load()).source}async function x(e,r){const n=e.parsedUrl?.path;if(!n)return;const o=e.editFieldsInfo;(e.userHasUpdateItemPrivileges||e.userHasFullEditingPrivileges&&e.capabilities.operations.supportsEditing||o?.creatorField||o?.editorField)&&await async function(e,r){if(!t)return;if(t.findCredential(e))return;let n;try{const a=await s(e,r);a&&(n=await t.checkSignInStatus(`${a}/sharing`))}catch(t){}if(n)try{const n=a(r)?r.signal:null;await t.getCredential(e,{signal:n})}catch(t){}}(n,r)}function R(t){return!t.sourceJSON?.isMultiServicesView&&(t.userHasUpdateItemPrivileges||t.editingEnabled)}export{A as a,p as b,R as c,d,x as e,I as f,f as g,m as h,w as i,b as j,g as k,q as l,j as m,F as n,c as o,O as p,h as q,P as r,y as u};