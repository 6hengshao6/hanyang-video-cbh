/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{clone as s}from"../core/lang.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{w as i}from"../chunks/writer.js";import o from"./Extent.js";import n from"./Geometry.js";import a from"./Point.js";import h from"./SpatialReference.js";import{a as p}from"../chunks/extentUtils.js";import{u as c}from"../chunks/zmUtils.js";import"../chunks/typedArrayUtil.js";import"../chunks/maybe.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"./support/webMercatorUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/vec4.js";var l;let u=l=class extends n{constructor(...t){super(...t),this.paths=[],this.type="polyline"}normalizeCtorArgs(t,s){let r,e,i=null,o=null;return t&&!Array.isArray(t)?(i=t.paths??null,s||(t.spatialReference?s=t.spatialReference:t.paths||(s=t)),r=t.hasZ,e=t.hasM):i=t,i=i||[],s=s||h.WGS84,i.length&&i[0]&&null!=i[0][0]&&"number"==typeof i[0][0]&&(i=[i]),o=i[0]&&i[0][0],o&&(void 0===r&&void 0===e?(r=o.length>2,e=!1):void 0===r?r=!e&&o.length>3:void 0===e&&(e=!r&&o.length>3)),{paths:i,spatialReference:s,hasZ:r,hasM:e}}get cache(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const{spatialReference:t}=this,s=p(this);if(!s)return null;const r=new o(s);return r.spatialReference=t,r}writePaths(t,r){r.paths=s(this.paths)}addPath(t){if(!t)return;const s=this.paths,r=s.length;if(function(t){return!Array.isArray(t[0])}(t)){const e=[];for(let s=0,r=t.length;s<r;s++)e[s]=t[s].toArray();s[r]=e}else s[r]=t.concat();return this.notifyChange("paths"),this}clone(){const t=new l;return t.spatialReference=this.spatialReference,t.paths=s(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,s){if(!this._validateInputs(t,s))return null;const r=this.paths[t][s],e=this.hasZ,i=this.hasM;return e&&!i?new a(r[0],r[1],r[2],void 0,this.spatialReference):i&&!e?new a(r[0],r[1],void 0,r[2],this.spatialReference):e&&i?new a(r[0],r[1],r[2],r[3],this.spatialReference):new a(r[0],r[1],this.spatialReference)}insertPoint(t,s,r){return this._validateInputs(t,s,!0)?(c(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t].splice(s,0,r),this.notifyChange("paths"),this):this}removePath(t){if(!this._validateInputs(t,null))return null;const s=this.paths.splice(t,1)[0],r=this.spatialReference,e=s.map((t=>new a(t,r)));return this.notifyChange("paths"),e}removePoint(t,s){if(!this._validateInputs(t,s))return null;const r=new a(this.paths[t].splice(s,1)[0],this.spatialReference);return this.notifyChange("paths"),r}setPoint(t,s,r){return this._validateInputs(t,s)?(c(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t][s]=r,this.notifyChange("paths"),this):this}_validateInputs(t,s,r=!1){if(null==t||t<0||t>=this.paths.length)return!1;if(null!=s){const e=this.paths[t];if(r&&(s<0||s>e.length))return!1;if(!r&&(s<0||s>=e.length))return!1}return!0}toJSON(t){return this.write({},t)}};t([r({readOnly:!0})],u.prototype,"cache",null),t([r({readOnly:!0})],u.prototype,"extent",null),t([r({type:[[[Number]]],json:{write:{isRequired:!0}}})],u.prototype,"paths",void 0),t([i("paths")],u.prototype,"writePaths",null),u=l=t([e("esri.geometry.Polyline")],u),u.prototype.toJSON.isDefaultToJSON=!0;const m=u;export{m as default};