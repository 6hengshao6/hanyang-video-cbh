// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./handlers/DoubleClickZoom ./handlers/DoubleTapDragZoom ./handlers/DragPan ./handlers/DragRotate ./handlers/GamepadNavigation ./handlers/KeyPan ./handlers/KeyRotate ./handlers/KeyZoom ./handlers/MouseWheelZoom ./handlers/PinchAction ../../input/BrowserEventSource ../../input/InputManager ../../input/handlers/PreventContextMenu ../../input/recognizers/DoubleTapDrag ../../input/recognizers/Drag ../../input/recognizers/ImmediateDoubleClick ../../input/recognizers/PointerClickHoldAndDrag ../../input/recognizers/SingleAndDoubleClick".split(" "),
function(k,e,a,p,m,g,h,N,O,P,q,n,r,t,u,v,w,x,y,z,A,B,l,C,D,E,F,G,H){var I={left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},J={zoomIn:["\x3d","+"],zoomOut:["-","_"]},K={clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"};a=function(c){function f(){var b=L.apply(this,arguments);b._handles=new p;return b}k._inherits(f,c);var L=k._createSuper(f);c=f.prototype;c.initialize=function(){const b=()=>this.view?.ready;
this._handles.add([g.when(()=>!b(),()=>this._disconnect()),g.when(b,()=>this._connect())])};c.destroy=function(){this._handles=m.destroyMaybe(this._handles);this._disconnect()};c._disconnect=function(){this.view.viewEvents.disconnect();this._inputManager=m.destroyMaybe(this._inputManager)};c._connect=function(){const b=new B.BrowserEventSource(this.view.surface,this.view.input);var d=[new F.ImmediateDoubleClick,new G.PointerClickHoldAndDrag,new H.SingleAndDoubleClick,new E.Drag(this.view.navigation),
new D.DoubleTapDrag];d=new l.InputManager({eventSource:b,recognizers:d});d.installHandlers("prevent-context-menu",[new C.PreventContextMenu],l.ViewEventPriorities.INTERNAL);d.installHandlers("navigation",[new A.PinchRotateAndZoom(this.view),new v.GamepadNavigation(this.view),new z.MouseWheelZoom(this.view),new n.DoubleClickZoom(this.view),new n.DoubleClickZoom(this.view,["Ctrl"]),new t.DragPan(this.view,"primary"),new w.KeyPan(this.view,I),new y.KeyZoom(this.view,J),new x.KeyRotate(this.view,K),new u.DragRotate(this.view,
"secondary"),new r.DoubleTapDragZoom(this.view,"touch")],l.ViewEventPriorities.INTERNAL);this.view.viewEvents.connect(d);this._source=b;this._inputManager=d;g.watch(()=>this.view?.navigation?.browserTouchPanEnabled,M=>{this._source&&(this._source.browserTouchPanningEnabled=!M)},g.initial)};k._createClass(f,[{key:"latestPointerType",get:function(){return this._inputManager?.latestPointerType}},{key:"latestPointerLocation",get:function(){return this._inputManager?.latestPointerLocation}},{key:"multiTouchActive",
get:function(){return this._inputManager?.multiTouchActive??!1}},{key:"test",get:function(){return{inputManager:this._inputManager}}}]);return f}(a);e.__decorate([h.property()],a.prototype,"view",void 0);e.__decorate([h.property()],a.prototype,"latestPointerType",null);e.__decorate([h.property()],a.prototype,"latestPointerLocation",null);e.__decorate([h.property()],a.prototype,"multiTouchActive",null);return a=e.__decorate([q.subclass("esri.views.2d.input.MapViewInputManager")],a)});