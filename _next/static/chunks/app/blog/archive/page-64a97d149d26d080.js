(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[718],{296:(e,t,a)=>{Promise.resolve().then(a.bind(a,159))},159:(e,t,a)=>{"use strict";a.d(t,{default:()=>c});var r=a(5155),l=a(6931),s=a(7396),n=a(2888),d=a(3857);function c(e){let{groupedPosts:t}=e,{darkMode:a,toggleDarkMode:c}=(0,l.W)();return(0,r.jsxs)("div",{className:"min-h-screen ".concat(a?"dark bg-neutral-900":"bg-white"),children:[(0,r.jsx)(d.A,{showSearch:!1}),(0,r.jsxs)("div",{className:"max-w-4xl mx-auto p-4 mt-20",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100",children:"Blog Archive"}),Object.entries(t).sort((e,t)=>{let[a]=e,[r]=t;return r-a}).map(e=>{let[t,a]=e;return(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200",children:t}),Object.entries(a).sort((e,t)=>{let[a]=e,[r]=t,l=new Date("".concat(a," 1, 2000"));return new Date("".concat(r," 1, 2000"))-l}).map(e=>{let[a,l]=e;return(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsxs)("h3",{className:"text-xl font-semibold mb-3 dark:text-gray-300 flex items-center",children:[(0,r.jsx)(n.wIk,{className:"mr-2"}),a]}),(0,r.jsx)("ul",{className:"space-y-2",children:l.sort((e,t)=>new Date(t.date)-new Date(e.date)).map(e=>(0,r.jsx)("li",{className:"ml-6",children:(0,r.jsxs)(s.default,{href:"/blog/".concat(e.slug),className:"text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",children:[(0,r.jsxs)("span",{className:"text-gray-500 dark:text-gray-400 mr-2",children:[new Date(e.date).getDate().toString().padStart(2,"0")," -"]}),e.title]})},e.slug))})]},"".concat(t,"-").concat(a))})]},t)})]})]})}},3857:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var r=a(5155),l=a(6931),s=a(2888),n=a(7396),d=a(2115);function c(e){let{showSearch:t=!1,onSearch:a}=e,{darkMode:c,toggleDarkMode:o}=(0,l.W)(),[u,i]=(0,d.useState)(!1),x=(0,d.useRef)(null),h=(0,d.useRef)(null);return(0,d.useEffect)(()=>{let e=e=>{x.current&&!x.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,d.useEffect)(()=>{u&&h.current&&h.current.focus()},[u]),(0,d.useEffect)(()=>{let e=e=>{"Escape"===e.key&&i(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,r.jsx)("header",{className:"fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,r.jsxs)(n.default,{href:"/",className:"font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors flex items-center gap-2",children:[(0,r.jsx)(s.V5Y,{className:"w-5 h-5"}),(0,r.jsx)("span",{className:"font-bold hidden sm:inline",children:"FR"})]}),(0,r.jsxs)("nav",{className:"flex items-center gap-2 sm:gap-4",children:[t&&(0,r.jsxs)("div",{ref:x,className:"relative",children:[(0,r.jsx)("button",{onClick:()=>i(!0),"data-search-trigger":!0,className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Search posts",children:(0,r.jsx)(s.CKj,{className:"w-4 h-4"})}),u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"sm:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50",children:(0,r.jsx)("div",{className:"fixed top-0 left-0 right-0 bg-white dark:bg-neutral-800 p-4  border-b border-neutral-200 dark:border-neutral-700",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{ref:h,type:"text",placeholder:"Search posts...",onChange:e=>a(e.target.value),className:"w-full pl-8 pr-8 py-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,r.jsx)(s.CKj,{className:"absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4  text-neutral-400 dark:text-neutral-500"}),(0,r.jsx)("button",{onClick:()=>i(!1),className:"absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full",children:(0,r.jsx)(s.yGN,{className:"w-4 h-4 text-neutral-500 dark:text-neutral-400"})})]})})}),(0,r.jsxs)("div",{className:"hidden sm:block absolute right-0 mt-2 w-72 bg-white dark:bg-neutral-800 rounded-lg shadow-lg  border border-neutral-200 dark:border-neutral-700 overflow-hidden",children:[(0,r.jsx)("div",{className:"p-3 border-b border-neutral-200 dark:border-neutral-700",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{type:"text",placeholder:"Search posts...",onChange:e=>a(e.target.value),className:"w-full pl-8 pr-8 py-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,r.jsx)(s.CKj,{className:"absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4  text-neutral-400 dark:text-neutral-500"}),(0,r.jsx)("button",{onClick:()=>i(!1),className:"absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full",children:(0,r.jsx)(s.yGN,{className:"w-4 h-4 text-neutral-500 dark:text-neutral-400"})})]})}),(0,r.jsxs)("div",{className:"p-2 text-xs text-neutral-500 dark:text-neutral-400",children:[(0,r.jsx)("kbd",{className:"px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded",children:"ESC"})," ","to close"]})]})]})]}),(0,r.jsx)(n.default,{href:"/blog",className:"px-2 sm:px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-sm transition-colors",children:"Blog"}),(0,r.jsx)(n.default,{href:"/blog/archive",className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Archive",children:(0,r.jsx)(s.OZ2,{className:"w-4 h-4"})}),(0,r.jsx)("button",{onClick:o,className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Toggle dark mode",children:c?(0,r.jsx)(s.Wh$,{className:"w-4 h-4"}):(0,r.jsx)(s.hkc,{className:"w-4 h-4"})})]})]})})})}},6931:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>n,W:()=>d});var r=a(5155),l=a(2115);let s=(0,l.createContext)({});function n(e){let{children:t}=e,[a,n]=(0,l.useState)(!1),[d,c]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e="true"===localStorage.getItem("darkMode");n(e),document.documentElement.classList.toggle("dark",e),c(!0)},[]);let o=(0,l.useMemo)(()=>({darkMode:a,toggleDarkMode:()=>{let e=!a;n(e),localStorage.setItem("darkMode",String(e)),document.documentElement.classList.toggle("dark",e)}}),[a]);return d?(0,r.jsx)(s.Provider,{value:o,children:t}):null}let d=()=>(0,l.useContext)(s)}},e=>{var t=t=>e(e.s=t);e.O(0,[844,234,441,517,358],()=>t(296)),_N_E=e.O()}]);