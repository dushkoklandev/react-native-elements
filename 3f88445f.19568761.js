(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(6),r=(a(0),a(234)),c={id:"button",title:"Button"},l={unversionedId:"button",id:"version-2.3.2/button",isDocsHomePage:!1,title:"Button",description:"Buttons are touchable elements used to interact with the screen. They may",source:"@site/versioned_docs/version-2.3.2/button.md",permalink:"/docs/button",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/button.md",version:"2.3.2",sidebar:"version-2.3.2/docs",previous:{title:"Bottom Sheet",permalink:"/docs/bottomsheet"},next:{title:"ButtonGroup",permalink:"/docs/button_group"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>buttonStyle</code>",id:"buttonstyle",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>disabledStyle</code>",id:"disabledstyle",children:[]},{value:"<code>disabledTitleStyle</code>",id:"disabledtitlestyle",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>iconContainerStyle</code>",id:"iconcontainerstyle",children:[]},{value:"<code>iconRight</code>",id:"iconright",children:[]},{value:"<code>linearGradientProps</code>",id:"lineargradientprops",children:[]},{value:"<code>loading</code>",id:"loading",children:[]},{value:"<code>loadingProps</code>",id:"loadingprops",children:[]},{value:"<code>loadingStyle</code>",id:"loadingstyle",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>raised</code>",id:"raised",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleProps</code>",id:"titleprops",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]},{value:"<code>type</code>",id:"type",children:[]},{value:"<code>TouchableComponent</code>",id:"touchablecomponent",children:[]},{value:"<code>ViewComponent</code>",id:"viewcomponent",children:[]}]},{value:"LinearGradient Usage",id:"lineargradient-usage",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Buttons are touchable elements used to interact with the screen. They may\ndisplay text, icons, or both. Buttons can be styled with several props to look a\nspecific way."),Object(r.b)("div",{className:"component-preview component-preview--grid component-preview--grid-3"},Object(r.b)("figure",null,Object(r.b)("img",{src:"/img/button/button--solid.jpg",alt:"Solid Button"}),Object(r.b)("figcaption",null,"Solid")),Object(r.b)("figure",null,Object(r.b)("img",{src:"/img/button/button--clear.jpg",alt:"Clear Button"}),Object(r.b)("figcaption",null,"Clear")),Object(r.b)("figure",null,Object(r.b)("img",{src:"/img/button/button--outline.jpg",alt:"Outline Button"}),Object(r.b)("figcaption",null,"Outline"))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { Button } from \'react-native-elements\';\nimport Icon from \'react-native-vector-icons/FontAwesome\';\n\n<Button\n  title="Solid Button"\n/>\n\n<Button\n  title="Outline button"\n  type="outline"\n/>\n\n<Button\n  title="Clear button"\n  type="clear"\n/>\n\n<Button\n  icon={\n    <Icon\n      name="arrow-right"\n      size={15}\n      color="white"\n    />\n  }\n  title="Button with icon component"\n/>\n\n<Button\n  icon={{\n    name: "arrow-right",\n    size: 15,\n    color: "white"\n  }}\n  title="Button with icon object"\n/>\n\n<Button\n  icon={\n    <Icon\n      name="arrow-right"\n      size={15}\n      color="white"\n    />\n  }\n  iconRight\n  title="Button with right icon"\n/>\n\n<Button\n  title="Loading button"\n  loading\n/>\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props"}),"TouchableNativeFeedback"),"\n(Android) or\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/touchableopacity.html#props"}),"TouchableOpacity"),"\n(iOS) props")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#buttonstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"buttonStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#disabled"}),Object(r.b)("inlineCode",{parentName:"a"},"disabled"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#disabledstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"disabledStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#disabledtitlestyle"}),Object(r.b)("inlineCode",{parentName:"a"},"disabledTitleStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#icon"}),Object(r.b)("inlineCode",{parentName:"a"},"icon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#iconcontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"iconContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#iconright"}),Object(r.b)("inlineCode",{parentName:"a"},"iconRight"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#lineargradientprops"}),Object(r.b)("inlineCode",{parentName:"a"},"linearGradientProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#loading"}),Object(r.b)("inlineCode",{parentName:"a"},"loading"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#loadingprops"}),Object(r.b)("inlineCode",{parentName:"a"},"loadingProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#loadingstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"loadingStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onpress"}),Object(r.b)("inlineCode",{parentName:"a"},"onPress"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#raised"}),Object(r.b)("inlineCode",{parentName:"a"},"raised"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#title"}),Object(r.b)("inlineCode",{parentName:"a"},"title"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#titleprops"}),Object(r.b)("inlineCode",{parentName:"a"},"titleProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#titlestyle"}),Object(r.b)("inlineCode",{parentName:"a"},"titleStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#type"}),Object(r.b)("inlineCode",{parentName:"a"},"type"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#touchablecomponent"}),Object(r.b)("inlineCode",{parentName:"a"},"TouchableComponent"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#viewcomponent"}),Object(r.b)("inlineCode",{parentName:"a"},"ViewComponent")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"buttonstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"buttonStyle")),Object(r.b)("p",null,"add additional styling for button component (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"containerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(r.b)("p",null,"styling for Component container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabled"},Object(r.b)("inlineCode",{parentName:"h3"},"disabled")),Object(r.b)("p",null,"disables user interaction"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabledstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"disabledStyle")),Object(r.b)("p",null,"style of the button when disabled"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabledtitlestyle"},Object(r.b)("inlineCode",{parentName:"h3"},"disabledTitleStyle")),Object(r.b)("p",null,"style of the title when disabled"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Text style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"icon"},Object(r.b)("inlineCode",{parentName:"h3"},"icon")),Object(r.b)("p",null,"displays a centered icon (when no title) or to the left (with text). (can be\nused along with iconRight as well). Can be an object or a custom component."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/icon#props"}),"...Icon props"),"}",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"OR"),Object(r.b)("br",null)," component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"iconcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"iconContainerStyle")),Object(r.b)("p",null,"styling for Icon Component container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"iconright"},Object(r.b)("inlineCode",{parentName:"h3"},"iconRight")),Object(r.b)("p",null,"displays Icon to the right of title. Needs to be used along with ",Object(r.b)("inlineCode",{parentName:"p"},"icon")," prop"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"lineargradientprops"},Object(r.b)("inlineCode",{parentName:"h3"},"linearGradientProps")),Object(r.b)("p",null,"displays a linear gradient. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#lineargradient-usage"}),"usage"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/react-native-community/react-native-linear-gradient#additional-props"}),"...Gradient props"),"}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"loading"},Object(r.b)("inlineCode",{parentName:"h3"},"loading")),Object(r.b)("p",null,"prop to display a loading spinner (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"loadingprops"},Object(r.b)("inlineCode",{parentName:"h3"},"loadingProps")),Object(r.b)("p",null,"add additional props for ActivityIndicator component (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://facebook.github.io/react-native/docs/activityindicator#props"}),"...ActivityIndicator props"),"}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal object")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"loadingstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"loadingStyle")),Object(r.b)("p",null,"add additional styling for loading component (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpress"},Object(r.b)("inlineCode",{parentName:"h3"},"onPress")),Object(r.b)("p",null,"onPress method (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"raised"},Object(r.b)("inlineCode",{parentName:"h3"},"raised")),Object(r.b)("p",null,"Add raised button styling (optional). Has no effect if ",Object(r.b)("inlineCode",{parentName:"p"},'type="clear"'),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"title"},Object(r.b)("inlineCode",{parentName:"h3"},"title")),Object(r.b)("p",null,"button title (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"titleprops"},Object(r.b)("inlineCode",{parentName:"h3"},"titleProps")),Object(r.b)("p",null,"add additional props for Text component (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://facebook.github.io/react-native/docs/text#props"}),"...Text props"),"}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"titlestyle"},Object(r.b)("inlineCode",{parentName:"h3"},"titleStyle")),Object(r.b)("p",null,"add additional styling for title component (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Text style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"type"},Object(r.b)("inlineCode",{parentName:"h3"},"type")),Object(r.b)("p",null,"Type of button (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"solid"),", ",Object(r.b)("inlineCode",{parentName:"td"},"clear"),", ",Object(r.b)("inlineCode",{parentName:"td"},"outline")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"solid")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"touchablecomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"TouchableComponent")),Object(r.b)("p",null,"component for user interaction"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Touchable Component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TouchableOpacity (ios) or TouchableNativeFeedback (android)")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"viewcomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"ViewComponent")),Object(r.b)("p",null,"component for container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"lineargradient-usage"},"LinearGradient Usage"),Object(r.b)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-linear-gradient"}),"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",Object(r.b)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),Object(r.b)("p",null,"For react-native-cli users, make sure to follow the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"}),"installation instructions"),"\nand use it like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Button } from 'react-native-elements';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Button\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")))}p.isMDXComponent=!0},234:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||r;return a?b.a.createElement(m,l(l({ref:t},o),{},{components:a})):b.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);