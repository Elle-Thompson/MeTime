(this.webpackJsonpproject4=this.webpackJsonpproject4||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){},16:function(e,c,t){"use strict";t.r(c);var s=t(1),j=t(8),n=t.n(j),a=(t(13),t(14),t(2)),i=t(4),r=t(0),l=function(){return Object(r.jsxs)("div",{id:"header-div",children:[Object(r.jsxs)(i.b,{id:"header-button",to:"/",children:[" ",Object(r.jsx)("i",{class:"fas fa-home fa-3x"}),"  "]}),Object(r.jsx)(i.b,{id:"header-button",exact:!0,to:"/game",children:Object(r.jsx)("i",{class:"fas fa-gamepad fa-3x"})}),Object(r.jsx)(i.b,{id:"header-button",exact:!0,to:"/journal",children:Object(r.jsx)("i",{class:"fas fa-scroll fa-3x"})}),Object(r.jsx)("div",{className:"header-dropdown"})]})},b=function(){return Object(r.jsxs)("div",{className:"journal-div",children:[Object(r.jsx)(l,{}),Object(r.jsx)("div",{className:"unwind-banner",children:Object(r.jsx)("h1",{className:"journal-title",children:"  MeTime "})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("textarea",{className:"journal-input",placeholder:"Dear Journal, ",rows:"4",cols:"50"}),Object(r.jsxs)("div",{className:"button-div",children:[Object(r.jsx)("button",{className:"buttons",children:"Save"}),Object(r.jsx)("button",{className:"buttons",children:"New Entry"}),Object(r.jsx)("button",{className:"buttons",children:"Old Entries"})]}),Object(r.jsxs)("form",{className:"sign-up",children:[Object(r.jsx)("h2",{children:"Sign Up "}),Object(r.jsx)("input",{type:"text",placeholder:"Enter Username"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",placeholder:"Enter Password"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Submit"})]}),Object(r.jsxs)("form",{className:"sign-in",children:[Object(r.jsx)("h2",{children:"Sign In "}),Object(r.jsx)("input",{type:"text",placeholder:"Enter Username"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",placeholder:"Enter Password"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Submit"})]}),Object(r.jsx)("div",{className:"dropdown",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Previous date (placeholder)"}),Object(r.jsx)("li",{children:"Previous date (placeholder)"}),Object(r.jsx)("li",{children:"Previous date (placeholder)"})]})})]})]})},d=t(5),o=function(){var e=["Turn it!","Click it!","Slide it!"],c=Object(s.useState)(),t=Object(d.a)(c,2),j=t[0],n=t[1],a=Object(s.useState)(null),i=Object(d.a)(a,2),b=i[0],o=i[1],x=Object(s.useState)(0),O=Object(d.a)(x,2),h=O[0],u=O[1];var m=function(){return n(e[Math.floor(Math.random()*e.length)]),j},p=function(e){console.log(b);var c=e.target.innerText+" it!";o(setTimeout((function(){console.log("hi"),n("Game Over")}),1500)),c===j?(m(),u((function(){return h+1})),clearTimeout(b)):n("Game Over")};return Object(r.jsxs)("div",{className:"game-div",children:[Object(r.jsx)(l,{}),Object(r.jsx)("div",{className:"unwind-banner",children:Object(r.jsx)("h1",{className:"journal-title",children:" MeTime "})}),Object(r.jsxs)("div",{className:"game-wrapper",children:[Object(r.jsx)("div",{className:"current-choice",children:Object(r.jsxs)("h2",{children:[j," "]})}),Object(r.jsxs)("div",{id:"score",children:[Object(r.jsx)("div",{id:"score-title",children:Object(r.jsx)("h4",{children:" Score "})}),Object(r.jsxs)("h4",{children:[" : ",h," "]})]}),Object(r.jsxs)("div",{className:"game-body-div",children:[Object(r.jsx)("div",{className:"click",children:Object(r.jsx)("p",{onClick:p,children:" Click"})}),Object(r.jsx)("div",{className:"turn",children:Object(r.jsx)("p",{onClick:p,children:"Turn"})}),Object(r.jsx)("div",{className:"slide",children:Object(r.jsx)("p",{onClick:p,children:"Slide"})}),Object(r.jsxs)("div",{id:"control-panel",children:[Object(r.jsx)("button",{onClick:function(){n(m),u(0)},id:"start-button",children:"Start"}),Object(r.jsx)("button",{onClick:function(){n(),u(0)},id:"reset-button",children:"Reset"})]})]})]})]})},x=function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)("div",{className:"unwind-banner",children:Object(r.jsx)("h1",{className:"journal-title",children:"  MeTime "})}),Object(r.jsxs)("nav",{children:[Object(r.jsx)("h3",{className:"game",children:"Play a Game"}),Object(r.jsx)(i.b,{className:"btn1",to:"/game",children:Object(r.jsx)("i",{class:"fas fa-gamepad fa-7x"})}),Object(r.jsx)("h3",{className:"journal1",children:"Journal"}),Object(r.jsx)(i.b,{className:"btn2",to:"/journal",children:Object(r.jsx)("i",{class:"fas fa-scroll fa-7x"})})]}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})};var O=function(){return Object(r.jsx)("div",{className:"Wrapper",children:Object(r.jsxs)(a.c,{children:[Object(r.jsx)(a.a,{path:"/",element:Object(r.jsx)(x,{})}),Object(r.jsx)(a.a,{path:"/journal",element:Object(r.jsx)(b,{})}),Object(r.jsx)(a.a,{path:"/game",element:Object(r.jsx)(o,{})})]})})};n.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1130f445.chunk.js.map