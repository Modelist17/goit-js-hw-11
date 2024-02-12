// pixabay-api.js

const apiKey = '42327232-15779c8439a7c971fac782e02'; 

export async function getPixabayImages(query, page, perPage) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching Pixabay images: ${error.message}`);
  }
}
