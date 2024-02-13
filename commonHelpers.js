import{S as u}from"./assets/vendor-874053e3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(o){if(o.ep)return;o.ep=!0;const e=s(o);fetch(o.href,e)}})();function y(t,r,s,i){const o=t.hits.map(e=>`<a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
          <div class="img-content">
            <div>
              <h3>Likes</h3>
              <p>${e.likes}</p>
            </div>
            <div>
              <h3>Views</h3>
              <p>${e.views}</p>
            </div>
            <div>
              <h3>Comments</h3>
              <p>${e.comments}</p>
            </div>
            <div>
              <h3>Downloads</h3>
              <p>${e.downloads}</p>
            </div>
          </div>
        </a>`).join("");r.innerHTML+=o}function f(){gallery.innerHTML=""}function c(){iziToast.show({message:"Sorry, something went wrong. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"})}function h(t,r,s){t.hits.length<s||t.totalHits===t.total?r.style.display="none":r.style.display="block"}const g=document.querySelector(".form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader"),d=document.querySelector(".load-more");l.style.display="none";const n={key:"42327232-15779c8439a7c971fac782e02",image_type:"photo",orientation:"horizontal",safesearch:!0,q:"",per_page:12,page:1};g.addEventListener("submit",async t=>{t.preventDefault(),l.style.display="block";const r=t.target.elements.input.value;n.q=r;try{const s=await getPhotoByName(n);p(s)}catch(s){console.error(s),c()}t.target.reset()});d.addEventListener("click",async()=>{l.style.display="block",n.page++;try{const t=await getPhotoByName(n);p(t)}catch(t){console.error(t),c()}});function p(t){t.hits.length===0?(c(),f()):(y(t,m),h(t,d,n.per_page)),new u(".gallery-link").refresh(),l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
