// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/VertexArrayObject","../../../webgl/VertexElementDescriptor"],function(f,g,b,h,k){return function(){function d(c,e){this._rctx=c;this._vertexBuffer=g.BufferObject.createVertex(c,b.Usage.STATIC_DRAW,new Uint16Array(e));this._vao=new h.VertexArrayObject(c,new Map([["a_position",0]]),{geometry:[new k.VertexElementDescriptor("a_position",2,b.DataType.SHORT,0,4)]},{geometry:this._vertexBuffer});
this._count=e.length/2}var a=d.prototype;a.bind=function(){this._rctx.bindVAO(this._vao)};a.unbind=function(){this._rctx.bindVAO(null)};a.dispose=function(){this._vao.dispose(!1);this._vertexBuffer.dispose()};a.draw=function(){this._rctx.bindVAO(this._vao);this._rctx.drawArrays(b.PrimitiveType.TRIANGLE_STRIP,0,this._count)};return f._createClass(d)}()});