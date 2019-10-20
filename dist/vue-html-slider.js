/*!
 * vue-html-slider v1.3.3
 * https://github.com/git-onepixel/vue-html-slider#readme
 * Copyright(c) 2018-2019, Onepixel<onepixel@126.com>
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueHtmlSlider=e():t.vueHtmlSlider=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={CLICK:"click",CHANGED:"changed",LONG_TAP:"longTap",LONG_TAP_END:"longTapEnd",PULL_RIGHT:"pullRight",PULL_LEFT:"pullLeft",TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend",TOUCH_CANCEL:"touchcancel",LEFT:1,RIGHT:2}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(11);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(r).default}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"VueHtmlSlider",transition:"transform ease 0.3s",longTapMills:500,clickMills:300,fastMoveMills:300,transformCoefficient:.35,moveCoefficient:.5}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={bindEvent:function(t,e,n){e="string"==typeof e?[e]:e,e.forEach(function(e){t.addEventListener(e,n,!1)})},createSliderCard:function(t){t=t||{};var e={};return"string"==typeof t?e.src=t:e=t,e.src?e:null}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(r).default}})},function(t,e,n){"use strict";function i(t){u||n(6)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),s=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);var o=n(18),l=n(19),u=!1,c=i,d=Object(l.a)(s.a,o.a,o.b,!1,c,"data-v-86bb04b0",null);d.options.__file="src\\core\\slider.vue",e.default=d.exports},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(9).default;r("d5b88b86",i,!1,{})},function(t,e,n){e=t.exports=n(8)(!1),e.push([t.i,'\n.v-h-s-r[data-v-86bb04b0]{position:relative;overflow:hidden;height:100%\n}\n.v-h-s-r .s-c-l[data-v-86bb04b0]{position:relative;white-space:nowrap;font-size:0\n}\n.v-h-s-r .s-c-l[data-v-86bb04b0],.v-h-s-r .s-c-l .s-p-r[data-v-86bb04b0]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:100%\n}\n.v-h-s-r .s-c-l .s-p-r[data-v-86bb04b0]{position:absolute;left:0;top:0;-webkit-transform:translate(-100%);transform:translate(-100%);font-size:.75rem;z-index:1\n}\n.v-h-s-r .s-c-l .s-c-r[data-v-86bb04b0]{display:inline-block;vertical-align:middle;position:relative;width:100vw;height:100%\n}\n.v-h-s-r .s-c-l .s-c-r.fade[data-v-86bb04b0]:after{content:"";-webkit-transition:opacity .7s ease-out;transition:opacity .7s ease-out;background:#000;position:absolute;left:0;top:0;height:100%;width:100%;z-index:1\n}\n.v-h-s-r .s-c-l .s-c-r.show[data-v-86bb04b0]:after{opacity:0\n}\n.v-h-s-r .s-c-l .s-c-r .s-c-b[data-v-86bb04b0]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden\n}\n.v-h-s-r .s-c-l .s-c-r .s-c-b img[data-v-86bb04b0]{display:block;width:100%;height:100%\n}\n.v-h-s-r .s-c-l .s-c-r .c-l-v[data-v-86bb04b0],.v-h-s-r .s-c-l .s-c-r .l-e-v[data-v-86bb04b0]{position:absolute;left:0;top:0;height:100%;width:100%;z-index:100;color:#fff;background:#000;font-size:.75rem\n}\n.v-h-s-r .s-c-l .s-p-l[data-v-86bb04b0]{position:absolute;right:0;top:0;-webkit-transform:translate(100%);transform:translate(100%);height:100%;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:.75rem;z-index:1\n}\n.v-h-s-r .c-i-l[data-v-86bb04b0]{position:absolute;bottom:5vw;left:50%;font-size:0;white-space:nowrap;-webkit-transform:translate(-50%);transform:translate(-50%)\n}\n.v-h-s-r .c-i-l li[data-v-86bb04b0]{display:inline-block;position:relative;width:5vw\n}\n.v-h-s-r .c-i-l li.current[data-v-86bb04b0]:after{background:#fff!important\n}\n.v-h-s-r .c-i-l li[data-v-86bb04b0]:after{content:"";width:6px;height:6px;background:hsla(0,0%,100%,.3);border-radius:50%;position:absolute;top:50%;left:50%;margin-top:-3px;margin-left:-3px\n}',""])},function(t,e,n){"use strict";function i(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var s=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";function i(t,e,n,i){v=n,m=i||{};var s=Object(u.a)(t,e);return r(s),function(e){for(var n=[],i=0;i<s.length;i++){var a=s[i],o=d[a.id];o.refs--,n.push(o)}e?(s=Object(u.a)(t,e),r(s)):s=[];for(var i=0;i<n.length;i++){var o=n[i];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete d[o.id]}}}}function r(t){for(var e=0;e<t.length;e++){var n=t[e],i=d[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(a(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(a(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:s}}}}function s(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var e,n,i=document.querySelector("style["+g+'~="'+t.id+'"]');if(i){if(v)return b;i.parentNode.removeChild(i)}if(_){var r=p++;i=h||(h=s()),e=o.bind(null,i,r,!1),n=o.bind(null,i,r,!0)}else i=s(),e=l.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function o(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function l(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),m.ssrId&&t.setAttribute(g,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var u=n(10),c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},f=c&&(document.head||document.getElementsByTagName("head")[0]),h=null,p=0,v=!1,b=function(){},m=null,g="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},r=0;r<e.length;r++){var s=e[r],a=s[0],o=s[1],l=s[2],u=s[3],c={id:t+":"+r,css:o,media:l,sourceMap:u};i[a]?i[a].parts.push(c):n.push(i[a]={id:a,parts:[c]})}return n}e.a=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),s=i(r),a=n(2),o=i(a),l=n(12),u=i(l),c=n(3),d=i(c);e.default={name:o.default.name,data:function(){return{cards:[],pageNow:1,curIndex:-1,transform:"",transition:"",maxIndicators:20,cardWidth:0,moveOrient:s.default.LEFT,maxOffset:0,showTpl:!1}},mixins:u.default,computed:{current:function(){var t=this.pageNow-1;return this.cards[t]}},mounted:function(){var t=this;setTimeout(function(){t.initialize()},300)},methods:{initialize:function(){var t=this;this.cards=[],this.data.forEach(function(e,n){var i=d.default.createSliderCard(e);i&&(i.index=n,i.display=!1,i.loaded=!1,i.error=!1,i.el=null,t.cards.push(i))}),this.$refs.container&&this.render()},render:function(){var t=this.options.index||0;this.pageNow=t+1,this.showTpl=!0,this.cardWidth=this.$refs.viewport.offsetWidth,this.cardWidth+=this.options.gapWidth||0,this.maxOffset=-this.cardWidth*(this.cards.length-1),this.setTransform(-this.cardWidth*t),this.setImageElement(),this.setCurrentPageIndex(),this.callback(s.default.CHANGED),this.initUserTouchEvent()}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(13),s=i(r),a=n(15),o=i(a),l=n(16),u=i(l),c=n(17),d=i(c);e.default=[s.default,o.default,u.default,d.default]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{data:{type:Array,default:function(){return[{title:"",src:""}]}},options:{type:Object,default:function(){return r.default}},pullLeft:{type:Object,default:function(){return{tpl:"",pull:function(){},release:function(){}}}},pullRight:{type:Object,default:function(){return{tpl:"",pull:function(){},release:function(){}}}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={index:0,autoplay:!1,interval:1e3,loop:!1,hideIndicator:!1,disableBounce:!1,clsName:"",gapWidth:0,useFade:!1,lazyload:!1,zoom:!1,loading:"",error:"",isDebug:!1,changed:function(t){},click:function(t){},longTap:function(t){},longTapEnd:function(t){}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),s=i(r),a=n(2),o=i(a),l=n(3),u=i(l);e.default={methods:{initUserTouchEvent:function(){var t=this,e=this.$refs.container,n=-this.cardWidth*this.curIndex,i=void 0,r=void 0,a=0,l=0,c=!1,d=0,f=!0,h=!1,p=null;u.default.bindEvent(e,s.default.TOUCH_START,function(e){if(e.preventDefault(),1===e.touches.length||f){var u=e.touches[0];i=u.clientX,r=u.clientY,a=n,l=0,t.transition="",d=+new Date,c=!1,f=!1,p=setTimeout(function(){c?p&&clearTimeout(p):t.callback(s.default.LONG_TAP)},o.default.longTapMills)}}),u.default.bindEvent(e,s.default.TOUCH_MOVE,function(e){if(e.preventDefault(),!f){var s=e.touches[0],o=s.clientX-i,u=s.clientY-r;h=Math.abs(o)>Math.abs(u);var d=a+o;(d>0||d<t.maxOffset)&&(d=t.getOverBoundaryOffset(a,o),t.handlePullEvent(d)),o=d-a,l=o,n=d,t.setTransform(d),c=!0,t.setMoveOrient(o),t.setImageView(!0)}}),u.default.bindEvent(e,[s.default.TOUCH_END,s.default.TOUCH_CANCEL],function(e){e.preventDefault();var i=0;p&&clearTimeout(p);var r=+new Date-d;if(c&&!f){if(f=!0,t.transition=o.default.transition,(n===this.maxOffset||0===n)&&0===i)return;r<o.default.fastMoveMills&&h?i=t.getMoveNextOffset(n,l):(i=Math.abs(l)/t.cardWidth<o.default.moveCoefficient?n-l:t.getMoveNextOffset(n,l),l&&t.handlePullEvent(a,l)),t.setTransform(i),n=i,t.setPageNow(i)}else c||(r<o.default.clickMills&&t.callback(s.default.CLICK),r>o.default.longTapMills&&t.callback(s.default.LONG_TAP_END))})},setPageNow:function(t){var e=this;this.pageNow=Math.round(Math.abs(t)/this.cardWidth)+1,setTimeout(function(){e.setCurrentPageIndex(),e.setImageView(!1),e.callback(s.default.CHANGED)},100)},setCurrentPageIndex:function(){this.curIndex=this.pageNow-1},setMoveOrient:function(t){this.moveOrient=t>0?s.default.RIGHT:s.default.LEFT},getMoveNextOffset:function(t,e){var n=0;return n=this.moveOrient===s.default.LEFT?t-this.cardWidth-e:t+this.cardWidth-e,n>0&&(n=0),n<this.maxOffset&&(n=this.maxOffset),n},getOverBoundaryOffset:function(t,e){var n=t+e;return n>0&&(n=this.options.disableBounce?0:t+e*o.default.transformCoefficient),n<this.maxOffset&&(n=this.options.disableBounce?this.maxOffset:t+e*o.default.transformCoefficient),n},setTransform:function(t){this.transform="translate3d("+t+"px, 0, 0)"},getStyle:function(t){var e="",n=this.cards.length-1===t,i=this.options.gapWidth||0;return i&&!n&&(e="margin-right: "+i+"px"),e},callback:function(t){var e=this,n=this.options[t],i=this.current;"function"!=typeof n&&(n=function(){e.options.isDebug&&console.log(t,i)}),n(i)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={methods:{handlePullEvent:function(t,e){if(this.options.disableBounce)return!1;e?(0===t&&this.moveOrient===r.default.RIGHT&&this.callFn(this.pullRight,"release",e),t===this.maxOffset&&this.moveOrient===r.default.LEFT&&this.callFn(this.pullLeft,"release",this.maxOffset-e)):t>0?this.callFn(this.pullRight,"pull",t):this.callFn(this.pullLeft,"pull",this.maxOffset-t)},callFn:function(t,e,n){var i=t[e];"function"==typeof i&&setTimeout(function(){i.call(t,n)},300)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={methods:{setImageElement:function(){var t=this,e=this.$refs.container;setTimeout(function(){var n=e.querySelectorAll("img");t.cards.forEach(function(t,e){t.el=n[e]}),t.options.lazyload||t.loadAllImages(),t.setImageView(!1)},16)},loadAllImages:function(){var t=this;this.cards.forEach(function(e){e.el.src=e.src,t.preload(e)})},setImageView:function(t){var e=this.cards[this.curIndex-1],n=this.cards[this.curIndex+1];t?this.moveOrient===r.default.RIGHT?(this.display(e,!0),this.display(n,!1)):(this.display(e,!1),this.display(n,!0)):(this.display(e,!1),this.display(n,!1),this.display(this.current,!0))},preload:function(t){var e=this;t.el.complete?(t.loaded=!0,this.display(t,!0)):t.el.onload=function(){t.loaded=!0,e.display(t,t.index===e.curIndex)},t.el.onerror=function(){t.error=!0,t.loaded=!0,e.display(t,!1)}},display:function(t,e){t&&t.display!==e&&(e&&!t.loaded?(t.el.src=t.src,this.preload(t)):(t.display=e,this.cards=this.cards.slice(0)))}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"viewport",staticClass:"v-h-s-r"},[n("ul",{ref:"container",staticClass:"s-c-l",style:{transform:t.transform,transition:t.transition}},[t.pullRight.tpl&&t.showTpl?n("div",{staticClass:"s-p-r",domProps:{innerHTML:t._s(t.pullRight.tpl)}}):t._e(),t._v(" "),t._l(t.cards,function(e,i){return n("li",{key:i,staticClass:"s-c-r",class:{fade:t.options.useFade,show:e.display},style:t.getStyle(i)},[n("div",{staticClass:"s-c-b",class:t.options.clsName},[n("img",{attrs:{alt:e.title}})]),t._v(" "),e.loaded?t._e():n("div",{staticClass:"c-l-v",domProps:{innerHTML:t._s(t.options.loading)}}),t._v(" "),e.error?n("div",{staticClass:"l-e-v",domProps:{innerHTML:t._s(t.options.error)}}):t._e()])}),t._v(" "),t.pullLeft.tpl&&t.showTpl?n("div",{staticClass:"s-p-l",domProps:{innerHTML:t._s(t.pullLeft.tpl)}}):t._e()],2),t._v(" "),n("ol",{directives:[{name:"show",rawName:"v-show",value:!t.options.hideIndicator,expression:"!options.hideIndicator"}],staticClass:"c-i-l"},t._l(t.cards,function(e,i){return e.index<t.maxIndicators?n("li",{key:i,class:{current:e.index==t.curIndex}}):t._e()}),0)])},r=[];i._withStripped=!0},function(t,e,n){"use strict";function i(t,e,n,i,r,s,a,o){t=t||{};var l=typeof t.default;"object"!==l&&"function"!==l||(t=t.default);var u="function"==typeof t?t.options:t;e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):r&&(c=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}e.a=i}])});