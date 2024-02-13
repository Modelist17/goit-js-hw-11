// main.js

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderGallery, clearGallery, showErrorMessage, checkLoadMore } from './js/render-functions.js';
import { getPixabayImages } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more-btn');

loader.style.display = 'none';
const searchParams = {
  key: '42327232-15779c8439a7c971fac782e02',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  q: '',
  per_page: 12, // desired number of images per page
  page: 1, // Initial page
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  loader.style.display = 'block';
  const inputValue = e.target.elements.input.value;
  searchParams.q = inputValue;
  
  try {
    const images = await getPixabayImages(searchParams);
    handleApiResponse(images);
  } catch (error) {
    console.error(error);
    showErrorMessage();
  }

  e.target.reset();
});

loadMoreButton.addEventListener('click', async () => {
  loader.style.display = 'block';
  searchParams.page++;
  
  try {
    const images = await getPixabayImages(searchParams);
    handleApiResponse(images);
  } catch (error) {
    console.error(error);
    showErrorMessage();
  }
});

function handleApiResponse(images) {
  if (images.hits.length === 0) {
    showErrorMessage();
    clearGallery();
  } else {
    renderGallery(images, gallery, loader, loadMoreButton);
    checkLoadMore(images, loadMoreButton, searchParams.per_page);
  }

  let lightBox = new SimpleLightbox('.gallery-link');
  lightBox.refresh();
  loader.style.display = 'none';
}
