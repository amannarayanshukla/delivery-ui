(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{IzEo:function(e,a,t){"use strict";t("cIOH"),t("lnY3"),t("Znn+"),t("1GLa")},KMjv:function(e,a,t){"use strict";t.r(a);t("2qtc");var n=t("kLXV"),l=t("wx14"),r=(t("y8nQ"),t("Vl3Y")),c=(t("5NDa"),t("5rEg")),o=(t("IzEo"),t("bx4M")),i=(t("qVdP"),t("jsC+")),s=(t("Telt"),t("Tckk")),m=(t("+L6B"),t("2/Rp")),u=(t("lUTK"),t("BvKs")),d=t("1OyB"),p=t("vuIU"),E=t("Ji7U"),v=t("LK+K"),f=(t("B9cy"),t("Ol7k")),g=t("q1tI"),y=t.n(g),b=t("9kvl"),h=t("cJ7L"),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},O=C,k=t("6VBw"),_=function(e,a){return g["createElement"](k["a"],Object.assign({},e,{ref:a,icon:O}))};_.displayName="PlusOutlined";var N,P,S,x=g["forwardRef"](_),w=t("7DNP"),A=t("k0Sh"),I=t.n(A),B=f["a"].Content,j={labelCol:{span:8},wrapperCol:{span:16}},q={wrapperCol:{offset:8,span:16}},T=function(e){console.log("Success:",e)},D=function(e){console.log("Failed:",e)},H=(N=Object(b["a"])((function(e){return{checkoutPage:e.checkoutPage}})),N((S=function(e){Object(E["a"])(t,e);var a=Object(v["a"])(t);function t(){var e;Object(d["a"])(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return e=a.call.apply(a,[this].concat(l)),e.state={loading:!1,visible:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(){e.setState({loading:!0}),setTimeout((function(){e.setState({loading:!1,visible:!1})}),3e3)},e.handleCancel=function(){e.setState({visible:!1})},e.changePage=function(a){return function(){var t=e.props.dispatch;t(w["routerRedux"].push("".concat(a)))}},e.menu=y.a.createElement(u["a"],null,y.a.createElement(u["a"].Item,null,y.a.createElement("a",{rel:"profile page",onClick:e.changePage("/user/profile")},"Profile")),y.a.createElement(u["a"].Item,null,y.a.createElement("a",{rel:"profile page",onClick:e.changePage("/user/checkout")},"Checkout")),y.a.createElement(u["a"].Item,null,y.a.createElement("a",{rel:"profile page",onClick:e.changePage("/user/order")},"Your Order")),y.a.createElement(u["a"].Item,null,y.a.createElement("a",null,"Terms and Services")),y.a.createElement(u["a"].Item,null,y.a.createElement("a",null,"Privacy policy")),y.a.createElement(u["a"].Item,null,y.a.createElement("a",null,"Logout"))),e}return Object(p["a"])(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.dispatch,t=localStorage.getItem("accessToken"),n=localStorage.getItem("uuid");a({type:"checkoutPage/getCheckoutPage",accessToken:t,uuid:n}).then((function(){console.log(e.props," : setCheckoutPage props")}))}},{key:"render",value:function(){var e,a=this.state,t=a.visible,u=a.loading,d=this.props.checkoutPage.payload;return"string"===typeof d&&(e=JSON.parse(d).data),console.log(d," : payload DATA "),console.log(e," : payload DATA 2 "),y.a.createElement("div",null,y.a.createElement("div",{className:I.a.navigation},y.a.createElement(m["a"],{className:I.a.navButton},"Offer"),y.a.createElement(m["a"],{className:I.a.navButton},"Need Help"),y.a.createElement(i["a"],{overlay:this.menu},y.a.createElement("a",{className:I.a.navButton,onClick:function(e){return e.preventDefault()}},y.a.createElement(s["a"],{icon:y.a.createElement(h["a"],null)})))),y.a.createElement(f["a"],null,y.a.createElement(B,{style:{margin:"24px 16px 0"}},y.a.createElement("div",{className:"site-layout-background-checkout",style:{padding:24,minHeight:360}},y.a.createElement("div",{className:I.a.order},y.a.createElement("div",null,y.a.createElement("div",{className:I.a.deliveryContainer},y.a.createElement("h2",null,"Delivery Address"),y.a.createElement("div",{className:I.a.addButton,onClick:this.showModal},y.a.createElement(x,null),y.a.createElement("span",null,"Add New"))),y.a.createElement("div",{className:I.a.userDeliveryAddress},y.a.createElement(o["a"],{title:"Home"},"27 Street, 2569 Heritage Road Visalia, CA 93291"),y.a.createElement(o["a"],{title:"Office"},"33 Baker Street, Crescent Road, CA 65746"),y.a.createElement(o["a"],{title:"Home"},"27 Street, 2569 Heritage Road Visalia, CA 93291"),y.a.createElement(o["a"],{title:"Office"},"33 Baker Street, Crescent Road, CA 65746"),y.a.createElement(o["a"],{title:"Home"},"27 Street, 2569 Heritage Road Visalia, CA 93291"),y.a.createElement(o["a"],{title:"Office"},"33 Baker Street, Crescent Road, CA 65746")),y.a.createElement(n["a"],{visible:t,title:"New address",onOk:this.handleOk,onCancel:this.handleCancel,footer:[y.a.createElement(m["a"],{key:"back",onClick:this.handleCancel},"Return"),y.a.createElement(m["a"],{key:"submit",type:"primary",loading:u,onClick:this.handleOk},"Submit")]},y.a.createElement(r["a"],Object(l["a"])({},j,{name:"basic",initialValues:{remember:!0},onFinish:T,onFinishFailed:D}),y.a.createElement(r["a"].Item,{label:"Full name",name:"fullname",rules:[{required:!0,message:"Please input your full name!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,{label:"Contact Number",name:"contact-number",rules:[{required:!0,message:"Please input your contact number!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,{label:"Pin code",name:"pincode",rules:[{required:!0,message:"Please input your PIN code!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,{label:"Flat, House no., Building, Company, Apartment",name:"house",rules:[{required:!0,message:"Please input your address!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,{label:"Full name",name:"fullname",rules:[{required:!0,message:"Please input your username!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,{label:"Area",name:"area",rules:[{required:!0,message:"Please input your area!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,{label:"Landmark",name:"lankmark",rules:[{required:!0,message:"Please input your landmark!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,{label:"Town",name:"town",rules:[{required:!0,message:"Please input your town!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,{label:"State",name:"state",rules:[{required:!0,message:"Please input your state!"}]},y.a.createElement(c["a"],null)),y.a.createElement(r["a"].Item,q,y.a.createElement(m["a"],{type:"primary",htmlType:"submit"},"Submit"))))),y.a.createElement("div",null,y.a.createElement("div",{className:I.a.deliveryContainer},y.a.createElement("h2",null,"Delivery Schedule"),y.a.createElement("div",{className:I.a.addButton,onClick:this.showModal},y.a.createElement(x,null),y.a.createElement("span",null,"Add New")))),y.a.createElement("div",null,y.a.createElement("div",{className:I.a.userDeliveryAddress},y.a.createElement(o["a"],{title:"Express delivery"},"90 min express delivery"),y.a.createElement(o["a"],{title:"Office"},"33 Baker Street, Crescent Road, CA 65746"),y.a.createElement(o["a"],{title:"Home"},"27 Street, 2569 Heritage Road Visalia, CA 93291"),y.a.createElement(o["a"],{title:"Office"},"33 Baker Street, Crescent Road, CA 65746"),y.a.createElement(o["a"],{title:"Home"},"27 Street, 2569 Heritage Road Visalia, CA 93291"),y.a.createElement(o["a"],{title:"Office"},"33 Baker Street, Crescent Road, CA 65746")))),y.a.createElement("div",{className:I.a.orderDetails},y.a.createElement("h2",{className:I.a.heading},"Order Details"))))))}}]),t}(g["Component"]),P=S))||P);a["default"]=Object(b["a"])((function(){return{}}))(H)},bx4M:function(e,a,t){"use strict";var n=t("lSNA"),l=t.n(n),r=t("pVnL"),c=t.n(r),o=t("q1tI"),i=t("TSYQ"),s=t.n(i),m=t("6UMo"),u=t("H84U"),d=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t},p=function(e){return o["createElement"](u["a"],null,(function(a){var t=a.getPrefixCls,n=e.prefixCls,r=e.className,i=e.hoverable,m=void 0===i||i,u=d(e,["prefixCls","className","hoverable"]),p=t("card",n),E=s()("".concat(p,"-grid"),r,l()({},"".concat(p,"-grid-hoverable"),m));return o["createElement"]("div",c()({},u,{className:E}))}))},E=p,v=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t},f=function(e){return o["createElement"](u["a"],null,(function(a){var t=a.getPrefixCls,n=e.prefixCls,l=e.className,r=e.avatar,i=e.title,m=e.description,u=v(e,["prefixCls","className","avatar","title","description"]),d=t("card",n),p=s()("".concat(d,"-meta"),l),E=r?o["createElement"]("div",{className:"".concat(d,"-meta-avatar")},r):null,f=i?o["createElement"]("div",{className:"".concat(d,"-meta-title")},i):null,g=m?o["createElement"]("div",{className:"".concat(d,"-meta-description")},m):null,y=f||g?o["createElement"]("div",{className:"".concat(d,"-meta-detail")},f,g):null;return o["createElement"]("div",c()({},u,{className:p}),E,y)}))},g=f,y=t("ZTPi"),b=t("qrJ5"),h=b["a"],C=t("/kpp"),O=C["a"],k=t("3Nzz"),_=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t};function N(e){var a=e.map((function(a,t){return o["createElement"]("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(t)},o["createElement"]("span",null,a))}));return a}var P=function(e){var a,t,n,r=o["useContext"](u["b"]),i=r.getPrefixCls,d=r.direction,p=o["useContext"](k["b"]),v=function(a){e.onTabChange&&e.onTabChange(a)},f=function(){var a;return o["Children"].forEach(e.children,(function(e){e&&e.type&&e.type===E&&(a=!0)})),a},g=e.prefixCls,b=e.className,C=e.extra,P=e.headStyle,S=void 0===P?{}:P,x=e.bodyStyle,w=void 0===x?{}:x,A=e.title,I=e.loading,B=e.bordered,j=void 0===B||B,q=e.size,T=e.type,D=e.cover,H=e.actions,R=e.tabList,V=e.children,M=e.activeTabKey,K=e.defaultActiveTabKey,L=e.tabBarExtraContent,z=e.hoverable,F=e.tabProps,J=void 0===F?{}:F,Y=_(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),U=i("card",g),G=0===w.padding||"0px"===w.padding?{padding:24}:void 0,Q=o["createElement"]("div",{className:"".concat(U,"-loading-block")}),Z=o["createElement"]("div",{className:"".concat(U,"-loading-content"),style:G},o["createElement"](h,{gutter:8},o["createElement"](O,{span:22},Q)),o["createElement"](h,{gutter:8},o["createElement"](O,{span:8},Q),o["createElement"](O,{span:15},Q)),o["createElement"](h,{gutter:8},o["createElement"](O,{span:6},Q),o["createElement"](O,{span:18},Q)),o["createElement"](h,{gutter:8},o["createElement"](O,{span:13},Q),o["createElement"](O,{span:9},Q)),o["createElement"](h,{gutter:8},o["createElement"](O,{span:4},Q),o["createElement"](O,{span:3},Q),o["createElement"](O,{span:16},Q))),X=void 0!==M,W=c()(c()({},J),(a={},l()(a,X?"activeKey":"defaultActiveKey",X?M:K),l()(a,"tabBarExtraContent",L),a)),$=R&&R.length?o["createElement"](y["a"],c()({size:"large"},W,{className:"".concat(U,"-head-tabs"),onChange:v}),R.map((function(e){return o["createElement"](y["a"].TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(A||C||$)&&(n=o["createElement"]("div",{className:"".concat(U,"-head"),style:S},o["createElement"]("div",{className:"".concat(U,"-head-wrapper")},A&&o["createElement"]("div",{className:"".concat(U,"-head-title")},A),C&&o["createElement"]("div",{className:"".concat(U,"-extra")},C)),$));var ee=D?o["createElement"]("div",{className:"".concat(U,"-cover")},D):null,ae=o["createElement"]("div",{className:"".concat(U,"-body"),style:w},I?Z:V),te=H&&H.length?o["createElement"]("ul",{className:"".concat(U,"-actions")},N(H)):null,ne=Object(m["a"])(Y,["onTabChange"]),le=q||p,re=s()(U,b,(t={},l()(t,"".concat(U,"-loading"),I),l()(t,"".concat(U,"-bordered"),j),l()(t,"".concat(U,"-hoverable"),z),l()(t,"".concat(U,"-contain-grid"),f()),l()(t,"".concat(U,"-contain-tabs"),R&&R.length),l()(t,"".concat(U,"-").concat(le),le),l()(t,"".concat(U,"-type-").concat(T),!!T),l()(t,"".concat(U,"-rtl"),"rtl"===d),t));return o["createElement"]("div",c()({},ne,{className:re}),n,ee,ae,te)};P.Grid=E,P.Meta=g;a["a"]=P},k0Sh:function(e,a,t){e.exports={order:"order___1cdrb",orderDetails:"orderDetails___P2vow",orderDetailsAmountHeading:"orderDetailsAmountHeading___oiAwh",navigation:"navigation___3PQ1R",navButton:"navButton___3XxQ0",userBasicInfo:"userBasicInfo____cTLf",userName:"userName___edI9z",userEmail:"userEmail___BxB1g",userContactInfo:"userContactInfo___21iBV",deliveryContainer:"deliveryContainer___13c7n",userDeliveryAddress:"userDeliveryAddress___2lS-9",addButton:"addButton___16SJ4",saveButton:"saveButton___3taYc",addAddress:"addAddress___1dMox",heading:"heading___3_GW3",orderCard:"orderCard___FZSp6",totalPrice:"totalPrice___2qGAY"}},lnY3:function(e,a,t){}}]);