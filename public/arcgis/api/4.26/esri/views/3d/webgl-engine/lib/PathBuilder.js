// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry/support/FloatArray","../../../../geometry/support/Indices"],function(r,w,n,q){let y=function(){function t(d,b,f,a,g,c={}){this.path=d;this.profile=b;this.extruder=f;this.startCap=a;this.endCap=g;this.options=c;this._extrusionVertexCount=0;a=this.path.vertices.length-2;this.numExtrusionProfiles=f.numProfilesPerJoin()*a+2;this.numVerticesTotal=b.vertices.length*this.numExtrusionProfiles;this.startCap.vertexBufferStart=
this.numVerticesTotal;b=this.startCap.getNumVertices();this.numVerticesTotal+=b;this.endCap.vertexBufferStart=this.numVerticesTotal;b=this.endCap.getNumVertices();this.numVerticesTotal+=b;this.pathVertexData=q.newIntArray(1*this.numVerticesTotal);this.profileRightAxes=n.newFloatArray(4*this.numVerticesTotal);this.profileUpAxes=n.newFloatArray(4*this.numVerticesTotal);this.profileVertexAndNormals=n.newFloatArray(4*this.numVerticesTotal);this.positions=n.floatSubArray(d.positions,d.offset,3*d.vertices.length);
this._rebuildGeometry();this.buildTopology()}var p=t.prototype;p.emitVertex=function(d,b,f,a,g){const c=4*this._extrusionVertexCount;this.profileRightAxes[c]=b.right[0];this.profileRightAxes[c+1]=b.right[1];this.profileRightAxes[c+2]=b.right[2];this.profileUpAxes[c]=b.up[0];this.profileUpAxes[c+1]=b.up[1];this.profileUpAxes[c+2]=b.up[2];this.profileVertexAndNormals[c]=f[0];this.profileVertexAndNormals[c+1]=f[1];this.profileVertexAndNormals[c+2]=a[0];this.profileVertexAndNormals[c+3]=a[1];this.pathVertexData[this._extrusionVertexCount]=
d;g?(d=this.path.vertices[d],b=d.maxStretchDistance,this.profileRightAxes[c+3]=d.rotationRight[0]*b,this.profileUpAxes[c+3]=d.rotationRight[1]*b):(this.profileRightAxes[c+3]=0,this.profileUpAxes[c+3]=0);++this._extrusionVertexCount};p.emitCapVertex=function(d,b,f,a,g,c){const e=4*this._extrusionVertexCount;this.profileRightAxes[e]=b.right[0];this.profileRightAxes[e+1]=b.right[1];this.profileRightAxes[e+2]=b.right[2];this.profileRightAxes[e+3]=g;this.profileUpAxes[e]=b.up[0];this.profileUpAxes[e+1]=
b.up[1];this.profileUpAxes[e+2]=b.up[2];this.profileUpAxes[e+3]=c;this.profileVertexAndNormals[e]=f[0];this.profileVertexAndNormals[e+1]=f[1];this.profileVertexAndNormals[e+2]=a[0];this.profileVertexAndNormals[e+3]=a[1];this.pathVertexData[this._extrusionVertexCount]=d;++this._extrusionVertexCount};p._rebuildGeometry=function(){this._extrusionVertexCount=0;const {positions:d,offset:b,vertices:f}=this.path;this.positions=n.floatSubArray(d,b,3*f.length);let a=0;const g=(e,h,k,l,m)=>this.emitCapVertex(a,
e,h,k,l,m),c=(e,h,k,l)=>this.emitVertex(a,e,h,k,l);this.startCap.rebuildConnectingProfileGeometry(f[a],this.profile,g);for(a=1;a<f.length-1;++a)this.extruder.extrude(f[a],this.profile,c);this.endCap.rebuildConnectingProfileGeometry(f[a],this.profile,g);a=0;this.startCap.rebuildCapGeometry(f[a],g);a=f.length-1;this.endCap.rebuildCapGeometry(f[a],g)};p.buildTopology=function(){const d=this.profile.vertices.length,b=this.profile.numSegments,f=this.numExtrusionProfiles-1;var a=b*f*6;this.startCap.indexBufferStart=
a;this.startCap.firstProfileVertexIndex=0;a+=this.startCap.getNumIndices();this.endCap.indexBufferStart=a;this.endCap.firstProfileVertexIndex=d*(this.numExtrusionProfiles-1);const g=[],c=[],e=[];a=(h,k,l)=>{g.push(h);g.push(k);g.push(l);c.push(h);c.push(k);c.push(l);e.push(this.pathVertexData[h]);e.push(this.pathVertexData[k]);e.push(this.pathVertexData[l])};for(let h=0;h<b;++h){const k=this.profile.vertexIndices[2*h],l=this.profile.vertexIndices[2*h+1];for(let m=0;m<f;++m){const u=m*d+k,v=(m+1)*
d+l,x=m*d+l;a(u,(m+1)*d+k,v);a(u,v,x)}}this.startCap.buildTopology(this.path.vertices[0],a);this.endCap.buildTopology(this.path.vertices[this.path.vertices.length-1],a);this.vertexIndices=q.compactIndices(g);this.normalIndices=q.compactIndices(c);this.pathVertexIndices=q.compactIndices(e)};p.onPathChanged=function(){this._rebuildGeometry()};return w._createClass(t)}();r.PathBuilder=y;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});