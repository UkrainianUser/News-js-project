import { fetchNews } from './fetchNews';
import { load, save } from './storage';
import { renderCard } from './renderCard';

const NEWS_KEY = 'newsObject';
const FAVORITE_KEY = 'favoriteNews';
const READ_KEY = 'readNews';

const cardNews = document.querySelector('.card-news__list');

window.addEventListener('load', async event => {
  try {
    await fetchNews();
    const parsedNews = load(NEWS_KEY);
    renderCard(parsedNews);
  } catch (error) {
    console.log(error.message);
  }

  const parsedNews = load(NEWS_KEY);
  renderCard(parsedNews);
});

if (!load(FAVORITE_KEY)) {
  save(FAVORITE_KEY, []);
}
if (!load(READ_KEY)) {
  save(READ_KEY, []);
}

const parsedNews = load(NEWS_KEY);
renderCard(parsedNews);

cardNews.addEventListener('click', handleClickFavoriteBtn);
cardNews.addEventListener('click', handleClickRead);

function handleClickFavoriteBtn(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const favoritNewsId = event.target.dataset.id;

  const parsedNews = load(NEWS_KEY);
  const parsedeFavoriteNews = load(FAVORITE_KEY);

  const favoriteNews = parsedNews.find(option => option.id === favoritNewsId);
  parsedeFavoriteNews.push(favoriteNews);
  save(FAVORITE_KEY, parsedeFavoriteNews);

  const newsAfterRemove = parsedNews.filter(
    value => value.id !== favoritNewsId
  );
  renderCard(newsAfterRemove);
  save(NEWS_KEY, newsAfterRemove);
}

function handleClickRead(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  const readCardUrl = event.target.dataset.url;

  const parsedNews = load(NEWS_KEY);
  const parsedReadNews = load(READ_KEY);

  const readNews = parsedNews.find(option => option.url === readCardUrl);
  parsedReadNews.push(readNews);
  save(READ_KEY, parsedReadNews);
}
