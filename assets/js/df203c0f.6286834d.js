"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99924],{16769:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(67294),c=a(33306),s=a(88746),n=a(34875),r=a(11614),g=a(55912),o=a(86010);function i(e){var t=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(s.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function m(e){var t,a=e.tag,m=(t=(0,n.c2)().selectMessage,function(e){return t(e,(0,r.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),d=(0,r.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:m(a.docs.length),tagName:a.name});return l.createElement(n.FG,{className:(0,o.Z)(n.kM.wrapper.docsPages,n.kM.page.docsTagDocListPage)},l.createElement(n.d,{title:d}),l.createElement(g.Z,{tag:"doc_tag_doc_list"}),l.createElement(c.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,d),l.createElement(s.Z,{href:a.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},a.docs.map((function(e){return l.createElement(i,{key:e.id,doc:e})}))))))))}}}]);