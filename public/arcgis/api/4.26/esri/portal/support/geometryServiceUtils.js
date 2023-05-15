// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../config ../../core/Error ../Portal ../../rest/geometryService/project ../../rest/support/ProjectParameters".split(" "),function(c,g,d,l,m,n){async function h(a=null,b){if(g.geometryServiceUrl)return g.geometryServiceUrl;if(!a)throw new d("internal:geometry-service-url-not-configured");a="portal"in a?a.portal||l.getDefault():a;await a.load({signal:b});b=a.helperServices?.geometry?.url;if(!b)throw new d("internal:geometry-service-url-not-configured");return b}c.getGeometryServiceURL=
h;c.projectGeometry=async function(a,b,e=null,k){e=await h(e,k);const f=new n;f.geometries=[a];f.outSpatialReference=b;if((a=await m.project(e,f,{signal:k}))&&Array.isArray(a)&&1===a.length)return a[0];throw new d("internal:geometry-service-projection-failed");};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});