(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{893:function(t){t.exports=function t(e,n,r){function o(u,a){if(!n[u]){if(!e[u]){if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[u]={exports:{}};e[u][0].call(c.exports,(function(t){return o(e[u][1][t]||t)}),c,c.exports,t,e,n,r)}return n[u].exports}for(var i=void 0,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(t,e,n){e.exports=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},{}],2:[function(t,e,n){e.exports=function(t){var e=1.70158;return t*t*((e+1)*t-e)}},{}],3:[function(t,e,n){e.exports=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1}},{}],4:[function(t,e,n){var r=t("./bounce-out");e.exports=function(t){return t<.5?.5*(1-r(1-2*t)):.5*r(2*t-1)+.5}},{"./bounce-out":6}],5:[function(t,e,n){var r=t("./bounce-out");e.exports=function(t){return 1-r(1-t)}},{"./bounce-out":6}],6:[function(t,e,n){e.exports=function(t){var e=t*t;return t<4/11?7.5625*e:t<8/11?9.075*e-9.9*t+3.4:t<.9?4356/361*e-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}},{}],7:[function(t,e,n){e.exports=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},{}],8:[function(t,e,n){e.exports=function(t){return 1-Math.sqrt(1-t*t)}},{}],9:[function(t,e,n){e.exports=function(t){return Math.sqrt(1- --t*t)}},{}],10:[function(t,e,n){e.exports=function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}},{}],11:[function(t,e,n){e.exports=function(t){return t*t*t}},{}],12:[function(t,e,n){e.exports=function(t){var e=t-1;return e*e*e+1}},{}],13:[function(t,e,n){e.exports=function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}},{}],14:[function(t,e,n){e.exports=function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}},{}],15:[function(t,e,n){e.exports=function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}},{}],16:[function(t,e,n){e.exports=function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}},{}],17:[function(t,e,n){e.exports=function(t){return 0===t?t:Math.pow(2,10*(t-1))}},{}],18:[function(t,e,n){e.exports=function(t){return 1===t?t:1-Math.pow(2,-10*t)}},{}],19:[function(t,e,n){e.exports={backInOut:t("./back-in-out"),backIn:t("./back-in"),backOut:t("./back-out"),bounceInOut:t("./bounce-in-out"),bounceIn:t("./bounce-in"),bounceOut:t("./bounce-out"),circInOut:t("./circ-in-out"),circIn:t("./circ-in"),circOut:t("./circ-out"),cubicInOut:t("./cubic-in-out"),cubicIn:t("./cubic-in"),cubicOut:t("./cubic-out"),elasticInOut:t("./elastic-in-out"),elasticIn:t("./elastic-in"),elasticOut:t("./elastic-out"),expoInOut:t("./expo-in-out"),expoIn:t("./expo-in"),expoOut:t("./expo-out"),linear:t("./linear"),quadInOut:t("./quad-in-out"),quadIn:t("./quad-in"),quadOut:t("./quad-out"),quartInOut:t("./quart-in-out"),quartIn:t("./quart-in"),quartOut:t("./quart-out"),quintInOut:t("./quint-in-out"),quintIn:t("./quint-in"),quintOut:t("./quint-out"),sineInOut:t("./sine-in-out"),sineIn:t("./sine-in"),sineOut:t("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(t,e,n){e.exports=function(t){return t}},{}],21:[function(t,e,n){e.exports=function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}},{}],22:[function(t,e,n){e.exports=function(t){return t*t}},{}],23:[function(t,e,n){e.exports=function(t){return-t*(t-2)}},{}],24:[function(t,e,n){e.exports=function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}},{}],25:[function(t,e,n){e.exports=function(t){return Math.pow(t,4)}},{}],26:[function(t,e,n){e.exports=function(t){return Math.pow(t-1,3)*(1-t)+1}},{}],27:[function(t,e,n){e.exports=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},{}],28:[function(t,e,n){e.exports=function(t){return t*t*t*t*t}},{}],29:[function(t,e,n){e.exports=function(t){return--t*t*t*t*t+1}},{}],30:[function(t,e,n){e.exports=function(t){return-.5*(Math.cos(Math.PI*t)-1)}},{}],31:[function(t,e,n){e.exports=function(t){var e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}},{}],32:[function(t,e,n){e.exports=function(t){return Math.sin(t*Math.PI/2)}},{}],33:[function(t,e,n){e.exports=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e}},{}],34:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=void 0;var r=i(t("parse-unit")),o=i(t("eases"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a,s,c,l=[],f="undefined"!=typeof window,m=function(){return(document.scrollingElement||document.documentElement).scrollTop},d=function(){return window.innerHeight||window.outerHeight},p=function(t){return!1===isNaN((0,r.default)(t)[0])},x=function(t){var e=(0,r.default)(t);return{value:e[0],unit:e[1]}},h=function(t){return null!==String(t).match(/^[a-z]+-[a-z]+$/)},b=function(t,e){return!0===t?e.elem:t instanceof HTMLElement==1?e.direct:e.global},v=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d(),o=e.getBoundingClientRect(),i=t.match(/^[a-z]+/)[0],u=t.match(/[a-z]+$/)[0],a=0;return"top"===u&&(a-=0),"middle"===u&&(a-=r/2),"bottom"===u&&(a-=r),"top"===i&&(a+=o.top+n),"middle"===i&&(a+=o.top+n+o.height/2),"bottom"===i&&(a+=o.top+n+o.height),"".concat(a,"px")},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m(),n=t.getData(),r=n.to.value-n.from.value,o=(e-n.from.value)/(r/100),i=Math.min(Math.max(o,0),100),u=b(n.direct,{global:document.documentElement,elem:n.elem,direct:n.direct}),a=Object.keys(n.props).reduce((function(t,e){var r=n.props[e],o=r.from.unit||r.to.unit,u=r.from.value-r.to.value,a=r.timing(i/100),s=r.from.value-u*a,c=Math.round(1e4*s)/1e4;return t[e]=c+o,t}),{}),s=o<0||o>100;return!0===(o>=0&&o<=100)&&n.inside(t,o,a),!0===s&&n.outside(t,o,a),{elem:u,props:a}},w=function(t,e){Object.keys(e).forEach((function(n){return function(t,e){t.style.setProperty(e.key,e.value)}(t,{key:n,value:e[n]})}))};n.create=function(t){var e=null,n=!1,r={isActive:function(){return n},getData:function(){return e},calculate:function(){e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).inside&&(t.inside=function(){}),null==t.outside&&(t.outside=function(){}),null==t.direct&&(t.direct=!1),null==t.track&&(t.track=!0),null==t.props&&(t.props={}),null==t.from)throw new Error("Missing property `from`");if(null==t.to)throw new Error("Missing property `to`");if("function"!=typeof t.inside)throw new Error("Property `inside` must be undefined or a function");if("function"!=typeof t.outside)throw new Error("Property `outside` must be undefined or a function");if("boolean"!=typeof t.direct&&t.direct instanceof HTMLElement==0)throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");if(!0===t.direct&&null==t.elem)throw new Error("Property `elem` is required when `direct` is true");if("boolean"!=typeof t.track)throw new Error("Property `track` must be undefined or a boolean");if("object"!==u(t.props))throw new Error("Property `props` must be undefined or an object");if(null==t.elem){if(!1===p(t.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===p(t.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===h(t.from)&&(t.from=v(t.from,t.elem)),!0===h(t.to)&&(t.to=v(t.to,t.elem));return t.from=x(t.from),t.to=x(t.to),t.props=Object.keys(t.props).reduce((function(e,n){var r=Object.assign({},t.props[n]);if(!1===p(r.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===p(r.to))throw new Error("Property `from` of prop must be a absolute value");if(r.from=x(r.from),r.to=x(r.to),null==r.timing&&(r.timing=o.default.linear),"string"!=typeof r.timing&&"function"!=typeof r.timing)throw new Error("Property `timing` of prop must be undefined, a string or a function");if("string"==typeof r.timing&&null==o.default[r.timing])throw new Error("Unknown timing for property `timing` of prop");return"string"==typeof r.timing&&(r.timing=o.default[r.timing]),e[n]=r,e}),{}),t}(t)},update:function(){var t=g(r),e=t.elem,n=t.props;return w(e,n),n},start:function(){n=!0},stop:function(){n=!1},destroy:function(){l[i]=void 0}},i=l.push(r)-1;return r.calculate(),r},!0===f?(function t(e,n){var r=function(){requestAnimationFrame((function(){return t(e,n)}))},o=function(t){return t.filter((function(t){return null!=t&&t.isActive()}))}(l);if(0===o.length)return r();var i=m();if(n===i)return r();n=i,o.map((function(t){return g(t,i)})).forEach((function(t){var e=t.elem,n=t.props;return w(e,n)})),r()}(),window.addEventListener("resize",(a=function(){(function(t){return t.filter((function(t){return null!=t&&t.getData().track}))})(l).forEach((function(t){t.calculate(),t.update()}))},s=50,c=null,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];clearTimeout(c),c=setTimeout((function(){return a.apply(void 0,e)}),s)}))):console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")},{eases:19,"parse-unit":33}]},{},[34])(34)},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7362)}])},1641:function(t,e,n){"use strict";var r=n(5893),o=(n(7294),n(9008));e.Z=function(t){var e=t.children,n=t.title,i=void 0===n?"This is the default title":n;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:i}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("header",{children:(0,r.jsx)("nav",{})}),e]})}},7362:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(5893),o=n(7294),i=n(1641),u=function(){return(0,r.jsx)("svg",{viewBox:"0 0 58 58",className:"fill-current w-full h-full",children:(0,r.jsx)("path",{d:"M8.53553 1.90441C6.58291 -0.0482135 3.41709 -0.0482144 1.46447 1.90441C-0.488155 3.85703 -0.488156 7.02285 1.46447 8.97547L8.53553 1.90441ZM52.0885 57.5284C54.8499 57.5284 57.0885 55.2899 57.0885 52.5284L57.0885 7.52845C57.0885 4.76702 54.8499 2.52845 52.0885 2.52845C49.3271 2.52845 47.0885 4.76702 47.0885 7.52845L47.0885 47.5284L7.08849 47.5284C4.32707 47.5284 2.08849 49.767 2.08849 52.5284C2.08849 55.2899 4.32706 57.5284 7.08849 57.5284L52.0885 57.5284ZM1.46447 8.97547L48.553 56.064L55.624 48.9929L8.53553 1.90441L1.46447 8.97547Z"})})},a=function(t){var e=t.className;return(0,r.jsxs)("svg",{viewBox:"0 0 41 41",className:"fill-current w-8 h-8 ".concat(e),children:[(0,r.jsx)("path",{d:"M0.649902 20.5L40.128 20.5",stroke:"#FFCC00",strokeWidth:"6.93777"}),(0,r.jsx)("path",{d:"M20.3889 40.239L20.3889 0.760881",stroke:"#FFCC00",strokeWidth:"6.93777"})]})},s=function(t){var e=t.className;return(0,r.jsx)("svg",{viewBox:"0 0 230 230",className:"".concat(e),children:(0,r.jsx)("polygon",{points:"10,10 110,183 210,10",style:{fill:"none",stroke:"#FFCC00",strokeWidth:"8"}})})},c=n(893);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t){return(0,r.jsx)("button",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}({className:"btn btn-outline btn-primary-white m-2 w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 xl:text-xl"},t))},m=function(){return(0,o.useEffect)((function(){var t=[],e=document.querySelector(".anchor");return document.querySelectorAll(".anim-element").forEach((function(n){var r=(n.getAttribute("data-tx")||"0")+"px",o=(n.getAttribute("data-ty")||"0")+"px",i=(n.getAttribute("data-r")||"0")+"deg";t.push(c.create({elem:e,from:"top-bottom",to:"top-top",direct:n,props:{"--tx":{from:"0",to:r},"--ty":{from:"0",to:o},"--r":{from:"0",to:i}}}))})),t.forEach((function(t){return t.start()})),function(){t.forEach((function(t){return t.destroy()}))}}),[]),(0,r.jsx)(i.Z,{title:"SYTA.CO",children:(0,r.jsxs)("div",{id:"scroll-container",className:"text-primary relative overflow-hidden w-full h-[250vh]",children:[(0,r.jsx)("div",{className:"anchor"}),(0,r.jsxs)("div",{className:"absolute hidden md:grid top-0 left-0 mt-4 ml-4 grid-cols-2 gap-4","data-rellax-speed":"8",children:[(0,r.jsx)(a,{className:"hidden lg:block"}),(0,r.jsx)(a,{className:"hidden lg:block"}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{})]}),(0,r.jsxs)("div",{className:"absolute hidden md:grid top-0 left-0 ml-4 grid-cols-2 gap-4 top-[70vh]",children:[(0,r.jsx)(a,{}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{})]}),(0,r.jsxs)("div",{className:"absolute hidden md:grid top-0 left-0 ml-32 grid-cols-2 gap-4 origin-center transform rotate-180 top-[70vh]",children:[(0,r.jsx)(a,{}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{})]}),(0,r.jsxs)("div",{className:"absolute p-4 top-[10vh] right-[45%]",children:[(0,r.jsx)("div",{className:"anim-element","data-ty":"-200",children:(0,r.jsx)(s,{className:"absolute w-52 h-52 origin-center rotate-180"})}),(0,r.jsx)("div",{children:(0,r.jsx)(s,{className:"absolute w-52 h-52 origin-center bg-transparent transform ml-16 mt-28"})})]}),(0,r.jsxs)("div",{className:"absolute top-0 right-0 flex flex-col items-end mt-4 mr-4 anim-element","data-tx":"500",children:[(0,r.jsx)("div",{className:"w-28 h-6 md:w-40 md:h-10",style:{backgroundImage:'url("/img/diagonal-stripes.svg")'}}),(0,r.jsxs)("div",{className:"flex items-center mt-2",children:[(0,r.jsx)("div",{className:"w-8 md:w-12 h-1 bg-primary overf"}),(0,r.jsx)("h4",{className:"font-mono text-2xl md:text-4xl ml-4",children:(new Date).getFullYear()})]})]}),(0,r.jsx)("div",{className:"web-page font-mono text-3xl md:text-5xl mt-10 mb-4 md:my-6 ml-4 md:ml-32 lg:ml-64 absolute left-0 anim-element","data-ty":"500",children:(0,r.jsx)("h2",{children:"syta.co"})}),(0,r.jsxs)("div",{className:"inline-block font-bold md:absolute left-0 top-0 bg xl:mt-0 anim-element md:top-[18vh] lg:top-[30vh]","data-tx":"-500",children:[(0,r.jsx)("div",{className:"inline-block justify-start xl:justify-end pl-6 xl:pl-20 pr-2 md:pr-8 py-2 md:py-6 bg-base-100",style:{backgroundImage:'url("/img/diagonal-stripes.svg")'},children:(0,r.jsx)("div",{className:"flex items-start justify-start p-2 bg-base-100",children:(0,r.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter text-yellow-400",children:"CAUTION"})})}),(0,r.jsx)("div",{className:"text-3xl md:text-5xl xl:text-7xl flex mt-8 ml-5 xl:ml-24",style:{lineHeight:.8},children:(0,r.jsxs)("div",{className:"-z-10 flex",children:[(0,r.jsx)("div",{className:"w-8 h-8 xl:w-12 xl:h-12 mr-2 xl:mr-4",children:(0,r.jsx)(u,{})}),(0,r.jsxs)("div",{className:"under-construction",children:[(0,r.jsx)("h1",{className:"",children:"UNDER"}),(0,r.jsx)("h1",{className:"",children:"CONSTRUCTION"})]})]})})]}),(0,r.jsxs)("div",{className:"md:absolute flex flex-col items-center md:items-end right-0 mt-8 md:mt-0 md:mr-16 lg:mr-24 xl:mr-32 anim-element md:top-[45vh] lg:top-[30vh]","data-ty":"500",children:[(0,r.jsxs)("h2",{className:"text-6xl md:text-7xl xl:text-8xl font-sans font-semibold text-right tracking-tighter mr-4 sm:mr-16 md:mr-0",children:["Sebastian",(0,r.jsx)("br",{}),"Tabares."]}),(0,r.jsxs)("div",{className:"inline-block mt-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{children:"github"}),(0,r.jsx)(f,{children:"linkedin"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{children:"twitter"}),(0,r.jsx)(f,{children:"email"})]})]})]}),(0,r.jsxs)("div",{className:"absolute left-0 bottom-0 w-[50vw]",children:[(0,r.jsx)("div",{className:"bg-primary transform rotate-45 absolute w-[100rem] h-[100rem] right-[20rem] bottom-[-40rem] sm:right-[15rem] md:right-[15rem] lg:right-[21rem]"}),(0,r.jsxs)("div",{className:"mb-16 ml-16 w-96 relative z-10",children:[(0,r.jsx)("div",{className:"inline-block mb-4",children:(0,r.jsxs)("h1",{className:"uppercase text-base-100 text-5xl font-bold text-right",children:["Let's work ",(0,r.jsx)("br",{}),"together"]})}),(0,r.jsxs)("form",{className:"form-control uppercase",children:[(0,r.jsx)("label",{className:"label",children:(0,r.jsx)("span",{className:"text-base-100",children:"Name"})}),(0,r.jsx)("input",{type:"text",placeholder:"",className:"input input-line input-back input-transparent"}),(0,r.jsx)("label",{className:"label",children:(0,r.jsx)("span",{className:"text-base-100",children:"Email"})}),(0,r.jsx)("input",{type:"email",placeholder:"",className:"input input-line input-back input-transparent"}),(0,r.jsx)("label",{className:"label",children:(0,r.jsx)("span",{className:"text-base-100",children:"Tell me a little what you need"})}),(0,r.jsx)("textarea",{placeholder:"",className:"textarea textarea-bordered textarea-back textarea-transparent h-40",rows:5}),(0,r.jsx)("button",{type:"submit",className:"btn absolute bottom-0 right-0 w-32",children:"Submit"})]})]})]}),(0,r.jsx)("div",{className:"absolute right-0 bottom-0 w-[50vw]",children:(0,r.jsx)("div",{className:"bg-primary transform -rotate-45 absolute w-[100rem] h-[100rem] left-[12rem] bottom-[-53rem] sm:left-[18rem] lg:left-[20rem]"})})]})})}}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);