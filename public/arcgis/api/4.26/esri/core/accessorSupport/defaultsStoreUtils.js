// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./PropertyOrigin"],function(c,d){c.setupConstructedDefaults=function(b,e,f){e.keys().forEach(a=>{f.set(a,e.get(a),d.OriginId.DEFAULTS)});Object.keys(b.metadatas).forEach(a=>{b.internalGet(a)&&f.set(a,b.internalGet(a),d.OriginId.DEFAULTS)})};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});