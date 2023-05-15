// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.27/esri/copyright.txt for details.
//>>built
define(["exports"],function(u){let A,U,H,V=!1,I=!1,N=!1,r=!1,O=!1;const z=(a,b)=>()=>{},W={},P=a=>{a=typeof a;return"object"===a||"function"===a},Q=(a,b,...d)=>{let c=null,e=null,g=null,f=!1,h=!1;const k=[],l=m=>{for(let n=0;n<m.length;n++)if(c=m[n],Array.isArray(c))l(c);else if(null!=c&&"boolean"!==typeof c){if(f="function"!==typeof a&&!P(c))c=String(c);f&&h?k[k.length-1].$text$+=c:k.push(f?J(null,c):c);h=f}};l(d);if(b){b.key&&(e=b.key);b.name&&(g=b.name);const m=b.className||b.class;m&&(b.class=
"object"!==typeof m?m:Object.keys(m).filter(n=>m[n]).join(" "))}if("function"===typeof a)return a(null===b?{}:b,k,pa);d=J(a,null);d.$attrs$=b;0<k.length&&(d.$children$=k);d.$key$=e;d.$name$=g;return d},J=(a,b)=>({$flags$:0,$tag$:a,$text$:b,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}),X={},pa={forEach:(a,b)=>a.map(Y).forEach(b),map:(a,b)=>a.map(Y).map(b).map(qa)},Y=a=>({vattrs:a.$attrs$,vchildren:a.$children$,vkey:a.$key$,vname:a.$name$,vtag:a.$tag$,vtext:a.$text$}),qa=a=>{if("function"===
typeof a.vtag){var b=Object.assign({},a.vattrs);a.vkey&&(b.key=a.vkey);a.vname&&(b.name=a.vname);return Q(a.vtag,b,...(a.vchildren||[]))}b=J(a.vtag,a.vtext);b.$attrs$=a.vattrs;b.$children$=a.vchildren;b.$key$=a.vkey;b.$name$=a.vname;return b},sa=a=>ra.map(b=>b(a)).find(b=>!!b),ta=(a,b)=>{if(null!=a&&!P(a)){if(b&4)return"false"===a?!1:""===a||!!a;if(b&2)return parseFloat(a);if(b&1)return String(a)}return a},Z=new WeakMap,va=(a,b,d)=>{let c=K.get(a);ua&&d?(c=c||new CSSStyleSheet,"string"===typeof c?
c=b:c.replaceSync(b)):c=b;K.set(a,c)},aa=(a,b)=>"sc-"+(b&&a.$flags$&32?a.$tagName$+"-"+b:a.$tagName$),ca=(a,b,d,c,e,g)=>{if(d!==c){let k=b in a,l=b.toLowerCase();if("class"===b){a=a.classList;const m=d?d.split(ba):[],n=c?c.split(ba):[];a.remove(...m.filter(q=>q&&!n.includes(q)));a.add(...n.filter(q=>q&&!m.includes(q)))}else if("style"===b){for(var f in d)c&&null!=c[f]||(f.includes("-")?a.style.removeProperty(f):a.style[f]="");for(var h in c)d&&c[h]===d[h]||(h.includes("-")?a.style.setProperty(h,c[h]):
a.style[h]=c[h])}else if("key"!==b)if("ref"===b)c&&c(a);else if(a.__lookupSetter__(b)||"o"!==b[0]||"n"!==b[1]){f=P(c);if((k||f&&null!==c)&&!e)try{if(a.tagName.includes("-"))a[b]=c;else if(h=null==c?"":c,"list"===b)k=!1;else if(null==d||a[b]!=h)a[b]=h}catch(m){}d=!1;l!==(l=l.replace(/^xlink:?/,""))&&(b=l,d=!0);if(null==c||!1===c){if(!1!==c||""===a.getAttribute(b))d?a.removeAttributeNS("http://www.w3.org/1999/xlink",b):a.removeAttribute(b)}else(!k||g&4||e)&&!f&&(c=!0===c?"":c,d?a.setAttributeNS("http://www.w3.org/1999/xlink",
b,c):a.setAttribute(b,c))}else b="-"===b[2]?b.slice(3):l in E?l.slice(2):l[2]+b.slice(3),d&&p.rel(a,b,d,!1),c&&p.ael(a,b,c,!1)}},ba=/\s/,da=(a,b,d,c)=>{const e=11===b.$elm$.nodeType&&b.$elm$.host?b.$elm$.host:b.$elm$;a=a&&a.$attrs$||W;const g=b.$attrs$||W;for(c in a)c in g||ca(e,c,a[c],void 0,d,b.$flags$);for(c in g)ca(e,c,a[c],g[c],d,b.$flags$)},L=(a,b,d,c)=>{b=b.$children$[d];let e=0,g;V||(N=!0,"slot"===b.$tag$&&(A&&c.classList.add(A+"-s"),b.$flags$|=b.$children$?2:1));if(null!==b.$text$)c=b.$elm$=
w.createTextNode(b.$text$);else if(b.$flags$&1)c=b.$elm$=w.createTextNode("");else{r||(r="svg"===b.$tag$);c=b.$elm$=w.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",b.$flags$&2?"slot-fb":b.$tag$);r&&"foreignObject"===b.$tag$&&(r=!1);da(null,b,r);null!=A&&c["s-si"]!==A&&c.classList.add(c["s-si"]=A);if(b.$children$)for(e=0;e<b.$children$.length;++e)(g=L(a,b,e,c))&&c.appendChild(g);"svg"===b.$tag$?r=!1:"foreignObject"===c.tagName&&(r=!0)}c["s-hn"]=H;b.$flags$&3&&(c["s-sr"]=
!0,c["s-cr"]=U,c["s-sn"]=b.$name$||"",(d=a&&a.$children$&&a.$children$[d])&&d.$tag$===b.$tag$&&a.$elm$&&F(a.$elm$,!1));return c},F=(a,b)=>{p.$flags$|=1;a=a.childNodes;for(let d=a.length-1;0<=d;d--){const c=a[d];c["s-hn"]!==H&&c["s-ol"]&&((c["s-ol"]?c["s-ol"]:c).parentNode.insertBefore(c,c&&c["s-ol"]||c),c["s-ol"].remove(),c["s-ol"]=void 0,N=!0);b&&F(c,b)}p.$flags$&=-2},ea=(a,b,d,c,e,g)=>{let f=a["s-cr"]&&a["s-cr"].parentNode||a,h;f.shadowRoot&&f.tagName===H&&(f=f.shadowRoot);for(;e<=g;++e)c[e]&&(h=
L(null,d,e,a))&&(c[e].$elm$=h,f.insertBefore(h,b&&b["s-ol"]||b))},ha=(a,b,d,c,e)=>{for(;b<=d;++b)if(c=a[b])e=c.$elm$,fa(c),I=!0,e["s-ol"]?e["s-ol"].remove():F(e,!0),e.remove()},M=(a,b)=>a.$tag$===b.$tag$?"slot"===a.$tag$?a.$name$===b.$name$:a.$key$===b.$key$:!1,B=(a,b)=>{const d=b.$elm$=a.$elm$,c=a.$children$,e=b.$children$,g=b.$tag$;var f=b.$text$;if(null===f){r="svg"===g?!0:"foreignObject"===g?!1:r;"slot"!==g&&da(a,b,r);if(null!==c&&null!==e){var h=f=a=0,k=0;let m=c.length-1,n=c[0],q=c[m],y=e.length-
1,t=e[0],x=e[y];for(;a<=m&&f<=y;)if(null==n)n=c[++a];else if(null==q)q=c[--m];else if(null==t)t=e[++f];else if(null==x)x=e[--y];else if(M(n,t))B(n,t),n=c[++a],t=e[++f];else if(M(q,x))B(q,x),q=c[--m],x=e[--y];else if(M(n,x))"slot"!==n.$tag$&&"slot"!==x.$tag$||F(n.$elm$.parentNode,!1),B(n,x),d.insertBefore(n.$elm$,q.$elm$.nextSibling),n=c[++a],x=e[--y];else if(M(q,t))"slot"!==n.$tag$&&"slot"!==x.$tag$||F(q.$elm$.parentNode,!1),B(q,t),d.insertBefore(q.$elm$,n.$elm$),q=c[--m],t=e[++f];else{h=-1;for(k=
a;k<=m;++k)if(c[k]&&null!==c[k].$key$&&c[k].$key$===t.$key$){h=k;break}0<=h?(k=c[h],k.$tag$!==t.$tag$?h=L(c&&c[f],b,h,d):(B(k,t),c[h]=void 0,h=k.$elm$)):h=L(c&&c[f],b,f,d);t=e[++f];if(h){k=n.$elm$;k=(k["s-ol"]?k["s-ol"]:k).parentNode;var l=n.$elm$;k.insertBefore.call(k,h,l&&l["s-ol"]||l)}}a>m?ea(d,null==e[y+1]?null:e[y+1].$elm$,b,e,f,y):f>y&&ha(c,a,m)}else null!==e?(null!==a.$text$&&(d.textContent=""),ea(d,null,b,e,0,e.length-1)):null!==c&&ha(c,0,c.length-1);r&&"svg"===g&&(r=!1)}else(b=d["s-cr"])?
b.parentNode.textContent=f:a.$text$!==f&&(d.data=f)},ia=a=>{a=a.childNodes;let b,d,c,e,g,f;d=0;for(c=a.length;d<c;d++)if(b=a[d],1===b.nodeType){if(b["s-sr"])for(g=b["s-sn"],b.hidden=!1,e=0;e<c;e++)if(f=a[e].nodeType,a[e]["s-hn"]!==b["s-hn"]||""!==g){if(1===f&&g===a[e].getAttribute("slot")){b.hidden=!0;break}}else if(1===f||3===f&&""!==a[e].textContent.trim()){b.hidden=!0;break}ia(b)}},v=[],ka=a=>{let b,d,c,e,g,f=0;const h=a.childNodes,k=h.length;for(;f<k;f++){a=h[f];if(a["s-sr"]&&(b=a["s-cr"])&&b.parentNode)for(d=
b.parentNode.childNodes,c=a["s-sn"],g=d.length-1;0<=g;g--)b=d[g],b["s-cn"]||b["s-nr"]||b["s-hn"]===a["s-hn"]||(ja(b,c)?(e=v.find(l=>l.$nodeToRelocate$===b),I=!0,b["s-sn"]=b["s-sn"]||c,e?e.$slotRefNode$=a:v.push({$slotRefNode$:a,$nodeToRelocate$:b}),b["s-sr"]&&v.map(l=>{ja(l.$nodeToRelocate$,b["s-sn"])&&(e=v.find(m=>m.$nodeToRelocate$===b))&&!l.$slotRefNode$&&(l.$slotRefNode$=e.$slotRefNode$)})):v.some(l=>l.$nodeToRelocate$===b)||v.push({$nodeToRelocate$:b}));1===a.nodeType&&ka(a)}},ja=(a,b)=>1===
a.nodeType?null===a.getAttribute("slot")&&""===b||a.getAttribute("slot")===b?!0:!1:a["s-sn"]===b?!0:""===b,fa=a=>{a.$attrs$&&a.$attrs$.ref&&a.$attrs$.ref(null);a.$children$&&a.$children$.map(fa)},wa=(a,b)=>{const d=a.$hostElement$;var c=a.$cmpMeta$,e=a.$vnode$||J(null,null);const g=b&&b.$tag$===X?b:Q(null,null,b);H=d.tagName;c.$attrsToReflect$&&(g.$attrs$=g.$attrs$||{},c.$attrsToReflect$.map(([f,h])=>g.$attrs$[h]=d[f]));g.$tag$=null;g.$flags$|=4;a.$vnode$=g;g.$elm$=e.$elm$=d.shadowRoot||d;A=d["s-sc"];
U=d["s-cr"];V=0!==(c.$flags$&1);I=!1;B(e,g);p.$flags$|=1;if(N){ka(g.$elm$);let f,h;for(c=0;c<v.length;c++)e=v[c],a=e.$nodeToRelocate$,a["s-ol"]||(e=w.createTextNode(""),e["s-nr"]=a,a.parentNode.insertBefore(a["s-ol"]=e,a));for(c=0;c<v.length;c++)if(e=v[c],a=e.$nodeToRelocate$,e.$slotRefNode$){b=e.$slotRefNode$.parentNode;f=e.$slotRefNode$.nextSibling;for(e=a["s-ol"];e=e.previousSibling;)if((h=e["s-nr"])&&h["s-sn"]===a["s-sn"]&&b===h.parentNode&&(h=h.nextSibling,!h||!h["s-nr"])){f=h;break}(f||b===
a.parentNode)&&a.nextSibling===f||a===f||(!a["s-hn"]&&a["s-ol"]&&(a["s-hn"]=a["s-ol"].parentNode.nodeName),b.insertBefore(a,f))}else 1===a.nodeType&&(a.hidden=!0)}I&&ia(g.$elm$);p.$flags$&=-2;v.length=0},R=(a,b)=>{a.$flags$|=16;return xa(()=>ya(a,b))},ya=(a,b)=>{const d=a.$hostElement$,c=z("scheduleUpdate",a.$cmpMeta$.$tagName$);let e;e=b?C(d,"componentWillLoad"):C(d,"componentWillUpdate");e=la(e,()=>C(d,"componentWillRender"));c();return la(e,()=>za(a,d,b))},za=async(a,b,d)=>{var c=a.$hostElement$,
e=z("update",a.$cmpMeta$.$tagName$);c["s-rc"];if(d){var g=a.$cmpMeta$;d=a.$hostElement$;c=g.$flags$;const h=z("attachStyles",g.$tagName$);var f=d.shadowRoot?d.shadowRoot:d.getRootNode();g=aa(g,a.$modeName$);const k=K.get(g);f=11===f.nodeType?f:w;if(k)if("string"===typeof k){f=f.head||f;let l=Z.get(f),m;l||Z.set(f,l=new Set);l.has(g)||(m=w.createElement("style"),m.innerHTML=k,f.insertBefore(m,f.querySelector("link")),l&&l.add(g))}else f.adoptedStyleSheets.includes(k)||(f.adoptedStyleSheets=[...f.adoptedStyleSheets,
k]);f=g;c&10&&(d["s-sc"]=f,d.classList.add(f+"-h"),c&2&&d.classList.add(f+"-s"));h()}d=z("render",a.$cmpMeta$.$tagName$);try{b=b.render&&b.render(),a.$flags$&=-17,a.$flags$|=2,wa(a,b)}catch(h){(0,console.error)(h,a.$hostElement$)}d();e();e=a.$hostElement$;b=z("postUpdate",a.$cmpMeta$.$tagName$);a.$ancestorComponent$;C(e,"componentDidRender");a.$flags$&64?C(e,"componentDidUpdate"):(a.$flags$|=64,C(e,"componentDidLoad"));b()},C=(a,b,d)=>{if(a&&a[b])try{return a[b](d)}catch(c){(0,console.error)(c,void 0)}},
la=(a,b)=>a&&a.then?a.then(b):b(),Aa=(a,b,d,c)=>{const e=D.get(a),g=e.$instanceValues$.get(b),f=e.$flags$;d=ta(d,c.$members$[b][0]);const h=Number.isNaN(g)&&Number.isNaN(d);d===g||h||(e.$instanceValues$.set(b,d),c.$watchers$&&f&128&&(c=c.$watchers$[b])&&c.map(k=>{try{a[k](d,g,b)}catch(l){(0,console.error)(l,a)}}),2!==(f&18)||a.componentShouldUpdate&&!1===a.componentShouldUpdate(d,g,b)||R(e,!1))},Ba=(a,b,d)=>{if(b.$members$){a.watchers&&(b.$watchers$=a.watchers);d=Object.entries(b.$members$);const c=
a.prototype;d.map(([g,[f]])=>{(f&31||f&32)&&Object.defineProperty(c,g,{get(){return D.get(this).$instanceValues$.get(g)},set(h){Aa(this,g,h,b)},configurable:!0,enumerable:!0})});const e=new Map;c.attributeChangedCallback=function(g,f,h){p.jmp(()=>{const k=e.get(g);if(this.hasOwnProperty(k))h=this[k],delete this[k];else if(c.hasOwnProperty(k)&&"number"===typeof this[k]&&this[k]==h)return;this[k]=null===h&&"boolean"===typeof this[k]?!1:h})};a.observedAttributes=d.filter(([,g])=>g[0]&15).map(([g,f])=>
{const h=f[1]||g;e.set(h,g);f[0]&512&&b.$attrsToReflect$.push([g,h]);return h})}return a},Ca=async(a,b,d,c,e)=>{0===(b.$flags$&32)&&(e=a.constructor,b.$flags$|=32,customElements.whenDefined(d.$tagName$).then(()=>b.$flags$|=128),e.style&&(c=e.style,"string"!==typeof c&&(c=c[b.$modeName$=sa(a)]),a=aa(d,b.$modeName$),K.has(a)||(e=z("registerStyles",d.$tagName$),va(a,c,!!(d.$flags$&1)),e())));b.$ancestorComponent$;R(b,!0)},Ea=a=>{if(0===(p.$flags$&1)){const b=D.get(a),d=b.$cmpMeta$,c=z("connectedCallback",
d.$tagName$);b.$flags$&1?ma(a,b,d.$listeners$):(b.$flags$|=1,d.$flags$&12&&Da(a),d.$members$&&Object.entries(d.$members$).map(([e,[g]])=>{g&31&&a.hasOwnProperty(e)&&(g=a[e],delete a[e],a[e]=g)}),Ca(a,b,d));c()}},Da=a=>{const b=a["s-cr"]=w.createComment("");b["s-cn"]=!0;a.insertBefore(b,a.firstChild)},Fa=a=>{0===(p.$flags$&1)&&(a=D.get(a),a.$rmListeners$&&(a.$rmListeners$.map(b=>b()),a.$rmListeners$=void 0))},ma=(a,b,d,c)=>{d&&d.map(([e,g,f])=>{const h=e&4?w:e&8?E:e&16?w.body:a,k=Ga(b,f),l=Ha?{passive:0!==
(e&1),capture:0!==(e&2)}:0!==(e&2);p.ael(h,g,k,l);(b.$rmListeners$=b.$rmListeners$||[]).push(()=>p.rel(h,g,k,l))})},Ga=(a,b)=>d=>{try{a.$hostElement$[b](d)}catch(c){(0,console.error)(c,void 0)}},D=new WeakMap,K=new Map,ra=[],E="undefined"!==typeof window?window:{};null;const w=E.document||{head:{}},Ia=E.HTMLElement||class{},p={$flags$:0,$resourcesUrl$:"",jmp:a=>a(),raf:a=>requestAnimationFrame(a),ael:(a,b,d,c)=>a.addEventListener(b,d,c),rel:(a,b,d,c)=>a.removeEventListener(b,d,c),ce:(a,b)=>new CustomEvent(a,
b)},Ha=(()=>{let a=!1;try{w.addEventListener("e",null,Object.defineProperty({},"passive",{get(){a=!0}}))}catch(b){}return a})();a:{try{new CSSStyleSheet;var G="function"===typeof(new CSSStyleSheet).replaceSync;break a}catch(a){}G=!1}const ua=G,S=[],na=[];G=(a,b)=>d=>{a.push(d);O||(O=!0,b&&p.$flags$&4?(d=T,Promise.resolve(void 0).then(d)):p.raf(T))};const oa=a=>{for(let b=0;b<a.length;b++)try{a[b](performance.now())}catch(d){(0,console.error)(d,void 0)}a.length=0},T=()=>{oa(S);oa(na);(O=0<S.length)&&
p.raf(T)},Ja=G(S,!1),xa=G(na,!0);u.Build={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1};u.Fragment=(a,b)=>b;u.H=Ia;u.Host=X;u.createEvent=(a,b,d)=>({emit:c=>{c=p.ce(b,{bubbles:!!(d&4),composed:!!(d&2),cancelable:!!(d&1),detail:c});a.dispatchEvent(c);return c}});u.forceUpdate=a=>{a=D.get(a);const b=a.$hostElement$.isConnected;b&&2===(a.$flags$&18)&&R(a,!1);return b};u.getAssetPath=a=>{a=new URL(a,p.$resourcesUrl$);return a.origin!==E.location.origin?a.href:a.pathname};u.h=Q;u.proxyCustomElement=
(a,b)=>{const d={$flags$:b[0],$tagName$:b[1]};d.$members$=b[2];d.$listeners$=b[3];d.$watchers$=a.$watchers$;d.$attrsToReflect$=[];const c=a.prototype.connectedCallback,e=a.prototype.disconnectedCallback;Object.assign(a.prototype,{__registerHost(){const g={$flags$:0,$hostElement$:this,$cmpMeta$:d,$instanceValues$:new Map};ma(this,g,d.$listeners$);D.set(this,g)},connectedCallback(){Ea(this);c&&c.call(this)},disconnectedCallback(){Fa(this);e&&e.call(this)},__attachShadow(){this.attachShadow({mode:"open",
delegatesFocus:!!(d.$flags$&16)})}});a.is=d.$tagName$;return Ba(a,d)};u.readTask=Ja;u.setAssetPath=a=>p.$resourcesUrl$=a});