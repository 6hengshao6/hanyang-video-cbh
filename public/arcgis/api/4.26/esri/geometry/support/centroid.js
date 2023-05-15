// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../geometryCursorCollectUtils","./coordsUtils"],function(r,H,t){function B(a,g){if(!a||!a.length)return null;const b=[],e=[],c=g?[Infinity,-Infinity,Infinity,-Infinity,Infinity,-Infinity]:[Infinity,-Infinity,Infinity,-Infinity];for(let k=0,d=a.length;k<d;k++){const f=y(a[k],g,c);f&&e.push(f)}e.sort((k,d)=>{let f=k[2]-d[2];0===f&&g&&(f=k[4]-d[4]);return f});e.length&&(b[0]=e[0][0],b[1]=e[0][1],g&&(b[2]=e[0][3]),b[0]<c[0]||b[0]>c[1]||b[1]<c[2]||b[1]>c[3]||g&&(b[2]<c[4]||b[2]>c[5]))&&
(b.length=0);if(!b.length)if(a=a[0]&&a[0].length?C(a[0],g):null)b[0]=a[0],b[1]=a[1],g&&2<a.length&&(b[2]=a[2]);else return null;return b}function y(a,g,b){let e=0,c=0,k=0,d=0,f=0;const h=a.length?a[0][0]:0,l=a.length?a[0][1]:0,q=a.length&&g?a[0][2]:0;for(let x=0;x<a.length;x++){var m=a[x],n=a[(x+1)%a.length];const [u,v,w]=m;var p=u-h;const D=v-l,[I,J,K]=n,z=I-h,E=J-l,A=p*E-z*D;d+=A;e+=(p+z)*A;c+=(D+E)*A;g&&2<m.length&&2<n.length&&(m=w-q,n=K-q,p=p*n-z*m,k+=(m+n)*p,f+=p);u<b[0]&&(b[0]=u);u>b[1]&&(b[1]=
u);v<b[2]&&(b[2]=v);v>b[3]&&(b[3]=v);g&&(w<b[4]&&(b[4]=w),w>b[5]&&(b[5]=w))}0<d&&(d*=-1);0<f&&(f*=-1);if(!d)return null;d*=.5;f*=.5;a=[e/(6*d)+h,c/(6*d)+l,d];g&&(b[4]===b[5]||0===f?(a[3]=(b[4]+b[5])/2,a[4]=0):(a[3]=k/(6*f)+q,a[4]=f));return a}function C(a,g){const b=g?[0,0,0]:[0,0],e=g?[0,0,0]:[0,0];let c=0,k=0,d=0,f=0;for(let l=0,q=a.length;l<q-1;l++){var h=a[l];const m=a[l+1];if(h&&m){b[0]=h[0];b[1]=h[1];e[0]=m[0];e[1]=m[1];g&&2<h.length&&2<m.length&&(b[2]=h[2],e[2]=m[2]);const n=t.getLength(b,
e);n&&(c+=n,h=t.getMidpoint(h,m),k+=n*h[0],d+=n*h[1],g&&2<h.length&&(f+=n*h[2]))}}return 0<c?g?[k/c,d/c,f/c]:[k/c,d/c]:a.length?a[0]:null}function F(a){const {hasZ:g,numPaths:b}=a;if(0===b)return null;const e=[],c=[],k=g?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];for(a.reset();a.nextPath();){const d=
y(H.collectRing(a),a.hasZ,k);d&&c.push(d)}c.sort((d,f)=>{let h=d[2]-f[2];0===h&&g&&(h=d[4]-f[4]);return h});c.length&&(e[0]=c[0][0],e[1]=c[0][1],g&&(e[2]=c[0][3]),e[0]<k[0]||e[0]>k[1]||e[1]<k[2]||e[1]>k[3]||g&&(e[2]<k[4]||e[2]>k[5]))&&(e.length=0);if(!e.length)if(a.reset(),a.nextPath(),a=a.numPoints?G(a):null)e[0]=a[0],e[1]=a[1],g&&2<a.length&&(e[2]=a[2]);else return null;return e}function G(a){const {hasZ:g}=a,b=g?[0,0,0]:[0,0],e=g?[0,0,0]:[0,0];let c=0,k=0,d=0,f=0;if(a.nextPoint()){var h=a.x,l=
a.y;let q=a.z;for(;a.nextPoint();){const m=a.x,n=a.y,p=a.z;b[0]=h;b[1]=l;e[0]=m;e[1]=n;g&&(b[2]=q,e[2]=p);if(h=t.getLength(b,e))c+=h,l=t.getMidpoint(b,e),k+=h*l[0],d+=h*l[1],g&&2<l.length&&(f+=h*l[2]);h=m;l=n;q=p}}return 0<c?g?[k/c,d/c,f/c]:[k/c,d/c]:a.numPoints?(a.seekPathFront(),a.nextPoint(),[a.x,a.y]):null}const L=1/3;r.extentCentroid=function(a){return a?a.hasZ?[a.xmax-a.xmin/2,a.ymax-a.ymin/2,a.zmax-a.zmin/2]:[a.xmax-a.xmin/2,a.ymax-a.ymin/2]:null};r.lineCentroid=C;r.lineCentroidCursor=G;r.polygonCentroid=
function(a){return a?B(a.rings,a.hasZ??!1):null};r.ringCentroid=y;r.ringsCentroid=B;r.ringsCentroidCursor=F;r.weightedAreaCentroid=function(a){let g=0;for(a.reset();a.nextPath();)g+=t.getRingAreaCursor(a);if(1E-6>g)return(a=F(a))?[a[0],a[1]]:null;const b=[0,0];a.reset();if(!a.nextPath()||!a.nextPoint())return null;const e=[a.x,a.y];for(a.reset();a.nextPath();)a:{let h=void 0;var c=b,k=e,d=a;if(!c||!d||3>d.numPoints)break a;d.nextPoint();var f=d.x;const l=d.y;d.nextPoint();let q=d.x-f,m=d.y-l,n=0,
p=0;for(;d.nextPoint();)n=d.x-f,p=d.y-l,h=.5*L*(n*m-p*q),c[0]+=h*(q+n),c[1]+=h*(m+p),q=n,m=p;d=t.getRingAreaCursor(d);f=[f,l];f[0]-=k[0];f[1]-=k[1];f[0]*=d;f[1]*=d;c[0]+=f[0];c[1]+=f[1]}b[0]*=1/g;b[1]*=1/g;b[0]+=e[0];b[1]+=e[1];return b};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});