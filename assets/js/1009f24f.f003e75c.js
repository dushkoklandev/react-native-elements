(self.webpackChunk=self.webpackChunk||[]).push([[42032],{54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(91262),o=n(18421),i=n(77356),d=n(41652),p=n(24309),m=n(16042),s=n(20346),u=n(30650);const c=function(e){var t=e.params,n=e.containerStyle,c=void 0===n?{}:n;return r.createElement(l.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(s.X9.Provider,null,r.createElement(s.PK,{initialMetrics:u.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},r.createElement(o.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:i.Z}))),r.createElement(d.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(p.Z,t.knobProps),r.createElement(d.Z,t.errorProps),r.createElement(m.E,t.actions)))}))}},94998:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var a=n(87462),r=n(63366),l=n(67294),o=n(3905),i=(n(9877),n(72360),n(19617)),d=n(54236),p=n(40318),m=n(62290);const s=function(){var e=(0,p.Z)({componentName:"Badge",props:{badgeStyle:{value:"{}",type:m.n.Object},containerStyle:{value:"{}",defaultValue:{},type:m.n.Object},onPress:{value:'() => {alert("onPress");}',type:m.n.Function},status:{value:"primary",options:{primary:"primary",success:"success",warning:"warning",error:"error"},type:m.n.Enum,description:"Defines the type of the button."},textProps:{value:"{}",type:m.n.Object},textStyle:{value:'{color:"#EFE"}',type:m.n.Object},value:{type:m.n.String,value:"Hello \ud83d\udc4b"},Component:{defaultValue:null,type:m.n.Object},options:{value:"{}",type:m.n.Object}},scope:{Badge:i.Badge},imports:{"@rneui/base":{named:["Badge"]}}});return l.createElement(l.Fragment,null,l.createElement(d.Z,{params:e}))};var u=["components"],c={id:"badge",title:"Badge"},k=void 0,g={unversionedId:"components/badge",id:"components/badge",title:"Badge",description:"Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.",source:"@site/docs/components/Badge.mdx",sourceDirName:"components",slug:"/components/badge",permalink:"/docs/next/components/badge",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Badge.mdx",tags:[],version:"current",frontMatter:{id:"badge",title:"Badge"},sidebar:"docs",previous:{title:"Avatar.Accessory",permalink:"/docs/next/components/avatar_accessory"},next:{title:"BottomSheet",permalink:"/docs/next/components/bottomsheet"}},N={},y=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],b={toc:y};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Badge } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Component")),(0,o.kt)("td",{parentName:"tr",align:null},"React Component"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,o.kt)("td",{parentName:"tr",align:null},"Custom component to replace the badge outer component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"badgeStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Additional styling for badge (background) view component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Style for the container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPress")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,o.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,o.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,o.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"None")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"status")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"primary")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"success")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"warning")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"error")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"primary")),(0,o.kt)("td",{parentName:"tr",align:null},"Determines color of the indicator.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"textProps")),(0,o.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Extra props for text component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"textStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Extra styling for icon component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Text value to be displayed by badge, defaults to empty."))))),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)(s,{mdxType:"Play"}))}v.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);