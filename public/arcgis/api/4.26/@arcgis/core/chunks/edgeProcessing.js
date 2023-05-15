/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{d as t}from"./deduplicate.js";import{n as e}from"./InterleavedLayout.js";import{V as n}from"./VertexAttribute.js";import{g as o}from"./glUtil.js";import{R as s,E as r}from"./typedArrayUtil.js";import{a as i,n as c,d as a,D as l,s as f,c as u,m as g,G as m,h as N,b as d}from"./vec3.js";import{d as I,b as p}from"./mathUtils.js";const h=e().vec3f(n.POSITION).u16(n.COMPONENTINDEX).u16(n.U16PADDING),A=e().vec2u8(n.SIDENESS),O=o(A),S=e().vec3f(n.POSITION0).vec3f(n.POSITION1).u16(n.COMPONENTINDEX).u8(n.VARIANTOFFSET,{glNormalized:!0}).u8(n.VARIANTSTROKE).u8(n.VARIANTEXTENSION,{glNormalized:!0}).u8(n.U8PADDING,{glPadding:!0}).u16(n.U16PADDING,{glPadding:!0}),w=S.clone().vec3f(n.NORMAL),v=S.clone().vec3f(n.NORMALA).vec3f(n.NORMALB),E=new Map([[n.POSITION0,0],[n.POSITION1,1],[n.COMPONENTINDEX,2],[n.VARIANTOFFSET,3],[n.VARIANTSTROKE,4],[n.VARIANTEXTENSION,5],[n.NORMAL,6],[n.NORMALA,6],[n.NORMALB,7],[n.SIDENESS,8]]);function T(t,e,n){const o=e/3,s=new Uint32Array(n+1),r=new Uint32Array(n+1),i=(t,e)=>{t<e?s[t+1]++:r[e+1]++};for(let e=0;e<o;e++){const n=t[3*e],o=t[3*e+1],s=t[3*e+2];i(n,o),i(o,s),i(s,n)}let c=0,a=0;for(let t=0;t<n;t++){const e=s[t+1],n=r[t+1];s[t+1]=c,r[t+1]=a,c+=e,a+=n}const l=new Uint32Array(6*o),f=s[n],u=(t,e,n)=>{if(t<e){const o=s[t+1]++;l[2*o]=e,l[2*o+1]=n}else{const o=r[e+1]++;l[2*f+2*o]=t,l[2*f+2*o+1]=n}};for(let e=0;e<o;e++){const n=t[3*e],o=t[3*e+1],s=t[3*e+2];u(n,o,e),u(o,s,e),u(s,n,e)}const g=(t,e)=>{const n=2*t,o=e-t;for(let t=1;t<o;t++){const e=l[n+2*t],o=l[n+2*t+1];let s=t-1;for(;s>=0&&l[n+2*s]>e;s--)l[n+2*s+2]=l[n+2*s],l[n+2*s+3]=l[n+2*s+1];l[n+2*s+2]=e,l[n+2*s+3]=o}};for(let t=0;t<n;t++)g(s[t],s[t+1]),g(f+r[t],f+r[t+1]);const m=new Int32Array(3*o),N=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,d=(t,e)=>{const n=N(t,e);m[3*e+n]=-1},I=(t,e,n,o)=>{const s=N(t,e);m[3*e+s]=o;const r=N(n,o);m[3*o+r]=e};for(let t=0;t<n;t++){let e=s[t];const n=s[t+1];let o=r[t];const i=r[t+1];for(;e<n&&o<i;){const n=l[2*e],s=l[2*f+2*o];n===s?(I(t,l[2*e+1],s,l[2*f+2*o+1]),e++,o++):n<s?(d(t,l[2*e+1]),e++):(d(s,l[2*f+2*o+1]),o++)}for(;e<n;)d(t,l[2*e+1]),e++;for(;o<i;)d(l[2*f+2*o],l[2*f+2*o+1]),o++}return m}class P{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?R:L}write(t,e,n){const o=this._edgeHashFunction(n);_.seed=o;const s=_.getIntRange(0,255),r=_.getIntRange(0,this.settings.variants-1),i=_.getFloat(),c=255*(.5*function(t,e){const n=t<0?-1:1;return Math.abs(t)**1.2*n}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7))+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,s),t.variantStroke.set(e,r),t.variantExtension.set(e,c)}trim(t,e){return t.slice(0,e)}}const V=new Float32Array(6),y=new Uint32Array(V.buffer),D=new Uint32Array(1);function L(t){const e=V;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],D[0]=5381;for(let t=0;t<y.length;t++)D[0]=31*D[0]+y[t];return D[0]}function R(t){const e=V;e[0]=F(t.position0[0]),e[1]=F(t.position0[1]),e[2]=F(t.position0[2]),e[3]=F(t.position1[0]),e[4]=F(t.position1[1]),e[5]=F(t.position1[2]),D[0]=5381;for(let t=0;t<y.length;t++)D[0]=31*D[0]+y[t];return D[0]}const M=1e4;function F(t){return Math.round(t*M)/M}class U{constructor(){this._commonWriter=new P}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return w.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),i(x,n.faceNormal0,n.faceNormal1),c(x,x),t.normal.setVec(e,x)}trim(t,e){return this._commonWriter.trim(t,e)}}U.Layout=w,U.glLayout=o(w,1);class b{constructor(){this._commonWriter=new P}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return v.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)}trim(t,e){return this._commonWriter.trim(t,e)}}b.Layout=v,b.glLayout=o(v,1);const x=a(),_=new s,W=-1;var j;function C(t,e,n,o=k){const s=t.vertices.position,i=t.vertices.componentIndex,a=I(o.anglePlanar),m=I(o.angleSignificantEdge),p=Math.cos(m),h=Math.cos(a),A=H.edge,O=A.position0,S=A.position1,w=A.faceNormal0,v=A.faceNormal1,E=function(t){const e=t.faces.length/3,n=t.vertices.position,o=t.faces,s=K.v0,r=K.v1,i=K.v2,a=new Float32Array(3*e);for(let t=0;t<e;t++){const e=o[3*t],l=o[3*t+1],f=o[3*t+2];n.getVec(e,s),n.getVec(l,r),n.getVec(f,i),d(r,r,s),d(i,i,s),N(s,r,i),c(s,s),a[3*t]=s[0],a[3*t+1]=s[1],a[3*t+2]=s[2]}return a}(t),T=function(t){const e=t.faces.length/3,n=t.faces,o=t.neighbors;let s=0;for(let t=0;t<e;t++){const e=o[3*t],r=o[3*t+1],i=o[3*t+2],c=n[3*t],a=n[3*t+1],l=n[3*t+2];s+=e===W||c<a?1:0,s+=r===W||a<l?1:0,s+=i===W||l<c?1:0}const r=new Int32Array(4*s);let i=0;for(let t=0;t<e;t++){const e=o[3*t],s=o[3*t+1],c=o[3*t+2],a=n[3*t],l=n[3*t+1],f=n[3*t+2];(e===W||a<l)&&(r[i++]=a,r[i++]=l,r[i++]=t,r[i++]=e),(s===W||l<f)&&(r[i++]=l,r[i++]=f,r[i++]=t,r[i++]=s),(c===W||f<a)&&(r[i++]=f,r[i++]=a,r[i++]=t,r[i++]=c)}return r}(t),P=T.length/4,V=e.allocate(P);let y=0;const D=P,L=n.allocate(D);let R=0,M=0,F=0;const U=r(0,P),b=new Float32Array(P);b.forEach(((t,e,n)=>{s.getVec(T[4*e],O),s.getVec(T[4*e+1],S),n[e]=l(O,S)})),U.sort(((t,e)=>b[e]-b[t]));const x=new Array,_=new Array;for(let t=0;t<P;t++){const o=U[t],r=b[o],c=T[4*o],l=T[4*o+1],m=T[4*o+2],N=T[4*o+3],d=N===W;if(s.getVec(c,O),s.getVec(l,S),d)f(w,E[3*m],E[3*m+1],E[3*m+2]),u(v,w),A.componentIndex=i.get(c),A.cosAngle=g(w,v);else{if(f(w,E[3*m],E[3*m+1],E[3*m+2]),f(v,E[3*N],E[3*N+1],E[3*N+2]),A.componentIndex=i.get(c),A.cosAngle=g(w,v),B(A,h))continue;A.cosAngle<-.9999&&u(v,w)}M+=r,F++,d||X(A,p)?(e.write(V,y++,A),x.push(r)):G(A,a)&&(n.write(L,R++,A),_.push(r))}const j=new Float32Array(x.reverse()),C=new Float32Array(_.reverse());return{regular:{instancesData:e.trim(V,y),lodInfo:{lengths:j}},silhouette:{instancesData:n.trim(L,R),lodInfo:{lengths:C}},averageEdgeLength:M/F}}function X(t,e){return t.cosAngle<e}function B(t,e){return t.cosAngle>e}function G(t,e){const n=p(t.cosAngle),o=H.fwd,s=H.ortho;return m(o,t.position1,t.position0),n*(g(N(s,t.faceNormal0,t.faceNormal1),o)>0?-1:1)>e}!function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"}(j||(j={}));const H={edge:{position0:a(),position1:a(),faceNormal0:a(),faceNormal1:a(),componentIndex:0,cosAngle:0},ortho:a(),fwd:a()},K={v0:a(),v1:a(),v2:a()},k={anglePlanar:4,angleSignificantEdge:35};function z(t){const e=q(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return Q.updateSettings(t.writerSettings),Y.updateSettings(t.writerSettings),C(e,Q,Y)}function q(e,n,o,s){if(n){const t=T(o,s,e.count);return new J(o,s,t,e)}const r=t(e.buffer,e.stride/4,{originalIndices:o,originalIndicesLength:s}),i=T(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:i,vertices:h.createView(r.buffer)}}class J{constructor(t,e,n,o){this.faces=t,this.facesLength=e,this.neighbors=n,this.vertices=o}}const Q=new U,Y=new b,Z=e().vec3f(n.POSITION0).vec3f(n.POSITION1),$=e().vec3f(n.POSITION0).vec3f(n.POSITION1).u16(n.COMPONENTINDEX).u16(n.U16PADDING,{glPadding:!0});export{h as E,U as R,b as S,A as V,E as a,j as b,z as c,q as d,$ as e,C as f,O as g,Z as h};