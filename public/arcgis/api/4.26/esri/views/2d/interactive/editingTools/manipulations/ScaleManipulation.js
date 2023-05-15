// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Handles ../../../../../chunks/vec2 ../../../../../chunks/vec2f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/boundedPlane ../../../../../geometry/support/spatialReferenceUtils ./Manipulation ./utils ../../../../interactive/dragEventPipeline ../../../../interactive/GraphicManipulator ../../../../interactive/editGeometry/interfaces ../../../../interactive/editGeometry/operations/UpdateVertices ../../../../interactive/editGeometry/support/editPlaneUtils".split(" "),
function(z,A,N,I,O,d,v,u,P,J,Q,K,R,L,S,T){function B(g){const r=d.length(g.basis1);g=d.length(g.basis2);return.3*Math.min(r,g)}let X=function(g){function r(f){var a=U.call(this);a._handles=new N;a._planeStart=u.create();a._displayPlaneStart=u.create();a._originCache=v.create();a._axisCache=O.create();a._renderStartCache=v.create();a._renderEndCache=v.create();a._resizeOriginCache=v.create();a._view=f.view;a._tool=f.tool;a._graphic=f.graphic;a._direction=f.direction;a._preserveAspectRatio=f.preserveAspectRatio;
a._manipulator=a._createManipulator();a._handles.add([a._manipulator.events.on("grab-changed",k=>Q.onGrabChangedHandle(k,a._manipulator))]);a.forEachManipulator(k=>a._tool.manipulators.add(k));return a}A._inherits(r,g);var U=A._createSuper(r);g=r.prototype;g.destroy=function(){this._handles.destroy();this.forEachManipulator(f=>{this._tool.manipulators.remove(f);f.destroy()});this._preserveAspectRatio=this._resizeOriginCache=this._renderEndCache=this._renderStartCache=this._axisCache=this._originCache=
this._displayPlaneStart=this._planeStart=this._handles=this._direction=this._manipulator=this._graphic=this._view=this._tool=null};g.forEachManipulator=function(f){f(this._manipulator,J.ManipulatorType.SCALE)};g.createDragPipeline=function(f,a){let k=null,C=null,t=null,D=0,E=null,F=null;const l=this._planeStart,m=this._displayPlaneStart,h=this._direction;return K.createManipulatorDragEventPipeline(this._manipulator,(M,V)=>{V.next(c=>{if("start"===c.action){M.cursor="grabbing";var b=f();k=b.plane;
C=b.displayPlane;t=b.editGeometryOperations;D=10*this._view.resolution;u.copy(k,l);u.copy(C,m);E=(b=P.getInfo(t.data.spatialReference))?b.valid[1]-b.valid[0]-30*this._view.resolution:null}return c}).next(K.screenToMap(this._view)).next(c=>{const b=d.copy(this._renderStartCache,[c.mapStart.x,c.mapStart.y,0]),n=d.copy(this._renderEndCache,[c.mapEnd.x,c.mapEnd.y,0]);var e=d.copy(this._resizeOriginCache,m.origin);d.scaleAndAdd(e,e,m.basis1,-h[0]);d.scaleAndAdd(e,e,m.basis2,-h[1]);d.subtract(n,n,e);d.subtract(b,
b,e);const G=0!==h[0]&&0!==h[1];e=B(m);const W=B(C)/e;var y=(p,H)=>{if(0===p)return 1;let q=d.length(H),w=.5*p*d.dot(H,n)/q;const x=0>w?-1:1;G&&(p=q-.5*p*d.dot(H,b)/q,w+=p*x*W);p=q<1.5*D?1:1E-6;q=Math.max(q-D,1E-6);0<x&&(w-=10*this._view.resolution);return x*Math.max(w/q*x,p)};e=y(h[0],m.basis1);y=y(h[1],m.basis2);return{...c,direction:h,factor1:e,factor2:y}}).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(c=>{var b=d.copy(this._originCache,l.origin);
d.scaleAndAdd(b,b,l.basis1,-h[0]);d.scaleAndAdd(b,b,l.basis2,-h[1]);const n=I.set(this._axisCache,l.basis1[0],l.basis1[1]);I.normalize(n,n);const e=[];for(const G of t.data.components)e.push(...G.vertices);b=t.scaleVertices(e,b,n,c.factor1,c.factor2,"start"===c.action?L.AccumulationBehaviour.NEW_STEP:L.AccumulationBehaviour.ACCUMULATE_STEPS,S.AccumulationType.REPLACE);E&&E<t.data.geometry.extent.width&&F?t.updateVertices(e,F):(u.copy(l,k),T.apply(b,k),F=b.operation,a(c,b));return c}).next(c=>{"end"===
c.action&&(M.cursor="grab");return c})})};g._createManipulator=function(){return new R.GraphicManipulator({view:this._view,graphic:this._graphic,selectable:!0,cursor:"grab"})};return A._createClass(r)}(J.Manipulation);z.ScaleManipulation=X;z.calculateDiagonalResizeHandleScale=B;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});