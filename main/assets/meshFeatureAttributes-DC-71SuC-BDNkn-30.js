import{a3 as n}from"./main-B2UX4EBG.js";import{$ as r}from"./MeshTransform-BFYjlBv2-O9Z8okes.js";function l(t,a,i=o){return new n({x:t[i.originX],y:t[i.originY],z:t[i.originZ],spatialReference:a})}function c(t,a=o){return new r({translation:[t[a.translationX],-t[a.translationZ],t[a.translationY]],rotationAxis:[t[a.rotationX],-t[a.rotationZ],t[a.rotationY]],rotationAngle:t[a.rotationDeg],scale:[t[a.scaleX],t[a.scaleZ],t[a.scaleY]]})}const o={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};export{c as e,l as s};