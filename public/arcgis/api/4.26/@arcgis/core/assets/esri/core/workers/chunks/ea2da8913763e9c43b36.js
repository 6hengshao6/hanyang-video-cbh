"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[779],{90779:(e,t,r)=>{r.d(t,{C:()=>ce,D:()=>G,a:()=>ue,b:()=>U,c:()=>B,d:()=>N,e:()=>S,f:()=>I,g:()=>F,h:()=>C,i:()=>D,j:()=>E,k:()=>M,l:()=>ne,m:()=>L,n:()=>v,s:()=>A,t:()=>O});var n=r(79641),o=r(48578),s=r(82058),a=r(41864),i=r(60991),u=r(71252),c=r(50406),l=r(32101),f=r(92143),d=r(57532),p=r(51006),h=r(91306),m=r(10738),T=r(65775),w=r(35861),y=r(45087),g=r(40167),x=r(48190),b=r(89212),_=r(92457);function N(e,t,r){O(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function O(e,t,r,o=4,s=o){if(e.length/o!=t.length/s)return void n.m.error("source and destination buffers need to have the same number of elements");const a=e.length/o,i=r[0],u=r[1],c=r[2],l=r[3],f=r[4],d=r[5],p=r[6],h=r[7],m=r[8];let T=0,w=0;for(let r=0;r<a;r++){const r=t[T],n=t[T+1],a=t[T+2],y=t[T+3];e[w]=i*r+l*n+p*a,e[w+1]=u*r+f*n+h*a,e[w+2]=c*r+d*n+m*a,e[w+3]=y,T+=s,w+=o}}function S(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*o,r=e*a,i=s[r],u=s[r+1],c=s[r+2],l=i*i+u*u+c*c;if(l>0){const e=1/Math.sqrt(l);n[t]=e*i,n[t+1]=e*u,n[t+2]=e*c}}}function E(e,t,r){A(e.typedBuffer,t,r,e.typedBufferStride)}function A(e,t,r,n=4){const o=Math.min(e.length/n,t.count),s=t.typedBuffer,a=t.typedBufferStride;let i=0,u=0;for(let t=0;t<o;t++)e[u]=r*s[i],e[u+1]=r*s[i+1],e[u+2]=r*s[i+2],e[u+3]=r*s[i+3],i+=a,u+=n}function R(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}function C(e,t){v(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function v(e,t,r=2,n=r){const s=t.length/2;let a=0,i=0;if((0,o.o)(t)||(0,o.B)(t)){for(let o=0;o<s;++o)e[a]=t[i],e[a+1]=t[i+1],a+=r,i+=n;return}const u=(0,o.C)(t);if((0,o.D)(t))for(let o=0;o<s;++o)e[a]=Math.max(t[i]/u,-1),e[a+1]=Math.max(t[i+1]/u,-1),a+=r,i+=n;else for(let o=0;o<s;++o)e[a]=t[i]/u,e[a+1]=t[i+1]/u,a+=r,i+=n}function D(e,t,r,n){const o=e.typedBuffer,s=e.typedBufferStride,a=n?.count??e.count;let i=(n?.dstIndex??0)*s;for(let e=0;e<a;++e)o[i]=t,o[i+1]=r,i+=s}function L(e,t){B(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function B(e,t,r=3,n=r){const o=t.length/n;let s=0,a=0;for(let i=0;i<o;++i)e[s]=t[a],e[s+1]=t[a+1],e[s+2]=t[a+2],s+=r,a+=n}function I(e,t,r,n,o){const s=e.typedBuffer,a=e.typedBufferStride,i=o?.count??e.count;let u=(o?.dstIndex??0)*a;for(let e=0;e<i;++e)s[u]=t,s[u+1]=r,s[u+2]=n,u+=a}function M(e,t){U(e.typedBuffer,t,e.typedBufferStride)}function U(e,t,r=4){const n=t.typedBuffer,o=t.typedBufferStride,s=t.count;let a=0,i=0;for(let t=0;t<s;++t)e[a]=n[i],e[a+1]=n[i+1],e[a+2]=n[i+2],e[a+3]=n[i+3],a+=r,i+=o}function F(e,t,r,n,o,s){const a=e.typedBuffer,i=e.typedBufferStride,u=s?.count??e.count;let c=(s?.dstIndex??0)*i;for(let e=0;e<u;++e)a[c]=t,a[c+1]=r,a[c+2]=n,a[c+3]=o,c+=i}class G{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,l.HK)(e)?((0,c.k_)(t),(0,l.AH)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if((0,u.a)(this._streamDataRequester))return(await(0,s.default)(t,{responseType:P[e]})).data;const n=await(0,a.r)(this._streamDataRequester.request(t,e,r));if(!0===n.ok)return n.value;throw(0,c.r9)(n.error),new i.Z("",`Request for resource failed: ${n.error}`)}}const P={image:"image",binary:"array-buffer",json:"json"};class j{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}}var Z,k,V;(V=Z||(Z={})).SCALAR="SCALAR",V.VEC2="VEC2",V.VEC3="VEC3",V.VEC4="VEC4",V.MAT2="MAT2",V.MAT3="MAT3",V.MAT4="MAT4",function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(k||(k={}));const H={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},q={pbrMetallicRoughness:H,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},$={ESRI_externalColorMixMode:"tint"},K=(e={})=>{const t={...H,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,x.n)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...$,...e.extras});return{...q,...e,pbrMetallicRoughness:t,extras:r}},Y={magFilter:p.c.LINEAR,minFilter:p.c.LINEAR_MIPMAP_LINEAR,wrapS:p.b.REPEAT,wrapT:p.b.REPEAT},X=1179937895;class z{constructor(e,t,r,n){if(this._context=e,this.uri=t,this.json=r,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,o)=>(t=n||"",r=o||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new i.Z("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new i.Z("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new i.Z("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,t,r){if((0,l.HK)(t)){const r=(0,l.sJ)(t);if(r&&"model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new z(e,t,n)}catch{}const n=(0,l.AH)(t);if(z._isGLBData(n))return this._fromGLBData(e,t,n)}if(t.endsWith(".gltf")){const n=await e.loadJSON(t,r);return new z(e,t,n)}const n=await e.loadBinary(t,r);if(z._isGLBData(n))return this._fromGLBData(e,t,n);const o=await e.loadJSON(t,r);return new z(e,t,o)}static _isGLBData(e){if(null==e)return!1;const t=new j(e);return t.remainingBytes()>=4&&t.readUint32()===X}static async _fromGLBData(e,t,r){const n=await z._parseGLBData(r);return new z(e,t,n.json,n.binaryData)}static async _parseGLBData(e){const t=new j(e);if(t.remainingBytes()<12)throw new i.Z("gltf-loader-error","GLB binary data is insufficiently large.");const r=t.readUint32(),n=t.readUint32(),o=t.readUint32();if(r!==X)throw new i.Z("gltf-loader-error","Magic first 4 bytes do not fit to expected GLB value.");if(e.byteLength<o)throw new i.Z("gltf-loader-error","GLB binary data is smaller than header specifies.");if(2!==n)throw new i.Z("gltf-loader-unsupported-feature","An unsupported GLB container version was detected. Only version 2 is supported.");let s,a,u=0;for(;t.remainingBytes()>=8;){const e=t.readUint32(),r=t.readUint32();if(0===u){if(1313821514!==r)throw new i.Z("gltf-loader-error","First GLB chunk must be JSON.");if(e<0)throw new i.Z("gltf-loader-error","No JSON data found.");s=await(0,b.j)(t.readUint8Array(e))}else if(1===u){if(5130562!==r)throw new i.Z("gltf-loader-unsupported-feature","Second GLB chunk expected to be BIN.");a=t.readUint8Array(e)}else f.L.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 GLB chunks detected. Skipping.");u+=1}if(!s)throw new i.Z("gltf-loader-error","No GLB JSON chunk detected.");return{json:s,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e];if(null==r.uri){if(null==this._glbBuffer)throw new i.Z("gltf-loader-error","GLB buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(e,t);if(n.byteLength!==r.byteLength)throw new i.Z("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e].uri,o=this._context.loadBinary(this._resolveUri(n),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,o),o}async getAccessor(e,t){if(!this.json.accessors)throw new i.Z("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[e];if(null==r?.bufferView)throw new i.Z("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[Z.MAT2,Z.MAT3,Z.MAT4])throw new i.Z("gltf-loader-unsupported-feature",`AttributeType ${r.type} is not supported`);const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t),s=ee[r.type],a=te[r.componentType],u=s*a,c=n.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:s,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case p.D.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case p.D.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case p.D.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case p.D.UNSIGNED_BYTE:return R(this._wrapAccessor(g.m,r));case p.D.UNSIGNED_SHORT:return R(this._wrapAccessor(g.n,r));case p.D.UNSIGNED_INT:return R(this._wrapAccessor(g.t,r))}}async getPositionData(e,t){if(null==e.attributes.POSITION)throw new i.Z("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);if(r.componentType!==p.D.FLOAT)throw new i.Z("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+p.D[r.componentType]);if(3!==r.componentCount)throw new i.Z("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(g.B,r)}async getNormalData(e,t){if(null==e.attributes.NORMAL)throw new i.Z("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);if(r.componentType!==p.D.FLOAT)throw new i.Z("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+p.D[r.componentType]);if(3!==r.componentCount)throw new i.Z("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(g.B,r)}async getTangentData(e,t){if(null==e.attributes.TANGENT)throw new i.Z("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);if(r.componentType!==p.D.FLOAT)throw new i.Z("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+p.D[r.componentType]);if(4!==r.componentCount)throw new i.Z("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return new g.b(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){if(null==e.attributes.TEXCOORD_0)throw new i.Z("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);if(2!==r.componentCount)throw new i.Z("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===p.D.FLOAT)return this._wrapAccessor(g.d,r);if(!r.normalized)throw new i.Z("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return function(e){switch(e.componentType){case p.D.BYTE:return new g.p(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case p.D.UNSIGNED_BYTE:return new g.r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case p.D.SHORT:return new g.q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case p.D.UNSIGNED_SHORT:return new g.x(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case p.D.UNSIGNED_INT:return new g.w(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case p.D.FLOAT:return new g.d(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}(r)}async getVertexColors(e,t){if(null==e.attributes.COLOR_0)throw new i.Z("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(4!==r.componentCount&&3!==r.componentCount)throw new i.Z("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===p.D.FLOAT)return this._wrapAccessor(g.b,r);if(r.componentType===p.D.UNSIGNED_BYTE)return this._wrapAccessor(g.c,r);if(r.componentType===p.D.UNSIGNED_SHORT)return this._wrapAccessor(g.s,r)}else if(3===r.componentCount){if(r.componentType===p.D.FLOAT)return this._wrapAccessor(g.B,r);if(r.componentType===p.D.UNSIGNED_BYTE)return this._wrapAccessor(g.u,r);if(r.componentType===p.D.UNSIGNED_SHORT)return this._wrapAccessor(g.v,r)}throw new i.Z("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+p.D[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=e.material?this._materialCache.get(e.material):void 0;if(!n){const o=null!=e.material?K(this.json.materials[e.material]):K(),s=o.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(o.normalTexture,t),c=r?this.getTexture(o.occlusionTexture,t):void 0,l=r?this.getTexture(o.emissiveTexture,t):void 0,f=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,d=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await i,normalTexture:await u,name:o.name,id:d,occlusionTexture:await c,emissiveTexture:await l,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await f,hasVertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:o.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:o.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:o.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform}}return n}async getTexture(e,t){if(!e)return;if(0!==(e.texCoord||0))throw new i.Z("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=e.index,n=this.json.textures[r],o=(e=>({...Y,...e}))(null!=n.sampler?this.json.samplers[n.sampler]:{}),s=this._getTextureSourceId(n),a=this.json.images[s],u=await this._loadTextureImageData(r,n,t);return(0,h.o)(this._textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>{throw new i.Z("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${e}`)};return{data:u,wrapS:e(o.wrapS)?o.wrapS:t(o.wrapS),wrapT:e(o.wrapT)?o.wrapT:t(o.wrapT),minFilter:o.minFilter,name:a.name,id:r}}))}getNodeTransform(e){if(void 0===e)return J;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,T.m)((0,d.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,d.b)(r),n.translation&&(0,T.n)(t,t,n.translation),n.rotation&&(Q[3]=(0,w.g)(Q,n.rotation),(0,T.A)(t,t,Q[3],Q)),n.scale&&(0,T.g)(t,t,n.scale)):t=(0,d.b)(r),this._nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return(0,l.hF)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=m.V.parse(this.json.asset.version,"glTF");W.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new i.Z("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const n=this._textureLoaders.get(e);if(n)return n;const o=this._createTextureLoader(t,r);return this._textureLoaders.set(e,o),o}_getTextureSourceId(e){if(void 0!==e.extensions&&null!==e.extensions.KHR_texture_basisu)return e.extensions.KHR_texture_basisu.source;if(null!==e.source)return e.source;throw new i.Z("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(e,t){const r=this._getTextureSourceId(e),n=this.json.images[r];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),t);return new b.E(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),t)}if(null==n.bufferView)throw new i.Z("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new i.Z("gltf-loader-unsupported-feature","Image mimeType must be defined.");const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,t);if(null!=o.byteStride)throw new i.Z("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const a=s.byteOffset+(o.byteOffset||0);return(0,b.a)(new Uint8Array(s.buffer,a,o.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await(0,c.WW)(Array.from(this._bufferLoaders.values())),t=await(0,c.WW)(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?(0,b.i)(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const J=(0,T.D)((0,d.c)(),Math.PI/2),W=new m.V(2,0,"glTF"),Q=(0,y.c)(),ee={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},te={[p.D.BYTE]:1,[p.D.UNSIGNED_BYTE]:1,[p.D.SHORT]:2,[p.D.UNSIGNED_SHORT]:2,[p.D.FLOAT]:4,[p.D.UNSIGNED_INT]:4};let re=0;async function ne(e,t,r={},n=!0){const o=await z.load(e,t,r),s="gltf_"+re++,a={lods:[],materials:new Map,textures:new Map,meta:oe(o)},i=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type),c=new Map;await async function(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,o=n.length>1,s=[];for(const e of n){const t=r.nodes[e];s.push(a(e,0)),se(t)&&!o&&t.extensions.MSFT_lod.ids.forEach(((e,t)=>a(e,t+1)))}async function a(n,o){const i=r.nodes[n],u=e.getNodeTransform(n);if(null!=i.weights&&f.L.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=i.mesh){const e=r.meshes[i.mesh];for(const r of e.primitives)s.push(t(r,u,o,e.name))}for(const e of i.children||[])s.push(a(e,o))}await Promise.all(s)}(o,(async(e,t,i,l)=>{const h=c.get(i)??0;c.set(i,h+1);const m=void 0!==e.mode?e.mode:p.d.TRIANGLES,T=m===p.d.TRIANGLES||m===p.d.TRIANGLE_STRIP||m===p.d.TRIANGLE_FAN?m:null;if((0,u.a)(T))return void f.L.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+p.d[m]+"). Skipping primitive.");if(!o.hasPositions(e))return void f.L.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const w=o.getPositionData(e,r),y=o.getMaterial(e,r,n),g=o.hasNormals(e)?o.getNormalData(e,r):null,x=o.hasTangents(e)?o.getTangentData(e,r):null,b=o.hasTextureCoordinates(e)?o.getTextureCoordinates(e,r):null,_=o.hasVertexColors(e)?o.getVertexColors(e,r):null,N=o.getIndexData(e,r),O={transform:(0,d.b)(t),attributes:{position:await w,normal:g?await g:null,texCoord0:b?await b:null,color:_?await _:null,tangent:x?await x:null},indices:await N,primitiveType:T,material:ae(a,await y,s)};let S=null;(0,u.i)(a.meta)&&(0,u.i)(a.meta.ESRI_lod)&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(S=a.meta.ESRI_lod.thresholds[i]),a.lods[i]=a.lods[i]||{parts:[],name:l,lodThreshold:S},a.lods[i].parts[h]=O}));for(const e of a.lods)e.parts=e.parts.filter((e=>!!e));const l=await o.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:i,uri:o.uri},customMeta:{},size:l}}function oe(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,u.i)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}function se(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function ae(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:p.b.REPEAT,t:p.b.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:ie.includes(t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}const ie=[p.c.LINEAR_MIPMAP_LINEAR,p.c.LINEAR_MIPMAP_NEAREST];function ue(e,t){switch(t){case p.d.TRIANGLES:return function(e){return"number"==typeof e?(0,_.a)(e):(0,o.a)(e)?new Uint16Array(e):e}(e);case p.d.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,_.n)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)o%2==0?(n[t++]=e[o],n[t++]=e[o+1],n[t++]=e[o+2]):(n[t++]=e[o+1],n[t++]=e[o],n[t++]=e[o+2])}return n}(e);case p.d.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}const o=e[0];let s=e[1],a=0;for(let t=0;t<r;++t){const r=e[t+2];n[a++]=o,n[a++]=s,n[a++]=r,s=r}return n}(e)}}const ce=2.1},10738:(e,t,r)=>{r.d(t,{V:()=>o});var n=r(60991);let o=class{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new o(this.major,this.minor,this._context)}static parse(e,t=""){const[r,s]=e.split("."),a=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(a))throw new n.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!s||!s.match||!s.match(a))throw new n.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const i=parseInt(r,10),u=parseInt(s,10);return new o(i,u,t)}}},33417:(e,t,r)=>{var n,o,s,a,i,u,c,l,f,d,p;r.d(t,{A:()=>f,C:()=>n,O:()=>u,P:()=>c,R:()=>a,S:()=>i,T:()=>p,b:()=>o}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(n||(n={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(i||(i={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(c||(c={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(f||(f={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(p||(p={}))},89212:(e,t,r)=>{r.d(t,{E:()=>o,a:()=>i,i:()=>s,j:()=>a});var n=r(33417);class o{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=n.T.KTX2_ENCODING}}function s(e){return"encoded-mesh-texture"===e?.type}async function a(e){return new Promise(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(n)}))}async function i(e,t){return t===n.T.KTX2_ENCODING?new o(e):new Promise(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),a=new Image,i=()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))).then(c):(r(a),c())},u=e=>{URL.revokeObjectURL(s),n(e),c()},c=()=>{a.removeEventListener("load",i),a.removeEventListener("error",u)};a.addEventListener("load",i),a.addEventListener("error",u),a.src=s}))}}}]);