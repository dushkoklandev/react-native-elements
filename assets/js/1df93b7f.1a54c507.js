"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[53237],{85345:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(67294);function l(e){var t=e.color,a=void 0===t?"#e2e2e2":t,l=e.alpha,r=void 0===l?.3:l,c=e.overlayColor,o=void 0===c?a+100*r:c,s=e.icon,i=e.size,m=e.padding,d=void 0===m?"6px":m,u=e.style;return n.createElement("div",{className:"inline-flex-center",style:Object.assign({backgroundColor:o,borderRadius:"6px",padding:d},u)},n.createElement(s,{fill:a,fontSize:i}))}},66182:(e,t,a)=>{a.d(t,{M:()=>s});var n=a(87462),l=a(63366),r=a(67294),c=a(85345),o=["size","header","subheader","primary","color","icon","noMargin"];function s(e){var t=e.size,a=void 0===t?"1.5rem":t,s=e.header,i=e.subheader,m=e.primary,d=e.color,u=e.icon,E=e.noMargin,v=(0,l.Z)(e,o);return r.createElement("div",{className:"container "+(E?"":"margin-vert--lg")},r.createElement("div",{className:"row"},r.createElement("div",null,u&&r.createElement(c.A,(0,n.Z)({icon:u,color:d,padding:8,size:a,style:{marginRight:12}},v))),r.createElement("div",null,r.createElement("h1",{className:m&&"gradient clip-text",style:{lineHeight:.8,margin:"4px 0px",color:d}},s),i&&r.createElement("small",null,i))))}},93868:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(39960),r=[{sponsorTitle:"\ud83d\udc8e Diamond Sponsor",colSize:5,items:[]},{sponsorTitle:"\ud83e\udd47 Gold Sponsor",colSize:4,items:[{title:"onKeyPress LLC",img:"https://avatars.githubusercontent.com/u/78321386?s=200&v=4",link:"https://onkeypress.io/",desc:"It offers a variety of design, technology and marketing services"},{title:"Icons8",link:"https://icons8.com/",img:"https://avatars.githubusercontent.com/u/6615749?s=200&v=4",desc:"Icons, illustrations, photos, music, and design tools"}]},{sponsorTitle:"\ud83e\udd48 Silver Sponsor",colSize:3,items:[]},{sponsorTitle:"\ud83e\udd49 Bronze Sponsor",colSize:2,items:[]}],c=a(66182),o=a(97735);const s=function(){return n.createElement("section",{id:"sponsor",className:"container"},n.createElement(c.M,{color:"#EA4AAA",header:"Sponsors",subheader:"Built with passion, backed by the community",icon:o.She}),r.map((function(e){var t=e.sponsorTitle,a=e.items,r=e.colSize,c=void 0===r?2:r;return a.length?n.createElement("div",{className:"container "},n.createElement("h2",{className:" margin-horiz--md"},t),n.createElement("div",{className:"row is-multiline  margin-horiz--md"},a.map((function(e,t){var a=e.title,r=e.desc,o=e.link,s=e.img;return n.createElement("div",{key:t,className:"col col--"+c},n.createElement(l.Z,{className:"card shadow--md",href:o,style:{height:"100%"}},n.createElement("div",{className:"avatar card__body"},n.createElement("img",{className:"avatar__photo",src:s}),n.createElement("div",{className:"avatar__intro"},n.createElement("div",{className:"avatar__name"},a),n.createElement("small",{className:"avatar__subtitle"},r)))))})))):null})))}},46990:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(67294),l=a(30777),r=a(52263),c=a(44996),o=a(39960),s=a(97735),i=a(5434);const m=function(){(0,r.Z)().siteConfig;return n.createElement("section",null,n.createElement("header",{className:"hero margin-vert--xl"},n.createElement("div",{className:"container "},n.createElement("div",{className:"row",style:{alignItems:"center"}},n.createElement("div",{className:"col col--3 col--offset-1"},n.createElement("img",{className:"rne-hero-logo",src:"/img/website/logo.png"})),n.createElement("div",{className:"col col--6 col--offset-1"},n.createElement("h1",{className:"hero__title"},"Cross Platform ",n.createElement("br",null),n.createElement("span",{className:"gradient clip-text"},"React Native")," UI toolkit"),n.createElement("h3",{className:""},"A React Native framework for making cross platform applications"),n.createElement("div",null,n.createElement(o.Z,{className:"button button--primary margin-vert--sm margin-right--md ",style:{color:"white"},to:(0,c.Z)("/docs")},"Get Started"),n.createElement(o.Z,{className:"button button--secondary button--outline   margin-vert--sm heroButton",to:"https://github.com/sponsors/react-native-elements"},"Sponsor Us"),n.createElement("div",{className:"ball",style:{left:80,top:"20%"}},n.createElement(s.pNp,null)),n.createElement("div",{className:"ball",style:{bottom:200,right:"5%"}},n.createElement(i.Cp4,null)),n.createElement("div",{className:"ball",style:{left:20,top:"70%"}},n.createElement(i.RZ0,null)),n.createElement("div",{className:"ball",style:{right:"40%",bottom:10}},n.createElement(i.Jn8,null)),n.createElement("div",{className:"ball",style:{left:"40%",top:180}},n.createElement(s.Eur,null)),n.createElement("div",{className:"ball",style:{right:270,top:140}},n.createElement(i.rEK,null))))))))};var d=a(85345),u=[{title:"Cross-Platform",description:"Consistent design across android, iOS, and web. 30+ components designed to save development time.",img:i.bFs,color:"#894cff"},{title:"Easy to use",description:"Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ",img:i.xoN,color:"#ff5381"},{title:"Customizable",description:"Easily style any of our components just the way you want.",img:i.zmo,color:"#00b85c"},{title:"Community-Driven",description:"100% built by the community. We're here because we love open source.",img:i.q6M,color:"#328aff"}];const E=function(){return n.createElement("section",{className:"",id:"why"},n.createElement("div",{className:"container text--center"},n.createElement("h1",{className:"hero__title gradient clip-text"},"Why React Native Elements?")),n.createElement("div",{className:"container"},n.createElement("div",{className:"row is-multiline"},u.map((function(e,t){var a=e.title,l=e.description,r=e.img,c=e.color;return n.createElement("div",{className:"col col--3",key:t},n.createElement(o.Z,{className:"card shadow--md",style:{height:"100%"}},n.createElement("div",{className:"card__body"},n.createElement("h4",{className:"gradient clip-text inline-flex-center"},n.createElement(d.A,{icon:r,color:c,style:{marginRight:8}}),a),n.createElement("p",{className:"p--desc",style:{lineHeight:1.4,fontSize:"0.8rem"}},l))))})))))};var v=a(96711);const p=function(){return n.createElement(n.Fragment,null,n.createElement("section",{className:"margin-vert--xl"},n.createElement("div",{className:"container "},n.createElement("div",{className:"row",style:{alignItems:"center"}},n.createElement("div",{className:"col col--5 text--center"},n.createElement("h6",{className:"hero__title gradient clip-text"},"How to get started?")),n.createElement("div",{className:"col col--7 "},n.createElement("p",null,n.createElement("b",null,"1. Install the React Native Elements package from the NPM"),n.createElement("p",{className:"margin-vert--md margin-horiz--md"},n.createElement(v.Z,{language:"bash"},"npm install @rneui/base @rneui/themed")),n.createElement("b",null,"2. Import the component and use it in your project"),n.createElement("p",{className:"margin-vert--md margin-horiz--md"},n.createElement(v.Z,{language:"tsx"},"import React from 'react';\nimport { Button } from '@rneui/base';\n\nconst AwesomeButton = () => (<Button title='Welcome'/>)"))))))))};var g=a(66182);const h=function(){return n.createElement("section",{id:"expo"},n.createElement("div",{className:"container"},n.createElement(g.M,{color:"#5c5cbd",header:"Expo demo",subheader:"See in action, play a live demo published on Expo ",icon:s.ipR})),n.createElement("div",{className:"container text--center  "},n.createElement("div",{className:"row margin-horiz--lg"},n.createElement("div",{className:"col col--4"},n.createElement("img",{src:"/img/website/app-preview3.png",style:{width:200,left:60,top:-100}})),n.createElement("div",{className:"col col--8 ",style:{alignSelf:"center"}},n.createElement("div",{className:"padding-vert--lg"},n.createElement("h1",null,"Check our Expo demo"),n.createElement("div",{className:"padding-vert--lg hide-on-small"},n.createElement(s.pNp,{style:{fontSize:128,opacity:.1}}),n.createElement("img",{src:"/img/website/expo-go-qr.svg",width:120,className:"margin-horiz--lg"}),n.createElement(s.ipR,{style:{fontSize:128,opacity:.1}})),n.createElement("div",null,n.createElement(o.Z,{className:"button button--secondary button--outline button--sm  margin-horiz--sm margin-vert--sm",to:"https://expo.dev/@rneui/react-native-elements"},"Run on Expo Go"),n.createElement(o.Z,{className:"button button--secondary button--sm margin-horiz--sm margin-vert--sm",to:"https://github.com/react-native-elements/react-native-elements/tree/next/example"},"View on Github")))))))};const N=function(){return n.createElement(n.Fragment,null,n.createElement("section",{className:"margin-vert--xl",id:"community"},n.createElement("div",{className:"container"},n.createElement(g.M,{color:"#00A98F",header:"Community",subheader:"We are a community of developers who love React Native.",icon:i.Zs9})),n.createElement("div",{className:"container"},n.createElement("div",{className:"row margin-horiz--lg is-multiline"},n.createElement("div",{className:"col col--4"},n.createElement(o.Z,{style:{height:"100%",backgroundColor:"#1DA1F2",color:"white"},href:"https://twitter.com/rn_elements",className:"card shadow--md"},n.createElement("div",{className:"card__body padding--lg"},n.createElement("h3",{className:"margin-bottom--sm "},n.createElement(s.mWf,{fill:"#fff"})),n.createElement("h4",null,"Stay up to date "),n.createElement("b",null,"Follow us on Twitter to get the latest updates.")))),n.createElement("div",{className:"col col--4"},n.createElement(o.Z,{style:{backgroundColor:"#5865F2",color:"white"},href:"https://discord.com/invite/e9RBHjkKHa",className:"card shadow--md"},n.createElement("div",{className:"card__body padding--lg"},n.createElement("h3",{className:"margin-bottom--sm "},n.createElement(s.Mqf,{fill:"#fff"})),n.createElement("h4",null,"Talk to us"),n.createElement("b",null,"Have any other question? or like to say Hi! to the RNE community,")))),n.createElement("div",{className:"col col--4"},n.createElement(o.Z,{style:{backgroundColor:"#F58025",color:"white"},href:"https://stackoverflow.com/questions/tagged/react-native-elements",className:"card shadow--md"},n.createElement("div",{className:"card__body padding--lg"},n.createElement("h3",{className:"margin-bottom--sm "},n.createElement(s.tLB,{fill:"#fff"})),n.createElement("h4",null,"Any question?"),n.createElement("b",null,"Have any other question? or like to say Hi! to the RNE community,"))))))))};var f=function(){return n.createElement(n.Fragment,null,n.createElement("section",{className:"margin-vert--xl"},n.createElement("div",{className:"container"},n.createElement(g.M,{color:"#007ACC",header:"VS Code Extension",subheader:"Snippets extension with previews & auto import",icon:s.RZF}),n.createElement("div",{className:"col col--12 text--center"},n.createElement("div",null,n.createElement("img",{src:"/img/website/vsc_ext.png",width:700,style:{borderRadius:12,pointerEvents:"none"}})),n.createElement(o.Z,{className:"button button--primary  button--sm margin-horiz--sm margin-vert--sm",style:{color:"white"},to:"https://marketplace.visualstudio.com/items?itemName=rne.snippets"},"Install from marketplace")))))},b=a(93868);const y=function(){(0,r.Z)().siteConfig;return n.createElement(l.Z,null,n.createElement(m,null),n.createElement(E,null),n.createElement(p,null),n.createElement(h,null),n.createElement(f,null),n.createElement(b.Z,null),n.createElement(N,null))}},22365:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),l=a(63366),r=a(67294),c=a(10407),o=a(86010),s=(a(95999),a(52263)),i=a(91262),m=a(66412);const d="playgroundContainer_TGbA",u="playgroundEditor_PvJ1",E="playgroundPreview_bb8I",v="toggleIcon_OnrQ",p="showCode_O0Od";var g=a(72389),h=a(5434),N=["children","transformCode"];function f(){return r.createElement("div",null,"Loading...")}function b(){var e=(0,g.Z)();return r.createElement(c.uz,{key:String(e),className:u})}function y(e){var t=e.show_code,a=(e.openInSnack,r.useState(t)),n=a[0],l=a[1],s=function(){l((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:E},r.createElement(i.Z,{fallback:r.createElement(f,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(c.i5,null),r.createElement(c.IF,null),r.createElement("div",{className:(0,o.Z)(v),onClick:s},r.createElement(h.xoN,null),r.createElement("span",{className:p},n?"Hide":"Show"," Code")))}))),n&&r.createElement(b,null))}function w(e){var t=e.children,a=e.transformCode,o=(0,l.Z)(e,N),i=((0,s.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,m.p)());return r.createElement("div",{className:d},r.createElement(c.nu,(0,n.Z)({code:t.replace(/\n$/,""),transformCode:a||function(e){return e},theme:i},o),r.createElement(y,{show_code:o.show_code})))}},56922:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(32408),r=a(13925),c=a(77321),o=a(83279);const s=Object.assign({React:n,LinearGradient:o.Z},l,r,c,n)}}]);