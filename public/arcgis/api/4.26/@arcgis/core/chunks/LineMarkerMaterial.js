/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{i as e}from"./maybe.js";import{s as t,F as r,e as s,d as a}from"./vec3.js";import{n as i}from"./InterleavedLayout.js";import{S as n}from"./ShaderOutput.js";import{G as o}from"./GLTextureMaterial.js";import{b as c,R as l}from"./Material.js";import{R as h}from"./RenderSlot.js";import{V as u}from"./VertexAttribute.js";import{V as p}from"./glUtil3D.js";import{R as d,S as T,P as m}from"./Program2.js";import{c as A,o as f,a as E,b as _}from"./OrderIndependentTransparency.js";import{s as O,c as g,d as S,e as R,f as v,g as P,h as I,i as L}from"./DefaultBufferWriter.js";import{T as C}from"./TransparencyPassType.js";import{L as U}from"./LineMarker.glsl.js";import{m as b,d as D,a as N}from"./renderState.js";import{b as y,a as x,L as M}from"./MarkerSizing.glsl.js";import{C as w}from"./RibbonLine.glsl.js";const B=new Map([[u.POSITION,0],[u.UV0,2],[u.AUXPOS1,3],[u.NORMAL,4],[u.COLOR,5],[u.COLORFEATUREATTRIBUTE,5],[u.SIZE,6],[u.SIZEFEATUREATTRIBUTE,6],[u.OPACITYFEATUREATTRIBUTE,7]]);class j extends T{initializeProgram(e){return new m(e.rctx,j.shader.get().build(this.configuration),B)}_makePipelineState(e,t){const r=this.configuration,s=e===C.NONE;return b({blending:r.output===n.Color||r.output===n.Alpha?s?A:f(e):null,depthTest:{func:E(e)},depthWrite:s?r.writeDepth?D:null:_(e),colorWrite:N,stencilWrite:r.hasOccludees?O:null,stencilTest:r.hasOccludees?t?g:S:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(){return this.configuration.occluder&&(this._occluderPipelineTransparent=b({blending:A,depthTest:R,depthWrite:null,colorWrite:N,stencilWrite:null,stencilTest:v}),this._occluderPipelineOpaque=b({blending:A,depthTest:R,depthWrite:null,colorWrite:N,stencilWrite:P,stencilTest:I}),this._occluderPipelineMaskWrite=b({blending:null,depthTest:L,depthWrite:null,colorWrite:null,stencilWrite:O,stencilTest:g})),this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?e===h.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:e===h.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,t)}}j.shader=new d(U,(()=>import("./LineMarker.glsl.js").then((e=>e.L))));class W extends c{constructor(e){super(e,new G),this._vertexAttributeLocations=B,this._configuration=new y,this._layout=this.createLayout()}dispose(){}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===h.DRAPED_MATERIAL?x.Draped:this.parameters.worldSpace?x.World:x.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==w.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===l.OccludeAndTransparentStencil,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(){}createLayout(){const e=i().vec3f(u.POSITION).vec2f(u.UV0).vec3f(u.AUXPOS1);return this.parameters.worldSpace&&e.vec3f(u.NORMAL),this.parameters.vvSize?e.f32(u.SIZEFEATUREATTRIBUTE):e.f32(u.SIZE),this.parameters.vvColor?e.f32(u.COLORFEATUREATTRIBUTE):e.vec4f(u.COLOR),this.parameters.vvOpacity&&e.f32(u.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new k(this._layout,this.parameters)}requiresSlot(e,t){return!(t!==n.Color&&t!==n.Alpha&&t!==n.Highlight&&t!==n.Depth||e!==h.DRAPED_MATERIAL&&(this.parameters.renderOccluded===l.OccludeAndTransparentStencil?e!==h.OPAQUE_MATERIAL&&e!==h.OCCLUDER_MATERIAL&&e!==h.TRANSPARENT_OCCLUDER_MATERIAL:t===n.Color||t===n.Alpha?e!==(this.parameters.writeDepth?h.TRANSPARENT_MATERIAL:h.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):e!==h.OPAQUE_MATERIAL))}createGLMaterial(e){return new F(e)}}class F extends o{_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(j,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==n.Color&&this._output!==n.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class G extends p{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.placement="end",this.cap=w.BUTT,this.anchor=M.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.hasOccludees=!1}}class k{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(a,i,n,o,c){const l=n.vertexAttributes.get(u.POSITION).data,h=l.length/3;let p=[1,0,0];const d=n.vertexAttributes.get(u.NORMAL);this._parameters.worldSpace&&e(d)&&(p=d.data);let T=1,m=0;this._parameters.vvSize?m=n.vertexAttributes.get(u.SIZEFEATUREATTRIBUTE).data[0]:n.vertexAttributes.has(u.SIZE)&&(T=n.vertexAttributes.get(u.SIZE).data[0]);let A=[1,1,1,1],f=0;this._parameters.vvColor?f=n.vertexAttributes.get(u.COLORFEATUREATTRIBUTE).data[0]:n.vertexAttributes.has(u.COLOR)&&(A=n.vertexAttributes.get(u.COLOR).data);let E=0;this._parameters.vvOpacity&&(E=n.vertexAttributes.get(u.OPACITYFEATUREATTRIBUTE).data[0]);const _=new Float32Array(o.buffer);let O=c*(this.vertexBufferLayout.stride/4);const g=(e,t,r,s)=>{if(_[O++]=e[0],_[O++]=e[1],_[O++]=e[2],_[O++]=r[0],_[O++]=r[1],_[O++]=t[0],_[O++]=t[1],_[O++]=t[2],this._parameters.worldSpace&&(_[O++]=p[0],_[O++]=p[1],_[O++]=p[2]),this._parameters.vvSize?_[O++]=m:_[O++]=T,this._parameters.vvColor)_[O++]=f;else{const e=Math.min(4*s,A.length-4);_[O++]=A[e],_[O++]=A[e+1],_[O++]=A[e+2],_[O++]=A[e+3]}this._parameters.vvOpacity&&(_[O++]=E)};let S;!function(e){e[e.ASCENDING=1]="ASCENDING",e[e.DESCENDING=-1]="DESCENDING"}(S||(S={}));const R=(e,i)=>{const n=t(z,l[3*e],l[3*e+1],l[3*e+2]),o=Z;let c=e+i;do{t(o,l[3*c],l[3*c+1],l[3*c+2]),c+=i}while(r(n,o)&&c>=0&&c<h);a&&(s(n,n,a),s(o,o,a)),g(n,o,[-1,-1],e),g(n,o,[1,-1],e),g(n,o,[1,1],e),g(n,o,[-1,-1],e),g(n,o,[1,1],e),g(n,o,[-1,1],e)},v=this._parameters.placement;"begin"!==v&&"begin-end"!==v||R(0,S.ASCENDING),"end"!==v&&"begin-end"!==v||R(h-1,S.DESCENDING)}}const z=a(),Z=a();export{W as L};
