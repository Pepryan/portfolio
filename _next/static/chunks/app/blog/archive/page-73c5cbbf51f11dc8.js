(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[718],{6598:(e,t,a)=>{Promise.resolve().then(a.bind(a,159))},159:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var s=a(5155),r=a(6931),l=a(7396),c=a(2888),n=a(3857);function d(e){let{groupedPosts:t}=e,{darkMode:a,toggleDarkMode:d}=(0,r.W)();return(0,s.jsxs)("div",{className:"min-h-screen ".concat(a?"dark bg-gray-900":"bg-white"),children:[(0,s.jsx)(n.A,{showSearch:!1}),(0,s.jsxs)("div",{className:"max-w-4xl mx-auto p-4 mt-20",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold mb-8 dark:text-white",children:"Blog Archive"}),Object.entries(t).sort((e,t)=>{let[a]=e,[s]=t;return s-a}).map(e=>{let[t,a]=e;return(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4 dark:text-white",children:t}),Object.entries(a).sort((e,t)=>{let[a]=e,[s]=t,r=new Date("".concat(a," 1, 2000"));return new Date("".concat(s," 1, 2000"))-r}).map(e=>{let[a,r]=e;return(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsxs)("h3",{className:"text-xl font-semibold mb-3 dark:text-gray-300 flex items-center",children:[(0,s.jsx)(c.wIk,{className:"mr-2"}),a]}),(0,s.jsx)("ul",{className:"space-y-2",children:r.sort((e,t)=>new Date(t.date)-new Date(e.date)).map(e=>(0,s.jsx)("li",{className:"ml-6",children:(0,s.jsxs)(l.default,{href:"/blog/".concat(e.slug),className:"text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",children:[(0,s.jsxs)("span",{className:"text-gray-500 dark:text-gray-400 mr-2",children:[new Date(e.date).getDate().toString().padStart(2,"0")," -"]}),e.title]})},e.slug))})]},"".concat(t,"-").concat(a))})]},t)})]})]})}},3857:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var s=a(5155),r=a(6931),l=a(2888),c=a(7396);function n(e){let{setActiveSection:t,showSearch:a,onSearch:n,isPost:d}=e,{darkMode:i,toggleDarkMode:o}=(0,r.W)();return(0,s.jsx)("header",{className:"fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"flex justify-between items-center h-14",children:[(0,s.jsx)("div",{className:"flex items-center gap-4",children:(0,s.jsx)("div",{className:"flex items-center gap-4",children:(0,s.jsxs)(c.default,{href:"/",className:"flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors",children:[(0,s.jsx)(l.V5Y,{className:"w-5 h-5"}),(0,s.jsx)("span",{className:"font-bold hidden sm:inline",children:"FR"})]})})}),(0,s.jsxs)("div",{className:"flex items-center gap-2 sm:gap-4",children:[a&&(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:"text",placeholder:"Search...",onChange:e=>null==n?void 0:n(e.target.value),className:"pl-8 pr-2 py-1 sm:py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white  w-32 sm:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"}),(0,s.jsx)(l.CKj,{className:"absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"})]}),(0,s.jsxs)("nav",{className:"flex items-center gap-2 sm:gap-4",children:[!d&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.default,{href:"/blog",className:"text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors",children:(0,s.jsx)("span",{children:" Blog  "})}),(0,s.jsxs)(c.default,{href:"/blog/archive",className:"text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1",children:[(0,s.jsx)(l.OZ2,{className:"w-4 h-4"}),(0,s.jsx)("span",{children:"Archive"})]})]}),d&&(0,s.jsxs)(c.default,{href:"/blog",className:"flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors",children:[(0,s.jsx)(l.kRp,{className:"w-4 h-4"}),(0,s.jsx)("span",{children:"Back to Blog"})]}),(0,s.jsx)("button",{onClick:o,className:"p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors","aria-label":"Toggle dark mode",children:i?(0,s.jsx)(l.Wh$,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"}):(0,s.jsx)(l.hkc,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"})})]})]})]})})})}},6931:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>c,W:()=>n});var s=a(5155),r=a(2115);let l=(0,r.createContext)({});function c(e){let{children:t}=e,[a,c]=(0,r.useState)(!1),[n,d]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e="true"===localStorage.getItem("darkMode");c(e),document.documentElement.classList.toggle("dark",e),d(!0)},[]);let i=(0,r.useMemo)(()=>({darkMode:a,toggleDarkMode:()=>{let e=!a;c(e),localStorage.setItem("darkMode",String(e)),document.documentElement.classList.toggle("dark",e)}}),[a]);return n?(0,s.jsx)(l.Provider,{value:i,children:t}):null}let n=()=>(0,r.useContext)(l)}},e=>{var t=t=>e(e.s=t);e.O(0,[844,234,441,517,358],()=>t(6598)),_N_E=e.O()}]);