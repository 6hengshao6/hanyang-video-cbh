// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../symbols/CIMSymbol"],function(h,c){function b(f,g=!1){return{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:f,colorLocked:g}]}}function d(f){return{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",haloSize:1,scaleX:1,angleAlignment:"Display",symbolLayers:f}}}function a(f,g){return{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:10,billboardMode3D:"FaceNearPlane",scaleSymbolsProportionally:!0,respectFrame:!0,
frame:e,colorLocked:g,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[e.xmin,e.ymin],[e.xmax,e.ymin],[e.xmax,e.ymax],[e.xmin,e.ymax],[e.xmin,e.ymin]]]}},markerGraphics:f.map(k=>({type:"CIMMarkerGraphic",symbol:k.symbol||b([0,0,0,255]),geometry:k.geometry}))}}const e={xmin:0,ymin:0,xmax:32,ymax:32};h.getAboveAndBelowSymbols=function(f){switch(f){case "caret":return{above:new c({data:d([a([{geometry:{rings:[[[16,16],[32,0],[32,7.3],[16,23.3],[0,7.3],[0,0],[16,16]]]}}])])}),
below:new c({data:d([a([{geometry:{rings:[[[32,16],[32,23.3],[16,7.3],[0,23.3],[0,16],[16,0],[32,16]]]}}])])})};case "arrow":return{above:new c({data:d([a([{geometry:{rings:[[[16.1,0],[16.1,20.9],[25.7,10.9],[25.7,19.1],[12.9,31.9],[0,19.1],[0,11],[9.6,21],[9.6,0],[16.1,0]]]}}])])}),below:new c({data:d([a([{geometry:{rings:[[[25.5,12.8],[25.5,21],[15.9,11],[15.9,31.9],[9.5,31.9],[9.5,11],[0,20.9],[0,12.8],[12.8,0],[25.5,12.8]]]}}])])})};case "square":return{above:new c({data:d([a([{geometry:{rings:[[[29.2,
1],[29.89,1.14],[30.47,1.53],[30.86,2.11],[31,2.8],[31,29.2],[30.97,29.51],[30.89,29.81],[30.76,30.1],[30.58,30.35],[30.35,30.58],[30.1,30.76],[29.81,30.89],[29.51,30.97],[29.2,31],[2.8,31],[2.49,30.97],[2.19,30.89],[1.9,30.76],[1.65,30.58],[1.42,30.35],[1.24,30.1],[1.11,29.81],[1.03,29.51],[1,29.2],[1,2.8],[1.03,2.49],[1.11,2.19],[1.24,1.9],[1.42,1.65],[1.65,1.42],[1.9,1.24],[2.19,1.11],[2.49,1.03],[2.8,1],[29.2,1]]]}}])])}),below:new c({data:d([a([{geometry:{rings:[[[4,28],[28,28],[28,4],[4,4],
[4,28]],[[29.2,1],[29.89,1.14],[30.47,1.53],[30.86,2.11],[31,2.8],[31,29.2],[30.97,29.51],[30.89,29.81],[30.76,30.1],[30.58,30.35],[30.35,30.58],[30.1,30.76],[29.81,30.89],[29.51,30.97],[29.2,31],[2.8,31],[2.49,30.97],[2.19,30.89],[1.9,30.76],[1.65,30.58],[1.42,30.35],[1.24,30.1],[1.11,29.81],[1.03,29.51],[1,29.2],[1,2.8],[1.03,2.49],[1.11,2.19],[1.24,1.9],[1.42,1.65],[1.65,1.42],[1.9,1.24],[2.19,1.11],[2.49,1.03],[2.8,1],[29.2,1]]]}}])])})};case "circle":return{above:new c({data:d([a([{geometry:{rings:[[[16,
.9],[17.4,1],[18,1],[18.7,1.2],[19.5,1.3],[20.2,1.5],[20.9,1.7],[21.6,2],[22.3,2.3],[22.9,2.6],[23.6,3],[24.3,3.4],[24.9,3.8],[25.5,4.3],[26.1,4.8],[26.7,5.3],[27.2,5.9],[27.7,6.5],[28.2,7.1],[28.6,7.7],[29,8.4],[29.4,9.1],[29.7,9.7],[30,10.4],[30.3,11.1],[30.5,11.8],[30.7,12.5],[30.8,13.3],[31,14],[31,14.6],[31.1,15.3],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,30.9],[11.3,30.4],[9.1,29.5],[7.1,28.2],[5.3,
26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16],[1.1,13.6],[1.6,11.3],[2.5,9.1],[3.8,7.1],[5.3,5.3],[7.1,3.8],[9.1,2.5],[11.3,1.6],[13.6,1.1],[16,.9]]]}}])])}),below:new c({data:d([a([{geometry:{rings:[[[16,3.9],[14.1,4],[12.2,4.5],[10.5,5.2],[8.9,6.2],[7.4,7.4],[6.2,8.9],[5.2,10.5],[4.5,12.2],[4,14.1],[3.9,16],[4.1,18],[4.6,20],[5.4,21.9],[6.6,23.6],[8,25.1],[9.7,26.3],[11.5,27.2],[13.5,27.8],[15.5,28.1],[16,28.1],[17.9,28],[19.8,27.5],[21.5,26.8],[23.1,25.8],[24.6,24.6],[25.8,23.1],[26.8,
21.5],[27.5,19.8],[28,17.9],[28.1,16],[27.9,13.7],[27.2,11.5],[26.2,9.4],[24.7,7.6],[23,6.1],[21,5],[18.8,4.2],[16.5,3.9],[16,3.9]],[[16,.9],[18.9,1.2],[21.8,2],[24.4,3.4],[26.7,5.3],[28.6,7.6],[30,10.2],[30.8,13.1],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,30.9],[11.3,30.4],[9.1,29.5],[7.1,28.2],[5.3,26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16],[1.2,13.1],[2,10.2],[3.4,7.6],[5.3,5.3],[7.6,3.4],
[10.2,2],[13.1,1.2],[16,.9]]]}}])])})};case "triangle":return{above:new c({data:d([a([{geometry:{rings:[[[30.2,0],[30.5,0],[30.7,.1],[31,.2],[31.2,.3],[31.5,.5],[31.6,.7],[31.8,.9],[31.9,1.2],[32,1.4],[32,1.7],[31.8,2.6],[17.5,27.3],[17.3,27.5],[17.1,27.8],[16.8,27.9],[16.6,28.1],[16.3,28.1],[16,28.1],[15.7,28.1],[15.4,28],[15.1,27.9],[14.5,27.3],[.2,2.6],[.1,2.4],[0,2.1],[-0,1.8],[-0,1.6],[0,1.3],[.1,1],[.2,.8],[.4,.6],[.6,.4],[.9,.2],[1.7,0],[30.2,0]]]}}])])}),below:new c({data:d([a([{geometry:{rings:[[[15.1,
.2],[15.4,.1],[15.7,0],[16,0],[16.3,.1],[16.6,.2],[16.8,.3],[17.1,.5],[17.3,.7],[17.5,.9],[31.7,25.5],[31.8,25.8],[31.9,26],[32,26.3],[31.9,26.6],[31.9,26.9],[31.8,27.1],[31.7,27.4],[31.5,27.6],[31.3,27.8],[31,27.9],[30.8,28],[30.5,28.1],[30.2,28.1],[1.7,28.1],[.8,27.9],[.2,27.3],[.1,26.9],[0,26.4],[.2,25.5],[14.5,.9],[15.1,.2]]]}}])])})};case "circle-plus-minus":return{above:new c({data:d([a([{geometry:{rings:[[[16,1.6],[13.7,1.8],[11.5,2.3],[9.5,3.2],[7.5,4.3],[5.8,5.8],[4.3,7.5],[3.2,9.5],[2.3,
11.5],[1.8,13.7],[1.6,16],[1.8,18.3],[2.3,20.5],[3.2,22.5],[4.3,24.5],[5.8,26.2],[7.5,27.7],[9.5,28.8],[11.5,29.7],[13.7,30.2],[16,30.4],[18.3,30.2],[20.5,29.7],[22.5,28.8],[24.5,27.7],[26.2,26.2],[27.7,24.5],[28.8,22.5],[29.7,20.5],[30.2,18.3],[30.4,16],[30.2,13.7],[29.7,11.5],[28.8,9.5],[27.7,7.5],[26.2,5.8],[24.5,4.3],[22.5,3.2],[20.5,2.3],[18.3,1.8],[16,1.6]],[[16,0],[18.8,.3],[21.5,1],[24,2.2],[26.3,3.8],[28.2,5.7],[29.8,8],[31,10.5],[31.7,13.2],[32,16],[31.7,18.8],[31,21.5],[29.8,24],[28.2,
26.3],[26.3,28.2],[24,29.8],[21.5,31],[18.8,31.7],[16,32],[13.2,31.7],[10.5,31],[8,29.8],[5.7,28.2],[3.8,26.3],[2.2,24],[1,21.5],[.3,18.8],[0,16],[.3,13.2],[1,10.5],[2.2,8],[3.8,5.7],[5.7,3.8],[8,2.2],[10.5,1],[13.2,.3],[16,0]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[18,6],[18,14],[26,14],[26,18],[18,18],[18,26],[14,26],[14,18],[6,18],[6,14],[14,14],[14,6],[18,6]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[.9,16],[1.1,13.6],[1.6,11.3],[2.5,9.1],[3.8,7.1],[5.3,5.3],
[7.1,3.8],[9.1,2.5],[11.3,1.6],[13.6,1.1],[16,.9],[18.4,1.1],[20.7,1.6],[22.9,2.5],[24.9,3.8],[26.7,5.3],[28.2,7.1],[29.5,9.1],[30.4,11.3],[30.9,13.6],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,30.9],[11.3,30.4],[9.1,29.5],[7.1,28.2],[5.3,26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16]]]},symbol:b([255,255,255,255])}])])}),below:new c({data:d([a([{geometry:{rings:[[[16,1.6],[13.7,1.8],[11.5,2.3],[9.5,
3.2],[7.5,4.3],[5.8,5.8],[4.3,7.5],[3.2,9.5],[2.3,11.5],[1.8,13.7],[1.6,16],[1.8,18.3],[2.3,20.5],[3.2,22.5],[4.3,24.5],[5.8,26.2],[7.5,27.7],[9.5,28.8],[11.5,29.7],[13.7,30.2],[16,30.4],[18.3,30.2],[20.5,29.7],[22.5,28.8],[24.5,27.7],[26.2,26.2],[27.7,24.5],[28.8,22.5],[29.7,20.5],[30.2,18.3],[30.4,16],[30.2,13.7],[29.7,11.5],[28.8,9.5],[27.7,7.5],[26.2,5.8],[24.5,4.3],[22.5,3.2],[20.5,2.3],[18.3,1.8],[16,1.6]],[[16,0],[18.8,.3],[21.5,1],[24,2.2],[26.3,3.8],[28.2,5.7],[29.8,8],[31,10.5],[31.7,13.2],
[32,16],[31.7,18.8],[31,21.5],[29.8,24],[28.2,26.3],[26.3,28.2],[24,29.8],[21.5,31],[18.8,31.7],[16,32],[13.2,31.7],[10.5,31],[8,29.8],[5.7,28.2],[3.8,26.3],[2.2,24],[1,21.5],[.3,18.8],[0,16],[.3,13.2],[1,10.5],[2.2,8],[3.8,5.7],[5.7,3.8],[8,2.2],[10.5,1],[13.2,.3],[16,0]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[26,14],[26,18],[6,18],[6,14],[26,14]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[16,.9],[17.4,1],[18,1],[18.7,1.2],[19.5,1.3],[20.2,1.5],[20.9,1.7],[21.6,
2],[22.3,2.3],[22.9,2.6],[23.6,3],[24.3,3.4],[24.9,3.8],[25.5,4.3],[26.1,4.8],[26.7,5.3],[27.2,5.9],[27.7,6.5],[28.2,7.1],[28.6,7.7],[29,8.4],[29.4,9.1],[29.7,9.7],[30,10.4],[30.3,11.1],[30.5,11.8],[30.7,12.5],[30.8,13.3],[31,14],[31,14.6],[31.1,15.3],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,30.9],[11.3,30.4],[9.1,29.5],[7.1,28.2],[5.3,26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16],[1.1,13.6],[1.6,
11.3],[2.5,9.1],[3.8,7.1],[5.3,5.3],[7.1,3.8],[9.1,2.5],[11.3,1.6],[13.6,1.1],[16,.9]]]},symbol:b([255,255,255,255])}])])})};case "happy-sad":return{above:new c({data:d([a([{geometry:{rings:[[[10,16.9],[10.36,16.93],[10.72,17.03],[11.05,17.19],[11.35,17.4],[11.6,17.65],[11.81,17.95],[11.97,18.28],[12.07,18.64],[12.1,19],[12.07,19.36],[11.97,19.72],[11.81,20.05],[11.6,20.35],[11.35,20.6],[11.05,20.81],[10.72,20.97],[10.36,21.07],[10,21.1],[9.64,21.07],[9.28,20.97],[8.95,20.81],[8.65,20.6],[8.4,20.35],
[8.19,20.05],[8.03,19.72],[7.93,19.36],[7.9,19],[7.93,18.64],[8.03,18.28],[8.19,17.95],[8.4,17.65],[8.65,17.4],[8.95,17.19],[9.28,17.03],[9.64,16.93],[10,16.9]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[22,16.9],[22.36,16.93],[22.72,17.03],[23.05,17.19],[23.35,17.4],[23.6,17.65],[23.81,17.95],[23.97,18.28],[24.07,18.64],[24.1,19],[24.07,19.36],[23.97,19.72],[23.81,20.05],[23.6,20.35],[23.35,20.6],[23.05,20.81],[22.72,20.97],[22.36,21.07],[22,21.1],[21.64,21.07],[21.28,20.97],[20.95,
20.81],[20.65,20.6],[20.4,20.35],[20.19,20.05],[20.03,19.72],[19.93,19.36],[19.9,19],[19.93,18.64],[20.03,18.28],[20.19,17.95],[20.4,17.65],[20.65,17.4],[20.95,17.19],[21.28,17.03],[21.64,16.93],[22,16.9]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[8.3,11.22],[9.76,10],[11.4,9.06],[13.18,8.41],[15.05,8.08],[16.95,8.08],[18.82,8.41],[20.6,9.06],[22.24,10],[23.7,11.22],[23.81,11.35],[23.9,11.5],[23.96,11.67],[23.99,11.84],[23.99,12.01],[23.96,12.18],[23.9,12.35],[23.82,12.5],[23.7,12.64],
[23.57,12.75],[23.42,12.84],[23.25,12.9],[23.08,12.93],[22.91,12.93],[22.74,12.9],[22.57,12.84],[22.42,12.75],[22.29,12.64],[21.1,11.65],[19.76,10.87],[18.3,10.34],[16.77,10.07],[15.23,10.07],[13.7,10.34],[12.24,10.87],[10.9,11.65],[9.71,12.64],[9.58,12.75],[9.43,12.84],[9.26,12.9],[9.09,12.93],[8.92,12.93],[8.75,12.9],[8.58,12.84],[8.43,12.75],[8.3,12.64],[8.2,12.52],[8.11,12.39],[8.05,12.24],[8.01,12.09],[8,11.93],[8.01,11.77],[8.05,11.62],[8.11,11.47],[8.2,11.34],[8.3,11.22]]]},symbol:b([255,255,
255,255])}],!0),a([{geometry:{rings:[[[16,.9],[17.4,1],[18,1],[18.7,1.2],[19.5,1.3],[20.2,1.5],[20.9,1.7],[21.6,2],[22.3,2.3],[22.9,2.6],[23.6,3],[24.3,3.4],[24.9,3.8],[25.5,4.3],[26.1,4.8],[26.7,5.3],[27.2,5.9],[27.7,6.5],[28.2,7.1],[28.6,7.7],[29,8.4],[29.4,9.1],[29.7,9.7],[30,10.4],[30.3,11.1],[30.5,11.8],[30.7,12.5],[30.8,13.3],[31,14],[31,14.6],[31.1,15.3],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,30.9],
[11.3,30.4],[9.1,29.5],[7.1,28.2],[5.3,26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16],[1.1,13.6],[1.6,11.3],[2.5,9.1],[3.8,7.1],[5.3,5.3],[7.1,3.8],[9.1,2.5],[11.3,1.6],[13.6,1.1],[16,.9]]]},symbol:b([0,0,0,0])}])])}),below:new c({data:d([a([{geometry:{rings:[[[10,16.9],[10.36,16.93],[10.71,17.03],[11.04,17.18],[11.34,17.39],[11.6,17.64],[11.81,17.94],[11.96,18.27],[12.06,18.62],[12.1,19],[12.07,19.36],[11.97,19.71],[11.82,20.04],[11.61,20.34],[11.35,20.6],[11.06,20.81],[10.73,20.96],[10.38,
21.06],[10,21.1],[9.64,21.07],[9.29,20.97],[8.96,20.82],[8.66,20.61],[8.4,20.36],[8.19,20.06],[8.04,19.73],[7.94,19.38],[7.9,19],[7.94,18.59],[8.06,18.2],[8.25,17.83],[8.52,17.52],[8.83,17.25],[9.2,17.06],[9.59,16.94],[10,16.9]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[22,16.9],[22.36,16.93],[22.71,17.03],[23.04,17.18],[23.34,17.39],[23.6,17.65],[23.81,17.94],[23.96,18.27],[24.06,18.62],[24.1,19],[24.07,19.36],[23.97,19.71],[23.82,20.04],[23.61,20.34],[23.36,20.6],[23.06,20.81],
[22.73,20.96],[22.38,21.06],[22,21.1],[21.64,21.07],[21.29,20.97],[20.96,20.82],[20.66,20.61],[20.4,20.36],[20.19,20.06],[20.04,19.73],[19.94,19.38],[19.9,19],[19.93,18.64],[20.03,18.29],[20.18,17.96],[20.39,17.66],[20.64,17.4],[20.94,17.19],[21.27,17.04],[21.62,16.94],[22,16.9]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[8.24,8.27],[8.37,8.16],[8.51,8.08],[8.66,8.02],[8.82,7.99],[8.99,7.98],[9.15,8],[9.31,8.05],[9.46,8.12],[9.59,8.21],[9.71,8.33],[10.83,9.27],[12.08,10.02],[13.44,
10.55],[14.87,10.86],[16.33,10.92],[17.78,10.75],[19.18,10.34],[20.49,9.71],[21.69,8.87],[22.28,8.33],[22.61,8.09],[23,8],[23.16,8.01],[23.31,8.05],[23.46,8.1],[23.59,8.19],[23.71,8.29],[23.82,8.42],[23.91,8.57],[23.97,8.74],[24,8.91],[24,9.08],[23.97,9.25],[23.91,9.42],[23.82,9.57],[23.71,9.7],[22.35,10.86],[20.81,11.78],[19.15,12.44],[17.39,12.82],[15.6,12.91],[13.83,12.7],[12.1,12.2],[10.49,11.43],[9.02,10.4],[8.3,9.74],[8.07,9.46],[7.96,9.11],[7.97,8.75],[8.12,8.42],[8.24,8.27]]]},symbol:b([255,
255,255,255])}],!0),a([{geometry:{rings:[[[16,.9],[17.4,1],[18,1],[18.7,1.2],[19.5,1.3],[20.2,1.5],[20.9,1.7],[21.6,2],[22.3,2.3],[22.9,2.6],[23.6,3],[24.3,3.4],[24.9,3.8],[25.5,4.3],[26.1,4.8],[26.7,5.3],[27.2,5.9],[27.7,6.5],[28.2,7.1],[28.6,7.7],[29,8.4],[29.4,9.1],[29.7,9.7],[30,10.4],[30.3,11.1],[30.5,11.8],[30.7,12.5],[30.8,13.3],[31,14],[31,14.6],[31.1,15.3],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,
30.9],[11.3,30.4],[9.1,29.5],[7.1,28.2],[5.3,26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16],[1.1,13.6],[1.6,11.3],[2.5,9.1],[3.8,7.1],[5.3,5.3],[7.1,3.8],[9.1,2.5],[11.3,1.6],[13.6,1.1],[16,.9]]]},symbol:b([0,0,0,0])}])])})};case "plus-minus":return{above:new c({data:d([a([{geometry:{rings:[[[19.2,0],[19.2,12.8],[32,12.8],[32,19.2],[19.2,19.2],[19.2,32],[12.8,32],[12.8,19.2],[0,19.2],[0,12.8],[12.8,12.8],[12.8,0],[19.2,0]]]}}])])}),below:new c({data:d([a([{geometry:{rings:[[[0,12.8],[0,
19.2],[32,19.2],[32,12.8],[0,12.8]]]}}])])})};case "thumb":return{above:new c({data:d([a([{geometry:{rings:[[[29.9,0],[31.8,17.9],[23.9,17.9],[23.9,0],[29.9,0]],[[19.9,0],[21.9,2],[21.9,15.9],[20,15.8],[15.9,21.9],[15.9,27.9],[13.9,27.9],[11.9,23.9],[11.9,17.9],[1.7,17.9],[1.4,17.9],[1.2,17.8],[.9,17.7],[.7,17.5],[.5,17.4],[.3,17.1],[.2,16.9],[.1,16.6],[0,16.4],[0,16.1],[0,13.9],[2,11.9],[3,12],[2,10],[2,8],[4,6],[5,6],[4,4],[4,2],[6,0],[19.9,0]]]}}])])}),below:new c({data:d([a([{geometry:{rings:[[[7.9,
9.9],[7.9,27.9],[1.9,27.9],[0,9.9],[7.9,9.9]],[[17.9,0],[19.9,4],[19.9,10],[30.1,10],[30.4,10],[30.7,10.1],[30.9,10.2],[31.2,10.4],[31.4,10.6],[31.6,10.9],[31.7,11.1],[31.8,11.4],[31.8,11.7],[31.8,13.9],[29.8,15.9],[28.9,15.9],[29.9,17.9],[29.9,19.9],[27.9,21.9],[26.9,21.9],[27.9,23.9],[27.9,25.9],[25.9,27.9],[11.9,27.9],[9.9,25.9],[9.9,11.9],[11.8,12],[15.9,6],[15.9,0],[17.9,0]]]}}])])})};case "circle-arrow":return{above:new c({data:d([a([{geometry:{rings:[[[16,1.6],[13.7,1.8],[11.5,2.3],[9.5,3.2],
[7.5,4.3],[5.8,5.8],[4.3,7.5],[3.2,9.5],[2.3,11.5],[1.8,13.7],[1.6,16],[1.8,18.3],[2.3,20.5],[3.2,22.5],[4.3,24.5],[5.8,26.2],[7.5,27.7],[9.5,28.8],[11.5,29.7],[13.7,30.2],[16,30.4],[18.3,30.2],[20.5,29.7],[22.5,28.8],[24.5,27.7],[26.2,26.2],[27.7,24.5],[28.8,22.5],[29.7,20.5],[30.2,18.3],[30.4,16],[30.2,13.7],[29.7,11.5],[28.8,9.5],[27.7,7.5],[26.2,5.8],[24.5,4.3],[22.5,3.2],[20.5,2.3],[18.3,1.8],[16,1.6]],[[16,0],[18.8,.3],[21.5,1],[24,2.2],[26.3,3.8],[28.2,5.7],[29.8,8],[31,10.5],[31.7,13.2],[32,
16],[31.7,18.8],[31,21.5],[29.8,24],[28.2,26.3],[26.3,28.2],[24,29.8],[21.5,31],[18.8,31.7],[16,32],[13.2,31.7],[10.5,31],[8,29.8],[5.7,28.2],[3.8,26.3],[2.2,24],[1,21.5],[.3,18.8],[0,16],[.3,13.2],[1,10.5],[2.2,8],[3.8,5.7],[5.7,3.8],[8,2.2],[10.5,1],[13.2,.3],[16,0]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[18.05,6],[18.05,19.07],[24.05,12.82],[24.05,17.93],[16.05,25.93],[8,17.93],[8,12.88],[14,19.11],[14,6],[18.05,6]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[16,
.9],[17.4,1],[18,1],[18.7,1.2],[19.5,1.3],[20.2,1.5],[20.9,1.7],[21.6,2],[22.3,2.3],[22.9,2.6],[23.6,3],[24.3,3.4],[24.9,3.8],[25.5,4.3],[26.1,4.8],[26.7,5.3],[27.2,5.9],[27.7,6.5],[28.2,7.1],[28.6,7.7],[29,8.4],[29.4,9.1],[29.7,9.7],[30,10.4],[30.3,11.1],[30.5,11.8],[30.7,12.5],[30.8,13.3],[31,14],[31,14.6],[31.1,15.3],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,30.9],[11.3,30.4],[9.1,29.5],[7.1,28.2],[5.3,
26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16],[1.1,13.6],[1.6,11.3],[2.5,9.1],[3.8,7.1],[5.3,5.3],[7.1,3.8],[9.1,2.5],[11.3,1.6],[13.6,1.1],[16,.9]]]},symbol:b([255,255,255,255])}])])}),below:new c({data:d([a([{geometry:{rings:[[[16,1.6],[13.7,1.8],[11.5,2.3],[9.5,3.2],[7.5,4.3],[5.8,5.8],[4.3,7.5],[3.2,9.5],[2.3,11.5],[1.8,13.7],[1.6,16],[1.8,18.3],[2.3,20.5],[3.2,22.5],[4.3,24.5],[5.8,26.2],[7.5,27.7],[9.5,28.8],[11.5,29.7],[13.7,30.2],[16,30.4],[18.3,30.2],[20.5,29.7],[22.5,28.8],[24.5,
27.7],[26.2,26.2],[27.7,24.5],[28.8,22.5],[29.7,20.5],[30.2,18.3],[30.4,16],[30.2,13.7],[29.7,11.5],[28.8,9.5],[27.7,7.5],[26.2,5.8],[24.5,4.3],[22.5,3.2],[20.5,2.3],[18.3,1.8],[16,1.6]],[[16,0],[18.8,.3],[21.5,1],[24,2.2],[26.3,3.8],[28.2,5.7],[29.8,8],[31,10.5],[31.7,13.2],[32,16],[31.7,18.8],[31,21.5],[29.8,24],[28.2,26.3],[26.3,28.2],[24,29.8],[21.5,31],[18.8,31.7],[16,32],[13.2,31.7],[10.5,31],[8,29.8],[5.7,28.2],[3.8,26.3],[2.2,24],[1,21.5],[.3,18.8],[0,16],[.3,13.2],[1,10.5],[2.2,8],[3.8,5.7],
[5.7,3.8],[8,2.2],[10.5,1],[13.2,.3],[16,0]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[24,14],[24,19.09],[18,12.84],[18,25.95],[14,25.95],[14,12.89],[8.05,19.08],[8.05,14],[16.05,6],[24,14]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[16,.9],[17.4,1],[18,1],[18.7,1.2],[19.5,1.3],[20.2,1.5],[20.9,1.7],[21.6,2],[22.3,2.3],[22.9,2.6],[23.6,3],[24.3,3.4],[24.9,3.8],[25.5,4.3],[26.1,4.8],[26.7,5.3],[27.2,5.9],[27.7,6.5],[28.2,7.1],[28.6,7.7],[29,8.4],[29.4,9.1],[29.7,9.7],
[30,10.4],[30.3,11.1],[30.5,11.8],[30.7,12.5],[30.8,13.3],[31,14],[31,14.6],[31.1,15.3],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,30.9],[11.3,30.4],[9.1,29.5],[7.1,28.2],[5.3,26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16],[1.1,13.6],[1.6,11.3],[2.5,9.1],[3.8,7.1],[5.3,5.3],[7.1,3.8],[9.1,2.5],[11.3,1.6],[13.6,1.1],[16,.9]]]},symbol:b([255,255,255,255])}])])})};case "circle-caret":return{above:new c({data:d([a([{geometry:{rings:[[[16,
1.6],[13.7,1.8],[11.5,2.3],[9.5,3.2],[7.5,4.3],[5.8,5.8],[4.3,7.5],[3.2,9.5],[2.3,11.5],[1.8,13.7],[1.6,16],[1.8,18.3],[2.3,20.5],[3.2,22.5],[4.3,24.5],[5.8,26.2],[7.5,27.7],[9.5,28.8],[11.5,29.7],[13.7,30.2],[16,30.4],[18.3,30.2],[20.5,29.7],[22.5,28.8],[24.5,27.7],[26.2,26.2],[27.7,24.5],[28.8,22.5],[29.7,20.5],[30.2,18.3],[30.4,16],[30.2,13.7],[29.7,11.5],[28.8,9.5],[27.7,7.5],[26.2,5.8],[24.5,4.3],[22.5,3.2],[20.5,2.3],[18.3,1.8],[16,1.6]],[[16,0],[18.8,.3],[21.5,1],[24,2.2],[26.3,3.8],[28.2,
5.7],[29.8,8],[31,10.5],[31.7,13.2],[32,16],[31.7,18.8],[31,21.5],[29.8,24],[28.2,26.3],[26.3,28.2],[24,29.8],[21.5,31],[18.8,31.7],[16,32],[13.2,31.7],[10.5,31],[8,29.8],[5.7,28.2],[3.8,26.3],[2.2,24],[1,21.5],[.3,18.8],[0,16],[.3,13.2],[1,10.5],[2.2,8],[3.8,5.7],[5.7,3.8],[8,2.2],[10.5,1],[13.2,.3],[16,0]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[16.05,18.95],[24.05,10.95],[24.05,15.95],[16.05,23.95],[8.05,15.95],[8.05,10.95],[16.05,18.95]]]},symbol:b([255,255,255,255])}],!0),
a([{geometry:{rings:[[[16,.9],[17.4,1],[18,1],[18.7,1.2],[19.5,1.3],[20.2,1.5],[20.9,1.7],[21.6,2],[22.3,2.3],[22.9,2.6],[23.6,3],[24.3,3.4],[24.9,3.8],[25.5,4.3],[26.1,4.8],[26.7,5.3],[27.2,5.9],[27.7,6.5],[28.2,7.1],[28.6,7.7],[29,8.4],[29.4,9.1],[29.7,9.7],[30,10.4],[30.3,11.1],[30.5,11.8],[30.7,12.5],[30.8,13.3],[31,14],[31,14.6],[31.1,15.3],[31.1,16],[30.9,18.4],[30.4,20.7],[29.5,22.9],[28.2,24.9],[26.7,26.7],[24.9,28.2],[22.9,29.5],[20.7,30.4],[18.4,30.9],[16,31.1],[13.6,30.9],[11.3,30.4],[9.1,
29.5],[7.1,28.2],[5.3,26.7],[3.8,24.9],[2.5,22.9],[1.6,20.7],[1.1,18.4],[.9,16],[1.1,13.6],[1.6,11.3],[2.5,9.1],[3.8,7.1],[5.3,5.3],[7.1,3.8],[9.1,2.5],[11.3,1.6],[13.6,1.1],[16,.9]]]},symbol:b([255,255,255,255])}])])}),below:new c({data:d([a([{geometry:{rings:[[[16,1.6],[13.7,1.8],[11.5,2.3],[9.5,3.2],[7.5,4.3],[5.8,5.8],[4.3,7.5],[3.2,9.5],[2.3,11.5],[1.8,13.7],[1.6,16],[1.8,18.3],[2.3,20.5],[3.2,22.5],[4.3,24.5],[5.8,26.2],[7.5,27.7],[9.5,28.8],[11.5,29.7],[13.7,30.2],[16,30.4],[18.3,30.2],[20.5,
29.7],[22.5,28.8],[24.5,27.7],[26.2,26.2],[27.7,24.5],[28.8,22.5],[29.7,20.5],[30.2,18.3],[30.4,16],[30.2,13.7],[29.7,11.5],[28.8,9.5],[27.7,7.5],[26.2,5.8],[24.5,4.3],[22.5,3.2],[20.5,2.3],[18.3,1.8],[16,1.6]],[[16,0],[18.8,.3],[21.5,1],[24,2.2],[26.3,3.8],[28.2,5.7],[29.8,8],[31,10.5],[31.7,13.2],[32,16],[31.7,18.8],[31,21.5],[29.8,24],[28.2,26.3],[26.3,28.2],[24,29.8],[21.5,31],[18.8,31.7],[16,32],[13.2,31.7],[10.5,31],[8,29.8],[5.7,28.2],[3.8,26.3],[2.2,24],[1,21.5],[.3,18.8],[0,16],[.3,13.2],
[1,10.5],[2.2,8],[3.8,5.7],[5.7,3.8],[8,2.2],[10.5,1],[13.2,.3],[16,0]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[23.7,15.5],[23.7,20.5],[15.7,12.5],[7.7,20.5],[7.7,15.5],[15.7,7.5],[23.7,15.5]]]},symbol:b([255,255,255,255])}],!0),a([{geometry:{rings:[[[15.6,.5],[17,.6],[17.6,.6],[18.3,.8],[19.1,.9],[19.8,1.1],[20.5,1.3],[21.2,1.6],[21.9,1.9],[22.5,2.2],[23.2,2.6],[23.9,3],[24.5,3.4],[25.1,3.9],[25.7,4.4],[26.3,4.9],[26.8,5.5],[27.3,6.1],[27.8,6.7],[28.2,7.3],[28.6,8],[29,8.7],[29.3,
9.3],[29.6,10],[29.9,10.7],[30.1,11.4],[30.3,12.1],[30.4,12.9],[30.6,13.6],[30.6,14.2],[30.7,14.9],[30.7,15.6],[30.5,18],[30,20.3],[29.1,22.5],[27.8,24.5],[26.3,26.3],[24.5,27.8],[22.5,29.1],[20.3,30],[18,30.5],[15.6,30.7],[12.7,30.4],[10,29.6],[7.4,28.3],[5.2,26.5],[3.3,24.3],[1.8,21.9],[.9,19.1],[.5,16.3],[.5,15.6],[.7,13.2],[1.2,10.9],[2.1,8.7],[3.4,6.7],[4.9,4.9],[6.7,3.4],[8.7,2.1],[10.9,1.2],[13.2,.7],[15.6,.5]]]},symbol:b([255,255,255,255])}])])})};default:return null}};Object.defineProperty(h,
Symbol.toStringTag,{value:"Module"})});