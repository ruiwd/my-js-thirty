(this["webpackJsonpmy-js-expo"]=this["webpackJsonpmy-js-expo"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/polaroidDrumKit.68910ce1.png"},19:function(e,a,t){e.exports=t.p+"static/media/polaroidClock.97378a3d.png"},20:function(e,a,t){e.exports=t.p+"static/media/boom.550be808.wav"},21:function(e,a,t){e.exports=t.p+"static/media/clap.a6e86dd7.wav"},22:function(e,a,t){e.exports=t.p+"static/media/hihat.4ba39e07.wav"},23:function(e,a,t){e.exports=t.p+"static/media/kick.4dd58595.wav"},24:function(e,a,t){e.exports=t.p+"static/media/openhat.a62db465.wav"},25:function(e,a,t){e.exports=t.p+"static/media/ride.b0d70ec5.wav"},26:function(e,a,t){e.exports=t.p+"static/media/snare.80c4129b.wav"},27:function(e,a,t){e.exports=t.p+"static/media/tink.75f727ec.wav"},28:function(e,a,t){e.exports=t.p+"static/media/tom.572ed39d.wav"},32:function(e,a,t){e.exports=t(44)},37:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),s=(t(37),t(15)),o=t(16),m=t(31),i=t(29),d=t(8),u=t(1);var E=function(e){return c.a.createElement("div",{className:"polaroidSet"},c.a.createElement(d.b,{to:"/".concat(e.project)},c.a.createElement("img",{className:"polaroid",src:e.imageSrc,alt:"Polaroid: Snapshot of ".concat(e.project," project")})),c.a.createElement("div",{className:"postIt"},c.a.createElement("p",null,e.description)))},v=t(18),p=t.n(v),y=t(19),k=t.n(y);var f=function(){return Object(n.useEffect)((function(){document.querySelectorAll(".polaroid, .postIt").forEach((function(e){var a=Math.floor(10*Math.random());e.style.transform="rotateZ(".concat(a-5,"deg) \n        translateY(").concat(a/7,"rem)")}))})),c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"scrollDiv"},c.a.createElement(E,{project:"DrumKit",imageSrc:p.a,description:"Drums too hard to learn? Here's a shortcut!"}),c.a.createElement(E,{project:"Clock",imageSrc:k.a,description:"Just in case you needed another clock."})))},h=t(20),N=t.n(h),b=t(21),g=t.n(b),w=t(22),x=t.n(w),j=t(23),S=t.n(j),C=t(24),O=t.n(C),D=t(25),q=t.n(D),K=t(26),L=t.n(K),M=t(27),J=t.n(M),Z=t(28),A=t.n(Z);var I=function(){return Object(n.useEffect)((function(){document.querySelectorAll(".label").forEach((function(e){var a=Math.floor(10*Math.random());e.style.transform="rotateZ(".concat(2*a-7,"deg) \n        translateY(").concat(a/7,"rem)")}));var e=function(e){var a=document.querySelector("audio[data-key='".concat(e,"']"));null!==a&&(a.currentTime=0,a.play());var t=document.querySelector(".key[data-key='".concat(e,"']"));null!==t&&(t.classList.add("pressed"),t.addEventListener("transitionend",(function(){t.classList.remove("pressed")})))};document.addEventListener("click",(function(a){var t=a.target.getAttribute("data-key");e(t)})),document.addEventListener("keydown",(function(a){var t=a.keyCode;e(t)}))}),[]),c.a.createElement("div",{className:"drumKit"},c.a.createElement("h2",null,"Just a Simple Drum Kit"),c.a.createElement("div",{className:"sounds"},c.a.createElement("audio",{"data-key":"65",src:N.a}),c.a.createElement("audio",{"data-key":"83",src:g.a}),c.a.createElement("audio",{"data-key":"68",src:x.a}),c.a.createElement("audio",{"data-key":"70",src:S.a}),c.a.createElement("audio",{"data-key":"71",src:O.a}),c.a.createElement("audio",{"data-key":"72",src:q.a}),c.a.createElement("audio",{"data-key":"74",src:L.a}),c.a.createElement("audio",{"data-key":"75",src:J.a}),c.a.createElement("audio",{"data-key":"76",src:A.a})),c.a.createElement("div",{className:"keys"},c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"65"},c.a.createElement("p",null,"A")),c.a.createElement("div",{className:"label"},"boom")),c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"83"},c.a.createElement("p",null,"S")),c.a.createElement("div",{className:"label"},"clap")),c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"68"},c.a.createElement("p",null,"D")),c.a.createElement("div",{className:"label"},"hi hat")),c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"70"},c.a.createElement("p",null,"F")),c.a.createElement("div",{className:"label"},"kick")),c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"71"},c.a.createElement("p",null,"G")),c.a.createElement("div",{className:"label"},"open hat")),c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"72"},c.a.createElement("p",null,"H")),c.a.createElement("div",{className:"label"},"ride")),c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"74"},c.a.createElement("p",null,"J")),c.a.createElement("div",{className:"label"},"snare")),c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"75"},c.a.createElement("p",null,"K")),c.a.createElement("div",{className:"label"},"tink")),c.a.createElement("div",{className:"keyContainer"},c.a.createElement("div",{className:"key","data-key":"76"},c.a.createElement("p",null,"L")),c.a.createElement("div",{className:"label"},"tom"))))},H=t(30);var X=function(){var e=Object(n.useState)({hours:"0",minutes:"0",seconds:"0"}),a=Object(H.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){setInterval((function(){var e=new Date,a=e.getSeconds(),t=e.getMinutes(),n=e.getHours();a<10&&(a="0"+a),t<10&&(t="0"+t),n<10&&(n="0"+n),r({hours:n,minutes:t,seconds:a})}),1e3)}),[]),Object(n.useEffect)((function(){document.querySelector(".hand.second").style.transform="translateX(-50%) rotateZ(".concat(t.seconds/60*360,"deg)"),document.querySelector(".hand.minute").style.transform="translateX(-50%) rotateZ(".concat(t.minutes/60*360,"deg)"),document.querySelector(".hand.hour").style.transform="translateX(-50%) rotateZ(".concat(t.hours/12*360,"deg)")})),c.a.createElement("div",{className:"clock"},c.a.createElement("div",{className:"clockFace"},c.a.createElement("div",{className:"knob"}),c.a.createElement("div",{className:"screen"},"".concat(t.hours,":").concat(t.minutes,":").concat(t.seconds)),c.a.createElement("div",{className:"hands"},c.a.createElement("div",{className:"hand hour"}),c.a.createElement("div",{className:"hand minute"}),c.a.createElement("div",{className:"hand second"})),c.a.createElement("div",{className:"numbers"},c.a.createElement("h3",{className:"number twelve"},"12"),c.a.createElement("h3",{className:"number three"},"3"),c.a.createElement("h3",{className:"number six"},"6"),c.a.createElement("h3",{className:"number nine"},"9"))))},B=(t(43),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/my-js-expo",exact:!0,component:f}),c.a.createElement(u.a,{path:"/DrumKit",exact:!0,component:I}),c.a.createElement(u.a,{path:"/Clock",exact:!0,component:X})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.024ad12d.chunk.js.map