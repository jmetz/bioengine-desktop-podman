"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2079],{7792:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var t=s(24246),o=s(71670),i=s(92975),a=s.n(i);const l={title:"Release Notes - Podman Desktop 1.1",description:"Podman Desktop 1.1 has been released!",slug:"podman-desktop-release-1.1",authors:["deboer"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.1.webp"},r=void 0,d={permalink:"/blog/podman-desktop-release-1.1",source:"@site/blog/2023-06-08-release-1.1.md",title:"Release Notes - Podman Desktop 1.1",description:"Podman Desktop 1.1 has been released!",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"openshift",permalink:"/blog/tags/openshift"}],readingTime:2.465,hasTruncateMarker:!0,authors:[{name:"Tim deBoer",title:"Architect",url:"https://github.com/deboer-tim",imageURL:"https://github.com/deboer-tim.png",key:"deboer"}],frontMatter:{title:"Release Notes - Podman Desktop 1.1",description:"Podman Desktop 1.1 has been released!",slug:"podman-desktop-release-1.1",authors:["deboer"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.1.webp"},unlisted:!1,prevItem:{title:"Release Notes - Podman Desktop 1.2",permalink:"/blog/podman-desktop-release-1.2"},nextItem:{title:"Release Notes - Podman Desktop 1.0",permalink:"/blog/podman-desktop-release-1.0"}},h={authorsImageUrls:[void 0]},p=[{value:"Release Details",id:"release-details",level:2},{value:"Podman v4.5.1",id:"podman-v451",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Lima Support",id:"lima-support",level:3},{value:"Other UI and UX Improvements",id:"other-ui-and-ux-improvements",level:3},{value:"New Loading Screen",id:"new-loading-screen",level:4},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2}];function c(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Icon:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Podman Desktop 1.1 Release! \ud83c\udf89"}),"\n",(0,t.jsx)(n.p,{children:"This is primarily a bug-fix release to fix a few important issues, but we've managed to squeeze in a few enhancements\nalong the way."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Podman 4.5.1"}),": Podman 4.5.1 now included in Windows and Mac installers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Extensions"}),": Update extensions from within Podman Desktop."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lima Support"}),": Choose engine type and override its name from the settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"UX and UI Improvements"}),": New loading screen."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Podman Desktop 1.1 is now available. ",(0,t.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Podman-desktop-1-1-hero",src:s(74498).Z+"",width:"3958",height:"2308"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,t.jsx)(n.h3,{id:"podman-v451",children:"Podman v4.5.1"}),"\n",(0,t.jsxs)(n.p,{children:["Podman Desktop 1.1 moves up to ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman/releases/tag/v4.5.1",children:"Podman 4.5.1"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"extensions",children:"Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["Optional extensions will follow their own lifecycle and update independently from Podman Desktop. As of\nthis release you'll be able to see when there is an update available and install from within\nPodman Desktop ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2655",children:"#2655"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We've also added options in ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Preferences"]})," to\nautomatically check for and install extension updates."]}),"\n",(0,t.jsx)(a(),{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/241246481-305d215f-2a5c-46e8-9cc3-ecd90a6bd2bc.mp4",width:"100%",height:"100%"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Update extensions",src:s(68086).Z+"",width:"1324",height:"364"})}),"\n",(0,t.jsx)(n.h3,{id:"lima-support",children:"Lima Support"}),"\n",(0,t.jsxs)(n.p,{children:["Thanks to contributor ",(0,t.jsx)(n.a,{href:"https://github.com/afbjorklund",children:"Anders Bj\xf6rklund"}),", we have some improvements to the\nLima extension! In ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(i,{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Preferences"]})," you can select which\nengine type Lima runs on and override the instance name ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2674",children:"#2674"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/10364051/241755966-0a6a293b-b18e-4222-9c40-abd6c114d464.png",alt:"Lima preferences"})}),"\n",(0,t.jsx)(n.h3,{id:"other-ui-and-ux-improvements",children:"Other UI and UX Improvements"}),"\n",(0,t.jsx)(n.h4,{id:"new-loading-screen",children:"New Loading Screen"}),"\n",(0,t.jsxs)(n.p,{children:["We have a new loading screen, Podman Desktop style! ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2743",children:"#2743"}),"."]}),"\n",(0,t.jsx)(a(),{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/243706137-324b5870-f6a0-4bc1-ac91-e8b45c374c90.mp4",width:"100%",height:"100%"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Docker-compose can be installed system-wide ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2718",children:"#2718"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Show warning when creating a pod with two containers that use the same port ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2671",children:"#2671"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Display Kubernetes context name in pod label ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2634",children:"#2634"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add Docker compatibility button using flatpak-spawn ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1925",children:"#1925"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Improve UI consistency of Pull Image page ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2604",children:"#2604"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Could not install extensions on Windows 10 ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2762",children:"#2762"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Could not use locally built images on Kubernetes ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2710",children:"#2710"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Dashboard still suggests update after installation ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2648",children:"#2648"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Could not Play Kubernetes YAML to Podman on Windows ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2594",children:"#2594"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Pod label wasn't always shown in list ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2614",children:"#2614"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Dashboard button state was resetting ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2584",children:"#2584"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Change checkbox style so they don't look like stop buttons ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2723",children:"#2723"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better. In this\nsprint we received pull requests from the following people:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/fatelei",children:"wangxiaolei"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2602",children:"#2602 - Add meaningful tooltips to build, pull, prune buttons"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/AsciiWolf",children:"AsciiWolf"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2607",children:"#2607 - fix typing error in Flathub name"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2609",children:"#2609 - fix Flatpak install instructions"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/afbjorklund",children:"Anders Bj\xf6rklund"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2674",children:"#2674 - Select engine for Lima provider"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,t.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.1.0",children:"here"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.1.0",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Get the latest release from the ",(0,t.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},74498:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/podman-desktop-release-1.1-44e0feeaa28730210c0fbecda0193b95.png"},68086:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/update-extensions-6b1ea25170c2f1b7608d8f5a887d902a.png"}}]);