// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/vec3f32 ../attributes/VertexTextureCoordinates.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/GLTextureMaterial".split(" "),function(f,h,k,r,p,q,d,l,m,g,n){k=k.fromValues(0,.6,.2);f.PBRMode=void 0;(function(a){a[a.Disabled=
0]="Disabled";a[a.Normal=1]="Normal";a[a.Schematic=2]="Schematic";a[a.Water=3]="Water";a[a.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh";a[a.Terrain=5]="Terrain";a[a.TerrainWithWater=6]="TerrainWithWater";a[a.COUNT=7]="COUNT"})(f.PBRMode||(f.PBRMode={}));n=function(a){function b(){return e.apply(this,arguments)}h._inherits(b,a);var e=h._createSuper(b);return h._createClass(b)}(n.GLTextureMaterialBindParameters);f.PBRBindParameters=n;f.PBRSchematicMRRValues=k;f.PhysicallyBasedRenderingParameters=
function(a,b){const e=a.fragment,t=b.hasMetallicRoughnessTexture||b.hasEmissionTexture||b.hasOcclusionTexture;b.pbrMode===f.PBRMode.Normal&&t&&a.include(r.VertexTextureCoordinates,b);b.pbrMode===f.PBRMode.Schematic?e.code.add(d.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`):b.pbrMode===f.PBRMode.Disabled?e.code.add(d.glsl`float getBakedOcclusion() { return 1.0; }`):b.pbrMode===f.PBRMode.Normal&&(e.code.add(d.glsl`vec3 mrr;
vec3 emission;
float occlusion;`),a=b.pbrTextureBindType,b.hasMetallicRoughnessTexture&&(e.uniforms.add(a===g.BindType.Pass?new m.Texture2DPassUniform("texMetallicRoughness",c=>c.textureMetallicRoughness):new l.Texture2DDrawUniform("texMetallicRoughness",c=>c.textureMetallicRoughness)),e.code.add(d.glsl`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),b.hasEmissionTexture&&(e.uniforms.add(a===g.BindType.Pass?new m.Texture2DPassUniform("texEmission",c=>c.textureEmissive):new l.Texture2DDrawUniform("texEmission",c=>c.textureEmissive)),e.code.add(d.glsl`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),b.hasOcclusionTexture?(e.uniforms.add(a===g.BindType.Pass?new m.Texture2DPassUniform("texOcclusion",c=>c.textureOcclusion):new l.Texture2DDrawUniform("texOcclusion",c=>c.textureOcclusion)),e.code.add(d.glsl`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):e.code.add(d.glsl`float getBakedOcclusion() { return 1.0; }`),e.uniforms.add(a===g.BindType.Pass?[new q.Float3PassUniform("emissionFactor",c=>c.emissiveFactor),new q.Float3PassUniform("mrrFactors",c=>c.mrrFactors)]:[new p.Float3DrawUniform("emissionFactor",c=>c.emissiveFactor),new p.Float3DrawUniform("mrrFactors",c=>c.mrrFactors)]),e.code.add(d.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${b.hasMetallicRoughnessTexture?d.glsl`applyMetallnessAndRoughness(${b.hasMetallicRoughnessTextureTransform?d.glsl`metallicRoughnessUV`:"vuv0"});`:""}

      ${b.hasEmissionTexture?d.glsl`applyEmission(${b.hasEmissiveTextureTransform?d.glsl`emissiveUV`:"vuv0"});`:""}

      ${b.hasOcclusionTexture?d.glsl`applyOcclusion(${b.hasOcclusionTextureTransform?d.glsl`occlusionUV`:"vuv0"});`:""}
    }
  `))};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});