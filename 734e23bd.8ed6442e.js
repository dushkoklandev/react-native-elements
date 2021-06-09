(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),o=(a(0),a(291)),c={id:"web_usage",title:"Usage on the Web"},i={unversionedId:"web_usage",id:"version-1.2.0/web_usage",isDocsHomePage:!1,title:"Usage on the Web",description:"React Native Elements just like on mobile can be used in your web projects. This is possible using react-native-web. We'll highlight how to set this up using create-react-app.",source:"@site/versioned_docs/version-1.2.0/web_usage.md",slug:"/web_usage",permalink:"/docs/1.2.0/web_usage",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/web_usage.md",version:"1.2.0",sidebar:"version-1.2.0/docs",previous:{title:"Customization",permalink:"/docs/1.2.0/customization"},next:{title:"Troubleshooting",permalink:"/docs/1.2.0/troubleshooting"}},s=[{value:"Why do I have to set this up?",id:"why-do-i-have-to-set-this-up",children:[]},{value:"Create React App",id:"create-react-app",children:[]}],p={rightToc:s};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React Native Elements just like on mobile can be used in your web projects. This is possible using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/necolas/react-native-web"}),"react-native-web"),". We'll highlight how to set this up using create-react-app."),Object(o.b)("h2",{id:"why-do-i-have-to-set-this-up"},"Why do I have to set this up?"),Object(o.b)("p",null,"On the web, you can usually use UI libraries directly from npm without any additional setup. However in react-native, it's a bit different."),Object(o.b)("p",null,"The major difference is that React Native can support JSX and advanced javascript out the box. This means that we don't need to transpile our code before we ship it to npm. ",Object(o.b)("strong",{parentName:"p"},"We ship JSX and advanced javascript directly to npm")," in React Native Elements, so we need to account for this in our web projects."),Object(o.b)("h2",{id:"create-react-app"},"Create React App"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://create-react-app.dev/"}),"Create React App")," is a very popular framework for building react applications. Unfortunately it doesn't allow much customization of the build setup. To accomplish this we'll be making use of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/timarney/react-app-rewired"}),"react-app-rewired")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/arackaf/customize-cra"}),"customize-cra"),"."),Object(o.b)("p",null,"After creating a new create-react-app project, run the following commands."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-elements react-native-web react-native-vector-icons\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired\n")),Object(o.b)("p",null,"Secondly, create a ",Object(o.b)("inlineCode",{parentName:"p"},"config-overrides.js")," file in the root of your project."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const path = require('path');\nconst { override, addBabelPlugins, babelInclude } = require('customize-cra');\n\nmodule.exports = override(\n  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),\n  babelInclude([\n    path.resolve(__dirname, 'node_modules/react-native-elements'),\n    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),\n    path.resolve(__dirname, 'node_modules/react-native-ratings'),\n    path.resolve(__dirname, 'src'),\n  ])\n);\n")),Object(o.b)("p",null,"Lastly, change your scripts in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to use react-app-rewired:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test"\n}\n')),Object(o.b)("p",null,"At this point your app can start. However trying to use any components that use icons, will not show them. In your App.js, load these fonts as you would on the web with a style tag."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<style type=\"text/css\">{`\n  @font-face {\n    font-family: 'MaterialIcons';\n    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'FontAwesome';\n    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');\n  }\n`}</style>\n")),Object(o.b)("p",null,"The full setup of the guide can be found at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/react-native-elements/create-react-app-example"}),"https://github.com/react-native-elements/create-react-app-example"),"."))}l.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return a?n.a.createElement(m,i(i({ref:t},p),{},{components:a})):n.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);