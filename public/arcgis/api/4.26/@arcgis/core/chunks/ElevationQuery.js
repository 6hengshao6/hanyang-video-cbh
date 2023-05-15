/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{r as e}from"./asyncUtils.js";import t from"../core/Error.js";import{i,a as s,l as o}from"./maybe.js";import{whenOrAbort as n,throwIfAbortError as l,eachAlways as a}from"../core/promiseUtils.js";import{g as r}from"./unitUtils.js";import c from"../geometry/Multipoint.js";import p from"../geometry/Point.js";import m from"../geometry/Polyline.js";import{initializeProjection as u,project as h}from"../geometry/projection.js";import{h as f,c as d,k as y}from"./aaBoundingRect.js";import{MultiTileElevationSampler as T}from"../layers/support/ElevationSampler.js";import{E as g}from"./ElevationSamplerData.js";import{T as v}from"./TileKey.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./typedArrayUtil.js";import"./metadata.js";import"../core/lang.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./ensureType.js";import"./get.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./zmUtils.js";import"./extentUtils.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./vec4.js";import"./SimpleObservable.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";class w{constructor(e,t=null){if(this.tile=e,i(t)&&i(e)){const i=e.extent;this._samplerData=new g(t,i)}}get zmin(){return i(this._samplerData)?this._samplerData.data.minValue:0}get zmax(){return i(this._samplerData)?this._samplerData.data.maxValue:0}sample(e,t){if(s(this._samplerData))return;const{safeWidth:i,data:o,dx:n,dy:l,y1:a,x0:r}=this._samplerData,{width:c,values:p,noDataValue:m}=o,u=x(l*(a-t),0,i),h=x(n*(e-r),0,i),f=Math.floor(u),d=Math.floor(h),y=f*c+d,T=y+c,g=p[y],v=p[T],w=p[y+1],_=p[T+1];if(g!==m&&v!==m&&w!==m&&_!==m){const e=h-d,t=g+(w-g)*e;return t+(v+(_-v)*e-t)*(u-f)}}}function x(e,t,i){return e<t?t:e>i?i:e}class _{async queryAll(e,i,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new t("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const o=j.fromGeometry(i);let n=!1;s&&s.returnSampleInfo||(n=!0);const l={...D,...s,returnSampleInfo:!0},a=await this.query(e[e.length-1],o,l),r=await this._queryAllContinue(e,a,l);return r.geometry=r.geometry.export(),n&&delete r.sampleInfo,r}async query(e,i,s){if(!e)throw new t("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||!(i instanceof j)&&"point"!==i.type&&"multipoint"!==i.type&&"polyline"!==i.type)throw new t("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const o={...D,...s},n=new q(e,i.spatialReference,o),l=o.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(n,i,l),await this._selectTiles(n,l),await this._populateElevationTiles(n,l),this._sampleGeometryWithElevation(n),this._createQueryResult(n,l)}async createSampler(e,i,s){if(!e)throw new t("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new t("elevation-query:invalid-extent","Invalid or undefined extent");const o={...D,...s};return this._createSampler(e,i,o)}async createSamplerAll(e,i,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new t("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new t("elevation-query:invalid-extent","Invalid or undefined extent");const o={...D,...s,returnSampleInfo:!0},n=await this._createSampler(e[e.length-1],i,o);return this._createSamplerAllContinue(e,i,n,o)}async _createSampler(e,t,i,s){const o=i.signal;await e.load({signal:o});const n=t.spatialReference,l=e.tileInfo.spatialReference;n.equals(l)||(await u([{source:n,dest:l}],{signal:o}),t=h(t,l));const a=new A(e,t,i,s);return await this._selectTiles(a,o),await this._populateElevationTiles(a,o),new T(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,s){if(e.pop(),!e.length)return i;const o=i.samplers.map((e=>f(e.extent))),n=await this._createSampler(e[e.length-1],t,s,o);if(0===n.samplers.length)return i;const l=i.samplers.concat(n.samplers),a=new T(l,s.noDataValue);return this._createSamplerAllContinue(e,t,a,s)}async _queryAllContinue(e,t,i){const s=e.pop(),n=t.geometry.coordinates,l=t.sampleInfo;o(l);const a=[],r=[];for(let t=0;t<n.length;t++){const i=l[t];i.demResolution>=0?i.source||(i.source=s):e.length&&(a.push(n[t]),r.push(t))}if(!e.length||0===a.length)return t;const c=t.geometry.clone(a),p=await this.query(e[e.length-1],c,i),m=p.sampleInfo;if(!m)throw new Error("no sampleInfo");return r.forEach(((e,t)=>{n[e].z=p.geometry.coordinates[t].z,l[e].demResolution=m[t].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i=await e.geometry.project(e.outSpatialReference,t);o(i);const s={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(s.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),s}async _createGeometryDescriptor(e,i,s){let o;const n=e.layer.tileInfo.spatialReference;if(i instanceof j?o=await i.project(n,s):(await u([{source:i.spatialReference,dest:n}],{signal:s}),o=h(i,n)),!o)throw new t("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${n.wkid}'`);e.geometry=j.fromGeometry(o)}async _selectTiles(e,i){"geometry"===e.type&&this._preselectOutsideLayerExtent(e);const s=e.options.demResolution;if("number"==typeof s)this._selectTilesClosestResolution(e,s);else if("finest-contiguous"===s)await this._selectTilesFinestContiguous(e,i);else{if("auto"!==s)throw new t("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${s}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,i)}}_preselectOutsideLayerExtent(e){if(s(e.layer.fullExtent))return;const t=new w(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const s=e.x,o=e.y;(s<i.xmin||s>i.xmax||o<i.ymin||o>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e,t){const i=e.layer.tileInfo,s=this._findNearestDemResolutionLODIndex(i,t);e.selectTilesAtLOD(s)}_findNearestDemResolutionLODIndex(e,t){const i=t/r(e.spatialReference);let s=e.lods[0],o=0;for(let t=1;t<e.lods.length;t++){const n=e.lods[t];Math.abs(n.resolution-i)<Math.abs(s.resolution-i)&&(s=n,o=t)}return o}async _selectTilesFinestContiguous(e,t){const i=I(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,i,s){const o=e.layer;if(e.selectTilesAtLOD(i),i<0)return;const a=o.tilemapCache,r=e.getTilesToFetch();try{if(a)await n(Promise.all(r.map((e=>a.fetchAvailability(e.level,e.row,e.col,{signal:s})))),s);else if(await this._populateElevationTiles(e,s),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new t("elevation-query:has-unavailable-tiles")}catch(t){l(t),await this._selectTilesFinestContiguousAt(e,i-1,s)}}async _populateElevationTiles(e,t){const s=e.getTilesToFetch(),o={},l=e.options.cache,r=e.options.noDataValue,c=s.map((async s=>{if(null==s.id)return;const n=`${e.layer.uid}:${s.id}:${r}`,a=i(l)?l.get(n):null,c=i(a)?a:await e.layer.fetchTile(s.level,s.row,s.col,{noDataValue:r,signal:t});i(l)&&l.put(n,c),o[s.id]=new w(s,c)}));await n(a(c),t),e.populateElevationTiles(o)}async _selectTilesAuto(t,i){this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t);const s=t.layer.tilemapCache;if(!s)return this._selectTilesAutoPrefetchUpsample(t,i);const o=t.getTilesToFetch(),a={},r=o.map((async t=>{const o=new v(null,0,0,0,d()),n=await e(s.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:i}));!1!==n.ok?null!=t.id&&(a[t.id]=o):l(n.error)}));await n(Promise.all(r),i),t.remapTiles(a)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const s={},o=e=>{null!=e.id&&(e.id in s?s[e.id]++:(s[e.id]=1,i++))},n=e=>{if(null==e.id)return;const t=s[e.id];1===t?(delete s[e.id],i--):s[e.id]=t-1};e.forEachTileToFetch(o,n);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch((s=>{i<=e.options.maximumAutoTileRequests||(n(s),t.upsampleTile(s)&&(l=!0),o(s))}),n),l););}_selectTilesAutoFinest(e){const t=I(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?s=!0:t()})),s&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const s=t.elevationTile;let o=e.options.noDataValue;if(s){const e=s.sample(t.x,t.y);i(e)?o=e:t.elevationTile=null}t.z=o}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=r(t.spatialReference);return e.geometry.coordinates.map((s=>{let o=-1;return s.elevationTile&&s.elevationTile!==e.outsideExtentTile&&(o=t.lodAt(s.elevationTile.tile.level).resolution*i),{demResolution:o}}))}}class j{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new j;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>e.clone())),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await u([{source:this.spatialReference,dest:e}],{signal:t});const i=new c({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),s=h(i,e);if(!s)return null;const o=this.coordinates.map(((e,t)=>{const i=e.clone(),o=s.points[t];return i.x=o[0],i.y=o[1],i})),n=this.clone(o);return n.spatialReference=e,n}static fromGeometry(e){const t=new j;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof j)t.coordinates=e.coordinates.map((e=>e.clone())),t._exporter=(t,i)=>{const s=e.clone(t);return s.spatialReference=i,s};else switch(e.type){case"point":{const i=e,{hasZ:s,hasM:o}=i;t.coordinates=s&&o?[new E(i.x,i.y,i.z,i.m)]:s?[new E(i.x,i.y,i.z)]:o?[new E(i.x,i.y,null,i.m)]:[new E(i.x,i.y)],t._exporter=(t,i)=>e.hasM?new p(t[0].x,t[0].y,t[0].z,t[0].m,i):new p(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:s,hasM:o}=i;t.coordinates=s&&o?i.points.map((e=>new E(e[0],e[1],e[2],e[3]))):s?i.points.map((e=>new E(e[0],e[1],e[2]))):o?i.points.map((e=>new E(e[0],e[1],null,e[2]))):i.points.map((e=>new E(e[0],e[1]))),t._exporter=(t,i)=>e.hasM?new c({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new c(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,s=[],o=[],{hasZ:n,hasM:l}=e;let a=0;for(const e of i.paths)if(o.push([a,a+e.length]),a+=e.length,n&&l)for(const t of e)s.push(new E(t[0],t[1],t[2],t[3]));else if(n)for(const t of e)s.push(new E(t[0],t[1],t[2]));else if(l)for(const t of e)s.push(new E(t[0],t[1],null,t[2]));else for(const t of e)s.push(new E(t[0],t[1]));t.coordinates=s,t._exporter=(t,i)=>{const s=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),n=o.map((e=>s.slice(e[0],e[1])));return new m({paths:n,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class E{constructor(e,t,i=null,s=null,o=null,n=null){this.x=e,this.y=t,this.z=i,this.m=s,this.tile=o,this.elevationTile=n}clone(){return new E(this.x,this.y,this.z,this.m)}}class R{constructor(e,t){this.layer=e,this.options=t}}class q extends R{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>e.tile=t.tileAt(i,e.x,e.y)))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates){const i=t.tile?.id;t.tile=i?e[i]:null}}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const s=i.tile;if(!s)continue;const o=i.tile?.id;i.elevationTile||!o||e[o]||(e[o]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>{t.tile=null}))}}class A extends R{constructor(e,t,i,s){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=s}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),s=Math.min(i,e);s<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(s)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if(s(i))return-1;for(let s=t.lods.length-1;s>=0;s--){const o=t.lods[s],n=o.resolution*t.size[0],l=o.resolution*t.size[1];if(Math.ceil(i.width/n)*Math.ceil(i.height/l)<=e)return s}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const i=this._candidateTiles;this._candidateTiles=[],i.forEach((i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,(()=>s=!0)),s?t&&t(i):this._candidateTiles.push(i)})),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},s=[];for(const o of e){const e=o.id;e&&!i[e]?(i[e]=o,s.push(o)):t&&t(o)}const o=s.sort(((e,t)=>e.level-t.level));return o.filter(((e,i)=>{for(let s=0;s<i;s++){const i=o[s].extent;if(i&&e.extent&&y(i,e.extent))return t&&t(e),!1}return!0}))}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(s(t))return;const i=this.layer.tileInfo,o=i.lods[e],n=i.tileAt(o.level,t.xmin,t.ymin),l=n.extent;if(s(l))return;const a=o.resolution*i.size[0],r=o.resolution*i.size[1],c=Math.ceil((t.xmax-l[0])/a),p=Math.ceil((t.ymax-l[1])/r);for(let e=0;e<p;e++)for(let t=0;t<c;t++){const s=new v(null,n.level,n.row-e,n.col+t);i.updateTileInfo(s),this._tileIsMasked(s)||this._candidateTiles.push(s)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>e.extent&&y(t,e.extent)))}}function I(e,t=0){let i=e.lods.length-1;if(t>0){const s=t/r(e.spatialReference),o=e.lods.findIndex((e=>e.resolution<s));0===o?i=0:o>0&&(i=o-1)}return i}const D={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{_ as ElevationQuery,j as GeometryDescriptor,I as getFinestLodIndex};
