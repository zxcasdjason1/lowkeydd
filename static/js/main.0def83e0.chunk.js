(this["webpackJsonplowkeydd-dev"]=this["webpackJsonplowkeydd-dev"]||[]).push([[0],{11:function(n,e,t){n.exports={nav:"Navbar_nav__2Te_h",navbar:"Navbar_navbar__15Yzb",logo:"Navbar_logo__3HxtB",toogle:"Navbar_toogle__Bqhmj",menu:"Navbar_menu__1Chyb",menuItem:"Navbar_menuItem__1dBFd",active:"Navbar_active__2oMmi"}},46:function(n,e,t){},70:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var r=t(33),o=t.n(r),c=(t(46),t(34)),a=t(35),i=t(41),l=t(40),s=t(0),d=t(15),b=t(2),u=t(7),h=t(13),j=t(12),f=t(11),v=t.n(f),x=t(1);function m(n){var e=n.title,t=n.path,r=n.icon;return Object(x.jsx)("li",{className:v.a.menuItem,children:Object(x.jsxs)(d.b,{to:t,className:v.a.menuItemLink,children:[r,Object(x.jsx)("p",{children:e})]})})}var O=function(){var n=Object(s.useState)(!1),e=Object(h.a)(n,2),t=e[0],r=e[1],o=function(){r(!t)};return Object(x.jsxs)("div",{className:v.a.nav,children:[Object(x.jsx)("div",{className:v.a.navbar,children:Object(x.jsx)(d.b,{to:"#",className:v.a.toogle,children:Object(x.jsx)(j.d,{onClick:o})})}),Object(x.jsx)("div",{className:v.a.logo,children:"LowkeyDD"}),Object(x.jsx)("nav",{className:t?"".concat(v.a.menu," ").concat(v.a.active):"".concat(v.a.menu),children:Object(x.jsxs)("ul",{onClick:o,children:[Object(x.jsx)("li",{className:v.a.navbar,children:Object(x.jsx)(d.b,{to:"#",className:v.a.toogle,children:Object(x.jsx)(j.a,{onClick:o})})}),p.map((function(n){return Object(x.jsx)(m,Object(u.a)({},n),"MenuItem_".concat(n.title))}))]})})]})},p=[{title:"\u9996\u9801",path:"/",icon:Object(x.jsx)(j.c,{})},{title:"Let's dd",path:"/letsdd/",icon:Object(x.jsx)(j.b,{})},{title:"\u5f71\u9662",path:"/theater/",icon:Object(x.jsx)(j.h,{})},{title:"\u804a\u5929",path:"/chat/",icon:Object(x.jsx)(j.e,{})},{title:"\u6703\u54e1",path:"/usersetting/",icon:Object(x.jsx)(j.g,{})}];function g(){return Object(x.jsx)("div",{children:"Chat"})}function k(){return Object(x.jsx)("div",{children:"Home"})}var w,C,_,y=t(4),N=t(36),S=t.n(N),H=t(5);t(70);function F(n){var e=n.avatar,t=n.cid,r=n.owner,o=n.status,c=n.streamurl,a=n.thumbnail,i=n.title,l=n.viewcount,s=n.starttime;return Object(x.jsxs)(M,Object(u.a)(Object(u.a)({},function(){switch(o){case"live":return{fontcolor:"#fff",fontbgcolor:"#f00",bordercolor:"#f00"};case"wait":return{fontcolor:"#fff",fontbgcolor:"#34afeb",bordercolor:"#6a97ad"};case"off":return{fontcolor:"#f9fae6",fontbgcolor:"#616161",bordercolor:"#616161"};default:return{fontcolor:"#f0d8e2",fontbgcolor:"#cb4ede",bordercolor:"#6c3075"}}}()),{},{children:[Object(x.jsxs)(T,{className:"avatarbox",children:[Object(x.jsx)("img",{src:e,alt:"avatar_"+t}),Object(x.jsx)("p",{children:o})]}),Object(x.jsx)(D,{href:c,children:Object(x.jsx)("img",{src:a,alt:"thumbnail_"+t})}),Object(x.jsxs)("div",{className:"channel_Description",children:[Object(x.jsx)("div",{className:"channel_Title",children:Object(x.jsx)("p",{children:i})}),Object(x.jsx)("div",{className:"channel_Owner",children:r}),Object(x.jsx)("div",{className:"channel_Views",children:l}),Object(x.jsx)("div",{className:"channel_Time",children:s})]})]}))}var B,I,z,M=H.a.div(w||(w=Object(y.a)(["\n  --fontcolor: ",";\n  --fontbgcolor: ",";\n  --bordercolor: ",";\n  margin: 0px 10px 20px 10px;\n  padding: 10px;\n  border: solid 2px var(--bordercolor);\n  border-radius: 5px;\n"])),(function(n){return n.fontcolor}),(function(n){return n.fontbgcolor}),(function(n){return n.bordercolor})),T=H.a.div(C||(C=Object(y.a)(["\n  position: absolute;\n\n  img {\n    position: relative;\n    top: -1.1rem;\n    left: -1.2rem;\n    width: 5rem;\n    height: 5rem;\n    border-radius: 50%;\n    border: 3px solid var(--bordercolor);\n    background: var(--fontcolor);\n  }\n\n  p {\n    position: relative;\n    top: -1.8rem;\n    left: 0rem;\n    width: 46px;\n    height: 20px;\n    text-align: center;\n    font-size: 18px;\n    text-transform: uppercase;\n    color: var(--fontcolor);\n    background: var(--fontbgcolor);\n    border-radius: 10%;\n  }\n"]))),D=H.a.a(_||(_=Object(y.a)(["\n  display: block;\n  height: 8rem;\n  background-color: #000;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 100%;\n    vertical-align: middle;\n  }\n"])));function L(n){var e=n.checked,t=n.htmlFor,r=n.theme,o=Object(s.useState)(e),c=Object(h.a)(o,2),a=c[0],i=c[1];return Object(x.jsxs)(K,Object(u.a)(Object(u.a)({},r),{},{children:[Object(x.jsx)(V,{type:"checkbox",id:t||"",onClick:function(){i(!a)}}),Object(x.jsx)(R,{checked:a})]}))}var E,J,U,X,q,K=H.a.label(B||(B=Object(y.a)(["\n  --width: 40px;\n  --height: calc(var(--width) / 2);\n  --radius: calc(var(--height) / 2);\n  --beforeColor: ",";\n  --afterColor: ",";\n  --ballColor: ",";\n  display: inline-block;\n  cursor: pointer;\n\n"])),(function(n){return n.beforeColor||"#ddd"}),(function(n){return n.afterColor||"#34deeb"}),(function(n){return n.ballColor||"#fff"})),R=H.a.div(I||(I=Object(y.a)(["\n  /* \u5e95\u8272 */\n  position: relative;\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--radius);\n  background: ",';\n  transition: background 0.2s;\n\n  /* \u7403\u7403\u8207\u9670\u5f71\u6548\u679c */\n  ::after {\n    /* \u900f\u904eafter\u5be6\u73fe\u4e86\u76f8\u5c0d\u5167\u90e8\u79fb\u52d5\u7684\u6548\u679c */\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: var(--height);\n    width: var(--height);\n    background: var(--ballColor);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\n    border-radius: var(--radius);\n    transform: ',";\n    transition: transform 0.5s;\n  }\n"])),(function(n){return n.checked?"var(--afterColor)":"var(--beforeColor)"}),(function(n){return n.checked?"translateX(110%)":"translateX(0%)"})),V=H.a.input(z||(z=Object(y.a)(["\n  display: none;\n"]))),Y=H.a.div(E||(E=Object(y.a)(["\n  --height: 2.4rem;\n  --width: 2.4rem;\n  --bgColor: #2f3640;\n  --iconColor: ",";\n  --focusColor: ",";\n  background: var(--bgColor);\n  height: var(--height);\n  border-radius: var(--height);\n  padding: calc(var(--height) / 4);\n  width: ",";\n  transition: width 0.4s;\n"])),(function(n){return n.iconColor||"#e84118"}),(function(n){return n.focusColor||"#fff"}),(function(n){return n.isHover?"100%":"var(--width)"})),A=H.a.a(J||(J=Object(y.a)(["\n  color: var(--iconColor);\n  float: right;\n  width: var(--width);\n  height: var(--height);\n  border-radius: 50%; \n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.isHover?"var(--focusColor)":"var(--bgColor)"})),G=H.a.input(U||(U=Object(y.a)(["\n  border: none;\n  background: none;\n  outline: none;\n  float: left;\n  color: #fff;\n  font-size: 16px;\n  line-height: var(--height);\n  border-radius: var(--height);\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.25);\n  padding: ",";\n  width: ",";\n  transition: all 0.4s;\n"])),(function(n){return n.isHover?"0 1rem":"0px"}),(function(n){return n.isHover?"80%":"0%"}));function P(n){var e=n.theme,t=Object(s.useState)(!1),r=Object(h.a)(t,2),o=r[0],c=r[1],a=Object(s.useRef)(null),i=!1,l=function(){var e,t=(null===(e=a.current)||void 0===e?void 0:e.value)+"";""!==t&&n.onSubmit(t)};return Object(x.jsxs)(Y,Object(u.a)(Object(u.a)({onMouseOver:function(){c(!0)},onMouseOut:function(){!1===i&&c(!1)},onClick:function(){var n;i=!0,c(!0),null===(n=a.current)||void 0===n||n.focus()},isHover:o},e),{},{children:[Object(x.jsx)(G,{onBlur:function(){i=!1,c(!1)},onKeyUp:function(n){13===n.keyCode&&l()},type:"text",name:"",id:"",placeholder:"\u8acb\u8f38\u5165\u4e00\u4e9b\u95dc\u9375\u5b57\u4f86\u7372\u53d6\u559c\u6b61\u7684\u983b\u9053\u5427 (\xb4\u25bd`\u0283\u2764\u01aa)",isHover:o,ref:a}),Object(x.jsx)(A,{isHover:o,children:Object(x.jsx)(j.f,{style:{fontSize:"1.5rem"}})})]}))}function Q(n){return Object(x.jsxs)(Z,{children:[Object(x.jsx)(P,{onSubmit:n.onSubmit,theme:{focusColor:"#1985a1",iconColor:"#c5c3c6"}}),$.map((function(n,e){var t=n.htmlFor,r=n.checked,o=n.afterColor;return Object(x.jsxs)(nn,{children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)(L,{htmlFor:t,checked:r,theme:{afterColor:o}})]},"SwitchBtnBox_"+t)}))]})}var W,Z=H.a.div(X||(X=Object(y.a)(["\n  width: 100%;\n  margin: 0 0 2rem;\n  padding: 5px 5px;\n  background-color: #666;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-content: center;\n  align-items: center;\n"]))),$=[{checked:!1,htmlFor:"live",afterColor:"#f00"},{checked:!1,htmlFor:"wait",afterColor:"#0ff"},{checked:!1,htmlFor:"off",afterColor:"#856"}],nn=H.a.div(q||(q=Object(y.a)(["\n  margin: 0 1rem;\n  height: 2.4rem;\n\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  p {\n    margin-right: 8px;\n    font-size: 20px;\n    text-transform: uppercase;\n    color: #eee;\n  }\n"])));function en(){var n=Object(s.useState)([]),e=Object(h.a)(n,2),t=e[0],r=e[1],o=function(n){S.a.get("https://lowkeydd.ddns.net/channels/".concat(n)).then((function(n){console.log("\u6210\u529f\u4e86, \u56de\u61c9\u5982\u4e0b:\n",n.data);var e=n.data.channels;r(e)}),(function(n){console.log("\u5931\u6557\u4e86, \u932f\u8aa4\u5982\u4e0b:\n",n)}))};return Object(s.useEffect)((function(){return o("live"),console.log("live"),function(){}}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q,{onSubmit:o}),Object(x.jsx)(tn,{children:t.map((function(n){return Object(x.jsx)(F,Object(u.a)({},n),n.cid)}))})]})}var tn=H.a.div(W||(W=Object(y.a)(["\n  display: grid;\n  grid-gap: 6px;\n  grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));\n  align-items: center;\n"])));function rn(){return Object(x.jsx)("div",{children:"Theater"})}function on(){return Object(x.jsx)("div",{children:"User Setting"})}var cn=function(n){Object(i.a)(t,n);var e=Object(l.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(O,{}),Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:"/",component:k}),Object(x.jsx)(b.a,{path:"/letsdd/",component:en}),Object(x.jsx)(b.a,{path:"/theater/",component:rn}),Object(x.jsx)(b.a,{path:"/chat/",component:g}),Object(x.jsx)(b.a,{path:"/usersetting/",component:on})]})]})})}}]),t}(s.Component);o.a.render(Object(x.jsx)(cn,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.0def83e0.chunk.js.map