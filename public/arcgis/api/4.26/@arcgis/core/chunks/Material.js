/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as e,a as t}from"./maybe.js";import{s as i,h as r,n as a,d as s,f as n}from"./vec3.js";import{N as c}from"./interfaces2.js";import{M as l}from"../core/scheduling.js";import{g as o}from"./watch.js";import{V as u}from"./VertexAttribute.js";import{x as d}from"./typedArrayUtil.js";import{l as h,d as p,c as m}from"./mathUtils.js";import{c as f,h as O,j as v}from"./aaBoundingBox.js";import{V as g}from"./ViewingMode.js";import{a as x}from"./Util2.js";class _{constructor(){this.id=o()}unload(){}}var P;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(P||(P={}));class M{constructor(){this.enabled=!0,this._time=l(0)}get time(){return this._time}advance({deltaTime:t,fixedTime:i}){return e(i)?this._time!==i&&(this._time=i,!0):(this._time=l(this._time+t),0!==t)}}class A{constructor(e,t){this.deltaTime=e,this.fixedTime=t}}const b=new Map([[u.POSITION,0],[u.NORMAL,1],[u.UV0,2],[u.COLOR,3],[u.SIZE,4],[u.TANGENT,4],[u.AUXPOS1,5],[u.SYMBOLCOLOR,5],[u.AUXPOS2,6],[u.FEATUREATTRIBUTE,6],[u.INSTANCEFEATUREATTRIBUTE,6],[u.INSTANCECOLOR,7],[u.OBJECTANDLAYERIDCOLOR,7],[u.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[u.MODEL,8],[u.MODELNORMAL,12],[u.MODELORIGINHI,11],[u.MODELORIGINLO,15]]);function T(e,t){return new y(e,R,t)}function C(e,t){const{curvatureDependent:i,scaleStart:r,scaleFallOffRange:a}=R;return new y(e,{curvatureDependent:{min:{curvature:i.min.curvature,tiltAngle:i.min.tiltAngle,scaleFallOffFactor:E.curvatureDependent.min.scaleFallOffFactor},max:{curvature:i.max.curvature,tiltAngle:i.max.tiltAngle,scaleFallOffFactor:E.curvatureDependent.max.scaleFallOffFactor}},scaleStart:r,scaleFallOffRange:a,minPixelSize:E.minPixelSize},t)}function F(e,t,i){const r=i.parameters,a=i.paddingPixelsOverride;return N.scale=Math.min(r.divisor/(t-r.offset),1),N.factor=function(e){return Math.abs(e*e*e)}(e),N.minPixelSize=r.minPixelSize,N.paddingPixels=a,N}function L(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function S(e,t){return Math.max(h(e*t.scale,e,t.factor),L(e,t))}function D(e,t,i,r){r.scale=function(e,t,i){const r=F(e,t,i);return r.minPixelSize=0,r.paddingPixels=0,S(1,r)}(e,t,i),r.factor=0,r.minPixelSize=i.parameters.minPixelSize,r.paddingPixels=i.paddingPixelsOverride}function I(e,t,i=[0,0]){const r=Math.min(Math.max(t.scale,L(e[1],t)/Math.max(1e-5,e[1])),1);return i[0]=e[0]*r,i[1]=e[1]*r,i}class y{get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}constructor(e,t,i,r={camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0},a){this._viewingMode=e,this._description=t,this._ellipsoidRadius=i,this.parameters=r,this._paddingPixelsOverride=a,this._viewingMode===g.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(e){return!(this.parameters&&this.parameters.camera.fovY===e.fovY&&this.parameters.camera.distance===e.distance||(this._calculateParameters(e,this._ellipsoidRadius,this.parameters),0))}overridePadding(e){return e!==this.paddingPixelsOverride?new y(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,i){const{scaleStart:r,scaleFallOffRange:a,minPixelSize:s}=this._description,{fovY:n,distance:c}=e,l=this._calculateCurvatureDependentParameters(e,t),o=this._coverageCompensation(e,t,l),{tiltAngle:u,scaleFallOffFactor:d}=l,h=Math.sin(u)*c,p=.5*Math.PI-u-n*(.5-r*o),m=h/Math.cos(p),f=p+n*a*o,O=(m-d*(h/Math.cos(f)))/(1-d);return i.camera.fovY=e.fovY,i.camera.distance=e.distance,i.offset=O,i.divisor=m-O,i.minPixelSize=s,i}_calculateCurvatureDependentParametersLocal(e,t,i=j){return i.tiltAngle=this._description.curvatureDependent.min.tiltAngle,i.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,i}_calculateCurvatureDependentParametersGlobal(e,t,i=j){const r=this._description.curvatureDependent,a=1+e.distance/t,s=Math.sqrt(a*a-1),[n,c]=[r.min.curvature,r.max.curvature],l=m((s-n)/(c-n),0,1),[o,u]=[r.min,r.max];return i.tiltAngle=h(o.tiltAngle,u.tiltAngle,l),i.scaleFallOffFactor=h(o.scaleFallOffFactor,u.scaleFallOffFactor,l),i}_surfaceCoverageCompensationLocal(e,t,i){return(e.fovY-i.tiltAngle)/e.fovY}_surfaceCoverageCompensationGlobal(e,t,i){const r=t*t,a=i.tiltAngle+.5*Math.PI,{fovY:s,distance:n}=e,c=n*n+r-2*Math.cos(a)*n*t,l=Math.sqrt(c),o=Math.sqrt(c-r);return(Math.acos(o/l)-Math.asin(t/(l/Math.sin(a)))+.5*s)/s}}const R={curvatureDependent:{min:{curvature:p(10),tiltAngle:p(12),scaleFallOffFactor:.5},max:{curvature:p(70),tiltAngle:p(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},E={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14},N={scale:0,factor:0,minPixelSize:0,paddingPixels:0},j={tiltAngle:0,scaleFallOffFactor:0},z=f();function V(e,t,i,r,a,s){if(e.visible)if(e.boundingInfo){x(e.type===P.Mesh);const n=t.tolerance;Y(e.boundingInfo,i,r,n,a,s)}else{const t=e.indices.get(u.POSITION),n=e.vertexAttributes.get(u.POSITION);B(i,r,0,t.length/3,t,n,void 0,a,s)}}const U=s();function Y(i,r,a,s,n,c){if(t(i))return;const l=k(r,a,U);if(O(z,i.bbMin),v(z,i.bbMax),e(n)&&n.applyToAabb(z),H(z,r,l,s)){const{primitiveIndices:e,indices:t,position:l}=i,o=e?e.length:t.length/3;if(o>ee){const e=i.getChildren();if(void 0!==e){for(const t of e)Y(t,r,a,s,n,c);return}}B(r,a,0,o,t,l,e,n,c)}}const w=s();function B(t,i,r,a,s,n,c,l,o){if(c)return function(t,i,r,a,s,n,c,l,o){const{data:u,stride:d}=n,h=t[0],p=t[1],m=t[2],f=i[0]-h,O=i[1]-p,v=i[2]-m;for(let t=r;t<a;++t){const i=c[t];let r=3*i,a=d*s[r++],n=u[a++],g=u[a++],x=u[a];a=d*s[r++];let _=u[a++],P=u[a++],M=u[a];a=d*s[r];let A=u[a++],b=u[a++],T=u[a];e(l)&&([n,g,x]=l.applyToVertex(n,g,x,t),[_,P,M]=l.applyToVertex(_,P,M,t),[A,b,T]=l.applyToVertex(A,b,T,t));const C=_-n,F=P-g,L=M-x,S=A-n,D=b-g,I=T-x,y=O*I-D*v,R=v*S-I*f,E=f*D-S*O,N=C*y+F*R+L*E;if(Math.abs(N)<=Number.EPSILON)continue;const j=h-n,z=p-g,V=m-x,U=j*y+z*R+V*E;if(N>0){if(U<0||U>N)continue}else if(U>0||U<N)continue;const Y=z*L-F*V,B=V*C-L*j,G=j*F-C*z,q=f*Y+O*B+v*G;if(N>0){if(q<0||U+q>N)continue}else if(q>0||U+q<N)continue;const k=(S*Y+D*B+I*G)/N;k>=0&&o(k,W(C,F,L,S,D,I,w),i,!1)}}(t,i,r,a,s,n,c,l,o);const{data:u,stride:d}=n,h=t[0],p=t[1],m=t[2],f=i[0]-h,O=i[1]-p,v=i[2]-m;for(let t=r,i=3*r;t<a;++t){let r=d*s[i++],a=u[r++],n=u[r++],c=u[r];r=d*s[i++];let g=u[r++],x=u[r++],_=u[r];r=d*s[i++];let P=u[r++],M=u[r++],A=u[r];e(l)&&([a,n,c]=l.applyToVertex(a,n,c,t),[g,x,_]=l.applyToVertex(g,x,_,t),[P,M,A]=l.applyToVertex(P,M,A,t));const b=g-a,T=x-n,C=_-c,F=P-a,L=M-n,S=A-c,D=O*S-L*v,I=v*F-S*f,y=f*L-F*O,R=b*D+T*I+C*y;if(Math.abs(R)<=Number.EPSILON)continue;const E=h-a,N=p-n,j=m-c,z=E*D+N*I+j*y;if(R>0){if(z<0||z>R)continue}else if(z>0||z<R)continue;const V=N*C-T*j,U=j*b-C*E,Y=E*T-b*N,B=f*V+O*U+v*Y;if(R>0){if(B<0||z+B>R)continue}else if(B>0||z+B<R)continue;const G=(F*V+L*U+S*Y)/R;G>=0&&o(G,W(b,T,C,F,L,S,w),t,!1)}}const G=s(),q=s();function W(e,t,s,n,c,l,o){return i(G,e,t,s),i(q,n,c,l),r(o,G,q),a(o,o),o}function k(e,t,r){return i(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function H(e,t,i,r){return J(e,t,i,r,1/0)}function J(e,t,i,r,a){const s=(e[0]-r-t[0])*i[0],n=(e[3]+r-t[0])*i[0];let c=Math.min(s,n),l=Math.max(s,n);const o=(e[1]-r-t[1])*i[1],u=(e[4]+r-t[1])*i[1];if(l=Math.min(l,Math.max(o,u)),l<0)return!1;if(c=Math.max(c,Math.min(o,u)),c>l)return!1;const d=(e[2]-r-t[2])*i[2],h=(e[5]+r-t[2])*i[2];return l=Math.min(l,Math.max(d,h)),!(l<0)&&(c=Math.max(c,Math.min(d,h)),!(c>l)&&c<a)}function X(t,i,r,a,s){let n=(r.screenLength||0)*t.pixelRatio;e(s)&&(n=function(e,t,i,r){return S(e,F(t,i,r))}(n,a,i,s));const c=n*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return m(c*i,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function Z(e,t){const i=t?Z(t):{};for(const t in e){let r=e[t];r&&r.forEach&&(r=Q(r)),null==r&&t in i||(i[t]=r)}return i}function K(e,t){let i=!1;for(const r in t){const a=t[r];void 0!==a&&(Array.isArray(a)?null===e[r]?(e[r]=a.slice(),i=!0):d(e[r],a)&&(i=!0):e[r]!==a&&(i=!0,e[r]=a))}return i}function Q(e){const t=[];return e.forEach((e=>t.push(e))),t}const $={multiply:1,ignore:2,replace:3,tint:4},ee=1e3;class te extends _{constructor(e,t){super(),this.type=P.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=b,this._pp0=n(0,0,1),this._pp1=n(0,0,0),this._parameters=Z(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){K(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){e(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,t,i,r,a,s){return this._pp0[0]=this._pp1[0]=r[0],this._pp0[1]=this._pp1[1]=r[1],this.intersect(e,t,i,this._pp0,this._pp1,a)}}class ie extends A{constructor(e,t,i){super(t,i),this.camera=e}}var re;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(re||(re={}));class ae extends c{constructor(){super(...arguments),this.renderOccluded=re.Occlude}}export{M as A,P as C,b as D,ae as M,re as R,ie as U,_ as a,te as b,Z as c,S as d,I as e,C as f,T as g,J as h,V as i,W as j,B as k,k as l,H as m,$ as n,D as p,K as u,X as v};
