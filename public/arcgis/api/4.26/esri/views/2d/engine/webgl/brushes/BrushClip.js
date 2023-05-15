// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/vec4f32 ../Utils ./WGLBrush ../shaders/BackgroundPrograms ../../../../webgl/enums ../../../../webgl/ProgramTemplate".split(" "),function(g,h,m,n,p,q,b,r){return function(d){function f(){var a=t.apply(this,arguments);a._color=m.fromValues(0,1,0,1);return a}g._inherits(f,d);var t=g._createSuper(f);d=f.prototype;d.dispose=function(){this._program&&this._program.dispose()};d.prepareState=function({context:a}){a.setStencilTestEnabled(!0);
a.setBlendingEnabled(!1);a.setFaceCullingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(b.StencilOperation.KEEP,b.StencilOperation.KEEP,b.StencilOperation.REPLACE);a.setStencilWriteMask(255);a.setStencilFunction(b.CompareFunction.ALWAYS,0,255)};d.draw=function(a,e){const {context:c,state:k,requestRender:l,allowDelayedRender:u}=a;a=n.createProgramDescriptor("clip",{geometry:[{location:0,name:"a_pos",count:2,type:b.DataType.SHORT}]});e=e.getVAO(c,k,a.attributes,a.bufferLayouts);h.isNone(e.indexBuffer)||
(this._program||(this._program=r.createProgram(c,q.background)),u&&h.isSome(l)&&!this._program.compiled?l():(c.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",k.displayMat3),c.bindVAO(e),c.drawElements(b.PrimitiveType.TRIANGLES,e.indexBuffer.size,b.DataType.UNSIGNED_INT,0),c.bindVAO()))};return g._createClass(f)}(p)});