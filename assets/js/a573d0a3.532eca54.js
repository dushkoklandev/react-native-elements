"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4103,7165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),m=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(a),k=n,s=p["".concat(u,".").concat(k)]||p[k]||c[k]||l;return a?r.createElement(s,i(i({ref:t},d),{},{components:a})):r.createElement(s,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},82895:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(87462),n=a(67294),l=a(72389),i=a(79443);const o=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=a(15779),m=a(86010);const d="tabItem_vU9c";function c(e){var t,a,l,i=e.lazy,c=e.block,p=e.defaultValue,k=e.values,s=e.groupId,h=e.className,N=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=N[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=o(),y=f.tabGroupChoices,x=f.setTabGroupChoices,C=(0,n.useState)(g),T=C[0],w=C[1],S=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var O=y[s];null!=O&&O!==T&&b.some((function(e){return e.value===O}))&&w(O)}var E=function(e){var t=e.currentTarget,a=S.indexOf(t),r=b[a].value;r!==T&&(D(t),w(r),null!=s&&x(s,r))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;a=S[r]||S[0];break;case"ArrowLeft":var n=S.indexOf(e.currentTarget)-1;a=S[n]||S[S.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":c},h)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:P,onFocus:E,onClick:E},l,{className:(0,m.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(N.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,l.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},75947:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>c,metadata:()=>p,toc:()=>k,default:()=>h});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=a(82895),o=a(58215),u=a(53177),m=["components"],d={id:"circularslider",title:"Circular Slider",slug:"/circularslider"},c=void 0,p={unversionedId:"universe/circularslider",id:"universe/circularslider",title:"Circular Slider",description:"Installation",source:"@site/docs/universe/circularSlider.mdx",sourceDirName:"universe",slug:"/circularslider",permalink:"/docs/next/circularslider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/universe/circularSlider.mdx",tags:[],version:"current",frontMatter:{id:"circularslider",title:"Circular Slider",slug:"/circularslider"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/next/universe/getting_started"},next:{title:"",permalink:"/docs/next/repo/contributing"}},k=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Preview",id:"preview",children:[],level:2},{value:"Props",id:"props",children:[],level:2}],s={toc:k};function h(e){var t=e.components,a=(0,n.Z)(e,m);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(i.Z,{groupId:"component",defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-native-elements/circular-slider\n"))),(0,l.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-native-elements/circular-slider\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CircularSlider } from '@react-native-elements/circular-slider';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<CircularSlider value={value} onChange={setValue} />;\n\n<CircularSlider value={value} noThumb />;\n\n// 90 deg Arc\n<CircularSlider maxAngle={90} />;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Either use percentage (0 to 100) in ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," or specify ",(0,l.kt)("inlineCode",{parentName:"p"},"maximumValue")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"minimumValue"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"preview"},"Preview"),(0,l.kt)("p",null,"Sliders allow users to make selections from a range of values."),(0,l.kt)("div",{className:"component-preview component-preview--grid component-preview--grid-10"},(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/circularSlider1.gif",alt:"Circular Slider"}),(0,l.kt)("figcaption",null,"With Thumb (as a slider)")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/circularSlider2.gif",alt:"Circular Slider"}),(0,l.kt)("figcaption",null,"Without Thumb (as a Progress Indicator)")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/arcSlider.png",alt:"Arc Slider"}))),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)(u.default,{mdxType:"Props"}))}h.isMDXComponent=!0},53177:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>u,metadata:()=>m,toc:()=>d,default:()=>p});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={},u=void 0,m={unversionedId:"universe/props/circularslider",id:"universe/props/circularslider",title:"circularslider",description:"- value",source:"@site/docs/universe/props/circularslider.md",sourceDirName:"universe/props",slug:"/universe/props/circularslider",permalink:"/docs/next/universe/props/circularslider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/universe/props/circularslider.md",tags:[],version:"current",frontMatter:{}},d=[{value:"<code>value</code>",id:"value",children:[],level:3},{value:"<code>maximumValue</code>",id:"maximumvalue",children:[],level:3},{value:"<code>minimumValue</code>",id:"minimumvalue",children:[],level:3},{value:"<code>minAngle</code>",id:"minangle",children:[],level:3},{value:"<code>maxAngle</code>",id:"maxangle",children:[],level:3},{value:"<code>trackRadius</code>",id:"trackradius",children:[],level:3},{value:"<code>thumbRadius</code>",id:"thumbradius",children:[],level:3},{value:"<code>trackWidth</code>",id:"trackwidth",children:[],level:3},{value:"<code>trackColor</code>",id:"trackcolor",children:[],level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",children:[],level:3},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[],level:3},{value:"<code>thumbTextColor</code>",id:"thumbtextcolor",children:[],level:3},{value:"<code>thumbTextSize</code>",id:"thumbtextsize",children:[],level:3},{value:"<code>noThumb</code>",id:"nothumb",children:[],level:3},{value:"<code>showText</code>",id:"showtext",children:[],level:3},{value:"<code>showThumbText</code>",id:"showthumbtext",children:[],level:3},{value:"<code>textColor</code>",id:"textcolor",children:[],level:3},{value:"<code>textSize</code>",id:"textsize",children:[],level:3}],c={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#value"},(0,l.kt)("inlineCode",{parentName:"a"},"value"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#maximumvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"maximumValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minimumvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"minimumValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minangle"},(0,l.kt)("inlineCode",{parentName:"a"},"minAngle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#maxangle"},(0,l.kt)("inlineCode",{parentName:"a"},"maxAngle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackradius"},(0,l.kt)("inlineCode",{parentName:"a"},"trackRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbradius"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackwidth"},(0,l.kt)("inlineCode",{parentName:"a"},"trackWidth"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"trackColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tracktintcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"trackTintColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbtextcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbTextColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbtextsize"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbTextSize"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nothumb"},(0,l.kt)("inlineCode",{parentName:"a"},"noThumb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showtext"},(0,l.kt)("inlineCode",{parentName:"a"},"showText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showthumbtext"},(0,l.kt)("inlineCode",{parentName:"a"},"showThumbText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"textColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textsize"},(0,l.kt)("inlineCode",{parentName:"a"},"textSize")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"Value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maximumvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"maximumValue")),(0,l.kt)("p",null,"Maximum value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minimumvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"minimumValue")),(0,l.kt)("p",null,"Minimum value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minangle"},(0,l.kt)("inlineCode",{parentName:"h3"},"minAngle")),(0,l.kt)("p",null,"Minimum angle of arc (in degrees)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxangle"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxAngle")),(0,l.kt)("p",null,"Maximum angle of arc (in degress)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"359.9")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackradius"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackRadius")),(0,l.kt)("p",null,"Radius of Circular Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbradius"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbRadius")),(0,l.kt)("p",null,"Radius of Circular Slider's thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"12")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackwidth"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackWidth")),(0,l.kt)("p",null,"Width of Circular Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackColor")),(0,l.kt)("p",null,"Color of track"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"theme primary color")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,l.kt)("p",null,"color of thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"trackColor's value")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tracktintcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackTintColor")),(0,l.kt)("p",null,"Tint Color of track"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"theme.primary.gray5")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbtextcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbTextColor")),(0,l.kt)("p",null,"Marker Text of thumb color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"white")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbtextsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbTextSize")),(0,l.kt)("p",null,"Marker Text of thumb Size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nothumb"},(0,l.kt)("inlineCode",{parentName:"h3"},"noThumb")),(0,l.kt)("p",null,"Show no thumb (for progress)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"showText")),(0,l.kt)("p",null,"Show slider value at middle of slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showthumbtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"showThumbText")),(0,l.kt)("p",null,"Show value at thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"textColor")),(0,l.kt)("p",null,"Slider value at middle of slider color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"trackColor")," value")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"textSize")),(0,l.kt)("p",null,"Slider value at middle of slider font size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);