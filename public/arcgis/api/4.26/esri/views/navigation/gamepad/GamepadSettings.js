// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../input/gamepad/GamepadInputDevice".split(" "),function(e,c,a,d,m,n,p,g,h){a=function(k){function f(b){b=l.call(this,b);b.enabled=!0;b.device=null;b.mode="pan";b.tiltDirection="forward-down";b.velocityFactor=1;return b}
e._inherits(f,k);var l=e._createSuper(f);return e._createClass(f)}(a);c.__decorate([d.property({type:Boolean,nonNullable:!0})],a.prototype,"enabled",void 0);c.__decorate([d.property({type:h})],a.prototype,"device",void 0);c.__decorate([d.property({type:["pan","zoom"],nonNullable:!0})],a.prototype,"mode",void 0);c.__decorate([d.property({type:["forward-down","forward-up"],nonNullable:!0})],a.prototype,"tiltDirection",void 0);c.__decorate([d.property({type:Number,nonNullable:!0})],a.prototype,"velocityFactor",
void 0);return a=c.__decorate([g.subclass("esri.views.navigation.gamepad.GamepadSettings")],a)});