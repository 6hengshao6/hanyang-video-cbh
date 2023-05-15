/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as e}from"./devEnvironmentUtils.js";import{i as t,a as s,u as r,j as o}from"./maybe.js";import{m as i,n as a}from"./mat3.js";import{c as n}from"./mat3f64.js";import{c as l}from"./mat4.js";import{c as u}from"./mat4f64.js";import{d as c,f as h,s as p,c as d,n as m,b as f,l as g,g as x,m as T,t as v,C as y,e as b,B as S,A as w}from"./vec3.js";import{k as O,e as M}from"./aaBoundingBox.js";import{s as C,c as A,d as R,D as P,a as _,n as I}from"./DefaultBufferWriter.js";import{b as j,c as E,s as N,B,u as D,v as L}from"./BufferView.js";import{t as V,a as U,s as F}from"./vec32.js";import{l as k,D as z,C as q,a as G,t as H,n as W,s as $,b as Q,c as Y}from"./DefaultMaterial_COLOR_GAMMA.js";import{i as J}from"./resourceUtils2.js";import{f as K,c as Z}from"./mat3f32.js";import{Z as X,O as ee}from"./vec2f32.js";import te from"../request.js";import{r as se}from"./asyncUtils.js";import{a as re}from"./byteSizeEstimations.js";import oe from"../core/Error.js";import{L as ie}from"./Logger.js";import{N as ae}from"./NestedMap.js";import{throwIfAbortError as ne}from"../core/promiseUtils.js";import{V as le}from"./Version.js";import{r as ue}from"./requestImageUtils.js";import{A as ce}from"./Attribute.js";import{C as he,b as pe,A as de}from"./basicInterfaces.js";import{T as me}from"./Texture2.js";import{h as fe}from"./typedArrayUtil.js";import{V as ge}from"./ViewingMode.js";import{n as xe}from"./InterleavedLayout.js";import{S as Te}from"./ShaderOutput.js";import{N as ve}from"./Normals.glsl.js";import{d as ye,P as be}from"./BooleanPassUniform.js";import{G as Se}from"./GLTextureMaterial.js";import{R as we,D as Oe,b as Me,v as Ce,i as Ae}from"./Material.js";import{c as Re,o as Pe,a as _e,g as Ie,d as je}from"./OrderIndependentTransparency.js";import{R as Ee}from"./RenderSlot.js";import{V as Ne}from"./VertexAttribute.js";import{g as Be}from"./verticalOffsetUtils.js";import{f as De}from"./vec4f64.js";import{V as Le,a as Ve,b as Ue}from"./VertexNormal.glsl.js";import{d as Fe}from"./AlphaCutoff.js";import{R as ke,S as ze,P as qe}from"./Program2.js";import{T as Ge}from"./TransparencyPassType.js";import{D as He}from"./DefaultMaterial.glsl.js";import{e as We,b as $e}from"./enums3.js";import{m as Qe,c as Ye,d as Je,a as Ke}from"./renderState.js";import{_ as Ze}from"./tslib.es6.js";import{p as Xe}from"./ShaderTechniqueConfiguration.js";import{D as et}from"./DefaultTechniqueConfiguration.js";import{R as tt}from"./RealisticTree.glsl.js";class st extends Ve{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=h(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=he.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=h(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Ue.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=h(.2,.2,.2),this.diffuse=h(.8,.8,.8),this.externalColor=De(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=c(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=pe.Less,this.textureAlphaMode=de.Blend,this.textureAlphaCutoff=Fe,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=we.Occlude}}class rt extends Le{constructor(){super(...arguments),this.origin=c(),this.slicePlaneLocalOrigin=this.origin}}class ot extends ze{initializeConfiguration(e,t){t.spherical=e.viewingMode===ge.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?ye.Default:ye.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,ot.shader)}_initializeProgram(e,t){return new qe(e.rctx,t.get().build(this.configuration),Oe)}_convertDepthTestFunction(e){return e===pe.Lequal?We.LEQUAL:We.LESS}_makePipeline(e,t){const s=this.configuration,r=e===Ge.NONE,o=e===Ge.FrontFace;return Qe({blending:s.output!==Te.Color&&s.output!==Te.Alpha||!s.transparent?null:r?Re:Pe(e),culling:it(s)?Ye(s.cullFace):null,depthTest:{func:_e(e,this._convertDepthTestFunction(s.customDepthTest))},depthWrite:(r||o)&&s.writeDepth?Je:null,colorWrite:Ke,stencilWrite:s.hasOccludees?C:null,stencilTest:s.hasOccludees?t?A:R:null,polygonOffset:r||o?null:Ie(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function it(e){return e.cullFace!==he.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}ot.shader=new ke(He,(()=>import("./DefaultMaterial.glsl.js").then((e=>e.D))));class at extends et{constructor(){super(...arguments),this.output=Te.Color,this.alphaDiscardMode=de.Opaque,this.doubleSidedMode=ve.None,this.pbrMode=be.Disabled,this.cullFace=he.None,this.transparencyPassType=Ge.NONE,this.normalType=Ue.Attribute,this.textureCoordinateType=ye.None,this.customDepthTest=pe.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}Ze([Xe({count:Te.COUNT})],at.prototype,"output",void 0),Ze([Xe({count:de.COUNT})],at.prototype,"alphaDiscardMode",void 0),Ze([Xe({count:ve.COUNT})],at.prototype,"doubleSidedMode",void 0),Ze([Xe({count:be.COUNT})],at.prototype,"pbrMode",void 0),Ze([Xe({count:he.COUNT})],at.prototype,"cullFace",void 0),Ze([Xe({count:Ge.COUNT})],at.prototype,"transparencyPassType",void 0),Ze([Xe({count:Ue.COUNT})],at.prototype,"normalType",void 0),Ze([Xe({count:ye.COUNT})],at.prototype,"textureCoordinateType",void 0),Ze([Xe({count:pe.COUNT})],at.prototype,"customDepthTest",void 0),Ze([Xe()],at.prototype,"spherical",void 0),Ze([Xe()],at.prototype,"hasVertexColors",void 0),Ze([Xe()],at.prototype,"hasSymbolColors",void 0),Ze([Xe()],at.prototype,"hasVerticalOffset",void 0),Ze([Xe()],at.prototype,"hasSlicePlane",void 0),Ze([Xe()],at.prototype,"hasSliceHighlight",void 0),Ze([Xe()],at.prototype,"hasColorTexture",void 0),Ze([Xe()],at.prototype,"hasMetallicRoughnessTexture",void 0),Ze([Xe()],at.prototype,"hasEmissionTexture",void 0),Ze([Xe()],at.prototype,"hasOcclusionTexture",void 0),Ze([Xe()],at.prototype,"hasNormalTexture",void 0),Ze([Xe()],at.prototype,"hasScreenSizePerspective",void 0),Ze([Xe()],at.prototype,"hasVertexTangents",void 0),Ze([Xe()],at.prototype,"hasOccludees",void 0),Ze([Xe()],at.prototype,"hasMultipassTerrain",void 0),Ze([Xe()],at.prototype,"hasModelTransformation",void 0),Ze([Xe()],at.prototype,"offsetBackfaces",void 0),Ze([Xe()],at.prototype,"vvSize",void 0),Ze([Xe()],at.prototype,"vvColor",void 0),Ze([Xe()],at.prototype,"receiveShadows",void 0),Ze([Xe()],at.prototype,"receiveAmbientOcclusion",void 0),Ze([Xe()],at.prototype,"textureAlphaPremultiplied",void 0),Ze([Xe()],at.prototype,"instanced",void 0),Ze([Xe()],at.prototype,"instancedColor",void 0),Ze([Xe()],at.prototype,"objectAndLayerIdColorInstanced",void 0),Ze([Xe()],at.prototype,"instancedDoublePrecision",void 0),Ze([Xe()],at.prototype,"doublePrecisionRequiresObfuscation",void 0),Ze([Xe()],at.prototype,"writeDepth",void 0),Ze([Xe()],at.prototype,"transparent",void 0),Ze([Xe()],at.prototype,"enableOffset",void 0),Ze([Xe()],at.prototype,"cullAboveGround",void 0),Ze([Xe()],at.prototype,"snowCover",void 0),Ze([Xe()],at.prototype,"hasColorTextureTransform",void 0),Ze([Xe()],at.prototype,"hasEmissionTextureTransform",void 0),Ze([Xe()],at.prototype,"hasNormalTextureTransform",void 0),Ze([Xe()],at.prototype,"hasOcclusionTextureTransform",void 0),Ze([Xe()],at.prototype,"hasMetallicRoughnessTextureTransform",void 0),Ze([Xe({constValue:!0})],at.prototype,"hasVvInstancing",void 0),Ze([Xe({constValue:!1})],at.prototype,"useCustomDTRExponentForWater",void 0),Ze([Xe({constValue:!1})],at.prototype,"supportsTextureAtlas",void 0),Ze([Xe({constValue:!0})],at.prototype,"useFillLights",void 0);class nt extends ot{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Ue.Attribute,t.doubleSidedMode=ve.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,nt.shader)}}nt.shader=new ke(tt,(()=>import("./RealisticTree.glsl.js").then((e=>e.R))));class lt extends Me{constructor(e){super(e,ct),this.supportsEdges=!0,this._configuration=new at,this._vertexBufferLayout=function(e){const t=xe().vec3f(Ne.POSITION).vec3f(Ne.NORMAL),s=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId;return e.hasVertexTangents&&t.vec4f(Ne.TANGENT),s&&t.vec2f(Ne.UV0),e.hasVertexColors&&t.vec4u8(Ne.COLOR),e.hasSymbolColors&&t.vec4u8(Ne.SYMBOLCOLOR),fe("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(Ne.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==Te.Shadow&&e!==Te.ShadowExcludeHighlight&&e!==Te.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:s,hasSymbolColors:r,vvColor:o}=e,i="replace"===e.colorMixMode,a=e.opacity>0,n=e.externalColor&&e.externalColor[3]>0,l=t||o||r;return s&&l?i||a:s?i?n:a:l?i||a:i?n:a}getConfiguration(e,s){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=t(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=t(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,t(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?he.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=s.multipassTerrain.enabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=t(this.parameters.modelTransformation),e!==Te.Color&&e!==Te.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=ve.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?ve.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?ve.WindingOrder:ve.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!s.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?be.Schematic:be.Normal:be.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.enableOffset=s.camera.relativeElevation<je,this._configuration.snowCover=this.hasSnowCover(s),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return t(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,s,r,o,i,a){if(t(this.parameters.verticalOffset)){const e=r.camera;p(gt,s[12],s[13],s[14]);let t=null;switch(r.viewingMode){case ge.Global:t=m(mt,gt);break;case ge.Local:t=d(mt,dt)}let a=0;const n=f(xt,gt,e.eye),l=g(n),u=x(n,n,1/l);let c=null;this.parameters.screenSizePerspective&&(c=T(t,u)),a+=Ce(e,l,this.parameters.verticalOffset,c??0,this.parameters.screenSizePerspective),x(t,t,a),v(ft,t,r.transform.inverseRotation),o=f(ht,o,ft),i=f(pt,i,ft)}Ae(e,r,o,i,Be(r.verticalOffset),a)}requiresSlot(e,t){return!(t!==Te.Color&&t!==Te.Alpha&&t!==Te.Depth&&t!==Te.Normal&&t!==Te.Shadow&&t!==Te.ShadowHighlight&&t!==Te.ShadowExcludeHighlight&&t!==Te.Highlight&&t!==Te.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?Ee.TRANSPARENT_MATERIAL:Ee.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ee.OPAQUE_MATERIAL)&&e!==Ee.DRAPED_MATERIAL)}createGLMaterial(e){return new ut(e)}createBufferWriter(){return new P(this._vertexBufferLayout)}}class ut extends Se{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==Te.Color&&this._output!==Te.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const s=e.camera.viewInverseTransposeMatrix;return p(t.origin,s[3],s[7],s[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?nt:ot,e)}}const ct=new class extends st{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},ht=c(),pt=c(),dt=h(0,0,1),mt=c(),ft=c(),gt=c(),xt=c();function Tt(e){if(s(e))return null;const r=t(e.offset)?e.offset:X,o=t(e.rotation)?e.rotation:0,a=t(e.scale)?e.scale:ee,n=K(1,0,0,0,1,0,r[0],r[1],1),l=K(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),u=K(a[0],0,0,0,a[1],0,0,0,1),c=Z();return i(c,l,u),i(c,n,c),c}class vt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class yt{constructor(e,t,s){this.name=e,this.lodThreshold=t,this.pivotOffset=s,this.stageResources=new vt,this.numberOfVertices=0}}const bt=ie.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function St(e,s){const o=await async function(e,s){const o=t(s)&&s.streamDataRequester;if(o)return async function(e,t,s){const r=await se(t.request(e,"json",s));return!0===r.ok?r.value:(ne(r.error),void wt(r.error.details.url))}(e,o,s);const i=await se(te(e,r(s)));return!0===i.ok?i.value.data:(ne(i.error),void wt(i.error))}(e,s),i=await async function(e,s){const r=[];for(const o in e){const i=e[o],a=i.images[0].data;if(!a){bt.warn("Externally referenced texture data is not yet supported");continue}const n=i.encoding+";base64,"+a,l="/textureDefinitions/"+o,u="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:$e.REPEAT,t:$e.REPEAT},preMultiplyAlpha:Ct(u)!==de.Opaque},h=t(s)&&s.disableTextures?Promise.resolve(null):ue(n,s);r.push(h.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:u}))))}const o=await Promise.all(r),i={};for(const e of o)i[e.refId]=e;return i}(o.textureDefinitions??{},s);let a=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];a+=t?.image?t.image.width*t.image.height*4:0}return{resource:o,textures:i,size:a+re(o)}}function wt(e){throw new oe("",`Request for object resource failed: ${e}`)}function Ot(e){const t=e.params,s=t.topology;let r=!0;switch(t.vertexAttributes||(bt.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const s in t.vertexAttributes){const t=e[s];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(bt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(bt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(bt.warn(`Indexed geometry does not specify face indices for '${s}' attribute`),r=!1)}}else bt.warn("Indexed geometries must specify faces"),r=!1;break}default:bt.warn(`Unsupported topology '${s}'`),r=!1}e.params.material||(bt.warn("Geometry requires material"),r=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(bt.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Mt(e){const s=O();return e.forEach((e=>{const r=e.boundingInfo;t(r)&&(M(s,r.bbMin),M(s,r.bbMax))})),s}function Ct(e){switch(e){case"mask":return de.Mask;case"maskAndTransparency":return de.MaskBlend;case"none":return de.Opaque;default:return de.Blend}}function At(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Rt=new le(1,2,"wosr");async function Pt(r,i){const a=_t(e(r));if("wosr"===a.fileType){const e=await(i.cache?i.cache.loadWOSR(a.url,i):St(a.url,i)),{engineResources:r,referenceBoundingBox:o}=function(e,r){const o=new Array,i=new Array,a=new Array,n=new ae,l=e.resource,u=le.parse(l.version||"1.0","wosr");Rt.validate(u);const c=l.model.name,h=l.model.geometries,p=l.materialDefinitions??{},d=e.textures;let m=0;const f=new Map;for(let e=0;e<h.length;e++){const l=h[e];if(!Ot(l))continue;const u=At(l),c=l.params.vertexAttributes,g=[];for(const e in c){const t=c[e],s=t.values;g.push([e,new ce(s,t.valuesPerElement,!0)])}const x=[];if("PerAttributeArray"!==l.params.topology){const e=l.params.faces;for(const t in e)x.push([t,e[t].values])}const T=u.texture,v=d&&d[T];if(v&&!f.has(T)){const{image:e,params:t}=v,s=new me(e,t);i.push(s),f.set(T,s)}const b=f.get(T),S=b?b.id:void 0,w=u.material;let O=n.get(w,T);if(s(O)){const e=p[w.substring(w.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const s=v&&v.alphaChannelUsage,o=e.transparency>0||"transparency"===s||"maskAndTransparency"===s,i=v?Ct(v.alphaChannelUsage):void 0,a={ambient:y(e.diffuse),diffuse:y(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:i,textureAlphaCutoff:.33,textureId:S,initTextureTransparent:!0,doubleSided:!0,cullFace:he.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!v&&!!v.params.preMultiplyAlpha};t(r)&&r.materialParamsMixin&&Object.assign(a,r.materialParamsMixin),O=new lt(a),n.set(w,T,O)}a.push(O);const M=new _(O,g,x);m+=x.position?x.position.length:0,o.push(M)}return{engineResources:[{name:c,stageResources:{textures:i,materials:a,geometries:o},pivotOffset:l.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:Mt(o)}}(e,i);return{lods:r,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}const n=await(i.cache?i.cache.loadGLTF(a.url,i,!!i.usePBR):k(new z(i.streamDataRequester),a.url,i,i.usePBR)),h=o(n.model.meta,"ESRI_proxyEllipsoid"),p=n.meta.isEsriSymbolResource&&t(h)&&n.meta.uri.includes("/RealisticTrees/");p&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];for(const i of o.parts){const o=i.attributes.normal;if(s(o))return;const a=i.attributes.position,n=a.count,h=c(),p=c(),d=c(),x=new Uint8Array(4*n),T=new Float64Array(3*n),v=l(u(),i.transform);let y=0,O=0;for(let s=0;s<n;s++){a.getVec(s,p),o.getVec(s,h),b(p,p,i.transform),f(d,p,t.center),S(d,d,t.radius);const n=d[2],l=g(d),u=Math.min(.45+.55*l*l,1);S(d,d,t.radius),null!==v&&b(d,d,v),m(d,d),r+1!==e.model.lods.length&&e.model.lods.length>1&&w(d,d,h,n>-1?.2:Math.min(-4*n-3.8,1)),T[y]=d[0],T[y+1]=d[1],T[y+2]=d[2],y+=3,x[O]=255*u,x[O+1]=255*u,x[O+2]=255*u,x[O+3]=255,O+=4}i.attributes.normal=new B(T),i.attributes.color=new E(x)}}}(n,h));const d=!!i.usePBR,x=n.meta.isEsriSymbolResource?{usePBR:d,isSchematic:!1,treeRendering:p,mrrFactors:[0,1,.2]}:{usePBR:d,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},T={...i.materialParamsMixin,treeRendering:p},{engineResources:v,referenceBoundingBox:O}=It(n,x,T,i.skipHighLods&&null==a.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:a.specifiedLodIndex});return{lods:v,referenceBoundingBox:O,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}function _t(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function It(e,r,o,i){const n=e.model,l=new Array,u=new Map,c=new Map,h=n.lods.length,p=O();return n.lods.forEach(((e,d)=>{const m=!0===i.skipHighLods&&(h>1&&0===d||h>3&&1===d)||!1===i.skipHighLods&&null!=i.singleLodIndex&&d!==i.singleLodIndex;if(m&&0!==d)return;const f=new yt(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=m?new lt({}):function(e,r,o,i,a,n,l){const u=r.material+(r.attributes.normal?"_normal":"")+(r.attributes.color?"_color":"")+(r.attributes.texCoord0?"_texCoord0":"")+(r.attributes.tangent?"_tangent":""),c=e.materials.get(r.material),h=t(r.attributes.texCoord0),p=t(r.attributes.normal);if(s(c))return null;const d=function(e){switch(e){case"BLEND":return de.Blend;case"MASK":return de.Mask;case"OPAQUE":case null:case void 0:return de.Opaque}}(c.alphaMode);if(!n.has(u)){if(h){const s=(s,r=!1)=>{if(t(s)&&!l.has(s)){const o=e.textures.get(s);if(t(o)){const e=o.data;l.set(s,new me(J(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!J(e)&&r,encoding:J(e)&&t(e.encoding)?e.encoding:void 0}))}}};s(c.textureColor,d!==de.Opaque),s(c.textureNormal),s(c.textureOcclusion),s(c.textureEmissive),s(c.textureMetallicRoughness)}const s=c.color[0]**(1/q),o=c.color[1]**(1/q),m=c.color[2]**(1/q),f=c.emissiveFactor[0]**(1/q),g=c.emissiveFactor[1]**(1/q),x=c.emissiveFactor[2]**(1/q),T=t(c.textureColor)&&h?l.get(c.textureColor):null;n.set(u,new lt({...i,transparent:d===de.Blend,customDepthTest:pe.Lequal,textureAlphaMode:d,textureAlphaCutoff:c.alphaCutoff,diffuse:[s,o,m],ambient:[s,o,m],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?he.None:he.Back,hasVertexColors:!!r.attributes.color,hasVertexTangents:!!r.attributes.tangent,normalType:p?Ue.Attribute:Ue.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:t(T)?T.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:t(c.textureNormal)&&h?l.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:t(T)&&!!T.params.preMultiplyAlpha,occlusionTextureId:t(c.textureOcclusion)&&h?l.get(c.textureOcclusion).id:void 0,emissiveTextureId:t(c.textureEmissive)&&h?l.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:t(c.textureMetallicRoughness)&&h?l.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[f,g,x],mrrFactors:[c.metallicFactor,c.roughnessFactor,i.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:Tt(c.colorTextureTransform),normalTextureTransformMatrix:Tt(c.normalTextureTransform),occlusionTextureTransformMatrix:Tt(c.occlusionTextureTransform),emissiveTextureTransformMatrix:Tt(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Tt(c.metallicRoughnessTextureTransform),...a}))}const m=n.get(u);if(o.stageResources.materials.push(m),h){const e=e=>{t(e)&&o.stageResources.textures.push(l.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return m}(n,e,f,r,o,u,c),{geometry:l,vertexCount:h}=function(e,s){const r=e.attributes.position.count,o=G(e.indices||r,e.primitiveType),i=I(3*r),{typedBuffer:n,typedBufferStride:l}=e.attributes.position;V(i,n,e.transform,3,l);const u=[[Ne.POSITION,new ce(i,3,!0)]],c=[[Ne.POSITION,o]];if(t(e.attributes.normal)){const t=I(3*r),{typedBuffer:s,typedBufferStride:i}=e.attributes.normal;a(jt,e.transform),U(t,s,jt,3,i),u.push([Ne.NORMAL,new ce(t,3,!0)]),c.push([Ne.NORMAL,o])}if(t(e.attributes.tangent)){const t=I(4*r),{typedBuffer:s,typedBufferStride:i}=e.attributes.tangent;a(jt,e.transform),H(t,s,jt,4,i),u.push([Ne.TANGENT,new ce(t,4,!0)]),c.push([Ne.TANGENT,o])}if(t(e.attributes.texCoord0)){const t=I(2*r),{typedBuffer:s,typedBufferStride:i}=e.attributes.texCoord0;W(t,s,2,i),u.push([Ne.UV0,new ce(t,2,!0)]),c.push([Ne.UV0,o])}if(t(e.attributes.color)){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof j?$(t,e.attributes.color,255):e.attributes.color instanceof E?Q(t,e.attributes.color):e.attributes.color instanceof N&&$(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof B?F(t,e.attributes.color,255,4):e.attributes.color instanceof D?Y(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof L&&F(t,e.attributes.color,1/256,4)),u.push([Ne.COLOR,new ce(t,4,!0)]),c.push([Ne.COLOR,o])}return{geometry:new _(s,u,c),vertexCount:r}}(e,t(i)?i:new lt({})),g=l.boundingInfo;t(g)&&0===d&&(M(p,g.bbMin),M(p,g.bbMax)),t(i)&&(f.stageResources.geometries.push(l),f.numberOfVertices+=h)})),m||l.push(f)})),{engineResources:l,referenceBoundingBox:p}}const jt=n(),Et=Object.freeze(Object.defineProperty({__proto__:null,fetch:Pt,gltfToEngineResources:It,parseUrl:_t},Symbol.toStringTag,{value:"Module"}));export{lt as D,rt as a,Pt as f,Tt as g,St as l,Et as o};
