// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","./isWebGL2Context"],function(d,f){d.loadBooleanExtension=function(a,b,c,e,g){if(e&&f(a))return!0;if(b[c])return!1;for(const h of g)if(a.getExtension(h))return!0;return!1};d.loadColorBufferFloat=function(a,b){if(f(a)){var c=!b.colorBufferHalfFloat&&a.getExtension("EXT_color_buffer_half_float")||!b.colorBufferFloat&&a.getExtension("EXT_color_buffer_float"),e=!b.colorBufferFloat&&a.getExtension("EXT_color_buffer_float");b=!b.floatBlend&&!b.colorBufferFloat&&a.getExtension("EXT_float_blend");
return c||e||b?{textureFloat:!!e,textureHalfFloat:!!c,floatBlend:!!b,R16F:a.R16F,RG16F:a.RG16F,RGBA16F:a.RGBA16F,R32F:a.R32F,RG32F:a.RG32F,RGBA32F:a.RGBA32F,R11F_G11F_B10F:a.R11F_G11F_B10F,RGB16F:a.RGB16F}:null}return a instanceof WebGLRenderingContext?(c=!b.colorBufferHalfFloat&&a.getExtension("EXT_color_buffer_half_float"),e=!b.colorBufferFloat&&a.getExtension("WEBGL_color_buffer_float"),a=!b.floatBlend&&!b.colorBufferFloat&&a.getExtension("EXT_float_blend"),c||e||a?{textureFloat:!!e,textureHalfFloat:!!c,
floatBlend:!!a,RGBA16F:c?c.RGBA16F_EXT:void 0,RGB16F:c?c.RGB16F_EXT:void 0,RGBA32F:e?e.RGBA32F_EXT:void 0}:null):null};d.loadCompressedTextureETC=function(a,b){return b.compressedTextureETC?null:(a=a.getExtension("WEBGL_compressed_texture_etc"))?{COMPRESSED_R11_EAC:a.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:a.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:a.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:a.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:a.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:a.COMPRESSED_SRGB8_ETC2,
COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:a.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:a.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null};d.loadCompressedTextureS3TC=function(a,b){return b.compressedTextureS3TC?null:(a=a.getExtension("WEBGL_compressed_texture_s3tc"))?{COMPRESSED_RGB_S3TC_DXT1:a.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:a.COMPRESSED_RGBA_S3TC_DXT1_EXT,
COMPRESSED_RGBA_S3TC_DXT3:a.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:a.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null};d.loadMinMaxBlending=function(a,b){return f(a)?{MIN:a.MIN,MAX:a.MAX}:b.blendMinMax?null:(a=a.getExtension("EXT_blend_minmax"))?{MIN:a.MIN_EXT,MAX:a.MAX_EXT}:null};d.loadTextureFilterAnisotropicCapability=function(a,b){return b.textureFilterAnisotropic?null:(a=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic"))?
{MAX_TEXTURE_MAX_ANISOTROPY:a.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:a.TEXTURE_MAX_ANISOTROPY_EXT}:null};d.loadTextureFloat=function(a,b){if(f(a))return{textureFloat:!0,textureFloatLinear:!b.textureFloatLinear&&!!a.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!0,HALF_FLOAT:a.HALF_FLOAT,R16F:a.R16F,RG16F:a.RG16F,RGBA16F:a.RGBA16F,R32F:a.R32F,RG32F:a.RG32F,RGBA32F:a.RGBA32F,R11F_G11F_B10F:a.R11F_G11F_B10F,RGB16F:a.RGB16F};if(a instanceof WebGLRenderingContext){const c=
!b.textureHalfFloat&&a.getExtension("OES_texture_half_float");return{textureFloat:!b.textureFloat&&!!a.getExtension("OES_texture_float"),textureFloatLinear:!b.textureFloatLinear&&!!a.getExtension("OES_texture_float_linear"),textureHalfFloat:!!c,textureHalfFloatLinear:!b.textureHalfFloatLinear&&!!a.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:c?c.HALF_FLOAT_OES:void 0}}return null};d.loadTextureNorm16=function(a,b){return!f(a)||b.textureNorm16?null:(a=a.getExtension("EXT_texture_norm16"))?
{R16:a.R16_EXT,RG16:a.RG16_EXT,RGB16:a.RGB16_EXT,RGBA16:a.RGBA16_EXT,R16_SNORM:a.R16_SNORM_EXT,RG16_SNORM:a.RG16_SNORM_EXT,RGB16_SNORM:a.RGB16_SNORM_EXT,RGBA16_SNORM:a.RGBA16_SNORM_EXT}:null};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});