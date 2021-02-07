(window.webpackJsonp=window.webpackJsonp||[]).push([[63,37],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return O}));var a=n(3),b=n(7),r=(n(0),n(260)),c=n(68),l={id:"input",title:"Input"},i={unversionedId:"input",id:"version-3.2.0/input",isDocsHomePage:!1,title:"Input",description:"Inputs allow users to enter text into a UI. They typically appear in forms and",source:"@site/versioned_docs/version-3.2.0/input.md",slug:"/input",permalink:"/docs/input",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.2.0/input.md",version:"3.2.0",sidebar:"version-3.2.0/docs",previous:{title:"Image",permalink:"/docs/image"},next:{title:"ListItem",permalink:"/docs/listitem"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Interaction methods",id:"interaction-methods",children:[{value:"Calling methods on Input",id:"calling-methods-on-input",children:[]}]}],p={rightToc:o};function O(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Inputs allow users to enter text into a UI. They typically appear in forms and\ndialogs."),Object(r.b)("div",{className:"component-preview component-preview--grid"},Object(r.b)("figure",null,Object(r.b)("img",{src:"/img/input/input--placeholder.png",alt:"Input with placeholder"}),Object(r.b)("figcaption",null,"Placeholder")),Object(r.b)("figure",null,Object(r.b)("img",{src:"/img/input/input--label.png",alt:"Input with Label and icons"}),Object(r.b)("figcaption",null,"Label with Icons"))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Icon from 'react-native-vector-icons/FontAwesome';\nimport { Input } from 'react-native-elements';\n\n<Input\n  placeholder='BASIC INPUT'\n/>\n\n<Input\n  placeholder='INPUT WITH ICON'\n  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}\n/>\n\n<Input\n  placeholder='INPUT WITH CUSTOM ICON'\n  leftIcon={\n    <Icon\n      name='user'\n      size={24}\n      color='black'\n    />\n  }\n/>\n\n\n <Input\n   placeholder=\"Comment\"\n   leftIcon={{ type: 'font-awesome', name: 'comment' }}\n   style={styles}\n   onChangeText={value => this.setState({ comment: value })}\n  />\n\n\n<Input\n  placeholder='INPUT WITH ERROR MESSAGE'\n  errorStyle={{ color: 'red' }}\n  errorMessage='ENTER A VALID ERROR HERE'\n/>\n\n<Input placeholder=\"Password\" secureTextEntry={true} />\n")),Object(r.b)("hr",null),Object(r.b)(c.default,{mdxType:"Props"}),Object(r.b)("hr",null),Object(r.b)("h2",{id:"interaction-methods"},"Interaction methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"method"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"focus"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Focuses the Input")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"blur"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Removes focus from the Input")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"clear"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Clears the text in the Input")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isFocused"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Returns ",Object(r.b)("inlineCode",{parentName:"td"},"true")," or ",Object(r.b)("inlineCode",{parentName:"td"},"false")," if the Input is focused")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"setNativeProps"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sets props directly on the react native component")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"shake"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Shakes the input for error feedback")))),Object(r.b)("h3",{id:"calling-methods-on-input"},"Calling methods on Input"),Object(r.b)("p",null,"Store a reference to the Input in your component by using the ref prop\nprovided by React\n(",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),"see docs"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const input = React.createRef();\n\n<Input\n  ref={input}\n  ...\n/>\n")),Object(r.b)("p",null,"You can then use the Input methods like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"input.current.focus();\ninput.current.blur();\ninput.current.clear();\ninput.current.isFocused();\ninput.current.setNativeProps({ value: 'hello' });\ninput.current.shake();\n")))}O.isMDXComponent=!0},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return m}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},O=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(n),d=a,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||r;return n?b.a.createElement(m,l(l({ref:t},o),{},{components:n})):b.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<r;o++)c[o]=n[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),b=n(7),r=(n(0),n(260)),c={},l={unversionedId:"props/input",id:"version-3.2.0/props/input",isDocsHomePage:!1,title:"input",description:"Props",source:"@site/versioned_docs/version-3.2.0/props/input.md",slug:"/props/input",permalink:"/docs/props/input",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.2.0/props/input.md",version:"3.2.0"},i=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>disabledInputStyle</code>",id:"disabledinputstyle",children:[]},{value:"<code>errorMessage</code>",id:"errormessage",children:[]},{value:"<code>errorProps</code>",id:"errorprops",children:[]},{value:"<code>errorStyle</code>",id:"errorstyle",children:[]},{value:"<code>InputComponent</code>",id:"inputcomponent",children:[]},{value:"<code>inputContainerStyle</code>",id:"inputcontainerstyle",children:[]},{value:"<code>inputStyle</code>",id:"inputstyle",children:[]},{value:"<code>label</code>",id:"label",children:[]},{value:"<code>labelProps</code>",id:"labelprops",children:[]},{value:"<code>labelStyle</code>",id:"labelstyle",children:[]},{value:"<code>leftIcon</code>",id:"lefticon",children:[]},{value:"<code>leftIconContainerStyle</code>",id:"lefticoncontainerstyle",children:[]},{value:"<code>placeholder</code>",id:"placeholder",children:[]},{value:"<code>renderErrorMessage</code>",id:"rendererrormessage",children:[]},{value:"<code>rightIcon</code>",id:"righticon",children:[]},{value:"<code>rightIconContainerStyle</code>",id:"righticoncontainerstyle",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This component inherits\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/textinput.html"}),"all native TextInput props that come with a standard React Native TextInput element"),",\nalong with the following:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#containerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabled"}),Object(r.b)("inlineCode",{parentName:"a"},"disabled"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabledinputstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"disabledInputStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#errormessage"}),Object(r.b)("inlineCode",{parentName:"a"},"errorMessage"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#errorprops"}),Object(r.b)("inlineCode",{parentName:"a"},"errorProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#errorstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"errorStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#inputcomponent"}),Object(r.b)("inlineCode",{parentName:"a"},"InputComponent"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#inputcontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"inputContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#inputstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"inputStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#label"}),Object(r.b)("inlineCode",{parentName:"a"},"label"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#labelprops"}),Object(r.b)("inlineCode",{parentName:"a"},"labelProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#labelstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"labelStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#lefticon"}),Object(r.b)("inlineCode",{parentName:"a"},"leftIcon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#lefticoncontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"leftIconContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#rendererrormessage"}),Object(r.b)("inlineCode",{parentName:"a"},"renderErrorMessage"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#righticon"}),Object(r.b)("inlineCode",{parentName:"a"},"rightIcon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#righticoncontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"rightIconContainerStyle")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"containerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(r.b)("p",null,"styling for view containing the label, the input and the error message"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabled"},Object(r.b)("inlineCode",{parentName:"h3"},"disabled")),Object(r.b)("p",null,"disables the input component"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabledinputstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"disabledInputStyle")),Object(r.b)("p",null,"disabled styles that will be passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"style")," props of the React Native ",Object(r.b)("inlineCode",{parentName:"p"},"TextInput")," (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Text style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"errormessage"},Object(r.b)("inlineCode",{parentName:"h3"},"errorMessage")),Object(r.b)("p",null,"adds error message (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"errorprops"},Object(r.b)("inlineCode",{parentName:"h3"},"errorProps")),Object(r.b)("p",null,"props to be passed to the React Native ",Object(r.b)("inlineCode",{parentName:"p"},"Text")," component used to display the\nerror message (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://reactnative.dev/docs/text#props"}),"...Text props"),"}"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"errorstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"errorStyle")),Object(r.b)("p",null,"add styling to error message (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"inputcomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"InputComponent")),Object(r.b)("p",null,"component that will be rendered in place of the React Native ",Object(r.b)("inlineCode",{parentName:"p"},"TextInput"),"\n(optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"TextInput")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"inputcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"inputContainerStyle")),Object(r.b)("p",null,"styling for Input Component Container (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"inputstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"inputStyle")),Object(r.b)("p",null,"style that will be passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"style")," props of the React Native ",Object(r.b)("inlineCode",{parentName:"p"},"TextInput"),"\n(optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"label"},Object(r.b)("inlineCode",{parentName:"h3"},"label")),Object(r.b)("p",null,"add a label on top of the input (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string ",Object(r.b)("strong",{parentName:"td"},"OR")," React element or component"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"labelprops"},Object(r.b)("inlineCode",{parentName:"h3"},"labelProps")),Object(r.b)("p",null,"props to be passed to the React Native ",Object(r.b)("inlineCode",{parentName:"p"},"Text")," component used to display the\nlabel or React Component used instead of simple string in ",Object(r.b)("inlineCode",{parentName:"p"},"label")," prop\n(optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://reactnative.dev/docs/text.html#props"}),"...Text props"),"} ",Object(r.b)("strong",{parentName:"td"},"OR")," passed component props"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"labelstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"labelStyle")),Object(r.b)("p",null,"styling for the label (optional); You can only use this if ",Object(r.b)("inlineCode",{parentName:"p"},"label")," is a string"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"lefticon"},Object(r.b)("inlineCode",{parentName:"h3"},"leftIcon")),Object(r.b)("p",null,"displays an icon on the left (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/props/icon#props"}),"...Icon props"),"}",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"OR"),Object(r.b)("br",null)," component"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"lefticoncontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"leftIconContainerStyle")),Object(r.b)("p",null,"styling for left Icon Component container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"placeholder"},Object(r.b)("inlineCode",{parentName:"h3"},"placeholder")),Object(r.b)("p",null,"Placeholder text for the input"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rendererrormessage"},Object(r.b)("inlineCode",{parentName:"h3"},"renderErrorMessage")),Object(r.b)("p",null,"If the error message container should be rendered (take up vertical space). If ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", when showing errorMessage, the layout will shift to add it at that time."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"true")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"righticon"},Object(r.b)("inlineCode",{parentName:"h3"},"rightIcon")),Object(r.b)("p",null,"displays an icon on the right (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/props/icon#props"}),"...Icon props"),"}",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"OR"),Object(r.b)("br",null)," component"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"righticoncontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"rightIconContainerStyle")),Object(r.b)("p",null,"styling for right Icon Component container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h4",{id:"styles-explanation"},"Styles explanation"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Input with a label and an error message"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Styles explanation"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{src:"/img/input_without_explanation.png"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{src:"/img/input_with_explanation.png"}))))))}p.isMDXComponent=!0}}]);