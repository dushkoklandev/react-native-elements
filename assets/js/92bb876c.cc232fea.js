"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6347],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(v,l(l({ref:t},p),{},{components:a})):n.createElement(v,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},82895:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(72389),l=a(79443);const o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(15779),c=a(86010);const p="tabItem_vU9c";function u(e){var t,a,i,l=e.lazy,u=e.block,m=e.defaultValue,d=e.values,v=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=o(),y=N.tabGroupChoices,w=N.setTabGroupChoices,x=(0,r.useState)(b),T=x[0],E=x[1],O=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=y[v];null!=C&&C!==T&&f.some((function(e){return e.value===C}))&&E(C)}var P=function(e){var t=e.currentTarget,a=O.indexOf(t),n=f[a].value;n!==T&&(I(t),E(n),null!=v&&w(v,n))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:P,onClick:P},i,{className:(0,c.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},58230:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>m,toc:()=>d,default:()=>h});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(82895),o=a(58215),s=a(44996),c=["components"],p={id:"getting_started",title:"Getting Started",slug:"/"},u=void 0,m={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"The aim of React Native Elements is to provide an all-in-one UI kit for creating",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/getting_started.md",tags:[],version:"current",frontMatter:{id:"getting_started",title:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Usage",permalink:"/docs/next/overview"}},d=[{value:"Stable",id:"stable",children:[],level:3},{value:"Bleeding Edge",id:"bleeding-edge",children:[],level:3},{value:"Install react-native-vector-icons",id:"install-react-native-vector-icons",children:[],level:3},{value:"Install react-native-safe-area-context",id:"install-react-native-safe-area-context",children:[],level:3}],v={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The aim of React Native Elements is to provide an all-in-one UI kit for creating\napps in react native. There are many great ui components made by developers all\naround open source. React Native Elements takes the hassle of assembling these\npackages together by giving you a ready made kit with consistent api and look\nand feel."))),(0,i.kt)("h3",{id:"stable"},"Stable"),(0,i.kt)(l.Z,{groupId:"component",defaultValue:"base",values:[{label:"Base",value:"base"},{label:"Themed",value:"themed"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"base",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-native-elements/base\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-native-elements/base\n"))),(0,i.kt)(o.Z,{value:"themed",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-native-elements/themed\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-native-elements/themed\n")))),(0,i.kt)("h3",{id:"bleeding-edge"},"Bleeding Edge"),(0,i.kt)(l.Z,{groupId:"component",defaultValue:"base",values:[{label:"Base",value:"base"},{label:"Themed",value:"themed"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"base",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install https://github.com/react-native-elements/react-native-elements#base\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add https://github.com/react-native-elements/react-native-elements#base\n"))),(0,i.kt)(o.Z,{value:"themed",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install https://github.com/react-native-elements/react-native-elements#themed\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add https://github.com/react-native-elements/react-native-elements#themed\n")))),(0,i.kt)("h3",{id:"install-react-native-vector-icons"},"Install react-native-vector-icons"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://expo.io"},"Expo")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"),"\nprojects include ",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," out of the box, hence this step can be skipped."),(0,i.kt)("p",null,"If your project is a standard React Native project created using\n",(0,i.kt)("inlineCode",{parentName:"p"},"react-native init")," (it should have an ios/android directory), then you need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,i.kt)("p",null,"Or if you encounter the following error."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you see the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNMET PEER DEPENDENCY")," warning for ",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," like below, you can ignore it as ",(0,i.kt)("em",{parentName:"p"},"react-native-vector-icons")," is already installed by ",(0,i.kt)("em",{parentName:"p"},"expo")," or ",(0,i.kt)("em",{parentName:"p"},"crna"),"."),(0,i.kt)("img",{alt:"React Native Vector Icons Unmet Peer Dependency",src:(0,s.Z)("img/peer-dep-error.png")}))),(0,i.kt)("p",null,"Otherwise run the following command:"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manual linking of react-native-vector-icons is not necessary if you're using ",(0,i.kt)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native unlink react-native-vector-icons")," and the process will run as expected."))),(0,i.kt)(l.Z,{defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-vector-icons\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-vector-icons\n")))),(0,i.kt)("p",null,"Link the dependency"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-vector-icons\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you have any issues installing react-native-vector-icons, check out their\ninstallation guide\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/oblador/react-native-vector-icons#installation"},"here")," or\ndebug it using\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/react-native-elements/react-native-elements/issues/503"},"this issue"),".")),(0,i.kt)("h3",{id:"install-react-native-safe-area-context"},"Install react-native-safe-area-context"),(0,i.kt)("p",null,"If you have already installed ",(0,i.kt)("strong",{parentName:"p"},"react-native-safe-area-context")," as a dependency for\nyour project you can skip this step. Otherwise run the following command:"),(0,i.kt)(l.Z,{defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-safe-area-context\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-safe-area-context\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Useful information.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manual linking of react-native-safe-area-context is not necessary if you're using ",(0,i.kt)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native unlink react-native-safe-area-context")," and the process will run as expected."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"react-native link react-native-safe-area-context\n")),(0,i.kt)("p",null,"It is required to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaProvider")," to the outside of the app. The suggested way to do this is\nthe following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { SafeAreaProvider } from 'react-native-safe-area-context';\n\nfunction App() {\n  return <SafeAreaProvider>...</SafeAreaProvider>;\n}\n")))}h.isMDXComponent=!0}}]);