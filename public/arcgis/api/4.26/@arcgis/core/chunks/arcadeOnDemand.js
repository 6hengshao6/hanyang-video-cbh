/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../core/Error.js";import{L as r}from"./Logger.js";import{i as t}from"./maybe.js";import a from"../geometry/SpatialReference.js";const s=r.getLogger("esri.support.arcadeOnDemand");let i;function c(){return i||(i=(async()=>{const e=await import("./arcadeUtils.js").then((e=>e.aw));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),i}const n=(e,r,t)=>p.create(e,r,t,null,["$feature"]),o=(e,r,t)=>p.create(e,r,t,null,["$feature","$view"]),l=(e,r,t,a)=>p.create(e,r,t,a,["$feature","$view"]);class p{constructor(e,r,t,a,s,i,c){this.script=e,this.evaluate=a;const n=Array.isArray(i)?i:i.fields;this.fields=n,this._syntaxTree=t,this._arcade=r,this._arcadeFeature=s,this._spatialReference=c,this._referencesGeometry=r.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(r,i,n,o,l,u){const{arcade:m,Feature:f,Dictionary:d}=await c(),y=a.fromJSON(i);let h;try{h=m.parseScript(r,u)}catch(t){return s.error(new e("arcade-bad-expression","Failed to parse arcade script",{script:r,error:t})),null}const w=l.reduce(((e,r)=>({...e,[r]:null})),{});let g=null;t(o)&&(g=new d(o),g.immutable=!0,w.$config=null);const _=m.scriptUsesGeometryEngine(h),F=_&&m.enableGeometrySupport(),S=m.scriptUsesFeatureSet(h)&&m.enableFeatureSetSupport(),b=m.scriptIsAsync(h),$=b&&m.enableAsyncSupport(),v={vars:w,spatialReference:y,useAsync:!!$};await Promise.all([F,S,$]);const j=new Set;await m.loadDependentModules(j,h,null,b,_);const G=new d;G.immutable=!1,G.setField("scale",0);const R=m.compileScript(h,v);return new p(r,m,h,(e=>("$view"in e&&e.$view&&(G.setField("scale","object"==typeof e.$view?e.$view.scale:void 0),e.$view=G),g&&(e.$config=g),R({vars:e,spatialReference:y}))),new f,n,y)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}}export{p as A,o as a,n as b,l as c,c as l};
