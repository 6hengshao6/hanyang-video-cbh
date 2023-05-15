/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{downloadBlobAsFile as e}from"../core/urlUtils.js";import{eachAlways as t}from"../core/promiseUtils.js";import s from"../geometry/Point.js";import{L as r}from"./Logger.js";import{o as i}from"./ensureType.js";import{a as o,i as n,g as a}from"./maybe.js";import{e as c,f as h}from"./quat.js";import{I as f,b as l,c as u}from"./quatf64.js";import{s as p,b as m,h as d,n as _,d as g,j as E,Z as w,k as A,O as y}from"./vec3.js";import b from"../geometry/support/MeshMaterialMetallicRoughness.js";import{M as T}from"./MeshTransform.js";import{c as x}from"./georeference.js";import{D as R,b as N}from"./enums3.js";import{i as M,a as S,b as O,e as j}from"./imageutils2.js";import{i as I}from"./resourceUtils2.js";import{r as B}from"./typedArrayUtil.js";import"../config.js";import"./object.js";import"../core/lang.js";import"../core/Error.js";import"./string.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"./writer.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"./common.js";import"./vec4.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"./persistableUrlUtils.js";import"./mat4.js";import"./mat4f64.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./spatialReferenceEllipsoidUtils.js";import"./axisAngleDegrees.js";import"./DoubleArray.js";import"./vec32.js";import"./mat3f64.js";import"./mat3.js";import"./projection.js";import"./BufferView.js";import"./vec2.js";import"./basicInterfaces.js";var C,L,z,V,U,F,P,D;!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(C||(C={}));class G{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=G.HEADER_SIZE,this._length+=G.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=G.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,C.JSON,32);t&&this._writeChunk(t,r,C.BIN)}_writeHeader(){this._outView.setUint32(0,G.MAGIC,!0),this._outView.setUint32(4,G.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,r=0){const i=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,i,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this._outView.setUint8(t,r),t++;return t}_writeArrayBuffer(e,t,s,r,i){new Uint8Array(e,s,i).set(new Uint8Array(t,r,i),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}G.HEADER_SIZE=12,G.CHUNK_HEADER_SIZE=8,G.MAGIC=1179937895,G.VERSION=2,function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(L||(L={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(z||(z={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(V||(V={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(U||(U={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(F||(F={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(P||(P={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(D||(D={}));class v{constructor(e,t,s,r,i){this._buffer=e,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:i};const o=this._getElementSize();o>=4&&i!==V.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]="number"!=typeof r?e:Math.min(r,e);const i=this._accessorMax[s];this._accessorMax[s]="number"!=typeof i?e:Math.max(i,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return e=this.dataSize,4*Math.ceil(e/4);var e}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case R.BYTE:return new Int8Array(e,t);case R.FLOAT:return new Float32Array(e,t);case R.SHORT:return new Int16Array(e,t);case R.UNSIGNED_BYTE:return new Uint8Array(e,t);case R.UNSIGNED_INT:return new Uint32Array(e,t);case R.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let e=0;e<t.length;++e)this._data.push(t[e]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let e=0;e<this._accessorMin.length;++e)"number"!=typeof this._accessorMin[e]&&(this._accessorMin[e]=0),"number"!=typeof this._accessorMax[e]&&(this._accessorMax[e]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case R.UNSIGNED_BYTE:case R.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}finalize(){const e=this._bufferView;return new Promise((e=>{const s=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&s.push(this._asyncWritePromise),e(t(s))})).then((()=>{this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}))}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case R.BYTE:case R.UNSIGNED_BYTE:return 1;case R.SHORT:case R.UNSIGNED_SHORT:return 2;case R.UNSIGNED_INT:case R.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case U.SCALAR:return 1;case U.VEC2:return 2;case U.VEC3:return 3;case U.VEC4:case U.MAT2:return 4;case U.MAT3:return 9;case U.MAT4:return 16}}}class k{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new v(this,this._gltf,e,t,s);return this._bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const e of this._bufferViews)e.writeOutToBuffer(t,s),s+=e.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise((e=>{e(t(this.getViewFinalizePromises()))})).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function Y(e,t){o(t.normal)&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:r,normal:i}=t,n=s.length/3;for(let e=0;e<n;++e){const t=3*s[3*e],o=3*s[3*e+1],n=3*s[3*e+2],a=p(H,r[t],r[t+1],r[t+2]),c=p(Z,r[o],r[o+1],r[o+2]),h=p(J,r[n],r[n+1],r[n+2]),f=m(c,c,a),l=m(h,h,a),u=d(f,f,l);i[t]+=u[0],i[t+1]+=u[1],i[t+2]+=u[2],i[o]+=u[0],i[o+1]+=u[1],i[o+2]+=u[2],i[n]+=u[0],i[n+1]+=u[1],i[n+2]+=u[2]}for(let e=0;e<i.length;e+=3)p(W,i[e],i[e+1],i[e+2]),_(W,W),i[e]=W[0],i[e+1]=W[1],i[e+2]=W[2]}const H=g(),Z=g(),J=g(),W=g(),K=r.getLogger("gltf");class X{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===L.GLB||t.options.imageOutputType===z.GLB;s&&(t.binChunkBuffer=new k(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this._addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;E(s,w)||(t.translation=A(s));const r=e.rotation;c(r,f)||(t.rotation=l(r));const i=e.scale;E(i,y)||(t.scale=A(i)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this._addNode(e);t.children.push(s)}));const o=this.gltf.nodes.length;return this.gltf.nodes.push(t),o}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},r=this.gltf.extras,i=r.options.bufferOutputType===L.GLB;let o;o=i?r.binChunkBuffer:new k(this.gltf),this.params.origin||(this.params.origin=function(e){if(n(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,r=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new s({x:t,y:r,z:i,spatialReference:e.extent.spatialReference})}(e));const c=this.params.ignoreLocalTransform?a(e.transform,(e=>new T({origin:[e.origin[0],e.origin[1],e.origin[2]],geographic:!1}))):e.transform,h=x(e.vertexAttributes,c,this.params.origin,{geographic:this.params.geographic,unit:"meters"});!function(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&Y(s,t)}(e,h),this._flipYZAxis(h);const f=o.addBufferView(R.FLOAT,U.VEC3,V.ARRAY_BUFFER);let l,u,p,m;h.normal&&(l=o.addBufferView(R.FLOAT,U.VEC3,V.ARRAY_BUFFER)),e.vertexAttributes.uv&&(u=o.addBufferView(R.FLOAT,U.VEC2,V.ARRAY_BUFFER)),h.tangent&&(p=o.addBufferView(R.FLOAT,U.VEC4,V.ARRAY_BUFFER)),e.vertexAttributes.color&&(m=o.addBufferView(R.UNSIGNED_BYTE,U.VEC4,V.ARRAY_BUFFER)),f.startAccessor("POSITION"),l&&l.startAccessor("NORMAL"),u&&u.startAccessor("TEXCOORD_0"),p&&p.startAccessor("TANGENT"),m&&m.startAccessor("COLOR_0");const d=h.position.length/3,{position:_,normal:g,tangent:E}=h,{color:w,uv:A}=e.vertexAttributes;for(let e=0;e<d;++e)f.push(_[3*e]),f.push(_[3*e+1]),f.push(_[3*e+2]),l&&n(g)&&(l.push(g[3*e]),l.push(g[3*e+1]),l.push(g[3*e+2])),u&&n(A)&&(u.push(A[2*e]),u.push(A[2*e+1])),p&&n(E)&&(p.push(E[4*e]),p.push(E[4*e+1]),p.push(E[4*e+2]),p.push(E[4*e+3])),m&&n(w)&&(m.push(w[4*e]),m.push(w[4*e+1]),m.push(w[4*e+2]),m.push(w[4*e+3]));const y=f.endAccessor(),b=this._addAccessor(f.index,y);let N,M,S,O,j;if(l){const e=l.endAccessor();N=this._addAccessor(l.index,e)}if(u){const e=u.endAccessor();M=this._addAccessor(u.index,e)}if(p){const e=p.endAccessor();S=this._addAccessor(p.index,e)}if(m){const e=m.endAccessor();O=this._addAccessor(m.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(j=o.addBufferView(R.UNSIGNED_INT,U.SCALAR,V.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(j,e.components,t,b,N,M,S,O)):this._addMeshVertexNonIndexed(e.components,t,b,N,M,S,O),f.finalize(),l&&l.finalize(),u&&u.finalize(),p&&p.finalize(),j&&j.finalize(),m&&m.finalize(),i||o.finalize();const I=this.gltf.meshes.length;return this.gltf.meshes.push(t),I}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(!o(e))for(let s=1,r=2;s<e.length;s+=t,r+=t){const t=e[s],i=e[r];e[s]=i,e[r]=-t}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=P.MASK;break;case"auto":case"blend":s.alphaMode=P.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(n(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),n(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),n(e.normalTexture)&&(s.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof b){if(n(e.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),n(e.emissiveColor)){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}n(e.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),n(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,K.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const o=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),o}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,i(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const r=this.gltf.extras;switch(r.options.imageOutputType){case z.GLB:{const e=r.binChunkBuffer.addBufferView(R.UNSIGNED_BYTE,U.SCALAR);if(I(t))n(t.data)&&e.writeOutToBuffer(t.data,0);else{const r=M(t).then((({data:e,type:t})=>(s.mimeType=t,e)));e.writeAsync(r).then((()=>{e.finalize()}))}s.bufferView=e.index;break}case z.DataURI:if(I(t)){K.warnOnce("Image export for basis compressed textures not available.");break}s.uri=S(t);break;default:if(I(t)){K.warnOnce("Image export for basis compressed textures not available.");break}r.promises.push(M(t).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=N.REPEAT,s=N.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=N.CLAMP_TO_EDGE,s=N.CLAMP_TO_EDGE;break;case"mirror":t=N.MIRRORED_REPEAT,s=N.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=N.CLAMP_TO_EDGE;break;case"mirror":s=N.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=N.CLAMP_TO_EDGE;break;case"mirror":t=N.MIRRORED_REPEAT}}const r={wrapS:t,wrapT:s};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[e]))return e;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,i,o,n,a){for(const c of t){e.startAccessor("INDICES");for(let t=0;t<c.faces.length;++t)e.push(c.faces[t]);const t=e.endAccessor(),h={attributes:{POSITION:r},indices:this._addAccessor(e.index,t),material:this._addMaterial(c.material)};i&&"flat"!==c.shading&&(h.attributes.NORMAL=i),o&&(h.attributes.TEXCOORD_0=o),n&&"flat"!==c.shading&&(h.attributes.TANGENT=n),a&&(h.attributes.COLOR_0=a),s.primitives.push(h)}}_addMeshVertexNonIndexed(e,t,s,r,i,o,n){const a={attributes:{POSITION:s}};r&&(a.attributes.NORMAL=r),i&&(a.attributes.TEXCOORD_0=i),o&&(a.attributes.TANGENT=o),n&&(a.attributes.COLOR_0=n),e&&(a.material=this._addMaterial(e[0].material)),t.primitives.push(a)}}class q{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){B(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class ${constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class Q{constructor(e){this.mesh=e,this.name="",this.translation=g(),this.rotation=u(),this.scale=A(y),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){h(this.rotation,e[0],e[1],e[2])}}const ee="model.gltf",te="model.glb";class se{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(t){e(new Blob([this._file.data],{type:this._file.type}),t)}}function re(e,r){const i=new q,o=new $;return i.addScene(o),o.addNode(new Q(e)),function(e,r){return function(e,r,i){const o=new X(e,r=r||{},i);let n=o.params;n?n.origin||(n.origin=new s({x:-1,y:-1,z:-1})):n={origin:new s({x:-1,y:-1,z:-1})};const a=n.origin,c=o.gltf,h=c.extras?.promises??[];let f=1,l=1,u=null;return t(h).then((()=>{const e={origin:a};delete c.extras;const t="number"==typeof r.jsonSpacing?r.jsonSpacing:4,s=JSON.stringify(c,((t,s)=>{if("extras"!==t){if(s instanceof ArrayBuffer){if(O(s))switch(r.imageOutputType){case z.DataURI:case z.GLB:break;case z.External:default:{const t=`img${l}.png`;return l++,e[t]=s,t}}switch(r.bufferOutputType){case L.DataURI:return j(s);case L.GLB:if(u)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(u=s);case L.External:default:{const t=`data${f}.bin`;return f++,e[t]=s,t}}}return s}}),t);return r.bufferOutputType===L.GLB||r.imageOutputType===z.GLB?e[te]=new G(s,u).buffer:e[ee]=s,e}))}(e,{bufferOutputType:L.GLB,imageOutputType:z.GLB,jsonSpacing:0},r)}(i,r).then((e=>new se(e[te],e.origin)))}export{re as toBinaryGLTF};
