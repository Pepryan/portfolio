(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[718],{6598:(e,t,a)=>{Promise.resolve().then(a.bind(a,159))},159:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var r=a(5155),l=a(6931),s=a(7396),n=a(2888),c=a(3857);function o(e){let{groupedPosts:t}=e,{darkMode:a,toggleDarkMode:o}=(0,l.W)();return(0,r.jsxs)("div",{className:"min-h-screen ".concat(a?"dark bg-neutral-900":"bg-white"),children:[(0,r.jsx)(c.A,{showSearch:!1}),(0,r.jsxs)("div",{className:"max-w-4xl mx-auto p-4 mt-20",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100",children:"Blog Archive"}),Object.entries(t).sort((e,t)=>{let[a]=e,[r]=t;return r-a}).map(e=>{let[t,a]=e;return(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200",children:t}),Object.entries(a).sort((e,t)=>{let[a]=e,[r]=t,l=new Date("".concat(a," 1, 2000"));return new Date("".concat(r," 1, 2000"))-l}).map(e=>{let[a,l]=e;return(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsxs)("h3",{className:"text-xl font-semibold mb-3 dark:text-gray-300 flex items-center",children:[(0,r.jsx)(n.wIk,{className:"mr-2"}),a]}),(0,r.jsx)("ul",{className:"space-y-2",children:l.sort((e,t)=>new Date(t.date)-new Date(e.date)).map(e=>(0,r.jsx)("li",{className:"ml-6",children:(0,r.jsxs)(s.default,{href:"/blog/".concat(e.slug),className:"text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",children:[(0,r.jsxs)("span",{className:"text-gray-500 dark:text-gray-400 mr-2",children:[new Date(e.date).getDate().toString().padStart(2,"0")," -"]}),e.title]})},e.slug))})]},"".concat(t,"-").concat(a))})]},t)})]})]})}},3857:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var r=a(5155),l=a(6931),s=a(2888),n=a(7396),c=a(2115);function o(e){let{showSearch:t=!1,onSearch:a}=e,{darkMode:o,toggleDarkMode:d}=(0,l.W)(),[u,x]=(0,c.useState)(!1);return(0,r.jsx)("header",{className:"fixed top-0 w-full z-50 backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,r.jsxs)("div",{className:"flex justify-between items-center h-16 px-4 sm:px-6",children:[(0,r.jsxs)(n.default,{href:"/",className:"font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center gap-2",children:[(0,r.jsx)(s.V5Y,{className:"w-5 h-5"}),(0,r.jsx)("span",{className:"font-bold hidden sm:inline",children:"FR"})]}),(0,r.jsxs)("nav",{className:"flex items-center gap-4",children:[t&&(0,r.jsx)("div",{className:"relative",children:u?(0,r.jsx)("input",{type:"text",placeholder:"Search posts...",className:"w-48 px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800  text-sm border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-300",onChange:e=>a(e.target.value),autoFocus:!0}):(0,r.jsx)("button",{onClick:()=>x(!0),className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Search",children:(0,r.jsx)(s.CKj,{className:"w-4 h-4"})})}),(0,r.jsx)(n.default,{href:"/blog",className:"px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-sm transition-colors",children:"Blog"}),(0,r.jsx)(n.default,{href:"/blog/archive",className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Archive",children:(0,r.jsx)(s.OZ2,{className:"w-4 h-4"})}),(0,r.jsx)("button",{onClick:d,className:"p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400  dark:hover:text-neutral-200 transition-colors","aria-label":"Toggle dark mode",children:o?(0,r.jsx)(s.Wh$,{className:"w-4 h-4"}):(0,r.jsx)(s.hkc,{className:"w-4 h-4"})})]})]})})})}},6931:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>n,W:()=>c});var r=a(5155),l=a(2115);let s=(0,l.createContext)({});function n(e){let{children:t}=e,[a,n]=(0,l.useState)(!1),[c,o]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e="true"===localStorage.getItem("darkMode");n(e),document.documentElement.classList.toggle("dark",e),o(!0)},[]);let d=(0,l.useMemo)(()=>({darkMode:a,toggleDarkMode:()=>{let e=!a;n(e),localStorage.setItem("darkMode",String(e)),document.documentElement.classList.toggle("dark",e)}}),[a]);return c?(0,r.jsx)(s.Provider,{value:d,children:t}):null}let c=()=>(0,l.useContext)(s)}},e=>{var t=t=>e(e.s=t);e.O(0,[844,234,441,517,358],()=>t(6598)),_N_E=e.O()}]);