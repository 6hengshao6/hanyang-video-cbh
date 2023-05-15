/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{P as e,l as t}from"./typedArrayUtil.js";import s from"../core/Error.js";import{clone as i}from"../core/lang.js";import{r,d as a,a as n,i as o}from"./maybe.js";import{M as u,a as c}from"./MemCache.js";import{throwIfAborted as l}from"../core/promiseUtils.js";import{f as h,g as m,n as f}from"./unitUtils.js";import{s as d,N as p,c as y,b as g}from"./aaBoundingBox.js";import{f as _,c as x}from"./aaBoundingRect.js";import{c as w}from"./extentUtils.js";import{fromJSON as S,isExtent as F,isPolygon as Q}from"../geometry/support/jsonUtils.js";import{normalizeCentralMeridian as R}from"../geometry/support/normalizeUtils.js";import{c as I}from"./featureConversionUtils.js";import{Q as E,S as j,g as A,v as b,a as P,b as T,h as B}from"./QueryEngineResult.js";import{c as C,p as k,a as q}from"./projectionSupport.js";import{q as v}from"./QueryEngineCapabilities.js";import{g as z,a as O,b as G,c as M,d as U}from"./timeSupport.js";import{Q as N,c as Z,n as H,g as D}from"./utils9.js";import L from"../layers/support/FieldsIndex.js";import{l as J}from"./arcadeOnDemand.js";import{n as V}from"./Scheduler.js";const W="feature-store:unsupported-query",$=new u(2e6);let K=0;class X{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:v},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new c(K+++"$$",$)),this.fieldsIndex=new L(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=r(this._frameTask),this.clearCache(),a(this._geometryQueryCache),this._changeHandle=r(this._changeHandle),a(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._geometryQueryCache?.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(t){if(t!==N)throw t;return new E([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(e){if(e!==N)throw e;return 0}}async executeQueryForExtent(e,t){const s=e.outSR;try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=i.size;return r?{count:r,extent:await this._getBounds(i.items,i.spatialReference,s||this.spatialReference)}:{count:0,extent:null}}catch(e){if(e===N)return{count:0,extent:null};throw e}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e,t){try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),i=s.items,r=new Set;return await this._reschedule((()=>{for(const e of i)r.add(s.featureAdapter.getObjectId(e))}),t),r}catch(e){if(e===N)return new Set;throw e}}async executeQueryForSnapping(e,t){const{point:s,distance:i,types:r}=e;if(r===j.NONE)return{candidates:[]};const a=await this._reschedule((()=>this._checkQuerySupport(e.query)),t),o=!h(s.spatialReference,this.spatialReference);o&&await C(s.spatialReference,this.spatialReference);const u="number"==typeof i?i:i.x,c="number"==typeof i?i:i.y,l={xmin:s.x-u,xmax:s.x+u,ymin:s.y-c,ymax:s.y+c,spatialReference:s.spatialReference},m=o?k(l,this.spatialReference):l;if(!m)return{candidates:[]};const f=(await R(S(s),null,{signal:t}))[0],d=(await R(S(m),null,{signal:t}))[0];if(n(f)||n(d))return{candidates:[]};const p=new E(await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(d.toJSON()))),t),a,this);await this._reschedule((()=>this._executeObjectIdsQuery(p)),t),await this._reschedule((()=>this._executeTimeQuery(p)),t),await this._reschedule((()=>this._executeAttributesQuery(p)),t);const y=f.toJSON(),g=o?k(y,this.spatialReference):y,_=o?Math.max(m.xmax-m.xmin,m.ymax-m.ymin)/2:i;return p.createSnappingResponse({...e,point:g,distance:_},s.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new s(W,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const s=await this._executeQuery(e,{},t);return await this._reschedule((()=>this._filterLatest(s)),t),s.createQueryResponse()}catch(t){if(t!==N)throw t;return new E([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const{field:i,field2:r,field3:a,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:i,field2:r,field3:a,valueExpression:n},s)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const{field:i,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:a},s)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const[t,s]=await Promise.all(["getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getBounds(await this._getAllFeatures(),this.spatialReference,this.spatialReference),o(this._timeExtentPromise)?this._timeExtentPromise:this._timeExtentPromise=z(this.timeInfo,this.featureStore)]);return l(e),{fullExtent:t,timeExtent:s}}async _getBounds(e,t,s){const i=d(y(),p);await this.featureStore.forEachBounds(e,(e=>g(i,e)));const r={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:Z(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(r.zmin=i[2],r.zmax=i[5]);const a=k(r,t,s);if(a.spatialReference=Z(s),a.xmax-a.xmin==0){const e=m(a.spatialReference);a.xmin-=e,a.xmax+=e}if(a.ymax-a.ymin==0){const e=m(a.spatialReference);a.ymin-=e,a.ymax+=e}if(this.hasZ&&null!=a.zmin&&null!=a.zmax&&a.zmax-a.zmin==0){const e=m(a.spatialReference);a.zmin-=e,a.zmax+=e}return a}async _schedule(e,t){return o(this._frameTask)?this._frameTask.schedule(e,t):e(V)}async _reschedule(e,t){return o(this._frameTask)?this._frameTask.reschedule(e,t):e(V)}async _getAllFeaturesQueryEngineResult(e){return new E(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(n(this._allFeaturesPromise)){const e=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach((t=>e.push(t)))})().then((()=>e))}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=i(e),e=await this._schedule((()=>H(e,this.definitionExpression,this.spatialReference)),s),e=await this._reschedule((()=>this._checkQuerySupport(e)),s),e={...e,...t};const r=await this._reschedule((()=>this._executeSceneFilterQuery(e,s)),s),a=await this._reschedule((()=>this._executeGeometryQuery(e,r,s)),s);return await this._reschedule((()=>this._executeAggregateIdsQuery(a)),s),await this._reschedule((()=>this._executeObjectIdsQuery(a)),s),await this._reschedule((()=>this._executeTimeQuery(a)),s),await this._reschedule((()=>this._executeAttributesQuery(a)),s),a}async _executeSceneFilterQuery(e,t){if(n(e.sceneFilter))return null;const{outSR:s,returnGeometry:i,returnCentroid:r}=e,a=this.featureStore.featureSpatialReference,o=e.sceneFilter.geometry,u=n(a)||h(a,o.spatialReference)?o:k(o,a);if(!u)return null;const c=i||r,l=f(s)&&!h(this.spatialReference,s)&&c?async e=>this._project(e,s):e=>e,m=this.featureAdapter,d=await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(u))),t);if("disjoint"===e.sceneFilter.spatialRelationship){if(!d.length)return null;const s=new Set;for(const e of d)s.add(m.getObjectId(e));const i=await this._reschedule((()=>this._getAllFeatures()),t);return l(await this._reschedule((async()=>{const r=await O("esriSpatialRelDisjoint",u,this.geometryType,this.hasZ,this.hasM),a=await this._runSpatialFilter(i,(e=>!s.has(m.getObjectId(e))||r(m.getGeometry(e))),t);return new E(a,e,this)}),t))}if(!d.length)return new E([],e,this);if(this._canExecuteSinglePass(u,e))return l(new E(d,e,this));const p=await O("esriSpatialRelContains",u,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(d,(e=>p(m.getGeometry(e))),t);return l(new E(y,e,this))}async _executeGeometryQuery(s,i,r){if(o(i)&&0===i.items.length)return i;s=o(i)?i.query:s;const{geometry:a,outSR:u,spatialRel:c,returnGeometry:l,returnCentroid:m}=s,d=this.featureStore.featureSpatialReference,p=!a||n(d)||h(d,a.spatialReference)?a:k(a,d),y=l||m,g=f(u)&&!h(this.spatialReference,u),_=this._geometryQueryCache&&n(i)?g&&y?JSON.stringify({originalFilterGeometry:a,spatialRelationship:c,outSpatialReference:u}):JSON.stringify({originalFilterGeometry:a,spatialRelationship:c}):null,x=_?this._geometryQueryCache.get(_):null;if(o(x))return new E(x,s,this);const w=async e=>(g&&y&&await this._project(e,u),_&&this._geometryQueryCache.put(_,e.items,e.items.length+1),e);if(!p)return w(o(i)?i:await this._getAllFeaturesQueryEngineResult(s));const S=this.featureAdapter;let F=await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(a))),r);if("esriSpatialRelDisjoint"===c){if(!F.length)return w(o(i)?i:await this._getAllFeaturesQueryEngineResult(s));const e=new Set;for(const t of F)e.add(S.getObjectId(t));const t=o(i)?i.items:await this._reschedule((()=>this._getAllFeatures()),r);return w(await this._reschedule((async()=>{const i=await O(c,p,this.geometryType,this.hasZ,this.hasM),a=await this._runSpatialFilter(t,(t=>!e.has(S.getObjectId(t))||i(S.getGeometry(t))),r);return new E(a,s,this)}),r))}if(o(i)){const s=new e;F=F.filter((e=>t(i.items,e,i.items.length,s)>=0))}if(!F.length){const e=new E([],s,this);return _&&this._geometryQueryCache.put(_,e.items,1),e}if(this._canExecuteSinglePass(p,s))return w(new E(F,s,this));const Q=await O(c,p,this.geometryType,this.hasZ,this.hasM),R=await this._runSpatialFilter(F,(e=>Q(S.getGeometry(e))),r);return w(new E(R,s,this))}_executeAggregateIdsQuery(e){if(0===e.items.length||!e.query.aggregateIds||!e.query.aggregateIds.length||n(this.aggregateAdapter))return;const t=new Set;for(const s of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach((e=>t.add(e)));const s=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(s(e))))}_executeObjectIdsQuery(e){if(0===e.items.length||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(s(e))))}_executeTimeQuery(e){if(0===e.items.length)return;const t=G(this.timeInfo,e.query.timeExtent,this.featureAdapter);n(t)||(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(0===e.items.length)return;const t=A(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter((e=>t.testFeature(e,this.featureAdapter)))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(n(this._frameTask))return e.filter((e=>t(e)));let i=0;const r=new Array,a=async n=>{for(;i<e.length;){const o=e[i++];t(o)&&(r.push(o),n.madeProgress()),n.done&&await this._reschedule((e=>a(e)),s)}};return this._reschedule((e=>a(e)),s).then((()=>r))}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,r=i||s,a=new Map,n=this.featureAdapter.getAttribute;for(const s of e.items){const e=n(s,t),i=n(s,r),o=a.get(e);(!o||i>n(o,r))&&a.set(e,s)}e.items=Array.from(a.values())}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return M(e)&&("esriSpatialRelEnvelopeIntersects"===s||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s||"esriSpatialRelWithin"===s))}async _project(e,t){if(!t||h(this.spatialReference,t))return e;const s=this.featureAdapter,i=await q(e.items.map((e=>D(this.geometryType,this.hasZ,this.hasM,s.getGeometry(e)))),this.spatialReference,t);return e.items=i.map(((t,i)=>s.cloneWithGeometry(e.items[i],I(t,this.hasZ,this.hasM)))),e}_getQueryBBoxes(e){if(M(e)){if(F(e))return[_(e.xmin,e.ymin,e.xmax,e.ymax)];if(Q(e))return e.rings.map((e=>_(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[w(x(),e)]}async _searchFeatures(e){const t=new Set;await Promise.all(e.map((e=>this.featureStore.forEachInBounds(e,(e=>t.add(e))))));const s=Array.from(t.values());return t.clear(),s}async _checkStatisticsSupport(e,t){if((e.distance??0)<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new s(W,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),U(e,this.geometryType,this.spatialReference),C(this.spatialReference,e.outSR)]).then((()=>e))}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:s}=await J();t=s.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.field2&&t.push(e.field2),e.field3&&t.push(e.field3),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new s(W,"params should have at least a field or valueExpression",{params:e});b(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if((e.distance??0)<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new s(W,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([U(e,this.geometryType,this.spatialReference),C(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:i,returnDistinctValues:r,outStatistics:a}=e,n=a?a.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())).filter(Boolean):[];if(i&&i.length>0){const e=" asc",t=" desc",s=i.map((s=>{const i=s.toLowerCase();return i.includes(e)?i.split(e)[0]:i.includes(t)?i.split(t)[0]:s})).filter((e=>!n.includes(e)));b(this.fieldsIndex,s,"orderByFields contains missing fields")}if(t&&t.length>0)b(this.fieldsIndex,t,"outFields contains missing fields");else if(r)throw new s(W,"outFields should be specified for returnDistinctValues",{query:e});P(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:i,having:r}=e,a=i&&i.length,n=t&&t.length;if(r){if(!a||!n)throw new s(W,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});T(this.fieldsIndex,r,t)}if(n){if(!function(e){return null!=e&&e.every((e=>"exceedslimit"!==e.statisticType))}(t))return;const r=t.map((e=>e.onStatisticField)).filter(Boolean);b(this.fieldsIndex,r,"onStatisticFields contains missing fields"),a&&b(this.fieldsIndex,i,"groupByFieldsForStatistics contains missing fields");for(const i of t){const{onStatisticField:t,statisticType:r}=i;if("percentile_disc"!==r&&"percentile_cont"!==r||!("statisticParameters"in i)){if("count"!==r&&t&&B(t,this.fieldsIndex))throw new s(W,"outStatistics contains non-numeric fields",{definition:i,query:e})}else{const{statisticParameters:t}=i;if(!t)throw new s(W,"statisticParamters should be set for percentile type",{definition:i,query:e})}}}}async _getQueryEngineResultForStats(e,t,s){e=i(e);try{e=await this._schedule((()=>H(e,this.definitionExpression,this.spatialReference)),s),e=await this._reschedule((()=>this._checkStatisticsSupport(e,t)),s);const i=await this._reschedule((()=>this._executeSceneFilterQuery(e,s)),s),r=await this._reschedule((()=>this._executeGeometryQuery(e,i,s)),s);return await this._reschedule((()=>this._executeAggregateIdsQuery(r)),s),await this._reschedule((()=>this._executeObjectIdsQuery(r)),s),await this._reschedule((()=>this._executeTimeQuery(r)),s),await this._reschedule((()=>this._executeAttributesQuery(r)),s),r}catch(t){if(t!==N)throw t;return new E([],e,this)}}}export{X as Q};