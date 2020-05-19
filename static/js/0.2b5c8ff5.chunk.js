(this["webpackJsonpswapi-task"]=this["webpackJsonpswapi-task"]||[]).push([[0],{38:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return f}));var r=e(18),o=e(19);function a(){var t=Object(r.a)(["\n  width: 100%;\n  position: relative;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  flex: 0 0 100%;\n  max-width: 100%;\n\n  /* 768px */\n  @media (min-width: 48em) {\n    flex: 0 0 calc(100% / 2);\n    max-width: calc(100% / 2);\n  }\n\n  /* 992px */\n  @media (min-width: 62em) {\n    flex: 0 0 calc(100% / 3);\n    max-width: calc(100% / 3);\n  }\n"]);return a=function(){return t},t}function i(){var t=Object(r.a)(["\n  display: flex;\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n  flex-wrap: wrap;\n"]);return i=function(){return t},t}function c(){var t=Object(r.a)(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n\n  /* 576px */\n  @media (min-width: 36em) {\n    max-width: 54rem;\n  }\n\n  /* 768px */\n  @media (min-width: 48em) {\n    max-width: 72rem;\n  }\n\n  /* 992px */\n  @media (min-width: 62em) {\n    max-width: 96rem;\n  }\n\n  /* 1200px */\n  @media (min-width: 75em) {\n    max-width: 114rem;\n  }\n"]);return c=function(){return t},t}var u=o.b.div(c()),s=o.b.div(i()),f=o.b.div(a())},39:function(t,n,e){t.exports=e(51)},40:function(t,n,e){"use strict";function r(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var i=t.apply(n,e);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}e.d(n,"a",(function(){return o}))},41:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return e}}(t,n)||function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,"a",(function(){return o}))},42:function(t,n,e){"use strict";var r=e(18),o=e(0),a=e.n(o),i=e(19);function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function u(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=a.a.createElement("g",null,a.a.createElement("path",{d:"M45.786 171.764h42.865a8.994 8.994 0 0 0 0-17.988H61.465a287.68 287.68 0 0 1 11.308-16.797h140.894a8.994 8.994 0 0 0 0-17.988H68.236a8.994 8.994 0 0 0-7.195 3.598c-8.578 11.441-16.363 23.504-23.138 35.856a8.997 8.997 0 0 0 .144 8.907 8.996 8.996 0 0 0 7.739 4.412zM17.557 244.009h129.962a8.994 8.994 0 0 0 0-17.988H29.25a278.7 278.7 0 0 1 5.426-16.797h53.977a8.994 8.994 0 0 0 0-17.988H28.422a8.994 8.994 0 0 0-8.396 5.77 293.742 293.742 0 0 0-11.207 35.885 8.986 8.986 0 0 0 1.668 7.681 8.988 8.988 0 0 0 7.07 3.437zM170.935 411.612a8.994 8.994 0 0 0-8.994-8.994H34.606a277.724 277.724 0 0 1-5.392-16.797h245.107a8.994 8.994 0 0 0 0-17.988H17.53a8.992 8.992 0 0 0-8.74 11.115 296.258 296.258 0 0 0 11.148 35.876 8.994 8.994 0 0 0 8.401 5.781h133.6a8.993 8.993 0 0 0 8.996-8.993zM277.961 483.857a8.994 8.994 0 0 0-8.994-8.994H72.652a289.298 289.298 0 0 1-11.29-16.797h27.293a8.994 8.994 0 0 0 0-17.988H45.678a8.992 8.992 0 0 0-7.884 13.319c6.746 12.302 14.519 24.361 23.102 35.845a8.997 8.997 0 0 0 7.204 3.609h200.866a8.995 8.995 0 0 0 8.995-8.994z"}),a.a.createElement("path",{d:"M306.001.001c-78.707 0-153.495 29.832-210.589 83.998a8.996 8.996 0 0 0 6.191 15.52h80.702a8.994 8.994 0 0 0 0-17.988h-56.772c51.05-41.129 114.289-63.541 180.469-63.541 155.8 0 283.088 124.356 287.855 279.02H18.146a287.53 287.53 0 0 1 .888-15.542h262.421a8.994 8.994 0 0 0 0-17.988H10.894a9 9 0 0 0-8.938 7.973A306.075 306.075 0 0 0 0 306c0 11.414.65 22.976 1.929 34.372a8.993 8.993 0 0 0 8.938 7.989h195.515a8.994 8.994 0 0 0 0-17.988H19.021a292.963 292.963 0 0 1-.875-15.374h575.71c-.16 5.16-.459 10.285-.888 15.374H482.133a8.994 8.994 0 0 0 0 17.988h108.753a284.79 284.79 0 0 1-3.582 19.471h-50.321a8.994 8.994 0 0 0 0 17.988h45.763a286.206 286.206 0 0 1-21.917 54.256H416.575a8.994 8.994 0 0 0 0 17.988h133.906c-50.912 81.56-141.459 135.946-244.484 135.946-66.3 0-129.609-22.463-180.669-63.702h49.163a8.994 8.994 0 0 0 0-17.988h-73.05a8.995 8.995 0 0 0-6.198 15.513C152.33 582.109 227.177 612 306.001 612 474.728 611.999 612 474.727 612 306S474.728.001 306.001.001z"}),a.a.createElement("path",{d:"M473.948 280.009a57.93 57.93 0 0 0 18.881-3.139c37.252-12.808 54.36-61.622 38.134-108.816-13.258-38.561-45.379-65.495-78.107-65.495a57.93 57.93 0 0 0-18.879 3.137c-37.252 12.808-54.36 61.623-38.134 108.816 13.26 38.563 45.379 65.497 78.105 65.497zm-34.12-157.3a39.943 39.943 0 0 1 13.031-2.159c25.171 0 50.294 21.939 61.099 53.354 12.999 37.812.897 76.373-26.974 85.957a39.948 39.948 0 0 1-13.033 2.161c-25.168 0-50.292-21.942-61.096-53.357-13.002-37.814-.901-76.375 26.973-85.956zm38.294 63.515c3.653 10.625.014 21.507-8.127 24.306-8.141 2.799-17.702-3.546-21.354-14.171-3.653-10.625-.014-21.507 8.127-24.306 8.141-2.798 17.701 3.546 21.354 14.171z"})),f=function(t){var n=t.svgRef,e=t.title,r=u(t,["svgRef","title"]);return a.a.createElement("svg",c({viewBox:"0 0 612 612",width:512,height:512,ref:n},r),e?a.a.createElement("title",null,e):null,s)},l=a.a.forwardRef((function(t,n){return a.a.createElement(f,c({svgRef:n},t))})),h=(e.p,e(11));function p(){var t=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 70vh;\n\n  .loader-logo {\n    animation: "," infinite 2.5s linear;\n    height: 8rem;\n    fill: ",";\n  }\n"]);return p=function(){return t},t}function d(){var t=Object(r.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return d=function(){return t},t}var m=Object(i.c)(d()),v=i.b.div(p(),m,h.h);n.a=function(t){return a.a.createElement(v,{"data-testid":"loader"},a.a.createElement(l,{className:"loader-logo"}))}},43:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return u}));var r=e(39),o=e.n(r),a=e(40),i="https://swapi.dev/api/films",c=function(){var t=Object(a.a)(o.a.mark((function t(){var n,e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(i);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,r=e.results.map((function(t){return{id:parseFloat(t.url.slice(27,28)),title:t.title,description:t.opening_crawl,releaseDate:t.release_date}})),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(a.a)(o.a.mark((function t(n){var e,r,a,c,u,s,f,l,h,p,d,m,v;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"/").concat(n));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,a=r.characters.map((function(t){return fetch(t).then((function(t){return t.json()})).then((function(t){return t.name}))})),c=r.planets.map((function(t){return fetch(t).then((function(t){return t.json()})).then((function(t){return t.name}))})),u=r.species.map((function(t){return fetch(t).then((function(t){return t.json()})).then((function(t){return t.name}))})),s=r.starships.map((function(t){return fetch(t).then((function(t){return t.json()})).then((function(t){return t.name}))})),f=r.vehicles.map((function(t){return fetch(t).then((function(t){return t.json()})).then((function(t){return t.name}))})),t.next=13,Promise.all(a);case 13:return l=t.sent,t.next=16,Promise.all(c);case 16:return h=t.sent,t.next=19,Promise.all(u);case 19:return p=t.sent,t.next=22,Promise.all(s);case 22:return d=t.sent,t.next=25,Promise.all(f);case 25:return m=t.sent,v={characters:l,director:r.director,description:r.opening_crawl,planets:h,producer:r.producer,releaseDate:r.release_date,species:p,starships:d,title:r.title,vehicles:m},t.abrupt("return",v);case 28:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},51:function(t,n,e){var r=function(t){"use strict";var n=Object.prototype,e=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,n,e,r){var o=n&&n.prototype instanceof f?n:f,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,n,e){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return O()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=w(i,e);if(c){if(c===s)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var f=u(t,n,e);if("normal"===f.type){if(r=e.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:e.done}}"throw"===f.type&&(r="completed",e.method="throw",e.arg=f.arg)}}}(t,e,i),a}function u(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var s={};function f(){}function l(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(E([])));m&&m!==n&&e.call(m,o)&&(p=m);var v=h.prototype=f.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function g(t,n){var r;this._invoke=function(o,a){function i(){return new n((function(r,i){!function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"===typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):n.resolve(l).then((function(t){f.value=t,i(f)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return s;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,s;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,s):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,s)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function b(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return l.prototype=v.constructor=h,h.constructor=l,h[i]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===l||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new g(c(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),s},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),b(e),s}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;b(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=0.2b5c8ff5.chunk.js.map