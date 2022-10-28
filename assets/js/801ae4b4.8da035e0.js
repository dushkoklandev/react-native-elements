(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[60591],{54904:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var a=n(67294),r=n(13925),i=n(54236),l=n(40318),o=n(62290);const s=function(){var t=(0,l.Z)({componentName:"AirbnbRating",props:{count:{type:o.n.Number,value:5},defaultRating:{type:o.n.Number,value:1},reviews:{type:o.n.Array,value:'["Terrible", "Bad", "Okay", "Good", "Great"]'},onFinishRating:{type:o.n.Function,value:'() => console.log("onFinishRating()")'},showRating:{type:o.n.Boolean,value:!0}},scope:{AirbnbRating:r.AirbnbRating},imports:{"@rneui/base":{named:["AirbnbRating"]}}});return a.createElement(a.Fragment,null,a.createElement(i.Z,{params:t}))}},37047:(t,e,n)=>{"use strict";n.d(e,{w:()=>s});var a=n(67294),r=n(35742),i=n(14330),l=n(98576),o=n(61720),s=function(){return a.createElement(r.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n        "))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var a=n(87462),r=n(67294),i=n(91262),l=n(18421),o=n(77356),s=n(41652),m=n(24309),d=n(16042),p=n(20346),u=n(30650);const c=function(t){var e=t.params,n=t.containerStyle,c=void 0===n?{}:n;return r.createElement(i.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(p.X9.Provider,null,r.createElement(p.PK,{initialMetrics:u.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},r.createElement(l.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:o.Z}))),r.createElement(s.Z,{msg:e.errorProps.msg,isPopup:!0}),r.createElement(m.Z,e.knobProps),r.createElement(s.Z,e.errorProps),r.createElement(d.E,e.actions)))}))}},87789:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>A,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>g,toc:()=>k});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(37047),o=(n(65488),n(85162),["components"]),s={toc:[]};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE AirbnbRating","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20Platform%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20AirbnbRating%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20RatingsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Ratings%3A%20React.FunctionComponent%3CRatingsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20ratingCompleted%20%3D%20(rating%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log('Rating%20is%3A%20'%20%2B%20rating)%3B%0A%7D%3B%0A%0Aconst%20ratingProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%20style%3D%7Bstyles.viewContainer%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%20isDisabled%3D%7Btrue%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%0A%20%20%20%20%20%20%20%20%20%20count%3D%7B11%7D%0A%20%20%20%20%20%20%20%20%20%20reviews%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20'Terrible'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Bad'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Meh'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'OK'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Good'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Hmm...'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Very%20Good'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Wow'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Amazing'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Unbelievable'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Jesus'%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20defaultRating%3D%7B11%7D%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0AheadingContainer%3A%20%7B%0A%20%20paddingTop%3A%2050%2C%0A%7D%2C%0AtitleText%3A%20%7B%0A%20%20fontSize%3A%2025%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20paddingVertical%3A%205%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Menlo-Bold'%20%3A%20''%2C%0A%20%20color%3A%20'%2327ae60'%2C%0A%7D%2C%0AsubtitleText%3A%20%7B%0A%20%20fontSize%3A%2018%2C%0A%20%20fontWeight%3A%20'400'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Trebuchet%20MS'%20%3A%20''%2C%0A%20%20color%3A%20'%2334495e'%2C%0A%7D%2C%0AviewContainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Arating%3A%20%7B%0A%20%20paddingVertical%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Ratings%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var d=n(54904),p=["components"],u={id:"airbnbrating",title:"AirbnbRating"},c=void 0,g={unversionedId:"components/airbnbrating",id:"version-4.0.0-rc.6/components/airbnbrating",title:"AirbnbRating",description:"Ratings are used to collect measurable feedback from users.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/AirbnbRating.mdx",sourceDirName:"components",slug:"/components/airbnbrating",permalink:"/docs/components/airbnbrating",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/AirbnbRating.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"airbnbrating",title:"AirbnbRating"},sidebar:"docs",previous:{title:"Common Pitfalls",permalink:"/docs/customization/pitfall"},next:{title:"Avatar",permalink:"/docs/components/avatar"}},A={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],b={toc:k};function f(t){var e=t.components,n=(0,r.Z)(t,p);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.w,{mdxType:"IconsStyle"}),(0,i.kt)("p",null,"Ratings are used to collect measurable feedback from users.\nUse Rating over an Input where imagery can increase user interaction.\nThis component is imported from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"react-native-ratings"),".\nThere are two types of rating - TapRating and SwipeRating.\nThis documentation is for Tap Rating version."),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AirbnbRating } from "@rneui/themed";\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(m,{mdxType:"Usage"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("div",{class:"table-responsive"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"count")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Total number of ratings to displayDefault is 5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"defaultRating")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Initial value for the ratingDefault is 3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isDisabled")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the rating can be modiefied by the userDefault is false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onFinishRating")),(0,i.kt)("td",{parentName:"tr",align:null},"(number: any) => void"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Callback method when the user finishes rating. Gives you the final rating value as a whole number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ratingContainerStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"View Style"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Style for rating containerDefault is none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reviewColor")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Color value for review.Default is #f1c40f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reviewSize")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Size value for review.Default is 40")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reviews")),(0,i.kt)("td",{parentName:"tr",align:null},"string[]"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Labels to show when each value is tappede.g. If the first star is tapped, then value in index 0 will be used as the labelDefault is ","['Terrible', 'Bad', 'Okay', 'Good', 'Great']")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"selectedColor")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Color value for filled stars.Default is #004666")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"showRating")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Determines if to show the reviews above the ratingDefault is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"size")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Size of rating imageDefault is 40")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"starContainerStyle")),(0,i.kt)("td",{parentName:"tr",align:null},"View Style"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Style for star containerDefault is none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"starImage")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Pass in a custom base image source"))))),(0,i.kt)("h2",{id:"playground"},"Playground"),(0,i.kt)(d.Z,{mdxType:"Play"}))}f.isMDXComponent=!0},61720:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},33770:()=>{},72950:()=>{},54882:()=>{}}]);