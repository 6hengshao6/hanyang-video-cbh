// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./ActionBase".split(" "),function(d,e,g,b,n,p,h,k){var f;b=f=function(l){function c(a){a=m.call(this,a);a.image=null;a.type="toggle";a.value=!1;return a}d._inherits(c,l);var m=d._createSuper(c);c.prototype.clone=function(){return new f({active:this.active,className:this.className,
disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})};return d._createClass(c)}(k);e.__decorate([g.property()],b.prototype,"image",void 0);e.__decorate([g.property()],b.prototype,"value",void 0);return b=f=e.__decorate([h.subclass("esri.support.Action.ActionToggle")],b)});