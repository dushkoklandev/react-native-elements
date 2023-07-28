"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[72081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],l={title:"Styles",sidebar_position:3},p=void 0,i={unversionedId:"customization/styles",id:"version-4.0.0-rc.8/customization/styles",title:"Styles",description:"makeStyles",source:"@site/versioned_docs/version-4.0.0-rc.8/customization/styles.mdx",sourceDirName:"customization",slug:"/customization/styles",permalink:"/docs/customization/styles",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/styles.mdx",tags:[],version:"4.0.0-rc.8",sidebarPosition:3,frontMatter:{title:"Styles",sidebar_position:3},sidebar:"docs",previous:{title:"Theme Provider",permalink:"/docs/customization/themeprovider"},next:{title:"Extending Theme",permalink:"/docs/customization/extending"}},c={},m=[{value:"<code>makeStyles</code>",id:"makestyles",level:3},{value:"<code>styled</code>",id:"styled",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"makestyles"},(0,a.kt)("inlineCode",{parentName:"h3"},"makeStyles")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Imports")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { makeStyles } from '@rneui/themed';\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function Signture")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"makeStyles(styles: Styles | ((theme, props) => Styles))\n")),(0,a.kt)("p",null,"If you want to keep your styles outside the component use ",(0,a.kt)("inlineCode",{parentName:"p"},"makeStyles()")," (hook generator) to reference the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," and component props (optional param)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Props = {\n  fullWidth?: boolean;\n};\n\nconst useStyles = makeStyles((theme, props: Props) => ({\n  container: {\n    background: theme.colors.white,\n    width: props.fullWidth ? '100%' : 'auto',\n  },\n  text: {\n    color: theme.colors.primary,\n  },\n}));\n\nconst MyComponent = (props: Props) => {\n  const styles = useStyles(props);\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Yo!</Text>\n    </View>\n  );\n};\n")),(0,a.kt)("h3",{id:"styled"},(0,a.kt)("inlineCode",{parentName:"h3"},"styled")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Imports")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { styled } from '@rneui/themed';\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function Signture")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"styled(Component)<Props>(styles: Styles | ((theme, props) => Styles))\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const Conatiner = styled(View)({\n  // default style of component\n  root: {\n    paddingHorizontal: 16,\n  },\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const Surface = styled(View)((theme) => ({\n  // default style of component\n  root: {\n    backgroundColor: theme.colors.background,\n  },\n}));\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using RNE's component")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const RedButton = styled(Button)({\n  containerStyle: {\n    backgroundColor: 'red',\n  },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using custom props")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type MyCompProps = { bold?: boolean };\n\nconst Component = styled(Text)<MyCompProps>((theme, { bold }) => ({\n  root: {\n    fontWeight: bold ? 'bold' : 'normal',\n    color: theme.colors.primary,\n  },\n}));\n")))}d.isMDXComponent=!0}}]);