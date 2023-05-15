/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{r as t}from"./mathUtils.js";import{c as n}from"./aaBoundingRect.js";import{e}from"./extentUtils.js";import{b as s}from"../geometry/Polygon.js";function i(t,n,e,i){if(null==i||t.hasZ||(i=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=i&&(t.z+=i),t;if("multipoint"===t.type){const s=t.points;for(let t=0;t<s.length;t++)s[t]=l(s[t],n,e,i);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=i&&(t.zmin??(t.zmin=0),t.zmin+=i,t.zmax??(t.zmax=0),t.zmax+=i),t;const o=s(t),r="polyline"===t.type?t.paths:t.rings;for(let t=0;t<o.length;t++){const s=o[t];for(let t=0;t<s.length;t++)s[t]=l(s[t],n,e,i)}return"paths"in t?t.paths=r:t.rings=r,t}function o(t,n,e,o,r){const a=t.clone(),m=o.resolution;if("point"===a.type){if(r)i(a,n*m,-e*m);else{const t=o.state.transform,s=o.state.inverseTransform,i=t[0]*a.x+t[2]*a.y+t[4],r=t[1]*a.x+t[3]*a.y+t[5];a.x=s[0]*(i+n)+s[2]*(r+e)+s[4],a.y=s[1]*(i+n)+s[3]*(r+e)+s[5]}return a}if("multipoint"===a.type){if(r)i(a,n*m,-e*m);else{const t=a.points,s=o.state.transform,i=o.state.inverseTransform;for(let o=0;o<t.length;o++){const r=t[o],a=s[0]*r[0]+s[2]*r[1]+s[4],m=s[1]*r[0]+s[3]*r[1]+s[5],l=i[0]*(a+n)+i[2]*(m+e)+i[4],y=i[1]*(a+n)+i[3]*(m+e)+i[5];t[o]=x(r,l,y,void 0)}}return a}if("extent"===a.type){if(r)i(a,n*m,-e*m);else{const t=o.state.transform,s=o.state.inverseTransform,i=t[0]*a.xmin+t[2]*a.ymin+t[4],r=t[1]*a.xmin+t[3]*a.ymin+t[5],m=t[0]*a.xmax+t[2]*a.ymax+t[4],l=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=s[0]*(i+n)+s[2]*(r+e)+s[4],a.ymin=s[1]*(i+n)+s[3]*(r+e)+s[5],a.xmax=s[0]*(m+n)+s[2]*(l+e)+s[4],a.ymax=s[1]*(m+n)+s[3]*(l+e)+s[5]}return a}if(r)i(a,n*m,-e*m);else{const t=s(a),i="polyline"===a.type?a.paths:a.rings,r=o.state.transform,m=o.state.inverseTransform;for(let s=0;s<t.length;s++){const i=t[s];for(let t=0;t<i.length;t++){const s=i[t],o=r[0]*s[0]+r[2]*s[1]+r[4],a=r[1]*s[0]+r[3]*s[1]+r[5],l=m[0]*(o+n)+m[2]*(a+e)+m[4],y=m[1]*(o+n)+m[3]*(a+e)+m[5];i[t]=x(s,l,y,void 0)}}"paths"in a?a.paths=i:a.rings=i}return a}function r(t,i,o,r){if("point"===t.type){const{x:n,y:e}=t,s=r?r[0]:n,a=r?r[1]:e,m=t.clone(),l=(n-s)*i+s,x=(e-a)*o+a;return m.x=l,m.y=x,m}if("multipoint"===t.type){const a=s(t),m=n(),[l,y,f,p]=e(m,[a]),c=r?r[0]:(l+f)/2,u=r?r[1]:(p+y)/2,h=t.clone(),g=h.points;for(let t=0;t<g.length;t++){const n=g[t],[e,s]=n,r=(e-c)*i+c,a=(s-u)*o+u;g[t]=x(n,r,a,void 0)}return h}if("extent"===t.type){const{xmin:n,xmax:e,ymin:s,ymax:a}=t,m=r?r[0]:(n+e)/2,l=r?r[1]:(a+s)/2,x=t.clone();if(x.xmin=(n-m)*i+m,x.ymax=(a-l)*o+l,x.xmax=(e-m)*i+m,x.ymin=(s-l)*o+l,x.xmin>x.xmax){const t=x.xmin,n=x.xmax;x.xmin=n,x.xmax=t}if(x.ymin>x.ymax){const t=x.ymin,n=x.ymax;x.ymin=n,x.ymax=t}return x}const a=s(t),m=n(),[l,y,f,p]=e(m,a),c=r?r[0]:(l+f)/2,u=r?r[1]:(p+y)/2,h=t.clone(),g="polyline"===h.type?h.paths:h.rings;for(let t=0;t<a.length;t++){const n=a[t];for(let e=0;e<n.length;e++){const s=n[e],[r,a]=s,m=(r-c)*i+c,l=(a-u)*o+u;g[t][e]=x(s,m,l,void 0)}}return"paths"in h?h.paths=g:h.rings=g,h}function a(t,n,e,s,i,o){const r=Math.sqrt((e-t)*(e-t)+(s-n)*(s-n));return Math.sqrt((i-t)*(i-t)+(o-n)*(o-n))/r}function m(n,e,s,i=!1){const o=Math.atan2(e.y-s.y,e.x-s.x)-Math.atan2(n.y-s.y,n.x-s.x),r=Math.atan2(Math.sin(o),Math.cos(o));return i?r:t(r)}function l(t,n,e,s){return x(t,t[0]+n,t[1]+e,null!=t[2]&&null!=s?t[2]+s:void 0)}function x(t,n,e,s){const i=[n,e];return t.length>2&&i.push(null!=s?s:t[2]),t.length>3&&i.push(t[3]),i}export{a,o as c,m as g,i as m,r as s};