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
  }
  
  const mainApi = new MainApi({
    url: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  export default mainApi;