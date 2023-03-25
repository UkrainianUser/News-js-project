import lightFormat from 'date-fns/lightFormat';
import compareDesc from 'date-fns/compareDesc';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import isSameDay from 'date-fns/isSameDay';
import { save, load } from "./storage";

const READ_KEY = "readNews";
const FAVORITE_KEY = "favoriteNews";

const dateWrapper = document.querySelector(".date__wrapper");

if (load(READ_KEY).length) {
 
    const readNews = load(READ_KEY);
    const rangeDate = getSortDate(readNews);
    const readObj = rangeDate.reduce((obj, date) => {
        obj[date] = readNews.filter((value) => {
           return isSameDay(new Date(date), new Date(value.data));
        });
        return obj;
      }, {});
      
    renderCardRead(readObj);

 }

 function getSortDate(news) {
    const dateArray = news.map((item) => {
        return new Date (item.data);
     });
     console.log(dateArray);

     const sortDateArray = dateArray.sort(compareDesc);

     const rangeDate = eachDayOfInterval({
        start: new Date(sortDateArray[sortDateArray.length - 1]),
        end: new Date(sortDateArray[0])
      });
      return rangeDate;
} 

dateWrapper.addEventListener("click", handleClickBtn);
function handleClickBtn(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
      } 
    const favoritNewsId = event.target.dataset.id; 
    const parsedReadNews = load(READ_KEY);
    const parsedeFavoriteNews = load(FAVORITE_KEY);

    const favoriteNews = parsedReadNews.find(option => option.id === favoritNewsId);
    parsedeFavoriteNews.push(favoriteNews);
    save(FAVORITE_KEY, parsedeFavoriteNews);

    const newsAfterRemove = parsedReadNews.filter(value => value.id !== favoritNewsId);
    const rangeDate = getSortDate(newsAfterRemove);
    renderCardRead(rangeDate, newsAfterRemove);
    save(READ_KEY, newsAfterRemove);
}


function renderCardRead(readObj) {
    const markup = Object.keys(readObj).map((item) => {

         
         return `  <li class="date__item">
         <div class="date__card"><h3 class="date__text">${lightFormat(new Date(item
             ), 'dd/MM/yyyy')}</h3></div>

         <div>${getText(readObj[item])}</div>

         
       </li>`
     }).join("");
      dateWrapper.innerHTML = markup;
 }

 function getText(news) {
    const markup = news.map(({id, title, paragraph, img, data, url, category, multimedia}) => {

        return `<li class="card-news__item">
        <div class="card-news__ovarlay">
        <img
        src=${img}
        alt="Businesswoman"
        width="288"
        height="395"
      />
      <p class="card-news__category">${category}</p>
      <button data-id=${id} class="card-news__button" type="button">
      Add to favirite
      <svg class="card-news__icon" width="16" height="16">
        <use href="./svg/symbol-defs.svg#icon-heart-not-action"></use>
      </svg>
    </button>
  </div>
  <h2 class="card-news__title">
       ${title}
      </h2>
      <p class="card-news__text">
        ${paragraph}
      </p>
      <time class="card-news__time">${lightFormat(new Date(data
          ), 'dd/MM/yyyy')}</time>
      <a data-url=${url} class="card-news__element" href=${url} target="_blank" rel="noreferrer noopener">Read more</a>
    </li>`  
  }).join(""); 
  return markup;
} 