// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../portal/schemas/webScene ./utils".split(" "),function(y,q,l,t,m,n){function z(a,b){if(b.properties){if("layerType"in b.properties)return b.properties.layerType.enum[0];if("type"in b.properties)return b.properties.type.enum[0]}switch(a){case "multipoint_geometry_schema.json":return"multipoint";case "point_geometry_schema.json":return"point";case "polyline_geometry_schema.json":return"polyline";case "polygon_geometry_schema.json":return"polygon";
case "extent_schema.json":return"extent"}}function u(a){return"array"===a.type?`${u(a.items)}[]`:a.type}function A(a){const b={count:a.length,refsCount:0,typesCount:0,distinctTypes:[],type:null},e=new Set;for(const c in a){const d=a[c];d.$ref?b.refsCount++:d.type&&(b.typesCount++,e.add(u(d)))}e.forEach(c=>b.distinctTypes.push(c));b.distinctTypes.sort();b.refsCount===b.count?b.type="refs":2===b.count&&0<b.refsCount&&1===b.distinctTypes.length&&"null"===b.distinctTypes[0]?b.type="refsAndNull":b.typesCount===
b.count?(b.type="types",b.distinctTypes=b.distinctTypes):b.type="mix";return b}async function r(a,b,e,c,d){d.schemaStack.push(a);var f=z(a,e);c=c?c.replace("\x3c?TYPE?\x3e",f?`<${f}>`:""):"";if("array"===e.type||!("properties"in e))return(a=d.currentClass?null:{type:a,name:a,id:`${a}--${b}`,typeValue:b,properties:[]})&&d.push(null,a),await k(e,c,d),d.schemaStack.pop(),a;d.hasFilteredProperties?(f=d.filteredPropertiesArray.join("/"),f=`${a}--${b}--${f}`):f=`${a}--${b}`;const g="drawingInfo_schema.json"!==
a&&"layer_schema.json"!==a&&d.seen.get(f);if(g&&c)return d.addProperty({name:c,type:g}),d.schemaStack.pop(),g;a={type:a,name:a,id:f,typeValue:b,properties:[]};c&&d.addProperty({name:c,type:a});d.push(c,a);await k(e,"",d);d.schemaStack.pop();return d.pop()}async function v(a,b,e){a=await e.requestSchema(a.$ref);var c=a.schema;c="layerDefinition"===c.title?null:(c=c.properties&&c.properties.type)&&c.enum?c.enum:null;if(c)for(var d of c){c={...a.schema};c.properties={...c.properties,type:{type:"string",
enum:[d]}};const f=b&&!b.includes("\x3c?TYPE?\x3e")?`${b}<?TYPE?>`:b;await r(a.schemaId,d,c,f,e)}else d="layer_schema.json"===a.schemaId&&e.schemaStack.length?e.schemaStack[e.schemaStack.length-1].replace(/_schema\.json/,""):null,await r(a.schemaId,d,a.schema,b,e)}function B(a,b){if(!p(a))return!1;a=a.stack.map(e=>e.klass.type).join("/");return/.*pointCloudLayer_schema\.json\/layerDefinition_schema\.json\/drawingInfo_schema\.json$/.test(a)&&"renderer"===b}function C(a,b){if(!p(a))return!1;a=a.stack.map(e=>
e.klass.type).join("/");return/.*(imageServiceLayer|tiledImageServiceLayer)_schema\.json\/layerDefinition_schema\.json\/drawingInfo_schema\.json$/.test(a)&&"renderer"===b}function p(a){return a.currentClass?"drawingInfo_schema.json"===a.currentClass.name:!1}function D(a,b,e){if(p(e)){const c=B(e,b),d=C(e,b);return a.filter(f=>{if(/uniqueValueFromStyleRenderer_schema\.json$/.test(f.$ref))return!1;if(d)return E.test(f.$ref)&&!F.test(f.$ref);if(G.test(f.$ref))return!1;f=/pointCloud.*Renderer/.test(f.$ref);
return c===f})}a:{switch(e.schemaStack[e.schemaStack.length-1]){case "operationalLayers_schema.json":case "elevationLayers_schema.json":case "baseMapLayer_schema.json":b=!0;break a}b=!1}if(b){const c=["kmlLayer","rasterDataElevationLayer","rasterDataLayer"];return a.filter(d=>!c.some(f=>d.$ref.replace(/.*\//,"")===`${f}_schema.json`))}return a}async function H(a,b,e){await k(a.items,`${b}[]`,e)}async function I(a,b,e){for(const c in a.properties)if("webscene_schema.json"!==e.currentClass?.name||"tables"!==
c&&"mapRangeInfo"!==c&&"widgets"!==c)if("baseMap_schema.json"!==e.currentClass?.name||"elevationLayers"!==c){if(p(e)){const d=e.stack.map(f=>f.klass.type).join("/");if(/imageServiceLayer|tiledImageServiceLayer/.test(d)&&"transparency"===c)continue}await e.withFilter(c,async()=>{await k(a.properties[c],b?`${b}.${c}`:c,e)})}}function w(a,b="",e=new Set){for(const c of a)if("properties"in c)for(const d in c.properties){a=c.properties[d];const f=b?`${b}.${d}`:d,g=Object.keys(a);if(0===g.length||1===g.length&&
"$ref"===g[0])e.add(f);else if(1===g.length&&"allOf"===g[0])e.add(f),w(a.allOf,f,e);else throw Error(`unexpected allOf filter construct: ${JSON.stringify(a)}`);}return e}async function J(a,b,e){let c=null;for(const d of a.allOf)if("$ref"in d){if(c)throw Error("Cannot process more than 1 ref in an allOf construct");c=d}else if(!("properties"in d))throw Error("allOf construct only allows simple top-level property filters");a=w(a.allOf);await e.addFilter(a,()=>v(c,b,e))}async function K(a,b,e){const c=
A(a.oneOf);if("refs"===c.type||"refsAndNull"===c.type){a=D(a.oneOf,b,e);for(const d of a)"null"!==d.type&&await k(d,`${b||""}`+(1!==a.length?"\x3c?TYPE?\x3e":""),e)}else if("types"===c.type)e.addProperty({name:b,type:n.sorted(c.distinctTypes).join("|")});else for(const d in a.oneOf)await k(a.oneOf[d],`${b}${`.oneOf[${d}]`}`,e)}async function L(a,b,e){await v(a,b,e)}async function M(a,b,e){let c="unknown";a.type&&(c=Array.isArray(a.type)?n.sorted(a.type).join("|"):a.type.replace(/ /g,"").split(",").join("|"));
b={name:b,type:c,default:a.default};a.enum&&(b.enum=n.sorted(a.enum).map(d=>"string"===typeof d?`"${d}"`:`${d}`).join("|"));e.addProperty(b)}async function k(a,b,e){return"array"===a.type?H(a,b,e):"properties"in a?I(a,b,e):"allOf"in a?J(a,b,e):"oneOf"in a?K(a,b,e):"$ref"in a?L(a,b,e):M(a,b,e)}function x(a){return 0===a.indexOf("#/definitions/")?a.slice(14):a}const G=/raster.*Renderer|vectorFieldRenderer/,E=/(uniqueValueRenderer|classBreaksRenderer|raster.*Renderer|vectorFieldRenderer)/,F=/(rasterUniqueValueRenderer|rasterClassBreaksRenderer)/;
let O=function(a){function b(c,d,f){var g=e.call(this);g.definitions=c;g.schemaRoot=d;g.requestSchema=f;g._filteredProperties=null;g.schemaStack=[];g.requestSchema.bind(l._assertThisInitialized(g));return g}l._inherits(b,a);var e=l._createSuper(b);a=b.prototype;a.withFilter=async function(c,d){if(!this.hasFilteredProperties)return d();if(this._filteredProperties?.has(c)){var f=this._filteredProperties;this._filteredProperties=null;var g=h=>{this._filteredProperties||(this._filteredProperties=new Set);
this._filteredProperties.add(h)};f.forEach(h=>{h=h.split(".",2);1<h.length&&h[0]===c&&g(h[1])});await d();this._filteredProperties=f}};a.addFilter=async function(c,d){const f=this._filteredProperties;this._filteredProperties=null;const g=h=>{this._filteredProperties||(this._filteredProperties=new Set);this._filteredProperties.add(h)};f&&f.forEach(g);c&&c.forEach(g);c=await d();this._filteredProperties=f;return c};b.create=async function(c,d){return d&&d.useRemoteSchema?b.createRemote(c,d?.baseUrl):
b.createLocal(c)};b.createLocal=function(c){return new b(m.json.definitions,c&&"webscene"!==c?m.json.definitions[`${c}_schema.json`]:m.json,b._getLocalSchemaRequest())};b.createRemote=async function(c,d){d=await b._getRemoteSchemaRequest(d);const f=new b({},null,d);c=(await f.requestSchema(`${c||"webscene"}_schema.json`)).schema;return new b(f.definitions,c,d)};b._getLocalSchemaRequest=function(){return function(c){c=x(c);const d=this.definitions[c];return d?Promise.resolve({schemaId:c,schema:d}):
Promise.reject(new t("spec-certification:spec-invalid-local-schema","Schema reference is not a local reference"))}};b._getRemoteSchemaRequest=async function(c){if(!c)return Promise.reject(new t("spec-certification:spec-missing-base-url","The base url of the remote schema directory must be specified when using a remote schema"));const d=b._getLocalSchemaRequest(),f=(await new Promise((g,h)=>y(["../../request"],N=>g(Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}))),
h))).default;return function(g){return d.call(this,g).catch(()=>f(`${c}/${g}`,{responseType:"json"}).then(h=>{this.definitions[x(g)]=h.data;return{schemaId:g,schema:h.data}}))}};l._createClass(b,[{key:"hasFilteredProperties",get:function(){return this._filteredProperties?0<this._filteredProperties.size:!1}},{key:"filteredPropertiesArray",get:function(){const c=[];this._filteredProperties?.forEach(d=>c.push(d));return c}}]);return b}(n.ScanContext);const P=Object.keys(m.json.definitions).map(a=>a.replace(/_schema\.json$/,
""));q.scan=async function(a,b){b=await O.create(a,b);return r(`${a||"webscene"}_schema.json`,null,b.schemaRoot,null,b)};q.schemaDefinitions=P;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});