/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as t}from"./maybe.js";import{b as n,h as e,n as s,s as o,e as r,g as h,a,m as l,c as u,d as c}from"./vec3.js";import{f,b as p,c as O}from"./vec3f32.js";import{n as i}from"./DoubleArray.js";import{n as I,a as w,j as M}from"./DefaultBufferWriter.js";import{g,a as A}from"./Indices.js";import{c as N,f as m,h as P}from"./plane.js";import{w as y}from"./ray.js";import{A as S}from"./Attribute.js";import{C as T}from"./Material.js";import{a as L}from"./Util2.js";import{V as R}from"./VertexAttribute.js";var b;!function(t){t.length=function(t,n){const e=t[n],s=t[n+1],o=t[n+2];return Math.sqrt(e*e+s*s+o*o)},t.normalize=function(t,n){const e=t[n],s=t[n+1],o=t[n+2],r=1/Math.sqrt(e*e+s*s+o*o);t[n]*=r,t[n+1]*=r,t[n+2]*=r},t.scale=function(t,n,e){t[n]*=e,t[n+1]*=e,t[n+2]*=e},t.add=function(t,n,e,s,o,r=n){(o=o||t)[r]=t[n]+e[s],o[r+1]=t[n+1]+e[s+1],o[r+2]=t[n+2]+e[s+2]},t.subtract=function(t,n,e,s,o,r=n){(o=o||t)[r]=t[n]-e[s],o[r+1]=t[n+1]-e[s+1],o[r+2]=t[n+2]-e[s+2]}}(b||(b={}));const d=b,j=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],U=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],V=[0,0,1,0,1,1,0,1],v=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],x=new Array(36);for(let t=0;t<6;t++)for(let n=0;n<6;n++)x[6*t+n]=t;const C=new Array(36);for(let t=0;t<6;t++)C[6*t]=0,C[6*t+1]=1,C[6*t+2]=2,C[6*t+3]=2,C[6*t+4]=3,C[6*t+5]=0;function F(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(24);for(let t=0;t<8;t++)e[3*t]=j[t][0]*n[0],e[3*t+1]=j[t][1]*n[1],e[3*t+2]=j[t][2]*n[2];return new w(t,[[R.POSITION,new S(e,3,!0)],[R.NORMAL,new S(U,3)],[R.UV0,new S(V,2)]],[[R.POSITION,v],[R.NORMAL,x],[R.UV0,C]])}const q=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],G=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],E=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],z=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function D(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(18);for(let t=0;t<6;t++)e[3*t]=q[t][0]*n[0],e[3*t+1]=q[t][1]*n[1],e[3*t+2]=q[t][2]*n[2];return new w(t,[[R.POSITION,new S(e,3,!0)],[R.NORMAL,new S(G,3)]],[[R.POSITION,E],[R.NORMAL,z]])}const X=f(-.5,0,-.5),k=f(.5,0,-.5),B=f(0,0,.5),W=f(0,.5,0),Z=p(),H=p(),J=p(),K=p(),Q=p();n(Z,X,W),n(H,X,k),e(J,Z,H),s(J,J),n(Z,k,W),n(H,k,B),e(K,Z,H),s(K,K),n(Z,B,W),n(H,B,X),e(Q,Z,H),s(Q,Q);const Y=[X,k,B,W],$=[0,-1,0,J[0],J[1],J[2],K[0],K[1],K[2],Q[0],Q[1],Q[2]],_=[0,1,2,3,1,0,3,2,1,3,0,2],tt=[0,0,0,1,1,1,2,2,2,3,3,3];function nt(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(12);for(let t=0;t<4;t++)e[3*t]=Y[t][0]*n[0],e[3*t+1]=Y[t][1]*n[1],e[3*t+2]=Y[t][2]*n[2];return new w(t,[[R.POSITION,new S(e,3,!0)],[R.NORMAL,new S($,3)]],[[R.POSITION,_],[R.NORMAL,tt]])}function et(t,n,e,s,o={uv:!0}){const r=-Math.PI,h=2*Math.PI,a=-Math.PI/2,l=Math.PI,u=Math.max(3,Math.floor(e)),c=Math.max(2,Math.floor(s)),f=(u+1)*(c+1),p=I(3*f),O=I(3*f),i=I(2*f),M=[];let A=0;for(let t=0;t<=c;t++){const e=[],s=t/c,o=a+s*l,f=Math.cos(o);for(let t=0;t<=u;t++){const a=t/u,l=r+a*h,c=Math.cos(l)*f,I=Math.sin(o),w=-Math.sin(l)*f;p[3*A]=c*n,p[3*A+1]=I*n,p[3*A+2]=w*n,O[3*A]=c,O[3*A+1]=I,O[3*A+2]=w,i[2*A]=a,i[2*A+1]=s,e.push(A),++A}M.push(e)}const N=new Array;for(let t=0;t<c;t++)for(let n=0;n<u;n++){const e=M[t][n],s=M[t][n+1],o=M[t+1][n+1],r=M[t+1][n];0===t?(N.push(e),N.push(o),N.push(r)):t===c-1?(N.push(e),N.push(s),N.push(o)):(N.push(e),N.push(s),N.push(o),N.push(o),N.push(r),N.push(e))}const m=[[R.POSITION,N],[R.NORMAL,N]],P=[[R.POSITION,new S(p,3,!0)],[R.NORMAL,new S(O,3,!0)]];return o.uv&&(P.push([R.UV0,new S(i,2,!0)]),m.push([R.UV0,N])),o.offset&&(m[0][0]=R.OFFSET,P[0][0]=R.OFFSET,m.push([R.POSITION,g(N.length)]),P.push([R.POSITION,new S(Float64Array.from(o.offset),3,!0)])),new w(t,P,m)}function st(t,n,e,s){const{vertexAttributes:o,indices:r}=ot(n,e,s);return new w(t,o,r)}function ot(t,n,e){const s=t;let o,r;if(e)o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const t=s*(1+Math.sqrt(5))/2;o=[-s,t,0,s,t,0,-s,-t,0,s,-t,0,0,-s,t,0,s,t,0,-s,-t,0,s,-t,t,0,-s,t,0,s,-t,0,-s,-t,0,s],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let n=0;n<o.length;n+=3)d.scale(o,n,t/d.length(o,n));let h={};function a(n,e){n>e&&([n,e]=[e,n]);const s=n.toString()+"."+e.toString();if(h[s])return h[s];let r=o.length;return o.length+=3,d.add(o,3*n,o,3*e,o,r),d.scale(o,r,t/d.length(o,r)),r/=3,h[s]=r,r}for(let t=0;t<n;t++){const t=r.length,n=new Array(4*t);for(let e=0;e<t;e+=3){const t=r[e],s=r[e+1],o=r[e+2],h=a(t,s),l=a(s,o),u=a(o,t),c=4*e;n[c]=t,n[c+1]=h,n[c+2]=u,n[c+3]=s,n[c+4]=l,n[c+5]=h,n[c+6]=o,n[c+7]=u,n[c+8]=l,n[c+9]=h,n[c+10]=l,n[c+11]=u}r=n,h={}}const l=M(o);for(let t=0;t<l.length;t+=3)d.normalize(l,t);const u=[[R.POSITION,r],[R.NORMAL,r]];return{vertexAttributes:[[R.POSITION,new S(M(o),3,!0)],[R.NORMAL,new S(l,3,!0)]],indices:u}}function rt(n,e,s,o,r,h,a,l,u=null){const c=s?[s[0],s[1],s[2]]:[0,0,0],f=e?[e[0],e[1],e[2]]:[0,0,1];a=a||[0,0];const p=o?[255*o[0],255*o[1],255*o[2],o.length>3?255*o[3]:255]:[255,255,255,255],O=t(r)&&2===r.length?r:[1,1],i=[[R.POSITION,new S(c,3,!0)],[R.NORMAL,new S(f,3,!0)],[R.UV0,new S(a,a.length)],[R.COLOR,new S(p,4,!0)],[R.SIZE,new S(O,2)]];if(null!=h){const t=[h[0],h[1],h[2],h[3]];i.push([R.AUXPOS1,new S(t,4)])}if(null!=l){const t=[l[0],l[1],l[2],l[3]];i.push([R.AUXPOS2,new S(t,4)])}return new w(n,i,null,null,T.Point,u)}const ht=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function at(t,n=ht){const e=new Array(12);for(let t=0;t<4;t++)for(let s=0;s<3;s++)e[3*t+s]=n[t][s];const s=[0,1,2,2,3,0],o=[0,0,0,0,0,0],r=[[R.POSITION,s],[R.NORMAL,o],[R.UV0,s],[R.COLOR,o]],h=[[R.POSITION,new S(e,3,!0)],[R.NORMAL,new S([0,0,1],3,!0)],[R.UV0,new S([0,0,1,0,1,1,0,1],2,!0)],[R.COLOR,new S([255,255,255,255],4,!0)]];return new w(t,h,r)}function lt(t,n,e,s,o,r=!0,h=!0){let a=0;const l=e,u=n;let c=f(0,a,0),p=f(0,a+u,0),O=f(0,-1,0),i=f(0,1,0);o&&(a=u,p=f(0,0,0),c=f(0,a,0),O=f(0,1,0),i=f(0,-1,0));const M=[p,c],g=[O,i],A=s+2,N=Math.sqrt(u*u+l*l);if(o)for(let t=s-1;t>=0;t--){const n=t*(2*Math.PI/s),e=f(Math.cos(n)*l,a,Math.sin(n)*l);M.push(e);const o=f(u*Math.cos(n)/N,-l/N,u*Math.sin(n)/N);g.push(o)}else for(let t=0;t<s;t++){const n=t*(2*Math.PI/s),e=f(Math.cos(n)*l,a,Math.sin(n)*l);M.push(e);const o=f(u*Math.cos(n)/N,l/N,u*Math.sin(n)/N);g.push(o)}const m=new Array,P=new Array;if(r){for(let t=3;t<M.length;t++)m.push(1),m.push(t-1),m.push(t),P.push(0),P.push(0),P.push(0);m.push(M.length-1),m.push(2),m.push(1),P.push(0),P.push(0),P.push(0)}if(h){for(let t=3;t<M.length;t++)m.push(t),m.push(t-1),m.push(0),P.push(t),P.push(t-1),P.push(1);m.push(0),m.push(2),m.push(M.length-1),P.push(1),P.push(2),P.push(g.length-1)}const y=I(3*A);for(let t=0;t<A;t++)y[3*t]=M[t][0],y[3*t+1]=M[t][1],y[3*t+2]=M[t][2];const T=I(3*A);for(let t=0;t<A;t++)T[3*t]=g[t][0],T[3*t+1]=g[t][1],T[3*t+2]=g[t][2];const L=[[R.POSITION,m],[R.NORMAL,P]],b=[[R.POSITION,new S(y,3,!0)],[R.NORMAL,new S(T,3,!0)]];return new w(t,b,L)}function ut(t,n,r,u,c,i,M){const g=c?O(c):f(1,0,0),A=i?O(i):f(0,0,0);M??(M=!0);const N=p();s(N,g);const m=p();h(m,N,Math.abs(n));const P=p();h(P,m,-.5),a(P,P,A);const y=f(0,1,0);Math.abs(1-l(N,y))<.2&&o(y,0,0,1);const T=p();e(T,N,y),s(T,T),e(y,T,N);const L=2*u+(M?2:0),b=u+(M?2:0),d=I(3*L),j=I(3*b),U=I(2*L),V=new Array(3*u*(M?4:2)),v=new Array(3*u*(M?4:2));M&&(d[3*(L-2)]=P[0],d[3*(L-2)+1]=P[1],d[3*(L-2)+2]=P[2],U[2*(L-2)]=0,U[2*(L-2)+1]=0,d[3*(L-1)]=d[3*(L-2)]+m[0],d[3*(L-1)+1]=d[3*(L-2)+1]+m[1],d[3*(L-1)+2]=d[3*(L-2)+2]+m[2],U[2*(L-1)]=1,U[2*(L-1)+1]=1,j[3*(b-2)]=-N[0],j[3*(b-2)+1]=-N[1],j[3*(b-2)+2]=-N[2],j[3*(b-1)]=N[0],j[3*(b-1)+1]=N[1],j[3*(b-1)+2]=N[2]);const x=(t,n,e)=>{V[t]=n,v[t]=e};let C=0;const F=p(),q=p();for(let t=0;t<u;t++){const n=t*(2*Math.PI/u);h(F,y,Math.sin(n)),h(q,T,Math.cos(n)),a(F,F,q),j[3*t]=F[0],j[3*t+1]=F[1],j[3*t+2]=F[2],h(F,F,r),a(F,F,P),d[3*t]=F[0],d[3*t+1]=F[1],d[3*t+2]=F[2],U[2*t]=t/u,U[2*t+1]=0,d[3*(t+u)]=d[3*t]+m[0],d[3*(t+u)+1]=d[3*t+1]+m[1],d[3*(t+u)+2]=d[3*t+2]+m[2],U[2*(t+u)]=t/u,U[2*t+1]=1;const e=(t+1)%u;x(C++,t,t),x(C++,t+u,t),x(C++,e,e),x(C++,e,e),x(C++,t+u,t),x(C++,e+u,e)}if(M){for(let t=0;t<u;t++){const n=(t+1)%u;x(C++,L-2,b-2),x(C++,t,b-2),x(C++,n,b-2)}for(let t=0;t<u;t++){const n=(t+1)%u;x(C++,t+u,b-1),x(C++,L-1,b-1),x(C++,n+u,b-1)}}const G=[[R.POSITION,V],[R.NORMAL,v],[R.UV0,V]],E=[[R.POSITION,new S(d,3,!0)],[R.NORMAL,new S(j,3,!0)],[R.UV0,new S(U,2,!0)]];return new w(t,E,G)}function ct(t,n,e,s,o,r){s=s||10,o=null==o||o,L(n.length>1);const h=[],a=[];for(let t=0;t<s;t++){h.push([0,-t-1,-(t+1)%s-1]);const n=t/s*2*Math.PI;a.push([Math.cos(n)*e,Math.sin(n)*e])}return ft(t,a,n,[[0,0,0]],h,o,r)}function ft(t,r,l,O,i,M,g=f(0,0,0)){const A=r.length,T=I(l.length*A*3+(6*O.length||0)),L=I(l.length*A*3+(O?6:0)),b=new Array,d=new Array;let j=0,U=0;const V=p(),v=p(),x=p(),C=p(),F=p(),q=p(),G=p(),E=c(),z=p(),D=p(),X=p(),k=p(),B=p(),W=N();o(z,0,1,0),n(v,l[1],l[0]),s(v,v),M?(a(E,l[0],g),s(x,E)):o(x,0,0,1),Mt(v,x,z,z,F,x,gt),u(C,x),u(k,F);for(let t=0;t<O.length;t++)h(q,F,O[t][0]),h(E,x,O[t][2]),a(q,q,E),a(q,q,l[0]),T[j++]=q[0],T[j++]=q[1],T[j++]=q[2];L[U++]=-v[0],L[U++]=-v[1],L[U++]=-v[2];for(let t=0;t<i.length;t++)b.push(i[t][0]>0?i[t][0]:-i[t][0]-1+O.length),b.push(i[t][1]>0?i[t][1]:-i[t][1]-1+O.length),b.push(i[t][2]>0?i[t][2]:-i[t][2]-1+O.length),d.push(0),d.push(0),d.push(0);let Z=O.length;const H=O.length-1;for(let t=0;t<l.length;t++){let o=!1;t>0&&(u(V,v),t<l.length-1?(n(v,l[t+1],l[t]),s(v,v)):o=!0,a(D,V,v),s(D,D),a(X,l[t-1],C),m(l[t],D,W),P(W,y(X,V),E)?(n(E,E,l[t]),s(x,E),e(F,D,x),s(F,F)):Mt(D,C,k,z,F,x,gt),u(C,x),u(k,F)),M&&(a(E,l[t],g),s(B,E));for(let n=0;n<A;n++)if(h(q,F,r[n][0]),h(E,x,r[n][1]),a(q,q,E),s(G,q),L[U++]=G[0],L[U++]=G[1],L[U++]=G[2],a(q,q,l[t]),T[j++]=q[0],T[j++]=q[1],T[j++]=q[2],!o){const t=(n+1)%A;b.push(Z+n),b.push(Z+A+n),b.push(Z+t),b.push(Z+t),b.push(Z+A+n),b.push(Z+A+t);for(let t=0;t<6;t++){const n=b.length-6;d.push(b[n+t]-H)}}Z+=A}const J=l[l.length-1];for(let t=0;t<O.length;t++)h(q,F,O[t][0]),h(E,x,O[t][1]),a(q,q,E),a(q,q,J),T[j++]=q[0],T[j++]=q[1],T[j++]=q[2];const K=U/3;L[U++]=v[0],L[U++]=v[1],L[U++]=v[2];const Q=Z-A;for(let t=0;t<i.length;t++)b.push(i[t][0]>=0?Z+i[t][0]:-i[t][0]-1+Q),b.push(i[t][2]>=0?Z+i[t][2]:-i[t][2]-1+Q),b.push(i[t][1]>=0?Z+i[t][1]:-i[t][1]-1+Q),d.push(K),d.push(K),d.push(K);const Y=[[R.POSITION,b],[R.NORMAL,d]],$=[[R.POSITION,new S(T,3,!0)],[R.NORMAL,new S(L,3,!0)]];return new w(t,$,Y)}function pt(t,n,e,s){L(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),L(3===n[0].length,"createPolylineGeometry(): malformed vertex"),L(null==e||e.length===n.length,"createPolylineGeometry: need same number of points and normals"),L(null==e||3===e[0].length,"createPolylineGeometry(): malformed normal");const o=i(3*n.length),r=new Array(2*(n.length-1));let h=0,a=0;for(let t=0;t<n.length;t++){for(let e=0;e<3;e++)o[h++]=n[t][e];t>0&&(r[a++]=t-1,r[a++]=t)}const l=[],u=[];if(l.push([R.POSITION,r]),u.push([R.POSITION,new S(o,3,!0)]),e){const t=I(3*e.length);let s=0;for(let o=0;o<n.length;o++)for(let n=0;n<3;n++)t[s++]=e[o][n];l.push([R.NORMAL,r]),u.push([R.NORMAL,new S(t,3,!0)])}return s&&(u.push([R.COLOR,new S(s,4)]),l.push([R.COLOR,A(s.length/4)])),new w(t,u,l,null,T.Line)}function Ot(t,n,e,s,o,r=0){const h=new Array(18),a=[[-e,r,o/2],[s,r,o/2],[0,n+r,o/2],[-e,r,-o/2],[s,r,-o/2],[0,n+r,-o/2]];for(let t=0;t<6;t++)h[3*t]=a[t][0],h[3*t+1]=a[t][1],h[3*t+2]=a[t][2];return new w(t,[[R.POSITION,new S(h,3,!0)]],[[R.POSITION,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]]])}function it(t,n){const e=t.getMutableAttribute(R.POSITION).data;for(let t=0;t<e.length;t+=3){const s=e[t],h=e[t+1],a=e[t+2];o(At,s,h,a),r(At,At,n),e[t]=At[0],e[t+1]=At[1],e[t+2]=At[2]}}function It(t,n=t){const e=t.vertexAttributes,s=e.get(R.POSITION).data,o=e.get(R.NORMAL).data;if(o){const t=n.getMutableAttribute(R.NORMAL).data;for(let n=0;n<o.length;n+=3){const e=o[n+1];t[n+1]=-o[n+2],t[n+2]=e}}if(s){const t=n.getMutableAttribute(R.POSITION).data;for(let n=0;n<s.length;n+=3){const e=s[n+1];t[n+1]=-s[n+2],t[n+2]=e}}}function wt(t,n,o,r,h){return!(Math.abs(l(n,t))>h||(e(o,t,n),s(o,o),e(r,o,t),s(r,r),0))}function Mt(t,n,e,s,o,r,h){return wt(t,n,o,r,h)||wt(t,e,o,r,h)||wt(t,s,o,r,h)}const gt=.99619469809,At=p();export{et as a,rt as b,pt as c,at as d,lt as e,ft as f,ot as g,It as h,D as i,nt as j,ut as k,F as l,st as m,Mt as n,Ot as o,ct as p,it as t};
