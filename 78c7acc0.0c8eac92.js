(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{284:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},O=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=p(n),m=r,s=O["".concat(b,".").concat(m)]||O[m]||d[m]||c;return n?a.a.createElement(s,o(o({ref:t},l),{},{components:n})):a.a.createElement(s,o({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var l=2;l<c;l++)b[l]=n[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(284)),b={},o={unversionedId:"props/switch",id:"props/switch",isDocsHomePage:!1,title:"switch",description:"Props",source:"@site/docs/props/switch.md",slug:"/props/switch",permalink:"/docs/next/props/switch",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/props/switch.md",version:"current"},i=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>color</code>",id:"color",children:[]},{value:"<code>theme</code>",id:"theme",children:[]},{value:"<code>style</code>",id:"style",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This component inherits\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/switch.html"}),"all native Switch props that come with a standard React Native Switch element"),",\nalong with the following:")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#color"}),Object(c.b)("inlineCode",{parentName:"a"},"color"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#theme"}),Object(c.b)("inlineCode",{parentName:"a"},"theme"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#style"}),Object(c.b)("inlineCode",{parentName:"a"},"style")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("h3",{id:"color"},Object(c.b)("inlineCode",{parentName:"h3"},"color")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"color")," of the Switch defines a color to the switch thumb. (optional)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Theme(Primary)")))),Object(c.b)("h3",{id:"theme"},Object(c.b)("inlineCode",{parentName:"h3"},"theme")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"theme")," of the Switch provide a theme to the switch. (optional)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Theme(Primary)")))),Object(c.b)("h3",{id:"style"},Object(c.b)("inlineCode",{parentName:"h3"},"style")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"style")," is used to define user defined styles on the switch and allows styles provided by Native Switch."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"none")))))}p.isMDXComponent=!0}}]);