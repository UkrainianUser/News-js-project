import lightFormat from 'date-fns/lightFormat';
import compareDesc from 'date-fns/compareDesc';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import isSameDay from 'date-fns/isSameDay';
import { save, load } from './storage';

const READ_KEY = 'readNews';
const FAVORITE_KEY = 'favoriteNews';

const dateWrapper = document.querySelector('.date__wrapper');
const plugEl = document.querySelector('.wrapper-plug');

getReadNews();

function getReadNews() {
  plugEl.classList.add('is-hidden');
  if (load(READ_KEY).length) {
    const readNews = load(READ_KEY);
    const normalizeNews = readNews.filter(value => value);
    const rangeDate = getSortDate(readNews);
    console.log(rangeDate);
    const readObj = rangeDate.reduce((obj, date) => {
      obj[date] = normalizeNews.filter(value => {
        return isSameDay(new Date(date), new Date(value.data));
      });
      return obj;
    }, {});
    renderCardRead(readObj);
  } else {
    plugEl.classList.remove('is-hidden');
  }
}

function getSortDate(news) {
  const dateArray = news?.map(item => {
    return new Date(item?.data);
  });
  console.log(dateArray);

  const sortDateArray = dateArray
    .filter(item => {
      return item;
    })
    .sort(compareDesc);

  const rangeDate = eachDayOfInterval({
    start: new Date(sortDateArray[sortDateArray.length - 1]),
    end: new Date(sortDateArray[0]),
  });
  return rangeDate.sort(compareDesc);
}

dateWrapper.addEventListener('click', handleClickBtn);
function handleClickBtn(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  event.target.textContent = 'Remove from favorite';
  event.target.style.backgroundColor = '#4B48DB';
  event.target.style.color = '#fff';

  const favoritNewsId = event.target.dataset.id;
  const parsedReadNews = load(READ_KEY);
  const parsedeFavoriteNews = load(FAVORITE_KEY);

  const favoriteNews = parsedReadNews.find(
    option => option.id === favoritNewsId
  );
  parsedeFavoriteNews.push(favoriteNews);
  save(FAVORITE_KEY, parsedeFavoriteNews);

  const newsAfterRemove = parsedReadNews.filter(
    value => value.id !== favoritNewsId
  );
  const rangeDate = getSortDate(newsAfterRemove);

  save(READ_KEY, newsAfterRemove);
  getReadNews();
}

function renderCardRead(readObj) {
  const markup = Object.keys(readObj)
    .filter(item => {
      return readObj[item].length !== 0;
    })
    .map((item, index) => {
      return `  <li class="date__item" data-index=${index}>
        <div class="date__card"><h3 class="date__text">${lightFormat(
          new Date(item),
          'dd/MM/yyyy'
        )}</h3></div></li>

          <ul class="card-news__box">${getText(readObj[item])}</ul>`;
    })
    .join('');
  dateWrapper.innerHTML = markup;
}

function getText(news) {
  const markup = news
    .map(({ id, title, paragraph, img, data, url, category, multimedia }) => {
      return `<li class="card-news__item read">
      <div class="card-news__ovarlay read">
        <img
        class="card-news__img"
        src=${img}
        alt= "news image"
        width="395px"
        height="395px"
      />
    <p class="card-news__category read">${category}</p>
    <button data-id=${id} class="card-news__button read" type="button">
    Add to favirite
  </button>
</div>
<h2 class="card-news__title read">
    ${title}
    </h2>
    <p class="card-news__text read">
      ${paragraph}
    </p>
    <time class="card-news__time read">${lightFormat(
      new Date(data),
      'dd/MM/yyyy'
    )}</time>
    <a data-url=${url} class="card-news__element read" href=${url} target="_blank" rel="noreferrer noopener">Read more</a>
  </li>`;
    })
    .join('');
  return markup;
}

dateWrapper.addEventListener('click', handleClickItem);
function handleClickItem(event) {
  if (event.target.classList.contains('date__item')) {
    const activeIndex = event.target.dataset.index;
    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active');
    } else {
      event.target.classList.remove('active');
    }

    const activeBox = document.getElementsByClassName('date__item');
    const activeBoxEl = activeBox[activeIndex].nextElementSibling;

    if (!activeBoxEl.classList.contains('active')) {
      activeBoxEl.classList.add('active');
    } else {
      activeBoxEl.classList.remove('active');
    }
  }
}
