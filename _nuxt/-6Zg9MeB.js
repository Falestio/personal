import{_}from"./-aJenJ7h.js";import d from"./DIFQt7C-.js";import{s as f,I as y,z as h,g as r,G as o,h as s,t as g,k as i,j as v,w as b,f as l}from"./Bo9UYLOt.js";import{u as x}from"./FFI2IX6n.js";import{u as $}from"./CEQhhoHH.js";import{q as w}from"./Diz2q8BU.js";import"./Biz17bxB.js";import"./CTcFJef_.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./Bkm5p5r8.js";import"./BJxRYUJS.js";const C={key:0,class:"p-4"},k={class:"text-5xl font-mono font-semibold mb-8"},B={class:"flex justify-center"},F={__name:"[article]",async setup(N){let e,n;const c=f(),m=x(),{status:A,data:t}=([e,n]=y(()=>$("article",()=>w("blog",c.params.article).findOne())),e=await e,n(),e);return m.currentArticle=t,t.value&&h({title:()=>`${t.value.title}`,meta:[{name:"description",content:()=>`${t.value.description}`},{property:"og:title",content:()=>`${t.value.title}`},{property:"og:description",content:()=>`${t.value.description}`},{property:"og:image",content:()=>`${t.value.thumbnail}`}]}),(D,a)=>{const u=_,p=d;return l(),r("div",null,[o(t)?(l(),r("div",C,[s("h1",k,g(o(t).title),1),i(u,{src:o(t).thumbnail,class:"w-full h-auto",alt:"thumbnail - "+o(t).description},null,8,["src","alt"])])):v("",!0),s("div",B,[i(p,{class:"article custom-list-style custom-table-style custom-inline-code w-full p-4"},{"not-found":b(()=>a[0]||(a[0]=[s("h1",null,"404 Content not found",-1)])),_:1})])])}}};export{F as default};