"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1847,2677],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),k=i,h=c["".concat(m,".").concat(k)]||c[k]||s[k]||r;return n?a.createElement(h,l(l({ref:e},d),{},{components:n})):a.createElement(h,l({ref:e},d))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3919:(t,e,n)=>{function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!a(t)}n.d(e,{b:()=>a,Z:()=>i})},4996:(t,e,n)=>{n.d(e,{C:()=>r,Z:()=>l});var a=n(2263),i=n(3919);function r(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,r=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var r=void 0===a?{}:a,l=r.forcePrependBaseUrl,o=void 0!==l&&l,m=r.absolute,p=void 0!==m&&m;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return e+n;var d=n.startsWith(e)?n:e+n.replace(/^\//,"");return p?t+d:d}(r,n,t,e)}}}function l(t,e){return void 0===e&&(e={}),(0,r().withBaseUrl)(t,e)}},6568:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>s,toc:()=>c,default:()=>h});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l=n(4996),o=n(3508),m=["components"],p={id:"listitem",title:"ListItem"},d=void 0,s={unversionedId:"listitem",id:"version-3.4.2/listitem",isDocsHomePage:!1,title:"ListItem",description:"ListItems are used to display rows of information, such as a contact list,",source:"@site/versioned_docs/version-3.4.2/listitem.md",sourceDirName:".",slug:"/listitem",permalink:"/docs/3.4.2/listitem",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/listitem.md",version:"3.4.2",frontMatter:{id:"listitem",title:"ListItem"},sidebar:"version-3.4.2/docs",previous:{title:"Linear Progress",permalink:"/docs/3.4.2/linearProgress"},next:{title:"Overlay",permalink:"/docs/3.4.2/overlay"}},c=[{value:"Usage",id:"usage",children:[{value:"Using Map Function - Implemented with avatar",id:"using-map-function---implemented-with-avatar",children:[]},{value:"Using Map Function - Implemented with link and icon",id:"using-map-function---implemented-with-link-and-icon",children:[]},{value:"Using RN FlatList - Implemented with link and avatar",id:"using-rn-flatlist---implemented-with-link-and-avatar",children:[]},{value:"Using RN FlatList - Implemented with custom avatar component.",id:"using-rn-flatlist---implemented-with-custom-avatar-component",children:[]},{value:"ListItem implemented with custom View for Subtitle",id:"listitem-implemented-with-custom-view-for-subtitle",children:[]},{value:"Badges",id:"badges",children:[]},{value:"Linear gradient + Scale feedback",id:"linear-gradient--scale-feedback",children:[]},{value:"ListItem Accordion",id:"listitem-accordion",children:[]},{value:"ListItem Swipeable",id:"listitem-swipeable",children:[]}]}],k={toc:c};function h(t){var e=t.components,n=(0,i.Z)(t,m);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ListItems are used to display rows of information, such as a contact list,\nplaylist, or menu. They are very customizable and can contain switches,\navatars, badges, icons, and more."),(0,r.kt)("img",{alt:"Lists",src:(0,l.Z)("img/lists.png")}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"using-map-function---implemented-with-avatar"},"Using Map Function - Implemented with avatar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\n<View>\n  {\n    list.map((l, i) => (\n      <ListItem key={i} bottomDivider>\n        <Avatar source={{uri: l.avatar_url}} />\n        <ListItem.Content>\n          <ListItem.Title>{l.name}</ListItem.Title>\n          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n        </ListItem.Content>\n      </ListItem>\n    ))\n  }\n</View>\n")),(0,r.kt)("h3",{id:"using-map-function---implemented-with-link-and-icon"},"Using Map Function - Implemented with link and icon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Icon } from 'react-native-elements'\n\nconst list = [\n  {\n    title: 'Appointments',\n    icon: 'av-timer'\n  },\n  {\n    title: 'Trips',\n    icon: 'flight-takeoff'\n  },\n  ... // more items\n]\n\n<View>\n  {\n    list.map((item, i) => (\n      <ListItem key={i} bottomDivider>\n        <Icon name={item.icon} />\n        <ListItem.Content>\n          <ListItem.Title>{item.title}</ListItem.Title>\n        </ListItem.Content>\n        <ListItem.Chevron />\n      </ListItem>\n    ))\n  }\n</View>\n")),(0,r.kt)("h3",{id:"using-rn-flatlist---implemented-with-link-and-avatar"},"Using RN FlatList - Implemented with link and avatar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\nkeyExtractor = (item, index) => index.toString()\n\nrenderItem = ({ item }) => (\n  <ListItem bottomDivider>\n    <Avatar source={{uri: item.avatar_url}} />\n    <ListItem.Content>\n      <ListItem.Title>{item.name}</ListItem.Title>\n      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>\n    </ListItem.Content>\n    <ListItem.Chevron />\n  </ListItem>\n)\n\nrender () {\n  return (\n    <FlatList\n      keyExtractor={this.keyExtractor}\n      data={list}\n      renderItem={this.renderItem}\n    />\n  )\n}\n")),(0,r.kt)("h3",{id:"using-rn-flatlist---implemented-with-custom-avatar-component"},"Using RN FlatList - Implemented with custom avatar component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\nkeyExtractor = (item, index) => index.toString()\n\nrenderItem = ({ item }) => (\n  <ListItem bottomDivider >\n    <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>\n    <ListItem.Content>\n      <ListItem.Title>{item.name}</ListItem.Title>\n      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>\n    </ListItem.Content>\n    <ListItem.Chevron />\n  </ListItem>\n)\n\nrender () {\n  return (\n    <FlatList\n      keyExtractor={this.keyExtractor}\n      data={list}\n      renderItem={this.renderItem}\n    />\n  )\n}\n")),(0,r.kt)("h3",{id:"listitem-implemented-with-custom-view-for-subtitle"},"ListItem implemented with custom View for Subtitle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements'\n\nrender () {\n  return (\n    <ListItem>\n      <Avatar source={require('../images/avatar1.jpg')} />\n      <ListItem.Content>\n        <ListItem.Title>Limited supply! Its like digital gold!</ListItem.Title>\n        <View style={styles.subtitleView}>\n          <Image source={require('../images/rating.png')} style={styles.ratingImage}/>\n          <Text style={styles.ratingText}>5 months ago</Text>\n        </View>\n      </ListItem.Content>\n    </ListItem>\n  )\n}\n\nstyles = StyleSheet.create({\n  subtitleView: {\n    flexDirection: 'row',\n    paddingLeft: 10,\n    paddingTop: 5\n  },\n  ratingImage: {\n    height: 19.21,\n    width: 100\n  },\n  ratingText: {\n    paddingLeft: 10,\n    color: 'grey'\n  }\n})\n")),(0,r.kt)("h3",{id:"badges"},"Badges"),(0,r.kt)("img",{alt:"Badges",src:(0,l.Z)("img/list-badges.png")}),(0,r.kt)("p",null,"Example badge usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem>\n  <Badge\n    value={3}\n    textStyle={{ color: 'orange' }}\n    containerStyle={{ marginTop: -20 }}\n  />\n</ListItem>\n")),(0,r.kt)("h3",{id:"linear-gradient--scale-feedback"},"Linear gradient + Scale feedback"),(0,r.kt)("img",{src:"/img/listitem_with_gradient_scale.gif",width:"500"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements';\nimport TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale\nimport LinearGradient from 'react-native-linear-gradient'; // Only if no expo\n\n<ListItem\n  Component={TouchableScale}\n  friction={90} //\n  tension={100} // These props are passed to the parent component (here TouchableScale)\n  activeScale={0.95} //\n  linearGradientProps={{\n    colors: ['#FF9800', '#F44336'],\n    start: { x: 1, y: 0 },\n    end: { x: 0.2, y: 0 },\n  }}\n  ViewComponent={LinearGradient} // Only if no expo\n>\n  <Avatar rounded source={{ uri: avatar_url }} />\n  <ListItem.Content>\n    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>\n      Chris Jackson\n    </ListItem.Title>\n    <ListItem.Subtitle style={{ color: 'white' }}>\n      Vice Chairman\n    </ListItem.Subtitle>\n  </ListItem.Content>\n  <ListItem.Chevron color=\"white\" />\n</ListItem>;\n")),(0,r.kt)("h3",{id:"listitem-accordion"},"ListItem Accordion"),(0,r.kt)("img",{src:"/img/accorsion.gif",width:"500"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<ListItem.Accordion\n  content={\n    <>\n      <Icon name="place" size={30} />\n      <ListItem.Content>\n        <ListItem.Title>List Accordion</ListItem.Title>\n      </ListItem.Content>\n    </>\n  }\n  isExpanded={expanded}\n  onPress={() => {\n    setExpanded(!expanded);\n  }}\n>\n  {list2.map((l, i) => (\n    <ListItem key={i} onPress={log} bottomDivider>\n      <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />\n      <ListItem.Content>\n        <ListItem.Title>{l.name}</ListItem.Title>\n        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n      </ListItem.Content>\n      <ListItem.Chevron />\n    </ListItem>\n  ))}\n</ListItem.Accordion>\n')),(0,r.kt)("h3",{id:"listitem-swipeable"},"ListItem Swipeable"),(0,r.kt)("img",{src:"/img/swipeable.gif",width:"500"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem.Swipeable\n  leftContent={\n    <Button\n      title=\"Info\"\n      icon={{ name: 'info', color: 'white' }}\n      buttonStyle={{ minHeight: '100%' }}\n    />\n  }\n  rightContent={\n    <Button\n      title=\"Delete\"\n      icon={{ name: 'delete', color: 'white' }}\n      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}\n    />\n  }\n>\n  <Icon name=\"My Icon\" />\n  <ListItem.Content>\n    <ListItem.Title>Hello Swiper</ListItem.Title>\n  </ListItem.Content>\n  <ListItem.Chevron />\n</ListItem.Swipeable>\n")),(0,r.kt)("hr",null),(0,r.kt)(o.default,{mdxType:"Props"}),(0,r.kt)("hr",null))}h.isMDXComponent=!0},3508:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>o,contentTitle:()=>m,metadata:()=>p,toc:()=>d,default:()=>c});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l=["components"],o={},m=void 0,p={unversionedId:"props/listitem",id:"version-3.4.2/props/listitem",isDocsHomePage:!1,title:"listitem",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/listitem.md",sourceDirName:"props",slug:"/props/listitem",permalink:"/docs/3.4.2/props/listitem",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/listitem.md",version:"3.4.2",frontMatter:{}},d=[{value:"Props",id:"props",children:[]},{value:"Child Components",id:"child-components",children:[{value:"ListItem.ButtonGroup",id:"listitembuttongroup",children:[]},{value:"ListItem.CheckBox",id:"listitemcheckbox",children:[]},{value:"ListItem.Chevron",id:"listitemchevron",children:[]},{value:"ListItem.Content",id:"listitemcontent",children:[]},{value:"ListItem.Input",id:"listiteminput",children:[]},{value:"ListItem.Subtitle",id:"listitemsubtitle",children:[]},{value:"ListItem.Title",id:"listitemtitle",children:[]},{value:"ListItem.Accordion",id:"listitemaccordion",children:[]},{value:"ListItem.Swipeable",id:"listitemswipeable",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>bottomDivider</code>",id:"bottomdivider",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>disabledStyle</code>",id:"disabledstyle",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>pad</code>",id:"pad",children:[]},{value:"<code>topDivider</code>",id:"topdivider",children:[]},{value:"<code>ViewComponent</code>",id:"viewcomponent",children:[]},{value:"<code>isExpanded</code>",id:"isexpanded",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>expandIcon</code>",id:"expandicon",children:[]},{value:"<code>content</code>",id:"content",children:[]},{value:"<code>noIcon</code>",id:"noicon",children:[]},{value:"<code>noRotation</code>",id:"norotation",children:[]},{value:"<code>animation</code>",id:"animation",children:[]},{value:"<code>leftContent</code>",id:"leftcontent",children:[]},{value:"<code>rightContent</code>",id:"rightcontent",children:[]},{value:"<code>leftStyle</code>",id:"leftstyle",children:[]},{value:"<code>rightStyle</code>",id:"rightstyle",children:[]},{value:"<code>leftWidth</code>",id:"leftwidth",children:[]},{value:"<code>rightWidth</code>",id:"rightwidth",children:[]}]}],s={toc:d};function c(t){var e=t.components,n=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Also receives all\n",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight#props"},"TouchableHighlight"),"\nprops")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bottomdivider"},(0,r.kt)("inlineCode",{parentName:"a"},"bottomDivider"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabled"},(0,r.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"disabledStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onlongpress"},(0,r.kt)("inlineCode",{parentName:"a"},"onLongPress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onpress"},(0,r.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pad"},(0,r.kt)("inlineCode",{parentName:"a"},"pad"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#topdivider"},(0,r.kt)("inlineCode",{parentName:"a"},"topDivider"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#viewcomponent"},(0,r.kt)("inlineCode",{parentName:"a"},"ViewComponent")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"child-components"},"Child Components"),(0,r.kt)("h3",{id:"listitembuttongroup"},"ListItem.ButtonGroup"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Receives all ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/button_group#props"},"ButtonGroup")," props.")),(0,r.kt)("h3",{id:"listitemcheckbox"},"ListItem.CheckBox"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Receives all ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/checkbox#props"},"CheckBox")," props.")),(0,r.kt)("h3",{id:"listitemchevron"},"ListItem.Chevron"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Receives all ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/icon#props"},"Icon")," props.")),(0,r.kt)("h3",{id:"listitemcontent"},"ListItem.Content"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Receives all ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,r.kt)("h3",{id:"listiteminput"},"ListItem.Input"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Receives all ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/input#props"},"Input")," props.")),(0,r.kt)("h3",{id:"listitemsubtitle"},"ListItem.Subtitle"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Receives all ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/text#props"},"Text")," props.")),(0,r.kt)("h3",{id:"listitemtitle"},"ListItem.Title"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Receives all ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.4.2/props/text#props"},"Text")," props.")),(0,r.kt)("h3",{id:"listitemaccordion"},"ListItem.Accordion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#isexpanded"},(0,r.kt)("inlineCode",{parentName:"a"},"isExpanded"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#icon"},(0,r.kt)("inlineCode",{parentName:"a"},"icon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#expandicon"},(0,r.kt)("inlineCode",{parentName:"a"},"expandIcon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#content"},(0,r.kt)("inlineCode",{parentName:"a"},"content"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#noicon"},(0,r.kt)("inlineCode",{parentName:"a"},"noIcon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#norotation"},(0,r.kt)("inlineCode",{parentName:"a"},"noRotation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#animation"},(0,r.kt)("inlineCode",{parentName:"a"},"animation")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Also Receives all ",(0,r.kt)("a",{parentName:"p",href:"#props"},"ListItem")," props.")),(0,r.kt)("h3",{id:"listitemswipeable"},"ListItem.Swipeable"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Also recieves all ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem")," Props")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#leftcontent"},(0,r.kt)("inlineCode",{parentName:"a"},"leftContent"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#leftcontent"},(0,r.kt)("inlineCode",{parentName:"a"},"rightContent"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#leftstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"leftStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rightstyle"},(0,r.kt)("inlineCode",{parentName:"a"},"rightStyle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#leftwidth"},(0,r.kt)("inlineCode",{parentName:"a"},"leftWidth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rightwidth"},(0,r.kt)("inlineCode",{parentName:"a"},"rightWidth")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"bottomdivider"},(0,r.kt)("inlineCode",{parentName:"h3"},"bottomDivider")),(0,r.kt)("p",null,"Add divider at the bottom of the list item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"component"},(0,r.kt)("inlineCode",{parentName:"h3"},"Component")),(0,r.kt)("p",null,"replace element with custom element (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"View or TouchableHighlight (default) if onPress method is added as prop"),(0,r.kt)("td",{parentName:"tr",align:"center"},"component")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"containerstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,r.kt)("p",null,"additional main container styling (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,r.kt)("p",null,"If true the user won't be able to perform any action on the list item."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabledstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,r.kt)("p",null,"Specific styling to be used when list item is disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onlongpress"},(0,r.kt)("inlineCode",{parentName:"h3"},"onLongPress")),(0,r.kt)("p",null,"onLongPress method for link (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onpress"},(0,r.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,r.kt)("p",null,"onPress method for link (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pad"},(0,r.kt)("inlineCode",{parentName:"h3"},"pad")),(0,r.kt)("p",null,"adds spacing between the leftComponent, the title component & right component"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"16"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"topdivider"},(0,r.kt)("inlineCode",{parentName:"h3"},"topDivider")),(0,r.kt)("p",null,"Add divider at the top of the list item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"viewcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"ViewComponent")),(0,r.kt)("p",null,"Container for linear gradient (for non-expo user)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"component"),(0,r.kt)("td",{parentName:"tr",align:"center"},"View")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isexpanded"},(0,r.kt)("inlineCode",{parentName:"h3"},"isExpanded")),(0,r.kt)("p",null,"Accordion Expanded"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"booleon"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"icon"},(0,r.kt)("inlineCode",{parentName:"h3"},"icon")),(0,r.kt)("p",null,"Icon for unexpanded Accordion"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"IocnNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"chevron-down")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"expandicon"},(0,r.kt)("inlineCode",{parentName:"h3"},"expandIcon")),(0,r.kt)("p",null,"Icon when Accordion is expanded, if not provided ",(0,r.kt)("inlineCode",{parentName:"p"},"icon")," will be rotated 180deg (optional)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"IconNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"content"},(0,r.kt)("inlineCode",{parentName:"h3"},"content")),(0,r.kt)("p",null,"Similar to ListItem's child"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Empty ListItem.Content")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"noicon"},(0,r.kt)("inlineCode",{parentName:"h3"},"noIcon")),(0,r.kt)("p",null,"Don't show accordion icon"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"norotation"},(0,r.kt)("inlineCode",{parentName:"h3"},"noRotation")),(0,r.kt)("p",null,"Don't rotate when Accordion is expanded"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"animation"},(0,r.kt)("inlineCode",{parentName:"h3"},"animation")),(0,r.kt)("p",null,"Boolean to show animation,"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Object or number"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'{type:"timing",duration:350}'))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"leftcontent"},(0,r.kt)("inlineCode",{parentName:"h3"},"leftContent")),(0,r.kt)("p",null,"Left Content"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rightcontent"},(0,r.kt)("inlineCode",{parentName:"h3"},"rightContent")),(0,r.kt)("p",null,"Right Content"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"leftstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"leftStyle")),(0,r.kt)("p",null,"Style of left container"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rightstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"rightStyle")),(0,r.kt)("p",null,"Style of right container"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"leftwidth"},(0,r.kt)("inlineCode",{parentName:"h3"},"leftWidth")),(0,r.kt)("p",null,"Width to swipe left"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ScreenWidth/3")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rightwidth"},(0,r.kt)("inlineCode",{parentName:"h3"},"rightWidth")),(0,r.kt)("p",null,"Width to swipe right"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ScreenWidth/3")))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);