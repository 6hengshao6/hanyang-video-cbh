// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/mat4f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../projection ../../spatialReferenceEllipsoidUtils ../spatialReferenceUtils ../webMercatorUtils ../buffer/BufferView ../../../chunks/vec32".split(" "),function(l,F,n,G,H,y,C,p,z,A,I,f,q){function r(a,b,c,g,d,B){if(b){var D=c.count,t=z.getSphericalPCPF(d);if(E(d))for(c=0;c<D;c++)g.getVec(c,u),b.getVec(c,h),p.computeTranslationToOriginAndRotation(t,
u,v,t),n.fromMat4(e,v),a===m.FROM_PCPF&&n.transpose(e,e),y.transformMat3(h,h,e),B.setVec(c,h);else for(d=0;d<D;d++){g.getVec(d,u);b.getVec(d,h);p.computeTranslationToOriginAndRotation(t,u,v,t);n.fromMat4(e,v);var k=I.y2lat(c.get(d,1));k=Math.cos(k);a===m.TO_PCPF&&(k=1/k);e[0]*=k;e[1]*=k;e[2]*=k;e[3]*=k;e[4]*=k;e[5]*=k;a===m.FROM_PCPF&&n.transpose(e,e);y.transformMat3(h,h,e);y.normalize(h,h);B.setVec(d,h)}return B}}function w(a){return E(a)||a.isWebMercator}function E(a){return a.isWGS84||A.isCGCS2000(a)||
A.isMars(a)||A.isMoon(a)}const x=F.getLogger("esri.geometry.support.meshUtils.normalProjection");var m;(function(a){a[a.TO_PCPF=0]="TO_PCPF";a[a.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const u=C.create(),h=C.create(),v=H.create(),e=G.create();l.projectFromPCPF=function(a,b,c){p.projectBuffer(a,z.getSphericalPCPF(c),0,b,c,0,a.length/3);return b};l.projectNormalFromPCPF=function(a,b,c,g,d){if(!w(g))return x.error("Cannot convert to spatial reference from PCPF"),d;r(m.FROM_PCPF,f.BufferViewVec3f.fromTypedArray(a),
f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d));return d};l.projectNormalToPCPF=function(a,b,c,g,d){if(!w(g))return x.error("Cannot convert spatial reference to PCPF"),d;r(m.TO_PCPF,f.BufferViewVec3f.fromTypedArray(a),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d));return d};l.projectTangentFromPCPF=function(a,b,c,g,d){if(!w(g))return x.error("Cannot convert to spatial reference from PCPF"),
d;r(m.FROM_PCPF,f.BufferViewVec3f.fromTypedArray(a,16),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d,16));for(b=3;b<a.length;b+=4)d[b]=a[b];return d};l.projectTangentToPCPF=function(a,b,c,g,d){if(!w(g))return x.error("Cannot convert spatial reference to PCPF"),d;r(m.TO_PCPF,f.BufferViewVec3f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d,
4*Float32Array.BYTES_PER_ELEMENT));for(b=3;b<a.length;b+=4)d[b]=a[b];return d};l.projectToPCPF=function(a,b,c){p.projectBuffer(a,b,0,c,z.getSphericalPCPF(b),0,a.length/3);return c};l.transformNormal=function(a,b,c){n.normalFromMat4(e,c);q.transformMat3(b,a,e);n.isOrthoNormal(e)||q.normalize(b,b);return b};l.transformTangent=function(a,b,c){n.normalFromMat4(e,c);q.transformMat3(b,a,e,4);n.isOrthoNormal(e)||q.normalize(b,b,4);if(a!==b)for(c=3;c<a.length;c+=4)b[c]=a[c];return b};Object.defineProperty(l,
Symbol.toStringTag,{value:"Module"})});