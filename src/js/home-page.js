import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { fetchNews } from './fetchNews';
import { load, save, remove } from './storage';
import { renderCard } from './renderCard';
import { renderPaginationBtn, getNewsByPage, getnewsPerPage, getActiveBtn } from './pagination';
import { addWeather } from "./weatherBase";

const NEWS_KEY = 'newsObject';
const FAVORITE_KEY = 'favoriteNews';
const READ_KEY = 'readNews';

let newsPerPage = 0;
const PAGINATION_INDEX = "paginationIndex";
save(PAGINATION_INDEX, 0);

const cardNews = document.querySelector('.card-news__list');
const paginationBtn = document.querySelector(".pagination__list-button");
const paginationPrevBtn = document.querySelector("#prev");
const paginationNextBtn = document.querySelector("#next");

addWeather();

window.addEventListener('load', async (event) => {
  try {
    await fetchNews();
    updateNewsPage();
  } catch(error) {
    console.log(error.message);
  }
});

if (!load(FAVORITE_KEY)) {
  save(FAVORITE_KEY, []);
}
if (!load(READ_KEY)) {
  save(READ_KEY, []);
}

cardNews.addEventListener('click', handleClickFavoriteBtn);
cardNews.addEventListener('click', handleClickRead);

function handleClickFavoriteBtn(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const favoritNewsId = event.target.dataset.id;

  event.target.textContent = "Remove from favorite";

  const parsedNews = load(NEWS_KEY);
  const parsedeFavoriteNews = load(FAVORITE_KEY);

  const favoriteNews = parsedNews.find(option => option.id === favoritNewsId);
  parsedeFavoriteNews.push(favoriteNews);
  save(FAVORITE_KEY, parsedeFavoriteNews);

  // const newsAfterRemove = parsedNews.filter(
  //   value => value.id !== favoritNewsId
  // );
  // renderCard(newsAfterRemove);
  // save(NEWS_KEY, newsAfterRemove);
}

function handleClickRead(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  const readCardUrl = event.target.dataset.url;
  
  const readEl = document.querySelector(`li[data-read="${readCardUrl}"]`);
  readEl.style.opacity="0.5";

  const parsedNews = load(NEWS_KEY);
  const parsedReadNews = load(READ_KEY);

  const readNews = parsedNews.find(option => option.url === readCardUrl);
  parsedReadNews.push(readNews);
  save(READ_KEY, parsedReadNews);
}

export function updateNewsPage() {
  const parsedNews = load(NEWS_KEY);
  newsPerPage = getnewsPerPage();
  const totalCard = parsedNews.length;
  const totalPage = Math.ceil(totalCard / newsPerPage);
  let paginationIndex = load(PAGINATION_INDEX);
  renderPaginationBtn(totalPage);
  getActiveBtn(paginationIndex);
  paginationPrevBtn.disabled = true;
  paginationNextBtn.disabled = false;
  getNewsByPage(newsPerPage, paginationIndex, parsedNews);

  paginationBtn.addEventListener("click", (event) => {
    paginationIndex = Number(event.target.dataset.id);
    getNewsByPage(newsPerPage, paginationIndex, parsedNews);
    getActiveBtn(paginationIndex);

    if (paginationIndex === 0) {
      paginationPrevBtn.disabled = true;
    } else {
      paginationPrevBtn.disabled = false;
    }
    if (paginationIndex === totalPage - 1) {
      paginationNextBtn.disabled = true;
    } else {
      paginationNextBtn.disabled = false;
    }
  });

  paginationPrevBtn.addEventListener("click", (event) => {
    if (paginationIndex === 0) {
      return;
    }
    paginationNextBtn.disabled = false;
    paginationIndex -= 1;
    getNewsByPage(newsPerPage, paginationIndex, parsedNews);
    getActiveBtn(paginationIndex);

    if (paginationIndex === 0) {
      paginationPrevBtn.disabled = true;
    }
  });

  paginationNextBtn.addEventListener("click", (event) => {
    if (paginationIndex === totalPage - 1) {
      return;
    }
    paginationPrevBtn.disabled = false;
    paginationIndex += 1;
    getNewsByPage(newsPerPage, paginationIndex, parsedNews);
    getActiveBtn(paginationIndex);
    
    if (paginationIndex === totalPage - 1) {
      paginationNextBtn.disabled = true;
    }
  });
}