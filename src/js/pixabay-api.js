// pixabay-api.js


const apiKey = '42327232-15779c8439a7c971fac782e02';

export async function getPixabayImages(query, page, perPage) {
  const urlParams = new URLSearchParams({
    key: apiKey,
    q: query,
    page: page,
    per_page: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await fetch(`https://pixabay.com/api/?${urlParams}`);

  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
}
