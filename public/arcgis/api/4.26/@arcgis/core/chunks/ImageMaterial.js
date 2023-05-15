/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{S as t}from"./ShaderOutput.js";import{C as e}from"./basicInterfaces.js";import{G as s}from"./GLTextureMaterial.js";import{D as a,M as r}from"./Material.js";import{o as i,a as n,b as o,g as l,d as u}from"./OrderIndependentTransparency.js";import{R as p}from"./RenderSlot.js";import{s as c,c as h,d as m,D as d}from"./DefaultBufferWriter.js";import{T as f,P as g}from"./TriangleMaterial.js";import{_ as T}from"./tslib.es6.js";import"./interfaces2.js";import{S as _,P,R as O}from"./Program2.js";import{p as y}from"./ShaderTechniqueConfiguration.js";import{T as A}from"./TransparencyPassType.js";import{D as S}from"./DefaultTechniqueConfiguration.js";import{I as E}from"./ImageMaterial.glsl.js";import{B as j}from"./enums3.js";import{b as D,m as I,c as b,d as v,a as M}from"./renderState.js";class N extends _{initializeProgram(t){return new P(t.rctx,N.shader.get().build(this.configuration),a)}_setPipelineState(e,s){const a=this.configuration,r=e===A.NONE,u=e===A.FrontFace;return I({blending:a.output!==t.Color&&a.output!==t.Alpha||!a.transparent?null:r?R:i(e),culling:b(a.cullFace),depthTest:{func:n(e)},depthWrite:r?a.writeDepth?v:null:o(e),colorWrite:M,stencilWrite:a.hasOccludees?c:null,stencilTest:a.hasOccludees?s?h:m:null,polygonOffset:r||u?null:l(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(t,e){return e?this._occludeePipelineState:super.getPipelineState(t,e)}}N.shader=new O(E,(()=>import("./ImageMaterial.glsl.js").then((t=>t.I))));const R=D(j.ONE,j.ONE_MINUS_SRC_ALPHA);class w extends S{constructor(){super(...arguments),this.output=t.Color,this.cullFace=e.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=A.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}T([y({count:t.COUNT})],w.prototype,"output",void 0),T([y({count:e.COUNT})],w.prototype,"cullFace",void 0),T([y()],w.prototype,"hasSlicePlane",void 0),T([y()],w.prototype,"transparent",void 0),T([y()],w.prototype,"enableOffset",void 0),T([y()],w.prototype,"writeDepth",void 0),T([y()],w.prototype,"hasOccludees",void 0),T([y({count:A.COUNT})],w.prototype,"transparencyPassType",void 0),T([y()],w.prototype,"hasMultipassTerrain",void 0),T([y()],w.prototype,"cullAboveGround",void 0);class x extends f{constructor(t){super(t,new L),this.supportsEdges=!0,this._configuration=new w}getConfiguration(t,e){return this._configuration.output=t,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=e.transparencyPassType,this._configuration.enableOffset=e.camera.relativeElevation<u,this._configuration.hasMultipassTerrain=e.multipassTerrain.enabled,this._configuration.cullAboveGround=e.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,s){return!(s!==t.Color&&s!==t.Alpha&&s!==t.Highlight||e!==p.DRAPED_MATERIAL&&(s===t.Highlight?e!==p.OPAQUE_MATERIAL:e!==(this.parameters.transparent?this.parameters.writeDepth?p.TRANSPARENT_MATERIAL:p.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:p.OPAQUE_MATERIAL)))}createGLMaterial(t){return new C(t)}createBufferWriter(){return new d(g)}}class C extends s{constructor(t){super({...t,...t.material.parameters})}_updateParameters(t){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(N,t)}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:t.hasOccludees}),this._updateParameters(t))}beginSlot(e){return this._output!==t.Color&&this._output!==t.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class L extends r{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=e.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{x as I};