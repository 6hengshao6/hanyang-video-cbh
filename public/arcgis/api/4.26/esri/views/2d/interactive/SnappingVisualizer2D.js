// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry ../../../Graphic ../../../symbols ../../../core/handleUtils ../../../core/screenUtils ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3f64 ../../../symbols/cim/enums ../../draw/support/settings ../../interactive/snapping/Settings ../../interactive/snapping/SnappingVisualizer ../../../symbols/SimpleMarkerSymbol ../../../symbols/SimpleLineSymbol ../../../symbols/CIMSymbol ../../../geometry/Point ../../../geometry/Polyline".split(" "),
function(q,h,r,y,L,z,k,l,t,A,f,u,m,B,v,C,n,w,p){r=function(c){function d(a){var b=g.call(this);b._graphicsLayer=a;return b}h._inherits(d,c);var g=h._createSuper(d);c=d.prototype;c.visualizeIntersectionPoint=function(a,b){return this._visualizeSnappingIndicator(new w({x:a.intersectionPoint[0],y:a.intersectionPoint[1],spatialReference:b.spatialReference}),D)};c.visualizePoint=function(a,b){return this._visualizeSnappingIndicator(new w({x:a.point[0],y:a.point[1],spatialReference:b.spatialReference}),
E)};c.visualizeLine=function(a,b){return this._visualizeSnappingIndicator(new p({paths:[[a.lineStart,a.lineEnd]],spatialReference:b.spatialReference}),F)};c.visualizeParallelSign=function(a,b){return this._visualizeSnappingIndicator(new p({paths:[[a.lineStart,a.lineEnd]],spatialReference:b.spatialReference}),G)};c.visualizeRightAngleQuad=function(a,b){return this._visualizeSnappingIndicator(new p({paths:[[a.previousVertex,a.centerVertex,a.nextVertex]],spatialReference:b.spatialReference}),H(a))};
c._visualizeSnappingIndicator=function(a,b){const x=new y({geometry:a,symbol:b});this._graphicsLayer.add(x);return z.makeHandle(()=>{this._graphicsLayer.remove(x)})};return h._createClass(d)}(B.SnappingVisualizer);const e=u.colors.main.toArray(),I=[...u.colors.main.toRgb(),100],D=new v({outline:new C({width:1.5,color:e}),size:15,color:[0,0,0,0]}),E=new v({outline:{width:.5,color:[0,0,0,1]},size:10,color:e}),F=new n({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",
enable:!0,capStyle:f.LineCapStyle.Butt,joinStyle:f.LineJoinStyle.Round,miterLimit:10,width:k.px2pt(m.defaults.lineHintWidthTarget),color:e}]}}}),G=new n({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",
geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:e}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],
[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:e}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});f=c=>new n({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:k.px2pt(m.defaults.rightAngleHintSize),rotation:c,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},
frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:k.px2pt(m.defaults.rightAngleHintOutlineSize),color:e},{type:"CIMSolidFill",enable:!0,color:I}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});const J=f(45),K=f(225),H=(()=>{const c=t.create(),d=t.create(),g=A.create();return a=>
{l.subtract(c,a.centerVertex,a.previousVertex);l.subtract(d,a.nextVertex,a.previousVertex);l.cross(g,c,d);return 0>g[2]?J:K}})();q.SnappingVisualizer2D=r;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});