/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */
const e=new WeakMap,n=new WeakMap;function t(t){n.set(t,new Promise((n=>e.set(t,n))))}function a(n){e.get(n)()}function s(e){return n.get(e)}export{a,s as c,t as s};
