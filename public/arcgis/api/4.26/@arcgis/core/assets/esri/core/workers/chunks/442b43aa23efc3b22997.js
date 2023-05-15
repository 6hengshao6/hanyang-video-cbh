"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6601],{66601:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>c});var t=r(60991),n=r(71252),l=r(32101),s=r(21132),i=r(14830),o=r(51899),y=r(67902);r(76506),r(48578),r(92143),r(31450),r(71552),r(40642),r(38742),r(82058),r(88762),r(50406);const u={FeatureLayer:!0,SceneLayer:!0};async function c(e){const a=e.properties?.customParameters,c=await async function(e,a){let r=(0,s.p)(e);if((0,n.a)(r)&&(r=await async function(e,a){const r=await(0,i.a)(e,{customParameters:a});let t=null,o=null;const y=r.type;if("Feature Layer"===y||"Table"===y?(t="FeatureServer",o=r.id??null):"indexedVector"===y?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":f(r)?(t="SceneServer",o=r.id):r.hasOwnProperty("layers")&&f(r.layers?.[0])&&(t="SceneServer"),!t)return null;const u=null!=o?(0,s.f)(e):null;return{title:(0,n.i)(u)&&r.name||(0,l.vt)(e),serverType:t,sublayer:o,url:{path:(0,n.i)(u)?u.serviceUrl:(0,l.mN)(e).path}}}(e,a)),(0,n.a)(r))throw new t.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:c,sublayer:d}=r;let m;const b={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(c){case"MapServer":m=null!=d?"FeatureLayer":await async function(e,a){return(await(0,i.a)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,i.a)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;m=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,i.a)(r.url.path,{customParameters:a});if(m="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)m="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=o.o[e]&&(m=o.o[e])}}break}default:m=b[c]}const w="FeatureServer"===c,h={parsedUrl:r,Constructor:null,layerOrTableId:w?d:void 0,sublayerIds:null,tableIds:null};if(u[m]&&null==d){const r=await async function(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await(0,i.f)(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await(0,i.a)(e,{customParameters:r});const l=t?.layers,s=t?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}(e,c,a);w&&(h.sublayerInfos=r.layerInfos,h.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(h.sublayerIds=r.layerIds,h.tableIds=r.tableIds):w&&(h.layerOrTableId=r.layerIds[0]??r.tableIds[0],h.sourceJSON=r.layerInfos?.[0]??r.tableInfos?.[0])}return h.Constructor=await async function(e){return(0,y.l[e])()}(m),h}(e.url,a),m={...e.properties,url:e.url};if(!c.sublayerIds)return null!=c.layerOrTableId&&(m.layerId=c.layerOrTableId,m.sourceJSON=c.sourceJSON),new c.Constructor(m);const b=new(0,(await Promise.all([r.e(6027),r.e(294)]).then(r.bind(r,60294))).default)({title:c.parsedUrl.title});return function(e,a,r){function t(e,t){const l={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,n.i)(t)&&(l.sourceJSON=t),new a.Constructor(l)}a.sublayerIds.forEach((r=>{const n=t(r,d(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,d(a.tableInfos,r));e.tables.add(n)}))}(b,c,m),b}function d(e,a){return e?e.find((e=>e.id===a)):null}function f(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}},14830:(e,a,r)=>{r.d(a,{a:()=>n,f:()=>l});var t=r(82058);async function n(e,a){const{data:r}=await(0,t.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}async function l(e,a){const r=await n(e,a);r.layers=r.layers.filter(s);const t={serviceJSON:r};if((r.currentVersion??0)<10.5)return t;const l=await n(e+"/layers",a);return t.layersJSON={layers:l.layers.filter(s),tables:l.tables},t}function s(e){return!e.type||"Feature Layer"===e.type}},67902:(e,a,r)=>{r.d(a,{l:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(6027),r.e(7963)]).then(r.bind(r,37963))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(9632),r.e(9506),r.e(2311),r.e(5126),r.e(3439)]).then(r.bind(r,3439))).default,CSVLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(9632),r.e(9506),r.e(3525)]).then(r.bind(r,44004))).default,DimensionLayer:async()=>(await Promise.all([r.e(6739),r.e(210)]).then(r.bind(r,90210))).default,ElevationLayer:async()=>(await Promise.all([r.e(6100),r.e(2204)]).then(r.bind(r,72204))).default,FeatureLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(9632),r.e(9506),r.e(1246)]).then(r.bind(r,9506))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(9039)]).then(r.bind(r,99039))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(6027),r.e(6467),r.e(2197)]).then(r.bind(r,92197))).default,GroupLayer:async()=>(await Promise.all([r.e(6027),r.e(294)]).then(r.bind(r,60294))).default,ImageryLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(1292),r.e(9214),r.e(3864),r.e(7721),r.e(6442)]).then(r.bind(r,6442))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(6100),r.e(3864),r.e(7721),r.e(1962),r.e(2552)]).then(r.bind(r,32552))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(2311),r.e(156)]).then(r.bind(r,60156))).default,KMLLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1903)]).then(r.bind(r,21903))).default,LineOfSightLayer:async()=>(await r.e(6749).then(r.bind(r,16749))).default,MapImageLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9214),r.e(9925),r.e(605)]).then(r.bind(r,60605))).default,MapNotesLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(9632),r.e(9506),r.e(7841)]).then(r.bind(r,41135))).default,MediaLayer:async()=>(await Promise.all([r.e(6027),r.e(2090)]).then(r.bind(r,22090))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(3958)]).then(r.bind(r,63958))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(6027),r.e(3799),r.e(6043)]).then(r.bind(r,16043))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(9632),r.e(9506),r.e(7031)]).then(r.bind(r,80733))).default,PointCloudLayer:async()=>(await Promise.all([r.e(846),r.e(2311),r.e(9151),r.e(5032)]).then(r.bind(r,25032))).default,RouteLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(6498)]).then(r.bind(r,76498))).default,SceneLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(9632),r.e(9506),r.e(2311),r.e(5126),r.e(4580)]).then(r.bind(r,84580))).default,StreamLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(8324)]).then(r.bind(r,58324))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9632),r.e(1951)]).then(r.bind(r,51951))).default,TileLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9214),r.e(6100),r.e(9925),r.e(611)]).then(r.bind(r,90611))).default,UnknownLayer:async()=>(await r.e(3117).then(r.bind(r,63117))).default,UnsupportedLayer:async()=>(await r.e(8243).then(r.bind(r,88243))).default,VectorTileLayer:async()=>(await Promise.all([r.e(6027),r.e(6100),r.e(2348),r.e(6611),r.e(6491)]).then(r.bind(r,46491))).default,VoxelLayer:async()=>(await Promise.all([r.e(846),r.e(2311),r.e(6739),r.e(8528)]).then(r.bind(r,18528))).default,WFSLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(5959),r.e(6012),r.e(208),r.e(1292),r.e(6985),r.e(9132),r.e(4797)]).then(r.bind(r,44797))).default,WMSLayer:async()=>(await Promise.all([r.e(6027),r.e(846),r.e(6467),r.e(3561)]).then(r.bind(r,73561))).default,WMTSLayer:async()=>(await Promise.all([r.e(6027),r.e(3799),r.e(2790)]).then(r.bind(r,82790))).default,WebTileLayer:async()=>(await Promise.all([r.e(6027),r.e(3799)]).then(r.bind(r,3799)).then((e=>e.a))).default}}}]);