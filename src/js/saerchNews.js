import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FetchNews } from './fetchNewsApi';
import { renderCard, cleanCard } from './renderCard';
import { save, load } from './storage';

const fetchNews = new FetchNews();
const refs = {
  searchField: document.querySelector('#form-field'),
};
const NEWS_KEY = 'newsObject';
const IMAGE_BASE_URL = 'https://static01.nyt.com/';

refs.searchField.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  fetchNews.query = e.currentTarget.elements.searchQuery.value.trim();

  if (fetchNews.query === '') {
    Notify.warning('The input field cannot be empty.');
    return;
  }

  try {
    const response = await fetchNews.fetchBySearch();
    const cards = response.docs;
    const hits = response.meta.hits;

    cleanCard();

    if (hits === 0) {
      Notify.failure(
        'Sorry, there are no news matching your search query. Please try again.'
      );
      return;
    }

    console.log(cards);
    const newsObject = normalizeObj(cards);
    save(NEWS_KEY, newsObject);
    const parsedNews = await load(NEWS_KEY);
    renderCard(parsedNews);

    Notify.success(`Hooray! We found ${hits} news.`);
  } catch (error) {
    Notify.failure(`${error}`);

    cleanCard();
  }
}

function normalizeObj(news) {
  const newsObject = news.map(
    ({
      uri,
      abstract,
      lead_paragraph,
      pub_date,
      web_url,
      multimedia,
      section_name,
    }) => {
      let imageURL = `https://assets.hellovector.com/product-images/s_5008.jpg`;
      if (multimedia.length !== 0) {
        imageURL = `${IMAGE_BASE_URL}${multimedia[0].url}`;
      }

      return {
        id: uri,
        title: abstract,
        paragraph: lead_paragraph,
        img: imageURL,
        data: pub_date,
        url: web_url,
        multimedia,
        category: section_name,
      };
    }
  );

  return newsObject;
}
