"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5921,2181],{64109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>A,toc:()=>p});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(47997),s=["components"],c={},l=void 0,A={unversionedId:"main/usage/FAB/FAB",id:"version-4.0.0-beta.0/main/usage/FAB/FAB",title:"FAB",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/FAB/FAB.md",sourceDirName:"main/usage/FAB",slug:"/main/usage/FAB/",permalink:"/docs/4.0.0-beta.0/main/usage/FAB/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/FAB/FAB.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},d={},p=[],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.default,{mdxType:"Snack"}))}u.isMDXComponent=!0},47997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={},c=void 0,l={unversionedId:"main/usage/FAB/snack/index",id:"version-4.0.0-beta.0/main/usage/FAB/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/FAB/snack/index.md",sourceDirName:"main/usage/FAB/snack",slug:"/main/usage/FAB/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/FAB/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/FAB/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},A={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE FAB","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20FAB%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bvisible%2C%20setVisible%5D%20%3D%20React.useState(true)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20flexGrow%3A%201%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Small%20Size%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20%20%20loading%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Large%20Size%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Primary%20Color%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Navigate%22%0A%20%20%20%20%20%20%20%20%20%20upperCase%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'place'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EDisabled%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Extended%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'place'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setVisible(!visible)%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22right%22%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Hide%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D%22red%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7B!visible%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setVisible(!visible)%7D%0A%20%20%20%20%20%20%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Show%22%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},A=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(u,o(o({ref:t},A),{},{components:n})):a.createElement(u,o({ref:t},A))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);