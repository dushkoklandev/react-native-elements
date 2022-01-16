"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9138,1976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,b=c["".concat(p,".").concat(s)]||c[s]||d[s]||i;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77455:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>m,metadata:()=>u,toc:()=>d,default:()=>s});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(53417),o=["components"],p={id:"tabview",title:"TabView",slug:"/tabview"},m=void 0,u={unversionedId:"main/tabview",id:"version-4.0.0-beta.0/main/tabview",title:"TabView",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/TabView.md",sourceDirName:"main",slug:"/tabview",permalink:"/docs/tabview",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/TabView.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"tabview",title:"TabView",slug:"/tabview"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"Tab",permalink:"/docs/tab"},next:{title:"Text",permalink:"/docs/text"}},d=[{value:"Components",id:"components",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"TabView",id:"tabview",children:[],level:3},{value:"TabView.Item",id:"tabviewitem",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"TabView",id:"tabview-1",children:[{value:"animationConfig",id:"animationconfig",children:[],level:4},{value:"animationType",id:"animationtype",children:[],level:4},{value:"onChange",id:"onchange",children:[],level:4},{value:"value",id:"value",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"tabItemContainerStyle",id:"tabitemcontainerstyle",children:[],level:4}],level:3},{value:"TabView.Item",id:"tabviewitem-1",children:[],level:3}],level:2}],c={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),(0,i.kt)("p",null,"TabView enables swipeable tabs."),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tabviewitem"},"TabView.Item"),"\nThey are individual item of the parent Tab.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(l.default,{mdxType:"Usage"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"tabview"},"TabView"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#animationconfig"},"animationConfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#animationtype"},"animationType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#onchange"},"onChange")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#value"},"value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#containerstyle"},"tabItemContainerStyle"))),(0,i.kt)("h3",{id:"tabviewitem"},"TabView.Item"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"tabview-1"},"TabView"),(0,i.kt)("h4",{id:"animationconfig"},"animationConfig"),(0,i.kt)("p",null,"Define the animation configurations."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'Omit<SpringAnimationConfig and TimingAnimationConfig, "toValue">'),(0,i.kt)("td",{parentName:"tr",align:null},"{}")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"animationtype"},"animationType"),(0,i.kt)("p",null,"Choose the animation type among ",(0,i.kt)("inlineCode",{parentName:"p"},"spring")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"timing"),". This is visible when there is tab change."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"timing" or "spring"'),(0,i.kt)("td",{parentName:"tr",align:null},"spring")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"onchange"},"onChange"),(0,i.kt)("p",null,"On Index Change Callback."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(value: number) => any"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"value"},"value"),(0,i.kt)("p",null,"Child position index value."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"0")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,i.kt)("p",null,"Styling for Component container."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"tabitemcontainerstyle"},"tabItemContainerStyle"),(0,i.kt)("p",null,"Styling for TabView.Item Component container."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tabviewitem-1"},"TabView.Item"),(0,i.kt)("p",null,"None"))}s.isMDXComponent=!0},53417:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>m,toc:()=>u,default:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p=void 0,m={unversionedId:"main/usage/TabView/TabView",id:"version-4.0.0-beta.0/main/usage/TabView/TabView",title:"TabView",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/TabView/TabView.md",sourceDirName:"main/usage/TabView",slug:"/main/usage/TabView/",permalink:"/docs/main/usage/TabView/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/TabView/TabView.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},u=[],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}))}c.isMDXComponent=!0}}]);