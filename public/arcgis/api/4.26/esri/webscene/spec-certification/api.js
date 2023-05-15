// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../Basemap ../../Ground ../../WebScene ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/extensions/serializableProperty/type ../../layers/GroupLayer ../../layers/KMLLayer ../../layers/mixins/operationalLayerModuleMap ../../layers/mixins/operationalLayers ../../layers/support/Sublayer ../../layers/support/source/DataLayerSource ../../layers/support/source/MapLayerSource ./utils".split(" "),function(z,A,G,H,Y,u,I,B,J,K,L,p,C,M,N){async function q(a,
b,c){switch(b.typeName){case "array":await O(a,b,c);break;case "union":await P(a,b,c);break;case "json":await D(a,b,c);break;case "native":await Q(a,b,c);break;case "enum":await R(a,b,c)}}async function Q(a,b,c){c.addProperty({name:a,type:m(b),default:b.default})}function S(a){a=a.slice();a.sort();return a}async function R(a,b,c){const e=b.values.slice();b.nullable&&e.push(null);c.currentClass&&c.currentClass.typeValue&&"type"===a?c.addProperty({name:a,type:"string",enum:`"${c.currentClass.typeValue}"`}):
c.addProperty({name:a,type:m(b),enum:S(e).map(d=>"string"===typeof d?`"${d}"`:`${d}`).join("|"),default:b.default})}async function O(a,b,c){await q(`${a}[]`,b.elementType,c)}async function P(a,b,c){var e=[];for(const g of b.types)if("native"!==g.type.typeName&&b.key){var d=g.type;var h=g.value;if("json"===d.typeName){var f=(d=d.type.__accessorMetadata__?.type)&&r(d);const k=(f=f&&f.type)||d&&d.type;k&&Array.isArray(k)&&1===k.length&&"string"===typeof k[0]&&(h=f?k[0]:v(d,k[0]))}await q(`${a}<${h}>`,
g.type,c)}else e.push(g.type);e.length&&(e=e.map(m),b.nullable&&e.push("null"),e.sort(),c.addProperty({type:e.join("|"),name:a,default:b.default}))}async function E(a,b){return a.type===H&&"layers"===b?t("web-scene/operational-layers"):a.type!==A||"baseLayers"!==b&&"baseMapLayers"!==b?a.type===A&&"elevationLayers"===b||a.type===G&&"layers"===b?t("web-scene/ground"):a.type===B&&"layers"===b?t("web-scene/operational-layers",c=>c!==B):a.type!==C.JoinTableDataSource||"leftTableSource"!==b&&"rightTableSource"!==
b?null:n({key:"type",base:null,typeMap:{"data-layer":C.DataLayerSource,"map-layer":M.MapLayerSource}}):t("web-scene/basemap")}async function T(a,b,c){if(a=await E(a,b))return a;a=r(c);if(a?.types)c=n(a.types);else if(!a?.type&&c.types)c=n(c.types);else{a=w;b=r(c);const e=x(c),d=l(b&&b.type||c.type);b&&void 0!==b.default&&"function"!==typeof b.default&&(d.default=v(c,b.default));e?.allowNull&&(d.nullable=!0);c=a(d);c=c.nullable&&"native"===c.typeName?{typeName:"union",key:null,types:[{value:null,type:c}],
nullable:!0}:c}return c}async function D(a,b,c){const e=b.type.__accessorMetadata__;var d=b.type.prototype.declaredClass.replace(/\./g,"/");if(!e)return a&&c.addProperty({name:a,type:"unknown"}),null;let h=d;var f=null,g=a&&a.match(/<([^>]+)>$/);g&&(h+=`--${g[1]}`,f=g[1]);b.type===p&&(h+=`--${c.currentClass?.name}`,f=c.currentClass?.name);if((g=c.seen.get(h))&&a)return c.addProperty({name:a,type:g}),g;d={type:b.type,name:d,id:h,properties:[]};a&&(c.addProperty({name:a,type:d}),d.typeValue=f);c.push(a,
d);for(const k in e)if(a=e[k],(f=x(a))&&f.enabled){if(b.type===p&&((d="esri/layers/TileLayer"===c.stack[c.stack.length-2].klass.name)&&p.test.isMapImageLayerOverridePolicy(f.overridePolicy)||!d&&p.test.isTileImageLayerOverridePolicy(f.overridePolicy)))continue;f=f.target;"string"===typeof f||null==f?(a=await T(b,k,a))&&await q("string"===typeof f?f:k,a,c):await U(b,f,c)}return c.pop()}async function U(a,b,c){for(const e in b){let d=await E(a,e);if(!d){const h=b[e];d=h.types?n(h.types):l(h.type);d.default=
h.default;d=w(d)}await q(e,d,c)}}async function t(a,b){const c={typeName:"union",key:"layerType",types:[]};for(const e in L.supportedTypes[a]){if("web-scene/operational-layers"===a&&"ArcGISTiledElevationServiceLayer"===e)continue;const d=await K.typeModuleMap[e]();d&&(!b||b(d))&&d!==J&&c.types.push({type:{typeName:"json",type:d},value:e})}return 0===c.types.length?null:{typeName:"array",elementType:1===c.types.length?c.types[0].type:c}}function m(a){switch(a.typeName){case "array":return`${m(a.elementType)}[]`;
case "union":const b=a.types.map(c=>m(c.type));a.nullable&&b.push("null");b.sort();return`${b.join(" | ")}`;case "native":switch(a.type){case Number:return"number";case u.Integer:return"integer";case String:return"string";case Boolean:return"boolean";case Object:return"object";default:return"unknown"}case "json":return a.type.prototype.declaredClass;case "enum":return"string"}}function V(a){a=a.prototype.itemType&&a.prototype.itemType.Type;if(!a)return{typeName:"array",elementType:{typeName:"native",
type:null}};if("function"===typeof a)return{typeName:"array",elementType:l(a)};if(a.typeMap){const b=[];for(const c in a.typeMap){const e=a.typeMap[c];b.push({type:l(e),value:y(e)?null:c})}return{typeName:"array",elementType:{typeName:"union",key:"string"===typeof a.key?a.key:"type",types:b}}}}function W(a){if("json"!==a.typeName)return null;const b=a.type.__accessorMetadata__?.type,c=(a=(a=b&&r(b))&&a.type)||b&&b.type;return c&&Array.isArray(c)&&"string"===typeof c[0]?a?a:b.type.map(e=>v(b,e)):null}
function w(a){if("array"===a.typeName)return a.elementType=w(a.elementType),a;const b=W(a);return b?{typeName:"union",key:"type",nullable:a.nullable,types:b.map(c=>({value:c,type:a}))}:a}function n(a){if(Array.isArray(a))return{typeName:"array",elementType:n(a[0])};const b=[];for(const c in a.typeMap){const e=a.typeMap[c];b.push({type:l(e),value:y(e)?null:c})}return{typeName:"union",key:"string"===typeof a.key?a.key:"type",types:b}}function v(a,b){a=x(a);var c;if(c=a)c=a.writer,c=null!=c&&c.isJSONMapWriter;
return c?(c={value:""},a.writer?.(b,c,"value"),c.value):b}function l(a){return a?u.isLongFormType(a)?F(a):Array.isArray(a)?"string"===typeof a[0]||"number"===typeof a[0]?{typeName:"enum",values:a}:1<a.length?{typeName:"union",key:null,types:a.map(b=>({type:l(b),value:null}))}:{typeName:"array",elementType:l(a[0])}:I.isCollection(a)?V(a):y(a)?{typeName:"native",type:a}:X(a)?{typeName:"json",type:a}:{typeName:"native",type:null}:{typeName:"native",type:null}}function F(a){switch(a.type){case "native":return{typeName:"native",
type:a.value};case "array":return{typeName:"array",elementType:l(a.value)};case "one-of":return{typeName:"union",key:null,types:a.values.map(b=>({type:F(b),value:null}))}}}function X(a){for(;a;){if(a.prototype&&("esri.core.JSONSupport"===a.prototype.declaredClass||"esri.core.MultiOriginJSONSupport"===a.prototype.declaredClass))return!0;a=Object.getPrototypeOf(a)}return!1}function y(a){return a===String||a===Boolean||a===Number||a===u.Integer||a===Object}function r(a){if(!a.json)return null;const b=
a.json.origins;a=a.json;const c=b&&b["web-document"];return b&&b["web-scene"]||c||a||null}function x(a){if(!a.json)return null;const b=a.json.origins;a=a.json.write;const c=b&&b["web-document"]&&b["web-document"].write;return b&&b["web-scene"]&&b["web-scene"].write||c||a||null}z.scan=async function(a){const b=new N.ScanContext;return D(null,{typeName:"json",type:a},b)};Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});