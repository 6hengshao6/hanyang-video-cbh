// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ./testAppleAmdDrawArrays ./testDoublePrecisionArithmetic ./testFloatBufferBlend ./testSamplerPrecision ./testSVGPremultipliedAlpha".split(" "),function(b,d,e,f,g,h,k){let l=function(){function c(a){this.rctx=a;this.floatBufferBlend=new g.FloatBufferBlend(a);this.svgPremultipliesAlpha=new k.SVGPremultipliedAlpha(a);this.doublePrecisionRequiresObfuscation=new f.DoublePrecisionRequiresObfuscation(a);this.ignoresSamplerPrecision=new h.IgnoresSamplerPrecision(a);
this.drawArraysRequiresIndicesTypeReset=new e.DrawArraysRequiresIndicesTypeReset(a)}c.prototype.dispose=function(){this.ignoresSamplerPrecision.dispose();this.doublePrecisionRequiresObfuscation.dispose();this.svgPremultipliesAlpha.dispose();this.floatBufferBlend.dispose();this.drawArraysRequiresIndicesTypeReset.dispose()};return d._createClass(c)}();b.WebGLDriverTest=l;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});