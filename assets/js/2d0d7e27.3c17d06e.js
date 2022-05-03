"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59251],{14751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"Common Pitfalls",sidebar_position:4},s=void 0,c={unversionedId:"customization/pitfall",id:"customization/pitfall",title:"Common Pitfalls",description:"This section outlines some common pitfalls when using Theming.",source:"@site/docs/customization/4.pitfall.mdx",sourceDirName:"customization",slug:"/customization/pitfall",permalink:"/docs/next/customization/pitfall",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/customization/4.pitfall.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Common Pitfalls",sidebar_position:4},sidebar:"docs",previous:{title:"Components",permalink:"/docs/next/customization/components"},next:{title:"Common Pitfalls",permalink:"/docs/next/customization/pitfall"}},p={},m=[{value:"My local styles aren&#39;t working with the theme",id:"my-local-styles-arent-working-with-the-theme",level:4},{value:"Example 1",id:"example-1",level:5},{value:"Example 2",id:"example-2",level:5},{value:"Example 3",id:"example-3",level:5}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section outlines some common pitfalls when using Theming."),(0,a.kt)("h4",{id:"my-local-styles-arent-working-with-the-theme"},"My local styles aren't working with the theme"),(0,a.kt)("p",null,"It's important to understand that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," works by merging your local(external) styles with those set on the theme.\nThis means that in both cases ",(0,a.kt)("strong",{parentName:"p"},"the type of these styles must be the same"),"."),(0,a.kt)("h5",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button\n  containerStyle={{ backgroundColor: 'blue' }}\n/>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.kt)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"object"))),(0,a.kt)("br",null),(0,a.kt)("h5",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: [\n      {\n        marginTop: 10;\n      }\n    ]\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.kt)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"array"))),(0,a.kt)("br",null),(0,a.kt)("h5",{id:"example-3"},"Example 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.kt)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"array"))))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);