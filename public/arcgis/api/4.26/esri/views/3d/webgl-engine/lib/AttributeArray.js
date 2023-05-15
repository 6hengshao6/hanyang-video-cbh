// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/typedArrayUtil"],function(b,c){b.cloneAttributeData=function(a){if(a.length<c.NATIVE_ARRAY_MAX_SIZE)return Array.from(a);if(c.isArray(a))return Float64Array.from(a);switch(a.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(a);case 2:return Uint16Array.from(a);case 4:return Float32Array.from(a);default:case 8:return Float64Array.from(a)}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});