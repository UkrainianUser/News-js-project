import axios from 'axios';
import { save, load } from './storage';

const API_KEY_NEWS = "gLbj8EoYwaKTA6NLapVd3srb4LTB589B";

const URL = "https://api.nytimes.com/svc/news/v3/content/all/all.json"


const NEWS_KEY = "newsObject";

export async function fetchNews() {
    try {
      const response = await axios.get(URL, {
    params: {
        "api-key": API_KEY_NEWS,
      }
    });
      console.log(response.data);
      const newsObject = response.data.results.map(({uri, title, abstract, thumbnail_standard, published_date, url, multimedia, section}) => {
        return {
            id: uri,
            title,
            paragraph: abstract,
            img: thumbnail_standard,
            data: published_date,
            url,
            multimedia,
            category: section
        }
      });
      console.log(newsObject);
      save(NEWS_KEY, newsObject);

    } catch (error) {
      console.log(error);
    }

  }