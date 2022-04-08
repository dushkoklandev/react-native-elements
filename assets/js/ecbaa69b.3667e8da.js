"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3468],{43607:(e,t,n)=>{n(67294)},71871:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},15236:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(83117),r=n(67294),o=n(5730),l=n(34875),i=n(86010);const s="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),g=k.tabGroupChoices,w=k.setTabGroupChoices,x=(0,r.useState)(b),T=x[0],O=x[1],N=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=g[m];null!=_&&_!==T&&f.some((function(e){return e.value===_}))&&O(_)}var j=function(e){var t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==T&&(E(t),O(a),null!=m&&w(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.currentTarget)+1;n=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.currentTarget)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},v)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},1939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=(n(51402),n(88746)),i=(n(15236),n(71871),n(97735)),s=(n(43607),["components"]),c={id:"overview",title:"Overview",slug:"/",hide_table_of_contents:!0},u=void 0,d={unversionedId:"overview",id:"version-4.0.0-rc.1/overview",title:"Overview",description:"The aim of React Native Elements is to provide an all-in-one UI kit for",source:"@site/versioned_docs/version-4.0.0-rc.1/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/index.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"overview",title:"Overview",slug:"/",hide_table_of_contents:!0},sidebar:"docs",next:{title:"Installation",permalink:"/docs/installation"}},p={},m=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Using themed components",id:"using-themed-components",level:2}],v={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{className:"admonition-content"},"The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native. There are many great ui components made by developers all around open source. React Native Elements takes the hassle of assembling these packages together by giving you a ready made kit with consistent api and look and feel.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("div",{class:"container",style:{padding:0}},(0,o.kt)("div",{class:"row is-multiline"},(0,o.kt)("div",{class:"col col--6"},(0,o.kt)(l.Z,{class:"card shadow--md",to:"docs/installation#using-expo",style:{height:"100%"},mdxType:"Link"},(0,o.kt)("div",{class:"card__body position-relative"},(0,o.kt)("h4",null,"Expo CLI",(0,o.kt)(i.ipR,{class:"card__icon",mdxType:"SiExpo"})),(0,o.kt)("p",null,"Guide to install with expo-cli")))),(0,o.kt)("div",{class:"col col--6"},(0,o.kt)(l.Z,{class:"card shadow--md",to:"docs/installation",style:{height:"100%"},mdxType:"Link"},(0,o.kt)("div",{class:"card__body  position-relative"},(0,o.kt)("h4",null,"React Native CLI ",(0,o.kt)(i.pNp,{class:"card__icon",mdxType:"SiReact"})),(0,o.kt)("p",null,"Guide to install with react-native cli")))),(0,o.kt)("div",{class:"col col--6"},(0,o.kt)(l.Z,{class:"card shadow--md",to:"docs/installation#using-on-web",style:{height:"100%"},mdxType:"Link"},(0,o.kt)("div",{class:"card__body position-relative"},(0,o.kt)("h4",null,"React JS ",(0,o.kt)(i.pNp,{class:"card__icon",mdxType:"SiReact"})),(0,o.kt)("p",null,"Guide to install with ",(0,o.kt)("code",null,"create-react-app"))))),(0,o.kt)("div",{class:"col col--6"},(0,o.kt)(l.Z,{class:"card shadow--md",to:"#",style:{height:"100%"},mdxType:"Link"},(0,o.kt)("div",{class:"card__body position-relative"},(0,o.kt)("h4",null,"Next JS (comming soon) ",(0,o.kt)(i.Xou,{class:"card__icon",mdxType:"SiNextdotjs"})),(0,o.kt)("p",null,"Guide to install with create-next-app")))))),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"Here's a quick example to get you started, ",(0,o.kt)("strong",{parentName:"p"},"it's literally all you need:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Button } from '@rneui/base';\n\nconst App = () => {\n  return <Button title=\"Hello World\" />;\n};\n")),(0,o.kt)("h2",{id:"using-themed-components"},"Using themed components"),(0,o.kt)("p",null,"The components in this library have a single theme running through them. From\none central location, we can update the colours used in all components. While\nthis was great for the developers of the library, the actual users also needed a\nway to use this feature."),(0,o.kt)("p",null,"But why stop at colours? Why not allow the props of every component to be\ndefined in one central place? And so the idea behind theming with React Native\nElements was born!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Button, ThemeProvider } from '@rneui/themed';\n\nconst MyApp = () => {\n  return (\n    <ThemeProvider>\n      <Button title=\"Hey!\" />\n    </ThemeProvider>\n  );\n};\n")),(0,o.kt)("p",null,"To customize the theme, or use it within your own components, be sure to check\nthe docs on ",(0,o.kt)("a",{parentName:"p",href:"customization"},"Customization"),"."))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);