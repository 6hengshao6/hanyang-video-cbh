// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../shaderTechnique/BindType"],function(b,h,c,d){let m=function(){function e(a,k,f,g,l=null){this.name=a;this.type=k;this.arraySize=l;this.bind={[d.BindType.Pass]:null,[d.BindType.Draw]:null};c.isSome(f)&&c.isSome(g)&&(this.bind[f]=g)}e.prototype.equals=function(a){return this.type===a.type&&this.name===a.name&&this.arraySize===a.arraySize};return h._createClass(e)}();b.Uniform=m;Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});