"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[33181],{75410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(67294),l=n(30777),a=n(52263),s=n(44996);const c=JSON.parse('["4.0.0-rc.6","4.0.0-rc.5","4.0.0-rc.4","4.0.0-rc.3","4.0.0-rc.2","4.0.0-rc.1","4.0.0-beta.0","3.4.2","2.3.2","1.2.0"]');var i=function(e){var t=e.version,n="next"===t?"Next":t,l=c[0]===t,a="next"===t,s=r.createElement("a",{href:e.baseUrl+"docs/"+(l?"":t+"/")+"overview"},"Components"),i=a?null:r.createElement("a",{href:"https://github.com/react-native-elements/react-native-elements/releases/tag/v"+t},"Release Notes");return r.createElement("tr",null,r.createElement("th",null,n),r.createElement("td",null,s),r.createElement("td",null,i))};function o(e){return c[0]===e?(0,s.Z)("docs/overview"):(0,s.Z)("docs/"+e+"/overview")}var m=function(e){var t=e.version;return r.createElement("a",{href:"https://github.com/react-native-elements/react-native-elements/releases/tag/v"+t,target:"_blank",rel:"noopener noreferrer"},"Release Notes")},u=function(e){var t=e.version;return r.createElement("a",{href:o(t)},"Components")};const E=function(e){var t=(0,a.Z)().siteConfig,n=c.filter((function(e){return e.includes("beta")})),s=c.filter((function(e){return!e.includes("beta")})),o=s.length>1?s.splice(1):[];return r.createElement(l.Z,null,r.createElement("div",{className:"container margin-vert--xl"},r.createElement("header",{className:"postHeader"},r.createElement("h1",{style:{marginTop:0}},t.title+" versions")),r.createElement("p",{style:{maxWidth:640}},"New versions of this project are released ever so often. You will see versions here for releases that either contain features or breaking changes. Since patch releases have no changes to the api, they aren't posted here."),r.createElement("section",null,r.createElement("h3",null,"Bleeding Edge (Stable)"),r.createElement("p",null,"Contains changes that are up and coming in the next feature release."),r.createElement("table",{className:"versions"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"next"),r.createElement("td",null,r.createElement(u,{version:"next"})))))),n&&n.length>0&&r.createElement("section",null,r.createElement("h3",null,"Pre-release versions"),r.createElement("p",null,"May sometimes introduce new changes that might break existing functionality."),r.createElement("table",{className:"versions"},r.createElement("tbody",null,n.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("th",null,e),r.createElement("td",null,r.createElement(u,{version:e})),r.createElement("td",null,r.createElement(m,{version:e})))}))))),s&&s.length>0&&r.createElement("section",null,r.createElement("h3",null,"Current version (Released)"),r.createElement("p",null,"This is the version that is configured automatically when you first install this project."),r.createElement("table",{className:"versions"},r.createElement("tbody",null,s.map((function(e,n){return r.createElement(i,{key:n,version:e,baseUrl:t.baseUrl})}))))),o&&o.length>0&&r.createElement("section",null,r.createElement("h3",null,"Past Versions"),r.createElement("p",null,"Here you can find documentation for previous versions of React Native Elements."),r.createElement("table",{className:"versions"},r.createElement("tbody",null,o.map((function(e){return r.createElement("tr",{key:e},r.createElement("th",null,e),r.createElement("td",null,r.createElement(u,{version:e})),r.createElement("td",null,r.createElement(m,{version:e})))})))))))}}}]);