"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[40217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),u=n(7094),c=n(12466);const s="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,b=e.values,f=e.groupId,v=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.U)(),w=h.tabGroupChoices,T=h.setTabGroupChoices,O=(0,r.useState)(N),I=O[0],C=O[1],E=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=w[f];null!=S&&S!==I&&k.some((function(e){return e.value===S}))&&C(S)}var Z=function(e){var t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==I&&(x(t),C(a),null!=f&&T(f,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var l,o=E.indexOf(e.currentTarget)-1;n=null!=(l=E[o])?l:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:Z,onClick:Z},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function d(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>u});var a=n(67294),r=n(35742),l=n(14330),o=n(98576),i=n(61720),u=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},7257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(37047),i=(n(65488),n(85162),["components"]),u={id:"tab_item",title:"Tab.Item"},c=void 0,s={unversionedId:"components/tab_item",id:"version-4.0.0-rc.6/components/tab_item",title:"Tab.Item",description:"They are individual item of the parent Tab.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/Tab.Item.mdx",sourceDirName:"components",slug:"/components/tab_item",permalink:"/docs/components/tab_item",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/Tab.Item.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"tab_item",title:"Tab.Item"},sidebar:"docs",previous:{title:"Tab",permalink:"/docs/components/tab"},next:{title:"TabView",permalink:"/docs/components/tabview"}},p={},m=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Active Tab Items",id:"active-tab-items",level:3},{value:"Props",id:"props",level:2}],d={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"They are individual item of the parent Tab.\nThey are clickable and allows users to click and change Tab."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Tab } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"active-tab-items"},"Active Tab Items"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<Tab.Item\n  containerStyle={(active) => ({\n    backgroundColor: active ? "red" : undefined,\n  })}\n>\n  Tab\n</Tab.Item>\n')),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"button#props"},"Button")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"active")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to define if TabItem is active.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buttonStyle")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ViewStyle or (active: boolean) => ViewStyle")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Additional button style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"ViewStyle or (active: boolean) => ViewStyle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Additional Styling for button container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"ViewStyle or (active: boolean) => ViewStyle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Additional Styling for Icon Component container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"titleStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"TextStyle or (active: boolean) => TextStyle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Additional button title style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"primary")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Define the background Variant."))))))}b.isMDXComponent=!0},61720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);