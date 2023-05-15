/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import{d as i,a as s,i as r,e as n}from"../../../chunks/maybe.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as a}from"../../../core/accessorSupport/decorators/subclass.js";import{d as l}from"../../../chunks/defaultUnit.js";import{A as c}from"../../../chunks/AnalysisView3D.js";import{M as u}from"../../../chunks/interfaces.js";import h from"../../../core/Handles.js";import{L as p}from"../../../chunks/Logger.js";import{b as m,t as d}from"../../../chunks/quantityUtils.js";import{watch as g,syncAndInitial as v}from"../../../core/reactiveUtils.js";import{d as _,D as j,s as y,n as f,b as k,h as w,e as b,g as P,a as S}from"../../../chunks/vec3.js";import{geodesicLength as L}from"../../../geometry/geometryEngine.js";import O from"../../../geometry/Polyline.js";import{canProjectWithoutEngine as E,projectPointToVector as A,projectPointToWGS84ComparableLonLat as C}from"../../../geometry/projection.js";import{g as V,S as z,W as M}from"../../../chunks/spatialReferenceEllipsoidUtils.js";import{isSupported as D,geodesicLengths as T,InverseGeodeticSolverResult as x,inverseGeodeticSolver as U}from"../../../geometry/support/geodesicUtils.js";import{a as R,l as G,O as I,L as N}from"../../../chunks/LineVisualElement.js";import{U as F,s as B}from"../../../chunks/UnitNormalizer.js";import H from"../../../Color.js";import"../../../intl.js";import{g as q,a as W,b as Q,c as X}from"../../../chunks/analysisThemeUtils.js";import{h as J,f as $,d as K}from"../../../chunks/mathUtils.js";import{f as Y,a as Z,b as ee,c as te,d as ie}from"../../../chunks/quantityFormatUtils.js";import{b as se,d as re}from"../../../chunks/screenUtils.js";import{I as ne,w as oe}from"../../../chunks/unitUtils.js";import{e as ae}from"../../../chunks/vec2.js";import{V as le,a as ce}from"../../../chunks/interfaces3.js";import{L as ue,G as he,E as pe,m as me}from"../../../chunks/Segment.js";import{c as de}from"../../../chunks/mat4f64.js";import{f as ge,c as ve}from"../../../chunks/vec4f64.js";import{s as _e}from"../../../chunks/ray.js";import{c as je}from"../../../chunks/GeometryUtil.js";import{D as ye,b as fe,M as ke,R as we}from"../../../chunks/Material.js";import{n as be}from"../../../chunks/InterleavedLayout.js";import{S as Pe}from"../../../chunks/ShaderOutput.js";import{G as Se}from"../../../chunks/DefaultBufferWriter.js";import{R as Le}from"../../../chunks/RenderSlot.js";import{V as Oe}from"../../../chunks/VertexAttribute.js";import{R as Ee,S as Ae,P as Ce}from"../../../chunks/Program2.js";import{p as Ve}from"../../../chunks/ShaderTechniqueConfiguration.js";import{c as ze,o as Me}from"../../../chunks/OrderIndependentTransparency.js";import{T as De}from"../../../chunks/TransparencyPassType.js";import{D as Te}from"../../../chunks/DefaultTechniqueConfiguration.js";import{a as xe}from"../../../chunks/View.glsl.js";import{F as Ue}from"../../../chunks/Float4PassUniform.js";import{F as Re}from"../../../chunks/FloatPassUniform.js";import{g as Ge}from"../../../chunks/interfaces2.js";import{S as Ie}from"../../../chunks/ShaderBuilder.js";import{e as Ne,d as Fe}from"../../../chunks/enums3.js";import{m as Be,d as He,a as qe}from"../../../chunks/renderState.js";import{R as We}from"../../../chunks/RightAngleQuadVisualElement.js";import{c as Qe}from"../../../chunks/lineStippleUtils.js";import{o as Xe}from"../../../chunks/locale.js";import{f as Je}from"../../../chunks/messages.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../core/lang.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/object.js";import"../../../config.js";import"../../../chunks/string.js";import"../../../chunks/getDefaultUnitForView.js";import"../../../portal/Portal.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../request.js";import"../../../core/JSONSupport.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../chunks/reader.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../chunks/jsonMap.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../chunks/common.js";import"../../../chunks/geometryEngineBase.js";import"../../../chunks/hydrated.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../chunks/vec4.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/mat4.js";import"../../../chunks/pe.js";import"../../../chunks/assets.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/zscale.js";import"../../../geometry.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/ElevationProvider.js";import"../../../chunks/VisualElement.js";import"../../../chunks/TriangleMaterial.js";import"../../../chunks/sphere.js";import"../../../chunks/vector.js";import"../../../chunks/mathUtils2.js";import"../../../chunks/basicInterfaces.js";import"../../../chunks/Util2.js";import"../../../chunks/vec2f64.js";import"../../../core/Evented.js";import"../../../chunks/Octree.js";import"../../../chunks/frustum.js";import"../../../chunks/plane.js";import"../../../chunks/lineSegment.js";import"../../../chunks/glUtil3D.js";import"../../../chunks/mat3.js";import"../../../chunks/mat3f64.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/VertexElementDescriptor.js";import"../../../chunks/FramebufferObject.js";import"../../../chunks/Texture.js";import"../../../chunks/context-util.js";import"../../../chunks/MarkerSizing.glsl.js";import"../../../chunks/VisualVariables.glsl.js";import"../../../chunks/Float3PassUniform.js";import"../../../chunks/Matrix3PassUniform.js";import"../../../chunks/sdfPrimitives.js";import"../../../chunks/floatRGBA.js";import"../../../chunks/Texture2.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/requestImageUtils.js";import"../../../chunks/TextureOnly.glsl.js";import"../../../chunks/ScreenSpacePass.glsl.js";import"../../../chunks/Texture2DPassUniform.js";import"../../../chunks/RibbonLine.glsl.js";import"../../../chunks/ForwardLinearDepth.glsl.js";import"../../../chunks/vec3f32.js";import"../../../chunks/Matrix4PassUniform.js";import"../../../chunks/RgbaFloatEncoding.glsl.js";import"../../../chunks/Slice.glsl.js";import"../../../chunks/ObjectAndLayerIdColor.glsl.js";import"../../../chunks/OutputDepth.glsl.js";import"../../../chunks/LineStipple.glsl.js";import"../../../chunks/MultipassTerrainTest.glsl.js";import"../../../chunks/ReadLinearDepth.glsl.js";import"../../../chunks/PiUtils.glsl.js";import"../../../chunks/AlphaCutoff.js";import"../../../chunks/ColorConversion.glsl.js";import"../../../chunks/line.js";import"../../../chunks/DoubleArray.js";import"../../../chunks/Indices.js";import"../../../chunks/ViewingMode.js";import"../../../chunks/Attribute.js";import"../../../chunks/colorUtils.js";import"../../../chunks/number.js";import"../../support/colorUtils.js";import"../../../chunks/unitFormatUtils.js";import"../../../chunks/byteSizeEstimations.js";import"../../../chunks/Cyclical.js";import"../../../chunks/viewUtils.js";import"../../../chunks/dehydratedFeatures.js";import"../../../chunks/aaBoundingBox.js";import"../../../chunks/quantizationUtils.js";import"../../../layers/support/Field.js";import"../../../chunks/enumeration.js";import"../../../chunks/domains.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/fieldType.js";import"../../../chunks/elevationInfoUtils.js";import"../../../chunks/unitConversionUtils.js";import"../../../chunks/projector.js";import"../../../chunks/widgetUtils.js";import"../../../chunks/TextOverlayItem.js";import"../../../chunks/quatf64.js";import"../../../chunks/BufferView.js";import"../../../chunks/types.js";import"../../../chunks/triangle.js";import"../../../chunks/doublePrecisionUtils.js";import"../../../chunks/mat4f32.js";import"../../../chunks/EngineVisualElement.js";import"../../../core/Identifiable.js";import"../../../chunks/RenderGeometry.js";import"../../../chunks/interfaces4.js";import"../../../chunks/vec2f32.js";import"../../../chunks/NestedMap.js";import"../../../chunks/Camera.js";import"../../../chunks/WaterSurface.glsl.js";import"../../../chunks/Transform.glsl.js";import"../../../chunks/OutputHighlight.glsl.js";import"../../../chunks/BooleanPassUniform.js";import"../../../chunks/Texture2DDrawUniform.js";import"../../../chunks/NormalUtils.glsl.js";import"../../../chunks/MultipassGeometryTest.glsl.js";import"../../../chunks/SSAOHelper.js";import"../../../chunks/SSAOBlur.glsl.js";import"../../../chunks/SSAO.glsl.js";import"../../../chunks/CameraSpace.glsl.js";import"../../../chunks/Intersector.js";import"../../../chunks/Intersector2.js";import"../../../chunks/boundedPlane.js";import"../../../chunks/verticalOffsetUtils.js";import"../../../chunks/quat.js";import"../../../chunks/glUtil.js";import"../../../chunks/AppleAmdDriverHelper.js";import"../../../chunks/VertexNormal.glsl.js";import"../../../chunks/MemCache.js";import"../../../chunks/Scheduler.js";import"../../../chunks/ObservableValue.js";import"../../../chunks/debugFlags.js";import"../../../chunks/VisualElementResources.js";import"../../../chunks/ColorMaterial.js";import"../../../chunks/ColorMaterial.glsl.js";import"../../../chunks/VertexColor.glsl.js";const $e="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",Ke=p.getLogger($e);let Ye=class extends t{constructor(e){super(e),this._unitNormalizer=new F,this._handles=new h,this._tempStartPosition=_(),this._tempEndPosition=_(),this._tempCornerPosition=_()}initialize(){const e=this.view.spatialReference,t=V(e),i=t===z?M:t;this._sphericalPCPF=i;const s=E(e,i);this._unitNormalizer.spatialReference=s?i:e,this._handles.add([g((()=>({viewData:this.viewData,startPoint:this.analysis.startPoint})),(({viewData:e,startPoint:t})=>{e.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(t)}),v),g((()=>({viewData:this.viewData,endPoint:this.analysis.endPoint})),(({viewData:e,endPoint:t})=>{e.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(t)}),v),g((()=>({result:this._computedResult,viewData:this.viewData})),(({result:e,viewData:t})=>{t.result=e}),v)])}destroy(){this._handles=i(this._handles)}_applyProjectionAndElevationAlignment(e){if(s(e))return e;const{spatialReference:t,elevationProvider:i}=this.view,r=R(e,t,i);return s(r)?(G(this.analysis,e.spatialReference,Ke),null):r}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:i}=this.viewData;if(s(e)||s(t))return null;const r=this._euclideanDistances(e,t),n=this._geodesicDistance(e,t,r.horizontal.value),o=i===u.Geodesic||i===u.Auto&&r.horizontal.value>1e5?"geodesic":"euclidean";return{mode:o,distance:"euclidean"===o?r.direct:n,directDistance:r.direct,horizontalDistance:r.horizontal,verticalDistance:r.vertical,geodesicDistance:n}}_euclideanDistances(e,t){const i=e.clone();i.z=t.z;const s=this._tempStartPosition,r=this._tempEndPosition,n=this._tempCornerPosition,o=this.view.spatialReference,a=this._sphericalPCPF,l=E(o,a)?a:o;A(e,s,l),A(t,r,l),A(i,n,l);const c=j(s,r),u=j(n,r),h=Math.abs(t.z-e.z),p=e=>this._unitNormalizer.normalizeDistance(e),d=p(c),g=p(u),v=p(h);return{direct:m(d,"meters"),horizontal:m(g,"meters"),vertical:m(v,"meters")}}_geodesicDistance(e,t,i){const s=e.spatialReference,n=new O({spatialReference:s});n.addPath([e,t]);const o=s.isGeographic&&D(s)?T([n],"meters")[0]:s.isWebMercator?L(n,"meters"):null,a=r(o)?o:this._fallbackGeodesicDistance(e,t,i);return m(a,"meters")}_fallbackGeodesicDistance(e,t,i){if(C(e,Ze)&&C(t,et)){const e=new x;return U(e,Ze,et),e.distance}return i}};e([o()],Ye.prototype,"view",void 0),e([o()],Ye.prototype,"analysis",void 0),e([o()],Ye.prototype,"viewData",void 0),e([o()],Ye.prototype,"_computedResult",null),Ye=e([a($e)],Ye);const Ze=_(),et=_(),tt=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new Ie,{vertex:i,fragment:s}=t;xe(i,e),i.uniforms.add(new Re("width",(e=>e.width))),t.attributes.add(Oe.POSITION,"vec3"),t.attributes.add(Oe.NORMAL,"vec3"),t.attributes.add(Oe.UV0,"vec2"),t.attributes.add(Oe.AUXPOS1,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),i.code.add(Ge`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.uniforms.add([new Re("outlineSize",(e=>e.outlineSize)),new Ue("outlineColor",(e=>e.outlineColor)),new Re("stripeLength",(e=>e.stripeLength)),new Ue("stripeEvenColor",(e=>e.stripeEvenColor)),new Ue("stripeOddColor",(e=>e.stripeOddColor))]);const r=1/Math.sqrt(2);return s.code.add(Ge`
    const float INV_SQRT2 = ${Ge.float(r)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `),t}},Symbol.toStringTag,{value:"Module"}));class it extends Ae{constructor(e,t,i){super(e,t,i)}initializeProgram(e){return new Ce(e.rctx,it.shader.get().build(this.configuration),ye)}_setPipelineState(e){const t=e===De.NONE,i=this.configuration;return Be({blending:i.transparent?t?ze:Me(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:Ne.LESS},depthWrite:He,colorWrite:qe})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return Fe.TRIANGLE_STRIP}}it.shader=new Ee(tt,(()=>Promise.resolve().then((()=>tt))));class st extends Te{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=De.NONE}}e([Ve()],st.prototype,"polygonOffsetEnabled",void 0),e([Ve()],st.prototype,"transparent",void 0),e([Ve({count:De.COUNT})],st.prototype,"transparencyPassType",void 0);class rt extends fe{constructor(e){super(e,new ot),this._configuration=new st}getConfiguration(e,t){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this.parameters.stripeEvenColor[3]<1||this.parameters.stripeOddColor[3]<1||this.parameters.outlineColor[3]<1,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration}dispose(){}intersect(){}requiresSlot(e,t){return t===Pe.Color&&e===Le.OPAQUE_MATERIAL}createGLMaterial(e){return new nt(e)}createBufferWriter(){return new mt}}class nt extends Se{beginSlot(e){return this.ensureTechnique(it,e)}}class ot extends ke{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=ge(1,.5,0,1),this.stripeEvenColor=ge(1,1,1,1),this.stripeOddColor=ge(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const at=be().vec3f(Oe.POSITION).vec3f(Oe.NORMAL).vec2f(Oe.UV0).f32(Oe.AUXPOS1),lt=_(),ct=_(),ut=_(),ht=_(),pt=_();class mt{constructor(){this.vertexBufferLayout=at}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 2*(e.indices.get(Oe.POSITION).length/2+1)}write(e,t,i,s,r){const n=i.vertexAttributes.get(Oe.POSITION).data,o=i.vertexAttributes.get(Oe.NORMAL).data,a=n.length/3,l=i&&i.indices&&i.indices.get(Oe.POSITION);l&&l.length!==2*(a-1)&&console.warn("MeasurementArrowMaterial does not support indices");const c=lt,u=ct,h=ut,p=ht,m=pt,d=s.position,g=s.normal,v=s.uv0;let _=0;for(let i=0;i<a;++i){const s=3*i;if(y(c,n[s],n[s+1],n[s+2]),i<a-1){const e=3*(i+1);y(u,n[e],n[e+1],n[e+2]),y(m,o[e],o[e+1],o[e+2]),f(m,m),k(h,u,c),f(h,h),w(p,m,h),f(p,p)}const l=j(c,u);e&&t&&(b(c,c,e),b(u,u,e),b(p,p,t));const P=r+2*i,S=P+1;d.setVec(P,c),d.setVec(S,c),g.setVec(P,p),g.setVec(S,p),v.set(P,0,_),v.set(P,1,-1),v.set(S,0,_),v.set(S,1,1),i<a-1&&(_+=l)}const P=s.auxpos1;for(let e=0;e<2*a;++e)P.set(r+e,_)}}class dt extends I{constructor(e){super(e),this._parameters={arrowWidth:16,arrowOutlineColor:H.toUnitRGBA(q()),arrowStripeEvenColor:H.toUnitRGBA(W()),arrowStripeOddColor:H.toUnitRGBA(q()),arrowSubdivisions:128},this._origin=_(),this._originTransform=de(),this._arrowCenter=_(),this._renderOccluded=we.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._opacity=1,this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const e=this.opacity,{arrowStripeEvenColor:t,arrowStripeOddColor:i}=this._parameters,s=J(gt,this._stripesEnabled?t:i,e);this._arrowMaterial.setParameters({stripeEvenColor:s})}}get opacity(){return this._opacity}set opacity(e){e!==this._opacity&&(this._opacity=e,this._updateArrowOpacity())}createExternalResources(){const{arrowStripeEvenColor:e,arrowStripeOddColor:t,arrowOutlineColor:i}=this._parameters,s=this._stripesEnabled?e:t;this._arrowMaterial=new rt({outlineColor:i,stripeEvenColor:s,stripeOddColor:t,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new h,this._handles.add(g((()=>this.view.state.camera),(()=>{this._viewChanged()})))}destroyExternalResources(){this._arrowMaterial=null,this._handles=i(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if(s(this._geometry)||s(this._geometry.startRenderSpace)||s(this._geometry.endRenderSpace))return;const t=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);t.transformation=this._originTransform,e.addGeometry(t),this._viewChanged()}_createArrowGeometry(e,t,i,s){const r=this.view.renderCoordsHelper,n=[],o=[],a=(e,t)=>{const s=_e.get();k(s,e,i),n.push(s),o.push(t)};if("euclidean"===s.type){s.eval(.5,this._arrowCenter);const i=_e.get();r.worldUpAtPosition(this._arrowCenter,i),a(e,i),a(t,i)}else{s.eval(.5,this._arrowCenter);const e=this._parameters.arrowSubdivisions+1&-2;for(let t=0;t<e;++t){const i=t/(e-1),n=_e.get(),o=_e.get();s.eval(i,n),r.worldUpAtPosition(n,o),a(n,o)}}return je(this._arrowMaterial,n,o)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&r(this._geometry)){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*e})}}_updateArrowOpacity(){const e=this.opacity,{arrowStripeEvenColor:t,arrowStripeOddColor:i,arrowOutlineColor:s}=this._parameters,r=J(gt,this._stripesEnabled?t:i,e),n=J(vt,s,e),o=J(_t,i,e);this._arrowMaterial.setParameters({stripeEvenColor:r,outlineColor:n,stripeOddColor:o})}}const gt=ve(),vt=ve(),_t=ve();let jt=class extends t{get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(s(e)||s(t)||e.equals(t))return le.None;const i=this.analysisView.result;if(s(i))return le.Direct;if("geodesic"===i.mode)return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?le.ProjectedGeodesic:le.Direct;const{verticalDistance:r,horizontalDistance:n}=i,o=r.value,a=n.value;return Math.min(o/a,a/o)<this.triangleCollapseRatioThreshold?le.Direct:le.Triangle}get actualVisualizedMeasurement(){if(s(this.analysisView.result))switch(this.analysisView.measurementMode){case u.Auto:case u.Euclidean:default:return"euclidean";case u.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return s(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(e){s(this._triangleOrientationOverride)!==e&&(s(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const e="geodesic"===this.actualVisualizedMeasurement;return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}constructor(e){super(e),this._params={triangleColor:H.toUnitRGBA(q(.75)),triangleLineWidth:3,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:H.toUnitRGBA(q(.75)),guideLineWidth:2,guideStippleLengthPixels:6,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},this._handles=new h,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=_(),this._endPosition=_(),this._cornerPosition=_(),this._startPositionAtSeaLevel=_(),this._endPositionAtSeaLevel=_(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=ce.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const e=this._params,t={attached:!0,view:this.view};this._segmentVisualElement=new dt({...t,geometry:null,renderOccluded:we.OccludeAndTransparent}),this._triangleVisualElement=new N({...t,width:e.triangleLineWidth,color:e.triangleColor,renderOccluded:we.OccludeAndTransparent}),this._rightAngleQuad=new We({...t,color:H.toUnitRGBA(q(.75)),renderOccluded:we.OccludeAndTransparent});const i={...t,polygonOffset:!0,renderOccluded:we.OccludeAndTransparent};this._projectedGeodesicLine=new N({...i,width:e.geodesicProjectionLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:Qe(e.guideStippleLengthPixels)}),this._geodesicStartHint=new N({...i,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:Qe(e.guideStippleLengthPixels)}),this._geodesicEndHint=new N({...i,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:Qe(e.guideStippleLengthPixels)});const s={...t,backgroundColor:Q(.6),textColor:X()};this._segmentLabel=new ue({...s,fontSize:e.direcLabelFontSize}),this._verticalLabel=new ue({...s,fontSize:e.verticalLabelFontSize}),this._horizontalLabel=new ue({...s,fontSize:e.horizontalLabelFontSize}),this._handles.add([g((()=>{const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView,i=this.view;return{view:i,camera:i.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}}),(e=>this._updateGeometryAndViewMode(e)),v),g((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateVisualElementVisibility(e)),v),g((()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement})),(e=>this._updateLabelText(e)),v),g((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateLabelVisibility(e)),v),g((()=>this._measurementArrowStripeLength),(e=>this._updateSegmentStripeLength(e)),v),Xe((async()=>this._updateMessageBundle()))]),this._updateMessageBundle()}destroy(){this._handles=i(this._handles),this._segmentVisualElement=i(this._segmentVisualElement),this._triangleVisualElement=i(this._triangleVisualElement),this._rightAngleQuad=i(this._rightAngleQuad),this._projectedGeodesicLine=i(this._projectedGeodesicLine),this._geodesicStartHint=i(this._geodesicStartHint),this._geodesicEndHint=i(this._geodesicEndHint),this._segmentLabel=i(this._segmentLabel),this._verticalLabel=i(this._verticalLabel),this._horizontalLabel=i(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:e,viewMode:t}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,e)switch(t){case le.None:break;case le.Direct:this._segmentVisualElement.visible=!0;break;case le.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case le.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:e,camera:t,viewMode:i,elevationAlignedStartPoint:r,elevationAlignedEndPoint:n,orientation:o,visualizedMeasurement:a,stripeLength:l}){const c=e.renderCoordsHelper;if(s(c)||s(r)||s(n)||r.equals(n))return;let u=this._startPosition,h=this._endPosition;c.toRenderCoords(r,u),c.toRenderCoords(n,h);const p=o===ce.AboveSegment?1:-1,m=p*(c.getAltitude(h)-c.getAltitude(u));m<0&&(u=this._endPosition,h=this._startPosition);const d="geodesic"===a?new he(this._startPosition,this._endPosition,c.spatialReference):new pe(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=d,this._updateSegmentStripeLength(l),i){case le.Direct:this._updateSegment(d,o);break;case le.Triangle:this._updateSegmentAndTriangle({view:e,camera:t,segment:d,orientation:o,startPosition:u,endPosition:h,deltaSign:p,altitudeDelta:m});break;case le.ProjectedGeodesic:this._updateSegmentAndProjection({view:e,orientation:o,startPosition:u,endPosition:h})}}_updateSegment(e,t){this._segmentLabel.anchor=t===ce.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:e},camera:t,segment:i,orientation:s,startPosition:r,endPosition:n,deltaSign:o,altitudeDelta:a}){const l=this._cornerPosition;e.worldUpAtPosition(r,l),P(l,l,o*Math.abs(a)),S(l,l,r),this._triangleVisualElement.geometry=[[[r[0],r[1],r[2]],[l[0],l[1],l[2]],[n[0],n[1],n[2]]]],this._rightAngleQuad.geometry={previous:r,center:l,next:n};const c=new pe(r,l),u=new pe(l,n),h=function(e,t,i,s,r){const n=ft,o=kt;r.projectToRenderScreen(i,n),r.projectToRenderScreen(t,o);const a={segment:"bottom",horizontal:"top",vertical:n[0]<o[0]?"left":"right"};{const s=wt,n=bt;if(B(e,i,s,r),B(e,t,n,r),ae(s,n)>=yt){const e=Math.sign(s[1])===Math.sign(n[1]);a.segment=e?me(a.vertical):a.vertical}else{const e=Pt;B(i,t,e,r),ae(e,n)>=yt&&(a.segment=Math.sign(e[0])===Math.sign(n[0])?me(a.horizontal):a.horizontal)}}if(s===ce.BelowSegment){const e=e=>"top"===e?"bottom":"top";a.segment=e(a.segment),a.horizontal=e(a.horizontal),a.vertical=e(a.vertical)}return a}(r,n,l,s,t);this._segmentLabel.anchor=h.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:c,sampleLocation:"center"},this._verticalLabel.anchor=h.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=h.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:e},orientation:t,startPosition:i,endPosition:s}){e.setAltitude(this._startPositionAtSeaLevel,0,i),e.setAltitude(this._endPositionAtSeaLevel,0,s);const r=new he(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,e.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(r),this._geodesicStartHint.setGeometryFromSegment(new pe(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new pe(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:r,sampleLocation:"center"},this._segmentLabel.anchor=t===ce.AboveSegment?"top":"bottom"}_updateLabelText({text:e,visualizedMeasurement:t}){r(e)?(this._segmentLabel.text="euclidean"===t?e.euclideanDistance:e.geodesicDistance,this._horizontalLabel.text=e.horizontalDistance,this._verticalLabel.text=e.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:e,viewMode:t}){const i=this._segmentLabel,s=this._horizontalLabel,r=this._verticalLabel;if(i.visible=!1,s.visible=!1,r.visible=!1,e)switch(t){case le.Direct:i.visible=!0;break;case le.Triangle:i.visible=!0,s.visible=!0,r.visible=!0;break;case le.ProjectedGeodesic:i.visible=!0;case le.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(s(t)||s(e))return null;const{directDistance:i,horizontalDistance:r,verticalDistance:n,geodesicDistance:o}=t,a=this.analysisView.unit,l=e=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...e});switch(a){case"metric":return l({euclideanDistance:i&&te(e,i),geodesicDistance:o&&te(e,o),horizontalDistance:r&&te(e,r),verticalDistance:n&&ie(e,n)});case"imperial":return l({euclideanDistance:i&&Z(e,i),geodesicDistance:o&&Z(e,o),horizontalDistance:r&&Z(e,r),verticalDistance:n&&ee(e,n)});default:return l({euclideanDistance:i&&Y(e,i,a),geodesicDistance:o&&Y(e,o,a),horizontalDistance:r&&Y(e,r,a),verticalDistance:n&&Y(e,n,a)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;r(e)?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(r(this._triangleOrientationOverride))return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===ce.Auto?this.view.state.camera.aboveGround?ce.AboveSegment:ce.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(!t?.state)return!1;const i=t.state.camera,s=t.renderCoordsHelper,r=i.computeScreenPixelSizeAt(e);return s.getAltitude(e)/r>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(s(e))return null;let i=null;const r=e.directDistance;switch(t){case"metric":i=r&&d(r,"meters");break;case"imperial":i=r&&d(r,ne(r.value,r.unit));break;default:i=r&&d(r,t)}return s(i)?null:$(i.value/30)*oe(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,Je("esri/core/t9n/Units").then((e=>{this.messages=e})).finally((()=>{this.loadingMessages=!1}))}get testData(){return{labels:this.labels,stripeLength:this._segmentVisualElement?.stripeLength}}};e([o()],jt.prototype,"_triangleOrientationOverride",void 0),e([o()],jt.prototype,"messages",void 0),e([o()],jt.prototype,"view",void 0),e([o()],jt.prototype,"analysis",void 0),e([o()],jt.prototype,"analysisView",void 0),e([o()],jt.prototype,"loadingMessages",void 0),e([o()],jt.prototype,"visible",null),e([o()],jt.prototype,"viewMode",null),e([o()],jt.prototype,"actualVisualizedMeasurement",null),e([o()],jt.prototype,"visualElementOrientation",void 0),e([o()],jt.prototype,"triangleCollapseRatioThreshold",void 0),e([o()],jt.prototype,"allowVisualElementsOrientationChange",null),e([o()],jt.prototype,"labels",null),e([o()],jt.prototype,"_labelsText",null),e([o()],jt.prototype,"_actualVisualElementsOrientation",null),e([o()],jt.prototype,"_measurementArrowStripeLength",null),jt=e([a("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],jt);const yt=Math.cos(K(12)),ft=se(),kt=se(),wt=re(),bt=re(),Pt=re();let St=class extends(c(t)){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=u.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new jt({view:e,analysis:t,analysisView:this}),this._analysisController=new Ye({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=i(this._analysisController),this._analysisVisualization=i(this._analysisVisualization)}get updating(){return!!this._analysisVisualization?.loadingMessages}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){return this._analysisVisualization.labels.direct?.text??""}get horizontalLabelText(){return this._analysisVisualization.labels.horizontal?.text??""}get verticalLabelText(){return this._analysisVisualization.labels.vertical?.text??""}get unit(){return n(this.analysis.unit,this._defaultUnit)}get testData(){return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...this._analysisVisualization?.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};e([o()],St.prototype,"updating",null),e([o({readOnly:!0})],St.prototype,"type",void 0),e([o({constructOnly:!0,nonNullable:!0})],St.prototype,"analysis",void 0),e([o()],St.prototype,"result",void 0),e([o()],St.prototype,"measurementMode",void 0),e([o()],St.prototype,"elevationAlignedStartPoint",void 0),e([o()],St.prototype,"elevationAlignedEndPoint",void 0),e([o({readOnly:!0})],St.prototype,"viewMode",null),e([o({readOnly:!0})],St.prototype,"actualVisualizedMeasurement",null),e([o()],St.prototype,"visualElementOrientation",null),e([o()],St.prototype,"allowVisualElementsOrientationChange",null),e([o()],St.prototype,"triangleCollapseRatioThreshold",null),e([o({readOnly:!0})],St.prototype,"directLabelText",null),e([o({readOnly:!0})],St.prototype,"horizontalLabelText",null),e([o({readOnly:!0})],St.prototype,"verticalLabelText",null),e([o()],St.prototype,"_analysisVisualization",void 0),e([o()],St.prototype,"_analysisController",void 0),e([o()],St.prototype,"unit",null),e([o(l)],St.prototype,"_defaultUnit",void 0),St=e([a("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],St);const Lt=St;export{Lt as default};
