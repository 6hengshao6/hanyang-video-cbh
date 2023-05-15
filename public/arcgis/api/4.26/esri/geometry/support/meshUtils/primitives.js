// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../chunks/mat3f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../MeshComponent ../MeshVertexAttributes ./georeference".split(" "),function(v,E,F,z,G,A,H,I){var B=[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],C=[0,0,1,0,0,1,0,0,1,0,0,1],J=[0,1,1,1,1,0,0,0],K=[0,1,2,0,2,3],L={east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]};const M={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,
0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},D={south:0,east:1,north:2,west:3,up:4,down:5},m=G.create(),x=F.create();v.boxFaceOrder=
D;v.convertPlaneSizeParameter=function(b,c){const g="number"===typeof c?c:null!=c?c.width:1;c="number"===typeof c?c:null!=c?c.height:1;switch(b){case "up":case "down":return{width:g,depth:c};case "north":case "south":return{width:g,height:c};case "east":case "west":return{depth:g,height:c}}};v.convertUnitGeometry=function(b,c,g){if(!b.isPlane)for(var a=0;a<b.position.length;a+=3)b.position[a+2]+=.5;a=g?.size;if(null!=a){a="number"===typeof a?[a,a,a]:[null!=a.width?a.width:1,null!=a.depth?a.depth:
1,null!=a.height?a.height:1];x[0]=a[0];x[4]=a[1];x[8]=a[2];for(var d=0;d<b.position.length;d+=3){for(var e=0;3>e;e++)m[e]=b.position[d+e];z.transformMat3(m,m,x);for(e=0;3>e;e++)b.position[d+e]=m[e]}if(a[0]!==a[1]||a[1]!==a[2])for(x[0]=1/a[0],x[4]=1/a[1],x[8]=1/a[2],a=0;a<b.normal.length;a+=3){for(d=0;3>d;d++)m[d]=b.normal[a+d];z.transformMat3(m,m,x);z.normalize(m,m);for(d=0;3>d;d++)b.normal[a+d]=m[d]}}const {vertexAttributes:n,transform:k}=I.georeferenceByTransform(b,c,g);return{vertexAttributes:new H.MeshVertexAttributes({...n,
uv:b.uv}),transform:k,components:[new A({faces:b.faces,material:g&&g.material||null})],spatialReference:c.spatialReference}};v.createUnitSizeBox=function(){const {faceDescriptions:b,faceVertexOffsets:c,uvScales:g}=M;var a=4*b.length;const d=new Float64Array(3*a),e=new Float32Array(3*a);a=new Float32Array(2*a);const n=new Uint32Array(6*b.length);let k=0,l=0,h=0,q=0;for(let p=0;p<b.length;p++){const t=b[p];var f=k/3;for(const r of c)n[q++]=f+r;f=t.corners;for(let r=0;4>r;r++){const u=f[r];let y=0;a[h++]=
.25*g[r][0]+t.uvOrigin[0];a[h++]=t.uvOrigin[1]-.25*g[r][1];for(let w=0;3>w;w++)0!==t.axis[w]?(d[k++]=.5*t.axis[w],e[l++]=t.axis[w]):(d[k++]=.5*u[y++],e[l++]=0)}}return{position:d,normal:e,uv:a,faces:n}};v.createUnitSizeCylinder=function(b=0){b=Math.round(16*2**b);var c=4*(b+1)+2*b;const g=new Float64Array(3*c),a=new Float32Array(3*c);c=new Float32Array(2*c);const d=new Uint32Array(12*b);let e=0,n=0,k=0,l=0,h=0;for(let f=0;5>=f;f++){const p=0===f||5===f,t=1>=f||4<=f,r=2===f||4===f,u=p?b-1:b;for(let y=
0;y<=u;y++){var q=y/u*2*Math.PI;const w=p?0:.5;m[0]=w*Math.sin(q);m[1]=w*-Math.cos(q);m[2]=2>=f?.5:-.5;for(q=0;3>q;q++)g[e++]=m[q],t?a[n++]=2===q?1>=f?1:-1:0:a[n++]=2===q?0:m[q]/w;c[k++]=(y+(p?.5:0))/b;1>=f?c[k++]=1*f/3:3>=f?c[k++]=(f-2)/3+1/3:c[k++]=(f-4)/3+2/3;r||0===f||y===b||(5!==f&&(d[l++]=h,d[l++]=h+1,d[l++]=h-b),1!==f&&(d[l++]=h,d[l++]=h-b,d[l++]=h-b-1));h++}}return{position:g,normal:a,uv:c,faces:d}};v.createUnitSizePlane=function(b){b=L[b];const c=new Float64Array(B.length),g=new Float32Array(C.length);
let a=0;for(let e=0;4>e;e++){const n=a;for(let k=0;3>k;k++){var d=b[k];const l=Math.abs(d)-1;d=0<=d?1:-1;c[a]=B[n+l]*d;g[a]=C[n+l]*d;a++}}return{position:c,normal:g,uv:new Float32Array(J),faces:new Uint32Array(K),isPlane:!0}};v.createUnitSizeSphere=function(b=0){b=Math.round(8*2**b);const c=2*b;var g=(b-1)*(c+1)+2*c;const a=new Float64Array(3*g),d=new Float32Array(3*g);g=new Float32Array(2*g);const e=new Uint32Array((b-1)*c*6);let n=0,k=0,l=0,h=0;for(let p=0;p<=b;p++){var q=p/b*Math.PI+.5*Math.PI;
const t=Math.cos(q);m[2]=Math.sin(q);const r=(q=0===p||p===b)?c-1:c;for(let u=0;u<=r;u++){var f=u/r*2*Math.PI;m[0]=-Math.sin(f)*t;m[1]=Math.cos(f)*t;for(f=0;3>f;f++)a[n]=.5*m[f],d[n]=m[f],++n;g[k++]=(u+(q?.5:0))/c;g[k++]=p/b;0!==p&&u!==c&&(p!==b&&(e[l++]=h,e[l++]=h+1,e[l++]=h-c),1!==p&&(e[l++]=h,e[l++]=h-c,e[l++]=h-c-1));h++}}return{position:a,normal:d,uv:g,faces:e}};v.extractSingleFaceOfBox=function(b,c){const g=b.components[0];var a=g.faces,d=D[c],e=6*d;c=Array(6);const n=Array(a.length-6);var k=
0;let l=0;for(let h=0;h<a.length;h++)h>=e&&h<e+6?c[k++]=a[h]:n[l++]=a[h];if(E.isSome(b.vertexAttributes.uv)){a=new Float32Array(b.vertexAttributes.uv);d*=8;e=[0,1,1,1,1,0,0,0];for(k=0;k<e.length;k++)a[d+k]=e[k];b.vertexAttributes.uv=a}b.components=[new A({faces:c,material:g.material}),new A({faces:n})];return b};Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});