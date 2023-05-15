// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../config ../../kernel ../../PopupTemplate ../../request ../../core/lang ../../core/urlUtils ../../geometry/SpatialReference ../../geometry/support/aaBoundingBox ../../geometry/support/boundsUtils ../../renderers/support/jsonUtils ../../rest/support/FeatureSet".split(" "),function(n,y,x,z,A,q,B,C,l,r,D,E){function v(c,d,b){b.forEach(a=>{c.set(a.attributes[d],a)})}function F(c,d){let b=void 0;d.some(a=>a.id===c?(b=a,!0):!1);return b}function w(c){const d=l.create(l.NEGATIVE_INFINITY),
b=l.create(l.NEGATIVE_INFINITY);for(const a of c){if(a.polygons&&a.polygons.featureSet&&a.polygons.featureSet.features)for(const f of a.polygons.featureSet.features)r.getBoundsXYZ(d,f.geometry),l.expandWithAABB(b,d);if(a.polylines&&a.polylines.featureSet&&a.polylines.featureSet.features)for(const f of a.polylines.featureSet.features)r.getBoundsXYZ(d,f.geometry),l.expandWithAABB(b,d);if(a.points&&a.points.featureSet&&a.points.featureSet.features)for(const f of a.points.featureSet.features)r.getBoundsXYZ(d,
f.geometry),l.expandWithAABB(b,d);if(a.mapImages)for(const f of a.mapImages)r.getBoundsXYZ(d,f.extent),l.expandWithAABB(b,d)}return l.equals(b,l.NEGATIVE_INFINITY)?void 0:{xmin:b[0],ymin:b[1],zmin:b[2],xmax:b[3],ymax:b[4],zmax:b[5],spatialReference:C.WGS84}}const G={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};n.computeExtent=w;n.fetchService=function(c,d,b,a){const f=x.id&&x.id.findCredential(c);c=B.addQueryParameters(c,{token:f&&f.token});return A(y.kmlServiceUrl,
{query:{url:c,model:"simple",folders:"",refresh:0!==b?!0:void 0,outSR:JSON.stringify(d)},responseType:"json",signal:a})};n.getGraphics=async function(c){var d=E.fromJSON(c.featureSet).features;const b=D.fromJSON(c.layerDefinition.drawingInfo.renderer);c=z.fromJSON(c.popupInfo);const a=[];for(const f of d)d=await b.getSymbolAsync(f),f.symbol=d,f.popupTemplate=c,f.visible=!0,a.push(f);return a};n.parseKML=function(c){const d=c.folders||[],b=d.slice(),a=new Map,f=new Map,p=new Map,t=new Map,u=new Map,
h={esriGeometryPoint:f,esriGeometryPolyline:p,esriGeometryPolygon:t};(c.featureCollection&&c.featureCollection.layers||[]).forEach(e=>{var g=q.clone(e);g.featureSet.features=[];const k=e.featureSet.geometryType;a.set(k,g);g=e.layerDefinition.objectIdField;"esriGeometryPoint"===k?v(f,g,e.featureSet.features):"esriGeometryPolyline"===k?v(p,g,e.featureSet.features):"esriGeometryPolygon"===k&&v(t,g,e.featureSet.features)});c.groundOverlays&&c.groundOverlays.forEach(e=>{u.set(e.id,e)});d.forEach(e=>{e.networkLinkIds.forEach(g=>
{var k=e.id;if(g=F(g,c.networkLinks))g.parentFolderId=k,g.networkLink=g;g&&b.push(g)})});b.forEach(e=>{if(e.featureInfos){e.points=q.clone(a.get("esriGeometryPoint"));e.polylines=q.clone(a.get("esriGeometryPolyline"));e.polygons=q.clone(a.get("esriGeometryPolygon"));e.mapImages=[];for(const k of e.featureInfos)switch(k.type){case "esriGeometryPoint":case "esriGeometryPolyline":case "esriGeometryPolygon":var g=h[k.type].get(k.id);g&&e[G[k.type]].featureSet.features.push(g);break;case "GroundOverlay":(g=
u.get(k.id))&&e.mapImages.push(g)}e.fullExtent=w([e])}});const m=w(b);return{folders:d,sublayers:b,extent:m}};n.sublayersFromJSON=function(c,d,b=null,a=[]){const f=[],p={},t=d.sublayers,u=d.folders.map(h=>h.id);t.forEach(h=>{const m=new c;b?m.read(h,b):m.read(h);a.length&&u.includes(m.id)&&(m.visible=a.includes(m.id));p[h.id]=m;null!=h.parentFolderId&&-1!==h.parentFolderId?(h=p[h.parentFolderId],h.sublayers||(h.sublayers=[]),h.sublayers?.unshift(m)):f.unshift(m)});return f};Object.defineProperty(n,
Symbol.toStringTag,{value:"Module"})});