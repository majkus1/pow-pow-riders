(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return l},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",a="restore",u="server-patch",s="prefetch",l="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(8754),o=r(1757),i=o._(r(7294)),a=n._(r(2636)),u=r(7757),s=r(3735),l=r(3341);r(4210);let c=n._(r(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function d(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function y(e,t,r,n,o,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function m(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,i.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:a,className:u,imgStyle:s,blurStyle:l,isLazy:c,fetchPriority:f,fill:d,placeholder:p,loading:h,srcString:v,config:b,unoptimized:g,loader:j,onLoadRef:_,onLoadingCompleteRef:O,setBlurComplete:w,setShowAltText:x,onLoad:E,onError:S,...P}=e;return h=c?"lazy":h,i.default.createElement("img",{...P,...m(f),loading:h,width:o,height:n,decoding:"async","data-nimg":d?"fill":"1",className:u,style:{...s,...l},...r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&y(e,v,p,_,O,w,g))},[v,p,_,O,w,S,g,t]),onLoad:e=>{let t=e.currentTarget;y(t,v,p,_,O,w,g)},onError:e=>{x(!0),"blur"===p&&w(!0),S&&S(e)}})}),v=(0,i.forwardRef)((e,t)=>{var r;let n,o,{src:y,sizes:v,unoptimized:b=!1,priority:g=!1,loading:j,className:_,quality:O,width:w,height:x,fill:E,style:S,onLoad:P,onLoadingComplete:C,placeholder:T="empty",blurDataURL:M,fetchPriority:R,layout:k,objectFit:I,objectPosition:A,lazyBoundary:N,lazyRoot:L,...$}=e,z=(0,i.useContext)(l.ImageConfigContext),D=(0,i.useMemo)(()=>{let e=f||z||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[z]),F=$.loader||c.default;delete $.loader;let W="__next_img_default"in F;if(W){if("custom"===D.loader)throw Error('Image with src "'+y+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(k){"fill"===k&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!v&&(v=t)}let q="",U=p(w),H=p(x);if("object"==typeof(r=y)&&(d(r)||void 0!==r.src)){let e=d(y)?y.default:y;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,o=e.blurHeight,M=M||e.blurDataURL,q=e.src,!E){if(U||H){if(U&&!H){let t=U/e.width;H=Math.round(e.height*t)}else if(!U&&H){let t=H/e.height;U=Math.round(e.width*t)}}else U=e.width,H=e.height}}let Q=!g&&("lazy"===j||void 0===j);(!(y="string"==typeof y?y:q)||y.startsWith("data:")||y.startsWith("blob:"))&&(b=!0,Q=!1),D.unoptimized&&(b=!0),W&&y.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(b=!0),g&&(R="high");let[V,B]=(0,i.useState)(!1),[K,Y]=(0,i.useState)(!1),G=p(O),J=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},K?{}:{color:"transparent"},S),Z="blur"===T&&M&&!V?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,u.getImageBlurSvg)({widthInt:U,heightInt:H,blurWidth:n,blurHeight:o,blurDataURL:M,objectFit:J.objectFit})+'")'}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),c=s.length-1;return{sizes:a||"w"!==l?a:"100vw",srcSet:s.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===l?e:n+1)+l).join(", "),src:u({config:t,src:r,quality:i,width:s[c]})}}({config:D,src:y,unoptimized:b,width:U,quality:G,sizes:v,loader:F}),ee=y,et=(0,i.useRef)(P);(0,i.useEffect)(()=>{et.current=P},[P]);let er=(0,i.useRef)(C);(0,i.useEffect)(()=>{er.current=C},[C]);let en={isLazy:Q,imgAttributes:X,heightInt:H,widthInt:U,qualityInt:G,className:_,imgStyle:J,blurStyle:Z,loading:j,config:D,fetchPriority:R,fill:E,unoptimized:b,placeholder:T,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:B,setShowAltText:Y,...$};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h,{...en,ref:t}),g?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+X.src+X.srcSet+X.sizes,rel:"preload",as:"image",href:X.srcSet?void 0:X.src,imageSrcSet:X.srcSet,imageSizes:X.sizes,crossOrigin:$.crossOrigin,referrerPolicy:$.referrerPolicy,...m(R)})):null)}),b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=r(8754),o=n._(r(7294)),i=r(4532),a=r(3353),u=r(1410),s=r(9064),l=r(370),c=r(9955),f=r(4224),d=r(508),p=r(1516),y=r(4266),m=r(3991),h=new Set;function v(e,t,r,n,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(u).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:h,children:g,prefetch:j=null,passHref:_,replace:O,shallow:w,scroll:x,locale:E,onClick:S,onMouseEnter:P,onTouchStart:C,legacyBehavior:T=!1,...M}=e;r=g,T&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=!1!==j,k=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,I=o.default.useContext(c.RouterContext),A=o.default.useContext(f.AppRouterContext),N=null!=I?I:A,L=!I,{href:$,as:z}=o.default.useMemo(()=>{if(!I){let e=b(u);return{href:e,as:h?b(h):e}}let[e,t]=(0,i.resolveHref)(I,u,!0);return{href:e,as:h?(0,i.resolveHref)(I,h):t||e}},[I,u,h]),D=o.default.useRef($),F=o.default.useRef(z);T&&(n=o.default.Children.only(r));let W=T?n&&"object"==typeof n&&n.ref:t,[q,U,H]=(0,d.useIntersection)({rootMargin:"200px"}),Q=o.default.useCallback(e=>{(F.current!==z||D.current!==$)&&(H(),F.current=z,D.current=$),q(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[z,W,$,H,q]);o.default.useEffect(()=>{N&&U&&R&&v(N,$,z,{locale:E},{kind:k},L)},[z,$,U,E,R,null==I?void 0:I.locale,N,L,k]);let V={ref:Q,onClick(e){T||"function"!=typeof S||S(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,i,u,s,l,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:u,locale:l,scroll:s}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?o.default.startTransition(y):y()}(e,N,$,z,O,w,x,E,L,R)},onMouseEnter(e){T||"function"!=typeof P||P(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(R||!L)&&v(N,$,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:k},L)},onTouchStart(e){T||"function"!=typeof C||C(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(R||!L)&&v(N,$,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:k},L)}};if((0,s.isAbsoluteUrl)(z))V.href=z;else if(!T||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);V.href=t||(0,y.addBasePath)((0,l.addLocale)(z,e,null==I?void 0:I.defaultLocale))}return T?o.default.cloneElement(n,V):o.default.createElement("a",{...M,...V},r)}),j=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,a=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,l=s||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(l||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},u.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,r,t,c,d.current]);let y=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,y]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,u=n||t,s=o||r,l=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return u&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+u+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&o?"1":"20")+"'/%3E"+l+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function s(e){return function(t){return n.createElement(l,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var r,o=e.attr,i=e.size,s=e.title,l=u(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},1852:function(e,t,r){var n;e.exports=(n=r(7294),(()=>{var e={"./node_modules/css-mediaquery/index.js":(e,t)=>{"use strict";t.match=function(e,t){return u(e).some(function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!(n||r))return!1;var o=e.expressions.every(function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=c(o),i=c(i);break;case"resolution":o=l(o),i=l(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=s(o),i=s(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}});return o&&!r||!o&&r})},t.parse=u;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function u(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],u=t[3]||"",s={};return s.inverse=!!i&&"not"===i.toLowerCase(),s.type=a?a.toLowerCase():"all",u=u.match(/\([^\)]+\)/g)||[],s.expressions=u.map(function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}}),s})}function s(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function l(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}let u=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":(e,t,r)=>{"use strict";var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(u)}else this.matches=n(e,t),this.media=e;function u(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(u)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":e=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};if("abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},o)).join(""))return!1;return!0}catch(e){return!1}}()?function(e,o){for(var i,a,u=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))r.call(i,l)&&(u[l]=i[l]);if(t){a=t(i);for(var c=0;c<a.length;c++)n.call(i,a[c])&&(u[a[c]]=i[a[c]])}}return u}:Object.assign},"./node_modules/prop-types/checkPropTypes.js":(e,t,r)=>{"use strict";var n=function(){},o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function u(e,t,r,u,s){for(var l in e)if(a(e,l)){var c;try{if("function"!=typeof e[l]){var f=Error((u||"React class")+": "+r+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}c=e[l](t,l,u,r,null,o)}catch(e){c=e}if(!c||c instanceof Error||n((u||"React class")+": type specification of "+r+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in i)){i[c.message]=!0;var d=s?s():"";n("Failed "+r+" type: "+c.message+(null!=d?d:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw Error(t)}catch(e){}},u.resetWarningCache=function(){i={}},e.exports=u},"./node_modules/prop-types/factoryWithTypeCheckers.js":(e,t,r)=>{"use strict";var n=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),u=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js"),s=function(){};function l(){return null}s=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:p(l),arrayOf:function(e){return p(function(t,r,n,o,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=t[r];if(!Array.isArray(u)){var s=h(u);return new d("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected an array.")}for(var l=0;l<u.length;l++){var c=e(u,l,n,o,a+"["+l+"]",i);if(c instanceof Error)return c}return null})},element:p(function(t,r,n,o,i){var a=t[r];if(!e(a)){var u=h(a);return new d("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected a single ReactElement.")}return null}),elementType:p(function(e,t,r,o,i){var a=e[t];if(!n.isValidElementType(a)){var u=h(a);return new d("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected a single ReactElement type.")}return null}),instanceOf:function(e){return p(function(t,r,n,o,i){if(!(t[r]instanceof e)){var a,u=e.name||c,s=(a=t[r]).constructor&&a.constructor.name?a.constructor.name:c;return new d("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected instance of `"+u+"`.")}return null})},node:p(function(t,n,o,i,a){return!function t(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(t);if(null===n||e(n))return!0;var o=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(n);if(!o)return!1;var i,a=o.call(n);if(o!==n.entries){for(;!(i=a.next()).done;)if(!t(i.value))return!1}else for(;!(i=a.next()).done;){var u=i.value;if(u&&!t(u[1]))return!1}return!0;default:return!1}}(t[n])?new d("Invalid "+i+" `"+a+"` supplied to `"+o+"`, expected a ReactNode."):null}),objectOf:function(e){return p(function(t,r,n,o,u){if("function"!=typeof e)return new d("Property `"+u+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var s=t[r],l=h(s);if("object"!==l)return new d("Invalid "+o+" `"+u+"` of type `"+l+"` supplied to `"+n+"`, expected an object.");for(var c in s)if(a(s,c)){var f=e(s,c,n,o,u+"."+c,i);if(f instanceof Error)return f}return null})},oneOf:function(e){return Array.isArray(e)?p(function(t,r,n,o,i){for(var a,u=t[r],s=0;s<e.length;s++)if(u===(a=e[s])?0!==u||1/u==1/a:u!=u&&a!=a)return null;var l=JSON.stringify(e,function(e,t){return"symbol"===v(t)?String(t):t});return new d("Invalid "+o+" `"+i+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+l+".")}):(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array."),l)},oneOfType:function(e){if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+function(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}(r)+" at index "+t+"."),l}return p(function(t,r,n,o,u){for(var s=[],l=0;l<e.length;l++){var c=(0,e[l])(t,r,n,o,u,i);if(null==c)return null;c.data&&a(c.data,"expectedType")&&s.push(c.data.expectedType)}var f=s.length>0?", expected one of type ["+s.join(", ")+"]":"";return new d("Invalid "+o+" `"+u+"` supplied to `"+n+"`"+f+".")})},shape:function(e){return p(function(t,r,n,o,a){var u=t[r],s=h(u);if("object"!==s)return new d("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var l in e){var c=e[l];if("function"!=typeof c)return m(n,o,a,l,v(c));var f=c(u,l,n,o,a+"."+l,i);if(f)return f}return null})},exact:function(e){return p(function(t,r,n,u,s){var l=t[r],c=h(l);if("object"!==c)return new d("Invalid "+u+" `"+s+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var f=o({},t[r],e);for(var p in f){var y=e[p];if(a(e,p)&&"function"!=typeof y)return m(n,u,s,p,v(y));if(!y)return new d("Invalid "+u+" `"+s+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var b=y(l,p,n,u,s+"."+p,i);if(b)return b}return null})}};function d(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},n=0;function o(o,a,u,l,f,p,y){if(l=l||c,p=p||u,y!==i){if(t){var m=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var h=l+":"+u;!r[h]&&n<3&&(s("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,n++)}}return null!=a[u]?e(a,u,l,f,p):o?new d(null===a[u]?"The "+f+" `"+p+"` is marked as required in `"+l+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+l+"`, but its value is `undefined`."):null}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function y(e){return p(function(t,r,n,o,i,a){var u=t[r];if(h(u)!==e){var s=v(u);return new d("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e})}return null})}function m(e,t,r,n,o){return new d((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":"symbol"===t||e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)?"symbol":t}function v(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}return d.prototype=Error.prototype,f.checkPropTypes=u,f.resetWarningCache=u.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(e,t)=>{"use strict";!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case l:case c:case o:case a:case i:case d:return p;default:var h=p&&p.$$typeof;switch(h){case s:case f:case m:case y:case u:return h;default:return t}}case n:return t}}}var _=!1;function O(e){return j(e)===c}t.AsyncMode=l,t.ConcurrentMode=c,t.ContextConsumer=s,t.ContextProvider=u,t.Element=r,t.ForwardRef=f,t.Fragment=o,t.Lazy=m,t.Memo=y,t.Portal=n,t.Profiler=a,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),O(e)||j(e)===l},t.isConcurrentMode=O,t.isContextConsumer=function(e){return j(e)===s},t.isContextProvider=function(e){return j(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return j(e)===f},t.isFragment=function(e){return j(e)===o},t.isLazy=function(e){return j(e)===m},t.isMemo=function(e){return j(e)===y},t.isPortal=function(e){return j(e)===n},t.isProfiler=function(e){return j(e)===a},t.isStrictMode=function(e){return j(e)===i},t.isSuspense=function(e){return j(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===u||e.$$typeof===s||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g||e.$$typeof===h)},t.typeOf=j}()},"./node_modules/react-is/index.js":(e,t,r)=>{"use strict";e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(e,t,r)=>{"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=r[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),u=(0,i.default)(a,r,o);return"function"==typeof t?t(u):u?t:null}},"./src/Context.ts":(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var u=n(r(/*! ./Context */"./src/Context.ts"));t.Context=u.default},"./src/mediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! prop-types */"./node_modules/prop-types/index.js")),u=a.default.oneOfType([a.default.string,a.default.number]),s={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},l={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:u,type:Object.keys(s)};l.type;var c=o(l,["type"]),f=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:u,maxResolution:u},c),d=n(n({},s),f);t.default={all:d,types:s,matchers:l,features:f}},"./src/toQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts")),a=function(e,t){var r=(0,o.default)(e);return("number"==typeof t&&(t="".concat(t,"px")),!0===t)?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")};t.default=function(e){var t=[];return Object.keys(i.default.all).forEach(function(r){var n=e[r];null!=n&&t.push(a(r,n))}),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(/*! react */"react"),i=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),u=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),s=n(r(/*! ./toQuery */"./src/toQuery.ts")),l=n(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce(function(t,r){return t[(0,a.default)(r)]=e[r],t},{})},f=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)(function(){e.current=!0},[]),e.current},d=function(e){var t=(0,o.useContext)(l.default),r=function(){return c(e)||c(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)(function(){var e=r();(0,u.shallowEqualObjects)(i,e)||a(e)},[e,t]),i},p=function(e){var t=function(){return e.query||(0,s.default)(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)(function(){var e=t();n!==e&&i(e)},[e]),n},y=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],u=n[1],s=f();return(0,o.useEffect)(function(){if(s){var e=r();return u(e),function(){e&&e.dispose()}}},[e,t]),a},m=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)(function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}},[e]),r};t.default=function(e,t,r){var n=d(t),i=p(e);if(!i)throw Error("Invalid or missing MediaQuery!");var a=y(i,n),u=m(a),s=f();return(0,o.useEffect)(function(){s&&r&&r(u)},[u]),(0,o.useEffect)(function(){return function(){a&&a.dispose()}},[]),u}},react:e=>{"use strict";e.exports=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})())}}]);