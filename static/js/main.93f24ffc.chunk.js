(this["webpackJsonpthe-store"]=this["webpackJsonpthe-store"]||[]).push([[0],{43:function(e,t,a){e.exports=a(83)},55:function(e,t,a){},57:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),i=a(11),s=a(4),o=a(38),u=a(12),m=(a(52),a(28)),p=a(39),d=a.n(p),h=a(6),f="SET_CURRENT_USER",E={currentUser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(h.a)({},e,{currentUser:t.payload});default:return e}},b={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMMOVE_ITEMS:"REMMOVE_ITEMS"},g=a(42),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(h.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(g.a)(e),[Object(h.a)({},t,{quantity:1})])},O=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(h.a)({},e,{quantity:e.quantity-1}):e}))},N={hidden:!0,cartItems:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b.TOGGLE_CART_HIDDEN:return Object(h.a)({},e,{hidden:!e.hidden});case b.ADD_ITEM:return Object(h.a)({},e,{cartItems:y(e.cartItems,t.payload)});case b.CLEAR_ITEM_FROM_CART:return Object(h.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case b.REMMOVE_ITEMS:return Object(h.a)({},e,{cartItems:O(e.cartItems,t.payload)});default:return e}},w={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"},k={collections:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.UPDATE_COLLECTIONS:return Object(h.a)({},e,{collections:t.payload});default:return e}},U={key:"root",storage:d.a,whiteList:["cart"]},T=Object(u.c)({user:v,cart:j,directory:C,shop:S}),x=Object(m.a)(U,T);var M=Object(u.d)(x,u.a.apply(void 0,[])),R=Object(m.b)(M),_=(a(55),a(5)),A=a.n(_),P=a(15),L=a(16),D=a(18),H=a(17),q=a(19),z=a(21),G=a(3),V=(a(57),a(24)),B=a.n(V);a(58),a(62);B.a.initializeApp({apiKey:"AIzaSyDoMqyH5UbwahZIRfDhSPzMV70CUGqLC8s",authDomain:"the-store-2.firebaseapp.com",databaseURL:"https://the-store-2.firebaseio.com",projectId:"the-store-2",storageBucket:"the-store-2.appspot.com",messagingSenderId:"426588574372",appId:"1:426588574372:web:bf52ce87cda1d97c114c31",measurementId:"G-Y1HCPTQYX3"});var F=function(e,t){var a,n,r,c;return A.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e){l.next=2;break}return l.abrupt("return");case 2:return a=Y.doc("users/".concat(e.uid)),l.next=5,A.a.awrap(a.get());case 5:if(l.sent.exists){l.next=17;break}return n=e.displayName,r=e.email,c=new Date,l.prev=9,l.next=12,A.a.awrap(a.set(Object(h.a)({displayName:n,email:r,createdAt:c},t)));case 12:l.next=17;break;case 14:l.prev=14,l.t0=l.catch(9),console.log("error creating user",l.t0.message);case 17:return l.abrupt("return",a);case 18:case"end":return l.stop()}}),null,null,[[9,14]])},W=B.a.auth(),Y=B.a.firestore(),J=new B.a.auth.GoogleAuthProvider;J.setCustomParameters({prompt:"select_account"});var K=function(){return W.signInWithPopup(J)};B.a,a(64);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Z=r.a.createElement("metadata",null," Svg Vector Icons : http://www.onlinewebfonts.com/icon "),$=r.a.createElement("g",null,r.a.createElement("path",{d:"M968.7,250.3c0-70.6-57.2-127.8-127.8-127.8H159.1c-70.6,0-127.8,57.2-127.8,127.8L10,420.8c0,47.1,38.2,85.2,85.2,85.2h42.6c25.5,0,48.3-11.3,63.9-29c15.6,17.7,38.4,29,63.9,29H287c25.5,0,48.3-11.3,63.9-29c15.6,17.7,38.4,29,63.9,29h21.3c25.5,0,48.3-11.3,63.9-29c15.6,17.7,38.4,29,63.9,29h21.3c25.5,0,48.3-11.3,63.9-29c15.6,17.7,38.4,29,63.9,29h21.3c25.5,0,48.3-11.3,63.9-29c15.6,17.7,38.4,29,63.9,29h42.6c47.1,0,85.2-38.2,85.2-85.2L968.7,250.3z M904.8,463.4h-42.6c-23.5,0-42.6-19.1-42.6-42.6v-21.3v-63.9c0-11.8-9.5-21.3-21.3-21.3c-11.8,0-21.3,9.5-21.3,21.3v63.9v21.3c0,23.5-19.1,42.6-42.6,42.6H713c-23.5,0-42.6-19.1-42.6-42.6v-21.3v-63.9c0-11.8-9.5-21.3-21.3-21.3c-11.8,0-21.3,9.5-21.3,21.3v63.9v21.3c0,23.5-19.1,42.6-42.6,42.6h-21.3c-23.5,0-42.6-19.1-42.6-42.6v-21.3v-63.9c0-11.8-9.5-21.3-21.3-21.3c-11.8,0-21.3,9.5-21.3,21.3v63.9v21.3c0,23.5-19.1,42.6-42.6,42.6h-21.3c-23.5,0-42.6-19.1-42.6-42.6v-21.3v-63.9c0-11.8-9.5-21.3-21.3-21.3c-11.8,0-21.3,9.5-21.3,21.3v63.9v21.3c0,23.5-19.1,42.6-42.6,42.6h-21.3c-23.5,0-42.6-19.1-42.6-42.6v-21.3v-63.9c0-11.8-9.5-21.3-21.3-21.3s-21.3,9.5-21.3,21.3v63.9v21.3c0,23.5-19.1,42.6-42.6,42.6H95.2c-23.5,0-42.6-19.1-42.6-42.6l21.3-170.4c0-47.1,38.2-85.2,85.2-85.2h681.7c47.1,0,85.2,38.2,85.2,85.2l21.3,170.4C947.4,444.3,928.3,463.4,904.8,463.4z"}),r.a.createElement("path",{d:"M599.2,771c0,11.8,9.5,21.3,21.3,21.3c11.8,0,21.3-9.5,21.3-21.3c0-11.8-9.5-21.3-21.3-21.3C608.8,749.7,599.2,759.2,599.2,771z"}),r.a.createElement("path",{d:"M825.3,816.1c0,10-8.1,18.1-18.1,18.1H192.8c-10,0-18.1-8.1-18.1-18.1V645.7h-43.3v170.4c0,33.9,27.5,61.4,61.4,61.4h614.4c33.9,0,61.4-27.5,61.4-61.4V645.7h-43.3L825.3,816.1L825.3,816.1z"}),r.a.createElement("path",{d:"M174.7,582.9c0-12-9.7-21.7-21.7-21.7c-12,0-21.7,9.7-21.7,21.7v163.5h43.3L174.7,582.9L174.7,582.9z"}),r.a.createElement("path",{d:"M868.6,582.9c0-12-9.7-21.7-21.7-21.7s-21.7,9.7-21.7,21.7v163.5h43.3L868.6,582.9L868.6,582.9z"}),r.a.createElement("path",{d:"M556.6,668.4c0-11.8,9.5-21.3,21.3-21.3h63.9c11.8,0,21.3,9.5,21.3,21.3v167.3h42.6V647.1c0-23.5-19.1-42.6-42.6-42.6H556.6c-23.5,0-42.6,19.1-42.6,42.6v188.6h42.6V668.4z"})),ee=function(e){var t=e.svgRef,a=e.title,n=X(e,["svgRef","title"]);return r.a.createElement("svg",Q({x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,Z,$)},te=r.a.forwardRef((function(e,t){return r.a.createElement(ee,Q({svgRef:t},e))}));a.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var re=r.a.createElement("g",null),ce=r.a.createElement("g",null),le=r.a.createElement("g",null),ie=r.a.createElement("g",null),se=r.a.createElement("g",null),oe=r.a.createElement("g",null),ue=r.a.createElement("g",null),me=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=r.a.createElement("g",null),he=r.a.createElement("g",null),fe=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ve=r.a.createElement("g",null),be=r.a.createElement("g",null),ge=function(e){var t=e.svgRef,a=e.title,n=ne(e,["svgRef","title"]);return r.a.createElement("svg",ae({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),re,ce,le,ie,se,oe,ue,me,pe,de,he,fe,Ee,ve,be)},ye=r.a.forwardRef((function(e,t){return r.a.createElement(ge,ae({svgRef:t},e))})),Oe=(a.p,function(){return{type:b.TOGGLE_CART_HIDDEN}}),Ne=function(e){return{type:b.ADD_ITEM,payload:e}},je=function(e){return e.cart},we=Object(G.a)([je],(function(e){return e.cartItems})),Ce=Object(G.a)([je],(function(e){return e.hidden})),Ie=Object(G.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ke=Object(G.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Se=(a(65),Object(s.b)((function(e){return{itemCount:Ie(e)}}),(function(e){return{toggleCartHidden:function(){return e(Oe())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(ye,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))}))),Ue=Object(G.a)([function(e){return e.user}],(function(e){return e.currentUser})),Te=a(20),xe=(a(66),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(Te.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),Me=(a(67),function(e){var t=e.items,a=t.imageUrl,n=t.price,c=t.name,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},l," \u2715 ",n)))}),Re=(a(68),Object(G.b)({cartItems:we,currentUser:Ue})),_e=Object(z.g)(Object(s.b)(Re)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch,c=e.currentUser;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Me,{key:e.id,items:e})})):c?r.a.createElement("span",{className:"empty-message"},"Hii ",c.displayName,", Your Cart is Empty"):r.a.createElement("span",{className:"empty-message"},"Hii Stranger, Your Cart is Empty")),r.a.createElement(xe,{onClick:function(){n(Oe()),a.push("/checkout")}},"CHECKOUT"))}))),Ae=Object(G.b)({currentUser:Ue,hidden:Ce}),Pe=Object(s.b)(Ae)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(i.b,{className:"logo-container",to:"/"},r.a.createElement(te,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(i.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(i.b,{className:"option",to:"/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return W.signOut()}}," SIGN OUT "):r.a.createElement(i.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(Se,null)),a?null:r.a.createElement(_e,null))})),Le=a(23),De=(a(70),function(e){var t=e.handelChange,a=e.label,n=Object(Te.a)(e,["handelChange","label"]);return r.a.createElement("div",{className:"group"},a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," from-input-label")},a):null,r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)))}),He=(a(71),function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(D.a)(this,Object(H.a)(t).call(this,e))).handelSubmit=function(e){var t,n,r;return A.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e.preventDefault(),t=a.state,n=t.email,r=t.password,c.prev=2,c.next=5,A.a.awrap(W.signInWithEmailAndPassword(n,r));case 5:c.next=10;break;case 7:c.prev=7,c.t0=c.catch(2),console.log(c.t0);case 10:a.setState({email:"",password:""});case 11:case"end":return c.stop()}}),null,null,[[2,7]])},a.handelChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(Le.a)({},r,n))},a.state={email:"",password:""},a}return Object(q.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handelSubmit},r.a.createElement(De,{name:"email",label:"email",type:"email",value:this.state.email,handelChange:this.handelChange,required:!0}),r.a.createElement(De,{type:"password",name:"password",value:this.state.password,handelChange:this.handelChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttonss"},r.a.createElement(xe,{type:"submit"},"Sign In "),r.a.createElement(xe,{onClick:K,isGoogleSignIn:!0},"google signin"))))}}]),t}(r.a.Component)),qe=(a(72),function(e){function t(){var e;return Object(P.a)(this,t),(e=Object(D.a)(this,Object(H.a)(t).call(this))).handleSubmit=function(t){var a,n,r,c,l,i,s;return A.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.preventDefault(),a=e.state,n=a.displayName,r=a.email,c=a.password,l=a.confirmPassword,c===l){o.next=5;break}return alert("Password do not match"),o.abrupt("return");case 5:return o.prev=5,o.next=8,A.a.awrap(W.createUserWithEmailAndPassword(r,c));case 8:return i=o.sent,s=i.user,o.next=12,A.a.awrap(F(s,{displayName:n}));case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),o.next=18;break;case 15:o.prev=15,o.t0=o.catch(5),console.log(o.t0);case 18:case"end":return o.stop()}}),null,null,[[5,15]])},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(Le.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(q.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(De,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(De,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(De,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(De,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(xe,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),ze=(a(73),function(){return r.a.createElement("div",{className:"signin-signup"},r.a.createElement(He,null),r.a.createElement(qe,null))}),Ge=(a(74),Object(z.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,l=e.linkUrl,i=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(l))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),Ve=Object(G.a)([function(e){return e.directory}],(function(e){return e.sections})),Be=(a(75),Object(G.b)({sections:Ve})),Fe=Object(s.b)(Be)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(Te.a)(e,["id"]);return r.a.createElement(Ge,Object.assign({key:t},a))})))})),We=(a(76),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(Fe,null))}),Ye=Object(G.a)([function(e){return e.shop}],(function(e){return e.collections})),Je=Object(G.a)([Ye],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),Ke=(a(77),Object(s.b)(null,(function(e){return{addItem:function(t){return e(Ne(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,l=t.imageUrl;return r.a.createElement("div",{className:"collection_item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(l,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},"\u20b9",c)),r.a.createElement(xe,{onClick:function(){return a(t)},inverted:!0},"Add To Cart"))}))),Qe=(a(78),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(Ke,{key:e.id,item:e})}))))}),Xe=(a(79),Object(G.b)({collections:Je})),Ze=Object(s.b)(Xe)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(Te.a)(e,["id"]);return r.a.createElement(Qe,Object.assign({key:t},a))})))})),$e=(a(80),Object(s.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(G.a)([Ye],(function(e){return e?e[a]:null})))(e)};var a}),null)((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(Ke,{key:e.id,item:e})}))))}))),et=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(D.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromSnapShot=null,a}return Object(q.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.updateCollections,t=Y.collection("collections");this.unsubscribeFromSnapShot=t.onSnapshot((function(t){var a;return A.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:a=t.docs.map((function(e){var t=e.data(),a=t.title,n=t.items;return{routeName:encodeURI(a.toLowerCase()),id:e.id,title:a,items:n}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{}),e(a);case 2:case"end":return n.stop()}}))}))}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(z.b,{exact:!0,path:"".concat(e.path),component:Ze}),r.a.createElement(z.b,{path:"".concat(e.path,"/:collectionId"),component:$e}))}}]),t}(r.a.Component),tt=Object(s.b)(null,(function(e){return{updateCollections:function(t){return e(function(e){return{type:I.UPDATE_COLLECTIONS,payload:e}}(t))}}}))(et),at=(a(81),a(82),Object(s.b)(null,(function(e){return{clearItems:function(t){return e(function(e){return{type:b.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Ne(t))},removeItem:function(t){return e(function(e){return{type:b.REMMOVE_ITEMS,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItems,n=e.addItem,c=e.removeItem,l=t.name,i=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:"item"})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},"\u20b9 ",s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),nt=a(41),rt=a.n(nt),ct=function(e){var t=e.price,a=100*t;return r.a.createElement(rt.a,{label:"Pay Now",name:"The Store",billingAddress:!0,shippingAddress:!0,currency:"INR",image:"https://sendeyo.com/up/d/f3eb2117da",description:"Your total is Rs.".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_qNcscP9v5B10OvEdwRR0wRXX00M529wzVJ"})},lt=Object(G.b)({cartItems:we,total:ke}),it=Object(s.b)(lt)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(at,{cartItem:e,key:e.id})})),r.a.createElement("div",{className:"total"},a>0?r.a.createElement("span",null,"TOTAL: \u20b9",a):r.a.createElement("span",null)),r.a.createElement("div",{className:"test-warning"},a>0?r.a.createElement("span",null,"*Please use this card for test payment, do not enter your original card details*",r.a.createElement("br",null),"3056 9300 0902 0004 - Exp: 01/30 - CVV: 123 "):r.a.createElement("span",null)),a>0?r.a.createElement(ct,{price:a}):r.a.createElement("span",null))})),st=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(D.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,a}return Object(q.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=W.onAuthStateChanged((function(t){return A.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=5;break}return a.next=3,A.a.awrap(F(t));case 3:a.sent.onSnapshot((function(t){e.props.setCurrentUser(Object(h.a)({id:t.id},t.data()))}));case 5:e.props.setCurrentUser(t);case 6:case"end":return a.stop()}}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Pe,null),r.a.createElement(z.d,null,r.a.createElement(z.b,{exact:!0,path:"/",component:We}),r.a.createElement(z.b,{path:"/shop",component:tt}),r.a.createElement(z.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(z.a,{to:"/"}):r.a.createElement(ze,null)}}),r.a.createElement(z.b,{exact:!0,path:"/checkout",component:it})))}}]),t}(r.a.Component),ot=Object(G.b)({currentUser:Ue}),ut=Object(s.b)(ot,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))(st);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,{store:M},r.a.createElement(i.a,null,r.a.createElement(o.a,{persistor:R},r.a.createElement(ut,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.93f24ffc.chunk.js.map