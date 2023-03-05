import{Q as v,u as k,I as A}from"./imagekit-41140f27.js";/* empty css                       */import{H as M}from"./Header-f92b1b8d.js";import{S as i}from"./sweetalert2.all-87237c48.js";import{_ as L,f as b,e as T,h as F,p as I,i as V,o as p,c as x,b as u,a as r,j as y,w,v as S,k as P,t as H,F as B,l as N,r as g,m as C,n as D,d as h}from"./index-9268eda1.js";const E={name:"CreateArticleView",setup(){return{modules:[{name:"imageUploader",module:A,options:{upload:n=>new Promise((d,a)=>{const o=$cookies.get("ltoken");o===null&&a("Kamu perlu login untuk melakukan aksi ini"),b(o,"imagekit-private").then(l=>{if(l.success){const f=l.message;k(n,f).then(m=>{d(m.url)})}})})}}],toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{align:[]}],[{color:[]},{background:[]}],["link","image","video"],["clean"]]}},created(){this.$cookies.get("ltoken")===null&&this.$router.push({name:"login"})},data(){return{articleTitle:"",articleHeaderImg:"",editorValue:"",articleType:"Pilih tipe artikel",articleStatus:"Draf",showLoadingModal:!1}},components:{Header:M,QuillEditor:v},methods:{draftArticle(){this.showLoadingModal=!0,this.articleStatus="Draft";const t=this.$cookies.get("ltoken");if(t===null){this.showLoadingModal=!1,alert("Kamu perlu login untuk melakukan aksi ini");return}if(this.articleHeaderImg===""){this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Gambar header tidak boleh kosong!"});return}if(this.articleTitle===""){this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Judul artikel tidak boleh kosong!"});return}if(this.articleType==="Pilih tipe artikel"){this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Pilih tipe artikel terlebih dahulu!"});return}b(t,"imagekit-private").then(e=>{if(e.success){const n=e.message,d=document.getElementById("file_input").files[0];k(d,n).then(a=>{console.log(a);const o=a.url;this.articleType==="announcements"?T({title:this.articleTitle,image_header_url:o,contents:this.editorValue},t).then(l=>{this.showLoadingModal=!1,l.success?i.fire("Success!","Artikel berhasil didraft!","success").then(()=>{this.$router.push({name:"main"})}):i.fire({icon:"error",title:"Failed!",text:"Artikel gagal didraft!"})}).catch(l=>{this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Artikel gagal didraft!"})}):this.articleType==="news"&&F({title:this.articleTitle,image_header_url:o,contents:this.editorValue},t).then(l=>{this.showLoadingModal=!1,l.success?i.fire("Success!","Artikel berhasil didraft!","success").then(()=>{this.$router.push({name:"main"})}):i.fire({icon:"error",title:"Failed!",text:"Artikel gagal didraft!"})}).catch(l=>{this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Artikel gagal didraft!"})})})}}).catch(e=>{this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Artikel gagal didraft!"})})},publishArticle(){this.showLoadingModal=!0,this.articleStatus="Publish";const t=this.$cookies.get("ltoken");if(t===null){this.showLoadingModal=!1,alert("Kamu perlu login untuk melakukan aksi ini");return}if(this.articleHeaderImg===""){this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Gambar header tidak boleh kosong!"});return}if(this.articleTitle===""){this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Judul artikel tidak boleh kosong!"});return}if(this.articleType==="Pilih tipe artikel"){this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Pilih tipe artikel terlebih dahulu!"});return}b(t,"imagekit-private").then(e=>{if(e.success){const n=e.message,d=document.getElementById("file_input").files[0];k(d,n).then(a=>{const o=a.url;this.articleType==="announcements"?I({title:this.articleTitle,image_header_url:o,contents:this.editorValue},t).then(l=>{this.showLoadingModal=!1,l.success?i.fire("Success!","Artikel berhasil dipublikasikan!","success").then(()=>{this.$router.push({name:"main"})}):i.fire({icon:"error",title:"Failed!",text:"Artikel gagal dipublikasikan!"})}).catch(l=>{this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Artikel gagal dipublikasikan!"})}):this.articleType==="news"&&V({title:this.articleTitle,image_header_url:o,contents:this.editorValue},t).then(l=>{this.showLoadingModal=!1,l.success?i.fire("Success!","Artikel berhasil dipublikasikan!","success"):i.fire({icon:"error",title:"Failed!",text:"Artikel gagal dipublikasikan!"})}).catch(l=>{this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Artikel gagal dipublikasikan!"})})})}}).catch(e=>{this.showLoadingModal=!1,i.fire({icon:"error",title:"Failed!",text:"Artikel gagal dipublikasikan!"})})},getHeaderImg(t){const e=document.getElementById("file_input").files[0],n=new FileReader;n.onloadend=function(){t(n.result)},n.readAsDataURL(e)},updatePreview(){this.getHeaderImg(t=>{this.articleHeaderImg=t,setTimeout(()=>{document.getElementById("preview-img").src=t},100)})}}},c=t=>(C("data-v-a286805f"),t=t(),D(),t),U={class:"mt-12 mb-12 container mx-auto max-w-screen-lg px-8 lg:px-0"},J=c(()=>r("label",{class:"block mb-2 text-sm text-gray-900 dark:text-white",for:"file_input"},[h(" Gambar header artikel "),r("span",{class:"text-red-600"},"*")],-1)),K={key:0,id:"preview-img",src:"",class:"mb-4 rounded-sm aspect-video w-full object-contain",style:{"background-color":"#d0d1d3"},alt:"Preview Image"},Q=c(()=>r("label",{for:"article-title",class:"mb-2 text-sm text-gray-900"},[h(" Judul artikel "),r("span",{class:"text-red-600"},"*")],-1)),j=c(()=>r("label",{class:"mb-2 text-sm text-gray-900"},[h(" Isi artikel "),r("span",{class:"text-red-600"},"*")],-1)),G=c(()=>r("label",{for:"article-type",class:"block mt-4 mb-1 text-sm text-gray-900 dark:text-white"},[h(" Tipe Artikel "),r("span",{class:"text-red-600"},"*")],-1)),R=c(()=>r("option",{selected:"",disabled:""},"Pilih tipe artikel",-1)),q=c(()=>r("option",{value:"announcements"},"Pengumuman",-1)),z=c(()=>r("option",{value:"news"},"Berita",-1)),O=[R,q,z],W=c(()=>r("br",null,null,-1)),X={key:0,id:"loading-modal",class:"fade-in fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center",style:{background:"rgba(0, 0, 0, 0.5)"}},Y={class:"bg-white border py-14 px-20 rounded-lg flex items-center flex-col"},Z=N('<div class="loader-dots block relative w-20 h-5 mt-2" data-v-a286805f><div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" data-v-a286805f></div><div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" data-v-a286805f></div><div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" data-v-a286805f></div><div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" data-v-a286805f></div></div>',1),$={class:"text-gray-500 text-base font-medium mt-5 text-center"};function ee(t,e,n,d,a,o){const l=g("Navbar"),f=g("Header"),m=g("QuillEditor"),_=g("Footer");return p(),x(B,null,[u(l),u(f,{class:"pt-10 pb-10",title:"Buat Artikel"}),r("div",U,[J,r("input",{onChange:e[0]||(e[0]=(...s)=>o.updatePreview&&o.updatePreview(...s)),class:"mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-sm cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"file_input",type:"file",accept:"image/*"},null,32),a.articleHeaderImg!==""?(p(),x("img",K)):y("",!0),Q,w(r("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>a.articleTitle=s),type:"text",id:"article-title",class:"transition duration-50 block w-full p-2.5 mb-4 text-sm text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Judul artikel",required:""},null,512),[[S,a.articleTitle]]),j,u(m,{modules:d.modules,theme:"snow",toolbar:d.toolbar,content:a.editorValue,"onUpdate:content":e[2]||(e[2]=s=>a.editorValue=s),"content-type":"html"},null,8,["modules","toolbar","content"]),G,w(r("select",{"onUpdate:modelValue":e[3]||(e[3]=s=>a.articleType=s),id:"article-type",class:"transition duration-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},O,512),[[P,a.articleType]]),r("button",{onClick:e[4]||(e[4]=(...s)=>o.draftArticle&&o.draftArticle(...s)),type:"button",class:"transition duration-150 mt-3 shadow-sm text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}," Draf Artikel "),r("button",{onClick:e[5]||(e[5]=(...s)=>o.publishArticle&&o.publishArticle(...s)),type:"button",class:"transition duration-150 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}," Publikasikan Artikel "),W]),a.showLoadingModal?(p(),x("div",X,[r("div",Y,[Z,r("div",$,H(a.articleStatus==="Draft"?"Drafting":"Publishing")+" Article... ",1)])])):y("",!0),u(_)],64)}const oe=L(E,[["render",ee],["__scopeId","data-v-a286805f"]]);export{oe as default};
