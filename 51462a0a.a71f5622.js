(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(3),b=a(7),r=(a(0),a(291)),c={id:"searchbar",title:"SearchBar"},l={unversionedId:"searchbar",id:"version-1.2.0/searchbar",isDocsHomePage:!1,title:"SearchBar",description:"SearchBars are used to search or filter items. Use a SearchBar when the number",source:"@site/versioned_docs/version-1.2.0/searchbar.md",slug:"/searchbar",permalink:"/docs/1.2.0/searchbar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/searchbar.md",version:"1.2.0",sidebar:"version-1.2.0/docs",previous:{title:"Rating",permalink:"/docs/1.2.0/rating"},next:{title:"Slider",permalink:"/docs/1.2.0/slider"}},o=[{value:"Default SearchBar",id:"default-searchbar",children:[]},{value:"Platform specific SearchBar",id:"platform-specific-searchbar",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>platform</code>",id:"platform",children:[]},{value:"<code>clearIcon</code>",id:"clearicon",children:[]},{value:"<code>searchIcon</code>",id:"searchicon",children:[]},{value:"<code>cancelIcon</code> (<strong><code>platform=&quot;android&quot;</code> only</strong>)",id:"cancelicon-platformandroid-only",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>inputContainerStyle</code>",id:"inputcontainerstyle",children:[]},{value:"<code>inputStyle</code>",id:"inputstyle",children:[]},{value:"<code>leftIconContainerStyle</code>",id:"lefticoncontainerstyle",children:[]},{value:"<code>rightIconContainerStyle</code>",id:"righticoncontainerstyle",children:[]},{value:"<code>lightTheme</code> (<strong><code>platform=&quot;default&quot;</code> only</strong>)",id:"lighttheme-platformdefault-only",children:[]},{value:"<code>loadingProps</code>",id:"loadingprops",children:[]},{value:"<code>onChangeText</code>",id:"onchangetext",children:[]},{value:"<code>onClear</code>",id:"onclear",children:[]},{value:"<code>placeholder</code>",id:"placeholder",children:[]},{value:"<code>placeholderTextColor</code>",id:"placeholdertextcolor",children:[]},{value:"<code>round</code> (<strong><code>platform=&quot;default&quot;</code> only</strong>)",id:"round-platformdefault-only",children:[]},{value:"<code>showCancel</code> (<strong><code>platform=&quot;ios&quot;</code> only</strong>)",id:"showcancel-platformios-only",children:[]},{value:"<code>showLoading</code>",id:"showloading",children:[]},{value:"<code>underlineColorAndroid</code>",id:"underlinecolorandroid",children:[]},{value:"<code>cancelButtonTitle</code>",id:"cancelbuttontitle",children:[]},{value:"<code>cancelButtonProps</code>",id:"cancelbuttonprops",children:[]},{value:"<code>onCancel</code>",id:"oncancel",children:[]}]},{value:"Interaction methods",id:"interaction-methods",children:[]}],i={rightToc:o};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"SearchBars are used to search or filter items. Use a SearchBar when the number\nof items directly impacts a user's ability to find one of them."),Object(r.b)("h2",{id:"default-searchbar"},"Default SearchBar"),Object(r.b)("img",{src:"/img/searchbar.png",width:"300"}),Object(r.b)("h2",{id:"platform-specific-searchbar"},"Platform specific SearchBar"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS")),Object(r.b)("img",{src:"https://user-images.githubusercontent.com/17592779/31585176-b124cdae-b1bd-11e7-809f-ba966cebc663.gif",width:"300"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Android")),Object(r.b)("img",{src:"https://user-images.githubusercontent.com/17592779/31586716-f6e8ff9c-b1d4-11e7-918f-2a7e11d51b08.gif",width:"300"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { SearchBar } from 'react-native-elements';\n\nexport default class App extends React.Component {\n  state = {\n    search: '',\n  };\n\n  updateSearch = (search) => {\n    this.setState({ search });\n  };\n\n  render() {\n    const { search } = this.state;\n\n    return (\n      <SearchBar\n        placeholder=\"Type Here...\"\n        onChangeText={this.updateSearch}\n        value={search}\n      />\n    );\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This component inherits all\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/input#props"}),"React Native Elements Input props"),",\nwhich means\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/textinput.html"}),"all native TextInput props that come with a standard React Native TextInput element"),",\nalong with the following:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#platform"}),Object(r.b)("inlineCode",{parentName:"a"},"platform"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#clearicon"}),Object(r.b)("inlineCode",{parentName:"a"},"clearIcon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#searchicon"}),Object(r.b)("inlineCode",{parentName:"a"},"searchIcon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#cancelicon-platformandroid-only"}),Object(r.b)("inlineCode",{parentName:"a"},"cancelIcon"))," (",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},'platform="android"'),"\nonly"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#inputcontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"inputContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#inputstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"inputStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#lefticoncontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"leftIconContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#righticoncontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"rightIconContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#lighttheme-platformdefault-only"}),Object(r.b)("inlineCode",{parentName:"a"},"lightTheme"))," (",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},'platform="default"'),"\nonly"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#loadingprops"}),Object(r.b)("inlineCode",{parentName:"a"},"loadingProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onchangetext"}),Object(r.b)("inlineCode",{parentName:"a"},"onChangeText"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onclear"}),Object(r.b)("inlineCode",{parentName:"a"},"onClear"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#placeholder"}),Object(r.b)("inlineCode",{parentName:"a"},"placeholder"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#placeholdertextcolor"}),Object(r.b)("inlineCode",{parentName:"a"},"placeholderTextColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#round-platformdefault-only"}),Object(r.b)("inlineCode",{parentName:"a"},"round"))," (",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},'platform="default"')," only"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#showcancel-platformios-only"}),Object(r.b)("inlineCode",{parentName:"a"},"showCancel"))," (",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},'platform="ios"')," only"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#showloading"}),Object(r.b)("inlineCode",{parentName:"a"},"showLoading"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#underlinecolorandroid"}),Object(r.b)("inlineCode",{parentName:"a"},"underlineColorAndroid"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#cancelbuttontitle"}),Object(r.b)("inlineCode",{parentName:"a"},"cancelButtonTitle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#cancelbuttonprops"}),Object(r.b)("inlineCode",{parentName:"a"},"cancelButtonProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#oncancel"}),Object(r.b)("inlineCode",{parentName:"a"},"onCancel")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"platform"},Object(r.b)("inlineCode",{parentName:"h3"},"platform")),Object(r.b)("p",null,'choose the look and feel of the search bar. One of "default", "ios", "android"'),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"default"')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"clearicon"},Object(r.b)("inlineCode",{parentName:"h3"},"clearIcon")),Object(r.b)("p",null,"This props allows to override the ",Object(r.b)("inlineCode",{parentName:"p"},"Icon")," props or use a custom component. Use\n",Object(r.b)("inlineCode",{parentName:"p"},"null")," or ",Object(r.b)("inlineCode",{parentName:"p"},"false")," to hide the icon."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/1.2.0/icon#props"}),"...Icon props"),"}",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"OR"),Object(r.b)("br",null)," component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"searchicon"},Object(r.b)("inlineCode",{parentName:"h3"},"searchIcon")),Object(r.b)("p",null,"This props allows to override the ",Object(r.b)("inlineCode",{parentName:"p"},"Icon")," props or use a custom component. Use\n",Object(r.b)("inlineCode",{parentName:"p"},"null")," or ",Object(r.b)("inlineCode",{parentName:"p"},"false")," to hide the icon."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/1.2.0/icon#props"}),"...Icon props"),"}",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"OR"),Object(r.b)("br",null)," component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"cancelicon-platformandroid-only"},Object(r.b)("inlineCode",{parentName:"h3"},"cancelIcon")," (",Object(r.b)("strong",{parentName:"h3"},Object(r.b)("inlineCode",{parentName:"strong"},'platform="android"')," only"),")"),Object(r.b)("p",null,"This props allows to override the ",Object(r.b)("inlineCode",{parentName:"p"},"Icon")," props or use a custom component. Use\n",Object(r.b)("inlineCode",{parentName:"p"},"null")," or ",Object(r.b)("inlineCode",{parentName:"p"},"false")," to hide the icon."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/1.2.0/icon#props"}),"...Icon props"),"}",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"OR"),Object(r.b)("br",null)," component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"containerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(r.b)("p",null,"style the container of the SearchBar"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"inputcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"inputContainerStyle")),Object(r.b)("p",null,"style the container of the TextInput"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"inputstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"inputStyle")),Object(r.b)("p",null,"style the TextInput"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"lefticoncontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"leftIconContainerStyle")),Object(r.b)("p",null,"style the icon container on the left side"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"righticoncontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"rightIconContainerStyle")),Object(r.b)("p",null,"style the icon container on the right side"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"lighttheme-platformdefault-only"},Object(r.b)("inlineCode",{parentName:"h3"},"lightTheme")," (",Object(r.b)("strong",{parentName:"h3"},Object(r.b)("inlineCode",{parentName:"strong"},'platform="default"')," only"),")"),Object(r.b)("p",null,"change theme to light theme"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"loadingprops"},Object(r.b)("inlineCode",{parentName:"h3"},"loadingProps")),Object(r.b)("p",null,"props passed to ActivityIndicator"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{ }")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onchangetext"},Object(r.b)("inlineCode",{parentName:"h3"},"onChangeText")),Object(r.b)("p",null,"method to fire when text is changed"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onclear"},Object(r.b)("inlineCode",{parentName:"h3"},"onClear")),Object(r.b)("p",null,"method to fire when input is cleared"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"placeholder"},Object(r.b)("inlineCode",{parentName:"h3"},"placeholder")),Object(r.b)("p",null,"set the placeholder text"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"''")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"placeholdertextcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"placeholderTextColor")),Object(r.b)("p",null,"set the color of the placeholder text"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'#86939e'")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"round-platformdefault-only"},Object(r.b)("inlineCode",{parentName:"h3"},"round")," (",Object(r.b)("strong",{parentName:"h3"},Object(r.b)("inlineCode",{parentName:"strong"},'platform="default"')," only"),")"),Object(r.b)("p",null,"change TextInput styling to rounded corners"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showcancel-platformios-only"},Object(r.b)("inlineCode",{parentName:"h3"},"showCancel")," (",Object(r.b)("strong",{parentName:"h3"},Object(r.b)("inlineCode",{parentName:"strong"},'platform="ios"')," only"),")"),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true")," the cancel button will stay visible after blur events."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showloading"},Object(r.b)("inlineCode",{parentName:"h3"},"showLoading")),Object(r.b)("p",null,"show the loading ActivityIndicator effect"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"underlinecolorandroid"},Object(r.b)("inlineCode",{parentName:"h3"},"underlineColorAndroid")),Object(r.b)("p",null,"specify other than the default transparent underline color"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string (color)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"transparent")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"cancelbuttontitle"},Object(r.b)("inlineCode",{parentName:"h3"},"cancelButtonTitle")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"(iOS only)")," title of the cancel button on the right side"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'"Cancel"')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"cancelbuttonprops"},Object(r.b)("inlineCode",{parentName:"h3"},"cancelButtonProps")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"(iOS only)")," props passed to cancel Button"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://reactnative.dev/docs/touchableopacity.html#props"}),"TouchableOpacity"),"\nprops")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#buttonstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"buttonStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#buttontextstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"buttonTextStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#color"}),Object(r.b)("inlineCode",{parentName:"a"},"color"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#disabled"}),Object(r.b)("inlineCode",{parentName:"a"},"disabled"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#buttondisabledstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"buttonDisabledStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#buttondisabledtextstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"buttonDisabledTextStyle")))),Object(r.b)("h4",{id:"buttonstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"buttonStyle")),Object(r.b)("p",null,"cancel Button styling"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("h4",{id:"buttontextstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"buttonTextStyle")),Object(r.b)("p",null,"cancel Button Text styling"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("h4",{id:"color"},Object(r.b)("inlineCode",{parentName:"h4"},"color")),Object(r.b)("p",null,"cancel Button text color"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string (color)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"#007aff")))),Object(r.b)("h4",{id:"disabled"},Object(r.b)("inlineCode",{parentName:"h4"},"disabled")),Object(r.b)("p",null,"Prop to indicate cancel Button is disabled"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("h4",{id:"buttondisabledstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"buttonDisabledStyle")),Object(r.b)("p",null,"Disabled cancel Button styling"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("h4",{id:"buttondisabledtextstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"buttonDisabledTextStyle")),Object(r.b)("p",null,"Styles for the text when cancel Button is disabled"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"{ color: '#cdcdcd' }"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"oncancel"},Object(r.b)("inlineCode",{parentName:"h3"},"onCancel")),Object(r.b)("p",null,"callback fired when pressing the cancel button (iOS) or the back icon (Android)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"null")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"interaction-methods"},"Interaction methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"method"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"focus"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"call focus on the textinput (",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#calling"}),"example"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blur"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"call blur on the textinput (",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#calling"}),"example"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clear"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"call clear on the textinput (",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#calling"}),"example"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cancel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"(Android and iOS SearchBars only)")," call cancel on the SearchBar (left arrow on Android, Cancel button on iOS). This will basically blur the input and hide the keyboard (",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#calling"}),"example"),")")))),Object(r.b)("h4",{id:"calling-methods-on-searchbar"},Object(r.b)("a",{name:"calling"})," Calling methods on SearchBar"),Object(r.b)("p",null,"Store a reference to the SearchBar in your component by using the ref prop\nprovided by React\n(",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),"see docs"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<SearchBar\n  ref={search => this.search = search}\n  ...\n/>\n")),Object(r.b)("p",null,"You can then access SearchBar methods like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'this.search.focus();\nthis.search.blur();\nthis.search.clear();\nthis.search.cancel(); // Only available if `platform` props is "ios"\xa0| "android"\n')))}O.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),O=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=O(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=O(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||j[d]||r;return a?b.a.createElement(m,l(l({ref:t},i),{},{components:a})):b.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);