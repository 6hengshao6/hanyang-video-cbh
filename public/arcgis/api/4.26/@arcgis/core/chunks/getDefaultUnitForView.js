/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{a as t,e as r}from"./maybe.js";import{K as e}from"./unitUtils.js";import a from"../portal/Portal.js";function s(s){const i="metric";if(t(s))return i;const n=s.map,o=(n&&"portalItem"in n?n.portalItem?.portal:null)??a.getDefault();switch(o.user?.units??o.units){case i:return i;case"english":return"imperial"}return r(e(s.spatialReference),i)}export{s as g};
