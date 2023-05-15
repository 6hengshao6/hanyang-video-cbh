// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../chunks/mat4f64 ./LoaderResult ./internal/Resource ../../webgl/enums".split(" "),function(v,u,t,C,w,D,p){function E(g){let a=null;g.json.nodes.forEach(d=>{d=d.extras;t.isSome(d)&&(d.ESRI_proxyEllipsoid||d.ESRI_lod)&&(a=d)});return a}async function F(g,a){async function d(k,l){const c=h.nodes[k];k=g.getNodeTransform(k);null!=c.weights&&u.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported.");if(null!=
c.mesh){const m=h.meshes[c.mesh];for(const n of m.primitives)e.push(a(n,k,l,m.name))}for(const m of c.children||[])e.push(d(m,l))}const h=g.json;var b=h.scenes[h.scene||0].nodes;const f=1<b.length,e=[];for(const k of b)b=h.nodes[k],e.push(d(k,0)),b.extensions&&b.extensions.MSFT_lod&&Array.isArray(b.extensions.MSFT_lod.ids)&&!f&&b.extensions.MSFT_lod.ids.forEach((l,c)=>d(l,c+1));await Promise.all(e)}function G(g,a,d){const h=f=>{const e=`${d}_tex_${f&&f.id}${f&&f.name?"_"+f.name:""}`;f&&!g.textures.has(e)&&
(f=w.makeTextureSource(f.data,{wrap:{s:f.wrapS,t:f.wrapT},mipmap:H.includes(f.minFilter),noUnpackFlip:!0}),g.textures.set(e,f));return e},b=`${d}_mat_${a.id}_${a.name}`;g.materials.has(b)||(a=w.makeMaterialParameters({color:[a.color[0],a.color[1],a.color[2]],opacity:a.color[3],alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,colorMixMode:a.ESRI_externalColorMixMode,textureColor:a.colorTexture?h(a.colorTexture):void 0,textureNormal:a.normalTexture?h(a.normalTexture):void 0,
textureOcclusion:a.occlusionTexture?h(a.occlusionTexture):void 0,textureEmissive:a.emissiveTexture?h(a.emissiveTexture):void 0,textureMetallicRoughness:a.metallicRoughnessTexture?h(a.metallicRoughnessTexture):void 0,emissiveFactor:[a.emissiveFactor[0],a.emissiveFactor[1],a.emissiveFactor[2]],colorTextureTransform:a.colorTextureTransform,normalTextureTransform:a.normalTextureTransform,occlusionTextureTransform:a.occlusionTextureTransform,emissiveTextureTransform:a.emissiveTextureTransform,metallicRoughnessTextureTransform:a.metallicRoughnessTextureTransform,
metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor}),g.materials.set(b,a));return b}let I=0;const H=[p.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,p.TextureSamplingMode.LINEAR_MIPMAP_NEAREST];v.loadGLTF=async function(g,a,d={},h=!0){const b=await D.GLTFResource.load(g,a,d),f=`gltf_${I++}`,e={lods:[],materials:new Map,textures:new Map,meta:E(b)};g=!(!b.json.asset.extras||"symbolResource"!==b.json.asset.extras.ESRI_type);const k=new Map;await F(b,async(c,m,n,J)=>{const x=k.get(n)??0;k.set(n,
x+1);var q=void 0!==c.mode?c.mode:p.PrimitiveType.TRIANGLES,r=q===p.PrimitiveType.TRIANGLES||q===p.PrimitiveType.TRIANGLE_STRIP||q===p.PrimitiveType.TRIANGLE_FAN?q:null;if(t.isNone(r))u.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+p.PrimitiveType[q]+"). Skipping primitive.");else if(b.hasPositions(c)){q=b.getPositionData(c,d);var K=b.getMaterial(c,d,h),y=b.hasNormals(c)?b.getNormalData(c,d):null,z=b.hasTangents(c)?b.getTangentData(c,d):null,A=b.hasTextureCoordinates(c)?
b.getTextureCoordinates(c,d):null,B=b.hasVertexColors(c)?b.getVertexColors(c,d):null;c=b.getIndexData(c,d);m={transform:C.clone(m),attributes:{position:await q,normal:y?await y:null,texCoord0:A?await A:null,color:B?await B:null,tangent:z?await z:null},indices:await c,primitiveType:r,material:G(e,await K,f)};r=null;t.isSome(e.meta)&&t.isSome(e.meta.ESRI_lod)&&"screenSpaceRadius"===e.meta.ESRI_lod.metric&&(r=e.meta.ESRI_lod.thresholds[n]);e.lods[n]=e.lods[n]||{parts:[],name:J,lodThreshold:r};e.lods[n].parts[x]=
m}else u.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.")});for(var l of e.lods)l.parts=l.parts.filter(c=>!!c);l=await b.getLoadedBuffersSize();return{model:e,meta:{isEsriSymbolResource:g,uri:b.uri},customMeta:{},size:l}};Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});