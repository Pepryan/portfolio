(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{4396:(e,t,a)=>{Promise.resolve().then(a.bind(a,2813))},2813:(e,t,a)=>{"use strict";a.d(t,{default:()=>P});var r={};a.r(r),a.d(r,{MDXProvider:()=>N,useMDXComponents:()=>k});var l=a(5155),n=a(2115),s=a(7396),o=a(6931),i=a(2888),d=a(8943),c=a(5683);let u=e=>{let{onClick:t,isExpanded:a}=e;return(0,l.jsx)(d.P.button,{onClick:t,className:"fixed lg:hidden z-50 bottom-0 left-0 p-3 rounded-full shadow-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200/20 dark:border-neutral-800/20",whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{type:"spring",stiffness:300,damping:20},children:(0,l.jsx)(i.Wm,{className:"w-5 h-5 text-neutral-700 dark:text-neutral-300"})})},x=e=>{let{isExpanded:t,children:a}=e;return(0,l.jsx)(c.N,{children:t&&(0,l.jsx)(d.P.div,{className:"fixed lg:hidden z-40 bottom-16 left-4 w-[280px] max-h-[50vh] bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-lg shadow-lg border border-neutral-200/20 dark:border-neutral-800/20 overflow-y-auto",initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},transition:{type:"spring",stiffness:300,damping:20},children:a})})},h=(0,n.memo)(function(e){let{content:t,defaultExpanded:a=!0}=e,[r,s]=(0,n.useState)([]),[o,d]=(0,n.useState)(""),[c,h]=(0,n.useState)(a);(0,n.useEffect)(()=>{s((()=>{let e=t.split("\n"),a=[],r=!1;return e.forEach(e=>{if(e.trim().startsWith("```")){r=!r;return}if(!r){let t=e.match(/^(#{2,6})\s+(.+)$/);if(t){let e=t[1].length,r=t[2],l=r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");a.push({level:e,text:r,slug:l})}}}),a})());let e=document.querySelector("article");e&&e.querySelectorAll("h2, h3, h4, h5, h6").forEach(e=>{if(!e.id){let t=e.textContent.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");e.id=t}});let a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&d(e.target.id)})},{rootMargin:"-80px 0% -80% 0%",threshold:1});return document.querySelectorAll("article h2, article h3, article h4, article h5, article h6").forEach(e=>a.observe(e)),()=>a.disconnect()},[t]);let m=e=>{let t=document.getElementById(e);if(t){if(window.innerWidth<1024)h(!1),setTimeout(()=>{let e=t.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:e,behavior:"smooth"})},100);else{let e=t.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:e,behavior:"smooth"})}d(e)}};return 0===r.length?null:(0,l.jsxs)("nav",{className:"not-prose\n      lg:static lg:border lg:border-neutral-200/70 lg:dark:border-neutral-800/80 lg:rounded-lg\n      lg:bg-white/50 lg:dark:bg-neutral-900/50 lg:backdrop-blur-sm lg:shadow-sm\n      \n      max-lg:fixed max-lg:bottom-4 max-lg:left-4\n      max-lg:z-50 max-lg:shadow-lg max-lg:rounded-lg\n      max-lg:bg-white/90 max-lg:dark:bg-neutral-900/90\n      max-lg:backdrop-blur-sm max-lg:border max-lg:border-neutral-200/20 max-lg:dark:border-neutral-800/20\n      ",children:[(0,l.jsx)("div",{className:"lg:px-3 lg:py-2 lg:border-b lg:border-neutral-200/70 lg:dark:border-neutral-800/80",children:(0,l.jsxs)("button",{onClick:()=>h(!c),className:"hidden lg:flex items-center justify-center w-full p-2.5",children:[(0,l.jsx)("h2",{className:"text-sm font-medium text-neutral-700 dark:text-neutral-300",children:"On this page"}),(0,l.jsx)(i.fK4,{className:"w-4 h-4 ml-2 text-neutral-700 dark:text-neutral-300 transition-transform duration-150 ".concat(c?"rotate-180":"")})]})}),c&&(0,l.jsx)("div",{className:"overflow-y-auto lg:px-3 lg:py-2 lg:max-h-[calc(100vh-8rem)] hidden lg:block",children:(0,l.jsx)("ul",{className:"space-y-1 text-sm",children:r.map((e,t)=>(0,l.jsx)("li",{style:{paddingLeft:"".concat((e.level-2)*.75,"rem")},children:(0,l.jsxs)("button",{onClick:()=>{m(e.slug)},className:"\n                    group flex items-center gap-1 w-full text-left py-1 px-2 rounded-md\n                    ".concat(o===e.slug?"text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/5":"text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200","\n                    transition-colors duration-150 text-[13px] leading-tight\n                  "),children:[(0,l.jsx)(i.fOo,{className:"w-3 h-3 flex-shrink-0 transition-transform duration-150 opacity-60\n                      ".concat(o===e.slug?"rotate-90":"group-hover:rotate-90","\n                    ")}),(0,l.jsx)("span",{className:"truncate",children:e.text})]})},t))})}),(0,l.jsx)(u,{onClick:()=>h(!c),isExpanded:c}),(0,l.jsx)(x,{isExpanded:c,children:(0,l.jsx)("ul",{className:"space-y-1 text-sm p-3",children:r.map((e,t)=>(0,l.jsx)("li",{style:{paddingLeft:"".concat((e.level-2)*.75,"rem")},children:(0,l.jsxs)("button",{onClick:()=>{m(e.slug),h(!1)},className:"\n                  group flex items-center gap-1 w-full text-left py-1 px-2 rounded-md\n                  ".concat(o===e.slug?"text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/5":"text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200","\n                  transition-colors duration-150 text-[13px] leading-tight\n                "),children:[(0,l.jsx)(i.fOo,{className:"w-3 h-3 flex-shrink-0 transition-transform duration-150 opacity-60\n                    ".concat(o===e.slug?"rotate-90":"group-hover:rotate-90","\n                  ")}),(0,l.jsx)("span",{className:"truncate",children:e.text})]})},t))})})]})});var m=a(3857);function g(e){let{date:t,updated:a,readingTime:r,wordCount:n}=e;return(0,l.jsxs)("div",{className:"flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(i.wIk,{className:"w-4 h-4"}),new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),a&&(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(i.Ohp,{className:"w-4 h-4"}),"Updated: ",new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),(0,l.jsx)("span",{children:"\xb7"}),(0,l.jsxs)("span",{children:[r," min read"]}),n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"\xb7"}),(0,l.jsxs)("span",{children:[n," words"]})]})]})}function p(e){let{tags:t=[],className:a=""}=e;return Array.isArray(t)&&0!==t.length?(0,l.jsx)("div",{className:"flex flex-wrap gap-2 ".concat(a),children:t.map(e=>(0,l.jsxs)(s.default,{href:"/blog/tags/".concat(e),className:"flex items-center gap-1 px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800  text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-neutral-200  dark:hover:bg-neutral-700 transition-colors",children:[(0,l.jsx)(i.cnX,{className:"w-3 h-3"}),e]},e))}):null}var b=a(1589);function f(e){let{title:t,url:a}=e,[r,s]=(0,n.useState)(!1),o=async()=>{try{await navigator.clipboard.writeText(a),s(!0),setTimeout(()=>s(!1),2e3)}catch(e){}};return(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("button",{onClick:()=>{let e=new URL(a,window.location.origin).toString();window.open("https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(t),"&url=").concat(encodeURIComponent(e)),"_blank")},className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800  rounded-full transition-colors","aria-label":"Share on X",children:(0,l.jsx)(b.TCj,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:()=>{let e=new URL(a,window.location.origin).toString();window.open("https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(e)),"_blank")},className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800  rounded-full transition-colors","aria-label":"Share on LinkedIn",children:(0,l.jsx)(i.Wjy,{className:"w-5 h-5"})}),(0,l.jsx)("button",{onClick:o,className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors relative","aria-label":"Copy link",children:r?(0,l.jsx)(i.YrT,{className:"w-5 h-5 text-green-500"}):(0,l.jsx)(i.ayE,{className:"w-5 h-5"})})]})}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var v=a(7927);let w={},j=n.createContext(w);function k(e){let t=n.useContext(j);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function N(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(w):e.components||w:k(e.components),n.createElement(j.Provider,{value:t},e.children)}function y({compiledSource:e,frontmatter:t,scope:a,components:l={},lazy:s}){let[o,i]=(0,n.useState)(!s||"undefined"==typeof window);(0,n.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{i(!0)});return()=>window.cancelIdleCallback(e)}},[]);let d=(0,n.useMemo)(()=>{let l=Object.assign({opts:{...r,...v.jsxRuntime}},{frontmatter:t},a),n=Object.keys(l),s=Object.values(l),o=Reflect.construct(Function,n.concat(`${e}`));return o.apply(o,s).default},[a,e]);if(!o)return n.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let c=n.createElement(N,{components:l},n.createElement(d,null));return s?n.createElement("div",null,c):c}var C=a(5565),E=a(7650);let S=e=>{let[t,a]=(0,n.useState)(!1),[r,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{s(!0)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{role:"button",tabIndex:0,className:"inline-block",onClick:()=>a(!0),onKeyDown:e=>{"Enter"===e.key&&a(!0)},children:(0,l.jsx)(C.default,{...e,width:800,height:400,style:{height:"auto"},priority:!0,className:"my-8 rounded-lg cursor-pointer hover:opacity-90 transition-opacity",alt:e.alt||""})}),t&&r&&(0,E.createPortal)((0,l.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",onClick:()=>a(!1),role:"dialog","aria-modal":"true",children:[(0,l.jsx)("button",{className:"absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors",onClick:e=>{e.stopPropagation(),a(!1)},"aria-label":"Close image preview",children:(0,l.jsx)(i.yGN,{className:"w-6 h-6"})}),(0,l.jsx)(C.default,{...e,width:1200,height:800,style:{height:"auto",maxHeight:"90vh",width:"auto",maxWidth:"90vw"},className:"rounded-lg",loading:"lazy",alt:e.alt||"",onClick:e=>e.stopPropagation()})]}),document.body)]})},T={img:e=>(0,l.jsx)(S,{...e}),a:e=>{let{href:t,children:a}=e;return(0,l.jsx)(s.default,{href:t,className:"text-blue-500 hover:text-blue-600",children:a})},pre:e=>{let{children:t,...a}=e,[r,s]=(0,n.useState)(!1),o=(0,n.useRef)(null),d=async()=>{var e;let t=null===(e=o.current)||void 0===e?void 0:e.querySelector("code"),a=(null==t?void 0:t.textContent)||"";try{await navigator.clipboard.writeText(a),s(!0),setTimeout(()=>s(!1),2e3)}catch(e){}};return(0,l.jsxs)("div",{className:"relative group",children:[(0,l.jsx)("pre",{ref:o,...a,children:t}),(0,l.jsx)("button",{onClick:d,className:"absolute right-2 top-2 p-2 rounded-md  bg-neutral-100 dark:bg-neutral-800  text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:r?(0,l.jsx)(i.YrT,{className:"w-4 h-4 text-green-500"}):(0,l.jsx)(i.nxz,{className:"w-4 h-4"})})]})}};function L(e){let{content:t}=e;return(null==t?void 0:t.compiledSource)?(0,l.jsx)(y,{...t,components:{...T}}):null}function I(e){let{currentPost:t,posts:a}=e;if(!(null==t?void 0:t.tags)||!Array.isArray(a))return null;let r=a.filter(e=>(null==e?void 0:e.slug)&&(null==e?void 0:e.tags)&&Array.isArray(e.tags)&&e.slug!==t.slug&&e.tags.some(e=>t.tags.includes(e))).slice(0,3);return 0===r.length?null:(0,l.jsx)("section",{className:"max-w-7xl mx-auto px-4 py-16",children:(0,l.jsxs)("div",{className:"border-t border-neutral-200 dark:border-neutral-800 pt-12",children:[(0,l.jsx)("div",{className:"flex items-center justify-between mb-8",children:(0,l.jsx)("h3",{className:"text-2xl font-bold text-neutral-900 dark:text-neutral-100",children:"Related Posts"})}),(0,l.jsx)("div",{className:"grid gap-8 md:grid-cols-3",children:r.map(e=>(0,l.jsxs)(s.default,{href:"/blog/".concat(e.slug),className:"group relative flex flex-col h-full overflow-hidden rounded-xl  bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/50  dark:border-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600  transition-all duration-300 hover:shadow-lg",children:[(0,l.jsxs)("div",{className:"p-6 flex flex-col h-full",children:[(0,l.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:e.tags.slice(0,2).map(e=>(0,l.jsx)("span",{className:"px-2 py-1 text-xs rounded-full bg-neutral-200/50  dark:bg-neutral-700/50 text-neutral-600 dark:text-neutral-400",children:e},e))}),(0,l.jsx)("h4",{className:"text-lg font-semibold text-neutral-900 dark:text-neutral-100  group-hover:text-blue-500 transition-colors mb-3",children:e.title}),(0,l.jsx)("p",{className:"text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4",children:e.excerpt}),e.image&&(0,l.jsx)("div",{className:"relative w-full h-48 mb-4 rounded-lg overflow-hidden",children:(0,l.jsx)(C.default,{src:e.image,alt:e.title,fill:!0,sizes:"(max-width: 768px) 100vw, 33vw",className:"object-cover",priority:!1})}),(0,l.jsxs)("div",{className:"mt-auto flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(i.wIk,{className:"w-3 h-3"}),(0,l.jsx)("time",{children:new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})})]}),e.readingTime&&(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(i.Ohp,{className:"w-3 h-3"}),(0,l.jsxs)("span",{children:[e.readingTime," min read"]})]})]})]}),(0,l.jsx)("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-blue-500  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"})]},e.slug))})]})})}function R(){let[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{let e=document.querySelector("main");if(!e)return;let a=e.clientHeight-window.innerHeight;t(Math.min(Math.max((window.scrollY-e.offsetTop)/a*100,0),100)),r(window.scrollY>300)};return e(),window.addEventListener("scroll",e),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"fixed top-16 left-0 w-full h-1 bg-neutral-200 dark:bg-neutral-800 z-40",children:(0,l.jsx)("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150",style:{width:"".concat(e,"%")}})}),(0,l.jsxs)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed right-4 md:right-8 bottom-4 md:bottom-8 p-3 rounded-full \n          bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 \n          z-50 group ".concat(a?"translate-y-0 opacity-100":"translate-y-16 opacity-0 pointer-events-none"),"aria-label":"Back to top",children:[(0,l.jsx)(i.ei4,{className:"w-5 h-5"}),(0,l.jsx)("div",{className:"absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1  bg-neutral-800/90 text-white text-xs rounded opacity-0  group-hover:opacity-100 transition-opacity whitespace-nowrap  pointer-events-none",children:"Back to top"})]})]})}function P(e){let{content:t,frontmatter:a,allPosts:r}=e,{darkMode:n}=(0,o.W)(),{readingTime:d,wordCount:c}=a,u=r.findIndex(e=>e.slug===a.slug),x=u<r.length-1?r[u+1]:null,b=u>0?r[u-1]:null;return(0,l.jsxs)("div",{className:"min-h-screen ".concat(n?"dark bg-neutral-900":"bg-white"),children:[(0,l.jsx)(m.A,{}),(0,l.jsx)(R,{}),(0,l.jsxs)("main",{className:"max-w-7xl mx-auto px-4 pt-24 pb-16 mt-8",children:[(0,l.jsxs)(s.default,{href:"/blog",className:"inline-flex items-center gap-2 mb-8 text-neutral-600 dark:text-neutral-400  hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors",children:[(0,l.jsx)(i.kRp,{className:"w-4 h-4"}),"Back to all posts"]}),(0,l.jsxs)("div",{className:"lg:grid lg:grid-cols-[1fr_280px] lg:gap-8",children:[(0,l.jsxs)("article",{className:"prose dark:prose-invert max-w-none",children:[(0,l.jsx)("h1",{className:"text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100",children:a.title}),(0,l.jsx)("div",{className:"mb-8",children:(0,l.jsx)(g,{date:a.date,updated:a.updated,readingTime:d,wordCount:c})}),(0,l.jsx)("div",{className:"mb-8",children:(0,l.jsx)(p,{tags:a.tags})}),(0,l.jsx)("div",{className:"mb-8",children:(0,l.jsx)(f,{title:a.title,url:window.location.href})}),(0,l.jsx)("div",{className:"mb-8 lg:hidden",children:(0,l.jsx)(h,{content:a.rawContent,defaultExpanded:!1})}),(0,l.jsx)("div",{className:"mt-8",children:(0,l.jsx)(L,{content:t})})]}),(0,l.jsx)("aside",{className:"hidden lg:block",children:(0,l.jsx)("div",{className:"sticky top-24 w-[280px]",children:(0,l.jsx)(h,{content:a.rawContent,defaultExpanded:!0})})})]}),(0,l.jsx)("div",{className:"mt-16 mb-16",children:(0,l.jsx)(I,{currentPost:a,posts:r})}),(0,l.jsx)("nav",{className:"border-t border-neutral-200 dark:border-neutral-800",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 py-8",children:[x&&(0,l.jsxs)(s.default,{href:"/blog/".concat(x.slug),"data-prev-post":!0,className:"group p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl  hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-2",children:[(0,l.jsx)(i.kRp,{className:"w-4 h-4"}),(0,l.jsx)("span",{children:"Previous Post"})]}),(0,l.jsx)("h4",{className:"font-medium text-neutral-900 dark:text-neutral-100  line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400",children:x.title})]}),b&&(0,l.jsxs)(s.default,{href:"/blog/".concat(b.slug),"data-next-post":!0,className:"group p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl \n                  hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors\n                  ".concat(x?"":"sm:col-start-2"),children:[(0,l.jsxs)("div",{className:"flex items-center justify-end gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-2",children:[(0,l.jsx)("span",{children:"Next Post"}),(0,l.jsx)(i.dyV,{className:"w-4 h-4"})]}),(0,l.jsx)("h4",{className:"font-medium text-neutral-900 dark:text-neutral-100 text-right line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400",children:b.title})]})]})})]})]})}},3857:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var r=a(5155),l=a(6931),n=a(2888),s=a(7396),o=a(2115);function i(e){let{showSearch:t=!1,onSearch:a}=e,{darkMode:i,toggleDarkMode:d}=(0,l.W)(),[c,u]=(0,o.useState)(!1),x=(0,o.useRef)(null),h=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=e=>{x.current&&!x.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,o.useEffect)(()=>{c&&h.current&&h.current.focus()},[c]),(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&u(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,r.jsx)("header",{className:"fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,r.jsxs)(s.default,{href:"/",className:"font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors flex items-center gap-2",children:[(0,r.jsx)(n.V5Y,{className:"w-5 h-5"}),(0,r.jsx)("span",{className:"font-bold hidden sm:inline",children:"FR"})]}),(0,r.jsxs)("nav",{className:"flex items-center gap-2 sm:gap-4",children:[t&&(0,r.jsxs)("div",{ref:x,className:"relative",children:[(0,r.jsx)("button",{onClick:()=>u(!0),"data-search-trigger":!0,className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Search posts",children:(0,r.jsx)(n.CKj,{className:"w-4 h-4"})}),c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"sm:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50",children:(0,r.jsx)("div",{className:"fixed top-0 left-0 right-0 bg-white dark:bg-neutral-800 p-4  border-b border-neutral-200 dark:border-neutral-700",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{ref:h,type:"text",placeholder:"Search posts...",onChange:e=>a(e.target.value),className:"w-full pl-8 pr-8 py-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,r.jsx)(n.CKj,{className:"absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4  text-neutral-400 dark:text-neutral-500"}),(0,r.jsx)("button",{onClick:()=>u(!1),className:"absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full",children:(0,r.jsx)(n.yGN,{className:"w-4 h-4 text-neutral-500 dark:text-neutral-400"})})]})})}),(0,r.jsxs)("div",{className:"hidden sm:block absolute right-0 mt-2 w-72 bg-white dark:bg-neutral-800 rounded-lg shadow-lg  border border-neutral-200 dark:border-neutral-700 overflow-hidden",children:[(0,r.jsx)("div",{className:"p-3 border-b border-neutral-200 dark:border-neutral-700",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{type:"text",placeholder:"Search posts...",onChange:e=>a(e.target.value),className:"w-full pl-8 pr-8 py-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,r.jsx)(n.CKj,{className:"absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4  text-neutral-400 dark:text-neutral-500"}),(0,r.jsx)("button",{onClick:()=>u(!1),className:"absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full",children:(0,r.jsx)(n.yGN,{className:"w-4 h-4 text-neutral-500 dark:text-neutral-400"})})]})}),(0,r.jsxs)("div",{className:"p-2 text-xs text-neutral-500 dark:text-neutral-400",children:[(0,r.jsx)("kbd",{className:"px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded",children:"ESC"})," ","to close"]})]})]})]}),(0,r.jsx)(s.default,{href:"/blog",className:"px-2 sm:px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-sm transition-colors",children:"Blog"}),(0,r.jsx)(s.default,{href:"/blog/archive",className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Archive",children:(0,r.jsx)(n.OZ2,{className:"w-4 h-4"})}),(0,r.jsx)("button",{onClick:d,className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Toggle dark mode",children:i?(0,r.jsx)(n.Wh$,{className:"w-4 h-4"}):(0,r.jsx)(n.hkc,{className:"w-4 h-4"})})]})]})})})}},6931:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>s,W:()=>o});var r=a(5155),l=a(2115);let n=(0,l.createContext)({});function s(e){let{children:t}=e,[a,s]=(0,l.useState)(!1),[o,i]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e="true"===localStorage.getItem("darkMode");s(e),document.documentElement.classList.toggle("dark",e),i(!0)},[]);let d=(0,l.useMemo)(()=>({darkMode:a,toggleDarkMode:()=>{let e=!a;s(e),localStorage.setItem("darkMode",String(e)),document.documentElement.classList.toggle("dark",e)}}),[a]);return o?(0,r.jsx)(n.Provider,{value:d,children:t}):null}let o=()=>(0,l.useContext)(n)},7927:(e,t,a)=>{"use strict";e.exports.jsxRuntime=a(5155)}},e=>{var t=t=>e(e.s=t);e.O(0,[844,446,234,565,845,441,517,358],()=>t(4396)),_N_E=e.O()}]);