"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[60780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),u=n(7094),c=n(12466);const s="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,p=e.defaultValue,f=e.values,b=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.U)(),T=h.tabGroupChoices,w=h.setTabGroupChoices,C=(0,r.useState)(N),E=C[0],O=C[1],I=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var S=T[b];null!=S&&S!==E&&y.some((function(e){return e.value===S}))&&O(S)}var Z=function(e){var t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==E&&(x(t),O(a),null!=b&&w(b,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var l,o=I.indexOf(e.currentTarget)-1;n=null!=(l=I[o])?l:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>u});var a=n(67294),r=n(35742),l=n(14330),o=n(98576),i=n(61720),u=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(63366),l=n(67294),o=n(10407),i=n(86010),u=(n(95999),n(52263)),c=n(91262),s=n(66412);const m="playgroundContainer_TGbA",d="playgroundEditor_PvJ1",p="playgroundPreview_bb8I",f="toggleIcon_OnrQ",b="showCode_O0Od";var v=n(72389),k=n(5434),y=["children","transformCode"];function g(){return l.createElement("div",null,"Loading...")}function N(){var e=(0,v.Z)();return l.createElement(o.uz,{key:String(e),className:d})}function h(e){var t=e.show_code,n=(e.openInSnack,l.useState(t)),a=n[0],r=n[1],u=function(){r((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:p},l.createElement(c.Z,{fallback:l.createElement(g,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.i5,null),l.createElement(o.IF,null),l.createElement("div",{className:(0,i.Z)(f),onClick:u},l.createElement(k.xoN,null),l.createElement("span",{className:b},a?"Hide":"Show"," Code")))}))),a&&l.createElement(N,null))}function T(e){var t=e.children,n=e.transformCode,i=(0,r.Z)(e,y),c=((0,u.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return l.createElement("div",{className:m},l.createElement(o.nu,(0,a.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e},theme:c},i),l.createElement(h,{show_code:i.show_code})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(32408),l=n(13925),o=n(77321),i=n(83279);const u=Object.assign({React:a,LinearGradient:i.Z},r,l,o,a)},94981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>f});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(37047),i=(n(65488),n(85162),n(96711)),u=n(47516),c=["components"],s={id:"tab_item",title:"Tab.Item"},m=void 0,d={unversionedId:"components/tab_item",id:"version-4.0.0-rc.7/components/tab_item",title:"Tab.Item",description:"They are individual item of the parent Tab.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/Tab.Item.mdx",sourceDirName:"components",slug:"/components/tab_item",permalink:"/docs/components/tab_item",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/Tab.Item.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"tab_item",title:"Tab.Item"},sidebar:"docs",previous:{title:"Tab",permalink:"/docs/components/tab"},next:{title:"TabView",permalink:"/docs/components/tabview"}},p={},f=[{value:"Usage",id:"usage",level:2},{value:"Active Tab Items",id:"active-tab-items",level:3},{value:"Props",id:"props",level:2}],b={toc:f};function v(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"They are individual item of the parent Tab.\nThey are clickable and allows users to click and change Tab."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"import { Tab } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(u.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"TabItem"))),(0,l.kt)("h3",{id:"active-tab-items"},"Active Tab Items"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<Tab.Item\n  containerStyle={(active) => ({\n    backgroundColor: active ? "red" : undefined,\n  })}\n>\n  Tab\n</Tab.Item>\n')),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"button#props"},"Button")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"active")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to define if TabItem is active.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buttonStyle")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ViewStyle or (active: boolean) => ViewStyle")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none")),(0,l.kt)("td",{parentName:"tr",align:null},"Additional button style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"ViewStyle or (active: boolean) => ViewStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none")),(0,l.kt)("td",{parentName:"tr",align:null},"Additional Styling for button container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dense")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none")),(0,l.kt)("td",{parentName:"tr",align:null},"Dense Tab Item")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iconContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"ViewStyle or (active: boolean) => ViewStyle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Additional Styling for Icon Component container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"titleStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"TextStyle or (active: boolean) => TextStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none")),(0,l.kt)("td",{parentName:"tr",align:null},"Additional button title style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"primary")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Define the background Variant."))))))}v.isMDXComponent=!0}}]);