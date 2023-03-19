class MainApi {
    constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
    }
  
    _checkResponse(response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject({response, text: `Ошибка: ${response.status}, ${response.statusText}`});
    }
  
    signup({ name, email, password }) {
      return fetch(`${this._url}/signup`, {
        credentials: 'include',
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ name, password, email })
      })
        .then(this._checkResponse);
    }
  
    signin({ password, email }) {
      return fetch(`${this._url}/signin`, {
        credentials: 'include',
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ password, email })
      })
        .then(this._checkResponse);
    }
  
    signout() {
      return fetch(`${this._url}/signout`, {
        credentials: 'include',
        headers: this._headers,
      })
        .then(this._checkResponse);
    }
  
    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        credentials: 'include',
        headers: this._headers
      })
        .then(this._checkResponse);
    }

    updateUser(data) {
      return fetch(`${this._url}/users/me`, {
        credentials: 'include',
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(data)
      })
        .then(this._checkResponse);
    }

    getMovies() {
      return fetch(`${this._url}/movie`, {
        credentials: 'include',
        headers: this._headers
      })
        .then(this._checkResponse);
    }
  
    removeMovie(id) {
      return fetch(`${this._url}/movie/${id}`, {
        credentials: 'include',
        method: "DELETE",
        headers: this._headers
      })
        .then(this._checkResponse);
    }
  
    saveMovie(data) {
      console.log(data.duration)
      return fetch(`${this._url}/movie`, {
        credentials: 'include',
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: "https://api.nomoreparties.co" + data.image.url,
          trailerLink: data.trailerLink,
          thumbnail: "https://api.nomoreparties.co" + data.image.url,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
        }),
      })
        .then(this._checkResponse);
    }
  }
  
  const mainApi = new MainApi({
    url: "http://localhost:3002/api",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  export default mainApi;