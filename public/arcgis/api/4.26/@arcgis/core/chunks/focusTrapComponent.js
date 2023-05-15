/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{h as e,j as t,k as n,l as a,m as r,n as o}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return"Tab"===e.key||9===e.keyCode},l=function(e){return s(e)&&!e.shiftKey},b=function(e){return s(e)&&e.shiftKey},f=function(e){return setTimeout(e,0)},v=function(e,t){var n=-1;return e.every((function(e,a){return!t(e)||(n=a,!1)})),n},d=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return"function"==typeof e?e.apply(void 0,n):e},p=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},m=[],y=function(e,t){var i,u=(null==t?void 0:t.document)||document,y=(null==t?void 0:t.trapStack)||m,h=c({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:l,isKeyBackward:b},t),g={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},O=function(e,t,n){return e&&void 0!==e[t]?e[t]:h[n||t]},w=function(e){return g.containerGroups.findIndex((function(t){var n=t.container,a=t.tabbableNodes;return n.contains(e)||a.find((function(t){return t===e}))}))},F=function(e){var t=h[e];if("function"==typeof t){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];t=t.apply(void 0,a)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var o=t;if("string"==typeof t&&!(o=u.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return o},k=function(){var e=F("initialFocus");if(!1===e)return!1;if(void 0===e)if(w(u.activeElement)>=0)e=u.activeElement;else{var t=g.tabbableGroups[0];e=t&&t.firstTabbableNode||F("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},T=function(){if(g.containerGroups=g.containers.map((function(e){var t=n(e,h.tabbableOptions),o=a(e,h.tabbableOptions);return{container:e,tabbableNodes:t,focusableNodes:o,firstTabbableNode:t.length>0?t[0]:null,lastTabbableNode:t.length>0?t[t.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=o.findIndex((function(t){return t===e}));if(!(n<0))return t?o.slice(n+1).find((function(e){return r(e,h.tabbableOptions)})):o.slice(0,n).reverse().find((function(e){return r(e,h.tabbableOptions)}))}}})),g.tabbableGroups=g.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),g.tabbableGroups.length<=0&&!F("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},E=function e(t){!1!==t&&t!==u.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!h.preventScroll}),g.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(k()))},D=function(e){var t=F("setReturnFocus",e);return t||!1!==t&&e},N=function(e){var t=p(e);w(t)>=0||(d(h.clickOutsideDeactivates,e)?i.deactivate({returnFocus:h.returnFocusOnDeactivate&&!o(t,h.tabbableOptions)}):d(h.allowOutsideClick,e)||e.preventDefault())},G=function(e){var t=p(e),n=w(t)>=0;n||t instanceof Document?n&&(g.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),E(g.mostRecentlyFocusedNode||k()))},P=function(e){if(("Escape"===(t=e).key||"Esc"===t.key||27===t.keyCode)&&!1!==d(h.escapeDeactivates,e))return e.preventDefault(),void i.deactivate();var t;(h.isKeyForward(e)||h.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=p(e);T();var a=null;if(g.tabbableGroups.length>0){var i=w(n),c=i>=0?g.containerGroups[i]:void 0;if(i<0)a=t?g.tabbableGroups[g.tabbableGroups.length-1].lastTabbableNode:g.tabbableGroups[0].firstTabbableNode;else if(t){var u=v(g.tabbableGroups,(function(e){var t=e.firstTabbableNode;return n===t}));if(u<0&&(c.container===n||o(n,h.tabbableOptions)&&!r(n,h.tabbableOptions)&&!c.nextTabbableNode(n,!1))&&(u=i),u>=0){var l=0===u?g.tabbableGroups.length-1:u-1;a=g.tabbableGroups[l].lastTabbableNode}else s(e)||(a=c.nextTabbableNode(n,!1))}else{var b=v(g.tabbableGroups,(function(e){var t=e.lastTabbableNode;return n===t}));if(b<0&&(c.container===n||o(n,h.tabbableOptions)&&!r(n,h.tabbableOptions)&&!c.nextTabbableNode(n))&&(b=i),b>=0){var f=b===g.tabbableGroups.length-1?0:b+1;a=g.tabbableGroups[f].firstTabbableNode}else s(e)||(a=c.nextTabbableNode(n))}}else a=F("fallbackFocus");a&&(s(e)&&e.preventDefault(),E(a))}(e,h.isKeyBackward(e))},j=function(e){var t=p(e);w(t)>=0||d(h.clickOutsideDeactivates,e)||d(h.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},x=function(){if(g.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var a=e.indexOf(t);-1===a||e.splice(a,1),e.push(t)}(y,i),g.delayInitialFocusTimer=h.delayInitialFocus?f((function(){E(k())})):E(k()),u.addEventListener("focusin",G,!0),u.addEventListener("mousedown",N,{capture:!0,passive:!1}),u.addEventListener("touchstart",N,{capture:!0,passive:!1}),u.addEventListener("click",j,{capture:!0,passive:!1}),u.addEventListener("keydown",P,{capture:!0,passive:!1}),i},C=function(){if(g.active)return u.removeEventListener("focusin",G,!0),u.removeEventListener("mousedown",N,!0),u.removeEventListener("touchstart",N,!0),u.removeEventListener("click",j,!0),u.removeEventListener("keydown",P,!0),i};return(i={get active(){return g.active},get paused(){return g.paused},activate:function(e){if(g.active)return this;var t=O(e,"onActivate"),n=O(e,"onPostActivate"),a=O(e,"checkCanFocusTrap");a||T(),g.active=!0,g.paused=!1,g.nodeFocusedBeforeActivation=u.activeElement,t&&t();var r=function(){a&&T(),x(),n&&n()};return a?(a(g.containers.concat()).then(r,r),this):(r(),this)},deactivate:function(e){if(!g.active)return this;var t=c({onDeactivate:h.onDeactivate,onPostDeactivate:h.onPostDeactivate,checkCanReturnFocus:h.checkCanReturnFocus},e);clearTimeout(g.delayInitialFocusTimer),g.delayInitialFocusTimer=void 0,C(),g.active=!1,g.paused=!1,function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}(y,i);var n=O(t,"onDeactivate"),a=O(t,"onPostDeactivate"),r=O(t,"checkCanReturnFocus"),o=O(t,"returnFocus","returnFocusOnDeactivate");n&&n();var u=function(){f((function(){o&&E(D(g.nodeFocusedBeforeActivation)),a&&a()}))};return o&&r?(r(D(g.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return g.paused||!g.active||(g.paused=!0,C()),this},unpause:function(){return g.paused&&g.active?(g.paused=!1,T(),x(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return g.containers=t.map((function(e){return"string"==typeof e?u.querySelector(e):e})),g.active&&T(),this}}).updateContainerElements(e),i};const h=[];function g(n){const{focusTrapEl:a}=n;if(!a)return;null==a.tabIndex&&(a.tabIndex=-1);const r={clickOutsideDeactivates:!0,document:a.ownerDocument,escapeDeactivates:!1,fallbackFocus:a,setReturnFocus:t=>(e(t),!1),tabbableOptions:t,trapStack:h};n.focusTrap=y(a,r)}function O(e){e.focusTrapDisabled||e.focusTrap?.activate()}function w(e){e.focusTrap?.deactivate()}function F(e){e.focusTrap?.updateContainerElements(e.focusTrapEl)}export{O as a,g as c,w as d,F as u};
