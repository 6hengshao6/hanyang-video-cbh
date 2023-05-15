/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import t from"../core/Accessor.js";import{P as r,l as s}from"./typedArrayUtil.js";import{L as i}from"./Logger.js";import{c as n}from"./mathUtils.js";import{u as o,i as a,a as c,d as l}from"./maybe.js";import{u,a as p,i as y}from"./DefinitionExpressionSceneLayerView.js";import{whenOnce as d}from"../core/reactiveUtils.js";import{e as h,i as f,b as m}from"./unitUtils.js";import{property as g}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as E}from"../core/accessorSupport/decorators/subclass.js";import{t as w,a as S,s as j}from"./vec3.js";import{WhereClause as b}from"../core/sql/WhereClause.js";import{projectBoundingSphere as F,load as _,project as I,projectVectorToVector as v}from"../geometry/projection.js";import{c as R,u as x}from"./aaBoundingBox.js";import{f as O,l as Q,d as M,c as C,i as D}from"./aaBoundingRect.js";import{d as T}from"./DoubleArray.js";import{e as N}from"./Ellipsoid.js";import{f as A}from"./sphere.js";import{project as G}from"../geometry/support/webMercatorUtils.js";import k from"../layers/support/FeatureFilter.js";import{u as J,l as P,m as V}from"./I3SUtil.js";import B from"../geometry/SpatialReference.js";import L from"../core/Error.js";import U from"../core/Handles.js";import K from"../geometry/Extent.js";import{f as W}from"../widgets/Popup/PopupViewModel.js";import{Q as q}from"./QueryEngine.js";import z from"../rest/support/FeatureSet.js";import Z from"../rest/support/Query.js";import{g as $}from"./centroid.js";import{O as H}from"./OptimizedFeature.js";import X from"../core/Evented.js";import{a as Y}from"./I3SMeshView3D.js";const ee="esri.views.3d.layers.i3s.I3SMeshViewFilter",te=i.getLogger(ee);let re=class extends t{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){d((()=>o(this.viewFilter)?.geometry||a(this.layerFilter))).then((()=>this.loadAsyncModule(import("../geometry/geometryEngine.js").then((e=>{this.destroyed||(this._geometryEngine=e)})))))}get sortedObjectIds(){if(c(this.viewFilter)||c(this.viewFilter.objectIds))return null;const e=T(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=a(this.viewFilter)?this.viewFilter.where:null;if(c(e)||!e)return null;try{return b.create(e,this.layerFieldsIndex)}catch(e){te.error(`Failed to parse filter where clause: ${e}`)}return null}addFilters(e,t,r,s){const i=this.sortedObjectIds;a(i)&&e.push((e=>J(i,!0,e))),this.addSqlFilter(e,this.parsedWhereClause);const n=u(this._layerMaskGeometries),o=this._geometryEngine;if(a(n)&&a(this.layerFilter)&&a(o)){const i=this.layerFilter.spatialRelationship;e.push(((e,a)=>ae(o,e,a,s,t,r,n,i)))}const c=u(this._viewMaskGeometries);if(a(c)&&a(this.viewFilter)&&a(o)){const i=this.viewFilter.spatialRelationship;e.push(((e,n)=>ae(o,e,n,s,t,r,c,i)))}}isMBSGeometryVisible(e,t,r){const s=u(this._layerMaskGeometries),i=this._geometryEngine;if(a(s)&&a(this.layerFilter)&&a(i)){const n=this.layerFilter.spatialRelationship,o=s[0].spatialReference||t;return F(e,r,ce,o)?oe(i,ce,s,o,n):(te.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const n=u(this._viewMaskGeometries);if(a(n)&&a(this.viewFilter)&&a(i)){const s=this.viewFilter.spatialRelationship,o=n[0].spatialReference||t;return F(e,r,ce,o)?oe(i,ce,n,o,s):(te.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=u(this._viewMaskGeometries),t=u(this._layerMaskGeometries);return c(e)||c(t)?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return c(e)?null:c(this._geometryEngine)?p:"disjoint"===e.spatialRelationship?e.geometries.map((e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}}))):[e.geometries.reduce(((e,t)=>(e.rings=[...e.rings,...t.rings],e)),{type:"polygon",rings:[],spatialReference:e.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(c(this.viewFilter))return null;const{geometry:e}=this.viewFilter;if(c(e))return null;if(c(this.viewFilter)||c(this._geometryEngine))return p;const{distance:t,units:r}=this.viewFilter,s=this.viewFilter.spatialRelationship,i="mesh"===e.type?e.extent:e;if(c(t)||0===t)return ne(this._geometryEngine,i,s);const n=r||h(i.spatialReference);if(i.spatialReference.isWGS84){const e=this._geometryEngine.geodesicBuffer(i,t,n);return ne(this._geometryEngine,e,s)}const o=G(i,B.WGS84);if(a(o)){const e=G(this._geometryEngine.geodesicBuffer(o,t,n),i.spatialReference);return ne(this._geometryEngine,e,s)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(_().then((()=>this._projectionEngineLoaded=!0))),!this._projectionEngineLoaded))return null;let l=null;try{l=I(i,B.WGS84)}catch(e){}if(l)try{l=I(this._geometryEngine.geodesicBuffer(l,t,n),i.spatialReference)}catch(e){l=null}return l||te.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${i.spatialReference.wkid}) to WGS84.`),ne(this._geometryEngine,l,s)}get updating(){return y(this._layerMaskGeometries)||y(this._viewMaskGeometries)}static checkSupport(e){return!(c(e)||(e.timeExtent?(te.warn("Filters with a timeExtent are not supported for mesh scene layers"),1):(null==(t=e.spatialRelationship)||!se.includes(t))&&(te.warn(`Filters with spatialRelationship other than ${se.join(", ")} are not supported for mesh scene layers`),1)));var t}};e([g()],re.prototype,"layerFilter",void 0),e([g({type:k})],re.prototype,"viewFilter",void 0),e([g()],re.prototype,"layerFieldsIndex",void 0),e([g()],re.prototype,"loadAsyncModule",void 0),e([g()],re.prototype,"addSqlFilter",void 0),e([g({readOnly:!0})],re.prototype,"sortedObjectIds",null),e([g({readOnly:!0})],re.prototype,"parsedWhereClause",null),e([g({readOnly:!0})],re.prototype,"parsedGeometry",null),e([g({readOnly:!0})],re.prototype,"_layerMaskGeometries",null),e([g({readOnly:!0})],re.prototype,"_viewMaskGeometries",null),e([g()],re.prototype,"updating",null),e([g()],re.prototype,"_projectionEngineLoaded",void 0),e([g()],re.prototype,"_geometryEngine",void 0),re=e([E(ee)],re);const se=["contains","intersects","disjoint"];var ie;function ne(e,t,i){if(c(t))return null;if("disjoint"===i&&"polygon"===t.type){const i=t.rings.length,n=t.spatialReference,o=new Array(i);for(let e=0;e<i;++e){const r=O(1/0,1/0,-1/0,-1/0);Q(r,t.rings[e]),o[e]={type:"polygon",rings:[t.rings[e]],spatialReference:n,cache:{},aabr:r}}o.sort(((e,t)=>e.aabr[0]-t.aabr[0]));const a=new Set,c=new r;for(let t=0;t<o.length;++t){const r=o[t],i=r.aabr[0];a.forEach((t=>{if(i>=t.aabr[2])return void a.delete(t);if(r.aabr[1]>t.aabr[3]||r.aabr[3]<t.aabr[1]||!e.intersects(r,t))return;r.rings=r.rings.concat(t.rings),M(r.aabr,t.aabr,r.aabr),r.cache={},a.delete(t);const n=s(o,t,o.length,c);o.splice(n,1)})),a.add(r)}for(const e of o)e.aabr=void 0;return o}return[t]}function oe(e,t,r,s,i){const n=le(e,t,s);return r.every((t=>ue(e,t,n,i)!==ie.DISCARD))}function ae(e,t,r,s,i,n,o,a){const c=o[0].spatialReference||i.spatialReference;if(!F(r.node.mbs,n,ce,c))return void te.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const l=le(e,ce,c),u=function(e,t,r,s,i){const n=t.renderSpatialReference,o=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};let c,l;switch(a.rings[0][3]=a.rings[0][0],e){case"intersects":c=(e,t,r)=>e.intersects(t,r)?ie.KEEP:ie.TEST,l=pe;break;case"contains":c=(e,t,r)=>e.contains(t,r)?ie.TEST:ie.DISCARD,l=pe;break;default:c=(e,t,r)=>e.disjoint(t,r)?ie.TEST:ie.DISCARD,l=ye}return{collection:s,object:i,type:e,maskSR:r,renderSR:n,aabbCache:o,triangle:a,positions:{indices:null,data:null,stride:0,startIndex:0,endIndex:0},triangleTest:c,geometryTest:l}}(a,i,c,s,r.objectHandle);for(const s of o){if(0===t.length)return;switch(ue(e,s,l,a)){case ie.DISCARD:return void(t.length=0);case ie.KEEP:continue}P(t,r.featureIds,(t=>de(e,s,t,u)))}}!function(e){e[e.KEEP=0]="KEEP",e[e.DISCARD=1]="DISCARD",e[e.TEST=2]="TEST"}(ie||(ie={}));const ce=A(0,0,0,0);function le(e,t,r){const s={type:"point",x:t[0],y:t[1],hasZ:!1,hasM:!1,spatialReference:r},i=!f(r)&&!m(r),o=Number.isNaN(t[3])?0:n(t[3],0,2*N.radius),a=i?e.buffer(s,o,1):e.geodesicBuffer(s,o,1);return a.type="polygon",a}function ue(e,t,r,s){switch(s){case"intersects":case"contains":return pe(e,t,r);case"disjoint":return ye(e,t,r)}}function pe(e,t,r){return e.intersects(t,r)?e.contains(t,r)?ie.KEEP:ie.TEST:ie.DISCARD}function ye(e,t,r){return e.intersects(t,r)?e.contains(t,r)?ie.DISCARD:ie.TEST:ie.KEEP}function de(e,t,r,s){const{collection:i,object:n,renderSR:o,maskSR:a,geometryTest:c,aabbCache:l}=s;let u=l.get(r);if(!u){const e=i.getObjectTransform(n);i.getComponentAabb(n,r,he);const t=[[he[0],he[1],0],[he[0],he[4],0],[he[3],he[4],0],[he[3],he[1],0]];for(let r=0;r<4;++r)w(t[r],t[r],e.rotationScale),S(t[r],t[r],e.position),v(t[r],o,t[r],a);u={type:"polygon",rings:[t],spatialReference:a,cache:{}},u.rings[0][4]=u.rings[0][0],l.set(r,u)}switch(c(e,t,u)){case ie.DISCARD:return!1;case ie.KEEP:return!0}const{triangle:p,triangleTest:y,positions:d}=s,h=p.rings[0][0],f=p.rings[0][1],m=p.rings[0][2],g=i.getObjectTransform(n);i.getComponentPositions(n,r,d);const{indices:E,data:b,stride:F,startIndex:_,endIndex:I}=d;for(let r=_;r<I;r+=3){const s=F*E[r],i=F*E[r+1],n=F*E[r+2];switch(j(h,b[s],b[s+1],b[s+2]),j(f,b[i],b[i+1],b[i+2]),j(m,b[n],b[n+1],b[n+2]),w(h,h,g.rotationScale),w(f,f,g.rotationScale),w(m,m,g.rotationScale),S(h,h,g.position),S(f,f,g.position),S(m,m,g.position),v(h,o,h,a),v(f,o,f,a),v(m,o,m,a),y(e,t,p)){case ie.DISCARD:return!1;case ie.KEEP:return!0}}return"intersects"!==s.type}const he=R(),fe=q;let me=class extends t{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Z({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e),this._handles=new U}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",(()=>this.spatialIndex.events.emit("changed"))))}destroy(){this._dataQueryEngineInstance=l(this._dataQueryEngineInstance),this._handles=l(this._handles),this._set("layerView",null)}async executeQueryForCount(e,t){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:r,extent:s}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:K.fromJSON(s)}}async executeQueryForIds(e,t){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const r=this._ensureQueryJSON(e);if(r.returnGeometry)throw new L("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(r.returnCentroid)throw new L("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const s=await this._dataQueryEngine.executeQuery(r,t),i=z.fromJSON(s);return i.features.forEach((e=>{e.geometry=null})),i}_ensureQueryJSON(e){return c(e)?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||W,t=this.layer.fields?.map((e=>e.toJSON()))??[],r=this.layerView.view.resourceController.scheduler,s=this.spatialReference.toJSON(),i=this.priority,n=this.spatialIndex;return this._dataQueryEngineInstance=new fe({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fields:t,timeInfo:null,spatialReference:s,objectIdField:e,featureStore:n,scheduler:r,priority:i}),this._dataQueryEngineInstance}};e([g({constructOnly:!0})],me.prototype,"layerView",void 0),e([g({constructOnly:!0})],me.prototype,"priority",void 0),e([g({constructOnly:!0})],me.prototype,"spatialIndex",void 0),e([g()],me.prototype,"spatialReference",null),e([g()],me.prototype,"layer",null),e([g()],me.prototype,"defaultQueryJSON",null),me=e([E("esri.views.3d.layers.i3s.I3SQueryEngine")],me);class ge{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){const{meta:t,index:r}=e,s={};this._objectIdField&&(s[this._objectIdField]=e.id);const i=a(t.attributeInfo)&&t.attributeInfo.attributeData;if(a(i))for(const e of Object.keys(i))s[e]=V(i[e],r);return s}getAttribute(e,t){if(t===this._objectIdField)return e.id;const{meta:r,index:s}=e,i=a(r.attributeInfo)&&r.attributeInfo.attributeData;return a(i)?V(i[t],s):null}getGeometry(e){if(e.geometry)return e.geometry;const[t,r,s,i,n]=this._getFeatureExtent(e,Ee);return new H([5],[t,r,s,i,r,s,i,n,s,t,n,s,t,r,s])}getCentroid(e,t){if(e.geometry)return $(new H,e.geometry,t.hasZ,t.hasM);const[r,s,i,n,o,a]=this._getFeatureExtent(e,Ee);return new H([0],[(r+n)/2,(s+o)/2,(i+a)/2])}cloneWithGeometry(e,t){const{id:r,index:s,meta:i}=e;return{id:r,index:s,meta:i,geometry:t}}}const Ee=R(),we=R();let Se=class extends t{constructor(e){super(e),this.events=new X}forEach(e){this.forAllFeatures((t=>(e(t),Y.CONTINUE)))}forEachBounds(e,t){const r=this.getFeatureExtent;for(const s of e)t(r(s,we))}forEachInBounds(e,t){this.forAllFeatures((r=>{const s=this.getFeatureExtent(r,be);return D(e,x(s,Fe))&&t(r),Y.CONTINUE}),(t=>{if(F(t.node.mbs,this.sourceSpatialReference,je,this.viewSpatialReference),je[0]>=e[0]&&je[2]<=e[2]&&je[1]>=e[1]&&je[3]<=e[3])return Y.CONTINUE;const r=Math.max(e[0],Math.min(je[0],e[2])),s=Math.max(e[1],Math.min(je[1],e[3])),i=je[0]-r,n=je[1]-s;return i*i+n*n<=je[3]*je[3]?Y.CONTINUE:Y.SKIP}))}};e([g({constructOnly:!0})],Se.prototype,"featureAdapter",void 0),e([g({constructOnly:!0})],Se.prototype,"forAllFeatures",void 0),e([g({constructOnly:!0})],Se.prototype,"getFeatureExtent",void 0),e([g({constructOnly:!0})],Se.prototype,"sourceSpatialReference",void 0),e([g({constructOnly:!0})],Se.prototype,"viewSpatialReference",void 0),Se=e([E("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],Se);const je=A(0,0,0,0),be=R(),Fe=C();export{re as I,me as a,Se as b,ge as c};