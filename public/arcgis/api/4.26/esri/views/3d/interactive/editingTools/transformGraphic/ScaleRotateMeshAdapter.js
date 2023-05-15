// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/HandleOwner ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/support/axisAngleDegrees ../../../../ViewingMode ./undoRecords".split(" "),
function(f,k,c,x,y,t,l,n,d,A,B,C,u,v,w,z){f.ScaleRotateMeshAdapter=function(g){function e(a){a=p.call(this,a);a._interactionState=null;return a}k._inherits(e,g);var p=k._createSuper(e);g=e.prototype;g.initialize=function(){this.addHandles([n.when(()=>l.isSome(this._interactionState)&&this._interactionState.angle!==this._interactionState.previousAngle?{interactionState:this._interactionState,angle:this._interactionState.state.angle}:null,({interactionState:a})=>{this._updateMeshRotation(a)},n.sync),
n.when(()=>l.isSome(this._interactionState)&&this._interactionState.scale!==this._interactionState.previousScale?{interactionState:this._interactionState,scale:this._interactionState.state.scale}:null,({interactionState:a})=>{this._updateMeshSize(a)},n.sync)])};g.startInteraction=function(){const a=new h({angle:this.angle});this._interactionState=a;const b=()=>{this._interactionState=null};return{state:a,done:b,cancel:()=>{a.cancel();b()}}};g.createUndoRecord=function(){return z.createGraphicGeometryUndoRecord(this.graphic)};
g._updateMeshRotation=function(a){const b=this.geometry.anchor,q=this.viewingMode===w.ViewingMode.Global,{angle:m,previousAngle:r}=a;this.geometry.rotate(0,0,t.rad2deg(m-r),{origin:b,geographic:q});a.previousAngle=m;l.isSome(this.geometry.transform)&&this.graphic.notifyMeshTransformChanged();this.graphic.notifyGeometryChanged()};g._updateMeshSize=function(a){const b=this.geometry.anchor,q=this.viewingMode===w.ViewingMode.Global,{scale:m,previousScale:r}=a;this.geometry.scale(m/r,{origin:b,geographic:q});
a.previousScale=m;l.isSome(this.geometry.transform)&&this.graphic.notifyMeshTransformChanged();this.graphic.notifyGeometryChanged()};k._createClass(e,[{key:"angle",get:function(){const a=this.geometry.transform;if(l.isNone(a))return 0;const b=v.axis(a.rotation)[2];return.999999<Math.abs(b)?t.deg2rad(v.angle(a.rotation))*Math.sign(b):0}},{key:"scale",get:function(){return l.isSome(this._interactionState)?this._interactionState.scale:1}}]);return e}(y.HandleOwner);c.__decorate([d.property({constructOnly:!0})],
f.ScaleRotateMeshAdapter.prototype,"graphic",void 0);c.__decorate([d.property({constructOnly:!0})],f.ScaleRotateMeshAdapter.prototype,"geometry",void 0);c.__decorate([d.property({constructOnly:!0})],f.ScaleRotateMeshAdapter.prototype,"viewingMode",void 0);c.__decorate([d.property()],f.ScaleRotateMeshAdapter.prototype,"angle",null);c.__decorate([d.property()],f.ScaleRotateMeshAdapter.prototype,"scale",null);c.__decorate([d.property()],f.ScaleRotateMeshAdapter.prototype,"_interactionState",void 0);
f.ScaleRotateMeshAdapter=c.__decorate([u.subclass("esri.views.3d.interactive.editingTools.transformGraphic.ScaleRotateMeshAdapter")],f.ScaleRotateMeshAdapter);let h=function(g){function e(a){var b=p.call(this,a);b.angle=0;b.initialAngle=0;b.previousAngle=0;b.previousScale=1;b.scale=1;b.initialAngle=a.angle;b.previousAngle=a.angle;return b}k._inherits(e,g);var p=k._createSuper(e);e.prototype.cancel=function(){this.angle=this.initialAngle;this.scale=1};k._createClass(e,[{key:"state",get:function(){const {angle:a,
scale:b}=this;return{angle:a,scale:b}}}]);return e}(x);c.__decorate([d.property()],h.prototype,"angle",void 0);c.__decorate([d.property()],h.prototype,"initialAngle",void 0);c.__decorate([d.property()],h.prototype,"previousAngle",void 0);c.__decorate([d.property()],h.prototype,"previousScale",void 0);c.__decorate([d.property()],h.prototype,"scale",void 0);c.__decorate([d.property()],h.prototype,"state",null);h=c.__decorate([u.subclass("InteractionState")],h);Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});