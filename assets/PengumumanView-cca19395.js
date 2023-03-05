import{H as w}from"./Header-f92b1b8d.js";import{N as b}from"./NotFound-bf4a5812.js";import{_ as p,o as d,c as _,a as o,C as y,x as k,b as a,d as u,t as C,r}from"./index-9268eda1.js";/* empty css                       */import{A}from"./ArticleTitle-0b808295.js";const I={},F={class:"w-5 h-5 inline top-[-2px]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},N=o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"},null,-1),L=[N];function v(i,m){return d(),_("svg",F,L)}const D=p(I,[["render",v]]);const E={name:"PengumumanView",components:{MegaphoneIcon:D,CalendarIcon:y,ArticleTitle:A,NotFound:b,Header:w},data(){return{isLoading:!0,isArticleExists:!1,article:{image_header_url:null,title:null,contents:null,created_at:null},articleCreatedDate:null}},beforeRouteEnter(i,m,c){const l=i.params.titleId,e=l.split("-").pop();if(isNaN(parseInt(e))){c(n=>{n.isArticleExists=!1,n.isLoading=!1});return}k(e).then(n=>{if(n.success){const t=n.message[0];if(encodeURIComponent(`${t.title.replaceAll(/\s+/g,"-").toLowerCase()}-${e}`)===encodeURIComponent(l)){c(s=>{s.article=t,s.articleCreatedDate=new Date(t.created_at).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}),s.isArticleExists=!0,s.isLoading=!1});return}}c(t=>{t.isArticleExists=!1,t.isLoading=!1})})},created(){this.$watch(()=>this.$route.params,()=>{location.reload()})},methods:{}},M={key:0},$={key:1},T={class:"mb-4 pt-16 pb-16 text-center text-gray-900 dark:text-white",style:{"background-color":"#F8F9FC"}},V={class:"container mx-auto px-4 md:max-w-default pt-6"},H={class:"block w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"},B=["src"],P=["innerHTML"],j=o("div",{class:"pb-10"},null,-1);function R(i,m,c,l,e,n){const t=r("NotFound"),s=r("Navbar"),g=r("ArticleTitle"),h=r("CalendarIcon"),f=r("MegaphoneIcon"),x=r("Footer");return!e.isArticleExists&&!e.isLoading?(d(),_("main",M,[a(t)])):(d(),_("main",$,[a(s),o("div",T,[a(g,{title:e.article.title},null,8,["title"]),a(h),u(" "+C(e.articleCreatedDate)+" — ",1),a(f),u(" Pengumuman ")]),o("div",V,[o("div",H,[o("img",{class:"rounded-t-md aspect-video w-full object-contain",style:{"background-color":"#F8F9FC"},src:e.article.image_header_url,alt:""},null,8,B),o("p",{class:"ql-editor p-5 mt-4 text-base font-normal text-gray-900 dark:text-gray-400 text-justify",innerHTML:e.article.contents},null,8,P)])]),j,a(x)]))}const J=p(E,[["render",R]]);export{J as default};
