import{_ as u}from"./DHQLEcrn.js";import{u as m}from"./BKHbA-lp.js";import{q as p}from"./CLW0OUeJ.js";import{H as f,g as s,h as e,E as a,F as h,I as g,f as t,G as x,w as y,t as d}from"./BsQdrqWm.js";import"./CXhSEjkB.js";const b={key:0},k={key:1,class:"text-red-500"},w={key:2,class:"grid grid-cols-1 gap-4"},v=["src"],B={class:"ml-4 flex flex-col justify-center"},L={class:"font-mono text-xl"},N={__name:"index",async setup(C){let r,n;const{status:l,data:c}=([r,n]=f(()=>m("home",()=>p("blog").find())),r=await r,n(),r);return(D,i)=>{const _=u;return t(),s("div",null,[i[0]||(i[0]=e("h1",{class:"font-mono text-5xl mb-6"},"Daftar Blog",-1)),a(l)==="pending"?(t(),s("p",b,"Loading...")):a(l)==="error"?(t(),s("p",k,"Error loading articles.")):(t(),s("div",w,[(t(!0),s(h,null,g(a(c),o=>(t(),x(_,{key:o._id,to:o._path,class:"p-4 border-2 border-gray-500 hover:border-fruit-salad-600 bg-gray-100 dark:bg-slate-700 rounded shadow flex"},{default:y(()=>[e("img",{src:o.thumbnail,alt:"Thumbnail",class:"w-1/3 h-auto object-cover rounded-l"},null,8,v),e("div",B,[e("h2",L,d(o.title),1),e("p",null,d(o.description),1)])]),_:2},1032,["to"]))),128))]))])}}};export{N as default};