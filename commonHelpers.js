import{S as p}from"./assets/vendor-874053e3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(r,o,s,n){const e=r.hits.map(t=>`<a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
          <div class="img-content">
            <div>
              <h3>Likes</h3>
              <p>${t.likes}</p>
            </div>
            <div>
              <h3>Views</h3>
              <p>${t.views}</p>
            </div>
            <div>
              <h3>Comments</h3>
              <p>${t.comments}</p>
            </div>
            <div>
              <h3>Downloads</h3>
              <p>${t.downloads}</p>
            </div>
          </div>
        </a>`).join("");o.innerHTML+=e}function u(){gallery.innerHTML=""}function c(){iziToast.show({message:"Sorry, something went wrong. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"})}const f="42327232-15779c8439a7c971fac782e02";async function h(r,o,s){const n=new URLSearchParams({key:f,q:r,page:o,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=await fetch(`https://pixabay.com/api/?${n}`);if(!e.ok)throw new Error(e.status);return e.json()}const y=document.querySelector(".form"),g=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";const l={key:"42327232-15779c8439a7c971fac782e02",image_type:"photo",orientation:"horizontal",safesearch:!0,q:"",per_page:12,page:1};y.addEventListener("submit",async r=>{r.preventDefault(),i.style.display="block";const o=r.target.elements.input.value;l.q=o;try{const s=await h(l);m(s)}catch(s){console.error(s),c()}r.target.reset()});function m(r){r.hits.length===0?(c(),u()):d(r,g),new p(".gallery-link").refresh(),i.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
