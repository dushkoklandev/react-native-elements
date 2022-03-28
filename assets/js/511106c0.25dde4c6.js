"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8169],{64755:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=["components"],i={id:"avatar",title:"Avatar"},p=void 0,c={unversionedId:"avatar",id:"version-2.3.2/avatar",title:"Avatar",description:"Avatars are found all over ui design from lists to profile screens. They are",source:"@site/versioned_docs/version-2.3.2/avatar.md",sourceDirName:".",slug:"/avatar",permalink:"/docs/2.3.2/avatar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/avatar.md",tags:[],version:"2.3.2",frontMatter:{id:"avatar",title:"Avatar"},sidebar:"version-2.3.2/docs",previous:{title:"Troubleshooting",permalink:"/docs/2.3.2/troubleshooting"},next:{title:"Badge",permalink:"/docs/2.3.2/badge"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Avatar with initials",id:"avatar-with-initials",level:4},{value:"Avatar with icons",id:"avatar-with-icons",level:4},{value:"Avatar with title placeholder",id:"avatar-with-title-placeholder",level:4},{value:"Props",id:"props",level:2},{value:"Child Components",id:"child-components",level:2},{value:"Accessory",id:"accessory",level:3},{value:"Reference",id:"reference",level:2},{value:"<code>activeOpacity</code>",id:"activeopacity",level:3},{value:"<code>avatarStyle</code>",id:"avatarstyle",level:3},{value:"<code>containerStyle</code>",id:"containerstyle",level:3},{value:"<code>icon</code>",id:"icon",level:3},{value:"<code>iconStyle</code>",id:"iconstyle",level:3},{value:"<code>imageProps</code>",id:"imageprops",level:3},{value:"<code>onLongPress</code>",id:"onlongpress",level:3},{value:"<code>onPress</code>",id:"onpress",level:3},{value:"<code>overlayContainerStyle</code>",id:"overlaycontainerstyle",level:3},{value:"<code>placeholderStyle</code>",id:"placeholderstyle",level:3},{value:"<code>rounded</code>",id:"rounded",level:3},{value:"<code>showAccessory</code>",id:"showaccessory",level:3},{value:"<code>size</code>",id:"size",level:3},{value:"<code>source</code>",id:"source",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>titleStyle</code>",id:"titlestyle",level:3},{value:"<code>renderPlaceholderContent</code>",id:"renderplaceholdercontent",level:3},{value:"<code>Component</code>",id:"component",level:3},{value:"<code>ImageComponent</code>",id:"imagecomponent",level:3}],k={toc:d};function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Avatars are found all over ui design from lists to profile screens. They are\ncommonly used to represent a user and can contain photos, icons, or even text."),(0,l.kt)("div",{class:"component-preview component-preview--grid"},(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/avatar/avatar--photo.jpg",alt:"Standard Avatar"}),(0,l.kt)("figcaption",null,"Standard")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/avatar/avatar--title.jpg",alt:"Avatar with Title"}),(0,l.kt)("figcaption",null,"Title")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/avatar/avatar--icon.jpg",alt:"Avatar with Icon"}),(0,l.kt)("figcaption",null,"Icon")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/avatar/avatar--edit.jpg",alt:"Standard Avatar with accessory"}),(0,l.kt)("figcaption",null,"Standard with accessory"))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Avatar, Accessory } from 'react-native-elements';\n\n// Standard Avatar\n<Avatar\n  rounded\n  source={{\n    uri:\n      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n  }}\n/>\n\n// Avatar with Title\n<Avatar rounded title=\"MD\" />\n\n// Avatar with Icon\n<Avatar rounded icon={{ name: 'home' }} />\n\n// Standard Avatar with accessory\n<Avatar\n  source={{\n    uri:\n      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n  }}\n  >\n  <Accessory />\n</Avatar>\n")),(0,l.kt)("h4",{id:"avatar-with-initials"},"Avatar with initials"),(0,l.kt)("img",{src:"/img/avatar_with_initials.png",width:"500"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { Avatar } from "react-native-elements";\n\n<Avatar\n  size="small"\n  rounded\n  title="MT"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="medium"\n  title="BP"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="large"\n  title="LW"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n<Avatar\n  size="xlarge"\n  rounded\n  title="CR"\n  onPress={() => console.log("Works!")}\n  activeOpacity={0.7}\n/>\n')),(0,l.kt)("h4",{id:"avatar-with-icons"},"Avatar with icons"),(0,l.kt)("img",{src:"/img/avatar_with_icons.png",width:"500"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Avatar } from \"react-native-elements\";\n\n<Avatar\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n<Avatar\n  size=\"small\"\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n<Avatar\n  size=\"medium\"\n  overlayContainerStyle={{backgroundColor: 'blue'}}\n  icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 3, marginTop: 100}}\n/>\n<Avatar\n  size=\"large\"\n  icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}\n  overlayContainerStyle={{backgroundColor: 'white'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 4, marginTop: 75}}\n/>\n<Avatar\n  size=\"xlarge\"\n  rounded\n  icon={{name: 'home', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 5, marginRight: 60}}\n/>\n<Avatar\n  size={200}\n  rounded\n  icon={{name: 'user', type: 'font-awesome'}}\n  onPress={() => console.log(\"Works!\")}\n  activeOpacity={0.7}\n  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}\n/>\n")),(0,l.kt)("h4",{id:"avatar-with-title-placeholder"},"Avatar with title placeholder"),(0,l.kt)("img",{src:"/img/avatar_with_title_placeholder.gif",width:"500"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem } from 'react-native-elements';\n\n<ListItem\n  leftAvatar={{\n    title: name[0],\n    source: { uri: avatar_url },\n    showAccessory: true,\n  }}\n  title={name}\n  subtitle={role}\n  chevron\n/>;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#activeopacity"},(0,l.kt)("inlineCode",{parentName:"a"},"activeOpacity"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#avatarstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"avatarStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#icon"},(0,l.kt)("inlineCode",{parentName:"a"},"icon"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#iconstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"iconStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#imageprops"},(0,l.kt)("inlineCode",{parentName:"a"},"imageProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onlongpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onLongPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overlaycontainerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"overlayContainerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#placeholderstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"placeholderStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rounded"},(0,l.kt)("inlineCode",{parentName:"a"},"rounded"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#size"},(0,l.kt)("inlineCode",{parentName:"a"},"size"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#source"},(0,l.kt)("inlineCode",{parentName:"a"},"source"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#title"},(0,l.kt)("inlineCode",{parentName:"a"},"title"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titlestyle"},(0,l.kt)("inlineCode",{parentName:"a"},"titleStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#renderplaceholdercontent"},(0,l.kt)("inlineCode",{parentName:"a"},"renderPlaceholderContent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Component"},(0,l.kt)("inlineCode",{parentName:"a"},"Component"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#imagecomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ImageComponent")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"child-components"},"Child Components"),(0,l.kt)("h3",{id:"accessory"},"Accessory"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Receives either all ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.2/icon#props"},"Icon")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.2/image#props"},"Image")," props.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"activeopacity"},(0,l.kt)("inlineCode",{parentName:"h3"},"activeOpacity")),(0,l.kt)("p",null,"Opacity when pressed"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0.2")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"avatarstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"avatarStyle")),(0,l.kt)("p",null,"Style for avatar image"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"Styling for outer container"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"icon"},(0,l.kt)("inlineCode",{parentName:"h3"},"icon")),(0,l.kt)("p",null,"Displays an icon as the main content of the Avatar. ",(0,l.kt)("strong",{parentName:"p"},"Cannot be used alongside\ntitle"),". When used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," prop it will be used as the placeholder."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object {name: string, color: string, size: number, type: string (default is material, or choose from ",(0,l.kt)("a",{parentName:"td",href:"/docs/2.3.2/icon#available-icon-sets"},"supported icon sets"),"), iconStyle: object(style)}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"iconstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"iconStyle")),(0,l.kt)("p",null,"Extra styling for icon component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"imageprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"imageProps")),(0,l.kt)("p",null,'Optional properties to pass to the avatar e.g "resizeMode"'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"/docs/2.3.2/image#props"},"...Image props"),"}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onlongpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onLongPress")),(0,l.kt)("p",null,"Callback function when long pressing component"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,l.kt)("p",null,"Callback function when pressing component"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"overlaycontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"overlayContainerStyle")),(0,l.kt)("p",null,"Style for the view outside image or icon"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"placeholderstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"placeholderStyle")),(0,l.kt)("p",null,"Adds style to the placeholder wrapper"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"{ backgroundColor: '#BDBDBD' }"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rounded"},(0,l.kt)("inlineCode",{parentName:"h3"},"rounded")),(0,l.kt)("p",null,"Makes the avatar circular"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showaccessory"},(0,l.kt)("inlineCode",{parentName:"h3"},"showAccessory")),(0,l.kt)("p",null,"Shows an accessory over the avatar (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"size"},(0,l.kt)("inlineCode",{parentName:"h3"},"size")),(0,l.kt)("p",null,"Size of the avatar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string(",(0,l.kt)("inlineCode",{parentName:"td"},"small"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"medium"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"large"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"xlarge"),") or number"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"small"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"source"},(0,l.kt)("inlineCode",{parentName:"h3"},"source")),(0,l.kt)("p",null,"Image source"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/images"},"ImageSource")),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"Renders title in the placeholder"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"titlestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"titleStyle")),(0,l.kt)("p",null,"Style for the title"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"renderplaceholdercontent"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderPlaceholderContent")),(0,l.kt)("p",null,"Custom placeholder element (by default, it's the title)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React component or element"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"component"},(0,l.kt)("inlineCode",{parentName:"h3"},"Component")),(0,l.kt)("p",null,"Component for enclosing element (eg: TouchableHighlight, View, etc)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"TouchableHighlight")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"imagecomponent"},(0,l.kt)("inlineCode",{parentName:"h3"},"ImageComponent")),(0,l.kt)("p",null,"Custom ImageComponent for Avatar"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React component or element"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Image")))))}s.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=c(a),s=r,u=k["".concat(p,".").concat(s)]||k[s]||d[s]||l;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);