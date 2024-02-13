// pixabay-api.js

const apiKey = '42327232-15779c8439a7c971fac782e02';

export async function getPixabayImages(query, page, perPage) {
  const urlParams = new URLSearchParams({ ...searchParams, key: apiKey });
  const response = await fetch(`https://pixabay.com/api/?${urlParams}`);

  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
}
