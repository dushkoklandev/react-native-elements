"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>D,kt:()=>p});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},D=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,D=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,C=d["".concat(l,".").concat(p)]||d[p]||A[p]||o;return r?i.createElement(C,a(a({ref:t},D),{},{components:r})):i.createElement(C,a({ref:t},D))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1179:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>D,default:()=>d});var i=r(87462),n=r(63366),o=(r(67294),r(3905)),a=["components"],s={},l=void 0,c={unversionedId:"components/usage/Divider",id:"components/usage/Divider",title:"Divider",description:"",source:"@site/docs/components/usage/Divider.mdx",sourceDirName:"components/usage",slug:"/components/usage/Divider",permalink:"/docs/next/components/usage/Divider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Divider.mdx",tags:[],version:"current",frontMatter:{}},D=[],A={toc:D};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Divider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useContext%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20Divider%2C%20useTheme%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20ScrollView%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Atype%20DividerViewTypes%20%3D%20%7B%7D%3B%0A%0Aconst%20DividerView%3A%20React.FunctionComponent%3CDividerViewTypes%3E%20%3D%20(props)%20%3D%3E%20%7B%0Aconst%20%7B%20theme%20%7D%20%3D%20useTheme()%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EHorizontal%20Divider%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20width%20and%20color%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20width%3D%7B5%7D%20color%3D%7Btheme%3F.colors%3F.primary%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Divider%20with%20Inset%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20left%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20right%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22right%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20middle%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22middle%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EWelcome%20to%20RNE%20App%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20width%3D%7B5%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EDividers%20with%20SubHeader%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%0A%20%20%20%20%20%20%20%20%20%20subHeader%3D%22Divider%22%0A%20%20%20%20%20%20%20%20%20%20inset%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20subHeaderStyle%3D%7B%7B%20color%3A%20theme%3F.colors%3F.primary%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%2C%0Ahorizontal%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%7D%2C%0AhorizontalText%3A%20%7B%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20marginVertical%3A%2010%2C%0A%7D%2C%0Avertical%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DividerView%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);