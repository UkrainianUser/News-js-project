
import { save, load } from "./storage";

const FAVORITE_KEY = "favoriteNews";


if (load(FAVORITE_KEY)) {
    const favoriteNews = load(FAVORITE_KEY);
    renderCardFavorite(favoriteNews);
}


const cardFavorite = document.querySelector(".card-favorite__list");

cardFavorite.addEventListener("click", handleClickFavoriteBtn);

function handleClickFavoriteBtn(event) {
 

 const favoritNewsId = event.target.dataset.id;
 const parsedeFavoriteNews = load(FAVORITE_KEY);
 const newsAfterRemove = parsedeFavoriteNews.filter(value => value.id !== favoritNewsId);
 renderCardFavorite(newsAfterRemove);
 save(FAVORITE_KEY, newsAfterRemove);
 
}

function renderCardFavorite(news) {
    const markup = news.map(({id, title, paragraph, img, data, url, category, multimedia}) => {

          return `<li class="card-favorite__item">
          <div class="card-favorite__ovarlay">
          <img
          src=${img}
          alt="Businesswoman"
          width="288"
          height="395"
        />
        <p class="card-favorite__category">${category}</p>
        <button data-id=${id} class="card-favorite__button" type="button">
        Remove from favorite
        <svg class="card-favorite__icon" width="16" height="16">
          <use href="./svg/symbol-defs.svg#icon-heart-not-action"></use>
        </svg>
      </button>
    </div>
    <h2 class="card-favorite__title">
         ${title}
        </h2>
        <p class="card-favorite__text">
          ${paragraph}
        </p>
        <time class="card-favorite__time">${lightFormat(new Date(data
            ), 'dd/MM/yyyy')}</time>
        <a class="card-favorite__element" href=${url}>Read more</a>
      </li>`  
    }).join("");
    cardFavorite.innerHTML = markup;
    console.log(news)
} 
