(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),i=n.n(r),o=(n(12),n(4)),a=n(5),h=n(7),l=n(6),b=(n(13),n(0)),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green br3 pd3 ma2 grow dib shadow-5 bw2 ",id:"iop",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})},j=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){e.searchfield;var t=e.searchchange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"Scroll",border:"3px solid #0ccac4",height:"800px"},children:e.children})},O=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onsearchchange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"f1 tc",children:"Robofriends "}),Object(b.jsx)(f,{children:Object(b.jsx)("h1",{className:"tc f1",children:"LOADING..."})})]}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(b.jsx)(u,{searchchange:this.onsearchchange}),Object(b.jsx)(f,{children:Object(b.jsx)(j,{robots:t})})]})}}]),n}(c.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};n(16);i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.7352ad82.chunk.js.map