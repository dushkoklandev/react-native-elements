(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(200)),i={id:"customization",title:"Customization"},l={unversionedId:"customization",id:"version-2.0.4/customization",isDocsHomePage:!1,title:"Customization",description:"Congrats! You've installed React Native Elements and your immediate question",source:"@site/versioned_docs/version-2.0.4/customization.md",permalink:"/react-native-elements/docs/2.0.4/customization",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.0.4/customization.md",version:"2.0.4",sidebar:"version-2.0.4/docs",previous:{title:"Overview",permalink:"/react-native-elements/docs/2.0.4/overview"},next:{title:"Usage on the Web",permalink:"/react-native-elements/docs/2.0.4/web_usage"}},c=[{value:"Component Styles",id:"component-styles",children:[]},{value:"Theming",id:"theming",children:[{value:"Using Composition",id:"using-composition",children:[]},{value:"Using ThemeProvider",id:"using-themeprovider",children:[]},{value:"TypeScript Definitions (extending the default theme)",id:"typescript-definitions-extending-the-default-theme",children:[]},{value:"Order of Styles",id:"order-of-styles",children:[]},{value:"The Theme Object",id:"the-theme-object",children:[]},{value:"Using the theme in your own components",id:"using-the-theme-in-your-own-components",children:[]},{value:"Using the respective platform&#39;s native colors",id:"using-the-respective-platforms-native-colors",children:[]},{value:"Common Pitfalls",id:"common-pitfalls",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Congrats! You've installed React Native Elements and your immediate question\ngoes something like this:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"So umm, how do I change how it looks?")),Object(a.b)("p",null,"Great question! A UI Kit wouldn't be that useful if the apps everyone built\nlooked the same right? For this case React Native Elements provide a number of\nprops on each component to enable you to style them how you want."),Object(a.b)("h2",{id:"component-styles"},"Component Styles"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Every")," component from React Native Elements has a container around it. The\ncontainer is just a traditional ",Object(a.b)("inlineCode",{parentName:"p"},"<View />")," from react native that has some\nstyling on it. This default styling prevents components from colliding with each\nother. If you want to change how two components react to each on the screen your\nfirst stop should be the ",Object(a.b)("inlineCode",{parentName:"p"},"containerStyle")," prop."),Object(a.b)("p",null,"Similar to ",Object(a.b)("inlineCode",{parentName:"p"},"containerStyle"),", components may provide their custom style props\nlike ",Object(a.b)("inlineCode",{parentName:"p"},"buttonStyle"),", ",Object(a.b)("inlineCode",{parentName:"p"},"titleStyle")," etc. Always refer to the documentation for the\ncomponent to find out which style props it provides."),Object(a.b)("h2",{id:"theming"},"Theming"),Object(a.b)("p",null,"While component styles are great for single use, you may want to have the same\nstyling for every instance of a component. For example, you may want all your\nbuttons to be blue or have the same font. Here are some ways to reuse styles\nwith React Native Elements."),Object(a.b)("h3",{id:"using-composition"},"Using Composition"),Object(a.b)("p",null,"With this approach, we create one component with the styles we want and use that\ninstead of the built-in component."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Button } from 'react-native-elements';\n\nconst RaisedButton = (props) => <Button raised {...props} />;\n\n// Your App\nconst App = () => {\n  return <RaisedButton title=\"Yea\" />;\n};\n")),Object(a.b)("p",null,"If we want to use a button that's raised in our app, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"RaisedButton"),"\ninstead of using ",Object(a.b)("inlineCode",{parentName:"p"},"Button"),". This component still accepts all the props from the\nnormal ",Object(a.b)("inlineCode",{parentName:"p"},"Button")," just that it has the ",Object(a.b)("inlineCode",{parentName:"p"},"raised")," prop set by default."),Object(a.b)("h3",{id:"using-themeprovider"},"Using ThemeProvider"),Object(a.b)("p",null,"The previous solution works great for only one component, but imagine having to\ndo this for every component you want custom styles for. That could get a bit\ntedious to manage. Thankfully, there's a better way to do this. React Native\nElements ships with a 3 utilities for large-scale theming."),Object(a.b)("p",null,"Firstly you'll want to set up your ",Object(a.b)("inlineCode",{parentName:"p"},"ThemeProvider"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import { ThemeProvider, Button } from \'react-native-elements\';\n\nconst theme = {\n  Button: {\n    raised: true,\n  },\n};\n\n// Your App\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title="My Button" />\n      <Button title="My 2nd Button" />\n    </ThemeProvider>\n  );\n};\n')),Object(a.b)("p",null,"The example above achieves the same goals as the first example \u2014 apply the same\nstyles to multiple instances of ",Object(a.b)("inlineCode",{parentName:"p"},"Button")," in the app. However this example\napplies the ",Object(a.b)("inlineCode",{parentName:"p"},"raised")," prop to every instance of ",Object(a.b)("inlineCode",{parentName:"p"},"Button")," inside the component\ntree under ",Object(a.b)("inlineCode",{parentName:"p"},"ThemeProvider"),". Both of these buttons will have the ",Object(a.b)("inlineCode",{parentName:"p"},"raised")," prop\nset to true."),Object(a.b)("p",null,"This is extremely convenient and is made possible through\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React's Context API"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"typescript-definitions-extending-the-default-theme"},"TypeScript Definitions (extending the default theme)"),Object(a.b)("p",null,"TypeScript definitions for your theme can be extended by using TypeScript's ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html"}),"declaration merging")," feature. First you need to create a declaration file called ",Object(a.b)("inlineCode",{parentName:"p"},"react-native-elements.d.ts")," and then declare the module ",Object(a.b)("inlineCode",{parentName:"p"},"react-native-elements")," and 're-export' the types that you want to extend."),Object(a.b)("p",null,"i.e. below we add a custom p1Style to the Text theme object and we add a bunch of colors to the colors object."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };\n\ndeclare module 'react-native-elements' {\n  export interface TextProps {\n    p1Style: StyleProp<TextStyle>;\n  }\n\n  export interface Colors {\n    background: string;\n    border: string;\n    text: string;\n    altText: string;\n    danger: string;\n  }\n\n  export interface FullTheme {\n    colors: RecursivePartial<Colors>;\n    Text: Partial<TextProps>;\n  }\n}\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"order-of-styles"},"Order of Styles"),Object(a.b)("p",null,"What happens now if we want a ",Object(a.b)("inlineCode",{parentName:"p"},"Button")," that isn't raised? To do that we have to understand the order in which styles are applied."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Internal > Theme > External")),Object(a.b)("h4",{id:"internal"},"Internal"),Object(a.b)("p",null,"Internal components styles are the styles which are defined in the component\nfile. These are applied first."),Object(a.b)("h4",{id:"theme"},"Theme"),Object(a.b)("p",null,"Theme styles are the values that are set by the ThemeProvider If present, these\nare applied second."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { ThemeProvider, Button } from 'react-native-elements';\n\nconst theme = {\n  Button: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),Object(a.b)("p",null,"This will override the white color for the title set in the component's style."),Object(a.b)("h4",{id:"external"},"External"),Object(a.b)("p",null,"External styles are the styles which are set through the component props. These\nare applied last and have the highest precendence."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { ThemeProvider, Button } from 'react-native-elements';\n\nconst theme = {\n  Button: {\n    titleStyle: {\n      color: 'red',\n    },\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" titleStyle={{ color: 'pink' }} />\n    </ThemeProvider>\n  );\n};\n")),Object(a.b)("p",null,"This will override both the white color for the title set in the component's\nstyle as well as the red color set in the theme."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Remember if you want to override the values set in the theme you can always\nuse component props.")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"the-theme-object"},"The Theme Object"),Object(a.b)("p",null,"By default, the theme object looks like this. You can add whatever values you\nwant to the theme, and they will be merged with the default. By default the\nplatform colors aren't used anywhere. These native colors are added for\nyour convenience."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"interface theme {\n  colors: {\n    primary;\n    secondary;\n    grey0;\n    grey1;\n    grey2;\n    grey3;\n    grey4;\n    grey5;\n    greyOutline;\n    searchBg;\n    success;\n    error;\n    warning;\n    divider;\n    platform: {\n      ios: {\n        primary;\n        secondary;\n        success;\n        error;\n        warning;\n      };\n      android: {\n        // Same as ios\n      };\n    };\n  };\n}\n")),Object(a.b)("p",null,"Setting styles in the theme is as simple as using the name of the component, as\na key and the props you want to change as the value."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { ThemeProvider } from 'react-native-elements';\n\nconst theme = {\n  Avatar: {\n    rounded: true,\n  },\n  Badge: {\n    textStyle: { fontSize: 30 },\n  },\n};\n\n...\n\n<ThemeProvider theme={theme}>\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"using-the-theme-in-your-own-components"},"Using the theme in your own components"),Object(a.b)("p",null,"You may want to make use of the theming utilities in your own components. For\nthis you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"withTheme")," HOC exported from this library. It adds three\nprops to the component it wraps - ",Object(a.b)("inlineCode",{parentName:"p"},"theme"),", ",Object(a.b)("inlineCode",{parentName:"p"},"updateTheme")," and ",Object(a.b)("inlineCode",{parentName:"p"},"replaceTheme"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Text } from 'react-native';\nimport { withTheme } from 'react-native-elements';\n\nfunction MyComponent(props) {\n  const { theme, updateTheme, replaceTheme } = props;\n  return <Text style={{ color: theme.colors.primary }}>Yo!</Text>;\n}\n\nexport default withTheme(MyComponent);\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"updateTheme")," function merges the theme passed in with the current theme."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const theme = {\n  colors: {\n    primary: 'pink',\n  },\n};\n\n// We can update the primary color\nupdateTheme({ colors: { primary: 'red' } });\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"replaceTheme")," function merges the theme passed in with the default theme."),Object(a.b)("p",null,"Don't want to wrap your components? You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"ThemeConsumer")," component\nwhich uses render props!"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Text } from 'react-native';\nimport { ThemeConsumer } from 'react-native-elements';\n\nconst MyComponent = () => (\n  <ThemeConsumer>\n    {({ theme }) => (\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>;\n    )}\n  </ThemeConsumer>\n)\n")),Object(a.b)("p",null,"You can also use the ThemeContext directly if you use hooks."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useContext } from 'react';\nimport { Text } from 'react-native';\nimport { ThemeContext } from 'react-native-elements';\n\nconst MyComponent = () => {\n  const { theme } = useContext(ThemeContext);\n\n  return (\n    <View style={styles.container}>\n      <Text style={{ color: theme.colors.primary }}>Yo!</Text>\n    </View>\n  );\n};\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"using-the-respective-platforms-native-colors"},"Using the respective platform's native colors"),Object(a.b)("p",null,"You may want to style your app using the native color palette. You can do this\nusing the ",Object(a.b)("inlineCode",{parentName:"p"},"colors")," object and the ",Object(a.b)("inlineCode",{parentName:"p"},"Platform")," API."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Platform } from 'react-native';\nimport { Button, colors, ThemeProvider } from 'react-native-elements';\n\nconst theme = {\n  colors: {\n    ...Platform.select({\n      default: colors.platform.android,\n      ios: colors.platform.ios,\n    }),\n  },\n};\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      // This button's color will now be the default iOS / Android blue.\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"common-pitfalls"},"Common Pitfalls"),Object(a.b)("p",null,"This section outlines some common pitfalls when using Theming."),Object(a.b)("h4",{id:"my-local-styles-arent-working-with-the-theme"},"My local styles aren't working with the theme"),Object(a.b)("p",null,"It's important to understand that the ",Object(a.b)("inlineCode",{parentName:"p"},"ThemeProvider")," works by merging your local(external) styles with those set on the theme.\nThis means that in both cases ",Object(a.b)("strong",{parentName:"p"},"the type of these styles must be the same"),"."),Object(a.b)("h5",{id:"example-1"},"Example 1"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button\n  containerStyle={{ backgroundColor: 'blue' }}\n/>\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u2705 Works"),Object(a.b)("p",{parentName:"blockquote"},"In both cases the style is an ",Object(a.b)("inlineCode",{parentName:"p"},"object"))),Object(a.b)("br",null),Object(a.b)("h5",{id:"example-2"},"Example 2"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const theme = {\n  Button: {\n    containerStyle: [\n      {\n        marginTop: 10;\n      }\n    ]\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u2705 Works"),Object(a.b)("p",{parentName:"blockquote"},"In both cases the style is an ",Object(a.b)("inlineCode",{parentName:"p"},"array"))),Object(a.b)("br",null),Object(a.b)("h5",{id:"example-3"},"Example 3"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udeab Doesn't work"),Object(a.b)("p",{parentName:"blockquote"},"In one case the style is an ",Object(a.b)("inlineCode",{parentName:"p"},"object")," and another the style is an ",Object(a.b)("inlineCode",{parentName:"p"},"array"))))}p.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(i,".").concat(u)]||m[u]||b[u]||a;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);