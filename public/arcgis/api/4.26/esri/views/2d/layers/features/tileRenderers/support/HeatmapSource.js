// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../renderers/support/heatmapUtils"],function(a,c,d){let f=function(){function b(){this.gradient=null;this.height=512;this.intensities=null;this.width=512}b.prototype.render=function(e){d.drawHeatmap(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)};return c._createClass(b)}();a.HeatmapSource=f;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});