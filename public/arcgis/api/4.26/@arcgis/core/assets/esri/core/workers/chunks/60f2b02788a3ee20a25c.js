"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3900],{3900:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var i=s(60991),r=s(71252),n=s(32422),a=s(53785),o=s(40267),l=s(19957),u=s(56761),d=s(24251),p=s(50815),c=s(4571),y=s(77358),f=s(1709),h=s(54732),m=s(14249);s(76506),s(48578),s(92143),s(31450),s(71552),s(40642),s(21801),s(34250),s(91306),s(60474),s(66396),s(86656),s(17533),s(6540),s(73796),s(12047),s(21972),s(91055),s(19657),s(6906),s(50406),s(97714),s(60947),s(2906),s(57251),s(89623),s(91597),s(86787),s(35132),s(84069),s(44567),s(98380),s(92482),s(82426),s(72836),s(29794),s(7200),s(92896),s(53326),s(75067),s(74395),s(88994),s(98576),s(44722),s(4978),s(1623),s(89914),s(65775),s(12381),s(73173),s(82058),s(88762),s(32101),s(92624),s(92847),s(95533),s(94751),s(95307),s(74569),s(22781),s(94216),s(81731),s(77314),s(91700),s(77849),s(71435),s(30831),s(72274),s(27874),s(36097),s(5777),s(90529),s(66774),s(59465),s(60217),s(89219),s(92653),s(85056),s(58085),s(76360),s(55585),s(6941);const g=a.W,b={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.W},I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return(0,n.wp)(e)?null!=e.z:!!e.hasZ}function S(e){return(0,n.wp)(e)?null!=e.m:!!e.hasM}class _{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:s}=e,r=this._inferLayerProperties(s,e.fields),n=e.fields||[],a=null!=e.hasM?e.hasM:!!r.hasM,o=null!=e.hasZ?e.hasZ:!!r.hasZ,y=!e.spatialReference&&!r.spatialReference,F=y?g:e.spatialReference||r.spatialReference,S=y?b:null,_=e.geometryType||r.geometryType,E=!_;let x=e.objectIdField||r.objectIdField,T=e.timeInfo;if(!E&&(y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new i.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!x)throw new i.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&x!==r.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${x}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),x=r.objectIdField),x&&!r.objectIdField){let e=null;n.some((t=>t.name===x&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n.unshift({alias:x,name:x,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of n){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new i.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===x&&(e.type="esriFieldTypeOID"),!h.k.jsonValues.includes(e.type))throw new i.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const R={};for(const e of n)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=(0,m.os)(e);void 0!==t&&(R[e.name]=t)}if(this._fieldsIndex=new f.Z(n),this._createDefaultAttributes=(0,c.b)(R,x),T){if(T.startTimeField){const e=this._fieldsIndex.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=this._fieldsIndex.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=this._fieldsIndex.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:T}}),T=null)}const j={warnings:t,featureErrors:[],layerDefinition:{...I,drawingInfo:(0,c.a)(_),templates:(0,c.d)(R),extent:S,geometryType:_,objectIdField:x,fields:n,hasZ:o,hasM:a,timeInfo:T},assignedObjectIds:{}};if(this._queryEngine=new p.Q({fields:n,geometryType:_,hasM:a,hasZ:o,objectIdField:x,spatialReference:F,featureStore:new u.F({geometryType:_,hasM:a,hasZ:o}),timeInfo:T,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=l.i,j;const w=(0,l.f)(x,s);return this._nextObjectId=w+1,await(0,d.c)(s,F),this._loadInitialFeatures(j,s)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([(0,y.l)(t,s),(0,d.c)(e.adds,t),(0,d.c)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,i,a=null,o=null,l=null;for(const t of e){const e=t.geometry;if(!(0,r.a)(e)&&(a||(a=(0,n.Ji)(e)),o||(o=e.spatialReference),null==s&&(s=F(e)),null==i&&(i=S(e)),a&&o&&null!=s&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||i}))&&(l=e.name)}return{geometryType:a,spatialReference:o,objectIdField:l,hasM:i,hasZ:s}}async _loadInitialFeatures(e,t){const{geometryType:s,hasM:i,hasZ:a,objectIdField:l,spatialReference:u,featureStore:p}=this._queryEngine,c=[];for(const i of t){if(null!=i.uid&&(e.assignedObjectIds[i.uid]=-1),i.geometry&&s!==(0,n.Ji)(i.geometry)){e.featureErrors.push((0,y.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,y.m)(this._fieldsIndex,t,i.attributes,!0,e.warnings);a?e.featureErrors.push(a):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,null!=i.uid&&(e.assignedObjectIds[i.uid]=i.attributes[l]),(0,r.i)(i.geometry)&&(i.geometry=(0,d.p)(i.geometry,i.geometry.spatialReference,u)),c.push(i))}p.addMany((0,o.n)([],c,s,a,i,l));const{fullExtent:f,timeExtent:h}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=f,h){const{start:t,end:s}=h;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push((0,y.c)(e));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:n,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:a,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:a,hasZ:l,objectIdField:u,spatialReference:p,featureStore:c}=this._queryEngine,f=[];for(const a of t){if(a.geometry&&i!==(0,n.Ji)(a.geometry)){s.push((0,y.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=(0,y.m)(this._fieldsIndex,t,a.attributes);if(o)s.push(o);else{if(this._assignObjectId(t,a.attributes),a.attributes=t,null!=a.uid){const t=a.attributes[u];e.uidToObjectId[a.uid]=t}if((0,r.i)(a.geometry)){const e=a.geometry.spatialReference??p;a.geometry=(0,d.p)((0,y.s)(a.geometry,e),e,p)}f.push(a),s.push((0,y.c)(a.attributes[u]))}}c.addMany((0,o.n)([],f,i,l,a,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:a,objectIdField:l,spatialReference:u,featureStore:p}=this._queryEngine;for(const c of t){const{attributes:t,geometry:f}=c,h=t&&t[l];if(null==h){e.push((0,y.a)(`Identifier field ${l} missing`));continue}if(!p.has(h)){e.push((0,y.a)(`Feature with object id ${h} missing`));continue}const m=(0,o.o)(p.getFeature(h),s,a,i);if((0,r.i)(f)){if(s!==(0,n.Ji)(f)){e.push((0,y.a)("Incorrect geometry type."));continue}const t=f.spatialReference??u;m.geometry=(0,d.p)((0,y.s)(f,t),t,u)}if(t){const s=(0,y.m)(this._fieldsIndex,m.attributes,t);if(s){e.push(s);continue}}p.add((0,o.p)(m,s,a,i,l)),e.push((0,y.c)(h))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;s&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}},4571:(e,t,s)=>{s.d(t,{a:()=>o,b:()=>d,c:()=>c,d:()=>p});var i=s(48578),r=s(76506),n=s(89219),a=s(6941);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.d:"esriGeometryPolyline"===e?a.a:a.b}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,i.h)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new i}catch(s){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,r.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:n.q,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},6941:(e,t,s)=>{s.d(t,{a:()=>n,b:()=>a,c:()=>o,d:()=>r,e:()=>l,f:()=>u,g:()=>d});const i=[252,146,31,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},o={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},d={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},19957:(e,t,s)=>{s.d(t,{f:()=>r,i:()=>i});const i=1;function r(e,t){let s=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(s=Math.max(s,t))}return s}}}]);