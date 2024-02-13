import{S as y}from"./assets/vendor-874053e3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(t,o,s,n){const e=t.hits.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}">
          <div class="img-content">
            <div>
              <h3>Likes</h3>
              <p>${r.likes}</p>
            </div>
            <div>
              <h3>Views</h3>
              <p>${r.views}</p>
            </div>
            <div>
              <h3>Comments</h3>
              <p>${r.comments}</p>
            </div>
            <div>
              <h3>Downloads</h3>
              <p>${r.downloads}</p>
            </div>
          </div>
        </a>`).join("");o.innerHTML+=e}function h(){gallery.innerHTML=""}function c(){iziToast.show({message:"Sorry, something went wrong. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"})}function g(t,o,s){t.hits.length<s||t.totalHits===t.total?o.style.display="none":o.style.display="block"}const m="42327232-15779c8439a7c971fac782e02";async function p(t,o,s){const n=new URLSearchParams({key:m,q:t,page:o,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=await fetch(`https://pixabay.com/api/?${n}`);if(!e.ok)throw new Error(e.status);return e.json()}const v=document.querySelector(".form"),w=document.querySelector(".gallery"),i=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");i.style.display="none";const a={key:"42327232-15779c8439a7c971fac782e02",image_type:"photo",orientation:"horizontal",safesearch:!0,q:"",per_page:12,page:1};v.addEventListener("submit",async t=>{t.preventDefault(),i.style.display="block";const o=t.target.elements.input.value;a.q=o;try{const s=await p(a);u(s)}catch(s){console.error(s),c()}t.target.reset()});d.addEventListener("click",async()=>{i.style.display="block",a.page++;try{const t=await p(a);u(t)}catch(t){console.error(t),c()}});function u(t){t.hits.length===0?(c(),h()):(f(t,w),g(t,d,a.per_page)),new y(".gallery-link").refresh(),i.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
