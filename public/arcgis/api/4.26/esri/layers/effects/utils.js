// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./effects"],function(c,e){c.canInterpolateEffects=function(a,b){const d=a.length>b.length?a:b;return(a.length>b.length?b:a).every((f,g)=>f.type===d[g].type)};c.isEffectFunctions=function(a){return(a=a[0])?"type"in a:!1};c.normalizeEffects=function(a,b){const d=a.length>b.length?a:b;a=a.length>b.length?b:a;for(b=a.length;b<d.length;b++)a.push(e.createEffectWithInitialValues(d[b]))};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});