(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[351],{32993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},24839:function(e,t,n){"use strict";var r,o=n(67294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},97274:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(4942),o=n(67294),i=n(23431),a=n(70977),c=n(87825),l=n(9983),s=n(41775),u=n(95078),p=n(99105),f=function(e){var t=e.isDark,n=e.toggle;return(0,a.tZ)("button",{onClick:n,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},(0,a.tZ)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+(0,c.U2)(e,"colors.toggleIcon"):"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+(0,c.U2)(e,"colors.toggleIcon")},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+(0,c.U2)(e,"colors.toggleIcon"):"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+(0,c.U2)(e,"colors.toggleIcon")+", 0 23px 0 "+(0,c.U2)(e,"colors.toggleIcon")+", 23px 0 0 "+(0,c.U2)(e,"colors.toggleIcon")+", -23px 0 0 "+(0,c.U2)(e,"colors.toggleIcon")+", 15px 15px 0 "+(0,c.U2)(e,"colors.toggleIcon")+", -15px 15px 0 "+(0,c.U2)(e,"colors.toggleIcon")+", 15px -15px 0 "+(0,c.U2)(e,"colors.toggleIcon")+", -15px -15px 0 "+(0,c.U2)(e,"colors.toggleIcon")},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},d=n(1597),g=n(90944);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=function(e){var t=e.nav,n=(0,p.Z)().basePath;return(0,a.tZ)(o.Fragment,null,t&&t.length>0&&(0,a.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return(0,a.tZ)(d.Link,{activeClassName:"active",key:e.slug,sx:function(e){var t;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,g.Z)("/"+n+"/"+e.slug)},e.title)}))))},h=n(46938),y=function(){var e=(0,h.Z)().siteTitle,t=(0,p.Z)().basePath;return(0,a.tZ)(d.Link,{to:(0,g.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,a.tZ)("div",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))},v=function(){var e=(0,p.Z)().externalLinks;return(0,a.tZ)(o.Fragment,null,e&&e.length>0&&(0,a.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return(0,a.tZ)(l.rU,{key:e.url,href:e.url},e.name)}))))},w=function(){var e=(0,p.Z)().navigation,t=(0,u.If)(),n=t[0],r=t[1],o="dark"===n;return(0,a.tZ)("header",{sx:{mb:[5,6]}},(0,a.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,a.tZ)(y,null),(0,a.tZ)(f,{isDark:o,toggle:function(e){e.preventDefault(),r(o?"light":"dark")}})),(0,a.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,a.tZ)(m,{nav:e}),(0,a.tZ)(v,null)))},x=function(){var e=(0,h.Z)().siteTitle;return(0,a.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,a.tZ)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,a.tZ)("div",null,(0,a.tZ)(l.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,a.tZ)(l.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))},T=n(66795),k={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:(0,T.nV)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:(0,T.nV)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}},O=n(63366),S=["children"],E={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},A=function(e){var t=e.children,n=(0,O.Z)(e,S);return(0,a.tZ)("a",Object.assign({},n,{sx:E,href:"#skip-nav","data-skip-link":"true"}),t)};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return(0,a.tZ)(o.Fragment,null,(0,a.tZ)(i.xB,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:(0,c.U2)(e,"colors.text"),color:(0,c.U2)(e,"colors.background")},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),(0,a.tZ)(s.Z,null),(0,a.tZ)(A,null,"Skip to content"),(0,a.tZ)(l.W2,null,(0,a.tZ)(w,null),(0,a.tZ)(l.xu,{id:"skip-nav",as:"main",variant:"layout.main",sx:j({},k),className:r},t),(0,a.tZ)(x,null)))}},41775:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r,o,i,a,c=n(67294),l=n(45697),s=n.n(l),u=n(24839),p=n.n(u),f=n(32993),d=n.n(f),g=n(46494),b=n.n(g),m="bodyAttributes",h="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),x="cssText",T="href",k="http-equiv",O="innerHTML",S="itemprop",E="name",A="property",C="rel",j="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Z="defaultTitle",L="defer",D="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",U=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),N=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=J(e,v.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,Z);return t||r||void 0},V=function(e){return J(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===C&&"canonical"===e[n].toLowerCase()||l===C&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==x&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=b()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(p,f);var d={baseTag:se(v.BASE,n),linkTags:se(v.LINK,i),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},g={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(g[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),l(e,g,b)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(z):n.getAttribute(z)!==a.join(",")&&n.setAttribute(z,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,o=pe(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case h:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===O||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===N.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(m,n,r),htmlAttributes:fe(h,o,r),link:fe(v.LINK,i,r),meta:fe(v.META,a,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,l,r),style:fe(v.STYLE,s,r),title:fe(v.TITLE,{title:p,titleAttributes:f},r)}},ge=p()((function(e){return{baseTag:Q([T,P],e),bodyAttributes:G(m,e),defer:J(e,L),encode:J(e,D),htmlAttributes:G(h,e),linkTags:$(v.LINK,[C,T],e),metaTags:$(v.META,[E,w,k,A,S],e),noscriptTags:$(v.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:$(v.SCRIPT,[j,O],e),styleTags:$(v.STYLE,[x],e),title:K(e),titleAttributes:G(y,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),be=(o=ge,a=i=function(e){function t(){return F(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return H({},o,((t={})[r.type]=a,t.titleAttributes=H({},i),t));case v.BODY:return H({},o,{bodyAttributes:H({},i)});case v.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;var me=n(1597),he=n(46938),ye=function(e){var t=e.title,n=void 0===t?"":t,r=e.description,o=void 0===r?"":r,i=e.pathname,a=void 0===i?"":i,l=e.image,s=void 0===l?"":l,u=e.children,p=void 0===u?null:u,f=e.canonicalUrl,d=void 0===f?"":f,g=(0,he.Z)(),b=g.siteTitle,m=g.siteTitleAlt,h=g.siteUrl,y=g.siteDescription,v=g.siteLanguage,w=g.siteImage,x=g.author,T={title:n||m,description:o||y,url:""+h+(a||""),image:""+h+(s||w)};return c.createElement(be,{title:n,defaultTitle:m,titleTemplate:"%s | "+b},c.createElement("html",{lang:v}),c.createElement("meta",{name:"description",content:T.description}),c.createElement("meta",{name:"image",content:T.image}),c.createElement("meta",{property:"og:title",content:T.title}),c.createElement("meta",{property:"og:url",content:T.url}),c.createElement("meta",{property:"og:description",content:T.description}),c.createElement("meta",{property:"og:image",content:T.image}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:image:alt",content:T.description}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:title",content:T.title}),c.createElement("meta",{name:"twitter:url",content:T.url}),c.createElement("meta",{name:"twitter:description",content:T.description}),c.createElement("meta",{name:"twitter:image",content:T.image}),c.createElement("meta",{name:"twitter:image:alt",content:T.description}),c.createElement("meta",{name:"twitter:creator",content:x}),c.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),c.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,me.withPrefix)("/favicon-32x32.png")}),c.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,me.withPrefix)("/favicon-16x16.png")}),c.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,me.withPrefix)("/apple-touch-icon.png")}),d?c.createElement("link",{rel:"canonical",href:d}):null,p)}},46938:function(e,t,n){"use strict";var r=n(1597);t.Z=function(){return(0,r.useStaticQuery)("318001574").site.siteMetadata}},90944:function(e,t){"use strict";t.Z=function(e){return e.replace(/\/\/+/g,"/")}}}]);
//# sourceMappingURL=commons-5c8bae530c761c88f284.js.map