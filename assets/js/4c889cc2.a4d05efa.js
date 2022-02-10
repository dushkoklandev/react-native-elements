"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},A=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,A=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,D=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(D,i(i({ref:t},A),{},{components:n})):r.createElement(D,i({ref:t},A))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16036:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>A,default:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},s=void 0,l={unversionedId:"components/usage/Tile/snack/index",id:"components/usage/Tile/snack/index",title:"index",description:"",source:"@site/docs/components/usage/Tile/snack/index.md",sourceDirName:"components/usage/Tile/snack",slug:"/components/usage/Tile/snack/",permalink:"/docs/next/components/usage/Tile/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Tile/snack/index.md",tags:[],version:"current",frontMatter:{}},A=[],p={toc:A};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"snack-player","data-snack-name":"RNE Tile","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20Tile%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20TilesComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Tiles%3A%20React.FunctionComponent%3CTilesComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20'center'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CScrollView%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EFeatured%20Tile%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fwww.mediastorehouse.com%2Fp%2F191%2Fsunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22When%20I%20admire%20the%20wonders%20of%20a%20sunset%20or%20the%20beauty%20of%20the%20moon%2C%20my%20soul%20expands%20in%20the%20worship%20of%20the%20creator.%22%0A%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20featured%0A%20%20%20%20%20%20%20%20%20%20%20%20caption%3D%22Mahatma%20Gandhi%22%0A%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EFeatured%20Tile%20with%20Icon%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fawildgeographer.files.wordpress.com%2F2015%2F02%2Fjohn_muir_glacier.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'heart'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2060%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'red'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20featured%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B0.8%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Tile%20pressed'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingTop%3A%2020%2C%20paddingBottom%3A%20100%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd6%2FHalf_Dome_from_Glacier_Point%252C_Yosemite_NP_-_Diliff.jpg%2F320px-Half_Dome_from_Glacier_Point%252C_Yosemite_NP_-_Diliff.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Half%20Dome%2C%20Yosemite%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2020%2C%20textAlign%3A%20'center'%2C%20paddingBottom%3A%205%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20contentContainerStyle%3D%7B%7B%20height%3A%2070%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-between'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'green'%20%7D%7D%3EVisit%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%20%7D%7D%3EFind%20out%20More%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTile%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20Tiles%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);