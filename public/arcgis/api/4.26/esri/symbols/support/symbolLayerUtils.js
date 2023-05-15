// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require exports ../../request ../../core/Error ../../core/ItemCache ../../core/maybe ../../geometry/support/aaBoundingBox ./symbolLayerUtils3D".split(" "),function(p,d,q,e,l,f,m,n){async function g(a,b){if(a.resource?.href)return r(a.resource.href).then(c=>[c.width,c.height]);if(a.resource?.primitive)return f.isSome(b)?[b,b]:[256,256];throw new e("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");}function t(a,b){return g(a,b).then(c=>
{if(null==a.size)return c;c=c[0]/c[1];return 1<c?[a.size,a.size/c]:[a.size*c,a.size]})}function r(a){return q(a,{responseType:"image"}).then(b=>b.data)}function h(a,b){return u(a,b).then(c=>m.size(c))}async function v(a,b){b=await h(a,b);return n.objectSymbolLayerSizeWithResourceSize(b,a)}async function u(a,b){if(!a.isPrimitive){b=f.unwrapOrThrow(a.resource?.href);var c=k.get(b);if(void 0!==c)return c;c=await (await new Promise((w,x)=>p(["../../views/3d/layers/graphics/objectResourceUtils"],w,x))).fetch(b,
{disableTextures:!0});k.put(b,c.referenceBoundingBox);return c.referenceBoundingBox}c=null;if(a.resource&&a.resource.primitive&&(c=m.create(n.objectSymbolLayerPrimitiveBoundingBox(a.resource.primitive)),f.isSome(b)))for(a=0;a<c.length;a++)c[a]*=b;return c?Promise.resolve(c):Promise.reject(new e("symbol:invalid-resource","The symbol does not have a valid resource"))}let k=new l(50);d.clearBoundingBoxCache=function(){k=new l(50)};d.computeIconLayerResourceSize=g;d.computeLayerResourceSize=function(a,
b){if("icon"===a.type)return g(a,b);if("object"===a.type)return h(a,b);throw new e("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");};d.computeLayerSize=async function(a,b){if("icon"===a.type)return t(a,b);if("object"===a.type)return v(a,b);throw new e("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");};d.computeObjectLayerResourceSize=h;Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});