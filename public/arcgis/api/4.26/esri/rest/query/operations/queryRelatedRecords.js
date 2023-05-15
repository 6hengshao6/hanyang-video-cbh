// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../request","../../operations/urlUtils"],function(f,n,p){function k(a,b){a=a.toJSON();a.objectIds&&(a.objectIds=a.objectIds.join(","));a.orderByFields&&(a.orderByFields=a.orderByFields.join(","));a.outFields&&!b?.returnCountOnly?a.outFields.includes("*")?a.outFields="*":a.outFields=a.outFields.join(","):delete a.outFields;a.outSpatialReference&&(a.outSR=a.outSR.wkid||JSON.stringify(a.outSR.toJSON()),delete a.outSpatialReference);a.dynamicDataSource&&(a.layer=JSON.stringify({source:a.dynamicDataSource}),
delete a.dynamicDataSource);return a}async function l(a,b,c={},d){b=p.mapParameters({...a.query,f:"json",...d,...k(b,d)});return n(a.path+"/queryRelatedRecords",{...c,query:{...c.query,...b}})}f.executeRelationshipQuery=async function(a,b,c){a=await l(a,b,c);b=a.data;c=b.geometryType;const d=b.spatialReference,g={};for(const e of b.relatedRecordGroups){const m={fields:void 0,objectIdFieldName:void 0,geometryType:c,spatialReference:d,hasZ:!!b.hasZ,hasM:!!b.hasM,features:e.relatedRecords};if(null!=
e.objectId)g[e.objectId]=m;else for(const h in e)e.hasOwnProperty(h)&&"relatedRecords"!==h&&(g[e[h]]=m)}return{...a,data:g}};f.executeRelationshipQueryForCount=async function(a,b,c){a=await l(a,b,c,{returnCountOnly:!0});b=a.data;c={};for(const d of b.relatedRecordGroups)null!=d.objectId&&(c[d.objectId]=d.count);return{...a,data:c}};f.toQueryStringParameters=k;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});