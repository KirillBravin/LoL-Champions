import{r as f,j as e,u as w,S as C}from"./index-DlTMpxBS.js";import{u as I,F as k}from"./LeagueService-D6K9FyCn.js";const F="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='19px'%20height='19px'%3e%3cg%20fill='%23c2902d'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(8.53333,8.53333)'%3e%3cpath%20d='M13,3c-5.511,0%20-10,4.489%20-10,10c0,5.511%204.489,10%2010,10c2.39651,0%204.59738,-0.85101%206.32227,-2.26367l5.9707,5.9707c0.25082,0.26124%200.62327,0.36648%200.97371,0.27512c0.35044,-0.09136%200.62411,-0.36503%200.71547,-0.71547c0.09136,-0.35044%20-0.01388,-0.72289%20-0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488%202.26367,-3.92576%202.26367,-6.32227c0,-5.511%20-4.489,-10%20-10,-10zM13,5c4.43012,0%208,3.56988%208,8c0,4.43012%20-3.56988,8%20-8,8c-4.43012,0%20-8,-3.56988%20-8,-8c0,-4.43012%203.56988,-8%208,-8z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";function D({championList:i,getChampionSelected:a}){const[o,d]=f.useState(!1),[t,l]=f.useState(!1),[n,r]=f.useState(""),m=()=>{d(!o)},g=_=>{_.target.closest(".search-bar__wrapper")||d(!1)};f.useEffect(()=>(document.addEventListener("click",g),()=>{document.removeEventListener("click",g)}),[]);const x=(_=>_.map(v=>v.name).sort())(i),c=(_=>{const j=_.filter(y=>y.toLocaleLowerCase().includes(n)||n==="").map((y,v)=>{const b=()=>{r(y),l(!0),a(y)};return e.jsx("div",{className:"dropdown-item search-bar__dropdown-item",onClick:b,children:e.jsx("li",{children:y})},v)});return e.jsx("ul",{className:"dropdown-menu search-bar__dropdown-menu",children:j})})(x),s=_=>_.target.value.toLowerCase(),h=()=>{r(""),l(!1),a("")};return e.jsx("div",{className:"search-bar",children:e.jsxs("div",{className:"search-bar__wrapper",onClick:m,children:[e.jsxs("div",{className:"dropdown search-bar__dropdown",children:[e.jsx("img",{src:F,alt:"search",className:`search-bar__icon ${o?"img__active":""}`}),e.jsx("input",{type:"text",name:"search-filter",id:"search-filter",className:"btn btn-secondary dropdown-toggle search-bar__input","data-bs-toggle":"dropdown","aria-expanded":"false",placeholder:"search",value:n,onChange:_=>r(s(_))}),e.jsx("button",{type:"button",className:`btn-close btn-close__search-input ${t?"":"button__hidden"}`,"aria-label":"Close",onClick:h}),c]}),e.jsx("div",{className:`search-bar__line-left ${o?"search-bar__active":""}`})]})})}function $({getRoleSelected:i}){const[a,o]=f.useState(null),d=["All","Assassins","Fighters","Mages","Marksmen","Supports","Tanks"],t=(r,m)=>{o(m===a?null:m),i(r==="All"?"":r)};function l(r){const m=r.map((g,u)=>e.jsxs("li",{className:u===a?"roles__general active":"roles__general",children:[e.jsx("button",{className:"button",onClick:()=>{t(g,u)},children:g}),e.jsx("div",{className:"roles__general-bottom-line"})]},u));return e.jsx("div",{className:"roles__wrapper",children:e.jsx("ul",{className:"roles",children:m})})}const n=l(d);return e.jsx(e.Fragment,{children:n})}function S({getDifficulty:i}){const[a,o]=f.useState(!1),[d,t]=f.useState(!1),[l,n]=f.useState(0);f.useEffect(()=>(document.addEventListener("click",x),()=>{document.removeEventListener("click",x)}),[]);const r=(s,h)=>{i(s),n(h),t(!0)},m=()=>{n(0),t(!1),i([])},g=[{id:1,difficulty:[0,1,2,3],render:function(){return e.jsxs("div",{className:`dropdown-item style dropdown-style ${l===1?"dropdown-menu-selected":""} `,onClick:r.bind(null,this.difficulty,this.id),children:[e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramEmpty"}),e.jsx("span",{className:"parallelogramEmpty"})]})}},{id:2,difficulty:[4,5,6,7],render:function(){return e.jsxs("div",{className:`dropdown-item style dropdown-style ${l===2?"dropdown-menu-selected":""} `,onClick:r.bind(null,this.difficulty,this.id),children:[e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramEmpty"})]})}},{id:3,difficulty:[8,9,10],render:function(){return e.jsxs("div",{className:`dropdown-item style dropdown-style ${l===3?"dropdown-menu-selected":""} `,onClick:r.bind(null,this.difficulty,this.id),children:[e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramFilled"})]})}}],u=()=>{o(!a)},x=s=>{s.target.closest(".difficulties__wrapper")||o(!1)};function p(s){const h=s.map((j,y)=>e.jsx("li",{className:"difficulties__lists",children:j.render()},y)),_=()=>l===1?e.jsxs("div",{className:"dropdown-item style dropdown-style-selected item-selected",children:[e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramEmpty"}),e.jsx("span",{className:"parallelogramEmpty"})]}):l===2?e.jsxs("div",{className:"dropdown-item style dropdown-style-selected item-selected",children:[e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramEmpty"})]}):l===3?e.jsxs("div",{className:"dropdown-item style dropdown-style-selected item-selected",children:[e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramFilled"}),e.jsx("span",{className:"parallelogramFilled"})]}):"All difficulties";return e.jsx("div",{className:"dropdown difficulties",children:e.jsxs("div",{className:`difficulties__wrapper ${l!==0?"difficulties__wrapper-active":""}`,onClick:u,children:[e.jsx("div",{className:`difficulties__line-right ${a?"line-full-height":""} ${d?"difficulties__line-active":""}`}),e.jsx("button",{className:`btn btn-secondary dropdown-toggle difficulties__btn-main ${d?"difficulties__btn-main-active":""}`,type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:_()}),e.jsx("button",{type:"button",className:`btn-close btn-close__difficulties ${d?"":"button__hidden"}`,"aria-label":"Close",onClick:m}),e.jsx("ul",{className:`dropdown-menu ${d?"dropdown-menu-active":""}`,children:h})]})})}const c=p(g);return e.jsx(e.Fragment,{children:c})}function M({championList:i,getChampionSelected:a,getRoleSelected:o,getDifficulty:d}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"search-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"style-wrapper",children:[e.jsx("div",{className:"col",children:e.jsx(D,{championList:i,getChampionSelected:a})}),e.jsx("div",{className:"col-8",children:e.jsx($,{getRoleSelected:o})}),e.jsx("div",{className:"col",children:e.jsx(S,{getDifficulty:d})})]})})})})})}function L({championList:i,championSelected:a,roleSelected:o,difficultySelected:d}){const[t,l]=f.useState(""),[n,r]=f.useState("");function m(p){l(p==="Assassins"?"Assassin":p==="Fighters"?"Fighter":p==="Mages"?"Mage":p==="Marksmen"?"Marksman":p==="Supports"?"Support":p==="Tanks"?"Tank":"")}function g(p){if(p.length!=0){const c=p.reduce((s,h)=>s+h);c<=6?r("Easy"):c<=22&&c>6?r("Medium"):c<=27&&c>22&&r("Hard")}else r("")}f.useEffect(()=>{m(o),g(d)},[o,d]);const x=(p=>{if(t===""&&n===""){const c=p.map(s=>s.name===a||a===""?e.jsx(N,{champion:s.id},`${s.id}-${a}-${t}-${n}`):null);return e.jsx("div",{className:"cards-style",children:c})}if(t!==""&&n===""){const c=p.map(s=>s.name===a&&(s.tags[0]===t||s.tags[1]===t)||(s.tags[0]===t||s.tags[1]===t)&&a===""?e.jsx(N,{champion:s.id},`${s.id}-${a}-${t}-${n}`):null);return c.every(s=>s===null)?e.jsx("div",{className:"cards-empty",children:"No champions match the filter criteria."}):e.jsx("div",{className:"cards-style",children:c})}if(t===""&&n!==""){const c=p.map(s=>a===""&&n==="Easy"&&s.difficulty<=3||s.name===a&&n==="Easy"&&s.difficulty<=3||a===""&&n==="Medium"&&s.difficulty<=7&&s.difficulty>=4||s.name===a&&n==="Medium"&&s.difficulty<=7&&s.difficulty>=4||a===""&&n==="Hard"&&s.difficulty<=10&&s.difficulty>=8||s.name===a&&n==="Hard"&&s.difficulty<=10&&s.difficulty>=8?e.jsx(N,{champion:s.id},`${s.id}-${a}-${t}-${n}`):null);return c.every(s=>s===null)?e.jsx("div",{className:"cards-empty",children:"No champions match the filter criteria."}):e.jsx("div",{className:"cards-style",children:c})}if(t!==""&&n!==""){const c=p.map(s=>a===""&&n==="Easy"&&s.difficulty<=3&&(s.tags[0]===t||s.tags[1]===t)||s.name===a&&n==="Easy"&&s.difficulty<=3&&(s.tags[0]===t||s.tags[1]===t)||a===""&&n==="Medium"&&s.difficulty<=7&&s.difficulty>=4&&(s.tags[0]===t||s.tags[1]===t)||s.name===a&&n==="Medium"&&s.difficulty<=7&&s.difficulty>=4&&(s.tags[0]===t||s.tags[1]===t)||a===""&&n==="Hard"&&s.difficulty<=10&&s.difficulty>=8&&(s.tags[0]===t||s.tags[1]===t)||s.name===a&&n==="Hard"&&s.difficulty<=10&&s.difficulty>=8&&(s.tags[0]===t||s.tags[1]===t)?e.jsx(N,{champion:s.id},`${s.id}-${a}-${t}-${n}`):null);return c.every(s=>s===null)?e.jsx("div",{className:"cards-empty",children:"No champions match the filter criteria."}):e.jsx("div",{className:"cards-style",children:c})}})(i);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"champion-cards",children:e.jsx("div",{className:"container",children:x})})})}function N({champion:i}){let a=i,o=i;const d=w(),t=n=>{d(`/champion/${n}`)};return a==="Fiddlesticks"&&(a="FiddleSticks"),o={MonkeyKing:"Wukong",Nunu:"Nunu & Willump",Belveth:"Bel'Veth",Chogath:"Cho'Gath",DrMundo:"Dr. Mundo",JarvanIV:"Jarvan IV",Kaisa:"Kai'Sa",Khazix:"Kha'Zix",KogMaw:"Kog'Maw",KSante:"K'Sante",Leblanc:"LeBlanc",LeeSin:"Lee Sin",MasterYi:"Master Yi",RekSai:"Rek'Sai",Renata:"Renata Glasc",TahmKench:"Tahm Kench",TwistedFate:"Twisted Fate",Velkoz:"Vel'Koz",XinZhao:"Xin Zhao"}[a]||a,e.jsx("div",{className:"champion-card animate__animated animate__fadeIn animate__slow",onClick:()=>{t(i)},children:e.jsxs("div",{className:"champion-card__wrapper",children:[e.jsx("img",{src:`https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${a}_0.jpg`,alt:"",className:"champion-card__thumbnail"}),e.jsx("div",{className:"champion-card__label",children:e.jsx("span",{children:o})})]})})}const A="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9a2e5b06fa890d3ec0719c25e973d5ca433ac82f-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center",E="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e50f5eb867949248d81b3c4a1dcb3e7d7cf187de-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center",R="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/88a013a106668103aedbceb8f174bd4cbc06568b-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center",T="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d1df552539dd70a8ffd38b6e93d1e751fb980ea6-440x440.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center";function K(){const[i,a]=f.useState("Arena"),o=[{modeName:"arena-mode",modeIcon:A,alt:"Arena"},{modeName:"summoners-rift-mode",modeIcon:E,alt:"Summoner's Rift"},{modeName:"aram-mode",modeIcon:R,alt:"ARAM"},{modeName:"tft-mode",modeIcon:T,alt:"Teamfight Tactics"}],d=[{mode:"Arena",videoPath:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/3dc01ace5cb488af854ce527e03999215633da79.mp4",shortDescr:"Calling all dynamic duos",longDescr:"Throw down across a series of maps, draft augments and items, and climb to the top with your partner in this 2v2v2v2v2v2v2v2 tournament."},{mode:"Summoner's Rift",videoPath:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",shortDescr:"The most popular game mode",longDescr:"Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours."},{mode:"ARAM",videoPath:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4",shortDescr:"All random, all mid",longDescr:"Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode."},{mode:"Teamfight Tactics",videoPath:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4",shortDescr:"A free-for-all war for supremacy",longDescr:"Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing."}],l=(r=>{const m=u=>{u.preventDefault()},g=r.map((u,x)=>e.jsxs("div",{className:`leagueIntro__${u.modeName}`,onClick:()=>{a(u.alt)},children:[e.jsx("img",{className:`leagueIntro__mode-img ${u.alt===i?"modeIcon-active":""}`,src:u.modeIcon,alt:u.alt,onDragStart:m}),e.jsx("div",{className:`leagueIntro__mode-name ${u.alt===i?"modeInfo-active":""}`,children:u.alt})]},x));return e.jsx("div",{className:"leagueIntro__game-modes",children:g})})(o),n=r=>{const m=d.find(g=>g.mode===r);return m?e.jsxs("div",{className:"leagueIntro__preview",children:[e.jsxs("div",{className:"leagueIntro__video-preview",children:[e.jsxs("video",{className:"leagueIntro__video",autoPlay:!0,loop:!0,muted:!0,children:[e.jsx("source",{src:m.videoPath,type:"video/mp4"}),e.jsx("p",{children:"Your browser doesn't support HTML video."})]},m.mode),e.jsx("div",{className:"video-border"})]}),e.jsx("p",{className:"leagueIntro__video-short-description",children:m.shortDescr}),e.jsx("p",{className:"leagueIntro__video-long-description",children:m.longDescr})]}):null};return e.jsxs("section",{className:"leagueIntro",children:[e.jsx("img",{className:"leagueIntro__background"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"leagueIntro__wrapper",children:[e.jsxs("div",{className:"leagueIntro__description-wrapper",children:[e.jsxs("div",{className:"leagueIntro__description",children:[e.jsx("h2",{className:"leagueIntro__header-info-first",children:"Multiple ways to"}),e.jsx("h2",{className:"leagueIntro__header-info-second",children:"Play"}),e.jsx("h1",{className:"leagueIntro__header-info-game",children:"League of Legends"}),e.jsx("h2",{className:"leagueIntro__description-text",children:"Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift."}),e.jsx("a",{className:"leagueIntro__link-btn-play",href:"https://authenticate.riotgames.com/?client_id=prod-xsso-leagueoflegends&code_challenge=pYWSQNVZqcG78DUvJszpPLbC-LXuO6wmwo2UgdLAJpU&method=riot_identity_signup&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-leagueoflegends%26code_challenge%3DpYWSQNVZqcG78DUvJszpPLbC-LXuO6wmwo2UgdLAJpU%26code_challenge_method%3DS256%26prompt%3Dsignup%26redirect_uri%3Dhttps%253A%252F%252Fxsso.leagueoflegends.com%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%2520offline_access%26state%3Df5e04bd23a9141a38cc95119a6%26uri%3Dhttps%253A%252F%252Fsignup.leagueoflegends.com%252Fen-gb%252Fsignup%252Fredownload",onDragStart:r=>{r.preventDefault()},children:e.jsx("button",{className:"leagueIntro__btn-play",children:"Play now"})})]}),l]}),n(i)]})})]})}function P(){const[i,a]=f.useState([]),[o,d]=f.useState(""),[t,l]=f.useState(""),[n,r]=f.useState([]),[m,g]=f.useState(!0),{getAllChampions:u}=I(),x=f.useCallback(async()=>{g(!0);try{const h=await u();a(h),g(!1)}catch(h){console.error("Failed to fetch champions:",h)}},[u]);f.useEffect(()=>{console.log("home - effect render"),x()},[x]),console.log("Home render");function p(h){d(h)}function c(h){l(h)}function s(h){r(h)}return e.jsxs("div",{className:"page-container",children:[e.jsxs("div",{className:"content-wrap",children:[e.jsx(K,{}),e.jsxs("h1",{className:"title",children:[e.jsx("span",{className:"animate__animated title__intro animate__fadeIn",children:"choose your"}),e.jsx("strong",{className:"animate__animated title__main animate__fadeIn",children:"champion"}),e.jsx("span",{className:"animate__animated title__subtitle animate__fadeIn",children:"With more than 140 champions, you'll find the perfect match for your playstyle. Master one, or master them all."})]}),m?e.jsx("div",{className:"spinner-container",children:e.jsx(C,{})}):e.jsxs(e.Fragment,{children:[e.jsx(M,{championList:i,getChampionSelected:p,getRoleSelected:c,getDifficulty:s}),e.jsx(L,{championList:i,championSelected:o,roleSelected:t,difficultySelected:n})]})]}),e.jsx(k,{})]})}export{P as default};