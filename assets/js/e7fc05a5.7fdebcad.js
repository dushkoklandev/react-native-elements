"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[44720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(s,".").concat(p)]||d[p]||c[p]||l;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,p=e.defaultValue,f=e.values,k=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,E=(0,r.useState)(N),I=E[0],S=E[1],O=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var Z=w[k];null!=Z&&Z!==I&&v.some((function(e){return e.value===Z}))&&S(Z)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==I&&(T(t),S(a),null!=k&&C(k,String(a)))},L=function(e){var t,n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;n=null!=(l=O[i])?l:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return O.push(e)},onKeyDown:L,onClick:x},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function p(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>s});var a=n(67294),r=n(35742),l=n(14330),i=n(98576),o=n(61720),s=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(63366),r=n(87462),l=n(67294),i=n(10407),o=n(86010),s=(n(95999),n(52263)),u=n(91262),m=n(66412);const c="playgroundContainer_TGbA",d="playgroundEditor_PvJ1",p="playgroundPreview_bb8I",f="toggleContainer_ZZiH",k="toggleIcon_OnrQ",g="showCode_O0Od";var b=n(72389),v=n(5434),h=["children","transformCode"];function N(){return l.createElement("div",null,"Loading...")}function y(e){var t=(0,b.Z)(),n=(0,l.useContext)(i.L2),a=n.code,o=n.language,s=n.theme,u=n.disabled,m=n.onChange;return l.createElement(i.uz,(0,r.Z)({key:String(t),code:a,language:o,theme:s,disabled:u,onChange:m},e,{className:d}))}function w(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,r=(e.wrapper,l.useState(t)),s=r[0],m=r[1],c=function(){m((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:p},l.createElement(u.Z,{fallback:l.createElement(N,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(i.i5,null),l.createElement(i.IF,null),l.createElement("div",{className:f},l.createElement("div",{className:(0,o.Z)(k),onClick:c},l.createElement(v.xoN,null),l.createElement("span",{className:g},s?"Hide":"Show"," Code"))))}))),s&&l.createElement(y,{preImports:a,showCode:s}))}function C(e){var t=e.children,n=(e.transformCode,(0,a.Z)(e,h)),o=((0,s.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,m.p)());return l.createElement("div",{className:c},l.createElement(i.nu,(0,r.Z)({code:t.replace(/\n$/,""),theme:o},n),l.createElement(w,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(32408),l=n(13925),i=n(53211),o=n(83279);const s=Object.assign({React:a,LinearGradient:o.Z},r,l,i,a)},26549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>h,frontMatter:()=>p,metadata:()=>k,toc:()=>b});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(37047),o=(n(65488),n(85162),n(96711)),s=n(47516),u=["components"],m={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("img",{src:"/img/swipeable.gif",width:"500"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem.Swipeable\n  leftContent={(reset) => (\n    <Button\n      title=\"Info\"\n      onPress={() => reset()}\n      icon={{ name: 'info', color: 'white' }}\n      buttonStyle={{ minHeight: '100%' }}\n    />\n  )}\n  rightContent={(reset) => (\n    <Button\n      title=\"Delete\"\n      onPress={() => reset()}\n      icon={{ name: 'delete', color: 'white' }}\n      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}\n    />\n  )}\n>\n  <Icon name=\"My Icon\" />\n  <ListItem.Content>\n    <ListItem.Title>Hello Swiper</ListItem.Title>\n  </ListItem.Content>\n  <ListItem.Chevron />\n</ListItem.Swipeable>\n")))}c.isMDXComponent=!0;var d=["components"],p={id:"listitem_swipeable",title:"ListItem.Swipeable"},f=void 0,k={unversionedId:"components/listitem_swipeable",id:"components/listitem_swipeable",title:"ListItem.Swipeable",description:"We offer a special kind of ListItem which is swipeable from both ends and allows users select an event.",source:"@site/docs/components/ListItem.Swipeable.mdx",sourceDirName:"components",slug:"/components/listitem_swipeable",permalink:"/docs/next/components/listitem_swipeable",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/ListItem.Swipeable.mdx",tags:[],version:"current",frontMatter:{id:"listitem_swipeable",title:"ListItem.Swipeable"},sidebar:"docs",previous:{title:"ListItem.Subtitle",permalink:"/docs/next/components/listitem_subtitle"},next:{title:"ListItem.Title",permalink:"/docs/next/components/listitem_title"}},g={},b=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:b};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"We offer a special kind of ListItem which is swipeable from both ends and allows users select an event."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"import { ListItem } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(s.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"ListItemSwipeable"))),(0,l.kt)(c,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"listitem#props"},"ListItem")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animation")),(0,l.kt)("td",{parentName:"tr",align:null},"Animated.TimingAnimationConfig"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object with duration 350ms and type timing")),(0,l.kt)("td",{parentName:"tr",align:null},"Decide whether to show animation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftContent")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode or resetCallback => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Left Content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of left container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ScreenWidth / 3")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of swipe left container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minSlideWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ScreenWidth / 3")),(0,l.kt)("td",{parentName:"tr",align:null},"minimum horizontal distance to open content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeBegin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(direction: left")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"right) => unknown")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for swipe in either direction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"() => unknown"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for swipe end.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightContent")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode or resetCallback => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Right Content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of right container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ScreenWidth / 3")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of swipe right container."))))))}h.isMDXComponent=!0}}]);