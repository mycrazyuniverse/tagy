(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{160:function(t,e,n){var content=n(165);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("4687300c",content,!0,{sourceMap:!1})},164:function(t,e,n){"use strict";var r=n(160);n.n(r).a},165:function(t,e,n){(t.exports=n(34)(!1)).push([t.i,".footer{background-color:#09aae0;padding-top:30px;padding-bottom:30px}.footer li{padding-left:10px}",""])},166:function(t,e,n){"use strict";var r={props:["items"]},o=(n(164),n(9)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer dib w100"},[n("div",{staticClass:"container"},[n("div",{staticClass:"pull-left"},[n("ul",{staticClass:"footer-items"},t._l(t.items,function(e,r){return n("li",{key:r,staticClass:"float-left"},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])}),0)])])])},[],!1,null,null,null);e.a=component.exports},263:function(t,e,n){"use strict";n.r(e);var r=n(33),o=(n(18),n(2)),l=n(74),c=n(75),d=n(201),v=n(179),_={mounted:function(){},components:{}},m=n(9),f=Object(m.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"carousel-wrapper"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("ul",{staticClass:"carousel",attrs:{"data-target":"carousel"}},[this._t("default")],2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rightButton carousel-button",attrs:{"data-action":"slideLeft"}},[e("a",{staticClass:"arrow text-center"},[e("span",{staticClass:"arrow-right dib"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leftButton carousel-button",attrs:{"data-action":"slideRight"}},[e("a",{staticClass:"arrow text-center"},[e("span",{staticClass:"arrow-left dib"})])])}],!1,null,null,null).exports,h=n(171),C={components:{WebshopLogo:n(178).a},props:{title:{type:String,default:""},logo:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:""}},methods:{bgimage:function(t){return"background-image: url("+t+");"}}},x=Object(m.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"card",attrs:{"data-target":"card"}},[n("a",{staticClass:"carousel-image dib",style:t.bgimage(t.image),attrs:{href:t.link,target:"_blank"}},[n("div",{staticClass:"text-overlay text-center"},[n("p",{staticClass:"dib"},[n("img",{staticClass:"webshop-logo",attrs:{src:t.logo,width:"40"}})]),t._v(" "),n("p",{staticClass:"dealtitle"},[t._v(t._s(t.title))])])])])},[],!1,null,null,null).exports,y=n(202),w=n(166),k=n(167),$=n.n(k),O=Object(r.a)({asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,e.route,"/api/tagcity/v3/home",r="nl"!=n.i18n.locale?"http://dev-tagcity.pantheonsite.io/"+n.i18n.locale+"/api/tagcity/v3/home":"http://dev-tagcity.pantheonsite.io/api/tagcity/v3/home",t.next=5,$.a.get(r,{params:{}});case 5:return o=t.sent,data=o.data,t.abrupt("return",{common:data.common,intro:data.intro,blog:data.blog,ads:data.ads,optin:data.optin,tags:data.tags,meta:data.meta});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter(function(i){return i.code!==t.$i18n.locale})},currentLocal:function(){return this.$i18n.locale}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.desc}]}},mounted:function(){},props:{},components:{Nav:c.a,TopBar:l.a,Carousel:f,Optin:v.a,MiniPost:h.a,AdCard:x,Tag:d.a,Dialog:y.a,Footer:w.a}},"mounted",function(){}),j=Object(m.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("div",{staticClass:"bar"},[n("TopBar",{attrs:{search:t.common.search}}),t._v(" "),n("Nav",{attrs:{items:t.common.nav}})],1),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"intro padding text-center text ptb2x"},[n("h1",[t._v(t._s(t.intro.title))]),t._v(" "),n("p",[t._v(t._s(t.intro.content))])]),t._v(" "),n("div",{staticClass:"ptb2x",attrs:{id:"carousel"}},[n("Carousel",t._l(t.ads.content,function(t,e){return n("AdCard",{key:e,attrs:{title:t.post_title,logo:t.logo,image:t.og_img,link:t.link}})}),1)],1),t._v(" "),n("div",{staticClass:"best text-center dib w100 lh ptb2x",attrs:{id:"best"}},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.tags.title))]),t._v(" "),n("p",[t._v(t._s(t.tags.subtitle))])]),t._v(" "),t._l(t.tags.content,function(t){return n("Tag",{key:t.id,attrs:{id:t.id,details:t.post_content,url:t.url,author:t.author,status:t.status_data,title:t.title,timeline:t.timeline,dialog:t.dialog,action:t.action,discount:t.discount,properties:t.properties,primary_property:t.primary_property,template:t.template,btn:t.btn}})})],2),t._v(" "),n("div",{staticClass:"ptb2x dib w100"},[n("div",{staticClass:"title text-center"},[n("h2",[t._v(t._s(t.blog.title))]),t._v(" "),n("p",[t._v(t._s(t.blog.subtitle))])]),t._v(" "),n("ul",{staticClass:"list-style-none blogposts"},t._l(t.blog.content,function(t,e){return n("li",{key:e},[n("MiniPost",{attrs:{slug:t.slug,title:t.post_title,content:t.short_desc,thumbnail:t.mini,friendly_date:t.friendly_date,post_date:t.post_date,bg:"true"}})],1)}),0)]),t._v(" "),n("div",{staticClass:"ptb2x dib-w100"},[n("Optin",{staticClass:"rounded overflow-hidden",attrs:{title:t.optin.title,subtitle:t.optin.subtitle}})],1)]),t._v(" "),n("Dialog"),t._v(" "),n("Footer",{attrs:{items:t.common.footer}})],1)},[],!1,null,null,null);e.default=j.exports}}]);