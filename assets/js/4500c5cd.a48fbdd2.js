"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[51378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,O=(0,a.useState)(N),E=O[0],I=O[1],P=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=w[f];null!=x&&x!==E&&k.some((function(e){return e.value===x}))&&I(x)}var _=function(e){var t=e.currentTarget,n=P.indexOf(t),r=k[n].value;r!==E&&(T(t),I(r),null!=f&&C(f,String(r)))},j=function(e){var t,n=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var l,o=P.indexOf(e.currentTarget)-1;n=null!=(l=P[o])?l:P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return P.push(e)},onKeyDown:j,onClick:_},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},9024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=(n(65488),n(85162),["components"]),i={id:"listitem_chevron",title:"ListItem.Chevron"},s=void 0,u={unversionedId:"components/listitem_chevron",id:"version-4.0.0-rc.3/components/listitem_chevron",title:"ListItem.Chevron",description:"This allows adding a Chevron Icon(arrow) to the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/ListItem.Chevron.mdx",sourceDirName:"components",slug:"/components/listitem_chevron",permalink:"/docs/4.0.0-rc.3/components/listitem_chevron",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/ListItem.Chevron.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"listitem_chevron",title:"ListItem.Chevron"},sidebar:"docs",previous:{title:"ListItem.CheckBox",permalink:"/docs/4.0.0-rc.3/components/listitem_checkbox"},next:{title:"ListItem.Content",permalink:"/docs/4.0.0-rc.3/components/listitem_content"}},p={},c=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This allows adding a Chevron Icon(arrow) to the ListItem.\nThis, Receives all ",(0,l.kt)("a",{parentName:"p",href:"icon#props"},"Icon")," props."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListItem } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"icon#props"},"Icon"),", ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/text#props"},"Text")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPress")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null}))))))}m.isMDXComponent=!0}}]);