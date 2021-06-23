(window.webpackJsonp=window.webpackJsonp||[]).push([[77,13],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),b=(a(0),a(291)),c=a(59),l={id:"avatar",title:"Avatar",slug:"/avatar"},i={unversionedId:"main/avatar",id:"main/avatar",isDocsHomePage:!1,title:"Avatar",description:"Avatars are found all over ui design from lists to profile screens. They are",source:"@site/docs/main/avatar.md",slug:"/avatar",permalink:"/docs/next/avatar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/avatar.md",version:"current",sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"},next:{title:"Badge",permalink:"/docs/next/badge"}},o=[{value:"Usage",id:"usage",children:[]}],p={rightToc:o};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Avatars are found all over ui design from lists to profile screens. They are\ncommonly used to represent a user and can contain photos, icons, or even text."),Object(b.b)("div",{class:"component-preview component-preview--grid"},Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/avatar/avatar--photo.jpg",alt:"Standard Avatar"}),Object(b.b)("figcaption",null,"Standard")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/avatar/avatar--title.jpg",alt:"Avatar with Title"}),Object(b.b)("figcaption",null,"Title")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/avatar/avatar--icon.jpg",alt:"Avatar with Icon"}),Object(b.b)("figcaption",null,"Icon")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/avatar/avatar--edit.jpg",alt:"Standard Avatar with accessory"}),Object(b.b)("figcaption",null,"Standard with accessory"))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Avatar } from 'react-native-elements';\n\n// Standard Avatar\n<Avatar\n  rounded\n  source={{\n    uri:\n      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n  }}\n/>\n\n// Avatar with Title\n<Avatar rounded title=\"MD\" />\n\n// Avatar with Icon\n<Avatar rounded icon={{ name: 'home' }} />\n\n// Standard Avatar with accessory\n<Avatar\n  source={{\n    uri:\n      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n  }}\n  >\n  <Avatar.Accessory {...accessoryProps} />\n</Avatar>\n")),Object(b.b)("h4",{id:"avatar-with-initials"},"Avatar with initials"),Object(b.b)("img",{src:"/img/avatar_with_initials.png",width:"500"}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { Avatar } from "react-native-elements";\n\n<Avatar\n  size="small"\n  rounded\n  title="MT"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="medium"\n  title="BP"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="large"\n  title="LW"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="xlarge"\n  rounded\n  title="CR"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n')),Object(b.b)("h4",{id:"avatar-with-icons"},"Avatar with icons"),Object(b.b)("img",{src:"/img/avatar_with_icons.png",width:"500"}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Avatar } from \"react-native-elements\";\n\n<Avatar\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n<Avatar\n  size=\"small\"\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n<Avatar\n  size=\"medium\"\n  overlayContainerStyle={{backgroundColor: 'blue'}}\n  icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 3, marginTop: 100}}\n/>\n<Avatar\n  size=\"large\"\n  icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}\n  overlayContainerStyle={{backgroundColor: 'white'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 4, marginTop: 75}}\n/>\n<Avatar\n  size=\"xlarge\"\n  rounded\n  icon={{name: 'home', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 5, marginRight: 60}}\n/>\n<Avatar\n  size={200}\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n")),Object(b.b)("h4",{id:"avatar-with-title-placeholder"},"Avatar with title placeholder"),Object(b.b)("img",{src:"/img/avatar_with_title_placeholder.gif",width:"500"}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Avatar, ListItem } from 'react-native-elements';\n\n<ListItem>\n  <Avatar\n    title={name[0]}\n    source={{ uri: avatar_url }}\n  />\n  <ListItem.Content>\n    <ListItem.Title>{name}</ListItem.Title>\n    <ListItem.SubTitle>{role}</ListItem.Subtitle>\n  </ListItem.Content>\n  <ListItem.Chevron/>\n/>;\n")),Object(b.b)("hr",null),Object(b.b)(c.default,{mdxType:"Props"}),Object(b.b)("hr",null))}O.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||b;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),b=(a(0),a(291)),c={},l={unversionedId:"main/props/avatar",id:"main/props/avatar",isDocsHomePage:!1,title:"avatar",description:"Props",source:"@site/docs/main/props/avatar.md",slug:"/main/props/avatar",permalink:"/docs/next/main/props/avatar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/props/avatar.md",version:"current"},i=[{value:"Props",id:"props",children:[]},{value:"Child Components",id:"child-components",children:[{value:"Accessory",id:"accessory",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>activeOpacity</code>",id:"activeopacity",children:[]},{value:"<code>avatarStyle</code>",id:"avatarstyle",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>iconStyle</code>",id:"iconstyle",children:[]},{value:"<code>ImageComponent</code>",id:"imagecomponent",children:[]},{value:"<code>imageProps</code>",id:"imageprops",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>overlayContainerStyle</code>",id:"overlaycontainerstyle",children:[]},{value:"<code>placeholderStyle</code>",id:"placeholderstyle",children:[]},{value:"<code>renderPlaceholderContent</code>",id:"renderplaceholdercontent",children:[]},{value:"<code>rounded</code>",id:"rounded",children:[]},{value:"<code>size</code>",id:"size",children:[]},{value:"<code>source</code>",id:"source",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#activeopacity"}),Object(b.b)("inlineCode",{parentName:"a"},"activeOpacity"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#avatarstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"avatarStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#component"}),Object(b.b)("inlineCode",{parentName:"a"},"Component"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#icon"}),Object(b.b)("inlineCode",{parentName:"a"},"icon"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#iconstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"iconStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#imagecomponent"}),Object(b.b)("inlineCode",{parentName:"a"},"ImageComponent"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#imageprops"}),Object(b.b)("inlineCode",{parentName:"a"},"imageProps"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onlongpress"}),Object(b.b)("inlineCode",{parentName:"a"},"onLongPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onpress"}),Object(b.b)("inlineCode",{parentName:"a"},"onPress"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#overlaycontainerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"overlayContainerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#placeholderstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"placeholderStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#renderplaceholdercontent"}),Object(b.b)("inlineCode",{parentName:"a"},"renderPlaceholderContent"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#rounded"}),Object(b.b)("inlineCode",{parentName:"a"},"rounded"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#size"}),Object(b.b)("inlineCode",{parentName:"a"},"size"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#source"}),Object(b.b)("inlineCode",{parentName:"a"},"source"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#title"}),Object(b.b)("inlineCode",{parentName:"a"},"title"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#titlestyle"}),Object(b.b)("inlineCode",{parentName:"a"},"titleStyle")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"child-components"},"Child Components"),Object(b.b)("h3",{id:"accessory"},"Accessory"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Receives either all ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/main/props/icon#props"}),"Icon")," or ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/main/props/image#props"}),"Image")," props.")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"activeopacity"},Object(b.b)("inlineCode",{parentName:"h3"},"activeOpacity")),Object(b.b)("p",null,"Opacity when pressed"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.2")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"avatarstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"avatarStyle")),Object(b.b)("p",null,"Style for avatar image"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"component"},Object(b.b)("inlineCode",{parentName:"h3"},"Component")),Object(b.b)("p",null,"Component for enclosing element (eg: TouchableHighlight, View, etc)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TouchableHighlight")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"containerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"Styling for outer container"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"icon"},Object(b.b)("inlineCode",{parentName:"h3"},"icon")),Object(b.b)("p",null,"Displays an icon as the main content of the Avatar. ",Object(b.b)("strong",{parentName:"p"},"Cannot be used alongside\ntitle"),". When used with the ",Object(b.b)("inlineCode",{parentName:"p"},"source")," prop it will be used as the placeholder."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object {name: string, color: string, size: number, type: string (default is material, or choose from ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/main/props/icon#available-icon-sets"}),"supported icon sets"),"), iconStyle: object(style)}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"iconstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"iconStyle")),Object(b.b)("p",null,"Extra styling for icon component (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"imagecomponent"},Object(b.b)("inlineCode",{parentName:"h3"},"ImageComponent")),Object(b.b)("p",null,"Custom ImageComponent for Avatar"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React component or element"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Image")))),Object(b.b)("h3",{id:"imageprops"},Object(b.b)("inlineCode",{parentName:"h3"},"imageProps")),Object(b.b)("p",null,'Optional properties to pass to the avatar e.g "resizeMode"'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/main/props/image#props"}),"...Image props"),"}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onlongpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(b.b)("p",null,"Callback function when long pressing component"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onPress")),Object(b.b)("p",null,"Callback function when pressing component"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"overlaycontainerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"overlayContainerStyle")),Object(b.b)("p",null,"Style for the view outside image or icon"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"placeholderstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"placeholderStyle")),Object(b.b)("p",null,"Adds style to the placeholder wrapper"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"{ backgroundColor: '#BDBDBD' }"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renderplaceholdercontent"},Object(b.b)("inlineCode",{parentName:"h3"},"renderPlaceholderContent")),Object(b.b)("p",null,"Custom placeholder element (by default, it's the title)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React component or element"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"rounded"},Object(b.b)("inlineCode",{parentName:"h3"},"rounded")),Object(b.b)("p",null,"Makes the avatar circular"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"size"},Object(b.b)("inlineCode",{parentName:"h3"},"size")),Object(b.b)("p",null,"Size of the avatar"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string(",Object(b.b)("inlineCode",{parentName:"td"},"small"),", ",Object(b.b)("inlineCode",{parentName:"td"},"medium"),", ",Object(b.b)("inlineCode",{parentName:"td"},"large"),", ",Object(b.b)("inlineCode",{parentName:"td"},"xlarge"),") or number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"small"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"source"},Object(b.b)("inlineCode",{parentName:"h3"},"source")),Object(b.b)("p",null,"Image source"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://reactnative.dev/docs/images"}),"ImageSource")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"title"},Object(b.b)("inlineCode",{parentName:"h3"},"title")),Object(b.b)("p",null,"Renders title in the placeholder"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"titlestyle"},Object(b.b)("inlineCode",{parentName:"h3"},"titleStyle")),Object(b.b)("p",null,"Style for the title"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))))}p.isMDXComponent=!0}}]);