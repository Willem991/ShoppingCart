(this.webpackJsonpsc=this.webpackJsonpsc||[]).push([[0],{20:function(t,e,c){},30:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),i=c(13),u=c.n(i),o=(c(20),c(5)),r=c(6),d=c(2),p=(c(8),c(1)),s=function(){return Object(p.jsxs)("div",{id:"Homepage",children:[Object(p.jsx)("h1",{children:"Welcome to The Pie Palace!"}),Object(p.jsx)("p",{children:"We have all the most delicious savoury treats you could wish for!"}),Object(p.jsx)("p",{children:"Feel free to check out out product list and do a bit of shopping for your favourite treats."})]})},j=c.p+"static/media/LogoNew.6485b910.png",b=function(){return Object(p.jsxs)("div",{id:"Navbar",children:[Object(p.jsx)("img",{id:"Logo",src:j}),Object(p.jsxs)("ul",{children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("li",{className:"Navlist",children:"Homepage"},"LI01")}),Object(p.jsx)(r.b,{to:"/Products",children:Object(p.jsx)("li",{className:"Navlist",children:"Products"},"LI02")})]}),Object(p.jsx)(r.b,{id:"Cart",to:"/Cart",children:Object(p.jsx)("div",{children:"Cart"})})]})},C=function(t){return Object(p.jsxs)("div",{id:"Product",children:[Object(p.jsx)("img",{src:t.image,alt:"product"}),Object(p.jsx)("h4",{id:"productname",children:t.name}),Object(p.jsx)("button",{id:"minus",onClick:t.NupdateCount,children:"-"}),Object(p.jsx)("p",{id:"counter",children:t.counter}),Object(p.jsx)("button",{id:"plus",onClick:t.updateCount,children:"+"}),Object(p.jsx)("p",{id:"price",children:t.price*t.counter}),Object(p.jsx)("button",{id:"add",onClick:t.addToCart,children:"Add to Cart"})]})},m=function(t){return Object(p.jsxs)("div",{id:"ProductDisplay",children:[Object(p.jsx)(C,{image:t.image1,name:t.name1,counter:t.counter1,price:t.price1,updateCount:t.updateCount1,NupdateCount:t.NupdateCount1,addToCart:t.addToCart1}),Object(p.jsx)(C,{image:t.image2,name:t.name2,counter:t.counter2,price:t.price2,updateCount:t.updateCount2,NupdateCount:t.NupdateCount2,addToCart:t.addToCart2}),Object(p.jsx)(C,{image:t.image3,name:t.name3,counter:t.counter3,price:t.price3,updateCount:t.updateCount3,NupdateCount:t.NupdateCount3,addToCart:t.addToCart3}),Object(p.jsx)(C,{image:t.image4,name:t.name4,counter:t.counter4,price:t.price4,updateCount:t.updateCount4,NupdateCount:t.NupdateCount4,addToCart:t.addToCart4}),Object(p.jsx)(C,{image:t.image5,name:t.name5,counter:t.counter5,price:t.price5,updateCount:t.updateCount5,NupdateCount:t.NupdateCount5,addToCart:t.addToCart5}),Object(p.jsx)(C,{image:t.image6,name:t.name6,counter:t.counter6,price:t.price6,updateCount:t.updateCount6,NupdateCount:t.NupdateCount6,addToCart:t.addToCart6})]})},O=function(t){return Object(p.jsxs)("div",{id:"TheCart",children:[t.cart,Object(p.jsxs)("p",{children:["Total: ",t.price]})]})},l=c.p+"static/media/Pie11.486750eb.png",h=c.p+"static/media/Pie21.1fd707db.png",x=c.p+"static/media/Pie31.1e160173.png",f=c.p+"static/media/Pie41.b6ac1c3b.png",g=c.p+"static/media/Pie51.fb59813f.png",v=c.p+"static/media/Pie61.e980d5ec.png";var N=function(){var t=Object(n.useState)(1),e=Object(o.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(1),u=Object(o.a)(i,2),j=u[0],C=u[1],N=Object(n.useState)(1),T=Object(o.a)(N,2),y=T[0],P=T[1],S=Object(n.useState)(1),q=Object(o.a)(S,2),k=q[0],w=q[1],I=Object(n.useState)(1),L=Object(o.a)(I,2),A=L[0],B=L[1],M=Object(n.useState)(1),E=Object(o.a)(M,2),H=E[0],J=E[1],W=Object(n.useState)([]),D=Object(o.a)(W,2),F=D[0],Q=D[1],R=Object(n.useState)([]),Y=Object(o.a)(R,2),z=Y[0],G=Y[1],K=Object(n.useState)(!1),U=Object(o.a)(K,2),V=U[0],X=U[1],Z=Object(n.useState)(0),$=Object(o.a)(Z,2),_=$[0],tt=$[1],et="Beefy Surprise",ct="Mutton Muncher",nt="Chicken Chomper",at="The Big Cornish",it="Ye Olde Sausage",ut="Ode to Pie",ot=function(){a(c+1)},rt=function(){C(j+1)},dt=function(){P(y+1)},pt=function(){w(k+1)},st=function(){B(A+1)},jt=function(){J(H+1)},bt=function(){c>1&&a(c-1)},Ct=function(){j>1&&C(j-1)},mt=function(){y>1&&P(y-1)},Ot=function(){k>1&&w(k-1)},lt=function(){A>1&&B(A-1)},ht=function(){H>1&&J(H-1)},xt=function(){var t=0,e=F.reduce((function(t,e){return t+=e.price*e.quantity}),0);tt(e);var c=F.map((function(e){return t++,Object(p.jsxs)("div",{id:"CartProduct",children:[Object(p.jsxs)("p",{children:["Item: ",e.name]}),Object(p.jsxs)("p",{children:["Quantity: ",e.quantity]}),Object(p.jsxs)("p",{children:["Price: ",e.price*e.quantity]}),Object(p.jsx)("button",{id:t,onClick:function(t){!function(t){var e=t.target.id-1,c=F;c.splice(e,1),Q(c),X(!0)}(t)},children:"Remove"})]},t)}));G(c)},ft=function(){var t=F.concat({name:et,price:100,quantity:c});Q(t),X(!0)},gt=function(){var t=F.concat({name:ct,price:110,quantity:j});Q(t),X(!0)},vt=function(){var t=F.concat({name:nt,price:90,quantity:y});Q(t),X(!0)},Nt=function(){var t=F.concat({name:at,price:65,quantity:k});Q(t),X(!0)},Tt=function(){var t=F.concat({name:it,price:123,quantity:A});Q(t),X(!0)},yt=function(){var t=F.concat({name:ut,price:30,quantity:H});Q(t),X(!0)};return Object(n.useEffect)((function(){!0===V&&(console.log(F),X(!1),xt())})),Object(p.jsx)("div",{id:"App",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(b,{}),Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",component:s}),Object(p.jsx)(d.a,{path:"/Cart",render:function(){return Object(p.jsx)(O,{price:_,cart:z})}}),Object(p.jsx)(d.a,{path:"/Products",isAuthed:!0,render:function(t){return Object(p.jsx)(m,{price1:100,price2:110,price3:90,price4:65,price5:123,price6:30,image1:l,image2:h,image3:x,image4:f,image5:v,image6:g,name1:et,name2:ct,name3:nt,name4:at,name5:it,name6:ut,counter1:c,counter2:j,counter3:y,counter4:k,counter5:A,counter6:H,updateCount1:ot,updateCount2:rt,updateCount3:dt,updateCount4:pt,updateCount5:st,updateCount6:jt,NupdateCount1:bt,NupdateCount2:Ct,NupdateCount3:mt,NupdateCount4:Ot,NupdateCount5:lt,NupdateCount6:ht,addToCart1:ft,addToCart2:gt,addToCart3:vt,addToCart4:Nt,addToCart5:Tt,addToCart6:yt})}})]})]})})};u.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},8:function(t,e,c){}},[[30,1,2]]]);
//# sourceMappingURL=main.b7b78525.chunk.js.map