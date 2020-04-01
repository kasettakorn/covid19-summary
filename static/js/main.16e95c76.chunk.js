(this["webpackJsonpcovid19-react"]=this["webpackJsonpcovid19-react"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var A,n,c,r,l,o,m,s,i=a(0),g=a.n(i),d=a(29),w=a.n(d),B=(a(47),a(105)),p=(a(48),a(3)),E=a.n(p),h=a(14),f=a(17),C=a(104),u=a(106),D=a(107),O=a(30),q=a.n(O),M=a(31),x=a.n(M),Z=a(32),v=a.n(Z),W=a(33),U=a.n(W),H=a(34),P=a.n(H),z=(a(51),0),F="https://covid19.th-stat.com/api/open/cases",j=function(e){var t=Object(i.useState)(null),a=Object(f.a)(t,1)[0],g=Object(i.useState)(!0),d=Object(f.a)(g,2),w=d[0],B=d[1];function p(){return(p=Object(h.a)(E.a.mark((function t(){var a,m;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return m=t.sent,n=m.Deaths,c=m.Recovered,A=m.Confirmed,r=m.NewDeaths,l=m.NewConfirmed,o=m.NewRecovered,t.next=14,C();case 14:B(!1);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return u.apply(this,arguments)}function u(){return(u=Object(h.a)(E.a.mark((function e(){var t,a,A,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,A=P.a.groupBy(a.Data,(function(e){return e.Province})),s=a.Data[0],e.t0=E.a.keys(A);case 9:if((e.t1=e.t0()).done){e.next=16;break}if("\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"!==(n=e.t1.value)){e.next=13;break}return e.abrupt("break",16);case 13:A[n].length>z&&(z=A[n].length,m=n),e.next=9;break;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),{loading:w,datas:a}};function V(){return j("https://covid19.th-stat.com/api/open/today").loading?g.a.createElement("center",{style:{marginTop:"150px"}},g.a.createElement(C.a,{style:{marginTop:"150px"},tip:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e14\u0e36\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25..."})):g.a.createElement("div",{style:{marginTop:"60px"}},g.a.createElement(u.a,{gutter:48,align:"middle",justify:"center",style:{textAlign:"center",marginTop:"50px"}},g.a.createElement(D.a,{span:48},g.a.createElement("div",{className:"confirmedCard"},g.a.createElement("h5",{id:"confirmedLabel"},g.a.createElement("span",null,g.a.createElement("img",{src:q.a,width:80}))," \u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d"),g.a.createElement("h1",{id:"confirmedValueLabel"},A),g.a.createElement("p",{style:{marginTop:"100px"},id:"confirmedLabel"}," (\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 = ",l," \u0e04\u0e19)"))),g.a.createElement(D.a,{span:48},g.a.createElement(D.a,{span:16},g.a.createElement("div",{className:"recoveredCard"},g.a.createElement("h5",{id:"recoveredLabel"},g.a.createElement("span",null,g.a.createElement("img",{src:x.a,width:60}))," \u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22"),g.a.createElement("h1",{id:"recoveredValueLabel"},c),g.a.createElement("p",{style:{marginTop:"18px"},id:"confirmedLabel"}," (\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 = ",o," \u0e04\u0e19)"))),g.a.createElement(D.a,{span:16},g.a.createElement("div",{className:"deathsCard",style:{marginTop:"10px"}},g.a.createElement("h5",{id:"deathsLabel"},g.a.createElement("span",null,g.a.createElement("img",{src:v.a,width:60}))," \u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15"),g.a.createElement("h1",{id:"deathsValueLabel"},n),g.a.createElement("p",{style:{marginTop:"18px"},id:"confirmedLabel"}," (\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 = ",r," \u0e04\u0e19)"))))),g.a.createElement(u.a,{gutter:48,align:"middle",justify:"center",style:{textAlign:"center",marginTop:"50px"}},g.a.createElement(D.a,{span:48},g.a.createElement("div",{className:"provinceCard"},g.a.createElement("h5",{id:"recoveredLabel"},g.a.createElement("span",null,g.a.createElement("img",{src:U.a,width:100})),"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14\u0e17\u0e35\u0e48\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e21\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14"),g.a.createElement("h5",{id:"provinceLabel"},m),g.a.createElement("p",{style:{marginTop:"50px"},id:"confirmedLabel"}," (\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 = ",z," \u0e04\u0e19)"),g.a.createElement("p",{style:{fontSize:"20px",color:"white"}},"** \u0e40\u0e09\u0e1e\u0e32\u0e30\u0e1c\u0e39\u0e49\u0e17\u0e35\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e44\u0e14\u0e49\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 **"))),g.a.createElement(D.a,{span:48},g.a.createElement(D.a,{span:16},g.a.createElement("div",{className:"latestDetailCard"},g.a.createElement("h5",{id:"confirmedLabel"},g.a.createElement("span",{style:{fontSize:"50px"}},"\ud83e\udda0"),"  \u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14\u0e17\u0e35\u0e48\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14"),g.a.createElement("h5",{style:{marginTop:"90px"},id:"provinceLabel"},s.Province))))))}var L=a(38),X=a.n(L),R=B.a.Header,Q=(B.a.Content,B.a.Footer);function I(){return g.a.createElement("div",null,g.a.createElement(B.a,null,g.a.createElement(R,{style:{height:"100%",paddingBottom:"10px",backgroundColor:"#485461",backgroundImage:"linear-gradient(315deg, #485461 0%, #28313b 74%)"}},g.a.createElement("h1",null," \ud83e\udda0 \ud83c\uddf9\ud83c\udded Coronavirus (COVID-19) \ud83e\udda0"),g.a.createElement("h3",null," Realtime Data from ",g.a.createElement("span",null,g.a.createElement("img",{src:X.a,width:250}))),g.a.createElement(V,null)),g.a.createElement(Q,null,g.a.createElement("center",null,g.a.createElement("div",null,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e23\u0e48\u0e27\u0e21\u0e21\u0e37\u0e2d\u0e01\u0e31\u0e19\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07 \u0e01\u0e23\u0e21\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e42\u0e23\u0e04 \u0e01\u0e23\u0e30\u0e17\u0e23\u0e27\u0e07\u0e2a\u0e32\u0e18\u0e32\u0e23\u0e13\u0e2a\u0e38\u0e02"),g.a.createElement("div",null,"Icons made by ",g.a.createElement("a",{href:"https://www.flaticon.com/authors/icongeek26",title:"Icongeek26"},"Icongeek26 "),"from ",g.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")),g.a.createElement("div",null,"Develop by Ronnakorn Hompoa \xa92020")))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.render(g.a.createElement(g.a.StrictMode,null,g.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){e.exports=a.p+"static/media/contagious-illness.60816b3c.png"},31:function(e,t,a){e.exports=a.p+"static/media/patient.69a16a4a.png"},32:function(e,t,a){e.exports=a.p+"static/media/tombstone.7280cca4.png"},33:function(e,t){e.exports="data:image/png;base64,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"},38:function(e,t,a){e.exports=a.p+"static/media/logoDDC.3be875e0.png"},42:function(e,t,a){e.exports=a(102)},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.16e95c76.chunk.js.map