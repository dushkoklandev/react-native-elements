(self.webpackChunk=self.webpackChunk||[]).push([[84350],{27888:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n(67294),a=n(79527),r=n(54236),l=n(40318),i=n(62290);const s=function(){var t=(0,l.Z)({componentName:"BottomSheet",props:{children:{type:i.n.ReactNode,value:"<Text>Some Content</Text>"},isVisible:{type:i.n.Boolean,value:!1},modalProps:{type:i.n.Object,value:'{ presentationStyle: "fullScreen" , visible:true}',description:"Modal Props -> https://reactnative.dev/docs/modal"},containerStyle:{value:"{}",type:i.n.Object}},scope:{BottomSheet:a.BottomSheet,Text:a.Text},imports:{"@rneui/base":{named:["BottomSheet","Text"]}}});return o.createElement(o.Fragment,null,o.createElement(r.Z,{params:t}))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var o=n(87462),a=n(67294),r=n(91262),l=n(18421),i=n(77356),s=n(41652),m=n(24309),p=n(16042),d=n(20346),c=n(30650);const u=function(t){var e=t.params,n=t.containerStyle,u=void 0===n?{}:n;return a.createElement(r.Z,{fallback:a.createElement(a.Fragment,null,"Loading...")},(function(){return a.createElement(d.X9.Provider,null,a.createElement(d.PK,{initialMetrics:c.o},a.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},a.createElement(l.Z,(0,o.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),a.createElement(s.Z,{msg:e.errorProps.msg,isPopup:!0}),a.createElement(m.Z,e.knobProps),a.createElement(s.Z,e.errorProps),a.createElement(p.E,e.actions)))}))}},63675:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={},s=void 0,m={unversionedId:"component_usage/BottomSheet",id:"version-4.0.0-rc.3/component_usage/BottomSheet",title:"BottomSheet",description:"\x3c!-- To show the guide to configure the BottomSheet Component to a project.",source:"@site/versioned_docs/version-4.0.0-rc.3/component_usage/BottomSheet.mdx",sourceDirName:"component_usage",slug:"/component_usage/BottomSheet",permalink:"/docs/component_usage/BottomSheet",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/component_usage/BottomSheet.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{}},p={},d=[],c={toc:d};function u(t){var e=t.components,n=(0,a.Z)(t,l);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,r.kt)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0Aconst%20list%20%3D%20%5B%0A%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0},39634:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>u});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=(n(9877),n(72360),n(63675)),i=n(27888),s=["components"],m={id:"bottomsheet",title:"BottomSheet"},p=void 0,d={unversionedId:"components/bottomsheet",id:"version-4.0.0-rc.3/components/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/BottomSheet.mdx",sourceDirName:"components",slug:"/components/bottomsheet",permalink:"/docs/components/bottomsheet",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/BottomSheet.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"bottomsheet",title:"BottomSheet"},sidebar:"docs",previous:{title:"Badge",permalink:"/docs/components/badge"},next:{title:"Button",permalink:"/docs/components/button"}},c={},u=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],h={toc:u};function k(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen.\nThis opens from the bottom of the screen."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { BottomSheet } from "@rneui/themed";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backdropStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of the backdrop container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of the bottom sheet's container. Use this to change the color of the underlay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Is the modal component shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modalProps")),(0,r.kt)("td",{parentName:"tr",align:null},"ModalProps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional props handed to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Modal"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onBackdropPress")),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Handler for backdrop press.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scrollViewProps")),(0,r.kt)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Used to add props to Scroll view."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(i.Z,{mdxType:"Play"}))}k.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);