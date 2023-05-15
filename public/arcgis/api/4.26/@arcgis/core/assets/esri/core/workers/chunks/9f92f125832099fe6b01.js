"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6458,8642],{14830:(e,a,t)=>{t.d(a,{a:()=>n,f:()=>s});var r=t(82058);async function n(e,a){const{data:t}=await(0,r.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}async function s(e,a){const t=await n(e,a);t.layers=t.layers.filter(l);const r={serviceJSON:t};if((t.currentVersion??0)<10.5)return r;const s=await n(e+"/layers",a);return r.layersJSON={layers:s.layers.filter(l),tables:s.tables},r}function l(e){return!e.type||"Feature Layer"===e.type}},69586:(e,a,t)=>{t.d(a,{a:()=>l,c:()=>s});var r=t(32101),n=t(49900);function s(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function l(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,r.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},8642:(e,a,t)=>{t.r(a),t.d(a,{getFirstLayerOrTableId:()=>b,getNumLayersAndTables:()=>h,getSubtypeGroupLayerIds:()=>g,load:()=>d,preprocessFSItemData:()=>L});var r=t(60991),n=t(41617),s=t(21132),l=t(14830),i=t(49900),o=t(56420),c=t(69586),u=t(60111),y=t(68714);async function d(e,a){const t=e.instance.portalItem;if(t&&t.id)return await t.load(a),function(e){const a=e.instance.portalItem;if(!a?.type||!e.supportedTypes.includes(a.type))throw new r.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const t=e.instance,n=t.portalItem;if(!n)return;const{url:s,title:i}=n,o=(0,c.c)(n);if("group"===t.type)return t.read({title:i},o),async function(e,a){let t;const{portalItem:n}=e;if(!n)return;const s=n.type,i=a.layerModuleTypeMap,o=(0,u.h)(n,"Oriented Imagery Layer")??!1;switch(s){case"Feature Service":t=o?i.OrientedImageryLayer:i.FeatureLayer;break;case"Stream Service":t=i.StreamLayer;break;case"Scene Service":t=i.SceneLayer;break;case"Feature Collection":t=i.FeatureLayer;break;default:throw new r.Z("portal:unsupported-item-type-as-group",`The item type '${s}' is not supported as a 'IGroupLayer'`)}let[c,y]=await Promise.all([t(),w(a)]),d=()=>c;if("Feature Service"===s){if(y=n.url?await L(y,n.url):{},g(y).length){const e=i.SubtypeGroupLayer,a=await e();d=e=>"SubtypeGroupLayer"===e.layerType?a:c}const a=await async function(e){const{layersJSON:a}=await(0,l.f)(e);if(!a)return null;const t=[...a.layers,...a.tables];return e=>t.find((a=>a.id===e.id))}(n.url);return m(e,d,y,a)}return h(y)>0?m(e,d,y):async function(e,a){const{portalItem:t}=e;if(!t?.url)return;const r=await(0,l.a)(t.url);r&&m(e,a,{layers:r.layers?.map(p),tables:r.tables?.map(p)})}(e,d)}(t,e);s&&t.read({url:s},o);const d=await w(e,a);return d&&t.read(d,o),t.resourceReferences={portalItem:n,paths:o.readResourcePaths??[]},"subtype-group"!==t.type&&t.read({title:i},o),(0,y.l)(t,o)}(e,a)}function p(e){return{id:e.id,name:e.name}}function m(e,a,t,l){let i=t.layers||[];const c=t.tables||[];if("Feature Collection"===e.portalItem?.type&&(i.forEach((e=>{"Table"===e?.layerDefinition?.type&&c.push(e)})),i=i.filter((e=>"Table"!==e?.layerDefinition?.type))),"coverage"in t){const a=function(e){const{coverage:a}=e;if(!a)return null;const t=new URL(a);if(a.toLowerCase().includes("item.html")){const e=t.searchParams.get("id"),a=t.origin;return n.Z.fromPortalItem({portalItem:new o.default({id:e,url:a})})}if((0,s.b)(a))return n.Z.fromArcGISServerUrl({url:a});throw new r.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);a&&e.add(a)}i.reverse().forEach((r=>{const n=f(e,a(r),t,r,l?.(r));e.add(n)})),c.reverse().forEach((r=>{const n=f(e,a(r),t,r,l?.(r));e.tables.add(n)}))}function f(e,a,t,r,n){const s=e.portalItem,l=new a({portalItem:s.clone(),layerId:r.id});if("sourceJSON"in l&&(l.sourceJSON=n),"subtype-group"!==l.type&&(l.sublayerTitleMode="service-name"),"Feature Collection"===s.type){const e={origin:"portal-item",portal:s.portal||i.Z.getDefault()};l.read(r,e);const a=t.showLegend;null!=a&&l.read({showLegend:a},e)}return l}async function w(e,a){if(!1===e.supportsData)return;const t=e.instance,r=t.portalItem;if(!r)return;let n=null;try{n=await r.fetchData("json",a)}catch(e){}if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(t)){let e=null,a=!0;if(n&&h(n)>0){if(null==t.layerId){const e=g(n);t.layerId="subtype-group"===t.type?e?.[0]:b(n)}e=function(e,a){const{layerId:t}=a,r=e.layers?.find((e=>e.id===t))||e.tables?.find((e=>e.id===t));return r&&function(e,a){return!("feature"===a.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===a.type&&!("layerType"in e))}(r,a)?r:null}(n,t),e&&(1===h(n)&&(a=!1),null!=n.showLegend&&(e.showLegend=n.showLegend))}return a&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),e}return n}async function L(e,a){if(null==e?.layers||null==e?.tables){const t=await(0,l.a)(a);(e=e||{}).layers=e.layers||t?.layers,e.tables=e.tables||t?.tables}return e}function b(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function h(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function g(e){const a=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}t(76506),t(48578),t(92143),t(31450),t(71552),t(40642),t(74569),t(91306),t(21801),t(34250),t(60474),t(66396),t(86656),t(17533),t(6540),t(73796),t(12047),t(21972),t(91055),t(19657),t(6906),t(50406),t(97714),t(60947),t(53785),t(57251),t(89623),t(2906),t(91597),t(86787),t(35132),t(84069),t(44567),t(98380),t(92482),t(82426),t(72836),t(29794),t(7200),t(92896),t(22781),t(32422),t(82058),t(88762),t(32101),t(75067),t(3296),t(81184),t(33101),t(38742),t(3482),t(67477),t(78533),t(74653),t(91091),t(58943),t(73173),t(74742),t(28239),t(1623),t(89914),t(65775),t(12381),t(92624),t(92847),t(41864)},67902:(e,a,t)=>{t.d(a,{l:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(6027),t.e(7963)]).then(t.bind(t,37963))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(9632),t.e(9506),t.e(2311),t.e(5126),t.e(3439)]).then(t.bind(t,3439))).default,CSVLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(9632),t.e(9506),t.e(3525)]).then(t.bind(t,44004))).default,DimensionLayer:async()=>(await Promise.all([t.e(6739),t.e(210)]).then(t.bind(t,90210))).default,ElevationLayer:async()=>(await Promise.all([t.e(6100),t.e(2204)]).then(t.bind(t,72204))).default,FeatureLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(9632),t.e(9506),t.e(1246)]).then(t.bind(t,9506))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(9039)]).then(t.bind(t,99039))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(6027),t.e(6467),t.e(2197)]).then(t.bind(t,92197))).default,GroupLayer:async()=>(await Promise.all([t.e(6027),t.e(294)]).then(t.bind(t,60294))).default,ImageryLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(1292),t.e(9214),t.e(3864),t.e(7721),t.e(6442)]).then(t.bind(t,6442))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(6100),t.e(3864),t.e(7721),t.e(1962),t.e(2552)]).then(t.bind(t,32552))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(2311),t.e(156)]).then(t.bind(t,60156))).default,KMLLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1903)]).then(t.bind(t,21903))).default,LineOfSightLayer:async()=>(await t.e(6749).then(t.bind(t,16749))).default,MapImageLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9214),t.e(9925),t.e(605)]).then(t.bind(t,60605))).default,MapNotesLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(9632),t.e(9506),t.e(7841)]).then(t.bind(t,41135))).default,MediaLayer:async()=>(await Promise.all([t.e(6027),t.e(2090)]).then(t.bind(t,22090))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(3958)]).then(t.bind(t,63958))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(6027),t.e(3799),t.e(6043)]).then(t.bind(t,16043))).default,OrientedImageryLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(9632),t.e(9506),t.e(7031)]).then(t.bind(t,80733))).default,PointCloudLayer:async()=>(await Promise.all([t.e(846),t.e(2311),t.e(9151),t.e(5032)]).then(t.bind(t,25032))).default,RouteLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(6498)]).then(t.bind(t,76498))).default,SceneLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(9632),t.e(9506),t.e(2311),t.e(5126),t.e(4580)]).then(t.bind(t,84580))).default,StreamLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(8324)]).then(t.bind(t,58324))).default,SubtypeGroupLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9632),t.e(1951)]).then(t.bind(t,51951))).default,TileLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9214),t.e(6100),t.e(9925),t.e(611)]).then(t.bind(t,90611))).default,UnknownLayer:async()=>(await t.e(3117).then(t.bind(t,63117))).default,UnsupportedLayer:async()=>(await t.e(8243).then(t.bind(t,88243))).default,VectorTileLayer:async()=>(await Promise.all([t.e(6027),t.e(6100),t.e(2348),t.e(6611),t.e(6491)]).then(t.bind(t,46491))).default,VoxelLayer:async()=>(await Promise.all([t.e(846),t.e(2311),t.e(6739),t.e(8528)]).then(t.bind(t,18528))).default,WFSLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(5959),t.e(6012),t.e(208),t.e(1292),t.e(6985),t.e(9132),t.e(4797)]).then(t.bind(t,44797))).default,WMSLayer:async()=>(await Promise.all([t.e(6027),t.e(846),t.e(6467),t.e(3561)]).then(t.bind(t,73561))).default,WMTSLayer:async()=>(await Promise.all([t.e(6027),t.e(3799),t.e(2790)]).then(t.bind(t,82790))).default,WebTileLayer:async()=>(await Promise.all([t.e(6027),t.e(3799)]).then(t.bind(t,3799)).then((e=>e.a))).default}},36458:(e,a,t)=>{t.r(a),t.d(a,{fromItem:()=>u,selectLayerClassPath:()=>y});var r=t(60991),n=t(51899),s=t(67902),l=t(56420),i=t(8642),o=t(60111),c=t(14830);async function u(e){!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)});const a=await async function(e){return await e.load(),async function(e){const a=s.l[e.className];return{constructor:await a(),properties:e.properties}}(await y(e))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function y(e){switch(e.type){case"Map Service":return async function(e){const a=await async function(e){return(await(0,c.a)(e.url)).tileInfo}(e);return a?{className:"TileLayer"}:{className:"MapImageLayer"}}(e);case"Feature Service":return async function(e){if((0,o.h)(e,"Oriented Imagery Layer"))return async function(e){await e.load();const a=await e.fetchData();return a.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:a}}(e);const a=await d(e);if("object"==typeof a){const e={};return null!=a.id&&(e.layerId=a.id),{className:a.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e);case"Feature Collection":return async function(e){await e.load();const a=(0,o.h)(e,"Map Notes"),t=(0,o.h)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,o.h)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,i.getNumLayersAndTables)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e){const a=await d(e);if("object"==typeof a){const t={};let r;if(null!=a.id?(t.layerId=a.id,r=`${e.url}/layers/${a.id}`):r=e.url,e.typeKeywords?.length)for(const a of Object.keys(n.o))if(e.typeKeywords.includes(a))return{className:n.o[a]};const s=await(0,c.a)(r);return{className:n.o[s?.layerType]||"SceneLayer",properties:t}}if(!1===a){const a=await(0,c.a)(e.url);return"Voxel"===a?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"}}return{className:"GroupLayer"}}(e);case"Image Service":return async function(e){await e.load();const a=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await e.fetchData(),r=t?.layerType;if("ArcGISTiledImageServiceLayer"===r)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===r)return{className:"ImageryLayer"};const n=await(0,c.a)(e.url),s=n.cacheType?.toLowerCase(),l=n.capabilities?.toLowerCase().includes("tilesonly");return"map"===s||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:throw new r.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function d(e){const a=e.url;if(!a||a.match(/\/\d+$/))return{};await e.load();const t=await e.fetchData();if("Feature Service"===e.type){const e=p(await(0,i.preprocessFSItemData)(t,a));if("object"==typeof e){const a=(0,i.getSubtypeGroupLayerIds)(t);e.className=null!=e.id&&a.includes(e.id)?"SubtypeGroupLayer":"FeatureLayer"}return e}return(0,i.getNumLayersAndTables)(t)>0?p(t):p(await(0,c.a)(a))}function p(e){return 1===(0,i.getNumLayersAndTables)(e)&&{id:(0,i.getFirstLayerOrTableId)(e)}}t(76506),t(48578),t(92143),t(31450),t(71552),t(40642),t(88762),t(32101),t(82058),t(50406),t(73173),t(12047),t(21972),t(17533),t(86656),t(66396),t(6540),t(91306),t(60474),t(91055),t(34250),t(19657),t(6906),t(81184),t(33101),t(97714),t(21801),t(73796),t(60947),t(53785),t(57251),t(89623),t(2906),t(91597),t(86787),t(35132),t(49900),t(3482),t(67477),t(78533),t(74653),t(91091),t(58943),t(74742),t(28239),t(41617),t(74569),t(84069),t(44567),t(98380),t(92482),t(82426),t(72836),t(29794),t(7200),t(92896),t(22781),t(32422),t(75067),t(3296),t(21132),t(38742),t(69586),t(68714),t(41864),t(1623),t(89914),t(65775),t(12381),t(92624),t(92847)},68714:(e,a,t)=>{t.d(a,{l:()=>l});var r=t(41864),n=t(50406),s=t(17533);async function l(e,a,t){const l=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(l&&"unique-value"===l.type&&l.styleOrigin){const i=await(0,r.r)(l.populateFromStyle());if((0,n.k_)(t),!1===i.ok){const t=i.error;a&&a.messages&&a.messages.push(new s.W("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:a})),e.clear("renderer",a?.origin)}}}}}]);