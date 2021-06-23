(window.webpackJsonp=window.webpackJsonp||[]).push([[133,67],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),r=(a(0),a(291)),c=a(85),i={id:"tab",title:"Tabs",slug:"/tab"},l={unversionedId:"main/tab",id:"main/tab",isDocsHomePage:!1,title:"Tabs",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/docs/main/tab.md",slug:"/tab",permalink:"/docs/next/tab",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/tab.md",version:"current",sidebar:"docs",previous:{title:"Switch",permalink:"/docs/next/switch"},next:{title:"Text",permalink:"/docs/next/text"}},o=[{value:"Usage",id:"usage",children:[]}],p={rightToc:o};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),Object(r.b)("div",{className:"component-preview component-preview--grid component-preview--grid-10"},Object(r.b)("figure",null,Object(r.b)("img",{src:"/img/tab.jpg",alt:"Floating Action Button"}))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Tab } from 'react-native-elements';\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<Tab value={0}>\n  <Tab.Item title=\"recent\" />\n  <Tab.Item title=\"favorite\" />\n  <Tab.Item title=\"cart\" />\n</Tab>\n\n <TabView value={index} onChange={setIndex} >\n  <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>\n    <Text h1>Recent</Text>\n  </TabView.Item>\n  <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>\n    <Text h1>Favorite</Text>\n  </TabView.Item>\n  <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>\n    <Text h1>Cart</Text>\n  </TabView.Item>\n</TabView>\n")),Object(r.b)("hr",null),Object(r.b)(c.default,{mdxType:"Props"}),Object(r.b)("hr",null))}d.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(a),j=n,m=d["".concat(c,".").concat(j)]||d[j]||O[j]||r;return a?b.a.createElement(m,i(i({ref:t},o),{},{components:a})):b.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),b=a(7),r=(a(0),a(291)),c={},i={unversionedId:"main/props/tab",id:"main/props/tab",isDocsHomePage:!1,title:"tab",description:"Props",source:"@site/docs/main/props/tab.md",slug:"/main/props/tab",permalink:"/docs/next/main/props/tab",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/props/tab.md",version:"current"},l=[{value:"Child Component",id:"child-component",children:[{value:"Tab.Item",id:"tabitem",children:[]},{value:"TabView",id:"tabview",children:[]},{value:"TabViewItem",id:"tabviewitem",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>value</code>",id:"value",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>disableIndicator</code>",id:"disableindicator",children:[]},{value:"<code>indicatorStyle</code>",id:"indicatorstyle",children:[]},{value:"<code>variant</code>",id:"variant",children:[]},{value:"<code>animationtype</code>",id:"animationtype",children:[]},{value:"<code>animationconfig</code>",id:"animationconfig",children:[]}]}],o={rightToc:l};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"props"},"Props"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#value"}),Object(r.b)("inlineCode",{parentName:"a"},"value"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onchange"}),Object(r.b)("inlineCode",{parentName:"a"},"onChange"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#disableindicator"}),Object(r.b)("inlineCode",{parentName:"a"},"disableIndicator"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#indicatorstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"indicatorStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#variant"}),Object(r.b)("inlineCode",{parentName:"a"},"variant")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also receives all ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#props"}),"View")," props")),Object(r.b)("h2",{id:"child-component"},"Child Component"),Object(r.b)("h3",{id:"tabitem"},"Tab.Item"),Object(r.b)("h4",{id:"props-1"},"Props"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnativeelements.com/docs/button#props"}),"Button")," props")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"tabview"},"TabView"),Object(r.b)("h4",{id:"props-2"},"Props"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#value"}),Object(r.b)("inlineCode",{parentName:"a"},"value"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onchange"}),Object(r.b)("inlineCode",{parentName:"a"},"onChange"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#animationtype"}),Object(r.b)("inlineCode",{parentName:"a"},"animationType"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#animationconfig"}),Object(r.b)("inlineCode",{parentName:"a"},"animationConfig")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"tabviewitem"},"TabViewItem"),Object(r.b)("h4",{id:"props-3"},"Props"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#props"}),"View")," props")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"value"},Object(r.b)("inlineCode",{parentName:"h3"},"value")),Object(r.b)("p",null,"Child position index value."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"0"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onchange"},Object(r.b)("inlineCode",{parentName:"h3"},"onChange")),Object(r.b)("p",null,"On Index Change Callback"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"none"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disableindicator"},Object(r.b)("inlineCode",{parentName:"h3"},"disableIndicator")),Object(r.b)("p",null,"Disable the indicator below"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"indicatorstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"indicatorStyle")),Object(r.b)("p",null,"Additional styling for tab indicator (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"variant"},Object(r.b)("inlineCode",{parentName:"h3"},"variant")),Object(r.b)("p",null,"Background Variant"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'primary' or 'default'"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"default"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animationtype"},Object(r.b)("inlineCode",{parentName:"h3"},"animationtype")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'spring' or 'timing'"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"spring"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animationconfig"},Object(r.b)("inlineCode",{parentName:"h3"},"animationconfig")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'Object'"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"none"))))),Object(r.b)("hr",null))}p.isMDXComponent=!0}}]);