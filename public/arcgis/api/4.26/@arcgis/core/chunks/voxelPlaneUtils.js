/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
import{s as a,m as s}from"./quat.js";import{c as t}from"./quatf64.js";import{c as o,n,q as r,d as m,f as c}from"./vec3.js";import{a as f,t as i}from"./common.js";const u=m(),p=t(),e=t(),j=t(),q=c(0,0,1),h=c(0,1,0),M=c(1,0,0);function d(s){o(u,s),n(u,u);const m=Math.atan2(u[1],u[0]),c=a(t(),q,-m);r(u,u,c);const i=-1*Math.atan2(u[2],u[0]);return[f(m)+270,f(i)+90]}function v(t,m){return a(e,q,i(t-270)),a(j,h,i(m-90)),s(p,e,j),o(u,M),r(u,u,p),n(u,u),[u[0],u[1],u[2]]}export{v as a,d as c};
