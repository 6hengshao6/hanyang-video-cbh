"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2432],{51006:(E,_,T)=>{var R,A,N,C,S,e,t,I,O,n,r,o,L,D,M,P,U,G,B,i,u,c,s,F;T.d(_,{B:()=>N,C:()=>f,D:()=>I,F:()=>e,P:()=>D,R:()=>s,S:()=>M,T:()=>L,U:()=>G,a:()=>P,b:()=>o,c:()=>r,d:()=>A,e:()=>O,f:()=>n,g:()=>u,h:()=>c,i:()=>U,k:()=>S,l:()=>F,m:()=>a,n:()=>i,p:()=>t,q:()=>C}),function(E){E[E.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",E[E.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",E[E.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(R||(R={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(A||(A={})),function(E){E[E.ZERO=0]="ZERO",E[E.ONE=1]="ONE",E[E.SRC_COLOR=768]="SRC_COLOR",E[E.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",E[E.SRC_ALPHA=770]="SRC_ALPHA",E[E.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",E[E.DST_ALPHA=772]="DST_ALPHA",E[E.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",E[E.DST_COLOR=774]="DST_COLOR",E[E.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",E[E.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",E[E.CONSTANT_COLOR=32769]="CONSTANT_COLOR",E[E.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",E[E.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",E[E.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(N||(N={})),function(E){E[E.ADD=32774]="ADD",E[E.SUBTRACT=32778]="SUBTRACT",E[E.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(C||(C={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",E[E.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",E[E.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",E[E.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",E[E.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",E[E.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(S||(S={})),function(E){E[E.FRONT=1028]="FRONT",E[E.BACK=1029]="BACK",E[E.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(e||(e={})),function(E){E[E.CW=2304]="CW",E[E.CCW=2305]="CCW"}(t||(t={})),function(E){E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.INT=5124]="INT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.FLOAT=5126]="FLOAT"}(I||(I={})),function(E){E[E.NEVER=512]="NEVER",E[E.LESS=513]="LESS",E[E.EQUAL=514]="EQUAL",E[E.LEQUAL=515]="LEQUAL",E[E.GREATER=516]="GREATER",E[E.NOTEQUAL=517]="NOTEQUAL",E[E.GEQUAL=518]="GEQUAL",E[E.ALWAYS=519]="ALWAYS"}(O||(O={})),function(E){E[E.ZERO=0]="ZERO",E[E.KEEP=7680]="KEEP",E[E.REPLACE=7681]="REPLACE",E[E.INCR=7682]="INCR",E[E.DECR=7683]="DECR",E[E.INVERT=5386]="INVERT",E[E.INCR_WRAP=34055]="INCR_WRAP",E[E.DECR_WRAP=34056]="DECR_WRAP"}(n||(n={})),function(E){E[E.NEAREST=9728]="NEAREST",E[E.LINEAR=9729]="LINEAR",E[E.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",E[E.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",E[E.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",E[E.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(r||(r={})),function(E){E[E.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",E[E.REPEAT=10497]="REPEAT",E[E.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(o||(o={})),function(E){E[E.TEXTURE_2D=3553]="TEXTURE_2D",E[E.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",E[E.TEXTURE_3D=32879]="TEXTURE_3D",E[E.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",E[E.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",E[E.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",E[E.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",E[E.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(L||(L={})),function(E){E[E.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.ALPHA=6406]="ALPHA",E[E.RGB=6407]="RGB",E[E.RGBA=6408]="RGBA",E[E.LUMINANCE=6409]="LUMINANCE",E[E.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",E[E.RED=6403]="RED",E[E.RG=33319]="RG",E[E.RED_INTEGER=36244]="RED_INTEGER",E[E.RG_INTEGER=33320]="RG_INTEGER",E[E.RGB_INTEGER=36248]="RGB_INTEGER",E[E.RGBA_INTEGER=36249]="RGBA_INTEGER"}(D||(D={})),function(E){E[E.RGBA4=32854]="RGBA4",E[E.R16F=33325]="R16F",E[E.RG16F=33327]="RG16F",E[E.RGB32F=34837]="RGB32F",E[E.RGBA16F=34842]="RGBA16F",E[E.R32F=33326]="R32F",E[E.RG32F=33328]="RG32F",E[E.RGBA32F=34836]="RGBA32F",E[E.R11F_G11F_B10F=35898]="R11F_G11F_B10F",E[E.RGB8=32849]="RGB8",E[E.RGBA8=32856]="RGBA8",E[E.RGB5_A1=32855]="RGB5_A1",E[E.R8=33321]="R8",E[E.RG8=33323]="RG8",E[E.R8I=33329]="R8I",E[E.R8UI=33330]="R8UI",E[E.R16I=33331]="R16I",E[E.R16UI=33332]="R16UI",E[E.R32I=33333]="R32I",E[E.R32UI=33334]="R32UI",E[E.RG8I=33335]="RG8I",E[E.RG8UI=33336]="RG8UI",E[E.RG16I=33337]="RG16I",E[E.RG16UI=33338]="RG16UI",E[E.RG32I=33339]="RG32I",E[E.RG32UI=33340]="RG32UI",E[E.RGB16F=34843]="RGB16F",E[E.RGB9_E5=35901]="RGB9_E5",E[E.SRGB8=35905]="SRGB8",E[E.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",E[E.RGB565=36194]="RGB565",E[E.RGBA32UI=36208]="RGBA32UI",E[E.RGB32UI=36209]="RGB32UI",E[E.RGBA16UI=36214]="RGBA16UI",E[E.RGB16UI=36215]="RGB16UI",E[E.RGBA8UI=36220]="RGBA8UI",E[E.RGB8UI=36221]="RGB8UI",E[E.RGBA32I=36226]="RGBA32I",E[E.RGB32I=36227]="RGB32I",E[E.RGBA16I=36232]="RGBA16I",E[E.RGB16I=36233]="RGB16I",E[E.RGBA8I=36238]="RGBA8I",E[E.RGB8I=36239]="RGB8I",E[E.R8_SNORM=36756]="R8_SNORM",E[E.RG8_SNORM=36757]="RG8_SNORM",E[E.RGB8_SNORM=36758]="RGB8_SNORM",E[E.RGBA8_SNORM=36759]="RGBA8_SNORM",E[E.RGB10_A2=32857]="RGB10_A2",E[E.RGB10_A2UI=36975]="RGB10_A2UI"}(M||(M={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",E[E.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",E[E.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",E[E.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.INT=5124]="INT",E[E.HALF_FLOAT=5131]="HALF_FLOAT",E[E.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",E[E.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",E[E.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",E[E.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(P||(P={})),function(E){E[E.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",E[E.STENCIL_INDEX8=36168]="STENCIL_INDEX8",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",E[E.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",E[E.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",E[E.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(U||(U={})),function(E){E[E.STATIC_DRAW=35044]="STATIC_DRAW",E[E.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",E[E.STREAM_DRAW=35040]="STREAM_DRAW",E[E.STATIC_READ=35045]="STATIC_READ",E[E.DYNAMIC_READ=35049]="DYNAMIC_READ",E[E.STREAM_READ=35041]="STREAM_READ",E[E.STATIC_COPY=35046]="STATIC_COPY",E[E.DYNAMIC_COPY=35050]="DYNAMIC_COPY",E[E.STREAM_COPY=35042]="STREAM_COPY"}(G||(G={})),function(E){E[E.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",E[E.VERTEX_SHADER=35633]="VERTEX_SHADER"}(B||(B={})),function(E){E[E.FRAMEBUFFER=36160]="FRAMEBUFFER",E[E.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",E[E.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(i||(i={})),function(E){E[E.TEXTURE=0]="TEXTURE",E[E.RENDER_BUFFER=1]="RENDER_BUFFER",E[E.CUBEMAP=2]="CUBEMAP"}(u||(u={})),function(E){E[E.NONE=0]="NONE",E[E.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",E[E.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(c||(c={})),function(E){E[E.Texture=0]="Texture",E[E.BufferObject=1]="BufferObject",E[E.VertexArrayObject=2]="VertexArrayObject",E[E.Shader=3]="Shader",E[E.Program=4]="Program",E[E.FramebufferObject=5]="FramebufferObject",E[E.Renderbuffer=6]="Renderbuffer",E[E.Sync=7]="Sync",E[E.COUNT=8]="COUNT"}(s||(s={})),function(E){E[E.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",E[E.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",E[E.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",E[E.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",E[E.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",E[E.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",E[E.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",E[E.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",E[E.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",E[E.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",E[E.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",E[E.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",E[E.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",E[E.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",E[E.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",E[E.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(F||(F={}));const a=33306;var f,l,H,m,Y,x,V;!function(E){E[E.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",E[E.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",E[E.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",E[E.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",E[E.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",E[E.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",E[E.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",E[E.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",E[E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(f||(f={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.FLOAT_VEC2=35664]="FLOAT_VEC2",E[E.FLOAT_VEC3=35665]="FLOAT_VEC3",E[E.FLOAT_VEC4=35666]="FLOAT_VEC4",E[E.INT=5124]="INT",E[E.INT_VEC2=35667]="INT_VEC2",E[E.INT_VEC3=35668]="INT_VEC3",E[E.INT_VEC4=35669]="INT_VEC4",E[E.BOOL=35670]="BOOL",E[E.BOOL_VEC2=35671]="BOOL_VEC2",E[E.BOOL_VEC3=35672]="BOOL_VEC3",E[E.BOOL_VEC4=35673]="BOOL_VEC4",E[E.FLOAT_MAT2=35674]="FLOAT_MAT2",E[E.FLOAT_MAT3=35675]="FLOAT_MAT3",E[E.FLOAT_MAT4=35676]="FLOAT_MAT4",E[E.SAMPLER_2D=35678]="SAMPLER_2D",E[E.SAMPLER_CUBE=35680]="SAMPLER_CUBE",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",E[E.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",E[E.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",E[E.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",E[E.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",E[E.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",E[E.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",E[E.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",E[E.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",E[E.SAMPLER_3D=35679]="SAMPLER_3D",E[E.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",E[E.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",E[E.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",E[E.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",E[E.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",E[E.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",E[E.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",E[E.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",E[E.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",E[E.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",E[E.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",E[E.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(l||(l={})),function(E){E[E.OBJECT_TYPE=37138]="OBJECT_TYPE",E[E.SYNC_CONDITION=37139]="SYNC_CONDITION",E[E.SYNC_STATUS=37140]="SYNC_STATUS",E[E.SYNC_FLAGS=37141]="SYNC_FLAGS"}(H||(H={})),function(E){E[E.UNSIGNALED=37144]="UNSIGNALED",E[E.SIGNALED=37145]="SIGNALED"}(m||(m={})),function(E){E[E.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",E[E.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",E[E.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",E[E.WAIT_FAILED=37149]="WAIT_FAILED"}(Y||(Y={})),function(E){E[E.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(x||(x={})),function(E){E[E.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(V||(V={}))},62432:(E,_,T)=>{T.r(_),T.d(_,{loadGLTFMesh:()=>u});var R=T(48027),A=T(82058),N=T(91306),C=T(82426),S=T(71252),e=T(26923),t=T(16912),I=T(72836),O=T(68681),n=T(81773),r=T(71337),o=T(8187),L=T(40167),D=T(79641),M=T(90779),P=T(27726),U=(T(48578),T(84017)),G=T(89212),B=T(51006);function i(E,_){return new E(new ArrayBuffer(_*E.ElementCount*(0,P.e)(E.ElementType)))}async function u(E,_,T){const C=new M.D(function(E){const _=E?.resolveFile;return _?{busy:!1,request:async(E,T,R)=>{const N=_(E),C="image"===T?"image":"binary"===T?"array-buffer":"json";return(await(0,A.default)(N,{responseType:C,signal:(0,S.i)(R)?R.signal:null})).data}}:null}(T)),e=(await(0,M.l)(C,_,T,!0)).model,t=e.lods.shift(),D=new Map,P=new Map;e.textures.forEach(((E,_)=>{return D.set(_,new o.Z({data:((0,G.i)((R=E).data),R.data),wrap:(T=R.parameters.wrap,{horizontal:a(T.s),vertical:a(T.t)})}));var T,R})),e.materials.forEach(((E,_)=>P.set(_,function(E,_){const T=new R.Z((C=E.color,e=E.opacity,(0,O.f)(f(C[0]),f(C[1]),f(C[2]),e))),A=E.emissiveFactor?new R.Z((N=E.emissiveFactor,(0,I.f)(f(N[0]),f(N[1]),f(N[2])))):null;var N,C,e;return new r.Z({color:T,colorTexture:(0,S.u)((0,S.g)(E.textureColor,(E=>_.get(E)))),normalTexture:(0,S.u)((0,S.g)(E.textureNormal,(E=>_.get(E)))),emissiveColor:A,emissiveTexture:(0,S.u)((0,S.g)(E.textureEmissive,(E=>_.get(E)))),occlusionTexture:(0,S.u)((0,S.g)(E.textureOcclusion,(E=>_.get(E)))),alphaMode:F(E.alphaMode),alphaCutoff:E.alphaCutoff,doubleSided:E.doubleSided,metallic:E.metallicFactor,roughness:E.roughnessFactor,metallicRoughnessTexture:(0,S.u)((0,S.g)(E.textureMetallicRoughness,(E=>_.get(E)))),colorTextureTransform:E.colorTextureTransform,normalTextureTransform:E.normalTextureTransform,occlusionTextureTransform:E.occlusionTextureTransform,emissiveTextureTransform:E.emissiveTextureTransform,metallicRoughnessTextureTransform:E.metallicRoughnessTextureTransform})}(E,D))));const B=function(E){let _=0;const T={color:!1,tangent:!1,normal:!1,texCoord0:!1},R=new Map,A=new Map,C=[];for(const t of E.parts){const{attributes:{position:E,normal:I,color:O,tangent:n,texCoord0:r}}=t,o=`\n      ${c(E,R)}/\n      ${c(I,R)}/\n      ${c(O,R)}/\n      ${c(n,R)}/\n      ${c(r,R)}/\n      ${e=t.transform,(0,S.i)(e)?e.toString():"-"}\n    `;let L=!1;const D=(0,N.o)(A,o,(()=>(L=!0,{start:_,length:E.count})));L&&(_+=E.count),I&&(T.normal=!0),O&&(T.color=!0),n&&(T.tangent=!0),r&&(T.texCoord0=!0),C.push({gltf:t,writeVertices:L,region:D})}var e;return{vertexAttributes:{position:i(L.a,_),normal:T.normal?i(L.B,_):null,tangent:T.tangent?i(L.b,_):null,color:T.color?i(L.c,_):null,texCoord0:T.texCoord0?i(L.d,_):null},parts:C,components:[]}}(t);for(const E of B.parts)s(B,E,P);const{position:u,normal:l,tangent:H,color:m,texCoord0:Y}=B.vertexAttributes,x={position:u.typedBuffer,normal:(0,S.i)(l)?l.typedBuffer:null,tangent:(0,S.i)(H)?H.typedBuffer:null,uv:(0,S.i)(Y)?Y.typedBuffer:null,color:(0,S.i)(m)?m.typedBuffer:null},V=(0,U.a)(x,E,T);return{transform:V.transform,components:B.components,spatialReference:E.spatialReference,vertexAttributes:new n.M({position:V.vertexAttributes.position,normal:V.vertexAttributes.normal,tangent:V.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function c(E,_){if((0,S.a)(E))return"-";const T=E.typedBuffer;return`${(0,N.o)(_,T.buffer,(()=>_.size))}/${T.byteOffset}/${T.byteLength}`}function s(E,_,T){_.writeVertices&&function(E,_){const{position:T,normal:R,tangent:A,color:N,texCoord0:I}=E.vertexAttributes,O=_.region.start,{attributes:n,transform:r}=_.gltf,o=n.position.count;if((0,D.c)(T.slice(O,o),n.position,r),(0,S.i)(n.normal)&&(0,S.i)(R)){const E=(0,e.n)((0,t.c)(),r),_=R.slice(O,o);(0,D.b)(_,n.normal,E),(0,C.q)(E)&&(0,D.d)(_,_)}else(0,S.i)(R)&&(0,M.f)(R,0,0,1,{dstIndex:O,count:o});if((0,S.i)(n.tangent)&&(0,S.i)(A)){const E=(0,e.n)((0,t.c)(),r),_=A.slice(O,o);(0,M.d)(_,n.tangent,E),(0,C.q)(E)&&(0,M.e)(_,_)}else(0,S.i)(A)&&(0,M.g)(A,0,0,1,1,{dstIndex:O,count:o});if((0,S.i)(n.texCoord0)&&(0,S.i)(I)?(0,M.h)(I.slice(O,o),n.texCoord0):(0,S.i)(I)&&(0,M.i)(I,0,0,{dstIndex:O,count:o}),(0,S.i)(n.color)&&(0,S.i)(N)){const E=n.color,_=N.slice(O,o);if(4===E.elementCount)E instanceof L.b?(0,M.j)(_,E,255):E instanceof L.c?(0,M.k)(_,E):E instanceof L.s&&(0,M.j)(_,E,1/256);else{(0,M.g)(_,255,255,255,255);const T=L.u.fromTypedArray(_.typedBuffer,_.typedBufferStride);E instanceof L.B?(0,D.e)(T,E,255):E instanceof L.u?(0,M.m)(T,E):E instanceof L.v&&(0,D.e)(T,E,1/256)}}else(0,S.i)(N)&&(0,M.g)(N.slice(O,o),255,255,255,255)}(E,_);const{indices:R,attributes:A,primitiveType:N,material:I}=_.gltf;let O=(0,M.a)(R||A.position.count,N);const r=_.region.start;if(r){const E=O.slice();for(let _=0;_<O.length;_++)E[_]+=r;O=E}E.components.push(new n.Z({faces:O,material:T.get(I),trustSourceNormals:!0}))}function F(E){switch(E){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function a(E){switch(E){case B.b.CLAMP_TO_EDGE:return"clamp";case B.b.MIRRORED_REPEAT:return"mirror";case B.b.REPEAT:return"repeat"}}function f(E){return E**(1/M.C)*255}T(54174),T(29794),T(7200),T(92143),T(31450),T(71552),T(76506),T(40642),T(88762),T(32101),T(60991),T(50406),T(12047),T(21972),T(17533),T(86656),T(66396),T(6540),T(60474),T(91055),T(34250),T(19657),T(6906),T(86787),T(44265),T(97714),T(2906),T(38742),T(47880),T(41864),T(10738),T(65775),T(35861),T(48190),T(92457),T(53785),T(57251),T(89623),T(1623),T(89914),T(21801),T(73796),T(60947),T(91597),T(35132),T(84069),T(12381),T(73173),T(44567),T(98380),T(92482),T(92896),T(92624),T(92847),T(57257),T(28008),T(34987),T(97987),T(84661),T(33417)},27726:(E,_,T)=>{function R(E){switch(E){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}T.d(_,{e:()=>R})}}]);