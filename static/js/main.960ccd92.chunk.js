(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{40:function(e,s,t){},43:function(e,s,t){},69:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t(29),n=t.n(c),i=(t(40),t(8)),r=t(9),l=t(11),j=t(10),o=t(24),d=t(30),h=t.n(d),b=(t(43),t(44),t(6)),u=t.n(b),m=t(1),O=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){for(var e=[],s=0;s<50;s++)e.push(Object(m.jsx)("div",{class:"bubble"},s));if(!this.props.data)return null;var t=this.props.data.project,a=this.props.data.github,c=this.props.data.name,n=this.props.data.description;return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",style:{background:"black"},children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)(u.a,{bottom:!0,children:Object(m.jsx)("h1",{className:"responsive-headline glow",children:c})}),Object(m.jsx)(u.a,{bottom:!0,duration:1200,children:Object(m.jsxs)("h3",{style:{color:"white"},className:"glow",children:[n,"."]})}),Object(m.jsx)("hr",{}),Object(m.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(m.jsxs)("ul",{className:"social",children:[Object(m.jsxs)("a",{href:t,target:"_blank",className:"button btn project-btn",children:[Object(m.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(m.jsxs)("a",{href:a,target:"_blank",className:"button btn github-btn",children:[Object(m.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),e,Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(u.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9Copyright \xa92022 All rights reserved | This template is made with \ud83d\udc96 by"}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",style:{color:"blue"},children:"HAS"})})]})]})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),p=t(16),v=t(33),f=t.n(v),N=t(31),g=t.n(N),w=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={visible:!1},a.mouseEnter=a.mouseEnter.bind(Object(p.a)(a)),a.mouseOut=a.mouseOut.bind(Object(p.a)(a)),a}return Object(r.a)(t,[{key:"mouseEnter",value:function(){this.state.visible=!0}},{key:"mouseOut",value:function(){this.state.visible=!1}},{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email;this.props.data.resumedownload;return Object(m.jsx)("section",{id:"about",children:Object(m.jsx)(u.a,{duration:1e3,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:t}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[a,Object(m.jsx)("br",{}),c," ",n,", ",i]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:r}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:l})]})]}),Object(m.jsx)("div",{className:"columns download",onMouseEnter:this.mouseEnter,onMouseOut:this.mouseOut,children:Object(m.jsx)("p",{children:Object(m.jsxs)("a",{href:"#resume",className:"button",children:[Object(m.jsx)("i",{children:!0===this.state.visible?Object(m.jsx)(g.a,{className:"fa fa-download"}):Object(m.jsx)(f.a,{className:"fa fa-download"})}),"Watch Resume"]})})})]})]})]})})})}}]),t}(a.Component),y=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{children:e.description})]},e.school)})),a=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(s){var t=e.getRandomColor(),a="bar-expand "+s.name.toLowerCase(),c=s.level;return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:c,backgroundColor:t},className:a}),Object(m.jsx)("em",{children:s.name})]},s.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsx)(u.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(m.jsx)(u.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(m.jsx)(u.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:s}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}]),t}(a.Component),k=t(7),C=t(18),D=t(14),_=t(34),S=function(e){var s=Object(a.useRef)(),t=Object(a.useState)({user_name:"",user_email:"",subject:"",message:""}),c=Object(D.a)(t,2),n=c[0],i=c[1];if(!e.data)return null;var r=e.data.name,l=e.data.address.street,j=e.data.address.city,o=e.data.address.state,d=e.data.address.zip,h=e.data.phone,u=e.data.contactmessage,O=function(e){var s=e.target,t=s.name,a=s.value;i((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(k.a)({},t,a))}))};return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)(b.Fade,{bottom:!0,duration:1e3,children:Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:u})})]})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(b.Slide,{left:!0,duration:1e3,children:Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_.a.sendForm("service_uuvnwnh","template_xmdfssg",s.current,"user_zcI0Ge5RwLux6Bx73HCeq").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),i((function(e){return Object(C.a)(Object(C.a)({},e),{},{user_name:"",user_email:"",subject:"",message:""})}))},ref:s,children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{required:!0,type:"text",value:n.user_name,onChange:O,size:"35",name:"user_name"})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{required:!0,type:"email",value:n.user_email,onChange:O,size:"35",name:"user_email"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{required:!0,type:"text",value:n.subject,name:"subject",onChange:O,size:"35",autoComplete:"false"})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{value:n.message,onChange:O,required:!0,cols:"50",rows:"15",name:"message"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",type:"submit",children:"Submit"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]}),Object(m.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]})]})}),Object(m.jsx)(b.Slide,{right:!0,duration:1e3,children:Object(m.jsx)("aside",{className:"four columns footer-widgets",children:Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Address and Phone"}),Object(m.jsxs)("p",{className:"address",children:[r,Object(m.jsx)("br",{}),l," ",Object(m.jsx)("br",{}),j,", ",o," ",d,Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:h})]})]})})})]})]})},E=(t(58),0),F=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:e.url,title:e.title,target:"_blank",children:[Object(m.jsx)("img",{alt:e.title,src:s}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.title})]})})},E++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Works."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),t}(a.Component),q=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),a}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{data:this.state.resumeData.main}),Object(m.jsx)(w,{data:this.state.resumeData.main}),Object(m.jsx)(y,{data:this.state.resumeData.resume}),Object(m.jsx)(F,{data:this.state.resumeData.portfolio}),Object(m.jsx)(S,{data:this.state.resumeData.main}),Object(m.jsx)(x,{data:this.state.resumeData.main})]})}}]),t}(a.Component),A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(m.jsx)(q,{}),document.getElementById("root")),A()}},[[69,1,2]]]);
//# sourceMappingURL=main.960ccd92.chunk.js.map