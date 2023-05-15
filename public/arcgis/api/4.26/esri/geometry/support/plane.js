// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../core/mathUtils ../../core/maybe ../../chunks/vec3 ../../chunks/vec3f64 ../../chunks/sphere ./vector ./vectorStacks ../../views/3d/support/mathUtils".split(" "),function(e,J,K,f,u,D,z,n,L){function A(a=r){return[a[0],a[1],a[2],a[3]]}function E(a,b){return B(b[0],b[1],b[2],b[3],a)}function B(a,b,c,d,g=A()){g[0]=a;g[1]=b;g[2]=c;g[3]=d;return g}function F(a,b,c){var d=b[0]*b[0]+b[1]*b[1]+b[2]*b[2];d=1E-5<Math.abs(d-1)&&1E-12<d?1/Math.sqrt(d):1;c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;
c[3]=-(c[0]*a[0]+c[1]*a[1]+c[2]*a[2]);return c}function G(a,b,c,d=A()){var g=c[0]-b[0],h=c[1]-b[1],l=c[2]-b[2];c=a[0]-b[0];const k=a[1]-b[1],H=a[2]-b[2];b=h*H-l*k;l=l*c-g*H;g=g*k-h*c;h=b*b+l*l+g*g;h=1E-5<Math.abs(h-1)&&1E-12<h?1/Math.sqrt(h):1;d[0]=b*h;d[1]=l*h;d[2]=g*h;d[3]=-(d[0]*a[0]+d[1]*a[1]+d[2]*a[2]);return d}function C(a,b,c,d,g){const h=a.length/3;if(3>h)return!1;f.set(v,a[3*c],a[3*c+1],a[3*c+2]);let l=d;for(var k=!1;l<h-1&&!k;)k=3*l,f.set(t,a[k],a[k+1],a[k+2]),l++,k=!f.exactEquals(v,t);
if(!k)return!1;l=Math.max(l,g);for(k=!1;l<h&&!k;)k=3*l,f.set(q,a[k],a[k+1],a[k+2]),l++,f.subtract(w,v,t),f.normalize(w,w),f.subtract(x,t,q),f.normalize(x,x),k=!f.exactEquals(v,q)&&!f.exactEquals(t,q)&&.99619469809>Math.abs(f.dot(w,x));if(!k)return 0===c&&1===d&&2===g?!1:C(a,b,0,1,2);G(v,t,q,b);return!0}function I(a,b,c){a=f.scale(n.sv3d.get(),a,f.dot(a,b));f.subtract(c,b,a);return c}function p(a,b){return f.dot(a,b)+a[3]}function y(a,b,c,d,g){const h=f.dot(a,c);if(0===h)return!1;a=-(f.dot(a,b)+a[3])/
h;d&m.CLAMP&&(a=J.clamp(a,0,1));if(!(d&m.INFINITE_MIN)&&0>a||!(d&m.INFINITE_MAX)&&1<a)return!1;f.add(g,b,f.scale(g,c,a));return!0}const v=u.create(),t=u.create(),q=u.create(),w=u.create(),x=u.create(),r=[0,0,1,0];var m;(function(a){a[a.NONE=0]="NONE";a[a.CLAMP=1]="CLAMP";a[a.INFINITE_MIN=4]="INFINITE_MIN";a[a.INFINITE_MAX=8]="INFINITE_MAX"})(m||(m={}));const M=m.INFINITE_MIN|m.INFINITE_MAX,N=m.INFINITE_MAX;e.UP=r;e.clip=function(a,b){const c=f.dot(a,b.ray.direction);a=-p(a,b.ray.origin);if(0>a&&0<=
c)return!1;if(-1E-6<c&&1E-6>c)return 0<a;if((0>a||0>c)&&!(0>a&&0>c))return!0;a/=c;0<c?a<b.c1&&(b.c1=a):a>b.c0&&(b.c0=a);return b.c0<=b.c1};e.clipInfinite=function(a,b){const c=f.dot(a,b.ray.direction);a=-p(a,b.ray.origin);if(-1E-6<c&&1E-6>c)return 0<a;a/=c;0<c?a<b.c1&&(b.c1=a):a>b.c0&&(b.c0=a);return b.c0<=b.c1};e.copy=E;e.create=A;e.distance=function(a,b){return Math.abs(p(a,b))};e.fromManyPoints=function(a,b){return C(a,b,0,1,2)};e.fromManyPointsSampleAt=C;e.fromNormalAndOffset=function(a,b,c){f.copy(c,
a);c[3]=b;return c};e.fromPoints=G;e.fromPositionAndNormal=F;e.fromValues=B;e.fromVectorsAndPoint=function(a,b,c,d){f.cross(q,b,a);return F(c,q,d)};e.intersectLine=function(a,b,c,d){c=f.subtract(n.sv3d.get(),c,b);return y(a,b,c,M,d)};e.intersectLineSegment=function(a,b,c){return y(a,b.origin,b.vector,m.NONE,c)};e.intersectLineSegmentClamp=function(a,b,c){return y(a,b.origin,b.vector,m.CLAMP,c)};e.intersectRay=function(a,b,c){return K.isSome(b)?y(a,b.origin,b.direction,N,c):!1};e.isPointInside=function(a,
b){return 0<=p(a,b)};e.isPointOutside=function(a,b){return 0>p(a,b)};e.isSphereFullyInside=function(a,b){return 0<=p(a,D.getCenter(b))-b[3]};e.isSphereFullyOutside=function(a,b){return 0>p(a,D.getCenter(b))+b[3]};e.negate=function(a,b){b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=-a[3];return b};e.normal=function(a){return a};e.projectPoint=function(a,b,c){const d=f.scale(n.sv3d.get(),a,-a[3]);b=f.subtract(n.sv3d.get(),b,d);a=I(a,b,n.sv3d.get());f.add(c,a,d);return c};e.projectPointLocal=function(a,b,c,
d){var g=n.sv3d.get(),h=n.sv3d.get();L.tangentFrame(a,g,h);b=f.subtract(n.sv3d.get(),c,b);g=z.projectPointSignedLength(g,b);h=z.projectPointSignedLength(h,b);a=z.projectPointSignedLength(a,b);return f.set(d,g,h,a)};e.projectVector=I;e.setOffsetFromPoint=function(a,b,c){b!==a&&E(a,b);a[3]=-f.dot(a,c);return a};e.signedDistance=p;e.wrap=function(a=r[0],b=r[1],c=r[2],d=r[3]){return B(a,b,c,d,n.sv4d.get())};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});