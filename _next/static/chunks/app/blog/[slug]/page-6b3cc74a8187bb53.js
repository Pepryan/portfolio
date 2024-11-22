(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{1003:(e,t,a)=>{Promise.resolve().then(a.bind(a,837))},837:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var s=a(5155),r=a(7396),l=a(2888),n=a(6931),c=a(2115);let o=(0,c.memo)(function(e){let{content:t}=e,[a,r]=(0,c.useState)([]),[n,o]=(0,c.useState)(!0),[d,i]=(0,c.useState)("");(0,c.useEffect)(()=>{r((()=>{let e=t.split("\n"),a=[],s=!1;return e.forEach(e=>{if(e.trim().startsWith("```")){s=!s;return}if(!s){let t=e.match(/^(#{1,6})\s+(.+)$/);if(t&&!e.trim().startsWith("# ")){let e=t[1].length,s=t[2],r=s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");a.push({level:e,text:s,slug:r})}}}),a})());let e=document.querySelector("article");e&&e.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(e=>{if(!e.id){let t=e.textContent.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");e.id=t}})},[t]);let x=e=>{let t=document.getElementById(e);if(t){let a=t.getBoundingClientRect().top,s=window.pageYOffset+a-100;window.scrollTo({top:s,behavior:"smooth"}),i(e),history.pushState(null,null,"#".concat(e))}};return(0,s.jsxs)("div",{className:"bg-gray-50/50 dark:bg-gray-800/50 rounded-lg p-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsx)("h2",{className:"font-semibold text-gray-900 dark:text-gray-100",children:"Table of Contents"}),(0,s.jsx)("button",{onClick:()=>o(!n),className:"text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",children:n?(0,s.jsx)(l.fK4,{size:14}):(0,s.jsx)(l.fOo,{size:14})})]}),n&&(0,s.jsx)("nav",{className:"mt-2 space-y-0.5 max-h-[60vh] overflow-y-auto pr-2 text-sm",children:a.map((e,t)=>(0,s.jsx)("button",{onClick:()=>x(e.slug),className:"\n                block w-full text-left py-1 px-2 rounded-md text-sm\n                ".concat(1===e.level?"font-medium":"font-normal","\n                ").concat(e.level>1?"ml-".concat((e.level-1)*2):"","\n                ").concat(d===e.slug?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20":"text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50","\n                transition-colors duration-150\n              "),children:e.text},t))})]})},(e,t)=>e.content===t.content),d=(0,c.memo)(function(e){let{children:t,data:a,readingTime:c,wordCount:d,content:i}=e,{darkMode:x,toggleDarkMode:m}=(0,n.W)();return(0,s.jsxs)("div",{className:"min-h-screen ".concat(x?"dark bg-gray-900":"bg-white"),children:[(0,s.jsx)("nav",{className:"bg-white dark:bg-gray-800 shadow-md mb-8",children:(0,s.jsx)("div",{className:"max-w-4xl mx-auto px-4 py-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)(r.default,{href:"/",className:"inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500",children:[(0,s.jsx)(l.V5Y,{className:"mr-2"})," Home"]}),(0,s.jsxs)(r.default,{href:"/blog",className:"inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500",children:[(0,s.jsx)(l.kRp,{className:"mr-2"})," Back to Blog"]})]}),(0,s.jsx)("button",{onClick:m,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors","aria-label":"Toggle theme",children:x?(0,s.jsx)(l.Wh$,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"}):(0,s.jsx)(l.hkc,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"})})]})})}),(0,s.jsx)("div",{className:"max-w-4xl mx-auto p-4",children:(0,s.jsxs)("article",{children:[(0,s.jsx)("h1",{className:"text-4xl font-bold mb-4 dark:text-white",children:a.title}),(0,s.jsxs)("div",{className:"text-gray-600 dark:text-gray-300 mb-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4 mb-2",children:[(0,s.jsxs)("time",{children:["Created: ",new Date(a.date).toLocaleDateString()]}),a.updated&&(0,s.jsxs)("time",{children:["Updated: ",new Date(a.updated).toLocaleDateString()]}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsxs)("span",{children:[c," min read"]}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsxs)("span",{children:[d," words"]})]}),(0,s.jsx)("div",{className:"flex gap-2",children:a.tags.map(e=>(0,s.jsxs)(r.default,{href:"/blog/tags/".concat(e),className:"text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",children:["#",e]},e))})]}),(0,s.jsx)("div",{className:"mb-8 inline-block",children:(0,s.jsx)(o,{content:i})}),t]})})]})},(e,t)=>e.content===t.content&&e.darkMode===t.darkMode&&e.data===t.data)},6931:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>n,W:()=>c});var s=a(5155),r=a(2115);let l=(0,r.createContext)({});function n(e){let{children:t}=e,[a,n]=(0,r.useState)(!1),[c,o]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e="true"===localStorage.getItem("darkMode");n(e),document.documentElement.classList.toggle("dark",e),o(!0)},[]);let d=(0,r.useMemo)(()=>({darkMode:a,toggleDarkMode:()=>{let e=!a;n(e),localStorage.setItem("darkMode",String(e)),document.documentElement.classList.toggle("dark",e)}}),[a]);return c?(0,s.jsx)(l.Provider,{value:d,children:t}):null}let c=()=>(0,r.useContext)(l)}},e=>{var t=t=>e(e.s=t);e.O(0,[844,234,441,517,358],()=>t(1003)),_N_E=e.O()}]);