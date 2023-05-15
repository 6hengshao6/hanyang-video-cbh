// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports","../maquette/dom","../maquette/projector","./advanced-projector-options","./utils"],function(x,t,H,C,D){const E=(e,f)=>{const d=[];for(;e&&e!==f;)d.push(e),e=e.parentNode;return d},F=(e,f)=>e.find(f),y=(e,f,d=!1)=>{let g=e;f.forEach((k,n)=>{const h=g?.children?F(g.children,q=>q.domNode===k):void 0;if(!d||h||n===f.length-1)g=h});return g};x.createAdvancedProjector=e=>{let f;const d={...C.defaultAdvancedProjectorOptions,...e},g=D.applyDefaultProjectionOptions(d),k=g.performanceLogger;
let n=!0,h,q=!1;const r=[],p=[],v=(b,a,z)=>{let l;g.eventHandlerInterceptor=(I,J,K,L)=>function(m){k("domEvent",m);var c=E(m.currentTarget,l.domNode);const G=c.some(u=>customElements.get(u?.tagName?.toLowerCase()));m.eventPhase!==Event.CAPTURING_PHASE&&G?(c=m.composedPath(),c=c.slice(c.indexOf(m.currentTarget),c.indexOf(l.domNode)).filter(u=>u.getRootNode()===u.ownerDocument).reverse(),c=y(l.getLastRender(),c,!0)):(c.reverse(),c=y(l.getLastRender(),c));let A;c&&(A=d.handleInterceptedEvent(f,c,this,
m));k("domEventProcessed",m);return A};d.postProcessProjectionOptions?.(g);const B=z();l=b(a,B,g);r.push(l);p.push(z);d.afterFirstVNodeRendered&&d.afterFirstVNodeRendered(l,B)};let w=()=>{h=void 0;if(n){n=!1;k("renderStart",void 0);for(let b=0;b<r.length;b++){const a=p[b]();k("rendered",void 0);r[b].update(a);k("patched",void 0)}k("renderDone",void 0);n=!0}};d.modifyDoRenderImplementation&&(w=d.modifyDoRenderImplementation(w,r,p));return f={renderNow:w,scheduleRender:()=>{h||q||(h=requestAnimationFrame(w))},
stop:()=>{h&&(cancelAnimationFrame(h),h=void 0);q=!0},resume:()=>{q=!1;n=!0;f.scheduleRender()},append:(b,a)=>{v(t.dom.append,b,a)},insertBefore:(b,a)=>{v(t.dom.insertBefore,b,a)},merge:(b,a)=>{v(t.dom.merge,b,a)},replace:(b,a)=>{v(t.dom.replace,b,a)},detach:b=>{for(let a=0;a<p.length;a++)if(p[a]===b)return p.splice(a,1),r.splice(a,1)[0];throw Error("renderFunction was not found");}}};Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});