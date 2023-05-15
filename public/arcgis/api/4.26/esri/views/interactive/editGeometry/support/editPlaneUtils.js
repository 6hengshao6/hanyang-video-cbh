// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/quantityUtils ../../../../chunks/vec2 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/boundedPlane ../../../../geometry/support/vectorStacks ../operations/MoveVertex ../operations/RotateVertex ../operations/ScaleVertex ../operations/UpdateVertices ../../../support/automaticLengthMeasurementUtils".split(" "),function(p,v,w,k,c,t,u,l,y,z,A,B,q){function x(a,b,e){if(a instanceof B.UpdateVertices){if(a.operation instanceof y.MoveVertex)return C(a.operation,
b,e),!0;if(a.operation instanceof z.RotateVertex)return D(a.operation,b,e),!0;if(a.operation instanceof A.ScaleVertex)return E(a.operation,b,e),!0}return!1}function C(a,b,e=!1){e=e?-1:1;a=t.fromValues(e*a.dx,e*a.dy,e*a.dz);c.add(b.origin,b.origin,a)}function D(a,b,e=!1){a=e?-a.angle:a.angle;c.rotateZ(b.basis1,b.basis1,t.ZEROS,a);c.rotateZ(b.basis2,b.basis2,t.ZEROS,a)}function E(a,b,e=!1){const h=e?1/a.factor1:a.factor1;e=e?1/a.factor2:a.factor2;c.scale(b.basis1,b.basis1,h);c.scale(b.basis2,b.basis2,
e);k.projectAndScale(b.origin,b.origin,a.origin,a.axis1,h);k.projectAndScale(b.origin,b.origin,a.origin,a.axis2,e)}p.apply=function(a,b){return x(a,b,!1)};p.calculateOrientedBounds=function(a,b,e,h){h||(h=u.create());const d=k.set(l.sv2d.get(),a[1],-a[0]),g=k.set(l.sv2d.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),f=k.set(l.sv2d.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),m=l.sv2d.get();b.components.forEach(n=>n.vertices.forEach(r=>{r=r.pos;k.set(m,k.dot(a,r),k.dot(d,r));
k.min(g,g,m);k.max(f,f,m)}));b=k.set(l.sv2d.get(),1E-6>f[0]-g[0]?e/2:0,1E-6>f[1]-g[1]?e/2:0);k.subtract(g,g,b);k.add(f,f,b);k.scale(h.basis1,a,(f[0]-g[0])/2);k.scale(h.basis2,d,(f[1]-g[1])/2);k.set(h.origin,g[0]*a[0]+g[1]*d[0],g[0]*a[1]+g[1]*d[1]);k.add(h.origin,h.origin,h.basis1);k.add(h.origin,h.origin,h.basis2);return h};p.mapPlaneAutoHorizontalSizeByElevationMode=function(a,b,e,h){const d=l.sv3d.get();c.subtract(d,c.subtract(d,a.origin,a.basis1),a.basis2);const g=l.sv3d.get();c.scaleAndAdd(g,
d,a.basis1,2);const f=l.sv3d.get();c.scaleAndAdd(f,g,a.basis2,2);const m=l.sv3d.get();c.scaleAndAdd(m,d,a.basis2,2);d[2]=g[2]=f[2]=m[2]=b;b=h?"on-the-ground":"absolute-height";a=w.max(q.autoHorizontalDistanceByElevationMode(d,g,e,b),q.autoHorizontalDistanceByElevationMode(m,f,e,b));e=w.max(q.autoHorizontalDistanceByElevationMode(g,f,e,b),q.autoHorizontalDistanceByElevationMode(d,m,e,b));return v.isNone(e)||v.isNone(a)?null:[a,e]};p.mapPlaneToRenderPlane=function(a,b,e,h=0,d){d||(d=u.create());b.toRenderCoords(a.origin,
e,d.origin);var g=l.sv3d.get();c.add(g,a.origin,a.basis1);c.add(g,g,a.basis2);b.toRenderCoords(g,e,g);var f=l.sv3d.get();c.add(f,a.origin,a.basis1);c.subtract(f,f,a.basis2);b.toRenderCoords(f,e,f);const m=l.sv3d.get();c.subtract(m,a.origin,a.basis1);c.subtract(m,m,a.basis2);b.toRenderCoords(m,e,m);const n=l.sv3d.get();c.subtract(n,a.origin,a.basis1);c.add(n,n,a.basis2);b.toRenderCoords(n,e,n);a=c.lerp(l.sv3d.get(),g,f,.5);c.subtract(a,a,d.origin);b=c.lerp(l.sv3d.get(),m,n,.5);c.subtract(b,d.origin,
b);c.lerp(d.basis1,a,b,.5);g=c.lerp(l.sv3d.get(),n,g,.5);c.subtract(g,g,d.origin);f=c.lerp(l.sv3d.get(),f,m,.5);c.subtract(f,d.origin,f);c.lerp(d.basis2,g,f,.5);f=c.cross(l.sv3d.get(),d.basis1,d.basis2);f=c.cross(f,f,d.basis1);c.normalize(f,f);c.scale(d.basis2,f,c.dot(d.basis2,f));c.scale(d.basis1,d.basis1,1+h/c.length(d.basis1));c.scale(d.basis2,d.basis2,1+h/c.length(d.basis2));u.updateUnboundedPlane(d);return d};p.unapply=function(a,b){return x(a,b,!0)};Object.defineProperty(p,Symbol.toStringTag,
{value:"Module"})});