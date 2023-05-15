// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../Color ../../../../core/Handles ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../chunks/vec2 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ./VisualElement ../../../interactive/support/viewUtils ../../../overlay/LineOverlayItem ../../../overlay/TextOverlayItem".split(" "),function(u,x,C,J,K,L,m,e,M,v,y,N,O,P){function z(f,n,w,a){f.eval(n,A,D);M.add(E,A,D);w.projectToRenderScreen(A,
F);w.projectToRenderScreen(E,G);e.subtract(a,Q,R);e.normalize(a,a)}y=function(f){function n(a){var c=w.call(this,a.view);c._handles=new J;c._textItem=null;c._calloutItem=null;c._showCallout=!0;c._showText=!0;c._geometry=null;c._text="-";c._fontSize=14;c._backgroundColor=new C([0,0,0,.6]);c._textColor=new C([255,255,255]);c._distance=25;c._anchor="right";c.updatePositionOnCameraMove=!0;c.applyProps(a);return c}x._inherits(n,f);var w=x._createSuper(n);f=n.prototype;f.overlaps=function(a){return this.attached?
this.textItem.visible&&a.textItem.visible&&!!this.view.overlay?.overlaps(this._textItem,a.textItem):!1};f.updateLabelPosition=function(){if(this.attached){this._showCallout=this._showText=!1;var {geometry:a,view:c,visible:g}=this;if(K.isSome(a)&&c._stage)switch(a.type){case "point":if(!this._computeLabelPositionFromPoint(a.point,l))break;if(a.callout){var h=c.state.camera;const k=a.callout.distance;e.add(d,d,[0,a.callout.offset]);h.renderToScreen(d,l);e.set(b,0,1);e.scale(b,b,k*h.pixelRatio);e.add(b,
b,d);h.renderToScreen(b,q);this._showCallout=this._updatePosition(l,q)}else this._textItem.position=[l[0],l[1]],this._textItem.anchor="center";this._showText=!0;break;case "corner":if(!this._computeLabelPositionFromCorner(a,this._distance,l,q))break;this._showCallout=this._updatePosition(l,q);this._showText=!0;break;case "segment":this._computeLabelPositionFromSegment(a,this._distance,this._anchor,l,q)&&(this._showText=!0,h=this._updatePosition(l,q),this._showCallout=!1!==a.callout&&h,this._showCallout||
(this._textItem.anchor="center"))}this.updateVisibility(g)}};f._computeLabelPositionFromPoint=function(a,c){const g=this.view.state.camera;g.projectToRenderScreen(a,d);if(0>d[2]||1<d[2])return!1;g.renderToScreen(d,c);return!0};f._computeLabelPositionFromCorner=function(a,c,g,h){if(!a)return!1;const k=this.view.state.camera;z(a.left,1,k,p);e.negate(p,p);z(a.right,0,k,H);e.add(b,p,H);e.negate(b,b);e.normalize(b,b);k.projectToRenderScreen(a.left.endRenderSpace,d);if(0>d[2]||1<d[2])return!1;k.renderToScreen(d,
g);e.scale(b,b,c*k.pixelRatio);e.add(b,b,d);k.renderToScreen(b,h);return!0};f._computeLabelPositionFromSegment=function(a,c,g,h,k){if(!a)return!1;const B=a.segment,r=this.view.state.camera;N.renderScreenSpaceTangent(B.startRenderSpace,B.endRenderSpace,r,p);e.set(b,-p[1],p[0]);let t=!1;switch(g){case "top":t=0>b[1];break;case "bottom":t=0<b[1];break;case "left":t=0<b[0];break;case "right":t=0>b[0]}t&&e.negate(b,b);if(0===e.length(b))switch(g){case "top":b[1]=1;break;case "bottom":b[1]=-1;break;case "left":b[0]=
-1;break;case "right":b[0]=1}B.eval(S[a.sampleLocation],I);r.projectToRenderScreen(I,d);if(0>d[2]||1<d[2])return!1;r.renderToScreen(d,h);e.scale(b,b,c*r.pixelRatio);e.add(b,b,d);r.renderToScreen(b,k);return!0};f._updatePosition=function(a,c){if(c){const g=c[0]-a[0],h=c[1]-a[1];this._textItem.position=[c[0],c[1]];this._textItem.anchor=Math.abs(g)>Math.abs(h)?0<g?"left":"right":0<h?"top":"bottom";this._calloutItem.startPosition=[a[0],a[1]];this._calloutItem.endPosition=[c[0],c[1]];return!0}this._textItem.position=
[a[0],a[1]];this._textItem.anchor="center";return!1};f.createResources=function(){this._textItem=new P({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor});this._calloutItem=new O({visible:!0,width:2});this.updateLabelPosition();this.view.overlay?.items.addMany([this._textItem,this._calloutItem]);this.updatePositionOnCameraMove&&this._handles.add(L.watch(()=>this.view.state.camera,()=>this.updateLabelPosition()))};f.destroyResources=
function(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]);this._handles.removeAll()};f.updateVisibility=function(a){this._textItem.visible=this._showText&&a;this._calloutItem.visible=this._showCallout&&a};x._createClass(n,[{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=a;this.updateLabelPosition()}},{key:"textItem",get:function(){return this._textItem}},{key:"text",get:function(){return this._text},
set:function(a){this._text=a;this.attached&&(this._textItem.text=this._text)}},{key:"fontSize",get:function(){return this._fontSize},set:function(a){this._fontSize=a;this.attached&&(this._textItem.fontSize=this._fontSize)}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(a){this._backgroundColor=a;this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}},{key:"textColor",get:function(){return this._textColor},set:function(a){this._textColor=a;this.attached&&
(this._textItem.textColor=this._textColor)}},{key:"distance",get:function(){return this._distance},set:function(a){this._distance!==a&&(this._distance=a,this.updateLabelPosition())}},{key:"anchor",get:function(){return this._anchor},set:function(a){this._anchor!==a&&(this._anchor=a,this.updateLabelPosition())}}]);return n}(y.VisualElement);const A=v.create(),E=v.create(),D=v.create(),p=m.createRenderScreenPointArray(),H=m.createRenderScreenPointArray(),b=m.createRenderScreenPointArray(),I=v.create(),
d=m.createRenderScreenPointArray3(),l=m.createScreenPointArray(),q=m.createScreenPointArray(),F=m.createRenderScreenPointArray3(),R=F,G=m.createRenderScreenPointArray3(),Q=G,S={start:0,center:.5,end:1};u.LabelVisualElement=y;u.mirrorPosition=function(f){switch(f){case "top":return"bottom";case "right":return"left";case "bottom":return"top";case "left":return"right"}};u.screenSpaceTangent=z;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});