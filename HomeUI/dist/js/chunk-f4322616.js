(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4322616"],{1276:function(t,e,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),i=n("d784"),o=n("825a"),s=n("7234"),l=n("44e7"),u=n("1d80"),d=n("4840"),b=n("8aa5"),f=n("50c4"),p=n("577e"),h=n("dc4a"),O=n("4dae"),g=n("14c3"),j=n("9263"),m=n("9f7f"),v=n("d039"),y=m.UNSUPPORTED_Y,w=4294967295,x=Math.min,k=[].push,P=c(/./.exec),C=c(k),S=c("".slice),D=!v((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(t,e,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var c=p(u(this)),i=void 0===n?w:n>>>0;if(0===i)return[];if(void 0===t)return[c];if(!l(t))return a(e,c,t,i);var o,s,d,b=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");while(o=a(j,g,c)){if(s=g.lastIndex,s>h&&(C(b,S(c,h,o.index)),o.length>1&&o.index<c.length&&r(k,b,O(o,1)),d=o[0].length,h=s,b.length>=i))break;g.lastIndex===o.index&&g.lastIndex++}return h===c.length?!d&&P(g,"")||C(b,""):C(b,S(c,h)),b.length>i?O(b,0,i):b}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:a(e,this,t,n)}:e,[function(e,n){var r=u(this),i=s(e)?void 0:h(e,t);return i?a(i,e,r,n):a(c,p(r),e,n)},function(t,r){var a=o(this),i=p(t),s=n(c,a,i,r,c!==e);if(s.done)return s.value;var l=d(a,RegExp),u=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(y?"g":"y"),O=new l(y?"^(?:"+a.source+")":a,h),j=void 0===r?w:r>>>0;if(0===j)return[];if(0===i.length)return null===g(O,i)?[i]:[];var m=0,v=0,k=[];while(v<i.length){O.lastIndex=y?0:v;var P,D=g(O,y?S(i,v):i);if(null===D||(P=x(f(O.lastIndex+(y?v:0)),i.length))===m)v=b(i,v,u);else{if(C(k,S(i,m,v)),k.length===j)return k;for(var E=1;E<=D.length-1;E++)if(C(k,D[E]),k.length===j)return k;v=m=P}}return C(k,S(i,m)),k}]}),!D,y)},"205f":function(t,e,n){"use strict";n.d(e,"a",(function(){return I}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("9b76"),s=n("8690"),l=n("365c"),u=n("d82f"),d=n("cf75"),b=n("d580"),f=n("6197"),p=n("b885");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=Object(d["d"])(Object(u["m"])(O(O({},Object(d["a"])(b["a"],d["f"].bind(null,"footer"))),{},{footer:Object(d["c"])(i["t"]),footerClass:Object(d["c"])(i["e"]),footerHtml:Object(d["c"])(i["t"])})),c["l"]),m=r["default"].extend({name:c["l"],functional:!0,props:j,render:function(t,e){var n,r=e.props,c=e.data,i=e.children,o=r.footerBgVariant,l=r.footerBorderVariant,u=r.footerTextVariant;return t(r.footerTag,Object(a["a"])(c,{staticClass:"card-footer",class:[r.footerClass,(n={},g(n,"bg-".concat(o),o),g(n,"border-".concat(l),l),g(n,"text-".concat(u),u),n)],domProps:i?{}:Object(s["a"])(r.footerHtml,r.footer)}),i)}}),v=n("4918");function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=Object(d["d"])(Object(u["m"])(w(w({},Object(u["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(d["c"])(i["g"],!1),end:Object(d["c"])(i["g"],!1),start:Object(d["c"])(i["g"],!1),top:Object(d["c"])(i["g"],!1)})),c["n"]),P=r["default"].extend({name:c["n"],functional:!0,props:k,render:function(t,e){var n=e.props,r=e.data,c=n.src,i=n.alt,o=n.width,s=n.height,l="card-img";return n.top?l+="-top":n.right||n.end?l+="-right":n.bottom?l+="-bottom":(n.left||n.start)&&(l+="-left"),t("img",Object(a["a"])(r,{class:l,attrs:{src:c,alt:i,width:o,height:s}}))}});function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){D(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=Object(d["a"])(k,d["f"].bind(null,"img"));E.imgSrc.required=!1;var _=Object(d["d"])(Object(u["m"])(S(S(S(S(S(S({},f["b"]),p["b"]),j),E),b["a"]),{},{align:Object(d["c"])(i["t"]),noBody:Object(d["c"])(i["g"],!1)})),c["j"]),I=r["default"].extend({name:c["j"],functional:!0,props:_,render:function(t,e){var n,r=e.props,c=e.data,i=e.slots,u=e.scopedSlots,b=r.imgSrc,h=r.imgLeft,O=r.imgRight,g=r.imgStart,v=r.imgEnd,y=r.imgBottom,w=r.header,x=r.headerHtml,k=r.footer,C=r.footerHtml,S=r.align,_=r.textVariant,I=r.bgVariant,V=r.borderVariant,R=u||{},T=i(),B={},A=t(),z=t();if(b){var N=t(P,{props:Object(d["e"])(E,r,d["h"].bind(null,"img"))});y?z=N:A=N}var $=t(),L=Object(l["a"])(o["p"],R,T);(L||w||x)&&($=t(p["a"],{props:Object(d["e"])(p["b"],r),domProps:L?{}:Object(s["a"])(x,w)},Object(l["b"])(o["p"],B,R,T)));var H=Object(l["b"])(o["h"],B,R,T);r.noBody||(H=t(f["a"],{props:Object(d["e"])(f["b"],r)},H),r.overlay&&b&&(H=t("div",{staticClass:"position-relative"},[A,H,z]),A=t(),z=t()));var q=t(),U=Object(l["a"])(o["o"],R,T);return(U||k||C)&&(q=t(m,{props:Object(d["e"])(j,r),domProps:L?{}:Object(s["a"])(C,k)},Object(l["b"])(o["o"],B,R,T))),t(r.tag,Object(a["a"])(c,{staticClass:"card",class:(n={"flex-row":h||g,"flex-row-reverse":(O||v)&&!(h||g)},D(n,"text-".concat(S),S),D(n,"bg-".concat(I),I),D(n,"border-".concat(V),V),D(n,"text-".concat(_),_),n)}),[A,$,H,q,z])}})},4918:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return g}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("2326"),s=n("6c06"),l=n("7b1e"),u=n("3a58"),d=n("cf75"),b=n("fa73");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=function(t,e,n){var r=encodeURIComponent(p.replace("%{w}",Object(b["g"])(t)).replace("%{h}",Object(b["g"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)},O=Object(d["d"])({alt:Object(d["c"])(i["t"]),blank:Object(d["c"])(i["g"],!1),blankColor:Object(d["c"])(i["t"],"transparent"),block:Object(d["c"])(i["g"],!1),center:Object(d["c"])(i["g"],!1),fluid:Object(d["c"])(i["g"],!1),fluidGrow:Object(d["c"])(i["g"],!1),height:Object(d["c"])(i["o"]),left:Object(d["c"])(i["g"],!1),right:Object(d["c"])(i["g"],!1),rounded:Object(d["c"])(i["j"],!1),sizes:Object(d["c"])(i["f"]),src:Object(d["c"])(i["t"]),srcset:Object(d["c"])(i["f"]),thumbnail:Object(d["c"])(i["g"],!1),width:Object(d["c"])(i["o"])},c["O"]),g=r["default"].extend({name:c["O"],functional:!0,props:O,render:function(t,e){var n,r=e.props,c=e.data,i=r.alt,d=r.src,p=r.block,O=r.fluidGrow,g=r.rounded,j=Object(u["c"])(r.width)||null,m=Object(u["c"])(r.height)||null,v=null,y=Object(o["b"])(r.srcset).filter(s["a"]).join(","),w=Object(o["b"])(r.sizes).filter(s["a"]).join(",");return r.blank&&(!m&&j?m=j:!j&&m&&(j=m),j||m||(j=1,m=1),d=h(j,m,r.blankColor||"transparent"),y=null,w=null),r.left?v="float-left":r.right?v="float-right":r.center&&(v="mx-auto",p=!0),t("img",Object(a["a"])(c,{attrs:{src:d,alt:i,width:j?Object(b["g"])(j):null,height:m?Object(b["g"])(m):null,srcset:y||null,sizes:w||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||O,"w-100":O,rounded:""===g||!0===g},f(n,"rounded-".concat(g),Object(l["m"])(g)&&""!==g),f(n,v,v),f(n,"d-block",p),n)}))}})},4968:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("cf75"),s=n("fa73"),l=Object(o["d"])({title:Object(o["c"])(i["t"]),titleTag:Object(o["c"])(i["t"],"h4")},c["q"]),u=r["default"].extend({name:c["q"],functional:!0,props:l,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.titleTag,Object(a["a"])(r,{staticClass:"card-title"}),c||Object(s["g"])(n.title))}})},"4b0e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collapse-icon",class:t.collapseClasses,attrs:{role:"tablist"}},[t._t("default")],2)},a=[],c=(n("14d9"),n("ec26")),i={props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},data:function(){return{collapseID:""}},computed:{collapseClasses:function(){var t=[],e={default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"};return t.push(e[this.type]),t}},created:function(){this.collapseID=Object(c["a"])()}},o=i,s=n("2877"),l=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=l.exports},5843:function(t,e,n){"use strict";n.d(e,"a",(function(){return q}));var r,a=n("2b0e"),c=n("c637"),i="show",o=n("e863"),s=n("0056"),l=n("a723"),u=n("9b76"),d=n("906c"),b=n("6b77"),f=n("58f2"),p=n("d82f"),h=n("cf75"),O=n("90ef"),g=n("602d"),j=n("8c18"),m=n("b42e"),v=function(t){Object(d["F"])(t,"height",0),Object(d["B"])((function(){Object(d["w"])(t),Object(d["F"])(t,"height","".concat(t.scrollHeight,"px"))}))},y=function(t){Object(d["A"])(t,"height")},w=function(t){Object(d["F"])(t,"height","auto"),Object(d["F"])(t,"display","block"),Object(d["F"])(t,"height","".concat(Object(d["i"])(t).height,"px")),Object(d["w"])(t),Object(d["F"])(t,"height",0)},x=function(t){Object(d["A"])(t,"height")},k={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},P={enter:v,afterEnter:y,leave:w,afterLeave:x},C={appear:Object(h["c"])(l["g"],!1)},S=a["default"].extend({name:c["t"],functional:!0,props:C,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t("transition",Object(m["a"])(r,{props:k,on:P},{props:n}),a)}});function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=Object(b["d"])(c["s"],"toggle"),V=Object(b["d"])(c["s"],"request-state"),R=Object(b["e"])(c["s"],"accordion"),T=Object(b["e"])(c["s"],"state"),B=Object(b["e"])(c["s"],"sync-state"),A=Object(f["a"])("visible",{type:l["g"],defaultValue:!1}),z=A.mixin,N=A.props,$=A.prop,L=A.event,H=Object(h["d"])(Object(p["m"])(E(E(E({},O["b"]),N),{},{accordion:Object(h["c"])(l["t"]),appear:Object(h["c"])(l["g"],!1),isNav:Object(h["c"])(l["g"],!1),tag:Object(h["c"])(l["t"],"div")})),c["s"]),q=a["default"].extend({name:c["s"],mixins:[O["a"],z,j["a"],g["a"]],props:H,data:function(){return{show:this[$],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(r={},_(r,$,(function(t){t!==this.show&&(this.show=t)})),_(r,"show",(function(t,e){t!==e&&this.emitState()})),r),created:function(){this.show=this[$]},mounted:function(){var t=this;this.show=this[$],this.listenOnRoot(I,this.handleToggleEvent),this.listenOnRoot(R,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(V,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o["g"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(b["c"])(t,window,"resize",this.handleResize,s["S"]),Object(b["c"])(t,window,"orientationchange",this.handleResize,s["S"])},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(s["N"])},onAfterEnter:function(){this.transitioning=!1,this.$emit(s["O"])},onLeave:function(){this.transitioning=!0,this.$emit(s["t"])},onAfterLeave:function(){this.transitioning=!1,this.$emit(s["s"])},emitState:function(){var t=this.show,e=this.accordion,n=this.safeId();this.$emit(L,t),this.emitOnRoot(T,n,t),e&&t&&this.emitOnRoot(R,n,e)},emitSync:function(){this.emitOnRoot(B,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Object(d["p"])(t,i);Object(d["y"])(t,i);var n="block"===Object(d["k"])(t).display;return e&&Object(d["b"])(t,i),n},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(d["k"])(this.$el).display&&(!Object(d["v"])(e,".nav-link,.dropdown-item")&&!Object(d["e"])(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var n=this.accordion,r=this.show;if(n&&n===e){var a=t===this.safeId();(a&&!r||!a&&r)&&this.toggle()}},handleResize:function(){this.show="block"===Object(d["k"])(this.$el).display}},render:function(t){var e=this.appear,n=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(u["h"],this.slotScope));return t(S,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[n])}})},6076:function(t,e,n){"use strict";n("99af");var r=n("b4c0");e["a"]={help:function(){return Object(r["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(r["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(r["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(r["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(r["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listZelNodes:function(){return Object(r["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(r["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(r["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(r["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(r["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(r["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(r["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(r["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(r["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(r["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(r["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(r["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(r["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(r["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(r["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listZelNodeConf:function(t){return Object(r["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(r["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(r["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(r["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(r["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(r["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(r["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(r["a"])()},cancelToken:function(){return r["b"]}}},6197:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return O}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("d82f"),s=n("cf75"),l=n("d580"),u=n("4968"),d=n("ba06");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(s["d"])(Object(o["m"])(f(f(f(f({},u["b"]),d["b"]),Object(s["a"])(l["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(i["e"]),overlay:Object(s["c"])(i["g"],!1)})),c["k"]),O=r["default"].extend({name:c["k"],functional:!0,props:h,render:function(t,e){var n,r=e.props,c=e.data,i=e.children,o=r.bodyBgVariant,l=r.bodyBorderVariant,b=r.bodyTextVariant,f=t();r.title&&(f=t(u["a"],{props:Object(s["e"])(u["b"],r)}));var h=t();return r.subTitle&&(h=t(d["a"],{props:Object(s["e"])(d["b"],r),class:["mb-2"]})),t(r.bodyTag,Object(a["a"])(c,{staticClass:"card-body",class:[(n={"card-img-overlay":r.overlay},p(n,"bg-".concat(o),o),p(n,"border-".concat(l),l),p(n,"text-".concat(b),b),n),r.bodyClass]}),[f,h,i])}})},"746e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{class:{open:t.visible},attrs:{"no-body":""},on:{mouseenter:t.collapseOpen,mouseleave:t.collapseClose}},[n("b-card-header",{class:{collapsed:!t.visible},attrs:{"aria-expanded":t.visible?"true":"false","aria-controls":t.collapseItemID,role:"tab","data-toggle":"collapse"},on:{click:function(e){return t.updateVisible(!t.visible)}}},[t._t("header",(function(){return[n("span",{staticClass:"lead collapse-title"},[t._v(t._s(t.title))])]}))],2),n("b-collapse",{attrs:{id:t.collapseItemID,accordion:t.accordion,role:"tabpanel"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("b-card-body",[t._t("default")],2)],1)],1)},a=[],c=n("205f"),i=n("b885"),o=n("6197"),s=n("5843"),l=n("ec26"),u={components:{BCard:c["a"],BCardHeader:i["a"],BCardBody:o["a"],BCollapse:s["a"]},props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},data:function(){return{visible:!1,collapseItemID:"",openOnHover:this.$parent.hover}},computed:{accordion:function(){return this.$parent.accordion?"accordion-".concat(this.$parent.collapseID):null}},created:function(){this.collapseItemID=Object(l["a"])(),this.visible=this.isVisible},methods:{updateVisible:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.visible=t,this.$emit("visible",t)},collapseOpen:function(){this.openOnHover&&this.updateVisible(!0)},collapseClose:function(){this.openOnHover&&this.updateVisible(!1)}}},d=u,b=n("2877"),f=Object(b["a"])(d,r,a,!1,null,null,null);e["a"]=f.exports},"9e7b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"row",class:t.classes},[n("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t.href.length>0?n("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant,on:{click:function(e){return t.$emit("click")}}},[n("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},a=[],c=(n("a9e3"),n("aa59")),i={components:{BLink:c["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=i,s=n("2877"),l=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=l.exports},a598:function(t,e,n){"use strict";n("e2f6")},b885:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("8690"),s=n("d82f"),l=n("cf75"),u=n("d580");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(l["d"])(Object(s["m"])(b(b({},Object(l["a"])(u["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(i["t"]),headerClass:Object(l["c"])(i["e"]),headerHtml:Object(l["c"])(i["t"])})),c["m"]),h=r["default"].extend({name:c["m"],functional:!0,props:p,render:function(t,e){var n,r=e.props,c=e.data,i=e.children,s=r.headerBgVariant,l=r.headerBorderVariant,u=r.headerTextVariant;return t(r.headerTag,Object(a["a"])(c,{staticClass:"card-header",class:[r.headerClass,(n={},f(n,"bg-".concat(s),s),f(n,"border-".concat(l),l),f(n,"text-".concat(u),u),n)],domProps:i?{}:Object(o["a"])(r.headerHtml,r.header)}),i)}})},ba06:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("cf75"),s=n("fa73"),l=Object(o["d"])({subTitle:Object(o["c"])(i["t"]),subTitleTag:Object(o["c"])(i["t"],"h6"),subTitleTextVariant:Object(o["c"])(i["t"],"muted")},c["o"]),u=r["default"].extend({name:c["o"],functional:!0,props:l,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.subTitleTag,Object(a["a"])(r,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),c||Object(s["g"])(n.subTitle))}})},d580:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("2b0e"),a=n("c637"),c=n("a723"),i=n("cf75"),o=Object(i["d"])({bgVariant:Object(i["c"])(c["t"]),borderVariant:Object(i["c"])(c["t"]),tag:Object(i["c"])(c["t"],"div"),textVariant:Object(i["c"])(c["t"])},a["j"]);r["default"].extend({props:o})},e2f6:function(t,e,n){},ec26:function(t,e,n){"use strict";var r,a=new Uint8Array(16);function c(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function o(t){return"string"===typeof t&&i.test(t)}for(var s=o,l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n}var b=d;function f(t,e,n){t=t||{};var r=t.random||(t.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return b(r)}e["a"]=f},fbc0:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{title:"Current FluxNode winners that will be paid in the next Flux block"}},[n("app-collapse",t._l(t.callResponse.data,(function(e,r){return n("app-collapse-item",{key:r,attrs:{title:t.toPascalCase(r)}},[n("list-entry",{attrs:{title:"Address",data:t.callResponse.data[r].payment_address}}),n("list-entry",{attrs:{title:"IP Address",data:t.callResponse.data[r].ip}}),n("list-entry",{attrs:{title:"Added Height",number:t.callResponse.data[r].added_height}}),n("list-entry",{attrs:{title:"Collateral",data:t.callResponse.data[r].collateral}}),n("list-entry",{attrs:{title:"Last Paid Height",number:t.callResponse.data[r].last_paid_height}}),n("list-entry",{attrs:{title:"Confirmed Height",number:t.callResponse.data[r].confirmed_height}}),n("list-entry",{attrs:{title:"Last Confirmed Height",number:t.callResponse.data[r].last_confirmed_height}})],1)})),1)],1)},a=[],c=n("c7eb"),i=n("1da1"),o=(n("ac1f"),n("1276"),n("fb6a"),n("a15b9"),n("205f")),s=n("b307"),l=n("4b0e"),u=n("746e"),d=n("9e7b"),b=n("6076"),f={components:{BCard:o["a"],ListEntry:d["a"],AppCollapse:l["a"],AppCollapseItem:u["a"],ToastificationContent:s["a"]},data:function(){return{callResponse:{status:"",data:""}}},mounted:function(){this.daemonFluxCurrentWinner()},methods:{daemonFluxCurrentWinner:function(){var t=this;return Object(i["a"])(Object(c["a"])().mark((function e(){var n;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].fluxCurrentWinner();case 2:n=e.sent,"error"===n.data.status?t.$toast({component:s["a"],props:{title:n.data.data.message||n.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=n.data.status,t.callResponse.data=n.data.data,console.log(n));case 4:case"end":return e.stop()}}),e)})))()},toPascalCase:function(t){var e,n,r=t.split(/\s|_/);for(e=0,n=r.length;e<n;e+=1)r[e]=r[e].slice(0,1).toUpperCase()+(r[e].length>1?r[e].slice(1).toLowerCase():"");return r.join(" ")}}},p=f,h=(n("a598"),n("2877")),O=Object(h["a"])(p,r,a,!1,null,null,null);e["default"]=O.exports}}]);