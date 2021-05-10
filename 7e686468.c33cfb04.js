(window.webpackJsonp=window.webpackJsonp||[]).push([[101,76],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return p}));var a=n(3),b=n(7),r=(n(0),n(286)),i=n(287),c=n(89),l={id:"listitem",title:"ListItem"},o={unversionedId:"listitem",id:"listitem",isDocsHomePage:!1,title:"ListItem",description:"ListItems are used to display rows of information, such as a contact list,",source:"@site/docs/listitem.md",slug:"/listitem",permalink:"/docs/next/listitem",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/listitem.md",version:"current",sidebar:"docs",previous:{title:"Linear Progress",permalink:"/docs/next/linearProgress"},next:{title:"Overlay",permalink:"/docs/next/overlay"}},m=[{value:"Usage",id:"usage",children:[{value:"Using Map Function - Implemented with avatar",id:"using-map-function---implemented-with-avatar",children:[]},{value:"Using Map Function - Implemented with link and icon",id:"using-map-function---implemented-with-link-and-icon",children:[]},{value:"Using RN FlatList - Implemented with link and avatar",id:"using-rn-flatlist---implemented-with-link-and-avatar",children:[]},{value:"Using RN FlatList - Implemented with custom avatar component.",id:"using-rn-flatlist---implemented-with-custom-avatar-component",children:[]},{value:"ListItem implemented with custom View for Subtitle",id:"listitem-implemented-with-custom-view-for-subtitle",children:[]},{value:"Badges",id:"badges",children:[]},{value:"Linear gradient + Scale feedback",id:"linear-gradient--scale-feedback",children:[]},{value:"ListItem Accordion",id:"listitem-accordion",children:[]},{value:"ListItem Swipable",id:"listitem-swipable",children:[]}]}],d={rightToc:m};function p(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ListItems are used to display rows of information, such as a contact list,\nplaylist, or menu. They are very customizable and can contain switches,\navatars, badges, icons, and more."),Object(r.b)("img",{alt:"Lists",src:Object(i.a)("img/lists.png")}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"using-map-function---implemented-with-avatar"},"Using Map Function - Implemented with avatar"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\n<View>\n  {\n    list.map((l, i) => (\n      <ListItem key={i} bottomDivider>\n        <Avatar source={{uri: l.avatar_url}} />\n        <ListItem.Content>\n          <ListItem.Title>{l.name}</ListItem.Title>\n          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n        </ListItem.Content>\n      </ListItem>\n    ))\n  }\n</View>\n")),Object(r.b)("h3",{id:"using-map-function---implemented-with-link-and-icon"},"Using Map Function - Implemented with link and icon"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { ListItem, Icon } from 'react-native-elements'\n\nconst list = [\n  {\n    title: 'Appointments',\n    icon: 'av-timer'\n  },\n  {\n    title: 'Trips',\n    icon: 'flight-takeoff'\n  },\n  ... // more items\n]\n\n<View>\n  {\n    list.map((item, i) => (\n      <ListItem key={i} bottomDivider>\n        <Icon name={item.icon} />\n        <ListItem.Content>\n          <ListItem.Title>{item.title}</ListItem.Title>\n        </ListItem.Content>\n        <ListItem.Chevron />\n      </ListItem>\n    ))\n  }\n</View>\n")),Object(r.b)("h3",{id:"using-rn-flatlist---implemented-with-link-and-avatar"},"Using RN FlatList - Implemented with link and avatar"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\nkeyExtractor = (item, index) => index.toString()\n\nrenderItem = ({ item }) => (\n  <ListItem bottomDivider>\n    <Avatar source={{uri: item.avatar_url}} />\n    <ListItem.Content>\n      <ListItem.Title>{item.name}</ListItem.Title>\n      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>\n    </ListItem.Content>\n    <ListItem.Chevron />\n  </ListItem>\n)\n\nrender () {\n  return (\n    <FlatList\n      keyExtractor={this.keyExtractor}\n      data={list}\n      renderItem={this.renderItem}\n    />\n  )\n}\n")),Object(r.b)("h3",{id:"using-rn-flatlist---implemented-with-custom-avatar-component"},"Using RN FlatList - Implemented with custom avatar component."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\nkeyExtractor = (item, index) => index.toString()\n\nrenderItem = ({ item }) => (\n  <ListItem bottomDivider >\n    <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>\n    <ListItem.Content>\n      <ListItem.Title>{item.name}</ListItem.Title>\n      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>\n    </ListItem.Content>\n    <ListItem.Chevron />\n  </ListItem>\n)\n\nrender () {\n  return (\n    <FlatList\n      keyExtractor={this.keyExtractor}\n      data={list}\n      renderItem={this.renderItem}\n    />\n  )\n}\n")),Object(r.b)("h3",{id:"listitem-implemented-with-custom-view-for-subtitle"},"ListItem implemented with custom View for Subtitle"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { ListItem, Avatar } from 'react-native-elements'\n\nrender () {\n  return (\n    <ListItem>\n      <Avatar source={require('../images/avatar1.jpg')} />\n      <ListItem.Content>\n        <ListItem.Title>Limited supply! Its like digital gold!</ListItem.Title>\n        <View style={styles.subtitleView}>\n          <Image source={require('../images/rating.png')} style={styles.ratingImage}/>\n          <Text style={styles.ratingText}>5 months ago</Text>\n        </View>\n      </ListItem.Content>\n    </ListItem>\n  )\n}\n\nstyles = StyleSheet.create({\n  subtitleView: {\n    flexDirection: 'row',\n    paddingLeft: 10,\n    paddingTop: 5\n  },\n  ratingImage: {\n    height: 19.21,\n    width: 100\n  },\n  ratingText: {\n    paddingLeft: 10,\n    color: 'grey'\n  }\n})\n")),Object(r.b)("h3",{id:"badges"},"Badges"),Object(r.b)("img",{alt:"Badges",src:Object(i.a)("img/list-badges.png")}),Object(r.b)("p",null,"Example badge usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<ListItem>\n  <Badge\n    value={3}\n    textStyle={{ color: 'orange' }}\n    containerStyle={{ marginTop: -20 }}\n  />\n</ListItem>\n")),Object(r.b)("h3",{id:"linear-gradient--scale-feedback"},"Linear gradient + Scale feedback"),Object(r.b)("img",{src:"/img/listitem_with_gradient_scale.gif",width:"500"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { ListItem, Avatar } from 'react-native-elements';\nimport TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale\nimport LinearGradient from 'react-native-linear-gradient'; // Only if no expo\n\n<ListItem\n  Component={TouchableScale}\n  friction={90} //\n  tension={100} // These props are passed to the parent component (here TouchableScale)\n  activeScale={0.95} //\n  linearGradientProps={{\n    colors: ['#FF9800', '#F44336'],\n    start: { x: 1, y: 0 },\n    end: { x: 0.2, y: 0 },\n  }}\n  ViewComponent={LinearGradient} // Only if no expo\n>\n  <Avatar rounded source={{ uri: avatar_url }} />\n  <ListItem.Content>\n    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>\n      Chris Jackson\n    </ListItem.Title>\n    <ListItem.Subtitle style={{ color: 'white' }}>\n      Vice Chairman\n    </ListItem.Subtitle>\n  </ListItem.Content>\n  <ListItem.Chevron color=\"white\" />\n</ListItem>;\n")),Object(r.b)("h3",{id:"listitem-accordion"},"ListItem Accordion"),Object(r.b)("img",{src:"/img/accorsion.gif",width:"500"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<ListItem.Accordion\n  content={\n    <>\n      <Icon name="place" size={30} />\n      <ListItem.Content>\n        <ListItem.Title>List Accordion</ListItem.Title>\n      </ListItem.Content>\n    </>\n  }\n  isExpanded={expanded}\n  onPress={() => {\n    setExpanded(!expanded);\n  }}\n>\n  {list2.map((l, i) => (\n    <ListItem key={i} onPress={log} bottomDivider>\n      <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />\n      <ListItem.Content>\n        <ListItem.Title>{l.name}</ListItem.Title>\n        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n      </ListItem.Content>\n      <ListItem.Chevron />\n    </ListItem>\n  ))}\n</ListItem.Accordion>\n')),Object(r.b)("h3",{id:"listitem-swipable"},"ListItem Swipable"),Object(r.b)("img",{src:"/img/swipeable.gif",width:"500"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<ListItem.Swipable\n  leftContent={\n    <Button\n      title=\"Info\"\n      icon={{ name: 'info', color: 'white' }}\n      buttonStyle={{ minHeight: '100%' }}\n    />\n  }\n  rightContent={\n    <Button\n      title=\"Delete\"\n      icon={{ name: 'delete', color: 'white' }}\n      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}\n    />\n  }\n>\n  <Icon name=\"My Icon\" />\n  <ListItem.Content>\n    <ListItem.Title>Hello Swiper</ListItem.Title>\n  </ListItem.Content>\n  <ListItem.Chevron />\n</ListItem.Swipable>\n")),Object(r.b)("hr",null),Object(r.b)(c.default,{mdxType:"Props"}),Object(r.b)("hr",null))}p.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),m=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=m(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,j=d["".concat(i,".").concat(s)]||d[s]||p[s]||r;return n?b.a.createElement(j,c(c({ref:t},o),{},{components:n})):b.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<r;o++)i[o]=n[o];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},287:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(22),b=n(288);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,c=void 0!==i&&i,l=r.absolute,o=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(b.b)(n))return n;if(c)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+m:m}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},288:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function b(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return b}))},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),b=n(7),r=(n(0),n(286)),i={},c={unversionedId:"props/listitem",id:"props/listitem",isDocsHomePage:!1,title:"listitem",description:"Props",source:"@site/docs/props/listitem.md",slug:"/props/listitem",permalink:"/docs/next/props/listitem",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/props/listitem.md",version:"current"},l=[{value:"Props",id:"props",children:[]},{value:"Child Components",id:"child-components",children:[{value:"ListItem.ButtonGroup",id:"listitembuttongroup",children:[]},{value:"ListItem.CheckBox",id:"listitemcheckbox",children:[]},{value:"ListItem.Chevron",id:"listitemchevron",children:[]},{value:"ListItem.Content",id:"listitemcontent",children:[]},{value:"ListItem.Input",id:"listiteminput",children:[]},{value:"ListItem.Subtitle",id:"listitemsubtitle",children:[]},{value:"ListItem.Title",id:"listitemtitle",children:[]},{value:"ListItem.Accordion",id:"listitemaccordion",children:[]},{value:"ListItem.Swipable",id:"listitemswipable",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>bottomDivider</code>",id:"bottomdivider",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>disabledStyle</code>",id:"disabledstyle",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>pad</code>",id:"pad",children:[]},{value:"<code>topDivider</code>",id:"topdivider",children:[]},{value:"<code>ViewComponent</code>",id:"viewcomponent",children:[]},{value:"<code>isExpanded</code>",id:"isexpanded",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>expandIcon</code>",id:"expandicon",children:[]},{value:"<code>content</code>",id:"content",children:[]},{value:"<code>noIcon</code>",id:"noicon",children:[]},{value:"<code>noRotation</code>",id:"norotation",children:[]},{value:"<code>animation</code>",id:"animation",children:[]},{value:"<code>leftContent</code>",id:"leftcontent",children:[]},{value:"<code>rightContent</code>",id:"rightcontent",children:[]},{value:"<code>leftStyle</code>",id:"leftstyle",children:[]},{value:"<code>rightStyle</code>",id:"rightstyle",children:[]},{value:"<code>leftWidth</code>",id:"leftwidth",children:[]},{value:"<code>rightWidth</code>",id:"rightwidth",children:[]}]}],o={rightToc:l};function m(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/touchablehighlight#props"}),"TouchableHighlight"),"\nprops")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#bottomdivider"}),Object(r.b)("inlineCode",{parentName:"a"},"bottomDivider"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#component"}),Object(r.b)("inlineCode",{parentName:"a"},"Component"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#containerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabled"}),Object(r.b)("inlineCode",{parentName:"a"},"disabled"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#disabledstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"disabledStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#onlongpress"}),Object(r.b)("inlineCode",{parentName:"a"},"onLongPress"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#onpress"}),Object(r.b)("inlineCode",{parentName:"a"},"onPress"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#pad"}),Object(r.b)("inlineCode",{parentName:"a"},"pad"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#topdivider"}),Object(r.b)("inlineCode",{parentName:"a"},"topDivider"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#viewcomponent"}),Object(r.b)("inlineCode",{parentName:"a"},"ViewComponent")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"child-components"},"Child Components"),Object(r.b)("h3",{id:"listitembuttongroup"},"ListItem.ButtonGroup"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/props/button_group#props"}),"ButtonGroup")," props.")),Object(r.b)("h3",{id:"listitemcheckbox"},"ListItem.CheckBox"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/props/checkbox#props"}),"CheckBox")," props.")),Object(r.b)("h3",{id:"listitemchevron"},"ListItem.Chevron"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/props/icon#props"}),"Icon")," props.")),Object(r.b)("h3",{id:"listitemcontent"},"ListItem.Content"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#props"}),"View")," props.")),Object(r.b)("h3",{id:"listiteminput"},"ListItem.Input"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/props/input#props"}),"Input")," props.")),Object(r.b)("h3",{id:"listitemsubtitle"},"ListItem.Subtitle"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/props/text#props"}),"Text")," props.")),Object(r.b)("h3",{id:"listitemtitle"},"ListItem.Title"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Receives all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/props/text#props"}),"Text")," props.")),Object(r.b)("h3",{id:"listitemaccordion"},"ListItem.Accordion"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#isexpanded"}),Object(r.b)("inlineCode",{parentName:"a"},"isExpanded"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#icon"}),Object(r.b)("inlineCode",{parentName:"a"},"icon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#expandicon"}),Object(r.b)("inlineCode",{parentName:"a"},"expandIcon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#content"}),Object(r.b)("inlineCode",{parentName:"a"},"content"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#noicon"}),Object(r.b)("inlineCode",{parentName:"a"},"noIcon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#norotation"}),Object(r.b)("inlineCode",{parentName:"a"},"noRotation"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#animation"}),Object(r.b)("inlineCode",{parentName:"a"},"animation")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also Receives all ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#props"}),"ListItem")," props.")),Object(r.b)("h3",{id:"listitemswipable"},"ListItem.Swipable"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also recieves all ",Object(r.b)("inlineCode",{parentName:"p"},"ListItem")," Props")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#leftcontent"}),Object(r.b)("inlineCode",{parentName:"a"},"leftContent"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#leftcontent"}),Object(r.b)("inlineCode",{parentName:"a"},"rightContent"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#leftstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"leftStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#rightstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"rightStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#leftwidth"}),Object(r.b)("inlineCode",{parentName:"a"},"leftWidth"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#rightwidth"}),Object(r.b)("inlineCode",{parentName:"a"},"rightWidth")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"bottomdivider"},Object(r.b)("inlineCode",{parentName:"h3"},"bottomDivider")),Object(r.b)("p",null,"Add divider at the bottom of the list item"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"component"},Object(r.b)("inlineCode",{parentName:"h3"},"Component")),Object(r.b)("p",null,"replace element with custom element (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View or TouchableHighlight (default) if onPress method is added as prop"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"component")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"containerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(r.b)("p",null,"additional main container styling (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabled"},Object(r.b)("inlineCode",{parentName:"h3"},"disabled")),Object(r.b)("p",null,"If true the user won't be able to perform any action on the list item."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabledstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"disabledStyle")),Object(r.b)("p",null,"Specific styling to be used when list item is disabled."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onlongpress"},Object(r.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(r.b)("p",null,"onLongPress method for link (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpress"},Object(r.b)("inlineCode",{parentName:"h3"},"onPress")),Object(r.b)("p",null,"onPress method for link (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pad"},Object(r.b)("inlineCode",{parentName:"h3"},"pad")),Object(r.b)("p",null,"adds spacing between the leftComponent, the title component & right component"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"16"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"topdivider"},Object(r.b)("inlineCode",{parentName:"h3"},"topDivider")),Object(r.b)("p",null,"Add divider at the top of the list item"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"viewcomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"ViewComponent")),Object(r.b)("p",null,"Container for linear gradient (for non-expo user)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"component"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"View")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isexpanded"},Object(r.b)("inlineCode",{parentName:"h3"},"isExpanded")),Object(r.b)("p",null,"Accordion Expanded"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"booleon"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"icon"},Object(r.b)("inlineCode",{parentName:"h3"},"icon")),Object(r.b)("p",null,"Icon for unexpanded Accordion"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"IocnNode"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"chevron-down")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"expandicon"},Object(r.b)("inlineCode",{parentName:"h3"},"expandIcon")),Object(r.b)("p",null,"Icon when Accordion is expanded, if not provided ",Object(r.b)("inlineCode",{parentName:"p"},"icon")," will be rotated 180deg (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"IconNode"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"content"},Object(r.b)("inlineCode",{parentName:"h3"},"content")),Object(r.b)("p",null,"Similar to ListItem's child"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ReactNode"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Empty ListItem.Content")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"noicon"},Object(r.b)("inlineCode",{parentName:"h3"},"noIcon")),Object(r.b)("p",null,"Don't show accordion icon"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"norotation"},Object(r.b)("inlineCode",{parentName:"h3"},"noRotation")),Object(r.b)("p",null,"Don't rotate when Accordion is expanded"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animation"},Object(r.b)("inlineCode",{parentName:"h3"},"animation")),Object(r.b)("p",null,"Boolean to show animation,"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Object or number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},'{type:"timing",duration:350}'))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"leftcontent"},Object(r.b)("inlineCode",{parentName:"h3"},"leftContent")),Object(r.b)("p",null,"Left Content"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ReactNode"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rightcontent"},Object(r.b)("inlineCode",{parentName:"h3"},"rightContent")),Object(r.b)("p",null,"Right Content"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ReactNode"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"leftstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"leftStyle")),Object(r.b)("p",null,"Style of left container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rightstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"rightStyle")),Object(r.b)("p",null,"Style of right container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"leftwidth"},Object(r.b)("inlineCode",{parentName:"h3"},"leftWidth")),Object(r.b)("p",null,"Width to swipe left"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ScreenWidth/3")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rightwidth"},Object(r.b)("inlineCode",{parentName:"h3"},"rightWidth")),Object(r.b)("p",null,"Width to swipe right"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ScreenWidth/3")))),Object(r.b)("hr",null))}m.isMDXComponent=!0}}]);