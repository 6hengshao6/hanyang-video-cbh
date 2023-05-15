/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../request.js";import{c as t}from"./asyncUtils.js";import i from"../core/Error.js";import{L as r}from"./Logger.js";import{isAbortError as o}from"../core/promiseUtils.js";import{urlToObject as s,getFilename as n}from"../core/urlUtils.js";import{projectMany as a}from"../geometry/projection.js";import{j as l}from"./json.js";import{f as m,b as p,W as c}from"./unitUtils.js";import{lngLatToXY as u}from"../geometry/support/webMercatorUtils.js";import{a as d,O as f}from"./OptimizedFeature.js";import{F as y}from"./FeatureStore.js";import{c as g}from"./projectionSupport.js";import{Q as h}from"./QueryEngine.js";import{_ as j}from"./number3.js";import{normalizeFieldName as F,getFieldDefaultValue as _}from"../layers/support/fieldUtils.js";import{b as I,a as w}from"./clientSideDefaults.js";import b from"../layers/support/FieldsIndex.js";import N from"../geometry/SpatialReference.js";import"./ensureType.js";import"./typedArrayUtil.js";import"./maybe.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"./string.js";import"./object.js";import"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../config.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../kernel.js";import"./SimpleObservable.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../core/Evented.js";import"./aaBoundingBox.js";import"./featureConversionUtils.js";import"./OptimizedFeatureSet.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./quickselect.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./utils9.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils4.js";import"./utils5.js";import"./MemCache.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"./ItemCache.js";import"../core/sql/WhereClause.js";import"./executionError.js";import"./datetime.js";import"./_commonjsHelpers.js";import"./utils10.js";import"./generateRendererUtils.js";import"./enumeration.js";import"./SnappingCandidate.js";import"./arcadeOnDemand.js";import"./QueryEngineCapabilities.js";import"./timeSupport.js";import"./Scheduler.js";import"../core/reactiveUtils.js";import"./ObservableValue.js";import"./debugFlags.js";import"./locale.js";import"./defaultsJSON.js";const x=/^\s*"([\S\s]*)"\s*$/,E=/""/g,T="\n",S=[","," ",";","|","\t"];function*O(e,t,i){let r=0;for(;r<=e.length;){const o=e.indexOf(t,r),s=e.substring(r,o>-1?o:void 0);r+=s.length+t.length,i&&!s.trim()||(yield s)}}function C(e){const t=e.includes("\r\n")?"\r\n":T;return O(e,t,!0)}function v(e,t){return O(e,t,!1)}function*q(e,t,i,r=(()=>Object.create(null))){const o=C(e);o.next();let s="",n="",a=0,l=r(),m=0;e:for(const e of o){const o=v(e,i);for(const e of o)if(s+=n+e,n="",a+=U(e),a%2==0){if(a>0){const e=x.exec(s);if(!e){l=r(),m=0,s="",a=0;continue e}l[t[m]]=e[1].replace(E,'"'),m++}else l[t[m]]=s,m++;s="",a=0}else n=i;0===a?(yield l,l=r(),m=0):n=T}}function D(e,t){const i=k(e,t).filter((e=>null!=e)),r=i.map((e=>F(e)));for(let e=r.length-1;e>=0;e--)r[e]||(r.splice(e,1),i.splice(e,1));return{names:r,aliases:i}}function k(e,t){if(!e?.length)return[];const i=[];let r="",o="",s=0;const n=v(e,t);for(const e of n)if(r+=o+e,o="",s+=U(e),s%2==0){if(s>0){const e=x.exec(r);e&&i.push(e[1].replace(E,'"'))}else i.push(r);r="",s=0}else o=t;return i}function U(e){let t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}function P(e,t,i){t=F(t)?.toLowerCase(),i=F(i)?.toLowerCase();const r=e.map((e=>e.toLowerCase())),o=t?e[r.indexOf(t)]:null,s=i?e[r.indexOf(i)]:null;return{longitudeFieldName:o||e[r.indexOf(z.find((e=>r.includes(e))))],latitudeFieldName:s||e[r.indexOf(M.find((e=>r.includes(e))))]}}function R(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=V(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!isNaN(t))return"double";if(e.includes(",")){if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}else i=!0}else i=!0}return i?/^[-]?\d*[.,]?\d*$/.test(e)?"string":Q(new Date(e),e)?"date":"string":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}function Q(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(!G&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,r=0;for(;!t&&r<=e.length;)t=!L.test(e[r]),r++;i=!t}}return i}const V=function(){const e=j(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return o=>{const s=t.exec(o);if(e.factor=r,!s)return NaN;let n=s[1];if(!s[1]){if(!s[2])return NaN;n=s[2],e.factor*=-1}return n=n.replace(i,"").replace(e.decimal,"."),+n*e.factor}}(),L=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,G=Number.isNaN(new Date("technology 10").getTime()),M=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],z=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],A=w("esriGeometryPoint"),B=["csv"],$=[0,0];class J{constructor(e,t){this.x=e,this.y=t}}class W{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t={}){this._loadOptions=e;const[r]=await Promise.all([this._fetch(t.signal),this._checkProjection(e?.parsingOptions?.spatialReference)]),o=function(e,t){const r=t.parsingOptions||{},o={delimiter:r.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:r.latitudeField,longitudeFieldName:r.longitudeField}},s=o.layerDefinition={name:n(t.url,B)||"csv",drawingInfo:A,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:r.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:r.spatialReference||{wkid:4326}}},a=C(e),l=a.next().value?.trim(),m=a.next().value?.trim();if(!l)throw new i("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:p,locationInfo:c}=function(e,t,i){e=e.trim(),t=t?.trim();const r=[],o=Array.from(new Set([i?.delimiter,...S])).filter((e=>null!=e));for(const i of o){const o=k(e,i).length,s=k(t,i).length??o;o>1&&r.push({weight:Math.min(o,s),delimiter:i})}const s=r.sort((({weight:e},{weight:t})=>t-e)).map((({delimiter:e})=>e));for(const t of s){const r=P(D(e,t).names,i?.longitudeField,i?.latitudeField);if(r.longitudeFieldName&&r.latitudeFieldName)return{delimiter:t,locationInfo:r}}return{delimiter:s[0],locationInfo:null}}(l,m,r);if(!p)throw new i("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:l,secondLine:m,parsingOptions:r});if(!c)throw new i("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:l,secondLine:m,parsingOptions:r});o.locationInfo=c,o.delimiter=p;const{names:u,aliases:d}=D(l,p),f=function(e,t,i,r,o){const s=[],n=q(e,i,t),a=[];for(const e of n){if(10===a.length)break;a.push(e)}for(let e=0;e<i.length;e++){const t=i[e],n=r[e];if(t===o.longitudeFieldName||t===o.latitudeFieldName)s.push({name:t,type:"esriFieldTypeDouble",alias:n});else{let e,i;switch(R(a.map((e=>e[t])))){case"integer":e="esriFieldTypeInteger";break;case"double":e="esriFieldTypeDouble";break;case"date":e="esriFieldTypeDate",i=36;break;default:e="esriFieldTypeString",i=255}s.push({name:t,type:e,alias:n,length:i})}}return s}(e,o.delimiter,u,d,o.locationInfo);if(r.fields?.length){const e=new b(r.fields);for(const t of f){const i=e.get(t.name);i&&Object.assign(t,i)}}if(!f.some((e=>"esriFieldTypeOID"===e.type&&(s.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};s.objectIdField=e.name,f.unshift(e)}s.fields=f;const y=new b(s.fields);if(o.locationInfo&&(o.locationInfo.latitudeFieldName=y.get(o.locationInfo.latitudeFieldName).name,o.locationInfo.longitudeFieldName=y.get(o.locationInfo.longitudeFieldName).name),s.timeInfo){const e=s.timeInfo;if(e.startTimeField){const t=y.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=y.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=y.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(s.timeInfo=null)}return o}(r,e);this._locationInfo=o.locationInfo,this._delimiter=o.delimiter,this._queryEngine=this._createQueryEngine(o);const s=await this._createFeatures(r);this._queryEngine.featureStore.addMany(s);const{fullExtent:a,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(o.layerDefinition.extent=a,l){const{start:e,end:t}=l;o.layerDefinition.timeInfo.timeExtent=[e,t]}return o}async applyEdits(){throw new i("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=t(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),o(e)||r.getLogger("esri.layers.CSVLayer").error(new i("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:s,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:s,timeExtent:n}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:r,customParameters:o}=this._loadOptions;if(!r)throw new i("csv-layer:invalid-source","url not defined");const n=s(r);return(await e(n.path,{query:{...n.query,...o},responseType:"text",signal:t})).data}_createQueryEngine(e){const{objectIdField:t,fields:i,extent:r,timeInfo:o}=e.layerDefinition,s=new y({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new h({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:o,objectIdField:t,spatialReference:r.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:i}=this._locationInfo,{objectIdField:r,fieldsIndex:o,spatialReference:s}=this._queryEngine;let n=[];const c=[],y=o.fields.filter((e=>e.name!==r)).map((e=>e.name));let g=0;const h={};for(const e of o.fields)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=_(e);void 0!==t&&(h[e.name]=t)}const j=q(e,y,this._delimiter,I(h,r));for(const e of j){const s=this._parseCoordinateValue(e[t]),a=this._parseCoordinateValue(e[i]);if(null!=a&&null!=s&&!isNaN(s)&&!isNaN(a)){e[t]=s,e[i]=a;for(const r in e)if(r!==t&&r!==i)if(o.isDateField(r)){const t=new Date(e[r]);e[r]=Q(t,e[r])?t.getTime():null}else if(o.isNumericField(r)){const t=V(e[r]);isNaN(t)?e[r]=null:e[r]=t}e[r]=g,g++,n.push(new J(a,s)),c.push(e)}}if(!m({wkid:4326},s))if(p(s))for(const e of n)[e.x,e.y]=u(e.x,e.y,$);else n=a(l,n,N.WGS84,s,null,null);const F=[];for(let e=0;e<n.length;e++){const{x:t,y:i}=n[e],o=c[e];o[r]=e+1,F.push(new d(new f([],[t,i]),o,null,o[r]))}return F}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=V(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await g(c,e)}catch{throw new i("csv-layer:projection-not-supported","Projection not supported")}}}export{W as default};
