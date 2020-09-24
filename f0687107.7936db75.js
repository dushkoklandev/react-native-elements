(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(6),r=(a(0),a(235)),c={id:"tooltip",title:"Tooltip"},l={unversionedId:"tooltip",id:"version-2.3.2/tooltip",isDocsHomePage:!1,title:"Tooltip",description:"Tooltips display informative text when users tap on an element.",source:"@site/versioned_docs/version-2.3.2/tooltip.md",slug:"/tooltip",permalink:"/docs/tooltip",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/tooltip.md",version:"2.3.2",sidebar:"version-2.3.2/docs",previous:{title:"Tile",permalink:"/docs/tile"},next:{title:"Contributing",permalink:"/docs/contributing"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>highlightColor</code>",id:"highlightcolor",children:[]},{value:"<code>onClose</code>",id:"onclose",children:[]},{value:"<code>onOpen</code>",id:"onopen",children:[]},{value:"<code>overlayColor</code>",id:"overlaycolor",children:[]},{value:"<code>pointerColor</code>",id:"pointercolor",children:[]},{value:"<code>popover</code>",id:"popover",children:[]},{value:"<code>toggleOnPress</code>",id:"toggleonpress",children:[]},{value:"<code>width</code>",id:"width",children:[]},{value:"<code>withOverlay</code>",id:"withoverlay",children:[]},{value:"<code>withPointer</code>",id:"withpointer",children:[]},{value:"<code>toggleAction</code>",id:"toggleaction",children:[]},{value:"<code>skipAndroidStatusBar</code>",id:"skipandroidstatusbar",children:[]},{value:"<code>ModalComponent</code>",id:"modalcomponent",children:[]}]},{value:"Interaction methods",id:"interaction-methods",children:[{value:"<code>closeOnlyOnBackdropPress</code>",id:"closeonlyonbackdroppress",children:[]}]}],i={rightToc:o};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Tooltips display informative text when users tap on an element."),Object(r.b)("img",{alt:"tooltip example gif",width:"290",src:"/react-native-elements/img/tooltipExample.gif"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Tooltip, Text } from 'react-native-elements';\n\n...\n\n<Tooltip popover={<Text>Info here</Text>}>\n  <Text>Press me</Text>\n</Tooltip>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Web-platform specific note:"),Object(r.b)("p",{parentName:"blockquote"},"You ",Object(r.b)("strong",{parentName:"p"},"must")," pass a valid React Native ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/modal"}),Object(r.b)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#modalcomponent"}),Object(r.b)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",Object(r.b)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-web"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Tooltip ModalComponent={Modal} ... />\n...\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#backgroundcolor"}),Object(r.b)("inlineCode",{parentName:"a"},"backgroundColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#height"}),Object(r.b)("inlineCode",{parentName:"a"},"height"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#highlightcolor"}),Object(r.b)("inlineCode",{parentName:"a"},"highlightColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onclose"}),Object(r.b)("inlineCode",{parentName:"a"},"onClose"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onopen"}),Object(r.b)("inlineCode",{parentName:"a"},"onOpen"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#overlaycolor"}),Object(r.b)("inlineCode",{parentName:"a"},"overlayColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#pointercolor"}),Object(r.b)("inlineCode",{parentName:"a"},"pointerColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#popover"}),Object(r.b)("inlineCode",{parentName:"a"},"popover"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#toggleonpress"}),Object(r.b)("inlineCode",{parentName:"a"},"toggleOnPress"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#width"}),Object(r.b)("inlineCode",{parentName:"a"},"width"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#withoverlay"}),Object(r.b)("inlineCode",{parentName:"a"},"withOverlay"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#withpointer"}),Object(r.b)("inlineCode",{parentName:"a"},"withPointer"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#toggleaction"}),Object(r.b)("inlineCode",{parentName:"a"},"toggleAction"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#skipandroidstatusbar"}),Object(r.b)("inlineCode",{parentName:"a"},"skipAndroidStatusBar"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#modalcomponent"}),Object(r.b)("inlineCode",{parentName:"a"},"ModalComponent"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#closeonlyonbackdroppress"}),Object(r.b)("inlineCode",{parentName:"a"},"closeOnlyOnBackdropPress")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"backgroundcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(r.b)("p",null,"sets backgroundColor of the tooltip and pointer."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"#617080")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"containerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(r.b)("p",null,"Passes style object to tooltip container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"height"},Object(r.b)("inlineCode",{parentName:"h3"},"height")),Object(r.b)("p",null,"Tooltip container height. Necessary in order to render the container in the\ncorrect place. Pass height according to the size of the content rendered inside\nthe container."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"40")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"highlightcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"highlightColor")),Object(r.b)("p",null,"Color to highlight the item the tooltip is surrounding."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"transparent")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onclose"},Object(r.b)("inlineCode",{parentName:"h3"},"onClose")),Object(r.b)("p",null,"function which gets called on closing the tooltip."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"() => {}")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onopen"},Object(r.b)("inlineCode",{parentName:"h3"},"onOpen")),Object(r.b)("p",null,"function which gets called on opening the tooltip."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"() => {}")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"overlaycolor"},Object(r.b)("inlineCode",{parentName:"h3"},"overlayColor")),Object(r.b)("p",null,"Color of overlay shadow when tooltip is open."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'rgba(250, 250, 250, 0.70)'")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pointercolor"},Object(r.b)("inlineCode",{parentName:"h3"},"pointerColor")),Object(r.b)("p",null,"Color of tooltip pointer, it defaults to the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#backgroundcolor"}),Object(r.b)("inlineCode",{parentName:"a"},"backgroundColor"))," if none is passed ."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#backgroundcolor"}),Object(r.b)("inlineCode",{parentName:"a"},"backgroundColor")))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"popover"},Object(r.b)("inlineCode",{parentName:"h3"},"popover")),Object(r.b)("p",null,"Component to be rendered as the display container."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React.Element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toggleonpress"},Object(r.b)("inlineCode",{parentName:"h3"},"toggleOnPress")),Object(r.b)("p",null,"Flag to determine to toggle or not the tooltip on press."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"true")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"width"},Object(r.b)("inlineCode",{parentName:"h3"},"width")),Object(r.b)("p",null,"Tooltip container width. Necessary in order to render the container in the\ncorrect place. Pass height according to the size of the content rendered inside\nthe container."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"150")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"withoverlay"},Object(r.b)("inlineCode",{parentName:"h3"},"withOverlay")),Object(r.b)("p",null,"Flag to determine whether or not display overlay shadow when tooltip is open."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"true")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"withpointer"},Object(r.b)("inlineCode",{parentName:"h3"},"withPointer")),Object(r.b)("p",null,"Flag to determine whether or not to display the pointer."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"true")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"toggleaction"},Object(r.b)("inlineCode",{parentName:"h3"},"toggleAction")),Object(r.b)("p",null,"Define type of action that should trigger tooltip.\nAvailable options ",Object(r.b)("em",{parentName:"p"},"onPress"),", ",Object(r.b)("em",{parentName:"p"},"onLongPress")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"onPress")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"skipandroidstatusbar"},Object(r.b)("inlineCode",{parentName:"h3"},"skipAndroidStatusBar")),Object(r.b)("p",null,"Force skip StatusBar height when calculating element position. Pass ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if Tooltip used inside react-native Modal component."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"modalcomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"ModalComponent")),Object(r.b)("p",null,"override React Native ",Object(r.b)("inlineCode",{parentName:"p"},"Modal")," component (usable for web-platform)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Modal")))),Object(r.b)("h2",{id:"interaction-methods"},"Interaction methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"method"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"toggleTooltip"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Toggles tooltip manually. (",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#toggle-tooltip-example"}),"example"),")")))),Object(r.b)("h4",{id:"toggletooltip-example"},Object(r.b)("inlineCode",{parentName:"h4"},"toggleTooltip")," example"),Object(r.b)("p",null,"Store a reference to the Tooltip in your component by using the ref prop\nprovided by React (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),"see docs"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const tooltipRef = useRef(null);\n\n...\n\n<Tooltip\n  ref={tooltipRef}\n  ...\n/>\n")),Object(r.b)("p",null,"Then you can manually trigger tooltip from anywhere for example when screen loads:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"useEffect(() => {\n  tooltipRef.current.toggleTooltip();\n}, []);\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"closeonlyonbackdroppress"},Object(r.b)("inlineCode",{parentName:"h3"},"closeOnlyOnBackdropPress")),Object(r.b)("p",null,"Flag to determine whether to disable auto hiding of tooltip when touching/scrolling anywhere inside the active tooltip popover container."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When ",Object(r.b)("inlineCode",{parentName:"li"},"true"),", Tooltip closes only when overlay backdrop is pressed (or) highlighted tooltip button is pressed.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null))}p.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),p=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||r;return a?b.a.createElement(m,l(l({ref:t},i),{},{components:a})):b.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);