"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[48047],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||p[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),d=n(7094),u=n(12466);const m="tabList__CuJ",p="tabItem_LNqP";function s(t){var e,n,i=t.lazy,s=t.block,c=t.defaultValue,k=t.values,g=t.groupId,h=t.className,N=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),A=(0,o.l)(b,(function(t,e){return t.value===e.value}));if(A.length>0)throw new Error('Docusaurus error: Duplicate values "'+A.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(e=null!=c?c:null==(n=N.find((function(t){return t.props.default})))?void 0:n.props.value)?e:N[0].props.value;if(null!==f&&!b.some((function(t){return t.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,d.U)(),v=C.tabGroupChoices,y=C.setTabGroupChoices,D=(0,r.useState)(f),B=D[0],w=D[1],T=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=v[g];null!=E&&E!==B&&b.some((function(t){return t.value===E}))&&w(E)}var x=function(t){var e=t.currentTarget,n=T.indexOf(e),a=b[n].value;a!==B&&(S(e),w(a),null!=g&&y(g,String(a)))},V=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a,r=T.indexOf(t.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var l,i=T.indexOf(t.currentTarget)-1;n=null!=(l=T[i])?l:T[T.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},b.map((function(t){var e=t.value,n=t.label,i=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===e?0:-1,"aria-selected":B===e,key:e,ref:function(t){return T.push(t)},onKeyDown:V,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":B===e})}),null!=n?n:e)}))),i?(0,r.cloneElement)(N.filter((function(t){return t.props.value===B}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==B})}))))}function c(t){var e=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(e)},t))}},17608:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>s,toc:()=>k});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=(n(65488),n(85162),n(32408),["components"]),o={toc:[]};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Slider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Slider%2C%20Text%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20SlidersComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Sliders%3A%20React.FunctionComponent%3CSlidersComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvalue%2C%20setValue%5D%20%3D%20useState(0)%3B%0Aconst%20%5BvertValue%2C%20setVertValue%5D%20%3D%20useState(0)%3B%0A%0Aconst%20interpolate%20%3D%20(start%3A%20number%2C%20end%3A%20number)%20%3D%3E%20%7B%0A%20%20let%20k%20%3D%20(value%20-%200)%20%2F%2010%3B%20%2F%2F%200%20%3D%3Emin%20%20%26%26%2010%20%3D%3E%20MAX%0A%20%20return%20Math.ceil((1%20-%20k)%20*%20start%20%2B%20k%20*%20end)%20%25%20256%3B%0A%7D%3B%0A%0Aconst%20color%20%3D%20()%20%3D%3E%20%7B%0A%20%20let%20r%20%3D%20interpolate(255%2C%200)%3B%0A%20%20let%20g%20%3D%20interpolate(0%2C%20255)%3B%0A%20%20let%20b%20%3D%20interpolate(0%2C%200)%3B%0A%20%20return%20%60rgb(%24%7Br%7D%2C%24%7Bg%7D%2C%24%7Bb%7D)%60%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Slider%3C%2FText%3E%0A%0A%20%20%20%20%3CView%20style%3D%7B%5Bstyles.contentView%5D%7D%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BsetValue%7D%0A%20%20%20%20%20%20%20%20maximumValue%3D%7B10%7D%0A%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20allowTouchTrack%0A%20%20%20%20%20%20%20%20trackStyle%3D%7B%7B%20height%3A%205%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2020%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolor()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3EValue%3A%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Slider%3C%2FText%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.verticalContent%7D%3E%0A%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20value%3D%7BvertValue%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BsetVertValue%7D%0A%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20minimumValue%3D%7B20%7D%0A%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20orientation%3D%22vertical%22%0A%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2016%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23f50%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20paddingLeft%3A%2025%20%7D%7D%3EValue%3A%20%7BvertValue%7D%3C%2FText%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AcontentView%3A%20%7B%0A%20%20padding%3A%2020%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'stretch'%2C%0A%7D%2C%0AverticalContent%3A%20%7B%0A%20%20padding%3A%2020%2C%0A%20%20flex%3A%201%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20height%3A%20500%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'stretch'%2C%0A%7D%2C%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%3B%0A%0Aexport%20default%20Sliders%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var u=["components"],m={id:"slider",title:"Slider"},p=void 0,s={unversionedId:"components/slider",id:"version-4.0.0-rc.1/components/slider",title:"Slider",description:"Sliders allow users to select a value from a fixed set of values using drag utility.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/Slider.mdx",sourceDirName:"components",slug:"/components/slider",permalink:"/docs/4.0.0-rc.1/components/slider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/Slider.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"slider",title:"Slider"},sidebar:"docs",previous:{title:"SearchBar",permalink:"/docs/4.0.0-rc.1/components/searchbar"},next:{title:"Skeleton",permalink:"/docs/4.0.0-rc.1/components/skeleton"}},c={},k=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:k};function h(t){var e=t.components,n=(0,r.Z)(t,u);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sliders allow users to select a value from a fixed set of values using drag utility."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(d,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowTouchTrack")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, thumb will respond and jump to any touch along the track.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animateTransitions")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Set to true if you want to use the default 'spring' animation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animationConfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TimingAnimationConfig")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"SpringAnimationConfig")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Used to configure the animation parameters. These are the same parameters in the ",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/animations.html"},"Animated library"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animationType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spring")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"timing")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timing")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to 'spring' or 'timing' to use one of those two types of animations with the default ",(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/animations.html"},"animation properties"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Apply style to the container of the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debugTouchArea")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Set this to true to visually see the thumb touch rect in green.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"If true the user won't be able to move the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumTrackTintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#b3b3b3")),(0,l.kt)("td",{parentName:"tr",align:null},"The color used for the track to the right of the button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Initial maximum value of the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minimumTrackTintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#3f3f3f")),(0,l.kt)("td",{parentName:"tr",align:null},"The color used for the track to the left of the button.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minimumValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Initial minimum value of the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSlidingComplete")),(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback called when the user finishes changing the value (e.g. when the slider is released).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSlidingStart")),(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback called when the user starts changing the value (e.g. when the slider is pressed).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onValueChange")),(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback continuously called while the user is dragging the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"orientation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"vertical")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the orientation of the slider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"step")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Step value of the slider. The value should be between 0 and maximumValue - minimumValue).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The style applied to the slider container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbProps")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The props applied to the thumb. Uses ",(0,l.kt)("inlineCode",{parentName:"td"},"Component")," prop which can accept ",(0,l.kt)("inlineCode",{parentName:"td"},"Animated")," components.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The style applied to the thumb.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbTintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"red")),(0,l.kt)("td",{parentName:"tr",align:null},"The color used for the thumb.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"thumbTouchSize")),(0,l.kt)("td",{parentName:"tr",align:null},"Sizable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ width: THUMB_SIZE, height: THUMB_SIZE }")),(0,l.kt)("td",{parentName:"tr",align:null},"The size of the touch area that allows moving the thumb. The touch area has the same center as the visible thumb. This allows to have a visually small thumb while still allowing the user to move it easily.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trackStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The style applied to the track.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Initial value of the slider."))))))}h.isMDXComponent=!0}}]);