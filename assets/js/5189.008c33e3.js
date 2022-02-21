"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5189],{23746:(t,e,o)=>{o.d(e,{ZP:()=>h,lG:()=>l});var n=o(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=o(67294),l={Prism:n.default,theme:r};function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(t){0===t.length?t.push({types:["plain"],content:"\n",empty:!0}):1===t.length&&""===t[0].content&&(t[0].content="\n",t[0].empty=!0)},y=function(t,e){var o=t.length;return o>0&&t[o-1]===e?t:t.concat(e)},u=function(t,e){var o=t.plain,n=Object.create(null),r=t.styles.reduce((function(t,o){var n=o.languages,r=o.style;return n&&!n.includes(e)||o.types.forEach((function(e){var o=i({},t[e],r);t[e]=o})),t}),n);return r.root=o,r.plain=i({},o,{backgroundColor:null}),r};function g(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(o[n]=t[n]);return o}const h=function(t){function e(){for(var e=this,o=[],n=arguments.length;n--;)o[n]=arguments[n];t.apply(this,o),s(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var o=t.theme?u(t.theme,t.language):void 0;return e.themeDict=o})),s(this,"getLineProps",(function(t){var o=t.key,n=t.className,r=t.style,a=i({},g(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=e.getThemeDict(e.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?i({},a.style,r):r),void 0!==o&&(a.key=o),n&&(a.className+=" "+n),a})),s(this,"getStyleForToken",(function(t){var o=t.types,n=t.empty,r=o.length,a=e.getThemeDict(e.props);if(void 0!==a){if(1===r&&"plain"===o[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return a[o[0]];var l=n?{display:"inline-block"}:{},s=o.map((function(t){return a[t]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(t){var o=t.key,n=t.className,r=t.style,a=t.token,l=i({},g(t,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:e.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?i({},l.style,r):r),void 0!==o&&(l.key=o),n&&(l.className+=" "+n),l})),s(this,"tokenize",(function(t,e,o,n){var r={code:e,grammar:o,language:n,tokens:[]};t.hooks.run("before-tokenize",r);var a=r.tokens=t.tokenize(r.code,r.grammar,r.language);return t.hooks.run("after-tokenize",r),a}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,o=t.language,n=t.code,r=t.children,a=this.getThemeDict(this.props),l=e.languages[o];return r({tokens:function(t){for(var e=[[]],o=[t],n=[0],r=[t.length],a=0,l=0,s=[],i=[s];l>-1;){for(;(a=n[l]++)<r[l];){var u=void 0,g=e[l],h=o[l][a];if("string"==typeof h?(g=l>0?g:["plain"],u=h):(g=y(g,h.type),h.alias&&(g=y(g,h.alias)),u=h.content),"string"==typeof u){var v=u.split(c),d=v.length;s.push({types:g,content:v[0]});for(var f=1;f<d;f++)p(s),i.push(s=[]),s.push({types:g,content:v[f]})}else l++,e.push(g),o.push(u),n.push(0),r.push(u.length)}l--,e.pop(),o.pop(),n.pop(),r.pop()}return p(s),i}(void 0!==l?this.tokenize(e,n,l,o):[n]),className:"prism-code language-"+o,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(a.Component)},13618:(t,e,o)=>{o.d(e,{Z:()=>n});const n={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},5434:(t,e,o)=>{o.d(e,{xoN:()=>r,zmo:()=>a,q6M:()=>l,bFs:()=>s});var n=o(88357);function r(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}}]})(t)}function a(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(t)}function l(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"}}]})(t)}function s(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"}}]})(t)}}}]);