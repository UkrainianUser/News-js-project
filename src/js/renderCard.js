import lightFormat from 'date-fns/lightFormat';

const articleList = document.querySelector(".card-news__list");
 export function renderCard(news) {
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
        Add to favorite
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
        <a class="card-news__element" href=${url} target="_blank" rel="noreferrer noopener">Read more</a>
      </li>`  
    }).join("");
    articleList.innerHTML = markup;
    console.log(news)
} 

export function cleanCard() {
    articleList.innerHTML = "";
}

