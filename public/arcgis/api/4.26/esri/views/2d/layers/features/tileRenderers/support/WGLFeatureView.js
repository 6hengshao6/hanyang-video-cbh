// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/has ../../../../../../core/promiseUtils ../../../../engine/brushes ../../../../engine/FeatureContainer ../../../../engine/webgl/enums".split(" "),function(m,d,k,n,e,p,l){const q=k("featurelayer-order-by-server-enabled");k=function(f){function g(a,b,c,h){a=r.call(this,a);a._hitTestsRequests=[];a._layer=c;a._layerView=b;a._onUpdate=h;return a}d._inherits(g,f);var r=d._createSuper(g);f=g.prototype;f.renderChildren=
function(a){this.attributeView.update();this.hasAnimation&&a.painter.effects.integrate.draw(a,a.attributeView);d._get(d._getPrototypeOf(g.prototype),"renderChildren",this).call(this,a)};f.hasEmptyAttributeView=function(){return this.attributeView.isEmpty()};f.isUpdating=function(){return this.attributeView.isUpdating()};f.hitTest=function(a){let b=this._hitTestsRequests.find(({x:h,y:t})=>h===a.x&&t===a.y);const c=n.createResolver();b?b.resolvers.push(c):(b={x:a.x,y:a.y,resolvers:[c]},this._hitTestsRequests.push(b));
this.requestRender();return c.promise};f.onTileData=function(a,b){const c=q&&"orderBy"in this._layer&&this._layer.orderBy,h=c&&c?.length&&!c[0].valueExpression&&c[0].field;a.patch(b,!!c&&this._layerView.orderByFields===h);this.contains(a)||this.addChild(a);this.requestRender()};f.onTileError=function(a){this.contains(a)||this.addChild(a)};f.updateTransitionProperties=function(a,b){d._get(d._getPrototypeOf(g.prototype),"updateTransitionProperties",this).call(this,a,b);this._layerView.featureEffectView.transitionStep(a,
b);this._layerView.featureEffectView.transitioning&&this.requestRender()};f.doRender=function(a){const {minScale:b,maxScale:c}=this._layer.effectiveScaleRange,h=a.state.scale;h<=(b||Infinity)&&h>=c&&d._get(d._getPrototypeOf(g.prototype),"doRender",this).call(this,a)};f.afterRender=function(a){d._get(d._getPrototypeOf(g.prototype),"afterRender",this).call(this,a);this._hitTestsRequests.length&&this.requestRender()};f.onAttributeStoreUpdate=function(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate();
this._onUpdate()};f.setStencilReference=function(a){const {rendererSchema:b}=a.rendererInfo;if("dot-density"===b?.type&&1<b?.dotSize||"heatmap"===b?.type)for(const c of this.children)c.stencilRef=c.key.level+1;else d._get(d._getPrototypeOf(g.prototype),"setStencilReference",this).call(this,a)};f.prepareRenderPasses=function(a){const b=a.registerRenderPass({name:"label",brushes:[e.brushes.label],target:()=>this.hasLabels?this.children:null,drawPhase:l.WGLDrawPhase.LABEL|l.WGLDrawPhase.LABEL_ALPHA}),
c=a.registerRenderPass({name:"geometry",brushes:[e.brushes.fill,e.brushes.dotDensity,e.brushes.line,e.brushes.marker,e.brushes.heatmap,e.brushes.pieChart,e.brushes.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:a.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:a.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,
args:()=>this._layerView.featureEffectView.includedEffects},{apply:a.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),h=a.registerRenderPass({name:"highlight",brushes:[e.brushes.fill,e.brushes.dotDensity,e.brushes.line,e.brushes.marker,e.brushes.pieChart,e.brushes.text],target:()=>this.children,drawPhase:l.WGLDrawPhase.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:a.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...d._get(d._getPrototypeOf(g.prototype),
"prepareRenderPasses",this).call(this,a),c,h,b]};d._createClass(g,[{key:"hasAnimation",get:function(){return this.hasLabels}},{key:"hasLabels",get:function(){if("sublayers"in this._layer)return this._layer.sublayers.some(b=>!!b.labelingInfo?.length&&b.labelsVisible);var a=this._layer.featureReduction;a=a&&"labelingInfo"in a&&a.labelsVisible&&a.labelingInfo&&a.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!a}}]);return g}(p.FeatureContainer);
m.WGLFeatureView=k;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});