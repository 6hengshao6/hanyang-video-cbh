// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/clock ../InputHandler ./SingleAndDoubleClick ./support".split(" "),function(p,e,q,m,k,l){m=function(f){function h(a=k.DefaultParameters.maximumDoubleClickDelay,c=k.DefaultParameters.maximumDoubleClickDistance,d=k.DefaultParameters.maximumDoubleTouchDelay,g=k.DefaultParameters.maximumDoubleTouchDistance,n=q.clock){var b=r.call(this,!1);b._maximumDoubleClickDelay=a;b._maximumDoubleClickDistance=c;b._maximumDoubleTouchDelay=d;b._maximumDoubleTouchDistance=
g;b._clock=n;b._pointerState=new Map;b._immediateDoubleClick=b.registerOutgoing("immediate-double-click");b.registerIncoming("pointer-down",b._handlePointerDown.bind(e._assertThisInitialized(b)));b.registerIncoming("pointer-up",b._handlePointerUp.bind(e._assertThisInitialized(b)));return b}e._inherits(h,f);var r=e._createSuper(h);f=h.prototype;f.onUninstall=function(){this._pointerState.forEach(a=>{a.immediateDoubleClick&&a.immediateDoubleClick.timeoutHandle.remove()});e._get(e._getPrototypeOf(h.prototype),
"onUninstall",this).call(this)};f._handlePointerDown=function(a){a=a.data;const c=l.getPointerId(a);this._pointerState.has(c)||(this._pointerState.set(c,{downButton:a.native.button,immediateDoubleClick:null}),this.startCapturingPointer(a.native))};f._handlePointerUp=function(a){const c=a.data;var d=l.getPointerId(c);if((d=this._pointerState.get(d))&&d.downButton===c.native.button){const g=d.immediateDoubleClick;if(g){g.timeoutHandle.remove();const n="touch"===a.data.native.pointerType?this._maximumDoubleTouchDistance:
this._maximumDoubleClickDistance;l.manhattanDistance(g,a.data)>n?this._startImmediateDoubleClick(a,d):(this._immediateDoubleClick.emit(a.data,void 0,g.modifiers),this._removeState(c))}else this._startImmediateDoubleClick(a,d)}};f._startImmediateDoubleClick=function(a,c){c.immediateDoubleClick={x:a.data.x,y:a.data.y,modifiers:a.modifiers,timeoutHandle:this._clock.setTimeout(()=>this._removeState(a.data),"touch"===a.data.native.pointerType?this._maximumDoubleTouchDelay:this._maximumDoubleClickDelay)}};
f._removeState=function(a){const c=l.getPointerId(a);this._pointerState.delete(c);this.stopCapturingPointer(a.native);this.refreshHasPendingInputs()};return e._createClass(h)}(m.InputHandler);p.ImmediateDoubleClick=m;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});