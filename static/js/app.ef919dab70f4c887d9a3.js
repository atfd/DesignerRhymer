webpackJsonp([0],[,function(t,e,n){var a={};a.$style=n(28);var c=n(0)(n(13),n(49),null,a);t.exports=c.exports},function(t,e,n){var a={};a.$style=n(27);var c=n(0)(n(15),n(47),null,a);t.exports=c.exports},,function(t,e,n){"use strict";function a(t){return t[Math.floor(Math.random()*t.length)]}function c(t,e){for(var n=a(t);e===n;)n=a(t);return n}function r(t,e){return"COLOR"===e.toUpperCase()?o=c(t,o):"QUOTE"===e.toUpperCase()?l=c(t,l):null}var o=void 0,l=void 0;e.a=r},,function(t,e,n){"use strict";var a=n(3),c=n(56),r=n(37),o=n.n(r),l=n(38),s=n.n(l),u=n(39),i=n.n(u),f=n(40),p=n.n(f);a.a.use(c.a),e.a=new c.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/gill",name:"Gill",component:s.a},{path:"/short",name:"Short",component:i.a},{path:"/wallas",name:"Wallas",component:p.a},{path:"/**",name:"404",component:o.a}]})},function(t,e,n){n(30);var a=n(0)(n(9),n(52),null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),c=n(7),r=n.n(c),o=n(6);a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(41),c=n.n(a),r=n(4);e.default={data:function(){return{color:n.i(r.a)(c.a,"Color")}},methods:{colorBkg:function(){this.color=n.i(r.a)(c.a,"Color")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),c=n.n(a);e.default={components:{FaceButton:c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),c=n.n(a);e.default={components:{FaceButton:c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),c=n.n(a);e.default={components:{FaceButton:c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["text","link"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(36),c=n.n(a),r=n(4);e.default={components:{GenericButton:c.a},props:["quotes","name","link","calcBkg"],data:function(){return{value:n.i(r.a)(this.quotes,"quote")}},methods:{refresh:function(){this.value=n.i(r.a)(this.quotes,"quote"),this.calcBkg()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(33),c=n.n(a),r=n(34),o=n.n(r),l=n(35),s=n.n(l);e.default={components:{GillButton:c.a,ShortButton:o.a,WallasButton:s.a},props:["calcBkg"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(42),c=(n.n(a),n(2)),r=n.n(c);e.default={components:{FullScreenQuote:r.a},props:["calcBkg"],data:function(){return{QuoteList:a.QuoteList,SubjectName:a.SubjectName,Link:a.Link}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(43),c=(n.n(a),n(2)),r=n.n(c);e.default={components:{FullScreenQuote:r.a},props:["calcBkg"],data:function(){return{QuoteList:a.QuoteList,SubjectName:a.SubjectName,Link:a.Link}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(44),c=(n.n(a),n(2)),r=n.n(c);e.default={components:{FullScreenQuote:r.a},props:["calcBkg"],data:function(){return{QuoteList:a.QuoteList,SubjectName:a.SubjectName,Link:a.Link}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=["#e7040f","#ff6300","#ffb700","#5e2ca5","#d5008f","#ff41b4","#137752","#567fbc","#357edd"];e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SubjectName",function(){return a}),n.d(e,"QuoteList",function(){return c}),n.d(e,"Link",function(){return r});var a="Jonathan Gill",c=["Run of the mill","Over the hill","Ate a dodgy pill","Going in for the kill","Writing his will","Sharpening his drill","Somehow he's still","All on his bill","At the shopping till"],r="https://twitter.com/jontyman01"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SubjectName",function(){return a}),n.d(e,"QuoteList",function(){return c}),n.d(e,"Link",function(){return r});var a="Jon Short",c=["Cannot be bought","Quite easily taught","On the tennis court","Has never drank port","Cannot be caught","Always distraught","Building a fort","Able to teleport","At the resort"],r="https://twitter.com/altshort"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SubjectName",function(){return a}),n.d(e,"QuoteList",function(){return c}),n.d(e,"Link",function(){return r});var a="Paul Wallas",c=["Looks a bit like a mollusc","Worth around fourteen dollars","His cat wears collars","Almost flawless","Likes to take solace","Favourite film's Lawless","His cats are not clawless","Speaks like speedy gonzales"],r="https://twitter.com/paulwallas"},,,function(t,e){t.exports={container:"_21aEwxlrnH6QlISOaNJhxv_0"}},function(t,e){t.exports={container:"S15T6HkbdW-nFAqfe4XmA_0",buttons:"_3txeSPclHyi0REs7UUBNfb_0",text:"_1DQWSGAMZ9PvubytsyPFC3_0",quote:"_3znMtqqqAFfI9P3fARcVAV_0",link:"_2fhlt09Q8xbRatwp3Hkq22_0"}},function(t,e){t.exports={container:"rtvbfigxzjnY-Y4BZbfDV_0"}},function(t,e){t.exports={container:"_1_qX0QBSp9rD0uQZl8PboV_0",link:"_27xo67BNSNESl-SHBbjLio_0"}},function(t,e){},,,function(t,e,n){var a=n(0)(n(10),n(53),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(11),n(54),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(12),n(46),null,null);t.exports=a.exports},function(t,e,n){var a={};a.$style=n(29);var c=n(0)(n(14),n(51),null,a);t.exports=c.exports},function(t,e,n){var a={};a.$style=n(26);var c=n(0)(n(16),n(45),null,a);t.exports=c.exports},function(t,e,n){var a=n(0)(n(17),n(50),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(18),n(48),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(19),n(55),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(20),null,null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(21),null,null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(22),null,null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(23),null,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.container},[n("router-link",{attrs:{subject:"gill",to:"/gill"},nativeOn:{click:function(e){t.calcBkg(e)}}},[n("GillButton")],1),t._v(" "),n("router-link",{attrs:{subject:"short",to:"/short"},nativeOn:{click:function(e){t.calcBkg(e)}}},[n("ShortButton")],1),t._v(" "),n("router-link",{attrs:{subject:"wallas",to:"/wallas"},nativeOn:{click:function(e){t.calcBkg(e)}}},[n("WallasButton")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FaceButton",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 135 135"}},[n("path",{attrs:{d:"M135,135H0V0H135ZM3,132H132V3H3ZM20.12,60.59c3.2,6.3,4.07,6.41,9.71,1.83a9.67,9.67,0,0,1,5.55-1.76c3.7-.09,7.43.69,11.12.53s7.59-1,11.43-1.54c-.17,4.6-3.81,7.29-9.09,6.86-3.44-.28-6.87-.77-10.3-1.21-5.62-.72-8.77,2.57-11.68,6.81,4,3.49,8.52,3,13,2.94,1.65,0,3.32.77,5,1.19-1,1.3-1.89,2.66-3,3.88a25.36,25.36,0,0,1-2.66,2.42c-3.52,3-6.12,4.41-8.76,4.09L35,96.32l.8-1,26.93,7.31.45-.94-6-4,.12-1.27H69.31l-.69-2.07c1.87-1.41,3.55-3.39,5.67-4.13,4.09-1.43,6.51-3.79,7.62-8.06.58-2.23,2.38-4.14,3.74-6.39,4,3.1,7.18,5.51,10.25,8.12.95.81,2.27,2.58,2,3.16-.57,1.09-2.1,1.85-3.39,2.37-1.81.72-4,.74-5.59,1.7-2.87,1.69-5.46,3.86-8.17,5.83l1,1.69c6.38-2.26,13-4,19.07-6.95,5.11-2.48,3.76-8.67-2-12.17-1.85-1.13-3.17-3.15-4.73-4.76,2.22-.8,4.41-1.69,6.68-2.34,1-.28,2.17.19,3.13-.1a45.19,45.19,0,0,0,4.81-2.07l-.4-1.5H96.06l2.36-4.5c-4.68.66-8.48,1.47-12.3,1.67-4.79.26-7.84-2.75-7.53-6.85,8.06,2.36,16.68,1.55,22.94-2.67,3.3-2.23,6.06-2.69,9.46-.26,1.15.82,3.81,1.09,4.75.33a39.08,39.08,0,0,0,5.12-5l-2-3.89-.83.19a20.31,20.31,0,0,0-3.54-3.21c-2.68-1.49-5.47-3.51-8.36-3.76-8.93-.78-17.93-1-26.9-1-2.79,0-6.14.67-8.23,2.31a7.35,7.35,0,0,1-9.52.23c-2.57-1.86-4.66-1.86-7.48-1.4-8.54,1.41-17.2,2.18-25.69,3.82-3.17.61-6,2.91-9,4.52A5.6,5.6,0,0,0,18,50.34a63.51,63.51,0,0,0-.57,7.59A10.63,10.63,0,0,1,20.12,60.59ZM55.23,93.9c-1.77-.16-2.61,0-3.24-.33-2.69-1.29-5.32-2.7-8-4.07,1.83-2.34,3.66-4.69,5.51-7,.18-.22.5-.5.73-.48,1.09.08,2.84-.11,3.14.46a79,79,0,0,1,4.47,9.92C58,92.57,55.67,93.65,55.23,93.9Zm7.82-40.67c.17-1.31.44-2.93,1.3-3.74a8.79,8.79,0,0,1,4.54-2.17c.69-.1,2,1.5,2.4,2.57C73,54.16,74.13,58.65,76,62.83A26.75,26.75,0,0,0,81,70c3.5,3.73,3,6.08-2,7.71-3.73,1.23-7.37,2.76-11.2,4.22-2.24-.83-4.09-1.62-6-2.19-1.67-.5-3.46-.63-5.13-1.13-1.34-.4-3.36-.85-3.68-1.76-.43-1.25,0-3.61.9-4.35C60.18,67.53,62.11,60.67,63.05,53.23Z"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.$style.container},[n("div",{class:t.$style.text},[n("p",{class:t.$style.quote},[t._v(t._s(t.value))]),t._v(" "),n("p",[n("a",{class:t.$style.link,attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.name))])])]),t._v(" "),n("div",{class:t.$style.buttons},[n("GenericButton",{attrs:{text:"Another one"},nativeOn:{click:function(e){t.refresh(e)}}}),t._v(" "),n("router-link",{attrs:{subject:"home",to:"/"}},[n("GenericButton",{attrs:{text:"Home",link:!0}})],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("FullScreenQuote",{attrs:{calcBkg:t.calcBkg,quotes:t.QuoteList,name:t.SubjectName,link:t.Link}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.container},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("FullScreenQuote",{attrs:{calcBkg:t.calcBkg,quotes:t.QuoteList,name:t.SubjectName,link:t.Link}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.$style.container,t.link&&t.$style.link]},[t._v("\n  "+t._s(t.text)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{backgroundColor:t.color},attrs:{id:"app"}},[n("router-view",{attrs:{calcBkg:t.colorBkg}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FaceButton",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 135 135"}},[n("path",{attrs:{d:"M135,135H0V0H135ZM3,132H132V3H3ZM81.81,52.73a8.61,8.61,0,0,1-1.31-.37c-.62-.29-.81-.79-.17-1.2,4.05-2.62,8.06-5.45,13.23-5.12a11.2,11.2,0,0,1,4.38,1.07c2,1,4,.8,6,.81a5.09,5.09,0,0,1,1.75.44c.16.06.26.68.25.69-.91.37-1.09,1.68-2.3,1.73a9.65,9.65,0,0,0-2.09.52c-.5.14-1.18.91-1.23-.4,0-.08-.33-.24-.45-.2-1.6.52-3.17,1.18-4.8,1.57a20.16,20.16,0,0,1-4.95.69,3.74,3.74,0,0,1-3.68-3.6c-.16-1.22-.58-1.1-1.31-.57s-1.54,1.14-2.26,1.76a.77.77,0,0,0-.12.74C83.89,52.87,82.19,52.28,81.81,52.73ZM98.7,49.65a8,8,0,0,0-1.27-.91.91.91,0,0,0-.85.17c-.7.87-1.33,1.8-2,2.72-.07.09,0,.25-.06.38.14,0,.3,0,.41,0q1.75-1,3.47-2C98.55,49.9,98.61,49.75,98.7,49.65Zm-9.57-1.78c-.4.5-.78.77-.82,1.08s.34.57.53.85a4.08,4.08,0,0,0,.92-.89C89.84,48.77,89.45,48.37,89.13,47.86ZM55.62,52.75l.23.9-2.43.23c0-.15,0-.36.1-.43a9.34,9.34,0,0,0,.84-.53c.42-.41.75-.75-.22-1-.68-.21-1.2-.93-1.84-1.35S51.1,50,51,51.15c-.22,3-1.25,3.88-4.22,3.9-3.28,0-3.55-.17-4.79-3.21-.12-.3-.56-.76-.69-.72a9.27,9.27,0,0,0-3.15,1.43c-1.51,1.41-2.21,1.82-4,1.34-.18,0-.35-.12-.53-.18.12-.19.19-.46.36-.56.95-.54,1.9-1.09,2.89-1.54a39,39,0,0,1,4.88-2.06A16.74,16.74,0,0,1,51,49a8.22,8.22,0,0,1,1.48.84,10,10,0,0,0,1.77.81A1.78,1.78,0,0,1,55.62,52.75Zm-9-1.53c-.72-.31-1.06-.58-1.36-.54s-.77.48-.73.61c.1.33.46.83.69.82S45.92,51.71,46.63,51.22Zm30,50.46c1.65-.24,3.43-.16,4.91-.79,1.95-.83,4.14-1.06,5.89-2.41.53-.41,1.33-.48,1.83-.91C91,96,92.76,94.36,94.45,92.67c.37-.38.42-1.08.61-1.63a6.25,6.25,0,0,0-1.75-.1c-2.47.57-4.89,1.39-7.38,1.82-4.26.73-8.56,1.23-12.83,1.86a3.16,3.16,0,0,0-1.27.56c-.17.12-.15.49-.22.75.14-.14.26-.35.43-.42A5.59,5.59,0,0,1,73.59,95c1.62-.16,3.25-.19,4.87-.32,1.08-.08,2-.61,3.26.09.59.34,1.94-.64,2.95-1,.09,0,.22-.07.28,0,.22.16.61.38.59.52a16.36,16.36,0,0,1-.73,3.65c-.53,1.33-1.7,1.31-2.47.14-.22-.33-.48-.62-.73-.92a13,13,0,0,0-.55,1.44c-.07.26.18.71,0,.83a6.89,6.89,0,0,1-1.43,1s-.54-.56-.48-.66c.49-.88-.17-1.07-.73-1.33l-.62-.26a3.28,3.28,0,0,0,.26.74,1.34,1.34,0,0,1-.68,2.24c-.3.13-.61.22-.91.34ZM95.27,30.92l0,.06h.17ZM38.72,39c2.53.06,5.05.2,7.58.3a5.11,5.11,0,0,0,.8-.09c-.2-.11-.41-.2-.61-.32a.87.87,0,0,1-.18-.2c.11-.06.21-.19.32-.18a12.25,12.25,0,0,1,3.51.17c1.4.47,2.32-.47,3.47-.7a1.57,1.57,0,0,0,0-.46c-.29-1.38-2.76-3.19-4.4-3-2,.19-3.9.6-5.85.87a6.8,6.8,0,0,1-1.76,0,1.94,1.94,0,0,0-2,.78,3.76,3.76,0,0,1-1.12.63,2,2,0,0,0-.7.43c-.48.67-.89,1.37-1.29,2A15.85,15.85,0,0,1,38.72,39ZM74.59,52.33c1.36,2.4,2.74,4.82,5.82,5.37l.92.16a4.17,4.17,0,0,0-.13-.94,3,3,0,0,0-.6-1.09c-.85-.84-1.77-1.62-2.64-2.44-1.76-1.67-1.77-2-.67-4.2a36.88,36.88,0,0,0,1.54-3.71,1,1,0,0,0-.22-.89c-.18-.13-.61,0-.91.14a21.59,21.59,0,0,1-2.25.91c-2,.5-2.34.92-2.58,3.16C73.45,50,73.94,51.2,74.59,52.33Zm9,25c-.38,2.38-1.8,3.23-4.11,2.68a10.19,10.19,0,0,0-3.13-.1c-.36,0-.7.52-1,.84a10.1,10.1,0,0,0-1,1.16,5.44,5.44,0,0,0-.44.91c.32,0,.83.2.94.06.63-.78,2.17.12,2.39-1.33,0,0,.22-.11.24-.08.55.6,1.32,1.13,1.59,1.85.53,1.46,2.44,3.37,4.24,2.58.4-.17.63-.75.93-1.15A9.62,9.62,0,0,1,83,84.36c-.39-.16-1-.41-1.05-.65,0-.64.08-.65-.48-.68a2.89,2.89,0,0,1-.86,0,5.78,5.78,0,0,1-1-.63,9.85,9.85,0,0,1,.92-.6c.52-.27,1.08-.46,1.59-.75s.74-.76,1.15-.81c2-.23,2.42-1.77,2.9-3.27.32-1-1-3.84-1.88-4.19a4,4,0,0,0-1-.12,4.74,4.74,0,0,0,0,.94c.13.85.31,1.7.42,2.27C83.68,76.52,83.67,76.91,83.61,77.29Zm18.45-32.66a11,11,0,0,0-5.29-3.08,25.32,25.32,0,0,0-10.56.6c-2.61.63-3.74,2.73-5.33,4.4-.12.12,0,.43-.06.65.21,0,.47,0,.61-.09a8.13,8.13,0,0,0,1.75-1.47c3-4.08,10.65-5.17,14.73-2.61,1.27.8,2.65,1.43,4,2.13a.92.92,0,0,0,.39.06,1.48,1.48,0,0,0,0-.26A2.87,2.87,0,0,0,102.07,44.63Zm-55,49.19a3.37,3.37,0,0,0,.68.82c1,.6,2,1,2.95,1.71a14,14,0,0,0,6.14,2.27c.19,0,.42-.12.63-.19-.17-.12-.33-.25-.51-.36a19.31,19.31,0,0,1-2.3-1.4c-.9-.73-1.54-1.86-2.53-2.36A20.92,20.92,0,0,0,48,93.2Zm2-47.93A3.39,3.39,0,0,1,52,47.82a3.27,3.27,0,0,0,3,1.66,8.12,8.12,0,0,0,1.21-.13c-.21-.41-.31-.94-.63-1.22a11.12,11.12,0,0,0-7.29-2.61A5.65,5.65,0,0,0,49.09,45.89Zm19.4,55.57c.16-.56.18-.79-.63-.76a11.39,11.39,0,0,1-2.94-.56c-.28-.07-.56-.45-.78-.4-1.66.38-2.48-.25-2.54-1.93,0-.16-.15-.31-.22-.46-.1.14-.21.28-.3.43a4,4,0,0,1-.53.85c-.77.71-.37,1,.39,1.17l7.58,1.66Zm33.22-70.09c-.67-.32-1.36-.58-2-.87a20.53,20.53,0,0,1-2.93-.37c-.85-.21-1.24.06-1.46.78l.15.06h-.17l0-.06c-.69,1.09-1.52.3-2.29.16a10,10,0,0,0-2.61-.39,44.55,44.55,0,0,0-6.16,1c-.69.16-1.21,1-1.82,1.55-.45.41-1.09.7-1.33,1.2s.15,1,.17,1.49a2.09,2.09,0,0,1-.28.73L82,36.34a5.48,5.48,0,0,1,1.4-.3c.5,0,1,.45,1.5.38,2.59-.47,5.35-.33,7.66-2A3.55,3.55,0,0,1,94.35,34c1.53-.08,2.26-.49,2.82-1.65.08-.18.46-.22.71-.33l.24-.09a.37.37,0,0,1,.12-.07c1.3-.49,1.27-.46,2.41.43.15.12.71-.27,1-.46A.55.55,0,0,0,101.71,31.37Zm-6.44-.45,0,.06h.17Zm0,0,0,.06h.17ZM68.52,101.44l4.41.95-1.76-2.14c.33,1.22-.41,1.33-1.39,1.2a9.52,9.52,0,0,0-1.29,0Z"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FaceButton",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 135 135"}},[n("path",{attrs:{d:"M135,135H0V0H135ZM3,132H132V3H3ZM74.29,61.61c-1,.25-2.61,1.43-2.62,2.2,0,3.25-.36,6.86.91,9.66,1.61,3.57,5.28,5.1,9.45,4.4.47-.08.95-.11,1.42-.17l1.27-.17c-.35-.36-.69-.73-1.05-1.07s-.6-.48-.9-.71c.19-.17.37-.46.58-.5,2.57-.41,4.76-2.72,7.67-1.55.1,0,.67-.56.65-.85,0-.51-.5-1-.5-1.51a4.17,4.17,0,0,0-3-4c-1.32-.52-2.76-.7-4.13-1.1-.33-.09-.57-.46-.86-.7.26-.19.5-.48.78-.53a5.4,5.4,0,0,1,1.84-.1c2.42.43,4.83,1,7.25,1.39a6.23,6.23,0,0,0,1.6-.13,5.39,5.39,0,0,0-1-1.44,21,21,0,0,0-12.07-4.15A65.55,65.55,0,0,0,74.29,61.61ZM50.45,76.45a20.53,20.53,0,0,1,2.75,1.16c-.9.49-1.79,1-2.7,1.47a5.84,5.84,0,0,1-.6.14,7.46,7.46,0,0,0-.7.35A3.29,3.29,0,0,0,50,80,9.3,9.3,0,0,0,59.78,75a3,3,0,0,1,.77-1.19,4.43,4.43,0,0,0,1.76-4.52C62,67.54,61.9,65.78,61.7,64a.51.51,0,0,0-.22-.34c-2.23-1.27-4.38-3.21-7.18-2.09-3.44,1.37-7.27,1.47-10.44,4a10.08,10.08,0,0,0-3.7,5.14,3.25,3.25,0,0,0,.07,1.14c.33-.19.78-.29,1-.57,1.9-2.65,4.67-3.73,7.72-4.2,1-.15,2.47-1.31,3,.46.45,1.6-1.25,1.64-2.23,2.12-.24.12-.56.13-.77.29-1.59,1.26-3.24,2.46-4.69,3.86A2.35,2.35,0,0,0,44,75.86c.11.32,1.15.37,1.78.41a8.93,8.93,0,0,0,1.63-.18A21,21,0,0,1,50.45,76.45Zm4.31,26.42c-2-.7-.6-2.83-1.35-4.13a1.55,1.55,0,0,1-.05-.2,2.69,2.69,0,0,1,.91-3.3,10.62,10.62,0,0,0,1.57-1.62,4.79,4.79,0,0,0,.48-1.34c-.51.1-1.14,0-1.51.33-1.19.92-2.3,1.93-3.4,3-4.23,4-4.68,7.72-1.58,12.63.42.66.77,1.36,1.33.16,1-2.05,2.21-1.48,3.65-.53a64.18,64.18,0,0,0,6,3.59,10.31,10.31,0,0,0,3,.53c-.78-.68-1.58-1.34-2.35-2s-1.53-1.46-2.3-2.19c.88-.23,1.77-.47,2.65-.69,1.23-.3,3-.17,3.58-.94.9-1.28,1.41-1.4,2.54-.55a1.82,1.82,0,0,0,1.17.19c2.27-.22,4.52-.53,6.79-.71a9.66,9.66,0,0,1,2.14.3c-.3,1-.55,2-.9,2.94a6.29,6.29,0,0,1-.76,1.19c.57.06,1.3.37,1.69.13a71.94,71.94,0,0,0,8-5.31c2.2-1.81,2.32-4.65,1.75-7.23-.2-.91-1.61-1.69-2.63-2.2-.27-.13-1.2.9-1.73,1.5A11,11,0,0,0,82,98.44a1.88,1.88,0,0,0-.2,1.51c.8,1.31.22,1.95-1,2.28a12.8,12.8,0,0,1-2.83.49c-6.25.31-12.5.57-18.2.82A26.82,26.82,0,0,1,54.76,102.86ZM67.87,102c2.49.53,3.79-.65,4.54-2.84A27.14,27.14,0,0,1,74,96.09c.31-.62.53-1.28.79-1.93a10.22,10.22,0,0,0-2.31-.56,56.33,56.33,0,0,0-7.75.23c-1.32.17-3.08.88-3.66,1.9a3.25,3.25,0,0,0,1.26,4.65,53,53,0,0,0,5.4,2.19Zm42.19-25c.12-.7-.35-2.63,1.56-1.19,0,0,.51-.31.61-.55.27-.63.41-1.32.67-2a3.22,3.22,0,0,1,.57-.72c0,.15.12.3.17.46.1-.33.2-.65.3-1a120.79,120.79,0,0,0-13.56-45.56l-.46-.19c-3.84-1.47-7.76-2.73-11.59-4.21a6.81,6.81,0,0,1-2.56-1.92c-1.08-1.26-2.12-1.36-3.64-.82-2.65,1-5.4,1.45-8.2.38A15,15,0,0,0,71,19c-.48-.08-1.32,0-1.48.29-.83,1.54-1.85.84-2.77.31-1.61-.92-3.17-1.93-4.71-3-4.28-2.87-8.81-2.59-13.3-.85-4,1.55-4.58,5.37-4.93,9a3.53,3.53,0,0,1-2.43,3.31,51.69,51.69,0,0,0-9,5.2,32.06,32.06,0,0,0-6,6.25A20.71,20.71,0,0,0,22,53.22c.12,3.56.36,7.22-2.27,10.23-.31.36-.11,1.16-.19,1.75-.49,3.79,3.82,5.57,3.79,9.18a.21.21,0,0,0,.13.15c1.64.41,1.68,1.39,1.41,2.45l1.51.87v0a3.9,3.9,0,0,1,.12-1.09c.47.17,1.09.2,1.37.52.61.71.86,1.94,1.58,2.3,1.35.67,1.43,1.62,1.47,2.87a16.41,16.41,0,0,0,.53,4.89c.31.89,1.65,1.4,2.53,2.09A9,9,0,0,0,34,87.08c-1.8-7.58-.53-15.13.08-22.7.42-5.22.75-10.45,1.16-15.67.43-5.55,3.2-10,6.67-14.09,1.27-1.5,3.06-2.64,4-4.29,1.24-2.06,2.72-3.61,5-3,6,1.68,12.55.32,18.45,3.44,3.07,1.62,5.66,4.66,9.63,4.37.16,0,.34.22.5.34,4,3,8.14,5.83,11.4,9.66,1.7,2,3.84,3.54,4.76,6.34a138.19,138.19,0,0,0,5.78,14.31c2,4.26,3.71,8.4,2.92,13.31-.37,2.33,0,4.78.07,7.17a4.18,4.18,0,0,0,.27,1c.22-.32.42-.66.68-1,.5-.58,1.07-1.65,1.53-1.61,2.17.2,2.35-1.29,2.56-2.73C109.76,80.34,109.79,78.67,110.07,77Z"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("FullScreenQuote",{attrs:{calcBkg:t.calcBkg,quotes:t.QuoteList,name:t.SubjectName,link:t.Link}})},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.ef919dab70f4c887d9a3.js.map