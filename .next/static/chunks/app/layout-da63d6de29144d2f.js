(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5581:function(e,t,n){Promise.resolve().then(n.bind(n,8285)),Promise.resolve().then(n.bind(n,6137)),Promise.resolve().then(n.bind(n,6006)),Promise.resolve().then(n.bind(n,8771)),Promise.resolve().then(n.t.bind(n,3445,23)),Promise.resolve().then(n.t.bind(n,2445,23))},8285:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(3827);n(4090);var a=n(1450),i=n(1337),o=n(8792),s=n(4734),l=n(6006);function c(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:n}=(0,l.useActiveSectionContext)();return(0,r.jsxs)("header",{className:"z-[999] relative",children:[(0,r.jsx)(a.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,r.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,r.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:i.Ok.map(i=>(0,r.jsx)(a.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,r.jsxs)(o.default,{className:(0,s.Z)("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===i.name}),href:i.hash,onClick:()=>{t(i.name),n(Date.now())},children:[i.name,i.name===e&&(0,r.jsx)(a.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},i.hash))})})]})}},6137:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(3827),a=n(8771);n(4090);var i=n(8873);function o(){let{theme:e,toggleTheme:t}=(0,a.useTheme)();return(0,r.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,r.jsx)(i.eSY,{}):(0,r.jsx)(i.s1t,{})})}},6006:function(e,t,n){"use strict";n.r(t),n.d(t,{ActiveSectionContext:function(){return i},default:function(){return o},useActiveSectionContext:function(){return s}});var r=n(3827),a=n(4090);let i=(0,a.createContext)(null);function o(e){let{children:t}=e,[n,o]=(0,a.useState)("Home"),[s,l]=(0,a.useState)(0);return(0,r.jsx)(i.Provider,{value:{activeSection:n,setActiveSection:o,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,a.useContext)(i);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},8771:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useTheme:function(){return s}});var r=n(3827),a=n(4090);let i=(0,a.createContext)(null);function o(e){let{children:t}=e,[n,o]=(0,a.useState)("light");return(0,a.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(o(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(o("dark"),document.documentElement.classList.add("dark"))},[]),(0,r.jsx)(i.Provider,{value:{theme:n,toggleTheme:()=>{"light"===n?(o("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(o("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,a.useContext)(i);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},1337:function(e,t,n){"use strict";n.d(t,{$c:function(){return a},Ok:function(){return r},ZU:function(){return i}}),n(4090);let r=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"}],a=[{title:"Graduated Bachelor's Degree",location:"Indang, Cavite, PH",desc:"I graduated after 4 years of studying. I immediately found a job after 5 months",date:"Jan 21, 2020"},{title:"Jr. Frontend Software Engineer",location:"Para\xf1aque, NCR, PH",desc:"I worked as a front-end developer for 6 months. I faced pressure and fortunate enough to build self-confidence",date:"May 2020 - Nov 2020"},{title:"Data Encoder",location:"General Trias, Cavite, PH",desc:"Work at a school university to learn other skills aside from programming like data entry and automation",date:"May 2021 - June 2022"},{title:"Jr. Java Developer",location:"Dasmari\xf1as, Cavite, PH",desc:"To fulfill full-stack in the future, I focus on design, development, testing (unit & automation), implementation and maintenance of specific software solutions in java while maintaining a focus on quality principles.",date:"Jun 2022 - Feb 2023"},{title:"Packaged App Development Analyst",location:"Taguig, NCR, PH",desc:"This is my current work. Focus on upskilling and creating image for the future as programmer",date:"March 2023 - present"}],i=["HTML","CSS","JavaScript","TypeScript","React","Next.js","Git","Tailwind","MYSQL","Java EE","Spring","Springboot","REST","FTP"]},2445:function(){}},function(e){e.O(0,[447,758,93,971,69,744],function(){return e(e.s=5581)}),_N_E=e.O()}]);