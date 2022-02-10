"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9815],{58215:(t,e,n)=>{n.d(e,{Z:()=>A});var o=n(67294);const A=function(t){var e=t.children,n=t.hidden,A=t.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:A},e)}},9877:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(87462),A=n(67294),r=n(72389),a=n(29548),i=n(86010);const l="tabItem_LplD";function C(t){var e,n,r,C=t.lazy,s=t.block,D=t.defaultValue,u=t.values,c=t.groupId,B=t.className,d=A.Children.map(t.children,(function(t){if((0,A.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=u?u:d.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,a.lx)(m,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===D?D:null!=(e=null!=D?D:null==(n=d.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(r=d[0])?void 0:r.props.value;if(null!==b&&!m.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+m.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,a.UB)(),p=h.tabGroupChoices,y=h.setTabGroupChoices,f=(0,A.useState)(b),S=f[0],w=f[1],E=[],v=(0,a.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var k=p[c];null!=k&&k!==S&&m.some((function(t){return t.value===k}))&&w(k)}var V=function(t){var e=t.currentTarget,n=E.indexOf(e),o=m[n].value;o!==S&&(v(e),w(o),null!=c&&y(c,o))},x=function(t){var e,n=null;switch(t.key){case"ArrowRight":var o=E.indexOf(t.currentTarget)+1;n=E[o]||E[0];break;case"ArrowLeft":var A=E.indexOf(t.currentTarget)-1;n=E[A]||E[E.length-1]}null==(e=n)||e.focus()};return A.createElement("div",{className:"tabs-container"},A.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},B)},m.map((function(t){var e=t.value,n=t.label,r=t.attributes;return A.createElement("li",(0,o.Z)({role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,key:e,ref:function(t){return E.push(t)},onKeyDown:x,onFocus:V,onClick:V},r,{className:(0,i.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":S===e})}),null!=n?n:e)}))),C?(0,A.cloneElement)(d.filter((function(t){return t.props.value===S}))[0],{className:"margin-vert--md"}):A.createElement("div",{className:"margin-vert--md"},d.map((function(t,e){return(0,A.cloneElement)(t,{key:e,hidden:t.props.value!==S})}))))}function s(t){var e=(0,r.Z)();return A.createElement(C,(0,o.Z)({key:String(e)},t))}},80507:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>C,metadata:()=>s,toc:()=>D,default:()=>c});var o=n(87462),A=n(63366),r=(n(67294),n(3905)),a=(n(9877),n(58215),n(42395),n(31668)),i=["components"],l={},C=void 0,s={unversionedId:"components/usage/Button/Button",id:"components/usage/Button/Button",title:"Button",description:"",source:"@site/docs/components/usage/Button/Button.mdx",sourceDirName:"components/usage/Button",slug:"/components/usage/Button/",permalink:"/docs/next/components/usage/Button/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Button/Button.mdx",tags:[],version:"current",frontMatter:{}},D=[],u={toc:D};function c(t){var e=t.components,n=(0,A.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(a.default,{mdxType:"Snack"}))}c.isMDXComponent=!0},31668:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>C,toc:()=>s,default:()=>u});var o=n(87462),A=n(63366),r=(n(67294),n(3905)),a=["components"],i={},l=void 0,C={unversionedId:"components/usage/Button/snack/index",id:"components/usage/Button/snack/index",title:"index",description:"",source:"@site/docs/components/usage/Button/snack/index.md",sourceDirName:"components/usage/Button/snack",slug:"/components/usage/Button/snack/",permalink:"/docs/next/components/usage/Button/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Button/snack/index.md",tags:[],version:"current",frontMatter:{}},s=[],D={toc:s};function u(t){var e=t.components,n=(0,A.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},D,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Button","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20ButtonGroup%2C%20withTheme%2C%20Text%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20ButtonsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Buttons%3A%20React.FunctionComponent%3CButtonsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.contentView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EBasic%20Buttons%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%7B'React%20Native%20Elements'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Basic%20Button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Dark%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20backgroundColor%3A%20'rgba(39%2C%2039%2C%2039%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'white'%2C%20marginHorizontal%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Log%20in%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loading%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loadingProps%3D%7B%7B%20size%3A%20'small'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(111%2C%20202%2C%20186%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'bold'%2C%20fontSize%3A%2023%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('aye')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Secondary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20backgroundColor%3A%20'rgba(127%2C%20220%2C%20103%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Warning%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20backgroundColor%3A%20'rgba(255%2C%20193%2C%207%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Danger%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20backgroundColor%3A%20'rgba(214%2C%2061%2C%2057%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'white'%2C%20marginHorizontal%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Request%20an%20agent%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'500'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(199%2C%2043%2C%2098%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2045%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ERounded%20Buttons%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22LOG%20IN%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'black'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'bold'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22HOME%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'home'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2015%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconContainerStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(90%2C%20154%2C%20230%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22PROFILE%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'user'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2015%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconContainerStyle%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(199%2C%2043%2C%2098%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%7B%3CCustomTitle%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'bold'%2C%20fontSize%3A%2018%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20linearGradientProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20colors%3A%20%5B'%23FF9800'%2C%20'%23F44336'%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20start%3A%20%5B1%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20end%3A%20%5B0.2%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'arrow-right'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2015%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconContainerStyle%3D%7B%7B%20marginLeft%3A%2010%2C%20marginRight%3A%20-10%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ELight%20Buttons%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22SIGN%20UP%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20disabled%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(92%2C%2099%2C216%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2045%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Outline%20Button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Raised%20Button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20raised%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Clear%20Button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22clear%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Light%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(244%2C%20244%2C%20244%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20marginHorizontal%3A%2020%2C%20color%3A%20'black'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ELoading%20Buttons%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22HOME%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loading%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(111%2C%20202%2C%20186%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22SIGN%20UP%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loading%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loadingProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%20'small'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'rgba(111%2C%20202%2C%20186%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(92%2C%2099%2C216%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20paddingVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20CustomTitle%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flexDirection%3A%20'column'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20fontWeight%3A%20'bold'%2C%20fontSize%3A%2018%20%7D%7D%3EJohn%20Doe%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20fontStyle%3A%20'italic'%2C%20fontSize%3A%2012%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Minister%20of%20Magic%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20contentView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20buttonsContainer%3A%20%7B%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20flexWrap%3A%20'wrap'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20marginVertical%3A%2020%2C%0A%20%20%7D%2C%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20withTheme(Buttons%2C%20'')%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0}}]);