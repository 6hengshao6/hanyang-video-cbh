// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../chunks/vec3f64 ../../projection ./geographicUtils ./georeference".split(" "),function(g,n,p,h,k,q,l){const f=n.getLogger("esri.geometry.support.meshUtils.centerAt"),m=h.create(),e=h.create();g.centerAt=function(a,c,b){if(a.vertexAttributes&&a.vertexAttributes.position){var d=b?.origin??a.origin;if(p.isSome(a.transform))null!=b?.geographic&&b.geographic!==a.transform.geographic&&f.warn(`Specifying the 'geographic' parameter (${b.geographic}) different from the Mesh transform setting (${a.transform.geographic}) is not supported`),
a=a.transform,b=a.origin,a.origin=[b[0]+(c.x-d.x),b[1]+(c.y-d.y),b[2]+(c.hasZ&&d.hasZ?c.z-d.z:0)];else if(q.isGeographicMesh(a.spatialReference,b)){d=l.ungeoreference(a.vertexAttributes,d,{geographic:!0});const {position:r,normal:t,tangent:u}=l.georeference(d,c,{geographic:!0});a.vertexAttributes.position=r;a.vertexAttributes.normal=t;a.vertexAttributes.tangent=u;a.vertexAttributesChanged()}else if(k.projectPointToVector(c,m,a.spatialReference)){k.projectPointToVector(d,e,a.spatialReference)||(c=
a.origin,e[0]=c.x,e[1]=c.y,e[2]=c.z,f.error(`Failed to project specified origin (wkid:${d.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}).`));if(c=a.vertexAttributes.position)for(d=0;d<c.length;d+=3)for(b=0;3>b;b++)c[d+b]+=m[b]-e[b];a.vertexAttributesChanged()}else f.error(`Failed to project centerAt location (wkid:${c.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid})`)}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});