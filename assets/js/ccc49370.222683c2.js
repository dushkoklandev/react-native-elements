"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[46103],{65203:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var a=t(67294),r=t(86010),l=t(10833),i=t(35281),o=t(9460),c=t(39058),s=t(30390),u=t(87462),m=t(95999),d=t(32244);function v(e){var n=e.nextItem,t=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},t&&a.createElement(d.Z,(0,u.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),n&&a.createElement(d.Z,(0,u.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){var e,n=(0,o.C)(),t=n.assets,r=n.metadata,i=r.title,c=r.description,s=r.date,u=r.tags,m=r.authors,d=r.frontMatter,v=d.keywords,f=null!=(e=t.image)?e:d.image;return a.createElement(l.d,{title:i,description:c,keywords:v,image:f},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),u.length>0&&a.createElement("meta",{property:"article:tag",content:u.map((function(e){return e.label})).join(",")}))}var g=t(39407);function p(e){var n=e.sidebar,t=e.children,r=(0,o.C)(),l=r.metadata,i=r.toc,u=l.nextItem,m=l.prevItem,d=l.frontMatter,f=d.hide_table_of_contents,p=d.toc_min_heading_level,h=d.toc_max_heading_level;return a.createElement(c.Z,{sidebar:n,toc:!f&&i.length>0?a.createElement(g.Z,{toc:i,minHeadingLevel:p,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,t),(u||m)&&a.createElement(v,{nextItem:u,prevItem:m}))}function h(e){var n=e.content;return a.createElement(o.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(n,null))))}},39407:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(87462),r=t(63366),l=t(67294),i=t(86010),o=t(93743);const c="tableOfContents_bqdL";var s=["className"];function u(e){var n=e.className,t=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",n)},l.createElement(o.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(87462),r=t(63366),l=t(67294),i=t(86668),o=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,r.Z)(e,o);t>=0?n[t].children.push(l):a.push(l)})),a}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function u(e){var n=e.getBoundingClientRect();return n.top===n.bottom?u(e.parentNode):n}function m(e,n){var t,a,r=n.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,l.useRef)(0),n=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function v(e){var n=(0,l.useRef)(void 0),t=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=m(o,{anchorTopOffset:t.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function f(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}const g=l.memo(f);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,E=e.maxHeadingLevel,b=(0,r.Z)(e,p),L=(0,i.L)(),C=null!=h?h:L.tableOfContents.minHeadingLevel,N=null!=E?E:L.tableOfContents.maxHeadingLevel,k=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:c(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:C,maxHeadingLevel:N});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:C,maxHeadingLevel:N}}),[m,f,C,N])),l.createElement(g,(0,a.Z)({toc:k,className:o,linkClassName:m},b))}},22365:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(87462),r=t(63366),l=t(67294),i=t(10407),o=t(86010),c=(t(95999),t(52263)),s=t(91262),u=t(66412);const m="playgroundContainer_TGbA",d="playgroundEditor_PvJ1",v="playgroundPreview_bb8I",f="toggleIcon_OnrQ";var g=t(72389),p=t(5434),h=["children","transformCode"];function E(){return l.createElement("div",null,"Loading...")}function b(){var e=(0,g.Z)();return l.createElement(i.uz,{key:String(e),className:d})}function L(){var e=l.useState(!1),n=e[0],t=e[1],a=l.useState(void 0),r=(a[0],a[1],function(){t((function(e){return!e}))});return l.createElement(l.Fragment,null,l.createElement("div",{className:v},l.createElement(s.Z,{fallback:l.createElement(E,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(i.i5,null),l.createElement(i.IF,null),l.createElement("div",{className:(0,o.Z)(f)},l.createElement(p.xoN,{onClick:r})," "))}))),n&&l.createElement(l.Fragment,null," ",l.createElement(b,null)))}function C(e){var n=e.children,t=e.transformCode,o=(0,r.Z)(e,h),s=((0,c.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,u.p)());return l.createElement("div",{className:m},l.createElement(i.nu,(0,a.Z)({code:n.replace(/\n$/,""),transformCode:t||function(e){return e},theme:s},o),l.createElement(l.Fragment,null,l.createElement(L,null))))}},56922:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),r=t(32408),l=t(13925),i=t(77321),o=t(83279);const c=Object.assign({React:a,LinearGradient:o.Z},r,l,i,{Switch:function(){var e=a.useState(!1),n=e[0],t=e[1];return a.createElement(l.Switch,{value:n,onValueChange:t})}},a)}}]);