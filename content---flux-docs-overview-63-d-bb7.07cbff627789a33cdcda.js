(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));r(0);var n=r(66);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i={id:"overview",title:"Overview",layout:"docs",category:"Quick Start",next:"in-depth-overview"},c=[],u={rightToc:c},p="wrapper";function l(e){var t=e.components,r=a(e,["components"]);return Object(n.b)(p,o({},u,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In order to get started check out the ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/flux/tree/master/examples"}),"overview and guides")," maintained on Github."),Object(n.b)("p",null,"Or continue on to the in-depth overview, which explores in more detail how the pieces of the Flux architecture work together."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: The In Depth Overview was formerly the normal Overview landing page but was replaced with the more terse and up-to-date guides on GitHub that are linked above.")))}l.isMDXComponent=!0},66:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),l=i(r),f=n,s=l[c+"."+f]||l[f]||p[f]||a;return r?o.a.createElement(s,Object.assign({},{ref:t},u,{components:r})):o.a.createElement(s,Object.assign({},{ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var f=2;f<a;f++)i[f]=r[f];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);