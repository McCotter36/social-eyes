(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},202:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),s=n.n(r),o=n(53),c=n.n(o),i=(n(200),n(24)),l=n.n(i),u=n(49),h=n(21),d=n(29),f=n(22),p=n(23),m=(n(202),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("h3",{className:"summary",children:t.summary}),Object(a.jsx)("p",{className:"location",children:t.location}),Object(a.jsx)("p",{className:"start-time",children:t.start.dateTime}),!e&&Object(a.jsx)("button",{className:"details-button",onClick:this.handleShowDetails,children:"Show Details"}),e&&Object(a.jsx)("button",{className:"details-button",onClick:this.handleShowDetails,children:"Hide Details"}),e&&Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("p",{className:"event-description",children:t.description}),Object(a.jsxs)("p",{className:"event-start",children:["Begins: ",t.start.dateTime," "]}),Object(a.jsxs)("p",{className:"event-end",children:["Ends: ",t.end.dateTime," "]}),Object(a.jsxs)("p",{className:"organizer-name",children:["Organizer: ",t.organizer.displayName]}),Object(a.jsxs)("p",{className:"organizer-contact",children:["Contact: ",t.organizer.email]})]})]})}}]),n}(r.Component)),v=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"event-list",children:e.map((function(e){return Object(a.jsx)("li",{className:"event-li",children:Object(a.jsx)(m,{event:e})},e.id)}))})}}]),n}(r.Component),b=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),j=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).color="teal",a}return n}(b),g=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(b),O=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(b),w=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(j,{className:"alert",text:this.state.infoText}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{className:"city-search-label",children:"City Search"}),Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),x=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:20,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1||n>20?e.setState({infoText:"Please choose a number between 1 and 20"}):e.setState({infoText:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"numberOfEvents",children:[Object(a.jsx)(g,{className:"alert",text:this.state.infoText}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{className:"number-of-events-label",children:"Number of Events"}),Object(a.jsx)("input",{type:"number",className:"number-input",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})}}]),n}(r.Component),y=n(28),k=n(357),S=n(358),N=n(178),T=n(91),E=function(e){var t=e.events,n=Object(r.useState)([]),s=Object(y.a)(n,2),o=s[0],c=s[1];Object(r.useEffect)((function(){c((function(){return i()}))}),[t]);var i=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},l=["#0088FE","#00C49F","#FFBB28","#FF8042","#85D2DB"];return Object(a.jsx)(k.a,{height:400,children:Object(a.jsx)(S.a,{width:400,height:400,children:Object(a.jsx)(N.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(a.jsx)(T.a,{fill:l[t%l.length],name:e.name},"cell-".concat(t))}))})})})},C=n(354),D=n(355),A=n(183),Z=n(184),R=n(97),W=n(188);var I=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Welcome to Social Eyes"}),Object(a.jsx)("h4",{children:"An App created to show upcoming events around the world for full-stack developers"}),Object(a.jsx)("div",{className:"button_cont",align:"center",children:Object(a.jsxs)("div",{class:"google-btn",children:[Object(a.jsx)("div",{class:"google-icon-wrapper",children:Object(a.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/G\noogle_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(a.jsx)("a",{href:"THE URL RETURNED FROM YOUR getAuth\nENDPOINT HERE",rel:"nofollow noopener",class:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with google"})})]})}),Object(a.jsx)("a",{href:"https://glenzy.github.io/meet/privacy.html",rel:"nofollow noopener",className:"link",children:"Privacy policy"})]})},L=n(187),U=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],B=n(118),J=n.n(B),M=n(75),q=n.n(M),z=function(e){var t=e.map((function(e){return e.location}));return Object(L.a)(new Set(t))},F=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),navigator.onLine||window.location.href.startsWith("http://localhost")){e.next=5;break}return t=localStorage.getItem("lastEvents"),q.a.done(),e.abrupt("return",JSON.parse(t).events);case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return q.a.done(),e.abrupt("return",U);case 8:return e.next=10,H();case 10:if(!(n=e.sent)){e.next=20;break}return P(),a="https://8cck9ad2v0.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,J.a.get(a);case 16:return(r=e.sent).data&&(s=z(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),q.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:if(t=e.sent,e.t0=t,!e.t0){e.next=8;break}return e.next=7,F(t);case 7:e.t0=e.sent;case 8:if(n=e.t0,t&&n){e.next=23;break}return e.next=12,localStorage.removeItem("access_token");case 12:return a=new URLSearchParams(window.location.search),e.next=15,a.get("code");case 15:if(r=e.sent){e.next=22;break}return e.next=19,J.a.get("https://8cck9ad2v0.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 19:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 22:return e.abrupt("return",r&&Y(r));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Y=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(),n=encodeURIComponent(t),e.next=4,fetch("https://8cck9ad2v0.execute-api.us-east-2.amazonaws.com/dev/api/token/".concat(n)+n).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=(n(349),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:20,selectedLocation:"all",alertText:"",tokenCheck:!1},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e.updateEvents=function(t,n){var a=e.tokenCheck,r=a.selectedLocation,s=a.numberOfEvents;t?_().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,s);e.setState({events:a,selectedLocation:t})})):_().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a})}))},e.offlineAlert=function(){!1===navigator.onLine?e.setState({alertText:"You are not connected to a network. Please connect to update the list of upcoming events."}):e.setState({alertText:""})},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,F(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&!0===this.mounted&&!1===n&&(this.setState({tokenCheck:!0}),this.updateEvents());case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state;e.locations,e.numberOfEvents,e.events;return!1===e.tokenCheck?Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(I,{})}):Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"Selections",children:[Object(a.jsx)(O,{className:"alert",text:this.state.alertText}),Object(a.jsx)(w,{className:"CitySearch",locations:this.state.locations,updateEvents:this.updateEvents}),Object(a.jsx)(x,{className:"NumberOfEvents",numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents})]}),Object(a.jsx)("h4",{children:"Events in each city"}),Object(a.jsxs)("div",{className:"data-vis-wrapper",children:[Object(a.jsx)(E,{locations:this.state.locations,events:this.state.events}),Object(a.jsx)(k.a,{height:400,children:Object(a.jsxs)(C.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(a.jsx)(D.a,{}),Object(a.jsx)(A.a,{type:"category",dataKey:"city",name:"city"}),Object(a.jsx)(Z.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(a.jsx)(R.a,{cursor:{strokeDasharray:"3 3"}}),Object(a.jsx)(W.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(a.jsx)(v,{className:"EventList",events:this.state.events})]})}}]),n}(r.Component)),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=n(185);c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/social-eyes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/social-eyes","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}(),X.config("6c4c9fc57e354ab382c9074b9efb480f").install()}},[[350,1,2]]]);
//# sourceMappingURL=main.1c2c6016.chunk.js.map