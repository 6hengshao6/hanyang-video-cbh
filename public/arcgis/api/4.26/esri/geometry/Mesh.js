// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Error ../core/HandleOwner ../core/Loadable ../core/Logger ../core/maybe ../core/Promise ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../chunks/vec3f64 ./Extent ./Geometry ./Point ./Polygon ./support/axisAngleDegrees ./support/MeshComponent ./support/MeshTransform ./support/MeshVertexAttributes ./support/triangulationUtils ./support/meshUtils/centerAt ./support/meshUtils/loadExternal ./support/meshUtils/offset ./support/meshUtils/primitives ./support/meshUtils/rotate ./support/meshUtils/scale".split(" "),
function(K,z,h,L,e,T,k,l,U,V,W,m,ia,ja,ka,X,w,M,Y,q,Z,r,A,B,C,aa,ba,ca,da,p,ea,fa){var n;e=n=function(f){function g(a){a=ha.call(this,a);a.components=null;a.transform=null;a.external=null;a.hasZ=!0;a.hasM=!1;a.vertexAttributes=new C.MeshVertexAttributes;a.type="mesh";return a}z._inherits(g,f);var ha=z._createSuper(g);f=g.prototype;f.initialize=function(){if(l.isNone(this.external)||this.vertexAttributes.position.length)this.loadStatus="loaded";this.when(()=>{this.handles.add(W.watch(()=>({vertexAttributes:this.vertexAttributes,
components:this.components?.map(a=>a.clone())}),()=>this._set("external",null),{once:!0,sync:!0}))})};f.addComponent=function(a){this.loaded?(this.components||(this.components=[]),this.components.push(A.from(a)),this.notifyChange("components")):k.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")};f.removeComponent=function(a){if(this.loaded){if(this.components&&(a=this.components.indexOf(a),-1!==a)){this.components.splice(a,1);this.notifyChange("components");
return}k.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else k.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")};f.rotate=function(a,b,c,d){r.fromAxisAndAngle(D.x,a,u);r.fromAxisAndAngle(D.y,b,N);r.fromAxisAndAngle(D.z,c,O);r.compose(u,N,u);r.compose(u,O,u);ea.rotate(this,u,d);return this};f.offset=function(a,b,c,d){if(!this.loaded)return k.getLogger(this.declaredClass).error("offset()",
"Mesh must be loaded before applying operations"),this;x[0]=a;x[1]=b;x[2]=c;da.offset(this,x,d);return this};f.scale=function(a,b){if(!this.loaded)return k.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this;fa.scale(this,a,b);return this};f.centerAt=function(a,b){if(!this.loaded)return k.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this;ba.centerAt(this,a,b);return this};f.load=function(a){l.isSome(this.external)&&
this.addResolvingPromise(ca.loadExternal(this,this.external.source,a));return Promise.resolve(this)};f.updateExternalSource=function(a){this._set("external",a)};f.clone=function(){var a=null;if(this.components){const b=new Map,c=new Map;a=this.components.map(d=>d.cloneWithDeduplication(b,c))}a={components:a,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:l.isSome(this.transform)?this.transform.clone():null,external:l.isSome(this.external)?{source:this.external.source,
extent:l.isSome(this.external.extent)?this.external.extent.clone():null}:null};return new n(a)};f.vertexAttributesChanged=function(){this.notifyChange("vertexAttributes")};f.toBinaryGLTF=async function(a){var b=new Promise((d,t)=>K(["./support/meshUtils/exporters/gltf/gltfexport"],d,t));const c=this.load();b=await Promise.all([b,c]);({toBinaryGLTF:b}=b[0]);return b(this,a)};g.createBox=function(a,b){if(!(a instanceof q))return k.getLogger("esri.geometry.Mesh").error(".createBox()","expected location to be a Point instance"),
null;a=new n(p.convertUnitGeometry(p.createUnitSizeBox(),a,b));return b&&b.imageFace&&"all"!==b.imageFace?p.extractSingleFaceOfBox(a,b.imageFace):a};g.createSphere=function(a,b){return a instanceof q?new n(p.convertUnitGeometry(p.createUnitSizeSphere(b&&b.densificationFactor||0),a,b)):(k.getLogger("esri.geometry.Mesh").error(".createSphere()","expected location to be a Point instance"),null)};g.createCylinder=function(a,b){return a instanceof q?new n(p.convertUnitGeometry(p.createUnitSizeCylinder(b&&
b.densificationFactor||0),a,b)):(k.getLogger("esri.geometry.Mesh").error(".createCylinder()","expected location to be a Point instance"),null)};g.createPlane=function(a,b){if(!(a instanceof q))return k.getLogger("esri.geometry.Mesh").error(".createPlane()","expected location to be a Point instance"),null;const c=b?.facing??"up",d=p.convertPlaneSizeParameter(c,b?.size);return new n(p.convertUnitGeometry(p.createUnitSizePlane(c),a,{...b,size:d}))};g.createFromPolygon=function(a,b){if(!(a instanceof
Z))return k.getLogger("esri.geometry.Mesh").error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const c=aa.triangulate(a);return new n({vertexAttributes:new C.MeshVertexAttributes({position:c.position}),components:[new A({faces:c.faces,shading:"flat",material:b?.material??null})],spatialReference:a.spatialReference})};g.createFromGLTF=async function(a,b,c){if(!(a instanceof q))throw k.getLogger("esri.geometry.Mesh").error(".createfromGLTF()","expected location to be a Point instance"),
new L("invalid-input","Expected location to be a Point instance");const {loadGLTFMesh:d}=await V.whenOrAbort(new Promise((t,v)=>K(["./support/meshUtils/loadGLTFMesh"],t,v)),c);return new n(await d(a,b,c))};g.createWithExternalSource=function(a,b,c){const d=c?.extent??null;c=c?.transform?.clone()??new B;c.origin=[a.x,a.y,a.z??0];return new n({external:{source:b,extent:d},transform:c,spatialReference:a.spatialReference})};g.createIncomplete=function(a,b){b=b?.transform?.clone()??new B;b.origin=[a.x,
a.y,a.z??0];a=new n({transform:b,spatialReference:a.spatialReference});a.addResolvingPromise(Promise.reject(new L("mesh-incomplete","Mesh resources are not complete")));return a};z._createClass(g,[{key:"hasExtent",get:function(){return!this.loaded&&l.isSome(this.external)&&l.isSome(this.external.extent)||this.loaded&&0<this.vertexAttributes.position.length&&(!this.components||0<this.components.length)}},{key:"_boundingInfo",get:function(){var a=this.vertexAttributes.position;const b=this.spatialReference;
if(0===a.length||this.components&&0===this.components.length)return{extent:new M({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:b}),center:new q({x:0,y:0,z:0,spatialReference:b})};a=l.isSome(this.transform)?this.transform.project(a,b):a;let c=Infinity,d=Infinity,t=Infinity,v=-Infinity,E=-Infinity,F=-Infinity,P=0,Q=0,R=0;const S=a.length,G=1/(S/3);let y=0;for(;y<S;){const H=a[y++],I=a[y++],J=a[y++];c=Math.min(c,H);d=Math.min(d,I);t=Math.min(t,J);v=Math.max(v,H);E=Math.max(E,I);F=Math.max(F,
J);P+=G*H;Q+=G*I;R+=G*J}return{extent:new M({xmin:c,ymin:d,zmin:t,xmax:v,ymax:E,zmax:F,spatialReference:b}),center:new q({x:P,y:Q,z:R,spatialReference:b})}}},{key:"anchor",get:function(){if(l.isSome(this.transform))return this.transform.getOriginPoint(this.spatialReference);const a=this._boundingInfo;return new q({x:a.center.x,y:a.center.y,z:a.extent.zmin,spatialReference:this.spatialReference})}},{key:"origin",get:function(){return l.isSome(this.transform)?this.transform.getOriginPoint(this.spatialReference):
this._boundingInfo.center}},{key:"extent",get:function(){return!this.loaded&&l.isSome(this.external)&&l.isSome(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}}]);return g}(e.HandleOwnerMixin(T.LoadableMixin(U.EsriPromiseMixin(Y))));h.__decorate([m.property({type:[A],json:{write:!0}})],e.prototype,"components",void 0);h.__decorate([m.property({type:B,json:{write:!0}})],e.prototype,"transform",void 0);h.__decorate([m.property({constructOnly:!0})],e.prototype,"external",
void 0);h.__decorate([m.property({readOnly:!0})],e.prototype,"hasExtent",null);h.__decorate([m.property({readOnly:!0})],e.prototype,"_boundingInfo",null);h.__decorate([m.property({readOnly:!0})],e.prototype,"anchor",null);h.__decorate([m.property({readOnly:!0})],e.prototype,"origin",null);h.__decorate([m.property({readOnly:!0,json:{read:!1}})],e.prototype,"extent",null);h.__decorate([m.property({readOnly:!0,json:{read:!1,write:!0,default:!0}})],e.prototype,"hasZ",void 0);h.__decorate([m.property({readOnly:!0,
json:{read:!1,write:!0,default:!1}})],e.prototype,"hasM",void 0);h.__decorate([m.property({type:C.MeshVertexAttributes,nonNullable:!0,json:{write:!0}})],e.prototype,"vertexAttributes",void 0);e=n=h.__decorate([X.subclass("esri.geometry.Mesh")],e);const D={x:w.fromValues(1,0,0),y:w.fromValues(0,1,0),z:w.fromValues(0,0,1)},u=r.create(),N=r.create(),O=r.create(),x=w.create();return e});