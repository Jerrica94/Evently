(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){e.exports=a(62)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=(a(42),a(7)),o=a(8),s=a(10),u=a(9),d=a(11);function m(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function p(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(43);var v=function(e){return r.a.createElement("div",{className:"card titles shadow-lg p-4 mb-5 bg-white rounded dashCard"},r.a.createElement("h2",null,e.title),e.children)};a(44);var b=function(){return r.a.createElement("footer",{className:"footer text-center sticky-bottom pt-3"},r.a.createElement("span",null,"Evently \xa9 2020"))};a(45);var E=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:"listItem border border-dark rounded-pill"},r.a.createElement("a",{href:"#"},e.event),r.a.createElement("p",null,e.date)))},h=a(19),f=a(18),D=a.n(f),w=(a(49),a(29),Object(h.b)(D.a)),g=function(e){function t(){var e;Object(i.a)(this,t),e=Object(s.a)(this,Object(u.a)(t).call(this));var a=new Date,n=[{id:0,title:"All Day Event very long title",allDay:!0,start:new Date(2020,3,0),end:new Date(2020,3,1)},{id:1,title:"Long Event",start:new Date(2020,3,7),end:new Date(2020,3,10)},{id:2,title:"DTS STARTS",start:new Date(2020,2,13,0,0,0),end:new Date(2020,2,20,0,0,0)},{id:3,title:"DTS ENDS",start:new Date(2020,10,6,0,0,0),end:new Date(2020,10,13,0,0,0)},{id:4,title:"Some Event",start:new Date(2020,3,9,0,0,0),end:new Date(2020,3,10,0,0,0)},{id:5,title:"Conference",start:new Date(2020,3,11),end:new Date(2020,3,13),desc:"Big conference for important people"},{id:6,title:"Meeting",start:new Date(2020,3,12,10,30,0,0),end:new Date(2020,3,12,12,30,0,0),desc:"Pre-meeting meeting, to prepare for the meeting"},{id:7,title:"Lunch",start:new Date(2020,3,12,12,0,0,0),end:new Date(2020,3,12,13,0,0,0),desc:"Power lunch"},{id:8,title:"Meeting",start:new Date(2020,3,12,14,0,0,0),end:new Date(2020,3,12,15,0,0,0)},{id:9,title:"Happy Hour",start:new Date(2020,3,12,17,0,0,0),end:new Date(2020,3,12,17,30,0,0),desc:"Most important meal of the day"},{id:10,title:"Dinner",start:new Date(2020,3,12,20,0,0,0),end:new Date(2020,3,12,21,0,0,0)},{id:11,title:"Birthday Party",start:new Date(2020,3,13,7,0,0),end:new Date(2020,3,13,10,30,0)},{id:12,title:"Late Night Event",start:new Date(2020,3,17,19,30,0),end:new Date(2020,3,18,2,0,0)},{id:12.5,title:"Late Same Night Event",start:new Date(2020,3,17,19,30,0),end:new Date(2020,3,17,23,30,0)},{id:13,title:"Multi-day Event",start:new Date(2020,0,20,19,30,0),end:new Date(2020,0,22,2,0,0)},{id:14,title:"Today",start:new Date((new Date).setHours((new Date).getHours()-3)),end:new Date((new Date).setHours((new Date).getHours()+3))},{id:15,title:"Point in Time Event",start:a,end:a}];return e.state={name:"React",events:n},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"calContainer",style:{height:"500pt"}},r.a.createElement(h.a,{events:this.state.events,startAccessor:"start",endAccessor:"end",defaultDate:D()().toDate(),localizer:w})))}}]),t}(n.Component),y=[{event:"Dolphin Swim Practice",date:"February 1, 2020 at 6pm"},{event:"Red Cross Blood Drive",date:"February 29, 2020 at 2pm"},{event:"Block Party",date:"April 17, 2020 at 3pm"}],C=[{event:"Race for the Cure"},{event:"Community Yard Sale"},{event:"Father Daughter Dance"},{event:"CPR training"}],N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center dashboard"}," Dashboard"),r.a.createElement(m,null,r.a.createElement(p,{size:"6"},r.a.createElement(v,{title:"Your upcoming events:"},y.map((function(e){return r.a.createElement(E,{event:e.event,date:e.date})})))),r.a.createElement(p,{size:"6"},r.a.createElement(v,{title:"Events you may be interested in:"},C.map((function(e){return r.a.createElement(E,{event:e.event})}))))),r.a.createElement(m,null,r.a.createElement(p,{size:"12"},r.a.createElement(g,null)))),r.a.createElement(b,null))}}]),t}(n.Component);a(50);var j=function(e){return r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:e.link},e.text," ",r.a.createElement("span",{class:"sr-only"})))};a(51);var O=function(e){return r.a.createElement("button",{type:"button",class:"btn btn-outline-success bg-light mr-1",href:e.link},e.text)};a(52);var k=function(e){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-secondary"},e.children,r.a.createElement("a",{class:"navbar-brand landing-title",href:"/"},"Evently"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement(j,{link:"/features",text:"Features"})),r.a.createElement("span",{class:"navbar-text"},r.a.createElement(O,{link:"/signup",text:"Sign up"}))))};a(53);var x=function(e){return r.a.createElement("div",null,e.children)},S=a(33);a(54),a(55);var P=function(e){return console.log(e),r.a.createElement("div",{className:e.inline?"inline-auth-input-container":"auth-input-container"},r.a.createElement("label",{className:"auth-label"},e.cleanname),r.a.createElement("input",Object.assign({className:"auth-text-input"},e,{placeholder:e.cleanname})))},A=(n.Component,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(k,null))}}]),t}(n.Component));a(56);var F=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card title shadow-sm p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.event),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.location),r.a.createElement("p",{className:"card-text"},e.description),r.a.createElement("h4",null,r.a.createElement("strong",null,e.price)),r.a.createElement("button",{className:"btn btn-primary"},"Register"))))};a(57);var $=function(e){return r.a.createElement("div",{className:"block-example border border-dark borderStyle"},e.children,"   ")};a(58),a(59);var H=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading text-center "},e.heading))},T=[{event:"Dolphin Swim Practice",description:"Ages 7-10",date:"February 1, 2020 at 6pm",location:"Carrboro, NC",price:"$75"},{event:"Boys Youth basketball",description:"Ages 12-15",date:"2/1/20-5/1/20",location:"Chapel Hill YMCA",price:"$100"},{event:"Boys Youth basketball",description:"Ages 12-15",date:"2/1/20-5/1/20",location:"Chapel Hill YMCA",price:"$100"},{event:"Dolphin Swim Practice",description:"",date:"February 1, 2020 at 6pm",location:"Carrboro, NC",price:"$75"},{event:"Dolphin Swim Practice",description:"",date:"February 1, 2020 at 6pm",location:"Carrboro, NC",price:"$75"},{event:"Dolphin Swim Practice",description:"",date:"February 1, 2020 at 6pm",location:"Carrboro, NC",price:"$75"}],Y=[{event:"Dolphin Swim Practice",description:"Ages 7-10",date:"February 1, 2020 at 6pm",location:"Carrboro, NC",price:"$75"},{event:"Boys Youth basketball",description:"Ages 12-15",date:"2/1/20-5/1/20",location:"Chapel Hill YMCA",price:"$100"},{event:"Boys Youth basketball",description:"Ages 12-15",date:"2/1/20-5/1/20",location:"Chapel Hill YMCA",price:"$100"},{event:"Dolphin Swim Practice",description:"",date:"February 1, 2020 at 6pm",location:"Carrboro, NC",price:"$75"},{event:"Dolphin Swim Practice",description:"",date:"February 1, 2020 at 6pm",location:"Carrboro, NC",price:"$75"},{event:"Dolphin Swim Practice",description:"",date:"February 1, 2020 at 6pm",location:"Carrboro, NC",price:"$75"}],B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement($,null,r.a.createElement(H,{heading:"Programs"}),r.a.createElement(m,null,T.map((function(e){return r.a.createElement(F,{event:e.event,description:e.description,date:e.date,location:e.location,price:e.price})})))),r.a.createElement($,null,r.a.createElement(H,{heading:"Events"}),r.a.createElement(m,null,Y.map((function(e){return r.a.createElement(F,{event:e.event,description:e.description,date:e.date,location:e.location,price:e.price})})))),r.a.createElement($,null,r.a.createElement(H,{heading:" Fun Calendar"}),r.a.createElement(m,null,r.a.createElement(p,{size:"12"},r.a.createElement(g,null))))),r.a.createElement(b,null))}}]),t}(n.Component),M=Object(h.b)(D.a),z=(n.Component,a(34)),R=a(17);var L=function(){return r.a.createElement(z.a,null,r.a.createElement("div",null,r.a.createElement(R.a,{exact:!0,path:"/"},r.a.createElement(A,null)),r.a.createElement(R.a,{exact:!0,path:"/dashboard"},r.a.createElement(N,null)),r.a.createElement(R.a,{exact:!0,path:"/funtivity"},r.a.createElement(B,null))))};c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e191a889.chunk.js.map