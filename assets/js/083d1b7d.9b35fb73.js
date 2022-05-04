"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13066,98235,82563],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},71466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(21871),o=["components"],p={id:"speeddial",title:"SpeedDial",slug:"/speeddial"},d=void 0,s={unversionedId:"main/speeddial",id:"version-4.0.0-beta.0/main/speeddial",title:"SpeedDial",description:"When pressed, a floating action button can display three to six related actions in the form of a speed dial.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/SpeedDial.md",sourceDirName:"main",slug:"/speeddial",permalink:"/docs/4.0.0-beta.0/speeddial",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/SpeedDial.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"speeddial",title:"SpeedDial",slug:"/speeddial"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"SocialIcon",permalink:"/docs/4.0.0-beta.0/socialicon"},next:{title:"Switch",permalink:"/docs/4.0.0-beta.0/switch"}},c={},u=[{value:"Components",id:"components",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"SpeedDial",id:"speeddial",level:3},{value:"SpeedDial.Action",id:"speeddialaction",level:3},{value:"Reference",id:"reference",level:2},{value:"SpeedDial",id:"speeddial-1",level:3},{value:"backdropPressableProps",id:"backdroppressableprops",level:4},{value:"children",id:"children",level:4},{value:"isOpen",id:"isopen",level:4},{value:"onClose",id:"onclose",level:4},{value:"onOpen",id:"onopen",level:4},{value:"openIcon",id:"openicon",level:4},{value:"overlayColor",id:"overlaycolor",level:4},{value:"transitionDuration",id:"transitionduration",level:4},{value:"SpeedDial.Action",id:"speeddialaction-1",level:3}],m={toc:u};function k(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When pressed, a floating action button can display three to six related actions in the form of a speed dial."),(0,r.kt)("p",null,"If more than six actions are needed, something other than a FAB should be used to present them."),(0,r.kt)("p",null,"Upon press, the FAB remains visible and emits a stack of related actions."),(0,r.kt)("p",null,"If the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions."),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#speeddialaction"},"SpeedDial.Action"),"\nAdds Action to the SpeedDial.\nThis, Receieve all ",(0,r.kt)("a",{parentName:"li",href:"fab#props"},"Fab")," props.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.default,{mdxType:"Usage"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"speeddial"},"SpeedDial"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#backdroppressableprops"},"backdropPressableProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#children"},"children")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#isopen"},"isOpen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onclose"},"onClose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onopen"},"onOpen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#openicon"},"openIcon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overlaycolor"},"overlayColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transitionduration"},"transitionDuration"))),(0,r.kt)("h3",{id:"speeddialaction"},"SpeedDial.Action"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"speeddial-1"},"SpeedDial"),(0,r.kt)("h4",{id:"backdroppressableprops"},"backdropPressableProps"),(0,r.kt)("p",null,"Props for Backdrop Pressable"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"children"},"children"),(0,r.kt)("p",null,"SpeedDial Action as children."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any[] and ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"isopen"},"isOpen"),(0,r.kt)("p",null,"Opens the action stack."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onclose"},"onClose"),(0,r.kt)("p",null,"Callback fired when the component requests to be closed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"Function")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onopen"},"onOpen"),(0,r.kt)("p",null,"Callback fired when the component requests to be open."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"Function")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"openicon"},"openIcon"),(0,r.kt)("p",null,"Icon shown on FAB when action stack is open."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"overlaycolor"},"overlayColor"),(0,r.kt)("p",null,"Add overlay color to the speed dial."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"transitionduration"},"transitionDuration"),(0,r.kt)("p",null,"The duration for the transition, in milliseconds."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"150")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"speeddialaction-1"},"SpeedDial.Action"),(0,r.kt)("p",null,"None"))}k.isMDXComponent=!0},21871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(53358),o=["components"],p={},d=void 0,s={unversionedId:"main/usage/SpeedDial/SpeedDial",id:"version-4.0.0-beta.0/main/usage/SpeedDial/SpeedDial",title:"SpeedDial",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/SpeedDial/SpeedDial.md",sourceDirName:"main/usage/SpeedDial",slug:"/main/usage/SpeedDial/",permalink:"/docs/4.0.0-beta.0/main/usage/SpeedDial/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/SpeedDial/SpeedDial.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},c={},u=[],m={toc:u};function k(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"Snack"}))}k.isMDXComponent=!0},53358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],o={},p=void 0,d={unversionedId:"main/usage/SpeedDial/snack/index",id:"version-4.0.0-beta.0/main/usage/SpeedDial/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/SpeedDial/snack/index.md",sourceDirName:"main/usage/SpeedDial/snack",slug:"/main/usage/SpeedDial/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/SpeedDial/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/SpeedDial/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},s={},c=[],u={toc:c};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE SpeedDial","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SpeedDial%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bopen%2C%20setOpen%5D%20%3D%20React.useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CSpeedDial%0A%20%20%20%20%20%20isOpen%3D%7Bopen%7D%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20openIcon%3D%7B%7B%20name%3A%20'close'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20onOpen%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%20%20%20%20onClose%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%22Add%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Add%20Something')%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%22Delete%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Delete%20Something')%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FSpeedDial%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0}}]);