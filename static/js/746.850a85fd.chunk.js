"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[746],{383:function(n,e,t){var r=t(861),a=t(687),o=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"9bfa62f8674a101d6532f8d8237daa28"};var c=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(e));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();e.Z=c},174:function(n,e,t){t.d(e,{Z:function(){return v}});t(791);var r,a,o,u=t(168),c=t(706),i=t(87),s=c.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background-color: orange;\n  max-width: 300px;\n  align-content: center;\n  padding: 0\n"]))),l=c.Z.li(a||(a=(0,u.Z)(["\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: grey;\n  font-size: 18px;\n  border-radius: 25px;\n  padding: 10px;\n  transition: background-color 0.3s ease-in-out;\n\n  &:hover {\n    background-color: lightgrey;\n  }\n"]))),f=(0,c.Z)(i.rU)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n"]))),p=t(689),d=t(184),v=function(n){var e=n.results,t=(0,p.TH)();return console.log(t),(0,d.jsx)(s,{style:{borderRadius:"30px"},children:e.map((function(n){return(0,d.jsx)(l,{children:(0,d.jsxs)(f,{to:"/movies/".concat(n.id),state:{from:t},children:[n.title||n.name," "]})},n.id)}))})}},571:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(861),a=t(439),o=t(687),u=t.n(o),c=t(791),i=t(87),s=t(383),l=t(184),f=function(n){var e=n.onSubmit,t=(0,c.useState)(""),r=(0,a.Z)(t,2),o=r[0],u=r[1];return(0,l.jsxs)("form",{action:"",onSubmit:function(n){n.preventDefault(),e(o),u("")},children:[(0,l.jsx)("input",{type:"text",onChange:function(n){var e=n.target;u(e.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})},p=t(174),d=function(){var n=(0,i.lr)(),e=(0,a.Z)(n,2),t=e[0],o=e[1],d=(0,c.useState)([]),v=(0,a.Z)(d,2),x=v[0],h=v[1];console.log(x),(0,c.useEffect)((function(){var n=t.get("query");if(n){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("search/movie?query=".concat(n));case 2:t=e.sent,h(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(f,{onSubmit:function(n){o({query:n})}}),(0,l.jsx)(p.Z,{results:x})]})}}}]);
//# sourceMappingURL=746.850a85fd.chunk.js.map