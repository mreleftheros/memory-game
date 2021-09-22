(()=>{var t={768:()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const n=function(){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.levels=[{name:"rookie",count:6},{name:"skilled",count:8},{name:"expert",count:10}],this.level=t,this.cardsCount,this.cards=["banana","broccoli","carrot","cherry","coconut","egg","eggplant","lemon","onion","strawberry"],this.shuffledCards,this.cardChoices=[],this.isPlaying=!1}var r,i;return r=n,(i=[{key:"init",value:function(){this.isPlaying=!0,this.setCardsCount(),this.shuffleCards(),this.startTimer()}},{key:"startTimer",value:function(){var t=Date.now();this.timer=setInterval((function(){var e=Date.now()-t,n=String(Math.floor(e/1e3/60)%60),r=String(Math.floor(e/1e3)%60);1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),a.displayTime(n,r)}),1e3)}},{key:"setCardsCount",value:function(){var t=this;this.cardsCount=this.levels.filter((function(e){return e.name===t.level}))[0].count}},{key:"setCardChoice",value:function(t){this.cardChoices.push(t),2===this.cardChoices.length?(this.cardChoices[0]===this.cardChoices[1]?a.setFoundCards(this.cardChoices[0]):setTimeout(a.closeCards,1e3),this.cardChoices.length=0):this.isPlaying=!0}},{key:"shuffleCards",value:function(){var e=this.cardsCount,n=[],r=function(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this.cards);n.length=e,r.length=e,r.forEach((function(t){for(var r=Math.floor(Math.random()*(2*e));n[r];)r=(r+1)%(2*e);n.splice(r,1,t);for(var i=Math.floor(Math.random()*(2*e));n[i];)i=(i+1)%(2*e);n.splice(i,1,t)})),this.shuffledCards=[].concat(n),a.renderCards()}},{key:"endGame",value:function(){this.isPlaying=!1,clearInterval(this.timer)}}])&&e(r.prototype,i),n}();function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.levelScreen=document.getElementById("levelScreen"),this.levels=document.getElementById("levels"),this.gameScreen=document.getElementById("gameScreen"),this.cardsContainer=document.getElementById("cardsContainer"),this.timer=document.getElementById("timer")}var e,i;return e=t,(i=[{key:"chooseLevel",value:function(t){if("BUTTON"===t.target.tagName){var e=t.target.getAttribute("data-level");c=new n(e),this.transitionScreens()}}},{key:"transitionScreens",value:function(){var t=this;this.levelScreen.classList.add("transition"),this.levelScreen.addEventListener("transitionend",(function(){t.levelScreen.classList.remove("active")})),this.gameScreen.classList.add("active"),c.init()}},{key:"renderCards",value:function(){var t=this;this.cardsContainer.classList.add(c.level);var e=new DocumentFragment;c.shuffledCards.forEach((function(n){var r=document.createElement("div");r.classList.add("main__game-screen__game-container__cards__card");var i=new Image;i.classList.add("main__game-screen__game-container__cards__card__img"),i.setAttribute("data-card",n),i.src="./assets/card.jpg",i.onload=function(){r.appendChild(i)},i.addEventListener("click",(function(e){return t.chooseCard(e)})),e.appendChild(r)})),this.cardsContainer.appendChild(e)}},{key:"chooseCard",value:function(t){!t.target.classList.contains("active")&&c.isPlaying&&(c.isPlaying=!1,this.openCard(t))}},{key:"openCard",value:function(t){var e=t.target.getAttribute("data-card");t.target.classList.add("active"),t.target.src="./assets/".concat(e,".png"),c.setCardChoice(e)}},{key:"closeCards",value:function(){var t,e=r(this.cardsContainer.children);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.firstElementChild.classList.remove("active"),n.firstElementChild.classList.contains("found")||(n.firstElementChild.src="./assets/card.jpg")}}catch(t){e.e(t)}finally{e.f()}c.isPlaying=!0}},{key:"setFoundCards",value:function(t){var e,n=r(document.querySelectorAll("[data-card=".concat(t,"]")));try{for(n.s();!(e=n.n()).done;)e.value.classList.add("found")}catch(t){n.e(t)}finally{n.f()}Array.from(this.cardsContainer.children).every((function(t){return t.firstElementChild.classList.contains("found")}))?c.endGame():c.isPlaying=!0}},{key:"displayTime",value:function(t,e){var n='<span class="main__game-screen__game-container__timer__minutes">'.concat(t,'</span> : <span class="main__game-screen__game-container__timer__seconds">').concat(e,"</span>");this.timer.innerHTML=n}}])&&o(e.prototype,i),t}()),c=new n("rookie");document.addEventListener("DOMContentLoaded",(function(){a.levels.addEventListener("click",(function(t){return a.chooseLevel(t)})),c.init()}))},564:function(t,e,n){!function(e){"use strict";var n,r=Object.prototype.hasOwnProperty,i="function"==typeof Symbol&&Symbol.iterator||"@@iterator",o=e.regeneratorRuntime;if(o)t.exports=o;else{(o=e.regeneratorRuntime=t.exports).wrap=h;var a="suspendedStart",c="suspendedYield",s="executing",l="completed",u={},f=p.prototype=v.prototype;y.prototype=f.constructor=p,p.constructor=y,y.displayName="GeneratorFunction",o.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},o.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):t.__proto__=p,t.prototype=Object.create(f),t},o.awrap=function(t){return new g(t)},m(w.prototype),o.async=function(t,e,n,r){var i=new w(h(t,e,n,r));return o.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},m(f),f[i]=function(){return this},f.toString=function(){return"[object Generator]"},o.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},o.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=n,this.done=!1,this.delegate=null,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?this.next=o.finallyLoc:this.complete(a),u},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},u}}}function h(t,e,r,i){var o=Object.create((e||v).prototype),f=new L(i||[]);return o._invoke=function(t,e,r){var i=a;return function(o,f){if(i===s)throw new Error("Generator is already running");if(i===l){if("throw"===o)throw f;return E()}for(;;){var h=r.delegate;if(h){if("return"===o||"throw"===o&&h.iterator[o]===n){r.delegate=null;var v=h.iterator.return;if(v&&"throw"===(y=d(v,h.iterator,f)).type){o="throw",f=y.arg;continue}if("return"===o)continue}var y;if("throw"===(y=d(h.iterator[o],h.iterator,f)).type){r.delegate=null,o="throw",f=y.arg;continue}if(o="next",f=n,!(p=y.arg).done)return i=c,p;r[h.resultName]=p.value,r.next=h.nextLoc,r.delegate=null}if("next"===o)r._sent=f,r.sent=i===c?f:n;else if("throw"===o){if(i===a)throw i=l,f;r.dispatchException(f)&&(o="next",f=n)}else"return"===o&&r.abrupt("return",f);if(i=s,"normal"===(y=d(t,e,r)).type){i=r.done?l:c;var p={value:y.arg,done:r.done};if(y.arg!==u)return p;r.delegate&&"next"===o&&(f=n)}else"throw"===y.type&&(i=l,o="throw",f=y.arg)}}}(t,r,f),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function v(){}function y(){}function p(){}function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t){this.arg=t}function w(t){function e(e,n){var o=t[e](n),a=o.value;return a instanceof g?Promise.resolve(a.arg).then(r,i):Promise.resolve(a).then((function(t){return o.value=t,o}))}"object"==typeof process&&process.domain&&(e=process.domain.bind(e));var n,r=e.bind(t,"next"),i=e.bind(t,"throw");e.bind(t,"return"),this._invoke=function(t,r){function i(){return e(t,r)}return n=n?n.then(i,i):new Promise((function(t){t(i())}))}}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:n,done:!0}}}("object"==typeof n.g?n.g:"object"==typeof window?window:"object"==typeof self?self:this)}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n(564),n(768)})();