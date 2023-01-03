"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[54465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,v=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),o=n(86010),r=n(35281),i=n(95999);const l="admonition_LlT9",c="admonitionHeading_tbUL",s="admonitionIcon_kALy",u="admonitionContent_S0QG";var d={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){var t,n=function(e){var t=a.Children.toArray(e),n=t.find((function(e){var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:o}}(e.children),o=n.mdxAdmonitionTitle,r=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:o,children:r})}function v(e){var t=p(e),n=t.children,i=t.type,v=t.title,f=t.icon,h=function(e){var t,n=null!=(t=m[e])?t:e;return d[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),d.info)}(i),b=null!=v?v:h.label,y=h.iconComponent,g=null!=f?f:a.createElement(y,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,l)},a.createElement("div",{className:c},a.createElement("span",{className:s},g),b),a.createElement("div",{className:u},n))}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),o=n(67294),r=n(86010),i=n(72389),l=n(67392),c=n(7094),s=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,p=e.defaultValue,v=e.values,f=e.groupId,h=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),E=w.tabGroupChoices,T=w.setTabGroupChoices,x=(0,o.useState)(k),N=x[0],_=x[1],C=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=E[f];null!=Z&&Z!==N&&y.some((function(e){return e.value===Z}))&&_(Z)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),a=y[n].value;a!==N&&(O(t),_(a),null!=f&&T(f,String(a)))},z=function(e){var t,n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":var a,o=C.indexOf(e.currentTarget)+1;n=null!=(a=C[o])?a:C[0];break;case"ArrowLeft":var r,i=C.indexOf(e.currentTarget)-1;n=null!=(r=C[i])?r:C[C.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},h)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:z,onClick:j},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},27168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=(n(44996),n(39960)),l=(n(65488),n(85162),n(97735)),c=(n(23612),["components"]),s={id:"overview",title:"Overview",slug:"/",hide_table_of_contents:!0},u=void 0,d={unversionedId:"overview",id:"version-4.0.0-rc.4/overview",title:"Overview",description:"The aim of React Native Elements is to provide an all-in-one UI kit for",source:"@site/versioned_docs/version-4.0.0-rc.4/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/4.0.0-rc.4/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.4/index.mdx",tags:[],version:"4.0.0-rc.4",frontMatter:{id:"overview",title:"Overview",slug:"/",hide_table_of_contents:!0},sidebar:"docs",next:{title:"Installation",permalink:"/docs/4.0.0-rc.4/installation"}},m={},p=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Using themed components",id:"using-themed-components",level:2}],v={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{className:"admonition-content"},"The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native. There are many great ui components made by developers all around open source. React Native Elements takes the hassle of assembling these packages together by giving you a ready made kit with consistent api and look and feel.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("div",{class:"container",style:{padding:0}},(0,r.kt)("div",{class:"row is-multiline"},(0,r.kt)("div",{class:"col col--6"},(0,r.kt)(i.Z,{class:"card shadow--md",to:"docs/installation#using-expo",style:{height:"100%"},mdxType:"Link"},(0,r.kt)("div",{class:"card__body position-relative"},(0,r.kt)("h4",null,"Expo CLI",(0,r.kt)(l.ipR,{class:"card__icon",mdxType:"SiExpo"})),(0,r.kt)("p",null,"Guide to install with expo-cli")))),(0,r.kt)("div",{class:"col col--6"},(0,r.kt)(i.Z,{class:"card shadow--md",to:"docs/installation",style:{height:"100%"},mdxType:"Link"},(0,r.kt)("div",{class:"card__body  position-relative"},(0,r.kt)("h4",null,"React Native CLI ",(0,r.kt)(l.pNp,{class:"card__icon",mdxType:"SiReact"})),(0,r.kt)("p",null,"Guide to install with react-native cli")))),(0,r.kt)("div",{class:"col col--6"},(0,r.kt)(i.Z,{class:"card shadow--md",to:"docs/installation#using-on-web",style:{height:"100%"},mdxType:"Link"},(0,r.kt)("div",{class:"card__body position-relative"},(0,r.kt)("h4",null,"React JS ",(0,r.kt)(l.pNp,{class:"card__icon",mdxType:"SiReact"})),(0,r.kt)("p",null,"Guide to install with ",(0,r.kt)("code",null,"create-react-app"))))),(0,r.kt)("div",{class:"col col--6"},(0,r.kt)(i.Z,{class:"card shadow--md",to:"#",style:{height:"100%"},mdxType:"Link"},(0,r.kt)("div",{class:"card__body position-relative"},(0,r.kt)("h4",null,"Next JS (comming soon) ",(0,r.kt)(l.Xou,{class:"card__icon",mdxType:"SiNextdotjs"})),(0,r.kt)("p",null,"Guide to install with create-next-app")))))),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"Here's a quick example to get you started, ",(0,r.kt)("strong",{parentName:"p"},"it's literally all you need:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Button } from '@rneui/base';\n\nconst App = () => {\n  return <Button title=\"Hello World\" />;\n};\n")),(0,r.kt)("h2",{id:"using-themed-components"},"Using themed components"),(0,r.kt)("p",null,"The components in this library have a single theme running through them. From\none central location, we can update the colours used in all components. While\nthis was great for the developers of the library, the actual users also needed a\nway to use this feature."),(0,r.kt)("p",null,"But why stop at colours? Why not allow the props of every component to be\ndefined in one central place? And so the idea behind theming with React Native\nElements was born!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Button, ThemeProvider } from '@rneui/themed';\n\nconst MyApp = () => {\n  return (\n    <ThemeProvider>\n      <Button title=\"Hey!\" />\n    </ThemeProvider>\n  );\n};\n")),(0,r.kt)("p",null,"To customize the theme, or use it within your own components, be sure to check\nthe docs on ",(0,r.kt)("a",{parentName:"p",href:"customization"},"Customization"),"."))}f.isMDXComponent=!0}}]);