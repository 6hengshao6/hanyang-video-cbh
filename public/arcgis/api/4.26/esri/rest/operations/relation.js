// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/jsonMap","../../geometry/support/jsonUtils"],function(d,k,e){const l=new k.JSONMap({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",
esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});d.relationToRESTParameters=function(a){const {geometries1:b,geometries2:c,relation:f,relationParameter:g}=a.toJSON();a={};if(b&&b.length){a.geometries1=JSON.stringify({geometryType:e.getJsonType(b[0]),geometries:b});const h=b[0].spatialReference;a.sr=h.wkid??JSON.stringify(h)}c&&0<c.length&&(a.geometries2=JSON.stringify({geometryType:e.getJsonType(c[0]),geometries:c}));f&&(a.relation=l.toJSON(f));
g&&(a.relationParam=g);return a};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});