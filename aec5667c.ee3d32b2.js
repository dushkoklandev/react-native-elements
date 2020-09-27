(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),c=a(6),b=(a(0),a(235)),r=a(237),l={id:"checkbox",title:"CheckBox"},o={unversionedId:"checkbox",id:"checkbox",isDocsHomePage:!1,title:"CheckBox",description:"CheckBoxes allow users to complete tasks that involve making choices such as",source:"@site/docs/checkbox.md",slug:"/checkbox",permalink:"/docs/next/checkbox",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/checkbox.md",version:"current",sidebar:"docs",previous:{title:"Card",permalink:"/docs/next/card"},next:{title:"Divider",permalink:"/docs/next/divider"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>center</code>",id:"center",children:[]},{value:"<code>checked</code>",id:"checked",children:[]},{value:"<code>checkedColor</code>",id:"checkedcolor",children:[]},{value:"<code>checkedIcon</code>",id:"checkedicon",children:[]},{value:"<code>checkedTitle</code>",id:"checkedtitle",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>fontFamily</code>",id:"fontfamily",children:[]},{value:"<code>iconRight</code>",id:"iconright",children:[]},{value:"<code>iconType</code>",id:"icontype",children:[]},{value:"<code>onIconPress</code>",id:"oniconpress",children:[]},{value:"<code>onLongIconPress</code>",id:"onlongiconpress",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>right</code>",id:"right",children:[]},{value:"<code>size</code>",id:"size",children:[]},{value:"<code>textStyle</code>",id:"textstyle",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleProps</code>",id:"titleprops",children:[]},{value:"<code>uncheckedColor</code>",id:"uncheckedcolor",children:[]},{value:"<code>uncheckedIcon</code>",id:"uncheckedicon",children:[]}]}],O={rightToc:i};function j(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"CheckBoxes allow users to complete tasks that involve making choices such as\nselecting options, or switching settings on or off. It provides a clear visual\nof either a true or false choice."),Object(b.b)("img",{alt:"Checkboxes",src:Object(r.a)("img/checkbox.png")}),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { CheckBox } from 'react-native-elements'\n\n<CheckBox\n  title='Click Here'\n  checked={this.state.checked}\n/>\n\n<CheckBox\n  center\n  title='Click Here'\n  checked={this.state.checked}\n/>\n\n<CheckBox\n  center\n  title='Click Here'\n  checkedIcon='dot-circle-o'\n  uncheckedIcon='circle-o'\n  checked={this.state.checked}\n/>\n\n<CheckBox\n  center\n  title='Click Here to Remove This Item'\n  iconRight\n  iconType='material'\n  checkedIcon='clear'\n  uncheckedIcon='add'\n  checkedColor='red'\n  checked={this.state.checked}\n/>\n\n<CheckBox\n  checkedIcon={<Image source={require('../checked.png')} />}\n  uncheckedIcon={<Image source={require('../unchecked.png')} />}\n  checked={this.state.checked}\n  onPress={() => this.setState({checked: !this.state.checked})}\n/>\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#center"}),Object(b.b)("inlineCode",{parentName:"a"},"center"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#checked"}),Object(b.b)("inlineCode",{parentName:"a"},"checked"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#checkedcolor"}),Object(b.b)("inlineCode",{parentName:"a"},"checkedColor"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#checkedicon"}),Object(b.b)("inlineCode",{parentName:"a"},"checkedIcon"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#checkedtitle"}),Object(b.b)("inlineCode",{parentName:"a"},"checkedTitle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#Component"}),Object(b.b)("inlineCode",{parentName:"a"},"Component"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#fontfamily"}),Object(b.b)("inlineCode",{parentName:"a"},"fontFamily"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#iconright"}),Object(b.b)("inlineCode",{parentName:"a"},"iconRight"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#icontype"}),Object(b.b)("inlineCode",{parentName:"a"},"iconType"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#oniconpress"}),Object(b.b)("inlineCode",{parentName:"a"},"onIconPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onlongiconpress"}),Object(b.b)("inlineCode",{parentName:"a"},"onLongIconPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onlongpress"}),Object(b.b)("inlineCode",{parentName:"a"},"onLongPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onpress"}),Object(b.b)("inlineCode",{parentName:"a"},"onPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#right"}),Object(b.b)("inlineCode",{parentName:"a"},"right"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#size"}),Object(b.b)("inlineCode",{parentName:"a"},"size"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#textstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"textStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#title"}),Object(b.b)("inlineCode",{parentName:"a"},"title"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#titleprops"}),Object(b.b)("inlineCode",{parentName:"a"},"titleProps"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#uncheckedcolor"}),Object(b.b)("inlineCode",{parentName:"a"},"uncheckedColor"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#uncheckedicon"}),Object(b.b)("inlineCode",{parentName:"a"},"uncheckedIcon")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"center"},Object(b.b)("inlineCode",{parentName:"h3"},"center")),Object(b.b)("p",null,"Aligns checkbox to center (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"checked"},Object(b.b)("inlineCode",{parentName:"h3"},"checked")),Object(b.b)("p",null,"Flag for checking the icon (required)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"checkedcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"checkedColor")),Object(b.b)("p",null,"Default checked color (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"green")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"checkedicon"},Object(b.b)("inlineCode",{parentName:"h3"},"checkedIcon")),Object(b.b)("p",null,"Default checked icon (",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://fontawesome.io/icons/"}),"Font Awesome Icon"),")\n(optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string OR React Native Component"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"check-square-o")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"checkedtitle"},Object(b.b)("inlineCode",{parentName:"h3"},"checkedTitle")),Object(b.b)("p",null,"Specify a custom checked message (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"component"},Object(b.b)("inlineCode",{parentName:"h3"},"Component")),Object(b.b)("p",null,"Specify React Native component for main button (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TouchableOpacity")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"containerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"Style of main container (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fontfamily"},Object(b.b)("inlineCode",{parentName:"h3"},"fontFamily")),Object(b.b)("p",null,"Specify different font family"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"System font bold (iOS), Sans Serif Bold (android)")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"iconright"},Object(b.b)("inlineCode",{parentName:"h3"},"iconRight")),Object(b.b)("p",null,"Moves icon to right of text (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"icontype"},Object(b.b)("inlineCode",{parentName:"h3"},"iconType")),Object(b.b)("p",null,"type of icon set. ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/icon#available-icon-sets"}),"Supported sets here"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"font-awesome")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"oniconpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onIconPress")),Object(b.b)("p",null,"onPress function for checkbox (required)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onlongiconpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onLongIconPress")),Object(b.b)("p",null,"onLongPress function for checkbox (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onlongpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(b.b)("p",null,"onLongPress function for checkbox (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onPress")),Object(b.b)("p",null,"onPress function for container (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"right"},Object(b.b)("inlineCode",{parentName:"h3"},"right")),Object(b.b)("p",null,"Aligns checkbox to right (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"size"},Object(b.b)("inlineCode",{parentName:"h3"},"size")),Object(b.b)("p",null,"Size of the checkbox"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"24")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"textstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"textStyle")),Object(b.b)("p",null,"Style of text (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"title"},Object(b.b)("inlineCode",{parentName:"h3"},"title")),Object(b.b)("p",null,"Title of checkbox"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string OR React Native Component"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"titleprops"},Object(b.b)("inlineCode",{parentName:"h3"},"titleProps")),Object(b.b)("p",null,"Additional props for the title Text component (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://facebook.github.io/react-native/docs/text#props-1"}),"...Text props"),"}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"uncheckedcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"uncheckedColor")),Object(b.b)("p",null,"Default unchecked color (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"#bfbfbf")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"uncheckedicon"},Object(b.b)("inlineCode",{parentName:"h3"},"uncheckedIcon")),Object(b.b)("p",null,"Default checked icon (",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://fontawesome.io/icons/"}),"Font Awesome Icon"),")\n(optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string OR React Native Component"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"square-o")))))}j.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return h}));var n=a(0),c=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),O=function(e){var t=c.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},j=function(e){var t=O(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),j=O(a),d=n,h=j["".concat(r,".").concat(d)]||j[d]||p[d]||b;return a?c.a.createElement(h,l(l({ref:t},i),{},{components:a})):c.a.createElement(h,l({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,r=new Array(b);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var i=2;i<b;i++)r[i]=a[i];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},236:function(e,t,a){"use strict";var n=a(0),c=a(20);t.a=function(){var e=Object(n.useContext)(c.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},237:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return r}));var n=a(236),c=a(238);function b(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var b=void 0===n?{}:n,r=b.forcePrependBaseUrl,l=void 0!==r&&r,o=b.absolute,i=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(c.b)(a))return a;if(l)return t+a;var O=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+O:O}(b,a,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},238:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}))}}]);