(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a){},28:function(e,a){},29:function(e,a){},30:function(e,a){},31:function(e,a){},32:function(e,a,t){e.exports=t(52)},37:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(24),s=t.n(o);t(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(55),l=t(54),c=t(53),m="/home",u=function(){return r.a.createElement("div",{className:"ui large menu"},r.a.createElement(c.a,{to:"/signin",className:"active item"},"Home"),r.a.createElement(c.a,{to:"/",className:"item"},"Landing"),r.a.createElement(c.a,{to:m,className:"item"},"Home"),r.a.createElement(c.a,{to:"/account",className:"item"},"Account"),r.a.createElement(c.a,{to:"/admin",className:"item"},"Admin"),r.a.createElement("div",{className:"right menu"},r.a.createElement(c.a,{to:"/signup",className:"item"},"Sign Up")))},d=t(25),p=t(7),h=t(9),E=t(8),f=t(11),g=t(16),b=t(12),w=t(17),v=t(56),O=t(15),C=r.a.createContext(null),P=function(e){return function(a){return r.a.createElement(C.Consumer,null,function(t){return r.a.createElement(e,Object.assign({},a,{firebase:t}))})}},S=C,j=t(22),N=t.n(j),y=(t(49),{apiKey:"AIzaSyCY4oTQMcFHofcjbQn9DqhLBoXt_6hJP14",authDomain:"fir-cd7b4.firebaseapp.com",databaseURL:"https://fir-cd7b4.firebaseio.com",projectId:"fir-cd7b4",storageBucket:"fir-cd7b4.appspot.com",messagingSenderId:"910290729574"}),A=function e(){var a=this;Object(E.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,t){return a.auth.createUserWithEmailAndPassword(e,t)},this.doSignInWithEmailAndPassword=function(e,t){return a.auth.signInWithEmailAndPassword(e,t)},this.doSignOut=function(){return a.auth.signOut()},this.doPasswordReset=function(e){return a.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return a.auth.currentUser.updatePassword(e)},N.a.initializeApp(y),this.auth=N.a.auth()},U={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},I=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(g.a)(this,Object(b.a)(a).call(this,e))).onSubmit=function(e){var a=t.state,n=(a.username,a.email),r=a.passwordOne;t.props.firebase.doCreateUserWithEmailAndPassword(n,r).then(function(e){t.setState(Object(h.a)({},U)),t.props.history.push(m)}).catch(function(e){t.setState({error:e})}),e.preventDefault()},t.onChange=function(e){t.setState(Object(p.a)({},e.target.name,e.target.value))},t.state=Object(h.a)({},U),t}return Object(w.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.email,n=e.passwordOne,o=e.passwordTwo,s=e.error,i=n!==o||""===n||""===t||""===a;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"User Name"),r.a.createElement("input",{name:"username",value:a,onChange:this.onChange,type:"text",placeholder:"Full Name"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"})),r.a.createElement("button",{disabled:i,type:"submit",className:"ui button"},"Sign Up"),s&&r.a.createElement("p",null,s.message))}}]),a}(n.Component),W=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(c.a,{to:"/signup",className:"item"},"Sign Up"))},k=Object(O.a)(v.a,P)(I),x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(k,null))},D={email:"",password:"",error:null},B=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(g.a)(this,Object(b.a)(a).call(this,e))).onSubmit=function(e){var a=t.state,n=a.email,r=a.password;t.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){t.setState(Object(h.a)({},D)),t.props.history.push(m)}).catch(function(e){t.setState({error:e})}),e.preventDefault()},t.onChange=function(e){t.setState(Object(p.a)({},e.target.name,e.target.value))},t.state=Object(h.a)({},D),t}return Object(w.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.error,o=""===t||""===a;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"password",value:t,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("button",{disabled:o,type:"submit",className:"ui button"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),H=Object(O.a)(v.a,P)(B),L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(H,null),r.a.createElement(W,null))},T=t(28),F=t(29),J=t(30),R=t(31),z=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("div",{className:"ui text container"},r.a.createElement(l.a,{exact:!0,path:"/",component:d.LandingPage}),r.a.createElement(l.a,{path:"/signup",component:x}),r.a.createElement(l.a,{path:"/signin",component:L}),r.a.createElement(l.a,{path:"/pw-forget",component:T.PasswordForgetPage}),r.a.createElement(l.a,{path:m,component:F.HomePage}),r.a.createElement(l.a,{path:"/account",component:J.AccountPage}),r.a.createElement(l.a,{path:"/admin",component:R.AdminPage}))))};s.a.render(r.a.createElement(S.Provider,{value:new A},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.a1ebe055.chunk.js.map