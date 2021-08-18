"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},221:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>d,default:()=>u});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],s={title:"Auto-generation of Documentation Website",author:"Khushal Agarwal",authorURL:"https://github.com/khushal87"},l=void 0,p={permalink:"/blog/2021/08/12/auto-generation-of-docs",source:"@site/blog/2021-08-12-auto-generation-of-docs.md",title:"Auto-generation of Documentation Website",description:"This is a guide to generate documentation of the UI components automatically.",date:"2021-08-12T00:00:00.000Z",formattedDate:"August 12, 2021",tags:[],readingTime:3.925,truncated:!1,prevItem:{title:"Google Summer of Code'21",permalink:"/blog/2021/08/18/google-summer-of-code-khushal-agarwal"},nextItem:{title:"Version 2.3 Upgrade Guide",permalink:"/blog/2020/08/10/2.3-upgrade-guide"}},d=[{value:"Workflow",id:"workflow",children:[]},{value:"Updating existing components",id:"updating-existing-components",children:[]},{value:"Adding new components",id:"adding-new-components",children:[]},{value:"How to add a new demo for the component?",id:"how-to-add-a-new-demo-for-the-component",children:[]},{value:"Testing the changes",id:"testing-the-changes",children:[]},{value:"Future",id:"future",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a guide to generate documentation of the UI components automatically.")),(0,r.kt)("p",null,"Initially when this workflow was not present, the entire documentation of the website was done by editing the docs manually by going to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," directory under ",(0,r.kt)("inlineCode",{parentName:"p"},"website")," and editing the markdown manually. Now, we have come with a flow where developers and contributors can focus more on logic than on writing markdown."),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"To do this we have created scripts which would parse the components and generate documentation out of it."),(0,r.kt)("p",null,"This is a 2 step process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We take use of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-docgen-typescript")," which takes the input of the files for which we want to generate the documentation automatically. This gives in JSON as output. This JSON consists of all the details of the props including ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," and well as ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," of the components.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As we use Docusaurus for our documentation website, the pages of the documentation should be in the format of Markdown. Therefore, there should be process where we can change the JSON data, which we get from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-docgen-typescript")," to a suitable Markdown format. For this we use, ",(0,r.kt)("inlineCode",{parentName:"p"},"json2md")," which takes in the data and convert it to suitable markdown string. This is stored in the directory and is shown on the website."))),(0,r.kt)("h4",{id:"how-does-this-work"},"How does this work"),(0,r.kt)("p",null,"Well to make the script to work automatically what we have done is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you push your changes to your branch. A script ",(0,r.kt)("inlineCode",{parentName:"p"},"updateDocumentation.js")," runs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This invokes the ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn docs:build")," command which calls the scripts of auto-generation of docs and this also ",(0,r.kt)("em",{parentName:"p"},"lints")," the markdown files generated at the same time.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, if there is any changes in the markdown files. A commit with message ",(0,r.kt)("inlineCode",{parentName:"p"},"Update Documentation")," is done and pushed after your commit is done to the branch."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," By passing pre-push hook will result in failure of documentation update and may lead maintainers to close your PR."),(0,r.kt)("h2",{id:"updating-existing-components"},"Updating existing components"),(0,r.kt)("p",null,"This is simple. Adding, removing, updating the props is also simple now. You just need to update the comments/description of the component and deal with the logic of your React Components(if required). Our workflow will automatically detect the markdown changes if any and push the changes using ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-push")," hooks while you push your code to your branch."),(0,r.kt)("h2",{id:"adding-new-components"},"Adding new components"),(0,r.kt)("p",null,"Trust me this is easy. We have designed the workflow such that, you only need to work on your JavaScript/TypeScript logic, without bothering about updating the markdown files. The input to the docgenParser is automatic and doesn't require any aditional cofiguration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure to add appropriate comments and description related to the components and the props of the component. Try keeping your code simple with simpler types for Autogen to work.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note:")," The file name of the component as well as the folder must be in Capital letter. We use ",(0,r.kt)("inlineCode",{parentName:"p"},"regex")," to parse the file paths, so this is important."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If there are complex types/defaultValue, please head to ",(0,r.kt)("inlineCode",{parentName:"p"},"website/scripts/docgen/docgenParser.ts")," to deal with those cases. Although we recommend you to avoid it as far as possible. Try improving the React logic and that will work."),(0,r.kt)("h2",{id:"how-to-add-a-new-demo-for-the-component"},"How to add a new demo for the component?"),(0,r.kt)("p",null,"The demos can now be added by moving in to the ",(0,r.kt)("inlineCode",{parentName:"p"},"usage")," directory under ",(0,r.kt)("inlineCode",{parentName:"p"},"website/docs/main")," directory. We now have added Snack Player so that you get the glimpse of the component and also get to know how it works. Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"usage"),", there is a separate folder for each UI Component, where you can add Usage related to component and relevant descriptions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": To add Snack demo, add it inside the snack directory. You can add as many Snack which will make our repository more helpful for developers."),(0,r.kt)("h2",{id:"testing-the-changes"},"Testing the changes"),(0,r.kt)("p",null,"For testing the changes in the documentation autogeneration, we simply need to run the following commands in sequence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd website\nyarn test\n")),(0,r.kt)("p",null,"We have also included the changes in the main test process, so this will automatically run with the workflow as well as when you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," command from root of the project."),(0,r.kt)("h2",{id:"future"},"Future"),(0,r.kt)("p",null,"Some of the components are class-based. They are: Input, SearchBar, Rating.(from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"https://github.com/Monte9/react-native-ratings"),"). If you change the components to Functional/hooks based please remove it from the array of ",(0,r.kt)("inlineCode",{parentName:"p"},"filesToExclude")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"website/scripts/docgen/getComponentFiles.ts"),". These are the paths of the component files for which the process is still manual."),(0,r.kt)("p",null,"So, generating the documentation doesn't come up well for these components. Due to the existing structure ",(0,r.kt)("inlineCode",{parentName:"p"},"react-docgen-typescript")," fails to generate relevant result for them. We are therefore looking for contributions on these components to make them Fuctional/Hooks based."),(0,r.kt)("p",null,"Thanks. Hope you like the new workflow. Looking forward for improvements and contributions to it."))}u.isMDXComponent=!0}}]);