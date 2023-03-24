const BASE_URL = 'https://api.nytimes.com/svc/';
const API_KEY = 'i85kp9c7ncgQOMH4Gfh3mTxFRckIs0gP';

export class FetchNews {
  constructor() {
    this.searchQuery = '';
    this.category = '';
    this.date;
    this.page = 1;
  }

  async fetchBySearch() {
    const results = await axios.get(`${BASE_URL}search/v2/articlesearch.json`, {
      params: {
        'api-key': API_KEY,
        q: this.searchQuery,
        page: this.page,
        begin_date: this.date,
        end_date: this.date,
      },
    });

    return results.data.response.docs;
  }

  async fetchCategoriesList() {
    const response = await axios.get(
      `${BASE_URL}news/v3/content/section-list.json`,
      {
        params: {
          'api-key': API_KEY,
        },
      }
    );

    return response.data.results;
  }

  async fetchByCategory() {
    const response = await axios.get(
      `${BASE_URL}news/v3/content/all/${this.category}.json`,
      {
        params: {
          'api-key': API_KEY,
        },
      }
    );

    return response.data.results;
  }

  async fetchByMostPopular() {
    const response = await axios.get(
      `${BASE_URL}mostpopular/v2/viewed/1.json`,
      {
        params: {
          'api-key': API_KEY,
        },
      }
    );

    return response.data.results;
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    if (this.page > 1) {
      this.page -= 1;
    }
    return;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
