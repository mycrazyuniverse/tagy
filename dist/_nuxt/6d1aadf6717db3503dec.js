(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{159:function(t,e,o){var content=o(165);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("4687300c",content,!0,{sourceMap:!1})},161:function(t,e,o){var content=o(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("5daa0e44",content,!0,{sourceMap:!1})},163:function(t,e,o){"use strict";var n={props:["items"]},r=(o(164),o(9)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer dib w100 lh-lg"},[o("div",{staticClass:"container"},[o("div",{staticClass:"pull-left"},[o("ul",{staticClass:"footer-items"},t._l(t.items,function(e,n){return o("li",{key:n,staticClass:"float-left"},[o("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])}),0)])])])},[],!1,null,null,null);e.a=component.exports},164:function(t,e,o){"use strict";var n=o(159);o.n(n).a},165:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".footer{background-color:#1c73ba;padding-top:30px;padding-bottom:30px;color:#13315b;margin-top:30px}.footer a{color:#fff}.footer li{padding-left:10px}",""])},167:function(t,e,o){"use strict";var n=o(3),r=o(15),l=o(20),c=o(103),d=o(52),f=o(10),h=o(53).f,m=o(77).f,x=o(11).f,v=o(186).trim,_=n.Number,y=_,w=_.prototype,C="Number"==l(o(76)(w)),k="trim"in String.prototype,z=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,l=(e=k?e.trim():v(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof _&&(C?f(function(){w.valueOf.call(o)}):"Number"!=l(o))?c(new y(z(e)),o,_):z(e)};for(var S,j=o(7)?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;j.length>E;E++)r(y,S=j[E])&&!r(_,S)&&x(_,S,m(y,S));_.prototype=w,w.constructor=_,o(12)(n,"Number",_)}},170:function(t,e,o){"use strict";var n={props:{type:{type:String,default:"mini"},bg:{type:Boolean},title:{type:String},content:{type:String},slug:{type:String},thumbnail:{type:String},friendly_date:{type:String},post_date:{type:String}}},r=(o(171),o(9)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"minipost",class:{"minipost-bg bg-white bg":t.bg}},[o("article",["mini"==t.type?o("a",{attrs:{href:t.slug}},[t.thumbnail?o("img",{staticClass:"float-right thumbnail",attrs:{src:t.thumbnail}}):t._e()]):t._e(),t._v(" "),o("a",{staticClass:"article-content",attrs:{href:t.slug}},[t.thumbnail&&"nano"==t.type?o("img",{staticClass:"float-right thumbnail",attrs:{src:t.thumbnail}}):t._e(),t._v(" "),o("time",{attrs:{datetime:t.post_date}},[t._v(t._s(t.friendly_date))]),t._v(" "),o("h4",[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.content))])])])])},[],!1,null,null,null);e.a=component.exports},171:function(t,e,o){"use strict";var n=o(161);o.n(n).a},172:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".minipost{height:125px;overflow:hidden}.minipost .article-content{display:table-cell;vertical-align:middle;height:125px;text-decoration:none;color:#173a68!important;padding-right:30px;padding-left:10px}.minipost h4{padding-top:5px;padding-bottom:5px;font-weight:700;text-decoration:underline}.minipost-bg{border-radius:10px;margin-right:15px}.minipost-bg article{padding-left:5px}.mininamopost{margin-top:10px;height:auto}.mininamopost .article-content{padding-top:5px;padding-bottom:10px;padding-left:0}.mininamopost img{height:70px;padding-left:10px}.mininamopost .article-content{height:auto;padding-right:0;width:100%;display:inline-block}",""])},176:function(t,e,o){"use strict";o(167);var n={props:{logo:{type:String,default:""},url:{type:String,default:""},w:{type:Number,default:42},h:{type:Number,default:42},title:{type:String,default:""}}},r=o(9),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"tooltip webshop-logo",style:{width:t.w+"px",height:t.h+"px"},attrs:{href:t.url,title:t.title}},[o("img",{attrs:{src:t.logo,width:"100%",alt:t.title}}),t._v(" "),t.title?o("span",{staticClass:"tooltiptext"},[t._v(t._s(t.title))]):t._e()])},[],!1,null,null,null);e.a=component.exports},178:function(t,e,o){"use strict";o(216);var n={props:{logo:{type:String,default:""},placeholder:{type:String,default:"your@emailadress.com"},btn:{type:String,default:"subscribe"},webshop:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},intro:{type:Boolean,default:!0}}},r=(o(255),o(9)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"optin"},[o("article",[o("form",[t.intro?o("div",{staticClass:"optin-container"},[o("div",{staticClass:"optin-logo"},[o("img",{staticClass:"optin-logo-img logo-img",attrs:{src:t.logo}}),t._v(" "),o("img",{staticClass:"envloppe",attrs:{src:"https://media.tagcity.be/2019/04/optin-1.svg?auto=compress",alt:"envloppe"}}),t._v(" "),o("div",{staticClass:"badge badge-right badge-absolute"},[t._v("1")])])]):t._e(),t._v(" "),o("div",{staticClass:"optin-text padding-xl"},[o("h2",{staticClass:"optin-title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"optin-subtitle"},[t._v(t._s(t.subtitle))]),t._v(" "),o("input",{staticClass:"form-control email-input",attrs:{type:"email",value:"",placeholder:t.placeholder}}),t._v(" "),o("p",{staticClass:"optinrespone"}),t._v(" "),o("input",{staticClass:"btn btn-primary optin-btn uppercase",attrs:{type:"submit","aria-label":t.btn},domProps:{value:t.btn}})])])])])},[],!1,null,null,null);e.a=component.exports},180:function(t,e,o){"use strict";o(36),o(167);var n={props:{src:{type:String,default:""},link:{type:String,default:""},w:{type:Number,default:35},h:{type:Number,default:35},content:{}},methods:{isURL:function(t){return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}}},r=(o(239),o(9)),component=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return this.isURL(this.content)?e("img",{attrs:{src:this.content}}):e("i",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);e.a=component.exports},186:function(t,e,o){var n=o(5),r=o(19),l=o(10),c=o(187),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t,e,o){var r={},d=l(function(){return!!c[t]()||"​"!="​"[t]()}),f=r[t]=d?e(x):c[t];o&&(r[o]=f),n(n.P+n.F*d,"String",r)},x=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},187:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},188:function(t,e,o){var content=o(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("ad282428",content,!0,{sourceMap:!1})},189:function(t,e,o){var content=o(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("9ba2f8d0",content,!0,{sourceMap:!1})},190:function(t,e,o){var content=o(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("63b2d814",content,!0,{sourceMap:!1})},191:function(t,e,o){var content=o(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("6870be56",content,!0,{sourceMap:!1})},192:function(t,e,o){var content=o(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("b9fad594",content,!0,{sourceMap:!1})},193:function(t,e,o){var content=o(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("3266f176",content,!0,{sourceMap:!1})},198:function(t,e,o){var content=o(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("7780924b",content,!0,{sourceMap:!1})},199:function(t,e,o){var content=o(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("4bdb01a6",content,!0,{sourceMap:!1})},208:function(t,e,o){"use strict";var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-center white-space"},[e("img",{staticClass:"second-masterpiece",attrs:{src:o(238),alt:"painting of the queen of TagCity"}})])}],r=(o(167),{methods:{minutesUntilMidnight:function(){var t=new Date;return t.setHours(24),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.getTime()-(new Date).getTime()}},props:{ends:{type:Number,default:0}}}),l=o(9),c=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"timer",attrs:{"data-ends":this.ends}},[e("i",{staticClass:"timer-hours"},[this._v("00:")]),this._v(" "),e("i",{staticClass:"timer-mins"},[this._v("00:")]),this._v(" "),e("i",{staticClass:"timer-secs"},[this._v("00")])])},[],!1,null,null,null).exports,d=o(180),f={props:{link:{type:String,default:""},name:{type:String,default:""},logo:{type:String,default:""}},methods:{tag_classes:function(){}},components:{Logo:d.a}},h=Object(l.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"property"},[o("Logo",{staticClass:"property-icon",attrs:{content:t.logo}}),t._v(" "),t.link?o("a",{staticClass:"property-text prevent",attrs:{href:t.link,title:t.name}},[t._t("default",[t._v(t._s(t.name))])],2):o("em",{staticClass:"property-text"},[t._t("default",[t._v(t._s(t.name))])],2)],1)},[],!1,null,null,null).exports,m=o(217),x=o(216),v={props:{id:{type:Number,default:0},content:{type:String,default:""}}},_=(o(245),Object(l.a)(v,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"moredetails"},[""!=t.content?o("div",{staticClass:"more"},[o("a",{staticClass:"more-btn more-bottom prevent",attrs:{"data-toggle":"collapse","data-target":"#t-details-"+t.id}},[t._v("\n      details\n      "),o("span",{staticClass:"arrow arrow-down float-right"})])]):t._e(),t._v(" "),t.content?o("div",{staticClass:"details"},[o("div",{staticClass:"collapse details-container w100",attrs:{id:"t-details-"+t.id}},[t._t("details",[o("div",{staticClass:"padding",domProps:{innerHTML:t._s(t.content)}})])],2)]):t._e()])},[],!1,null,null,null).exports),y={components:{Timer:c,Discount:m.a,Btn:x.a,MoreDetails:_,Property:h},props:{id:{type:Number,default:0},title:{type:String,default:""},author:{type:String,default:""},url:{type:String,default:""},status:{type:Object,default:{slug:"actief"}},details:{type:String,default:""},timeline:{startdate:{type:Object,default:{timestamp:100}},enddate:{type:Object,default:{timestamp:100}}},template:{type:Object,default:{slug:"default"}},layout:{type:Object,default:{background:{scale:"fixed"},padding:{bottom:"15px"},whitespace:!0,position:{discount:{text:"center",vertical:"center"},content:{text:"left",vertical:"center"},btn:{text:"right",vertical:"center"}}}},dialog:{type:Object,default:""},action:{type:Object,default:{slug:"dialog"}},discount:{type:Object,default:function(){return[]}},properties:{type:Array,default:[]},btn:{type:Object,default:{}},primary_property:{type:Object,default:{}}},methods:{tag_classes:function(){var t=[];return t.push("tag"),t.push("tag-table"),t.push("tag-default"),t.push("tag-bg"),this.action&&this.action.slug?t.push("tag-"+this.action.slug):t.push("tag-dialog"),t.push("rounded"),this.layout.background.scale,this.template&&("solden"==this.template&&t.push("tag-solden"),"hall-of-fame"==this.template&&t.push("tag-hall-of-fame")),"15px"==this.layout.padding.bottom&&t.push("mb-15"),"15px"==this.layout.padding.top&&t.push("mt-15"),"15px"==this.layout.padding.left&&t.push("ml-15"),"15px"==this.layout.padding.right&&t.push("mr-15"),t.push("tag-bg-"+this.layout.background.scale),this.status.slug&&t.push("tag-"+this.status.slug),t.join(" ")},tag_response:function(){return"?open="+this.id},body_classes:function(){var t=[];return this.layout.background.scale,t.push("tag-body"),t.join(" ")},content_classes:function(){var t=[];return t.push("tag-content"),t.push("tag-content-padding"),t.push("tag-"+this.layout.position.content.vertical),t.push("text-"+this.layout.position.content.text),t.join(" ")},button_classes:function(){var t=[];return t.push("tag-btncontainer"),t.push("tag-"+this.layout.position.btn.vertical),t.push("text-"+this.layout.position.btn.text),t.join(" ")},discount_classes:function(){var t=[];return t.push("tag-"+this.layout.position.discount.vertical),t.push("text-"+this.layout.position.discount.text),this.template&&(t.push("discount-box-"+this.template),"hall-of-fame"==this.template&&t.push("masterpiece")),t.join(" ")},propertyclass:function(t){var e=[];return e.push("tag-property"),e.push("tag-property-"+t.slug),e.push("property-"+t.slug),e.join(" ")},ends:function(){var data=100;return this.timeline&&this.timeline.enddate&&(data=this.timeline.enddate.timestamp),data},starts:function(){var data=100;return this.timeline&&this.timeline.startdate&&(data=this.timeline.startdate.timestamp),data},cloakurl:function(){return"https://api.tagcity.be"+this.url}}},w=(o(247),Object(l.a)(y,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{class:t.tag_classes(),attrs:{id:"tag"+t.id,"data-tagno":t.id,"data-response":t.tag_response(),"data-href":t.url,"data-starts-at":t.starts(),"data-ends-at":t.ends(),"data-dialog":JSON.stringify(t.dialog)}},["hall-of-fame"==t.template?t._t("tag",[o("div",{class:t.body_classes()},[t._t("discountbox",[o("div",{class:t.discount_classes()},[o("Discount",{staticClass:"tag-center",attrs:{value:t.discount.value,label:t.discount.label}},[t._t("discount")],2)],1)]),t._v(" "),t._t("default",[o("div",{class:t.content_classes()},[o("div",{staticClass:"tagcontent-head"},[o("p",{staticClass:"stars"},[o("svg-icon",{staticClass:"star",attrs:{name:"star"}}),t._v(" "),o("svg-icon",{staticClass:"star",attrs:{name:"star"}}),t._v(" "),o("svg-icon",{staticClass:"star",attrs:{name:"star"}}),t._v(" "),o("svg-icon",{staticClass:"star",attrs:{name:"star"}}),t._v(" "),o("svg-icon",{staticClass:"star",attrs:{name:"star"}})],1)]),t._v(" "),o("div",{staticClass:"tagcontent-body"},[t.primary_property.content?o("p",{staticClass:"important-prop tag-properties"},["ends-in"==t.primary_property.shared?o("Property",{attrs:{name:t.primary_property.content,link:t.primary_property.link}},[t._v("\n                "+t._s(t.primary_property.name)+"\n                "),o("Timer",{attrs:{ends:t.timeline.enddate.timestamp}})],1):o("Property",{attrs:{name:t.primary_property.content,link:t.primary_property.link}})],1):t._e(),t._v(" "),o("h3",{staticClass:"tag-title"},[o("a",{attrs:{href:t.url}},[t._v(t._s(t.title))])]),t._v(" "),t._t("properties",[t.properties?o("ul",{staticClass:"tag-properties"},t._l(t.properties,function(e,n){return o("li",{key:n,class:t.propertyclass(e)},["ends-in"==e.shared?o("Property",{attrs:{name:e.name,logo:e.logo,link:e.link}},[t._v("\n                    "+t._s(e.name)+"\n                    "),o("Timer",{attrs:{ends:t.timeline.enddate.timestamp}})],1):o("Property",{attrs:{name:e.content,logo:e.logo,link:e.link}})],1)}),0):t._e(),t._v(" "),""!=t.content?o("div",{staticClass:"more"},[o("a",{staticClass:"more-btn prevent",attrs:{"data-toggle":"collapse","data-target":"#t-details-"+t.id}},[t._v("\n                  details\n                  "),o("span",{staticClass:"arrow arrow-down float-right"})])]):t._e()])],2),t._v(" "),o("div",{staticClass:"tagcontent-foot"},[t._t("button",[o("btn",{attrs:{content:t.btn}})])],2)]),t._v(" "),t._m(0)])],2),t._v(" "),t.details?o("div",{staticClass:"details"},[o("div",{staticClass:"collapse details-container w100",attrs:{id:"t-details-"+t.id}},[t._t("details",[o("div",{staticClass:"padding",domProps:{innerHTML:t._s(t.details)}})])],2)]):t._e()]):t._t("tag",[t._t("head"),t._v(" "),o("div",{class:t.body_classes()},[t._t("discountbox",[o("Discount",{class:t.discount_classes(),attrs:{value:t.discount.value,label:t.discount.label}},[t._t("discount")],2)]),t._v(" "),t._t("default",[o("div",{class:t.content_classes()},[o("div",{staticClass:"tagcontent-head"},[t.primary_property.content?o("p",{staticClass:"important-prop tag-properties"},["ends-in"==t.primary_property.shared?o("Property",{attrs:{name:t.primary_property.content,link:t.primary_property.link}},[t._v("\n                "+t._s(t.primary_property.name)+"\n                "),o("Timer",{attrs:{ends:t.timeline.enddate.timestamp}})],1):o("Property",{attrs:{name:t.primary_property.content,link:t.primary_property.link}})],1):t._e()]),t._v(" "),o("div",{staticClass:"tagcontent-body"},[o("h3",{staticClass:"tag-title"},[o("a",{attrs:{href:t.cloakurl(),title:t.title}},[t._v(t._s(t.title))])])]),t._v(" "),o("div",{staticClass:"tagcontent-foot"},[t._t("properties",[t.properties?o("ul",{staticClass:"tag-properties"},t._l(t.properties,function(e,n){return o("li",{key:n,class:t.propertyclass(e)},["ends-in"==e.shared?o("Property",{attrs:{name:e.name,logo:e.logo,link:e.link}},[t._v("\n                    "+t._s(e.name)+"\n                    "),o("Timer",{attrs:{ends:t.timeline.enddate.timestamp}})],1):o("Property",{attrs:{name:e.content,logo:e.logo,link:e.link}})],1)}),0):t._e()])],2)])]),t._v(" "),t.layout.whitespace?o("div",{staticClass:"tag-center white-space"}):t._e(),t._v(" "),t._t("button",[o("div",{class:t.button_classes()},[o("btn",{attrs:{content:t.btn}})],1)])],2),t._v(" "),t._t("foot"),t._v(" "),t._t("details",[o("MoreDetails",{attrs:{id:t.id,content:t.details}})])])],2)},n,!1,null,null,null));e.a=w.exports},209:function(t,e,o){"use strict";var n=o(178),r={},l=(o(257),o(9)),c=Object(l.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"codal"},[e("img",{staticClass:"codal-logo logo-img",attrs:{width:"58"}}),this._v(" "),e("h1",{staticClass:"codal-title"}),this._v(" "),e("input",{staticClass:"codal-code",attrs:{type:"text",value:"geen code nodig",readonly:""}}),this._v(" "),e("a",{staticClass:"codal-btn btn btn-default uppercase",attrs:{target:"_blank"}})])}],!1,null,null,null).exports,d={components:{Optin:n.a,Codal:c},mounted:function(){}},f=(o(259),Object(l.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dialog hide",attrs:{id:"dialog"}},[e("div",{staticClass:"dialog-content rounded"},[e("div",{staticClass:"close dia-close"}),this._v(" "),e("div",{staticClass:"dialog-slot"},[this._t("default",[e("Codal")])],2),this._v(" "),e("Optin",{attrs:{intro:!1}})],1),this._v(" "),e("div",{staticClass:"overlay dia-close"})])},[],!1,null,null,null));e.a=f.exports},216:function(t,e,o){"use strict";var n={props:{content:{type:Object,default:{}},env:{type:String,default:"tag"},layout:{type:String,default:"default"},arrow:{type:Boolean,default:!0}},methods:{classes:function(){var t=[];return t.push("btn"),t.push("btn-"+this.env),t.push("btn-"+this.layout),this.arrow,t.join(" ")}}},r=(o(243),o(9)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.classes(),attrs:{"aria-label":t.content.content}},[o("span",{staticClass:"buttontext"},[t._v(t._s(t.content.content))]),t._v(" "),t.arrow?o("span",{staticClass:"arrow arrow-right float-right"}):t._e()])},[],!1,null,null,null);e.a=component.exports},217:function(t,e,o){"use strict";var n={methods:{discount_classes:function(){var t=[];return t.push("discount-box"),"center"==this.position&&(t.push("center"),t.push("text-center")),this.border&&t.push("discount-border"),t.join(" ")}},props:{position:{type:String,default:"center"},border:{type:Boolean,default:!0},value:{type:String,default:""},label:{type:String,default:""},context:{type:String,default:""},labelbg:{type:String,default:""}},computed:{sizeclass:function(){var t=this.value.length,e="text";return e=t<=4?"text-lg":t<=5?"text-md":t<=7?"text-sm":t<=10?"text-xs":t<=12?"text-mini":t<=14?"text-micro":"text-nano","discount-text "+e},labelcolorStyle:function(){if(this.labelbg)return"background: "+this.labelbg+";"}}},r=(o(241),o(9)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.discount_classes()},[t._t("default",[o("p",{class:t.sizeclass},[t._v(t._s(t.value))]),t._v(" "),t.label?o("p",{staticClass:"label label-default uppercase"},[t._v(t._s(t.label))]):t._e()])],2)},[],!1,null,null,null);e.a=component.exports},238:function(t,e,o){t.exports=o.p+"31b161792688083accec1673fc0f862d.svg"},239:function(t,e,o){"use strict";var n=o(188);o.n(n).a},240:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".logo-prop{margin-top:15px}.logoprop-content{font-size:12px;position:relative;top:-14px;margin-right:10px}",""])},241:function(t,e,o){"use strict";var n=o(189);o.n(n).a},242:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".text-lg{font-size:32px}.discount-text{font-weight:700;padding-bottom:5px}.coupon-top{padding-top:15px!important}.coupon-bottom{padding-bottom:15px!important}.discount-box{padding-right:15px;padding-left:15px;width:100px;line-height:1}.discount-box .label-default{color:#fff;background-color:#1c73ba}.discount-box .label{display:inline-block;padding:5px 0;border-radius:80px;width:90px;font-size:14px;font-weight:700}.text-md{font-size:28px}.text-sm{font-size:20px}.text-xs{font-size:16px}.text-mini{font-size:12px}.text-micro{font-size:10px}.text-nano{font-size:8px}.discount-border{border-right:1px dashed #85b5c5}.discount-box .tooltiptext{font-size:10px;top:84%!important}",""])},243:function(t,e,o){"use strict";var n=o(190);o.n(n).a},244:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".btn{-webkit-appearance:none;border:none;font-size:15px;font-weight:700;text-decoration:none;border-radius:40px;padding:10px 20px;cursor:pointer;display:inline-block}.btn .arrow{position:relative;top:5px;margin-left:10px}.btn-primary{background-color:#1c73ba;color:#fff}.btn-primary .arrow-right{border-left:5px solid #fff}.btn-default{background-color:#1c73ba;color:#fff}.btn-default .arrow-right{border-left:5px solid #fff}.btn-tag{text-transform:uppercase;font-weight:700;width:215px}@media only screen and (max-width:1180px){.tag{border-radius:0}.more-bottom{padding-right:10px}.btn-tag{width:21px!important;padding:0 7px 10px 10px!important}.btn-tag .buttontext{display:none}}",""])},245:function(t,e,o){"use strict";var n=o(191);o.n(n).a},246:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".details{color:grey;font-size:12px}.details .details-container{background-color:#cfd6e0;color:#163a68;line-height:1.4}.details .detail-content{padding:10px}.details .show{position:relative}.more{font-size:12px}.more-bottom{float:right;padding-right:20px;height:0;top:-20px;position:relative}.more-bottom .arrow-down{border-width:3px;border-top-color:163a68}",""])},247:function(t,e,o){"use strict";var n=o(192);o.n(n).a},248:function(t,e,o){e=t.exports=o(34)(!1);var n=o(105),r=n(o(249)),l=n(o(250)),c=n(o(251)),d=n(o(252)),f=n(o(253)),h=n(o(254));e.push([t.i,".tag-flex{display:flex;align-items:center}.tag-flex .center{display:flex;flex:1;justify-content:center;flex-direction:column}.tag-bg-fixed{overflow:hidden}.tag-bg-fixed .tag-body{width:100%}.tag-content-padding{padding-top:30px;padding-bottom:30px}.tag-solden{background-image:url("+r+");background-size:cover;background-color:#00ace8!important}.tag-solden .more-btn{color:#163a68}.tag-solden .arrow-down{border-top-color:#163a68}.tag-solden .discount-border{border-right:1px dashed #163a68}.tag-solden .white-space{background-image:url("+l+");background-repeat:no-repeat;background-position:50%;background-size:contain;background-size:80%}.tag-solden .discount-box .label-default{background-color:#5376a2;color:#fff}.tag-solden .tag-properties .property-icon{fill:#406ba1}.tag-solden .tag-properties{color:#406ba1}.tag-freedelivery{background-image:url("+c+");background-size:cover;background-position:bottom;background-repeat:no-repeat;background-color:#00ace8}.tag-content{width:50%;padding-left:15px}.tag-btncontainer{padding-right:15px}.tag-table .tag-body{display:table;height:100px;min-height:100px}.tag-table .tag-center{vertical-align:middle;display:table-cell}.tag-table .tag-top{vertical-align:top;display:table-cell}.tag-table .tag-bottom{vertical-align:bottom;display:table-cell}.tag{background-color:#fff;position:relative;width:100%;cursor:pointer}.tag .white-space{width:15%}.tag .tag-title{font-size:20px;font-weight:700;text-decoration:underline;line-height:1;letter-spacing:-.5px;padding-top:5px;padding-bottom:7px}.tag .tag-title a{color:#173a68;text-decoration:underline}.tag-properties{font-size:14px;color:#6f6f6f;width:100%;display:inline-block}.tag-properties .property-icon{fill:#6f6f6f;width:20px;height:20px;position:relative;top:5px}.tag-properties .property-icon svg{width:20px;height:20px}.tag-properties .property-text{padding-right:10px;padding-left:2px}.tag-properties li{float:left}.important-prop{font-weight:700;text-transform:uppercase;font-size:14px;color:#f13b3b}.stars{display:inline-block}.stars .star{fill:#fbae17;float:left;width:25px;height:25px;padding-left:2px;padding-right:2px}.tag-search .tag-content{width:100%}.tag-halloffame{background-image:url("+d+");background-color:#86231d}.tag-halloffame .secondmasterpiece{position:absolute;right:-120px;top:-110px}.tag-halloffame .important-prop{color:#fbae16}.tag-halloffame .details .details-container{background-color:#6e0b0b;color:#fbae17;text-align:center}.tag-halloffame .tag-properties li{float:none;display:inline-block}.tag-halloffame .arrow-down{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #fff;margin-top:4px;margin-left:4px}.tag-halloffame .tag-properties{margin-bottom:10px}.tag-halloffame .more{font-size:12px;display:inline-block}.tag-halloffame .tag-body{background-repeat:repeat-x;background-position-y:120%;background-position-x:60%;display:table;height:100px;min-height:100px;background-image:url("+f+");background-size:50%}.tag-halloffame .tagcontent-body{margin-top:15px;margin-bottom:15px}.tag-halloffame .btn{background-color:#fbae17}.tag-halloffame .tag-content{width:70%;text-align:center;padding-left:0!important}.tag-halloffame .tag-content a{color:#fff}.tag-halloffame .discountbox{margin-left:30px;margin-right:30px}.tag-halloffame .masterpiece{padding-left:3%}.tag-halloffame .masterpiece .discount-box{width:20%}.tag-halloffame .discount-box{background-image:url("+h+");background-repeat:no-repeat;background-position:50%;border:none;height:160px;margin-left:20px;padding-left:30px;padding-right:30px}.tag-halloffame .discount-box .label{width:90px;background-color:#fbae17}@media only screen and (max-width:1180px){.text-lg{font-size:22px}.text-md{font-size:20px}.text-sm{font-size:16px}.text-xs{font-size:12px!important}.important-prop{font-size:12px}.text-mini{font-size:10px}.text-nano{font-size:6px}.discount-box .label{font-size:12px}.discount-box{padding-right:5px;padding-left:5px;width:90px}.discount-box .label{width:80px}.tag-default{border-radius:0}.property-text{font-size:10px}.tag-title{font-size:15px!important}.tag-properties .property-icon,.tag-properties .property-icon svg{width:15px;height:15px}.tag-content-padding{padding-top:15px;padding-bottom:15px}.tag-content{width:55%;padding-left:10px}.breadcrumb-icon{width:20px;padding-top:5px;height:20px}.tag-halloffame .tag-content{padding-left:5px;padding-right:5px}.tag-halloffame .white-space{display:none}.tag-halloffame .discount-box{padding-left:10px!important;padding-right:10px!important}.tag-halloffame .discount-box .label{width:80px!important;margin-left:7px;margin-right:7px}.tag-halloffame .btn{display:none}}",""])},249:function(t,e,o){t.exports=o.p+"9245a7aec7433fc6651138616c45e562.svg"},250:function(t,e,o){t.exports=o.p+"img/8c54d66.png"},251:function(t,e,o){t.exports=o.p+"baa9034950efe136e531cfdd2b6920e3.svg"},252:function(t,e,o){t.exports=o.p+"img/99dfe1e.jpg"},253:function(t,e,o){t.exports=o.p+"066f00028e7f1f2eda291caa76188800.svg"},254:function(t,e,o){t.exports=o.p+"b41321ce142cfa1315df14ca7a50a94b.svg"},255:function(t,e,o){"use strict";var n=o(193);o.n(n).a},256:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".optin{line-height:1.2;padding-top:0;padding-left:0;padding-right:0;text-align:center;background-color:#fff}.optin h2{padding-bottom:10px;font-size:18px}.optin .btn{margin-top:10px}.optin .form-control{background:#dcf4ff;border:none;font-size:16px;margin-top:15px;text-align:center;padding:15px}.optin .optin-container{background:#3f4c6b;background-position:bottom;background-size:cover}.optin .optin-logo{position:relative;display:inline-block;top:20px}.optin .optin-logo .optin-logo-img{width:58px;left:21px;position:absolute}.optin .optin-logo .envloppe{width:100px}",""])},257:function(t,e,o){"use strict";var n=o(198);o.n(n).a},258:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,".codal-logo{border-radius:50px;padding:10px;background-color:#fff;margin-bottom:10px}.codal-btn{margin-top:15px}.codal-title{padding-bottom:15px;font-size:20px}.codal-code{font-size:29px;text-align:center;border-top:2px dashed #e8edf0;border-bottom:2px dashed #e8edf0;padding-top:20px;padding-bottom:20px;border-left:0;border-right:0;font-weight:bolder}",""])},259:function(t,e,o){"use strict";var n=o(199);o.n(n).a},260:function(t,e,o){(t.exports=o(34)(!1)).push([t.i,"#dialog{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1002;text-align:center}#dialog .dialog-content{max-height:95vh;overflow-y:auto;z-index:9999;position:relative;max-width:700px;margin-left:auto;margin-right:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}#dialog .dialog-slot{padding:30px 0;background:#e8edf1}.dialog-hidden{height:0}",""])}}]);