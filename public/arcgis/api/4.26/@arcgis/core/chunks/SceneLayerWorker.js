/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as e}from"./maybe.js";import{g as t}from"./assets.js";import{N as n}from"./I3SNode.js";var r,o;function s(e){return t(`esri/libs/i3s/${e}`)}let i,a,f;function c(e){const t=e.modifications,n=f._malloc(8*t.length),r=new Float64Array(f.HEAPU8.buffer,n,t.length);for(let e=0;e<t.length;++e)r[e]=t[e];f.setModifications(e.context,n,t.length,e.isGeodetic),f._free(n)}function l(t,n){if(!f)return null;const{context:o,localOrigin:s,globalTrafo:i,mbs:a,obb:c,elevationOffset:l,geometryBuffer:u,geometryDescriptor:d,indexToVertexProjector:y,vertexToRenderProjector:m}=t,h=f._malloc(u.byteLength),E=f._malloc(33*Float64Array.BYTES_PER_ELEMENT),p=new Uint8Array(f.HEAPU8.buffer,h,u.byteLength);p.set(new Uint8Array(u));const g=new Float64Array(f.HEAPU8.buffer,E,33);b(g,s);let w=g.byteOffset+3*g.BYTES_PER_ELEMENT,_=new Float64Array(g.buffer,w);b(_,i),w+=16*g.BYTES_PER_ELEMENT,_=new Float64Array(g.buffer,w),b(_,a),w+=4*g.BYTES_PER_ELEMENT,e(c)&&(_=new Float64Array(g.buffer,w),b(_,c.center),w+=3*g.BYTES_PER_ELEMENT,_=new Float64Array(g.buffer,w),b(_,c.halfSize),w+=3*g.BYTES_PER_ELEMENT,_=new Float64Array(g.buffer,w),b(_,c.quaternion));const I=d,A={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:I.featureIndex},L=f.process(o,!!t.obb,h,p.byteLength,I,A,E,l,y,m,t.normalReferenceFrame);if(f._free(E),f._free(h),L.error.length>0)throw new Error(`i3s.wasm: ${L.error}`);if(L.discarded)return null;const P=L.componentOffsets.length>0?L.componentOffsets.slice():null,T=L.featureIds.length>0?L.featureIds.slice():null,M=L.interleavedVertedData.slice().buffer,O=L.indicesType===r.Int16?new Uint16Array(L.indices.buffer,L.indices.byteOffset,L.indices.byteLength/2).slice():new Uint32Array(L.indices.buffer,L.indices.byteOffset,L.indices.byteLength/4).slice(),F=L.positions.slice(),S=L.positionIndicesType===r.Int16?new Uint16Array(L.positionIndices.buffer,L.positionIndices.byteOffset,L.positionIndices.byteLength/2).slice():new Uint32Array(L.positionIndices.buffer,L.positionIndices.byteOffset,L.positionIndices.byteLength/4).slice(),R={layout:t.layouts[0],interleavedVertexData:M,indices:O,hasColors:L.hasColors,hasModifications:L.hasModifications,positionData:{data:F,indices:S}};return T&&n.push(T.buffer),P&&n.push(P.buffer),n.push(M),n.push(O.buffer),n.push(F.buffer),n.push(S.buffer),{componentOffsets:P,featureIds:T,transformedGeometry:R,obb:L.obb}}function u(e){return 0===e?n.Unmodified:1===e?n.PotentiallyModified:2===e?n.Culled:n.Unknown}function d(e){const{context:t,buffer:n}=e,r=f._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(f.HEAPU8.buffer,r,o),i=new Float64Array(n);s.set(i),f.filterOBBs(t,r,o),i.set(s),f._free(r)}function y(e){f&&(f.destroy(e),f=null)}function b(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function m(){return f?Promise.resolve():(a||(a=(i||(i=new Promise((e=>import("./i3s.js").then((e=>e.i)).then((({default:t})=>{const n=t({locateFile:s,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>{throw e}))),i).then((e=>{f=e,a=null}))),a)}!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(o||(o={}));const h={transform:l,destroy:y},E=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:function(e){y(e)},dracoDecompressPointCloudData:async function(e){await m();const t=[e.geometryBuffer],{geometryBuffer:n}=e,r=n.byteLength,o=f._malloc(r),s=new Uint8Array(f.HEAPU8.buffer,o,r);s.set(new Uint8Array(n));const i=f.dracoDecompressPointCloudData(o,s.byteLength);if(f._free(o),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const a=i.featureIds?.length>0?i.featureIds.slice():null,c=i.positions.slice();return a&&t.push(a.buffer),t.push(c.buffer),{result:{positions:c,featureIds:a},transferList:t}},filterObbsForModifications:async function(e){await m(),d(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}},filterObbsForModificationsSync:d,initialize:m,interpretObbModificationResults:u,process:async function(e){await m();const t=[e.geometryBuffer];return{result:l(e,t),transferList:t}},setLegacySchema:async function(e){await m(),f.setLegacySchema(e.context,e.jsonSchema)},setModifications:async function(e){await m(),c(e)},setModificationsSync:c,test:h},Symbol.toStringTag,{value:"Module"}));export{o as M,E as S,u as a,d as f,m as i,c as s};