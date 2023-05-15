// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/maybe","../../geometry/support/spatialReferenceUtils"],function(k,r,g,d){function l(a,b){if(a===b)return!0;if(null==a||null==b||a.length!==b.length)return!1;for(let c=0;c<a.length;c++){const e=a[c],f=b[c];if(e.length!==f.length)return!1;for(let h=0;h<e.length;h++)if(e[h]!==f[h])return!1}return!0}function m(a,b){if(a===b)return!0;if(null==a||null==b||a.length!==b.length)return!1;for(let c=0;c<a.length;c++)if(!l(a[c],b[c]))return!1;return!0}function n(a,
b){return a===b||g.isSome(a)&&g.isSome(b)&&d.equals(a.spatialReference,b.spatialReference)&&a.x===b.x&&a.y===b.y&&a.z===b.z&&a.m===b.m}function p(a,b){if(a===b)return!0;if(g.isNone(a)||g.isNone(b)||a.type!==b.type)return!1;switch(a.type){case "point":return n(a,b);case "extent":return a=a.hasZ!==b.hasZ||a.hasM!==b.hasM?!1:d.equals(a.spatialReference,b.spatialReference)?a.xmin===b.xmin&&a.ymin===b.ymin&&a.zmin===b.zmin&&a.xmax===b.xmax&&a.ymax===b.ymax&&a.zmax===b.zmax:!1,a;case "polyline":return a=
a.hasZ!==b.hasZ||a.hasM!==b.hasM?!1:d.equals(a.spatialReference,b.spatialReference)?m(a.paths,b.paths):!1,a;case "polygon":return a=a.hasZ!==b.hasZ||a.hasM!==b.hasM?!1:d.equals(a.spatialReference,b.spatialReference)?m(a.rings,b.rings):!1,a;case "multipoint":return a=a.hasZ!==b.hasZ||a.hasM!==b.hasM?!1:d.equals(a.spatialReference,b.spatialReference)?l(a.points,b.points):!1,a;case "mesh":return!1}}function q(a,b){if(a===b)return!0;if(!a||!b)return!1;const c=Object.keys(a),e=Object.keys(b);if(c.length!==
e.length)return!1;for(const f of c)if(a[f]!==b[f])return!1;return!0}k.equals=function(a,b){return a===b?!0:null!=a&&null!=b&&a.objectId===b.objectId&&p(a.geometry,b.geometry)&&q(a.attributes,b.attributes)?!0:!1};k.pointEquals=n;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});