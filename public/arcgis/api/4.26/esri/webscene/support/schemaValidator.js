// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/ajv.bundle","../../portal/schemas/webScene","../../support/validationUtilsAjv"],function(h,m,e,n){function b(c){return c?`${c}_schema.json`:"webScene_schema.json"}const a=new m.Ajv({allErrors:!0,extendRefs:!0});a.addSchema(e.json,b());h.validate=function(c,d){const k=b(d);if(!a.getSchema(k)){const f=e.json.definitions[b(d)];if(!f)throw Error(`invalid schema name to validate against '${d}'`);const g={};for(const l in f)g[l]=f[l];g.definitions=e.json.definitions;a.addSchema(g,
k)}return a.validate(b(d),c)?[]:n.convertAjvErrors(a.errors??[])};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});