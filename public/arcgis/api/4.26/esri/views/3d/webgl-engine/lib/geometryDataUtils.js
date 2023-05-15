// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/triangle"],function(t,a,u,w){const c=u.create(),q=u.create(),v=u.create(),m=u.create();t.computeAttachmentOriginLines=function(b,g,d,n){if(!b)return!1;a.set(n,0,0,0);a.set(m,0,0,0);let f=0,l=0;const {size:h,data:e}=b;b=g?g.length-1:e.length/h-1;d=b+(d?2:0);for(let r=0;r<d;r+=2){var p=r<b?r:b,k=r<b?r+1:0;p=(g?g[p]:p)*h;k=(g?g[k]:k)*h;c[0]=e[p];c[1]=e[p+1];c[2]=e[p+2];q[0]=e[k];q[1]=e[k+1];q[2]=e[k+
2];a.scale(c,a.add(c,c,q),.5);k=a.dist(c,q);0<k?(a.add(n,n,a.scale(c,c,k)),f+=k):0===f&&(a.add(m,m,c),l++)}return 0!==f?(a.scale(n,n,1/f),!0):0!==l?(a.scale(n,m,1/l),!0):!1};t.computeAttachmentOriginPoints=function(b,g,d){if(!b||!g)return!1;const {size:n,data:f}=b;a.set(d,0,0,0);b=-1;let l=0;for(let h=0;h<g.length;h++){const e=g[h]*n;b!==e&&(d[0]+=f[e],d[1]+=f[e+1],d[2]+=f[e+2],l++);b=e}1<l&&a.scale(d,d,1/l);return 0<l};t.computeAttachmentOriginTriangles=function(b,g,d){if(!b||!g)return!1;const {size:n,
data:f}=b;a.set(d,0,0,0);a.set(m,0,0,0);let l=b=0;for(let e=0;e<g.length-2;e+=3){var h=g[e]*n;const p=g[e+1]*n,k=g[e+2]*n;a.set(c,f[h],f[h+1],f[h+2]);a.set(q,f[p],f[p+1],f[p+2]);a.set(v,f[k],f[k+1],f[k+2]);(h=w.areaPoints3d(c,q,v))?(a.add(c,c,q),a.add(c,c,v),a.scale(c,c,1/3*h),a.add(d,d,c),b+=h):(a.add(m,m,c),a.add(m,m,q),a.add(m,m,v),l+=3)}return 0===l&&0===b?!1:0!==b?(a.scale(d,d,1/b),!0):0!==l?(a.scale(d,m,1/l),!0):!1};Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});