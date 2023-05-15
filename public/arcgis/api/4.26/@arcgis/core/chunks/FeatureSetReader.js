/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"../geometry.js";import{A as e}from"./ArcadeDate.js";import{D as t}from"./arcadeTimeUtils.js";import{h as r}from"./typedArrayUtil.js";import{i as s,a as i,c as n,e as a}from"./maybe.js";import{g as o}from"./centroid.js";import{i as h}from"./featureConversionUtils.js";import{O as u}from"./OptimizedFeature.js";import{fromJSON as d}from"../geometry/support/jsonUtils.js";class l{static fromBuffer(e,t){return new l(e,t)}static create(e,t=4294967295){const r=new Uint32Array(Math.ceil(e/32));return new l(r,t)}constructor(e,t){this._mask=0,this._buf=e,this._mask=t}_getIndex(e){return Math.floor(e/32)}has(e){const t=this._mask&e;return!!(this._buf[this._getIndex(t)]&1<<t%32)}hasRange(e,t){let r=e,s=t;for(;r%32&&r!==s;){if(this.has(r))return!0;r++}for(;s%32&&r!==s;){if(this.has(r))return!0;s--}if(r===s)return!1;for(let e=r/32;e!==s/32;e++)if(this._buf[e])return!0;return!1}set(e){const t=this._mask&e,r=this._getIndex(t),s=1<<t%32;this._buf[r]|=s}setRange(e,t){let r=e,s=t;for(;r%32&&r!==s;)this.set(r++);for(;s%32&&r!==s;)this.set(s--);if(r!==s)for(let e=r/32;e!==s/32;e++)this._buf[e]=4294967295}unset(e){const t=this._mask&e,r=this._getIndex(t),s=1<<t%32;this._buf[r]&=4294967295^s}resize(e){const t=this._buf,r=new Uint32Array(Math.ceil(e/32));r.set(t),this._buf=r}or(e){for(let t=0;t<this._buf.length;t++)this._buf[t]|=e._buf[t];return this}and(e){for(let t=0;t<this._buf.length;t++)this._buf[t]&=e._buf[t];return this}xor(e){for(let t=0;t<this._buf.length;t++)this._buf[t]^=e._buf[t];return this}ior(e){for(let t=0;t<this._buf.length;t++)this._buf[t]|=~e._buf[t];return this}iand(e){for(let t=0;t<this._buf.length;t++)this._buf[t]&=~e._buf[t];return this}ixor(e){for(let t=0;t<this._buf.length;t++)this._buf[t]^=~e._buf[t];return this}any(){for(let e=0;e<this._buf.length;e++)if(this._buf[e])return!0;return!1}copy(e){for(let t=0;t<this._buf.length;t++)this._buf[t]=e._buf[t];return this}clone(){return new l(this._buf.slice(),this._mask)}clear(){for(let e=0;e<this._buf.length;e++)this._buf[e]=0}forEachSet(e){for(let t=0;t<this._buf.length;t++){let r=this._buf[t],s=32*t;if(r)for(;r;)1&r&&e(s),r>>>=1,s++}}countSet(){let e=0;return this.forEachSet((t=>{e++})),e}}let f=0;const c=r("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],_=c[0],m=c[1],g=c[2],y=c[3],b=r("featurelayer-simplify-payload-size-factors")??[1,2,4],p=b[0],x=b[1],I=b[2],A=r("featurelayer-simplify-mobile-factor")??2,S=r("esri-mobile");class T{constructor(e,t){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=e,this._layerSchema=t}static createInstance(){return f++,f=f>65535?0:f,f}get isEmpty(){return s(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e}getAreaSimplificationThreshold(e,t){let r=1;const s=S?A:1;t>4e6?r=I*s:t>1e6?r=x*s:t>5e5?r=p*s:t>1e5&&(r=s);let i=0;e>4e3?i=y*r:e>2e3?i=g*r:e>100?i=m:e>15&&(i=_);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),i*n}createQuantizedExtrudedQuad(e,t){return new u([5],[e-1,t,1,-1,1,1,-1,1,-1,-1])}setArcadeSpatialReference(e){this._arcadeSpatialReference=e}attachStorage(e){this._storage=e}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t)}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t,r,s){const i=this.copy();return i._tx+=e,i._ty+=t,i._sx*=r,i._sy*=s,i}readAttribute(e,t=!1){const r=this._readAttribute(e,t);if(void 0!==r)return r;for(const r of this._joined){r.setIndex(this.getIndex());const s=r._readAttribute(e,t);if(void 0!==s)return s}}readAttributes(){const e=this._readAttributes();for(const t of this._joined){t.setIndex(this.getIndex());const r=t._readAttributes();for(const t of Object.keys(r))e[t]=r[t]}return e}joinAttributes(e){this._joined.push(e)}readArcadeFeature(){return this}geometry(){const e=this.readHydratedGeometry(),t=h(e,this.geometryType,this.hasZ,this.hasM),r=d(t);return r&&(r.spatialReference=this._arcadeSpatialReference),r}get dateTimeReferenceFieldIndex(){return this._datetimeMetadata||(this._datetimeMetadata=t.create(this._layerSchema.fields,this._layerSchema)),this._datetimeMetadata}autocastArcadeDate(t,r){return r&&r instanceof Date?this.isUnknownDateTimeField(t)?e.unknownDateJSToArcadeDate(r):e.dateJSAndZoneToArcadeDate(r,this.contextTimeReference?.timeZone??"system"):r}isUnknownDateTimeField(e){return"unknown"===this.dateTimeReferenceFieldIndex?.fieldTimeZone(e)}fieldSourceTimeZone(e){return this.dateTimeReferenceFieldIndex?.fieldTimeZone(e)??""}get layerPreferredTimeZone(){return this.dateTimeReferenceFieldIndex?.layerPreferredTimeZone??""}field(e){if(this.hasField(e))return this.autocastArcadeDate(e,this.readAttribute(e,!0));for(const t of this._joined)if(t.setIndex(this.getIndex()),t.hasField(e)){const r=t._readAttribute(e,!0);return this.autocastArcadeDate(e,r)}throw new Error(`Field ${e} does not exist`)}setField(e,t){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(e=!1){if(!e)return JSON.stringify(this.readLegacyFeature());const t=this.readLegacyFeature();if(!t)return JSON.stringify(null);const r={geometry:t.geometry,attributes:{...t.attributes??{}}};for(const e in r.attributes){const t=r.attributes[e];t instanceof Date&&(r.attributes[e]=t.getTime())}return JSON.stringify(r)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(e=null){return{attributes:this._readAttributes(),geometry:!0===e?.keepGeometryType?this.geometry():this.geometry()?.toJSON()??null}}castAsJsonAsync(e=null,t=null){return Promise.resolve(this.castAsJson(t))}removeIds(e){if(i(this._objectIdToIndex)){const e=new Map,t=this.getCursor();for(;t.next();){const r=n(t.getObjectId());e.set(r,t.getIndex())}this._objectIdToIndex=e}const t=this._objectIdToIndex;for(const r of e)t.has(r)&&this.removeAtIndex(t.get(r))}removeAtIndex(e){i(this._deleted)&&(this._deleted=l.create(this.getSize())),this._deleted.set(e)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const e=this.getCursor();for(;e.next();)yield e.readOptimizedFeature()}_getExists(){return i(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const e=this.readUnquantizedGeometry();if(!e||e.hasIndeterminateRingOrder)return null;const t=a(this.getQuantizationTransform(),null);return o(new u,e,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex}}export{T as F,l as S};
