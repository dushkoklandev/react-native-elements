"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(m,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67524:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>m,metadata:()=>l,toc:()=>p,default:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"ThemeProvider",sidebar_position:2},m=void 0,l={unversionedId:"customization/theming",id:"customization/theming",title:"ThemeProvider",description:"The previous solution works great for only one component, but imagine having to",source:"@site/docs/customization/theming.mdx",sourceDirName:"customization",slug:"/customization/theming",permalink:"/docs/next/customization/theming",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/customization/theming.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"ThemeProvider",sidebar_position:2},sidebar:"docs",previous:{title:"Color",permalink:"/docs/next/customization/color"},next:{title:"Components",permalink:"/docs/next/customization/components"}},p=[{value:"Light and dark mode",id:"light-and-dark-mode",children:[],level:3}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The previous solution works great for only one component, but imagine having to\ndo this for every component you want custom styles for. That could get a bit\ntedious to manage. Thankfully, there's a better way to do this. React Native\nElements ships with a 3 utilities for large-scale theming."),(0,a.kt)("p",null,"Firstly you'll want to set up your ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import {\n  ThemeProvider,\n  Button,\n  createTheme,\n} from \'@react-native-elements/themed\';\n\nconst theme = createTheme({\n  Button: {\n    raised: true,\n  },\n});\n\n// Your App\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title="My Button" />\n      <Button title="My 2nd Button" />\n    </ThemeProvider>\n  );\n};\n')),(0,a.kt)("p",null,"The example above achieves the same goals as the first example \u2014 apply the same\nstyles to multiple instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," in the app. However this example\napplies the ",(0,a.kt)("inlineCode",{parentName:"p"},"raised")," prop to every instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," inside the component\ntree under ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider"),". Both of these buttons will have the ",(0,a.kt)("inlineCode",{parentName:"p"},"raised")," prop\nset to true."),(0,a.kt)("p",null,"This is extremely convenient and is made possible through\n",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React's Context API"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"light-and-dark-mode"},"Light and dark mode"),(0,a.kt)("p",null,"React Native Elements also provides a preset dark mode palette to get you started with using dark mode in your app.\nUse the prop ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"createTheme")," to set the default dark theme. You may want to set this by using a button,\nor by using the user's configured settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {\n  ThemeProvider,\n  Button,\n  createTheme,\n} from '@react-native-elements/themed';\n\nconst myTheme = createTheme({\n  lightColors: {\n    primary: '#f2f2f2',\n  },\n  darkColors: {\n    primary: '#121212',\n  },\n  mode: 'dark',\n});\n\n// Your App\nconst App = () => {\n  return (\n    <ThemeProvider theme={myTheme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,a.kt)("p",null,"But how to switch modes?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useTheme } from '@react-native-elements/themed';\n\nconst App = () => {\n  const { updateTheme } = useTheme();\n\n  const switchToDarkMode = () => {\n    updateTheme({\n      mode: 'dark',\n    });\n  };\n\n  const toggleTheme = () => {\n    updateTheme((theme) => ({\n      mode: theme.mode === 'light' ? 'dark' : 'light',\n    }));\n  };\n\n  return (\n    <>\n      <Button title=\"Toggle Theme\" onPress={toggleTheme} />\n      <Button title=\"Dark\" onPress={switchToDarkMode} />\n    </>\n  );\n};\n\nconst theme = createTheme({\n  Text: (prop) => ({\n    style: prop.h5 && { fontSize: 8 },\n  }),\n});\nconst theme = createTheme({\n  Text: {\n    h5Style: { fontSize: 8 },\n  },\n});\n")))}u.isMDXComponent=!0}}]);