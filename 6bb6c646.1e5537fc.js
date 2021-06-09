(window.webpackJsonp=window.webpackJsonp||[]).push([[98,59],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(291)),i=n(292),c=n(78),b={id:"bottomsheet",title:"Bottom Sheet"},l={unversionedId:"bottomsheet",id:"version-3.4.2/bottomsheet",isDocsHomePage:!1,title:"Bottom Sheet",description:"Note:",source:"@site/versioned_docs/version-3.4.2/bottomsheet.md",slug:"/bottomsheet",permalink:"/docs/bottomsheet",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/bottomsheet.md",version:"3.4.2",sidebar:"version-3.4.2/docs",previous:{title:"Badge",permalink:"/docs/badge"},next:{title:"Button",permalink:"/docs/button"}},s=[{value:"Usage",id:"usage",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/#step-3-setup-react-native-safe-area-context"}),"Step 3")," in the setup guide before using ",Object(o.b)("inlineCode",{parentName:"p"},"BottomSheet"),"."),Object(o.b)("p",null,"Overlay Modal that displays content from the bottom of the screen."),Object(o.b)("img",{src:Object(i.a)("img/bottomsheet.gif"),alt:"Bottom Sheet Component"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [isVisible, setIsVisible] = useState(false);\nconst list = [\n  { title: 'List Item 1' },\n  { title: 'List Item 2' },\n  {\n    title: 'Cancel',\n    containerStyle: { backgroundColor: 'red' },\n    titleStyle: { color: 'white' },\n    onPress: () => setIsVisible(false),\n  },\n];\n\n<BottomSheet\n  isVisible={isVisible}\n  containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}\n>\n  {list.map((l, i) => (\n    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>\n      <ListItem.Content>\n        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>\n      </ListItem.Content>\n    </ListItem>\n  ))}\n</BottomSheet>;\n")),Object(o.b)("hr",null),Object(o.b)(c.default,{mdxType:"Props"}),Object(o.b)("hr",null))}u.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(22),a=n(293);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,b=o.absolute,l=void 0!==b&&b;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},293:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(291)),i={},c={unversionedId:"props/bottomsheet",id:"version-3.4.2/props/bottomsheet",isDocsHomePage:!1,title:"bottomsheet",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/bottomsheet.md",slug:"/props/bottomsheet",permalink:"/docs/props/bottomsheet",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/bottomsheet.md",version:"3.4.2"},b=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>isVisible</code>",id:"isvisible",children:[]},{value:"<code>modalProps</code>",id:"modalprops",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#containerStyle"}),Object(o.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#isvisible"}),Object(o.b)("inlineCode",{parentName:"a"},"isVisible"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#modalprops"}),Object(o.b)("inlineCode",{parentName:"a"},"modalProps")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("h3",{id:"containerstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(o.b)("p",null,"Style of the bottom sheet's container"),Object(o.b)("p",null,"Use this to change the color of the underlay"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"isvisible"},Object(o.b)("inlineCode",{parentName:"h3"},"isVisible")),Object(o.b)("p",null,"Is the modal component shown"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"false")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"modalprops"},Object(o.b)("inlineCode",{parentName:"h3"},"modalProps")),Object(o.b)("p",null,"Additional props handed to the ",Object(o.b)("inlineCode",{parentName:"p"},"Modal")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://reactnative.dev/docs/modal.html#props"}),"Modal Props")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"{}")))))}s.isMDXComponent=!0}}]);