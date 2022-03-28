"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2238],{86629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={sidebar_label:"With Typescript",title:"Typescript",sidebar_position:6},p=void 0,l={unversionedId:"customization/typescript",id:"customization/typescript",title:"Typescript",description:"TypeScript Definitions (extending the default theme)",source:"@site/docs/customization/typescript.mdx",sourceDirName:"customization",slug:"/customization/typescript",permalink:"/docs/next/customization/typescript",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/customization/typescript.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"With Typescript",title:"Typescript",sidebar_position:6},sidebar:"docs",previous:{title:"Common Pitfalls",permalink:"/docs/next/customization/pitfall"},next:{title:"AirbnbRating",permalink:"/docs/next/components/airbnbrating"}},s={},d=[{value:"TypeScript Definitions (extending the default theme)",id:"typescript-definitions-extending-the-default-theme",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"typescript-definitions-extending-the-default-theme"},"TypeScript Definitions (extending the default theme)"),(0,o.kt)("p",null,"TypeScript definitions for your theme can be extended by using TypeScript's ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html"},"declaration merging")," feature. First you need to create a declaration file called ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-elements.d.ts")," and then declare the module ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-elements")," and 're-export' the types that you want to extend."),(0,o.kt)("p",null,"i.e. below we add a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"p1Style")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," theme object and we add a bunch of colors to the ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// react-native-elements.d.ts\n\nexport * from '@rneui/themed';\n\ntype RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };\n\ndeclare module '@rneui/themed' {\n  export interface TextProps {\n    bold: boolean;\n  }\n\n  export interface Colors {\n    background: string;\n    border: string;\n    text: string;\n    altText: string;\n    danger: string;\n  }\n\n  export interface FullTheme {\n    colors: RecursivePartial<Colors>;\n    Text: Partial<TextProps>;\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const myTheme = createTheme({\n  Text: (props) => ({\n    style: {\n      fontWeight: props.bold ? 'bold' : 'normal',\n    },\n  }),\n});\n")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);