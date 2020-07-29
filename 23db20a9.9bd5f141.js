(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{252:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(a),j=n,m=O["".concat(c,".").concat(j)]||O[j]||d[j]||b;return a?r.a.createElement(m,l(l({ref:t},i),{},{components:a})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),b=(a(0),a(252)),c={id:"overlay",title:"Overlay"},l={unversionedId:"overlay",id:"overlay",isDocsHomePage:!1,title:"Overlay",description:"The Overlay is a view that floats above an app\u2019s content. Overlays are an easy",source:"@site/docs/overlay.md",permalink:"/react-native-elements/docs/next/overlay",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/overlay.md",version:"next",sidebar:"docs",previous:{title:"ListItem",permalink:"/react-native-elements/docs/next/listitem"},next:{title:"Pricing",permalink:"/react-native-elements/docs/next/pricing"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>children</code>",id:"children",children:[]},{value:"<code>backdropStyle</code>",id:"backdropstyle",children:[]},{value:"<code>fullScreen</code>",id:"fullscreen",children:[]},{value:"<code>isVisible</code>",id:"isvisible",children:[]},{value:"<code>overlayStyle</code>",id:"overlaystyle",children:[]},{value:"<code>onBackdropPress</code>",id:"onbackdroppress",children:[]},{value:"<code>ModalComponent</code>",id:"modalcomponent",children:[]}]}],i={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The Overlay is a view that floats above an app\u2019s content. Overlays are an easy\nway to inform or request information from the user."),Object(b.b)("img",{src:"/react-native-elements/img/overlay.png",width:"400"}),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport { Button, Overlay } from 'react-native-elements';\n\nconst OverlayExample = () => {\n  const [visible, setVisible] = useState(false);\n\n  const toggleOverlay = () => {\n    setVisible(!visible);\n  };\n\n  return (\n    <View>\n      <Button title=\"Open Overlay\" onPress={toggleOverlay} />\n\n      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>\n        <Text>Hello from Overlay!</Text>\n      </Overlay>\n    </View>\n  );\n};\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Web-platform specific note:"),Object(b.b)("p",{parentName:"blockquote"},"You ",Object(b.b)("strong",{parentName:"p"},"must")," pass a valid React Native ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/modal"}),Object(b.b)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#modalcomponent"}),Object(b.b)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",Object(b.b)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",Object(b.b)("inlineCode",{parentName:"p"},"react-native-web"))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Overlay ModalComponent={Modal} ... />\n...\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/modal#props"}),"Modal")," props")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#backdropStyle"}),Object(b.b)("inlineCode",{parentName:"a"},"backdropStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#children"}),Object(b.b)("inlineCode",{parentName:"a"},"children"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#fullscreen"}),Object(b.b)("inlineCode",{parentName:"a"},"fullScreen"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#isvisible"}),Object(b.b)("inlineCode",{parentName:"a"},"isVisible"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onbackdroppress"}),Object(b.b)("inlineCode",{parentName:"a"},"onBackdropPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#overlaystyle"}),Object(b.b)("inlineCode",{parentName:"a"},"overlayStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#modalcomponent"}),Object(b.b)("inlineCode",{parentName:"a"},"ModalComponent")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"children"},Object(b.b)("inlineCode",{parentName:"h3"},"children")),Object(b.b)("p",null,"What the modal will render"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React Element"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"backdropstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"backdropStyle")),Object(b.b)("p",null,"Style of the backdrop container"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View Style (object)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fullscreen"},Object(b.b)("inlineCode",{parentName:"h3"},"fullScreen")),Object(b.b)("p",null,"If set to true, the modal will take up the entire screen width and height"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isvisible"},Object(b.b)("inlineCode",{parentName:"h3"},"isVisible")),Object(b.b)("p",null,"If true, the overlay is visible"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"overlaystyle"},Object(b.b)("inlineCode",{parentName:"h3"},"overlayStyle")),Object(b.b)("p",null,"style of the actual overlay"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View Style (object)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onbackdroppress"},Object(b.b)("inlineCode",{parentName:"h3"},"onBackdropPress")),Object(b.b)("p",null,"handler for backdrop press (only works when ",Object(b.b)("inlineCode",{parentName:"p"},"fullscreen")," is false)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"modalcomponent"},Object(b.b)("inlineCode",{parentName:"h3"},"ModalComponent")),Object(b.b)("p",null,"override React Native ",Object(b.b)("inlineCode",{parentName:"p"},"Modal")," component (usable for web-platform)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Modal")))))}p.isMDXComponent=!0}}]);