
import { fetchNews } from './fetchNews';
import { load, save } from './storage';
import { renderCard, cleanCard } from './renderCard';

 
const NEWS_KEY = "newsObject";
const FAVORITE_KEY = "favoriteNews";

 getNews();
if (!load(FAVORITE_KEY)) {
  save(FAVORITE_KEY, []);
}
    
function getNews() {
  fetchNews();
  const parsedNews = load(NEWS_KEY);
  renderCard(parsedNews);


  }
 


 const cardNews = document.querySelector(".card-news__list");
 cardNews.addEventListener("click", handleClickFavoriteBtn);

 function handleClickFavoriteBtn(event) {

  const favoritNewsId = event.target.dataset.id;

  
  const parsedNews = load(NEWS_KEY);
  const parsedeFavoriteNews = load(FAVORITE_KEY);

  const favoriteNews = parsedNews.find(option => option.id === favoritNewsId);
  parsedeFavoriteNews.push(favoriteNews);
  save(FAVORITE_KEY, parsedeFavoriteNews);

  
  const newsAfterRemove = parsedNews.filter(value => value.id !== favoritNewsId);
  renderCard(newsAfterRemove);
  save(NEWS_KEY, newsAfterRemove);
  
 }

 



