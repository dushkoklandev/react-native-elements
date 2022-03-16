"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7071,189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),o=n(72389),l=n(29548),i=n(86010);const s="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,p=e.block,c=e.defaultValue,u=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=u?u:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),N=b.tabGroupChoices,D=b.setTabGroupChoices,y=(0,r.useState)(g),A=y[0],w=y[1],C=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=N[m];null!=E&&E!==A&&k.some((function(e){return e.value===E}))&&w(E)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==A&&(O(t),w(a),null!=m&&D(m,a))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return C.push(e)},onKeyDown:B,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},87994:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={},s=void 0,d={unversionedId:"component_usage/SpeedDial",id:"version-4.0.0-rc.0/component_usage/SpeedDial",title:"SpeedDial",description:"",source:"@site/versioned_docs/version-4.0.0-rc.0/component_usage/SpeedDial.mdx",sourceDirName:"component_usage",slug:"/component_usage/SpeedDial",permalink:"/docs/component_usage/SpeedDial",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/component_usage/SpeedDial.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{}},p=[],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE SpeedDial","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SpeedDial%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bopen%2C%20setOpen%5D%20%3D%20React.useState(false)%3B%0Areturn%20(%0A%20%20%3CSpeedDial%0A%20%20%20%20isOpen%3D%7Bopen%7D%0A%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20openIcon%3D%7B%7B%20name%3A%20'close'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20onOpen%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%20%20onClose%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Add%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Add%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Delete%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Delete%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSpeedDial%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0},37579:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>p,toc:()=>c,default:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=(n(9877),n(58215),n(34738),n(87994)),i=["components"],s={id:"speeddial",title:"SpeedDial"},d=void 0,p={unversionedId:"components/speeddial",id:"version-4.0.0-rc.0/components/speeddial",title:"SpeedDial",description:"When pressed, a floating action button can display three to six related actions in the form of a speed dial.",source:"@site/versioned_docs/version-4.0.0-rc.0/components/SpeedDial.mdx",sourceDirName:"components",slug:"/components/speeddial",permalink:"/docs/components/speeddial",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/components/SpeedDial.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{id:"speeddial",title:"SpeedDial"},sidebar:"docs",previous:{title:"SocialIcon",permalink:"/docs/components/socialicon"},next:{title:"SpeedDial.Action",permalink:"/docs/components/speeddial_action"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When pressed, a floating action button can display three to six related actions in the form of a speed dial.\nIf more than six actions are needed, something other than a FAB should be used to present them.\nUpon press, the FAB remains visible and emits a stack of related actions.\nIf the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(l.default,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"/docs/documentation/button#props"},"Button"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/documentation/fab#props"},"FAB")," props."))),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"backdropPressableProps")),(0,o.kt)("td",{parentName:"tr",align:null},"PressableProps"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Props for Backdrop Pressable")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"children")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactChild[]")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"SpeedDial Action as children.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isOpen")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Opens the action stack.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onClose")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be closed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onOpen")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"openIcon")),(0,o.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Icon shown on FAB when action stack is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"overlayColor")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Add overlay color to the speed dial.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"transitionDuration")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"150")),(0,o.kt)("td",{parentName:"tr",align:null},"The duration for the transition, in milliseconds."))))))}m.isMDXComponent=!0}}]);