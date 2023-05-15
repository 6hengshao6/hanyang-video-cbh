// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../core/reactiveUtils ../../../chunks/vec3 ../../../layers/graphics/dehydratedFeatures ../../input/InputManager ../keybindings ./SnappingPoint".split(" "),function(d,k,l,m,r,t,n,p){function q(a,b){const c=a.x-b.x;a=a.y-b.y;return c*c+a*a}d.LineSegmentHintType=void 0;(function(a){a[a.TARGET=0]="TARGET";a[a.REFERENCE=1]="REFERENCE";a[a.REFERENCE_EXTENSION=2]="REFERENCE_EXTENSION"})(d.LineSegmentHintType||(d.LineSegmentHintType={}));d.editEdgeToSnappingEdge=
function(a,b,c){return{left:p.anyMapPointToSnappingPoint(a.leftVertex.pos,b,c),right:p.anyMapPointToSnappingPoint(a.rightVertex.pos,b,c)}};d.makeFilter=function(a){return a.createQuery()};d.makeSnappingQuery=function({point:a,distance:b,types:c,coordinateHelper:{spatialReference:e}},g,h){return{point:r.makeDehydratedPoint(a[0],a[1],a[2],e.toJSON()),mode:g,distance:b,types:c,query:k.isSome(h)?h.toJSON():{where:"1\x3d1"}}};d.objectEqual=function(a,b){const c=a.length===b.length&&a[0]===b[0]&&a[1]===
b[1];switch(a.length){case 2:return c;case 3:return c&&a[2]===b[2];case 4:return c&&a[2]===b[2]&&a[3]===b[3]}return!1};d.screenDistance=function(a,b){return Math.sqrt(q(a,b))};d.setupSnappingToggleHandles=function(a,b=()=>{}){const c=l.watch(()=>({view:a.view,snappingOptions:a.snappingOptions}),({view:e,snappingOptions:g})=>{const h=t.ViewEventPriorities.TOOL;a.removeHandles("snapping-toggle");e&&k.isSome(g)&&(e=[e.on("key-down",f=>{f.key!==n.SNAPPING_KEYS.toggle||f.repeat||(g.enabledToggled=!0,b())},
h),e.on("key-up",f=>{f.key===n.SNAPPING_KEYS.toggle&&(g.enabledToggled=!1,b())},h),e.on("pointer-move",f=>{f=f.native.ctrlKey;g.enabledToggled!==f&&(g.enabledToggled=f,b())},h)],a.addHandles(e,"snapping-toggle"))},l.syncAndInitial);a.addHandles(c)};d.sortCandidatesInPlace=function(a,b){b.sort((c,e)=>{c=m.squaredDistance(c.targetPoint,a);e=m.squaredDistance(e.targetPoint,a);return c-e})};d.squaredScreenDistance=q;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});