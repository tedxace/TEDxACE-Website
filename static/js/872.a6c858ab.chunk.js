"use strict";(self.webpackChunktedx_ace=self.webpackChunktedx_ace||[]).push([[872,541],{6541:(e,t,l)=>{l.r(t),l.d(t,{default:()=>g});var a=l(5043),s=l(6938),r=l(1069),i=l(3910),n=l(7929),o=l(579);const c=e=>{let{details:t}=e;const{speaker:{image:l,name:a,position:s,text:r,list:i}}=t;return(0,o.jsxs)("article",{className:"flex flex-col gap-4 md:gap-10  w-full h-full md:grid md:grid-cols-[1fr_1fr] overflow-hidden",children:[(0,o.jsx)("div",{className:"grid place-items-center",children:(0,o.jsx)("img",{src:l,alt:a,className:"w-[50%] object-cover h-full rounded-md md:w-auto drop-shadow-2xl"})}),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-3 p-10 md:gap-6",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"text-lg font-['Eczar'] sm:text-xl md:text-2xl lg:text-4xl text-tedx-heading font-bold text-center",children:a}),(0,o.jsx)("p",{className:"text-base text-md md:text-lg lg:text-xl text-tedx-white/50 font-semibold text-center",children:s})]}),null===r||void 0===r?void 0:r.map(((e,t)=>(0,o.jsx)("p",{className:"text-xs text-center sm:text-sm md:text-md font-['Inika'] py-1 lg:text-lg px-3",children:e},t))),(0,o.jsx)("ul",{className:"list-disc pl-4 md:pl-10 font-['Inika'] text-xs py-2  sm:text-sm md:text-md lg:text-lg",children:null===i||void 0===i?void 0:i.map(((e,t)=>(0,o.jsx)("li",{children:e},t)))})]})]})},d={hidden:{y:"-100vh",opacity:0},visible:{y:"2vh",opacity:1,transition:{duration:.1,type:"spring",damping:25,stiffness:500}},exit:{y:"100vh",opacity:0}},x=e=>{let{details:t,handleClose:a}=e;return(0,o.jsx)(r.P.section,{className:"fixed top-0 left-0 h-screen z-[999] w-full grid place-items-center bg-tedx-dark/80 overflow-hidden",onClick:a,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,o.jsxs)(r.P.article,{className:" w-[90%] relative h-[70%] sm:h-[80%] p-2 md:p-4 md:w-[80%] md:h-[70%] grid place-items-center rounded-lg",style:{backgroundImage:"url(".concat(l(2397),")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"},onClick:e=>e.stopPropagation(),variants:d,initial:"hidden",animate:"visible",exit:"exit",children:[(0,o.jsx)(c,{details:t}),(0,o.jsx)(r.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:a,className:"absolute top-5 right-5",children:(0,o.jsx)(i.g,{className:"h-8 w-8",icon:n.yYc})})]})})};var m=l(9766);const g=e=>{let{speakers:t}=e;const[r,n]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1),[g,u]=(0,a.useState)({}),h=()=>{n(!1)};return(0,a.useEffect)((()=>{(null===t||void 0===t?void 0:t.length)<3&&d(!0)}),[null===t||void 0===t?void 0:t.length]),(0,o.jsxs)("section",{className:"relative pt-24 pb-24   bg-fixed  h-full w-100",style:{backgroundImage:c?"":" url(".concat(l(279),")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[(0,o.jsx)("header",{id:"speakers",className:(0,m.cn)(c?"h-auto":""),children:(0,o.jsx)("h2",{className:(0,m.cn)("text-center uppercase m-auto ",c?"text-md md:text-lg":"text-4xl md:text-4xl font-eczar text-center m-auto lg:text-4xl font-bold text-tedx-heading"),children:c?"LICENSEE & CO-ORGANIZER":"SPEAKERS"})}),(0,o.jsx)("article",{className:"flex flex-wrap md:px-24 lg-px-32 justify-center gap-3 items-center py-10",children:null===t||void 0===t?void 0:t.map((e=>{const{name:t,image:a,position:s,social:d}=e;return(0,o.jsxs)("section",{whileHover:{scale:1.02},className:(0,m.cn)("group flex flex-col justify-center items-center m-auto bg-cover my-5 px-10  w-[220px] h-[220px] lg:px-0 lg:w-[400px] lg:h-[400px] cursor-pointer opacity-80 hover:opacity-100"),style:{backgroundImage:"url(".concat(l(2138),")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},onClick:t=>{t.stopPropagation(),r?h():n(!0),u({speaker:e})},children:[(0,o.jsx)("img",{loading:"lazy",src:a,alt:t,className:(0,m.cn)("w-[80px] md:w-[140px] lg:w-[180px] ease-in-out rounded-full ml-10 mr-10 mt-6 ring-2 ring-tedx-heading ring-offset-4 ring-offset-tedx-heading ","rounded-full"),style:{backgroundImage:"url(".concat(l(1555),")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,o.jsx)("h3",{className:"transition-transform text-center text-black font-eczar my-3 text-[12px] md:text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0",children:t}),c?(0,o.jsx)("a",{href:d[1],className:"relative w-full flex justify-center items-center rounded-full",rel:"noreferrer",target:"_blank",whileHover:{scale:1.02},children:(0,o.jsx)(i.g,{className:"md:w-4 md:h-4 w-3 h-3 lg:w-5 lg:h-5 text-black duration-200",icon:d[0]})}):null,(0,o.jsx)("h4",{className:(0,m.cn)("visible md:invisible text-black font-eczar group-hover:visible text-xs sm:text-sm md:text-lg text-center w-[90%]",c?"md:w-80%":"md:w-60%"),children:s})]},t)}))}),(0,o.jsx)("footer",{children:c?null:(0,o.jsx)(s.N,{initial:!1,mode:"wait",children:r&&(0,o.jsx)(x,{details:g,handleClose:h})})})]})}},8872:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var a=l(6446),s=l(4056),r=l(2016),i=l(2996),n=l(9361),o=l(7722),c=l(3910),d=l(1069),x=l(5043),m=l(579);const g=e=>{let{team:t}=e;return(0,m.jsx)("article",{className:"grid gap-y-4 grid-cols-2 place-items-center gap-2 md:grid-cols-3 lg:grid-cols-4 \n      ",children:null===t||void 0===t?void 0:t.map((e=>{const{name:t,image:a,position:s,social:r}=e;return(0,m.jsxs)(d.P.section,{className:"group flex flex-col justify-center items-center w-full pl-2 pt-20 pb-20 opacity-80 hover:opacity-100 bg-center cursor-pointer",whileHover:{scale:1.02},style:{backgroundImage:"url(".concat(l(2208),")")},children:[(0,m.jsx)("img",{loading:"lazy",src:a,alt:t,className:"md:h-[150px] md:w-[150px] lg:w-[160px] lg:h-[160px] h-[100px] w-[100px] ease-in-out rounded-full m-auto ring-2 ring-tedx-heading ring-offset-4 ring-offset-tedx-heading bg-white"}),(0,m.jsx)("h3",{className:"transition-transform text-xs sm:text-sm md:text-base lg:text-md font-semibold duration-200 my-2 m-auto",children:t}),(0,m.jsx)(d.P.a,{href:r[1],className:"relative w-full -translate-y-1 rounded-full",rel:"noreferrer",target:"_blank",whileHover:{scale:1.02},children:(0,m.jsx)(c.g,{className:"md:w-4 md:h-4 w-3 h-3 lg:w-5 lg:h-5 absolute right-0 left-0 mr-auto duration-200 -my-0.5 m-auto",icon:r[0]})})]},t)}))})};var u=l(6541),h=l(5865),p=l(2448);const f=()=>{const{teams:e}=(0,o.xS)(),{heads:t}=(0,o.cq)(),{isMobile:c}=(0,p.A)(),[d,f]=(0,x.useState)("1");return(0,m.jsx)(a.A,{sx:{width:"100%"},className:"relative h-fit bg-center bg-cover bg-no-repeat",style:{backgroundImage:"url(".concat(l(1459),")")},children:(0,m.jsxs)(r.Ay,{value:d,children:[(0,m.jsxs)(a.A,{sx:{borderBottom:1,borderColor:"divider",position:"relative"},children:[(0,m.jsxs)(a.A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"2rem",width:"100%"},children:[(0,m.jsx)(h.A,{variant:"h5",component:"h2",sx:{fontWeight:"bolder",padding:"2rem 0 1rem 0",textTransform:"capitalize"},children:(0,m.jsx)("h3",{className:"text-3xl pt-24 lg:pt-0 text-tedx-heading",children:"OUR TEAM"})}),(0,m.jsx)(u.default,{speakers:t})]}),(0,m.jsx)("a",{href:"#list",id:"list",children:(0,m.jsxs)(i.A,{onChange:(e,t)=>{f(t)},"aria-label":"TEDx Team Members",centered:!0,sx:{"& .css-wlpw4n-MuiButtonBase-root-MuiTab-root.Mui-selected ":{color:"#F19F00"},"& .MuiTabs-root":{color:"#F19F00"},"& .MuiTabs-scroller":{},"& .MuiTabs-flexContainer":{flexWrap:"wrap"},"& .MuiTabs-indicator":{height:c?"0px":"2px",color:"#F19F00",background:"#F19F00"},"& .Mui-selected":{color:"#F19F00"},"& .css-1aquho2-MuiTabs-indicator":{background:"#F19F00"}},children:[(0,m.jsx)(s.A,{label:e[0].name,value:"1",sx:{color:"#C7C7C7",fontWeight:"bold"}}),(0,m.jsx)(s.A,{label:e[1].name,value:"2",sx:{color:"#C7C7C7",fontWeight:"bold"}}),(0,m.jsx)(s.A,{label:e[2].name,value:"3",sx:{color:"#C7C7C7",fontWeight:"bold"}}),(0,m.jsx)(s.A,{label:e[3].name,value:"4",sx:{color:"#C7C7C7",fontWeight:"bold"}}),(0,m.jsx)(s.A,{label:e[4].name,value:"5",sx:{color:"#C7C7C7",fontWeight:"bold"}}),(0,m.jsx)(s.A,{label:e[5].name,value:"6",sx:{color:"#C7C7C7",fontWeight:"bold"}}),(0,m.jsx)(s.A,{label:e[6].name,value:"7",sx:{color:"#C7C7C7",fontWeight:"bold"}})]})})]}),(0,m.jsxs)(a.A,{sx:{minHeight:"90vh"},children:[(0,m.jsx)(n.A,{value:"1",children:(0,m.jsx)(g,{team:e[0].members})}),(0,m.jsx)(n.A,{value:"2",children:(0,m.jsx)(g,{team:e[1].members})}),(0,m.jsx)(n.A,{value:"3",children:(0,m.jsx)(g,{team:e[2].members})}),(0,m.jsx)(n.A,{value:"4",children:(0,m.jsx)(g,{team:e[3].members})}),(0,m.jsx)(n.A,{value:"5",children:(0,m.jsx)(g,{team:e[4].members})}),(0,m.jsx)(n.A,{value:"6",children:(0,m.jsx)(g,{team:e[5].members})}),(0,m.jsx)(n.A,{value:"7",children:(0,m.jsx)(g,{team:e[6].members})})]})]})})}},2397:(e,t,l)=>{e.exports=l.p+"static/media/TicketBG.ccc462d48b5d64fc8a0c.png"},279:(e,t,l)=>{e.exports=l.p+"static/media/about_rectangle.c0a2736202413685614d.png"},1555:(e,t,l)=>{e.exports=l.p+"static/media/bggg.99c705f67dc1d5803c52.jpg"},2208:(e,t,l)=>{e.exports=l.p+"static/media/teamscroll.729ebf9b47ee3ac4170d.png"},1459:(e,t,l)=>{e.exports=l.p+"static/media/teamsectionbg.d804ad313e504d7ce5f1.png"},2138:(e,t,l)=>{e.exports=l.p+"static/media/whitescroll.f3518f9c38abf8bce42d.png"}}]);
//# sourceMappingURL=872.a6c858ab.chunk.js.map