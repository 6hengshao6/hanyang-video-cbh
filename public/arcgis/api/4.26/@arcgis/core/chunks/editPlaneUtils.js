/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import o from"../core/Evented.js";import{HandleOwnerMixin as i}from"../core/HandleOwner.js";import{m as r}from"./handleUtils.js";import{s,i as n,a,d as l,g as p,e as c}from"./maybe.js";import{z as h,d as u,c as d,m as y}from"./quantityUtils.js";import{watch as g,syncAndInitial as m}from"../core/reactiveUtils.js";import{n as f,g as v,j as x}from"./unitUtils.js";import{property as w}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{k as _}from"./typedArrayUtil.js";import{subclass as b}from"../core/accessorSupport/decorators/subclass.js";import O from"../layers/GraphicsLayer.js";import{c as T}from"./elevationInfoUtils.js";import"../geometry.js";import{clone as M}from"../core/lang.js";import{A as I,d as G,f as S,a as V,P as j,g as z,b as R,h as P,n as C,m as U,l as E,w as A,Z as L}from"./vec3.js";import k from"../geometry/Circle.js";import{simplify as N,distance as D}from"../geometry/geometryEngine.js";import Z,{q as F,i as Y,s as q}from"../geometry/Polygon.js";import{m as H,c as B}from"./surfaceCoordinateSystems.js";import J from"../geometry/Multipoint.js";import K from"../geometry/Polyline.js";import Q from"../geometry/Point.js";import{g as W}from"./helpMessageUtils.js";import{I as X}from"./dragEventPipeline.js";import $ from"../views/interactive/sketch/SketchLabelOptions.js";import ee from"../views/interactive/sketch/SketchTooltipOptions.js";import{S as te,a as oe,b as ie,T as re,c as se}from"./automaticLengthMeasurementUtils.js";import{a as ne}from"./automaticAreaMeasurementUtils.js";import{p as ae,s as le,e as pe,x as ce,y as he,b as ue,j as de,h as ye}from"./vec2.js";import{c as ge,u as me}from"./boundedPlane.js";import{j as fe,s as ve}from"./ray.js";import{U as xe,M as we,R as _e,S as be}from"./EditGeometryOperations.js";function Oe(e,t){const o=new Q({x:e[0],y:e[1],spatialReference:t});return e.length>2&&(o.z=e[2]),o}function Te(e,t,o){const i=new K({paths:e,spatialReference:t});return o&&F(i),i}function Me(e,t,o,i=!0){const r=M(e);r.forEach((e=>{const t=e[0],o=e[e.length-1];_(t,o)&&1!==e.length||e.push(e[0])}));let s=new Z({rings:r,spatialReference:t});return s.rings.forEach((e=>{Y(e,!1,!1)||e.reverse()})),o&&F(s),i&&s.isSelfIntersecting&&f(t)&&(s=N(s)),s}function Ie(e,t,o){const i=t.mapToLocalMultiple(e),r=[],n={x:i[0].x,y:i[0].y},a=i[1].x,l=i[1].y,p=Math.round(a-n.x),c=Math.round(l-n.y),h=Math.max(Math.abs(p),Math.abs(c));if(o){const e={x:n.x+h,y:n.y+h},t={x:n.x-h,y:n.y-h};r.push(H(e.x,t.y),H(t.x,t.y),H(t.x,e.y),H(e.x,e.y))}else{const e={x:p>0?n.x+h:n.x-h,y:c>0?n.y+h:n.y-h};r.push(H(n.x,n.y),H(e.x,n.y),H(e.x,e.y),H(n.x,e.y))}return Ge(Me([s(r.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!0),r,t)}function Ge(e,t,o){const i=Se(t[3],t[2],o),r=Se(t[1],t[2],o),s=Se(t[0],t[1],o),a=Se(t[0],t[3],o);return{geometry:e,midpoints:n(i)&&n(r)&&n(s)&&n(a)?{top:i,right:r,bottom:s,left:a}:null}}function Se(e,t,o){je[0]=e.x,je[1]=e.y,je[2]=0,ze[0]=t.x,ze[1]=t.y,ze[2]=0,I(je,je,ze,.5),Ve.x=je[0],Ve.y=ze[1],Ve.z=ze[2];const i=o.localToMap(Ve);return n(i)?Oe(i,o.spatialReference):null}const Ve=H(0,0,0),je=G(),ze=G();function Re(e,t,o,i){const r=t.mapToLocalMultiple(e);let s=null,n=null;if(o)s=r[0],n=r[1];else{const e=r[0],t=r[1],o=Math.round(t.x-e.x),i=Math.round(t.y-e.y),a=Math.max(Math.abs(o),Math.abs(i));s=H(o>0?e.x+a/2:e.x-a/2,i>0?e.y+a/2:e.y-a/2),n=H(Math.abs(o)>Math.abs(i)?s.x-a/2:s.x,Math.abs(o)>Math.abs(i)?s.y:s.y-a/2)}const l=t.localToMap(s),p=t.localToMap(n);if(a(l)||a(p))return null;t.doUnnormalization&&q([[l,p]],t.spatialReference);const c=Oe(l,t.spatialReference),h=Oe(p,t.spatialReference),u=v(t.spatialReference);let d=0;if(f(t.spatialReference))d=u*D(c,h,null);else{const e=s.x-n.x,t=s.y-n.y;d=u*Math.sqrt(e*e+t*t)*(i||1)}const y=new k({center:c,radius:d,radiusUnit:"meters",spatialReference:t.spatialReference});return{geometry:Me(y.rings,y.spatialReference,!1),center:c,edge:h}}let Pe=class extends te{constructor(e){super(e),this.type="draw-point",this.helpMessage=void 0}};e([w()],Pe.prototype,"type",void 0),e([w()],Pe.prototype,"elevation",void 0),e([w()],Pe.prototype,"viewType",void 0),e([w()],Pe.prototype,"helpMessage",void 0),Pe=e([b("esri.views.interactive.tooltip.DrawPointTooltipInfo")],Pe);let Ce=class extends te{constructor(e){super(e),this.type="draw-polyline",this.totalLength=h,this.helpMessage=void 0}};e([w()],Ce.prototype,"type",void 0),e([w()],Ce.prototype,"elevation",void 0),e([w()],Ce.prototype,"totalLength",void 0),e([w()],Ce.prototype,"viewType",void 0),e([w()],Ce.prototype,"helpMessage",void 0),Ce=e([b("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")],Ce);let Ue=class extends te{constructor(e){super(e),this.type="draw-polygon",this.area=u,this.helpMessage=void 0}};e([w()],Ue.prototype,"type",void 0),e([w()],Ue.prototype,"elevation",void 0),e([w()],Ue.prototype,"area",void 0),e([w()],Ue.prototype,"viewType",void 0),e([w()],Ue.prototype,"helpMessage",void 0),Ue=e([b("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")],Ue);let Ee=class extends te{constructor(e){super(e),this.type="draw-rectangle",this.xSize=h,this.ySize=h,this.area=u}};e([w()],Ee.prototype,"type",void 0),e([w()],Ee.prototype,"xSize",void 0),e([w()],Ee.prototype,"ySize",void 0),e([w()],Ee.prototype,"area",void 0),Ee=e([b("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")],Ee);let Ae=class extends te{constructor(e){super(e),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=u}};e([w()],Ae.prototype,"type",void 0),e([w()],Ae.prototype,"radius",void 0),e([w()],Ae.prototype,"xSize",void 0),e([w()],Ae.prototype,"ySize",void 0),e([w()],Ae.prototype,"area",void 0),Ae=e([b("esri.views.interactive.tooltip.DrawCircleTooltipInfo")],Ae);class Le{constructor(){this.regularVertices=null,this.activeVertex=null,this.full=null,this.outline=null,this.circle=null,this.rectangle=null}}let ke=class extends(i(o.EventedMixin(X))){constructor(e){super(e),this._graphic=null,this._createOperationGeometry=null,this.defaultZ=0,this.geometryType=null,this.hasZ=!0,this.labelOptions=new $,this.geometryToPlace=null,this.mode=null,this.snappingManager=null,this.snapToScene=!1,this.tooltip=null,this.tooltipOptions=new ee}initialize(){this.internalGraphicsLayer=new O({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer),this.drawOperation=this.makeDrawOperation(),this.handles.add([this.drawOperation.on("vertex-add",(e=>this.onVertexAdd(e))),this.drawOperation.on("vertex-remove",(e=>this.onVertexRemove(e))),this.drawOperation.on("vertex-update",(e=>this.onVertexUpdate(e))),this.drawOperation.on("cursor-update",(e=>this.onCursorUpdate(e))),this.drawOperation.on("complete",(e=>this.onComplete(e))),g((()=>this.tooltipOptions.enabled),(e=>{this.tooltip=e?new re({view:this.view,info:this._tooltipInfo}):l(this.tooltip)}),m),g((()=>this._tooltipInfo),(e=>{n(this.tooltip)&&(this.tooltip.info=e)}),m)]),this.finishToolCreation()}destroy(){this.drawOperation=l(this.drawOperation),this.tooltip=l(this.tooltip),this._destroyAllVisualisations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=l(this.internalGraphicsLayer),this._set("view",null)}get _defaultElevation(){return d(this.defaultZ,"meters")}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(e){this._set("centered",e),this._updateGraphic()}set enabled(e){this.drawOperation.interactive=e,this._set("enabled",e)}set forceUniformSize(e){this._set("forceUniformSize",e),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(e){this._set("graphicSymbol",e),n(this._graphic)&&(this._graphic.symbol=e)}get updating(){return this.drawOperation?.updating??!1}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(e){this.drawOperation.onInputEvent(e)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}_destroyAllVisualisations(){this.handles.remove(De.outline),this.handles.remove(De.regularVertices),this.handles.remove(De.activeVertex),this.handles.remove(Ne)}_createOrUpdateGraphic(e){if(n(this._graphic))return this._updateGraphicGeometry(this._graphic,e),this._graphic;const o=this._graphic=new t({...this.graphicProperties,symbol:this.graphicSymbol});return this._updateGraphicGeometry(o,e),this.internalGraphicsLayer.add(o),this.handles.add(this.initializeGraphic(o)),this.notifyChange("graphic"),this.handles.add(r((()=>{this.internalGraphicsLayer.remove(o),l(o),this._graphic===o&&(this._graphic=null)})),Ne),o}_updateGraphicGeometry(e,t){e.geometry=t}_getCreateOperationGeometry(e={operationComplete:!1}){const{drawOperation:t}=this;if(null==t||0===t.numVertices)return null;const{coordinateHelper:o,view:i}=t,r=t.stagedVertex,a=t.committedVertices,l=a.slice(),p=n(r);p&&l.push(o.pointToArray(r));const c=p?o.pointToArray(r):a.splice(-1)[0],h=l.length,u=i.spatialReference,d="3d"===i.type&&"global"===i.viewingMode,y=new Le;switch(this.geometryType){case"point":case"mesh":y.regularVertices=a,y.activeVertex=c,y.full=o.arrayToPoint(l[0]);break;case"multipoint":y.regularVertices=a,y.activeVertex=c,h>0&&(y.full=function(e,t){return new J({points:e,spatialReference:t})}(l,u));break;case"polyline":y.regularVertices=a,y.activeVertex=c,h>0&&(y.full=Te([l],u,d));break;case"polygon":y.regularVertices=a,y.activeVertex=c,h>0&&(y.full=Me([l],u,d,!0));break;case"circle":if(h>0){const t=B(i,l[0]);if(1===h&&e.operationComplete){const e=l[0],o=t.makeMapPoint(e[0]+Fe*i.resolution,e[1]);y.circle=Re([e,o],t,!0),y.full=n(y.circle)?y.circle.geometry:null}else 2===h&&(this.forceUniformSize?(y.circle=Re(l,t,this.centered),y.full=n(y.circle)?y.circle.geometry:null):(y.rectangle=function(e,t,o){const i=t.mapToLocalMultiple(e),r=i[0],a=i[1],l=Math.round(a.x-r.x),p=Math.round(a.y-r.y),c=H(o?r.x:r.x+l/2,o?r.y:r.y+p/2),h=o?l:l/2,u=o?p:p/2,d=[],y=2*Math.PI/60;function g(e){const t=Math.cos(e),o=Math.sin(e);return H(h*t+c.x,u*o+c.y)}for(let e=0;e<60;e++)d.push(g(e*y));d.push(d[0]);const{spatialReference:m,doUnnormalization:f}=t,v=Me([s(d.map((e=>t.localToMap(e))))],m,f,!1),x=t.localToMap(g(Math.PI/2)),w=t.localToMap(g(0)),_=t.localToMap(g(-Math.PI/2)),b=t.localToMap(g(Math.PI));return{geometry:v,midpoints:n(x)&&n(w)&&n(_)&&n(b)?{top:Oe(x,m),right:Oe(w,m),bottom:Oe(_,m),left:Oe(b,m)}:null}}(l,t,this.centered),y.full=y.rectangle.geometry))}break;case"rectangle":if(h>0){const t=B(i,l[0]);if(1===h&&e.operationComplete){const e=l[0],o=t.makeMapPoint(e[0]+Fe*i.resolution,e[1]);y.rectangle=Ie([e,o],t,!0),y.full=y.rectangle.geometry}else 2===h&&(y.rectangle=this.forceUniformSize?Ie(l,t,this.centered):function(e,t,o){let i=t.mapToLocalMultiple(e);if(1===i.length){const e=48,t=i[0];i=[H(t.x-e,t.y+e),H(t.x+e,t.y-e),H(t.x+e,t.y-e),H(t.x-e,t.y+e)]}const r=[],n={x:i[0].x,y:i[0].y},a={x:i[1].x,y:i[1].y};if(o){const e=Math.round(a.x-n.x),t=Math.round(a.y-n.y);r.push(H(n.x-e,n.y-t),H(a.x,n.y-t),H(a.x,a.y),H(n.x-e,a.y))}else r.push(H(n.x,n.y),H(a.x,n.y),H(a.x,a.y),H(n.x,a.y));return Ge(Me([s(r.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!0),r,t)}(l,t,this.centered),y.full=y.rectangle.geometry)}break;default:return null}switch(this.geometryType){case"point":case"multipoint":break;case"polyline":case"polygon":h>1&&(y.outline=Te([l],u,d));break;case"circle":case"rectangle":n(y.full)&&"polygon"===y.full.type&&(y.outline=Me(y.full.rings,u,d))}return y}initializeGraphic(e){return null}onComplete(e){this._updateGraphic();let t=null;if(this.drawOperation.isCompleted){const e=this._getCreateOperationGeometry({operationComplete:!0});n(e)&&(t=this._createOrUpdateGraphic(e.full).clone())}this._createOperationGeometry=null,this.emit("complete",{graphic:t,...e})}onCursorUpdate(e){this._updateGraphic(),this.emit("cursor-update",e)}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}onVertexAdd(e){this._updateGraphic(),this.emit("vertex-add",e)}onVertexRemove(e){this._updateGraphic(),this.emit("vertex-remove",e)}onVertexUpdate(e){this._updateGraphic(),this.emit("vertex-update",e)}_updateGraphic(){const e=this._getCreateOperationGeometry();this._createOperationGeometry=e,a(e)?this._destroyAllVisualisations():(n(e.outline)?this.handles.add(this.onOutlineChanged(e.outline),De.outline):this.handles.remove(De.outline),n(e.regularVertices)?this.handles.add(this.onRegularVerticesChanged(e.regularVertices),De.regularVertices):this.handles.remove(De.regularVertices),n(e.activeVertex)?this.handles.add(this.onActiveVertexChanged(e.activeVertex),De.activeVertex):this.handles.remove(De.activeVertex),n(e.full)?this._createOrUpdateGraphic(e.full):this.handles.remove(Ne))}get _tooltipInfo(){const{drawOperation:e}=this;if(!e)return null;switch(this.geometryType){case"point":return this._drawPointTooltipInfo;case"polyline":return this._drawPolylineTooltipInfo;case"polygon":return this._drawPolygonTooltipInfo;case"rectangle":return this._drawRectangleTooltipInfo;case"circle":return this._drawCircleTooltipInfo;default:return null}}get _drawPointTooltipInfo(){const e=p(this.graphic,(e=>e.geometry));return a(e)||"point"!==e.type||"2d"===this.view.type&&0===this.defaultZ?null:new Pe({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,viewType:this.view.type,helpMessage:W("point",e)})}get _drawPolylineTooltipInfo(){const e=this._createOperationGeometry,t=n(e)?e.full:null;if(a(t)||"polyline"!==t.type)return null;const o=oe(t,this._elevationMode);return new Ce({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,totalLength:c(o,h),viewType:this.view.type,helpMessage:W("polyline",t)})}get _drawPolygonTooltipInfo(){const e=this._createOperationGeometry,t=n(e)?e.full:null;if(a(t)||"polygon"!==t.type)return null;const o=ne(t,this._elevationMode);return new Ue({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,area:c(o,u),viewType:this.view.type,helpMessage:W("polygon",t)})}get _drawRectangleTooltipInfo(){return a(this.drawOperation)?null:new Ee({tooltipOptions:this.tooltipOptions,xSize:c(this._xSize,h),ySize:c(this._ySize,h),area:c(this._fullGeometryArea,u)})}get _drawCircleTooltipInfo(){if(a(this.drawOperation))return null;const e=this.forceUniformSize;return new Ae({tooltipOptions:this.tooltipOptions,radius:e?c(this._circleRadius,h):null,xSize:e?null:c(this._xSize,h),ySize:e?null:c(this._ySize,h),area:c(this._fullGeometryArea,u)})}get _circleRadius(){const e=this._createOperationGeometry;return n(e)&&n(e.circle)&&n(e.circle.center)&&n(e.circle.edge)?ie(e.circle.center,e.circle.edge,this._elevationMode):null}get _xSize(){const e=this._createOperationGeometry;if(a(e)||a(e.rectangle))return null;const{midpoints:t}=e.rectangle;return n(t)?ie(t.left,t.right,this._elevationMode):null}get _ySize(){const e=this._createOperationGeometry;if(a(e)||a(e.rectangle))return null;const{midpoints:t}=e.rectangle;return n(t)?ie(t.top,t.bottom,this._elevationMode):null}get _fullGeometryArea(){const e=this._createOperationGeometry,t=n(e)?e.full:null;return a(t)||"polygon"!==t.type?null:ne(t,this._elevationMode)}get _elevationTooltipDetail(){return{mode:this.drawOperation.elevationInfo.mode,...this._vertexTooltipElevation}}get _vertexTooltipElevation(){const{tooltipOptions:e,view:t,drawOperation:o}=this;if(a(o))return this._defaultElevation;const i=o.stagedVertex??o.lastVertex;if(a(i)||"2d"===t.type)return this._defaultElevation;const r={mode:e.elevation.mode,offset:0},s=(T(t,i,o.elevationInfo,r)??0)*x(i.spatialReference);return d(s,"meters")}get _elevationMode(){return this.drawOperation.isDraped?"on-the-ground":"absolute-height"}};e([w()],ke.prototype,"_createOperationGeometry",void 0),e([w()],ke.prototype,"_defaultElevation",null),e([w({value:!0})],ke.prototype,"centered",null),e([w({nonNullable:!0})],ke.prototype,"defaultZ",void 0),e([w()],ke.prototype,"drawOperation",void 0),e([w({value:!0})],ke.prototype,"enabled",null),e([w({value:!0})],ke.prototype,"forceUniformSize",null),e([w({constructOnly:!0})],ke.prototype,"geometryType",void 0),e([w()],ke.prototype,"graphic",null),e([w({constructOnly:!0})],ke.prototype,"graphicProperties",void 0),e([w()],ke.prototype,"graphicSymbol",null),e([w({constructOnly:!0})],ke.prototype,"hasZ",void 0),e([w({constructOnly:!0,type:$})],ke.prototype,"labelOptions",void 0),e([w({constructOnly:!0})],ke.prototype,"geometryToPlace",void 0),e([w({constructOnly:!0})],ke.prototype,"mode",void 0),e([w()],ke.prototype,"snappingManager",void 0),e([w()],ke.prototype,"snapToScene",void 0),e([w()],ke.prototype,"tooltip",void 0),e([w({constructOnly:!0,type:ee})],ke.prototype,"tooltipOptions",void 0),e([w({readOnly:!0})],ke.prototype,"type",void 0),e([w({readOnly:!0})],ke.prototype,"updating",null),e([w({constructOnly:!0,nonNullable:!0})],ke.prototype,"view",void 0),e([w()],ke.prototype,"_tooltipInfo",null),e([w()],ke.prototype,"_drawPointTooltipInfo",null),e([w()],ke.prototype,"_drawPolylineTooltipInfo",null),e([w()],ke.prototype,"_drawPolygonTooltipInfo",null),e([w()],ke.prototype,"_drawRectangleTooltipInfo",null),e([w()],ke.prototype,"_drawCircleTooltipInfo",null),e([w()],ke.prototype,"_circleRadius",null),e([w()],ke.prototype,"_xSize",null),e([w()],ke.prototype,"_ySize",null),e([w()],ke.prototype,"_fullGeometryArea",null),e([w()],ke.prototype,"_elevationTooltipDetail",null),e([w()],ke.prototype,"_vertexTooltipElevation",null),e([w()],ke.prototype,"_elevationMode",null),ke=e([b("esri.views.draw.DrawGraphicTool")],ke);const Ne="create-operation-graphic",De={outline:"outline-visual",regularVertices:"regular-vertices-visual",activeVertex:"active-vertex-visual"};function Ze(e){switch(e){case"point":case"polyline":case"polygon":case"multipoint":return e;case"circle":case"rectangle":return"segment";case"mesh":return"point"}}const Fe=48;function Ye(e,t){return He(e,t,!1)}function qe(e,t){return He(e,t,!0)}function He(e,t,o){if(e instanceof xe){if(e.operation instanceof we)return function(e,t,o=!1){const i=o?-1:1,r=S(i*e.dx,i*e.dy,i*e.dz);V(t.origin,t.origin,r)}(e.operation,t,o),!0;if(e.operation instanceof _e)return function(e,t,o=!1){const i=o?-e.angle:e.angle;j(t.basis1,t.basis1,L,i),j(t.basis2,t.basis2,L,i)}(e.operation,t,o),!0;if(e.operation instanceof be)return function(e,t,o=!1){const i=o?1/e.factor1:e.factor1,r=o?1/e.factor2:e.factor2;z(t.basis1,t.basis1,i),z(t.basis2,t.basis2,r),ae(t.origin,t.origin,e.origin,e.axis1,i),ae(t.origin,t.origin,e.origin,e.axis2,r)}(e.operation,t,o),!0}return!1}function Be(e,t,o,i){i||(i=ge());const r=le(fe.get(),e[1],-e[0]),s=le(fe.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),n=le(fe.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),a=fe.get();t.components.forEach((t=>t.vertices.forEach((t=>{const o=t.pos;le(a,pe(e,o),pe(r,o)),ce(s,s,a),he(n,n,a)}))));const l=1e-6,p=le(fe.get(),n[0]-s[0]<l?o/2:0,n[1]-s[1]<l?o/2:0);return ue(s,s,p),de(n,n,p),ye(i.basis1,e,(n[0]-s[0])/2),ye(i.basis2,r,(n[1]-s[1])/2),le(i.origin,s[0]*e[0]+s[1]*r[0],s[0]*e[1]+s[1]*r[1]),de(i.origin,i.origin,i.basis1),de(i.origin,i.origin,i.basis2),i}function Je(e,t,o,i=0,r){r||(r=ge()),t.toRenderCoords(e.origin,o,r.origin);const s=ve.get();V(s,e.origin,e.basis1),V(s,s,e.basis2),t.toRenderCoords(s,o,s);const n=ve.get();V(n,e.origin,e.basis1),R(n,n,e.basis2),t.toRenderCoords(n,o,n);const a=ve.get();R(a,e.origin,e.basis1),R(a,a,e.basis2),t.toRenderCoords(a,o,a);const l=ve.get();R(l,e.origin,e.basis1),V(l,l,e.basis2),t.toRenderCoords(l,o,l);const p=I(ve.get(),s,n,.5);R(p,p,r.origin);const c=I(ve.get(),a,l,.5);R(c,r.origin,c),I(r.basis1,p,c,.5);const h=I(ve.get(),l,s,.5);R(h,h,r.origin);const u=I(ve.get(),n,a,.5);R(u,r.origin,u),I(r.basis2,h,u,.5);const d=P(ve.get(),r.basis1,r.basis2),y=P(d,d,r.basis1);return C(y,y),z(r.basis2,y,U(r.basis2,y)),z(r.basis1,r.basis1,1+i/E(r.basis1)),z(r.basis2,r.basis2,1+i/E(r.basis2)),me(r),r}function Ke(e,t,o,i){const r=ve.get();R(r,R(r,e.origin,e.basis1),e.basis2);const s=ve.get();A(s,r,e.basis1,2);const n=ve.get();A(n,s,e.basis2,2);const l=ve.get();A(l,r,e.basis2,2),r[2]=s[2]=n[2]=l[2]=t;const p=i?"on-the-ground":"absolute-height",c=y(se(r,s,o,p),se(l,n,o,p)),h=y(se(s,n,o,p),se(r,l,o,p));return a(h)||a(c)?null:[c,h]}export{ke as D,Ye as a,Je as b,Be as c,Ze as g,Ke as m,qe as u};