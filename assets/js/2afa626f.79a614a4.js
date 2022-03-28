"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9445,4030],{27641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>k});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=n(51402),i=n(87492),d=["components"],p={id:"button_group",title:"ButtonGroup"},s=void 0,c={unversionedId:"button_group",id:"version-3.4.2/button_group",title:"ButtonGroup",description:"ButtonGroup is a linear set of segments, each of which function as a button that",source:"@site/versioned_docs/version-3.4.2/button_group.md",sourceDirName:".",slug:"/button_group",permalink:"/docs/3.4.2/button_group",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/button_group.md",tags:[],version:"3.4.2",frontMatter:{id:"button_group",title:"ButtonGroup"},sidebar:"version-3.4.2/docs",previous:{title:"Button",permalink:"/docs/3.4.2/button"},next:{title:"Card",permalink:"/docs/3.4.2/card"}},u={},k=[{value:"Usage",id:"usage",level:2},{value:"Using strings",id:"using-strings",level:3},{value:"Using components",id:"using-components",level:3}],m={toc:k};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"ButtonGroup is a linear set of segments, each of which function as a button that\ncan display a different view. Use a ButtonGroup to offer choices that are\nclosely related but mutually exclusive."),(0,l.kt)("img",{alt:"ButtonGroup",src:(0,o.Z)("img/button_group.png")}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"using-strings"},"Using strings"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\n\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nrender () {\n  const buttons = ['Hello', 'World', 'Buttons']\n  const { selectedIndex } = this.state\n\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}}\n    />\n  )\n}\n")),(0,l.kt)("h3",{id:"using-components"},"Using components"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")),(0,l.kt)("hr",null),(0,l.kt)(i.default,{mdxType:"Props"}),(0,l.kt)("hr",null))}h.isMDXComponent=!0},87492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={},d=void 0,p={unversionedId:"props/button_group",id:"version-3.4.2/props/button_group",title:"button_group",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/button_group.md",sourceDirName:"props",slug:"/props/button_group",permalink:"/docs/3.4.2/props/button_group",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/button_group.md",tags:[],version:"3.4.2",frontMatter:{}},s={},c=[{value:"Props",id:"props",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>buttonContainerStyle</code>",id:"buttoncontainerstyle",level:3},{value:"<code>buttons</code>",id:"buttons",level:3},{value:"<code>buttonStyle</code>",id:"buttonstyle",level:3},{value:"<code>Component</code>",id:"component",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>disabledSelectedStyle</code>",id:"disabledselectedstyle",level:3},{value:"<code>disabledSelectedTextStyle</code>",id:"disabledselectedtextstyle",level:3},{value:"<code>disabledStyle</code>",id:"disabledstyle",level:3},{value:"<code>disabledTextStyle</code>",id:"disabledtextstyle",level:3},{value:"<code>innerBorderStyle</code>",id:"innerborderstyle",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>selectedButtonStyle</code>",id:"selectedbuttonstyle",level:3},{value:"<code>selectedIndex</code>",id:"selectedindex",level:3},{value:"<code>selectedIndexes</code>",id:"selectedindexes",level:3},{value:"<code>selectedTextStyle</code>",id:"selectedtextstyle",level:3},{value:"<code>selectMultiple</code>",id:"selectmultiple",level:3},{value:"<code>textStyle</code>",id:"textstyle",level:3},{value:"<code>underlayColor</code>",id:"underlaycolor",level:3},{value:"<code>vertical</code>",id:"vertical",level:3}],u={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This component inherits\n",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight.html"},"all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements"),",\nalong with the following:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"buttonContainerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttons"},(0,l.kt)("inlineCode",{parentName:"a"},"buttons"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#buttonstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"buttonStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#component"},(0,l.kt)("inlineCode",{parentName:"a"},"Component"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabled"},(0,l.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledselectedstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledSelectedStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledselectedtextstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledSelectedTextStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledtextstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledTextStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#innerborderstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"innerBorderStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#selectedbuttonstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"selectedButtonStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#selectedindex"},(0,l.kt)("inlineCode",{parentName:"a"},"selectedIndex"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#selectedindexes"},(0,l.kt)("inlineCode",{parentName:"a"},"selectedIndexes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#selectedtextstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"selectedTextStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#selectmultiple"},(0,l.kt)("inlineCode",{parentName:"a"},"selectMultiple"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"textStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#underlaycolor"},(0,l.kt)("inlineCode",{parentName:"a"},"underlayColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#vertical"},(0,l.kt)("inlineCode",{parentName:"a"},"vertical")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"buttoncontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"buttonContainerStyle")),(0,l.kt)("p",null,"specify styling for button containers (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"buttons"},(0,l.kt)("inlineCode",{parentName:"h3"},"buttons")),(0,l.kt)("p",null,"array of buttons for component (required), if returning a component, must be an\nobject with { element: componentName }"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"array"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"buttonstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"buttonStyle")),(0,l.kt)("p",null,"specify styling for button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"component"},(0,l.kt)("inlineCode",{parentName:"h3"},"Component")),(0,l.kt)("p",null,"Choose other button component such as TouchableOpacity (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"TouchableOpacity (ios) or TouchableNativeFeedback (android)")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"specify styling for main button container (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,l.kt)("p",null,"Controls if buttons are disabled. Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," makes all of them disabled,\nwhile using an array only makes those indices disabled."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean ",(0,l.kt)("strong",{parentName:"td"},"OR")," number[]"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledselectedstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledSelectedStyle")),(0,l.kt)("p",null,"Styling for each selected button when disabled."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledselectedtextstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledSelectedTextStyle")),(0,l.kt)("p",null,"Styling for the text of each selected button when disabled."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,l.kt)("p",null,"Styling for each button when disabled."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledtextstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledTextStyle")),(0,l.kt)("p",null,"Styling for the text of each button when disabled."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"innerborderstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"innerBorderStyle")),(0,l.kt)("p",null,"update the styling of the interior border of the list of buttons (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object { width, color }"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,l.kt)("p",null,"method to update Button Group Index (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectedbuttonstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectedButtonStyle")),(0,l.kt)("p",null,"specify styling for selected button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectedindex"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectedIndex")),(0,l.kt)("p",null,"current selected index of array of buttons (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectedindexes"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectedIndexes")),(0,l.kt)("p",null,"current selected indexes from the array of buttons"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"array (number)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"[]")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectedtextstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectedTextStyle")),(0,l.kt)("p",null,"specify specific styling for text in the selected state (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectmultiple"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectMultiple")),(0,l.kt)("p",null,"allows the user to select multiple buttons"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"textStyle")),(0,l.kt)("p",null,"specify specific styling for text (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"underlaycolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"underlayColor")),(0,l.kt)("p",null,"specify underlayColor for TouchableHighlight (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"white")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"vertical"},(0,l.kt)("inlineCode",{parentName:"h3"},"vertical")),(0,l.kt)("p",null,"Display the ButtonGroup vertically"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))))}k.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,m=u["".concat(d,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);