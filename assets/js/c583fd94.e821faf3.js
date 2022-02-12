"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2854],{58215:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294);const l=function(t){var e=t.children,a=t.hidden,l=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},e)}},9877:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(87462),l=a(67294),r=a(72389),i=a(29548),o=a(86010);const d="tabItem_LplD";function u(t){var e,a,r,u=t.lazy,c=t.block,s=t.defaultValue,p=t.values,m=t.groupId,k=t.className,b=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),v=(0,i.lx)(h,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===s?s:null!=(e=null!=s?s:null==(a=b.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(r=b[0])?void 0:r.props.value;if(null!==N&&!h.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,f=g.setTabGroupChoices,T=(0,l.useState)(N),D=T[0],A=T[1],C=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==D&&h.some((function(t){return t.value===x}))&&A(x)}var S=function(t){var e=t.currentTarget,a=C.indexOf(e),n=h[a].value;n!==D&&(w(e),A(n),null!=m&&f(m,n))},E=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=C.indexOf(t.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var l=C.indexOf(t.currentTarget)-1;a=C[l]||C[C.length-1]}null==(e=a)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},h.map((function(t){var e=t.value,a=t.label,r=t.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:function(t){return C.push(t)},onKeyDown:E,onFocus:S,onClick:S},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":D===e})}),null!=a?a:e)}))),u?(0,l.cloneElement)(b.filter((function(t){return t.props.value===D}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==D})}))))}function c(t){var e=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(e)},t))}},72018:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>c,toc:()=>s,default:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(9220),o=(a(34738),a(9877),a(58215),["components"]),d={id:"tab",title:"Tab"},u=void 0,c={unversionedId:"components/tab",id:"components/tab",title:"Tab",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/docs/components/Tab.mdx",sourceDirName:"components",slug:"/components/tab",permalink:"/docs/next/components/tab",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Tab.mdx",tags:[],version:"current",frontMatter:{id:"tab",title:"Tab"},sidebar:"docs",previous:{title:"Switch",permalink:"/docs/next/components/switch"},next:{title:"TabView",permalink:"/docs/next/components/tabview"}},s=[{value:"Components",id:"components",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Tab",id:"tab",children:[],level:3},{value:"Tab.Item",id:"tabitem",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Tab",id:"tab-1",children:[{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"disableIndicator",id:"disableindicator",children:[],level:4},{value:"indicatorStyle",id:"indicatorstyle",children:[],level:4},{value:"onChange",id:"onchange",children:[],level:4},{value:"scrollable",id:"scrollable",children:[],level:4},{value:"value",id:"value",children:[],level:4},{value:"variant",id:"variant",children:[],level:4}],level:3},{value:"Tab.Item",id:"tabitem-1",children:[{value:"active",id:"active",children:[],level:4},{value:"buttonStyle",id:"buttonstyle",children:[],level:4},{value:"containerStyle",id:"containerstyle-1",children:[],level:4},{value:"iconContainerStyle",id:"iconcontainerstyle",children:[],level:4},{value:"titleStyle",id:"titlestyle",children:[],level:4},{value:"variant",id:"variant-1",children:[],level:4}],level:3}],level:2}],p={toc:s};function m(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This component is not for (complex) navigation. Use ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org"},"React Navigation")," for that."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tab.Item\n  title="Tab 1"\n  buttonStyle={(active) => {\n    backgroundColor: active ? "red" : "blue";\n  }}\n/>\n')),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tabitem"},"Tab.Item"),"\nThey are individual item of the parent Tab.\nThey are clickable and allows users to click and change Tab.\nReceives all ",(0,r.kt)("a",{parentName:"li",href:"https://reactnativeelements.com/docs/button#props"},"Button")," props.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"tab"},"Tab"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disableindicator"},"disableIndicator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#indicatorstyle"},"indicatorStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onchange"},"onChange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scrollable"},"scrollable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#value"},"value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#variant"},"variant"))),(0,r.kt)("h3",{id:"tabitem"},"Tab.Item"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#active"},"active")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttonstyle"},"buttonStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iconcontainerstyle"},"iconContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#titlestyle"},"titleStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#variant"},"variant"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"tab-1"},"Tab"),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Style for Tab container"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disableindicator"},"disableIndicator"),(0,r.kt)("p",null,"Disable the indicator below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"indicatorstyle"},"indicatorStyle"),(0,r.kt)("p",null,"Additional styling for tab indicator."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onchange"},"onChange"),(0,r.kt)("p",null,"On Index Change Callback."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Function")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"scrollable"},"scrollable"),(0,r.kt)("p",null,"Makes Tab Scrolling"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"value"},"value"),(0,r.kt)("p",null,"Child position index value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"variant"},"variant"),(0,r.kt)("p",null,"Define the background Variant."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"primary" or "default"'),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tabitem-1"},"Tab.Item"),(0,r.kt)("h4",{id:"active"},"active"),(0,r.kt)("p",null,"Allows to define if TabItem is active."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttonstyle"},"buttonStyle"),(0,r.kt)("p",null,"Additional button style"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ViewStyle or (active: boolean) => ViewStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"containerstyle-1"},"containerStyle"),(0,r.kt)("p",null,"Additional Styling for button container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ViewStyle or (active: boolean) => ViewStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"iconcontainerstyle"},"iconContainerStyle"),(0,r.kt)("p",null,"Additional Styling for Icon Component container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ViewStyle or (active: boolean) => ViewStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"titlestyle"},"titleStyle"),(0,r.kt)("p",null,"Additional button title style"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextStyle or (active: boolean) => TextStyle"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"variant-1"},"variant"),(0,r.kt)("p",null,"Define the background Variant."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"primary" or "default"'),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0},9220:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>c,toc:()=>s,default:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(79429),o=["components"],d={},u=void 0,c={unversionedId:"components/usage/Tab/Tab",id:"components/usage/Tab/Tab",title:"Tab",description:"",source:"@site/docs/components/usage/Tab/Tab.mdx",sourceDirName:"components/usage/Tab",slug:"/components/usage/Tab/",permalink:"/docs/next/components/usage/Tab/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Tab/Tab.mdx",tags:[],version:"current",frontMatter:{}},s=[],p={toc:s};function m(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"Snack"}))}m.isMDXComponent=!0},79429:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>u,toc:()=>c,default:()=>p});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],o={},d=void 0,u={unversionedId:"components/usage/Tab/snack/index",id:"components/usage/Tab/snack/index",title:"index",description:"",source:"@site/docs/components/usage/Tab/snack/index.md",sourceDirName:"components/usage/Tab/snack",slug:"/components/usage/Tab/snack/",permalink:"/docs/next/components/usage/Tab/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Tab/snack/index.md",tags:[],version:"current",frontMatter:{}},c=[],s={toc:c};function p(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Tab","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tab%2C%20Text%2C%20TabView%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bindex%2C%20setIndex%5D%20%3D%20React.useState(0)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CTab%0A%20%20%20%20%20%20%20%20value%3D%7Bindex%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7B(e)%20%3D%3E%20setIndex(e)%7D%0A%20%20%20%20%20%20%20%20indicatorStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%203%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20variant%3D%22primary%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Recent%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'timer'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22favorite%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22cart%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'cart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTab%3E%0A%0A%20%20%20%20%20%20%3CTabView%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%20animationType%3D%22spring%22%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'red'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ERecent%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'blue'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3EFavorite%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'green'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ECart%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3C%2FTabView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0}}]);