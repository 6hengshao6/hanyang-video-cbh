/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"../../geometry.js";import t from"../../core/Error.js";import{w as e,f as s,c as n}from"../../chunks/unitUtils.js";import{t as i,s as r,W as o}from"../../chunks/geodesicConstants.js";import a from"../Polyline.js";import c from"../Polygon.js";import p from"../Point.js";import h from"../SpatialReference.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../core/lang.js";import"../../chunks/string.js";import"../Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"./webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/typeUtils.js";import"./jsonUtils.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/vec4.js";function u(t){if(!t)return null;if(n(t)&&t.wkid){const e=r[t.wkid];if(e)return e}if(t.wkt){const e=function(t){const e=o.exec(t);if(!e||2!==e.length)return null;const s=e[1].split(",");if(!s||s.length<3)return null;const n=parseFloat(s[1]),i=parseFloat(s[2]);return isNaN(n)||isNaN(i)?null:{a:n,f:0===i?0:1/i}}(t.wkt);if(e)return e}return null}function l(t){const e=u(t??h.WGS84);if(function(t){return null!=t&&"b"in t&&"eSq"in t&&"radius"in t}(e))return e;const s=e.a*(1-e.f);return Object.assign(e,{b:s,eSq:1-(s/e.a)**2,radius:(2*e.a+s)/3,densificationRatio:1e4/((2*e.a+s)/3)})}function m(t){return null!=t&&t<0?t+360:t}function f(t,e,s){const{a:n,eSq:r}=l(s),o=Math.sqrt(r),a=Math.sin(e[1]*i),c=n*e[0]*i;let p;return p=r>0?n*((1-r)*(a/(1-r*(a*a))-1/(2*o)*Math.log((1-o*a)/(1+o*a))))*.5:n*a,t[0]=c,t[1]=p,t}function d(t){return null!==u(t)}function g(s,n="square-meters"){if(s.some((t=>!d(t.spatialReference))))throw new t("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const i=[];for(let t=0;t<s.length;t++){const e=s[t],n=e.spatialReference,{radius:r,densificationRatio:o}=l(n),a=r*o;i.push(M(e,a))}const r=[],o=[0,0],a=[0,0];for(let t=0;t<i.length;t++){const{rings:s,spatialReference:c}=i[t];let p=0;for(let t=0;t<s.length;t++){const e=s[t];f(o,e[0],c),f(a,e[e.length-1],c);let n=a[0]*o[1]-o[0]*a[1];for(let t=0;t<e.length-1;t++)f(o,e[t+1],c),f(a,e[t],c),n+=a[0]*o[1]-o[0]*a[1];p+=n}p=e(p,"square-meters",n),r.push(p/-2)}return r}function j(s,n="meters"){if(!s)throw new t("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(s.some((t=>!d(t.spatialReference))))throw new t("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const i=[];for(let t=0;t<s.length;t++){const r=s[t],{spatialReference:o}=r,a="polyline"===r.type?r.paths:r.rings;let c=0;for(let t=0;t<a.length;t++){const e=a[t];let s=0;for(let t=1;t<e.length;t++){const n=e[t-1][0],i=e[t][0],r=e[t-1][1],a=e[t][1];if(r!==a||n!==i){const t=new w;k(t,[n,r],[i,a],o),s+=t.distance}}c+=s}c=e(c,"meters",n),i.push(c)}return i}function M(e,s){if("polyline"!==e.type&&"polygon"!==e.type)throw new t("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:n}=e;if(!d(n))throw new t("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const i="polyline"===e.type?e.paths:e.rings,r=[],o=[0,0],p=new w;for(const t of i){const e=[];r.push(e),e.push([t[0][0],t[0][1]]);let i,a,c=t[0][0],h=t[0][1];for(let r=0;r<t.length-1;r++){if(i=t[r+1][0],a=t[r+1][1],c===i&&h===a)continue;const u=[c,h];k(p,[c,h],[i,a],n);const{azimuth:l,distance:m}=p,f=m/s;if(f>1){for(let t=1;t<=f-1;t++)y(o,u,l,t*s,n),e.push(o.slice(0));y(o,u,l,(m+Math.floor(f-1)*s)/2,n),e.push(o.slice(0))}y(o,u,l,m,n),e.push(o.slice(0)),c=o[0],h=o[1]}}return"polyline"===e.type?new a({paths:r,spatialReference:n}):new c({rings:r,spatialReference:n})}class w{constructor(t=0,e=undefined,s=undefined){this.distance=t,this.azimuth=e,this.reverseAzimuth=s}}function y(t,e,s,n,r){const o=e[0],a=e[1],c=o*i,p=a*i,h=(s??0)*i,{a:u,b:m,f}=l(r),d=Math.sin(h),g=Math.cos(h),j=(1-f)*Math.tan(p),M=1/Math.sqrt(1+j*j),w=j*M,y=Math.atan2(j,g),k=M*d,v=k*k,R=1-v,b=R*(u*u-m*m)/(m*m),z=1+b/16384*(4096+b*(b*(320-175*b)-768)),x=b/1024*(256+b*(b*(74-47*b)-128));let S,U,q,A,N=n/(m*z),P=2*Math.PI;for(;Math.abs(N-P)>1e-12;)q=Math.cos(2*y+N),S=Math.sin(N),U=Math.cos(N),A=x*S*(q+x/4*(U*(2*q*q-1)-x/6*q*(4*S*S-3)*(4*q*q-3))),P=N,N=n/(m*z)+A;const E=w*S-M*U*g,F=Math.atan2(w*U+M*S*g,(1-f)*Math.sqrt(v+E*E)),G=Math.atan2(S*d,M*U-w*S*g),O=f/16*R*(4+f*(4-3*R)),T=F/i,W=(c+(G-(1-O)*f*k*(N+O*S*(q+O*U*(2*q*q-1)))))/i;return t[0]=W,t[1]=T,t}function k(t,e,s,n){const r=e[0]*i,o=e[1]*i,a=s[0]*i,c=s[1]*i,{a:p,b:h,f:u,radius:m}=l(n),f=a-r,d=Math.atan((1-u)*Math.tan(o)),g=Math.atan((1-u)*Math.tan(c)),j=Math.sin(d),M=Math.cos(d),w=Math.sin(g),y=Math.cos(g);let k,v,R,b,z,x,S,U,q,A,N=1e3,P=f;do{if(S=Math.sin(P),U=Math.cos(P),R=Math.sqrt(y*S*(y*S)+(M*w-j*y*U)*(M*w-j*y*U)),0===R)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;z=j*w+M*y*U,x=Math.atan2(R,z),q=M*y*S/R,v=1-q*q,b=z-2*j*w/v,isNaN(b)&&(b=0),A=u/16*v*(4+u*(4-3*v)),k=P,P=f+(1-A)*u*q*(x+A*R*(b+A*z*(2*b*b-1)))}while(Math.abs(P-k)>1e-12&&--N>0);if(0===N){const e=m,s=Math.acos(Math.sin(o)*Math.sin(c)+Math.cos(o)*Math.cos(c)*Math.cos(a-r))*e,n=a-r,p=Math.sin(n)*Math.cos(c),h=Math.cos(o)*Math.sin(c)-Math.sin(o)*Math.cos(c)*Math.cos(n),u=Math.atan2(p,h);return t.azimuth=u/i,t.distance=s,t.reverseAzimuth=void 0,t}const E=v*(p*p-h*h)/(h*h),F=E/1024*(256+E*(E*(74-47*E)-128)),G=h*(1+E/16384*(4096+E*(E*(320-175*E)-768)))*(x-F*R*(b+F/4*(z*(2*b*b-1)-F/6*b*(4*R*R-3)*(4*b*b-3)))),O=Math.atan2(y*Math.sin(P),M*w-j*y*Math.cos(P)),T=Math.atan2(M*Math.sin(P),M*w*Math.cos(P)-j*y);return t.azimuth=O/i,t.distance=G,t.reverseAzimuth=T/i,t}function v(n,i,r="meters"){if(!n||!i)throw new t("geodesic-distance:missing-parameters","one or both input parameters are missing");if(!n.spatialReference||!i.spatialReference)throw new t("geodesic-distance:invalid-parameters","one or both input points do not have a spatial reference");if(!s(n.spatialReference,i.spatialReference))throw new t("geodesic-distance:invalid-parameters","spatial references of input parameters do not match");const{spatialReference:o}=n;if(!d(o))throw new t("geodesic-distance:not-supported","input geometry spatial reference is not supported");if(n.x===i.x&&n.y===i.y)return new w(0,0,0);const a=new w;return k(a,[n.x,n.y],[i.x,i.y],o),a.distance=e(a.distance,"meters",r),a.azimuth=m(a.azimuth),a.reverseAzimuth=m(a.reverseAzimuth),a}function R(e,s,n){if(!e||null==s||null==n)throw new t("point-from-distance:missing-parameters","one or more input parameters are missing or undefined");if(n<0||n>360)throw new t("point-from-distance:-of-bounds","azimuth is restricted to angles between, and including, 0° to 360° degrees");if(!e.spatialReference)throw new t("point-from-distance:missing-spatial-reference","the input point must have a spatial reference");const{spatialReference:i}=e;if(!d(i))throw new t("geodesic-distance:not-supported","input geometry spatial reference is not supported");const r=[0,0];return y(r,[e.x,e.y],n,s,i),new p({x:r[0],y:r[1],spatialReference:i})}export{w as InverseGeodeticSolverResult,y as directGeodeticSolver,g as geodesicAreas,M as geodesicDensify,v as geodesicDistance,j as geodesicLengths,k as inverseGeodeticSolver,d as isSupported,R as pointFromDistance};
