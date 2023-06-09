/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{L as s}from"./Logger.js";import{c as i}from"./enums4.js";import{i as r}from"./color.js";function l(l){return r(l.minDataValue)&&r(l.maxDataValue)&&null!=l.minSize&&null!=l.maxSize?i.SIZE_MINMAX_VALUE:(l.expression&&"view.scale"===l.expression||l.valueExpression&&"$view.scale"===l.valueExpression)&&Array.isArray(l.stops)?i.SIZE_SCALE_STOPS:(null!=l.field||l.expression&&"view.scale"!==l.expression||l.valueExpression&&"$view.scale"!==l.valueExpression)&&(Array.isArray(l.stops)||"levels"in l&&l.levels)?i.SIZE_FIELD_STOPS:(null!=l.field||l.expression&&"view.scale"!==l.expression||l.valueExpression&&"$view.scale"!==l.valueExpression)&&null!=l.valueUnit?i.SIZE_UNIT_VALUE:(s.getLogger("esri.views.2d.engine.webgl").error(new e("mapview-bad-type","Found invalid size VisualVariable",l)),i.NONE)}export{l as g};
