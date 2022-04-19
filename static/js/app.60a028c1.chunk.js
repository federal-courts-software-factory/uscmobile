(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{190:function(e,t,n){"use strict";var r=n(5),o=n.n(r),c=n(0),a=n.n(c),i=n(1),l=n(71),s=n(315),u=n(317),f=n(7),d=n.n(f),O=n(45),b=n(69),h=n(43),j=n(2),g=n(318),p=n(313),m=n(314),S=n(4);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(){var e=Object(O.k)(),t=a.a.useState(!1),n=d()(t,2),r=(n[0],n[1],Object(c.useState)({path:"./libs/usc/",name:"usc",children:[{path:"TITLE 01-GENERAL PROVISIONS",name:"TITLE 01-GENERAL PROVISIONS",children:[{path:"TITLE 01-GENERAL PROVISIONS/CHAPTER 1-RULES OF CONSTRUCTION",name:"CHAPTER 1-RULES OF CONSTRUCTION.md"},{path:"TITLE 01-GENERAL PROVISIONS/CHAPTER 2-ACTS AND RESOLUTIONS; FORMALITIES OF ENACTMENT; REPEALS; SEALING OF INSTRUMENTS",name:"CHAPTER 2-ACTS AND RESOLUTIONS; FORMALITIES OF ENACTMENT; REPEALS; SEALING OF INSTRUMENTS.md"},{path:"TITLE 01-GENERAL PROVISIONS/CHAPTER 3-CODE OF LAWS OF UNITED STATES AND SUPPLEMENTS; DISTRICT OF COLUMBIA CODE AND SUPPLEMENTS",name:"CHAPTER 3-CODE OF LAWS OF UNITED STATES AND SUPPLEMENTS; DISTRICT OF COLUMBIA CODE AND SUPPLEMENTS.md"}]}]})),o=d()(r,2),l=o[0],s=o[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/federal-courts-software-factory/uscode/master/usc.json").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(S.jsx)(b.a,{style:{flex:1},children:Object(S.jsx)(i.a,{style:x.container,children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(i.a,{style:{backgroundColor:"#000",height:1,marginTop:10}}),l.children.map((function(t,n){return Object(S.jsx)(g.a,{title:t.name,left:function(e){return Object(S.jsx)(p.a,T(T({},e),{},{icon:"file"}))},children:t.children.map((function(n,r){return Object(S.jsx)(m.a,{onPress:function(){return r=n.name,o=t.name,c=n.path,a=n.name,void e.navigate("TabTwo",{chapter:r,title:o,path:c,name:a});var r,o,c,a},title:n.name.replace(".md","")},r)}))},n)}))]})})})},x=j.a.create({container:{flex:1,backgroundColor:"#F5FCFF",paddingTop:30},title:{textAlign:"center",fontSize:18,fontWeight:"300",marginBottom:20},header:{backgroundColor:"#F5FCFF",padding:10},headerText:{textAlign:"center",fontSize:16,fontWeight:"500"},content:{paddingTop:10,paddingBottom:10,backgroundColor:"#fff"},active:{backgroundColor:"rgba(255,255,255,1)"},inactive:{backgroundColor:"rgba(245,252,255,1)"},selectors:{marginBottom:10,flexDirection:"row",justifyContent:"center"},selector:{backgroundColor:"#F5FCFF",padding:10},activeSelector:{fontWeight:"bold"},selectTitle:{fontSize:14,fontWeight:"500",padding:10,textAlign:"center"},multipleToggle:{flexDirection:"row",justifyContent:"center",marginVertical:30,alignItems:"center"},multipleToggle__title:{fontSize:16,marginRight:8}}),E=n(10),P=n.n(E),I=n(65),v=n(125),k=n(114),F=n(127);function N(e){var t=e.md,n=Object(I.a)();"light"===n?R.lightThemeText:R.darkThemeText,"light"===n?R.lightContainer:R.darkContainer;return"dark"===n?Object(S.jsx)(v.a,{style:{body:{color:"white"}},children:t||null}):Object(S.jsx)(v.a,{style:R,children:t||null})}var w=function(e,t){return P.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.a.awrap(F.a.setItem(e,t));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),alert(n.t0);case 8:case"end":return n.stop()}}),null,null,[[0,5]],Promise)};function A(e){var t=e.route,n=Object(I.a)(),r="light"===n?R.lightThemeText:R.darkThemeText,o="light"===n?R.lightContainer:R.darkContainer,i=Object(O.k)(),l=a.a.useState(t.params.title),s=d()(l,2),u=s[0],f=(s[1],t.params),j=f.chapter,g=(f.title,f.path),p=f.name,m=Object(c.useState)(),y=d()(m,2),T=y[0],C=y[1];return Object(c.useEffect)((function(){!function(e,t,n){var r,o;P.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,P.a.awrap(F.a.getItem(n));case 3:null!==(r=c.sent)?C(r):(o="https://raw.githubusercontent.com/federal-courts-software-factory/uscode/master/United%20States%20Code/"+encodeURIComponent(e)+"/"+encodeURIComponent(t),fetch(o).then((function(e){return e.text()})).then((function(e){C(e),w(n,e)}))),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),alert(c.t0);case 10:case"end":return c.stop()}}),null,null,[[0,7]],Promise)}(g,p,j)}),[]),a.a.useLayoutEffect((function(){i.setOptions({title:""===u?"No title":u})}),[i,u]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.a,{barStyle:"dark-content"}),Object(S.jsx)(b.a,{style:[R.container,o,r],children:Object(S.jsx)(h.a,{style:[R.mdcontainer],contentInsetAdjustmentBehavior:"automatic",children:T&&Object(S.jsx)(N,{md:T})})})]})}var R=j.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:5},mdcontainer:{padding:10},lightContainer:{backgroundColor:"#d0d0c0"},darkContainer:{backgroundColor:"#242c40"},lightThemeText:{color:"#242c40"},darkThemeText:{color:"#fff"},heading1:{fontSize:32,backgroundColor:"#000000",color:"#FFFFFF"},heading2:{fontSize:24},heading3:{fontSize:18},heading4:{fontSize:16},heading5:{fontSize:13},heading6:{fontSize:11}}),D=n(6),L=n(63),U=n(126),M=n(9),z=n.n(M),B=n(15),G={light:{text:"#000",background:"#fff",tint:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}};var W=["style","lightColor","darkColor"],H=["style","lightColor","darkColor"];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t){var n=Object(I.a)(),r=e[n];return r||G[n][t]}function q(e){var t=e.style,n=e.lightColor,r=e.darkColor,o=z()(e,W),c=_({light:n,dark:r},"text");return Object(S.jsx)(B.a,J({style:[{color:c},t]},o))}function K(e){var t=e.style,n=e.lightColor,r=e.darkColor,o=z()(e,H),c=_({light:n,dark:r},"background");return Object(S.jsx)(i.a,J({style:[{backgroundColor:c},t]},o))}function Q(){var e=Object(O.k)();return Object(S.jsxs)(K,{style:X.container,children:[Object(S.jsx)(U.a,{contentStyle:X.close,icon:"close",onPress:function(){return e.goBack()}}),Object(S.jsx)(K,{style:X.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),Object(S.jsx)(q,{children:"The US Code mobile app is brought to you by the"}),Object(S.jsx)(q,{style:X.title,children:"Federal Courts Software Factory"}),Object(S.jsx)(q,{children:"Founded in 2020, the FCSF is led by the individual courts. Working together, the FCSF and its projects work to bring the digital transformation to the administration of justice within the federal judiciary."}),Object(S.jsx)(U.a,{icon:"github",mode:"contained",onPress:function(){L.a.openURL("https://github.com/federal-courts-software-factory")},children:"GitHub"}),Object(S.jsx)(k.a,{style:"ios"===D.a.OS?"light":"auto"})]})}var X=j.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold",padding:20},separator:{marginVertical:30,height:1,width:"80%"},close:{alignContent:"flex-end",fontSize:64}}),Y=n(54),Z=n(191),$=n(316);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=te(te({},Y.a),{},{colors:te(te({},Y.a.colors),{},{primary:"#34495e",accent:"#95a5a6"})});function re(){return Object(S.jsx)(Z.a,{theme:ne,children:Object(S.jsx)(i.a,{style:{flex:1},children:Object(S.jsx)(C,{})})})}var oe=Object(u.a)();t.a=function(e){return e.navigation,Object(S.jsx)(s.a,{children:Object(S.jsxs)(oe.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#34495e"},headerTintColor:"#95a5a6",headerTitleStyle:{fontWeight:"bold",color:"#bdc3c7"}},children:[Object(S.jsx)(oe.Screen,{name:"Home",component:re,options:function(e){var t=e.navigation;return{title:"United States Code",tabBarIcon:function(e){var t=e.theme;return Object(S.jsx)(TabBarIcon,{name:"code",color:t.colors.accent})},headerRight:function(){return Object(S.jsx)(l.a,{onPress:function(){return t.navigate("Modal")},style:function(e){return{opacity:e.pressed?.5:1}},children:Object(S.jsx)($.a,{name:"info-circle",size:25,color:ne.colors.accent,style:{marginRight:15}})})}}}}),Object(S.jsx)(oe.Screen,{name:"TabTwo",component:A,options:function(e){return{title:e.route.params.name}}}),Object(S.jsx)(oe.Group,{screenOptions:{presentation:"Modal"},children:Object(S.jsx)(oe.Screen,{name:"Modal",component:Q,options:{title:"About the Federal Court Software Factory"}})})]})})}},194:function(e,t,n){e.exports=n(302)}},[[194,1,2]]]);
//# sourceMappingURL=app.60a028c1.chunk.js.map