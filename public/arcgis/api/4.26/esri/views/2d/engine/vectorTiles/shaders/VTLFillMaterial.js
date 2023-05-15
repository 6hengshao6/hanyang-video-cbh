// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ./enums ./VTLMaterial ../../../../webgl/enums ../../../../webgl/VertexElementDescriptor".split(" "),function(l,e,d,c,g,h){let k=function(b){function a(f){return m.call(this,f)}e._inherits(a,b);var m=e._createSuper(a);b=a.prototype;b.geometryInfo=function(){return a.GEOMETRY_LAYOUT};b.opacityInfo=function(){return null};b.attributes=function(){return a.ATTRIBUTES};b.attributesInfo=function(){return a.ATTRIBUTES_INFO};return e._createClass(a)}(c.VTLMaterial);
k.ATTRIBUTES=["fill-color","fill-opacity","fill-pattern"];k.GEOMETRY_LAYOUT=[new h.VertexElementDescriptor("a_pos",2,g.DataType.SHORT,0,4)];k.ATTRIBUTES_INFO={"fill-color":{name:"color",type:d.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:d.EncodingType.R8_UNSIGNED,precisionFactor:100},"fill-pattern":{name:"tlbr",type:d.EncodingType.R16G16B16A16_PATTERN,isOptional:!0}};c=function(b){function a(f,n){f=m.call(this,f);f._usefillColor=n;return f}e._inherits(a,b);var m=e._createSuper(a);
b=a.prototype;b.geometryInfo=function(){return a.GEOMETRY_LAYOUT};b.opacityInfo=function(){return null};b.attributes=function(){return this._usefillColor?a.ATTRIBUTES_FILL:a.ATTRIBUTES_OUTLINE};b.attributesInfo=function(){return this._usefillColor?a.ATTRIBUTES_INFO_FILL:a.ATTRIBUTES_INFO_OUTLINE};return e._createClass(a)}(c.VTLMaterial);c.ATTRIBUTES_OUTLINE=["fill-outline-color","fill-opacity"];c.ATTRIBUTES_FILL=["fill-color","fill-opacity"];c.GEOMETRY_LAYOUT=[new h.VertexElementDescriptor("a_pos",
2,g.DataType.SHORT,0,8),new h.VertexElementDescriptor("a_offset",2,g.DataType.BYTE,4,8),new h.VertexElementDescriptor("a_xnormal",2,g.DataType.BYTE,6,8)];c.ATTRIBUTES_INFO_OUTLINE={"fill-outline-color":{name:"color",type:d.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:d.EncodingType.R8_UNSIGNED,precisionFactor:100}};c.ATTRIBUTES_INFO_FILL={"fill-color":{name:"color",type:d.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:d.EncodingType.R8_UNSIGNED,precisionFactor:100}};
l.VTLFillMaterial=k;l.VTLOutlineMaterial=c;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});