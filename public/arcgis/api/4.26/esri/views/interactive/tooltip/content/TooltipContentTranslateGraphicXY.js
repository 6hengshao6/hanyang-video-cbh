// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../css ./TooltipContent ../support/TooltipContentWithHelpMessage ../support/TooltipField ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,c,g,u,v,w,x,y,h,d,k,l,m,z,e){var n=
`${d.CONTENT} ${`${d.CONTENT}--translate-graphic-xy`}`;a.TooltipContentTranslateGraphicXY=function(p){function b(){return q.apply(this,arguments)}c._inherits(b,p);var q=c._createSuper(b);b.prototype.render=function(){const {info:f}=this,{visibleElements:r}=f.tooltipOptions,t=this._messagesTooltip.sketch;return e.tsx(l.TooltipContentWithHelpMessage,{className:n,helpMessage:this._getHelpMessage()},r.distance&&e.tsx(m.TooltipField,{title:t.distance,value:this._formatRelativeLength(f.distance)}))};return c._createClass(b)}(k.TooltipContent);
a.TooltipContentTranslateGraphicXY=g.__decorate([h.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],a.TooltipContentTranslateGraphicXY);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});