// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../kernel ../request ../core/Error ../core/jsonMap ../core/maybe ../core/screenUtils ../core/urlUtils ../geometry/Polygon ../layers/support/fieldUtils ../layers/support/floorFilterUtils ../renderers/visualVariables/support/visualVariableUtils ./utils ./geoprocessor/execute ./geoprocessor/submitJob ./support/fileFormat ./support/layoutTemplate ./support/printTaskUtils ./support/PrintTemplate".split(" "),function(y,K,L,S,M,C,x,z,T,U,V,W,H,X,Y,Z,aa,u,ba){async function N(a,b){b=b||{is11xService:!1,
legendLayerNameMap:{},legendLayers:[]};var c=a.template||new ba;null==c.showLabels&&(c.showLabels=!0);var d=c.exportOptions;const f=aa.toJSON(c.layout);if(d){var g={dpi:d.dpi};if("map_only"===f.toLowerCase()||""===f){var e=d.width;d=d.height;g.outputSize=null!=e&&null!=d?[e,d]:void 0}}e=c.layoutOptions;let q;if(e){if("Miles"===e.scalebarUnit||"Kilometers"===e.scalebarUnit){var h="Kilometers";var l="Miles"}else if("Meters"===e.scalebarUnit||"Feet"===e.scalebarUnit)h="Meters",l="Feet";q={titleText:e.titleText,
authorText:e.authorText,copyrightText:e.copyrightText,customTextElements:e.customTextElements,elementOverrides:e.elementOverrides,scaleBarOptions:{metricUnit:O.toJSON(h),metricLabel:h?P[h]:void 0,nonMetricUnit:O.toJSON(l),nonMetricLabel:l?P[l]:void 0}}}h=null;e?.legendLayers&&(h=e.legendLayers.map(n=>{var m=n.layerId;b.legendLayerNameMap[m]=n.title;m={id:m};n.subLayerIds&&(m.subLayerIds=n.subLayerIds);return m}));l=await ca(a,c,b);if(l.operationalLayers){const n=RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),
m=/[\u0600-\u06FF]/,v=t=>{const p=t.text,r=(t=t.font)&&t.family&&t.family.toLowerCase();p&&t&&("arial"===r||"arial unicode ms"===r)&&(t.family=n.test(p)?"Arial Unicode MS":"Arial","normal"!==t.style&&m.test(p)&&(t.family="Arial Unicode MS"))},k=()=>{throw new S("print:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap");};l.operationalLayers.forEach(t=>{t.featureCollection?.layers?t.featureCollection.layers.forEach(p=>{if(p.layerDefinition?.drawingInfo?.renderer?.symbol){const r=
p.layerDefinition.drawingInfo.renderer;"esriTS"===r.symbol.type?v(r.symbol):"CIMSymbolReference"!==r.symbol.type||b.is11xService||k()}p.featureSet?.features&&p.featureSet.features.forEach(r=>{r.symbol&&("esriTS"===r.symbol.type?v(r.symbol):"CIMSymbolReference"!==r.symbol.type||b.is11xService||k())})}):!b.is11xService&&t.layerDefinition?.drawingInfo?.renderer&&JSON.stringify(t.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&k()})}a.outSpatialReference&&(l.mapOptions.spatialReference=
a.outSpatialReference.toJSON());Object.assign(l,{exportOptions:g,layoutOptions:q||{}});Object.assign(l.layoutOptions,{legendOptions:{operationalLayers:null!=h?h:b.legendLayers.slice()}});b.legendLayers.length=0;D.set(b.gpServerUrl,b);g={Web_Map_as_JSON:JSON.stringify(l),Format:Z.toJSON(c.format),Layout_Template:f,Layout_Item_ID:void 0};c.layoutItem&&(delete g.Layout_Template,c=c.layoutItem,await c.load(),"public"!==c.access&&K.id&&await K.id.getCredential(b.gpServerUrl),g.Layout_Item_ID=JSON.stringify({id:c.id}));
a.extraParameters&&Object.assign(g,a.extraParameters);return g}async function ca(a,b,c){var d=a.view;let f=d.spatialReference;const g={operationalLayers:await da(d,b,c)};b.includeTables&&(g.tables=await ea(d));a=c.ssExtent||a.extent||d.extent;f&&f.isWrappable&&(a=a.clone()._normalize(!0),f=a.spatialReference);g.mapOptions={extent:a&&a.toJSON(),spatialReference:f&&f.toJSON(),showAttribution:b.attributionVisible};c.ssExtent=null;d.background&&(g.background=d.background.toJSON());d.rotation&&(g.mapOptions.rotation=
-d.rotation);b.scalePreserved&&(g.mapOptions.scale=b.outScale||d.scale);C.isSome(d.timeExtent)&&(b=C.isSome(d.timeExtent.start)?d.timeExtent.start.getTime():null,d=C.isSome(d.timeExtent.end)?d.timeExtent.end.getTime():null,g.mapOptions.time=[b,d]);return g}function I(a){const b=a.lastIndexOf("/GPServer/");0<b&&(a=a.slice(0,b+9));return a}async function da(a,b,c){const d=[],f={layerView:null,printTemplate:b,view:a};let g=0;b.scalePreserved&&(g=b.outScale||a.scale);var e=u.getVisibleLayerViews(a,g);
for(const q of e){e=q.layer;if(!e.loaded||"group"===e?.type)continue;let h;f.layerView=q;if(h=u.isScreenshotRequired(q)?await A(e,f,c):u.isBingMapsLayer(e)?{culture:e.culture,key:e.key,type:`BingMaps${"aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road"}`}:u.isCSVLayer(e)?await fa(e,f,c):"feature"===e?.type?await ha(e,f,c):"geojson"===e?.type?await ia(e,f,c):"graphics"===e?.type?await ja(e,f,c):"imagery"===e?.type?ka(e,c):"imagery-tile"===e?.type?await la(e,f,c):"kml"===e?.type?await ma(e,
f,c):"map-image"===e?.type?na(e,f,c):"map-notes"===e?.type?await oa(f,c):"open-street-map"===e?.type?{type:"OpenStreetMap"}:"stream"===e?.type?await pa(e,f,c):"tile"===e?.type?qa(e,c):"vector-tile"===e?.type?await ra(e,f,c):"web-tile"===e?.type?sa(e):"wms"===e?.type?ta(e,c):"wmts"===e?.type?ua(e):await A(e,f,c))Array.isArray(h)?d.push(...h):(h.id=e.id,h.title=c.legendLayerNameMap[e.id]||e.title,h.opacity=e.opacity,h.minScale=e.minScale||0,h.maxScale=e.maxScale||0,u.isBlendLayer(e)&&e.blendMode&&"normal"!==
e.blendMode&&(h.blendMode=e.blendMode),d.push(h))}g&&d.forEach(q=>{q.minScale=0;q.maxScale=0});a.graphics&&a.graphics.length&&(a=await w(null,a.graphics,b,c))&&d.push(a);return d}async function fa(a,b,c){a.legendEnabled&&c.legendLayers.push({id:a.id});var d=b.layerView;b=b.printTemplate;if(c.is11xService&&!d.filter)c={type:"CSV"},a.write(c,{origin:"web-map"}),delete c.popupInfo,delete c.layerType,c.showLabels=b.showLabels&&a.labelsVisible;else return d=await E(d),w(a,d,b,c);return c}async function w(a,
b,c,d){let f;const g=u.createPolygonLayer(),e=u.createPolylineLayer(),q=u.createPointLayer(),h=u.createMultipointLayer(),l=u.createPointLayer();l.layerDefinition.name="textLayer";delete l.layerDefinition.drawingInfo;if(a){"esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===a.declaredClass?g.layerDefinition.name=e.layerDefinition.name=q.layerDefinition.name=h.layerDefinition.name=d.legendLayerNameMap[a.id]||a.get("arcgisProps.title")||a.title:"esri.layers.GraphicsLayer"===a.declaredClass&&
(b=a.graphics.items);if(a.renderer){var n=a.renderer.toJSON(),m=g.layerDefinition.drawingInfo;m&&(m.renderer=n);if(m=e.layerDefinition.drawingInfo)m.renderer=n;if(m=q.layerDefinition.drawingInfo)m.renderer=n;if(m=h.layerDefinition.drawingInfo)m.renderer=n}if(c.showLabels&&a.labelsVisible&&"function"===typeof a.write&&(n=a.write({},{origin:"web-map"}).layerDefinition?.drawingInfo?.labelingInfo)){f=!0;if(m=g.layerDefinition.drawingInfo)m.labelingInfo=n;if(m=e.layerDefinition.drawingInfo)m.labelingInfo=
n;if(m=q.layerDefinition.drawingInfo)m.labelingInfo=n;if(m=h.layerDefinition.drawingInfo)m.labelingInfo=n}}a?.renderer||f||(delete g.layerDefinition.drawingInfo,delete e.layerDefinition.drawingInfo,delete q.layerDefinition.drawingInfo,delete h.layerDefinition.drawingInfo);n=a?.fieldsIndex;m=a?.renderer;if(n){var v=new Set;f&&await U.collectLabelingFields(v,a);m&&"function"===typeof m.collectRequiredFields&&await m.collectRequiredFields(v,n);v=Array.from(v);n=n.fields.map(p=>p.toJSON());g.layerDefinition.fields=
n;e.layerDefinition.fields=n;q.layerDefinition.fields=n;h.layerDefinition.fields=n}n=b&&b.length;let k;for(m=0;m<n;m++){const p=b[m]||b.getItemAt(m);if(!1!==p.visible&&p.geometry&&(k=p.toJSON(),k.hasOwnProperty("popupTemplate")&&delete k.popupTemplate,k.geometry&&k.geometry.z&&delete k.geometry.z,!k.symbol||!k.symbol.outline||"esriCLS"!==k.symbol.outline.type||d.is11xService)){!d.is11xService&&k.symbol&&k.symbol.outline&&k.symbol.outline.color&&k.symbol.outline.color[3]&&(k.symbol.outline.color[3]=
255);var t=a&&a.renderer&&("valueExpression"in a.renderer&&a.renderer.valueExpression||"hasVisualVariables"in a.renderer&&a.renderer.hasVisualVariables());if(!k.symbol&&a&&a.renderer&&t&&!d.is11xService){t=a.renderer;const r=await t.getSymbolAsync(p);if(!r)continue;k.symbol=r.toJSON();"hasVisualVariables"in t&&t.hasVisualVariables()&&u.applyVisualVariables(k.symbol,{renderer:t,graphic:p,symbol:r})}k.symbol&&(k.symbol.angle||delete k.symbol.angle,F(k.symbol)?k.symbol=await G(k.symbol,d):k.symbol.text&&
delete k.attributes);if((!c||!c.forceFeatureAttributes)&&v?.length){const r={};v.forEach(J=>{k.attributes&&k.attributes.hasOwnProperty(J)&&(r[J]=k.attributes[J])});k.attributes=r}"polygon"===p.geometry.type?g.featureSet.features.push(k):"polyline"===p.geometry.type?e.featureSet.features.push(k):"point"===p.geometry.type?k.symbol&&k.symbol.text?l.featureSet.features.push(k):q.featureSet.features.push(k):"multipoint"===p.geometry.type?h.featureSet.features.push(k):"extent"===p.geometry.type&&(k.geometry=
T.fromExtent(p.geometry).toJSON(),g.featureSet.features.push(k))}}a=[g,e,h,q,l].filter(p=>0<p.featureSet.features.length);for(const p of a)b=p.featureSet.features.every(r=>r.symbol),!b||c&&c.forceFeatureAttributes||p.featureSet.features.forEach(r=>{delete r.attributes}),b&&delete p.layerDefinition.drawingInfo,p.layerDefinition.drawingInfo&&p.layerDefinition.drawingInfo.renderer&&await Q(p.layerDefinition.drawingInfo.renderer,d);return a.length?{featureCollection:{layers:a},showLabels:f}:null}async function ha(a,
b,c){const d=a.renderer;var f=parseFloat(c.cimVersion);if("binning"===a.featureReduction?.type||"cluster"===a.featureReduction?.type&&(!c.is11xService||2.9>f)||"pie-chart"===d?.type||"dot-density"===d?.type&&(!c.is11xService||2.6>f))return A(a,b,c);a.legendEnabled&&c.legendLayers.push({id:a.id});f=b.layerView;const {printTemplate:g,view:e}=b;b=d&&("valueExpression"in d&&d.valueExpression||"hasVisualVariables"in d&&d.hasVisualVariables());const q="feature-layer"!==a.source?.type&&"ogc-feature"!==a.source?.type;
if(!c.is11xService&&b||f.filter||q||!d||"field"in d&&null!=d.field&&("string"!==typeof d.field||!a.getField(d.field)))f=await E(f),b=await w(a,f,g,c);else if(b=a.write(),b={id:b.id,title:b.title,opacity:b.opacity,minScale:b.minScale,maxScale:b.maxScale,url:b.url,layerType:b.layerType,customParameters:b.customParameters,layerDefinition:b.layerDefinition},b.showLabels=g.showLabels&&a.labelsVisible,B(b,a),b.layerDefinition?.drawingInfo?.renderer&&(delete b.layerDefinition.minScale,delete b.layerDefinition.maxScale,
await Q(b.layerDefinition.drawingInfo.renderer,c),"visualVariables"in d&&d.visualVariables&&d.visualVariables[0]&&(a=d.visualVariables[0],"size"===a.type&&a.maxSize&&"number"!==typeof a.maxSize&&a.minSize&&"number"!==typeof a.minSize&&(a=W.getSizeRangeAtScale(a,e.scale),b.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=a.minSize,b.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=a.maxSize))),a=V.getFloorFilterClause(f))b.layerDefinition||(b.layerDefinition={}),b.layerDefinition.definitionExpression=
b.layerDefinition.definitionExpression?`(${b.layerDefinition.definitionExpression}) AND (${a})`:a;return b}async function ia(a,b,c){if("binning"===a.featureReduction?.type||"cluster"===a.featureReduction?.type)return A(a,b,c);a.legendEnabled&&c.legendLayers.push({id:a.id});const d=await E(b.layerView);return w(a,d,b.printTemplate,c)}async function ja(a,{printTemplate:b},c){return w(a,null,b,c)}function ka(a,b){a.legendEnabled&&b.legendLayers.push({id:a.id});var c=a.write();c={layerType:c.layerType,
customParameters:c.customParameters};c.bandIds=a.bandIds;c.compressionQuality=a.compressionQuality;c.format=a.format;c.interpolation=a.interpolation;if(a.mosaicRule||a.definitionExpression)c.mosaicRule=a.exportImageServiceParameters.mosaicRule.toJSON();if(a.renderingRule||a.renderer)if(b.is11xService)a.renderingRule&&(c.renderingRule=a.renderingRule.toJSON()),a.renderer&&(c.layerDefinition=c.layerDefinition||{},c.layerDefinition.drawingInfo=c.layerDefinition.drawingInfo||{},c.layerDefinition.drawingInfo.renderer=
a.renderer.toJSON());else if(b=a.exportImageServiceParameters.combineRendererWithRenderingRule())c.renderingRule=b.toJSON();B(c,a);return c}async function la(a,b,c){if("flow"===a.renderer?.type)return A(a,b,c);a.legendEnabled&&c.legendLayers.push({id:a.id});b=a.write()||{};b={bandIds:b.bandIds,customParameters:b.customParameters,interpolation:b.interpolation,layerDefinition:b.layerDefinition,layerType:"ArcGISImageServiceLayer"};B(b,a);return b}async function ma(a,b,c){const d=b.printTemplate;if(c.is11xService)return c=
{type:"kml"},a.write(c,{origin:"web-map"}),delete c.layerType,c.url=z.normalize(a.url),c;const f=[];b=b.layerView;b.allVisibleMapImages.forEach((g,e)=>{e={id:`${a.id}_image${e}`,type:"image",title:a.id,minScale:a.minScale||0,maxScale:a.maxScale||0,opacity:a.opacity,extent:g.extent};"data:image/png;base64,"===g.href.substr(0,22)?e.imageData=g.href.substr(22):e.url=g.href;f.push(e)});b=[...b.allVisiblePoints.items,...b.allVisiblePolylines.items,...b.allVisiblePolygons.items];c={id:a.id,...(await w(null,
b,d,c))};f.push(c);return f}function na(a,{view:b},c){let d;const f={id:a.id,subLayerIds:[]};let g=[];const e=b.scale,q=h=>{var l=0===e;const n=0===h.minScale||e<=h.minScale,m=0===h.maxScale||e>=h.maxScale;h.visible&&(l||n&&m)&&(h.sublayers?h.sublayers.forEach(q):(l=h.toExportImageJSON(),g.unshift({id:h.id,name:h.title,layerDefinition:{drawingInfo:l.drawingInfo,definitionExpression:l.definitionExpression,source:l.source}}),f.subLayerIds.push(h.id)))};a.sublayers&&a.sublayers.forEach(q);g.length&&
(g=g.map(({id:h,name:l,layerDefinition:n})=>({id:h,name:l,layerDefinition:n})),d=(h=>({layerType:h.layerType,customParameters:h.customParameters}))(a.write()),d.layers=g,d.visibleLayers=a.capabilities?.exportMap?.supportsDynamicLayers?void 0:f.subLayerIds,B(d,a),a.legendEnabled&&c.legendLayers.push(f));return d}async function oa({layerView:a,printTemplate:b},c){const d=[];a=a.layer;if(C.isSome(a.featureCollections))for(var f of a.featureCollections){var g=await w(f,f.source,b,c);g&&d.push(...g.featureCollection.layers)}else if(C.isSome(a.sublayers))for(g of a.sublayers)(f=
await w(null,g.graphics,b,c))&&d.push(...f.featureCollection.layers);return{featureCollection:{layers:d}}}async function A(a,{printTemplate:b,view:c},d){const f={type:"image"};a={format:"png",ignoreBackground:!0,layers:[a],rotation:0};const g=d.ssExtent||c.extent.clone();let e=96,q=!0,h=!0;if(b.exportOptions){const l=b.exportOptions;null!=l.dpi&&0<l.dpi&&(e=l.dpi);null!=l.width&&0<l.width&&(q=l.width%2===c.width%2);null!=l.height&&0<l.height&&(h=l.height%2===c.height%2)}"map-only"!==b.layout||!b.scalePreserved||
b.outScale&&b.outScale!==c.scale||96!==e||q&&h||(a.area={x:0,y:0,width:c.width,height:c.height},q||--a.area.width,h||--a.area.height,d.ssExtent||(b=c.toMap(x.createScreenPoint(a.area.width,a.area.height)),g.ymin=b.y,g.xmax=b.x,d.ssExtent=g));f.extent=g.clone()._normalize(!0).toJSON();c=await c.takeScreenshot(a);f.imageData=z.dataComponents(c.dataUrl)?.data;return f}async function pa(a,{layerView:b,printTemplate:c},d){a.legendEnabled&&d.legendLayers.push({id:a.id});b=await E(b);return w(a,b,c,d)}async function ea(a){const b=
[],c=[];for(const d of a.map.allTables)"feature"!==d.type||d.loaded||c.push(d.load());c.length&&await Promise.allSettled(c);for(const d of a.map.allTables)"feature"===d.type&&d.loaded&&d.isTable&&"feature-layer"===d.source?.type&&(a=d.write(),a={id:a.id,title:a.title,customParameters:a.customParameters,layerDefinition:{definitionExpression:a.layerDefinition?.definitionExpression}},B(a,d),b.push(a));return b.length?b:void 0}function qa(a,b){a.legendEnabled&&b.legendLayers.push({id:a.id});b=a.write();
b={layerType:b.layerType,customParameters:b.customParameters};B(b,a);return b}async function ra(a,b,c){if(c.is11xService&&a.serviceUrl&&a.styleUrl){const d=H.getToken(a.styleUrl,a.apiKey),f=H.getToken(a.serviceUrl,a.apiKey);if(!d&&!f||"2.1.0"!==c.cimVersion)return b={type:"VectorTileLayer"},b.styleUrl=z.normalize(a.styleUrl),b.token=d,f!==d&&(b.additionalTokens=[{url:a.serviceUrl,token:f}]),b}return A(a,b,c)}function sa(a){const b={type:"WebTiledLayer",urlTemplate:a.urlTemplate?.replace(/\${/g,"{"),
credits:a.copyright};a.subDomains&&0<a.subDomains.length&&(b.subDomains=a.subDomains);return b}function ta(a,b){let c;const d=[],f=g=>{g.visible&&(g.sublayers?g.sublayers.forEach(f):g.name&&d.unshift(g.name))};a.sublayers&&a.sublayers.forEach(f);d.length&&(a.legendEnabled&&b.legendLayers.push({id:a.id,subLayerIds:d}),c={type:"wms",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,transparentBackground:a.imageTransparency,visibleLayers:d,url:z.normalize(a.url),version:a.version});
return c}function ua(a){const b=a.activeLayer;return{type:"wmts",customLayerParameters:a.customLayerParameters,customParameters:a.customParameters,format:b.imageFormat,layer:b.id,style:b.styleId,tileMatrixSet:b.tileMatrixSetId,url:z.normalize(a.url)}}function B(a,b){b.url&&(a.url=z.normalize(a.url||b.url),a.token=H.getToken(a.url,b.apiKey))}async function G(a,b){b.canvas||(b.canvas=document.createElement("canvas"));b.canvas.width=1024;b.canvas.height=1024;b=b.canvas.getContext("2d");if(a.path){var c=
new Path2D(a.path);c.closePath();b.fillStyle=Array.isArray(a.color)?`rgba(${a.color[0]},${a.color[1]},${a.color[2]},${a.color[3]/255})`:"rgb(0,0,0)";b.fill(c);var d=u.getContextBoundingBox(b);if(!d)return null;b.clearRect(0,0,1024,1024);var f=x.pt2px(a.size)/Math.max(d.width,d.height);b.scale(f,f);var g=1024/f;b.translate(g/2-d.width/2-d.x,g/2-d.height/2-d.y);Array.isArray(a.color)&&b.fill(c);a.outline?.width&&Array.isArray(a.outline.color)&&(g=a.outline,b.lineWidth=x.pt2px(g.width)/f,b.lineJoin=
"round",b.strokeStyle=`rgba(${g.color[0]},${g.color[1]},${g.color[2]},${g.color[3]/255})`,b.stroke(c),d.width+=b.lineWidth,d.height+=b.lineWidth);d.width*=f;d.height*=f;f=b.getImageData(512-d.width/2,512-d.height/2,Math.ceil(d.width),Math.ceil(d.height));c=f.width;d=f.height;b.canvas.width=c;b.canvas.height=d;b.putImageData(f,0,0)}else f=(await L("image/svg+xml"===a.contentType?"data:image/svg+xml;base64,"+a.imageData:a.url,{responseType:"image"})).data,c=x.pt2px(a.width),d=x.pt2px(a.height),b.canvas.width=
c,b.canvas.height=d,b.drawImage(f,0,0,b.canvas.width,b.canvas.height);return{type:"esriPMS",imageData:b.canvas.toDataURL("image/png").substr(22),angle:a.angle,contentType:"image/png",height:x.px2pt(d),width:x.px2pt(c),xoffset:a.xoffset,yoffset:a.yoffset}}async function Q(a,b){const c=a.type;if("simple"===c&&F(a.symbol))a.symbol=await G(a.symbol,b);else if("uniqueValue"===c||"classBreaks"===c)if(F(a.defaultSymbol)&&(a.defaultSymbol=await G(a.defaultSymbol,b)),a=a["uniqueValue"===c?"uniqueValueInfos":
"classBreakInfos"])for(const d of a)F(d.symbol)&&(d.symbol=await G(d.symbol,b))}async function E(a){return a.queryFeatures(a.createQuery()).then(b=>b.features)}function R(a){return a.gpMetadata&&a.gpMetadata.executionType?va.fromJSON(a.gpMetadata.executionType):"sync"}function F(a){return a&&(a.path||"image/svg+xml"===a.contentType||a.url&&a.url.endsWith(".svg"))}const P={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},O=new M.JSONMap({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",
esriMiles:"Miles"}),va=new M.JSONMap({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),D=new Map;y.execute=async function(a,b,c){const d=I(a);let f=D.get(d);return Promise.resolve().then(()=>{if(f)return{data:f.gpMetadata};f={gpServerUrl:d,is11xService:!1,legendLayerNameMap:{},legendLayers:[]};return L(d,{query:{f:"json"}})}).then(g=>{f.gpMetadata=g.data;f.cimVersion=f.gpMetadata.cimVersion;f.is11xService=!!f.cimVersion;D.set(d,f);return N(b,f)}).then(g=>{const e=R(f);let q;
const h=l=>"sync"===e?l.results&&l.results[0]&&l.results[0].value:q.fetchResultData("Output_File",null,c).then(n=>n.value);return"async"===e?Y.submitJob(a,g,void 0,c).then(l=>{q=l;return l.waitForJobCompletion({interval:b.updateDelay}).then(h)}):X.execute(a,g,void 0,c).then(h)})};y.getGpPrintParams=N;y.getGpServerUrl=I;y.getMode=async function(a){a=I(a);a=D.get(a);return R(a)};y.printCacheMap=D;Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});