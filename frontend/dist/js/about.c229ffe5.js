(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0fa5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-shop")},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("div",{staticClass:"content text-center"},[a("h4",[t._v(t._s(t.$t("menu_shop")))]),a("hr",{staticStyle:{height:".1rem","background-color":"#fff","margin-top":"-.2rem"}})])])])])]),a("div",{staticClass:"shop"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2 text-center"},[a("hr",{staticClass:"divisor-top"}),a("h2",[t._v(t._s(t.$t("title_our_products")))]),a("hr",{staticClass:"divisor-bottom"})])]),a("div",{staticClass:"row"},t._l(t.prods,function(t){return a("Item",{key:t.id,attrs:{prod:t}})}),1)])])])},o=[],n=a("5e7d"),c=a("d722"),l={name:"VueShop",computed:{},components:{Item:n["a"]},data:function(){return{prods:{}}},methods:{get_prods:function(){var t=this;c["a"].get("products/").then(function(e){t.prods=e.data})}},created:function(){this.get_prods()}},d=l,u=a("2877"),m=Object(u["a"])(d,i,o,!1,null,null,null),p=m.exports,f={name:"Shop",components:{VueShop:p}},_=f,v=Object(u["a"])(_,r,s,!1,null,null,null);e["default"]=v.exports},"1d2d":function(t,e,a){},"269f":function(t,e,a){t.exports=a.p+"img/custom5.f1ddcc76.jpg"},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},3971:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-download")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop",attrs:{id:"download"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("div",{staticClass:"card"},[t.prof?a("div",{staticClass:"card-body"},[a("div",{staticClass:"alert alert-info text-center"},[a("h4",[t._v(t._s(t.$t("download_your")))]),a("p",[t._v(t._s(t.$t("download_1"))+".")])]),a("a",{staticClass:"btn btn-dark btn-block",attrs:{href:t.prof.proforma,target:"_blank"}},[t._v("\n                            "+t._s(t.$t("download_button"))+".\n                        ")])]):a("div",{staticClass:"card-body"},[a("div",{staticClass:"alert alert-danger text-center"},[a("h4",[t._v(t._s(t.$t("download_invalid")))]),a("p",[t._v(t._s(t.$t("download_invalid_p"))+".")])])])])])])])])},o=[],n=a("d722"),c={name:"VueDownload",data:function(){return{prof:{}}},methods:{getProforma:function(){var t=this;n["a"].get("cart/"+this.$route.params.code+"/").then(function(e){t.prof=e.data})}},created:function(){this.getProforma()}},l=c,d=a("2877"),u=Object(d["a"])(l,i,o,!1,null,null,null),m=u.exports,p={name:"Download",components:{VueDownload:m}},f=p,_=Object(d["a"])(f,r,s,!1,null,null,null);e["default"]=_.exports},"42cf":function(t,e,a){t.exports=a.p+"img/custom6.2f2a6894.jpg"},4886:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-category")},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("div",{staticClass:"content text-center"},[a("h4",[t._v(t._s(t.$t("menu_category")))]),a("hr",{staticStyle:{height:".1rem","background-color":"#fff","margin-top":"-.2rem"}})])])])])]),a("div",{staticClass:"shop"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2 text-center"},[a("hr",{staticClass:"divisor-top"}),a("h2",[t._v(t._s(t.$t("title_our_products")))]),a("hr",{staticClass:"divisor-bottom"})])]),t.prods?a("div",{staticClass:"row"},t._l(t.prods,function(t){return a("Item",{key:t.id,attrs:{prod:t}})}),1):t._e()])])])},o=[],n=a("5e7d"),c=a("d722"),l={name:"VueCategory",components:{Item:n["a"]},data:function(){return{prods:{}}},methods:{get_prods:function(){var t=this;c["a"].get("products/categories/"+this.$route.params.slug+"/").then(function(e){t.prods=e.data})}},created:function(){this.get_prods()}},d=l,u=a("2877"),m=Object(u["a"])(d,i,o,!1,null,null,null),p=m.exports,f={name:"Category",components:{VueCategory:p}},_=f,v=Object(u["a"])(_,r,s,!1,null,null,null);e["default"]=v.exports},"6b54":function(t,e,a){"use strict";a("3846");var r=a("cb7c"),s=a("0bfb"),i=a("9e1e"),o="toString",n=/./[o],c=function(t){a("2aba")(RegExp.prototype,o,t,!0)};a("79e5")(function(){return"/a/b"!=n.call({source:"a",flags:"b"})})?c(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?s.call(t):void 0)}):n.name!=o&&c(function(){return n.call(this)})},7856:function(t,e,a){t.exports=a.p+"img/custom2.802e2ba2.jpg"},"7cb4":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("VueCheckout")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("div",{staticClass:"content text-center"},[a("h4",[t._v(t._s(t.$t("checkout")))]),a("hr",{staticStyle:{height:".1rem","background-color":"#fff","margin-top":"-.2rem"}})])])])])]),a("div",{staticClass:"shop"},[a("div",{staticClass:"container"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sendRequest()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header text-center"},[a("h4",[t._v(t._s(t.$t("informations")))])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"first_name"}},[t._v(t._s(t.$t("first_name")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"},{name:"validate",rawName:"v-validate",value:{required:!0,alpha:!0},expression:"{ required: true, alpha:true }"}],staticClass:"form-control",attrs:{type:"text",id:"first_name",name:"first_name",placeholder:t.$t("first_name_placeholder"),required:""},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("first_name")))])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"last_name"}},[t._v(t._s(t.$t("last_name")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"},{name:"validate",rawName:"v-validate",value:{required:!0,alpha:!0},expression:"{ required: true, alpha:true }"}],staticClass:"form-control",attrs:{type:"text",id:"last_name",name:"last_name",placeholder:t.$t("last_name_placeholder"),required:""},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("last_name")))])]),a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"company"}},[t._v(t._s(t.$t("company_name")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"},{name:"validate",rawName:"v-validate",value:{required:!0,alpha:!0},expression:"{ required: true, alpha:true }"}],staticClass:"form-control",attrs:{type:"text",id:"company",name:"company",placeholder:t.$t("company_name_placeholder"),required:""},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("company")))])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"},{name:"validate",rawName:"v-validate",value:{required:!0,email:!0},expression:"{ required: true, email: true }"}],ref:"email",staticClass:"form-control",attrs:{type:"email",id:"email",name:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("email")))])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"confirm_email"}},[t._v(t._s(t.$t("confirm_email")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm_email,expression:"confirm_email"},{name:"validate",rawName:"v-validate",value:"required|confirmed:email",expression:"'required|confirmed:email'"}],staticClass:"form-control",attrs:{type:"email",id:"confirm_email",name:"confirm_email","data-vv-as":"email",placeholder:t.$t("confirm_email_placeholder"),required:""},domProps:{value:t.confirm_email},on:{input:function(e){e.target.composing||(t.confirm_email=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("confirm_email")))])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"phone"}},[t._v(t._s(t.$t("phone")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:{required:!0,numeric:!0},expression:"{ required: true, numeric:true }"}],ref:"phone",staticClass:"form-control",attrs:{type:"phone",id:"phone",name:"phone",placeholder:t.$t("phone_placeholder"),required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("phone")))])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"confirm_phone"}},[t._v(t._s(t.$t("confirm_phone")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm_phone,expression:"confirm_phone"},{name:"validate",rawName:"v-validate",value:{required:!0,confirmed:t.phone,numeric:!0},expression:"{required:true, confirmed:phone, numeric:true}"}],staticClass:"form-control",attrs:{type:"phone",id:"confirm_phone",name:"confirm_phone","data-vv-as":"phone",placeholder:t.$t("confirm_phone_placeholder"),required:""},domProps:{value:t.confirm_phone},on:{input:function(e){e.target.composing||(t.confirm_phone=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("confirm_phone")))])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"state"}},[t._v(t._s(t.$t("country")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"},{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],staticClass:"form-control",attrs:{type:"text",id:"state",name:"state",placeholder:t.$t("country_placeholder"),required:""},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("state")))])]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"city"}},[t._v(t._s(t.$t("city")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"},{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],staticClass:"form-control",attrs:{type:"text",id:"city",name:"city",placeholder:t.$t("city_placeholder"),required:""},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("city")))])])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-4"},[a("label",{attrs:{for:"state"}},[t._v(t._s(t.$t("ship_to"))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.port_name,expression:"port_name"},{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],staticClass:"form-control",attrs:{type:"text",id:"port_name",name:"port_name",placeholder:t.$t("ship_to_placeholder"),required:""},domProps:{value:t.port_name},on:{input:function(e){e.target.composing||(t.port_name=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("port_name")))])]),a("div",{staticClass:"form-group col-md-5"},[a("label",{attrs:{for:"state"}},[t._v(t._s(t.$t("port_city"))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.port_city,expression:"port_city"},{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],staticClass:"form-control",attrs:{type:"text",id:"port_city",name:"port_city",placeholder:t.$t("port_city_placeholder"),required:""},domProps:{value:t.port_city},on:{input:function(e){e.target.composing||(t.port_city=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("port_city")))])]),a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"state"}},[t._v(t._s(t.$t("port_code"))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.port_code,expression:"port_code"},{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],staticClass:"form-control",attrs:{type:"text",id:"port_code",name:"port_code",placeholder:t.$t("port_code_placeholder"),required:""},domProps:{value:t.port_code},on:{input:function(e){e.target.composing||(t.port_code=e.target.value)}}}),a("span",{staticClass:"alert-danger"},[t._v(t._s(t.errors.first("port_code")))])])]),a("p",[a("strong",[t._v(" **"+t._s(t.$t("advise"))+". ")])])])])]),a("div",{staticClass:"col md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header text-center"},[a("h3",[a("strong",[t._v(t._s(t.$t("summary")))])])]),a("div",{staticClass:"card-body"},[a("p",[t._v("Code: "),a("strong",[t._v(t._s(t.chechoutref))])]),a("p",[t._v("Total: "),a("strong",[t._v("US $ "+t._s(t.formatPrice(t.cartTotalAmount)))])])]),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"btn btn-primary btn-block fechar",attrs:{type:"submit"}},[t._v("\n                                    "+t._s(t.$t("send_request_button"))+"\n                                ")])])])])])])])])])},o=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("bd86")),c=a("2f62"),l=a("d722");function d(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var m={name:"VueCheckout",computed:u({chechoutref:function(){return"REF"+(new Date).toISOString().replace(/\D/g,"")+"SAQ"}},Object(c["c"])(["cartTotalAmount","GET_LANG"])),data:function(){return{first_name:null,last_name:null,company:null,email:null,confirm_email:null,phone:null,confirm_phone:null,state:null,city:null,port_name:null,port_city:null,port_code:null,total:null,datus:{}}},methods:{formatPrice:function(t){return new Intl.NumberFormat("de-DE",{minimumFractionDigits:2}).format(t)},sendRequest:function(){var t=this;this.$validator.validateAll().then(function(e){if(e){var a=JSON.parse(localStorage.getItem("cart"));if(0!=a.length){var r=t.$loading.show({isFullPage:!0});t.$noty.warning(t.$t("process_request"),{timeout:2e3}),t.datus.total=t.formatPrice(t.cartTotalAmount),t.datus.reference=t.chechoutref,t.datus.items=a,l["a"].post("cart/pdf/",{datus:JSON.stringify(t.datus)}).then(function(e){t.$store.commit("reInitCart"),localStorage.setItem("cart",JSON.stringify([])),t.$noty.info(t.$t("request_wait"),{timeout:3e3}),setTimeout(function(){r.hide(),localStorage.setItem("cart",JSON.stringify([])),t.$router.push("download/"+e.data.code)},5e3)}).catch(function(){t.$noty.error(t.$t("request_wrong")),localStorage.setItem("cart",JSON.stringify([])),t.$router.push("/")})}else t.$noty.warning(t.$t("empty_cart"))}else t.$noty.error(t.$t("wrong_data_in_form"))})}},watch:{first_name:function(t){""!=t?this.datus.first_name=t:delete this.datus.first_name},last_name:function(t){""!=t?this.datus.last_name=t:delete this.datus.last_name},company:function(t){""!=t?this.datus.company=t:delete this.datus.company},email:function(t){""!=t?this.datus.email=t:delete this.datus.email},confirm_email:function(t){""!=t?this.datus.confirm_email=t:delete this.datus.confirm_email},phone:function(t){""!=t?this.datus.phone=t:delete this.datus.phone},confirm_phone:function(t){""!=t?this.datus.confirm_phone=t:delete this.datus.confirm_phone},state:function(t){""!=t?this.datus.state=t:delete this.datus.state},city:function(t){""!=t?this.datus.city=t:delete this.datus.city},port_name:function(t){""!=t?this.datus.port_name=t:delete this.datus.port_name},port_city:function(t){""!=t?this.datus.port_city=t:delete this.datus.port_city},port_code:function(t){""!=t?this.datus.port_code=t:delete this.datus.port_code}}},p=m,f=a("2877"),_=Object(f["a"])(p,i,o,!1,null,null,null),v=_.exports,h={name:"Checkout",components:{VueCheckout:v}},g=h,y=Object(f["a"])(g,r,s,!1,null,null,null);e["default"]=y.exports},"833a":function(t,e,a){"use strict";var r=a("1d2d"),s=a.n(r);s.a},b28b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-customized")},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"shop",attrs:{id:"customized"}},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"alert alert-info text-center"},[a("h4",[t._v(t._s(t.$t("branded")))]),a("p",[t._v(t._s(t.$t("branded_1"))+".")])])]),a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"alert alert-info text-center"},[a("h4",[t._v(t._s(t.$t("contact_us")))])]),t._m(0),t._m(1)])])])]),a("div",{staticClass:"row",attrs:{id:"lightgallery"}},[a("a",{staticClass:"col-sm-12 col-md-4 customized-img p-0",attrs:{href:t.img1}},[a("img",{staticClass:"img-fluid",attrs:{src:t.img1,alt:""}})]),a("a",{staticClass:"col-sm-12 col-md-4 customized-img p-0",attrs:{href:t.img2}},[a("img",{staticClass:"img-fluid",attrs:{src:t.img2,alt:""}})]),a("a",{staticClass:"col-sm-12 col-md-4 customized-img p-0",attrs:{href:t.img3}},[a("img",{staticClass:"img-fluid",attrs:{src:t.img3,alt:""}})]),a("a",{staticClass:"col-sm-12 col-md-4 customized-img p-0",attrs:{href:t.img4}},[a("img",{staticClass:"img-fluid",attrs:{src:t.img4,alt:""}})]),a("a",{staticClass:"col-sm-12 col-md-4 customized-img p-0",attrs:{href:t.img5}},[a("img",{staticClass:"img-fluid",attrs:{src:t.img5,alt:""}})]),a("a",{staticClass:"col-sm-12 col-md-4 customized-img p-0",attrs:{href:t.img6}},[a("img",{staticClass:"img-fluid",attrs:{src:t.img6,alt:""}})])])])]),a("news-letter")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticStyle:{color:"#000","text-decoration":"none"},attrs:{href:"https://t.me/saqqitrade"}},[a("i",{staticClass:"fab fa-telegram fa-3x"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticStyle:{color:"#000","text-decoration":"none"},attrs:{href:"https://api.whatsapp.com/send?phone=5551991424429&text=Hi",target:"_blank"}},[a("i",{staticClass:"fab fa-whatsapp-square fa-3x"})])}],n=a("3d70"),c=a("c652"),l=a.n(c),d=a("7856"),u=a.n(d),m=a("e121"),p=a.n(m),f=a("42cf"),_=a.n(f),v=a("269f"),h=a.n(v),g=a("ea3c"),y=a.n(g),b=a("1157"),C=a.n(b),w={name:"VueCustomized",components:{NewsLetter:n["a"]},data:function(){return{img1:l.a,img2:u.a,img3:p.a,img4:_.a,img5:h.a,img6:y.a}},created:function(){C()(document).ready(function(){C()("#lightgallery").lightGallery()})}},O=w,$=a("2877"),x=Object($["a"])(O,i,o,!1,null,null,null),j=x.exports,q={name:"Customized",components:{VueCustomized:j}},P=q,E=Object($["a"])(P,r,s,!1,null,null,null);e["default"]=E.exports},b789:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-cart")},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("div",{staticClass:"content text-center"},[a("h4",[t._v(t._s(t.$t("cart"))+" |")]),a("hr",{staticStyle:{height:".1rem","background-color":"#fff","margin-top":"-.2rem"}})])])])])]),a("div",{staticClass:"shop",staticStyle:{padding:"0rem","padding-bottom":"1rem"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("router-link",{staticClass:"col-6 text-center continue",attrs:{to:"/"+t.GET_LANG+"/shop"}},[a("span",[t._v(" "+t._s(t.$t("continue_shopping"))+" ")])]),a("router-link",{staticClass:"col-6 text-center checkout",attrs:{to:"/"+t.GET_LANG+"/checkout"}},[a("span",{staticStyle:{"margin-top":"1vh"}},[t._v(" "+t._s(t.$t("checkout"))+" ")])])],1),t.items?a("div",{staticClass:"row",staticStyle:{"min-height":"100vh"}},t._l(t.items,function(t){return a("cart-item",{key:t.idenx,attrs:{item:t}})}),1):t._e(),a("div",{staticClass:"row"},[a("router-link",{staticClass:"col-6 text-center continue",attrs:{to:"/"+t.GET_LANG+"/shop"}},[a("span",{staticStyle:{"margin-top":"1vh"}},[t._v(" "+t._s(t.$t("continue_shopping"))+" ")])]),a("router-link",{staticClass:"col-6 text-center checkout",attrs:{to:"/"+t.GET_LANG+"/checkout"}},[a("span",{staticStyle:{"margin-top":"1vh"}},[t._v(" "+t._s(t.$t("checkout"))+" ")])])],1)])])])},o=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item?a("div",{staticClass:"col-sm-12 col-md-4 cart-item"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},["en"==t.GET_LANG?a("p",{staticClass:"card-title"},[t._v(t._s(t.item.product.name_en))]):t._e(),"fr"==t.GET_LANG?a("p",{staticClass:"card-title"},[t._v(t._s(t.item.product.name_fr))]):t._e(),"pt-br"==t.GET_LANG?a("p",{staticClass:"card-title"},[t._v(t._s(t.item.product.name_pt_br))]):t._e(),a("p",{staticClass:"card-title"},[a("span",[t._v("Dim: "+t._s(t.item.product.width)+"x"+t._s(t.item.product.heigth)+"x"+t._s(t.item.product.lateral)+" cm ")])]),a("p",{staticClass:"card-title"},[a("strong",[t._v(t._s(t.$t("price"))+": US $"+t._s(t.item.product.price)+"/uni.")])]),a("p",{staticClass:"card-title"},[a("strong",[t._v(t._s(t.$t("order"))+": "+t._s(t.item.quantity)+" uni.")])]),a("p",{staticClass:"card-title"},[a("strong",[t._v("Subtotal: $"+t._s(t.item.subtotal))])])]),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"btn btn-primary fechar",on:{click:function(e){return t.remove_from_cart(t.item.product.code)}}},[a("i",{staticClass:"far fa-trash-alt"})]),a("router-link",{staticClass:"btn btn-primary entrar",attrs:{to:"/"+t.GET_LANG+"/product/"+t.item.product.slug+"/"+t.item.product.code}},[a("i",{staticClass:"fas fa-eye"})])],1)])]):t._e()},l=[],d=(a("6b54"),a("a481"),a("2f62"));function u(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var p={name:"CartItem",props:{item:Object},computed:m({},Object(d["c"])(["GET_LANG"])),methods:m({},Object(d["b"])(["deleteFromCart"]),{remove_from_cart:function(t){this.deleteFromCart(t),this.$noty.info(this.$t("delete_from_cart"))},formatPrice:function(t){var e=(t/1).toFixed(2).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}})},f=p,_=(a("833a"),a("2877")),v=Object(_["a"])(f,c,l,!1,null,"a7b2ef84",null),h=v.exports;function g(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var b={name:"VueCart",components:{CartItem:h},computed:y({},Object(d["c"])(["GET_LANG","GET_CART"]),{items:function(){return this.GET_CART}})},C=b,w=Object(_["a"])(C,i,o,!1,null,null,null),O=w.exports,$={name:"Cart",components:{VueCart:O}},x=$,j=Object(_["a"])(x,r,s,!1,null,null,null);e["default"]=j.exports},c652:function(t,e,a){t.exports=a.p+"img/custom1.62356c84.jpg"},d2f1:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-product")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("div",{staticClass:"content text-center"},[a("h4",[t._v(" "+t._s(t.$t("product"))+" | REF "+t._s(t.$route.params.id))]),a("hr",{staticStyle:{height:".1rem","background-color":"#fff","margin-top":"-.2rem"}})])])])])]),a("div",{staticClass:"shop"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6 "},[a("vue-img",{attrs:{ims:t.saqimg}})],1),a("div",{staticClass:"col-sm-12 col-md-6 "},[a("add-prod",{attrs:{prod:t.prod,categories:t.categories}})],1)])])])])},o=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},["en"==t.GET_LANG?a("p",{staticClass:"card-title",staticStyle:{"margin-top":"-.5rem"}},[t._v(t._s(t.prod.name_en))]):t._e(),"fr"==t.GET_LANG?a("p",{staticClass:"card-title",staticStyle:{"margin-top":"-.5rem"}},[t._v(t._s(t.prod.name_fr))]):t._e(),"pt-br"==t.GET_LANG?a("p",{staticClass:"card-title",staticStyle:{"margin-top":"-.5rem"}},[t._v(t._s(t.prod.name_pt_br))]):t._e(),a("span",[t._v(" | REF "+t._s(t.prod.code)+". |  "),a("strong",[t._v("US $ "+t._s(t.prod.price)+" ")])]),a("br"),a("span",[t._v(t._s(t.$t("width"))+": "+t._s(t.prod.width)+" cm")]),a("br"),a("span",[t._v(t._s(t.$t("heigth"))+": "+t._s(t.prod.heigth)+" cm")]),a("br"),a("span",[t._v(t._s(t.$t("lateral"))+": "+t._s(t.prod.lateral)+" cm")]),a("br"),a("p",{staticClass:"card-title"},[a("strong",[t._v(t._s(t.$t("min_order"))+": "+t._s(t.prod.mini_quantity)+" uni.")])]),a("ul",{staticClass:"list-group list-group-flush"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-secondary fechar",staticStyle:{color:"#fff"},attrs:{type:"button"},on:{click:function(e){return t.minusProd()}}},[a("i",{staticClass:"far fa-minus-square"})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"qty"}],staticClass:"form-control",attrs:{type:"number",min:t.prod.mini_quantity,placeholder:t.prod.mini_quantity,"aria-label":"","aria-describedby":"basic-addon1"},domProps:{value:t.qty},on:{input:function(e){e.target.composing||(t.qty=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary entrar",staticStyle:{color:"#fff"},attrs:{type:"button"},on:{click:function(e){return t.moreProd()}}},[a("i",{staticClass:"far fa-plus-square"})])])])])]),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"btn btn-primary btn-block fechar",on:{click:function(e){return t.add_to_cart(t.prod.code,t.qty)}}},[t._v("\n            "+t._s(t.$t("add_to_cart"))+"\n        ")])])])},l=[],d=a("2f62");function u(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var p={name:"AddProd",props:{categories:{},prod:{}},computed:m({},Object(d["c"])(["GET_LANG"]),{quanty:function(){return this.prod.mini_quantity}}),data:function(){return{qty:null}},methods:m({minusProd:function(){if(null==this.qty||this.qty<0)return this.qty=this.prod.mini_quantity,void this.$noty.warning(this.$t("minimum_value"));this.qty!=this.prod.mini_quantity?this.qty-=1e3:this.$noty.warning(this.$t("minimum_value"))},moreProd:function(){this.qty<=this.prod.mini_quantity?this.qty=this.prod.mini_quantity+1e3:this.qty+=1e3}},Object(d["b"])(["addToCart"]),{add_to_cart:function(t,e){null==e?(this.addToCart({productCode:t,quantity:this.prod.mini_quantity}),this.$noty.success(this.$t("product_added"))):(this.addToCart({productCode:t,quantity:e}),this.$noty.success(this.$t("product_added")))}})},f=p,_=a("2877"),v=Object(_["a"])(f,c,l,!1,null,null,null),h=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"owl-carousel owl-theme",staticStyle:{border:"1px solid #5E2750"}},t._l(t.ims,function(t){return a("div",{key:t.id,staticClass:"item",attrs:{im:t}},[a("img",{staticClass:"img-fluid",staticStyle:{height:"400px"},attrs:{src:t.image_saqqi,alt:""}})])}),0)},y=[],b=a("1157"),C=a.n(b),w={name:"VueImg",props:{ims:{}},beforeUpdate:function(){C()(document).ready(function(){C()(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!1,autoplay:!0,autoplayTimeout:3e3,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})})}},O=w,$=Object(_["a"])(O,g,y,!1,null,null,null),x=$.exports,j=a("d722");function q(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function P(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?q(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):q(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var E={name:"VueProduct",computed:P({},Object(d["c"])(["GET_LANG"])),components:{AddProd:h,VueImg:x},data:function(){return{categories:[],prod:{},saqimg:{},img_url:"https://api.saqqi.com/media/"}},created:function(){var t=this;j["a"].get("products/"+this.$route.params.id+"/").then(function(e){t.prod=e.data,t.categories=e.data.categories}),j["a"].get("img/"+this.$route.params.id+"/").then(function(e){t.saqimg=e.data})}},N=E,S=Object(_["a"])(N,i,o,!1,null,null,null),k=S.exports,G={name:"Product",components:{VueProduct:k}},T=G,D=Object(_["a"])(T,r,s,!1,null,null,null);e["default"]=D.exports},dc40:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("not-found")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop",attrs:{id:"notfound"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"alert alert-danger text-center"},[a("h4",[t._v(t._s(t.$t("not_found_1")))]),a("p",[t._v(t._s(t.$t("not_found_p")))])]),a("router-link",{staticClass:"btn btn-dark btn-block",attrs:{to:"/"}},[t._v("\n                            "+t._s(t.$t("not_found_back"))+"\n                        ")])],1)])])])])])},o=[],n={name:"NotFound"},c=n,l=a("2877"),d=Object(l["a"])(c,i,o,!1,null,null,null),u=d.exports,m={name:"Found404",components:{NotFound:u}},p=m,f=Object(l["a"])(p,r,s,!1,null,null,null);e["default"]=f.exports},e121:function(t,e,a){t.exports=a.p+"img/custom3.c2716fb7.jpg"},ea3c:function(t,e,a){t.exports=a.p+"img/custom7.dc3f8997.jpg"},f820:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],i=a("2877"),o={},n=Object(i["a"])(o,r,s,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=about.c229ffe5.js.map