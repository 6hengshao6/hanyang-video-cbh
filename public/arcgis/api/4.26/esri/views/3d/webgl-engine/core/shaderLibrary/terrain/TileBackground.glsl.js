// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec3f64 ../output/BlendOptions ./BackgroundGrid.glsl ../util/BlendModes.glsl ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(b,h,n,p,q,r,t,u,d,v){b.BlendLayersOutput=void 0;(function(a){a[a.Composite=0]="Composite";a[a.ColorComposite=1]="ColorComposite";a[a.GridComposite=2]="GridComposite";
a[a.GroupBackgroundComposite=3]="GroupBackgroundComposite";a[a.COUNT=4]="COUNT"})(b.BlendLayersOutput||(b.BlendLayersOutput={}));b.BaseOpacityMode=void 0;(function(a){a[a.NotRequired=0]="NotRequired";a[a.Required=1]="Required";a[a.COUNT=2]="COUNT"})(b.BaseOpacityMode||(b.BaseOpacityMode={}));b.PremultipliedAlphaSource=void 0;(function(a){a[a.Off=0]="Off";a[a.On=1]="On";a[a.COUNT=2]="COUNT"})(b.PremultipliedAlphaSource||(b.PremultipliedAlphaSource={}));let w=function(a){function c(){var e=g.apply(this,
arguments);e.baseOpacity=1;e.backgroundColor=n.ZEROS;e.fboTexture=null;return e}h._inherits(c,a);var g=h._createSuper(c);return h._createClass(c)}(d.NoParameters);b.TileBackground=function(a,c){const g=c.output===b.BlendLayersOutput.GridComposite,e=c.output===b.BlendLayersOutput.ColorComposite,l=c.output===b.BlendLayersOutput.GroupBackgroundComposite,m=c.output===b.BlendLayersOutput.Composite;g&&a.fragment.include(q.BackgroundGrid);e&&a.fragment.uniforms.add(new t.Float3PassUniform("backgroundColor",
f=>f.backgroundColor));const k=c.baseOpacityMode===b.BaseOpacityMode.Required;k&&a.fragment.uniforms.add(new u.FloatPassUniform("baseOpacity",f=>f.baseOpacity));m&&a.fragment.uniforms.add(new v.Texture2DPassUniform("fboColor",f=>f.fboTexture));const x=c.blendMode!==p.LayerBlendMode.Normal,y=c.premultipliedSource===b.PremultipliedAlphaSource.On;a.fragment.include(r.BlendModes,c);a.fragment.code.add(d.glsl`
    vec4 getBackground(vec2 uv) {
      return ${k?d.glsl`baseOpacity *`:""} ${l?d.glsl`vec4(0.0, 0.0, 0.0, 0.0)`:e?d.glsl`vec4(backgroundColor, 1.0)`:g?d.glsl`vec4(gridColor(uv), 1.0)`:d.glsl`texelFetch(fboColor, ivec2(gl_FragCoord.xy), 0)`};
    }

    vec4 blendLayers(vec4 bgColor, vec4 colorLayer, float opacity) {
      ${x?d.glsl`
          vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
          vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
          return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);`:d.glsl`
          float composeAlpha = colorLayer.a * opacity;
          return ${!y&&(m&&!k||l)?d.glsl`colorLayer * opacity;`:d.glsl`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`}`}
    }`)};b.TileBackgroundPassParameters=w;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});