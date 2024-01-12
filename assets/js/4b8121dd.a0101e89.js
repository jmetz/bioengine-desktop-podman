"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[534],{78505:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=s(24246),r=s(71670);const i={title:"Existing Kubernetes",description:"Configuring access to a Kubernetes cluster",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes"],tags:["migrating-to-kubernetes"]},o="Configuring access to a Kubernetes cluster",c={id:"kubernetes/existing-kubernetes/index",title:"Existing Kubernetes",description:"Configuring access to a Kubernetes cluster",source:"@site/docs/kubernetes/existing-kubernetes/index.md",sourceDirName:"kubernetes/existing-kubernetes",slug:"/kubernetes/existing-kubernetes/",permalink:"/docs/kubernetes/existing-kubernetes/",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/existing-kubernetes/index.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",frontMatter:{title:"Existing Kubernetes",description:"Configuring access to a Kubernetes cluster",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Deploying a pod",permalink:"/docs/kubernetes/deploying-a-pod-to-kubernetes"},next:{title:"Push an image to Kind",permalink:"/docs/kubernetes/kind/pushing-an-image-to-kind"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resopurces",id:"additional-resopurces",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Icon:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuring-access-to-a-kubernetes-cluster",children:"Configuring access to a Kubernetes cluster"}),"\n",(0,t.jsx)(n.p,{children:"Podman Desktop configures the access to Kubernetes clusters automatically when:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/kind/creating-a-kind-cluster",children:"Creating a Kind-powered local Kubernetes cluster"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/openshift/openshift-local",children:"Creating an OpenShift Local cluster"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/openshift/developer-sandbox",children:"Configuring access to a Developer Sandbox"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can also use the Kubernetes CLI to configure access to your Kubernetes cluster:"}),"\n",(0,t.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You have credentials for your Kubernetes cluster."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optionally) Go to ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(s,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Path to the kubeconfig file"]})," to adapt your kubeconfig file location, when different from the default ",(0,t.jsx)(n.code,{children:"$HOME/.kube/config"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Register your ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"<my_kubernetes>"})})," Kubernetes cluster:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"$ kubectl config set-cluster <my_kubernetes> --server=<my_kubernetes_url>\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can ",(0,t.jsx)(n.a,{href:"/docs/kubernetes/viewing-and-selecting-current-kubernete-context",children:"view and select the Kubernetes cluster in Podman Desktop"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"additional-resopurces",children:"Additional resopurces"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",children:"Kubernetes documentation: Configure access to multiple clusters"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(27378);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);