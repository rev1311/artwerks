(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"id":1,"name":"unmykx","img":"./assets/g23d.png","alt":"","title":"Untitled","desc":""},{"id":2,"name":"David Ho","img":"./assets/dh1.jpg","alt":"","title":"Contemplations 6","desc":""},{"id":3,"name":"Chris Mars","img":"./assets/chrismarsDayforNight.jpg","alt":"","title":"Day for Night","desc":""},{"id":4,"name":"Brom","img":"./assets/BromColeHorse.jpg","alt":"","title":"Long Horse","desc":""},{"id":5,"name":"Alessandro Bavari","img":"./assets/alessandrobavariCornucopa.jpg","alt":"","title":"Cornucopia","desc":""},{"id":6,"name":"Daniel Martin Diaz","img":"./assets/selfawaresystem.jpg","alt":"","title":"Self-aware System","desc":""},{"id":7,"name":"David Ho","img":"./assets/dh2.jpg","alt":"","title":"Looking Inward","desc":""},{"id":8,"name":"Daniel Martin Diaz","img":"./assets/quantum.jpg","alt":"","title":"Quantum Conciousness","desc":""},{"id":9,"name":"Daniel Martin Diaz","img":"./assets/Atomic_Mystery1.jpg","alt":"","title":"Atomic Mystery","desc":""},{"id":10,"name":"Brom","img":"./assets/BromYevabog.jpg","alt":"","title":"Yevabog","desc":""},{"id":11,"name":"Brom","img":"./assets/BromVeles.jpg","alt":"","title":"Veles","desc":""},{"id":12,"name":"David Ho","img":"./assets/dh3.jpg","alt":"","title":"Perhaps Man Created God","desc":""},{"id":13,"name":"Chris Mars","img":"./assets/chrismars1.jpg","alt":"","title":"Hanford #12","desc":""},{"id":14,"name":"Brom","img":"./assets/BromHorse.jpg","alt":"","title":"The Night Mare","desc":""},{"id":15,"name":"Brom","img":"./assets/BromWitchHorn.jpg","alt":"","title":"WitchHorn","desc":""},{"id":16,"name":"Brom","img":"./assets/BromPoisonIvyWeb2.jpg","alt":"","title":"Poison Ivy","desc":""},{"id":17,"name":"Maggie Taylor","img":"./assets/Oh-happy-day_2009_6.jpg","alt":"","title":"Oh, Happy Day!","desc":""},{"id":18,"name":"Maggie Taylor","img":"./assets/Disappearing-witness_2009_7.jpg","alt":"","title":"Disappearing Witness","desc":""},{"id":19,"name":"Maggie Taylor","img":"./assets/The-beacon_2009_10.jpg","alt":"","title":"The Beacon","desc":""},{"id":20,"name":"Maggie Taylor","img":"./assets/Only-on-Thursdays.jpg","alt":"","title":"Only on Thursdays","desc":""},{"id":21,"name":"Maggie Taylor","img":"./assets/Contrariwise.jpg","alt":"","title":"Contrariwise","desc":""}]')},29:function(e,a,t){e.exports=t(42)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(23),l=t.n(r),s=(t(34),t(13)),o=(t(35),t(7)),c=t(8),m=t(10),d=t(9),u=t(11),p=t(43),g=t(44),h=t(45),f=t(47),E=(t(36),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(g.a,null,i.a.createElement(h.a,{sm:8,md:10,lg:10},i.a.createElement("div",{className:"loginwindow"},i.a.createElement("div",{className:"form__group field loginwindow"},i.a.createElement("input",{type:"input",className:"form__field",placeholder:"Name",name:"name",id:"name",required:!0,autocomplete:"off"}),i.a.createElement("label",{for:"name",className:"form__label"},"username")),i.a.createElement("div",{className:"form__group field loginwindow"},i.a.createElement("input",{type:"password",className:"form__field",placeholder:"Password",name:"password",id:"password",required:!0,autocomplete:"off"}),i.a.createElement("label",{for:"password",className:"form__label"},"password")),i.a.createElement("div",{className:"btn"},i.a.createElement(s.b,{to:"/Main"},i.a.createElement(f.a,{variant:"outline-info"},"Login")),i.a.createElement(s.b,{to:"/Main"},i.a.createElement(f.a,{variant:"outline-info"},"Join")))))))}}]),a}(n.Component)),y=t(16),j=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={id:t.props.id,seeds:y},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(g.a,null,i.a.createElement(h.a,{md:2},i.a.createElement("div",null)),i.a.createElement(h.a,{md:8},i.a.createElement("div",{className:"artist"},i.a.createElement("h1",{style:{color:"#fff"}},"Artist test ",this.state.id))),i.a.createElement(h.a,{md:2},i.a.createElement("div",null))))}}]),a}(n.Component),b=t(28),v=t(46),O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={id:0,name:"",img:"",alt:"",title:"",desc:"",mainseeds:y},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=Object(b.a)(this.state.mainseeds);return e.sort((function(){return Math.random()-.5})),e.map((function(e){return i.a.createElement("div",null,i.a.createElement(s.b,{to:"/Artist/"+e.id},i.a.createElement(v.a,{className:"bg-dark text-white",key:e.id,style:{margin:"20px",fontFamily:"Cinzel",boxShadow:"-1px 0 5px 0 rgba(0, 0, 0, .7)"}},i.a.createElement(v.a.Img,{src:e.img,alt:e.alt,style:{}}),i.a.createElement(v.a.ImgOverlay,null,i.a.createElement(v.a.Title,{style:{margin:"-2px"}},e.title),i.a.createElement(v.a.Title,null,"Artist: ",e.name)))))}))}}]),a}(n.Component),w=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(g.a,null,i.a.createElement(h.a,{md:3},i.a.createElement("div",null)),i.a.createElement(h.a,{md:6},i.a.createElement("div",{className:"artistcard"},i.a.createElement(O,null))),i.a.createElement(h.a,{md:3},i.a.createElement("div",null))))}}]),a}(n.Component),M=t(14),_=function(){return i.a.createElement(s.a,null,i.a.createElement(M.c,null,i.a.createElement(M.a,{exact:!0,path:"/",component:E}),i.a.createElement(M.a,{path:"/Main",component:w}),i.a.createElement(M.a,{path:"/Artist/:handle",component:j})))},N=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"foot"},i.a.createElement("img",{src:"./assets/logo2.png",alt:"",style:{position:"fixed",center:"0",bottom:"0"}}))}}]),a}(n.Component);var B=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(_,null)),i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.038c3d5c.chunk.js.map