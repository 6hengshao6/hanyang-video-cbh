// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe"],function(z,C){function D(a,d,h,f,b,l,k=1){l=b?l?4:3:l?3:2;let g=h,p=h+l,r=0,u=0,e=h=0,c=0;for(let m=0,v=f-1;m<v;m++,g+=l,p+=l){f=d[g];const q=d[g+1],n=d[g+2],w=d[p],x=d[p+1],y=d[p+2];let t=f*x-w*q;e+=t;r+=(f+w)*t;u+=(q+x)*t;b&&(t=f*y-w*n,h+=(n+y)*t,c+=t);f<a[0]&&(a[0]=f);f>a[1]&&(a[1]=f);q<a[2]&&(a[2]=q);q>a[3]&&(a[3]=q);b&&(n<a[4]&&(a[4]=n),n>a[5]&&(a[5]=n))}0<e*k&&(e*=-1);0<c*k&&(c*=-1);if(!e)return null;a=[r,u,.5*e];b&&(a[3]=h,a[4]=.5*c);return a}function A(a,
d,h,f,b){b=f?b?4:3:b?3:2;let l=d,k=d+b,g=0,p=0,r=0,u=0;for(let v=0,q=h-1;v<q;v++,l+=b,k+=b){var e=a[l];const n=a[l+1],w=a[l+2],x=a[k],y=a[k+1],t=a[k+2];if(f){var c=x-e;var m=y-n;const B=t-w;c=Math.sqrt(c*c+m*m+B*B)}else c=x-e,m=y-n,c=Math.sqrt(c*c+m*m);c&&(g+=c,f?(e=[e+.5*(x-e),n+.5*(y-n),w+.5*(t-w)],p+=c*e[0],r+=c*e[1],u+=c*e[2]):(e=[e+.5*(x-e),n+.5*(y-n)],p+=c*e[0],r+=c*e[1]))}return 0<g?f?[p/g,r/g,u/g]:[p/g,r/g]:0<h?f?[a[d],a[d+1],a[d+2]]:[a[d],a[d+1]]:null}z.getCentroidOptimizedGeometry=function(a,
d,h,f,b){if(C.isNone(d)||!d.lengths.length)return null;const l="upperLeft"===b?.originPosition?-1:1;a.lengths.length&&(a.lengths.length=0);a.coords.length&&(a.coords.length=0);b=a.coords;const k=[],g=h?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:p,coords:r}=d,u=h?f?4:3:f?3:2;let e=
0;for(var c of p){const m=D(g,r,e,c,h,f,l);m&&k.push(m);e+=c*u}k.sort((m,v)=>{let q=l*m[2]-l*v[2];0===q&&h&&(q=m[4]-v[4]);return q});k.length&&(c=6*k[0][2],b[0]=k[0][0]/c,b[1]=k[0][1]/c,h&&(c=6*k[0][4],b[2]=0!==c?k[0][3]/c:0),b[0]<g[0]||b[0]>g[1]||b[1]<g[2]||b[1]>g[3]||h&&(b[2]<g[4]||b[2]>g[5]))&&(b.length=0);if(!b.length)if(d=d.lengths[0]?A(r,0,p[0],h,f):null)b[0]=d[0],b[1]=d[1],h&&2<d.length&&(b[2]=d[2]);else return null;return a};z.lineCentroid=A;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});