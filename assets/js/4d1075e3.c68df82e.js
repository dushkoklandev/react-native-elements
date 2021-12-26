"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2647],{58215:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},82895:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(87462),n=a(67294),i=a(72389),l=a(79443);const o=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var d=a(15779),s=a(86010);const u="tabItem_vU9c";function p(e){var t,a,i,l=e.lazy,p=e.block,c=e.defaultValue,m=e.values,v=e.groupId,h=e.className,k=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),D=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,d.lx)(D,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===c?c:null!=(t=null!=c?c:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==A&&!D.some((function(e){return e.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+D.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),f=b.tabGroupChoices,N=b.setTabGroupChoices,g=(0,n.useState)(A),C=g[0],x=g[1],T=[],E=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var w=f[v];null!=w&&w!==C&&D.some((function(e){return e.value===w}))&&x(w)}var B=function(e){var t=e.currentTarget,a=T.indexOf(t),r=D[a].value;r!==C&&(E(t),x(r),null!=v&&N(v,r))},F=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;a=T[r]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},D.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:F,onFocus:B,onClick:B},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,i.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},34138:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>u,toc:()=>p,default:()=>m});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=a(96761),o=(a(34738),a(82895),a(58215),["components"]),d={id:"divider",title:"Divider",slug:"/divider"},s=void 0,u={unversionedId:"main/divider",id:"main/divider",title:"Divider",description:"Dividers are visual separators of content.",source:"@site/docs/main/Divider.mdx",sourceDirName:"main",slug:"/divider",permalink:"/docs/next/divider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/Divider.mdx",tags:[],version:"current",frontMatter:{id:"divider",title:"Divider",slug:"/divider"},sidebar:"docs",previous:{title:"Chip",permalink:"/docs/next/chip"},next:{title:"FAB",permalink:"/docs/next/fab"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Divider",id:"divider",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Divider",id:"divider-1",children:[{value:"color",id:"color",children:[],level:4},{value:"inset",id:"inset",children:[],level:4},{value:"insetType",id:"insettype",children:[],level:4},{value:"orientation",id:"orientation",children:[],level:4},{value:"style",id:"style",children:[],level:4},{value:"subHeader",id:"subheader",children:[],level:4},{value:"subHeaderStyle",id:"subheaderstyle",children:[],level:4},{value:"width",id:"width",children:[],level:4}],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dividers are visual separators of content."),(0,i.kt)("p",null,"Use Divider when you want to make a distinction between sections of content."),(0,i.kt)("p",null,"Our divider offers adding inset, color, orientation and subHeader to the component using props."),(0,i.kt)("p",null,"Also receives all ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(l.default,{mdxType:"Usage"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"divider"},"Divider"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#color"},"color")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inset"},"inset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insettype"},"insetType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#orientation"},"orientation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#style"},"style")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#subheader"},"subHeader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#subheaderstyle"},"subHeaderStyle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#width"},"width"))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"divider-1"},"Divider"),(0,i.kt)("h4",{id:"color"},"color"),(0,i.kt)("p",null,"The color of the component."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"inset"},"inset"),(0,i.kt)("p",null,"Applies inset to the divider."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"insettype"},"insetType"),(0,i.kt)("p",null,"Applies inset to a specific direction to the divider."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"middle" or "left" or "right"'),(0,i.kt)("td",{parentName:"tr",align:null},"left")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"orientation"},"orientation"),(0,i.kt)("p",null,"Apply orientation to the divider."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"vertical" or "horizontal"'),(0,i.kt)("td",{parentName:"tr",align:null},"horizontal")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"style"},"style"),(0,i.kt)("p",null,"Applies style to the divider."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"subheader"},"subHeader"),(0,i.kt)("p",null,"Adds subHeader text to the divider."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"subheaderstyle"},"subHeaderStyle"),(0,i.kt)("p",null,"Adds style to the subHeader text of the divider"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"width"},"width"),(0,i.kt)("p",null,"Apply width to the divider."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null))}m.isMDXComponent=!0},96761:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>u,toc:()=>p,default:()=>m});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=a(48925),o=["components"],d={},s=void 0,u={unversionedId:"main/usage/Divider/Divider",id:"main/usage/Divider/Divider",title:"Divider",description:"",source:"@site/docs/main/usage/Divider/Divider.mdx",sourceDirName:"main/usage/Divider",slug:"/main/usage/Divider/",permalink:"/docs/next/main/usage/Divider/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Divider/Divider.mdx",tags:[],version:"current",frontMatter:{}},p=[],c={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.default,{mdxType:"Snack"}))}m.isMDXComponent=!0},48925:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>s,toc:()=>u,default:()=>c});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={},d=void 0,s={unversionedId:"main/usage/Divider/snack/index",id:"main/usage/Divider/snack/index",title:"index",description:"",source:"@site/docs/main/usage/Divider/snack/index.md",sourceDirName:"main/usage/Divider/snack",slug:"/main/usage/Divider/snack/",permalink:"/docs/next/main/usage/Divider/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Divider/snack/index.md",tags:[],version:"current",frontMatter:{}},u=[],p={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Divider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useContext%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20Divider%2C%20useTheme%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20ScrollView%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Atype%20DividerViewTypes%20%3D%20%7B%7D%3B%0A%0Aconst%20DividerView%3A%20React.FunctionComponent%3CDividerViewTypes%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20const%20%7B%20theme%20%7D%20%3D%20useTheme()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EHorizontal%20Divider%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20width%20and%20color%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20width%3D%7B5%7D%20color%3D%7Btheme%3F.colors%3F.primary%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Divider%20with%20Inset%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20left%20inset%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20right%20inset%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22right%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20middle%20inset%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22middle%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EWelcome%20to%20RNE%20App%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20width%3D%7B5%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EDividers%20with%20SubHeader%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%0A%20%20%20%20%20%20%20%20%20%20%20%20subHeader%3D%22Divider%22%0A%20%20%20%20%20%20%20%20%20%20%20%20inset%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20subHeaderStyle%3D%7B%7B%20color%3A%20theme%3F.colors%3F.primary%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20marginBottom%3A%2010%2C%0A%20%20%7D%2C%0A%20%20horizontalText%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20fontSize%3A%2016%2C%0A%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%7D%2C%0A%20%20vertical%3A%20%7B%0A%20%20%20%20marginBottom%3A%2010%2C%0A%20%20%20%20display%3A%20'flex'%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-evenly'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DividerView%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0}}]);