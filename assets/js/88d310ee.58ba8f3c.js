"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63934,58435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72360:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),i=n(72389),o=n(67392),l=n(7094),s=n(12466),c=n(86010);const p="tabList_uSqn",u="tabItem_LplD";function m(e){var t,n,i,m=e.lazy,d=e.block,h=e.defaultValue,A=e.values,v=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),C=null!=A?A:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(C,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==b&&!C.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+C.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var D=(0,l.U)(),k=D.tabGroupChoices,w=D.setTabGroupChoices,N=(0,r.useState)(b),B=N[0],E=N[1],x=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=k[v];null!=T&&T!==B&&C.some((function(e){return e.value===T}))&&E(T)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),a=C[n].value;a!==B&&(O(t),E(a),null!=v&&w(v,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,c.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},f)},C.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:P,onClick:P},i,{className:(0,c.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":B===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(g.filter((function(e){return e.props.value===B}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==B})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},88780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s=void 0,c={unversionedId:"component_usage/Chip",id:"component_usage/Chip",title:"Chip",description:"LinearGradient Usage",source:"@site/docs/component_usage/Chip.mdx",sourceDirName:"component_usage",slug:"/component_usage/Chip",permalink:"/docs/next/component_usage/Chip",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/component_usage/Chip.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"LinearGradient Usage",id:"lineargradient-usage",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,i.kt)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,i.kt)("p",null,"For react-native-cli users, make sure to follow the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Chip } from '@rneui/themed';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Chip\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Chip","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Chip%2C%20withTheme%2C%20colors%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20ChipsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Chips%3A%20React.FunctionComponent%3CChipsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.contentView%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20'center'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%20title%3D%22Solid%20Chip%22%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Disabled%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Outlined%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Outlined%20%26%20Disabled%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Left%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'bluetooth'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Right%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'close'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Pressable%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'bluetooth'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20colors.primary2%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Icon%20chip%20was%20pressed!')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Pressable%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'close'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20colors.primary2%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Icon%20chip%20was%20pressed!')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AcontentView%3A%20%7B%0A%20%20flex%3A%201%2C%0A%20%20marginTop%3A%2020%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20withTheme(Chips%2C%20'')%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0},53500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=(n(9877),n(72360),n(88780)),l=["components"],s={id:"chip",title:"Chip"},c=void 0,p={unversionedId:"components/chip",id:"components/chip",title:"Chip",description:"Chips are compact elements that represent an input, attribute, or action.",source:"@site/docs/components/Chip.mdx",sourceDirName:"components",slug:"/components/chip",permalink:"/docs/next/components/chip",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Chip.mdx",tags:[],version:"current",frontMatter:{id:"chip",title:"Chip"},sidebar:"docs",previous:{title:"CheckBox",permalink:"/docs/next/components/checkbox"},next:{title:"Dialog",permalink:"/docs/next/components/dialog"}},u={},m=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Chips are compact elements that represent an input, attribute, or action.\nThey may display text, icons, or both."),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Chip } from "@rneui/themed";\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(o.default,{mdxType:"Usage"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Includes all ",(0,i.kt)("a",{parentName:"p",href:"button#props"},"Button")," props."))),(0,i.kt)("div",{class:"table-responsive"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"solid")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"outline")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Type of button."))))))}h.isMDXComponent=!0}}]);