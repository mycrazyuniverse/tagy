(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{274:function(t,e,n){"use strict";n.r(e);n(18);var r=n(2),c=n(75),o=n(74),l=n(166),h=n.n(l),v={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,e.route,"/api/tagcity/v3/home",r="nl"!=n.i18n.locale?"https://api.tagcity.be/"+n.i18n.locale+"/api/tagcity/v3/home":"https://api.tagcity.be/api/tagcity/v3/home",t.next=5,h.a.get(r,{params:{}});case 5:return c=t.sent,data=c.data,t.abrupt("return",{common:data.common});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter(function(i){return i.code!==t.$i18n.locale})},currentLocal:function(){return this.$i18n.locale}},components:{Nav:o.a,TopBar:c.a}},m=n(9),component=Object(m.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"categorie_overzicht"},[e("div",{staticClass:"bar"},[e("TopBar",{attrs:{search:this.common.search}}),this._v(" "),e("Nav",{attrs:{items:this.common.nav}})],1),this._v(" "),this._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{attrs:{id:"content"}},[e("h2",[this._v("Webshops in deze categorie")])])])}],!1,null,null,null);e.default=component.exports}}]);