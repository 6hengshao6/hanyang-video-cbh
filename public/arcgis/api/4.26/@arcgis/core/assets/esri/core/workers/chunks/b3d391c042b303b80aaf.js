"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8561],{98561:(e,r,t)=>{t.r(r),t.d(r,{clearBoundingBoxCache:()=>y,computeIconLayerResourceSize:()=>h,computeLayerResourceSize:()=>f,computeLayerSize:()=>m,computeObjectLayerResourceSize:()=>p});var n=t(82058),o=t(60991),i=t(30831),s=t(71252),u=t(53326),c=t(30823);t(31450),t(48578),t(71552),t(76506),t(88762),t(32101),t(92143),t(40642),t(50406),t(91700),t(6906),t(21801),t(34250),t(91306),t(60474),t(66396),t(86656),t(17533),t(6540),t(73796),t(12047),t(21972),t(91055),t(19657),t(97714),t(60947),t(53785),t(57251),t(89623),t(2906),t(91597),t(86787),t(35132),t(92482),t(82426),t(72836),t(29794),t(7200);let a=l();function l(){return new i.I(50)}function y(){a=l()}function f(e,r){if("icon"===e.type)return h(e,r);if("object"===e.type)return p(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function m(e,r){if("icon"===e.type)return function(e,r){return h(e,r).then((r=>{if(null==e.size)return r;const t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}(e,r);if("object"===e.type)return async function(e,r){const t=await p(e,r);return(0,c.b)(t,e)}(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function h(e,r){if(e.resource?.href)return(t=e.resource.href,(0,n.default)(t,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var t;if(e.resource?.primitive)return(0,s.i)(r)?[r,r]:[256,256];throw new o.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function p(e,r){return async function(e,r){if(!e.isPrimitive){const r=(0,s.c)(e.resource?.href),n=a.get(r);if(void 0!==n)return n;const o=await Promise.all([t.e(2476),t.e(779),t.e(6492)]).then(t.bind(t,66492)).then((e=>e.o)),i=await o.fetch(r,{disableTextures:!0});return a.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=(0,u.c)((0,c.o)(e.resource.primitive)),(0,s.i)(r)))for(let e=0;e<n.length;e++)n[e]*=r;return n?Promise.resolve(n):Promise.reject(new o.Z("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((e=>(0,u.D)(e)))}}}]);