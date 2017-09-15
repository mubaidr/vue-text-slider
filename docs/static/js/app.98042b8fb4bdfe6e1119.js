webpackJsonp([0],[,,,,function(t,e,i){"use strict";var n=i(0),a=i(30);n.default.use(a.a)},function(t,e,i){"use strict";var n=i(19),a=i.n(n),o=i(20),s=i.n(o),r=i(14),u=i.n(r);a.a.polyfill(),s.a.polyfill(),u.a.polyfill()},function(t,e,i){"use strict";var n=i(0),a=i(27),o=i(21),s=i.n(o);n.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:s.a},{path:"*",redirect:"/"}]})},function(t,e,i){"use strict";var n=i(0),a=i(26),o=i.n(a);n.default.use(o.a)},function(t,e){},function(t,e){},function(t,e,i){i(16);var n=i(1)(i(12),i(25),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),a=i(10),o=i.n(a),s=i(6),r=(i(5),i(7),i(4),i(8)),u=(i.n(r),i(9));i.n(u);n.default.config.productionTip=!1,new n.default({el:"#app",router:s.a,render:function(t){return t(o.a)}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{content:["This","is","awesome","swimlane","plugin","for","awesome","VueJS"],options:{text:"This, plugin, displays, a, list, of, words, as, a, Swimlane.",circular:!0,rows:3,scale:2,animationDuration:1e3,delay:500}}},computed:{textArray:function(){return this.options.text.split(",").map(function(t){return t.trim()})}}}},,function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,i){i(15);var n=i(1)(i(13),i(23),null,null);t.exports=n.exports},function(t,e,i){i(17);var n=i(1)(i(29),i(24),"data-v-790d32de",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-width"},[i("h2",[t._v("Demo")]),t._v(" "),i("vue-swimlane",{attrs:{words:t.content}}),t._v(" "),i("a",{attrs:{href:"https://github.com/mubaidr/vue-swimlane"}},[t._v("View Source Code On Github")]),t._v(" "),i("h2",[t._v("Options & playground")]),t._v(" "),i("p",[t._v("Change options below to see the effect. ")]),t._v(" "),i("br"),t._v(" "),i("md-layout",{attrs:{"md-gutter":"24"}},[i("md-layout",[i("md-input-container",[i("label",[t._v("Text")]),t._v(" "),i("md-input",{model:{value:t.options.text,callback:function(e){t.options.text=e},expression:"options.text"}})],1),t._v(" "),i("md-input-container",[i("label",[t._v("Rows")]),t._v(" "),i("md-input",{attrs:{type:"number"},model:{value:t.options.rows,callback:function(e){t.options.rows=e},expression:"options.rows"}})],1),t._v(" "),i("md-input-container",[i("label",[t._v("Scale")]),t._v(" "),i("md-input",{attrs:{type:"number"},model:{value:t.options.scale,callback:function(e){t.options.scale=e},expression:"options.scale"}})],1),t._v(" "),i("md-input-container",[i("label",[t._v("Animation Duration")]),t._v(" "),i("md-input",{attrs:{type:"number"},model:{value:t.options.animationDuration,callback:function(e){t.options.animationDuration=e},expression:"options.animationDuration"}})],1),t._v(" "),i("md-input-container",[i("label",[t._v("Delay")]),t._v(" "),i("md-input",{attrs:{type:"number"},model:{value:t.options.delay,callback:function(e){t.options.delay=e},expression:"options.delay"}})],1),t._v(" "),i("md-checkbox",{staticClass:"md-primary",model:{value:t.options.circular,callback:function(e){t.options.circular=e},expression:"options.circular"}},[t._v("Circular")])],1),t._v(" "),i("md-layout",[i("vue-swimlane",{attrs:{words:t.textArray,circular:t.options.circular,rows:t.options.rows,scale:t.options.scale,animationDuration:t.options.animationDuration,delay:t.options.delay}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-swimlane",style:t.listParentStyle},[i("ul",{style:t.listStyle},t._l(t.words,function(e){return i("li",{key:e,style:t.itemStyle},[t._v(t._s(e))])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("md-whiteframe",{attrs:{"md-tag":"md-toolbar","md-elevation":"3"}},[i("div",{staticClass:"md-toolbar-container custom"},[i("h1",{staticClass:"md-title"},[t._v("\n        Vuejs Swimlane Plugin:\n        "),i("span",{staticStyle:{opacity:"0.75"}},[t._v("Display a list of words as a text Swimlane.")])]),t._v(" "),i("span",{staticStyle:{flex:"1"}}),t._v(" "),i("a",{staticClass:"profile-link",attrs:{href:"https://github.com/mubaidr"}},[t._v("mubaidr@github")])])]),t._v(" "),i("md-layout",[i("md-layout",{attrs:{"md-hide-small":"","md-flex":"15"}}),t._v(" "),i("md-layout",[i("transition",{attrs:{appear:"",name:"slide-up",mode:"out-in"}},[i("router-view")],1)],1),t._v(" "),i("md-layout",{attrs:{"md-hide-small":"","md-flex":"15"}})],1)],1)},staticRenderFns:[]}},,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-swimlane",props:{words:{type:[Array,Object],required:!0},rows:{type:[Number,String],default:3},scale:{type:[Number,String],default:1},animationDuration:{type:[Number,String],default:1500},delay:{type:[Number,String],default:500},circular:{type:Boolean,default:!1}},data:function(){return{fontSize:32,padding:16,listTop:0,moveUp:!0,resetOnNext:!1}},computed:{itemHeight:function(){return this.fontSize*this.scale},listHeight:function(){return this.itemHeight*this.words.length},parentHeight:function(){return this.itemHeight*this.rows},itemStyle:function(){return"font-size: "+this.itemHeight+"px;\n      height: "+this.itemHeight+"px"},listStyle:function(){return"-webkit-transition: transform "+this.animationDuration+"ms ease;\n      -moz-transition: transform  "+this.animationDuration+"ms ease;\n      transition: transform  "+this.animationDuration+"ms ease;\n      transform: translateY("+this.listTop+"px);"},listParentStyle:function(){return"height: "+this.parentHeight+"px; padding-top: "+this.itemHeight/3+"px"}},methods:{updateState:function(){if(this.resetOnNext)return this.listTop=0,void(this.resetOnNext=!1);0===this.listTop&&(this.moveUp=!0),this.moveUp?this.listTop-=this.itemHeight:this.listTop+=this.itemHeight,this.listTop-this.itemHeight*this.rows<=-this.listHeight&&(this.circular?this.moveUp=!1:this.resetOnNext=!0)},animate:function(){var t=this;this.updateState(),setTimeout(function(){t.animate()},this.delay+this.animationDuration)}},mounted:function(){var t=this;setTimeout(function(){t.animate()},this.delay)}}},function(t,e,i){"use strict";var n=i(22),a=i.n(n),o={methods:{}};const s={install:function(t,e){t.mixin(o),t.component(a.a.name,a.a)}};e.a=s},function(t,e){}],[11]);
//# sourceMappingURL=app.98042b8fb4bdfe6e1119.js.map