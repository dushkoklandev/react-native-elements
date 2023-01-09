"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[67172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),o=n(67294),a=n(86010),l=n(72389),i=n(67392),c=n(7094),s=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,d=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,c.U)(),w=x.tabGroupChoices,O=x.setTabGroupChoices,E=(0,o.useState)(g),T=E[0],C=E[1],_=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=w[v];null!=j&&j!==T&&y.some((function(e){return e.value===j}))&&C(j)}var N=function(e){var t=e.currentTarget,n=_.indexOf(t),r=y[n].value;r!==T&&(I(t),C(r),null!=v&&O(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":var r,o=_.indexOf(e.currentTarget)+1;n=null!=(r=_[o])?r:_[0];break;case"ArrowLeft":var a,l=_.indexOf(e.currentTarget)-1;n=null!=(a=_[l])?a:_[_.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},b)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:P,onClick:N},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},88044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=(n(65488),n(85162),n(32408),["components"]),i={id:"listitem_checkbox",title:"ListItem.CheckBox"},c=void 0,s={unversionedId:"components/listitem_checkbox",id:"version-4.0.0-rc.2/components/listitem_checkbox",title:"ListItem.CheckBox",description:"This allows adding CheckBox to the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/ListItem.CheckBox.mdx",sourceDirName:"components",slug:"/components/listitem_checkbox",permalink:"/docs/4.0.0-rc.2/components/listitem_checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/ListItem.CheckBox.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"listitem_checkbox",title:"ListItem.CheckBox"},sidebar:"docs",previous:{title:"ListItem.ButtonGroup",permalink:"/docs/4.0.0-rc.2/components/listitem_buttongroup"},next:{title:"ListItem.Chevron",permalink:"/docs/4.0.0-rc.2/components/listitem_chevron"}},u={},p=[{value:"Props",id:"props",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This allows adding CheckBox to the ListItem.\nThis, Receives all ",(0,a.kt)("a",{parentName:"p",href:"checkbox#props"},"CheckBox")," props."),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Includes all ",(0,a.kt)("a",{parentName:"p",href:"checkbox#props"},"CheckBox")," props.")))}d.isMDXComponent=!0}}]);