(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),b=(n(0),n(252)),c={id:"badge",title:"Badge"},l={unversionedId:"badge",id:"version-0.19.1/badge",isDocsHomePage:!1,title:"Badge",description:"Badges are small components typically used to communicate a numerical value or",source:"@site/versioned_docs/version-0.19.1/badge.md",permalink:"/react-native-elements/docs/0.19.1/badge",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-0.19.1/badge.md",version:"0.19.1",sidebar:"version-0.19.1/docs",previous:{title:"Avatar",permalink:"/react-native-elements/docs/0.19.1/avatar"},next:{title:"Button",permalink:"/react-native-elements/docs/0.19.1/button"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>children</code>",id:"children",children:[]},{value:"<code>component</code>",id:"component",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>textStyle</code>",id:"textstyle",children:[]},{value:"<code>value</code>",id:"value",children:[]},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",children:[]}]}],i={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Badges are small components typically used to communicate a numerical value or\nindicate the status of an item to the user."),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Badge\n  value={3}\n  textStyle={{ color: 'orange' }}\n/>\n\n<Badge containerStyle={{ backgroundColor: 'violet'}}>\n  <Text>User 1</Text>\n</Badge>\n\n<Badge onPress={() => {console.log('pressed')}} value=\"5\" />\n\n<Badge component={TouchableNative} value={10} />\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#children"}),Object(b.b)("inlineCode",{parentName:"a"},"children"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#component"}),Object(b.b)("inlineCode",{parentName:"a"},"component"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#onpress"}),Object(b.b)("inlineCode",{parentName:"a"},"onPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#textstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"textStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#value"}),Object(b.b)("inlineCode",{parentName:"a"},"value"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"#wrapperstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"wrapperStyle")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"children"},Object(b.b)("inlineCode",{parentName:"h3"},"children")),Object(b.b)("p",null,"Override the default badge contents, mutually exclusive with 'value' property"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"component"},Object(b.b)("inlineCode",{parentName:"h3"},"component")),Object(b.b)("p",null,"Custom component to replace the badge outer component"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native Component"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View, if onPress then TouchableOpacity")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"containerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"Style for the outer badge component"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onPress")),Object(b.b)("p",null,"Function called when pressed on the badge"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"textstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"textStyle")),Object(b.b)("p",null,"Extra styling for icon component (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"value"},Object(b.b)("inlineCode",{parentName:"h3"},"value")),Object(b.b)("p",null,"Text value to be displayed by badge, defaults to empty"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string or number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wrapperstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"wrapperStyle")),Object(b.b)("p",null,"Style for the outer most badge component"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"inherited styling"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))))}p.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(n),j=a,m=d["".concat(c,".").concat(j)]||d[j]||O[j]||b;return n?r.a.createElement(m,l(l({ref:t},i),{},{components:n})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<b;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);