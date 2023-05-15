/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../request.js";import{c as t,e as r,h as a,p as n,s as o}from"./typedArrayUtil.js";import s from"../core/Error.js";import{i,a as l,g as c}from"./maybe.js";import{eachAlways as u}from"../core/promiseUtils.js";import{a as f}from"./mat3.js";import{c as p}from"./mat3f64.js";import{c as h}from"./mat4.js";import{c as m}from"./mat4f64.js";import{c as d,m as y,a as b}from"./quat.js";import{c as g}from"./quatf32.js";import{d as S,s as w,c as M,p as T,q as E,g as v,a as I,e as x}from"./vec3.js";import{B as R,o as j}from"./unitUtils.js";import{computeTranslationToOriginAndRotation as q,canProjectWithoutEngine as C,projectBuffer as U,projectVectorToVector as N}from"../geometry/projection.js";import z from"../geometry/SpatialReference.js";import{g as A}from"./spatialReferenceEllipsoidUtils.js";import{c as W,e as k,b as D,i as F}from"./aaBoundingRect.js";import O from"../rest/support/Query.js";import{r as _}from"./I3SBinaryReader.js";import{c as L,a as G}from"./edgeUtils.js";import{p as B,C as K}from"./symbolColorUtils.js";import{c as P,a as $,b as Q}from"./orientedBoundingBox.js";import{A as Z}from"./Attribute.js";function H(e,t,r,a){const n=X(e,t,r),o=m();return q(r,n,o,a),o}const J=1,V=5-J;function X(e,t,r){const a=S(),n=e[3],o=2**(Math.ceil(Math.log(n)*Math.LOG2E/V)*V+J);if(r.isGeographic){const t=o/R(r).radius*180/Math.PI,n=Math.round(e[1]/t),s=Math.max(-90,Math.min(90,n*t)),i=t/Math.cos((Math.abs(s)-t/2)/180*Math.PI),l=Math.round(e[0]/i)*i;a[0]=l,a[1]=s}else{const t=Math.round(e[0]/o),r=Math.round(e[1]/o);a[0]=t*o,a[1]=r*o}const s=e[2]+t,i=Math.round(s/o);return a[2]=i*o,a}function Y(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function ee(e){if(a("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers)if("draco"===e.compressedAttributes?.encoding)return!0;return!1}function te(e,t,r,a){r.traverse(t,(t=>{const r=t.mbs;return(null!=r&&ie(e,r))!==se.OUTSIDE&&(a(t),!0)}))}function re(e,t,r){let a=0,n=0;for(let o=0;o<t.length&&a<e.length;o++)e[a]===t[o]&&(r(o)&&(e[n]=e[a],n++),a++);e.length=n}function ae(e,t,r){let a=0,o=0;for(;a<r.length;)n(e,r[a])>=0===t&&(r[o]=r[a],o++),a++;r.length=o}const ne=W();function oe(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return ne[0]=(e[0]-t.position[0])/t.rotationScale[0],ne[1]=(e[1]-t.position[1])/t.rotationScale[4],ne[2]=(e[2]-t.position[0])/t.rotationScale[0],ne[3]=(e[3]-t.position[1])/t.rotationScale[4],ne}var se;function ie(e,t){const r=t[0],a=t[1],n=t[3],o=e[0]-r,s=r-e[2],i=e[1]-a,l=a-e[3],c=Math.max(o,s,0),u=Math.max(i,l,0),f=c*c+u*u;return f>n*n?se.OUTSIDE:f>0?se.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,s,i,l)>n?se.INSIDE:se.INTERSECTS_CENTER_INSIDE}function le(e,t,r){const a=[],n=r&&r.missingFields,o=r&&r.originalFields;for(const r of e){const e=r.toLowerCase();let s=!1;for(const n of t)if(e===n.name.toLowerCase()){a.push(n.name),s=!0,o&&o.push(r);break}!s&&n&&n.push(r)}return a}async function ce(e,t,r,a,n){if(0===t.length)return[];const o=e.attributeStorageInfo;if(i(e.associatedLayer))try{return await async function(e,t,r,a){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const n=t.map((e=>e.attributes[r])),o=[],s=le(a,e.fields,{originalFields:o}),i=await ue(e,n,s);for(let e=0;e<t.length;e++){const r=t[e],a=i[e],n={};if(r.attributes)for(const e in r.attributes)n[e]=r.attributes[e];for(let e=0;e<o.length;e++)n[o[e]]=a[s[e]];r.attributes=n}return t}(e.associatedLayer,t,r,a)}catch(t){if(e.associatedLayer.loaded)throw t}if(o){const i=function(e,t,r){const a=new Map,n=[],o=r();for(const r of e){const e=r.attributes[t];for(let t=0;t<o.length;t++){const s=o[t],i=s.featureIds.indexOf(e);if(i>=0){let e=a.get(s.node);e||(e={node:s.node,indices:[],graphics:[]},n.push(e),a.set(s.node,e)),e.indices.push(i),e.graphics.push(r);for(let e=t;e>0;e--)o[e]=o[e-1];o[0]=s;break}}}return n}(t,r,n);if(l(i))throw new s("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const c=e.parsedUrl.path,u=await Promise.all(i.map((e=>function(e,t,r,a,n){return fe(e,t,r.resources.attributes,a,n)}(c,o,e.node,e.indices,a).then((t=>{for(let r=0;r<e.graphics.length;r++){const a=e.graphics[r],n=t[r];if(a.attributes)for(const e in a.attributes)e in n||(n[e]=a.attributes[e]);a.attributes=n}return e.graphics})))));return u.flat()}throw new s("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function ue(e,t,r){const a=e.capabilities.query.maxRecordCount;if(null!=a&&t.length>a){const n=o(t,a);return Promise.all(n.map((t=>ue(e,t,r)))).then((e=>e.flat()))}const n=new O({objectIds:t,outFields:r,orderByFields:[e.objectIdField]});return e.queryFeatures(n).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new s("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function fe(t,r,a,n,o){const s=[];for(const e of r)if(e&&o.includes(e.name)){const r=`${t}/nodes/${a}/attributes/${e.key}/0`;s.push({url:r,storageInfo:e})}return u(s.map((t=>e(t.url,{responseType:"array-buffer"}).then((e=>_(t.storageInfo,e.data)))))).then((e=>{const t=[];for(const r of n){const a={};for(let t=0;t<e.length;t++){const n=e[t].value;null!=n&&(a[s[t].storageInfo.name]=me(n,r))}t.push(a)}return t}))}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(se||(se={}));const pe=-32768,he=-(2**31);function me(e,a){if(!e)return null;const n=e[a];return t(e)?n===pe?null:n:r(e)?n===he?null:n:n!=n?null:n}function de(e){const t=e.store,r=t.indexCRS||t.geographicCRS,a=void 0===r?t.indexWKT:void 0;if(a){if(!e.spatialReference)throw new s("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(a!==e.spatialReference.wkt)throw new s("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const n=r?new z(Y(r)):e.spatialReference;return n.equals(e.spatialReference)?e.spatialReference:n}function ye(e){const t=e.store,r=t.vertexCRS||t.projectedCRS,a=void 0===r?t.vertexWKT:void 0;if(a){if(!e.spatialReference)throw new s("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(a!==e.spatialReference.wkt)throw new s("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const n=r?new z(Y(r)):e.spatialReference;return n.equals(e.spatialReference)?e.spatialReference:n}function be(e,t){return l(t)?"@null":t===A(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function ge(e,t,r){if(!C(e,t))throw new s("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&!function(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}(e,t))throw new s("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function Se(e,t,r){if(e.serviceUpdateTimeStamp?.lastUpdate!==t.serviceUpdateTimeStamp?.lastUpdate||!r.isEmpty||c(e.associatedLayer,(e=>e.url))!==c(t.associatedLayer,(e=>e.url)))throw new s("layerview:recycle-failed")}function we(e,t,r){const a=de(e),n=ye(e);ge(a,t,r),ge(n,t,r)}function Me(e){if(null==e.store||null==e.store.defaultGeometrySchema||null!=(t=e.store.defaultGeometrySchema).geometryType&&"triangles"!==t.geometryType||null!=t.topology&&"PerAttributeArray"!==t.topology||null==t.vertexAttributes||null==t.vertexAttributes.position)throw new s("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path});var t}function Te(e,t){we(e,t.spatialReference,t.viewingMode)}function Ee(e){if(null==e.store||null==e.store.defaultGeometrySchema||null==(t=e.store.defaultGeometrySchema).geometryType||"points"!==t.geometryType||null!=t.topology&&"PerAttributeArray"!==t.topology||null!=t.encoding&&""!==t.encoding&&"lepcc-xyz"!==t.encoding||null==t.vertexAttributes||null==t.vertexAttributes.position)throw new s("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{});var t}function ve(e,t){ge(e.spatialReference,t.spatialReference,t.viewingMode)}function Ie(e){return"mesh-3d"===e.type}function xe(e){if(null==e||!function(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const e of t){if(!Ie(e)||0===e.symbolLayers.length)return!0;for(const t of e.symbolLayers.items)if("fill"!==t.type||l(t.material)||l(t.material.color)||"replace"!==t.material.colorMixMode)return!0}return!1}const Re=L({color:[0,0,0,0],opacity:0});class je{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function qe(e){const t=new je;let r=!1,a=!1;for(const n of e.symbolLayers.items)if("fill"===n.type&&n.enabled){const e=n.material,o=n.edges;if(i(e)&&!r){const a=e.color,o=B(e.colorMixMode);i(a)?t.material={color:[a.r/255,a.g/255,a.b/255],alpha:a.a,colorMixMode:o}:t.material={color:[1,1,1],alpha:1,colorMixMode:K.Multiply},t.castShadows=n.castShadows,r=!0}i(o)&&!a&&(t.edgeMaterial=G(o,{}),a=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:K.Multiply}),t}function Ce(e,t){return(0|e)+(0|t)|0}function Ue(e,t,r,a,n=0){a===A(a)?t.isGeographic?function(e,t,r,a){const n=R(r),o=1+Math.max(0,a)/(n.radius+e.center[2]);w(t.center,e.center[0],e.center[1],e.center[2]+a),U(t.center,r,0,t.center,A(r),0,1),d(t.quaternion,e.quaternion),b(Ke,e.quaternion),w(He,0,0,1),E(He,He,Ke),w(He,e.halfSize[0]*Math.abs(He[0]),e.halfSize[1]*Math.abs(He[1]),e.halfSize[2]*Math.abs(He[2])),v(He,He,n.inverseFlattening),I(t.halfSize,e.halfSize,He),v(t.halfSize,t.halfSize,o)}(e,r,t,n):function(e,t,r,a){Q(e,Pe),w(t.center,e.center[0],e.center[1],e.center[2]+a),q(r,t.center,Be,A(r)),w(t.center,Be[12],Be[13],Be[14]);const n=2*Math.sqrt(1+Be[0]+Be[5]+Be[10]);Ke[0]=(Be[6]-Be[9])/n,Ke[1]=(Be[8]-Be[2])/n,Ke[2]=(Be[1]-Be[4])/n,Ke[3]=.25*n,y(t.quaternion,Ke,e.quaternion),b(Ke,t.quaternion);let o=0,s=0,i=0;for(const e of Pe)e[2]+=a,U(e,r,0,e,A(r),0,1),T(He,e,t.center),E(He,He,Ke),o=Math.max(o,Math.abs(He[0])),s=Math.max(s,Math.abs(He[1])),i=Math.max(i,Math.abs(He[2]));w(t.halfSize,o,s,i)}(e,r,t,n):t.isWGS84&&(a.isWebMercator||j(a))?function(e,t,r,a,n){M(We,t.center),We[2]+=n;const o=A(r);U(We,e,0,We,o,0,1),De(o,t,We,r,a)}(t,e,a,r,n):t.isWebMercator&&j(a)?function(e,t,r,a,n){M(We,t.center),We[2]+=n,De(e,t,We,r,a)}(t,e,a,r,n):e===r?(r.center[2]+=n,U(r.center,t,0,r.center,a,0,1)):(w(r.center,e.center[0],e.center[1],e.center[2]+n),U(r.center,t,0,r.center,a,0,1),d(r.quaternion,e.quaternion),M(r.halfSize,e.halfSize))}const Ne=new Array(24),ze=new Z(Ne,3,!0),Ae=S(),We=S(),ke=p();function De(e,t,r,a,n){const o=f(ke,t.quaternion);for(let e=0;e<8;++e){for(let r=0;r<3;++r)Ae[r]=t.halfSize[r]*(0!=(e&1<<r)?-1:1);for(let t=0;t<3;++t){let a=r[t];for(let e=0;e<3;++e)a+=Ae[e]*o[3*e+t];Ne[3*e+t]=a}}U(Ne,e,0,Ne,a,0,8),$(ze,n)}function Fe(e,t,r,a,n,o){if(!o||0===o.length||l(t)||!e.mbs)return null;const s=H(e.mbs,n,r,t);h(Ve,s);let c=null,u=1/0,f=-1/0;if(o.forEach((o=>(o=>{if("replace"!==o.type)return;const s=o.geometry;if(!s?.hasZ)return;k($e);const l=s.spatialReference||a,p=s.rings.reduce(((e,r)=>r.reduce(((e,r)=>(N(r,l,He,t),x(He,He,Ve),D($e,He),Math.min(He[2],e))),e)),1/0);(()=>{if(!c)if(c=Pe,k(Qe),i(e.serviceObb)){Ue(e.serviceObb,r,Ze,t,n),Q(Ze,c);for(const e of c)x(e,e,Ve),D(Qe,e)}else{const a=e.mbs;if(!a)return;const o=a[3];N(a,r,He,t),x(He,He,Ve),He[2]+=n;for(let e=0;e<8;++e){const t=1&e?o:-o,r=2&e?o:-o,a=4&e?o:-o,n=c[e];M(n,[He[0]+t,He[1]+r,He[2]+a]),D(Qe,n)}}})(),F(Qe,$e)&&(u=Math.min(u,p),f=Math.max(f,p))})(o))),u===1/0)return null;for(let e=0;e<8;++e)p=Je.data,m=3*e,d=c[e],x(He,d,s),p[m]=He[0],p[m+1]=He[1],p[m+2]=He[2],m+=24,d[2]=u,x(He,d,s),p[m]=He[0],p[m+1]=He[1],p[m+2]=He[2],m+=24,d[2]=f,x(He,d,s),p[m]=He[0],p[m+1]=He[1],p[m+2]=He[2];var p,m,d;return $(Je)}function Oe(e){return i(e)&&e.halfSize[0]>=0}function _e(e){return e[3]>=0}function Le(e){i(e)&&(e.halfSize[0]=-1)}function Ge(e){i(e)&&(e[3]=-1)}const Be=m(),Ke=g(),Pe=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],$e=W(),Qe=W(),Ze=P(),He=S(),Je={data:new Array(72),size:3,exclusive:!0,stride:3},Ve=m();export{te as A,Ee as B,ve as C,Se as D,we as E,ee as F,se as M,_e as a,Me as b,ge as c,Te as d,be as e,le as f,de as g,H as h,Oe as i,Fe as j,X as k,re as l,me as m,ie as n,Ce as o,qe as p,fe as q,xe as r,oe as s,Re as t,ae as u,Ge as v,ce as w,Le as x,Ue as y,ye as z};
