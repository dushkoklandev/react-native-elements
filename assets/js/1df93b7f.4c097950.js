"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3237],{85345:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(67294);function l(e){var t=e.color,a=void 0===t?"#e2e2e2":t,l=e.alpha,r=void 0===l?.3:l,c=e.overlayColor,s=void 0===c?a+100*r:c,o=e.icon,i=e.size,m=e.padding,d=void 0===m?"6px":m,u=e.style;return n.createElement("div",{className:"inline-flex-center",style:Object.assign({backgroundColor:s,borderRadius:"6px",padding:d},u)},n.createElement(o,{fill:a,fontSize:i}))}},66182:(e,t,a)=>{a.d(t,{M:()=>o});var n=a(87462),l=a(63366),r=a(67294),c=a(85345),s=["size","header","subheader","primary","color","icon"];function o(e){var t=e.size,a=void 0===t?"1.5rem":t,o=e.header,i=e.subheader,m=e.primary,d=e.color,u=e.icon,p=(0,l.Z)(e,s);return r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",null,r.createElement(c.A,(0,n.Z)({icon:u,color:d,padding:8,size:a,style:{marginRight:12}},p))),r.createElement("div",null,r.createElement("h1",{className:m&&"gradient clip-text",style:{lineHeight:.8,margin:"4px 0px",color:d}},o),r.createElement("small",null,i))))}},93868:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(39960),r=[{sponsorTitle:"\ud83d\udc8e Diamond Sponsor",colSize:5,items:[]},{sponsorTitle:"\ud83e\udd47 Gold Sponsor",colSize:4,items:[{title:"onKeyPress LLC",img:"https://avatars.githubusercontent.com/u/78321386?s=200&v=4",link:"https://onkeypress.io/",desc:"It offers a variety of design, technology and marketing services"},{title:"Icons8",link:"https://icons8.com/",img:"https://avatars.githubusercontent.com/u/6615749?s=200&v=4",desc:"Icons, illustrations, photos, music, and design tools"}]},{sponsorTitle:"\ud83e\udd48 Silver Sponsor",colSize:3,items:[]},{sponsorTitle:"\ud83e\udd49 Bronze Sponsor",colSize:2,items:[]}],c=a(66182),s=a(97735);const o=function(){return n.createElement("section",{id:"sponsor",className:"container"},n.createElement(c.M,{color:"#EA4AAA",header:"Sponsors",subheader:"Built with passion, backed by the community",icon:s.She}),r.map((function(e){var t=e.sponsorTitle,a=e.items,r=e.colSize,c=void 0===r?2:r;return a.length?n.createElement("div",{className:"container "},n.createElement("h2",{className:" margin-horiz--md"},t),n.createElement("div",{className:"row is-multiline  margin-horiz--md"},a.map((function(e,t){var a=e.title,r=e.desc,s=e.link,o=e.img;return n.createElement("div",{key:t,className:"col col--"+c},n.createElement(l.Z,{className:"card shadow--md",href:s,style:{height:"100%"}},n.createElement("div",{className:"avatar card__body"},n.createElement("img",{className:"avatar__photo",src:o}),n.createElement("div",{className:"avatar__intro"},n.createElement("div",{className:"avatar__name"},a),n.createElement("small",{className:"avatar__subtitle"},r)))))})))):null})))}},70145:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(67294),l=a(96087),r=a(52263),c=a(44996),s=a(39960);const o=function(){(0,r.Z)().siteConfig;return n.createElement(n.Fragment,null,n.createElement("header",{className:"hero"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row",style:{alignItems:"center"}},n.createElement("div",{className:"col col--3 col--offset-1"},n.createElement("img",{className:"rne-hero-logo",src:"/img/website/app-preview2.png"})),n.createElement("div",{className:"col col--6 col--offset-1"},n.createElement("h1",{className:"hero__title"},"Cross Platform ",n.createElement("br",null),n.createElement("span",{className:"gradient clip-text"},"React Native")," UI toolkit"),n.createElement("h3",{className:""},"A React Native framework for making cross platform applications"),n.createElement("div",null,n.createElement(s.Z,{className:"button button--primary margin-vert--sm margin-right--md ",style:{color:"white"},to:(0,c.Z)("/docs")},"Get Started"),n.createElement(s.Z,{className:"button button--secondary button--outline   margin-vert--sm heroButton",to:"https://react-native-elements.js.org/"},"Playground \ud83d\ude80"),n.createElement("div",{className:"bubble bubble-right gradient"})))))),n.createElement("svg",{className:"hero-wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 220"},n.createElement("path",{"fill-opacity":"1",d:"M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,90.7C672,64,768,32,864,32C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})),n.createElement("div",{className:"bubble bubble-left gradient"}))};var i=a(5434),m=a(85345),d=[{title:"Cross-Platform",description:"Consistent design across android, iOS, and web. 30+ components designed to save development time.",img:i.bFs,color:"#894cff"},{title:"Easy to use",description:"Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ",img:i.xoN,color:"#ff5381"},{title:"Customizable",description:"Easily style any of our components just the way you want.",img:i.zmo,color:"#00b85c"},{title:"Community-Driven",description:"100% built by the community. We're here because we love open source.",img:i.q6M,color:"#328aff"}];const u=function(){return n.createElement("section",{className:"margin-vert--sm",id:"why"},n.createElement("div",{className:"container text--center"},n.createElement("h1",{className:"hero__title gradient clip-text"},"Why React Native Elements?")),n.createElement("div",{className:"container"},n.createElement("div",{className:"row is-multiline"},d.map((function(e,t){var a=e.title,l=e.description,r=e.img,c=e.color;return n.createElement("div",{className:"col col--3",key:t},n.createElement(s.Z,{className:"card shadow--md",style:{height:"100%"}},n.createElement("div",{className:"card__body"},n.createElement("h4",{className:"gradient clip-text inline-flex-center"},n.createElement(m.A,{icon:r,color:c,style:{marginRight:8}}),a),n.createElement("p",{className:"p--desc",style:{lineHeight:1.4,fontSize:"0.8rem"}},l))))})))))};var p=a(87462),E=a(23746);const v=function(){return n.createElement(n.Fragment,null,n.createElement("section",{className:"margin-vert--xl"},n.createElement("div",{className:"container "},n.createElement("div",{className:"row",style:{alignItems:"center"}},n.createElement("div",{className:"col col--5 text--center"},n.createElement("h6",{className:"hero__title gradient clip-text"},"How to get started?")),n.createElement("div",{className:"col col--7 "},n.createElement("p",null,n.createElement("b",null,"1. Install the React Native Elements package from the NPM"),n.createElement("p",{className:"margin-vert--md margin-horiz--md"},n.createElement(E.ZP,(0,p.Z)({},E.lG,{code:"npm install @react-native-elements/base @react-native-elements/themed",language:"bash",theme:a(13618).Z}),(function(e){var t=e.className,a=e.style,l=e.tokens,r=e.getLineProps,c=e.getTokenProps;return n.createElement("pre",{className:t,style:a},l.map((function(e,t){return n.createElement("div",r({line:e,key:t}),e.map((function(e,t){return n.createElement("span",c({token:e,key:t}))})))})))}))),n.createElement("b",null,"2. Import the component and use it in your project"),n.createElement("p",{className:"margin-vert--md margin-horiz--md"},n.createElement(E.ZP,(0,p.Z)({},E.lG,{code:"import React from 'react';\nimport { Button } from '@react-native-elements/base';\n\nconst AwesomeButton = () => (<Button title='Welcome'/>)",language:"tsx",theme:a(13618).Z}),(function(e){var t=e.className,a=e.style,l=e.tokens,r=e.getLineProps,c=e.getTokenProps;return n.createElement("pre",{className:t,style:a},l.map((function(e,t){return n.createElement("div",r({line:e,key:t}),e.map((function(e,t){return n.createElement("span",c({token:e,key:t}))})))})))})))))))))};var g=a(31237);const h=function(){return n.createElement("section",{id:"start-now",className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:" col--offset-3 col col--6 text--center"},n.createElement("h6",{className:"hero__title gradient clip-text"},"Start using now"),n.createElement("div",{style:{position:"relative",width:"600px",left:"50%",transform:"translateX(-50%)"}},n.createElement("div",{style:{position:"absolute",top:40,left:10}},n.createElement(g.Z,{language:"bash"},"expo init my-app --template react-native-elements-template                                    ")),n.createElement("img",{src:"/img/website/start_now.png"})),n.createElement(s.Z,{className:"button button--primary",style:{color:"white"},to:"/docs/getting-started/installation"},"Documentation"))))};var N=a(66182),b=a(97735);const y=function(){return n.createElement("section",{className:"margin-vert--xl",id:"expo"},n.createElement("div",{className:"container"},n.createElement(N.M,{color:"#5c5cbd",header:"Expo demo",subheader:"See in action, play a live demo published on Expo ",icon:b.ipR})),n.createElement("div",{className:"container text--center",style:{position:"relative"}},n.createElement("img",{src:"/img/website/Expo Go.png",style:{borderRadius:12,pointerEvents:"none"}}),n.createElement("div",null,n.createElement(s.Z,{className:"button button--secondary button--outline button--sm  margin-horiz--sm margin-vert--sm",to:"https://expo.io/@flyingcircle/react-native-elements-app"},"Run on Expo Go"),n.createElement(s.Z,{className:"button button--secondary button--sm margin-horiz--sm margin-vert--sm",to:"https://github.com/react-native-elements/react-native-elements-app"},"View on Github"))))};const f=function(){return n.createElement(n.Fragment,null,n.createElement("section",{className:"margin-vert--xl",id:"community"},n.createElement("div",{className:"container"},n.createElement(N.M,{color:"#00A98F",header:"Community",subheader:"We are a community of developers who love React Native.",icon:i.Zs9})),n.createElement("div",{className:"container"},n.createElement("div",{className:"row margin-horiz--lg is-multiline"},n.createElement("div",{className:"col col--4"},n.createElement(s.Z,{style:{height:"100%",backgroundColor:"#1DA1F2",color:"white"},href:"https://twitter.com/rne_org",className:"card shadow--md"},n.createElement("div",{className:"card__body padding--lg"},n.createElement("h3",{className:"margin-bottom--sm "},n.createElement(b.mWf,{fill:"#fff"})),n.createElement("h4",null,"Stay up to date "),n.createElement("b",null,"Follow us on Twitter to get the latest updates.")))),n.createElement("div",{className:"col col--4"},n.createElement(s.Z,{style:{backgroundColor:"#4A154B",color:"white"},href:"https://react-native-elements-slack.herokuapp.com/",className:"card shadow--md"},n.createElement("div",{className:"card__body padding--lg"},n.createElement("h3",{className:"margin-bottom--sm "},n.createElement("img",{src:"/img/website/slack.png",width:24})),n.createElement("h4",null,"Talk to us"),n.createElement("b",null,"Have any other question? or like to say Hi! to the RNE community,")))),n.createElement("div",{className:"col col--4"},n.createElement(s.Z,{style:{backgroundColor:"#F58025",color:"white"},href:"https://stackoverflow.com/questions/tagged/react-native-elements",className:"card shadow--md"},n.createElement("div",{className:"card__body padding--lg"},n.createElement("h3",{className:"margin-bottom--sm "},n.createElement(b.tLB,{fill:"#fff"})),n.createElement("h4",null,"Any question?"),n.createElement("b",null,"Have any other question? or like to say Hi! to the RNE community,"))))))))};var w=function(){return n.createElement(n.Fragment,null,n.createElement("section",{className:"margin-vert--xl"},n.createElement("div",{className:"container"},n.createElement(N.M,{color:"#007ACC",header:"VS Code Extension",subheader:"Snippets extension with previews & auto import",icon:b.RZF}),n.createElement("div",{className:"col col--12 text--center"},n.createElement("div",null,n.createElement("img",{src:"/img/website/vsc_ext.png",width:800,style:{borderRadius:12,pointerEvents:"none"}})),n.createElement(s.Z,{className:"button button--primary  button--sm margin-horiz--sm margin-vert--sm",style:{color:"white"},to:"https://marketplace.visualstudio.com/items?itemName=rne.snippets"},"Install from marketplace")))))},k=a(93868);const x=function(){var e=(0,r.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement(l.Z,{title:t.title,description:t.tagline},n.createElement(o,null),n.createElement(u,null),n.createElement(v,null),n.createElement(y,null),n.createElement(w,null),n.createElement(k.Z,null),n.createElement(f,null),n.createElement(h,null))}},56922:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(34738),r=a(42395),c=a(74810);const s=Object.assign({React:n,FontAwesomeIcon:r.ZP,MaterialIcons:c.ZP},l,n)}}]);