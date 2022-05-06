(self.webpackChunk=self.webpackChunk||[]).push([[70811],{54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var a=n(87462),l=n(67294),r=n(91262),o=n(18421),i=n(77356),d=n(41652),p=n(24309),u=n(16042),s=n(20346),m=n(30650);const c=function(t){var e=t.params,n=t.containerStyle,c=void 0===n?{}:n;return l.createElement(r.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(s.X9.Provider,null,l.createElement(s.PK,{initialMetrics:m.o},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},l.createElement(o.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),l.createElement(d.Z,{msg:e.errorProps.msg,isPopup:!0}),l.createElement(p.Z,e.knobProps),l.createElement(d.Z,e.errorProps),l.createElement(u.E,e.actions)))}))}},78816:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=["components"],i={},d=void 0,p={unversionedId:"component_usage/ButtonGroup",id:"component_usage/ButtonGroup",title:"ButtonGroup",description:"Using components",source:"@site/docs/component_usage/ButtonGroup.mdx",sourceDirName:"component_usage",slug:"/component_usage/ButtonGroup",permalink:"/docs/next/component_usage/ButtonGroup",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/component_usage/ButtonGroup.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Using components",id:"using-components",level:3}],m={toc:s};function c(t){var e=t.components,n=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"using-components"},"Using components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE ButtonGroup","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%0Aimport%20%7B%20ButtonGroup%20%7D%20from%20'%40rneui%2Fthemed'%0Aimport%20%7B%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default()%20%3D%3E%20%7B%0Aconst%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0Aconst%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Strings%3C%2FText%3E%0A%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20buttons%3D%7B%5B'SIMPLE'%2C%20'BUTTON'%2C%20'GROUP'%5D%7D%0A%20%20%20%20%20%20selectedIndex%3D%7BselectedIndex%7D%0A%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setSelectedIndex(value)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20buttons%3D%7B%5B'Multiple'%2C%20'Select'%2C%20'Button'%2C%20'Group'%5D%7D%0A%20%20%20%20%20%20selectMultiple%0A%20%20%20%20%20%20selectedIndexes%3D%7BselectedIndexes%7D%0A%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setSelectedIndexes(value)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Components%3C%2FText%3E%0A%20%20%3C%2F%3E%0A)%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0},67892:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>C,frontMatter:()=>k,metadata:()=>N,toc:()=>b});var a=n(87462),l=n(63366),r=n(67294),o=n(3905),i=(n(9877),n(72360),n(78816)),d=n(19617),p=n(54236),u=n(40318),s=n(62290);const m=function(){var t=(0,u.Z)({componentName:"ButtonGroup",props:{buttonStyle:{type:s.n.Object,value:"{width:100}"},buttonContainerStyle:{type:s.n.Object,value:"{}"},buttons:{type:s.n.Array,value:"['Hello', 'World', 'React',\"Native\",\"Elements\"]"},Component:{type:s.n.ReactNode,description:"React Native Component\tTouchableOpacity (ios) or TouchableNativeFeedback (android)",value:null},containerStyle:{type:s.n.Object,value:"{}"},disabled:{type:s.n.Array,description:"boolean OR number[]. Controls if buttons are disabled. Setting true makes all of them disabled, while using an array only makes those indices disabled.",value:"[3,4]"},disabledStyle:{type:s.n.Object,value:"{}"},disabledTextStyle:{type:s.n.Object,value:"{}"},disabledSelectedStyle:{type:s.n.Object,value:"{}"},disabledSelectedTextStyle:{type:s.n.Object,value:"{}"},innerBorderStyle:{type:s.n.Object,value:"{}"},onPress:{type:s.n.Function,value:"(selectedIdx) => setSelectedIndex(selectedIdx)",propHook:{what:"selectedIdx",into:"selectedIndex"}},selectMultiple:{type:s.n.Boolean,value:!1},selectedButtonStyle:{type:s.n.Object,value:"{}"},selectedIndex:{type:s.n.Number,value:"1",stateful:!0},selectedIndexes:{type:s.n.Array,value:"[]",stateful:!0},selectedTextStyle:{type:s.n.Object,value:"{}"},textStyle:{type:s.n.Object,value:"{}"},underlayColor:{type:s.n.String,value:null},vertical:{type:s.n.Boolean,value:!1}},scope:{ButtonGroup:d.ButtonGroup},imports:{"@rneui/base":{named:["ButtonGroup"]}}});return r.createElement(r.Fragment,null,r.createElement(p.Z,{params:t}))};var c=["components"],k={id:"buttongroup",title:"ButtonGroup"},g=void 0,N={unversionedId:"components/buttongroup",id:"components/buttongroup",title:"ButtonGroup",description:"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.",source:"@site/docs/components/ButtonGroup.mdx",sourceDirName:"components",slug:"/components/buttongroup",permalink:"/docs/next/components/buttongroup",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/ButtonGroup.mdx",tags:[],version:"current",frontMatter:{id:"buttongroup",title:"ButtonGroup"},sidebar:"docs",previous:{title:"Button",permalink:"/docs/next/components/button"},next:{title:"Card",permalink:"/docs/next/components/card"}},y={},b=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],h={toc:b};function C(t){var e=t.components,n=(0,l.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.\nUse a ButtonGroup to offer choices that are closely related but mutually exclusive.\nThis component inherits ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight.html"},"all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements"),"."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ButtonGroup } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.default,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Component")),(0,o.kt)("td",{parentName:"tr",align:null},"React Component"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Choose other button component such as TouchableOpacity.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"activeOpacity")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Add active opacity to the button in buttonGroup.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"button")),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Button for the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"buttonContainerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Specify styling for button containers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"buttonStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Specify styling for button.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"buttons")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(string")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>)[]")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Array of buttons for component (required), if returning a component, must be an object with { element: componentName }.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Specify styling for main button container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disabled")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"number[]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Controls if buttons are disabled. Setting ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," makes all of them disabled, while using an array only makes those indices disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disabledSelectedStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Styling for each selected button when disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disabledSelectedTextStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Styling for the text of each selected button when disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disabledStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Styling for each button when disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disabledTextStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Styling for the text of each button when disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"innerBorderStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"{ color?: string; width?: number; }"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Update the styling of the interior border of the list of buttons.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onHideUnderlay")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Function called on hiding underlay.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPress")),(0,o.kt)("td",{parentName:"tr",align:null},"(...args: any[]) => void"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Method to update Button Group Index.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,o.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,o.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onShowUnderlay")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Function called on showing underlay.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,o.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"None")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"selectMultiple")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Allows the user to select multiple buttons.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"selectedButtonStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Specify styling for selected button.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"selectedIndex")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:null},"Current selected index of array of buttons.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"selectedIndexes")),(0,o.kt)("td",{parentName:"tr",align:null},"number[]"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[]")),(0,o.kt)("td",{parentName:"tr",align:null},"Current selected indexes from the array of buttons.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"selectedTextStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Specify specific styling for text in the selected state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"setOpacityTo")),(0,o.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Function to set the opacity.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"textStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Specify specific styling for text.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"underlayColor")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Color [Primary]")),(0,o.kt)("td",{parentName:"tr",align:null},"Specify underlayColor for TouchableHighlight.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"vertical")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Display the ButtonGroup vertically."))))),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)(m,{mdxType:"Play"}))}C.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);