"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[62465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,c=e.defaultValue,f=e.values,b=e.groupId,k=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,I=(0,a.useState)(h),O=I[0],S=I[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var L=w[b];null!=L&&L!==O&&v.some((function(e){return e.value===L}))&&S(L)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==O&&(E(t),S(r),null!=b&&C(b,String(r)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var l,i=T.indexOf(e.currentTarget)-1;n=null!=(l=T[i])?l:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},52320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>f});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=(n(65488),n(85162),["components"]),o={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("img",{src:"/img/swipeable.gif",width:"500"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem.Swipeable\n  leftContent={(reset) => (\n    <Button\n      title=\"Info\"\n      onPress={() => reset()}\n      icon={{ name: 'info', color: 'white' }}\n      buttonStyle={{ minHeight: '100%' }}\n    />\n  )}\n  rightContent={(reset) => (\n    <Button\n      title=\"Delete\"\n      onPress={() => reset()}\n      icon={{ name: 'delete', color: 'white' }}\n      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}\n    />\n  )}\n>\n  <Icon name=\"My Icon\" />\n  <ListItem.Content>\n    <ListItem.Title>Hello Swiper</ListItem.Title>\n  </ListItem.Content>\n  <ListItem.Chevron />\n</ListItem.Swipeable>\n")))}s.isMDXComponent=!0;var u=["components"],p={id:"listitem_swipeable",title:"ListItem.Swipeable"},m=void 0,d={unversionedId:"components/listitem_swipeable",id:"version-4.0.0-rc.3/components/listitem_swipeable",title:"ListItem.Swipeable",description:"We offer a special kind of ListItem which is swipeable from both ends and allows users select an event.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/ListItem.Swipeable.mdx",sourceDirName:"components",slug:"/components/listitem_swipeable",permalink:"/docs/4.0.0-rc.3/components/listitem_swipeable",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/ListItem.Swipeable.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"listitem_swipeable",title:"ListItem.Swipeable"},sidebar:"docs",previous:{title:"ListItem.Subtitle",permalink:"/docs/4.0.0-rc.3/components/listitem_subtitle"},next:{title:"ListItem.Title",permalink:"/docs/4.0.0-rc.3/components/listitem_title"}},c={},f=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],b={toc:f};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We offer a special kind of ListItem which is swipeable from both ends and allows users select an event."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListItem } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(s,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"listitem#props"},"ListItem")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animation")),(0,l.kt)("td",{parentName:"tr",align:null},"Animated.TimingAnimationConfig"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object with duration 350ms and type timing")),(0,l.kt)("td",{parentName:"tr",align:null},"Decide whether to show animation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftContent")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode or resetCallback => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Left Content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of left container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ScreenWidth / 3")),(0,l.kt)("td",{parentName:"tr",align:null},"Width to swipe left.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeBegin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(direction: left")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"right) => unknown")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for swipe in either direction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"() => unknown"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for swipe end.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightContent")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode or resetCallback => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Right Content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of right container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ScreenWidth / 3")),(0,l.kt)("td",{parentName:"tr",align:null},"Width to swipe right."))))))}k.isMDXComponent=!0}}]);