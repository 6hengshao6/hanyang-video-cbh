// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry/support/jsonUtils ../CIMCursor ../CIMEffects ../CIMOperators".split(" "),function(g,n,e,h,k,l){const p=96/72;let q=function(){function f(){}f.executeEffects=function(b,a,c,d){a=h.cloneAndDecodeGeometry(a);a=new k.SimpleGeometryCursor(a);for(const m of b)(b=l.getEffectOperator(m))&&(a=b.execute(a,m,p,c,d));return a};f.next=function(b){b=b.next();h.deltaEncodeGeometry(b);return b};f.applyEffects=function(b,a,c){if(!b)return a;
a=new k.SimpleGeometryCursor(a);for(var d of b)(b=l.getEffectOperator(d))&&(a=b.execute(a,d,1,null,c));for(c=null;d=a.next();)c?e.isPolyline(c)?e.isPolyline(d)&&c.paths.push(...d.paths):e.isPolygon(c)&&e.isPolygon(d)&&c.rings.push(...d.rings):c=d;return c};return n._createClass(f)}();g.CIMEffectHelper=q;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});