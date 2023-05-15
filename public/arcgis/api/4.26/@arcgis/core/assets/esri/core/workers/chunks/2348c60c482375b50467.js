"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2176,6458,8642],{21132:(e,r,a)=>{a.d(r,{a:()=>b,b:()=>y,c:()=>f,d:()=>w,f:()=>d,i:()=>m,p:()=>p,s:()=>S,t:()=>L,w:()=>h});var t=a(71252),n=a(32101),i=a(38742);const l={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},s=Object.values(l),o=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function y(e){return!!o.test(e)}function p(e){if((0,t.a)(e))return null;const r=(0,n.mN)(e),a=r.path.match(o)||r.path.match(c);if(!a)return null;const[,i,s,u,y]=a,p=s.indexOf("/");return{title:f(-1!==p?s.slice(p+1):s),serverType:l[u.toLowerCase()],sublayer:null!=y&&""!==y?parseInt(y,10):null,url:{path:i}}}function d(e){const r=(0,n.mN)(e).path.match(u);return r?{serviceUrl:r[1],sublayerId:Number(r[2])}:null}function f(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function L(e,r){const a=[];if(e){const r=p(e);(0,t.i)(r)&&r.title&&a.push(r.title)}if(r){const e=f(r);a.push(e)}if(2===a.length){if(a[0].toLowerCase().includes(a[1].toLowerCase()))return a[0];if(a[1].toLowerCase().includes(a[0].toLowerCase()))return a[1]}return a.join(" - ")}function m(e){if(!e)return!1;const r=(e=e.toLowerCase()).includes(".arcgis.com/"),a=e.includes("//services")||e.includes("//tiles")||e.includes("//features");return r&&a}function S(e,r){return e?(0,n.Qj)((0,n.Hu)(e,r)):e}function b(e){let{url:r}=e;if(!r)return{url:r};r=(0,n.Hu)(r,e.logger);const a=(0,n.mN)(r),i=p(a.path);let l;if((0,t.i)(i))null!=i.sublayer&&null==e.layer.layerId&&(l=i.sublayer),r=i.url.path;else if(e.nonStandardUrlAllowed){const e=d(a.path);(0,t.i)(e)&&(r=e.serviceUrl,l=e.sublayerId)}return{url:(0,n.Qj)(r),layerId:l}}function h(e,r,a,t,l){(0,i.w)(r,t,"url",l),t.url&&null!=e.layerId&&(t.url=(0,n.v_)(t.url,a,e.layerId.toString()))}function w(e){if(!e)return!1;const r=e.toLowerCase(),a=r.includes("/services/"),t=r.includes("/mapserver/wmsserver"),n=r.includes("/imageserver/wmsserver"),i=r.includes("/wmsserver");return a&&(t||n||i)}},14830:(e,r,a)=>{a.d(r,{a:()=>n,f:()=>i});var t=a(82058);async function n(e,r){const{data:a}=await(0,t.default)(e,{responseType:"json",query:{f:"json",...r?.customParameters,token:r?.apiKey}});return a}async function i(e,r){const a=await n(e,r);a.layers=a.layers.filter(l);const t={serviceJSON:a};if((a.currentVersion??0)<10.5)return t;const i=await n(e+"/layers",r);return t.layersJSON={layers:i.layers.filter(l),tables:i.tables},t}function l(e){return!e.type||"Feature Layer"===e.type}},69586:(e,r,a)=>{a.d(r,{a:()=>l,c:()=>i});var t=a(32101),n=a(49900);function i(e){return{origin:"portal-item",url:(0,t.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function l(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,t.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},92176:(e,r,a)=>{a.r(r),a.d(r,{populateOperationalLayers:()=>u});var t=a(15324),n=(a(48578),a(50406)),i=a(67902),l=a(56420),s=a(36458),o=a(68714);function c(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}async function u(e,r,a){if(!r)return;const t=[];for(const e of r){const r=S(e,a);"GroupLayer"===e.layerType?t.push(w(r,e,a)):t.push(r)}const i=await(0,n.as)(t);for(const r of i)r.value&&e.add(r.value)}a(91055),a(75067),a(21972),a(17533),a(86656),a(76506),a(66396),a(6540),a(92143),a(31450),a(71552),a(40642),a(91306),a(60991),a(60474),a(34250),a(19657),a(6906),a(89914),a(73173),a(82058),a(88762),a(32101),a(12047),a(81184),a(33101),a(97714),a(21801),a(73796),a(60947),a(53785),a(57251),a(89623),a(2906),a(91597),a(86787),a(35132),a(49900),a(3482),a(67477),a(78533),a(74653),a(91091),a(58943),a(74742),a(28239),a(51899),a(8642),a(41617),a(74569),a(84069),a(44567),a(98380),a(92482),a(82426),a(72836),a(29794),a(7200),a(92896),a(22781),a(32422),a(3296),a(21132),a(38742),a(14830),a(69586),a(60111),a(1623),a(65775),a(12381),a(92624),a(92847),a(41864);const y={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},p={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},f={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function S(e,r){const a=await async function(e,r){const a=r.context,t=function(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=d;break;case"ground":r=p;break;default:r=y}else switch(e.layerContainerType){case"basemap":r=m;break;case"tables":r=L;break;default:r=f}return r}(a);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const o=t[n];let u=o?i.l[o]:i.l.UnknownLayer;if(h(e)){const r=a?.portal;if(e.itemId){const a=new l.default({id:e.itemId,portal:r});await a.load();const t=(await(0,s.selectLayerClassPath)(a)).className||"UnknownLayer";u=i.l[t]}}else"ArcGISFeatureLayer"===n?function(e){return c(e,"notes")}(e)||function(e){return c(e,"markup")}(e)?u=i.l.MapNotesLayer:function(e){return c(e,"route")}(e)?u=i.l.RouteLayer:b(e)&&(u=i.l.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?u=i.l.WMTSLayer:"WFS"===n&&"2.0.0"!==e.wfsInfo?.version&&(u=i.l.UnsupportedLayer);return u()}(e,r);return async function(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&b(r)&&await async function(e,r,a){const t=i.l.FeatureLayer,n=await t(),l=r.featureCollection,s=l?.showLegend,o=l?.layers?.map(((t,i)=>{const l=new n;l.read(t,a);const o={...a,ignoreDefaults:!0};return l.read({id:`${e.id}-sublayer-${i}`,visibility:r.visibleLayers?.includes(i)??!0},o),null!=s&&l.read({showLegend:s},o),l}));e.layers.addMany(o??[])}(t,r,a.context),await(0,o.l)(t,a.context),t}(a,e,r)}function b(e){return"ArcGISFeatureLayer"===e.layerType&&!h(e)&&(e.featureCollection?.layers?.length??0)>1}function h(e){return"Feature Collection"===e.type}async function w(e,r,a){const n=new t.Z,i=u(n,Array.isArray(r.layers)?r.layers:[],a);try{const r=await e;try{if(await i,"group"===r.type)return r.layers.addMany(n),r}catch(e){r.destroy();for(const e of n)e.destroy();throw e}}catch(e){throw e}}},8642:(e,r,a)=>{a.r(r),a.d(r,{getFirstLayerOrTableId:()=>b,getNumLayersAndTables:()=>h,getSubtypeGroupLayerIds:()=>w,load:()=>p,preprocessFSItemData:()=>S});var t=a(60991),n=a(41617),i=a(21132),l=a(14830),s=a(49900),o=a(56420),c=a(69586),u=a(60111),y=a(68714);async function p(e,r){const a=e.instance.portalItem;if(a&&a.id)return await a.load(r),function(e){const r=e.instance.portalItem;if(!r?.type||!e.supportedTypes.includes(r.type))throw new t.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r?.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,r){const a=e.instance,n=a.portalItem;if(!n)return;const{url:i,title:s}=n,o=(0,c.c)(n);if("group"===a.type)return a.read({title:s},o),async function(e,r){let a;const{portalItem:n}=e;if(!n)return;const i=n.type,s=r.layerModuleTypeMap,o=(0,u.h)(n,"Oriented Imagery Layer")??!1;switch(i){case"Feature Service":a=o?s.OrientedImageryLayer:s.FeatureLayer;break;case"Stream Service":a=s.StreamLayer;break;case"Scene Service":a=s.SceneLayer;break;case"Feature Collection":a=s.FeatureLayer;break;default:throw new t.Z("portal:unsupported-item-type-as-group",`The item type '${i}' is not supported as a 'IGroupLayer'`)}let[c,y]=await Promise.all([a(),m(r)]),p=()=>c;if("Feature Service"===i){if(y=n.url?await S(y,n.url):{},w(y).length){const e=s.SubtypeGroupLayer,r=await e();p=e=>"SubtypeGroupLayer"===e.layerType?r:c}const r=await async function(e){const{layersJSON:r}=await(0,l.f)(e);if(!r)return null;const a=[...r.layers,...r.tables];return e=>a.find((r=>r.id===e.id))}(n.url);return f(e,p,y,r)}return h(y)>0?f(e,p,y):async function(e,r){const{portalItem:a}=e;if(!a?.url)return;const t=await(0,l.a)(a.url);t&&f(e,r,{layers:t.layers?.map(d),tables:t.tables?.map(d)})}(e,p)}(a,e);i&&a.read({url:i},o);const p=await m(e,r);return p&&a.read(p,o),a.resourceReferences={portalItem:n,paths:o.readResourcePaths??[]},"subtype-group"!==a.type&&a.read({title:s},o),(0,y.l)(a,o)}(e,r)}function d(e){return{id:e.id,name:e.name}}function f(e,r,a,l){let s=a.layers||[];const c=a.tables||[];if("Feature Collection"===e.portalItem?.type&&(s.forEach((e=>{"Table"===e?.layerDefinition?.type&&c.push(e)})),s=s.filter((e=>"Table"!==e?.layerDefinition?.type))),"coverage"in a){const r=function(e){const{coverage:r}=e;if(!r)return null;const a=new URL(r);if(r.toLowerCase().includes("item.html")){const e=a.searchParams.get("id"),r=a.origin;return n.Z.fromPortalItem({portalItem:new o.default({id:e,url:r})})}if((0,i.b)(r))return n.Z.fromArcGISServerUrl({url:r});throw new t.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(a);r&&e.add(r)}s.reverse().forEach((t=>{const n=L(e,r(t),a,t,l?.(t));e.add(n)})),c.reverse().forEach((t=>{const n=L(e,r(t),a,t,l?.(t));e.tables.add(n)}))}function L(e,r,a,t,n){const i=e.portalItem,l=new r({portalItem:i.clone(),layerId:t.id});if("sourceJSON"in l&&(l.sourceJSON=n),"subtype-group"!==l.type&&(l.sublayerTitleMode="service-name"),"Feature Collection"===i.type){const e={origin:"portal-item",portal:i.portal||s.Z.getDefault()};l.read(t,e);const r=a.showLegend;null!=r&&l.read({showLegend:r},e)}return l}async function m(e,r){if(!1===e.supportsData)return;const a=e.instance,t=a.portalItem;if(!t)return;let n=null;try{n=await t.fetchData("json",r)}catch(e){}if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(a)){let e=null,r=!0;if(n&&h(n)>0){if(null==a.layerId){const e=w(n);a.layerId="subtype-group"===a.type?e?.[0]:b(n)}e=function(e,r){const{layerId:a}=r,t=e.layers?.find((e=>e.id===a))||e.tables?.find((e=>e.id===a));return t&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(t,r)?t:null}(n,a),e&&(1===h(n)&&(r=!1),null!=n.showLegend&&(e.showLegend=n.showLegend))}return r&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),e}return n}async function S(e,r){if(null==e?.layers||null==e?.tables){const a=await(0,l.a)(r);(e=e||{}).layers=e.layers||a?.layers,e.tables=e.tables||a?.tables}return e}function b(e){const r=e.layers;if(r&&r.length)return r[0].id;const a=e.tables;return a&&a.length?a[0].id:null}function h(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function w(e){const r=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&r.push(e.id)})),r}a(76506),a(48578),a(92143),a(31450),a(71552),a(40642),a(74569),a(91306),a(21801),a(34250),a(60474),a(66396),a(86656),a(17533),a(6540),a(73796),a(12047),a(21972),a(91055),a(19657),a(6906),a(50406),a(97714),a(60947),a(53785),a(57251),a(89623),a(2906),a(91597),a(86787),a(35132),a(84069),a(44567),a(98380),a(92482),a(82426),a(72836),a(29794),a(7200),a(92896),a(22781),a(32422),a(82058),a(88762),a(32101),a(75067),a(3296),a(81184),a(33101),a(38742),a(3482),a(67477),a(78533),a(74653),a(91091),a(58943),a(73173),a(74742),a(28239),a(1623),a(89914),a(65775),a(12381),a(92624),a(92847),a(41864)},67902:(e,r,a)=>{a.d(r,{l:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([a.e(6027),a.e(7963)]).then(a.bind(a,37963))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(9632),a.e(9506),a.e(2311),a.e(5126),a.e(3439)]).then(a.bind(a,3439))).default,CSVLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(9632),a.e(9506),a.e(3525)]).then(a.bind(a,44004))).default,DimensionLayer:async()=>(await Promise.all([a.e(6739),a.e(210)]).then(a.bind(a,90210))).default,ElevationLayer:async()=>(await Promise.all([a.e(6100),a.e(2204)]).then(a.bind(a,72204))).default,FeatureLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(9632),a.e(9506),a.e(1246)]).then(a.bind(a,9506))).default,GeoJSONLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(9039)]).then(a.bind(a,99039))).default,GeoRSSLayer:async()=>(await Promise.all([a.e(6027),a.e(6467),a.e(2197)]).then(a.bind(a,92197))).default,GroupLayer:async()=>(await Promise.all([a.e(6027),a.e(294)]).then(a.bind(a,60294))).default,ImageryLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(1292),a.e(9214),a.e(3864),a.e(7721),a.e(6442)]).then(a.bind(a,6442))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(6100),a.e(3864),a.e(7721),a.e(1962),a.e(2552)]).then(a.bind(a,32552))).default,IntegratedMeshLayer:async()=>(await Promise.all([a.e(2311),a.e(156)]).then(a.bind(a,60156))).default,KMLLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1903)]).then(a.bind(a,21903))).default,LineOfSightLayer:async()=>(await a.e(6749).then(a.bind(a,16749))).default,MapImageLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9214),a.e(9925),a.e(605)]).then(a.bind(a,60605))).default,MapNotesLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(9632),a.e(9506),a.e(7841)]).then(a.bind(a,41135))).default,MediaLayer:async()=>(await Promise.all([a.e(6027),a.e(2090)]).then(a.bind(a,22090))).default,OGCFeatureLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(3958)]).then(a.bind(a,63958))).default,OpenStreetMapLayer:async()=>(await Promise.all([a.e(6027),a.e(3799),a.e(6043)]).then(a.bind(a,16043))).default,OrientedImageryLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(9632),a.e(9506),a.e(7031)]).then(a.bind(a,80733))).default,PointCloudLayer:async()=>(await Promise.all([a.e(846),a.e(2311),a.e(9151),a.e(5032)]).then(a.bind(a,25032))).default,RouteLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(6498)]).then(a.bind(a,76498))).default,SceneLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(9632),a.e(9506),a.e(2311),a.e(5126),a.e(4580)]).then(a.bind(a,84580))).default,StreamLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(8324)]).then(a.bind(a,58324))).default,SubtypeGroupLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9632),a.e(1951)]).then(a.bind(a,51951))).default,TileLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9214),a.e(6100),a.e(9925),a.e(611)]).then(a.bind(a,90611))).default,UnknownLayer:async()=>(await a.e(3117).then(a.bind(a,63117))).default,UnsupportedLayer:async()=>(await a.e(8243).then(a.bind(a,88243))).default,VectorTileLayer:async()=>(await Promise.all([a.e(6027),a.e(6100),a.e(2348),a.e(6611),a.e(6491)]).then(a.bind(a,46491))).default,VoxelLayer:async()=>(await Promise.all([a.e(846),a.e(2311),a.e(6739),a.e(8528)]).then(a.bind(a,18528))).default,WFSLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(5959),a.e(6012),a.e(208),a.e(1292),a.e(6985),a.e(9132),a.e(4797)]).then(a.bind(a,44797))).default,WMSLayer:async()=>(await Promise.all([a.e(6027),a.e(846),a.e(6467),a.e(3561)]).then(a.bind(a,73561))).default,WMTSLayer:async()=>(await Promise.all([a.e(6027),a.e(3799),a.e(2790)]).then(a.bind(a,82790))).default,WebTileLayer:async()=>(await Promise.all([a.e(6027),a.e(3799)]).then(a.bind(a,3799)).then((e=>e.a))).default}},38742:(e,r,a)=>{a.d(r,{M:()=>L,a:()=>S,e:()=>d,f:()=>i,i:()=>y,p:()=>p,r:()=>s,t:()=>l,w:()=>o});var t=a(71252),n=a(32101);function i(e,r){const a=r&&r.url&&r.url.path;if(e&&a&&(e=(0,n.hF)(e,a,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){const a=(0,n.PF)(e,r.portalItem.itemUrl);null!=a&&u.test(a)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(a).path)}return f(e,r&&r.portal)}function l(e,r,a=L.YES){if(null==e)return e;!(0,n.YP)(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);let t=(0,n.hF)(e);if(r){const a=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;if(a){const i=f(a,r.portal),l=f(t,r.portal);t=(0,n.PF)(l,i,i),null!=t&&t!==l&&t!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(t)}}return t=d(t,r?.portal),(0,n.YP)(t)&&(t=(0,n.Fv)(t)),r?.resources&&r?.portalItem&&!(0,n.YP)(t)&&!(0,n.HK)(t)&&a===L.YES&&r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(t),compress:!1}),t}function s(e,r,a){return i(e,a)}function o(e,r,a,t){const n=l(e,t);void 0!==n&&(r[a]=n)}const c=/\/items\/([^\/]+)\/resources\/(.*)/,u=/^\.\/resources\//;function y(e){const r=e?.match(c)??null;return r?.[1]??null}function p(e){const r=e?.match(c)??null;if(null==r)return null;const a=r[2],i=a.lastIndexOf("/");if(-1===i){const{path:e,extension:r}=(0,n.fZ)(a);return{prefix:null,filename:e,extension:(0,t.u)(r)}}const{path:l,extension:s}=(0,n.fZ)(a.slice(i+1));return{prefix:a.slice(0,i),filename:l,extension:(0,t.u)(s)}}function d(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?(0,n.Ie)(e,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):e}function f(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;const a=`${r.urlKey}.${r.customBaseUrl}`,t=(0,n.TI)();return(0,n.D6)(t,`${t.scheme}://${a}`)?(0,n.Ie)(e,r.portalHostname,a):(0,n.Ie)(e,a,r.portalHostname)}var L,m;(m=L||(L={}))[m.YES=0]="YES",m[m.NO=1]="NO";const S=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return L},ensureMainOnlineDomain:d,fromJSON:i,itemIdFromResourceUrl:y,prefixAndFilenameFromResourceUrl:p,read:s,toJSON:l,write:o},Symbol.toStringTag,{value:"Module"}))},60111:(e,r,a)=>{a.d(r,{T:()=>u,a:()=>l,b:()=>c,g:()=>y,h:()=>s,r:()=>o});var t=a(1623),n=a(60947),i=a(35132);function l(e,r){if(!s(e,r)){const a=e.typeKeywords;a?a.push(r):e.typeKeywords=[r]}}function s(e,r){return!!e.typeKeywords?.includes(r)}function o(e,r){const a=e.typeKeywords;if(a){const e=a.indexOf(r);e>-1&&a.splice(e,1)}}async function c(e){const r=e.clone().normalize();let a;if(r.length>1)for(const e of r)a?e.width>a.width&&(a=e):a=e;else a=r[0];return async function(e){const r=e.spatialReference;if(r.isWGS84)return e.clone();if(r.isWebMercator)return(0,i.Sx)(e);const a=n.Z.WGS84;return await(0,t.iQ)(r,a),(0,t.iV)(e,a)}(a)}const u={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"};function y(e){const{portal:r,isOrgItem:a,itemControl:t}=e,n=r.user?.privileges;let i=!n||n.includes("features:user:edit"),l=!!a&&!!n?.includes("features:user:fullEdit");const s="update"===t||"admin"===t;return s?l=i=!0:l&&(i=!0),{features:{edit:i,fullEdit:l},content:{updateItem:s}}}},36458:(e,r,a)=>{a.r(r),a.d(r,{fromItem:()=>u,selectLayerClassPath:()=>y});var t=a(60991),n=a(51899),i=a(67902),l=a(56420),s=a(8642),o=a(60111),c=a(14830);async function u(e){!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)});const r=await async function(e){return await e.load(),async function(e){const r=i.l[e.className];return{constructor:await r(),properties:e.properties}}(await y(e))}(e.portalItem);return new(0,r.constructor)({portalItem:e.portalItem,...r.properties})}async function y(e){switch(e.type){case"Map Service":return async function(e){const r=await async function(e){return(await(0,c.a)(e.url)).tileInfo}(e);return r?{className:"TileLayer"}:{className:"MapImageLayer"}}(e);case"Feature Service":return async function(e){if((0,o.h)(e,"Oriented Imagery Layer"))return async function(e){await e.load();const r=await e.fetchData();return r.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:r}}(e);const r=await p(e);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}(e);case"Feature Collection":return async function(e){await e.load();const r=(0,o.h)(e,"Map Notes"),a=(0,o.h)(e,"Markup");if(r||a)return{className:"MapNotesLayer"};if((0,o.h)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,s.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return async function(e){const r=await p(e);if("object"==typeof r){const a={};let t;if(null!=r.id?(a.layerId=r.id,t=`${e.url}/layers/${r.id}`):t=e.url,e.typeKeywords?.length)for(const r of Object.keys(n.o))if(e.typeKeywords.includes(r))return{className:n.o[r]};const i=await(0,c.a)(t);return{className:n.o[i?.layerType]||"SceneLayer",properties:a}}if(!1===r){const r=await(0,c.a)(e.url);return"Voxel"===r?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"}}return{className:"GroupLayer"}}(e);case"Image Service":return async function(e){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const a=await e.fetchData(),t=a?.layerType;if("ArcGISTiledImageServiceLayer"===t)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===t)return{className:"ImageryLayer"};const n=await(0,c.a)(e.url),i=n.cacheType?.toLowerCase(),l=n.capabilities?.toLowerCase().includes("tilesonly");return"map"===i||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function p(e){const r=e.url;if(!r||r.match(/\/\d+$/))return{};await e.load();const a=await e.fetchData();if("Feature Service"===e.type){const e=d(await(0,s.preprocessFSItemData)(a,r));if("object"==typeof e){const r=(0,s.getSubtypeGroupLayerIds)(a);e.className=null!=e.id&&r.includes(e.id)?"SubtypeGroupLayer":"FeatureLayer"}return e}return(0,s.getNumLayersAndTables)(a)>0?d(a):d(await(0,c.a)(r))}function d(e){return 1===(0,s.getNumLayersAndTables)(e)&&{id:(0,s.getFirstLayerOrTableId)(e)}}a(76506),a(48578),a(92143),a(31450),a(71552),a(40642),a(88762),a(32101),a(82058),a(50406),a(73173),a(12047),a(21972),a(17533),a(86656),a(66396),a(6540),a(91306),a(60474),a(91055),a(34250),a(19657),a(6906),a(81184),a(33101),a(97714),a(21801),a(73796),a(60947),a(53785),a(57251),a(89623),a(2906),a(91597),a(86787),a(35132),a(49900),a(3482),a(67477),a(78533),a(74653),a(91091),a(58943),a(74742),a(28239),a(41617),a(74569),a(84069),a(44567),a(98380),a(92482),a(82426),a(72836),a(29794),a(7200),a(92896),a(22781),a(32422),a(75067),a(3296),a(21132),a(38742),a(69586),a(68714),a(41864),a(1623),a(89914),a(65775),a(12381),a(92624),a(92847)},68714:(e,r,a)=>{a.d(r,{l:()=>l});var t=a(41864),n=a(50406),i=a(17533);async function l(e,r,a){const l=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin);if(l&&"unique-value"===l.type&&l.styleOrigin){const s=await(0,t.r)(l.populateFromStyle());if((0,n.k_)(a),!1===s.ok){const a=s.error;r&&r.messages&&r.messages.push(new i.W("renderer:style-reference",`Failed to create unique value renderer from style reference: ${a.message}`,{error:a,context:r})),e.clear("renderer",r?.origin)}}}},3296:(e,r,a)=>{a.d(r,{IG:()=>l,iv:()=>s});var t=a(29768),n=a(17533);a(48578),a(86656),a(76506),a(66396),a(6540),a(92143),a(31450),a(71552),a(40642),a(91306),a(60991);let i=0;const l=e=>{let r=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+i++})}};return r=(0,t._)([(0,n.j)("esri.core.Identifiable")],r),r},s=e=>{let r=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:i++})}};return r=(0,t._)([(0,n.j)("esri.core.NumericIdentifiable")],r),r};let o=class extends(l(class{})){};o=(0,t._)([(0,n.j)("esri.core.Identifiable")],o)},41617:(e,r,a)=>{a.d(r,{Z:()=>h});var t=a(29768),n=(a(74569),a(82058)),i=a(60991),l=a(75067),s=a(3296),o=a(81184),c=a(92143),u=a(50406),y=a(32101),p=a(34250),d=(a(91306),a(48578),a(17533)),f=a(31450),L=a(21801),m=a(60947);a(73796),a(12047),a(21972),a(60474),a(66396),a(76506),a(86656),a(91055),a(6540),a(19657),a(6906),a(71552),a(40642),a(97714),a(84069),a(2906),a(91597),a(86787),a(53785),a(57251),a(89623),a(35132),a(44567),a(98380),a(92482),a(82426),a(72836),a(29794),a(7200),a(92896),a(22781),a(32422),a(88762),a(33101);let S=0,b=class extends(l.Z.EventedMixin((0,s.IG)(o.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new L.Z(-180,-90,180,90,m.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+S++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=m.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const r="string"==typeof e?{url:e}:e;return(await a.e(6601).then(a.bind(a,66601))).fromUrl(r)}static fromPortalItem(e){return async function(e){const r="portalItem"in e?e:{portalItem:e},t=await a.e(6458).then(a.bind(a,36458));try{return await t.fromItem(r)}catch(e){const a=r&&r.portalItem,t=a&&a.id||"unset",n=a&&a.portal&&a.portal.url||f.Z.portalUrl;throw c.L.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+t+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,u.D_)(e)||c.L.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,r=this.parent;"layers"in r&&r.layers.includes(e)?r.layers.remove(e):"tables"in r&&r.tables.includes(e)?r.tables.remove(e):"baseLayers"in r&&r.baseLayers.includes(e)?r.baseLayers.remove(e):"baseLayers"in r&&r.referenceLayers.includes(e)&&r.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,y.mN)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,n.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new i.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,t._)([(0,p.Cb)({type:String})],b.prototype,"attributionDataUrl",void 0),(0,t._)([(0,p.Cb)({type:L.Z})],b.prototype,"fullExtent",void 0),(0,t._)([(0,p.Cb)({readOnly:!0})],b.prototype,"hasAttributionData",null),(0,t._)([(0,p.Cb)({type:String,clonable:!1})],b.prototype,"id",void 0),(0,t._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],b.prototype,"legendEnabled",void 0),(0,t._)([(0,p.Cb)({type:["show","hide","hide-children"]})],b.prototype,"listMode",void 0),(0,t._)([(0,p.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],b.prototype,"opacity",void 0),(0,t._)([(0,p.Cb)({clonable:!1})],b.prototype,"parent",void 0),(0,t._)([(0,p.Cb)({readOnly:!0})],b.prototype,"parsedUrl",null),(0,t._)([(0,p.Cb)({type:Boolean})],b.prototype,"popupEnabled",void 0),(0,t._)([(0,p.Cb)({type:Boolean})],b.prototype,"attributionVisible",void 0),(0,t._)([(0,p.Cb)({type:m.Z})],b.prototype,"spatialReference",void 0),(0,t._)([(0,p.Cb)({type:String})],b.prototype,"title",void 0),(0,t._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0),(0,t._)([(0,p.Cb)()],b.prototype,"url",void 0),(0,t._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],b.prototype,"visible",void 0),b=(0,t._)([(0,d.j)("esri.layers.Layer")],b);const h=b}}]);