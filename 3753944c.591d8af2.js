(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(6),b=(a(0),a(284)),c=a(286),i={id:"rating",title:"Rating"},l={unversionedId:"rating",id:"version-0.19.1/rating",isDocsHomePage:!1,title:"Rating",description:"An extendable Ratings components for React Native with gestures and an intuitive API",source:"@site/versioned_docs/version-0.19.1/rating.md",permalink:"/react-native-elements/docs/0.19.1/rating",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-0.19.1/rating.md",version:"0.19.1",sidebar:"version-0.19.1/docs",previous:{title:"Pricing",permalink:"/react-native-elements/docs/0.19.1/pricing"},next:{title:"SearchBar",permalink:"/react-native-elements/docs/0.19.1/searchbar"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>onFinishRating</code>",id:"onfinishrating",children:[]},{value:"<code>fractions</code>",id:"fractions-1",children:[]},{value:"<code>imageSize</code>",id:"imagesize",children:[]},{value:"<code>ratingBackgroundColor</code>",id:"ratingbackgroundcolor",children:[]},{value:"<code>ratingColor</code>",id:"ratingcolor",children:[]},{value:"<code>ratingCount</code>",id:"ratingcount",children:[]},{value:"<code>ratingImage</code>",id:"ratingimage",children:[]},{value:"<code>readonly</code>",id:"readonly",children:[]},{value:"<code>showRating</code>",id:"showrating",children:[]},{value:"<code>startingValue</code>",id:"startingvalue",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>type</code>",id:"type",children:[]}]}],p={rightToc:o};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"An extendable Ratings components for React Native with gestures and an intuitive API"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"This component was inspired from ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Monte9/react-native-ratings"}),"react-native-ratings")," by ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Monte9"}),"Monte Thakkar"),".")),Object(b.b)("img",{src:"/react-native-elements/img/rating_component.gif",width:"500"}),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Rating } from 'react-native-elements';\n\nratingCompleted(rating) {\n  console.log(\"Rating is: \" + rating)\n}\n\n<Rating\n  showRating\n  onFinishRating={this.ratingCompleted}\n  style={{ paddingVertical: 10 }}\n/>\n\n<Rating\n  showRating\n  type=\"star\"\n  fractions={1}\n  startingValue={3.6}\n  readonly\n  imageSize={40}\n  onFinishRating={this.ratingCompleted}\n  style={{ paddingVertical: 10 }}\n/>\n\n<Rating\n  type=\"heart\"\n  ratingCount={3}\n  fractions={2}\n  startingValue={1.57}\n  imageSize={40}\n  onFinishRating={this.ratingCompleted}\n  showRating\n  style={{ paddingVertical: 10 }}\n/>\n\n\nconst WATER_IMAGE = require('./water.png')\n\n<Rating\n  type='custom'\n  ratingImage={WATER_IMAGE}\n  ratingColor='#3498db'\n  ratingBackgroundColor='#c8c7c8'\n  ratingCount={10}\n  imageSize={30}\n  onFinishRating={this.ratingCompleted}\n  style={{ paddingVertical: 10 }}\n/>\n")),Object(b.b)("h5",{id:"read-only-mode"},"Read-only mode"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { rating } = this.props;\n\n<Rating\n  imageSize={20}\n  readonly\n  startingValue={rating}\n  style={{ styles.rating }}\n/>\n")),Object(b.b)("img",{alt:"readonly demo jpg",src:Object(c.a)("img/rating_readonly.png")}),Object(b.b)("h5",{id:"fractions"},"Fractions"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Rating showRating fractions={1} startingValue={3.3} />\n")),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif",alt:"Fractions demo gif"}))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onfinishrating"}),Object(b.b)("inlineCode",{parentName:"a"},"onFinishRating"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#fractions"}),Object(b.b)("inlineCode",{parentName:"a"},"fractions"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#imagesize"}),Object(b.b)("inlineCode",{parentName:"a"},"imageSize"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#ratingbackgroundcolor"}),Object(b.b)("inlineCode",{parentName:"a"},"ratingBackgroundColor"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#ratingcolor"}),Object(b.b)("inlineCode",{parentName:"a"},"ratingColor"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#ratingcount"}),Object(b.b)("inlineCode",{parentName:"a"},"ratingCount"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#ratingimage"}),Object(b.b)("inlineCode",{parentName:"a"},"ratingImage"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#readonly"}),Object(b.b)("inlineCode",{parentName:"a"},"readonly"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#showrating"}),Object(b.b)("inlineCode",{parentName:"a"},"showRating"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#startingvalue"}),Object(b.b)("inlineCode",{parentName:"a"},"startingValue"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#style"}),Object(b.b)("inlineCode",{parentName:"a"},"style"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#type"}),Object(b.b)("inlineCode",{parentName:"a"},"type")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"onfinishrating"},Object(b.b)("inlineCode",{parentName:"h3"},"onFinishRating")),Object(b.b)("p",null,"Callback method when the user finishes rating. Gives you the final rating value as a whole number ",Object(b.b)("strong",{parentName:"p"},"(required)")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fractions-1"},Object(b.b)("inlineCode",{parentName:"h3"},"fractions")),Object(b.b)("p",null,"The number of decimal places for the rating value; must be between 0 and 20 (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"undefined")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"imagesize"},Object(b.b)("inlineCode",{parentName:"h3"},"imageSize")),Object(b.b)("p",null,"The size of each rating image (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"50")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ratingbackgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"ratingBackgroundColor")),Object(b.b)("p",null,"Pass in a custom background-fill-color for the rating icon; use this along with ",Object(b.b)("inlineCode",{parentName:"p"},"type='custom'")," prop above (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string (color)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"white")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ratingcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"ratingColor")),Object(b.b)("p",null,"Pass in a custom fill-color for the rating icon; use this along with ",Object(b.b)("inlineCode",{parentName:"p"},"type='custom'")," prop above (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string (color)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"#f1c40f")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ratingcount"},Object(b.b)("inlineCode",{parentName:"h3"},"ratingCount")),Object(b.b)("p",null,"The number of rating images to display (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ratingimage"},Object(b.b)("inlineCode",{parentName:"h3"},"ratingImage")),Object(b.b)("p",null,"Pass in a custom image source; use this along with ",Object(b.b)("inlineCode",{parentName:"p"},"type='custom'")," prop above (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"star")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"readonly"},Object(b.b)("inlineCode",{parentName:"h3"},"readonly")),Object(b.b)("p",null,"Whether the rating can be modiefied by the user (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"showrating"},Object(b.b)("inlineCode",{parentName:"h3"},"showRating")),Object(b.b)("p",null,"Displays the Built-in Rating UI to show the rating value in real-time (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"startingvalue"},Object(b.b)("inlineCode",{parentName:"h3"},"startingValue")),Object(b.b)("p",null,"The initial rating to render (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ratingCount / 2")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"style"},Object(b.b)("inlineCode",{parentName:"h3"},"style")),Object(b.b)("p",null,"Exposes style prop to add additonal styling to the container view (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"type"},Object(b.b)("inlineCode",{parentName:"h3"},"type")),Object(b.b)("p",null,"Choose one of the built-in types: ",Object(b.b)("inlineCode",{parentName:"p"},"star"),", ",Object(b.b)("inlineCode",{parentName:"p"},"rocket"),", ",Object(b.b)("inlineCode",{parentName:"p"},"bell"),", ",Object(b.b)("inlineCode",{parentName:"p"},"heart")," or use type ",Object(b.b)("inlineCode",{parentName:"p"},"custom")," to render a custom image (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"star")))))}O.isMDXComponent=!0},284:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||b;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},285:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},286:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return c}));var n=a(285),r=a(287);function b(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var b=void 0===n?{}:n,c=b.forcePrependBaseUrl,i=void 0!==c&&c,l=b.absolute,o=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var p=!a.startsWith(t)?t+a.replace(/^\//,""):a;return o?e+p:p}(b,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},287:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);