// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["./utils"],function(c){const f={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/aspect",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(b,a){return b.painter.materialManager.getProgram(f,[])},bindTextureAndUniforms:function(b,a,d){c.setSingleImageTextures(b,a,d);c.setCoordsAndTransforms(a);const {width:g,height:h,resolution:e}=d;a.setUniform2fv("u_srcImageSize",[g,h]);a.setUniform2fv("u_cellSize",[e,e])}}});