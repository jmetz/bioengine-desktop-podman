"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9973],{85006:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(24246),o=i(71670);const t={sidebar_position:30,title:"Containers",description:"Starting a container on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},r="Starting a container on your container engine",c={id:"containers/starting-a-container",title:"Containers",description:"Starting a container on your container engine.",source:"@site/docs/containers/starting-a-container.md",sourceDirName:"containers",slug:"/containers/starting-a-container",permalink:"/docs/containers/starting-a-container",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/containers/starting-a-container.md",tags:[{label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Containers",description:"Starting a container on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},sidebar:"mySidebar",previous:{title:"Pulling an image",permalink:"/docs/containers/images/pulling-an-image"},next:{title:"Pods",permalink:"/docs/containers/creating-a-pod"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(n){const e={code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components},{Icon:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"starting-a-container-on-your-container-engine",children:"Starting a container on your container engine"}),"\n",(0,s.jsx)(e.p,{children:"With Podman Desktop, you can start a container from an image on your container engine.\nYou can interact with the running container by using the terminal in Podman Desktop, or by opening your browser to the exposed ports."}),"\n",(0,s.jsx)(e.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cloud",size:"lg"})," Images"]})," list has your image, such as ",(0,s.jsx)(e.code,{children:"quay.io/podman/hello"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Go to ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cloud",size:"lg"})," Images"]}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["On the line with your image name, such as ",(0,s.jsx)(e.code,{children:"quay.io/podman/hello"}),", click ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(i,{icon:"fa-solid fa-play",size:"lg"})}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["On the ",(0,s.jsx)(e.strong,{children:"Create a container"})," screen, review the configuration."]}),"\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-play",size:"lg"})," Start Container"]}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Go to ",(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(i,{icon:"fa-solid fa-cubes",size:"lg"})," Containers"]}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(i,{icon:"fa-solid fa-search",size:"lg"})}),": Enter your image name, such as ",(0,s.jsx)(e.code,{children:"quay.io/podman/hello"}),", to find your running container."]}),"\n",(0,s.jsx)(e.li,{children:"Click your running container name."}),"\n",(0,s.jsxs)(e.li,{children:["To view logs:","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Go to ",(0,s.jsx)(e.strong,{children:"Logs"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Browse the content."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["To inspect the container:","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Go to ",(0,s.jsx)(e.strong,{children:"Inspect"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Click the content area to activate it."}),"\n",(0,s.jsxs)(e.li,{children:["Enter ",(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"F"})," on Windows and Linux, or ",(0,s.jsx)("kbd",{children:"\u2318"})," + ",(0,s.jsx)("kbd",{children:"F"})," on macOS to start searching in the content."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["To generate Kubernetes YAML, when your container engine is Podman:","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Go to ",(0,s.jsx)(e.strong,{children:"Kube"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Click the content area to activate it."}),"\n",(0,s.jsxs)(e.li,{children:["Enter ",(0,s.jsx)("kbd",{children:"Ctrl"})," + ",(0,s.jsx)("kbd",{children:"F"})," on Windows and Linux, or ",(0,s.jsx)("kbd",{children:"\u2318"})," + ",(0,s.jsx)("kbd",{children:"F"})," on macOS to start searching in the content."]}),"\n",(0,s.jsx)(e.li,{children:"Copy the content to a YAML file."}),"\n",(0,s.jsx)(e.li,{children:"Later, you can reuse this file to start a container in Podman from Kubernetes YAML, or to start a pod in Kubernetes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["To interact with the container terminal:","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Go to ",(0,s.jsx)(e.strong,{children:"Terminal"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Click the content area to activate the terminal."}),"\n",(0,s.jsx)(e.li,{children:"Enter your commands."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["To interact with the exposed ports:","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(i,{icon:"fa-solid fa-external-link",size:"lg"})}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Your browser opens a page to the first exposed port on ",(0,s.jsx)(e.code,{children:"localhost"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["To deploy to your current Kubernetes context, when you container engine is Podman:","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(i,{icon:"fa-solid fa-rocket",size:"lg"})}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Review the ",(0,s.jsx)(e.strong,{children:"Deploy generated pod to Kubernetes"})," screen."]}),"\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(i,{icon:"fa-solid fa-rocket",size:"lg"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"To stop the container:"}),"\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(i,{icon:"fa-solid fa-stop",size:"lg"})}),"."]}),"\n",(0,s.jsx)(e.li,{children:"To delete the container:"}),"\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(i,{icon:"fa-solid fa-trash",size:"lg"})}),"."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},71670:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var s=i(27378);const o={},t=s.createContext(o);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);