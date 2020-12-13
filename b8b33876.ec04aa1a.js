(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return o}));var n=a(2),b=a(6),r=(a(0),a(235)),c=a(237),l={id:"slider",title:"Slider"},i={unversionedId:"slider",id:"version-2.3.2/slider",isDocsHomePage:!1,title:"Slider",description:"Sliders allow users to select a value from a fixed set of options.",source:"@site/versioned_docs/version-2.3.2/slider.md",slug:"/slider",permalink:"/docs/slider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.3.2/slider.md",version:"2.3.2",sidebar:"version-2.3.2/docs",previous:{title:"SearchBar",permalink:"/docs/searchbar"},next:{title:"SocialIcon",permalink:"/docs/social_icon"}},O=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>animateTransitions</code>",id:"animatetransitions",children:[]},{value:"<code>animationConfig</code>",id:"animationconfig",children:[]},{value:"<code>animationType</code>",id:"animationtype",children:[]},{value:"<code>debugTouchArea</code>",id:"debugtoucharea",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>maximumTrackTintColor</code>",id:"maximumtracktintcolor",children:[]},{value:"<code>maximumValue</code>",id:"maximumvalue",children:[]},{value:"<code>minimumTrackTintColor</code>",id:"minimumtracktintcolor",children:[]},{value:"<code>minimumValue</code>",id:"minimumvalue",children:[]},{value:"<code>allowTouchTrack</code>",id:"allowtouchtrack",children:[]},{value:"<code>onSlidingComplete</code>",id:"onslidingcomplete",children:[]},{value:"<code>onSlidingStart</code>",id:"onslidingstart",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>orientation</code>",id:"orientation",children:[]},{value:"<code>step</code>",id:"step",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>thumbStyle</code>",id:"thumbstyle",children:[]},{value:"<code>thumbProps</code>",id:"thumbprops",children:[]},{value:"<code>thumbTintColor</code>",id:"thumbtintcolor",children:[]},{value:"<code>thumbTouchSize</code>",id:"thumbtouchsize",children:[]},{value:"<code>trackStyle</code>",id:"trackstyle",children:[]},{value:"<code>value</code>",id:"value",children:[]}]}],j={rightToc:O};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sliders allow users to select a value from a fixed set of options."),Object(r.b)("img",{alt:"Slider",src:Object(c.a)("img/slider_screenshot.png")}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This component is a forked implementation of\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jeanregisser/react-native-slider"}),"react-native-slider"),".")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Slider } from 'react-native-elements';\nimport { Animated } from 'react-native';\n\n<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>\n  <Slider\n    value={this.state.value}\n    onValueChange={(value) => this.setState({ value })}\n  />\n  <Text>Value: {this.state.value}</Text>\n</View>;\n\n// Replace Thumb with custom image\n<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>\n  <Slider\n    value={this.state.value}\n    onValueChange={(value) => this.setState({ value })}\n    thumbStyle={{ height: 40, width: 40, backgroundColor: 'transparent' }}\n    thumbProps={{\n      Component: Animated.Image,\n      source: {\n        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n      },\n    }}\n  />\n  <Text>Value: {this.state.value}</Text>\n</View>;\n\n// Set Custom Children inside thumb\n<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>\n  <Slider\n    value={value}\n    onValueChange={setValue}\n    maximumValue={50}\n    minimumValue={20}\n    step={1}\n    trackStyle={{ height: 10, backgroundColor: 'transparent' }}\n    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}\n    thumbProps={{\n      children: (\n        <Icon\n          name=\"heartbeat\"\n          type=\"font-awesome\"\n          size={20}\n          reverse\n          containerStyle={{ bottom: 20, right: 20 }}\n          color=\"#f50\"\n        />\n      ),\n    }}\n  />\n  <Text>Value: {this.state.value}</Text>\n</View>;\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#animatetransitions"}),Object(r.b)("inlineCode",{parentName:"a"},"animateTransitions"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#animationconfig"}),Object(r.b)("inlineCode",{parentName:"a"},"animationConfig"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#animationtype"}),Object(r.b)("inlineCode",{parentName:"a"},"animationType"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#debugtoucharea"}),Object(r.b)("inlineCode",{parentName:"a"},"debugTouchArea"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#disabled"}),Object(r.b)("inlineCode",{parentName:"a"},"disabled"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#maximumtracktintcolor"}),Object(r.b)("inlineCode",{parentName:"a"},"maximumTrackTintColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#maximumvalue"}),Object(r.b)("inlineCode",{parentName:"a"},"maximumValue"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#minimumtracktintcolor"}),Object(r.b)("inlineCode",{parentName:"a"},"minimumTrackTintColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#minimumvalue"}),Object(r.b)("inlineCode",{parentName:"a"},"minimumValue"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#allowtouchtrack"}),Object(r.b)("inlineCode",{parentName:"a"},"allowTouchTrack"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onslidingcomplete"}),Object(r.b)("inlineCode",{parentName:"a"},"onSlidingComplete"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onslidingstart"}),Object(r.b)("inlineCode",{parentName:"a"},"onSlidingStart"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onvaluechange"}),Object(r.b)("inlineCode",{parentName:"a"},"onValueChange"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#orientation"}),Object(r.b)("inlineCode",{parentName:"a"},"orientation"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#step"}),Object(r.b)("inlineCode",{parentName:"a"},"step"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#style"}),Object(r.b)("inlineCode",{parentName:"a"},"style"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#thumbstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"thumbStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#thumbprops"}),Object(r.b)("inlineCode",{parentName:"a"},"thumbProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#thumbtintcolor"}),Object(r.b)("inlineCode",{parentName:"a"},"thumbTintColor"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#thumbtouchsize"}),Object(r.b)("inlineCode",{parentName:"a"},"thumbTouchSize"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#trackstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"trackStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#value"}),Object(r.b)("inlineCode",{parentName:"a"},"value")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"animatetransitions"},Object(r.b)("inlineCode",{parentName:"h3"},"animateTransitions")),Object(r.b)("p",null,"Set to true if you want to use the default 'spring' animation"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animationconfig"},Object(r.b)("inlineCode",{parentName:"h3"},"animationConfig")),Object(r.b)("p",null,"Used to configure the animation parameters. These are the same parameters in the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/animations.html"}),"Animated library"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"undefined"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animationtype"},Object(r.b)("inlineCode",{parentName:"h3"},"animationType")),Object(r.b)("p",null,"Set to 'spring' or 'timing' to use one of those two types of animations with the\ndefault\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/animations.html"}),"animation properties"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'timing'"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"debugtoucharea"},Object(r.b)("inlineCode",{parentName:"h3"},"debugTouchArea")),Object(r.b)("p",null,"Set this to true to visually see the thumb touch rect in green."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabled"},Object(r.b)("inlineCode",{parentName:"h3"},"disabled")),Object(r.b)("p",null,"If true the user won't be able to move the slider"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"maximumtracktintcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"maximumTrackTintColor")),Object(r.b)("p",null,"The color used for the track to the right of the button"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'#b3b3b3'"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"maximumvalue"},Object(r.b)("inlineCode",{parentName:"h3"},"maximumValue")),Object(r.b)("p",null,"Initial maximum value of the slider"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"minimumtracktintcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"minimumTrackTintColor")),Object(r.b)("p",null,"The color used for the track to the left of the button"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'#3f3f3f'"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"minimumvalue"},Object(r.b)("inlineCode",{parentName:"h3"},"minimumValue")),Object(r.b)("p",null,"Initial minimum value of the slider"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"allowtouchtrack"},Object(r.b)("inlineCode",{parentName:"h3"},"allowTouchTrack")),Object(r.b)("p",null,"If true, thumb will respond and jump to any touch along the track."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onslidingcomplete"},Object(r.b)("inlineCode",{parentName:"h3"},"onSlidingComplete")),Object(r.b)("p",null,"Callback called when the user finishes changing the value (e.g. when the slider\nis released)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onslidingstart"},Object(r.b)("inlineCode",{parentName:"h3"},"onSlidingStart")),Object(r.b)("p",null,"Callback called when the user starts changing the value (e.g. when the slider is\npressed)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onvaluechange"},Object(r.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(r.b)("p",null,"Callback continuously called while the user is dragging the slider"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"orientation"},Object(r.b)("inlineCode",{parentName:"h3"},"orientation")),Object(r.b)("p",null,"Set the orientation of the slider."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'horizontal'"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"step"},Object(r.b)("inlineCode",{parentName:"h3"},"step")),Object(r.b)("p",null,"Step value of the slider. The value should be between 0 and maximumValue -\nminimumValue)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"style"},Object(r.b)("inlineCode",{parentName:"h3"},"style")),Object(r.b)("p",null,"The style applied to the slider container"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"http://reactnative.dev/docs/view.html#style"}),"style")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"thumbstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"thumbStyle")),Object(r.b)("p",null,"The style applied to the thumb"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"http://reactnative.dev/docs/view.html#style"}),"style")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"thumbprops"},Object(r.b)("inlineCode",{parentName:"h3"},"thumbProps")),Object(r.b)("p",null,"The props applied to the thumb. Uses ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," prop which can accept ",Object(r.b)("inlineCode",{parentName:"p"},"Animated")," components."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"thumbtintcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"thumbTintColor")),Object(r.b)("p",null,"The color used for the thumb"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'#343434'"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"thumbtouchsize"},Object(r.b)("inlineCode",{parentName:"h3"},"thumbTouchSize")),Object(r.b)("p",null,"The size of the touch area that allows moving the thumb. The touch area has the\nsame center as the visible thumb. This allows to have a visually small thumb\nwhile still allowing the user to move it easily."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"{width: 40, height: 40}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"trackstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"trackStyle")),Object(r.b)("p",null,"The style applied to the track"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"http://reactnative.dev/docs/view.html#style"}),"style")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"value"},Object(r.b)("inlineCode",{parentName:"h3"},"value")),Object(r.b)("p",null,"Initial value of the slider"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Optional"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")))))}o.isMDXComponent=!0},235:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=j(a),p=n,d=o["".concat(c,".").concat(p)]||o[p]||m[p]||r;return a?b.a.createElement(d,l(l({ref:t},O),{},{components:a})):b.a.createElement(d,l({ref:t},O))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var O=2;O<r;O++)c[O]=a[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},236:function(e,t,a){"use strict";var n=a(0),b=a(20);t.a=function(){var e=Object(n.useContext)(b.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},237:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(236),b=a(238);function r(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,c=r.forcePrependBaseUrl,l=void 0!==c&&c,i=r.absolute,O=void 0!==i&&i;if(!a)return a;if(a.startsWith("#"))return a;if(Object(b.b)(a))return a;if(l)return t+a;var j=a.startsWith(t)?a:t+a.replace(/^\//,"");return O?e+j:j}(r,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},238:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function b(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return b}))}}]);