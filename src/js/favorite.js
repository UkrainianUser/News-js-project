import { lightFormat } from 'date-fns';
import { save, load } from './storage';

const FAVORITE_KEY = 'favoriteNews';
const READ_KEY = 'readNews';
const cardFavorite = document.querySelector('.card-favorite__list');
const imgNotFound = `data:image/png;base64,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`;

getFavoriteNews();
function getFavoriteNews() {
  if (!load(FAVORITE_KEY)) {
    return;
  }
    const favoriteNews = load(FAVORITE_KEY);
    if (favoriteNews) {
      renderCardFavorite(favoriteNews);
    }
}

cardFavorite.addEventListener('click', handleClickFavoriteBtn);

function handleClickFavoriteBtn(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const favoritNewsId = event.target.dataset.id;
  const parsedeFavoriteNews = load(FAVORITE_KEY);
  const newsAfterRemove = parsedeFavoriteNews.filter(
    value => value.id !== favoritNewsId
  );
  renderCardFavorite(newsAfterRemove);
  save(FAVORITE_KEY, newsAfterRemove);
}

function renderCardFavorite(news) {
  const normalizeNews = news.filter((value) => value);
  const markup = normalizeNews
    .map(({ id, title, paragraph, img, data, url, category, multimedia }) => {
      return `<li class="card-favorite__item">
          <div class="card-favorite__ovarlay">
          <img
          class="card-news__img"
          src=${img ? img : imgNotFound}
          alt="news image"
          width="395px"
          height="395px"
        />
        <p class="card-favorite__category">${category}</p>
        <button data-id=${id} class="card-favorite__button" type="button">
        Remove from favorite
      </button>
    </div>
    <h2 class="card-favorite__title">
        ${title}
        </h2>
        <p class="card-favorite__text">
          ${paragraph}
        </p>
        <time class="card-favorite__time">${lightFormat(
          new Date(data),
          'dd/MM/yyyy'
        )}</time>
        <a data-url=${url} class="card-favorite__element" href=${url} target="_blank" rel="noreferrer noopener">Read more</a>
      </li>`;
    })
    .join('');
  cardFavorite.innerHTML = markup;
  console.log(news);
}

cardFavorite.addEventListener('click', handleClickRead);
function handleClickRead(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  const readCardUrl = event.target.dataset.url;

  if (load(FAVORITE_KEY) && load(READ_KEY)) {
  const parsedNews = load(FAVORITE_KEY);
  const parsedReadNews = load(READ_KEY);

  const readNews = parsedNews.find(option => option.url === readCardUrl);
  parsedReadNews.push(readNews);
  save(READ_KEY, parsedReadNews);}
}
