// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipContentWithHelpMessage ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,c,f,v,w,x,y,z,g,d,h,k,l,A,e){var m=
`${d.CONTENT} ${`${d.CONTENT}--extent-rotate`}`;a.TooltipContentExtentRotate=function(n){function b(){return p.apply(this,arguments)}c._inherits(b,n);var p=c._createSuper(b);b.prototype.render=function(){const {angle:q,tooltipOptions:r}=this.info,{visibleElements:t}=r,u=this._messagesTooltip.sketch;return e.tsx(k.TooltipContentWithHelpMessage,{className:m,helpMessage:this._getHelpMessage()},t.rotation&&e.tsx(l.TooltipField,{title:u.rotation,value:this._formatRelativeOrientation(q)}))};return c._createClass(b)}(h.TooltipContent);
a.TooltipContentExtentRotate=f.__decorate([g.subclass("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],a.TooltipContentExtentRotate);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});