// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./Content".split(" "),function(f,c,d,a,n,p,h,k){var g;a=g=function(l){function e(b){b=m.call(this,b);b.description=null;b.displayType="auto";b.title=null;b.type="attachments";return b}f._inherits(e,l);var m=f._createSuper(e);e.prototype.clone=function(){return new g({description:this.description,
displayType:this.displayType,title:this.title})};return f._createClass(e)}(k);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c.__decorate([d.property({type:["auto","preview","list"],json:{write:!0}})],a.prototype,"displayType",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);c.__decorate([d.property({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=g=c.__decorate([h.subclass("esri.popup.content.AttachmentsContent")],
a)});