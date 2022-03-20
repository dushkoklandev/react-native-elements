"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7672:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={id:"troubleshooting",title:"Troubleshooting"},s=void 0,p={unversionedId:"troubleshooting",id:"version-3.4.2/troubleshooting",title:"Troubleshooting",description:"Although we try to make the experience of using React Native Elements",source:"@site/versioned_docs/version-3.4.2/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/3.4.2/troubleshooting",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/troubleshooting.md",tags:[],version:"3.4.2",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"version-3.4.2/docs",previous:{title:"Usage on the Web",permalink:"/docs/3.4.2/web_usage"},next:{title:"Avatar",permalink:"/docs/3.4.2/avatar"}},c=[{value:"|&gt; Invariant Violation: Element type is invalid",id:"-invariant-violation-element-type-is-invalid",children:[{value:"You incorrectly spelt a component",id:"you-incorrectly-spelt-a-component",children:[],level:3},{value:"Importing a component from the wrong version",id:"importing-a-component-from-the-wrong-version",children:[],level:3}],level:2},{value:"|&gt; &quot;fontFamily (font-name) is not a system font",id:"-fontfamily-font-name-is-not-a-system-font",children:[{value:"Using <code>react-native-init</code>",id:"using-react-native-init",children:[],level:3},{value:"Using an Expo app (create-react-native-app or Expo XDE)",id:"using-an-expo-app-create-react-native-app-or-expo-xde",children:[],level:3},{value:"Using a detached <code>create-react-native-app</code> app",id:"using-a-detached-create-react-native-app-app",children:[],level:3}],level:2},{value:"|&gt; styled-components&#39;s styles won&#39;t merge with theme&#39;s styles",id:"-styled-componentss-styles-wont-merge-with-themes-styles",children:[{value:"Solution",id:"solution",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Although we try to make the experience of using React Native Elements\nhassle-free, time to time you may encounter some problems along the way."),(0,r.kt)("p",null,"On this page you can find solutions to commonly encountered issues."),(0,r.kt)("h2",{id:"-invariant-violation-element-type-is-invalid"},"|> Invariant Violation: Element type is invalid"),(0,r.kt)("p",null,"This error occurs when trying to import a component that doesn't exist. This\nusually happens for a few reasons:"),(0,r.kt)("h3",{id:"you-incorrectly-spelt-a-component"},"You incorrectly spelt a component"),(0,r.kt)("p",null,"Spelling a component incorrectly though very simple, happens occasionally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Incorrect\nimport { Listitem } from 'react-native-elements'\n\n// Correct\nimport { ListItem } from 'react-native-elements'\n")),(0,r.kt)("h3",{id:"importing-a-component-from-the-wrong-version"},"Importing a component from the wrong version"),(0,r.kt)("p",null,"This error occurs when you're trying to use a component from the wrong version.\nAt RNE they're some components that are only available in some versions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"Example:\n\n`<FormInput />` is only available in v0.19.1 and below. `<Input />` is only\navailable in `v1.0.0-beta1` and higher.\n")),(0,r.kt)("p",null,"To fix this, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check your ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," for the version of ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-elements")," you are\nusing."),(0,r.kt)("li",{parentName:"ol"},"View the documentation for your particular version on the website. See\navailable versions\n",(0,r.kt)("a",{parentName:"li",href:"/versions"},"here"),"\nor click the version number next to the logo in the header."),(0,r.kt)("li",{parentName:"ol"},"Checking the list of components on the left side bar, make sure you're using\nthe right component.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-fontfamily-font-name-is-not-a-system-font"},'|> "fontFamily (font-name) is not a system font'),(0,r.kt)("p",null,"This is a general error in react native, where you in your code, or a package\nyou are using, is trying to use a font that is not bundled with the platform or\nis not added to the project."),(0,r.kt)("p",null,"If you aren't using a custom font in your application, then it's likely that\nthe error comes from React Native Elements looking for\n",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,r.kt)("p",null,"They're a couple ways to solve this depending on your setup."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-react-native-init"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-init"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-an-expo-app-create-react-native-app-or-expo-xde"},(0,r.kt)("inlineCode",{parentName:"a"},"create-react-native-app or Expo XDE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-a-detached-create-react-native-app-app"},(0,r.kt)("inlineCode",{parentName:"a"},"Detached create-react-native-app")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"using-react-native-init"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"react-native-init")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Delete everything to be sure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules yarn.lock\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install React Native Elements")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn && yarn add react-native-elements\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install react-native-vector-icons")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn add react-native-vector-icons\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Link react-native-vector-icons. Learn more about\n",(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/linking.html"},"linking"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"react-native link react-native-vector-icons\n")),(0,r.kt)("p",null,"If you encounter any red error screens during the process, try running these\ncommands:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Unrecognized font x"'),(0,r.kt)("p",{parentName:"blockquote"},"iOS - ",(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf ios/build")),(0,r.kt)("p",{parentName:"blockquote"},"Android - ",(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf android/build && rm -rf android/app/build"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),(0,r.kt)("p",{parentName:"blockquote"},"npm -",(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf node_modules && npm i")),(0,r.kt)("p",{parentName:"blockquote"},"yarn - ",(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf node_modules && yarn"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"npm start -- --reset-cache"))),(0,r.kt)("h3",{id:"using-an-expo-app-create-react-native-app-or-expo-xde"},"Using an Expo app (create-react-native-app or Expo XDE)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Delete everything to be sure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules yarn.lock package-lock.json\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install React Native Elements")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn && yarn add react-native-elements\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"@expo/vector-icons"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn add @expo/vector-icons --save\n")),(0,r.kt)("h3",{id:"using-a-detached-create-react-native-app-app"},"Using a detached ",(0,r.kt)("inlineCode",{parentName:"h3"},"create-react-native-app")," app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you choose a regular React Native project, use\n",(0,r.kt)("a",{parentName:"li",href:"#using-react-native-init"},"Solution 1")),(0,r.kt)("li",{parentName:"ul"},"If you choose to use Expo SDK (ExpoKit), use\n",(0,r.kt)("a",{parentName:"li",href:"#using-an-expo-app-create-react-native-app-or-expo-xde"},"Solution 2"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-styled-componentss-styles-wont-merge-with-themes-styles"},"|> ",(0,r.kt)("a",{parentName:"h2",href:"https://styled-components.com/"},(0,r.kt)("strong",{parentName:"a"},"styled-components")),"'s styles won't merge with theme's styles"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"styled-components")," is passing converted styles as array to ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," prop.",(0,r.kt)("br",{parentName:"p"}),"\n","So if your theme's style is ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," type, it will not be merged because type of styles are not the same. (See ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.4.2/customization#common-pitfalls"},"Common Pitfalls"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const theme = {\n  Text: {\n    style: {\n      fontSize: 16\n    }\n  }\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const StyledText = styled(Text)`\n  color: red;\n`;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"styled-components")," will pass styles as array to ",(0,r.kt)("inlineCode",{parentName:"p"},"style"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<StyledText style={[{ color: 'red' }]}/>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Not work")),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("p",null,"You need to set theme's style as array to make it work with ",(0,r.kt)("strong",{parentName:"p"},"styled-components"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const theme = {\n  Text: {\n    style: [\n      {\n        fontSize: 16\n      }\n    ]\n  }\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const StyledText = styled(Text)`\n  color: red;\n`;\n")),(0,r.kt)("p",null,"| \u2705 Works"))}u.isMDXComponent=!0}}]);