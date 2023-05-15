/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{N as t,o as e}from"./typedArrayUtil.js";import{a as i,i as s,e as n}from"./maybe.js";import{I as r,b as o}from"./mat4f64.js";import{d as a,f,k as u,A as l,H as h,s as c,a as d,g as m,J as g,e as p}from"./vec3.js";import{a as A,c as b}from"./Indices.js";import{O as _,R as I,S as y}from"./basicInterfaces.js";import{P as E}from"../core/scheduling.js";import{a as P}from"./Util2.js";import{a as v,C as O}from"./Material.js";import{b as x}from"./triangle.js";import{g as L}from"./watch.js";import{V as M}from"./VertexAttribute.js";import{e as T}from"./doublePrecisionUtils.js";import{e as B,f as w}from"./enums3.js";import{k as S,l as N}from"./mat4.js";import{b as z,c as k,d as R,B as F}from"./BufferView.js";class j{constructor(t){this.channel=t,this.id=L()}}function C(t,e){return i(t)&&(t=[]),t.push(e),t}function q(t,e){if(i(t))return null;const s=t.filter((t=>t!==e));return 0===s.length?null:s}function K(t,e,i,s,n){U[0]=t.get(e,0),U[1]=t.get(e,1),U[2]=t.get(e,2),T(U,V,3),i.set(n,0,V[0]),s.set(n,0,V[1]),i.set(n,1,V[2]),s.set(n,1,V[3]),i.set(n,2,V[4]),s.set(n,2,V[5])}const U=a(),V=new Float32Array(6);function D(e,i=!1){return e<=t?i?new Array(e).fill(0):new Array(e):new Float32Array(e)}function Y(i){return(e(i)?i.length:i.byteLength/8)<=t?Array.from(i):new Float32Array(i)}function $(t,e,i){return Array.isArray(t)?t.slice(e,e+i):t.subarray(e,e+i)}function H(i){if(i.length<t)return Array.from(i);if(e(i))return Float64Array.from(i);switch(i.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(i);case 2:return Uint16Array.from(i);case 4:return Float32Array.from(i);default:return Float64Array.from(i)}}class W{constructor(t,e,i,s){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.indices=i,this.position=s,this._children=void 0,P(t.length>=1),P(i.length%this._numIndexPerPrimitive==0),P(i.length>=t.length*this._numIndexPerPrimitive),P(3===s.size||4===s.size);const{data:n,size:r}=s,o=t.length;let h=r*i[this._numIndexPerPrimitive*t[0]];G.clear(),G.push(h);const c=f(n[h],n[h+1],n[h+2]),d=u(c);for(let e=0;e<o;++e){const s=this._numIndexPerPrimitive*t[e];for(let t=0;t<this._numIndexPerPrimitive;++t){h=r*i[s+t],G.push(h);let e=n[h];c[0]=Math.min(e,c[0]),d[0]=Math.max(e,d[0]),e=n[h+1],c[1]=Math.min(e,c[1]),d[1]=Math.max(e,d[1]),e=n[h+2],c[2]=Math.min(e,c[2]),d[2]=Math.max(e,d[2])}}this.bbMin=c,this.bbMax=d;const m=l(a(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-c[0],d[1]-c[1]),d[2]-c[2]);let g=this.radius*this.radius;for(let t=0;t<G.length;++t){h=G.getItemAt(t);const e=n[h]-m[0],i=n[h+1]-m[1],s=n[h+2]-m[2],r=e*e+i*i+s*s;if(r<=g)continue;const o=Math.sqrt(r),a=.5*(o-this.radius);this.radius=this.radius+a,g=this.radius*this.radius;const f=a/o;m[0]+=e*f,m[1]+=i*f,m[2]+=s*f}this.center=m,G.clear()}getChildren(){if(this._children||h(this.bbMin,this.bbMax)<=1)return this._children;const t=l(a(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,i=new Uint8Array(e),s=new Array(8);for(let t=0;t<8;++t)s[t]=0;const{data:n,size:r}=this.position;for(let o=0;o<e;++o){let e=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[o];let f=r*this.indices[a],u=n[f],l=n[f+1],h=n[f+2];for(let t=1;t<this._numIndexPerPrimitive;++t){f=r*this.indices[a+t];const e=n[f],i=n[f+1],s=n[f+2];e<u&&(u=e),i<l&&(l=i),s<h&&(h=s)}u<t[0]&&(e|=1),l<t[1]&&(e|=2),h<t[2]&&(e|=4),i[o]=e,++s[e]}let o=0;for(let t=0;t<8;++t)s[t]>0&&++o;if(o<2)return;const f=new Array(8);for(let t=0;t<8;++t)f[t]=s[t]>0?new Uint32Array(s[t]):void 0;for(let t=0;t<8;++t)s[t]=0;for(let t=0;t<e;++t){const e=i[t];f[e][s[e]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)void 0!==f[t]&&this._children.push(new W(f[t],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){G.prune()}}const G=new E({deallocator:null}),Q=a(),J=a(),X=a(),Z=a();class tt extends v{constructor(t,e,i=[],s=null,n=O.Mesh,r=null,o=-1){super(),this.material=t,this.mapPositions=s,this.type=n,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,i]of e)i&&this._vertexAttributes.set(t,{...i});if(null==i||0===i.length){const t=function(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}(this._vertexAttributes),e=A(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const t of this._vertexAttributes.keys())this._indices.set(t,e)}else for(const[t,e]of i)e&&(this._indices.set(t,b(e)),t===M.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(t).length:this.edgeIndicesLength))}instantiate(t={}){const e=new tt(t.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((t,i)=>{t.exclusive=!1,e._vertexAttributes.set(i,t)})),this._indices.forEach(((t,i)=>e._indices.set(i,t))),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){let e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:H(e.data)},this._vertexAttributes.set(t,e)),e}setAttributeData(t,e){const i=this._vertexAttributes.get(t);i&&this._vertexAttributes.set(t,{...i,exclusive:!0,data:e})}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return i(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===O.Mesh?this._computeAttachmentOriginTriangles(t):this.type===O.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(s(this._transformation)&&p(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const e=this.indices.get(M.POSITION);return function(t,e,i){if(!t||!e)return!1;const{size:s,data:n}=t;c(i,0,0,0),c(Z,0,0,0);let r=0,o=0;for(let t=0;t<e.length-2;t+=3){const a=e[t]*s,f=e[t+1]*s,u=e[t+2]*s;c(Q,n[a],n[a+1],n[a+2]),c(J,n[f],n[f+1],n[f+2]),c(X,n[u],n[u+1],n[u+2]);const l=x(Q,J,X);l?(d(Q,Q,J),d(Q,Q,X),m(Q,Q,1/3*l),d(i,i,Q),r+=l):(d(Z,Z,Q),d(Z,Z,J),d(Z,Z,X),o+=3)}return!(0===o&&0===r||(0!==r?(m(i,i,1/r),0):0===o||(m(i,Z,1/o),0)))}(this.vertexAttributes.get(M.POSITION),e,t)}_computeAttachmentOriginLines(t){const e=this.vertexAttributes.get(M.POSITION),i=this.indices.get(M.POSITION);return function(t,e,i,s){if(!t)return!1;c(s,0,0,0),c(Z,0,0,0);let n=0,r=0;const{size:o,data:a}=t,f=e?e.length-1:a.length/o-1,u=f+(i?2:0);for(let t=0;t<u;t+=2){const i=t<f?t:f,u=t<f?t+1:0,l=(e?e[i]:i)*o,h=(e?e[u]:u)*o;Q[0]=a[l],Q[1]=a[l+1],Q[2]=a[l+2],J[0]=a[h],J[1]=a[h+1],J[2]=a[h+2],m(Q,d(Q,Q,J),.5);const c=g(Q,J);c>0?(d(s,s,m(Q,Q,c)),n+=c):0===n&&(d(Z,Z,Q),r++)}return 0!==n?(m(s,s,1/n),!0):0!==r&&(m(s,Z,1/r),!0)}(e,i,i&&function(t,e,i){return!(!("isClosed"in t)||!t.isClosed)&&(i?i.length>2:e.data.length>6)}(this.material.parameters,e,i),t)}_computeAttachmentOriginPoints(t){const e=this.indices.get(M.POSITION);return function(t,e,i){if(!t||!e)return!1;const{size:s,data:n}=t;c(i,0,0,0);let r=-1,o=0;for(let t=0;t<e.length;t++){const a=e[t]*s;r!==a&&(i[0]+=n[a],i[1]+=n[a+1],i[2]+=n[a+2],o++),r=a}return o>1&&m(i,i,1/o),o>0}(this.vertexAttributes.get(M.POSITION),e,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.indices.get(M.POSITION),e=this.vertexAttributes.get(M.POSITION);if(!t||0===t.length||!e)return null;const i=this.type===O.Mesh?3:1;P(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const s=A(t.length/i);return new W(s,i,t,e)}get transformation(){return n(this._transformation,r)}set transformation(t){this._transformation=t&&t!==r?o(t):null}get shaderTransformation(){return s(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(t){this._shaderTransformer=t}get hasVolatileTransformation(){return s(this._shaderTransformer)}addHighlight(){const t=new j(_.Highlight);return this.highlights=C(this.highlights,t),t}removeHighlight(t){this.highlights=q(this.highlights,t)}}class et{constructor(t){this._material=t.material,this._techniqueRepository=t.techniqueRep,this._output=t.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(t,e){return this._technique=this._techniqueRepository.releaseAndAcquire(t,this._material.getConfiguration(this._output,e),this._technique),this._technique}ensureResources(t){return I.LOADED}}const it={func:B.LESS},st={func:B.ALWAYS},nt={mask:255},rt={mask:0},ot=t=>({function:{func:B.NOTEQUAL,ref:t,mask:t},operation:{fail:w.KEEP,zFail:w.KEEP,zPass:w.KEEP}}),at=t=>({function:{func:B.ALWAYS,ref:t,mask:t},operation:{fail:w.KEEP,zFail:w.KEEP,zPass:w.REPLACE}}),ft={function:{func:B.ALWAYS,ref:y.OutlineVisualElementMask,mask:y.OutlineVisualElementMask},operation:{fail:w.KEEP,zFail:w.KEEP,zPass:w.ZERO}},ut={function:{func:B.ALWAYS,ref:y.OutlineVisualElementMask,mask:y.OutlineVisualElementMask},operation:{fail:w.KEEP,zFail:w.KEEP,zPass:w.REPLACE}},lt={function:{func:B.EQUAL,ref:y.OutlineVisualElementMask,mask:y.OutlineVisualElementMask},operation:{fail:w.KEEP,zFail:w.KEEP,zPass:w.KEEP}},ht={function:{func:B.NOTEQUAL,ref:y.OutlineVisualElementMask,mask:y.OutlineVisualElementMask},operation:{fail:w.KEEP,zFail:w.KEEP,zPass:w.KEEP}};function ct(t,e,i,s,n=1){const r=i.typedBuffer,o=i.typedBufferStride,a=t.length;if(s*=o,1===n)for(let i=0;i<a;++i)r[s]=e[t[i]],s+=o;else for(let i=0;i<a;++i){const a=e[t[i]];for(let t=0;t<n;t++)r[s]=a,s+=o}}function dt(t,e,i,s){const n=i.typedBuffer,r=i.typedBufferStride,o=t.length;s*=r;for(let i=0;i<o;++i){const o=2*t[i];n[s]=e[o],n[s+1]=e[o+1],s+=r}}function mt(t,e,i,s,n){const r=i.typedBuffer,o=i.typedBufferStride,a=t.length;if(s*=o,null==n||1===n)for(let i=0;i<a;++i){const n=3*t[i];r[s]=e[n],r[s+1]=e[n+1],r[s+2]=e[n+2],s+=o}else for(let i=0;i<a;++i){const a=3*t[i];for(let t=0;t<n;++t)r[s]=e[a],r[s+1]=e[a+1],r[s+2]=e[a+2],s+=o}}function gt(t,e,i,s,n=1){const r=i.typedBuffer,o=i.typedBufferStride,a=t.length;if(s*=o,1===n)for(let i=0;i<a;++i){const n=4*t[i];r[s]=e[n],r[s+1]=e[n+1],r[s+2]=e[n+2],r[s+3]=e[n+3],s+=o}else for(let i=0;i<a;++i){const a=4*t[i];for(let t=0;t<n;++t)r[s]=e[a],r[s+1]=e[a+1],r[s+2]=e[a+2],r[s+3]=e[a+3],s+=o}}function pt(t,e,i){const s=t.typedBuffer,n=t.typedBufferStride;e*=n;for(let t=0;t<i;++t)s[e]=0,s[e+1]=0,s[e+2]=0,s[e+3]=0,e+=n}function At(t,e,i,s,n,r=1){if(!i)return void mt(t,e,s,n,r);const o=s.typedBuffer,a=s.typedBufferStride,f=t.length,u=i[0],l=i[1],h=i[2],c=i[4],d=i[5],m=i[6],g=i[8],p=i[9],A=i[10],b=i[12],_=i[13],I=i[14];n*=a;let y=0,E=0,P=0;const v=S(i)?t=>{y=e[t]+b,E=e[t+1]+_,P=e[t+2]+I}:t=>{const i=e[t],s=e[t+1],n=e[t+2];y=u*i+c*s+g*n+b,E=l*i+d*s+p*n+_,P=h*i+m*s+A*n+I};if(1===r)for(let e=0;e<f;++e)v(3*t[e]),o[n]=y,o[n+1]=E,o[n+2]=P,n+=a;else for(let e=0;e<f;++e){v(3*t[e]);for(let t=0;t<r;++t)o[n]=y,o[n+1]=E,o[n+2]=P,n+=a}}function bt(t,e,i,s,n,r=1){if(!i)return void mt(t,e,s,n,r);const o=i,a=s.typedBuffer,f=s.typedBufferStride,u=t.length,l=o[0],h=o[1],c=o[2],d=o[4],m=o[5],g=o[6],p=o[8],A=o[9],b=o[10],_=!N(o),I=1e-6,y=.999999;n*=f;let E=0,P=0,v=0;const O=S(o)?t=>{E=e[t],P=e[t+1],v=e[t+2]}:t=>{const i=e[t],s=e[t+1],n=e[t+2];E=l*i+d*s+p*n,P=h*i+m*s+A*n,v=c*i+g*s+b*n};if(1===r)if(_)for(let e=0;e<u;++e){O(3*t[e]);const i=E*E+P*P+v*v;if(i<y&&i>I){const t=1/Math.sqrt(i);a[n]=E*t,a[n+1]=P*t,a[n+2]=v*t}else a[n]=E,a[n+1]=P,a[n+2]=v;n+=f}else for(let e=0;e<u;++e)O(3*t[e]),a[n]=E,a[n+1]=P,a[n+2]=v,n+=f;else for(let e=0;e<u;++e){if(O(3*t[e]),_){const t=E*E+P*P+v*v;if(t<y&&t>I){const e=1/Math.sqrt(t);E*=e,P*=e,v*=e}}for(let t=0;t<r;++t)a[n]=E,a[n+1]=P,a[n+2]=v,n+=f}}function _t(t,e,i,s,n,r=1){if(!i)return void gt(t,e,s,n,r);const o=i,a=s.typedBuffer,f=s.typedBufferStride,u=t.length,l=o[0],h=o[1],c=o[2],d=o[4],m=o[5],g=o[6],p=o[8],A=o[9],b=o[10],_=!N(o),I=1e-6,y=.999999;if(n*=f,1===r)for(let i=0;i<u;++i){const s=4*t[i],r=e[s],o=e[s+1],u=e[s+2],E=e[s+3];let P=l*r+d*o+p*u,v=h*r+m*o+A*u,O=c*r+g*o+b*u;if(_){const t=P*P+v*v+O*O;if(t<y&&t>I){const e=1/Math.sqrt(t);P*=e,v*=e,O*=e}}a[n]=P,a[n+1]=v,a[n+2]=O,a[n+3]=E,n+=f}else for(let i=0;i<u;++i){const s=4*t[i],o=e[s],u=e[s+1],E=e[s+2],P=e[s+3];let v=l*o+d*u+p*E,O=h*o+m*u+A*E,x=c*o+g*u+b*E;if(_){const t=v*v+O*O+x*x;if(t<y&&t>I){const e=1/Math.sqrt(t);v*=e,O*=e,x*=e}}for(let t=0;t<r;++t)a[n]=v,a[n+1]=O,a[n+2]=x,a[n+3]=P,n+=f}}function It(t,e,i,s,n,r=1){const o=s.typedBuffer,a=s.typedBufferStride,f=t.length;if(n*=a,i!==e.length||4!==i)if(1!==r)if(4!==i)for(let i=0;i<f;++i){const s=3*t[i];for(let t=0;t<r;++t)o[n]=e[s],o[n+1]=e[s+1],o[n+2]=e[s+2],o[n+3]=255,n+=a}else for(let i=0;i<f;++i){const s=4*t[i];for(let t=0;t<r;++t)o[n]=e[s],o[n+1]=e[s+1],o[n+2]=e[s+2],o[n+3]=e[s+3],n+=a}else{if(4===i){for(let i=0;i<f;++i){const s=4*t[i];o[n]=e[s],o[n+1]=e[s+1],o[n+2]=e[s+2],o[n+3]=e[s+3],n+=a}return}for(let i=0;i<f;++i){const s=3*t[i];o[n]=e[s],o[n+1]=e[s+1],o[n+2]=e[s+2],o[n+3]=255,n+=a}}else{o[n]=e[0],o[n+1]=e[1],o[n+2]=e[2],o[n+3]=e[3];const t=new Uint32Array(s.typedBuffer.buffer,s.start),i=a/4,u=t[n/=4];n+=i;const l=f*r;for(let e=1;e<l;++e)t[n]=u,n+=i}}function yt(t,e,i,s,n=1){const r=e.typedBuffer,o=e.typedBufferStride;if(s*=o,1===n)for(let e=0;e<i;++e)r[s]=t[0],r[s+1]=t[1],r[s+2]=t[2],r[s+3]=t[3],s+=o;else for(let e=0;e<i;++e)for(let e=0;e<n;++e)r[s]=t[0],r[s+1]=t[1],r[s+2]=t[2],r[s+3]=t[3],s+=o}function Et(t,e,i,n,r,o){for(const a of e.fieldNames){const e=t.vertexAttributes.get(a),f=t.indices.get(a);if(e&&f)switch(a){case M.POSITION:{P(3===e.size);const t=r.getField(a,F);P(!!t,`No buffer view for ${a}`),t&&At(f,e.data,i,t,o);break}case M.NORMAL:{P(3===e.size);const t=r.getField(a,F);P(!!t,`No buffer view for ${a}`),t&&bt(f,e.data,n,t,o);break}case M.UV0:{P(2===e.size);const t=r.getField(a,R);P(!!t,`No buffer view for ${a}`),t&&dt(f,e.data,t,o);break}case M.COLOR:case M.SYMBOLCOLOR:{P(3===e.size||4===e.size);const t=r.getField(a,k);P(!!t,`No buffer view for ${a}`),t&&It(f,e.data,e.size,t,o);break}case M.TANGENT:{P(4===e.size);const t=r.getField(a,z);P(!!t,`No buffer view for ${a}`),t&&_t(f,e.data,n,t,o);break}case M.PROFILERIGHT:case M.PROFILEUP:case M.PROFILEVERTEXANDNORMAL:case M.FEATUREVALUE:{P(4===e.size);const t=r.getField(a,z);P(!!t,`No buffer view for ${a}`),t&&gt(f,e.data,t,o)}}else if(a===M.OBJECTANDLAYERIDCOLOR&&s(t.objectAndLayerIdColor)){const e=t.indices.get(M.POSITION);if(P(!!e,`No buffer view for ${a}`),e){const i=e.length,s=r.getField(a,k);yt(t.objectAndLayerIdColor,s,i,o)}}}}class Pt{constructor(t){this.vertexBufferLayout=t}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return t.indices.get(M.POSITION).length}write(t,e,i,s,n){Et(i,this.vertexBufferLayout,t,e,s,n)}}export{W as B,Pt as D,et as G,j as O,tt as a,C as b,ut as c,ft as d,st as e,ht as f,rt as g,lt as h,it as i,Y as j,At as k,bt as l,It as m,D as n,gt as o,pt as p,yt as q,q as r,nt as s,ot as t,at as u,K as v,Et as w,$ as x,ct as y};