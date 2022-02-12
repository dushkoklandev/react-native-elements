"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4399],{58215:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const o=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),o=a(67294),l=a(72389),r=a(29548),s=a(86010);const i="tabItem_LplD";function m(e){var t,a,l,m=e.lazy,p=e.block,u=e.defaultValue,c=e.values,d=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,r.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(t=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==f&&!b.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var B=(0,r.UB)(),N=B.tabGroupChoices,y=B.setTabGroupChoices,g=(0,o.useState)(f),S=g[0],A=g[1],D=[],C=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var w=N[d];null!=w&&w!==S&&b.some((function(e){return e.value===w}))&&A(w)}var x=function(e){var t=e.currentTarget,a=D.indexOf(t),n=b[a].value;n!==S&&(C(t),A(n),null!=d&&y(d,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=D.indexOf(e.currentTarget)+1;a=D[n]||D[0];break;case"ArrowLeft":var o=D.indexOf(e.currentTarget)-1;a=D[o]||D[D.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return D.push(e)},onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,s.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),m?(0,o.cloneElement)(k.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,l.Z)();return o.createElement(m,(0,n.Z)({key:String(t)},e))}},15750:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>m,metadata:()=>p,toc:()=>u,default:()=>d});var n=a(87462),o=a(63366),l=(a(67294),a(3905)),r=a(97246),s=(a(34738),a(9877),a(58215),["components"]),i={id:"bottomsheet",title:"BottomSheet"},m=void 0,p={unversionedId:"components/bottomsheet",id:"components/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/docs/components/BottomSheet.mdx",sourceDirName:"components",slug:"/components/bottomsheet",permalink:"/docs/next/components/bottomsheet",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/BottomSheet.mdx",tags:[],version:"current",frontMatter:{id:"bottomsheet",title:"BottomSheet"},sidebar:"docs",previous:{title:"Badge",permalink:"/docs/next/components/badge"},next:{title:"Button",permalink:"/docs/next/components/button"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"BottomSheet",id:"bottomsheet",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"BottomSheet",id:"bottomsheet-1",children:[{value:"backdropStyle",id:"backdropstyle",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"isVisible",id:"isvisible",children:[],level:4},{value:"modalProps",id:"modalprops",children:[],level:4},{value:"onBackdropPress",id:"onbackdroppress",children:[],level:4},{value:"scrollViewProps",id:"scrollviewprops",children:[],level:4}],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,l.kt)("p",null,"This opens from the bottom of the screen."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(r.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"bottomsheet"},"BottomSheet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#backdropstyle"},"backdropStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#isvisible"},"isVisible")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#modalprops"},"modalProps")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onbackdroppress"},"onBackdropPress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#scrollviewprops"},"scrollViewProps"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"bottomsheet-1"},"BottomSheet"),(0,l.kt)("h4",{id:"backdropstyle"},"backdropStyle"),(0,l.kt)("p",null,"Style of the backdrop container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,l.kt)("p",null,"Style of the bottom sheet's container. Use this to change the color of the underlay."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"isvisible"},"isVisible"),(0,l.kt)("p",null,"Is the modal component shown."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"modalprops"},"modalProps"),(0,l.kt)("p",null,"Additional props handed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ModalProps"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onbackdroppress"},"onBackdropPress"),(0,l.kt)("p",null,"Handler for backdrop press."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"Function")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"scrollviewprops"},"scrollViewProps"),(0,l.kt)("p",null,"Used to add props to Scroll view."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")))),(0,l.kt)("hr",null))}d.isMDXComponent=!0},97246:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>m,metadata:()=>p,toc:()=>u,default:()=>d});var n=a(87462),o=a(63366),l=(a(67294),a(3905)),r=a(17043),s=["components"],i={},m=void 0,p={unversionedId:"components/usage/BottomSheet/BottomSheet",id:"components/usage/BottomSheet/BottomSheet",title:"BottomSheet",description:"\x3c!-- To show the guide to configure the BottomSheet Component to a project.",source:"@site/docs/components/usage/BottomSheet/BottomSheet.mdx",sourceDirName:"components/usage/BottomSheet",slug:"/components/usage/BottomSheet/",permalink:"/docs/next/components/usage/BottomSheet/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/BottomSheet/BottomSheet.mdx",tags:[],version:"current",frontMatter:{}},u=[],c={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.kt)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.kt)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,l.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,l.kt)(r.default,{mdxType:"Snack"}))}d.isMDXComponent=!0},17043:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>m,toc:()=>p,default:()=>c});var n=a(87462),o=a(63366),l=(a(67294),a(3905)),r=["components"],s={},i=void 0,m={unversionedId:"components/usage/BottomSheet/snack/index",id:"components/usage/BottomSheet/snack/index",title:"index",description:"",source:"@site/docs/components/usage/BottomSheet/snack/index.md",sourceDirName:"components/usage/BottomSheet/snack",slug:"/components/usage/BottomSheet/snack/",permalink:"/docs/next/components/usage/BottomSheet/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/BottomSheet/snack/index.md",tags:[],version:"current",frontMatter:{}},p=[],u={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0A%20%20const%20list%20%3D%20%5B%0A%20%20%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%20%20%3C%2FSafeAreaProvider%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20button%3A%20%7B%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0}}]);