"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[86409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),c=n(67392),i=n(7094),u=n(12466);const s="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,d=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,c.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),E=x.tabGroupChoices,w=x.setTabGroupChoices,C=(0,a.useState)(g),O=C[0],I=C[1],T=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var N=E[v];null!=N&&N!==O&&y.some((function(e){return e.value===N}))&&I(N)}var _=function(e){var t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==O&&(Z(t),I(r),null!=v&&w(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var o,l=T.indexOf(e.currentTarget)-1;n=null!=(o=T[l])?o:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(67294),a=n(35742),o=n(14330),l=n(98576),c=n(61720),i=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+c.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(87462),a=n(63366),o=n(67294),l=n(10407),c=n(86010),i=(n(95999),n(52263)),u=n(91262),s=n(66412);const m="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",d="playgroundPreview_bb8I",f="toggleIcon_OnrQ";var v=n(72389),h=n(5434),b=["children","transformCode"];function y(){return o.createElement("div",null,"Loading...")}function k(){var e=(0,v.Z)();return o.createElement(l.uz,{key:String(e),className:p})}function g(){var e=o.useState(!1),t=e[0],n=e[1],r=o.useState(void 0),a=(r[0],r[1],function(){n((function(e){return!e}))});return o.createElement(o.Fragment,null,o.createElement("div",{className:d},o.createElement(u.Z,{fallback:o.createElement(y,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.i5,null),o.createElement(l.IF,null),o.createElement("div",{className:(0,c.Z)(f)},o.createElement(h.xoN,{onClick:a})," "))}))),t&&o.createElement(o.Fragment,null," ",o.createElement(k,null)))}function x(e){var t=e.children,n=e.transformCode,c=(0,a.Z)(e,b),u=((0,i.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return o.createElement("div",{className:m},o.createElement(l.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:n||function(e){return e},theme:u},c),o.createElement(o.Fragment,null,o.createElement(g,null))))}},56922:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(32408),o=n(13925),l=n(77321),c=n(83279);const i=Object.assign({React:r,LinearGradient:c.Z},a,o,l,{Switch:function(){var e=r.useState(!1),t=e[0],n=e[1];return r.createElement(o.Switch,{value:t,onValueChange:n})}},r)},73553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(37047),c=(n(65488),n(85162),n(96711)),i=n(47516),u=["components"],s={id:"listitem_checkbox",title:"ListItem.CheckBox"},m=void 0,p={unversionedId:"components/listitem_checkbox",id:"components/listitem_checkbox",title:"ListItem.CheckBox",description:"This allows adding CheckBox to the ListItem.",source:"@site/docs/components/ListItem.CheckBox.mdx",sourceDirName:"components",slug:"/components/listitem_checkbox",permalink:"/docs/next/components/listitem_checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/ListItem.CheckBox.mdx",tags:[],version:"current",frontMatter:{id:"listitem_checkbox",title:"ListItem.CheckBox"},sidebar:"docs",previous:{title:"ListItem.ButtonGroup",permalink:"/docs/next/components/listitem_buttongroup"},next:{title:"ListItem.Chevron",permalink:"/docs/next/components/listitem_chevron"}},d={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"This allows adding CheckBox to the ListItem.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"checkbox#props"},"CheckBox")," props."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(c.Z,{mdxType:"CodeBlock"},"import { ListItem } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(i.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(c.Z,{mdxType:"CodeBlock"},"ListItemCheckBox"))),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"checkbox#props"},"CheckBox")," props.")))}h.isMDXComponent=!0}}]);