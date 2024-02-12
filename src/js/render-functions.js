// render-functions.js

export function renderGallery(images, galleryContainer, loader, loadMoreButton) {
    const galleryHTML = images.hits
      .map(
        (image) => `<a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
          <div class="img-content">
            <div>
              <h3>Likes</h3>
              <p>${image.likes}</p>
            </div>
            <div>
              <h3>Views</h3>
              <p>${image.views}</p>
            </div>
            <div>
              <h3>Comments</h3>
              <p>${image.comments}</p>
            </div>
            <div>
              <h3>Downloads</h3>
              <p>${image.downloads}</p>
            </div>
          </div>
        </a>`
      )
      .join('');
  
    galleryContainer.innerHTML += galleryHTML;
  }
  
  export function clearGallery() {
    gallery.innerHTML = '';
  }
  
  export function showErrorMessage() {
    iziToast.show({
      message: 'Sorry, something went wrong. Please try again later.',
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
  }
  
  export function checkLoadMore(images, loadMoreButton, perPage) {
    if (images.hits.length < perPage || images.totalHits === images.total) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'block';
    }
  }
  