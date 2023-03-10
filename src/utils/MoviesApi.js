class MoviesApi {
  constructor({ url, headers }) {
    this.url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}, ${res.statusText}`);
  }

  getMovies() {
    return fetch(this.url).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});
export default moviesApi;