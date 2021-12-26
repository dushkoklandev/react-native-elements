"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6487,7606,8826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),s=r,g=k["".concat(d,".").concat(s)]||k[s]||c[s]||i;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},72030:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>p,metadata:()=>m,toc:()=>c,default:()=>s});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=(a(44996),a(9597)),o=["components"],d={id:"rating",title:"Rating",slug:"/rating"},p=void 0,m={unversionedId:"main/rating",id:"version-4.0.0-beta.0/main/rating",title:"Rating",description:"Ratings are used to collect measurable feedback from users. Use Rating over an",source:"@site/versioned_docs/version-4.0.0-beta.0/main/Rating.md",sourceDirName:"main",slug:"/rating",permalink:"/docs/rating",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/Rating.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"rating",title:"Rating",slug:"/rating"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"PricingCard",permalink:"/docs/pricingcard"},next:{title:"SearchBar",permalink:"/docs/searchbar"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"<Usage />",id:"usage-",children:[],level:2},{value:"Props",id:"props",children:[],level:2},{value:"Rating",id:"rating",children:[],level:2},{value:"Reference",id:"reference",children:[{value:"<code>count</code>",id:"count",children:[],level:3},{value:"<code>defaultRating</code>",id:"defaultrating",children:[],level:3},{value:"<code>fractions</code>",id:"fractions",children:[],level:3},{value:"<code>imageSize</code>",id:"imagesize",children:[],level:3},{value:"<code>minValue</code>",id:"minvalue",children:[],level:3},{value:"<code>onFinishRating</code>",id:"onfinishrating",children:[],level:3},{value:"<code>onStartRating</code>",id:"onstartrating",children:[],level:3},{value:"<code>ratingBackgroundColor</code>",id:"ratingbackgroundcolor",children:[],level:3},{value:"<code>tintColor</code>",id:"tintcolor",children:[],level:3},{value:"<code>ratingColor</code>",id:"ratingcolor",children:[],level:3},{value:"<code>ratingCount</code>",id:"ratingcount",children:[],level:3},{value:"<code>ratingImage</code>",id:"ratingimage",children:[],level:3},{value:"<code>ratingTextColor</code>",id:"ratingtextcolor",children:[],level:3},{value:"<code>readonly</code>",id:"readonly",children:[],level:3},{value:"<code>reviews</code>",id:"reviews",children:[],level:3},{value:"<code>showRating</code>",id:"showrating",children:[],level:3},{value:"<code>showRating</code>",id:"showrating-1",children:[],level:3},{value:"<code>startingValue</code>",id:"startingvalue",children:[],level:3},{value:"<code>style</code>",id:"style",children:[],level:3},{value:"<code>type</code>",id:"type",children:[],level:3}],level:2}],k={toc:c};function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ratings are used to collect measurable feedback from users. Use Rating over an\nInput where imagery can increase user interaction."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This component is imported from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"react-native-ratings"))),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/Monte9/react-native-ratings/master/resources/airbnb_ratings.gif",width:"500"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h2",{id:"usage-"},(0,i.kt)(l.default,{mdxType:"Usage"})),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h2",{id:"rating"},"Rating"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fractions"},(0,i.kt)("inlineCode",{parentName:"a"},"fractions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#imagesize"},(0,i.kt)("inlineCode",{parentName:"a"},"imageSize"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#minValue"},(0,i.kt)("inlineCode",{parentName:"a"},"minValue"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#onfinishrating"},(0,i.kt)("inlineCode",{parentName:"a"},"onFinishRating"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#onstartrating"},(0,i.kt)("inlineCode",{parentName:"a"},"onStartRating"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ratingbackgroundcolor"},(0,i.kt)("inlineCode",{parentName:"a"},"ratingBackgroundColor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tintColor"},(0,i.kt)("inlineCode",{parentName:"a"},"tintColor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ratingcolor"},(0,i.kt)("inlineCode",{parentName:"a"},"ratingColor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ratingcount"},(0,i.kt)("inlineCode",{parentName:"a"},"ratingCount"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ratingimage"},(0,i.kt)("inlineCode",{parentName:"a"},"ratingImage"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ratingtextcolor"},(0,i.kt)("inlineCode",{parentName:"a"},"ratingTextColor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#readonly"},(0,i.kt)("inlineCode",{parentName:"a"},"readonly"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#showrating"},(0,i.kt)("inlineCode",{parentName:"a"},"showRating"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#startingvalue"},(0,i.kt)("inlineCode",{parentName:"a"},"startingValue"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#style"},(0,i.kt)("inlineCode",{parentName:"a"},"style"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#type"},(0,i.kt)("inlineCode",{parentName:"a"},"type")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"count"},(0,i.kt)("inlineCode",{parentName:"h3"},"count")),(0,i.kt)("p",null,"Total number of ratings to display"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defaultrating"},(0,i.kt)("inlineCode",{parentName:"h3"},"defaultRating")),(0,i.kt)("p",null,"Initial value for the rating"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fractions"},(0,i.kt)("inlineCode",{parentName:"h3"},"fractions")),(0,i.kt)("p",null,"The number of decimal places for the rating value; must be between 0 and 20\n(optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefined")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"imagesize"},(0,i.kt)("inlineCode",{parentName:"h3"},"imageSize")),(0,i.kt)("p",null,"The size of each rating image (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"50")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"minvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"minValue")),(0,i.kt)("p",null,"The minimum value the user can select"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onfinishrating"},(0,i.kt)("inlineCode",{parentName:"h3"},"onFinishRating")),(0,i.kt)("p",null,"Callback method when the user finishes rating. Gives you the final rating value\nas a whole number ",(0,i.kt)("strong",{parentName:"p"},"(required)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onstartrating"},(0,i.kt)("inlineCode",{parentName:"h3"},"onStartRating")),(0,i.kt)("p",null,"Callback method when the user starts the rating. (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefined")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ratingbackgroundcolor"},(0,i.kt)("inlineCode",{parentName:"h3"},"ratingBackgroundColor")),(0,i.kt)("p",null,"Pass in a custom background-fill-color for the rating icon; use this along with\n",(0,i.kt)("inlineCode",{parentName:"p"},"type='custom'")," prop above (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string (color)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"white")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tintcolor"},(0,i.kt)("inlineCode",{parentName:"h3"},"tintColor")),(0,i.kt)("p",null,"Pass in a custom background-color for the rating container; (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string (color)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"white")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ratingcolor"},(0,i.kt)("inlineCode",{parentName:"h3"},"ratingColor")),(0,i.kt)("p",null,"Pass in a custom fill-color for the rating icon; use this along with\n",(0,i.kt)("inlineCode",{parentName:"p"},"type='custom'")," prop above (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string (color)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"#f1c40f")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ratingcount"},(0,i.kt)("inlineCode",{parentName:"h3"},"ratingCount")),(0,i.kt)("p",null,"The number of rating images to display (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ratingimage"},(0,i.kt)("inlineCode",{parentName:"h3"},"ratingImage")),(0,i.kt)("p",null,"Pass in a custom image source; use this along with ",(0,i.kt)("inlineCode",{parentName:"p"},"type='custom'")," prop above\n(optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"star")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ratingtextcolor"},(0,i.kt)("inlineCode",{parentName:"h3"},"ratingTextColor")),(0,i.kt)("p",null,"Pass in a custom text color for the rating text (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string (color)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"#f1c40f")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"readonly"},(0,i.kt)("inlineCode",{parentName:"h3"},"readonly")),(0,i.kt)("p",null,"Whether the rating can be modified by the user (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reviews"},(0,i.kt)("inlineCode",{parentName:"h3"},"reviews")),(0,i.kt)("p",null,"Labels to show when each value is tapped\ne.g. If the first star is tapped, then value in index 0 will be used as the label"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string[]"),(0,i.kt)("td",{parentName:"tr",align:"center"},"['Terrible', 'Bad', 'Okay', 'Good', 'Great']")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"showrating"},(0,i.kt)("inlineCode",{parentName:"h3"},"showRating")),(0,i.kt)("p",null,"Determines if to show the reviews above the rating"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"showrating-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"showRating")),(0,i.kt)("p",null,"Displays the Built-in Rating UI to show the rating value in real-time (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"startingvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"startingValue")),(0,i.kt)("p",null,"The initial rating to render (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ratingCount / 2")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"style"},(0,i.kt)("inlineCode",{parentName:"h3"},"style")),(0,i.kt)("p",null,"Exposes style prop to add additional styling to the container view (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,"Choose one of the built-in types: ",(0,i.kt)("inlineCode",{parentName:"p"},"star"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rocket"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bell"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"heart")," or use type\n",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," to render a custom image (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"star")))))}s.isMDXComponent=!0},9597:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>p,metadata:()=>m,toc:()=>c,default:()=>s});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(60715),o=["components"],d={},p=void 0,m={unversionedId:"main/usage/Rating/Rating",id:"version-4.0.0-beta.0/main/usage/Rating/Rating",title:"Rating",description:"Read-only mode",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Rating/Rating.md",sourceDirName:"main/usage/Rating",slug:"/main/usage/Rating/",permalink:"/docs/main/usage/Rating/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Rating/Rating.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},c=[{value:"Read-only mode",id:"read-only-mode",children:[],level:3},{value:"Fractions",id:"fractions",children:[],level:3}],k={toc:c};function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.default,{mdxType:"Snack"}),(0,i.kt)("h3",{id:"read-only-mode"},"Read-only mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { rating } = this.props;\n\n<Rating imageSize={20} readonly startingValue={rating} style={styles.rating} />;\n")),(0,i.kt)("h3",{id:"fractions"},"Fractions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<Rating showRating fractions="{1}" startingValue="{3.3}" />\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif",alt:"Fractions demo gif"})))}s.isMDXComponent=!0},60715:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>p,toc:()=>m,default:()=>k});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},d=void 0,p={unversionedId:"main/usage/Rating/snack/index",id:"version-4.0.0-beta.0/main/usage/Rating/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Rating/snack/index.md",sourceDirName:"main/usage/Rating/snack",slug:"/main/usage/Rating/snack/",permalink:"/docs/main/usage/Rating/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Rating/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},m=[],c={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Rating","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20Platform%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Rating%2C%20RatingProps%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20RatingsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Ratings%3A%20React.FunctionComponent%3CRatingsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20ratingCompleted%20%3D%20(rating%3A%20number)%20%3D%3E%20%7B%0A%20%20%20%20console.log('Rating%20is%3A%20'%20%2B%20rating)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20ratingProps%20%3D%20%7B%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CScrollView%20style%3D%7Bstyles.viewContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22star%22%0A%20%20%20%20%20%20%20%20%20%20%20%20fractions%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20startingValue%3D%7B3.6%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20readonly%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22custom%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ratingColor%3D%22%233498db%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ratingCount%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B30%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22heart%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ratingCount%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20fractions%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20startingValue%3D%7B1.57%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.rating%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20headingContainer%3A%20%7B%0A%20%20%20%20paddingTop%3A%2050%2C%0A%20%20%7D%2C%0A%20%20titleText%3A%20%7B%0A%20%20%20%20fontSize%3A%2025%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Menlo-Bold'%20%3A%20''%2C%0A%20%20%20%20color%3A%20'%2327ae60'%2C%0A%20%20%7D%2C%0A%20%20subtitleText%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20'400'%2C%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Trebuchet%20MS'%20%3A%20''%2C%0A%20%20%20%20color%3A%20'%2334495e'%2C%0A%20%20%7D%2C%0A%20%20viewContainer%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20rating%3A%20%7B%0A%20%20%20%20paddingVertical%3A%2010%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Ratings%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}k.isMDXComponent=!0}}]);