(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(252)),o=n(254),c={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},l={unversionedId:"getting_started",id:"version-1.2.0/getting_started",isDocsHomePage:!0,title:"Getting Started",description:"The aim of React Native Elements is to provide an all-in-one UI kit for creating",source:"@site/versioned_docs/version-1.2.0/getting_started.md",permalink:"/react-native-elements/docs/1.2.0/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/getting_started.md",version:"1.2.0",sidebar_label:"Getting Started",sidebar:"version-1.2.0/docs",next:{title:"Overview",permalink:"/react-native-elements/docs/1.2.0/overview"}},s=[{value:"Installation",id:"installation",children:[{value:"Step 1: Install react-native-elements",id:"step-1-install-react-native-elements",children:[]},{value:"Step 2: Install react-native-vector-icons",id:"step-2-install-react-native-vector-icons",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The aim of React Native Elements is to provide an all-in-one UI kit for creating\napps in react native. There are many great ui components made by developers all\naround open source. React Native Elements takes the hassle of assembling these\npackages together by giving you a ready made kit with consistent api and look\nand feel."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Installing React Native Elements depends on your type of react native project."),Object(i.b)("div",{class:"toggler"},Object(i.b)("ul",{role:"tablist"},Object(i.b)("li",{id:"expo",class:"button-expo","aria-selected":"false",role:"tab",tabindex:"0","aria-controls":"expo",onclick:"displayTab('expo')"},"Expo | Create React Native App"),Object(i.b)("li",{id:"native",class:"button-native","aria-selected":"false",role:"tab",tabindex:"-1","aria-controls":"nativetab",onclick:"displayTab('native')"},"React Native CLI"))),Object(i.b)("block",{class:"expo"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://expo.io"}),"Expo")," or\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-community/create-react-native-app"}),"create-react-native-app"),"\nprojects include ",Object(i.b)("strong",{parentName:"p"},"react-native-vector-icons")," out of the box, so all you need\nto do is install ",Object(i.b)("strong",{parentName:"p"},"react-native-elements"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add react-native-elements\n# or with npm\nnpm install react-native-elements\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," If you see the ",Object(i.b)("inlineCode",{parentName:"p"},"UNMET PEER DEPENDENCY")," warning for\n",Object(i.b)("strong",{parentName:"p"},"react-native-vector-icons")," like below, you can ignore it as\n",Object(i.b)("em",{parentName:"p"},"react-native-vector-icons")," is already installed by ",Object(i.b)("em",{parentName:"p"},"expo")," or ",Object(i.b)("em",{parentName:"p"},"crna"),"."),Object(i.b)("img",{alt:"React Native Vector Icons Unmet Peer Dependency",src:Object(o.a)("img/peer-dep-error.png")})),Object(i.b)("block",{class:"native"}),Object(i.b)("p",null,"If your project is a standard React Native project created using\n",Object(i.b)("inlineCode",{parentName:"p"},"react-native init")," (it should have an ios/android directory), then follow these\ninstallation instructions:"),Object(i.b)("h3",{id:"step-1-install-react-native-elements"},"Step 1: Install react-native-elements"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add react-native-elements\n# or with npm\nnpm i react-native-elements --save\n")),Object(i.b)("h3",{id:"step-2-install-react-native-vector-icons"},"Step 2: Install react-native-vector-icons"),Object(i.b)("p",null,"If you have already installed ",Object(i.b)("strong",{parentName:"p"},"react-native-vector-icons")," as a dependency for\nyour project you can skip this step. Otherwise run the following command:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Manual linking of react-native-vector-icons is not necessary if you're using ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"mailto:react-native@0.60.0"}),"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",Object(i.b)("inlineCode",{parentName:"em"},"react-native unlink react-native-vector-icons")," and the process will run as expected."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"# yarn\nyarn add react-native-vector-icons\n# or with npm\nnpm i --save react-native-vector-icons\n\n# link\nreact-native link react-native-vector-icons\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you have any issues installing react-native-vector-icons, check out their\ninstallation guide\n",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/oblador/react-native-vector-icons#installation"}),"here")," or\ndebug it using\n",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/react-native-elements/react-native-elements/issues/503"}),"this issue"),".")),Object(i.b)("p",null,"function displayTab(value) {\nvar container = document.getElementsByTagName('block')","[0]",".parentNode;\ncontainer.className = 'display-' + value;\n}\nfunction convertBlocks() {\n// Convert ",Object(i.b)("div",null,"...",Object(i.b)("span",null,Object(i.b)("block",null)),"..."),"\n// Into ",Object(i.b)("div",null,"...",Object(i.b)("block",null),"..."),"\nvar blocks = document.querySelectorAll('block');\nfor (var i = 0; i < blocks.length; ++i) {\nvar block = blocks","[i]",";\nvar span = blocks","[i]",".parentNode;\nvar container = span.parentNode;\ncontainer.insertBefore(block, span);\ncontainer.removeChild(span);\n}\n// Convert ",Object(i.b)("div",null,"...",Object(i.b)("block",null),"content",Object(i.b)("block",null),"..."),"\n// Into ",Object(i.b)("div",null,"...",Object(i.b)("block",null,"content"),Object(i.b)("block",null),"..."),"\nblocks = document.querySelectorAll('block');\nfor (var i = 0; i < blocks.length; ++i) {\nvar block = blocks","[i]",";\nwhile (\nblock.nextSibling &&\nblock.nextSibling.tagName !== 'BLOCK'\n) {\nppendChild(block.nextSibling);\n}\n}\n}\nconvertBlocks();\ndisplayTab('expo')"))}p.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,v=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(v,c(c({ref:t},s),{},{components:n})):r.a.createElement(v,c({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},254:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(253),r=n(255);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},255:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);