"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8931,9151],{71871:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(67294);function r(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},15236:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(83117),r=n(67294),l=n(5730),i=n(34875),o=n(86010);const s="tabItem_LplD";function u(t){var e,n,l,u=t.lazy,d=t.block,p=t.defaultValue,m=t.values,c=t.groupId,g=t.className,k=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,i.lx)(f,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(e=null!=p?p:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=k[0])?void 0:l.props.value;if(null!==h&&!f.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var A=(0,i.UB)(),b=A.tabGroupChoices,y=A.setTabGroupChoices,v=(0,r.useState)(h),D=v[0],C=v[1],w=[],R=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var B=b[c];null!=B&&B!==D&&f.some((function(t){return t.value===B}))&&C(B)}var E=function(t){var e=t.currentTarget,n=w.indexOf(e),a=f[n].value;a!==D&&(R(e),C(a),null!=c&&y(c,a))},T=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=w.indexOf(t.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(t.currentTarget)-1;n=w[r]||w[w.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},f.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:function(t){return w.push(t)},onKeyDown:T,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":D===e})}),null!=n?n:e)}))),u?(0,r.cloneElement)(k.filter((function(t){return t.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==D})}))))}function d(t){var e=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},46087:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={},s=void 0,u={unversionedId:"component_usage/Rating",id:"component_usage/Rating",title:"Rating",description:"Read-only mode",source:"@site/docs/component_usage/Rating.mdx",sourceDirName:"component_usage",slug:"/component_usage/Rating",permalink:"/docs/next/component_usage/Rating",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/component_usage/Rating.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"Read-only mode",id:"read-only-mode",level:3},{value:"Fractions",id:"fractions",level:3}],m={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"read-only-mode"},"Read-only mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { rating } = this.props;\n\n<Rating imageSize={20} readonly startingValue={rating} style={styles.rating} />;\n")),(0,l.kt)("h3",{id:"fractions"},"Fractions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<Rating showRating fractions="{1}" startingValue="{3.3}" />\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif",alt:"Fractions demo gif"})),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Rating","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20Platform%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Rating%2C%20RatingProps%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20RatingsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Ratings%3A%20React.FunctionComponent%3CRatingsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20ratingCompleted%20%3D%20(rating%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log('Rating%20is%3A%20'%20%2B%20rating)%3B%0A%7D%3B%0A%0Aconst%20ratingProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%20style%3D%7Bstyles.viewContainer%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22star%22%0A%20%20%20%20%20%20%20%20%20%20fractions%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20startingValue%3D%7B3.6%7D%0A%20%20%20%20%20%20%20%20%20%20readonly%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22custom%22%0A%20%20%20%20%20%20%20%20%20%20ratingColor%3D%22%233498db%22%0A%20%20%20%20%20%20%20%20%20%20ratingCount%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B30%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22heart%22%0A%20%20%20%20%20%20%20%20%20%20ratingCount%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20fractions%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20startingValue%3D%7B1.57%7D%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.rating%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0AheadingContainer%3A%20%7B%0A%20%20paddingTop%3A%2050%2C%0A%7D%2C%0AtitleText%3A%20%7B%0A%20%20fontSize%3A%2025%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20paddingVertical%3A%205%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Menlo-Bold'%20%3A%20''%2C%0A%20%20color%3A%20'%2327ae60'%2C%0A%7D%2C%0AsubtitleText%3A%20%7B%0A%20%20fontSize%3A%2018%2C%0A%20%20fontWeight%3A%20'400'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Trebuchet%20MS'%20%3A%20''%2C%0A%20%20color%3A%20'%2334495e'%2C%0A%7D%2C%0AviewContainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Arating%3A%20%7B%0A%20%20paddingVertical%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Ratings%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0},86713:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=(n(15236),n(71871),n(19583),n(46087)),o=["components"],s={id:"rating",title:"Rating"},u=void 0,d={unversionedId:"components/rating",id:"components/rating",title:"Rating",description:"Ratings are used to collect measurable feedback from users.",source:"@site/docs/components/Rating.mdx",sourceDirName:"components",slug:"/components/rating",permalink:"/docs/next/components/rating",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Rating.mdx",tags:[],version:"current",frontMatter:{id:"rating",title:"Rating"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],c={toc:m};function g(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ratings are used to collect measurable feedback from users.\nUse Rating over an Input where imagery can increase user interaction.\nThis component is imported from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"react-native-ratings"),".\nThere are two tyoes of rating - TapRating and SwipeRating.\nThis documentation is for Swipe Rating version."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fractions")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The number of decimal places for the rating value; must be between 0 and 20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imageSize")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The size of each rating imageDefault is 50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jumpValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The number to jump per swipeDefault is 0 (not to jump)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum value the user can selectDefault is 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onFinishRating")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback method when the user finishes rating. Gives you the final rating value as a whole number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onStartRating")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback method when the user starts rating.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeRating")),(0,l.kt)("td",{parentName:"tr",align:null},"(number: any) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback method when the user is swiping.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingBackgroundColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pass in a custom background-fill-color for the rating icon; use this along with type='custom' prop aboveDefault is 'white'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pass in a custom fill-color for the rating icon; use this along with type='custom' prop aboveDefault is '#f1c40f'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingCount")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of rating images to displayDefault is 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingImage")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pass in a custom image source; use this along with type='custom' prop above")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingTextColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Color used for the text labels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the rating can be modiefied by the userDefault is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showRating")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Displays the Built-in Rating UI to show the rating value in real-timeDefault is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showReadOnlyText")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the text is read onlyDefault is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"startingValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The initial rating to renderDefault is ratingCount/2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Exposes style prop to add additonal styling to the container view")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Color used for the background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Graphic used for represent a ratingDefault is 'star'"))))))}g.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);