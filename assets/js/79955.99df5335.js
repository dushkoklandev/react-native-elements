"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[79955],{79955:(e,t,n)=>{n.r(t),n.d(t,{AccessibilityInfo:()=>p,ActivityIndicator:()=>be.Z,Alert:()=>b,Animated:()=>v.Z,AppRegistry:()=>k,AppState:()=>Y,Appearance:()=>R,BackHandler:()=>F,Button:()=>me,CheckBox:()=>Ae,Clipboard:()=>X,DeviceEventEmitter:()=>rn,DeviceInfo:()=>J,Dimensions:()=>q.Z,DrawerLayoutAndroid:()=>qt,Easing:()=>Q.Z,FlatList:()=>Ce.Z,I18nManager:()=>$.Z,Image:()=>Ne.Z,ImageBackground:()=>we.Z,InputAccessoryView:()=>Jt,InteractionManager:()=>te.Z,Keyboard:()=>ee.Z,KeyboardAvoidingView:()=>Me,LayoutAnimation:()=>ne.Z,Linking:()=>ae,LogBox:()=>Xt,Modal:()=>ke.Z,NativeEventEmitter:()=>se,NativeModules:()=>l.Z,PanResponder:()=>ce.Z,PermissionsAndroid:()=>en,Picker:()=>Ue,PixelRatio:()=>le.Z,Platform:()=>ue.Z,Pressable:()=>ze.Z,ProgressBar:()=>Fe,RefreshControl:()=>Ke.Z,SafeAreaView:()=>Xe.Z,ScrollView:()=>qe.Z,SectionList:()=>Je.Z,Settings:()=>tn,Share:()=>de,StatusBar:()=>Qe.Z,StyleSheet:()=>P.Z,Switch:()=>$e.Z,Systrace:()=>nn,TVEventHandler:()=>on,Text:()=>ge.Z,TextInput:()=>et.Z,ToastAndroid:()=>Qt,Touchable:()=>Ht,TouchableHighlight:()=>Ut.Z,TouchableNativeFeedback:()=>zt.Z,TouchableOpacity:()=>ve.Z,TouchableWithoutFeedback:()=>Bt.Z,UIManager:()=>Ee.Z,Vibration:()=>pe,View:()=>O.Z,VirtualizedList:()=>Yt,YellowBox:()=>Kt,findNodeHandle:()=>r.Z,processColor:()=>i.Z,render:()=>s,unmountComponentAtNode:()=>c,unstable_createElement:()=>o.Z,useColorScheme:()=>an,useWindowDimensions:()=>sn});var o=n(37353),r=n(82747),i=n(1082),a=n(73935);const s=a.render,c=a.unmountComponentAtNode;var l=n(51525),u=n(16508);function h(){return new Promise((function(e,t){e(!0)}))}var d=u.canUseDOM&&"function"==typeof window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):null;var E={},f={isScreenReaderEnabled:h,isReduceMotionEnabled:function(){return new Promise((function(e,t){e(!d||d.matches)}))},fetch:h,addEventListener:function(e,t){if("reduceMotionChanged"===e){if(!d)return;var n=function(e){t(e.matches)};o=n,null!=d&&(null!=d.addEventListener?d.addEventListener("change",o):d.addListener(o)),E[t]=n}var o;return{remove:function(){return f.removeEventListener(e,t)}}},setAccessibilityFocus:function(e){},announceForAccessibility:function(e){},removeEventListener:function(e,t){if("reduceMotionChanged"===e){var n=E[t];if(!n||!d)return;o=n,null!=d&&(null!=d.removeEventListener?d.removeEventListener("change",o):d.removeListener(o))}var o}};const p=f;const b=function(){function e(){}return e.alert=function(){},e}();var v=n(18684);var g=u.canUseDOM&&null!=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,S=new WeakMap;const R={getColorScheme:function(){return g&&g.matches?"dark":"light"},addChangeListener:function(e){var t=S.get(e);t||(t=function(t){var n=t.matches;e({colorScheme:n?"dark":"light"})},S.set(e,t)),g&&g.addListener(t)},removeChangeListener:function(e){var t=S.get(e);t&&(g&&g.removeListener(t),S.delete(e))}};var m=n(73759),y=n.n(m),_=n(67294),P=n(35730),O=n(67177),T=_.createContext(null);function D(e){var t=e.children,n=e.WrapperComponent,o=_.createElement(O.Z,{children:t,key:1,pointerEvents:"box-none",style:A.appContainer});return n&&(o=_.createElement(n,null,o)),_.createElement(T.Provider,{value:e.rootTag},_.createElement(O.Z,{pointerEvents:"box-none",style:A.appContainer},o))}var A=P.Z.create({appContainer:{flex:1}}),C=n(38756);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},N.apply(this,arguments)}var w,I={},L={},M=function(e){return e()},k=function(){function e(){}return e.getAppKeys=function(){return Object.keys(L)},e.getApplication=function(e,t){return y()(L[e]&&L[e].getApplication,"Application "+e+" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent."),L[e].getApplication(t)},e.registerComponent=function(e,t){return L[e]={getApplication:function(e){return n=M(t),o=e?e.initialProps:I,r=w&&w(e),{element:_.createElement(D,{WrapperComponent:r,rootTag:{}},_.createElement(n,o)),getStyleElement:function(e){var t=C.Z.getStyleSheet();return _.createElement("style",N({},e,{dangerouslySetInnerHTML:{__html:t.textContent},id:t.id}))}};var n,o,r},run:function(e){return n=M(t),o=w&&w(e),r=e.callback,i={hydrate:e.hydrate||!1,initialProps:e.initialProps||I,rootTag:e.rootTag},c=i.hydrate,l=i.initialProps,u=i.rootTag,h=c?a.hydrate:s,y()(u,"Expect to have a valid rootTag, instead got ",u),void h(_.createElement(D,{WrapperComponent:o,rootTag:u},_.createElement(n,l)),u,r);var n,o,r,i,c,l,u,h}},e},e.registerConfig=function(t){t.forEach((function(t){var n=t.appKey,o=t.component,r=t.run;r?e.registerRunnable(n,r):(y()(o,"No component provider passed in"),e.registerComponent(n,o))}))},e.registerRunnable=function(e,t){return L[e]={run:t},e},e.runApplication=function(e,t){y()(L[e]&&L[e].run,'Application "'+e+'" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.'),L[e].run(t)},e.setComponentProviderInstrumentationHook=function(e){M=e},e.setWrapperComponentProvider=function(e){w=e},e.unmountApplicationComponentAtRootTag=function(e){c(e)},e}(),Z=n(54097);function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=u.canUseDOM&&!document.hasOwnProperty("hidden")&&document.hasOwnProperty("webkitHidden"),x=["change","memoryWarning"],G=V?"webkitvisibilitychange":"visibilitychange",H=V?"webkitVisibilityState":"visibilityState",U="background",z="active",B=null,Y=function(){function e(){}var t,n,o;return e.addEventListener=function(t,n){if(e.isAvailable&&(y()(-1!==x.indexOf(t),'Trying to subscribe to unknown event: "%s"',t),"change"===t))return B||(B=new Z.Z,document.addEventListener(G,(function(){B&&B.emit("change",e.currentState)}),!1)),B.addListener(t,n)},e.removeEventListener=function(t,n){e.isAvailable&&(console.error("AppState.removeListener('"+t+"', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `AppState.addEventListener`."),y()(-1!==x.indexOf(t),'Trying to remove listener for unknown event: "%s"',t),"change"===t&&B&&B.removeListener(n))},t=e,o=[{key:"currentState",get:function(){if(!e.isAvailable)return z;switch(document[H]){case"hidden":case"prerender":case"unloaded":return U;default:return z}}}],(n=null)&&j(t.prototype,n),o&&j(t,o),e}();function W(){}Y.isAvailable=u.canUseDOM&&document[H];const F={exitApp:W,addEventListener:function(){return{remove:W}},removeEventListener:W};var K,X=function(){function e(){}return e.isAvailable=function(){return void 0===K&&(K="function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")),K},e.getString=function(){return Promise.resolve("")},e.setString=function(e){var t=!1,n=document.body;if(n){var o=document.createElement("span");o.textContent=e,o.style.opacity="0",o.style.position="absolute",o.style.whiteSpace="pre-wrap",o.style.userSelect="auto",n.appendChild(o);var r=window.getSelection();r.removeAllRanges();var i=document.createRange();i.selectNodeContents(o),r.addRange(i);try{document.execCommand("copy"),t=!0}catch(a){}r.removeAllRanges(),n.removeChild(o)}return t},e}(),q=n(95998);const J={Dimensions:{get windowPhysicalPixels(){var e=q.Z.get("window"),t=e.width,n=e.height,o=e.fontScale,r=e.scale;return{width:t*r,height:n*r,scale:r,fontScale:o}},get screenPhysicalPixels(){var e=q.Z.get("screen"),t=e.width,n=e.height,o=e.fontScale,r=e.scale;return{width:t*r,height:n*r,scale:r,fontScale:o}}},get locale(){if(u.canUseDOM)return navigator.languages?navigator.languages[0]:navigator.language},get totalMemory(){return u.canUseDOM?navigator.deviceMemory:void 0},get userAgent(){return u.canUseDOM?navigator.userAgent:""}};var Q=n(63988),$=n(86218),ee=n(33668),te=n(44651),ne=n(27715),oe=u.canUseDOM?window.location.href:"",re=function(){function e(){var e=this;this._eventCallbacks={},this.addEventListener=function(t,n){e._eventCallbacks[t]?e._eventCallbacks[t].push(n):e._eventCallbacks[t]=[n]},this.removeEventListener=function(t,n){var o=e._eventCallbacks[t].filter((function(e){return e.toString()!==n.toString()}));e._eventCallbacks[t]=o}}var t=e.prototype;return t._dispatchEvent=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=this._eventCallbacks[e];null!=r&&Array.isArray(r)&&r.map((function(e){e.apply(void 0,n)}))},t.canOpenURL=function(){return Promise.resolve(!0)},t.getInitialURL=function(){return Promise.resolve(oe)},t.openURL=function(e){try{return ie(e),this._dispatchEvent("onOpen",e),Promise.resolve()}catch(t){return Promise.reject(t)}},t._validateURL=function(e){y()("string"==typeof e,"Invalid URL: should be a string. Was: "+e),y()(e,"Invalid URL: cannot be empty")},e}(),ie=function(e){if(u.canUseDOM){var t=new URL(e,window.location).toString();0===t.indexOf("tel:")?window.location=t:window.open(t,"_blank","noopener")}};const ae=new re;const se=n(86086).Z;var ce=n(64645),le=n(21302),ue=n(22805);function he(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const de=function(){function e(){}var t,n,o;return e.share=function(e,t){return void 0===t&&(t={}),y()("object"==typeof e&&null!==e,"Content to share must be a valid object"),y()("string"==typeof e.url||"string"==typeof e.message,"At least one of URL and message is required"),y()("object"==typeof t&&null!==t,"Options must be a valid object"),y()(!e.title||"string"==typeof e.title,"Invalid title: title should be a string."),void 0!==window.navigator.share?window.navigator.share({title:e.title,text:e.message,url:e.url}):Promise.reject(new Error("Share is not supported in this browser"))},t=e,o=[{key:"sharedAction",get:function(){return"sharedAction"}},{key:"dismissedAction",get:function(){return"dismissedAction"}}],(n=null)&&he(t.prototype,n),o&&he(t,o),e}();var Ee=n(63360),fe=function(e){"vibrate"in window.navigator&&window.navigator.vibrate(e)};const pe={cancel:function(){fe(0)},vibrate:function(e){void 0===e&&(e=400),fe(e)}};var be=n(29672),ve=n(88548),ge=n(24404),Se=_.forwardRef((function(e,t){var n=e.accessibilityLabel,o=e.color,r=e.disabled,i=e.onPress,a=e.testID,s=e.title;return _.createElement(ve.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:r,focusable:!r,onPress:i,ref:t,style:[Re.button,o&&{backgroundColor:o},r&&Re.buttonDisabled],testID:a},_.createElement(ge.Z,{style:[Re.text,r&&Re.textDisabled]},s))}));Se.displayName="Button";var Re=P.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const me=Se;function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){Pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oe(){return Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Oe.apply(this,arguments)}var Te=_.forwardRef((function(e,t){var n=e.color,r=e.disabled,i=e.onChange,a=e.onValueChange,s=e.style,c=e.value,l=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","disabled","onChange","onValueChange","style","value"]);var u=_.createElement(O.Z,{style:[De.fakeControl,c&&De.fakeControlChecked,c&&n&&{backgroundColor:n,borderColor:n},r&&De.fakeControlDisabled,c&&r&&De.fakeControlCheckedAndDisabled]}),h=(0,o.Z)("input",{checked:c,disabled:r,onChange:function(e){var t=e.nativeEvent.target.checked;e.nativeEvent.value=t,i&&i(e),a&&a(t)},ref:t,style:[De.nativeControl,De.cursorInherit],type:"checkbox"});return _.createElement(O.Z,Oe({},l,{accessibilityDisabled:r,style:[De.root,s,r&&De.cursorDefault]}),u,h)}));Te.displayName="CheckBox";var De=P.Z.create({root:{cursor:"pointer",height:16,userSelect:"none",width:16},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},fakeControl:{alignItems:"center",backgroundColor:"#fff",borderColor:"#657786",borderRadius:2,borderStyle:"solid",borderWidth:2,height:"100%",justifyContent:"center",width:"100%"},fakeControlChecked:{backgroundColor:"#009688",backgroundImage:'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',backgroundRepeat:"no-repeat",borderColor:"#009688"},fakeControlDisabled:{borderColor:"#CCD6DD"},fakeControlCheckedAndDisabled:{backgroundColor:"#AAB8C2",borderColor:"#AAB8C2"},nativeControl:_e(_e({},P.Z.absoluteFillObject),{},{height:"100%",margin:0,opacity:0,padding:0,width:"100%"})});const Ae=Te;var Ce=n(85579),Ne=n(6665),we=n(95900);function Ie(){return Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ie.apply(this,arguments)}function Le(e,t){return Le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Le(e,t)}const Me=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).frame=null,t.onLayout=function(e){t.frame=e.nativeEvent.layout},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,Le(t,n);var r=o.prototype;return r.relativeKeyboardHeight=function(e){var t=this.frame;if(!t||!e)return 0;var n=e.screenY-(this.props.keyboardVerticalOffset||0);return Math.max(t.y+t.height-n,0)},r.onKeyboardChange=function(e){},r.render=function(){var e=this.props,t=(e.behavior,e.contentContainerStyle,e.keyboardVerticalOffset,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["behavior","contentContainerStyle","keyboardVerticalOffset"]));return _.createElement(O.Z,Ie({onLayout:this.onLayout},t))},o}(_.Component);var ke=n(77717),Ze=n(16528),je=n(60091);function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ge=_.forwardRef((function(e,t){var n=e.children,r=e.enabled,i=e.onValueChange,a=e.selectedValue,s=e.style,c=e.testID,l=(e.itemStyle,e.mode,e.prompt,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","enabled","onValueChange","selectedValue","style","testID","itemStyle","mode","prompt"])),u=_.useRef(null);var h=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(n),!0).forEach((function(t){xe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:n,disabled:!1===r||void 0,onChange:function(e){var t=e.target,n=t.selectedIndex,o=t.value;i&&i(o,n)},style:[He.initial,s],testID:c,value:a},l),d=(0,je.Z)(h),E=(0,Ze.Z)(u,d,t);return h.ref=E,(0,o.Z)("select",h)}));Ge.Item=function(e){var t=e.color,n=e.label,r=e.testID,i=e.value,a={color:t};return(0,o.Z)("option",{style:a,testID:r,value:i},n)};var He=P.Z.create({initial:{fontFamily:"System",fontSize:"inherit",margin:0}});const Ue=Ge;var ze=n(70399);function Be(){return Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Be.apply(this,arguments)}var Ye=_.forwardRef((function(e,t){var n=e.color,o=void 0===n?"#1976D2":n,r=e.indeterminate,i=void 0!==r&&r,a=e.progress,s=void 0===a?0:a,c=e.trackColor,l=void 0===c?"transparent":c,u=e.style,h=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","indeterminate","progress","trackColor","style"]),d=100*s,E=_.useRef(null);return _.useEffect((function(){var e=i?"25%":d+"%";null!=E.current&&E.current.setNativeProps({style:{width:e}})}),[i,d,E]),_.createElement(O.Z,Be({},h,{accessibilityRole:"progressbar",accessibilityValue:{max:100,min:0,now:i?null:d},ref:t,style:[We.track,u,{backgroundColor:l}]}),_.createElement(O.Z,{ref:E,style:[We.progress,i&&We.animation,{backgroundColor:o}]}))}));Ye.displayName="ProgressBar";var We=P.Z.create({track:{forcedColorAdjust:"none",height:5,overflow:"hidden",userSelect:"none",zIndex:0},progress:{forcedColorAdjust:"none",height:"100%",zIndex:-1},animation:{animationDuration:"1s",animationKeyframes:[{"0%":{transform:[{translateX:"-100%"}]},"100%":{transform:[{translateX:"400%"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"}});const Fe=Ye;var Ke=n(13330),Xe=n(76636),qe=n(5943),Je=n(45095),Qe=n(52357),$e=n(53125),et=n(92747),tt=n(56861),nt=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},ot=function(e){var t=this;e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},rt=nt;const it={addPoolingTo:function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||rt,n.poolSize||(n.poolSize=10),n.release=ot,n},twoArgumentPooler:nt};var at=it.twoArgumentPooler;function st(e,t){this.width=e,this.height=t}st.prototype.destructor=function(){this.width=null,this.height=null},st.getPooledFromElement=function(e){return st.getPooled(e.offsetWidth,e.offsetHeight)},it.addPoolingTo(st,at);const ct=st;var lt=n(28059),ut=n.n(lt),ht=it.twoArgumentPooler;function dt(e,t){this.left=e,this.top=t}dt.prototype.destructor=function(){this.left=null,this.top=null},it.addPoolingTo(dt,ht);const Et=dt;function ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ft(Object(n),!0).forEach((function(t){bt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var vt=function(e){var t=e.touches,n=e.changedTouches,o=t&&t.length>0,r=n&&n.length>0;return!o&&r?n[0]:o?t[0]:e},gt="NOT_RESPONDER",St="RESPONDER_INACTIVE_PRESS_IN",Rt="RESPONDER_INACTIVE_PRESS_OUT",mt="RESPONDER_ACTIVE_PRESS_IN",yt="RESPONDER_ACTIVE_PRESS_OUT",_t="RESPONDER_ACTIVE_LONG_PRESS_IN",Pt="RESPONDER_ACTIVE_LONG_PRESS_OUT",Ot="ERROR",Tt={NOT_RESPONDER:!1,RESPONDER_INACTIVE_PRESS_IN:!1,RESPONDER_INACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_PRESS_IN:!1,RESPONDER_ACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_LONG_PRESS_IN:!1,RESPONDER_ACTIVE_LONG_PRESS_OUT:!1,ERROR:!1},Dt=pt(pt({},Tt),{},{RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0}),At=pt(pt({},Tt),{},{RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),Ct=pt(pt({},Tt),{},{RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),Nt="DELAY",wt="RESPONDER_GRANT",It="RESPONDER_RELEASE",Lt="RESPONDER_TERMINATED",Mt="ENTER_PRESS_RECT",kt="LEAVE_PRESS_RECT",Zt="LONG_PRESS_DETECTED",jt={NOT_RESPONDER:{DELAY:Ot,RESPONDER_GRANT:St,RESPONDER_RELEASE:Ot,RESPONDER_TERMINATED:Ot,ENTER_PRESS_RECT:Ot,LEAVE_PRESS_RECT:Ot,LONG_PRESS_DETECTED:Ot},RESPONDER_INACTIVE_PRESS_IN:{DELAY:mt,RESPONDER_GRANT:Ot,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:St,LEAVE_PRESS_RECT:Rt,LONG_PRESS_DETECTED:Ot},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:yt,RESPONDER_GRANT:Ot,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:St,LEAVE_PRESS_RECT:Rt,LONG_PRESS_DETECTED:Ot},RESPONDER_ACTIVE_PRESS_IN:{DELAY:Ot,RESPONDER_GRANT:Ot,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:mt,LEAVE_PRESS_RECT:yt,LONG_PRESS_DETECTED:_t},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:Ot,RESPONDER_GRANT:Ot,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:mt,LEAVE_PRESS_RECT:yt,LONG_PRESS_DETECTED:Ot},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:Ot,RESPONDER_GRANT:Ot,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:_t,LEAVE_PRESS_RECT:Pt,LONG_PRESS_DETECTED:_t},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:Ot,RESPONDER_GRANT:Ot,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:_t,LEAVE_PRESS_RECT:Pt,LONG_PRESS_DETECTED:Ot},error:{DELAY:gt,RESPONDER_GRANT:St,RESPONDER_RELEASE:gt,RESPONDER_TERMINATED:gt,ENTER_PRESS_RECT:gt,LEAVE_PRESS_RECT:gt,LONG_PRESS_DETECTED:gt}},Vt={componentDidMount:function(){var e=this;this._touchableNode=(0,r.Z)(this),this._touchableNode&&this._touchableNode.addEventListener&&(this._touchableBlurListener=function(t){e._isTouchableKeyboardActive&&(e.state.touchable.touchState&&e.state.touchable.touchState!==gt&&e.touchableHandleResponderTerminate({nativeEvent:t}),e._isTouchableKeyboardActive=!1)},this._touchableNode.addEventListener("blur",this._touchableBlurListener))},componentWillUnmount:function(){this._touchableNode&&this._touchableNode.addEventListener&&this._touchableNode.removeEventListener("blur",this._touchableBlurListener),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressInLocation=null,this.state.touchable.responderID=null,this._touchableNode=null},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(e){var t=e.currentTarget;e.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=gt,this.state.touchable.responderID=t,this._receiveSignal(wt,e);var n=void 0!==this.touchableGetHighlightDelayMS?Math.max(this.touchableGetHighlightDelayMS(),0):130;0!==(n=isNaN(n)?130:n)?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,e),n):this._handleDelay(e);var o=void 0!==this.touchableGetLongPressDelayMS?Math.max(this.touchableGetLongPressDelayMS(),10):370;o=isNaN(o)?370:o,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,e),o+n)},touchableHandleResponderRelease:function(e){this.pressInLocation=null,this._receiveSignal(It,e)},touchableHandleResponderTerminate:function(e){this.pressInLocation=null,this._receiveSignal(Lt,e)},touchableHandleResponderMove:function(e){if(this.state.touchable.positionOnActivate){var t=this.state.touchable.positionOnActivate,n=this.state.touchable.dimensionsOnActivate,o=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:20,right:20,top:20,bottom:20},r=o.left,i=o.top,a=o.right,s=o.bottom,c=this.touchableGetHitSlop?this.touchableGetHitSlop():null;c&&(r+=c.left||0,i+=c.top||0,a+=c.right||0,s+=c.bottom||0);var l=vt(e.nativeEvent),u=l&&l.pageX,h=l&&l.pageY;if(this.pressInLocation)this._getDistanceBetweenPoints(u,h,this.pressInLocation.pageX,this.pressInLocation.pageY)>10&&this._cancelLongPressDelayTimeout();if(u>t.left-r&&h>t.top-i&&u<t.left+n.width+a&&h<t.top+n.height+s){var d=this.state.touchable.touchState;this._receiveSignal(Mt,e),this.state.touchable.touchState===St&&d!==St&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(kt,e)}},touchableHandleFocus:function(e){this.props.onFocus&&this.props.onFocus(e)},touchableHandleBlur:function(e){this.props.onBlur&&this.props.onBlur(e)},_remeasureMetricsOnActivation:function(){var e=this.state.touchable.responderID;null!=e&&Ee.Z.measure(e,this._handleQueryLayout)},_handleQueryLayout:function(e,t,n,o,r,i){(e||t||n||o||r||i)&&(this.state.touchable.positionOnActivate&&Et.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&ct.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=Et.getPooled(r,i),this.state.touchable.dimensionsOnActivate=ct.getPooled(n,o))},_handleDelay:function(e){this.touchableDelayTimeout=null,this._receiveSignal(Nt,e)},_handleLongDelay:function(e){this.longPressDelayTimeout=null;var t=this.state.touchable.touchState;t!==mt&&t!==_t?console.error("Attempted to transition from state `"+t+"` to `"+_t+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(Zt,e)},_receiveSignal:function(e,t){var n=this.state.touchable.responderID,o=this.state.touchable.touchState,r=jt[o]&&jt[o][e];if(n||e!==It){if(!r)throw new Error("Unrecognized signal `"+e+"` or state `"+o+"` for Touchable responder `"+n+"`");if(r===Ot)throw new Error("Touchable cannot transition from `"+o+"` to `"+e+"` for responder `"+n+"`");o!==r&&(this._performSideEffectsForTransition(o,r,e,t),this.state.touchable.touchState=r)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(e){return e===mt||e===_t},_savePressInLocation:function(e){var t=vt(e.nativeEvent),n=t&&t.pageX,o=t&&t.pageY,r=t&&t.locationX,i=t&&t.locationY;this.pressInLocation={pageX:n,pageY:o,locationX:r,locationY:i}},_getDistanceBetweenPoints:function(e,t,n,o){var r=e-n,i=t-o;return Math.sqrt(r*r+i*i)},_performSideEffectsForTransition:function(e,t,n,o){var r=this._isHighlight(e),i=this._isHighlight(t);(n===Lt||n===It)&&this._cancelLongPressDelayTimeout();var a=e===gt&&t===St,s=!Dt[e]&&Dt[t];if((a||s)&&this._remeasureMetricsOnActivation(),At[e]&&n===Zt&&this.touchableHandleLongPress&&this.touchableHandleLongPress(o),i&&!r?this._startHighlight(o):!i&&r&&this._endHighlight(o),At[e]&&n===It){var c=!!this.props.onLongPress,l=Ct[e]&&(!c||!this.touchableLongPressCancelsPress());(!Ct[e]||l)&&this.touchableHandlePress&&(i||r||(this._startHighlight(o),this._endHighlight(o)),this.touchableHandlePress(o))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_playTouchSound:function(){Ee.Z.playTouchSound()},_startHighlight:function(e){this._savePressInLocation(e),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(e)},_endHighlight:function(e){var t=this;this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout((function(){t.touchableHandleActivePressOut(e)}),this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(e))},touchableHandleKeyEvent:function(e){var t=e.type,n=e.key;"Enter"!==n&&" "!==n||("keydown"===t?this._isTouchableKeyboardActive||this.state.touchable.touchState&&this.state.touchable.touchState!==gt||(this.touchableHandleResponderGrant(e),this._isTouchableKeyboardActive=!0):"keyup"===t&&this._isTouchableKeyboardActive&&this.state.touchable.touchState&&this.state.touchable.touchState!==gt&&(this.touchableHandleResponderRelease(e),this._isTouchableKeyboardActive=!1),e.stopPropagation(),"Enter"===n&&"link"===tt.Z.propsToAriaRole(this.props)||e.preventDefault())},withoutDefaultFocusAndBlur:{}},xt=(Vt.touchableHandleFocus,Vt.touchableHandleBlur,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(Vt,["touchableHandleFocus","touchableHandleBlur"]));Vt.withoutDefaultFocusAndBlur=xt;var Gt={Mixin:Vt,TOUCH_TARGET_DEBUG:!1,renderDebugView:function(e){var t=e.color,n=e.hitSlop;if(!Gt.TOUCH_TARGET_DEBUG)return null;var o={};for(var r in n=n||{top:0,bottom:0,left:0,right:0})o[r]=-n[r];var i=ut()(t);if("number"!=typeof i)return null;var a="#"+("00000000"+i.toString(16)).substr(-8);return _.createElement(O.Z,{pointerEvents:"none",style:pt({position:"absolute",borderColor:a.slice(0,-2)+"55",borderWidth:1,borderStyle:"dashed",backgroundColor:a.slice(0,-2)+"0F"},o)})}};const Ht=Gt;var Ut=n(20467),zt=n(55267),Bt=n(97901);const Yt=n(73822).Z;var Wt=n(43689);function Ft(e){return _.createElement(Wt.Z,e)}Ft.ignoreWarnings=function(){};const Kt=Ft;const Xt={ignoreLogs:function(){},ignoreAllLogs:function(){},uninstall:function(){},install:function(){}},qt=Wt.Z,Jt=Wt.Z,Qt=Wt.Z;var $t=function(){return Promise.resolve(!1)};const en={PERMISSIONS:{},RESULTS:{},checkPermission:$t,check:$t,requestPermission:$t,request:$t,requestMultiple:$t},tn={},nn={},on={};const rn=n(62793).Z;function an(){var e=_.useState(R.getColorScheme()),t=e[0],n=e[1];return _.useEffect((function(){function e(e){n(e.colorScheme)}return R.addChangeListener(e),function(){return R.removeChangeListener(e)}})),t}function sn(){var e=(0,_.useState)((function(){return q.Z.get("window")})),t=e[0],n=e[1];return(0,_.useEffect)((function(){function e(e){var t=e.window;null!=t&&n(t)}return q.Z.addEventListener("change",e),n(q.Z.get("window")),function(){q.Z.removeEventListener("change",e)}}),[]),t}}}]);