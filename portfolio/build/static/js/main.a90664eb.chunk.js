(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/parking-garage.91f4a097.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/paper.a9eed18b.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/profilepic.34b05bde.png"},52:function(e,t,a){e.exports=a(86)},57:function(e,t,a){},58:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),s=a.n(r),i=(a(57),a(9)),c=a(10),o=a(12),m=a(11),u=a(19),d=a(15),h=a(21),p=a(20),v=a(51),E=(a(58),a(42)),f=a(27);var b=function(){return l.a.createElement("footer",null,l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"border-top justify-content-between p-3"},l.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Elihu Diaz"),l.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Elihu Diaz"))))};var k=function(e){return l.a.createElement("div",{className:"e-card-info"},l.a.createElement("p",{className:"e-card-title"},e.title),l.a.createElement("p",{className:"e-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"e-card-link"},"View Code"))};var g=function(e){return l.a.createElement("div",{className:"root"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"imgBx"},l.a.createElement("img",{src:e.item.imgSrc})),l.a.createElement("div",{className:"layer layer1"}),l.a.createElement("div",{className:"layer layer2"}),l.a.createElement("div",{className:"contentBx"},l.a.createElement("div",null,l.a.createElement(k,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))))),l.a.createElement("div",{className:"mobile-display-details"},l.a.createElement(k,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})))},N=a(43),y=a.n(N),w=a(44),S=a.n(w),x=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).makeItems=function(e){return e.map((function(e){return l.a.createElement(g,{item:e})}))},n.state={items:[{id:0,title:"University Parking",subTitle:"A mobile application for students that keeps track of parking garages at their universities in order to help them decide where to park. \n\nThis project uses Google's Cloud Firestore service as the backend architecture along with the React Native Framework for the frontend user interface.",imgSrc:y.a,link:"https://github.com/elihudiaz1/react-parking",selected:!1},{id:1,title:"Portfolio Website",subTitle:"This website was built with a backend server that uses Node.js + Express for REST APIs and a front-end side that uses the React Framework with React Router & Axios. The 'Contact' page implements the SendGrid API for sending emails seamlessly to the host. Feel free to let me know what you think, just click on the Contact tab in the navigation bar!",imgSrc:S.a,link:"https://github.com/elihudiaz1/React-Portfolio-Website",selected:!1}]},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"carousel-container"},this.makeItems(this.state.items))}}]),a}(l.a.Component),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("text").getElementsByTagName("span"),t=0;setInterval((function(){e[t].style.display="none",t=(t+1)%e.length,e[t].style.display="initial"}),1500)}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-page-content"},l.a.createElement("h2",{id:"text",className:"rotator"},"Be",l.a.createElement("div",{className:"rotating-words"},l.a.createElement("span",{className:"rotator-word",style:{display:"initial"}}," Determined"),l.a.createElement("span",{className:"rotator-word"}," Creative"),l.a.createElement("span",{className:"rotator-word"}," Focused"),l.a.createElement("span",{className:"rotator-word"}," Unique"),l.a.createElement("span",{className:"rotator-word"}," Ambitious"),l.a.createElement("span",{className:"rotator-word"}," Awesome"))),l.a.createElement(x,null))}}]),a}(l.a.Component),C="diazelihu27@gmail.com",O="786-479-4494",D="https://www.linkedin.com/in/elihu-diaz/",I="https://github.com/elihudiaz1",T=[{institution:"Florida State University",achievement:"B.S. in Chemistry / Minor in Computer Science",dateAchieved:"12-2019"},{institution:"Coral Gables Senior Highschool",achievement:"International Baccalaureate Diploma (IB)",dateAchieved:"05-2015"}],A=[{company:"CJIS GROUP LLC",role:"Research Analyst",dateHired:"03-2020",endDate:"present"},{company:"Florida State University College of Fine Arts",role:"Web Developer Intern",dateHired:"01-2019",endDate:"12-2019"}],B=[{language:"HTML",value:"95%"},{language:"CSS",value:"80%"},{language:"Javascript",value:"75%"},{language:"C/C++",value:"90%"},{language:"C#",value:"70%"},{language:"Python",value:"80%"}],P=[{framework:"React Native",value:"85%"},{framework:"React",value:"75%"}],F=a(45),R=a.n(F);var G=function(e){var t=e.title,a=e.children;return l.a.createElement("section",null,l.a.createElement("h3",null,t),l.a.createElement("div",{className:"header-content"},a))};var H=function(e){var t=e.label,a=e.value;return l.a.createElement("div",{className:"info-item"},l.a.createElement("label",null,t),l.a.createElement("span",null,a))};var M=function(e){var t=e.company,a=e.role,n=e.dateHired,r=e.endDate;return l.a.createElement("li",null,l.a.createElement("span",null,n," - ",r),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,a)," - ",t)))};var z=function(e){var t=e.dateAchieved,a=e.achievement,n=e.institution;return l.a.createElement("li",null,l.a.createElement("span",null,t),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",{color:"red"},a)," - ",n)))};var L=function(e){var t=e.name,a=e.value;return l.a.createElement("div",{className:"skillbar-container"},l.a.createElement("div",{className:"skills"},l.a.createElement("span",{className:"Name"},t),l.a.createElement("div",{className:"percent"},l.a.createElement("div",{className:"progress",style:{width:a}})),l.a.createElement("span",{className:"Value"},a)))};var W=function(e){return l.a.createElement("div",{className:"about-container"},l.a.createElement("section",{className:"column-left"},l.a.createElement("div",{className:"imgBx"},l.a.createElement("img",{src:R.a})),l.a.createElement(G,{title:"Info"},l.a.createElement(H,{label:"Email",value:C}),l.a.createElement(H,{label:"Phone",value:O}),l.a.createElement(H,{label:"LinkedIn",value:D}),l.a.createElement(H,{label:"Github",value:I}))),l.a.createElement("section",{className:"column-left"},l.a.createElement(G,{title:"About"},l.a.createElement("p",null,"As a first-generation college graduate, I realize the value of collaboration, education, and discipline. My love for programming taught me that I require a career that challenges me daily, providing an opportunity to expand my knowledge and to problem solve within a team of like-minded individuals.")),l.a.createElement(G,{title:"Education"},T.map((function(e,t){return l.a.createElement(z,{key:"ed-".concat(t),institution:e.institution,achievement:e.achievement,dateAchieved:e.dateAchieved})}))),l.a.createElement(G,{title:"Experience"},A.map((function(e,t){return l.a.createElement(M,{key:"ed-".concat(t),company:e.company,role:e.role,dateHired:e.dateHired,endDate:e.endDate})})))),l.a.createElement("section",{className:"column-left"},l.a.createElement(G,{title:"Languages"},B.map((function(e,t){return l.a.createElement(L,{key:"ed-".concat(t),name:e.language,value:e.value})}))),l.a.createElement(G,{title:"Frameworks"},P.map((function(e,t){return l.a.createElement(L,{key:"ed-".concat(t),name:e.framework,value:e.value})})))))},q=a(46),U=a(28),J=a.n(U),_=a(47),K=a(48),V=a.n(K),$=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).callBackendAPI=Object(_.a)(J.a.mark((function e(){var t,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/express_backend");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),n.handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(q.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0,emailSent:!1}),V.a.post("http://localhost:5000/express_backend/email",n.state).then((function(e){e.data.success?n.setState({name:"",subject:"",message:"",disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",subject:"",message:"",disabled:!1,emailSent:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.callBackendAPI().then((function(t){return e.setState({data:t.express})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"contact-page-container"},l.a.createElement("h1",null,"Let's talk"),l.a.createElement("form",{id:"contact-form",className:"form-body",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-container"},l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,required:"required"}),l.a.createElement("span",{className:"text"},"Full Name"),l.a.createElement("span",{className:"line"})))),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{type:"text",name:"subject",value:this.state.subject,onChange:this.handleChange,required:"required"}),l.a.createElement("span",{className:"text"},"Email"),l.a.createElement("span",{className:"line"})))),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox textarea"},l.a.createElement("textarea",{name:"message",value:this.state.message,onChange:this.handleChange,required:"required"}),l.a.createElement("span",{className:"text"},"Message"),l.a.createElement("span",{className:"line"})))),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{type:"submit",value:"Send"})))),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline error-msg"},"Email Not Sent")))}}]),a}(l.a.Component),Q=a(24);var X=function(e){return l.a.createElement("div",null,e.snakeDots.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return l.a.createElement("div",{className:"snake-dot",key:t,style:a})})))};var Y=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return l.a.createElement("div",{className:"snake-food",style:t})},Z=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},ee={food:Z(),speed:200,direction:"RIGHT",paused:!0,snakeDots:[[0,0],[2,0]]},te=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state=ee,e.onKeyDown=function(t){switch((t=t||window.event).keyCode){case 38:e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"});break;case 13:e.setState({paused:!e.state.paused})}},e.moveSnake=function(){var t=Object(Q.a)(e.state.snakeDots),a=t[t.length-1];if(!e.state.paused){switch(e.state.direction){case"RIGHT":a=[a[0]+2,a[1]];break;case"LEFT":a=[a[0]-2,a[1]];break;case"DOWN":a=[a[0],a[1]+2];break;case"UP":a=[a[0],a[1]-2]}t.push(a),t.shift(),e.setState({snakeDots:t})}},e.checkIfOutOfBounds=function(){var t=e.state.snakeDots[e.state.snakeDots.length-1];(t[0]>=100||t[1]>=100||t[0]<0||t[1]<0)&&e.onGameOver()},e}return Object(c.a)(a,[{key:"speed",value:function(){clearInterval(this.interval),this.interval=setInterval(this.moveSnake,this.state.speed)}},{key:"componentDidMount",value:function(){this.speed(),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBounds(),this.checkIfCrashedWithItself(),this.checkIfEatFood(),this.speed(),console.log(this.state.speed)}},{key:"checkIfCrashedWithItself",value:function(){var e=this,t=Object(Q.a)(this.state.snakeDots),a=t[t.length-1];t.pop(),t.pop(),t.forEach((function(t){a[0]==t[0]&&a[1]==t[1]&&e.onGameOver()}))}},{key:"checkIfEatFood",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]==t[0]&&e[1]==t[1]&&(this.setState({food:Z()}),this.enlargeSnake(),this.increaseSpeed())}},{key:"enlargeSnake",value:function(){var e=Object(Q.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>75?this.setState({speed:this.state.speed-10}):this.state.speed>50?this.setState({speed:this.state.speed-5}):this.state.speed>25&&this.setState({speed:this.state.speed-3})}},{key:"onGameOver",value:function(){alert("Game Over. Snake length is ".concat(this.state.snakeDots.length)),this.setState(ee)}},{key:"render",value:function(){return l.a.createElement("div",{className:"snake-game-container"},l.a.createElement("div",{className:"snake-text"},l.a.createElement("h1",null,"Press the 'enter' key at any time "),l.a.createElement("h1",null,"to Start/Pause the game !"),l.a.createElement("div",{className:"snake-text-bubble"},l.a.createElement("p",null,"This game is called Catplar, short for Caterpillar, because unlike Snakes, Caterpillars can't go through walls. So avoid them for now."),l.a.createElement("p",null,"I apologize to all you mobile users, because unless you have a 1997 Nokia, you will be unable to play this game."))),l.a.createElement("div",{className:"game-area"},l.a.createElement(X,{snakeDots:this.state.snakeDots}),l.a.createElement(Y,{dot:this.state.food})))}}]),a}(l.a.Component),ae=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Elihu Diaz",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Be relentless",subTitle:"Projects that make a difference",text:"Checkout my projects below"},about:{title:"About me "},snake:{title:"Snake"},contact:{title:"Let's talk"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"border-bottom navbar color-nav",expand:"xl",height:700},l.a.createElement(p.a.Brand,{className:"navbar-brand"},"Elihu Diaz"),l.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(p.a.Collapse,{id:"navbar-toggle"},l.a.createElement(v.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link link-font",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link link-font",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link link-font",to:"/snake"},"Play Caplar"),l.a.createElement(u.b,{className:"nav-link link-font",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(j,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(W,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/snake",render:function(){return l.a.createElement(te,{title:e.state.snake.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement($,{title:e.state.contact.title})}}),l.a.createElement(b,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(85);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.a90664eb.chunk.js.map