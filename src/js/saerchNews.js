import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FetchNews } from './fetchNewsApi';
import { renderCard, cleanCard } from './renderCard';
import { save, load, remove } from './storage';
import { getFilterDate } from './filter-date';
import { updateNewsPage } from './home-page';

const fetchNews = new FetchNews();
const refs = {
  searchField: document.getElementById('form-field'),
  searchInput: document.getElementById('search-field__input'),
  plug: document.querySelector('.wrapper-plug'),
  weather: document.querySelector('.weather'),
  pagination: document.querySelector('.pagination'),
};
const NEWS_KEY = 'newsObject';
const IMAGE_BASE_URL = 'https://static01.nyt.com/';
const stylesInput = window.getComputedStyle(refs.searchInput);
let inputWidth = stylesInput.getPropertyValue('width');

refs.searchField.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  inputWidth = await stylesInput.getPropertyValue('width');

  if (Number.parseInt(inputWidth) < 5) {
    return;
  }

  fetchNews.query = e.currentTarget.elements.searchQuery.value.trim();

  if (fetchNews.query === '') {
    Notify.warning('The input field cannot be empty.');
    return;
  }

  try {
    fetchNews.date = getFilterDate();
    const response = await fetchNews.fetchBySearch();
    const cards = response.docs;
    const hits = response.meta.hits;

    cleanCard();

    if (hits === 0) {
      Notify.failure(
        'Sorry, there are no news matching your search query. Please try again.'
      );

      refs.plug.classList.remove('is-hidden');
      refs.weather.classList.add('is-hidden');
      refs.pagination.classList.add('is-hidden');
      return;
    }

    refs.plug.classList.add('is-hidden');
    refs.weather.classList.remove('is-hidden');
    refs.pagination.classList.remove('is-hidden');
    const newsObject = normalizeObj(cards);
    remove(NEWS_KEY);
    save(NEWS_KEY, newsObject);
    const parsedNews = await load(NEWS_KEY);
    // renderCard(parsedNews);
    updateNewsPage();

    Notify.success(`Ok! We found ${hits} news.`);
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
      let imageURL = '';
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
