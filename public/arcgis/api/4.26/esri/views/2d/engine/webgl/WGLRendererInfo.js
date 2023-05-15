// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/screenUtils ../../../../core/unitUtils ../../../../renderers/support/lengthUtils ./Utils ./techniques/Technique ./techniques/utils ../../../webgl/capabilities".split(" "),function(q,r,l,m,t,u,n,v,w,x){function p(h,c){const b=c.length;if(h<c[0].value||1===b)return c[0].size;for(let a=1;a<b;a++)if(h<c[a].value)return c[a-1].size+(h-c[a-1].value)/(c[a].value-c[a-1].value)*(c[a].size-c[a-1].size);return c[b-
1].size}let y=function(){function h(){this.symbolLevels=[];this.vvColorValues=new Float32Array(8);this.vvColors=new Float32Array(32);this.vvOpacityValues=new Float32Array(8);this.vvOpacities=new Float32Array(8);this.vvSizeMinMaxValue=new Float32Array(4);this.outsideLabelsVisible=!1;this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1};this._technique=v.Technique}var c=h.prototype;c.getSizeVVFieldStops=function(b){const a=
this._vvSizeFieldStops;if(a)switch(a.type){case "static":return a;case "level-dependent":return l.unwrapOr(a.levels[b],()=>{var d=Infinity,e=0;for(var f in a.levels){const g=parseFloat(f),k=Math.abs(b-g);k<d&&(d=k,e=g)}if(Infinity===d)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};d=2**((b-e)/2);e=l.unwrap(a.levels[e]);f=new Float32Array(e.values);f[2]*=d;f[3]*=d;return{sizes:l.unwrap(e.sizes),values:f}})}};c.update=function(b){l.isSome(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,
b)};c.setInfo=function(b,a,d){this._updateEffects(d);this._vvInfo=a;this._technique=w.getTechniqueFromRenderer(b);this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,b)};c.getVariation=function(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:x.getWebGLCapabilities("2d").supportsTextureFloat}};c.getVariationHash=function(){return this._technique.getVariationHash(this.rendererSchema)<<
1|(this.outsideLabelsVisible?1:0)};c._updateEffects=function(b){l.isSome(b)?this.outsideLabelsVisible=b.excludedLabelsVisible:this.outsideLabelsVisible=!1};c._updateVisualVariables=function(b,a){const d=this._vvMaterialParameters;d.vvOpacityEnabled=!1;d.vvSizeEnabled=!1;d.vvColorEnabled=!1;d.vvRotationEnabled=!1;if(b){var e=b.size;if(e){d.vvSizeEnabled=!0;if(e.minMaxValue){const g=e.minMaxValue;let k;if(n.isDefined(g.minSize)&&n.isDefined(g.maxSize))if(n.isNumber(g.minSize)&&n.isNumber(g.maxSize)){k=
m.pt2px(g.minSize);var f=m.pt2px(g.maxSize)}else f=a.scale,k=m.pt2px(p(f,g.minSize.stops)),f=m.pt2px(p(f,g.maxSize.stops));this.vvSizeMinMaxValue.set([g.minDataValue,g.maxDataValue,k,f])}e.scaleStops&&(this.vvSizeScaleStopsValue=m.pt2px(p(a.scale,e.scaleStops.stops)));e.unitValue&&(this.vvSizeUnitValueToPixelsRatio=t.getMetersPerUnitForSR(a.spatialReference)/u.meterIn[e.unitValue.unit]/a.resolution);e.fieldStops&&(this._vvSizeFieldStops=e.fieldStops)}if(a=b.color)d.vvColorEnabled=!0,this.vvColorValues.set(a.values),
this.vvColors.set(a.colors);if(a=b.opacity)d.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities);if(b=b.rotation)d.vvRotationEnabled=!0,d.vvRotationType=b.type}};r._createClass(h,[{key:"vvMaterialParameters",get:function(){return this._vvMaterialParameters}}]);return h}();q.WGLRendererInfo=y;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});