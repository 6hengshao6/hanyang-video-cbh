// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Handles ../../../../core/lang ../../../../core/maybe ../../../../core/quantityFormatUtils ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../chunks/vec3f64 ./lengthDimensionUtils ./settings ../../interactive/visualElements/LabelVisualElement ../../interactive/visualElements/LineVisualElement ../../interactive/visualElements/MarkerVisualElement ../../interactive/visualElements/support/Segment".split(" "),
function(r,y,A,B,p,C,q,h,D,k,t,E,l,F,u){let K=function(){function m(a){this.destroyed=!1;this._handles=new A;this._messages=null;this._labelSegment=new u.EuclideanSegment;const {analysis:c,computation:d,view:b,messages:n}=a;this.analysis=c;this.computation=d;this.view=b;this._messages=n;const g=a.visible,f={view:b,attached:g},{fontSize:v,textColor:w,textBackgroundColor:G}=c.style;this._visualElements=new z({marker:new F.MarkerVisualElement(f,a.markerMaterial),dimension:new l.LineVisualElement(f,a.dimensionLineMaterial),
startOffset:new l.LineVisualElement(f,a.offsetLineMaterial),endOffset:new l.LineVisualElement(f,a.offsetLineMaterial),dimensionSmall:new l.LineVisualElement(f,a.smallDimensionLineMaterial),startOffsetSmall:new l.LineVisualElement(f,a.smallOffsetLineMaterial),endOffsetSmall:new l.LineVisualElement(f,a.smallOffsetLineMaterial),label:new E.LabelVisualElement({view:b,attached:g,distance:0,geometry:{type:"segment",sampleLocation:"center",segment:this._labelSegment,callout:!1},fontSize:h.pt2px(v),textColor:w.clone(),
backgroundColor:G.clone()})});this._handles.add([q.watch(()=>d.geometry,x=>{this.updateCameraDependentElements(b.state.camera,x,c.style);p.isSome(d.geometry)&&this._updateLines(d.geometry)},{...q.initial,equals:B.equals}),q.watch(()=>d.length,x=>this._updateLabelContent(x),q.initial)])}var e=m.prototype;e.destroy=function(){this.destroyed=!0;this._handles=p.destroyMaybe(this._handles);for(const a of this._visualElements.values())a.destroy()};e._updateLines=function(a){const c=k.computeSpanningSegment(H,
k.OffsetSegmentLocation.Start,a.directSegment,a.dimensionSegment),d=k.computeSpanningSegment(I,k.OffsetSegmentLocation.End,a.directSegment,a.dimensionSegment),b=this._visualElements;b.marker.setGeometryFromSegment(a.dimensionSegment,a.primaryOffsetAxis);b.dimension.setGeometryFromSegment(a.dimensionSegment);b.startOffset.setGeometryFromSegment(c);b.endOffset.setGeometryFromSegment(d);b.dimensionSmall.setGeometryFromSegment(a.dimensionSegment);b.startOffsetSmall.setGeometryFromSegment(c);b.endOffsetSmall.setGeometryFromSegment(d)};
e.updateCameraDependentElements=function(a,c,d){var b=this._visualElements;if(p.isNone(c))for(var n of b.values())n.visible=!1;else{a=a.computeScreenPixelSizeAt(c.dimensionSegment.eval(.5,J));n=k.maxScreenLengthSquaredFromGeometry(c,a);var g=h.pt2px(d.lineSize)*t.settings.smallScreenLengthLineSizeFactor;g=n<g**2;var f=!g;b.marker.visible=f;b.dimension.visible=f;b.startOffset.visible=f;b.endOffset.visible=f;b.dimensionSmall.visible=g;b.startOffsetSmall.visible=g;b.endOffsetSmall.visible=g;g=h.pt2px(d.fontSize)*
t.settings.labels.minScreenLengthFontSizeFactor;({label:b}=b);b.visible=n>=g**2;if(b.visible){var {dimensionSegment:v,primaryOffsetAxis:w}=c;({offset:c}=this.computation.dimension);c=0<=Math.sign(c)?1:-1;d=1.5*h.pt2px(d.fontSize)+t.settings.labels.marginPx+h.pt2px(d.lineSize/2);k.offsetSegment(this._labelSegment,v,w,c*d*a);b.updateLabelPosition()}}};e.updateLabelStyle=function(a){const {label:c}=this._visualElements;c.fontSize=h.pt2px(a.fontSize);c.textColor=a.textColor;c.backgroundColor=a.textBackgroundColor};
e.updateUnitsMessages=function(a){this._messages=a;({length:a}=this.computation);this._updateLabelContent(a)};e._updateLabelContent=function(a){const {label:c}=this._visualElements;p.isNone(a)||p.isNone(this._messages)?c.text="":c.text=C.formatDecimal(this._messages,a,a.unit)};y._createClass(m,[{key:"visible",set:function(a){for(const c of this._visualElements.values())c.attached=a}},{key:"testInfo",get:function(){return{dimensionVisualElement:this._visualElements.dimension,label:this._visualElements.label}}}]);
return m}();const H=new u.EuclideanSegment,I=new u.EuclideanSegment,J=D.create();let z=function(){function m(e){this.marker=e.marker;this.dimension=e.dimension;this.startOffset=e.startOffset;this.endOffset=e.endOffset;this.dimensionSmall=e.dimensionSmall;this.startOffsetSmall=e.startOffsetSmall;this.endOffsetSmall=e.endOffsetSmall;this.label=e.label}m.prototype.values=function(){return[this.marker,this.dimension,this.startOffset,this.endOffset,this.dimensionSmall,this.startOffsetSmall,this.endOffsetSmall,
this.label]};return y._createClass(m)}();r.LengthDimensionVisualElements=z;r.LengthDimensionVisualization=K;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});