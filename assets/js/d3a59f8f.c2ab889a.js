"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4287,9677],{70975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>A});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=n(90085),s=["components"],c={},p=void 0,l={unversionedId:"main/usage/Chip/Chip",id:"version-4.0.0-beta.0/main/usage/Chip/Chip",title:"Chip",description:"LinearGradient Usage",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Chip/Chip.md",sourceDirName:"main/usage/Chip",slug:"/main/usage/Chip/",permalink:"/docs/4.0.0-beta.0/main/usage/Chip/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Chip/Chip.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},m={},A=[{value:"LinearGradient Usage",id:"lineargradient-usage",level:3}],d={toc:A};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"Snack"}),(0,r.kt)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,r.kt)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,r.kt)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,r.kt)("p",null,"For react-native-cli users, make sure to follow the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Chip } from 'react-native-elements';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Chip\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")))}u.isMDXComponent=!0},90085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],s={},c=void 0,p={unversionedId:"main/usage/Chip/snack/index",id:"version-4.0.0-beta.0/main/usage/Chip/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Chip/snack/index.md",sourceDirName:"main/usage/Chip/snack",slug:"/main/usage/Chip/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/Chip/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Chip/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},l={},m=[],A={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Chip","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Chip%2C%20withTheme%2C%20colors%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20ChipsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Chips%3A%20React.FunctionComponent%3CChipsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.contentView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20'center'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CChip%20title%3D%22Solid%20Chip%22%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Disabled%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Outlined%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Outlined%20%26%20Disabled%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Left%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'bluetooth'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Right%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'close'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Pressable%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'bluetooth'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20colors.primary2%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Icon%20chip%20was%20pressed!')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Pressable%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'close'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20colors.primary2%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Icon%20chip%20was%20pressed!')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20contentView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20marginTop%3A%2020%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20withTheme(Chips%2C%20'')%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},A=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),A=p(n),d=a,u=A["".concat(c,".").concat(d)]||A[d]||m[d]||r;return n?i.createElement(u,o(o({ref:t},l),{},{components:n})):i.createElement(u,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=A;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}A.displayName="MDXCreateElement"}}]);