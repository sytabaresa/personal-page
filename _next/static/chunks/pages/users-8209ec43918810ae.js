(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{1876:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return n(6896)}])},1641:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(9008));t.Z=function(e){var t=e.children,n=e.title,o=void 0===n?"This is the default title":n;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("header",{children:(0,r.jsx)("nav",{})}),t]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),u=n(387),c=n(7190);var l={};function s(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=u.useRouter(),f=o.default.useMemo((function(){var t=r(a.resolveHref(i,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?a.resolveHref(i,e.as):o||n}}),[i,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,y=e.shallow,x=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var j=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,w=r(c.useIntersection({rootMargin:"200px"}),2),b=w[0],_=w[1],E=o.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);o.default.useEffect((function(){var e=_&&n&&a.isLocalURL(d),t="undefined"!==typeof m?m:i&&i.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&s(i,d,h,{locale:t})}),[h,d,_,m,n,i]);var g={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:u}))}(e,i,d,h,p,y,x,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&s(i,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof m?m:i&&i.locale,M=i&&i.isLocaleDomain&&a.getDomainLocale(h,L,i&&i.locales,i&&i.domainLocales);g.href=M||a.addBasePath(a.addLocale(h,L,i&&i.defaultLocale))}return o.default.cloneElement(t,g)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=i.useRef(),l=r(i.useState(!1),2),s=l[0],f=l[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),u.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return i.useEffect((function(){if(!a&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var u=new Map},6896:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return l}});var r=n(5893),i=n(1664),o=n(1641),a=(n(7294),function(e){var t=e.data;return(0,r.jsx)(i.default,{href:"/users/[id]",as:"/users/".concat(t.id),children:(0,r.jsxs)("a",{children:[t.id,": ",t.name]})})}),u=function(e){var t=e.items;return(0,r.jsx)("ul",{children:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(a,{data:e})},e.id)}))})},c=!0,l=function(e){var t=e.items;return(0,r.jsxs)(o.Z,{title:"Users List | Next.js + TypeScript Example",children:[(0,r.jsx)("h1",{children:"Users List"}),(0,r.jsxs)("p",{children:["Example fetching data from inside ",(0,r.jsx)("code",{children:"getStaticProps()"}),"."]}),(0,r.jsx)("p",{children:"You are currently on: /users"}),(0,r.jsx)(u,{items:t}),(0,r.jsx)("p",{children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"Go home"})})})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=1876,e(e.s=t);var t}));var t=e.O();_N_E=t}]);